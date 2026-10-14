#!/usr/bin/env node
// Kontrola treści strony przed publikacją: składnia plików, identyfikatory i numeracja zadań,
// poprawność HTML oraz wzorów TeX (sprawdzanych tą samą wersją MathJax, której używa strona).
//
// Uruchomienie lokalne (Node.js 18 lub nowszy):   cd tools && npm install && node check.mjs
// W GitHub Actions uruchamia się samo po każdym pushu (.github/workflows/check.yml).
// Kod wyjścia 1 oznacza błędy; ostrzeżenia go nie zmieniają.

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { runChecks } from './check-core.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const inCI = process.env.GITHUB_ACTIONS === 'true';
const read = (rel) => fs.readFileSync(path.join(root, rel), 'utf8');

function listFiles(dir) {
  const out = [];
  for (const e of fs.readdirSync(path.join(root, dir), { withFileTypes: true })) {
    if (e.name === '.git' || e.name === 'node_modules') continue;
    const rel = dir ? dir + '/' + e.name : e.name;
    if (e.isDirectory()) out.push(...listFiles(rel)); else out.push(rel);
  }
  return out;
}

const indexHtml = read('index.html');
const repoFiles = listFiles('');
const isLocal = (u) => !/^(?:[a-z]+:)?\/\//i.test(u);
const scripts = [...indexHtml.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g)].map((m) => m[1]).filter((s) => isLocal(s) && repoFiles.includes(s));

// numer linii z komunikatu błędu V8 ("plik:linia")
const lineFromError = (e, file) => {
  const m = new RegExp(file.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ':(\\d+)').exec(String(e && e.stack));
  return m ? +m[1] : 0;
};

// 1. wykonujemy skrypty strony w oddzielnym kontekście (tak jak przeglądarka, w kolejności z index.html)
const sandbox = { window: {} };
const context = vm.createContext(sandbox);
const files = {};
const loadErrors = [];
for (const rel of scripts) {
  files[rel] = read(rel);
  try {
    new vm.Script(files[rel], { filename: rel }).runInContext(context);
  } catch (e) {
    loadErrors.push({ file: rel, line: lineFromError(e, rel), message: e.name + ': ' + e.message });
  }
}
// skrypty wbudowane w index.html: tylko składnia (nie uruchamiamy ich)
for (const m of indexHtml.matchAll(/<script\b(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)) {
  const before = indexHtml.slice(0, m.index + m[0].indexOf('>') + 1).split('\n').length - 1;
  try {
    new vm.Script(m[1], { filename: 'index.html' });
  } catch (e) {
    loadErrors.push({ file: 'index.html', line: before + lineFromError(e, 'index.html'), message: e.name + ': ' + e.message + ' (skrypt wbudowany w index.html)' });
  }
}

// 2. sprawdzanie wzorów: MathJax 3.2.2 bez pakietu noundefined (nieznane makro ma być błędem,
//    a nie czerwonym napisem jak na stronie); pakiety dostępne na stronie przez autoload
const PACKAGES = ['base', 'ams', 'newcommand', 'configmacros', 'action', 'bbox', 'boldsymbol', 'braket', 'cancel',
  'color', 'enclose', 'extpfeil', 'html', 'mhchem', 'unicode', 'verb'];
let texCheck = null;
try {
  const require = createRequire(import.meta.url);
  const { mathjax } = require('mathjax-full/js/mathjax.js');
  const { TeX } = require('mathjax-full/js/input/tex.js');
  const { SVG } = require('mathjax-full/js/output/svg.js');
  const { liteAdaptor } = require('mathjax-full/js/adaptors/liteAdaptor.js');
  const { RegisterHTMLHandler } = require('mathjax-full/js/handlers/html.js');
  require('mathjax-full/js/input/tex/AllPackages.js');
  const adaptor = liteAdaptor();
  RegisterHTMLHandler(adaptor);
  const doc = mathjax.document('', { InputJax: new TeX({ packages: PACKAGES }), OutputJax: new SVG({ fontCache: 'none' }) });
  texCheck = (tex, display) => {
    const m = /data-mjx-error="([^"]*)"/.exec(adaptor.outerHTML(doc.convert(tex, { display })));
    return m ? m[1].replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&') : null;
  };
} catch (e) {
  console.warn('Uwaga: pomijam sprawdzanie wzorów TeX (' + String(e.message).split('\n')[0] + ').');
  console.warn('       Zainstaluj zależności: cd tools && npm install');
}

const { problems, stats } = runChecks({ indexHtml, files, repoFiles, data: sandbox.window, loadErrors }, texCheck);
if (!texCheck && inCI) problems.push({ level: 'error', file: 'tools/check.mjs', line: 0, message: 'Nie udało się załadować MathJax, więc wzory nie zostały sprawdzone.' });

// 3. raport (w GitHub Actions także jako adnotacje przy plikach)
const escape = (s) => String(s).replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A');
for (const p of problems) {
  const where = p.file ? p.file + (p.line ? ':' + p.line : '') : '';
  console.log((p.level === 'error' ? 'BŁĄD   ' : 'uwaga  ') + where + '  ' + p.message);
  if (inCI) console.log('::' + p.level + (p.file ? ' file=' + p.file + (p.line ? ',line=' + p.line : '') : '') + '::' + escape(p.message));
}
const errors = problems.filter((p) => p.level === 'error').length;
const warnings = problems.length - errors;
const summary = 'Sprawdzono: ' + stats.files + ' plików, ' + stats.topics + ' działów, ' + stats.tasks + ' zadań, ' +
  stats.theory + ' plików teorii, ' + stats.formulas + ' wzorów' + (stats.texChecked ? '' : ' (bez sprawdzania TeX)') + '.';
const verdict = errors ? 'Błędy: ' + errors + ', ostrzeżenia: ' + warnings + '.' : 'Wszystko w porządku (ostrzeżenia: ' + warnings + ').';
console.log('\n' + summary + '\n' + verdict);
if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, '### Kontrola treści\n\n' + summary + '\n\n**' + verdict + '**\n');
process.exit(errors ? 1 : 0);

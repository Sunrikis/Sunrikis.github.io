const fs = require('node:fs');
const vm = require('node:vm');
const context = {window:{}};
vm.runInNewContext(fs.readFileSync('js/profile.js','utf8'),context);
const p = context.window.PROFILE;
const e = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const html = `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${e(p.name)} · 主题概览</title><link rel="icon" href="assets/favicon.svg"><style>body{font:19px/1.9 'Segoe UI','Microsoft YaHei',sans-serif;color:#303040;background:#edf4e9;margin:0}main{max-width:850px;margin:30px auto;padding:45px;background:white}h1{font-size:32px}h2{font-size:24px;color:#35674f;margin-top:32px}h3{font-size:20px}a{color:#35674f}.bar{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}.bar button{font:inherit;background:#35674f;border:0;border-radius:8px;color:white;padding:8px 15px;cursor:pointer}article{break-inside:avoid}.note{font-size:16px;color:#6e6378}@media(max-width:650px){main{margin:0;padding:24px}}@media print{body{background:white}main{margin:0;padding:0}.bar{display:none}@page{margin:18mm}}</style></head><body><main><div class="bar"><a href="index.html">← 返回个人主页</a><button type="button" onclick="window.print()">打印 / 保存 PDF</button></div><h1>${e(p.name)}</h1><p>${e(p.role)}</p>${p.bio.map(x=>`<p>${e(x)}</p>`).join('')}<h2>论文一览</h2>${p.publications.map(x=>`<article><h3>${e(x.title)}</h3><p>${e(x.venue)} · ${e(x.year)}</p></article>`).join('')}<h2>学习工具箱</h2>${p.skills.map(x=>`<p><strong>${e(x.title)}：</strong>${x.items.map(e).join('、')}</p>`).join('')}</main></body></html>`;
fs.writeFileSync('cv.html',html);
console.log('Generated anonymous cv.html');

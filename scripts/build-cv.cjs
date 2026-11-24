const fs = require("node:fs");
const vm = require("node:vm");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, "js/profile.js"), "utf8"), context);
const profile = context.window.PROFILE;

const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const escape = value => String(value).replace(/[&<>"']/g, character => entities[character]);
const paragraphs = items => items.map(item => `<p>${escape(item)}</p>`).join("\n");
const conference = paper => `${escape(paper.venue)} ${escape(paper.year)}`;

const homepageBlocks = {
  meta: `<meta name="description" content="${escape(profile.description)}">`,
  publications: profile.publications.map(paper => `<div class="publication-stage">
  <img class="chibi-peeker" src="assets/koishi-chibi-peeker.webp" alt="Q版古明地恋趴在卡片边缘眨眼微笑" width="640" height="545" loading="lazy">
  <article class="publication">
    <div class="paper-date">
      <time class="paper-year" datetime="${escape(paper.year)}">${escape(paper.year)}</time>
      <span class="paper-venue">${escape(paper.venue)}</span>
    </div>
    <div class="paper-copy">
      <p class="paper-status">${escape(paper.status)}</p>
      <h3 lang="en">${escape(paper.title)}</h3>
    </div>
  </article>
</div>`).join("\n"),
  interests: `<div class="interest-grid">
${profile.interests.map(item => `  <article class="interest-card">
    <div class="interest-head">
      <p class="interest-category">${escape(item.category)}</p>
      <div class="${escape(item.artClass || "interest-art")}"${item.interactive ? ' data-pixel-hop="true"' : ""}>
        <img src="${escape(item.art)}" alt="${escape(item.artAlt)}" width="${escape(item.artWidth)}" height="${escape(item.artHeight)}" loading="lazy">
      </div>
    </div>
    <h3>${escape(item.title)}</h3>
    <p>${escape(item.description)}</p>
    <ul class="interest-tags" aria-label="${escape(item.category)}关键词">
${item.tags.map(tag => `      <li>${escape(tag)}</li>`).join("\n")}
    </ul>
  </article>`).join("\n")}
</div>`,
  notes: `<div class="note-grid">
${profile.notes.map(note => `  <article class="note">
    <p class="note-category">${escape(note.category)}</p>
    <h3>${escape(note.title)}</h3>
    <p>${escape(note.description)}</p>
  </article>`).join("\n")}
</div>`,
  about: `<div class="about-copy">
${paragraphs(profile.bio).split("\n").map(line => "  " + line).join("\n")}
</div>`
};

const indexPath = path.join(root, "index.html");
let homepage = fs.readFileSync(indexPath, "utf8");
for (const [section, html] of Object.entries(homepageBlocks)) {
  const block = new RegExp(`^([ \\t]*)(<!-- profile:${section}:start -->)\\r?\\n[\\s\\S]*?^[ \\t]*(<!-- profile:${section}:end -->)`, "m");
  if (!block.test(homepage)) throw new Error(`Missing homepage profile block: ${section}`);
  homepage = homepage.replace(block, (_, indent, start, end) =>
    [start, ...html.split("\n"), end].map(line => indent + line).join("\n")
  );
}
fs.writeFileSync(indexPath, homepage);

const overview = `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escape(profile.name)} · 主题概览</title>
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="css/styles.css?v=garden-20261124-v2">
  <script>
    try {
      const theme = localStorage.getItem("theme");
      if (theme === "dark" || (!theme && matchMedia("(prefers-color-scheme: dark)").matches)) {
        document.documentElement.dataset.theme = "dark";
      }
    } catch {}
  </script>
  <style>
    .overview-wrap { width: min(92%, 820px); margin: clamp(28px, 5vw, 56px) auto; }
    .overview-actions { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 24px; }
    .overview-sheet {
      padding: clamp(28px, 5vw, 56px);
      border: 1px solid var(--line);
      border-radius: 24px;
      background: var(--surface);
      box-shadow: var(--shadow-md);
    }
    .overview-sheet header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      padding-bottom: 24px;
      border-bottom: 1px solid var(--line);
    }
    .overview-seal {
      width: 88px;
      height: auto;
      flex: none;
      opacity: .92;
      filter: drop-shadow(0 4px 10px rgba(24, 46, 32, .12));
    }
    .overview-sheet h1 {
      font: italic 700 clamp(40px, 6.5vw, 72px)/1.02 var(--serif-latin);
      margin-bottom: 12px;
      letter-spacing: -.02em;
    }
    .overview-sheet header p { color: var(--accent); font-size: 17px; font-weight: 500; }
    .overview-sheet section { margin-top: 30px; }
    .overview-sheet h2 {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 24px;
      margin: 0 0 14px;
    }
    .overview-sheet h2::before {
      width: 18px;
      height: 1.5px;
      background: linear-gradient(90deg, var(--gold-bright), var(--accent));
      content: "";
    }
    .overview-sheet article {
      break-inside: avoid;
      padding: 16px 20px;
      border: 1px solid var(--line);
      border-radius: 14px;
      background: color-mix(in srgb, var(--page) 55%, var(--surface));
      margin-bottom: 12px;
    }
    .overview-sheet h3 { font-size: 19px; font-family: var(--serif); margin-bottom: 4px; }
    .overview-sheet article h3[lang="en"] { font-family: var(--serif-latin); }
    .overview-sheet article p, .overview-sheet > section > p { color: var(--muted); }
    .overview-sheet p + p { margin-top: 10px; }
    @media (max-width: 520px) {
      .overview-seal { width: 68px; }
    }
    @media print {
      @page { margin: 16mm; }
      body { background: white; color: black; font-size: 11pt; line-height: 1.55; }
      .overview-wrap { width: 100%; margin: 0; }
      .overview-actions { display: none; }
      .overview-sheet { padding: 0; border: 0; border-radius: 0; background: transparent; box-shadow: none; }
      .overview-sheet header { border-bottom: 1px solid #bbb; padding-bottom: 12pt; }
      .overview-seal { width: 58pt; filter: none; }
      .overview-sheet h1 { font-size: 28pt; color: black; }
      .overview-sheet header p { color: #333; font-size: 11pt; }
      .overview-sheet h2 { font-size: 14pt; color: black; break-after: avoid; margin-top: 16pt; }
      .overview-sheet h2::before { display: none; }
      .overview-sheet article { padding: 0; border: 0; background: transparent; margin-bottom: 10pt; }
      .overview-sheet h3 { font-size: 11.5pt; color: black; }
      .overview-sheet article p, .overview-sheet > section > p { color: #333; }
    }
  </style>
</head>
<body>
  <main class="overview-wrap">
    <div class="overview-actions">
      <a class="text-link" href="index.html">← 返回个人主页</a>
      <button class="button primary" type="button" onclick="window.print()">打印 / 保存 PDF</button>
    </div>
    <div class="overview-sheet">
      <header>
        <div>
          <h1>${escape(profile.name)}</h1>
          <p>${escape(profile.role)}</p>
        </div>
        <img class="overview-seal" src="assets/koishi-exlibris-stamp.webp" alt="无意识庭院藏书票印章" width="560" height="559">
      </header>
      <section>
        <h2>关于</h2>
        ${paragraphs(profile.bio).split("\n").join("\n        ")}
      </section>
      <section>
        <h2>研究与论文</h2>
        ${profile.publications.map(paper => `<article>
          <h3 lang="en">${escape(paper.title)}</h3>
          <p>${conference(paper)} · ${escape(paper.status)}</p>
        </article>`).join("\n        ")}
      </section>
      <section>
        <h2>兴趣与日常</h2>
        ${profile.interests.map(item => `<article>
          <h3>${escape(item.category)} · ${escape(item.title)}</h3>
          <p>${escape(item.description)}</p>
        </article>`).join("\n        ")}
      </section>
      <section>
        <h2>学习札记</h2>
        ${profile.notes.map(note => `<article>
          <h3>${escape(note.category)} · ${escape(note.title)}</h3>
          <p>${escape(note.description)}</p>
        </article>`).join("\n        ")}
      </section>
    </div>
  </main>
</body>
</html>
`;
fs.writeFileSync(path.join(root, "cv.html"), overview);
console.log("Updated homepage and printable overview.");

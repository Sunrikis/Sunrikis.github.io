"use strict";

const themeToggle = document.getElementById("theme-toggle");
const themeColor = document.querySelector('meta[name="theme-color"]');

function syncTheme() {
  const dark = document.documentElement.dataset.theme === "dark";
  themeColor.content = dark ? "#111a14" : "#f5f4ea";
  themeToggle.setAttribute("aria-pressed", String(dark));
  themeToggle.setAttribute("aria-label", dark ? "切换浅色主题" : "切换深色主题");
}

themeToggle.addEventListener("click", () => {
  const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem("theme", theme); } catch {}
  syncTheme();
});
syncTheme();
themeToggle.hidden = false;

const readingToggle = document.getElementById("reading-toggle");
readingToggle.addEventListener("click", () => {
  const reading = document.body.classList.toggle("reading");
  readingToggle.setAttribute("aria-pressed", String(reading));
  readingToggle.textContent = reading ? "退出专注" : "专注阅读";
});
readingToggle.hidden = false;

const MODE_COPY = {
  blur: {
    label: "模拟模糊",
    caption: "图像退化示意，左侧通过滤镜模拟散焦模糊。"
  },
  haze: {
    label: "模拟雾霭",
    caption: "图像退化示意，左侧通过滤镜与雾层模拟雾霭漫射。"
  },
  rain: {
    label: "模拟雨丝",
    caption: "图像退化示意，左侧通过滤镜与叠加层模拟雨丝斜落。"
  },
  snow: {
    label: "模拟飞雪",
    caption: "图像退化示意，左侧通过滤镜与雪粒层模拟飞雪飘零。"
  }
};

const SCENES = {
  koishi: {
    src: "assets/koishi-impasto-window.webp",
    alt: "厚涂油画风格的古明地恋倚在雨后放晴的玻璃花房窗边，远方可见钟楼、湖面与金色银杏叶",
    position: "center 28%"
  },
  study: {
    src: "assets/anime-study.webp",
    alt: "窗边读书的女孩，远处有塔楼、湖面与樱花",
    position: "center 48%"
  }
};

const compare = document.getElementById("compare");
const comparison = compare.parentElement;
const blurLabel = comparison.querySelector(".before");
const originalLabel = comparison.querySelector(".after");
const compareCaption = document.getElementById("compare-caption");
const sharpImg = document.getElementById("compare-sharp-img");
const blurImg = document.getElementById("compare-blur-img");
const modeGroup = document.getElementById("degrade-modes");
const modeButtons = modeGroup ? [...modeGroup.querySelectorAll("button[data-mode]")] : [];
const sceneGroup = document.getElementById("scene-modes");
const sceneButtons = sceneGroup ? [...sceneGroup.querySelectorAll("button[data-scene]")] : [];

function currentModeCopy() {
  return MODE_COPY[comparison.dataset.mode] || MODE_COPY.blur;
}

function syncComparison() {
  const value = compare.valueAsNumber;
  const { label } = currentModeCopy();
  comparison.style.setProperty("--split", `${value}%`);
  compare.setAttribute("aria-valuetext", `${label} ${value}%，原始插画 ${100 - value}%`);
  blurLabel.hidden = value < 24;
  originalLabel.hidden = value > 76;
}

function setDegradeMode(mode) {
  if (!MODE_COPY[mode]) return;
  comparison.dataset.mode = mode;
  blurLabel.textContent = MODE_COPY[mode].label;
  if (compareCaption) compareCaption.textContent = MODE_COPY[mode].caption;
  for (const button of modeButtons) {
    button.setAttribute("aria-pressed", String(button.dataset.mode === mode));
  }
  syncComparison();
}

function setScene(sceneKey) {
  const scene = SCENES[sceneKey];
  if (!scene || !sharpImg || !blurImg) return;
  sharpImg.src = scene.src;
  sharpImg.alt = scene.alt;
  blurImg.src = scene.src;
  comparison.style.setProperty("--img-pos", scene.position);
  for (const button of sceneButtons) {
    button.setAttribute("aria-pressed", String(button.dataset.scene === sceneKey));
  }
}

for (const button of modeButtons) {
  button.addEventListener("click", () => setDegradeMode(button.dataset.mode));
}
for (const button of sceneButtons) {
  button.addEventListener("click", () => setScene(button.dataset.scene));
}

compare.addEventListener("input", syncComparison);
setDegradeMode("blur");
setScene("koishi");
compare.hidden = false;
comparison.querySelector(".comparison-handle").hidden = false;
document.getElementById("compare-instructions").hidden = false;
if (modeGroup) modeGroup.hidden = false;
if (sceneGroup) sceneGroup.hidden = false;

// Subtle playful pixel hop when clicking Pixel Koishi
const pixelArt = document.querySelector("[data-pixel-hop]");
if (pixelArt) {
  pixelArt.addEventListener("click", () => {
    pixelArt.classList.remove("is-hopping");
    void pixelArt.offsetWidth;
    pixelArt.classList.add("is-hopping");
  });
  pixelArt.addEventListener("animationend", () => pixelArt.classList.remove("is-hopping"));
}

const header = document.getElementById("site-header");
const progressBar = document.getElementById("scroll-progress");
const navLinks = [...document.querySelectorAll("nav a[data-nav]")];
const sections = navLinks
  .map(link => ({ link, el: document.getElementById(link.dataset.nav) }))
  .filter(item => item.el);

let scrollFrame = 0;
function syncScrollUI() {
  scrollFrame = 0;
  const y = window.scrollY;
  const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const ratio = Math.min(1, Math.max(0, y / maxScroll));

  if (header) header.classList.toggle("is-scrolled", y > 16);
  if (progressBar) progressBar.style.transform = `scaleX(${ratio.toFixed(4)})`;

  let active = null;
  const probe = y + window.innerHeight * 0.34;
  for (const item of sections) {
    if (item.el.offsetTop <= probe) active = item;
  }
  if (y + window.innerHeight >= document.documentElement.scrollHeight - 24 && sections.length) {
    active = sections[sections.length - 1];
  }
  for (const item of sections) {
    const isCurrent = item === active;
    item.link.classList.toggle("is-active", isCurrent);
    if (isCurrent) item.link.setAttribute("aria-current", "location");
    else item.link.removeAttribute("aria-current");
  }
}

function scheduleScrollSync() {
  if (!scrollFrame) scrollFrame = requestAnimationFrame(syncScrollUI);
}
window.addEventListener("scroll", scheduleScrollSync, { passive: true });
window.addEventListener("resize", scheduleScrollSync, { passive: true });
syncScrollUI();

document.getElementById("year").textContent = new Date().getFullYear();

"use strict";
(() => {
  const p = window.PROFILE;
  if (!p) return;
  const themeToggle = document.getElementById("theme-toggle");
  const syncTheme = () => {
    const dark = document.documentElement.dataset.theme === "dark";
    themeToggle.setAttribute("aria-pressed", String(dark));
    themeToggle.setAttribute("aria-label", dark ? "切换浅色主题" : "切换深色主题");
    document.querySelector('meta[name="theme-color"]').content = dark ? "#17251f" : "#edf4e9";
  };
  themeToggle.addEventListener("click", () => {
    const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("theme", theme); } catch {}
    syncTheme();
  });
  syncTheme();
  const readingToggle = document.getElementById("reading-toggle");
  readingToggle.addEventListener("click", () => {
    const reading = document.body.classList.toggle("reading");
    readingToggle.setAttribute("aria-pressed", String(reading));
    readingToggle.textContent = reading ? "返回小宇宙" : "专注阅读";
    document.getElementById("about").scrollIntoView({ behavior: "instant" });
  });
  const $ = (id) => document.getElementById(id);
  const text = (id, value) => { $(id).textContent = value || ""; };
  const el = (tag, className, value) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (value) node.textContent = value;
    return node;
  };
  // Allow HTTP(S) and relative files, but never executable URL schemes.
  const safeURL = (value) => {
    if (typeof value !== "string" || !value.trim()) return null;
    try {
      const url = new URL(value, location.href);
      return ["https:", "http:"].includes(url.protocol) ||
        (url.protocol === "file:" && location.protocol === "file:") ? url.href : null;
    } catch { return null; }
  };
  const link = (label, url, className) => {
    const href = safeURL(url);
    if (!href) return null;
    const a = el("a", className, label);
    a.href = href;
    if (/^https?:/.test(href)) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
    return a;
  };
  const links = (parent, items) => (items || []).forEach((item) => {
    const a = link(item.label + " ↗", item.url);
    if (a) parent.append(a);
  });
  const hideSection = (id) => {
    $(id).hidden = true;
    document.querySelectorAll(`a[href="#${id}"]`).forEach(a => { a.hidden = true; });
  };
  document.title = `${p.name} · 个人学术主页`;
  document.querySelector("#hero-title>span").textContent = p.name;
  document.querySelector('meta[name="description"]').content = p.description;
  for (const [id, value] of Object.entries({ name: p.name, "native-name": p.nativeName, initials: p.initials, role: p.role, affiliation: p.affiliation, location: p.location, focus: p.focus, "contact-note": p.contactNote, "footer-name": p.name, year: new Date().getFullYear().toString() })) text(id, value);
  ["native-name", "affiliation", "location"].forEach(id => { if (!$(id).textContent) $(id).hidden = true; });
  if (!p.focus) $("focus").hidden = true;
  const avatar = safeURL(p.avatar);
  if (avatar) {
    const img = el("img"); img.src = avatar; img.alt = `${p.name} 的照片`;
    img.addEventListener("load", () => { $("initials").hidden = true; $("portrait").classList.add("has-photo"); });
    img.addEventListener("error", () => img.remove());
    $("portrait").append(img);
  }
  links($("profile-links"), p.links);
  const validEmail = typeof p.email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email);
  if (validEmail) {
    $("contact-email").href = `mailto:${encodeURIComponent(p.email)}`;
    text("contact-email", p.email + " ↗"); $("contact-email").hidden = false;
    const email = el("a", "", "Email ↗"); email.href = $("contact-email").href; $("profile-links").prepend(email);
  }
  const cv = safeURL(p.cv);
  if (cv) { $("cv-link").href = cv; $("cv-link").hidden = false; }
  $("bio").replaceChildren(...(p.bio || []).map((paragraph) => el("p", "", paragraph)));
  (p.stats || []).forEach(item => {
    const stat = el("div", "stat");
    stat.append(el("strong", "", item.value), el("span", "", item.label));
    $("stats").append(stat);
  });
  (p.skills || []).forEach(item => {
    const group = el("div", "skill-group");
    const tags = el("div", "tags");
    item.items.forEach(tag => tags.append(el("span", "", tag)));
    group.append(el("h3", "", item.title), tags); $("skill-list").append(group);
  });
  (p.publications || []).forEach((item) => {
    const article = el("article", "publication");
    article.append(el("span", "pub-year", item.year));
    const body = el("div", "pub-body");
    if (item.placeholder) body.append(el("span", "sample-label", "示例 · 待替换"));
    body.append(el("h3", "", item.title), el("p", "venue", item.venue));
    if (item.summary) body.append(el("p", "summary", item.summary));
    const actions = el("div", "paper-links"); links(actions, item.links); body.append(actions);
    if (item.bibtex) {
      const details = el("details", "citation");
      const pre = el("pre", "", item.bibtex);
      const button = el("button", "copy-button", "复制引用"); button.type = "button";
      const status = el("span", "copy-status"); status.setAttribute("role", "status");
      button.addEventListener("click", async () => {
        try { await navigator.clipboard.writeText(item.bibtex); status.textContent = "已复制"; }
        catch { status.textContent = "请选中上方引用文本手动复制。"; }
      });
      details.append(el("summary", "", "BibTeX 引用"), pre, button, status); body.append(details);
    }
    article.append(body); $("publication-list").append(article);
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        document.querySelectorAll("nav a").forEach(a => {
          const active = a.hash === `#${entry.target.id}`;
          a.classList.toggle("active", active);
          if (active) a.setAttribute("aria-current", "location");
          else a.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-5% 0px -65% 0px", threshold: 0 });
    document.querySelectorAll("main section:not([hidden])").forEach(section => observer.observe(section));
  }
})();

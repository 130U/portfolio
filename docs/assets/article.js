(function () {
  "use strict";

  const sources = {
    zh: [
      "./content/README.zh-CN.md",
      "../../research/2026-08-02-pi0-vla-flow/README.zh-CN.md",
    ],
    en: [
      "./content/README.en.md",
      "../../research/2026-08-02-pi0-vla-flow/README.en.md",
    ],
  };

  async function fetchFirst(paths) {
    let lastError;
    for (const path of paths) {
      try {
        const response = await fetch(path, { cache: "no-cache" });
        if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
        return await response.text();
      } catch (error) {
        lastError = error;
      }
    }
    throw lastError || new Error("No readable content source was found.");
  }

  function extractTitle(markdown, fallback) {
    return markdown.match(/^##?\s+(.+)$/m)?.[1]?.replace(/\*\*/g, "") || fallback;
  }

  function pairSections(zhSource, enSource) {
    const zhSections = window.PortfolioMarkdown.splitByAnchors(zhSource);
    const enSections = window.PortfolioMarkdown.splitByAnchors(enSource);
    const zhMap = new Map(zhSections.map((section) => [section.id, section]));
    const enMap = new Map(enSections.map((section) => [section.id, section]));
    const order = [...zhSections.map((section) => section.id)];
    enSections.forEach((section) => {
      if (!order.includes(section.id)) order.push(section.id);
    });
    return order.map((id) => ({ id, zh: zhMap.get(id), en: enMap.get(id) }));
  }

  function renderPairs(pairs) {
    const reader = document.querySelector("#bilingual-reader");
    const fragment = document.createDocumentFragment();
    const tocItems = [];

    pairs.forEach((pair, index) => {
      const row = document.createElement("section");
      row.className = "bilingual-section";
      row.dataset.sectionId = pair.id;
      row.id = `section-${pair.id}`;

      ["zh", "en"].forEach((language) => {
        const pane = document.createElement("div");
        pane.className = `language-pane language-${language}`;
        pane.lang = language === "zh" ? "zh-CN" : "en";
        pane.dataset.languagePane = language;
        const source = pair[language]?.markdown || "";
        const rendered = window.PortfolioMarkdown.render(source, {
          skipFirstHeading: index === 0,
          sectionId: `${pair.id}-${language}`,
        });
        pane.innerHTML = rendered.html || `<p class="missing-translation">${language === "zh" ? "此段尚无中文内容。" : "English translation pending."}</p>`;
        row.appendChild(pane);

        const firstHeading = rendered.headings.find((heading) => heading.level <= 2);
        if (firstHeading) {
          const existing = tocItems.find((item) => item.id === pair.id) || { id: pair.id };
          existing[language] = firstHeading.label;
          if (!tocItems.includes(existing)) tocItems.push(existing);
        }
      });

      fragment.appendChild(row);
    });

    reader.replaceChildren(fragment);
    return tocItems;
  }

  function renderToc(items) {
    const toc = document.querySelector("#article-toc");
    const list = document.createElement("ol");
    items.forEach((item) => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      const zhLabel = document.createElement("span");
      const enLabel = document.createElement("span");
      link.href = `#section-${item.id}`;
      zhLabel.dataset.languageCopy = "zh";
      zhLabel.textContent = item.zh || item.en || item.id;
      enLabel.dataset.languageCopy = "en";
      enLabel.textContent = item.en || item.zh || item.id;
      enLabel.hidden = true;
      link.append(zhLabel, enLabel);
      li.appendChild(link);
      list.appendChild(li);
    });
    toc.replaceChildren(list);
  }

  function refreshMath() {
    if (window.MathJax?.typesetPromise) {
      window.MathJax.typesetClear?.();
      window.MathJax.typesetPromise([document.querySelector("#bilingual-reader")]).catch(() => {});
    }
  }

  function observeSections() {
    if (!("IntersectionObserver" in window)) return;
    const links = new Map(
      [...document.querySelectorAll("#article-toc a")].map((link) => [link.hash.slice(1), link]),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        links.forEach((link) => link.removeAttribute("aria-current"));
        links.get(visible.target.id)?.setAttribute("aria-current", "location");
      },
      { rootMargin: "-20% 0px -65%", threshold: [0, 0.2, 0.5] },
    );
    document.querySelectorAll(".bilingual-section").forEach((section) => observer.observe(section));
  }

  async function boot() {
    const shell = document.querySelector(".reader-shell");
    const status = document.querySelector("#load-status");
    try {
      const [zhSource, enSource] = await Promise.all([
        fetchFirst(sources.zh),
        fetchFirst(sources.en),
      ]);
      const pairs = pairSections(zhSource, enSource);
      const tocItems = renderPairs(pairs);
      renderToc(tocItems);
      document.title = `${extractTitle(zhSource, "π₀")} — Theodore Ouyang`;
      status.remove();
      shell.setAttribute("aria-busy", "false");
      window.PortfolioLanguage?.apply?.(window.PortfolioLanguage.current());
      refreshMath();
      observeSections();
    } catch (error) {
      shell.setAttribute("aria-busy", "false");
      status.classList.add("load-error");
      const heading = document.createElement("strong");
      heading.textContent = "Content could not be loaded.";
      status.replaceChildren(
        heading,
        document.createElement("br"),
        document.createTextNode(String(error.message || error)),
      );
    }
  }

  document.addEventListener("portfolio:languagechange", refreshMath);
  window.addEventListener("mathjax:ready", refreshMath);
  window.addEventListener("DOMContentLoaded", boot);
})();

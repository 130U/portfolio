(function () {
  "use strict";

  const escapeHtml = (value) =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const slugify = (value) =>
    value
      .toLowerCase()
      .replace(/<[^>]+>/g, "")
      .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
      .replace(/^-+|-+$/g, "") || "section";

  function renderInline(source) {
    const stash = [];
    const hold = (html) => {
      const token = `\u0000${stash.length}\u0000`;
      stash.push(html);
      return token;
    };

    let value = String(source);
    value = value.replace(/`([^`]+)`/g, (_, code) => hold(`<code>${escapeHtml(code)}</code>`));
    value = value.replace(/\$([^$\n]+)\$/g, (_, tex) => hold(`<span class="math-inline">\\(${escapeHtml(tex)}\\)</span>`));
    value = escapeHtml(value);
    value = value.replace(/\[([^\]]+)\]\(([^\s)]+)\)/g, (_, label, url) => {
      const allowed = /^(?:https?:\/\/|\.\.?\/|\/|#)/.test(url);
      if (!allowed) return `${label} (${escapeHtml(url)})`;
      const pairedLanguage = url.endsWith("README.en.md")
        ? "?lang=en"
        : url.endsWith("README.zh-CN.md")
          ? "?lang=zh"
          : url;
      const safeUrl = escapeHtml(pairedLanguage);
      const external = /^https?:\/\//.test(pairedLanguage);
      const attributes = external ? ' target="_blank" rel="noreferrer"' : "";
      return `<a href="${safeUrl}"${attributes}>${label}</a>`;
    });
    value = value.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    value = value.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, "<em>$1</em>");
    value = value.replace(/\u0000(\d+)\u0000/g, (_, index) => stash[Number(index)]);
    return value;
  }

  function isTableDivider(line) {
    return /^\s*\|?(?:\s*:?-{3,}:?\s*\|)+\s*:?-{3,}:?\s*\|?\s*$/.test(line);
  }

  function cellsFromRow(line) {
    return line.trim().replace(/^\||\|$/g, "").split("|").map((cell) => cell.trim());
  }

  function isBlockStart(lines, index) {
    const line = lines[index] || "";
    const next = lines[index + 1] || "";
    return (
      !line.trim() ||
      /^#{1,6}\s+/.test(line) ||
      /^\s*(?:```|~~~)/.test(line) ||
      /^\s*\\\[\s*$/.test(line) ||
      /^\s*>/.test(line) ||
      /^\s*(?:[-+*]|\d+\.)\s+/.test(line) ||
      /^\s*---+\s*$/.test(line) ||
      (/^\s*\|/.test(line) && isTableDivider(next))
    );
  }

  function render(markdown, options = {}) {
    let source = String(markdown).replace(/^\uFEFF/, "").replace(/\r\n?/g, "\n");
    if (/^---\n/.test(source)) {
      const end = source.indexOf("\n---\n", 4);
      if (end !== -1) source = source.slice(end + 5);
    }

    const lines = source.split("\n");
    const html = [];
    const headings = [];
    let i = 0;
    let firstHeadingSkipped = false;

    while (i < lines.length) {
      const line = lines[i];
      if (!line.trim()) {
        i += 1;
        continue;
      }

      if (/^\s*---+\s*$/.test(line)) {
        html.push("<hr />");
        i += 1;
        continue;
      }

      const fence = line.match(/^\s*(```|~~~)(\w+)?\s*$/);
      if (fence) {
        const code = [];
        const marker = fence[1];
        const language = fence[2] || "text";
        i += 1;
        while (i < lines.length && !new RegExp(`^\\s*${marker}`).test(lines[i])) {
          code.push(lines[i]);
          i += 1;
        }
        i += 1;
        html.push(`<pre class="code-block"><code class="language-${escapeHtml(language)}">${escapeHtml(code.join("\n"))}</code></pre>`);
        continue;
      }

      if (/^\s*\\\[\s*$/.test(line)) {
        const tex = [];
        i += 1;
        while (i < lines.length && !/^\s*\\\]\s*$/.test(lines[i])) {
          tex.push(lines[i]);
          i += 1;
        }
        i += 1;
        html.push(`<div class="equation" role="img" aria-label="Mathematical equation">\\[${escapeHtml(tex.join("\n"))}\\]</div>`);
        continue;
      }

      const heading = line.match(/^(#{1,6})\s+(.+)$/);
      if (heading) {
        const level = heading[1].length;
        const label = heading[2].trim();
        if (options.skipFirstHeading && level === 1 && !firstHeadingSkipped) {
          firstHeadingSkipped = true;
          i += 1;
          continue;
        }
        const id = options.sectionId && level <= 2 ? options.sectionId : slugify(label);
        headings.push({ level, label: label.replace(/\*\*/g, ""), id });
        html.push(`<h${level} id="${escapeHtml(id)}">${renderInline(label)}</h${level}>`);
        i += 1;
        continue;
      }

      if (/^\s*>/.test(line)) {
        const quote = [];
        while (i < lines.length && /^\s*>/.test(lines[i])) {
          quote.push(lines[i].replace(/^\s*>\s?/, ""));
          i += 1;
        }
        const raw = quote.join(" ");
        let kind = "explanation";
        if (/论文事实|Evidence from the paper|Paper evidence/i.test(raw)) kind = "paper";
        if (/我的思考|My interpretation/i.test(raw)) kind = "interpretation";
        html.push(`<aside class="note note-${kind}"><p>${renderInline(raw)}</p></aside>`);
        continue;
      }

      if (/^\s*\|/.test(line) && isTableDivider(lines[i + 1] || "")) {
        const header = cellsFromRow(line);
        i += 2;
        const rows = [];
        while (i < lines.length && /^\s*\|/.test(lines[i])) {
          rows.push(cellsFromRow(lines[i]));
          i += 1;
        }
        html.push('<div class="table-scroll"><table><thead><tr>');
        header.forEach((cell) => html.push(`<th scope="col">${renderInline(cell)}</th>`));
        html.push("</tr></thead><tbody>");
        rows.forEach((row) => {
          html.push("<tr>");
          row.forEach((cell) => html.push(`<td>${renderInline(cell)}</td>`));
          html.push("</tr>");
        });
        html.push("</tbody></table></div>");
        continue;
      }

      const listMatch = line.match(/^\s*([-+*]|\d+\.)\s+(.+)$/);
      if (listMatch) {
        const ordered = /\d+\./.test(listMatch[1]);
        const tag = ordered ? "ol" : "ul";
        html.push(`<${tag}>`);
        while (i < lines.length) {
          const item = lines[i].match(/^\s*([-+*]|\d+\.)\s+(.+)$/);
          if (!item || /\d+\./.test(item[1]) !== ordered) break;
          html.push(`<li>${renderInline(item[2])}</li>`);
          i += 1;
        }
        html.push(`</${tag}>`);
        continue;
      }

      const paragraph = [line.trim()];
      i += 1;
      while (i < lines.length && !isBlockStart(lines, i)) {
        paragraph.push(lines[i].trim());
        i += 1;
      }
      html.push(`<p>${renderInline(paragraph.join(" "))}</p>`);
    }

    return { html: html.join("\n"), headings };
  }

  function splitByAnchors(markdown) {
    const source = String(markdown).replace(/\r\n?/g, "\n");
    const anchorPattern = /<a\s+id=["']([^"']+)["']\s*><\/a>/gi;
    const matches = [...source.matchAll(anchorPattern)];
    if (!matches.length) return [{ id: "article", markdown: source }];

    const sections = [];
    const preamble = source.slice(0, matches[0].index).trim();
    if (preamble) sections.push({ id: "preamble", markdown: preamble });
    matches.forEach((match, index) => {
      const start = match.index + match[0].length;
      const end = matches[index + 1]?.index ?? source.length;
      sections.push({ id: match[1], markdown: source.slice(start, end).trim() });
    });
    return sections;
  }

  window.PortfolioMarkdown = { render, splitByAnchors };
})();

interface Segment {
  id: string;
  nodes: Element[];
}

function anchorFor(node: Element) {
  if (node.matches("a[data-pair-id]")) return node as HTMLAnchorElement;
  if (node.children.length === 1 && node.firstElementChild?.matches("a[data-pair-id]")) {
    return node.firstElementChild as HTMLAnchorElement;
  }
  return null;
}

function segmentColumn(column: Element): Segment[] {
  const segments: Segment[] = [{ id: "preamble", nodes: [] }];
  for (const node of [...column.children]) {
    const anchor = anchorFor(node);
    if (anchor?.dataset.pairId) segments.push({ id: anchor.dataset.pairId, nodes: [node] });
    else segments.at(-1)?.nodes.push(node);
  }
  return segments.filter((segment) => segment.nodes.length > 0);
}

function enhancePairedReader() {
  const reader = document.querySelector<HTMLElement>("[data-paired-reader]");
  if (!reader || reader.dataset.enhanced === "true") return;

  const zhColumn = reader.querySelector<HTMLElement>('[data-language-column="zh"]');
  const enColumn = reader.querySelector<HTMLElement>('[data-language-column="en"]');
  if (!zhColumn || !enColumn) return;

  const zhSegments = segmentColumn(zhColumn);
  const enSegments = segmentColumn(enColumn);
  if (zhSegments.length !== enSegments.length) return;
  if (zhSegments.some((segment, index) => segment.id !== enSegments[index]?.id)) return;

  const grid = document.createElement("div");
  grid.className = "paired-grid";

  zhSegments.forEach((zhSegment, index) => {
    const row = document.createElement("section");
    row.className = "paired-section";
    row.dataset.pairId = zhSegment.id;
    row.id = zhSegment.id;

    const zhPane = document.createElement("div");
    zhPane.className = "paired-pane article-prose";
    zhPane.dataset.contentLang = "zh";
    zhPane.lang = "zh-CN";
    zhPane.append(...zhSegment.nodes);

    const enPane = document.createElement("div");
    enPane.className = "paired-pane article-prose";
    enPane.dataset.contentLang = "en";
    enPane.lang = "en";
    enPane.append(...(enSegments[index]?.nodes ?? []));

    row.append(zhPane, enPane);
    grid.append(row);
  });

  reader.replaceChildren(grid);
  reader.dataset.enhanced = "true";
  document.querySelectorAll<HTMLAnchorElement>("[data-pair-target]").forEach((link) => {
    link.href = `#${link.dataset.pairTarget}`;
  });
  window.dispatchEvent(new CustomEvent("portfolio:contentready"));
}

enhancePairedReader();

function setOutlineDefault() {
  const outline = document.querySelector<HTMLDetailsElement>("[data-article-outline]");
  if (!outline) return;

  if (window.matchMedia("(max-width: 82rem)").matches) outline.removeAttribute("open");
}

setOutlineDefault();

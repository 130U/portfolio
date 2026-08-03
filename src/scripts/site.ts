type LanguageMode = "zh" | "en";

const modes: LanguageMode[] = ["zh", "en"];
const root = document.documentElement;

function isMode(value: string | null | undefined): value is LanguageMode {
  return modes.includes(value as LanguageMode);
}

function currentMode(): LanguageMode {
  const value = root.dataset.languageMode;
  return isMode(value) ? value : "zh";
}

function captureReadingPosition() {
  const reader = document.querySelector<HTMLElement>("[data-paired-reader]");
  if (!reader) return null;
  const readerBox = reader.getBoundingClientRect();
  if (readerBox.bottom <= 0 || readerBox.top >= window.innerHeight) return null;

  const referenceLine = Math.min(window.innerHeight * 0.25, 160);
  const rows = [...reader.querySelectorAll<HTMLElement>(".paired-section[id]")];
  const row = rows.find((candidate) => candidate.getBoundingClientRect().bottom > referenceLine) ?? rows.at(-1);
  return row ? { id: row.id, top: row.getBoundingClientRect().top } : null;
}

function restoreReadingPosition(position: { id: string; top: number } | null) {
  if (!position) return;
  const target = document.getElementById(position.id);
  if (!target) return;
  root.dataset.restoringScroll = "true";
  const correct = () => {
    const delta = target.getBoundingClientRect().top - position.top;
    const scroller = document.scrollingElement;
    if (scroller) scroller.scrollTop += delta;
    else window.scrollTo(0, window.scrollY + delta);
  };
  correct();
  requestAnimationFrame(correct);
  window.setTimeout(() => {
    correct();
    delete root.dataset.restoringScroll;
  }, 100);
}

function applyLanguage(mode: LanguageMode, persist = false) {
  const readingPosition = persist ? captureReadingPosition() : null;
  root.dataset.languageMode = mode;
  root.lang = mode === "zh" ? "zh-CN" : "en";

  document.querySelectorAll<HTMLElement>("[data-content-lang]").forEach((element) => {
    const language = element.dataset.contentLang;
    element.hidden = language !== mode;
  });

  document.querySelectorAll<HTMLButtonElement>("[data-language-control]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.languageControl === mode));
  });

  if (persist) {
    try {
      localStorage.setItem("portfolio-language", mode);
    } catch {}

    const url = new URL(window.location.href);
    if (mode === "zh") url.searchParams.delete("lang");
    else url.searchParams.set("lang", mode);
    history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  }

  restoreReadingPosition(readingPosition);
  window.dispatchEvent(new CustomEvent("portfolio:languagechange", { detail: { mode } }));
}

function bindLanguageControls() {
  const buttons = [...document.querySelectorAll<HTMLButtonElement>("[data-language-control]")];
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const mode = button.dataset.languageControl;
      if (isMode(mode)) applyLanguage(mode, true);
    });

    button.addEventListener("keydown", (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const index = buttons.indexOf(button);
      const nextIndex = event.key === "Home"
        ? 0
        : event.key === "End"
          ? buttons.length - 1
          : event.key === "ArrowRight"
            ? (index + 1) % buttons.length
            : (index - 1 + buttons.length) % buttons.length;
      buttons[nextIndex]?.focus();
    });
  });
}

bindLanguageControls();
applyLanguage(currentMode());
root.classList.add("language-controls-ready");
window.addEventListener("portfolio:contentready", () => applyLanguage(currentMode()));

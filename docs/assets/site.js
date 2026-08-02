(() => {
  "use strict";

  const LANGUAGE_KEY = "portfolio-language";
  const MODES = ["zh", "en", "both"];
  const controls = Array.from(document.querySelectorAll("[data-language-control]"));
  const languageContent = () =>
    Array.from(
      document.querySelectorAll(
        "[data-content-lang], [data-language-copy], [data-language-pane]",
      ),
    );

  const isMode = (value) => MODES.includes(value);

  const storedMode = () => {
    try {
      const value = window.localStorage.getItem(LANGUAGE_KEY);
      return isMode(value) ? value : null;
    } catch {
      return null;
    }
  };

  const requestedMode = () => {
    const queryMode = new URLSearchParams(window.location.search).get("lang");
    return isMode(queryMode) ? queryMode : storedMode() || "both";
  };

  const saveMode = (mode) => {
    try {
      window.localStorage.setItem(LANGUAGE_KEY, mode);
    } catch {
      // Storage can be unavailable in privacy-restricted browsing contexts.
    }
  };

  const syncUrl = (mode) => {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", mode);
    window.history.replaceState({ languageMode: mode }, "", url);
  };

  const setLanguage = (mode, { updateUrl = true, focus = false } = {}) => {
    const nextMode = isMode(mode) ? mode : "both";

    document.documentElement.dataset.languageMode = nextMode;
    document.documentElement.lang = nextMode === "zh" ? "zh-CN" : nextMode === "en" ? "en" : "mul";

    languageContent().forEach((element) => {
      const contentLanguage =
        element.dataset.contentLang ||
        element.dataset.languageCopy ||
        element.dataset.languagePane;
      element.hidden = nextMode !== "both" && contentLanguage !== nextMode;
    });

    controls.forEach((button) => {
      const selected = button.dataset.languageControl === nextMode;
      button.setAttribute("aria-pressed", String(selected));
      button.tabIndex = selected ? 0 : -1;

      if (selected && focus) {
        button.focus();
      }
    });

    saveMode(nextMode);
    if (updateUrl) syncUrl(nextMode);

    document.dispatchEvent(
      new CustomEvent("portfolio:languagechange", {
        detail: { mode: nextMode },
      }),
    );
  };

  controls.forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.languageControl);
    });

    button.addEventListener("keydown", (event) => {
      const currentIndex = controls.indexOf(button);
      let targetIndex = null;

      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        targetIndex = (currentIndex + 1) % controls.length;
      } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        targetIndex = (currentIndex - 1 + controls.length) % controls.length;
      } else if (event.key === "Home") {
        targetIndex = 0;
      } else if (event.key === "End") {
        targetIndex = controls.length - 1;
      }

      if (targetIndex !== null) {
        event.preventDefault();
        setLanguage(controls[targetIndex].dataset.languageControl, { focus: true });
      }
    });
  });

  window.addEventListener("popstate", () => {
    const mode = new URLSearchParams(window.location.search).get("lang");
    setLanguage(isMode(mode) ? mode : "both", { updateUrl: false });
  });

  const year = document.querySelector("#current-year");
  if (year) year.textContent = String(new Date().getFullYear());

  window.PortfolioLanguage = {
    apply: (mode) => setLanguage(mode, { updateUrl: false }),
    current: () => document.documentElement.dataset.languageMode || requestedMode(),
  };

  setLanguage(requestedMode());
})();

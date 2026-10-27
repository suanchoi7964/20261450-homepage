(function () {
  var supportedLanguages = ["ko", "en", "zh", "ja"];
  var queryLanguage = new URLSearchParams(window.location.search).get("lang");
  var storedLanguage = localStorage.getItem("bytrip-language");
  var activeLanguage = supportedLanguages.indexOf(queryLanguage) !== -1
    ? queryLanguage
    : supportedLanguages.indexOf(storedLanguage) !== -1
      ? storedLanguage
      : "ko";

  function setLanguage(language) {
    if (supportedLanguages.indexOf(language) === -1) return;
    activeLanguage = language;
    localStorage.setItem("bytrip-language", activeLanguage);
    document.querySelectorAll("a[href]").forEach(function (link) {
      var href = link.getAttribute("href");
      if (!href || href.charAt(0) === "#") return;
      var url = new URL(href, window.location.href);
      if (url.protocol !== window.location.protocol || url.host !== window.location.host) return;
      url.searchParams.set("lang", activeLanguage);
      link.href = url.href;
    });
  }

  localStorage.setItem("bytrip-language", activeLanguage);
  window.setBytripLanguage = setLanguage;
  setLanguage(activeLanguage);
})();

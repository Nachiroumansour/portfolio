// CSS-based Light/Dark switch for a single-folder runtime
// This script loads Light theme CSS (colors/skins) and toggles it without navigating to /light/ pages.
// It reuses the existing Light CSS files to ensure visual parity.

(function () {
  var LIGHT_LINK_IDS = ['light-theme-style', 'light-theme-custom', 'light-theme-override'];
  var LIGHT_CSS_URLS = [
    // Path from any dark page to the light CSS files
    '../light/assets/css/style.css',
    '../light/assets/css/custom.css',
    // Our local override to enforce blue accents & better contrast in light mode
    'assets/css/light-override.css'
  ];

  function ensureLightCssLinks() {
    for (var i = 0; i < LIGHT_CSS_URLS.length; i++) {
      var id = LIGHT_LINK_IDS[i];
      var href = LIGHT_CSS_URLS[i];
      var link = document.getElementById(id);
      if (!link) {
        link = document.createElement('link');
        link.id = id;
        link.rel = 'stylesheet';
        link.href = href;
        // Start disabled by default; enable when theme=light
        link.disabled = true;
        document.head.appendChild(link);
      }
    }
  }

  function setTheme(theme) {
    try { localStorage.setItem('preferredTheme', theme); } catch (e) {}
    document.documentElement.setAttribute('data-theme', theme);
    var enableLight = theme === 'light';
    for (var i = 0; i < LIGHT_LINK_IDS.length; i++) {
      var link = document.getElementById(LIGHT_LINK_IDS[i]);
      if (link) link.disabled = !enableLight;
    }
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      var icon = btn.querySelector('.icon');
      if (icon) icon.textContent = enableLight ? '☀️' : '🌙';
      // Also adapt button style for contrast if you want
    }

    // Swap logos automatically if any element has class 'logo'
    var logos = document.querySelectorAll('img.logo');
    for (var j = 0; j < logos.length; j++) {
      var img = logos[j];
      // data-dark-src / data-light-src allow per-page control; fallback to defaults
      var darkSrc = img.getAttribute('data-dark-src') || 'assets/imgs/header/logoNoumz.png';
      var lightSrc = img.getAttribute('data-light-src') || 'assets/imgs/header/logo-light.png';
      img.src = enableLight ? lightSrc : darkSrc;
    }
  }

  function getStoredTheme() {
    try { return localStorage.getItem('preferredTheme') || 'dark'; } catch (e) { return 'dark'; }
  }

  document.addEventListener('DOMContentLoaded', function () {
    ensureLightCssLinks();
    // Apply stored theme on load
    setTheme(getStoredTheme());

    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', function (e) {
      if (e && e.preventDefault) e.preventDefault();
      var current = getStoredTheme();
      var next = current === 'light' ? 'dark' : 'light';
      setTheme(next);
    });
  });
})();

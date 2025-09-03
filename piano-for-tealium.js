const WHITELIST = [
  'barrons',
  'fnlondon',
  'marketwatch',
  'wsj',
  'penews',
  'mansionglobal',
];

// Safely get utag_data and environment
const utagEnv = (window.utag_data && window.utag_data['ut.env']) || 'prod';
const isProd = utagEnv === 'prod';

// Extract root domain robustly
const hostParts = window.location.hostname.split('.');
const root = hostParts.length > 1 ? hostParts[hostParts.length - 2] : hostParts[0];

let domain = 'https://www.wsj.com';
if (WHITELIST.includes(root)) {
  domain = `https://www.${isProd ? '' : 'dev.'}${root}.com`;
}

// Inject Piano script
(function injectPianoScript() {
  const scriptEl = document.createElement('script');
  scriptEl.type = 'text/javascript';
  scriptEl.defer = true;
  scriptEl.src = `${domain}/asset/piano/piano.js`;
  scriptEl.onerror = function() {
    console.error('Failed to load Piano script from:', scriptEl.src);
  };
  const targetEl = document.getElementsByTagName('script')[0] || document.body;
  targetEl.parentNode.insertBefore(scriptEl, targetEl);
})();

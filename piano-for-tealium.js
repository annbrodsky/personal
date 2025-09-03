const WHITELIST = [
  'barrons',
  'fnlondon',
  'marketwatch',
  'wsj',
  'penews',
  'mansionglobal',
];

const host = window.location.hostname;
  // const isQa = host.includes('dev.'); 
const isProd = utag_data['ut.env'] === 'prod';
const parts = host.split('.');
const root = parts[parts.length - 2];
let domain = 'https://www.wsj.com';
if (WHITELIST.includes(root)) {      
    domain = 'https://www.' + (isProd ? '' : 'dev.') + root + '.com';
}

 (function() {
    const scriptEl = document.createElement('script');
    scriptEl.type = 'text/javascript';
    scriptEl.defer = true;
    scriptEl.src = domain + '/asset/piano/piano.js';
    const targetEl = document.getElementsByTagName('script')[0];
    targetEl.parentNode.insertBefore(scriptEl, targetEl);
})();    

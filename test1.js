(async () => {
  const userData = window.entitlementsAsyncData && await window.entitlementsAsyncData;
  const swg = (window.utag_data && window.utag_data.swg) || (userData && userData.swg);
  const match = swg && swg.userState && swg.userState.match;

if (match) {
  var google_showcase_match = match;
  }
})();

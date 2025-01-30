(async () => {
  try {
    const userData = window.entitlementsAsyncData && await window.entitlementsAsyncData;
    const swg = (window.utag_data && window.utag_data.swg) || (userData && userData.swg);
    const match = swg && swg.userState && swg.userState.match;

    if (match) {
      let google_showcase_match;
      google_showcase_match = match;
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
})();

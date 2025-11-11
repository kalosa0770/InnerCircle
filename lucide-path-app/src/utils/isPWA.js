export function isPWA() {
    // For most browsers (Android / desktop Chrome)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
  
    // For Safari on iOS
    const isIOSStandalone = window.navigator.standalone === true;
  
    return isStandalone || isIOSStandalone;
  }
  
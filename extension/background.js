// Background service worker for MindsEye Chrome Agent Shell
// Captures browser-level events, applies LAW-T/Law-N, and sends to MindsEye Core

importScripts("../src/lawtAdapter.js", "../src/lawnAdapter.js", "../src/mindseyeClient.js");

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const tab = await chrome.tabs.get(activeInfo.tabId);

  const event = {
    type: "tab_activated",
    url: tab.url || "",
    title: tab.title || "",
    timestamp: new Date().toISOString()
  };

  const lawt = applyLAW_T(event);
  const lawn = applyLAW_N(lawt);

  await MindsEyeClient.sendEvent(lawn);
});

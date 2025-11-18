// In-page hooks for DOM actions, selection, and context menus

window.addEventListener("click", () => {
  const event = {
    type: "dom_click",
    path: window.location.href,
    timestamp: new Date().toISOString()
  };

  chrome.runtime.sendMessage({ event });
});

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.command === "analyzeSelection") {
    const selected = window.getSelection().toString();

    chrome.runtime.sendMessage({
      type: "selection",
      content: selected,
      timestamp: new Date().toISOString()
    });
  }
});

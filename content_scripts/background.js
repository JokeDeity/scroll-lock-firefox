let isLocked = false;

browser.browserAction.onClicked.addListener((tab) => {
  isLocked = !isLocked; // Toggle state

  browser.tabs.sendMessage(tab.id, {
    command: isLocked ? 'lock' : 'reset'
  });
});

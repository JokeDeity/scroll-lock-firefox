let isLocked = false;

function toggleScrollLock(tab) {
  isLocked = !isLocked;
  browser.tabs.sendMessage(tab.id, {
    command: isLocked ? "lock" : "reset"
  });
}

browser.browserAction.onClicked.addListener((tab) => {
  toggleScrollLock(tab);
});

browser.commands.onCommand.addListener((command) => {
  if (command === "toggle-scroll-lock") {
    browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
      if (tabs.length > 0) {
        toggleScrollLock(tabs[0]);
      }
    });
  }
});

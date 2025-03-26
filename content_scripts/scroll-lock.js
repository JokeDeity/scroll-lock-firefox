(function () {
  if (window.hasRun) return;
  window.hasRun = true;

  function scrollLock() {
    let mysty = document.getElementById('noscrollrule');
    if (mysty) {
      resetLock(); // If already locked, remove it (toggle behavior)
    } else {
      let s = document.createElement('style');
      s.type = 'text/css';
      s.id = 'noscrollrule';
      s.textContent = 'html,body{overflow:hidden !important;}';
      document.body.appendChild(s);
    }
  }

  function resetLock() {
    let mysty = document.getElementById('noscrollrule');
    if (mysty) mysty.remove();
  }

  browser.runtime.onMessage.addListener((message) => {
    if (message.command === 'lock') {
      scrollLock();
    } else if (message.command === 'reset') {
      resetLock();
    }
  });
})();

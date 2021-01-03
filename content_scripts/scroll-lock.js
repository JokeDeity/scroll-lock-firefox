(function () {
  /**
   * Check and set a global guard variable.
   * If this content script is injected into the same page again,
   * it will do nothing next time.
   */
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  /**
   * Locks the scrolling on the given tab
   */
  function scrollLock() {
    var r = 'html,body{overflow:hidden !important;}';
    var mysty = document.getElementById('noscrollrule');
    if (!mysty) {
      var s = document.createElement('style');
      s.type = 'text/css';
      s.id = 'noscrollrule';
      s.appendChild(document.createTextNode(r));
      document.body.appendChild(s);
    } else {
      mysty.remove();
    }
    void 0;
  }

  /**
   * Remove the scroll lock from the page.
   */
  function resetLock() {
    console.log('Just a placeholder reset!');
  }

  /**
   * Listen for messages from the background script.
   * Call "scrollLock()" or "reset()".
   */
  browser.runtime.onMessage.addListener((message) => {
    if (message.command === 'lock') {
      scrollLock();
    } else if (message.command === 'reset') {
      resetLock();
    }
  });
})();

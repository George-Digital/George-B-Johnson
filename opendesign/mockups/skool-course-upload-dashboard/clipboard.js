window.CopyKit = (() => {
  function fallbackCopy(html, plainText) {
    const container = document.createElement("div");
    container.setAttribute("contenteditable", "true");
    container.setAttribute("aria-hidden", "true");
    container.style.position = "fixed";
    container.style.left = "-9999px";
    container.style.top = "0";
    container.innerHTML = html;
    document.body.appendChild(container);

    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(container);
    selection.removeAllRanges();
    selection.addRange(range);

    let copied = false;
    try {
      copied = document.execCommand("copy");
    } finally {
      selection.removeAllRanges();
      container.remove();
    }

    if (!copied && navigator.clipboard?.writeText) {
      return navigator.clipboard.writeText(plainText);
    }
    if (!copied) throw new Error("Clipboard permission was denied.");
  }

  async function copyRich(html, plainText) {
    if (navigator.clipboard?.write && window.ClipboardItem) {
      const item = new ClipboardItem({
        "text/html": new Blob([html], { type: "text/html" }),
        "text/plain": new Blob([plainText], { type: "text/plain" }),
      });
      await navigator.clipboard.write([item]);
      return;
    }
    await fallbackCopy(html, plainText);
  }

  async function copyText(text) {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }
    await fallbackCopy(text, text);
  }

  return { copyRich, copyText };
})();

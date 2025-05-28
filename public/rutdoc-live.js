(function () {
  const widget = document.createElement("div");
  widget.id = "rutdoc-widget";
  widget.style = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #111;
    color: #fff;
    padding: 12px 18px;
    font-size: 14px;
    border-radius: 8px;
    z-index: 9999;
    font-family: sans-serif;
  `;
  widget.innerText = "RutDoc™ Chat — Ask Me Anything";
  document.body.appendChild(widget);
})();


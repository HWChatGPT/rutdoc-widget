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
    cursor: pointer;
  `;
  widget.innerText = "RutDoc™ Chat — Ask Me Anything";

  const modal = document.createElement("div");
  modal.style = `
    position: fixed;
    bottom: 80px;
    right: 20px;
    width: 420px;
    height: 540px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 0 12px rgba(0,0,0,0.3);
    z-index: 10000;
    display: none;
    overflow: hidden;
  `;

  const iframe = document.createElement("iframe");
  iframe.src = "https://rutdoc-chat.vercel.app";

  iframe.style = "border: none; width: 100%; height: 100%;";

  modal.appendChild(iframe);
  document.body.appendChild(widget);
  document.body.appendChild(modal);

  widget.addEventListener("click", () => {
    modal.style.display = modal.style.display === "none" ? "block" : "none";
  });
})();

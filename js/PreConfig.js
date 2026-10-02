alert(document.domain);
(function () {
  function banner() {
    var d = document.createElement("div");
    d.style.cssText = "position:fixed;top:0;left:0;right:0;box-sizing:border-box;background:#c00;color:#fff;font:bold 30px/1.5 monospace;padding:30px;z-index:2147483647;text-align:center";
    d.textContent = "XSS PROOF | " + document.domain + " | " + location.origin;
    document.body.appendChild(d);
  }
  if (document.body) banner();
  else document.addEventListener("DOMContentLoaded", banner);
})();
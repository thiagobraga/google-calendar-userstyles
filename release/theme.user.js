// ==UserScript==
// @name          Google Calendar | Thiago Braga
// @description   Live reloading styles for Google Calendar
// @version       0.0.1
// @author        Thiago Braga <contato@thiagobraga.org>
// @license       MIT
// @namespace     https://github.com/thiagobraga
// @homepageURL   https://github.com/thiagobraga/google-calendar_userstyles
// @supportURL    https://github.com/thiagobraga/google-calendar_userstyles/issues
// @updateURL     https://github.com/thiagobraga/google-calendar_userstyles/raw/master/release/theme.meta.js
// @downloadURL   https://github.com/thiagobraga/google-calendar_userstyles/raw/master/release/theme.user.js
// @run-at        document-start
// @include       http://calendar.google.com/*
// @include       https://calendar.google.com/*
// @include       http://*.calendar.google.com/*
// @include       https://*.calendar.google.com/*
// ==/UserScript==
(function() {var css = [
  "  *{font-family:Helvetica Neue,sans-serif}.HDIIVe{background-color:#363636;color:#e9e9e8}.MSZkRb .r4nke{font-size:16px}.rSoRzd{display:none}.MSZkRb,.NI2kfb>content{color:#fdfefd}.uQ1ixe .snByac{color:#9fa0a0}.I2LGc:hover,.W0m3G .r4nke{background-color:transparent}.iMprOe{color:#e6e9e4}.rF3YF{color:#e0e0e0}.qZvm2d-clz4Ic,.T8CF3c{border-bottom-color:#444}.IIB0tc .ULpymb{background-color:#454546}.ULpymb .aXBtI{top:5px}.ULpymb .cXrdqd{bottom:-7px}.OabDMe,.TUH0Sd.i8dSE.uGtG7d .r4nke,.TUH0Sd .r4nke,.TUH0Sd:focus .r4nke,.TUH0Sd:hover .r4nke{background-color:#3d5b8c}.uHMk6b{border:8px solid #363636;left:-8px;top:-8px}.uVccjd{-webkit-border-radius:1px;border-radius:1px}.N2RpBe .TCA6qd{top:6px}.OLw7vb{width:36px}",
  ""
].join("\n");
if (typeof GM_addStyle != "undefined") {
  GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
  PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
  addStyle(css);
} else {
  var node = document.createElement("style");
  node.type = "text/css";
  node.appendChild(document.createTextNode(css));
  var heads = document.getElementsByTagName("head");
  if (heads.length > 0) {
    heads[0].appendChild(node);
  } else {
    // no head yet, stick it whereever
    document.documentElement.appendChild(node);
  }
}
})();

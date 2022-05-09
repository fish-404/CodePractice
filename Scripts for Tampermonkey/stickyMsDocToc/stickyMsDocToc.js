// ==UserScript==
// @name         stickyMsDocToc
// @namespace    mailto:fish404hsif@gmail.com
// @version      0.1
// @description  Sticky Microsoft Documents right sidebar TOC block
// @author       Fish__404
// @match        *://docs.microsoft.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    try {
      document.getElementById("affixed-right-container").setAttribute("style", "position: sticky; top: 0");
    }
    catch {} // not all page has right sidebar TOC block
})();

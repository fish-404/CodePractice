// ==UserScript==
// @name         stickyMsDocToc
// @namespace    mailto:fish404hsif@gmail.com
// @version      0.2
// @description  Sticky Microsoft Documents right sidebar TOC block
// @description:zh 固定微软文档右侧的目录栏
// @author       Fish__404
// @updateURL    https://github.com/fish-404/CodePractice/blob/main/Scripts%20for%20Tampermonkey/stickyMsDocToc/stickyMsDocToc.js
// @downloadURL  https://github.com/fish-404/CodePractice/blob/main/Scripts%20for%20Tampermonkey/stickyMsDocToc/stickyMsDocToc.js
// @match        *://docs.microsoft.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    try {
      document.getElementById("affixed-right-container").setAttribute("style", "position: sticky; top: 0");
      document.getElementById("right-rail-in-this-article-list").setAttribute("style", "overflow: auto; height: 80vh;");
    }
    catch {} // not all page has right sidebar TOC block
})();

parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./..\\images\\demo.jpg":[["demo.56088456.jpg","nKR3"],"nKR3"]}],"XqQB":[function(require,module,exports) {

},{}],"d6sW":[function(require,module,exports) {
function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}var r=function(){function t(n){var r=n.selector,o=n.targetDate;e(this,t),this.targetDate=o,this.selectorTimer=document.querySelector(r),this.daysText=this.selectorTimer.children[0].children[0],this.hoursText=this.selectorTimer.children[1].children[0],this.minsText=this.selectorTimer.children[2].children[0],this.secsText=this.selectorTimer.children[3].children[0]}return n(t,[{key:"timer",value:function(){var e=this,t=this.targetDate.getTime();setInterval(function(){var n=Date.now(),r=t-n,o=Math.floor(r/864e5),c=Math.floor(r%864e5/36e5),i=Math.floor(r%36e5/6e4),a=Math.floor(r%6e4/1e3);return e.daysText.textContent=o<10?"0".concat(o):o,e.hoursText.textContent=c<10?"0".concat(c):c,e.minsText.textContent=i<10?"0".concat(i):i,e.secsText.textContent=a<10?"0".concat(a):a,"".concat(o,":").concat(c,":").concat(i,":").concat(a)},1e3)}}]),t}(),o=new r({selector:"#timer-1",targetDate:new Date("Sep 10, 2021")});o.timer();
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./css/index.css"),require("./js/main.js");
},{"./sass/main.scss":"clu1","./css/index.css":"XqQB","./js/main.js":"d6sW"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-timer/src.531b046a.js.map
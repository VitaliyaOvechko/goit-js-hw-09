!function(){function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){t[e]=o},o.parcelRequired7c6=r);var l=r("6JpON"),i=document.querySelector("form"),u=document.querySelector('input[name = "delay"]'),c=document.querySelector('input[name = "step"]'),a=document.querySelector('input[name = "amount"]');function s(e,o){return new Promise((function(n,t){var r=Math.random()>.3;setTimeout((function(){r?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}console.log(i),console.log(u),console.log(c),console.log(a),i.addEventListener("submit",(function(o){o.preventDefault();var n=Number(u.value),t=Number(c.value),r=Number(a.value);console.log(n),console.log(t),console.log(r);for(var i=1;i<=r;i+=1)s(i,n).then((function(o){var n=o.position,t=o.delay;return e(l).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(o){var n=o.position,t=o.delay;return e(l).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))})),n+=t}))}();
//# sourceMappingURL=03-promises.b064c1cb.js.map

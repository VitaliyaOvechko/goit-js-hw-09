!function(){var t={startButton:document.querySelector("[data-start]"),stopButton:document.querySelector("[data-stop]"),body:document.querySelector("body")},e=0;function o(e){e?t.startButton.setAttribute("disabled","true"):t.startButton.removeAttribute("disabled")}function n(e){e?t.stopButton.setAttribute("disabled","true"):t.stopButton.removeAttribute("disabled")}t.startButton.addEventListener("click",(function(){e=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),o(!0),n(!1)})),n(!0),t.stopButton.addEventListener("click",(function(){clearTimeout(e),n(!0),o(!1)}))}();
//# sourceMappingURL=01-color-switcher.b9249e44.js.map

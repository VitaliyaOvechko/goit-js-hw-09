const t={startButton:document.querySelector("[data-start]"),stopButton:document.querySelector("[data-stop]"),body:document.querySelector("body")};let e=0;function o(e){e?t.startButton.setAttribute("disabled","true"):t.startButton.removeAttribute("disabled")}t.startButton.addEventListener("click",(function(){e=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),o(!0)})),t.stopButton.addEventListener("click",(function(){clearTimeout(e),o(!1)}));
//# sourceMappingURL=01-color-switcher.fcc0db4e.js.map

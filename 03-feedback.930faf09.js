!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,p=Math.min,b=function(){return s.Date.now()};function y(e,t,n){var r,o,u,a,f,l,c=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,f=setTimeout(O,t),d?y(e):a}function x(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function O(){var e=b();if(x(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-l);return s?p(n,u-(e-c)):n}(e))}function h(e){return f=void 0,m&&r?y(e):(r=o=void 0,a)}function w(){var e=b(),n=x(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return S(l);if(s)return f=setTimeout(O,t),y(l)}return void 0===f&&(f=setTimeout(O,t)),a}return t=j(t)||0,g(n)&&(d=!!n.leading,u=(s="maxWait"in n)?v(j(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},w.flush=function(){return void 0===f?a:h(b())},w}function g(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=a.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var S={form:document.querySelector(".feedback-form"),inputEmail:document.querySelector(".feedback-form input"),textareaInput:document.querySelector(".feedback-form textarea")},x="feedback-form-state";S.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(h()),localStorage.removeItem(x),e.target.reset()})),S.form.addEventListener("input",e(t)((function(){O.email=S.inputEmail.value,O.message=S.textareaInput.value,localStorage.setItem(x,JSON.stringify(O))}),500)),h();var O={};function h(){var e=JSON.parse(localStorage.getItem(x));if(e)return S.inputEmail.value=e.email,S.textareaInput.value=e.message,e}}();
//# sourceMappingURL=03-feedback.930faf09.js.map

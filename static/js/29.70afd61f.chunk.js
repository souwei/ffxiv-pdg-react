(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{776:function(t,e,n){"use strict";n.r(e),n.d(e,"IonToggle",function(){return c});var o=n(901),i=n(709),r=n(902),a=n(903),s=n(909),c=function(){function t(){var t=this;this.inputId="ion-tg-"+u++,this.lastDrag=0,this.activated=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on",this.onFocus=function(){t.ionFocus.emit()},this.onBlur=function(){t.ionBlur.emit()}}return t.prototype.checkedChanged=function(t){this.ionChange.emit({checked:t,value:this.value})},t.prototype.disabledChanged=function(){this.emitStyle(),this.gesture&&this.gesture.setDisabled(this.disabled)},t.prototype.componentWillLoad=function(){this.emitStyle()},t.prototype.componentDidLoad=function(){return o.a(this,void 0,void 0,function(){var t,e=this;return o.c(this,function(o){switch(o.label){case 0:return t=this,[4,n.e(0).then(n.bind(null,905))];case 1:return t.gesture=o.sent().createGesture({el:this.el,queue:this.queue,gestureName:"toggle",gesturePriority:100,threshold:5,passive:!1,onStart:function(){return e.onStart()},onMove:function(t){return e.onMove(t)},onEnd:function(t){return e.onEnd(t)}}),this.disabledChanged(),[2]}})})},t.prototype.componentDidUnload=function(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},t.prototype.onClick=function(){this.lastDrag+300<Date.now()&&(this.checked=!this.checked)},t.prototype.emitStyle=function(){this.ionStyle.emit({"interactive-disabled":this.disabled})},t.prototype.onStart=function(){this.activated=!0,this.setFocus()},t.prototype.onMove=function(t){(function(t,e,n,o){var i="rtl"===t.dir;return e?!i&&o>n||i&&-o<n:!i&&-o<n||i&&o>n})(this.doc,this.checked,t.deltaX,-10)&&(this.checked=!this.checked,Object(s.d)())},t.prototype.onEnd=function(t){this.activated=!1,this.lastDrag=Date.now(),t.event.preventDefault(),t.event.stopImmediatePropagation()},t.prototype.getValue=function(){return this.value||""},t.prototype.setFocus=function(){this.buttonEl&&this.buttonEl.focus()},t.prototype.hostData=function(){var t=this,e=t.disabled,n=t.checked,o=t.activated,i=t.color,s=t.el,c=t.inputId+"-lbl",u=Object(a.d)(s);return u&&(u.id=c),{role:"checkbox","aria-disabled":e?"true":null,"aria-checked":""+n,"aria-labelledby":c,class:Object.assign({},Object(r.c)(i),{"in-item":Object(r.d)("ion-item",s),"toggle-activated":o,"toggle-checked":n,"toggle-disabled":e,interactive:!0})}},t.prototype.render=function(){var t=this,e=this.getValue();return Object(a.e)(!0,this.el,this.name,this.checked?e:"",this.disabled),[Object(i.b)("div",{class:"toggle-icon"},Object(i.b)("div",{class:"toggle-inner"})),Object(i.b)("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:this.disabled,ref:function(e){return t.buttonEl=e}})]},Object.defineProperty(t,"is",{get:function(){return"ion-toggle"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{activated:{state:!0},checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},doc:{context:"document"},el:{elementRef:!0},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},queue:{context:"queue"},value:{type:String,attr:"value"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"click",method:"onClick"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return'.sc-ion-toggle-ios-h{-webkit-box-sizing:content-box!important;box-sizing:content-box!important;display:inline-block;outline:none;contain:content;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}.ion-focused.sc-ion-toggle-ios-h   input.sc-ion-toggle-ios{border:2px solid #5e9ed6}.toggle-disabled.sc-ion-toggle-ios-h{pointer-events:none}button.sc-ion-toggle-ios{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl].sc-ion-toggle-ios-h   button.sc-ion-toggle-ios, [dir=rtl]   .sc-ion-toggle-ios-h   button.sc-ion-toggle-ios{right:0}button.sc-ion-toggle-ios::-moz-focus-inner{border:0}.sc-ion-toggle-ios-h{--background:var(--ion-item-background,var(--ion-background-color,#fff));--background-checked:var(--ion-color-primary,#3880ff);--handle-background:var(--ion-item-background,var(--ion-background-color,#fff));--handle-background-checked:var(--ion-item-background,var(--ion-background-color,#fff));-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;width:51px;height:32px;contain:strict}.ion-color.toggle-checked.sc-ion-toggle-ios-h   .toggle-icon.sc-ion-toggle-ios{background:var(--ion-color-base)}.toggle-icon.sc-ion-toggle-ios{border-radius:16px;display:block;position:relative;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:background-color .3s;transition:background-color .3s;background-color:var(--ion-color-step-50,#f2f2f2);overflow:hidden;pointer-events:none}.toggle-icon.sc-ion-toggle-ios:before{right:2px;bottom:2px;border-radius:16px;-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;background:var(--background);content:""}.toggle-icon.sc-ion-toggle-ios:before, .toggle-inner.sc-ion-toggle-ios{left:2px;top:2px;position:absolute}.toggle-inner.sc-ion-toggle-ios{border-radius:14px;width:28px;height:28px;-webkit-transition:width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms,-webkit-transform .3s;transition:width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms,-webkit-transform .3s;transition:transform .3s,width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms;transition:transform .3s,width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms,-webkit-transform .3s;background:var(--handle-background);-webkit-box-shadow:0 3px 12px rgba(0,0,0,.16),0 3px 1px rgba(0,0,0,.1);box-shadow:0 3px 12px rgba(0,0,0,.16),0 3px 1px rgba(0,0,0,.1);will-change:transform;contain:strict}[dir=rtl].sc-ion-toggle-ios-h   .toggle-inner.sc-ion-toggle-ios, [dir=rtl]   .sc-ion-toggle-ios-h   .toggle-inner.sc-ion-toggle-ios{right:2px}.toggle-checked.sc-ion-toggle-ios-h   .toggle-icon.sc-ion-toggle-ios{background:var(--background-checked)}.toggle-activated.sc-ion-toggle-ios-h   .toggle-icon.sc-ion-toggle-ios:before, .toggle-checked.sc-ion-toggle-ios-h   .toggle-icon.sc-ion-toggle-ios:before{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}.toggle-checked.sc-ion-toggle-ios-h   .toggle-inner.sc-ion-toggle-ios{-webkit-transform:translate3d(19px,0,0);transform:translate3d(19px,0,0);background:var(--handle-background-checked)}[dir=rtl].toggle-checked.sc-ion-toggle-ios-h   .toggle-inner.sc-ion-toggle-ios{-webkit-transform:translate3d(calc(-1 * 19px),0,0);transform:translate3d(calc(-1 * 19px),0,0)}.toggle-activated.toggle-checked.sc-ion-toggle-ios-h   .toggle-inner.sc-ion-toggle-ios:before{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}.toggle-activated.sc-ion-toggle-ios-h   .toggle-inner.sc-ion-toggle-ios{width:34px}.toggle-activated.toggle-checked.sc-ion-toggle-ios-h   .toggle-inner.sc-ion-toggle-ios{left:-4px}[dir=rtl].toggle-activated.toggle-checked.sc-ion-toggle-ios-h   .toggle-inner.sc-ion-toggle-ios{right:-4px}.toggle-disabled.sc-ion-toggle-ios-h{opacity:.3}.in-item[slot].sc-ion-toggle-ios-h{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:16px;padding-right:8px;padding-top:6px;padding-bottom:5px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.in-item[slot].sc-ion-toggle-ios-h{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:8px;padding-inline-end:8px}}.in-item[slot=start].sc-ion-toggle-ios-h{padding-left:0;padding-right:16px;padding-top:6px;padding-bottom:5px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.in-item[slot=start].sc-ion-toggle-ios-h{padding-left:unset;padding-right:unset;-webkit-padding-start:0;padding-inline-start:0;-webkit-padding-end:16px;padding-inline-end:16px}}'},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}();var u=0},901:function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"a",function(){return r}),n.d(e,"c",function(){return a});var o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function i(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function r(t,e,n,o){return new(n||(n=Promise))(function(i,r){function a(t){try{c(o.next(t))}catch(e){r(e)}}function s(t){try{c(o.throw(t))}catch(e){r(e)}}function c(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,s)}c((o=o.apply(t,e||[])).next())})}function a(t,e){var n,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,o=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(s){r=[6,s],o=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}}},902:function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return u}),n.d(e,"c",function(){return r}),n.d(e,"d",function(){return i}),n.d(e,"e",function(){return a});var o=n(901);function i(t,e){return null!==e.closest(t)}function r(t){var e;return"string"==typeof t&&t.length>0?((e={"ion-color":!0})["ion-color-"+t]=!0,e):void 0}function a(t,e){var n;return(n={})[e]=!0,n[e+"-"+t]=void 0!==t,n}function s(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return e[t]=!0}),e}var c=/^[a-z][a-z0-9+\-.]*:/;function u(t,e,n,i){return o.a(this,void 0,void 0,function(){var r;return o.c(this,function(o){switch(o.label){case 0:return null==e||"#"===e[0]||c.test(e)?[3,2]:(r=t.document.querySelector("ion-router"))?(null!=n&&n.preventDefault(),[4,r.componentOnReady()]):[3,2];case 1:return o.sent(),[2,r.push(e,i)];case 2:return[2,!1]}})})}},903:function(t,e,n){"use strict";function o(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)}function i(t){return!!t.shadowRoot&&!!t.attachShadow}function r(t){var e=t.closest("ion-item");return e?e.querySelector("ion-label"):null}function a(t,e,n,o,r){if(t||i(e)){var a=e.querySelector("input.aux-input");a||((a=e.ownerDocument.createElement("input")).type="hidden",a.classList.add("aux-input"),e.appendChild(a)),a.disabled=r,a.name=n,a.value=o||""}}function s(t,e,n){return Math.max(t,Math.min(e,n))}function c(t){return t.timeStamp||Date.now()}function u(t){if(t){var e=t.changedTouches;if(e&&e.length>0){var n=e[0];return{x:n.clientX,y:n.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}}function l(t,e){var n="rtl"===t.document.dir;switch(e){case"start":return n;case"end":return!n;default:throw new Error('"'+e+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function g(t,e){var n=t._original||t;return{_original:t,emit:d(n.emit.bind(n),e)}}function d(t,e){var n;return void 0===e&&(e=0),function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];clearTimeout(n),n=setTimeout.apply(void 0,[t,e].concat(o))}}n.d(e,"a",function(){return o}),n.d(e,"b",function(){return c}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return r}),n.d(e,"e",function(){return a}),n.d(e,"f",function(){return g}),n.d(e,"g",function(){return l}),n.d(e,"h",function(){return s}),n.d(e,"i",function(){return d}),n.d(e,"j",function(){return u})},909:function(t,e,n){"use strict";function o(){var t=window.TapticEngine;t&&t.selection()}function i(){var t=window.TapticEngine;t&&t.gestureSelectionStart()}function r(){var t=window.TapticEngine;t&&t.gestureSelectionChanged()}function a(){var t=window.TapticEngine;t&&t.gestureSelectionEnd()}n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i}),n.d(e,"c",function(){return a}),n.d(e,"d",function(){return o})}}]);
//# sourceMappingURL=29.70afd61f.chunk.js.map
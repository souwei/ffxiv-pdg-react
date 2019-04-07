(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{763:function(t,e,n){"use strict";n.r(e),n.d(e,"IonToast",function(){return d}),n.d(e,"IonToastController",function(){return p});var o=n(901),r=n(709),i=n(904),a=n(902);function s(t,e,n){var o=new t,r=new t,i=e.host||e,a=e.querySelector(".toast-wrapper");switch(r.addElement(a),n){case"top":r.fromTo("translateY","-100%","calc(10px + var(--ion-safe-area-top, 0px))");break;case"middle":var s=Math.floor(i.clientHeight/2-a.clientHeight/2);a.style.top=s+"px",r.fromTo("opacity",.01,1);break;default:r.fromTo("translateY","100%","calc(-10px - var(--ion-safe-area-bottom, 0px))")}return Promise.resolve(o.addElement(i).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).add(r))}function c(t,e,n){var o=new t,r=new t,i=e.host||e,a=e.querySelector(".toast-wrapper");switch(r.addElement(a),n){case"top":r.fromTo("translateY","calc(10px + var(--ion-safe-area-top, 0px))","-100%");break;case"middle":r.fromTo("opacity",.99,0);break;default:r.fromTo("translateY","calc(-10px - var(--ion-safe-area-bottom, 0px))","100%")}return Promise.resolve(o.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(r))}function u(t,e,n){var o=new t,r=new t,i=e.host||e,a=e.querySelector(".toast-wrapper");switch(r.addElement(a),n){case"top":a.style.top="calc(8px + var(--ion-safe-area-top, 0px))",r.fromTo("opacity",.01,1);break;case"middle":var s=Math.floor(i.clientHeight/2-a.clientHeight/2);a.style.top=s+"px",r.fromTo("opacity",.01,1);break;default:a.style.bottom="calc(8px + var(--ion-safe-area-bottom, 0px))",r.fromTo("opacity",.01,1)}return Promise.resolve(o.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(r))}function l(t,e){var n=new t,o=new t,r=e.host||e,i=e.querySelector(".toast-wrapper");return o.addElement(i),o.fromTo("opacity",.99,0),Promise.resolve(n.addElement(r).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(o))}var d=function(){function t(){this.presented=!1,this.duration=0,this.keyboardClose=!1,this.position="bottom",this.showCloseButton=!1,this.translucent=!1,this.animated=!0}return t.prototype.present=function(){return o.a(this,void 0,void 0,function(){var t=this;return o.c(this,function(e){switch(e.label){case 0:return[4,Object(i.c)(this,"toastEnter",s,u,this.position)];case 1:return e.sent(),this.duration>0&&(this.durationTimeout=setTimeout(function(){return t.dismiss(void 0,"timeout")},this.duration)),[2]}})})},t.prototype.dismiss=function(t,e){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(i.d)(this,t,e,"toastLeave",c,l,this.position)},t.prototype.onDidDismiss=function(){return Object(i.e)(this.el,"ionToastDidDismiss")},t.prototype.onWillDismiss=function(){return Object(i.e)(this.el,"ionToastWillDismiss")},t.prototype.hostData=function(){return{style:{zIndex:6e4+this.overlayIndex},class:Object.assign({},Object(a.c)(this.color),Object(a.a)(this.cssClass),{"toast-translucent":this.translucent})}},t.prototype.render=function(){var t,e=this,n=((t={"toast-wrapper":!0})["toast-"+this.position]=!0,t);return Object(r.b)("div",{class:n},Object(r.b)("div",{class:"toast-container"},void 0!==this.message&&Object(r.b)("div",{class:"toast-message"},this.message),this.showCloseButton&&Object(r.b)("ion-button",{fill:"clear",class:"toast-button",onClick:function(){return e.dismiss(void 0,"cancel")}},this.closeButtonText||"Close")))},Object.defineProperty(t,"is",{get:function(){return"ion-toast"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},closeButtonText:{type:String,attr:"close-button-text"},color:{type:String,attr:"color"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},duration:{type:Number,attr:"duration"},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},message:{type:String,attr:"message"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},position:{type:String,attr:"position"},present:{method:!0},showCloseButton:{type:Boolean,attr:"show-close-button"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionToastDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:strict;z-index:1000;pointer-events:none}:host([dir=rtl])+b{right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-button{color:var(--button-color)}.toast-message{-ms-flex:1;flex:1;white-space:pre-wrap}:host{--background:var(--ion-color-step-800,#333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0,0,0,0.2),0 6px 10px 0 rgba(0,0,0,0.14),0 1px 18px 0 rgba(0,0,0,0.12);--button-color:var(--ion-color-primary,#3880ff);--color:var(--ion-color-step-50,#f2f2f2);--max-width:700px;font-size:14px}.toast-wrapper{left:8px;right:8px;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:.01;z-index:10}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-message{padding-left:16px;padding-right:16px;padding-top:14px;padding-bottom:14px;line-height:20px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-message{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.toast-button{--margin-end:0}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}(),p=function(){function t(){}return t.prototype.create=function(t){return Object(i.f)(this.doc.createElement("ion-toast"),t)},t.prototype.dismiss=function(t,e,n){return Object(i.g)(this.doc,t,e,"ion-toast",n)},t.prototype.getTop=function(){return o.a(this,void 0,void 0,function(){return o.c(this,function(t){return[2,Object(i.h)(this.doc,"ion-toast")]})})},Object.defineProperty(t,"is",{get:function(){return"ion-toast-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),t}()},901:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return i}),n.d(e,"c",function(){return a});var o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function r(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function i(t,e,n,o){return new(n||(n=Promise))(function(r,i){function a(t){try{c(o.next(t))}catch(e){i(e)}}function s(t){try{c(o.throw(t))}catch(e){i(e)}}function c(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(a,s)}c((o=o.apply(t,e||[])).next())})}function a(t,e){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(s){i=[6,s],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}},902:function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return u}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return r}),n.d(e,"e",function(){return a});var o=n(901);function r(t,e){return null!==e.closest(t)}function i(t){var e;return"string"==typeof t&&t.length>0?((e={"ion-color":!0})["ion-color-"+t]=!0,e):void 0}function a(t,e){var n;return(n={})[e]=!0,n[e+"-"+t]=void 0!==t,n}function s(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return e[t]=!0}),e}var c=/^[a-z][a-z0-9+\-.]*:/;function u(t,e,n,r){return o.a(this,void 0,void 0,function(){var i;return o.c(this,function(o){switch(o.label){case 0:return null==e||"#"===e[0]||c.test(e)?[3,2]:(i=t.document.querySelector("ion-router"))?(null!=n&&n.preventDefault(),[4,i.componentOnReady()]):[3,2];case 1:return o.sent(),[2,i.push(e,r)];case 2:return[2,!1]}})})}},904:function(t,e,n){"use strict";n.d(e,"a",function(){return m}),n.d(e,"b",function(){return f}),n.d(e,"c",function(){return c}),n.d(e,"d",function(){return u}),n.d(e,"e",function(){return p}),n.d(e,"f",function(){return i}),n.d(e,"g",function(){return a}),n.d(e,"h",function(){return s});var o=n(901),r=0;function i(t,e){var n=t.ownerDocument;(function(t){0===r&&(r=1,t.addEventListener("focusin",function(e){var n=s(t);if(n&&n.backdropDismiss&&!function(t,e){for(;e;){if(e===t)return!0;e=e.parentElement}return!1}(n,e.target)){var o=n.querySelector("input,button");o&&o.focus()}}),t.addEventListener("ionBackButton",function(e){var n=s(t);n&&n.backdropDismiss&&e.detail.register(100,function(){return n.dismiss(void 0,m)})}),t.addEventListener("keyup",function(e){if("Escape"===e.key){var n=s(t);n&&n.backdropDismiss&&n.dismiss(void 0,m)}}))})(n),Object.assign(t,e),t.classList.add("overlay-hidden");var o=r++;return t.overlayIndex=o,t.hasAttribute("id")||(t.id="ion-overlay-"+o),l(n).appendChild(t),t.componentOnReady()}function a(t,e,n,o,r){var i=s(t,o,r);return i?i.dismiss(e,n):Promise.reject("overlay does not exist")}function s(t,e,n){var o=function(t,e){var n=Array.from(l(t).children).filter(function(t){return t.overlayIndex>0});return void 0===e?n:(e=e.toUpperCase(),n.filter(function(t){return t.tagName===e}))}(t,e);return void 0===n?o[o.length-1]:o.find(function(t){return t.id===n})}function c(t,e,n,r,i){return o.a(this,void 0,void 0,function(){var a;return o.c(this,function(o){switch(o.label){case 0:return t.presented?[2]:(t.presented=!0,t.willPresent.emit(),a=t.enterAnimation?t.enterAnimation:t.config.get(e,"ios"===t.mode?n:r),[4,d(t,a,t.el,i)]);case 1:return o.sent()&&t.didPresent.emit(),[2]}})})}function u(t,e,n,r,i,a,s){return o.a(this,void 0,void 0,function(){var c,u;return o.c(this,function(o){switch(o.label){case 0:if(!t.presented)return[2,!1];t.presented=!1,o.label=1;case 1:return o.trys.push([1,3,,4]),t.willDismiss.emit({data:e,role:n}),c=t.leaveAnimation?t.leaveAnimation:t.config.get(r,"ios"===t.mode?i:a),[4,d(t,c,t.el,s)];case 2:return o.sent(),t.didDismiss.emit({data:e,role:n}),[3,4];case 3:return u=o.sent(),console.error(u),[3,4];case 4:return t.el.remove(),[2,!0]}})})}function l(t){return t.querySelector("ion-app")||t.body}function d(t,e,r,i){return o.a(this,void 0,void 0,function(){var a,s,c,u;return o.c(this,function(o){switch(o.label){case 0:return t.animation?(t.animation.destroy(),t.animation=void 0,[2,!1]):(r.classList.remove("overlay-hidden"),a=r.shadowRoot||t.el,c=t,[4,n.e(1).then(n.bind(null,906)).then(function(t){return t.create(e,a,i)})]);case 1:return s=c.animation=o.sent(),t.animation=s,t.animated&&t.config.getBoolean("animated",!0)||s.duration(0),t.keyboardClose&&s.beforeAddWrite(function(){var t=r.ownerDocument.activeElement;t&&t.matches("input, ion-input, ion-textarea")&&t.blur()}),[4,s.playAsync()];case 2:return o.sent(),u=s.hasCompleted,s.destroy(),t.animation=void 0,[2,u]}})})}function p(t,e){var n,o=new Promise(function(t){return n=t});return function(t,e,n){t.addEventListener(e,function o(r){t.removeEventListener(e,o),n(r)})}(t,e,function(t){n(t.detail)}),o}function f(t){return"cancel"===t||t===m}var m="backdrop"}}]);
//# sourceMappingURL=42.0a9cd783.chunk.js.map
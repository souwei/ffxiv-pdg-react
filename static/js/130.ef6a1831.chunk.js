(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{843:function(t,n,r){"use strict";r.r(n),r.d(n,"IonChip",function(){return e});var i=r(709),o=r(902),e=function(){function t(){this.outline=!1}return t.prototype.hostData=function(){return{class:Object.assign({},Object(o.c)(this.color),{"chip-outline":this.outline,"ion-activatable":!0})}},t.prototype.render=function(){return[Object(i.b)("slot",null),"md"===this.mode?Object(i.b)("ion-ripple-effect",null):null]},Object.defineProperty(t,"is",{get:function(){return"ion-chip"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"},outline:{type:Boolean,attr:"outline"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--background:rgba(0,0,0,0.12);--color:rgba(0,0,0,0.87);border-radius:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:4px;margin-right:4px;margin-top:4px;margin-bottom:4px;padding-left:12px;padding-right:12px;padding-top:7px;padding-bottom:7px;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;height:32px;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);font-size:14px;line-height:1;cursor:pointer;overflow:hidden;vertical-align:middle;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:4px;margin-inline-end:4px;padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}:host(.ion-color){background:rgba(var(--ion-color-base-rgb),.08);color:var(--ion-color-shade)}:host(.ion-color:focus){background:rgba(var(--ion-color-base-rgb),.12)}:host(.ion-color.activated){background:rgba(var(--ion-color-base-rgb),.16)}:host(.chip-outline){border-width:1px;border-style:solid;border-color:rgba(0,0,0,.32);background:transparent}:host(.chip-outline.ion-color){border-color:rgba(var(--ion-color-base-rgb),.32)}:host(.chip-outline:not(.ion-color):focus){background:rgba(0,0,0,.04)}:host(.chip-outline.activated:not(.ion-color)){background:rgba(0,0,0,.08)}::slotted(ion-icon){font-size:20px}:host(:not(.ion-color)) ::slotted(ion-icon){color:rgba(0,0,0,.54)}::slotted(ion-icon:first-child){margin-left:-4px;margin-right:8px;margin-top:-4px;margin-bottom:-4px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-icon:first-child){margin-left:unset;margin-right:unset;-webkit-margin-start:-4px;margin-inline-start:-4px;-webkit-margin-end:8px;margin-inline-end:8px}}::slotted(ion-icon:last-child){margin-left:8px;margin-right:-4px;margin-top:-4px;margin-bottom:-4px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-icon:last-child){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:-4px;margin-inline-end:-4px}}::slotted(ion-avatar){width:24px;height:24px}::slotted(ion-avatar:first-child){margin-left:-8px;margin-right:8px;margin-top:-4px;margin-bottom:-4px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-avatar:first-child){margin-left:unset;margin-right:unset;-webkit-margin-start:-8px;margin-inline-start:-8px;-webkit-margin-end:8px;margin-inline-end:8px}}::slotted(ion-avatar:last-child){margin-left:8px;margin-right:-8px;margin-top:-4px;margin-bottom:-4px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-avatar:last-child){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:-8px;margin-inline-end:-8px}}:host(:focus){outline:none;--background:rgba(0,0,0,0.16)}:host(.activated){--background:rgba(0,0,0,0.2)}@media (any-hover:hover){:host(:hover){--background:rgba(0,0,0,0.16)}:host(.ion-color:hover){background:rgba(var(--ion-color-base-rgb),.12)}:host(.chip-outline:not(.ion-color):hover){background:rgba(0,0,0,.04)}}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}()},901:function(t,n,r){"use strict";r.d(n,"b",function(){return o}),r.d(n,"a",function(){return e}),r.d(n,"c",function(){return a});var i=function(t,n){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])})(t,n)};function o(t,n){function r(){this.constructor=t}i(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}function e(t,n,r,i){return new(r||(r=Promise))(function(o,e){function a(t){try{c(i.next(t))}catch(n){e(n)}}function l(t){try{c(i.throw(t))}catch(n){e(n)}}function c(t){t.done?o(t.value):new r(function(n){n(t.value)}).then(a,l)}c((i=i.apply(t,n||[])).next())})}function a(t,n){var r,i,o,e,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return e={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function l(e){return function(l){return function(e){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,i&&(o=2&e[0]?i.return:e[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,e[1])).done)return o;switch(i=0,o&&(e=[2&e[0],o.value]),e[0]){case 0:case 1:o=e;break;case 4:return a.label++,{value:e[1],done:!1};case 5:a.label++,i=e[1],e=[0];continue;case 7:e=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===e[0]||2===e[0])){a=0;continue}if(3===e[0]&&(!o||e[1]>o[0]&&e[1]<o[3])){a.label=e[1];break}if(6===e[0]&&a.label<o[1]){a.label=o[1],o=e;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(e);break}o[2]&&a.ops.pop(),a.trys.pop();continue}e=n.call(t,a)}catch(l){e=[6,l],i=0}finally{r=o=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,l])}}}},902:function(t,n,r){"use strict";r.d(n,"a",function(){return l}),r.d(n,"b",function(){return u}),r.d(n,"c",function(){return e}),r.d(n,"d",function(){return o}),r.d(n,"e",function(){return a});var i=r(901);function o(t,n){return null!==n.closest(t)}function e(t){var n;return"string"==typeof t&&t.length>0?((n={"ion-color":!0})["ion-color-"+t]=!0,n):void 0}function a(t,n){var r;return(r={})[n]=!0,r[n+"-"+t]=void 0!==t,r}function l(t){var n={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return n[t]=!0}),n}var c=/^[a-z][a-z0-9+\-.]*:/;function u(t,n,r,o){return i.a(this,void 0,void 0,function(){var e;return i.c(this,function(i){switch(i.label){case 0:return null==n||"#"===n[0]||c.test(n)?[3,2]:(e=t.document.querySelector("ion-router"))?(null!=r&&r.preventDefault(),[4,e.componentOnReady()]):[3,2];case 1:return i.sent(),[2,e.push(n,o)];case 2:return[2,!1]}})})}}}]);
//# sourceMappingURL=130.ef6a1831.chunk.js.map
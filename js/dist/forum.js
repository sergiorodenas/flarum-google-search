module.exports=function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=4)}([function(e,t){e.exports=flarum.core.compat.extend},function(e,t){e.exports=flarum.core.compat.app},function(e,t){e.exports=flarum.core.compat["components/IndexPage"]},function(e,t){e.exports=flarum.core.compat["components/PostStream"]},function(e,t,o){"use strict";o.r(t);var n=o(1),r=o.n(n),a=o(0),i=o(2),u=o.n(i),d=function(){Object(a.extend)(u.a.prototype,"oninit",(function(){null==app.previous.type||googletag.cmd.push((function(){googletag.destroySlots()})),googletag.cmd.push((function(){var e=googletag.sizeMapping().addSize([1100,0],[[728,90]]).addSize([992,0],[[728,90]]).addSize([768,0],[[728,90]]).addSize([0,0],[[468,60]]).build();googletag.defineSlot("/22370525907/foros.header",[[468,60],[728,90]],"div-gpt-ad-1619603804551-0").defineSizeMapping(e).addService(googletag.pubads()),googletag.pubads().enableSingleRequest(),googletag.pubads().collapseEmptyDivs(),googletag.enableServices()}))})),Object(a.extend)(u.a.prototype,"view",(function(e){app.session.user||(e.children.splice(1,0,m("div.flarum-ads",m("div.ad#div-gpt-ad-1619603804551-0"))),googletag.cmd.push((function(){googletag.display("div-gpt-ad-1619603804551-0")})))}))};o(3);r.a.initializers.add("flarum-ads",(function(e){d(),addAdsToDiscussionPage()}))}]);
//# sourceMappingURL=forum.js.map
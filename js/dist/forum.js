module.exports=function(e){var o={};function t(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=o,t.d=function(e,o,a){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)t.d(a,n,function(o){return e[o]}.bind(null,n));return a},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=4)}([function(e,o){e.exports=flarum.core.compat.extend},function(e,o){e.exports=flarum.core.compat.app},function(e,o){e.exports=flarum.core.compat["components/IndexPage"]},function(e,o){e.exports=flarum.core.compat["components/PostStream"]},function(e,o,t){"use strict";t.r(o);var a=t(1),n=t.n(a),i=t(0),d=t(2),g=t.n(d),r=function(){Object(i.extend)(g.a.prototype,"oninit",(function(){null==app.previous.type||(console.log("Anuncios destruidos"),googletag.cmd.push((function(){googletag.destroySlots()}))),googletag.cmd.push((function(){var e=googletag.sizeMapping().addSize([1100,0],[[468,60]]).addSize([992,0],[[468,60]]).addSize([768,0],[[468,60]]).addSize([0,0],[[468,60]]).build();googletag.defineSlot("/22370525907/foros.header",[[468,60]],"div-gpt-ad-1619603804551-0").defineSizeMapping(e).addService(googletag.pubads()),googletag.defineSlot("/22370525907/foros.header",[[468,60]],"div-gpt-ad-1619612727420-0").defineSizeMapping(e).addService(googletag.pubads()),googletag.pubads().enableSingleRequest(),googletag.pubads().collapseEmptyDivs(),googletag.enableServices()}))})),Object(i.extend)(g.a.prototype,"view",(function(e){if(!app.session.user)switch(app.screen()){case"desktop-hd":case"desktop":e.children.splice(1,0,m("div.flarum-ads",[m("div.ad#div-gpt-ad-1619603804551-0"),m("div.ad#div-gpt-ad-1619612727420-0")])),googletag.cmd.push((function(){googletag.display("div-gpt-ad-1619603804551-0"),googletag.display("div-gpt-ad-1619612727420-0")}));break;case"tablet":case"phone":e.children.splice(1,0,m("div.flarum-ads",m("div.ad#div-gpt-ad-1619603804551-0"))),googletag.cmd.push((function(){googletag.display("div-gpt-ad-1619603804551-0")}));break;default:console.log("Flarum app.screen() isnt working")}}))},l=t(3),p=t.n(l);n.a.initializers.add("flarum-ads",(function(e){r(),Object(i.extend)(p.a.prototype,"oninit",(function(){null==n.a.previous.type||googletag.cmd.push((function(){googletag.destroySlots()})),googletag.cmd.push((function(){var e=googletag.sizeMapping().addSize([1100,0],[[728,90]]).addSize([992,0],[[728,90]]).addSize([768,0],[[468,60]]).addSize([0,0],[[468,60]]).build();googletag.defineSlot("/22370525907/foros.header",[[468,60],[728,90]],"div-gpt-ad-1619614279094-0").defineSizeMapping(e).addService(googletag.pubads()),googletag.pubads().enableSingleRequest(),googletag.pubads().collapseEmptyDivs(),googletag.enableServices()}))})),Object(i.extend)(p.a.prototype,"view",(function(e){n.a.session.user||(e.children.unshift(m("div.flarum-ads",m("div.ad#div-gpt-ad-1619614279094-0"))),googletag.cmd.push((function(){googletag.display("div-gpt-ad-1619614279094-0")})))}))}))}]);
//# sourceMappingURL=forum.js.map
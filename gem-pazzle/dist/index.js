!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=89)}([function(t,e,n){(function(e){function n(t){return t&&t.Math==Math&&t}t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n(54))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(0),o=n(17).f,i=n(7),a=n(36),c=n(21),s=n(59),u=n(43);t.exports=function(t,e){var n,l,f,p,d,h=t.target,v=t.global,m=t.stat;if(n=v?r:m?r[h]||c(h,{}):(r[h]||{}).prototype)for(l in e){if(p=e[l],f=t.noTargetGet?(d=o(n,l))&&d.value:n[l],!u(v?l:h+(m?".":"#")+l,t.forced)&&void 0!==f){if(typeof p==typeof f)continue;s(p,f)}(t.sham||f&&f.sham)&&i(p,"sham",!0),a(n,l,p,t)}}},function(t,e,n){var r=n(1);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e,n){var r=n(5),o=n(34),i=n(8),a=n(12),c=Object.defineProperty;e.f=r?c:function(t,e,n){if(i(t),e=a(e,!0),i(n),o)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(5),o=n(6),i=n(18);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(2);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){var r=n(25),o=Math.min;t.exports=function(t){return 0<t?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(0),o=n(39),i=n(3),a=n(40),c=n(44),s=n(64),u=o("wks"),l=r.Symbol,f=s?l:l&&l.withoutSetter||a;t.exports=function(t){return i(u,t)||(c&&i(l,t)?u[t]=l[t]:u[t]=f("Symbol."+t)),u[t]}},function(t,e,n){var r=n(33),o=n(20);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(2);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(19);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(20);t.exports=function(t){return Object(r(t))}},function(t,e,n){function r(t){throw t}var o=n(5),i=n(1),a=n(3),c=Object.defineProperty,s={};t.exports=function(t,e){if(a(s,t))return s[t];var n=[][t],u=!!a(e=e||{},"ACCESSORS")&&e.ACCESSORS,l=a(e,0)?e[0]:r,f=a(e,1)?e[1]:void 0;return s[t]=!!n&&!i((function(){if(u&&!o)return!0;var t={length:-1};u?c(t,1,{enumerable:!0,get:r}):t[1]=1,n.call(t,l,f)}))}},function(t,e,n){"use strict";function r(t){if(!c(t))return!1;var e=t[v];return void 0!==e?!!e:a(t)}var o=n(4),i=n(1),a=n(13),c=n(2),s=n(14),u=n(9),l=n(28),f=n(29),p=n(30),d=n(10),h=n(45),v=d("isConcatSpreadable"),m=9007199254740991,g="Maximum allowed index exceeded",y=51<=h||!i((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),S=p("concat");o({target:"Array",proto:!0,forced:!y||!S},{concat:function(t){var e,n,o,i,a,c=s(this),p=f(c,0),d=0;for(e=-1,o=arguments.length;e<o;e++)if(r(a=-1===e?c:arguments[e])){if(i=u(a.length),m<d+i)throw TypeError(g);for(n=0;n<i;n++,d++)n in a&&l(p,d,a[n])}else{if(m<=d)throw TypeError(g);l(p,d++,a)}return p.length=d,p}})},function(t,e,n){var r=n(5),o=n(55),i=n(18),a=n(11),c=n(12),s=n(3),u=n(34),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=a(t),e=c(e,!0),u)try{return l(t,e)}catch(t){}if(s(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(0),o=n(7);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(0),o=n(21),i="__core-js_shared__",a=r[i]||o(i,{});t.exports=a},function(t,e){t.exports={}},function(t,e,n){function r(t){return"function"==typeof t?t:void 0}var o=n(61),i=n(0);t.exports=function(t,e){return arguments.length<2?r(o[t])||r(i[t]):o[t]&&o[t][e]||i[t]&&i[t][e]}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(0<t?r:n)(t)}},function(t,e,n){var r=n(25),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){"use strict";var r=n(12),o=n(6),i=n(18);t.exports=function(t,e,n){var a=r(e);a in t?o.f(t,a,i(0,n)):t[a]=n}},function(t,e,n){var r=n(2),o=n(13),i=n(10)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){var r=n(1),o=n(10),i=n(45),a=o("species");t.exports=function(t){return 51<=i||!r((function(){var e=[];return(e.constructor={})[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},function(t,e,n){t.exports=n.p+"img/sound-off.jpg"},function(t,e,n){t.exports=n.p+"img/sound-on.jpg"},function(t,e,n){var r=n(1),o=n(19),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e,n){var r=n(5),o=n(1),i=n(35);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(0),o=n(2),i=r.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},function(t,e,n){var r=n(0),o=n(7),i=n(3),a=n(21),c=n(37),s=n(56),u=s.get,l=s.enforce,f=String(String).split("String");(t.exports=function(t,e,n,c){var s,u=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,d=!!c&&!!c.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),(s=l(n)).source||(s.source=f.join("string"==typeof e?e:""))),t!==r?(u?!d&&t[e]&&(p=!0):delete t[e],p?t[e]=n:o(t,e,n)):p?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||c(this)}))},function(t,e,n){var r=n(22),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,e,n){var r=n(39),o=n(40),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e,n){var r=n(58),o=n(22);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.7.0",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e,n){var r=n(42),o=n(27).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(3),o=n(11),i=n(62).indexOf,a=n(23);t.exports=function(t,e){var n,c=o(t),s=0,u=[];for(n in c)!r(a,n)&&r(c,n)&&u.push(n);for(;e.length>s;)r(c,n=e[s++])&&(~i(u,n)||u.push(n));return u}},function(t,e,n){function r(t,e){var n=c[a(t)];return n==u||n!=s&&("function"==typeof e?o(e):!!e)}var o=n(1),i=/#|\.prototype\./,a=r.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=r.data={},s=r.NATIVE="N",u=r.POLYFILL="P";t.exports=r},function(t,e,n){var r=n(1);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){var r,o,i=n(0),a=n(65),c=i.process,s=c&&c.versions,u=s&&s.v8;u?o=(r=u.split("."))[0]+r[1]:a&&(!(r=a.match(/Edge\/(\d+)/))||74<=r[1])&&(r=a.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,e,n){"use strict";var r=n(47).forEach,o=n(49),i=n(15),a=o("forEach"),c=i("forEach");t.exports=a&&c?[].forEach:function(t,e){return r(this,t,1<arguments.length?e:void 0)}},function(t,e,n){function r(t){var e=1==t,n=2==t,r=3==t,l=4==t,f=6==t,p=5==t||f;return function(d,h,v,m){for(var g,y,S=a(d),x=i(S),b=o(h,v,3),w=c(x.length),E=0,M=m||s,L=e?M(d,w):n?M(d,0):void 0;E<w;E++)if((p||E in x)&&(y=b(g=x[E],E,S),t))if(e)L[E]=y;else if(y)switch(t){case 3:return!0;case 5:return g;case 6:return E;case 2:u.call(L,g)}else if(l)return!1;return f?-1:r||l?l:L}}var o=n(67),i=n(33),a=n(14),c=n(9),s=n(29),u=[].push;t.exports={forEach:r(0),map:r(1),filter:r(2),some:r(3),every:r(4),find:r(5),findIndex:r(6)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){"use strict";var r=n(1);t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},function(t,e,n){"use strict";var r,o,i=(o={},function(t){if(void 0===o[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}o[t]=e}return o[t]}),a=[];function c(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function s(t,e){for(var n={},r=[],o=0;o<t.length;o++){var i=t[o],s=e.base?i[0]+e.base:i[0],u=n[s]||0,l="".concat(s," ").concat(u);n[s]=u+1;var f=c(l),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(p)):a.push({identifier:l,updater:v(p,e),references:1}),r.push(l)}return r}function u(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,f=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function p(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=f(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}var d=null,h=0;function v(t,e){var n,r,o;if(e.singleton){var i=h++;n=d=d||u(e),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=u(e),r=function(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,n,e),o=function(){!function(t){null!==t.parentNode&&t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=c(n[r]);a[o].references--}for(var i=s(t,e),u=0;u<n.length;u++){var l=c(n[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=i}}}},function(t,e,n){function r(){}function o(t){return"<script>"+t+"</"+h+">"}var i,a=n(8),c=n(76),s=n(27),u=n(23),l=n(78),f=n(35),p=n(38),d="prototype",h="script",v=p("IE_PROTO"),m=function(){try{i=document.domain&&new ActiveXObject("htmlfile")}catch(t){}m=i?function(t){t.write(o("")),t.close();var e=t.parentWindow.Object;return t=null,e}(i):function(){var t,e=f("iframe");return e.style.display="none",l.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(o("document.F=Object")),t.close(),t.F}();for(var t=s.length;t--;)delete m[d][s[t]];return m()};u[v]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(r[d]=a(t),n=new r,r[d]=null,n[v]=t):n=m(),void 0===e?n:c(n,e)}},function(t,e,n){t.exports=n.p+"img/98.jpg"},function(t,e,n){t.exports=n.p+"./sound/sound.mp3"},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r,o,i,a=n(57),c=n(0),s=n(2),u=n(7),l=n(3),f=n(22),p=n(38),d=n(23),h=c.WeakMap;if(a){var v=f.state||(f.state=new h),m=v.get,g=v.has,y=v.set;r=function(t,e){return e.facade=t,y.call(v,t,e),e},o=function(t){return m.call(v,t)||{}},i=function(t){return g.call(v,t)}}else{var S=p("state");d[S]=!0,r=function(t,e){return e.facade=t,u(t,S,e),e},o=function(t){return l(t,S)?t[S]:{}},i=function(t){return l(t,S)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!s(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(0),o=n(37),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e){t.exports=!1},function(t,e,n){var r=n(3),o=n(60),i=n(17),a=n(6);t.exports=function(t,e){for(var n=o(e),c=a.f,s=i.f,u=0;u<n.length;u++){var l=n[u];r(t,l)||c(t,l,s(e,l))}}},function(t,e,n){var r=n(24),o=n(41),i=n(63),a=n(8);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(a(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(0);t.exports=r},function(t,e,n){function r(t){return function(e,n,r){var c,s=o(e),u=i(s.length),l=a(r,u);if(t&&n!=n){for(;l<u;)if((c=s[l++])!=c)return!0}else for(;l<u;l++)if((t||l in s)&&s[l]===n)return t||l||0;return!t&&-1}}var o=n(11),i=n(9),a=n(26);t.exports={includes:r(!0),indexOf:r(!1)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(44);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){var r=n(24);t.exports=r("navigator","userAgent")||""},function(t,e,n){"use strict";var r=n(4),o=n(46);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,e,n){var r=n(48);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(0),o=n(69),i=n(46),a=n(7);for(var c in o){var s=r[c],u=s&&s.prototype;if(u&&u.forEach!==i)try{a(u,"forEach",i)}catch(t){u.forEach=i}}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){var r=n(50),o=n(71);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);r(o,{insert:"head",singleton:!1}),t.exports=o.locals||{}},function(t,e,n){},function(t,e,n){var r=n(50),o=n(73);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);r(o,{insert:"head",singleton:!1}),t.exports=o.locals||{}},function(t,e,n){},function(t,e,n){"use strict";var r=n(4),o=n(47).findIndex,i=n(75),a=n(15),c="findIndex",s=!0,u=a(c);c in[]&&Array(1)[c]((function(){s=!1})),r({target:"Array",proto:!0,forced:s||!u},{findIndex:function(t,e){return o(this,t,1<arguments.length?e:void 0)}}),i(c)},function(t,e,n){var r=n(10),o=n(51),i=n(6),a=r("unscopables"),c=Array.prototype;null==c[a]&&i.f(c,a,{configurable:!0,value:o(null)}),t.exports=function(t){c[a][t]=!0}},function(t,e,n){var r=n(5),o=n(6),i=n(8),a=n(77);t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=a(e),c=r.length,s=0;s<c;)o.f(t,n=r[s++],e[n]);return t}},function(t,e,n){var r=n(42),o=n(27);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(24);t.exports=r("document","documentElement")},function(t,e,n){"use strict";var r=n(4),o=n(13),i=[].reverse,a=[1,2];r({target:"Array",proto:!0,forced:String(a)===String(a.reverse())},{reverse:function(){return o(this)&&(this.length=this.length),i.call(this)}})},function(t,e,n){"use strict";var r=n(4),o=n(2),i=n(13),a=n(26),c=n(9),s=n(11),u=n(28),l=n(10),f=n(30),p=n(15),d=f("slice"),h=p("slice",{ACCESSORS:!0,0:0,1:2}),v=l("species"),m=[].slice,g=Math.max;r({target:"Array",proto:!0,forced:!d||!h},{slice:function(t,e){var n,r,l,f=s(this),p=c(f.length),d=a(t,p),h=a(void 0===e?p:e,p);if(i(f)&&("function"!=typeof(n=f.constructor)||n!==Array&&!i(n.prototype)?o(n)&&null===(n=n[v])&&(n=void 0):n=void 0,n===Array||void 0===n))return m.call(f,d,h);for(r=new(void 0===n?Array:n)(g(h-d,0)),l=0;d<h;d++,l++)d in f&&u(r,l,f[d]);return r.length=l,r}})},function(t,e,n){"use strict";var r=n(4),o=n(48),i=n(14),a=n(1),c=n(49),s=[],u=s.sort,l=a((function(){s.sort(void 0)})),f=a((function(){s.sort(null)})),p=c("sort");r({target:"Array",proto:!0,forced:l||!f||!p},{sort:function(t){return void 0===t?u.call(i(this)):u.call(i(this),o(t))}})},function(t,e,n){"use strict";var r=n(4),o=n(26),i=n(25),a=n(9),c=n(14),s=n(29),u=n(28),l=n(30),f=n(15),p=l("splice"),d=f("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,v=Math.min;r({target:"Array",proto:!0,forced:!p||!d},{splice:function(t,e){var n,r,l,f,p,d,m=c(this),g=a(m.length),y=o(t,g),S=arguments.length;if(0===S?n=r=0:r=1===S?(n=0,g-y):(n=S-2,v(h(i(e),0),g-y)),9007199254740991<g+n-r)throw TypeError("Maximum allowed length exceeded");for(l=s(m,r),f=0;f<r;f++)(p=y+f)in m&&u(l,f,m[p]);if(n<(l.length=r)){for(f=y;f<g-r;f++)d=f+n,(p=f+r)in m?m[d]=m[p]:delete m[d];for(f=g;g-r+n<f;f--)delete m[f-1]}else if(r<n)for(f=g-r;y<f;f--)d=f+n-1,(p=f+r-1)in m?m[d]=m[p]:delete m[d];for(f=0;f<n;f++)m[f+y]=arguments[f+2];return m.length=g-r+n,l}})},function(t,e,n){"use strict";function r(t){var e,n,r,o,i,a,c,s,u=f(t,!1);if("string"==typeof u&&2<u.length)if(43===(e=(u=g(u)).charCodeAt(0))||45===e){if(88===(n=u.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+u}for(a=(i=u.slice(2)).length,c=0;c<a;c++)if((s=i.charCodeAt(c))<48||o<s)return NaN;return parseInt(i,r)}return+u}var o=n(5),i=n(0),a=n(43),c=n(36),s=n(3),u=n(19),l=n(84),f=n(12),p=n(1),d=n(51),h=n(41).f,v=n(17).f,m=n(6).f,g=n(87).trim,y="Number",S=i[y],x=S.prototype,b=u(d(x))==y;if(a(y,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var w,E=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof E&&(b?p((function(){x.valueOf.call(n)})):u(n)!=y)?l(new S(r(e)),n,E):r(e)},M=o?h(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),L=0;M.length>L;L++)s(S,w=M[L])&&!s(E,w)&&m(E,w,v(S,w));(E.prototype=x).constructor=E,c(i,y,E)}},function(t,e,n){var r=n(2),o=n(85);t.exports=function(t,e,n){var i,a;return o&&"function"==typeof(i=e.constructor)&&i!==n&&r(a=i.prototype)&&a!==n.prototype&&o(t,a),t}},function(t,e,n){var r=n(8),o=n(86);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(n){}return function(n,i){return r(n),o(i),e?t.call(n,i):n.__proto__=i,n}}():void 0)},function(t,e,n){var r=n(2);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,e,n){function r(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(a,"")),2&t&&(n=n.replace(c,"")),n}}var o=n(20),i="["+n(88)+"]",a=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$");t.exports={start:r(1),end:r(2),trim:r(3)}},function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(t,e,n){"use strict";n.r(e),n(16),n(66),n(68),n(70),n(72);var r=n(52),o=n.n(r),i=n(31),a=n.n(i),c=n(32),s=n.n(c),u=(n(74),n(79),n(80),n(81),n(82),n(83),n(53)),l=n.n(u);function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var p=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.puzzle=e,this.index=n,this.empty=!1,this.width=this.puzzle.width/this.puzzle.sizeGame,this.height=this.puzzle.height/this.puzzle.sizeGame,this.element=this.createElement(),e.blockContainer.appendChild(this.element),this.index!==this.puzzle.sizeGame*this.puzzle.sizeGame-1?this.setImage():this.empty=!0}return function(t,e,n){e&&f(t.prototype,e)}(t,[{key:"createElement",value:function(){var t=this,e=document.createElement("div"),n=document.createElement("div");e.appendChild(n);var r=this.width*(this.index%this.puzzle.sizeGame),o=this.height*Math.floor(this.index/this.puzzle.sizeGame);return e.classList.add("fragment"),n.classList.add("number-block"),n.innerHTML=this.index+1,e.draggable="true",e.style.backgroundSize="".concat(this.puzzle.width,"px ").concat(this.puzzle.height,"px"),e.style.width="".concat(this.width,"px"),e.style.height="".concat(this.height,"px"),e.style.left="".concat(r,"px"),e.style.top="".concat(o,"px"),e.addEventListener("click",(function(){e.classList.add("animation"),t.getPositionAndSwap(t.index),setTimeout((function(){e.classList.remove("animation")}),500)})),e.addEventListener("dragstart",(function(){e.classList.add("animation"),t.puzzle.dragIndex=t.index})),e.addEventListener("dragover",(function(t){t.preventDefault()})),e.addEventListener("drop",(function(){t.getPositionAndSwap(t.puzzle.dragIndex),setTimeout((function(){e.classList.remove("animation")}),1e3)})),e}},{key:"getPositionAndSwap",value:function(t){var e=0<arguments.length&&void 0!==t?t:this.puzzle.dragIndex,n=this.puzzle.findPosition(e),r=this.puzzle.findEmpty(),o=this.getXY(n),i=o.x,a=o.y,c=this.getXY(r),s=c.x,u=c.y;i!==s&&a!==u||1!==Math.abs(i-s)&&1!==Math.abs(a-u)||(this.puzzle.arrayMoves.push([n,r]),localStorage.arrayMoves=JSON.stringify(this.puzzle.arrayMoves),this.puzzle.swapFragment(n,r),this.puzzle.countSwap+=1,localStorage.setItem("countSwap",this.puzzle.countSwap),"true"===localStorage.getItem("sound")&&new Audio(l.a).play(),document.querySelector(".countSwap").innerHTML="Moves: ".concat(localStorage.getItem("countSwap")))}},{key:"setImage",value:function(){var t=this.getXY(this.index),e=t.x,n=t.y,r=this.width*e,o=this.height*n;this.element.style.backgroundImage="url(".concat(this.puzzle.image,")"),this.element.style.backgroundPosition="-".concat(r,"px -").concat(o,"px")}},{key:"setPosition",value:function(t){var e={left:this.width*(t%this.puzzle.sizeGame),top:this.height*Math.floor(t/this.puzzle.sizeGame)},n=e.left,r=e.top;this.element.style.left="".concat(n,"px"),this.element.style.top="".concat(r,"px")}},{key:"getXY",value:function(t){return{x:t%this.puzzle.sizeGame,y:Math.floor(t/this.puzzle.sizeGame)}}}]),t}();function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var h,v,m=function(){function t(e,n,r,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.wrapper=e,this.image=n,this.width=r,this.height=r,this.sizeGame=o,this.fragments=[],this.arrayMoves=[],this.countSwap=localStorage.getItem("countSwap"),this.dragIndex=0,this.autoFlag=!1,this.init(),this.blockContainer.style.width="".concat(this.width,"px"),this.blockContainer.style.height="".concat(this.height,"px"),this.setup()}return function(t,e,n){e&&d(t.prototype,e)}(t,[{key:"init",value:function(){this.blockContainer=document.createElement("div"),this.blockContainer.classList.add("block-container"),this.wrapper.appendChild(this.blockContainer)}},{key:"setup",value:function(){for(var t=this,e=0;e<this.sizeGame*this.sizeGame;e+=1)this.fragments.push(new p(this,e));var n=JSON.parse(localStorage.getItem("arrayMoves"));null==n?this.shuffle():(this.arrayMoves=n,this.autoSolve("reload")),document.querySelector(".countSwap").innerHTML=null==localStorage.getItem("countSwap")?"Moves: 0":"Moves: ".concat(localStorage.getItem("countSwap")),document.querySelector(".autoSolve").addEventListener("click",(function(){t.autoSolve(),t.autoFlag=!0}))}},{key:"shuffle",value:function(){for(var t=0;t<Math.pow(this.sizeGame,6);t+=1){var e=Math.floor(this.findEmpty()/this.sizeGame),n=this.findEmpty()%this.sizeGame,r=Math.floor(Math.random()*this.sizeGame*this.sizeGame),o=this.fragments[r].getXY(r),i=o.x,a=o.y;i!==n&&a!==e||1!==Math.abs(i-n)&&1!==Math.abs(a-e)||(this.arrayMoves.push([this.findPosition(this.fragments[r].index),this.findEmpty()]),this.swapFragment(this.findPosition(this.fragments[r].index),this.findEmpty()))}for(var c=this.arrayMoves.length-1;0<c;c-=1)this.arrayMoves[c][0]===this.arrayMoves[c-1][1]&&(this.arrayMoves.splice(c-1,2),c>this.arrayMoves.length-1&&(c-=1));localStorage.arrayMoves=JSON.stringify(this.arrayMoves)}},{key:"autoSolve",value:function(t){var e=this,n=40,r=this.arrayMoves.slice();"reload"===t&&(n=0,r=r.reverse());for(var o=0,i=function(t){var i=e,a=r[t][0],c=r[t][1];setTimeout((function(){i.swapFragment(a,c)}),o*n),o+=1},a=r.length-1;-1<a;a-=1)i(a)}},{key:"swapFragment",value:function(t,e){var n=[this.fragments[e],this.fragments[t]];if(this.fragments[t]=n[0],this.fragments[e]=n[1],this.fragments[t].setPosition(t),this.fragments[e].setPosition(e),this.finish()&&(null!==this.countSwap||this.autoFlag)){var r=document.querySelector(".finish-modal");r.style.transitionDelay="1s",r.style.transform="translate(0)";var o=document.querySelector(".info-modal");if(this.autoFlag)o.innerText="The game has ended automatically!",o.innerText+="\nClose to start new game!";else{var i=localStorage.getItem("min"),a=localStorage.getItem("sec");o.innerText="You win!!!",o.innerText+="\nMoves:  ".concat(localStorage.getItem("countSwap")),o.innerText+="  Time: ".concat(i<10?"0"+i:i," : ").concat(a<10?"0"+a:a),o.innerText+="\nClose to start new game!";var c=JSON.parse(localStorage.getItem("topTen"));c.length<10?(c.push(60*Number(i)+Number(a)),c.sort((function(t,e){return t-e}))):c[c.length-1]>60*Number(i)+Number(a)&&(c[c.length-1]=60*Number(i)+Number(a),c.sort((function(t,e){return t-e}))),localStorage.topTen=JSON.stringify(c)}}}},{key:"findPosition",value:function(t){return this.fragments.findIndex((function(e){return e.index===t}))}},{key:"findEmpty",value:function(){return this.fragments.findIndex((function(t){return t.empty}))}},{key:"finish",value:function(){for(var t=0;t<this.fragments.length;t+=1)if(t!==this.fragments[t].index)return!1;return!0}}]),t}(),g=document.createElement("div"),y=document.createElement("div");function S(t){var e=localStorage.getItem("min"),n=localStorage.getItem("sec");null==n&&(n=e=0,localStorage.setItem("min",e),localStorage.setItem("sec",n)),60==++n&&(n=0,e++),localStorage.setItem("min",e),localStorage.setItem("sec",n),t.innerHTML="Time: ".concat(e<10?"0"+e:e," : ").concat(n<10?"0"+n:n)}function x(){clearInterval(h);var t=document.getElementById("mySelect").value,e=JSON.parse(localStorage.getItem("topTen")),n=localStorage.getItem("sound");y.innerHTML="",localStorage.clear(),localStorage.setItem("sizeGame",t),localStorage.setItem("sound",n),localStorage.topTen=JSON.stringify(e),b()}function b(){var t=document.createElement("div"),e=document.createElement("button"),n=document.createElement("button"),r=document.createElement("div"),i=document.createElement("div"),c=document.createElement("div"),u=document.createElement("div");e.classList.add("new-game"),r.classList.add("time"),i.classList.add("countSwap"),c.classList.add("sound"),u.classList.add("topTen"),n.classList.add("autoSolve"),y.appendChild(t),t.appendChild(e),t.appendChild(n),function(t){var e=["3x3","4x4","5x5","6x6","7x7","8x8"],n=document.createElement("select");t.classList.add("panel-info"),n.classList.add("select"),n.id="mySelect",t.appendChild(n);for(var r=0;r<e.length;r+=1){var o=document.createElement("option");o.value=e[r][0],o.text=e[r],n.appendChild(o)}}(t),t.appendChild(r),t.appendChild(i),t.appendChild(c),t.appendChild(u),function(){var t=document.createElement("div");t.classList.add("finish-modal");var e=document.createElement("span");e.innerHTML="&times;",e.classList.add("close-modal");var n=document.createElement("p");n.innerText="You win!!!",n.classList.add("info-modal"),document.querySelector("body").appendChild(t),t.appendChild(e),t.appendChild(n),e.onclick=function(){t.style.transitionDelay="0s",t.style.transform="translate(100%)",x()}}(),e.innerHTML="New Game",n.innerHTML="AutoSolve",e.addEventListener("click",x),S(r),h=setInterval((function(){S(r)}),1e3),function(){var t=document.querySelector(".sound"),e=!1;t.style.backgroundImage="url(".concat(a.a,")"),"true"===localStorage.getItem("sound")&&(e=!0,t.style.backgroundImage="url(".concat(s.a,")")),t.addEventListener("click",(function(){t.style.backgroundImage="url(".concat(e?a.a:s.a,")"),e=!e,localStorage.setItem("sound",e)}))}(),function(t){var e=document.createElement("div");e.classList.add("top-modal");var n=document.createElement("span");n.innerHTML="&times;",n.classList.add("close-modal-top");var r=document.createElement("p");r.innerHTML="<h3>Top 10 result by time!</h3>",r.classList.add("top-info"),document.querySelector("body").appendChild(e),e.appendChild(n),e.appendChild(r),null===JSON.parse(localStorage.getItem("topTen"))&&(localStorage.topTen=JSON.stringify([])),t.addEventListener("click",(function(){e.style.transform="translate(0)",JSON.parse(localStorage.getItem("topTen")).forEach((function(t,e){var n=Math.floor(t/60),o=t-60*n;o=o<10?"0".concat(o):o,r.innerHTML+="\n <p>".concat(e+1," place - ").concat(n," min ").concat(o," sec </p>")}))})),n.onclick=function(){e.style.transform="translate(100%)",x()}}(u);var l=new m(y,o.a,v,function(){var t,e=document.getElementById("mySelect");return t=null!==localStorage.getItem("sizeGame")?localStorage.getItem("sizeGame"):4,e.value=t,e.addEventListener("change",(function(){localStorage.setItem("sizeGame",e.value),x()})),t}());console.log(l)}v=730<window.innerWidth?600:window.innerWidth<730&&530<window.innerWidth?450:300,y.classList.add("puzzle-wrapper"),g.classList.add("main-container"),g.appendChild(y),document.querySelector("body").appendChild(g),window.onresize=function(t){var e=window.screen.width;v=e<730&&530<e?450:e<530?300:600,clearInterval(h),y.innerHTML="",b()},b()}]);
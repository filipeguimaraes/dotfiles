'use strict';(()=>{Registry.require(["helper","promise"],()=>{let n={},p={},e=null;const g=[],h=Registry.get("helper"),m=Registry.get("promise"),r=function(b){let a=b,c=Array.prototype.slice.call(arguments,1);1==c.length&&"Array"===h.toType(c[0])&&(c=c[0]);const d=/(^|_)0[a-zA-Z]+0(_|$)/;for(let b=0;b<c.length;b++){const f=a.match(d);if(!f){console.log("getMessage(): wrong argument count!!!");break}a=a.replace(d,(f[1]?" ":"")+c[b]+(f[2]?" ":""))}return a.replace(/_/g," ")},y=(b,a)=>{let c=b.message;
1==a.length&&"Array"===h.toType(a[0])&&(a=a[0]);b.placeholders&&Object.keys(b.placeholders).forEach(d=>{try{const f=Number(b.placeholders[d].content.replace(/^\$/,""))-1;let q;f<a.length?(q=a[f],c=c.replace("$"+d+"$",q)):console.log("i18n: invalid argument count on processing '"+c+"' with args "+JSON.stringify(a))}catch(f){console.log("i18n: error processing '"+c+"' with args "+JSON.stringify(a))}});return c},t=function(b){const a=[arguments[0]],c=[],d=a=>{for(let b=0;b<a.length;b++)"Array"===h.toType(a[b])?
d(a[b]):c.push(String(a[b]))};d(Array.prototype.slice.call(arguments,1));c.length&&a.push(c);return rea.i18n.getMessage.apply(this,a)},u=b=>{const a=m();Registry.getRaw("_locales/"+b+"/messages.json",c=>{try{if(c)return a.resolve(JSON.parse(c))}catch(d){console.log("i18n: parsing locale "+b+" failed!")}a.reject()});return a.promise()};var v=b=>{const a=m();b=b.concat("en");let c=-1;const d=()=>{c++;if(c<b.length){const f=b[c];if(!f||!z.includes(f))return d();u(f).then(a=>{n=a;if(!k&&"en"!=f)return u("en").then(a=>
{p=a||{}})}).then(()=>{a.resolve(f)}).fail(()=>{d()})}else a.resolve()};d();return a.promise()},l=b=>b?h.map(b.replace(/-/g,"_").split("_"),(a,b)=>b?a.toUpperCase():a.toLowerCase()).join("_"):b;const w=(b,a)=>{let c,d;a=a||(e?[e,e.split("_")[0]].concat(g).filter(a=>a):g);h.each(a,(a,e)=>{h.each(b,(b,f)=>{b=l(b);const g=b.split(/_/)[0];if(b==a)return d=f,!1;g==a&&(void 0===c||e<c)&&(d=f,c=e)});if(void 0!==d)return!1});return d},x=[{name:"Arabic - \u200e\u202b\u0627\u0644\u0639\u0631\u0628\u064a\u0629\u202c\u200e",
value:"ar"},{name:"Chinese (Simplified) - \u4e2d\u6587\uff08\u7b80\u4f53\u4e2d\u6587\uff09",value:"zh_CN"},{name:"Chinese (Traditional) - \u4e2d\u6587\uff08\u7e41\u9ad4\uff09",value:"zh_TW"},{name:"Croatian - hrvatski",value:"hr"},{name:"Czech - \u010de\u0161tina",value:"cs"},{name:"English",value:"en"},{name:"French - fran\u00e7ais",value:"fr"},{name:"German - Deutsch",value:"de"},{name:"Hindi - \u0939\u093f\u0928\u094d\u0926\u0940",value:"hi"},{name:"Hungarian - magyar",value:"hu"},{name:"Indonesian - Indonesia",
value:"id"},{name:"Italian - italiano",value:"it"},{name:"Japanese - \u65e5\u672c\u8a9e",value:"ja"},{name:"Korean - \ud55c\uad6d\uc5b4",value:"ko"},{name:"Norwegian - norsk",value:"nb"},{name:"Polish - polski",value:"pl"},{name:"Portuguese (Brazil) - portugu\u00eas (Brasil)",value:"pt_BR"},{name:"Portuguese (Portugal) - portugu\u00eas (Portugal)",value:"pt_PT"},{name:"Russian - \u0440\u0443\u0441\u0441\u043a\u0438\u0439",value:"ru"},{name:"Serbian - \u0441\u0440\u043f\u0441\u043a\u0438",value:"sr"},
{name:"Slovak - sloven\u010dina",value:"sk"},{name:"Spanish - espa\u00f1ol",value:"es"},{name:"Turkish - T\u00fcrk\u00e7e",value:"tr"},{name:"Ukrainian - \u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",value:"uk"},{name:"Vietnamese - Ti\u1ebfng Vi\u1ec7t",value:"vi"}];var z=x.map(b=>b.value),k="undefined"!==typeof rea?rea.i18n.native_support:!1;Registry.register("i18n","87658639",{init:()=>{const b=()=>{const a=m();e||k?a.resolve():v(g).then(a=>{e=a}).always(a.resolve);return a.promise()},
a=l(k?rea.i18n.getUILanguage():navigator.language);if(a){const b=[a],d=a.split(/_/);d[0]!==a&&b.push(d[0]);b.forEach(a=>{g.unshift(a)})}b().then(()=>{k&&rea.i18n.getAcceptLanguages(a=>{a.forEach(a=>{g.push(l(a))});return b()})})},getMessage:function(b){let a;return e&&(a=n[b]||p[b])?y(a,Array.prototype.slice.call(arguments,1)):k&&(a=t.apply(this,arguments))?a:Registry.isDevVersion("helper")?(a="#"+r.apply(this,arguments).replace(/ /g,"#")+"#",console.warn("i18n:"+a),a):r.apply(this,arguments)},getOriginalMessage:t,
normalizeLocale:l,getTranslation:(b,a)=>{let c,d;if(b&&(d=b[a+"_i18n"])){b[a]&&(d=h.copy(d,{en:b[a]}));const f=Object.keys(d);let e;void 0!==(e=w(f))&&(c=d[f[e]])}return c||b[a]},setLocale:b=>{const a=m();"null"===b&&(b=null);b&&(b=l(b));!b&&k?(e=b,a.resolve()):b!==e?v([b].concat(g).concat([e])).done(a=>{e=a;e!=b&&console.log("i18n: retrieving locale "+b+" failed!")}).always(a.resolve):a.resolve();return a.promise()},getLocale:()=>e,getUiLocale:()=>l(e||k?rea.i18n.getUILanguage():g[0]||navigator.language||
"en"),getBestLocale:w,supported:x})})})();

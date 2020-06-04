'use strict';Registry.require("promise helper i18n xmlhttprequest uri permission convert".split(" "),()=>{const f={DEFAULT:"default",OFF:"off",NATIVE:"native",CHROME:"chrome",NOT_ENABLED:"not_enabled",NOT_WHITELISTED:"not_whitelisted",NOT_PERMITTED:"not_permitted",NOT_SUPPORTED:"not_supported",NOT_SUCCEEDED:"not_succeeded"},g=Registry.log,q=rea.FEATURES,l=Registry.get("promise"),r=Registry.get("helper"),k=Registry.get("permission"),u=Registry.get("i18n"),v=Registry.get("xmlhttprequest"),D=Registry.get("uri"),
w=Registry.get("convert"),E=v.run;let m=f.OFF,x=[],p=null,y=!1;const n={};let z=!1,A=()=>{const a=l();Registry.vendor(["vendor/saveas/filesaver"],()=>{A=l.Pledge;a.resolve()});return a.promise()};const t=()=>null!==p?l.Pledge(p):!rea.permissions.supported&&rea.downloads.supported?(p=!0,l.Pledge(p)):k.has(k.permDownloads).then(a=>{p=a;g.log("downs: permission to use rea.downloads ->",a);return t()}),F=function(a,b){if(this[a])this[a]("function"==typeof b?b():b)},h=function(a,b){this[a]&&(F.apply(this,
arguments),this[a]=null)};let G=0;var H=(a,b,c)=>{p&&!z&&rea.downloads.supported&&(rea.downloads.onChanged.addListener(B),z=!0);const e={filename:b.name};let d;q.RUNTIME.FIREFOX&&b.url&&b.url.startsWith("data:")&&(b.url=URL.createObjectURL(w.dataURItoBlob(b.url)),window.setTimeout(()=>{URL.revokeObjectURL(b.url)},1E4));q.RUNTIME.FIREFOX&&52>q.RUNTIME.BROWSER_VERSION?d=["url"]:(d=["url","method","saveAs","headers"],e.body=b.data);d.forEach(a=>{e[a]=b[a]});const f=n[a]={callbacks:c,url:b.url,name:b.name};
rea.downloads.download(e,(a,b)=>{if(void 0===a)h.apply(c,["onerror",{error:b}]);else{f.id=a;b=b=>{rea.downloads.cancel(a,()=>{d();b&&b()})};var d=()=>{rea.downloads.search({id:a},b=>{let c;(c=b[0])?B(c):g.warn("downs: unable to query download ID",a)})};!0===f.cancel?b():(f.cancel=b,f.interval=window.setInterval(d,1E3))}})},I=(a,b,c)=>{void 0===c&&(c={});b.responseType="blob";b.method=b.method||"GET";const e=E(b,{onload:a=>{if(4!=a.readyState||200!=a.status&&0!=a.status||a.error)h.apply(c,["onerror",
{}]);else{const d=v.parseHeaders(a.responseHeaders)["content-type"];a=new Blob([a.response],{type:b.overrideMimeType||d||"binary/octet-stream"});saveAs(a,b.name);h.apply(c,["onload",{}])}},ondone:function(){h.apply(c,["ondone",{}]);delete n[a]},onerror:c.onerror,ontimeout:c.ontimeout,onprogress:c.onprogress});n[a]={cancel:e?e.abort:()=>{}}},B=a=>{let b,c;Object.keys(n).every(e=>{let d;return(d=n[e])&&d.id==a.id?(c=e,b=d,!1):!0});if(b){const e=b.callbacks,d=()=>{b.interval&&(window.clearInterval(b.interval),
b.interval=null);delete n[c]};a.error||a.state&&"interrupted"==a.state.current?(g.warn("downs: download of",b.name,"("+b.url+")","failed",a.error),h.apply(e,["onerror",{error:f.NOT_SUCCEEDED,details:a.error}]),d()):a.endTime||a.state&&"complete"==a.state.current?(g.log("downs: download of",b.name,"("+b.url+")","finished"),h.apply(e,["onload",{}]),h.apply(e,["ondone",{}]),d()):void 0===a.totalBytes&&void 0===a.bytesReceived||h.apply(e,["onprogress",{loaded:a.bytesReceived,total:a.totalBytes,estimatedEndTime:a.estimatedEndTime}])}},
C=a=>{let b=!1;r.each(x,(c,e)=>{if(c&&c.length)try{let d;if("/"===c[0])c=c.replace(/^\//g,"").replace(/\/$/g,""),"$"!==c[c.length-1]&&(g.log("downs: patching $ into",c),c+="$"),d=new RegExp(c,"i");else if("."===c[0]){const a=[r.escapeForRegExp(c),"$"].join("");d=new RegExp(a,"i")}else g.warn("downs: invalid file extension:",'"'+c+'"','starts neither with "." nor with "/"');if(d&&-1!==a.search(d))return g.log("downs:",c,"matched @",a),b=!0}catch(d){g.warn("downs: can't process",c,d)}});return b};Registry.register("downloads",
"87658639",{start:function(a,b){const c=this,e=G++,d=[e].concat(Array.prototype.slice.call(arguments));g.log("downs: start",a);if(!a.internal){if(m==f.OFF){g.warn("downs: feature is not enabled");h.apply(b,["onerror",{error:f.NOT_ENABLED}]);return}if(!a.name||!C(a.name)){g.warn("downs:",a.name,"is not whitelisted");h.apply(b,["onerror",{error:f.NOT_WHITELISTED}]);return}if(!rea.downloads.supported&&m==f.CHROME){g.warn("downs: this download mode is not supported");h.apply(b,["onerror",{error:f.NOT_SUPPORTED}]);
return}}(()=>rea.downloads.supported&&(a.internal||m==f.CHROME||m==f.DEFAULT)?t().then(e=>{if(e)H.apply(c,d);else{if(a.internal||m!=f.CHROME)return l.Breach();g.warn("downs: download permission is missing");h.apply(b,["onerror",{error:f.NOT_PERMITTED}])}}):l.Breach())().fail(()=>{const b=D.parse(a.url);a.name=a.name||"File.download";A().done(()=>{"data:"==b.protocol?saveAs(w.dataURItoBlob(a.url),a.name):I.apply(c,d)})});return e},cancel:a=>{if(a=n[a])return a.cancel?"function"===typeof a.cancel&&
a.cancel():a.cancel=!0,!0},set_mode:a=>{m=a;m==f.CHROME&&t().done(a=>{a||k.has(k.permDownloads).then(a=>{const b=l();y||a?b.resolve({permission:a,asked:!1}):k.ask(k.permDownloads,u.getMessage("Browser_API_Downloads"),u.getMessage("Click_here_to_allow_TM_to_start_downloads")).done(a=>{b.resolve({permission:a,asked:!0})});y=!0;return b.promise()}).done(a=>{a.permission&&a.asked&&rea.page.reload()})})},set_whitelist:a=>{"Array"===r.toType(a)&&(x=a)},is_whitelisted:C,remove_permission:()=>k.remove(k.permDownloads),
staticVars:f})});

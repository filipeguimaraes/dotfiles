'use strict';Registry.require(["promise","icon","helper"],()=>{const h=Registry.log,r=Registry.get("promise"),w=Registry.get("icon"),v=Registry.get("helper"),l=rea.FEATURES,x=(()=>{const a={};let c=null,e=0,d;const f={init:function(){if(d)return d;const e=r(),f=a=>{c=a||"unknown";h.log("notify: chronos level",a);e.resolve()};rea.notifications.supported?(rea.notifications.getPermissionLevel(f),rea.notifications.onPermissionLevelChanged.addListener(f),rea.notifications.onClicked.addListener(b=>{h.log("notify: chronos click",
b);a[b]&&(a[b].cb.click&&a[b].cb.click(),a[b].cancel(),delete a[b])}),rea.notifications.onClosed.addListener(b=>{h.log("notify: chronos close",b);a[b]&&a[b].cb.close&&a[b].cb.close();delete a[b]})):f("unsupported");return d=e.promise()},create:function(d,p,b,q){return f.init().then(()=>{const f=r();let k=10;const n=()=>{if(c)if("granted"==c){const g={nid:null,cb:{},on:function(a,m){g.cb[a]=m},cancel:function(){},show:function(){const c={type:"basic",title:p||"",message:b||""};c.iconUrl=0==e?d:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
l.RUNTIME.CHROME&&(70<=l.RUNTIME.BROWSER_VERSION&&void 0!==q.silent&&(c.silent=q.silent),50<=l.RUNTIME.BROWSER_VERSION&&(c.requireInteraction=!0));const m=v.createUUID();rea.notifications.create(m,c,()=>{rea.runtime.lastError?1>e?(h.log("notify: chronos creating failed, retry...",rea.runtime.lastError),e++,g.show()):(h.log("notify: chronos creating finally failed",rea.runtime.lastError),f.reject()):(h.log("notify: chronos created",m),g.cancel=()=>{a[m]&&rea.notifications.clear(m,()=>{})},a[m]=g)})}};
f.resolve(g)}else f.resolve();else{const a=()=>{c?n():k--?window.setTimeout(a,200):f.resolve()};a()}};n();return f.promise()})}};return f})(),y=(()=>{const a={};let c=null,e;const d={init:function(){if(e)return e;const a=a=>{c=a||"unknown";h.log("notify: notification level",a)};window.Notification?a(Notification.permission):a("unsupported");return e=r.Pledge()},create:function(f,e,p,b){return d.init().then(()=>{const d=r(),t=()=>{if("granted"==c||"default"==c){const c={nid:null,cb:{},on:function(a,
b){c.cb[a]=b},cancel:function(){},show:function(){const d={body:p||"",icon:f};l.RUNTIME.CHROME&&(43<=l.RUNTIME.BROWSER_VERSION&&void 0!==b.silent&&(d.silent=b.silent),d.requireInteraction=!0);const g=v.createUUID(),k=new window.Notification(e||"",d);k.onclick=()=>{h.log("notify: notification click",g);a[g]&&(a[g].cb.click&&a[g].cb.click(),a[g].cancel(),delete a[g])};k.onclose=k.onerror=c=>{h.log("notify: notification close",g,c);a[g]&&a[g].cb.close&&a[g].cb.close();delete a[g]};c.cancel=()=>{a[g]&&
k.close()};a[g]=c}};d.resolve(c)}else if("denied"==c)d.resolve();else if("unsupported"==c)d.resolve();else{const a=a=>{c="granted"==a?"granted":"denied";t()};l.RUNTIME.SAFARI?Notification.requestPermission(a):Notification.requestPermission().then(a)}};t();return d.promise()})}};return d})(),u={notify:function(a,c,e,d,f){d=d||{};const l=d.timeout;let p=!1;f||(p=!0,f=()=>{});let b=null,q=!1,t=!1,k=null,n;const g=()=>{k&&window.clearTimeout(k);q||f({});t=!0},u=()=>{q=!0;const a={clicked:q};f&&f(a);b&&
b.cancel()};e=e||rea.extension.getURL("images/icon128.png");w.getDataUriFromUrl(e).then(a=>{n=a||e;return r.Pledge()}).then(()=>x.create(n,a,c,d)).then(b=>{if(!b&&window.webkitNotifications)try{const d=window.webkitNotifications.createNotification(n,a||"",c||"");b={on:function(a,c){d["on"+a]=c},cancel:function(){t||d.cancel()},show:function(){d.show()}}}catch(z){h.warn("notify: webkitNotifications creation failed with: "+z.message)}return b}).then(b=>b?b:y.create(n,a,c,d)).then(b=>{b||(b={cb:{},on:function(a,
c){b.cb[a]=c},cancel:function(){},show:function(){p||window.setTimeout(()=>{confirm((a?a+"\n\n":"")+c)?b.cb.click&&b.cb.click():b.cb.close&&b.cb.close()},1)}});return b}).then(d=>{b=d;b.on("close",g);b.on("click",u);k=window.setTimeout(()=>{k=null;b.cancel()},l?l:6E5);h.log("notify:",a,c,e,l);b.show()});return{cancel:function(){b&&b.cancel()}}},showUpdate:function(a,c,e,d){return u.notify(a,c,e,{timeout:3E5},d)},show:function(a,c,e,d,f){return u.notify(a,c,e,d,f)},highlight:function(a,c){rea.tabs.highlight({tabs:a},
c)}};Registry.register("notify","87658639",()=>u)});
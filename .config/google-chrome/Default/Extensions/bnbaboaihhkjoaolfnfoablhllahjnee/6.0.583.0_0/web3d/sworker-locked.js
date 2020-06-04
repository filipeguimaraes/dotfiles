/* global self, caches*/
 
var silent = true, // disable output to console
  cacheConfig = {
    "unique_id": "#5.0.583.0:1589353225077",
    "urls_to_cache": [
      "https://www.geogebra.org/apps/5.0.583.0/web3d/E3E8D597177655CD064573DEB3155C66.cache.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/clear.cache.gif",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/deferredjs/E3E8D597177655CD064573DEB3155C66/1.cache.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/deferredjs/E3E8D597177655CD064573DEB3155C66/10.cache.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/deferredjs/E3E8D597177655CD064573DEB3155C66/11.cache.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/deferredjs/E3E8D597177655CD064573DEB3155C66/12.cache.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/deferredjs/E3E8D597177655CD064573DEB3155C66/13.cache.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/deferredjs/E3E8D597177655CD064573DEB3155C66/14.cache.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/deferredjs/E3E8D597177655CD064573DEB3155C66/2.cache.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/deferredjs/E3E8D597177655CD064573DEB3155C66/3.cache.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/deferredjs/E3E8D597177655CD064573DEB3155C66/4.cache.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/deferredjs/E3E8D597177655CD064573DEB3155C66/5.cache.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/deferredjs/E3E8D597177655CD064573DEB3155C66/6.cache.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/deferredjs/E3E8D597177655CD064573DEB3155C66/7.cache.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/deferredjs/E3E8D597177655CD064573DEB3155C66/8.cache.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/deferredjs/E3E8D597177655CD064573DEB3155C66/9.cache.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/base/jlm_cmmi10.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/base/jlm_cmmib10.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/cyrillic/jlm_wnbx10.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/cyrillic/jlm_wnbxti10.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/cyrillic/jlm_wnr10.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/cyrillic/jlm_wnss10.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/cyrillic/jlm_wnssbx10.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/cyrillic/jlm_wnssi10.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/cyrillic/jlm_wnti10.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/cyrillic/jlm_wntt10.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/euler/jlm_eufb10.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/euler/jlm_eufm10.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/greek/jlm_fcmbipg.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/greek/jlm_fcmbpg.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/greek/jlm_fcmripg.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/greek/jlm_fcmrpg.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/greek/jlm_fcsbpg.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/greek/jlm_fcsropg.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/greek/jlm_fcsrpg.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/greek/jlm_fctrpg.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/latin/jlm_cmr10.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/latin/jlm_jlmbi10.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/latin/jlm_jlmbx10.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/latin/jlm_jlmi10.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/latin/jlm_jlmr10.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/latin/jlm_jlmsb10.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/latin/jlm_jlmsbi10.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/latin/jlm_jlmsi10.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/latin/jlm_jlmss10.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/latin/jlm_jlmtt10.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/latin/optional/jlm_cmbx10.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/latin/optional/jlm_cmbxti10.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/latin/optional/jlm_cmssbx10.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/latin/optional/jlm_cmssi10.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/latin/optional/jlm_cmti10.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/latin/optional/jlm_cmtt10.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/maths/jlm_cmbsy10.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/maths/jlm_msam10.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/maths/jlm_msbm10.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/maths/jlm_rsfs10.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/maths/jlm_special.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/maths/jlm_stmary10.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/fonts/maths/optional/jlm_dsrom10.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/html/ggtcallback.html",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/html/opener.html",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/gl-matrix-min.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_af.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_am.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_ar-MA.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_ar-TN.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_ar.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_az.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_bg.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_bn.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_bs.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_ca-XV.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_ca.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_cs.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_cy.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_da.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_de-AT.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_de.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_el.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_en-AU.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_en-GB.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_en.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_eo.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_es-ES.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_es-UY.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_es.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_et.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_eu.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_fa.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_fi.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_fil.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_fr.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_gl.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_he.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_hi.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_hr.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_hu.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_hy.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_id.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_is.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_it.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_ja.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_ka.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_kk.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_km.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_kn.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_ko.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_lt.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_lv.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_mk.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_ml.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_mn.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_mr.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_ms.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_nb.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_ne.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_nl-NL.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_nl.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_nn.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_pl.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_pt-PT.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_pt.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_ro.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_ru.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_si.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_sk.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_sl.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_sq.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_sr.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_sv.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_ta.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_tg.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_th.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_tr.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_ug.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_uk.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_uz.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_vi.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_xh.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_yi.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_zh-CN.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/properties_keys_zh-TW.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/webfont.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/workercheck.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/zSpace.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/zipjs/codecs.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/zipjs/pako1.0.6_min.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/js/zipjs/z-worker.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/web3d.nocache.js",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/webfont/OpenDyslexicAlta.woff2",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/webfont/Quicksand.woff2",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/webfont/SourceSansPro.woff2",
    "https://www.geogebra.org/apps/5.0.583.0/web3d/webfont/TitilliumWeb.woff2",
    "https://www.geogebra.org/apps/deployggb.js",
    "https://www.geogebra.org/3d",
    "https://www.geogebra.org/scientific",
    "https://www.geogebra.org/cas",
    "https://www.geogebra.org/classic",
    "https://www.geogebra.org/geometry",
    "https://www.geogebra.org/graphing",
    "https://www.geogebra.org/notes"
    ]
  };
 
function loadIntoCache(cache) {
  silent || console.info('[install] Caches opened, adding GeoGebraWeb js files to cache');
  // check if cdn.geogebra.org version already exists!
  cacheConfig.urls_to_cache.forEach(function (curUrl) {
    caches.match(curUrl).then(function (response) {
      if (response) {
        silent || console.log('[install] Resource already cached: ' + curUrl);
        return false;
      }
      silent || console.log('[install] Resource added to cache: ' + curUrl);
      return cache.add(curUrl);
    });
  });
}
        
self.addEventListener('install', function (event) {
  "use strict";
  silent || console.info('[install] Started');
  event.waitUntil(
    caches
      .open(cacheConfig.unique_id)
      .then(loadIntoCache)
  );
});
 
self.addEventListener('fetch', function (event) {
  "use strict";
  // Use the service worker only for uls from the urls_to_cache array
  if (cacheConfig.urls_to_cache.indexOf(event.request.url) !== -1) {
    event.respondWith(
      caches
        .match(event.request)
        .then(function (response) {
          // first attempt: find file in caches
          if (response) {
            silent || console.log("[fetch] Load resource with original url from cache: " + event.request.url);
            return response;
          }
          // second attempt: fetch un-cached file from other place
          silent || console.log("[fetch] No match in cached files: " + event.request.url);
          return fetch(event.request);
        }).catch(function (reason) {
        silent || console.error(reason);
      })
    );
  }
});
 
self.addEventListener('activate', function (event) {
  "use strict";
  silent || console.info("[activate]");
  event.waitUntil(
    caches
      .keys()
      .then(function (cacheNames) {
        return Promise.all(
          cacheNames.map(function (cacheName) {
            if (cacheConfig.unique_id !== cacheName) {
              silent || console.log("deleting from cache " + cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
  );
});
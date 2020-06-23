if(!self.define) {
  const e=e=>{
    "require"!==e&&(e+=".js");
    let s=Promise.resolve();
    return r[e]||(s=new Promise(async s=>{
      if("document"in self){
        const r=document.createElement("script");
        r.src=e,document.head.appendChild(r),
          r.onload=s}else importScripts(e),
            s()})),
      s.then(()=>{
      if(!r[e])throw new Error(`Module ${e} didn’t register its module`);
      return r[e]})},s=(s,r)=>{Promise.all(s.map(e)).then(e=>r(1===e.length?e[0]:e))},
        r={require:Promise.resolve(s)};
  self.define=(s,c,i)=>{
    r[s]||(r[s]=Promise.resolve().then(()=>{
      let r={};const o={uri:location.origin+s.slice(1)};
      return Promise.all(c.map(s=>{switch(s){case"exports":return r;
        case"module":return o;default:return e(s)}})).then(e=>{
        const s=i(...e);
        return r.default||(r.default=s),
          r})}))}}define("./batja.sw.js",
                         ["./workbox-b909103c"],
                         (function(e){"use strict";
                                      self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),
                                        e.precacheAndRoute([{url:"css/animate.css",revision:"cb67371414710491ee3730390d1efb33"},
                                                            {url:"css/bootstrap.min.css",revision:"04aca1f4cd3ec3c05a75a879f3be75a3"},
                                                            {url:"css/classy-nav.css",revision:"17f4a0300718e310f3cca3ee7b447224"},
                                                            {url:"css/font-awesome.min.css",revision:"269550530cc127b6aa5a35925a7de6ce"},
                                                            {url:"css/magnific-popup.css",revision:"2239303d6f05be6b812d727760b745c9"},
                                                            {url:"css/nice-select.css",revision:"4c71a5a75930626216f8ef9fcf0ba96e"},
                                                            {url:"css/owl.carousel.min.css",revision:"11f8f55299612003d16158106d01f2f0"},
                                                            {url:"fonts/classy.woff",revision:"999ab95a97ed648512c4e9fd82441129"},
                                                            {url:"fonts/fontawesome-webfont.woff",revision:"fee66e712a8a08eef5805a46892932ad"},
                                                            {url:"index.html",revision:"192d4b4596114c55983b0973d64aab91"},
                                                            {url:"js/active.js",revision:"4f947e7e96ea900b8e5c0b7ecd0e5ed7"},
                                                            {url:"js/bootstrap/bootstrap.min.js",revision:"67176c242e1bdc20603c878dee836df3"},
                                                            {url:"js/bootstrap/popper.min.js",revision:"5644e6835941af44dcb5cead916c2b79"},
                                                            {url:"js/jquery/jquery-2.2.4.min.js",revision:"710458dd559c957714ac4a8e95357eb5"},
                                                            {url:"js/plugins/plugins.js",revision:"62522fc558cb91fcefd110c71145e0e4"},
                                                            {url:"manifest.json",revision:"766c3011d20b33c846e7b157bb2605c1"},
                                                            {url:"package-lock.json",revision:"fca697391e97f70ec954498c23b521ba"},
                                                            {url:"package.json",revision:"0f3df17676c391b4fffb95481a1d6766"},
                                                            {url:"pages/404.html",revision:"bb99542719730cadec3891e3afc62565"},
                                                            {url:"pages/offline.html",revision:"c6bfafdd4b7ad0b1982cbe1048a93e51"},
                                                            {url:"server.js",revision:"247337816760422e74a4f8397e36beb5"},
                                                            {url:"style.css",revision:"fd9316c9f8bace7e24589097d0a81858"}],
                                                           {}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.NetworkFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:10,purgeOnQuotaError:!0})]}),"GET")}));
//# sourceMappingURL=batja.sw.js.map

if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),d={module:{uri:c},exports:t,require:r};s[c]=Promise.all(i.map((e=>d[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-2e6be583"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"f3a35d444e1df36318a7444cb2865667"},{url:"/_next/static/CkTdXsyk9YwTw52DNP62-/_buildManifest.js",revision:"a3ee29722d22236dad9d7381d6167234"},{url:"/_next/static/CkTdXsyk9YwTw52DNP62-/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/161-ec3901c78b64bbf5.js",revision:"CkTdXsyk9YwTw52DNP62-"},{url:"/_next/static/chunks/514-57e27517576afa43.js",revision:"CkTdXsyk9YwTw52DNP62-"},{url:"/_next/static/chunks/564-3f6a823899674d6a.js",revision:"CkTdXsyk9YwTw52DNP62-"},{url:"/_next/static/chunks/app/(public)/about/layout-c05bbcaed358722a.js",revision:"CkTdXsyk9YwTw52DNP62-"},{url:"/_next/static/chunks/app/(public)/about/page-a078616888c7eba7.js",revision:"CkTdXsyk9YwTw52DNP62-"},{url:"/_next/static/chunks/app/(public)/contact/layout-c2c97f2e3eb9ec9e.js",revision:"CkTdXsyk9YwTw52DNP62-"},{url:"/_next/static/chunks/app/(public)/contact/page-c0505aba309fb153.js",revision:"CkTdXsyk9YwTw52DNP62-"},{url:"/_next/static/chunks/app/(public)/services/layout-32c22afd0c1a8ac3.js",revision:"CkTdXsyk9YwTw52DNP62-"},{url:"/_next/static/chunks/app/(public)/services/page-078b2782ec060c3e.js",revision:"CkTdXsyk9YwTw52DNP62-"},{url:"/_next/static/chunks/app/_not-found-6d7af4ad1553597e.js",revision:"CkTdXsyk9YwTw52DNP62-"},{url:"/_next/static/chunks/app/layout-0d351278992c5c92.js",revision:"CkTdXsyk9YwTw52DNP62-"},{url:"/_next/static/chunks/app/loading-60a0ab6859baf375.js",revision:"CkTdXsyk9YwTw52DNP62-"},{url:"/_next/static/chunks/app/page-c646a72612028d02.js",revision:"CkTdXsyk9YwTw52DNP62-"},{url:"/_next/static/chunks/c1e15064-cac1ec1a053da5bf.js",revision:"CkTdXsyk9YwTw52DNP62-"},{url:"/_next/static/chunks/framework-c25027af42eb8c45.js",revision:"CkTdXsyk9YwTw52DNP62-"},{url:"/_next/static/chunks/main-5b4301800b0d6f55.js",revision:"CkTdXsyk9YwTw52DNP62-"},{url:"/_next/static/chunks/main-app-5bbd82a159dc6bd8.js",revision:"CkTdXsyk9YwTw52DNP62-"},{url:"/_next/static/chunks/pages/_app-067714c1c462903e.js",revision:"CkTdXsyk9YwTw52DNP62-"},{url:"/_next/static/chunks/pages/_error-26e9865d3ec85929.js",revision:"CkTdXsyk9YwTw52DNP62-"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-89ee8d32f31a15db.js",revision:"CkTdXsyk9YwTw52DNP62-"},{url:"/_next/static/css/455380e8d74e6160.css",revision:"455380e8d74e6160"},{url:"/_next/static/css/4d28b403c1ca7704.css",revision:"4d28b403c1ca7704"},{url:"/_next/static/css/6612bbcd98a56566.css",revision:"6612bbcd98a56566"},{url:"/_next/static/css/d1fd2a632670dad2.css",revision:"d1fd2a632670dad2"},{url:"/_next/static/css/ef46db3751d8e999.css",revision:"ef46db3751d8e999"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/assets/images/4016345.jpg",revision:"a3870ee38388391e247589a9326405a7"},{url:"/assets/images/4826435.jpg",revision:"d348776911794712120a009ae8f278b6"},{url:"/assets/images/5186382.jpg",revision:"467e56c4945f914b6055c5a9bd002329"},{url:"/assets/images/banner.jpg",revision:"f8276a4dd3314dded3e7a70ca9620e00"},{url:"/assets/images/banner2.jpg",revision:"dacb8ad0e807fff4f20e707dcc088a41"},{url:"/assets/images/close-up-annual-report-with-ballpoint.jpg",revision:"a6b5878760171468ad94242d19067f12"},{url:"/assets/images/closeup-freelance-finance-professional-discussing-with-client-through-mobile-phone-while-trading-stocks-home.jpg",revision:"f2278924e7ac3b5a5e27418687e0d8de"},{url:"/assets/images/collage-finance-banner-concept.jpg",revision:"c4d58f7e42673e7cd114fa6eb6a19030"},{url:"/assets/images/landing_page/advisory.jpg",revision:"2c7a6280de5561cdcb48bfe6f344184d"},{url:"/assets/images/landing_page/banknifty.png",revision:"d3fc956bc5af318e188be3904c3e3c36"},{url:"/assets/images/landing_page/dream_bg.jpg",revision:"403d22ab7d64e6e0d012e55d12aec080"},{url:"/assets/images/landing_page/enquiry_img.jpg",revision:"a8e2a342ff58b91de8245c057d945caa"},{url:"/assets/images/landing_page/future.png",revision:"c1c34cd7d230ca686304b9d99d6ab436"},{url:"/assets/images/landing_page/intradaycall.jpg",revision:"e69ac532f755c1f83416d1fb37c4aa88"},{url:"/assets/images/landing_page/screenFrame.png",revision:"f00e094091569a445f4bf978d3369c63"},{url:"/assets/images/loader.gif",revision:"7242d002f38788c87d4330d90563f890"},{url:"/assets/images/person-looking-finance-graphs.jpg",revision:"c91a883df02493bf9f046c8c31048424"},{url:"/assets/images/services/source.png",revision:"497abf6597dadbf1443220127fcf3415"},{url:"/assets/images/start-up-managers-working-schedule-modern-office.jpg",revision:"b11b8b4ae41ff4d2431ccc3f5a1a4f2e"},{url:"/assets/images/trader.png",revision:"c07346ef2deddd65150b5a7b183a5edb"},{url:"/assets/images/vecteezy_working-team-discussion-about-business-investment_.jpg",revision:"78e376022305a3061575df17157023a9"},{url:"/assets/images/wepik-export-20240201105721tOYm.jpeg",revision:"17d80f42664de8731448852dc27806d3"},{url:"/assets/svg/contact/call.svg",revision:"4e44a1114c57829eadc4bdbbba6eeea0"},{url:"/assets/svg/contact/location.svg",revision:"2b8f8ffb575918867f74aec0dc81b614"},{url:"/assets/svg/contact/mail.svg",revision:"c5068ab72e8a4ff1c783133b792586a4"},{url:"/assets/svg/contact/timing.svg",revision:"3487a0ecc412a9b3b42dff73e4122a79"},{url:"/assets/svg/landing/advisory.svg",revision:"d8d8ed2494595f2859fc641e5f1fbd2a"},{url:"/assets/svg/landing/advisory_underline.svg",revision:"7b11a39f5c142e7f6806c1359f5f4f49"},{url:"/assets/svg/landing/analysis.svg",revision:"a071105006476d5896774b4f9ad3114e"},{url:"/assets/svg/landing/backgournd_img.svg",revision:"a0fe915cce4b67d28679d87a04daae7c"},{url:"/assets/svg/landing/check.svg",revision:"1b165501d089b4fead382173a0b46dd3"},{url:"/assets/svg/landing/check_squere.svg",revision:"7228a4f084e045a4740641ea2f16bbf1"},{url:"/assets/svg/landing/choose_stocks.gif",revision:"7242d002f38788c87d4330d90563f890"},{url:"/assets/svg/landing/choose_stocks.svg",revision:"45803a8fb855053c2e378fda670c4e1b"},{url:"/assets/svg/landing/continues_learning.svg",revision:"b49bdef7326ba7f78da84981589ef997"},{url:"/assets/svg/landing/dicipline.svg",revision:"ac0ae0ca885c82ab1b730d5bb0163f33"},{url:"/assets/svg/landing/enquiry_svg.svg",revision:"94e2fad6e4e451c39d5ce1cd6c97491a"},{url:"/assets/svg/landing/high_return.svg",revision:"a9eba7c6fa2e8a6733eabcbd8281c2c7"},{url:"/assets/svg/landing/key.svg",revision:"c2bff346eedee41a009492847e5df5af"},{url:"/assets/svg/landing/learning.svg",revision:"6e4d575a973a5dd2a12442e9bfc90ea4"},{url:"/assets/svg/landing/leverage_caution.svg",revision:"0ab2bcf262f5375d56fde30248a6e8e4"},{url:"/assets/svg/landing/monitor.svg",revision:"6a4a02f51f232e19248b8144d31df95c"},{url:"/assets/svg/landing/need_help_bg.svg",revision:"aaa4ae756a35b1091bfcd3246f084489"},{url:"/assets/svg/landing/overall_market.svg",revision:"e2383919525d0165cb904bec5d2e98c2"},{url:"/assets/svg/landing/potli.svg",revision:"5f789589d2de8b84f6c127cc17172223"},{url:"/assets/svg/landing/risk.svg",revision:"62539d495ab49ed657e7fb029feb8a0a"},{url:"/assets/svg/landing/rule_men.svg",revision:"c71fd01e08930b3a46c18870e142480c"},{url:"/assets/svg/landing/sip.svg",revision:"eeb715ac6adb57d5004267db53e09822"},{url:"/assets/svg/landing/stay_informed.svg",revision:"2a3fb04e8b751bf2bebc96b6a39498ee"},{url:"/assets/svg/landing/stretegy.svg",revision:"701e79301c8d020c9ad09750c1b6ce6a"},{url:"/assets/svg/landing/stretegy_svg.svg",revision:"ebe0b5734e669d42d1b60cf555af729d"},{url:"/assets/svg/landing/target.svg",revision:"2e6d0b3c5e24f6d3f2c6097b11b56e40"},{url:"/assets/svg/landing/tax_saving.svg",revision:"f64e968ec8f4302c5c38b8fad4eba7a7"},{url:"/assets/svg/landing/timing_is_key.svg",revision:"931cc51712bd4def60dac01cc4a77023"},{url:"/assets/svg/landing/trading_bg.svg",revision:"caf080ebe474faa45da8ceb99244afac"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

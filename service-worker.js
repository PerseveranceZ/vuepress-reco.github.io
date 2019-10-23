/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2ed3ac8e0c11561fe3bf2bb366235455"
  },
  {
    "url": "assets/css/0.styles.6c795f5d.css",
    "revision": "269035475f34724b3deb3cb3ae1bbd89"
  },
  {
    "url": "assets/img/1.7e1db593.png",
    "revision": "7e1db5932a2c77ae21d1a43658740d7c"
  },
  {
    "url": "assets/img/11.c5c08d41.png",
    "revision": "c5c08d41d176a6236d023effc1560ad1"
  },
  {
    "url": "assets/img/12.75aaa91e.png",
    "revision": "75aaa91eae44e66c67389f803548c481"
  },
  {
    "url": "assets/img/2.546ac487.png",
    "revision": "546ac4870845bdae1fd686965ff8f306"
  },
  {
    "url": "assets/img/3.3b8e3c37.png",
    "revision": "3b8e3c373419b75d1b713e52a6c2fcaa"
  },
  {
    "url": "assets/img/4.daa6eaf2.png",
    "revision": "daa6eaf2671a7c3b139bc403af33488b"
  },
  {
    "url": "assets/img/5.a3a628ab.png",
    "revision": "a3a628ab01f201989621296ac8051437"
  },
  {
    "url": "assets/img/6.0ded2d21.png",
    "revision": "0ded2d214d0678ef97dc903786846996"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/home-blog.7765e6eb.png",
    "revision": "7765e6ebfae2dd800f7554015eff0428"
  },
  {
    "url": "assets/img/home-head.9e98f9ef.png",
    "revision": "9e98f9efba10bcad33519b782a1d09db"
  },
  {
    "url": "assets/img/icon_vuepress_reco.406370f8.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "assets/img/kanbanniang_2.7ccb19c9.png",
    "revision": "7ccb19c90325d4daae5df43e2920bdc1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.a6a62625.js",
    "revision": "afecebd6e88117117bf1f4c9fb32b6a6"
  },
  {
    "url": "assets/js/10.e77bdfc0.js",
    "revision": "7545cd42059f49244462e43446d4e0b2"
  },
  {
    "url": "assets/js/11.13aafcc6.js",
    "revision": "b008d1e056599ce6fc70a7031382b07f"
  },
  {
    "url": "assets/js/12.b0b77a13.js",
    "revision": "fddb3c1d89ced91944e587360aed5f41"
  },
  {
    "url": "assets/js/13.776c1689.js",
    "revision": "2142d313d155ca46d407e9c8d584b2d2"
  },
  {
    "url": "assets/js/14.aed3d363.js",
    "revision": "36ce35d2c4736d8a32b89d64861b28f2"
  },
  {
    "url": "assets/js/15.461b4392.js",
    "revision": "961bb55a53f9e732506d30d335f0033f"
  },
  {
    "url": "assets/js/16.439e3714.js",
    "revision": "73a7ba1c8831955824a741e70d3dd3b9"
  },
  {
    "url": "assets/js/17.9b1dcc1a.js",
    "revision": "f193ba9906010d789bcc22a6aa7e8048"
  },
  {
    "url": "assets/js/18.d25b16f2.js",
    "revision": "9b4c277c542cf9243ce8f0a66031551e"
  },
  {
    "url": "assets/js/19.01c7c5bf.js",
    "revision": "5a181ee5974807bb760c608ff95d246f"
  },
  {
    "url": "assets/js/20.3227104a.js",
    "revision": "a71698960e6892ce015b406cca8b730c"
  },
  {
    "url": "assets/js/21.1cb37394.js",
    "revision": "7040ca2695d0c419f2da79c49c024f3e"
  },
  {
    "url": "assets/js/22.7cd023ac.js",
    "revision": "c05f77ce127fbb4001c6cb19840c3d6b"
  },
  {
    "url": "assets/js/23.8c4e8062.js",
    "revision": "a43367b5ba06700f3c832d5cf46bc5b6"
  },
  {
    "url": "assets/js/24.57c82c14.js",
    "revision": "2c99f52e322996ea7449ab790f38c803"
  },
  {
    "url": "assets/js/25.74e924c4.js",
    "revision": "7c2df25696e562191e83cedec97854de"
  },
  {
    "url": "assets/js/26.9d36bdf7.js",
    "revision": "d433b2d8b5242dfe2b42bba402909987"
  },
  {
    "url": "assets/js/27.99cb78af.js",
    "revision": "9c301ae1a061aeb7e716fe1b6186b505"
  },
  {
    "url": "assets/js/28.d906d992.js",
    "revision": "502e1fc8d4a3748f26451e9e2207c372"
  },
  {
    "url": "assets/js/29.2262bcaa.js",
    "revision": "49beb507c0701ca572140e9ebe21004d"
  },
  {
    "url": "assets/js/3.224aa32f.js",
    "revision": "1989f4659a89275c08280510e878d61d"
  },
  {
    "url": "assets/js/30.2ad87703.js",
    "revision": "2b9780af2daa5d60c8181ff7b4a66b80"
  },
  {
    "url": "assets/js/31.71442702.js",
    "revision": "80b79f66827723290d4be92b205e074e"
  },
  {
    "url": "assets/js/32.b9f7c9a1.js",
    "revision": "be0b0a279da8e9547d8f1b0f3e9c5df7"
  },
  {
    "url": "assets/js/33.994ff766.js",
    "revision": "33ed6bd40bb3403559adf48771648fbe"
  },
  {
    "url": "assets/js/34.424582fd.js",
    "revision": "9f1b991f7fa6c3eb93a311093f8061ee"
  },
  {
    "url": "assets/js/35.15793b30.js",
    "revision": "c0f07b5231203a4d26e80f9b1db0dd90"
  },
  {
    "url": "assets/js/36.c6f96c96.js",
    "revision": "c62cca8edb351a5db2838a12afc9d156"
  },
  {
    "url": "assets/js/37.55b38d44.js",
    "revision": "1b00836e20cf636acae279ac902f9b6b"
  },
  {
    "url": "assets/js/38.473d4642.js",
    "revision": "e73296e6d8f71b60509cb0ab51c1b8d8"
  },
  {
    "url": "assets/js/39.c45b7a54.js",
    "revision": "ebebc7be669bc605c468a6dbb753b5be"
  },
  {
    "url": "assets/js/4.2982a600.js",
    "revision": "403c6473e79cffe1ef7c0dce0a84ac67"
  },
  {
    "url": "assets/js/40.22963f49.js",
    "revision": "a03dd264e2822fe394814cb49620b363"
  },
  {
    "url": "assets/js/41.9d335bdc.js",
    "revision": "68f53fc20d91a781168b874400fb5def"
  },
  {
    "url": "assets/js/42.ab444018.js",
    "revision": "6ebb820079917bb93fe78e0c501fb715"
  },
  {
    "url": "assets/js/43.9ac40fd4.js",
    "revision": "3b80f5a9e944135b3198c7e562f93ecd"
  },
  {
    "url": "assets/js/44.49bcd6d5.js",
    "revision": "20d7a401f562324a955d7e5b4fa96194"
  },
  {
    "url": "assets/js/45.545c7a12.js",
    "revision": "f69f665fd585dd4a9366598df2faa84a"
  },
  {
    "url": "assets/js/46.17ff7da3.js",
    "revision": "81d918440cbee4cb1488f2a434d7abd9"
  },
  {
    "url": "assets/js/47.ca364dd3.js",
    "revision": "aaf8833ae974e7b52b3301ed47e14292"
  },
  {
    "url": "assets/js/48.3efac835.js",
    "revision": "f233ccb6d3fcdef070b942b7fdf0f62a"
  },
  {
    "url": "assets/js/49.25b49169.js",
    "revision": "cad3c2da1e6a5a5a5a960bd2b38a3a59"
  },
  {
    "url": "assets/js/5.466dda28.js",
    "revision": "68124fa608aabd58e286f0eb5e22af37"
  },
  {
    "url": "assets/js/50.f53cdfea.js",
    "revision": "07c27e3838337b3cad6b0e8e32759a74"
  },
  {
    "url": "assets/js/51.6a8def90.js",
    "revision": "86752b0560d85af4d16313add1f0bce5"
  },
  {
    "url": "assets/js/52.7d27a4f1.js",
    "revision": "44052a31e0ab163d4d35173964556740"
  },
  {
    "url": "assets/js/53.a0b72ca7.js",
    "revision": "bedc7914b434262688c8cac6a48a8e1f"
  },
  {
    "url": "assets/js/6.25c497ff.js",
    "revision": "80344f7b5e670b5af05ffeaeeb1ec800"
  },
  {
    "url": "assets/js/7.ce021367.js",
    "revision": "15d0fb5ba3ae76393d738f94fa25388b"
  },
  {
    "url": "assets/js/8.21b5e02a.js",
    "revision": "81af191ec051da3db981cd49798f9efd"
  },
  {
    "url": "assets/js/9.af9c7ceb.js",
    "revision": "ba4b1b91881c0ac3a3505fafa8132ebc"
  },
  {
    "url": "assets/js/app.da81da74.js",
    "revision": "94e5e207d804c1b1dbd62d401090d479"
  },
  {
    "url": "blogImages/0.png",
    "revision": "7765e6ebfae2dd800f7554015eff0428"
  },
  {
    "url": "blogImages/1.png",
    "revision": "0e76b92f6f84b7c06330e536fedd2c9e"
  },
  {
    "url": "blogImages/10.png",
    "revision": "3d933d4420816ba3a03fcbae8121b779"
  },
  {
    "url": "blogImages/11.png",
    "revision": "1cd519a82f374792ad66314ef367f299"
  },
  {
    "url": "blogImages/12.png",
    "revision": "44823314515c8e0ee2be59d1d395b915"
  },
  {
    "url": "blogImages/13.png",
    "revision": "ed91e9c43c4bea93423b6a9cfe4e418a"
  },
  {
    "url": "blogImages/14.png",
    "revision": "5ae1fc8142a1222e083d3265c24a2414"
  },
  {
    "url": "blogImages/15.png",
    "revision": "d3873f2d64c2f7da637b1e8b115e4d66"
  },
  {
    "url": "blogImages/16.png",
    "revision": "57f7d7defbefc174bb6cbbfa793a552c"
  },
  {
    "url": "blogImages/2.png",
    "revision": "9d506458c50a3ffba01ed1021b85adb2"
  },
  {
    "url": "blogImages/3.png",
    "revision": "c2ba93e2d6c7c1db6203acecef35f659"
  },
  {
    "url": "blogImages/4.png",
    "revision": "70697bb43202017aa6baafe19700d47d"
  },
  {
    "url": "blogImages/5.png",
    "revision": "b1119b74f767be486ba4444c5d21bd55"
  },
  {
    "url": "blogImages/6.png",
    "revision": "dc449526437cb7eff15e28d81910376c"
  },
  {
    "url": "blogImages/7.png",
    "revision": "955781ac6a70c180c82b0ff34de3c320"
  },
  {
    "url": "blogImages/8.png",
    "revision": "a64ce7c8a0d616209a3819256d634559"
  },
  {
    "url": "blogImages/9.png",
    "revision": "29004117a86c9da7d9d5f34e3fdcf93c"
  },
  {
    "url": "categories/blog/index.html",
    "revision": "61969a9d823c85c1eb0521240ea7730d"
  },
  {
    "url": "categories/index.html",
    "revision": "b6ed17495013b9ad50bf163bb0484913"
  },
  {
    "url": "head.jpg",
    "revision": "350e4ac403a28d3ee7580e76d27e3202"
  },
  {
    "url": "head.png",
    "revision": "9e98f9efba10bcad33519b782a1d09db"
  },
  {
    "url": "hero_old.png",
    "revision": "4e87182c817155fe1c94932ca2608e1f"
  },
  {
    "url": "icon_vuepress_reco.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "icon_vuepress_reco.svg",
    "revision": "d8e877e0520ecbd7a7afecdfe46b5a09"
  },
  {
    "url": "index.html",
    "revision": "7bb8642583b4fd72809d32fe87949670"
  },
  {
    "url": "tag/index.html",
    "revision": "6c5b82287217e7fd2a2eb6ed11d8433c"
  },
  {
    "url": "timeline/index.html",
    "revision": "e9865f622dcf5213fe3042c7d2d2e93d"
  },
  {
    "url": "views/0.x/abstract.html",
    "revision": "21fc0e2d77fe58c174efc0dbfa663e8e"
  },
  {
    "url": "views/0.x/category.html",
    "revision": "bdc16d5c22ec3681654fe30a5e80e977"
  },
  {
    "url": "views/0.x/configJs.html",
    "revision": "507df4336c1c9ab2295d311ef156f9b9"
  },
  {
    "url": "views/0.x/home.html",
    "revision": "fec2c6778e0edc5b1b77eb6544a58b07"
  },
  {
    "url": "views/0.x/index.html",
    "revision": "2ba3b3cc6ea4b3ef775e4a2e29afd2c7"
  },
  {
    "url": "views/0.x/installUse.html",
    "revision": "cd867fde84e5bac1a8ef07ba147fc307"
  },
  {
    "url": "views/0.x/password.html",
    "revision": "aa6ee3a77839b388ab422d579bb8a8b1"
  },
  {
    "url": "views/0.x/tag.html",
    "revision": "c5fd14055cb78162a56a28ef3eb4e8b3"
  },
  {
    "url": "views/0.x/timeline.html",
    "revision": "e7a7ba246c0dd3dcb3a01ab02bfe4dbf"
  },
  {
    "url": "views/0.x/valine.html",
    "revision": "db91157eaa7651a3c1f8eb1f289777d2"
  },
  {
    "url": "views/1.x/0update1.html",
    "revision": "ca6b3080a62c55e22233a5d19de31f2b"
  },
  {
    "url": "views/1.x/404.html",
    "revision": "405e999871fbbff330f865c78802c617"
  },
  {
    "url": "views/1.x/abstract.html",
    "revision": "21fc0e2d77fe58c174efc0dbfa663e8e"
  },
  {
    "url": "views/1.x/blog.html",
    "revision": "37e8b263066393dfdca3265456048061"
  },
  {
    "url": "views/1.x/configJs.html",
    "revision": "507df4336c1c9ab2295d311ef156f9b9"
  },
  {
    "url": "views/1.x/frontMatter.html",
    "revision": "c051a345ba4c71ec4c37026402aaa707"
  },
  {
    "url": "views/1.x/ga.html",
    "revision": "69f40c657aa17e9ad64d618da6887288"
  },
  {
    "url": "views/1.x/home.html",
    "revision": "fec2c6778e0edc5b1b77eb6544a58b07"
  },
  {
    "url": "views/1.x/index.html",
    "revision": "2ba3b3cc6ea4b3ef775e4a2e29afd2c7"
  },
  {
    "url": "views/1.x/installUse.html",
    "revision": "cd867fde84e5bac1a8ef07ba147fc307"
  },
  {
    "url": "views/1.x/password.html",
    "revision": "aa6ee3a77839b388ab422d579bb8a8b1"
  },
  {
    "url": "views/1.x/recommend.html",
    "revision": "c757981b1a382028c1c4b9f61c386035"
  },
  {
    "url": "views/1.x/themePicker.html",
    "revision": "028f848f1242e1ae4f4fecc354c4f839"
  },
  {
    "url": "views/1.x/timeline.html",
    "revision": "e7a7ba246c0dd3dcb3a01ab02bfe4dbf"
  },
  {
    "url": "views/1.x/valine.html",
    "revision": "43a1eea75de2a3b8abdb4b3cfdc89450"
  },
  {
    "url": "views/other/about.html",
    "revision": "f975878b571cd1f98327fb69f12101fb"
  },
  {
    "url": "views/other/deploy.html",
    "revision": "44542a455c028b676771e5da927dcbae"
  },
  {
    "url": "views/other/develop.html",
    "revision": "6f604b060d5b275625ffe63a96671b62"
  },
  {
    "url": "views/other/domain.html",
    "revision": "6769fdbf9ee1fe80b5d6889137391dfb"
  },
  {
    "url": "views/other/notice.html",
    "revision": "b4f4b173b3e58ca69a136b9eee3c76ae"
  },
  {
    "url": "views/other/question.html",
    "revision": "a44f3187897e8682bf248c02ac57b3b7"
  },
  {
    "url": "views/other/theme-example.html",
    "revision": "a1900118fa120445abf364a538b4f52b"
  },
  {
    "url": "views/plugins/backToTop.html",
    "revision": "e93eb982c5a4bb0dc9f129a8df20c600"
  },
  {
    "url": "views/plugins/comments.html",
    "revision": "1668a25079b480c09115447782acae12"
  },
  {
    "url": "views/plugins/ga.html",
    "revision": "51aa8c4aea9fea44692e6c9a35c8728c"
  },
  {
    "url": "views/plugins/index.html",
    "revision": "ba09f5939ba30af0ceb28d9d2477540f"
  },
  {
    "url": "views/plugins/kanbanniang.html",
    "revision": "7a91549783c19dfdefad06ad44d23151"
  },
  {
    "url": "views/plugins/loadingPage.html",
    "revision": "f9ba1d0283708328f8a03214a27295d3"
  },
  {
    "url": "views/plugins/pagation.html",
    "revision": "78ce13ed6fa3fc79b3d4f810c61b64e5"
  },
  {
    "url": "views/plugins/screenfull.html",
    "revision": "e97af942543e4f7774a8e08ebc099937"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

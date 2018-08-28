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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1231a384ca90de5b1e9e028e5cd43a07"
  },
  {
    "url": "assets/css/0.styles.db683701.css",
    "revision": "439d826d57d7154c5ddbcf8f39f129c2"
  },
  {
    "url": "assets/img/1532404253268.b38d6dcb.png",
    "revision": "b38d6dcbe134f8d972e6081fb886f520"
  },
  {
    "url": "assets/img/1532417601736.9d561a16.png",
    "revision": "9d561a16c5642160845afc32d3306f9c"
  },
  {
    "url": "assets/img/1532593679859.df43010e.png",
    "revision": "df43010ef5701ca75ceff7600933f580"
  },
  {
    "url": "assets/img/1532594516323.0a811426.png",
    "revision": "0a8114263cb7186e0cdbb98e280a48d0"
  },
  {
    "url": "assets/img/1532595858774.e9c5fc06.png",
    "revision": "e9c5fc062e0a90ee9fc1cd665c1ff06a"
  },
  {
    "url": "assets/img/1532663901187.79a33bab.png",
    "revision": "79a33bab3dc661ee99fcc6715e505413"
  },
  {
    "url": "assets/img/1532674436902.9344f2b2.png",
    "revision": "9344f2b21d37dc2990b1031766c6243b"
  },
  {
    "url": "assets/img/1532933380433.7bd98983.png",
    "revision": "7bd9898390e45a0419841559f7cf3ae5"
  },
  {
    "url": "assets/img/1532933428439.94b6bcac.png",
    "revision": "94b6bcac79b79f92550469ab2618ee47"
  },
  {
    "url": "assets/img/1533105404243.74eda9e1.png",
    "revision": "74eda9e19a51bc1723a30d7b75ed0bec"
  },
  {
    "url": "assets/img/1533108478429.f8f58a77.png",
    "revision": "f8f58a77b4acebe039c87d2c54bdc975"
  },
  {
    "url": "assets/img/1533109385953.d5ea00f7.png",
    "revision": "d5ea00f7c8135244fe7c7bdd1948a5fd"
  },
  {
    "url": "assets/img/1533172501843.5e9b0552.png",
    "revision": "5e9b0552e5df627d3cb5d4df62d2ef76"
  },
  {
    "url": "assets/img/1533173373039.6d701368.png",
    "revision": "6d701368baf2734c2b3c63aaaaab4b56"
  },
  {
    "url": "assets/img/1533197793135.f852c13b.png",
    "revision": "f852c13b44b59283e7ad4ea5ce41f4af"
  },
  {
    "url": "assets/img/1533199216667.302eade1.png",
    "revision": "302eade1dda89dee4c88a6ee4d95ecd6"
  },
  {
    "url": "assets/img/1533201081347.b6c5019e.png",
    "revision": "b6c5019e2173ce08b3c5cc0d0671a0a3"
  },
  {
    "url": "assets/img/1533202668491.9c450a40.png",
    "revision": "9c450a409bf7456083b677e29c9c0a06"
  },
  {
    "url": "assets/img/1533279142979.70e6a843.png",
    "revision": "70e6a8435543851a6ded73e319ddcb78"
  },
  {
    "url": "assets/img/1533285220583.61916723.png",
    "revision": "619167239aeba7f1d67dbb7c0ae1d79a"
  },
  {
    "url": "assets/img/1533536920234.c309a292.png",
    "revision": "c309a2927c5b206c078cdccb12491e02"
  },
  {
    "url": "assets/img/1533540988932.7d5d553e.png",
    "revision": "7d5d553e22cad4ab9d4928ebd56c1cb9"
  },
  {
    "url": "assets/img/1533543748004.d89bdb70.png",
    "revision": "d89bdb7047ae87758b856c40d10eb447"
  },
  {
    "url": "assets/img/1533624987272.65f7d7f6.png",
    "revision": "65f7d7f60e819b3849ee341979ecaeaa"
  },
  {
    "url": "assets/img/1533625382577.5663d35f.png",
    "revision": "5663d35f38bf7396affe1dba305f4185"
  },
  {
    "url": "assets/img/1533626712210.969216d5.png",
    "revision": "969216d55a236223672d93fa36db524c"
  },
  {
    "url": "assets/img/1533695314985.f920980e.png",
    "revision": "f920980eae43eecef36f17e9768f1248"
  },
  {
    "url": "assets/img/1533712714272.ca2b4a89.png",
    "revision": "ca2b4a8987539d160ba301c8ef4d1a3a"
  },
  {
    "url": "assets/img/1533712749870.f043af29.png",
    "revision": "f043af2942e6669279bf2aafeb545154"
  },
  {
    "url": "assets/img/1533712826940.508e6180.png",
    "revision": "508e618027f4978bdb4b2c295f52dac0"
  },
  {
    "url": "assets/img/1533715677359.d39f68ae.png",
    "revision": "d39f68aede9e44e92ddc654a2dc67127"
  },
  {
    "url": "assets/img/autosuggestions.1bb5b948.png",
    "revision": "1bb5b9489e5de796ec1d6c20cd9cc459"
  },
  {
    "url": "assets/img/color.66e4fb50.png",
    "revision": "66e4fb5020f21ed4611fca3099296cca"
  },
  {
    "url": "assets/img/context.22a88894.png",
    "revision": "22a888941bb45d56d1a7641e85145027"
  },
  {
    "url": "assets/img/font.411902a0.png",
    "revision": "411902a057933f27e488ddc4533db58b"
  },
  {
    "url": "assets/img/highlight.fb246699.png",
    "revision": "fb246699e1668721adcc8895863cb7d9"
  },
  {
    "url": "assets/img/hook.414501b1.jpg",
    "revision": "414501b12f3b825bec7739169e4888ae"
  },
  {
    "url": "assets/img/Hotkey.4e886a37.png",
    "revision": "4e886a3749a6fb5df812ee9b1b6bc721"
  },
  {
    "url": "assets/img/lifecycle.75c11d14.png",
    "revision": "75c11d147dd7cf1478c9feeae7e4b22b"
  },
  {
    "url": "assets/img/logo-iterm2.2bad4892.jpg",
    "revision": "2bad48920c8b7f85ea72a7e6cf0568fc"
  },
  {
    "url": "assets/img/makeDefault.39566806.png",
    "revision": "395668067183449d4f7618e8e9d354dc"
  },
  {
    "url": "assets/img/proxy.3bcb05f2.png",
    "revision": "3bcb05f2da8edf8ebe1c163ca412c89e"
  },
  {
    "url": "assets/img/runsh.dcfc7f0d.png",
    "revision": "dcfc7f0d9e570b07e7d6039eef92de4c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/Snipaste_2018-08-02_10-42-23-1533178095178.8810f3ab.png",
    "revision": "8810f3ab4c618e22d142a5d9e0c82eda"
  },
  {
    "url": "assets/img/SPA.1d18c80a.png",
    "revision": "1d18c80a825e8fd6f347e51315de622f"
  },
  {
    "url": "assets/img/theme.c60569a5.png",
    "revision": "c60569a5fb208bc3ced1a24f3113df1d"
  },
  {
    "url": "assets/js/10.4dfefafd.js",
    "revision": "8e84b16dca913ea602286e80cc65ba96"
  },
  {
    "url": "assets/js/11.313176f6.js",
    "revision": "275310b78af6f740178a79fd44d4be5b"
  },
  {
    "url": "assets/js/12.0e9dae52.js",
    "revision": "3be08331bf3c056c49176c45f063fee3"
  },
  {
    "url": "assets/js/2.d2210832.js",
    "revision": "6306adc0cb80a5461179877abec97761"
  },
  {
    "url": "assets/js/3.1fe501fa.js",
    "revision": "b2fa242ef21d531078b12163cc2594b1"
  },
  {
    "url": "assets/js/4.8e56f540.js",
    "revision": "7362423deb4e0e9ce587cffc010f21e3"
  },
  {
    "url": "assets/js/5.1372d563.js",
    "revision": "a6359973cc622d0e45f7227fb87d20e8"
  },
  {
    "url": "assets/js/6.7db3bca5.js",
    "revision": "f4ebd2ed275304510dd14b0dd81d3d18"
  },
  {
    "url": "assets/js/7.22cd8a06.js",
    "revision": "4ba6fff90065ee1c436f59d9e37df18d"
  },
  {
    "url": "assets/js/8.afb93d82.js",
    "revision": "642285c52b98dda6715971f5ee6e8ce8"
  },
  {
    "url": "assets/js/9.58028437.js",
    "revision": "834000b4d1b265b59ab1ec78d14da5c3"
  },
  {
    "url": "assets/js/app.36809228.js",
    "revision": "075443de6c8e9078e4fb8fb48ffa70ef"
  },
  {
    "url": "Git/index.html",
    "revision": "4206da9f510a7f4d615c922351ae0e00"
  },
  {
    "url": "index.html",
    "revision": "80e4664cec6a78c71b9c7406dec6e819"
  },
  {
    "url": "Library/index.html",
    "revision": "e119ac8f03ea5bbd229ff699f41a5ada"
  },
  {
    "url": "logo.jpg",
    "revision": "407b0f5922e8183f85d7d000a7b7af4c"
  },
  {
    "url": "Node/index.html",
    "revision": "fee2ecea825060c42125d59a5d0a6ecb"
  },
  {
    "url": "Other/index.html",
    "revision": "f8ad07a8aed9868b36602499182d939f"
  },
  {
    "url": "Vue/index.html",
    "revision": "d2555b6e51cf613b74c507a7dbbbabc4"
  },
  {
    "url": "Vue/vue模块化开发.html",
    "revision": "2ca59b061dc6991a580e0637a1530092"
  },
  {
    "url": "Vue/Vue组件化.html",
    "revision": "006d3e4f8d8cd702aa85786e6af1afaa"
  },
  {
    "url": "Vue/初探VuePress.html",
    "revision": "69fd9ec94b0559927b3e510f923565cd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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

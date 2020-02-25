'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets\AssetManifest.json": "ecd544ef5bbd00755f3317d6f6e5ac33",
"/assets\FontManifest.json": "37d90b90032039126523a1bc3e737263",
"/assets\fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets\fonts\ProductSans-Italic.ttf": "af05b47de35fd5a5960ad1e440a4c0c7",
"/assets\fonts\ProductSans-Light.ttf": "5ea2ab343da06f7eb96ea959895665ea",
"/assets\fonts\ProductSans-Medium.ttf": "9c51beb79b8ab173abd924ce39178f0b",
"/assets\fonts\ProductSans-Regular.ttf": "b61c0ab33a818a0162f3e868babcef4b",
"/assets\LICENSE": "6500a612c3e1c7c2d511b873e878f674",
"/assets\packages\cupertino_icons\assets\CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets\packages\font_awesome_flutter\lib\fonts\fa-brands-400.ttf": "51d23d1c30deda6f34673e0d5600fd38",
"/assets\packages\font_awesome_flutter\lib\fonts\fa-regular-400.ttf": "d51b09f7b8345b41dd3b2201f653c62b",
"/assets\packages\font_awesome_flutter\lib\fonts\fa-solid-900.ttf": "0ea892e09437fcaa050b2b15c53173b7",
"/assets\web\icons\Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/assets\web\icons\Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/assets\web\icons\menu.png": "be43919e4bf08e7b084d28db5f78a49e",
"/assets\web\images\1.png": "2cf09a678c37e8b4f054784164399c5f",
"/assets\web\images\214546.jpg": "0a4b325161c4ce7be39d11a9c89a0b9f",
"/assets\web\images\flutterio-icon.png": "6f43e62f76855a617a1500d4ed8da47c",
"/assets\web\images\graphql-icon.png": "4b29bf2633b3c4836179ec370b9ad5ea",
"/assets\web\images\loading.svg": "1085d293d0f7eb9f6fc9e2b4b5c8b550",
"/assets\web\images\nodejs-icon.png": "600b085913223ac08a6ca12a46995c4d",
"/assets\web\index.html": "020edf231d82139c8d62841ef754f751",
"/assets\web\manifest.json": "62c2d9c33a8011189d147b404de08a39",
"/icons\Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons\Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/icons\menu.png": "be43919e4bf08e7b084d28db5f78a49e",
"/images\1.png": "2cf09a678c37e8b4f054784164399c5f",
"/images\214546.jpg": "0a4b325161c4ce7be39d11a9c89a0b9f",
"/images\flutterio-icon.png": "6f43e62f76855a617a1500d4ed8da47c",
"/images\graphql-icon.png": "4b29bf2633b3c4836179ec370b9ad5ea",
"/images\loading.svg": "1085d293d0f7eb9f6fc9e2b4b5c8b550",
"/images\nodejs-icon.png": "600b085913223ac08a6ca12a46995c4d",
"/index.html": "020edf231d82139c8d62841ef754f751",
"/main.dart.js": "8eb3b730e5d0254200b022284e895c2e",
"/manifest.json": "62c2d9c33a8011189d147b404de08a39"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});

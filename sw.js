self.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Install');
});

self.addEventListener('activate', function (e) {
    console.log('[ServiceWorker] Activate');
});

importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');

self.addEventListener('fetch', function (event) { });
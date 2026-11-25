/* LearnBridge offline support: saves the app page and the Firebase files on first online visit,
   so the app opens without internet on the same device. Uploaded at the site root as sw.js. */
const CACHE = 'learnbridge-offline-v1';
const SHELL = ['./', './index.html'];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return cache.addAll(SHELL).catch(function () {});
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (event) {
  var req = event.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  var isFirebase = url.hostname === 'www.gstatic.com' && url.pathname.indexOf('/firebasejs/') === 0;
  var isSame = url.origin === self.location.origin;
  if (!isFirebase && !isSame) return;

  event.respondWith(caches.open(CACHE).then(function (cache) {
    if (isFirebase) {
      // Firebase files never change for a version number: use the saved copy first.
      return cache.match(req).then(function (hit) {
        if (hit) return hit;
        return fetch(req).then(function (res) {
          if (res.ok || res.type === 'opaque') cache.put(req, res.clone());
          return res;
        }).catch(function () { return Response.error(); });
      });
    }
    // Pages and images: fresh copy when online, saved copy when offline.
    return fetch(req).then(function (res) {
      if (res.ok) cache.put(req, res.clone());
      return res;
    }).catch(function () {
      return cache.match(req).then(function (hit) {
        return hit || cache.match('./index.html') || Response.error();
      });
    });
  }));
});

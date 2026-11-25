'use strict';
const CACHE_NAME = 'learnbridge-offline-v1';
const APP_SHELL = ['./', './index.html'];
const FIREBASE_FILES = [
  'https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth-compat.js'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    for (const url of [...APP_SHELL, ...FIREBASE_FILES]) {
      try {
        const request = new Request(url, { mode: url.startsWith('http') ? 'no-cors' : 'same-origin' });
        const response = await fetch(request);
        if (response && (response.ok || response.type === 'opaque')) {
          await cache.put(request, response);
        }
      } catch (_) {}
    }
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith('learnbridge-') && key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  const isFirebase = url.origin === 'https://www.gstatic.com' && url.pathname.includes('/firebasejs/');
  const isAppPage = url.origin === self.location.origin && request.mode === 'navigate';

  if (isFirebase) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(request);
      if (cached) return cached;
      try {
        const response = await fetch(request);
        if (response && (response.ok || response.type === 'opaque')) await cache.put(request, response.clone());
        return response;
      } catch (_) {
        return new Response('/* LearnBridge sign-in library is not cached yet. */', { headers: { 'Content-Type': 'application/javascript' } });
      }
    })());
    return;
  }

  if (isAppPage) {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);
        if (response && response.ok) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put('./index.html', response.clone());
        }
        return response;
      } catch (_) {
        const cache = await caches.open(CACHE_NAME);
        return (await cache.match(request)) || (await cache.match('./index.html')) || (await cache.match('./')) ||
          new Response('LearnBridge has not been cached on this device yet. Connect to the internet once, open LearnBridge, and try again.', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
      }
    })());
    return;
  }

  if (url.origin === self.location.origin) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(request);
      if (cached) return cached;
      try {
        const response = await fetch(request);
        if (response && response.ok) await cache.put(request, response.clone());
        return response;
      } catch (_) {
        return new Response('', { status: 504, statusText: 'Offline' });
      }
    })());
  }
});

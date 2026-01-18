const cacheName = 'voltti-v1';
const assets = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json'
];

// Instala o Service Worker e guarda os arquivos no cache
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// Faz o site carregar instantaneamente usando o cache
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(rec => {
      return rec || fetch(evt.request);
    })
  );
});

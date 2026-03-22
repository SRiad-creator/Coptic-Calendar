const CACHE_NAME = 'coptic-calendar-v43';
const urlsToCache = [
    '/Coptic-Calendar/',
    '/Coptic-Calendar/index.html',
    '/Coptic-Calendar/app.js',
    '/Coptic-Calendar/data.js',
    '/Coptic-Calendar/style.css',
    '/Coptic-Calendar/coptic_cross.png'
];

self.addEventListener('install', event => {
    // Force the new SW to activate immediately, don't wait
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    // Don't cache/intercept ICS files — let the browser handle them natively
    if (event.request.url.endsWith('.ics')) return;
    
    // Network-first for HTML to ensure latest version
    if (event.request.url.endsWith('.html') || event.request.url.endsWith('/')) {
        event.respondWith(
            fetch(event.request).then(response => {
                return caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, response.clone());
                    return response;
                });
            }).catch(() => caches.match(event.request))
        );
        return;
    }
    
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request).then(fetchResponse => {
                return caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, fetchResponse.clone());
                    return fetchResponse;
                });
            });
        })
    );
});

self.addEventListener('activate', event => {
    // Take control of all pages immediately
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        ).then(() => self.clients.claim())
    );
});

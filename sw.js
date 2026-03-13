const CACHE_NAME = 'coptic-calendar-v35';
const urlsToCache = [
    '/Coptic-Calendar/',
    '/Coptic-Calendar/index.html',
    '/Coptic-Calendar/app.js',
    '/Coptic-Calendar/data.js',
    '/Coptic-Calendar/style.css',
    '/Coptic-Calendar/coptic_cross.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    // Don't cache/intercept ICS files — let Android handle them natively
    if (event.request.url.endsWith('.ics')) return;
    
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
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        )
    );
});

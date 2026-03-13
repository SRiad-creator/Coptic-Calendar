const CACHE_NAME = 'coptic-calendar-v34';
const urlsToCache = [
    '/Coptic-Calendar/',
    '/Coptic-Calendar/index.html',
    '/Coptic-Calendar/app.js',
    '/Coptic-Calendar/data.js',
    '/Coptic-Calendar/style.css',
    '/Coptic-Calendar/coptic_cross.png',
    '/Coptic-Calendar/coptic_calendar_2026.ics',
    '/Coptic-Calendar/coptic_feasts.ics',
    '/Coptic-Calendar/coptic_saints.ics',
    '/Coptic-Calendar/coptic_sundays.ics',
    '/Coptic-Calendar/coptic_fasts.ics'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
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

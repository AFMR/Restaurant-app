/*var cacheVersion = 'V1';
var cacheFiles = [
    './',
    './css/styles.css',
    './data/restaurants.json',
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg',
    './img/6.jpg',
    './img/7.jpg',
    './img/8.jpg',
    './img/9.jpg',
    './img/10.jpg',
    './js/dbhelper.js',
    './js/main.js',
    './js/restaurant_info.js',
    './index.html',
    './restaurant.html'
]

self.addEventListener('install', function(e){
    console.log("Installed")

    e.waitUntil(
        caches.open(cacheVersion).then(function(cache){
            console.log('Caching files');
            return cache.addAll(cacheFiles);
        })
    )
})

self.addEventListener('activate', function(e){
    console.log("activated")

    e.waitUntil(
        caches.keys().then(function(cacheVersions){
            return Promise.all(cacheVersions.map(function(thisCacheVersion){
                if (thisCacheVersion !== cacheVersion) {
                    console.log('Removing cache files from ', thisCacheVersion);
                    return caches.delete(thisCacheVersion);
                }
            }))
        })
    )
})

self.addEventListener('fetch', function(e){
    console.log("Fetching", e.request.url)
})
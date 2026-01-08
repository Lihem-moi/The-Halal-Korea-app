self.addEventListener('fetch', function(event) {
    // Ce fichier permet de rendre l'application installable
    event.respondWith(fetch(event.request));
});

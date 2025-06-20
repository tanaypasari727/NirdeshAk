self.addEventListener("install", (e) => {
    e.waitUntil(
      caches.open("bus-app").then((cache) => {
        return cache.addAll([
          "index.html",
          "manifest.json",
          "Red_Yellow_Simple_Tour_Bus_Rental_Travel_Logo-removebg-preview.png",
          "Red_Yellow_Simple_Tour_Bus_Rental_Travel_Logo-removebg-preview.png"
        ]);
      })
    );
  });
  
  self.addEventListener("fetch", (e) => {
    e.respondWith(
      caches.match(e.request).then((res) => res || fetch(e.request))
    );
  });
  
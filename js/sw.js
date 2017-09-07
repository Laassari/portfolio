self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('static').then(function (cache) {
      return cache.addAll([
        '/',
        'js/main.js',
        'style/style.css',
        'imgs/icon.png',
        "normalize.css",
        "font-awesome.min.css",
        "images/logo2.png",
        "images/img.png",
        "images/img.png",
        "images/js.svg",
        "images/ux.png",
        "images/seo.svg",
        "images/cert.png",
        "images/project.png",
        "images/project.png",
        "images/project.png"
      ]);
    })
  )
})
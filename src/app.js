if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .then((reg) => console.log('service worker registradito', reg))
    .catch((err) => console.log('service worker No esta registrado', err));
}
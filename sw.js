//install service worker
self.addEventListener('install', evt => {
console.log('Service worker ha sido instalado con exito');
});

//activate service worker

self.addEventListener('activate', evt =>{
console.log('Service worker ha sido activado con exito');
});

//Fetch event
self.addEventListener('fetch', evt =>{
    console.log('fetch event', evt);
});
self.addEventListener('install', () => {
  console.log('Langdom Contracts App installed')
})

self.addEventListener('activate', () => {
  console.log('Langdom Contracts App activated')
})

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request))
})

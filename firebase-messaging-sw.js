/* LearnBridge Firebase Cloud Messaging service worker.
   This receives FCM background messages. Scheduled reminders are not active
   until the server-side scheduler is configured in a later step.
*/
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyCd5aE7x_AbF-mbJ0EmxIsB9KJ8Pun7Keg',
  authDomain: 'learnbridge-ddf6c.firebaseapp.com',
  projectId: 'learnbridge-ddf6c',
  storageBucket: 'learnbridge-ddf6c.firebasestorage.app',
  messagingSenderId: '936019355245',
  appId: '1:936019355245:web:dc6c92acbe3a9b65dbc164'
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  const notification = payload.notification || {};
  const title = notification.title || 'LearnBridge';
  const options = {
    body: notification.body || 'You have a new LearnBridge update.',
    icon: './hero-student.jpg',
    badge: './hero-student.jpg',
    data: { url: (payload.data && payload.data.url) || './' }
  };
  return self.registration.showNotification(title, options);
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  const targetUrl = new URL((event.notification.data && event.notification.data.url) || './', self.location.origin).href;
  event.waitUntil((async function () {
    const windows = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const client of windows) {
      if (client.url.startsWith(self.location.origin) && 'focus' in client) {
        await client.focus();
        if ('navigate' in client && client.url !== targetUrl) await client.navigate(targetUrl);
        return;
      }
    }
    if (self.clients.openWindow) return self.clients.openWindow(targetUrl);
  })());
});

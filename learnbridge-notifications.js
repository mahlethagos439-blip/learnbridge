/* LearnBridge Firebase Cloud Messaging client setup (Step 2).
   This file registers this browser/device with FCM after the user opts in.
   The token is kept locally until the authenticated server endpoint is built in Step 3.
*/
(function () {
  'use strict';

  const firebaseConfig = {
    apiKey: 'AIzaSyCd5aE7x_AbF-mbJ0EmxIsB9KJ8Pun7Keg',
    authDomain: 'learnbridge-ddf6c.firebaseapp.com',
    projectId: 'learnbridge-ddf6c',
    storageBucket: 'learnbridge-ddf6c.firebasestorage.app',
    messagingSenderId: '936019355245',
    appId: '1:936019355245:web:dc6c92acbe3a9b65dbc164'
  };

  // This is the public Web Push key from Firebase Project Settings.
  const vapidKey = 'BMyoQD-EwXWsfDusXgrIsb2Km9KBjnX848ZOxqtcszcWdaysJLa5aPE8hU0V0oN4S7kQ45ROwOJlNMT41d5e7d8';
  const TOKEN_STORAGE_KEY = 'learnbridge_fcm_registration_token_v1';
  let messaging = null;

  function status(message) {
    const el = document.getElementById('pushNotificationStatus');
    if (el) el.textContent = message;
  }

  async function enableNotifications() {
    const button = document.getElementById('enablePushNotifications');
    if (!('Notification' in window)) {
      status('This browser does not support web notifications.');
      return;
    }
    if (!('serviceWorker' in navigator)) {
      status('This browser does not support the service worker needed for push notifications.');
      return;
    }
    if (!window.firebase || !firebase.messaging) {
      status('Firebase Messaging could not load. Check your internet connection and try again.');
      return;
    }

    if (button) button.disabled = true;
    status('Preparing notifications for this device…');
    try {
      const permission = Notification.permission === 'granted'
        ? 'granted'
        : await Notification.requestPermission();
      if (permission !== 'granted') {
        status('Notifications were not allowed. You can enable them later in your browser settings.');
        return;
      }

      const app = firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);
      messaging = firebase.messaging(app);
      const registration = await navigator.serviceWorker.register('./firebase-messaging-sw.js', { scope: './' });
      const token = await messaging.getToken({ vapidKey, serviceWorkerRegistration: registration });
      if (!token) {
        status('The browser did not provide a push registration. Please try again later.');
        return;
      }

      // Temporary local storage only. Step 3 will securely associate this device
      // with the signed-in student's account through a server endpoint.
      localStorage.setItem(TOKEN_STORAGE_KEY, token);
      status('Notifications are enabled on this device. Account linking and scheduled reminders are the next steps.');
    } catch (error) {
      console.error('LearnBridge notification setup failed:', error);
      status('Could not enable notifications. Please check the site permission and try again.');
    } finally {
      if (button) button.disabled = false;
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('enablePushNotifications');
    if (button) button.addEventListener('click', enableNotifications);
    if (Notification && Notification.permission === 'granted') {
      status('Browser permission is already allowed. Tap the button to register this device with LearnBridge.');
    }
  });
})();

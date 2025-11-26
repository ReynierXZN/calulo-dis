import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "angular-firebase-app-46f9a", appId: "1:230380245200:web:53dd27bb83f8077c234ed5", storageBucket: "angular-firebase-app-46f9a.firebasestorage.app", apiKey: "AIzaSyC0ChHzMqwztqfkgIHtt4GeFvkGfoXFrfs", authDomain: "angular-firebase-app-46f9a.firebaseapp.com", messagingSenderId: "230380245200"  })), provideFirestore(() => getFirestore())
  ]
};

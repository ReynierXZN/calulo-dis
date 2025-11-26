import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environments } from '../src/environments/environments';
import { bootstrapApplication } from '@angular/platform-browser';


bootstrapApplication(App, appConfig)
 .catch((err) => console.error(err));
 providers:[
   provideRouter(routes),
   provideFirebaseApp(() => initializeApp(environments.firebase)),
   provideFirestore(() => getFirestore())
 ]
;

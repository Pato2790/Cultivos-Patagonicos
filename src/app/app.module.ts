import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { ProductoresList } from '../pages/productoresList/productoresList';
import { NewProductor } from '../pages/new-productor/new-productor';
import { ChacrasList } from '../pages/chacras-list/chacras-list';
import { NewChacra } from '../pages/new-chacra/new-chacra';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductoresServiceProvider } from '../providers/productores-service/productores-service';
import { HttpModule } from '@angular/http';
import { ChacrasServiceProvider } from '../providers/chacras-service/chacras-service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

export const firebaseConfig = {
    apiKey: "AIzaSyAlCvR3L2sO5B8GFSaRvPRMWD1uU498VgE",
    authDomain: "cultivos-sistema.firebaseapp.com",
    databaseURL: "https://cultivos-sistema.firebaseio.com",
    projectId: "cultivos-sistema",
    storageBucket: "cultivos-sistema.appspot.com",
    messagingSenderId: "1042519531953"
};

@NgModule({
  declarations: [
    MyApp,
    Login,
    HomePage,
    ProductoresList,
    NewProductor,
    ChacrasList,
    NewChacra
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,
    HomePage,
    ProductoresList,
    NewProductor,
    ChacrasList,
    NewChacra
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductoresServiceProvider,
    ChacrasServiceProvider,
    AuthServiceProvider
  ]
})
export class AppModule {}

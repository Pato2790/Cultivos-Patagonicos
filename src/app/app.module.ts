import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { ProductoresList } from '../pages/productoresList/productoresList';
import { NewProductor } from '../pages/new-productor/new-productor';
import { EditProductor } from '../pages/edit-productor/edit-productor';
import { ChacrasList } from '../pages/chacras-list/chacras-list';
import { NewChacra } from '../pages/new-chacra/new-chacra';
import { EditChacra } from '../pages/edit-chacra/edit-chacra';
import { CamionesList } from '../pages/camiones-list/camiones-list';
import { NewCamion } from '../pages/new-camion/new-camion';
import { EditCamion } from '../pages/edit-camion/edit-camion';
import { EmpresasList } from '../pages/empresas-list/empresas-list';
import { NewEmpresa } from '../pages/new-empresa/new-empresa';
import { EditEmpresa } from '../pages/edit-empresa/edit-empresa';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductoresServiceProvider } from '../providers/productores-service/productores-service';
import { HttpModule } from '@angular/http';
import { ChacrasServiceProvider } from '../providers/chacras-service/chacras-service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { CamionesServiceProvider } from '../providers/camiones-service/camiones-service';
import { EmpresasServiceProvider } from '../providers/empresas-service/empresas-service';

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
    EditProductor,
    ChacrasList,
    NewChacra,
    EditChacra,
    CamionesList,
    NewCamion,
    EditCamion,
    EmpresasList,
    NewEmpresa,
    EditEmpresa
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
    EditProductor,
    ChacrasList,
    NewChacra,
    EditChacra,
    CamionesList,
    NewCamion,
    EditCamion,
    EmpresasList,
    NewEmpresa,
    EditEmpresa
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductoresServiceProvider,
    ChacrasServiceProvider,
    AuthServiceProvider,
    CamionesServiceProvider,
    EmpresasServiceProvider
  ]
})
export class AppModule {}

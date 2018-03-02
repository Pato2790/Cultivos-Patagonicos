import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SideMenuContentComponent } from '../shared/side-menu-content/side-menu-content.component';
import { SelectSearchableModule } from '../shared/select/select-module';
import { Printer, PrintOptions } from '@ionic-native/printer';

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
import { InstitucionesList } from '../pages/instituciones-list/instituciones-list';
import { NewInstitucion } from '../pages/new-institucion/new-institucion';
import { EditInstitucion } from '../pages/edit-institucion/edit-institucion';
import { NewIngreso } from '../pages/new-ingreso/new-ingreso';
import { IngresosList } from '../pages/ingresos-list/ingresos-list';
import { EditIngreso } from '../pages/edit-ingreso/edit-ingreso';
import { EditLote } from '../pages/edit-lote/edit-lote';
import { NewViaje } from '../pages/new-viaje/new-viaje';
import { ViajesList } from '../pages/viajes-list/viajes-list';
import { LotesList } from '../pages/lotes-list/lotes-list';
import { PrinterView } from '../pages/printer-view/printer-view';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { CamionesServiceProvider } from '../providers/camiones-service/camiones-service';
import { EmpresasServiceProvider } from '../providers/empresas-service/empresas-service';
import { InstitucionesServiceProvider } from '../providers/instituciones-service/instituciones-service';
import { CuadrosServiceProvider } from '../providers/cuadros-service/cuadros-service';
import { IngresosServiceProvider } from '../providers/ingresos-service/ingresos-service';
import { EspecieServiceProvider } from '../providers/especie-service/especie-service';
import { CalidadesServiceProvider } from '../providers/calidades-service/calidades-service';
import { VariedadesServiceProvider } from '../providers/variedades-service/variedades-service';
import { ChacrasServiceProvider } from '../providers/chacras-service/chacras-service';
import { ProductoresServiceProvider } from '../providers/productores-service/productores-service';
import { LotesServiceProvider } from '../providers/lotes-service/lotes-service';
import { TratamientosServiceProvider } from '../providers/tratamientos-service/tratamientos-service';
import { ViajesServiceProvider } from '../providers/viajes-service/viajes-service';

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
    SideMenuContentComponent,
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
    EditEmpresa,
    InstitucionesList,
    NewInstitucion,
    EditInstitucion,
    IngresosList,
    NewIngreso,
    EditIngreso,
    EditLote,
    NewViaje,
    ViajesList,
    LotesList,
    PrinterView
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    HttpModule,
    SelectSearchableModule
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
    EditEmpresa,
    InstitucionesList,
    NewInstitucion,
    EditInstitucion,
    IngresosList,
    NewIngreso,
    EditIngreso,
    EditLote,
    NewViaje,
    ViajesList,
    LotesList,
    PrinterView
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Printer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductoresServiceProvider,
    ChacrasServiceProvider,
    AuthServiceProvider,
    CamionesServiceProvider,
    EmpresasServiceProvider,
    InstitucionesServiceProvider,
    CuadrosServiceProvider,
    IngresosServiceProvider,
    EspecieServiceProvider,
    CalidadesServiceProvider,
    VariedadesServiceProvider,
    LotesServiceProvider,
    TratamientosServiceProvider,
    ViajesServiceProvider
  ]
})
export class AppModule {}

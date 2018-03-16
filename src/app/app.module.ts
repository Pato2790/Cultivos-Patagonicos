import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SideMenuContentComponent } from '../shared/side-menu-content/side-menu-content.component';
import { Printer } from '@ionic-native/printer';

import { MyApp } from './app.component';
import { HomePageModule } from '../pages/home/home.module';
import { LoginModule } from '../pages/login/login.module';
import { ProductoresListModule } from '../pages/productoresList/productoresList.module';
import { NewProductorModule } from '../pages/new-productor/new-productor.module';
import { EditProductorModule } from '../pages/edit-productor/edit-productor.module';
import { ChacrasListModule } from '../pages/chacras-list/chacras-list.module';
import { NewChacraModule } from '../pages/new-chacra/new-chacra.module';
import { EditChacraModule} from '../pages/edit-chacra/edit-chacra.module';
import { CamionesListModule } from '../pages/camiones-list/camiones-list.module';
import { NewCamionModule } from '../pages/new-camion/new-camion.module';
import { EditCamionModule } from '../pages/edit-camion/edit-camion.module';
import { EmpresasListModule } from '../pages/empresas-list/empresas-list.module';
import { NewEmpresaModule } from '../pages/new-empresa/new-empresa.module';
import { EditEmpresaModule } from '../pages/edit-empresa/edit-empresa.module';
import { InstitucionesListModule } from '../pages/instituciones-list/instituciones-list.module';
import { NewInstitucionModule } from '../pages/new-institucion/new-institucion.module';
import { EditInstitucionModule } from '../pages/edit-institucion/edit-institucion.module';
import { NewIngresoModule } from '../pages/new-ingreso/new-ingreso.module';
import { IngresosListModule } from '../pages/ingresos-list/ingresos-list.module';
import { EditIngresoModule } from '../pages/edit-ingreso/edit-ingreso.module';
import { EditLoteModule } from '../pages/edit-lote/edit-lote.module';
import { NewViajeModule } from '../pages/new-viaje/new-viaje.module';
import { NewViajeIngresoModule } from '../pages/new-viaje-ingreso/new-viaje-ingreso.module';
import { ViajesListModule } from '../pages/viajes-list/viajes-list.module';
import { LotesListModule } from '../pages/lotes-list/lotes-list.module';
import { PrinterView } from '../pages/printer-view/printer-view';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { SelectSearchableModule } from '../shared/select/select-module';

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
    apiKey: "AIzaSyBAxnE0e9OGn8Vs-iXAex0WOKezzml0F8Y",
    authDomain: "cultivos-patagonicos-app.firebaseapp.com",
    databaseURL: "https://cultivos-patagonicos-app.firebaseio.com",
    projectId: "cultivos-patagonicos-app",
    storageBucket: "cultivos-patagonicos-app.appspot.com",
    messagingSenderId: "203353588881"
};

@NgModule({
  declarations: [
    MyApp,
    SideMenuContentComponent,
    PrinterView
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    SelectSearchableModule,
    HttpModule,
    LoginModule,
    HomePageModule,
    ProductoresListModule,
    NewProductorModule,
    EditProductorModule,
    ChacrasListModule,
    NewChacraModule,
    EditChacraModule,
    CamionesListModule,
    NewCamionModule,
    EditCamionModule,
    EmpresasListModule,
    NewEmpresaModule,
    EditEmpresaModule,
    InstitucionesListModule,
    NewInstitucionModule,
    EditInstitucionModule,
    IngresosListModule,
    NewIngresoModule,
    EditIngresoModule,
    EditLoteModule,
    NewViajeModule,
    ViajesListModule,
    LotesListModule,
    NewViajeIngresoModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
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

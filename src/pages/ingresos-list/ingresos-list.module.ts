import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IngresosList } from './ingresos-list';

@NgModule({
  declarations: [
    IngresosList,
  ],
  imports: [
    IonicPageModule.forChild(IngresosList),
  ],
  entryComponents: [
  	IngresosList
  ],
})
export class IngresosListModule {}
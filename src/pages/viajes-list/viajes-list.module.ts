import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViajesList } from './viajes-list';

@NgModule({
  declarations: [
    ViajesList,
  ],
  imports: [
    IonicPageModule.forChild(ViajesList),
  ],
  entryComponents: [
  	ViajesList
  ],
})
export class ViajesListModule {}
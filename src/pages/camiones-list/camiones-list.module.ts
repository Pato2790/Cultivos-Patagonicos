import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CamionesList } from './camiones-list';

@NgModule({
  declarations: [
    CamionesList,
  ],
  imports: [
    IonicPageModule.forChild(CamionesList),
  ],
  entryComponents: [
  	CamionesList
  ],
})
export class CamionesListModule {}
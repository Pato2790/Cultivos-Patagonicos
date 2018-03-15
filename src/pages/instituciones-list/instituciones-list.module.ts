import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstitucionesList } from './instituciones-list';

@NgModule({
  declarations: [
    InstitucionesList,
  ],
  imports: [
    IonicPageModule.forChild(InstitucionesList),
  ],
  entryComponents: [
  	InstitucionesList
  ],
})
export class InstitucionesListModule {}
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewCamion } from './new-camion';

import { SelectSearchableModule } from '../../shared/select/select-module';

@NgModule({
  declarations: [
    NewCamion,
  ],
  imports: [
    IonicPageModule.forChild(NewCamion),
    SelectSearchableModule
  ],
  entryComponents: [
  	NewCamion
  ],
})
export class NewCamionModule {}
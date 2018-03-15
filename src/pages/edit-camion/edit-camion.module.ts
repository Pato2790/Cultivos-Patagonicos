import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditCamion } from './edit-camion';

import { SelectSearchableModule } from '../../shared/select/select-module';

@NgModule({
  declarations: [
    EditCamion,
  ],
  imports: [
    IonicPageModule.forChild(EditCamion),
    SelectSearchableModule
  ],
  entryComponents: [
  	EditCamion
  ],
})
export class EditCamionModule {}
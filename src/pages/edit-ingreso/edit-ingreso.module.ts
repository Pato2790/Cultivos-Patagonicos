import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditIngreso } from './edit-ingreso';

import { SelectSearchableModule } from '../../shared/select/select-module';

@NgModule({
  declarations: [
    EditIngreso,
  ],
  imports: [
    IonicPageModule.forChild(EditIngreso),
    SelectSearchableModule
  ],
  entryComponents: [
  	EditIngreso
  ],
})
export class EditIngresoModule {}
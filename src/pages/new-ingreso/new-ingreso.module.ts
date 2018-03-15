import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewIngreso } from './new-ingreso';

import { SelectSearchableModule } from '../../shared/select/select-module';

@NgModule({
  declarations: [
    NewIngreso,
  ],
  imports: [
    IonicPageModule.forChild(NewIngreso),
    SelectSearchableModule
  ],
  entryComponents: [
  	NewIngreso
  ],
})
export class NewIngresoModule {}
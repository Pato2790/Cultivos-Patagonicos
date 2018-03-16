import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewViajeIngreso } from './new-viaje-ingreso';

import { SelectSearchableModule } from '../../shared/select/select-module';

@NgModule({
  declarations: [
    NewViajeIngreso,
  ],
  imports: [
    IonicPageModule.forChild(NewViajeIngreso),
    SelectSearchableModule
  ],
  entryComponents: [
  	NewViajeIngreso
  ],
})
export class NewViajeIngresoModule {}

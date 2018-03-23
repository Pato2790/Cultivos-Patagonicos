import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IngresosList } from './ingresos-list';

import { SelectSearchableModule } from '../../shared/select/select-module';

@NgModule({
  declarations: [
    IngresosList,
  ],
  imports: [
    IonicPageModule.forChild(IngresosList),
    SelectSearchableModule
  ],
  entryComponents: [
  	IngresosList
  ],
})
export class IngresosListModule {}
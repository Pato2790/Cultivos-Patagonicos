import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewViaje } from './new-viaje';

import { SelectSearchableModule } from '../../shared/select/select-module';

@NgModule({
  declarations: [
    NewViaje,
  ],
  imports: [
    IonicPageModule.forChild(NewViaje),
    SelectSearchableModule
  ],
  entryComponents: [
  	NewViaje
  ],
})
export class NewViajeModule {}
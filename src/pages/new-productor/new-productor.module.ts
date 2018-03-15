import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewProductor } from './new-productor';

import { SelectSearchableModule } from '../../shared/select/select-module';

@NgModule({
  declarations: [
    NewProductor,
  ],
  imports: [
    IonicPageModule.forChild(NewProductor),
    SelectSearchableModule
  ],
  entryComponents: [
  	NewProductor
  ],
})
export class NewProductorModule {}
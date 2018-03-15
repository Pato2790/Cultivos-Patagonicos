import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditProductor } from './edit-productor';

import { SelectSearchableModule } from '../../shared/select/select-module';

@NgModule({
  declarations: [
    EditProductor,
  ],
  imports: [
    IonicPageModule.forChild(EditProductor),
    SelectSearchableModule
  ],
  entryComponents: [
  	EditProductor
  ],
})
export class EditProductorModule {}
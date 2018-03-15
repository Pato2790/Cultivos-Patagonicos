import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditChacra } from './edit-chacra';

import { SelectSearchableModule } from '../../shared/select/select-module';

@NgModule({
  declarations: [
    EditChacra,
  ],
  imports: [
    IonicPageModule.forChild(EditChacra),
    SelectSearchableModule
  ],
  entryComponents: [
  	EditChacra
  ],
})
export class EditChacraModule {}
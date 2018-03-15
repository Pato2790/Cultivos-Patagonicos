import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditLote } from './edit-lote';

import { SelectSearchableModule } from '../../shared/select/select-module';

@NgModule({
  declarations: [
    EditLote,
  ],
  imports: [
    IonicPageModule.forChild(EditLote),
    SelectSearchableModule
  ],
  entryComponents: [
  	EditLote
  ],
})
export class EditLoteModule {}
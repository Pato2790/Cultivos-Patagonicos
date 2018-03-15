import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditEmpresa } from './edit-empresa';

import { SelectSearchableModule } from '../../shared/select/select-module';

@NgModule({
  declarations: [
    EditEmpresa,
  ],
  imports: [
    IonicPageModule.forChild(EditEmpresa),
    SelectSearchableModule
  ],
  entryComponents: [
  	EditEmpresa
  ],
})
export class EditEmpresaModule {}
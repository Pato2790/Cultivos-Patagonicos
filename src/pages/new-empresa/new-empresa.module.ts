import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewEmpresa } from './new-empresa';

import { SelectSearchableModule } from '../../shared/select/select-module';

@NgModule({
  declarations: [
    NewEmpresa,
  ],
  imports: [
    IonicPageModule.forChild(NewEmpresa),
    SelectSearchableModule
  ],
  entryComponents: [
  	NewEmpresa
  ],
})
export class NewEmpresaModule {}
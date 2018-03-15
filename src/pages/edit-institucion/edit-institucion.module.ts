import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditInstitucion } from './edit-institucion';

import { SelectSearchableModule } from '../../shared/select/select-module';

@NgModule({
  declarations: [
    EditInstitucion,
  ],
  imports: [
    IonicPageModule.forChild(EditInstitucion),
    SelectSearchableModule
  ],
  entryComponents: [
  	EditInstitucion
  ],
})
export class EditInstitucionModule {}
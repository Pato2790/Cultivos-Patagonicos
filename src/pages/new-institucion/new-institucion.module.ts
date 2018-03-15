import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewInstitucion } from './new-institucion';

import { SelectSearchableModule } from '../../shared/select/select-module';

@NgModule({
  declarations: [
    NewInstitucion,
  ],
  imports: [
    IonicPageModule.forChild(NewInstitucion),
    SelectSearchableModule
  ],
  entryComponents: [
  	NewInstitucion
  ],
})
export class NewInstitucionModule {}
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewChacra } from './new-chacra';

import { SelectSearchableModule } from '../../shared/select/select-module';

@NgModule({
  declarations: [
    NewChacra,
  ],
  imports: [
    IonicPageModule.forChild(NewChacra),
    SelectSearchableModule
  ],
  entryComponents: [
  	NewChacra
  ],
})
export class NewChacraModule {}
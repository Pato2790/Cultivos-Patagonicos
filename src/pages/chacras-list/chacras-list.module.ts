import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChacrasList } from './chacras-list';

@NgModule({
  declarations: [
    ChacrasList,
  ],
  imports: [
    IonicPageModule.forChild(ChacrasList),
  ],
  entryComponents: [
  	ChacrasList
  ],
})
export class ChacrasListModule {}

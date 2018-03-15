import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LotesList } from './lotes-list';

@NgModule({
  declarations: [
    LotesList,
  ],
  imports: [
    IonicPageModule.forChild(LotesList),
  ],
  entryComponents: [
  	LotesList
  ],
})
export class LotesListModule {}
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductoresList } from './productoresList';

@NgModule({
  declarations: [
    ProductoresList,
  ],
  imports: [
    IonicPageModule.forChild(ProductoresList),
  ],
  entryComponents: [
  	ProductoresList
  ],
})
export class ProductoresListModule {}
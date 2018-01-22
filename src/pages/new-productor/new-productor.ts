import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductoresServiceProvider } from '../../providers/productores-service/productores-service';

@Component({
  selector: 'page-new-productor',
  templateUrl: 'new-productor.html',
})
export class NewProductor {

  productor = { nombre : '', dni : '', telefono : ''}

  constructor(public navCtrl: NavController, public navParams: NavParams, private ProductoresServiceProvider : ProductoresServiceProvider) {
  }

  addNewProductor() {
    this.ProductoresServiceProvider.addNewProductor(this.productor).subscribe(data => console.log(data));
  }

}

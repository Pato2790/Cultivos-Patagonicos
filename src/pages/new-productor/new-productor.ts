import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductoresServiceProvider } from '../../providers/productores-service/productores-service';
import { ChacrasServiceProvider } from '../../providers/chacras-service/chacras-service';

@Component({
  selector: 'page-new-productor',
  templateUrl: 'new-productor.html',
})
export class NewProductor {

  productor = { nombre : '', dni : '', telefono : '', chacras_ids : [] }

  chacras = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private ProductoresServiceProvider : ProductoresServiceProvider, private ChacrasServiceProvider : ChacrasServiceProvider) {
  	this.ChacrasServiceProvider.getAllChacras().subscribe(data => this.chacras = data);
  }

  addNewProductor() {
    this.ProductoresServiceProvider.addNewProductor(this.productor).subscribe(data => console.log(data));
    this.destroyView();
  }

  destroyView(){
    this.navCtrl.pop();
  }

}

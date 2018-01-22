import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductoresServiceProvider } from '../../providers/productores-service/productores-service';

@Component({
  selector: 'page-list',
  templateUrl: 'productoresList.html'
})
export class ProductoresList {
  productoresList = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private ProductoresServiceProvider : ProductoresServiceProvider) {
    this.getProductores();
  }

  getProductores() {
    this.ProductoresServiceProvider.getAllProductores().subscribe(data => this.productoresList = data);
  }
}

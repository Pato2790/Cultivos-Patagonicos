import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, IonicPage } from 'ionic-angular';
import { ProductoresServiceProvider } from '../../providers/productores-service/productores-service';

import { EditProductor } from '../../pages/edit-productor/edit-productor';
import { NewProductor } from '../../pages/new-productor/new-productor';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'productoresList.html'
})
export class ProductoresList {
  productoresList = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private ProductoresServiceProvider : ProductoresServiceProvider, private AlertController : AlertController) {
    this.getProductores();
  }

  getProductores() {
    this.ProductoresServiceProvider.getAllProductores().subscribe(data => this.productoresList = data);
  }

  goToEdit(productor: any)
  {
  	this.navCtrl.push(EditProductor, {
  		productor : productor
  	})
  }

  goToAddProductor()
  {
    this.navCtrl.push(NewProductor);
  }

  deleteProductor(productorId) {
    this.ProductoresServiceProvider.deleteProductor(productorId).subscribe(data => this.getProductores());
  }

  alertDeleteProductor(productorId) {
    let alert = this.AlertController.create({
      title: 'Confirmar eliminacion',
      message: 'Esta seguro que desea eliminar el productor de la lista?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {}
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.deleteProductor(productorId);
          }
        }
      ]
    });
    alert.present();
  }

}

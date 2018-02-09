import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ProductoresServiceProvider } from '../../providers/productores-service/productores-service';
import { ChacrasServiceProvider } from '../../providers/chacras-service/chacras-service';

import { ProductoresList } from '../../pages/productoresList/productoresList';

@Component({
  selector: 'page-new-productor',
  templateUrl: 'new-productor.html',
})
export class NewProductor {

  productor = { nombre : '', dni : '', telefono : '', chacras_ids : [] }

  chacras = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private ProductoresServiceProvider : ProductoresServiceProvider, private ChacrasServiceProvider : ChacrasServiceProvider, public AlertController: AlertController) {
  	this.ChacrasServiceProvider.getAllChacras().subscribe(data => this.chacras = data);
  }

  addNewProductor() {
    this.ProductoresServiceProvider.addNewProductor(this.productor).subscribe(data => this.alertNewProductor(data.error));
  }

  alertNewProductor(error) {
    let alert;

    if(!error)
    {
      alert = this.AlertController.create({
        title: 'Creacion exitosa',
        message: 'Se ha creado correctamente el nuevo productor.',
        buttons: [
          {
            text: 'Aceptar',
            handler: () => {
              this.destroyView();
            }
          }
        ]
      });
    }
    else {
      alert = this.AlertController.create({
        title: 'Error',
        message: 'Se ha producido un error al intentar ingresar el nuevo productor.',
        buttons: [
          {
            text: 'Aceptar',
            handler: () => {}
          }
        ]
      });
    }
    
    alert.present();
  }

  destroyView(){
    this.navCtrl.pop();
    this.navCtrl.push(ProductoresList);
  }

}

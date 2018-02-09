import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { ProductoresServiceProvider } from '../../providers/productores-service/productores-service';

@Component({
  selector: 'page-edit-productor',
  templateUrl: 'edit-productor.html',
})
export class EditProductor {

	productor = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, private ProductoresServiceProvider : ProductoresServiceProvider, public AlertController: AlertController) {
		this.productor = this.navParams.get('productor');
	}

	editProductor()	{
		this.ProductoresServiceProvider.editProductor(this.productor).subscribe(data => this.alertEditLote(data.error));
	}

	alertEditLote(error) {
	  let alert;

	  if(!error)
	  {
	    alert = this.AlertController.create({
	      title: 'Edicion exitosa',
	      message: 'Se ha editado correctamente el productor.',
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
	      message: 'Se ha producido un error al intentar editar el productor.',
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
	}
}

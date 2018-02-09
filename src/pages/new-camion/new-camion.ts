import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { CamionesServiceProvider } from '../../providers/camiones-service/camiones-service';

import { CamionList } from '../../pages/camion-list/camion-list';

@Component({
  selector: 'page-new-camion',
  templateUrl: 'new-camion.html',
})
export class NewCamion {

	camion = { patenteChasis: '', patenteAcoplado: '', nombreChofer: '' };

	constructor(public navCtrl: NavController, public navParams: NavParams, private CamionesServiceProvider: CamionesServiceProvider, public AlertController: AlertController) {
	}

	addNewCamion() {
		this.CamionesServiceProvider.addNewCamion(this.camion).subscribe(data => this.alertNewCamion(data.error));
	}

	alertNewCamion(error) {
	    let alert;

	    if(!error)
	    {
	      alert = this.AlertController.create({
	        title: 'Creacion exitosa',
	        message: 'Se ha creado correctamente el nuevo camion.',
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
	        message: 'Se ha producido un error al intentar ingresar el nuevo camion.',
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
		this.navCtrl.push(CamionList);
	}
}

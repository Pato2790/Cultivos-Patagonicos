import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, IonicPage } from 'ionic-angular';

import { CamionesServiceProvider } from '../../providers/camiones-service/camiones-service';
import { EditCamion } from '../../pages/edit-camion/edit-camion';
import { NewCamion } from '../../pages/new-camion/new-camion';

@IonicPage()
@Component({
  selector: 'page-camiones-list',
  templateUrl: 'camiones-list.html',
})
export class CamionesList {

	camionesList = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, private CamionesServiceProvider: CamionesServiceProvider, private AlertController: AlertController) {
		this.getAllCamiones();
	}

	getAllCamiones()
	{
		this.CamionesServiceProvider.getAllCamiones().subscribe(data => this.camionesList = data);
	}

	goToEdit(camion: any)
	{
		this.navCtrl.push(EditCamion, {
			camion : camion
		})
	}

	goToAddCamion()
	{
		this.navCtrl.push(NewCamion);
	}

	deleteCamion(camionId) {
	  this.CamionesServiceProvider.deleteCamion(camionId).subscribe(data => this.getAllCamiones());
	}

	alertDeleteCamion(camionId) {
	  let alert = this.AlertController.create({
	    title: 'Confirmar eliminacion',
	    message: 'Esta seguro que desea eliminar el camion de la lista?',
	    buttons: [
	      {
	        text: 'Cancelar',
	        role: 'cancel',
	        handler: () => {}
	      },
	      {
	        text: 'Eliminar',
	        handler: () => {
	          this.deleteCamion(camionId);
	        }
	      }
	    ]
	  });
	  alert.present();
	}

}

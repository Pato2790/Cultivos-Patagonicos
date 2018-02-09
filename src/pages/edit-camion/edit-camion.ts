import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { CamionesServiceProvider } from '../../providers/camiones-service/camiones-service';

@Component({
  selector: 'page-edit-camion',
  templateUrl: 'edit-camion.html',
})
export class EditCamion {

	camion = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, private CamionesServiceProvider: CamionesServiceProvider, public AlertController: AlertController) {
	  this.camion = this.navParams.get('camion');
  }

	editCamion(camion){
  	this.CamionesServiceProvider.editCamion(this.camion).subscribe(data => this.alertEditCamion(data.error));
  }

  alertEditCamion(error) {
    let alert;

    if(!error)
    {
      alert = this.AlertController.create({
        title: 'Edicion exitosa',
        message: 'Se ha editado correctamente el camion.',
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
        message: 'Se ha producido un error al intentar editar el camion.',
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

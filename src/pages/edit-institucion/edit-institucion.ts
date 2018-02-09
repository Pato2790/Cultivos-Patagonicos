import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { InstitucionesServiceProvider } from '../../providers/instituciones-service/instituciones-service';

@Component({
  selector: 'page-edit-institucion',
  templateUrl: 'edit-institucion.html',
})
export class EditInstitucion {

	institucion = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, private InstitucionesServiceProvider: InstitucionesServiceProvider, public AlertController: AlertController) {
		this.institucion = this.navParams.get('institucion');
	}

	editInstitucion(institucion){
  	this.InstitucionesServiceProvider.editInstitucion(this.institucion).subscribe(data => this.alertEditInstitucion(data.error));
  }

  alertEditInstitucion(error) {
    let alert;

    if(!error)
    {
      alert = this.AlertController.create({
        title: 'Edicion exitosa',
        message: 'Se ha editado correctamente la institucion.',
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
        message: 'Se ha producido un error al intentar editar la institucion.',
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

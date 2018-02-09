import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { InstitucionesServiceProvider } from '../../providers/instituciones-service/instituciones-service';

import { InstitucionesList } from '../../pages/instituciones-list/instituciones-list';


@Component({
  selector: 'page-new-institucion',
  templateUrl: 'new-institucion.html',
})
export class NewInstitucion {

	institucion = { nombre: '', direccion: '', telefono: '' };

	constructor(public navCtrl: NavController, public navParams: NavParams, public InstitucionesServiceProvider: InstitucionesServiceProvider, public AlertController: AlertController) {
	}

	addNewInstitucion() {
		this.InstitucionesServiceProvider.addNewInstitucion(this.institucion).subscribe(data => this.alertNewInstitucion(data.error));
  	}

  	alertNewInstitucion(error) {
  	  let alert;

  	  if(!error)
  	  {
  	    alert = this.AlertController.create({
  	      title: 'Creacion exitosa',
  	      message: 'Se ha creado correctamente la nueva institucion.',
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
  	      message: 'Se ha producido un error al intentar ingresar la nueva institucion.',
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
      this.navCtrl.push(InstitucionesList);
  	}

}

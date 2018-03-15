import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, IonicPage } from 'ionic-angular';

import { InstitucionesServiceProvider } from '../../providers/instituciones-service/instituciones-service';

import { EditInstitucion } from '../../pages/edit-institucion/edit-institucion';
import { NewInstitucion } from '../../pages/new-institucion/new-institucion';

@IonicPage()
@Component({
  selector: 'page-instituciones-list',
  templateUrl: 'instituciones-list.html',
})
export class InstitucionesList {

	institucionesList = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, public InstitucionesServiceProvider: InstitucionesServiceProvider, public AlertController: AlertController) {
		this.InstitucionesServiceProvider.getAllInstituciones().subscribe(data => this.institucionesList = data);
	}

	getAllInstituciones()
	{
		this.InstitucionesServiceProvider.getAllInstituciones().subscribe(data => this.institucionesList = data);
	}

	goToEdit(institucion: any)
	{
		this.navCtrl.push(EditInstitucion, {
			institucion : institucion
		})
	}

	goToAddInstitucion()
	{
		this.navCtrl.push(NewInstitucion);
	}

	deleteInstitucion(institucionId) {
	  this.InstitucionesServiceProvider.deleteInstitucion(institucionId).subscribe(data => this.getAllInstituciones());
	}

	alertDeleteInstitucion(institucionId) {
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
	          this.deleteInstitucion(institucionId);
	        }
	      }
	    ]
	  });
	  alert.present();
	}

}

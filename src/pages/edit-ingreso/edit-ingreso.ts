import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { IngresosServiceProvider } from '../../providers/ingresos-service/ingresos-service';
import { InstitucionesServiceProvider } from '../../providers/instituciones-service/instituciones-service';
import { ChacrasServiceProvider } from '../../providers/chacras-service/chacras-service';

@Component({
  selector: 'page-edit-ingreso',
  templateUrl: 'edit-ingreso.html',
})
export class EditIngreso {

	ingreso = [];
	chacras = [];
	instituciones = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, public IngresosServiceProvider: IngresosServiceProvider,
		public InstitucionesServiceProvider: InstitucionesServiceProvider, public ChacrasServiceProvider: ChacrasServiceProvider,
		public AlertController: AlertController) {
		this.InstitucionesServiceProvider.getAllInstituciones().subscribe(data => this.instituciones = data);
		this.ChacrasServiceProvider.getAllChacras().subscribe(data => this.chacras = data);
		this.ingreso = this.navParams.get('ingreso');
	}

	editIngreso(ingreso){
	  	this.IngresosServiceProvider.editIngreso(this.ingreso).subscribe(data => this.alertEditIngreso(data.error));
	}

	alertEditIngreso(error) {
	  let alert;

	  if(!error)
	  {
	    alert = this.AlertController.create({
	      title: 'Edicion exitosa',
	      message: 'Se ha editado correctamente el ingreso.',
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
	      message: 'Se ha producido un error al intentar editar el ingreso.',
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

import { Component } from '@angular/core';
import { NavController, NavParams, AlertController  } from 'ionic-angular';
import { ChacrasServiceProvider } from '../../providers/chacras-service/chacras-service';
import { CuadrosServiceProvider } from '../../providers/cuadros-service/cuadros-service';

import { EditChacra } from '../../pages/edit-chacra/edit-chacra';

@Component({
  selector: 'page-chacras-list',
  templateUrl: 'chacras-list.html',
})
export class ChacrasList {

	chacrasList = [];
	newCuadro = { up: '', chacraId: '' };

	constructor(public navCtrl: NavController, public navParams: NavParams, private ChacrasServiceProvider: ChacrasServiceProvider, private CuadrosServiceProvider: CuadrosServiceProvider, private AlertController : AlertController) {
		this.getAllChacras();
	}

	getAllChacras() {
		this.ChacrasServiceProvider.getAllChacras().subscribe(data => this.chacrasList = data);
	}

	goToEdit(chacra: any)
	{
		this.navCtrl.push(EditChacra, {
			chacra : chacra
		})
	}

	deleteChacra(chacraId) {
	  this.ChacrasServiceProvider.deleteChacra(chacraId).subscribe(data => this.getAllChacras());
	}

	alertDeleteChacra(chacraId) {
	  let alert = this.AlertController.create({
	    title: 'Confirmar eliminacion',
	    message: 'Esta seguro que desea eliminar la chacra de la lista?',
	    buttons: [
	      {
	        text: 'Cancelar',
	        role: 'cancel',
	        handler: () => {}
	      },
	      {
	        text: 'Eliminar',
	        handler: () => {
	          this.deleteChacra(chacraId);
	        }
	      }
	    ]
	  });
	  alert.present();
	}

//CUADROS
	alertNewCuadro(chacraId) {
	  let alert = this.AlertController.create({
	    title: 'Editar Cuadro',
	    inputs: [
	      {
	        name: 'Up',
	        placeholder: 'Up',
	      }
	    ],
	    buttons: [
	      {
	        text: 'Cancel',
	        role: 'cancel',
	        handler: data => {}
	      },
	      {
	        text: 'Crear',
	        handler: data => {
	        	this.newCuadro.up = data.Up;
	        	this.newCuadro.chacraId = chacraId;
	        	this.addNewCuadro();
	        }
	      }
	    ]
	  });
	  alert.present();
	}

	addNewCuadro() {
		this.CuadrosServiceProvider.addNewCuadro(this.newCuadro).subscribe(data => this.getAllChacras());
		this.newCuadro = {up: '', chacraId: ''}
	}

	alertEditCuadro(cuadro) {
	  let alert = this.AlertController.create({
	    title: 'Editar Cuadro',
	    inputs: [
	      {
	        name: 'Up',
	        placeholder: 'Up',
	        value: cuadro.up,
	      }
	    ],
	    buttons: [
	      {
	        text: 'Cancel',
	        role: 'cancel',
	        handler: data => {}
	      },
	      {
	        text: 'Editar',
	        handler: data => {
	        	cuadro.up = data.Up;
	        	this.editCuadro(cuadro);
	        }
	      }
	    ]
	  });
	  alert.present();
	}

	editCuadro(cuadro)
	{
		this.CuadrosServiceProvider.editCuadro(cuadro).subscribe(data => this.getAllChacras());
	}

	alertDeleteCuadro(cuadroId) {
	  let alert = this.AlertController.create({
	    title: 'Confirmar eliminacion',
	    message: 'Esta seguro que desea eliminar el cuadro de la lista?',
	    buttons: [
	      {
	        text: 'Cancelar',
	        role: 'cancel',
	        handler: () => {}
	      },
	      {
	        text: 'Eliminar',
	        handler: () => {
	          this.deleteCuadro(cuadroId);
	        }
	      }
	    ]
	  });
	  alert.present();
	}

	deleteCuadro(cuadroId) {
	  this.CuadrosServiceProvider.deleteCuadro(cuadroId).subscribe(data => this.getAllChacras());
	}
}

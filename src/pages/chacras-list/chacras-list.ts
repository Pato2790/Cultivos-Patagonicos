import { Component } from '@angular/core';
import { NavController, NavParams, AlertController  } from 'ionic-angular';
import { ChacrasServiceProvider } from '../../providers/chacras-service/chacras-service';

import { EditChacra } from '../../pages/edit-chacra/edit-chacra';

@Component({
  selector: 'page-chacras-list',
  templateUrl: 'chacras-list.html',
})
export class ChacrasList {

	chacrasList = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, private ChacrasServiceProvider: ChacrasServiceProvider, private AlertController : AlertController) {
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
}

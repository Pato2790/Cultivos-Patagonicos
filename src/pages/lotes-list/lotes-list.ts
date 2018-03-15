import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { EditLote } from '../../pages/edit-lote/edit-lote';

import { LotesServiceProvider } from '../../providers/lotes-service/lotes-service';

@IonicPage()
@Component({
  selector: 'page-lotes-list',
  templateUrl: 'lotes-list.html',
})
export class LotesList {

	lotes = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, public LotesServiceProvider: LotesServiceProvider,
		public AlertController:AlertController) {
		this.lotes = this.navParams.get('lotes');
	}

	alertDeleteLote(loteId) {
	  let alert = this.AlertController.create({
	    title: 'Confirmar eliminacion',
	    message: 'Esta seguro que desea eliminar el lote de la lista?',
	    buttons: [
	      {
	        text: 'Cancelar',
	        role: 'cancel',
	        handler: () => {}
	      },
	      {
	        text: 'Eliminar',
	        handler: () => {
	          this.deleteLote(loteId);
	        }
	      }
	    ]
	  });
	  alert.present();
	}

	deleteLote(loteId) {
	  this.LotesServiceProvider.deleteLote(loteId);
	}

	goToEditLote(lote: any)
	{
	  this.navCtrl.push(EditLote, {
	    lote : lote
	  })
	}
}

import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ChacrasServiceProvider } from '../../providers/chacras-service/chacras-service';

import { ChacrasList } from '../../pages/chacras-list/chacras-list';

@Component({
  selector: 'page-new-chacra',
  templateUrl: 'new-chacra.html',
})
export class NewChacra {

	chacra = { nombre : '', renspa : ''}

	constructor(public navCtrl: NavController, public navParams: NavParams, private ChacrasServiceProvider: ChacrasServiceProvider, public AlertController: AlertController) {
	}

	addNewChacra() {
		this.ChacrasServiceProvider.addNewChacra(this.chacra).subscribe(data => this.alertNewChacra(data.error));
	}

	alertNewChacra(error) {
    let alert;

    if(!error)
    {
      alert = this.AlertController.create({
        title: 'Creacion exitosa',
        message: 'Se ha creado correctamente la nueva chacra.',
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
        message: 'Se ha producido un error al intentar ingresar la nueva chacra.',
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
    this.navCtrl.push(ChacrasList);
	}
}

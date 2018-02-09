import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { ChacrasServiceProvider } from '../../providers/chacras-service/chacras-service';

@Component({
  selector: 'page-edit-chacra',
  templateUrl: 'edit-chacra.html',
})
export class EditChacra {

  chacra = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private ChacrasServiceProvider : ChacrasServiceProvider, public AlertController: AlertController) {
    this.chacra = this.navParams.get('chacra');
  }

  editChacra(chacra){
  	this.ChacrasServiceProvider.editChacra(this.chacra).subscribe(data => this.alertEditChacra(data.error));
  }

  alertEditChacra(error) {
    let alert;

    if(!error)
    {
      alert = this.AlertController.create({
        title: 'Edicion exitosa',
        message: 'Se ha editado correctamente la chacra.',
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
        message: 'Se ha producido un error al intentar editar la chacra.',
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

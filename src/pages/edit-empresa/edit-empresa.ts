import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { EmpresasServiceProvider } from '../../providers/empresas-service/empresas-service';

@Component({
  selector: 'page-edit-empresa',
  templateUrl: 'edit-empresa.html',
})
export class EditEmpresa {

	empresa = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, private EmpresasServiceProvider: EmpresasServiceProvider, public AlertController: AlertController) {
		this.empresa = this.navParams.get('empresa');
	}

	editEmpresa(chacra){
  	this.EmpresasServiceProvider.editEmpresa(this.empresa).subscribe(data => this.alertEditEmpresa(data.error));
  }

  alertEditEmpresa(error) {
    let alert;

    if(!error)
    {
      alert = this.AlertController.create({
        title: 'Edicion exitosa',
        message: 'Se ha editado correctamente la empresa.',
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
        message: 'Se ha producido un error al intentar editar la empresa.',
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

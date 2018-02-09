import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { EmpresasList } from '../../pages/empresas-list/empresas-list';

import { EmpresasServiceProvider } from '../../providers/empresas-service/empresas-service';
import { CamionesServiceProvider } from '../../providers/camiones-service/camiones-service';

@Component({
  selector: 'page-new-empresa',
  templateUrl: 'new-empresa.html',
})
export class NewEmpresa {

	empresa = {nombre: '', direcccion: '', telefono: '', camiones_ids: [] }

	camiones = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, private CamionesServiceProvider: CamionesServiceProvider, private EmpresasServiceProvider: EmpresasServiceProvider, public AlertController: AlertController) {
		this.CamionesServiceProvider.getAllCamiones().subscribe(data => this.camiones = data);
	}

	addNewEmpresa() {
    this.EmpresasServiceProvider.addNewEmpresa(this.empresa).subscribe(data => this.alertNewEmpresa(data.error));
  }

  alertNewEmpresa(error) {
    let alert;

    if(!error)
    {
      alert = this.AlertController.create({
        title: 'Creacion exitosa',
        message: 'Se ha creado correctamente la nueva empresa.',
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
        message: 'Se ha producido un error al intentar ingresar la nueva empresa.',
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
    this.navCtrl.push(EmpresasList);
  }

}

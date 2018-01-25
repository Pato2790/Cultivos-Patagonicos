import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EmpresasServiceProvider } from '../../providers/empresas-service/empresas-service';
import { CamionesServiceProvider } from '../../providers/camiones-service/camiones-service';

@Component({
  selector: 'page-new-empresa',
  templateUrl: 'new-empresa.html',
})
export class NewEmpresa {

	empresa = {nombre: '', direcccion: '', telefono: '', camiones_ids: [] }

	camiones = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, private CamionesServiceProvider: CamionesServiceProvider, private EmpresasServiceProvider: EmpresasServiceProvider) {
		this.CamionesServiceProvider.getAllCamiones().subscribe(data => this.camiones = data);
	}

	addNewEmpresa() {
    this.EmpresasServiceProvider.addNewEmpresa(this.empresa).subscribe(data => console.log(data));
    this.destroyView();
  }

  destroyView(){
    this.navCtrl.pop();
  }

}

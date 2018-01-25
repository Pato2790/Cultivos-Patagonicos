import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EmpresasServiceProvider } from '../../providers/empresas-service/empresas-service';

@Component({
  selector: 'page-edit-empresa',
  templateUrl: 'edit-empresa.html',
})
export class EditEmpresa {

	empresa = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, private EmpresasServiceProvider: EmpresasServiceProvider) {
		this.empresa = this.navParams.get('empresa');
	}

	editEmpresa(chacra){
  	this.EmpresasServiceProvider.editEmpresa(this.empresa).subscribe(data => console.log(data));
  	this.destroyView();
  }

  destroyView(){
  	this.navCtrl.pop();
  }
}

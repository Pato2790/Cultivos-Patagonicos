import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, IonicPage } from 'ionic-angular';

import { EmpresasServiceProvider } from '../../providers/empresas-service/empresas-service';
import { EditEmpresa } from '../../pages/edit-empresa/edit-empresa';
import { NewEmpresa } from '../../pages/new-empresa/new-empresa';

@IonicPage()
@Component({
  selector: 'page-empresas-list',
  templateUrl: 'empresas-list.html',
})
export class EmpresasList {

	empresasList = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, private EmpresasServiceProvider: EmpresasServiceProvider, private AlertController : AlertController) {
		this.getAllEmpresas();
	}

	getAllEmpresas() {
		this.EmpresasServiceProvider.getAllEmpresas().subscribe(data => this.empresasList = data);
	}

	goToEdit(empresa: any)
	{
		this.navCtrl.push(EditEmpresa, {
			empresa : empresa
		})
	}

	goToAddEmpresa()
	{
		this.navCtrl.push(NewEmpresa);
	}

	deleteEmpresa(empresaId) {
	  this.EmpresasServiceProvider.deleteEmpresa(empresaId).subscribe(data => this.getAllEmpresas());
	}

	alertDeleteEmpresa(empresaId) {
	  let alert = this.AlertController.create({
	    title: 'Confirmar eliminacion',
	    message: 'Esta seguro que desea eliminar la empresa de la lista?',
	    buttons: [
	      {
	        text: 'Cancelar',
	        role: 'cancel',
	        handler: () => {}
	      },
	      {
	        text: 'Eliminar',
	        handler: () => {
	          this.deleteEmpresa(empresaId);
	        }
	      }
	    ]
	  });
	  alert.present();
	}

}

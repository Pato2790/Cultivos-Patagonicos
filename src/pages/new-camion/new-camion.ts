import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, IonicPage } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { SelectSearchable } from '../../shared/select/select';

import { CamionesServiceProvider } from '../../providers/camiones-service/camiones-service';
import { EmpresasServiceProvider } from '../../providers/empresas-service/empresas-service';

import { CamionesList } from '../../pages/camiones-list/camiones-list';

@IonicPage()
@Component({
  selector: 'page-new-camion',
  templateUrl: 'new-camion.html',
})
export class NewCamion {

	camion = { patenteChasis: '', patenteAcoplado: '', nombreChofer: '', empresa_id: '' };
	empresas = [];
	empresa = [];
	formNewCamion : FormGroup;
	nombreChofer: AbstractControl;
	patenteAcoplado: AbstractControl;
	patenteChasis: AbstractControl;
	empresa_id: FormControl;

	constructor(public navCtrl: NavController, public navParams: NavParams, private CamionesServiceProvider: CamionesServiceProvider, 
		public AlertController: AlertController, private formBuilder: FormBuilder, private EmpresasServiceProvider: EmpresasServiceProvider) {
		
		this.empresa_id = this.formBuilder.control('', Validators.required);

		this.formNewCamion = this.formBuilder.group({
		  nombreChofer: ['', Validators.required],
		  patenteAcoplado: ['', Validators.compose([Validators.required, Validators.minLength(7), Validators.maxLength(7)])],
		  patenteChasis: ['', Validators.compose([Validators.required, Validators.minLength(7), Validators.maxLength(7)])],
		  empresa_id: this.empresa_id,
		});

		this.nombreChofer = this.formNewCamion.controls['nombreChofer'];
		this.patenteAcoplado = this.formNewCamion.controls['patenteAcoplado'];
		this.patenteChasis = this.formNewCamion.controls['patenteChasis'];

		this.EmpresasServiceProvider.getAllEmpresas()
			.subscribe(data => 
				{
					this.empresas = data;
					this.empresa_id.setValue('');
				});
	}

	addNewCamion() {
	  if(!this.formNewCamion.valid)
	  {
	    this.AlertController.create({
	      title: 'Datos Incorrectos',
	      message: 'Los datos ingresados pueden ser incorrectos o faltantes.',
	      buttons: [
	        {
	          text: 'Aceptar',
	          handler: () => {}
	        }
	      ]
	    }).present();
	  }
	  else {
	    this.CamionesServiceProvider.addNewCamion(this.camion).subscribe(data => this.alertNewCamion(data));
	  }
	}

	alertNewCamion(data) {
	    let alert;

	    if(!JSON.parse(data._body).error)
	    {
	      alert = this.AlertController.create({
	        title: 'Creacion exitosa',
	        message: 'Se ha creado correctamente el nuevo camion.',
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
	        message: 'Se ha producido un error al intentar ingresar el nuevo camion.',
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

	empresaChange(event: { component: SelectSearchable, value: any }) {
      this.camion.empresa_id = event.value.id;
  	}

	destroyView(){
		this.navCtrl.pop();
		this.navCtrl.push(CamionesList);
	}
}

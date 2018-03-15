import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, IonicPage } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

import { IngresosServiceProvider } from '../../providers/ingresos-service/ingresos-service';
import { InstitucionesServiceProvider } from '../../providers/instituciones-service/instituciones-service';
import { ChacrasServiceProvider } from '../../providers/chacras-service/chacras-service';

@IonicPage()
@Component({
  selector: 'page-edit-ingreso',
  templateUrl: 'edit-ingreso.html',
})
export class EditIngreso {

	ingreso = [];
	formEditIngreso : FormGroup;
  	nroRemito: AbstractControl;
  	fechaIngreso: AbstractControl;

	constructor(public navCtrl: NavController, public navParams: NavParams, public IngresosServiceProvider: IngresosServiceProvider,
		public InstitucionesServiceProvider: InstitucionesServiceProvider, public ChacrasServiceProvider: ChacrasServiceProvider,
		public AlertController: AlertController, private formBuilder: FormBuilder) {

		this.ingreso = this.navParams.get('ingreso');

		this.formEditIngreso = this.formBuilder.group({
		  nroRemito: ['', Validators.compose([Validators.required, Validators.minLength(12), Validators.maxLength(12)])],
		  fechaIngreso: ['', Validators.required],
		});

		this.nroRemito = this.formEditIngreso.controls['nroRemito'];
		this.fechaIngreso = this.formEditIngreso.controls['fechaIngreso'];
	}

	editIngreso(ingreso){
		if(!this.formEditIngreso.valid)
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
		  this.IngresosServiceProvider.editIngreso(this.ingreso).subscribe(data => this.alertEditIngreso(data));
		}
	}

	alertEditIngreso(data) {
	  let alert;

	  if(!JSON.parse(data._body).error)
	  {
	    alert = this.AlertController.create({
	      title: 'Edicion exitosa',
	      message: 'Se ha editado correctamente el ingreso.',
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
	      message: 'Se ha producido un error al intentar editar el ingreso.',
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

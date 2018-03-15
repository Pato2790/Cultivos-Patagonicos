import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, IonicPage } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

import { ProductoresServiceProvider } from '../../providers/productores-service/productores-service';

@IonicPage()
@Component({
  selector: 'page-edit-productor',
  templateUrl: 'edit-productor.html',
})
export class EditProductor {

	productor = [];
	formEditProductor : FormGroup;
	nombre: AbstractControl;
	dni: AbstractControl;
	telefono: AbstractControl;

	constructor(public navCtrl: NavController, public navParams: NavParams, private ProductoresServiceProvider : ProductoresServiceProvider, 
		public AlertController: AlertController, private formBuilder: FormBuilder) {

		this.productor = this.navParams.get('productor');

		this.formEditProductor = this.formBuilder.group({
		  nombre: ['', Validators.required],
		  dni: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(8)])],
		  telefono: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
		});

		this.nombre = this.formEditProductor.controls['nombre'];
		this.dni = this.formEditProductor.controls['dni'];
		this.telefono = this.formEditProductor.controls['telefono'];
	}

	editProductor()	{
		if(!this.formEditProductor.valid)
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
			this.ProductoresServiceProvider.editProductor(this.productor).subscribe(data => this.alertEditLote(data));
		}
	}

	alertEditLote(data) {
	  let alert;

	  if(!JSON.parse(data._body).error)
	  {
	    alert = this.AlertController.create({
	      title: 'Edicion exitosa',
	      message: 'Se ha editado correctamente el productor.',
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
	      message: 'Se ha producido un error al intentar editar el productor.',
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

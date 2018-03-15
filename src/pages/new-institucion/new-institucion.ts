import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, IonicPage } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

import { InstitucionesServiceProvider } from '../../providers/instituciones-service/instituciones-service';

import { InstitucionesList } from '../../pages/instituciones-list/instituciones-list';

@IonicPage()
@Component({
  selector: 'page-new-institucion',
  templateUrl: 'new-institucion.html',
})
export class NewInstitucion {

	institucion = { nombre: '', direccion: '', telefono: '' };
  formNewInstitucion : FormGroup;
  nombre: AbstractControl;
  direccion: AbstractControl;
  telefono: AbstractControl;

	constructor(public navCtrl: NavController, public navParams: NavParams, public InstitucionesServiceProvider: InstitucionesServiceProvider, 
    public AlertController: AlertController, private formBuilder: FormBuilder) {

    this.formNewInstitucion = this.formBuilder.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
    });

    this.nombre = this.formNewInstitucion.controls['nombre'];
    this.direccion = this.formNewInstitucion.controls['direccion'];
    this.telefono = this.formNewInstitucion.controls['telefono'];
	}

	addNewInstitucion() {
    if(!this.formNewInstitucion.valid)
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
      this.InstitucionesServiceProvider.addNewInstitucion(this.institucion).subscribe(data => this.alertNewInstitucion(data));
    }
  }

  	alertNewInstitucion(data) {
  	  let alert;

  	  if(!JSON.parse(data._body).error)
  	  {
  	    alert = this.AlertController.create({
  	      title: 'Creacion exitosa',
  	      message: 'Se ha creado correctamente la nueva institucion.',
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
  	      message: 'Se ha producido un error al intentar ingresar la nueva institucion.',
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
      this.navCtrl.push(InstitucionesList);
  	}

}

import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, IonicPage } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

import { InstitucionesServiceProvider } from '../../providers/instituciones-service/instituciones-service';

@IonicPage()
@Component({
  selector: 'page-edit-institucion',
  templateUrl: 'edit-institucion.html',
})
export class EditInstitucion {

	institucion = [];
  formEditInstitucion : FormGroup;
  nombre: AbstractControl;
  direccion: AbstractControl;
  telefono: AbstractControl;

	constructor(public navCtrl: NavController, public navParams: NavParams, private InstitucionesServiceProvider: InstitucionesServiceProvider, 
    public AlertController: AlertController, private formBuilder: FormBuilder) {

		this.institucion = this.navParams.get('institucion');

    this.formEditInstitucion = this.formBuilder.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
    });

    this.nombre = this.formEditInstitucion.controls['nombre'];
    this.direccion = this.formEditInstitucion.controls['direccion'];
    this.telefono = this.formEditInstitucion.controls['telefono'];
	}

	editInstitucion(institucion){
    if(!this.formEditInstitucion.valid)
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
      this.InstitucionesServiceProvider.editInstitucion(this.institucion).subscribe(data => this.alertEditInstitucion(data));
    }
  }

  alertEditInstitucion(data) {
    let alert;

    if(!JSON.parse(data._body).error)
    {
      alert = this.AlertController.create({
        title: 'Edicion exitosa',
        message: 'Se ha editado correctamente la institucion.',
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
        message: 'Se ha producido un error al intentar editar la institucion.',
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

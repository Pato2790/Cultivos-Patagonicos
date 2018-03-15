import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, IonicPage } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

import { EmpresasServiceProvider } from '../../providers/empresas-service/empresas-service';

@IonicPage()
@Component({
  selector: 'page-edit-empresa',
  templateUrl: 'edit-empresa.html',
})
export class EditEmpresa {

	empresa = [];
  formEditEmpresa : FormGroup;
  nombre: AbstractControl;
  direccion: AbstractControl;
  telefono: AbstractControl;

	constructor(public navCtrl: NavController, public navParams: NavParams, private EmpresasServiceProvider: EmpresasServiceProvider, 
    public AlertController: AlertController, private formBuilder: FormBuilder) {

		this.empresa = this.navParams.get('empresa');

    this.formEditEmpresa = this.formBuilder.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
    });

    this.nombre = this.formEditEmpresa.controls['nombre'];
    this.direccion = this.formEditEmpresa.controls['direccion'];
    this.telefono = this.formEditEmpresa.controls['telefono'];
	}

	editEmpresa(chacra){
    if(!this.formEditEmpresa.valid)
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
      this.EmpresasServiceProvider.editEmpresa(this.empresa).subscribe(data => this.alertEditEmpresa(data));
    }
  }

  alertEditEmpresa(data) {
    let alert;

    if(!JSON.parse(data._body).error)
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

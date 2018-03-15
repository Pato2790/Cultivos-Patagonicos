import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, IonicPage } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

import { EmpresasList } from '../../pages/empresas-list/empresas-list';

import { EmpresasServiceProvider } from '../../providers/empresas-service/empresas-service';
import { CamionesServiceProvider } from '../../providers/camiones-service/camiones-service';

@IonicPage()
@Component({
  selector: 'page-new-empresa',
  templateUrl: 'new-empresa.html',
})
export class NewEmpresa {

	empresa = {nombre: '', direcccion: '', telefono: '' }
	camiones = [];
  formNewEmpresa : FormGroup;
  nombre: AbstractControl;
  direccion: AbstractControl;
  telefono: AbstractControl;

	constructor(public navCtrl: NavController, public navParams: NavParams, private CamionesServiceProvider: CamionesServiceProvider, 
    private EmpresasServiceProvider: EmpresasServiceProvider, public AlertController: AlertController, private formBuilder: FormBuilder) {

		this.CamionesServiceProvider.getAllCamiones().subscribe(data => this.camiones = data);

    this.formNewEmpresa = this.formBuilder.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
    });

    this.nombre = this.formNewEmpresa.controls['nombre'];
    this.direccion = this.formNewEmpresa.controls['direccion'];
    this.telefono = this.formNewEmpresa.controls['telefono'];
	}

	addNewEmpresa() {
    if(!this.formNewEmpresa.valid)
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
      this.EmpresasServiceProvider.addNewEmpresa(this.empresa).subscribe(data => this.alertNewEmpresa(data));
    }
  }

  alertNewEmpresa(data) {
    let alert;

    if(!JSON.parse(data._body).error)
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

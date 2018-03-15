import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, IonicPage } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { SelectSearchable } from '../../shared/select/select';

import { CamionesServiceProvider } from '../../providers/camiones-service/camiones-service';
import { EmpresasServiceProvider } from '../../providers/empresas-service/empresas-service';

@IonicPage()
@Component({
  selector: 'page-edit-camion',
  templateUrl: 'edit-camion.html',
})
export class EditCamion {

	camion = [];
  empresas = [];
  selectedEmpresa = {};
  formEditCamion : FormGroup;
  nombreChofer: AbstractControl;
  patenteAcoplado: AbstractControl;
  patenteChasis: AbstractControl;
  empresa_id: FormControl;

	constructor(public navCtrl: NavController, public navParams: NavParams, private CamionesServiceProvider: CamionesServiceProvider, 
    public AlertController: AlertController, private formBuilder: FormBuilder, private EmpresasServiceProvider: EmpresasServiceProvider) {
	  
    this.empresa_id = this.formBuilder.control('', Validators.required);

    this.camion = this.navParams.get('camion');
    
    this.formEditCamion = this.formBuilder.group({
      nombreChofer: ['', Validators.required],
      patenteAcoplado: ['', Validators.compose([Validators.required, Validators.minLength(7), Validators.maxLength(7)])],
      patenteChasis: ['', Validators.compose([Validators.required, Validators.minLength(7), Validators.maxLength(7)])],
      empresa_id: this.empresa_id
    });

    this.nombreChofer = this.formEditCamion.controls['nombreChofer'];
    this.patenteAcoplado = this.formEditCamion.controls['patenteAcoplado'];
    this.patenteChasis = this.formEditCamion.controls['patenteChasis'];

    this.EmpresasServiceProvider.getAllEmpresas()
      .subscribe(data => 
        {
          this.empresas = data;
          this.empresa_id.setValue(this.camion['empresa']);
        });
  }

	editCamion(camion){
    if(!this.formEditCamion.valid)
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
      this.CamionesServiceProvider.editCamion(this.camion).subscribe(data => this.alertEditCamion(data));
    }
  }

  alertEditCamion(data) {
    let alert;

    if(!JSON.parse(data._body).error)
    {
      alert = this.AlertController.create({
        title: 'Edicion exitosa',
        message: 'Se ha editado correctamente el camion.',
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
        message: 'Se ha producido un error al intentar editar el camion.',
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
      this.camion['empresaId'] = event.value.id;
  }

  destroyView(){
  	this.navCtrl.pop();
  }
}

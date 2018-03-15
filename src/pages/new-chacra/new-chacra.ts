import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, IonicPage } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

import { ChacrasServiceProvider } from '../../providers/chacras-service/chacras-service';
import { ProductoresServiceProvider } from '../../providers/productores-service/productores-service';

import { ChacrasList } from '../../pages/chacras-list/chacras-list';

@IonicPage()
@Component({
  selector: 'page-new-chacra',
  templateUrl: 'new-chacra.html',
})
export class NewChacra {

	chacra = { nombre : '', renspa : '', productor_id: ''}
  productores = [];
  formNewChacra : FormGroup;
  nombre: AbstractControl;
  renspa: AbstractControl;
  productor_id: AbstractControl;

	constructor(public navCtrl: NavController, public navParams: NavParams, private ChacrasServiceProvider: ChacrasServiceProvider,
    public AlertController: AlertController, private formBuilder: FormBuilder, private ProductoresServiceProvider: ProductoresServiceProvider) {

    this.ProductoresServiceProvider.getAllProductores().subscribe(data => this.productores = data);
	  
    this.formNewChacra = this.formBuilder.group({
      nombre: ['', Validators.required],
      renspa: ['', Validators.compose([Validators.required, Validators.minLength(12), Validators.maxLength(12)])],
      productor_id: ['', Validators.required],
    });

    this.nombre = this.formNewChacra.controls['nombre'];
    this.renspa = this.formNewChacra.controls['renspa'];
    this.productor_id = this.formNewChacra.controls['productor_id'];
  }

	addNewChacra() {
    console.log(this.productor_id.valid);
    if(!this.formNewChacra.valid)
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
      this.ChacrasServiceProvider.addNewChacra(this.chacra).subscribe(data => this.alertNewChacra(data));
    }
	}

	alertNewChacra(data) {
    let alert;

    if(!JSON.parse(data._body).error)
    {
      alert = this.AlertController.create({
        title: 'Creacion exitosa',
        message: 'Se ha creado correctamente la nueva chacra.',
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
        message: 'Se ha producido un error al intentar ingresar la nueva chacra.',
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
    this.navCtrl.push(ChacrasList);
	}
}

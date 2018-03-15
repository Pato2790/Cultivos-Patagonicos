import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { NavController, NavParams, AlertController, IonicPage } from 'ionic-angular';

import { ProductoresServiceProvider } from '../../providers/productores-service/productores-service';
import { ChacrasServiceProvider } from '../../providers/chacras-service/chacras-service';

import { ProductoresList } from '../../pages/productoresList/productoresList';

@IonicPage()
@Component({
  selector: 'page-new-productor',
  templateUrl: 'new-productor.html',
})
export class NewProductor {

  productor = { nombre : '', dni : '', telefono : '', chacras_ids : [] }
  formNewProductor : FormGroup;
  nombre: AbstractControl;
  dni: AbstractControl;
  telefono: AbstractControl;
  chacras = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private ProductoresServiceProvider : ProductoresServiceProvider, 
    private ChacrasServiceProvider : ChacrasServiceProvider, public AlertController: AlertController, private formBuilder: FormBuilder) {
  	
    this.ChacrasServiceProvider.getAllChacras().subscribe(data => this.chacras = data);

    this.formNewProductor = this.formBuilder.group({
      nombre: ['', Validators.required],
      dni: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(8)])],
      telefono: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
    });

    this.nombre = this.formNewProductor.controls['nombre'];
    this.dni = this.formNewProductor.controls['dni'];
    this.telefono = this.formNewProductor.controls['telefono'];
  }

  addNewProductor() {
    if(!this.formNewProductor.valid)
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
      this.ProductoresServiceProvider.addNewProductor(this.productor).subscribe(data => this.alertNewProductor(data));
    }
  }

  alertNewProductor(data) {
    let alert;

    if(!JSON.parse(data._body).error)
    {
      alert = this.AlertController.create({
        title: 'Creacion exitosa',
        message: 'Se ha creado correctamente el nuevo productor.',
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
        message: 'Se ha producido un error al intentar ingresar el nuevo productor.',
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
    this.navCtrl.push(ProductoresList);
  }

}

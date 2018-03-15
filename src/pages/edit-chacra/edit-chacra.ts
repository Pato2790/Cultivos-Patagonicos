import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, IonicPage } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { SelectSearchable } from '../../shared/select/select';

import { ChacrasServiceProvider } from '../../providers/chacras-service/chacras-service';
import { ProductoresServiceProvider } from '../../providers/productores-service/productores-service';

@IonicPage()
@Component({
  selector: 'page-edit-chacra',
  templateUrl: 'edit-chacra.html',
})
export class EditChacra {

  chacra = [];
  productores = [];
  productor = {};
  formEditChacra : FormGroup;
  nombre: AbstractControl;
  renspa: AbstractControl;
  productor_id: FormControl;

  constructor(public navCtrl: NavController, public navParams: NavParams, private ChacrasServiceProvider : ChacrasServiceProvider, 
    public AlertController: AlertController, private formBuilder: FormBuilder, private ProductoresServiceProvider: ProductoresServiceProvider) {
    
    this.productor_id = this.formBuilder.control('', Validators.required);

    this.chacra = this.navParams.get('chacra');

    this.formEditChacra = this.formBuilder.group({
      nombre: ['', Validators.required],
      renspa: ['', Validators.compose([Validators.required, Validators.minLength(12), Validators.maxLength(12)])],
      productor_id: this.productor_id,
    });

    this.nombre = this.formEditChacra.controls['nombre'];
    this.renspa = this.formEditChacra.controls['renspa'];

    this.ProductoresServiceProvider.getAllProductores()
      .subscribe(data => 
        {
          this.productores = data;
          this.productor = this.productores.filter(productor => productor.id === this.chacra['productorId'])[0];
          this.productor_id.setValue(this.productor);
        });
  }

  editChacra(chacra){
    if(!this.formEditChacra.valid)
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
      this.ChacrasServiceProvider.editChacra(this.chacra).subscribe(data => this.alertEditChacra(data));
    }
  }

  alertEditChacra(data) {
    let alert;

    if(!JSON.parse(data._body).error)
    {
      alert = this.AlertController.create({
        title: 'Edicion exitosa',
        message: 'Se ha editado correctamente la chacra.',
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
        message: 'Se ha producido un error al intentar editar la chacra.',
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

  productorChange(event: { component: SelectSearchable, value: any }) {
    this.chacra['productorId'] = event.value.id;
  }

  destroyView(){
  	this.navCtrl.pop();
  }

}

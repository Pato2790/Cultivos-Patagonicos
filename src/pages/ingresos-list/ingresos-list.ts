import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { IngresosServiceProvider } from '../../providers/ingresos-service/ingresos-service';
import { LotesServiceProvider } from '../../providers/lotes-service/lotes-service';

import { EditIngreso } from '../../pages/edit-ingreso/edit-ingreso';
import { EditLote } from '../../pages/edit-lote/edit-lote';

@Component({
  selector: 'page-ingresos-list',
  templateUrl: 'ingresos-list.html',
})
export class IngresosList {

  ingresosList = [];
  itemExpandHeight: number = 100;

  constructor(public navCtrl: NavController, public navParams: NavParams, public IngresosServiceProvider: IngresosServiceProvider, 
    public AlertController:AlertController, public LotesServiceProvider: LotesServiceProvider) {
  	this.getAllIngresos();
  }

  getAllIngresos()
  {
    this.IngresosServiceProvider.getAllIngresos().subscribe(data => this.ingresosList = data);
  }

  toggleIngreso(index) {
    this.ingresosList[index].open = !this.ingresosList[index].open;
  }

  goToEditIngreso(ingreso: any)
  {
    this.navCtrl.push(EditIngreso, {
      ingreso : ingreso
    })
  }

  alertDeleteIngreso(ingresoId) {
    let alert = this.AlertController.create({
      title: 'Confirmar eliminacion',
      message: 'Esta seguro que desea eliminar el ingreso de la lista?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {}
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.deleteIngreso(ingresoId);
          }
        }
      ]
    });
    alert.present();
  }

  deleteIngreso(ingresoId) {
    this.IngresosServiceProvider.deleteIngreso(ingresoId).subscribe(data => this.getAllIngresos());
  }

  goToEditLote(lote: any)
  {
    this.navCtrl.push(EditLote, {
      lote : lote
    })
  }

  alertDeleteLote(loteId) {
    let alert = this.AlertController.create({
      title: 'Confirmar eliminacion',
      message: 'Esta seguro que desea eliminar el lote de la lista?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {}
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.deleteLote(loteId);
          }
        }
      ]
    });
    alert.present();
  }

  deleteLote(loteId) {
    this.LotesServiceProvider.deleteLote(loteId).subscribe(data => this.getAllIngresos());
  }
}

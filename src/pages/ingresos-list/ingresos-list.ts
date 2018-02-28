import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { IngresosServiceProvider } from '../../providers/ingresos-service/ingresos-service';

import { EditIngreso } from '../../pages/edit-ingreso/edit-ingreso';
import { ViajesList } from '../../pages/viajes-list/viajes-list';
import { LotesList } from '../../pages/lotes-list/lotes-list';

@Component({
  selector: 'page-ingresos-list',
  templateUrl: 'ingresos-list.html',
})
export class IngresosList {

  ingresosList = [];
  itemExpandHeight: number = 100;

  constructor(public navCtrl: NavController, public navParams: NavParams, public IngresosServiceProvider: IngresosServiceProvider, 
    public AlertController:AlertController) {
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

  goToViajes(ingreso)
  {
    this.navCtrl.push(ViajesList, {
      viajes : ingreso.ingresos_viajes
    })
  }

  goToLotes(ingreso)
  {
    this.navCtrl.push(LotesList, {
      lotes : ingreso.lotes
    })
  }
}

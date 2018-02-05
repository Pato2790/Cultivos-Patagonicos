import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { IngresosServiceProvider } from '../../providers/ingresos-service/ingresos-service';

@Component({
  selector: 'page-ingresos-list',
  templateUrl: 'ingresos-list.html',
})
export class IngresosList {

  ingresosList = [];
  itemExpandHeight: number = 100;

  constructor(public navCtrl: NavController, public navParams: NavParams, public IngresosServiceProvider: IngresosServiceProvider) {
  	this.IngresosServiceProvider.getAllIngresos().subscribe(
  		data => { this.ingresosList = data; });
  }

  toggleIngreso(index) {
    this.ingresosList[index].open = !this.ingresosList[index].open;
  }
}

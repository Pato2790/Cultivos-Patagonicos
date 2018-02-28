import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-viajes-list',
  templateUrl: 'viajes-list.html',
})
export class ViajesList {

	viajes = [];

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.viajes = this.navParams.get('viajes');
	}

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChacrasServiceProvider } from '../../providers/chacras-service/chacras-service';

@Component({
  selector: 'page-chacras-list',
  templateUrl: 'chacras-list.html',
})
export class ChacrasList {

	chacrasList = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, private ChacrasServiceProvider: ChacrasServiceProvider) {
		this.getAllChacras();
	}

	getAllChacras() {
		this.ChacrasServiceProvider.getAllChacras().subscribe(data => this.chacrasList = data);
	}

}

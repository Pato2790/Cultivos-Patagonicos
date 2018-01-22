import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChacrasServiceProvider } from '../../providers/chacras-service/chacras-service';

@Component({
  selector: 'page-new-chacra',
  templateUrl: 'new-chacra.html',
})
export class NewChacra {

	chacra = { nombre : '', renspa : ''}

	constructor(public navCtrl: NavController, public navParams: NavParams, private ChacrasServiceProvider: ChacrasServiceProvider) {
	}

	addNewChacra() {
		this.ChacrasServiceProvider.addNewChacra(this.chacra).subscribe(data => console.log(data));
	}
}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CamionesServiceProvider } from '../../providers/camiones-service/camiones-service';

@Component({
  selector: 'page-new-camion',
  templateUrl: 'new-camion.html',
})
export class NewCamion {

	camion = { patenteChasis: '', patenteAcoplado: '', nombreChofer: '' };

	constructor(public navCtrl: NavController, public navParams: NavParams, private CamionesServiceProvider: CamionesServiceProvider) {
	}

	addNewCamion() {
		this.CamionesServiceProvider.addNewCamion(this.camion).subscribe(data => console.log(data));
	}

	destroyView(){
		this.navCtrl.pop();
	}
}

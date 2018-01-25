import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CamionesServiceProvider } from '../../providers/camiones-service/camiones-service';

@Component({
  selector: 'page-edit-camion',
  templateUrl: 'edit-camion.html',
})
export class EditCamion {

	camion = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, private CamionesServiceProvider: CamionesServiceProvider) {
	  this.camion = this.navParams.get('camion');
  }

	editCamion(camion){
  	this.CamionesServiceProvider.editCamion(this.camion).subscribe(data => console.log(data));
  	this.destroyView();
  }

  destroyView(){
  	this.navCtrl.pop();
  }
}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { InstitucionesServiceProvider } from '../../providers/instituciones-service/instituciones-service';

@Component({
  selector: 'page-edit-institucion',
  templateUrl: 'edit-institucion.html',
})
export class EditInstitucion {

	institucion = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, private InstitucionesServiceProvider: InstitucionesServiceProvider) {
		this.institucion = this.navParams.get('institucion');
	}

	editInstitucion(institucion){
  	this.InstitucionesServiceProvider.editInstitucion(this.institucion).subscribe(data => console.log(data));
  	this.destroyView();
  }

  destroyView(){
  	this.navCtrl.pop();
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { InstitucionesServiceProvider } from '../../providers/instituciones-service/instituciones-service';


@Component({
  selector: 'page-new-institucion',
  templateUrl: 'new-institucion.html',
})
export class NewInstitucion {

	institucion = { nombre: '', direccion: '', telefono: '' };

	constructor(public navCtrl: NavController, public navParams: NavParams, public InstitucionesServiceProvider: InstitucionesServiceProvider) {
	}

	addNewInstitucion() {
		this.InstitucionesServiceProvider.addNewInstitucion(this.institucion).subscribe(data => console.log(data));
		this.destroyView();
  	}

  	destroyView(){
    	this.navCtrl.pop();
  	}

}

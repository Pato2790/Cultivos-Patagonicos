import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { SelectSearchable } from '../../shared/select/select';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { IngresosServiceProvider } from '../../providers/ingresos-service/ingresos-service';
import { CamionesServiceProvider } from '../../providers/camiones-service/camiones-service';
import { InstitucionesServiceProvider } from '../../providers/instituciones-service/instituciones-service';
import { ViajesServiceProvider } from '../../providers/viajes-service/viajes-service';

import { IngresosList } from '../../pages/ingresos-list/ingresos-list';

@Component({
  selector: 'page-new-viaje',
  templateUrl: 'new-viaje.html',
})
export class NewViaje {

	ingresos = [];
	viaje = { fecha : this.formatDate(), costo: 0, createdFor: this.AuthServiceProvider.getCurrentUser().email, 
			institucionId: 0, camionId: 0, camiones: [], camion: {}, instituciones: [], institucion: {}, ingresos: [] };

	constructor(public navCtrl: NavController, public navParams: NavParams, public AuthServiceProvider: AuthServiceProvider,
		public IngresosServiceProvider: IngresosServiceProvider, public ViajesServiceProvider: ViajesServiceProvider, 
		public CamionesServiceProvider: CamionesServiceProvider, public InstitucionesServiceProvider: InstitucionesServiceProvider,
		public AlertController:AlertController) {
		this.ingresos = this.navParams.get('ingresos');

		this.InstitucionesServiceProvider.getAllInstituciones().subscribe(data => this.viaje.instituciones = data);
		this.CamionesServiceProvider.getAllCamiones().subscribe(data => this.viaje.camiones = data); 
	}

	camionChange(event: { component: SelectSearchable, value: any }) {
	    this.viaje.camionId = event.value.id;
	}

	institucionChange(event: { component: SelectSearchable, value: any }) {
	    this.viaje.institucionId = event.value.id;
	}

	addNewViaje()
	{
		this.viaje.ingresos = this.ingresos;
		this.ViajesServiceProvider.addNewViajeWithIngresos(this.viaje).subscribe(data => this.alertSuccess(data));
	}

	finishAdding()
	{
		this.navCtrl.pop();
		this.navCtrl.push(IngresosList);
	}

	goBack()
	{
		this.navCtrl.pop();
	}

	formatDate()
	{
		var fecha = new Date();
	    return fecha.getFullYear()  + "-" + fecha.getMonth() + 1 + "-" + fecha.getDate();
	}

	alertSuccess(data) {
    let alert;

    if(JSON.parse(data._body).error)
    {
    	alert = this.AlertController.create({
			title: 'Error',
			message: 'No se ha podido llevar a cabo los nuevos ingresos. Revise los datos ingresados y pruebe nuevamente.',
			buttons: [
				{
				  text: 'Aceptar',
				  role: 'aceptar',
				  handler: () => {}
				}
			]
	    });
    }
    else {
    	alert = this.AlertController.create({
			title: 'Exito',
			message: 'Se han cargado correctamente los datos.',
			buttons: [
				{
				  text: 'Aceptar',
				  role: 'aceptar',
				  handler: () => { 
				  	this.finishAdding(); 
				  }
				}
			]
	    });
    }
    
    alert.present();
  }
}

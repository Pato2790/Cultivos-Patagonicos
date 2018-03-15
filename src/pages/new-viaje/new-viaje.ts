import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, IonicPage } from 'ionic-angular';
import { SelectSearchable } from '../../shared/select/select';
import { Validators, FormBuilder, FormControl, FormGroup, AbstractControl } from '@angular/forms';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { IngresosServiceProvider } from '../../providers/ingresos-service/ingresos-service';
import { CamionesServiceProvider } from '../../providers/camiones-service/camiones-service';
import { InstitucionesServiceProvider } from '../../providers/instituciones-service/instituciones-service';
import { ViajesServiceProvider } from '../../providers/viajes-service/viajes-service';

import { IngresosList } from '../../pages/ingresos-list/ingresos-list';

@IonicPage()
@Component({
  selector: 'page-new-viaje',
  templateUrl: 'new-viaje.html',
})
export class NewViaje {

	ingresos = [];
	viaje = { fecha : this.formatDate(), costo: 0, createdFor: this.AuthServiceProvider.getCurrentUser().email, 
			institucionId: '', camionId: '', camiones: [], camion: {}, instituciones: [], institucion: {}, ingresos: [] };

	formNewViaje : FormGroup;
  	fecha: AbstractControl;
  	costo: AbstractControl;
  	institucion: FormControl;
  	camion: FormControl;

	constructor(public navCtrl: NavController, public navParams: NavParams, public AuthServiceProvider: AuthServiceProvider,
		public IngresosServiceProvider: IngresosServiceProvider, public ViajesServiceProvider: ViajesServiceProvider, 
		public CamionesServiceProvider: CamionesServiceProvider, public InstitucionesServiceProvider: InstitucionesServiceProvider,
		public AlertController:AlertController, private formBuilder: FormBuilder) {
		
		this.ingresos = this.navParams.get('ingresos');

		this.institucion = this.formBuilder.control('', Validators.required);
		this.camion = this.formBuilder.control('', Validators.required);

		this.formNewViaje = this.formBuilder.group({
		  institucion: this.institucion,
		  camion: this.camion,
		  fecha: ['', Validators.required],
		  costo: ['',  Validators.required]
		});

		this.fecha = this.formNewViaje.controls['fecha'];
		this.costo = this.formNewViaje.controls['costo'];

		this.InstitucionesServiceProvider.getAllInstituciones()
			.subscribe(data => 
				{
					this.viaje.instituciones = data;
					this.institucion.setValue('');
				});

		this.CamionesServiceProvider.getAllCamiones()
			.subscribe(data => 
				{
					this.viaje.camiones = data;
					this.camion.setValue('');
				});		
	}

	camionChange(event: { component: SelectSearchable, value: any }) {
	    this.viaje.camionId = event.value.id;
	}

	institucionChange(event: { component: SelectSearchable, value: any }) {
	    this.viaje.institucionId = event.value.id;
	}

	addNewViaje()
	{
		if(!this.formNewViaje.valid)
		{
		  this.AlertController.create({
		    title: 'Datos Incorrectos',
		    message: 'Los datos ingresados pueden ser incorrectos o faltantes.',
		    buttons: [
		      {
		        text: 'Aceptar',
		        handler: () => {}
		      }
		    ]
		  }).present();
		}
		else {
		  	this.viaje.ingresos = this.ingresos;
			this.ViajesServiceProvider.addNewViajeWithIngresos(this.viaje).subscribe(data => this.alertSuccess(data));
		}
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
	    return fecha.getFullYear()  + "-" + (fecha.getMonth() + 1) + "-" + fecha.getDate();
	}

	alertSuccess(data) {
    let alert;

    if(!JSON.parse(data._body).error)
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

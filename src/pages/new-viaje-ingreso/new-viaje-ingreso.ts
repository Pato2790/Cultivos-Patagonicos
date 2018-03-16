import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { SelectSearchable } from '../../shared/select/select';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { CamionesServiceProvider } from '../../providers/camiones-service/camiones-service';
import { InstitucionesServiceProvider } from '../../providers/instituciones-service/instituciones-service';
import { IngresosServiceProvider } from '../../providers/ingresos-service/ingresos-service';
import { ViajesServiceProvider } from '../../providers/viajes-service/viajes-service';

import { ViajesList } from '../../pages/viajes-list/viajes-list';


@IonicPage()
@Component({
  selector: 'page-new-viaje-ingreso',
  templateUrl: 'new-viaje-ingreso.html',
})
export class NewViajeIngreso {

	viaje = { fecha : this.formatDate(), costo: 0, createdFor: this.AuthServiceProvider.getCurrentUser().email, 
				ingresoId : '', camionId: '', institucionId: '', ingreso : {}, camion: {}, institucion: {} };

	ingresos = [];
	camiones = [];
	instituciones = [];

	formNewViajeIngreso : FormGroup;

	constructor(public navCtrl: NavController, public navParams: NavParams, private CamionesServiceProvider: CamionesServiceProvider,
		private InstitucionesServiceProvider: InstitucionesServiceProvider, private IngresosServiceProvider: IngresosServiceProvider,
		private ViajesServiceProvider: ViajesServiceProvider, private AuthServiceProvider: AuthServiceProvider,
		private formBuilder: FormBuilder, private AlertController: AlertController) 
	{
		this.formNewViajeIngreso = this.formBuilder.group({
		  fecha: ['', Validators.required],
		  costo: ['',  Validators.required],
		  ingreso: ['', Validators.required],
		  camion: ['', Validators.required],
		  institucion: ['', Validators.required],
		});

		this.IngresosServiceProvider.getAllSimplifyIngresos()
			.subscribe(data => {
				this.ingresos = data;
				this.formNewViajeIngreso.controls['ingreso'].setValue('');
			});

		this.CamionesServiceProvider.getAllCamiones()
			.subscribe(data => {
				this.camiones = data;
				this.formNewViajeIngreso.controls['camion'].setValue('');
			});

		this.InstitucionesServiceProvider.getAllInstituciones()
			.subscribe(data => {
				this.instituciones = data;
				this.formNewViajeIngreso.controls['institucion'].setValue('');
			});
	}

	camionChange(event: { component: SelectSearchable, value: any }) {
	    this.viaje.camionId = event.value.id;
	}

	institucionChange(event: { component: SelectSearchable, value: any }) {
	    this.viaje.institucionId = event.value.id;
	}

	ingresoChange(event: { component: SelectSearchable, value: any }) {
	    this.viaje.ingresoId = event.value.id;
	}

	addNewViajeIngreso() {
	    if(!this.formNewViajeIngreso.valid)
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
	      this.ViajesServiceProvider.addNewViaje(this.viaje).subscribe(data => this.alertNewViajeIngreso(data));
	    }
	}

	alertNewViajeIngreso(data) {
	    let alert;

	    if(!JSON.parse(data._body).error)
	    {
	      alert = this.AlertController.create({
	        title: 'Creacion exitosa',
	        message: 'Se ha creado correctamente el nuevo viaje.',
	        buttons: [
	          {
	            text: 'Aceptar',
	            handler: () => {
	              this.destroyView();
	            }
	          }
	        ]
	      });
	    }
	    else {
	      alert = this.AlertController.create({
	        title: 'Error',
	        message: 'Se ha producido un error al intentar ingresar el nuevo viaje.',
	        buttons: [
	          {
	            text: 'Aceptar',
	            handler: () => {}
	          }
	        ]
	      });
	    }
	    
	    alert.present();
	}

	destroyView(){
		this.IngresosServiceProvider.getAllIngresosWithViajes(this.viaje.ingresoId).subscribe(data => {
		  	this.navCtrl.pop();
	    	this.navCtrl.push(ViajesList, {
	    		viajes: data[0].ingresos_viajes
	    	});
		});
	}

	formatDate()
	{
		var fecha = new Date();
	    return fecha.getFullYear()  + "-" + (fecha.getMonth() + 1) + "-" + fecha.getDate();
	}

}

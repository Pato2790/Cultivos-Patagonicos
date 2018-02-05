import { Component } from '@angular/core';
import { NavController, NavParams, AlertController  } from 'ionic-angular';
import { SelectSearchable } from '../../shared/select/select';

import { CalidadModel } from '../../models/calidad-model';
import { EspecieModel } from '../../models/especie-model';
import { VariedadModel } from '../../models/variedad-model';
import { InstitucionModel } from '../../models/institucion-model';
import { CamionModel } from '../../models/camion-model';
import { ChacraModel } from '../../models/chacra-model';

import { CalidadesServiceProvider } from '../../providers/calidades-service/calidades-service';
import { EspecieServiceProvider } from '../../providers/especie-service/especie-service';
import { InstitucionesServiceProvider } from '../../providers/instituciones-service/instituciones-service';
import { CamionesServiceProvider } from '../../providers/camiones-service/camiones-service';
import { IngresosServiceProvider } from '../../providers/ingresos-service/ingresos-service';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { ChacrasServiceProvider } from '../../providers/chacras-service/chacras-service';

@Component({
  selector: 'page-new-ingreso',
  templateUrl: 'new-ingreso.html',
})
export class NewIngreso {

	ingreso = { nroRemito: null, fechaIngreso: this.formatDate(), institucionId: 0, camionId: 0, chacraId: 0, createdFor: '', lotes: []};

	calidades = [];
	calidad = CalidadModel;

	especie = EspecieModel;
	especies = [];

	variedad = VariedadModel;
	variedades = [];

	institucion = InstitucionModel;
	instituciones = [];

	camion = CamionModel;
	camiones = [];

	chacra = ChacraModel;
	chacras = [];

	lotes = []; 

	constructor(public navCtrl: NavController, public navParams: NavParams, public CalidadesServiceProvider: CalidadesServiceProvider,
	 public EspecieServiceProvider: EspecieServiceProvider, public InstitucionesServiceProvider: InstitucionesServiceProvider,
	 public CamionesServiceProvider: CamionesServiceProvider, public IngresosServiceProvider: IngresosServiceProvider,
	 public AuthServiceProvider: AuthServiceProvider, public ChacrasServiceProvider: ChacrasServiceProvider,
	 public AlertController: AlertController) {
		
		this.agregarLoteList();
		this.CalidadesServiceProvider.getAllCalidades().subscribe(data => this.calidades = this.lotes[0].calidades = Object.assign([], data) );
		this.EspecieServiceProvider.getAllEmpecies().subscribe(data => this.especies = this.lotes[0].especies = Object.assign([], data));
		this.InstitucionesServiceProvider.getAllInstituciones().subscribe(data => this.instituciones = this.lotes[0].instituciones = Object.assign([], data));
		this.CamionesServiceProvider.getAllCamiones().subscribe(data => this.camiones = data);
		this.ChacrasServiceProvider.getAllChacras().subscribe(data => this.chacras = data);
	}

	agregarLoteList()
	{
		this.lotes.push({ peso: null, nroLote: null, cantBins: null, calidadId: null, especieId: null, variedadId: null, 
			calidades: Object.assign([], this.calidades), especies: Object.assign([], this.especies), variedades: Object.assign([], this.variedades),
			especie: Object.assign({}, this.especie), variedad: Object.assign({}, this.variedad), calidad: Object.assign({}, this.calidad) });
	}

	deleteLoteList(lote)
	{
		var index: number = this.lotes.indexOf(lote, 0);
		this.lotes.splice(index,1);
	}

	calidadChange(event: { component: SelectSearchable, value: any }, lote) {
        lote.calidadId = event.value.id;
    }

    especieChange(event: { component: SelectSearchable, value: any }, lote) {
        lote.especieId = event.value.id;
        var currentVariedades = this.especies[this.especies.indexOf(event.value,0)].variedads;
        lote.variedades = Object.assign([], currentVariedades);
    }

    variedadChange(event: { component: SelectSearchable, value: any }, lote) {
        lote.variedadId = event.value.id;
    }

    institucionChange(event: { component: SelectSearchable, value: any }) {
        this.ingreso.institucionId = event.value.id;
    }

    camionChange(event: { component: SelectSearchable, value: any }) {
        this.ingreso.camionId = event.value.id;
    }

    chacraChange(event: { component: SelectSearchable, value: any }) {
        this.ingreso.chacraId = event.value.id;
    }

    addNewIngreso(){
    	this.ingreso.lotes = this.lotes;
    	this.ingreso.createdFor = this.AuthServiceProvider.getCurrentUser().email;
    	this.IngresosServiceProvider.addNewIngreso(this.ingreso).subscribe(data => {
    		if(data.error) {
    			let alert = this.AlertController.create({
    			    title: 'Error al crear el nuevo ingreso',
    			    subTitle: 'Por favor revise los datos ingresados.',
    			    buttons: ['Aceptar']
    			  });
    			  alert.present();
    		}
    		else {
    			let alert = this.AlertController.create({
    			    title: 'Ingreso creado correctamente',
    			    subTitle: 'Se ha ingresado exitosamente el nuevo ingreso',
    			    buttons: ['Aceptar']
    			  });
    			  alert.present();
    		}
    	});
    }

    formatDate()
	{
		var fecha = new Date();
	    return fecha.getFullYear()  + "-" + fecha.getMonth() + 1 + "-" + fecha.getDate();
	}
}

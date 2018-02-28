import { Component } from '@angular/core';
import { NavController, NavParams, AlertController  } from 'ionic-angular';
import { SelectSearchable } from '../../shared/select/select';

import { IngresosList } from '../../pages/ingresos-list/ingresos-list';
import { NewViaje } from '../../pages/new-viaje/new-viaje';

import { CalidadModel } from '../../models/calidad-model';
import { EspecieModel } from '../../models/especie-model';
import { VariedadModel } from '../../models/variedad-model';
import { InstitucionModel } from '../../models/institucion-model';
import { CamionModel } from '../../models/camion-model';
import { ChacraModel } from '../../models/chacra-model';
import { TratamientoModel } from '../../models/tratamiento-model';
import { CuadroModel } from '../../models/cuadro-model';
import { IngresoModel } from '../../models/ingreso-model';
import { LoteModel } from '../../models/lote-model';

import { CalidadesServiceProvider } from '../../providers/calidades-service/calidades-service';
import { EspecieServiceProvider } from '../../providers/especie-service/especie-service';
import { CuadrosServiceProvider } from '../../providers/cuadros-service/cuadros-service';
import { TratamientosServiceProvider } from '../../providers/tratamientos-service/tratamientos-service';
import { IngresosServiceProvider } from '../../providers/ingresos-service/ingresos-service';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { ChacrasServiceProvider } from '../../providers/chacras-service/chacras-service';

@Component({
  selector: 'page-new-ingreso',
  templateUrl: 'new-ingreso.html',
})
export class NewIngreso {

  indexLote = 0;
  indexIngreso = 0;

	ingresos : Array<IngresoModel> = new Array<IngresoModel>();

  calidad : CalidadModel[];
	calidades = [];

	especie : EspecieModel[];
	especies = [];

	variedad : VariedadModel[];
	variedades = [];

	chacra : ChacraModel[];
	chacras = [];

  tratamiento : TratamientoModel[];
  tratamientos = [];

  cuadro : CuadroModel[];
  cuadros = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, public CalidadesServiceProvider: CalidadesServiceProvider,
	  public EspecieServiceProvider: EspecieServiceProvider, public IngresosServiceProvider: IngresosServiceProvider,
    public AuthServiceProvider: AuthServiceProvider, public ChacrasServiceProvider: ChacrasServiceProvider, public CuadrosServiceProvider: CuadrosServiceProvider,
    public TratamientosServiceProvider: TratamientosServiceProvider, public AlertController: AlertController) {
		
    this.agregarIngresoList();
		this.CalidadesServiceProvider.getAllCalidades().subscribe(data => 
      {
        this.calidades = Object.assign([], data);
        this.ingresos[0].lotes[0].calidades = Object.assign([], data);
      });
		this.EspecieServiceProvider.getAllEmpecies().subscribe(data => 
      { 
        this.especies = Object.assign([], data);
        this.ingresos[0].lotes[0].especies = Object.assign([], data);
      });
		this.TratamientosServiceProvider.getAllTratamientos().subscribe(data => 
      {
        this.tratamientos = Object.assign([], data);
        this.ingresos[0].lotes[0].tratamientos = Object.assign([], data);
      });
    this.ChacrasServiceProvider.getAllChacras().subscribe(data => 
    {
      this.chacras = Object.assign([], data);
      this.ingresos[0].chacras = Object.assign([], data);
    });
  }

  agregarIngresoList()
  {
    this.ingresos.push(new IngresoModel(this.indexIngreso ,0, this.formatDate(),  0,  0,  this.AuthServiceProvider.getCurrentUser().email, 
      new Array<LoteModel>(new LoteModel( this.indexLote, 0, 0,  0,  0,  0,  0,  0,  0, Object.assign([], this.calidades), new CalidadModel(),  Object.assign([], this.especies), new EspecieModel(),
        new Array<VariedadModel>(), new VariedadModel(), Object.assign([], this.tratamientos), new TratamientoModel(), new Array<CuadroModel>(), new CuadroModel())), 
      Object.assign([], this.chacras), new ChacraModel()));
    this.indexLote++;
    this.indexIngreso++;
  }

	agregarLoteList(ingreso : IngresoModel)
	{
    var index: number = this.ingresos.indexOf(ingreso, 0);

    this.ingresos[index].lotes.push(
        new LoteModel( this.indexLote, 0, 0,  0,  0,  0,  0,  0,  0, Object.assign([], this.calidades), new CalidadModel(),  Object.assign([], this.especies), new EspecieModel(),
        new Array<VariedadModel>(), new VariedadModel(), Object.assign([], this.tratamientos), new TratamientoModel(), new Array<CuadroModel>(), new CuadroModel())
      );
    this.indexLote++;
	}

  deleteIngresoList(ingreso)
  {
    var index: number = this.ingresos.indexOf(ingreso, 0);
    this.ingresos.splice(index,1);
  }

	deleteLoteList(ingreso, lote)
	{
		var index: number = ingreso.lotes.indexOf(lote, 0);
		ingreso.lotes.splice(index,1);
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

  tratamientoChange(event: { component: SelectSearchable, value: any }, lote) {
      lote.tratamientoId = event.value.id;
  }

  chacraChange(event: { component: SelectSearchable, value: any }, ingreso) {
      ingreso.chacraId = event.value.id;
      var currentCuadros = this.chacras[this.chacras.indexOf(event.value,0)].cuadros;
      for(let lote of ingreso.lotes)
      {
        lote.cuadros = Object.assign([], currentCuadros);
      }
  }

  cuadroChange(event: { component: SelectSearchable, value: any }, lote) {
      lote.cuadroId = event.value.id;
  }

  addNewIngreso(){
    this.navCtrl.push(NewViaje, {
      ingresos : this.ingresos
    });
  }

  alertNewIngreso() {
    let alert = this.AlertController.create({
        title: 'Revise los datos ingresados',
        message: 'Se procedera a realizar la carga del viaje. Desea continuar?',
        buttons: [
          {
            text: 'Aceptar',
            handler: () => {
              this.addNewIngreso();
            }
          },
          {
            text: 'Cancelar',
            handler: () => {}
          }
        ]
      });
    
    alert.present();
  }

  destroyView(){
    this.navCtrl.pop();
    this.navCtrl.push(IngresosList);
  }

  formatDate()
	{
		var fecha = new Date();
	    return fecha.getFullYear()  + "-" + fecha.getMonth() + 1 + "-" + fecha.getDate();
	}

  trackByFn(index,value){
    return value.id;
  }
}

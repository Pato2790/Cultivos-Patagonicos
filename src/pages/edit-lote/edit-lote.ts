import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, IonicPage } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { SelectSearchable } from '../../shared/select/select';

import { LotesServiceProvider } from '../../providers/lotes-service/lotes-service';
import { CalidadesServiceProvider } from '../../providers/calidades-service/calidades-service';
import { EspecieServiceProvider } from '../../providers/especie-service/especie-service';
import { VariedadesServiceProvider } from '../../providers/variedades-service/variedades-service';
import { ChacrasServiceProvider } from '../../providers/chacras-service/chacras-service';
import { TratamientosServiceProvider } from '../../providers/tratamientos-service/tratamientos-service';
import { CuadrosServiceProvider } from '../../providers/cuadros-service/cuadros-service';

@IonicPage()
@Component({
  selector: 'page-edit-lote',
  templateUrl: 'edit-lote.html',
})
export class EditLote {

	lote = [];
	calidades = [];
	variedades = [];
	especies = [];
  chacras = [];
  tratamientos = [];
  cuadros = [];
  formEditLote : FormGroup;
  nroRemito: AbstractControl;
  cantBins: AbstractControl;
  pesoNeto: AbstractControl;
  calidad: FormControl;
  variedad: FormControl;
  especie: FormControl;
  chacra: FormControl;
  tratamiento: FormControl;
  cuadro: FormControl;

	constructor(public navCtrl: NavController, public navParams: NavParams, public LotesServiceProvider: LotesServiceProvider,
		public CalidadesServiceProvider: CalidadesServiceProvider, public EspecieServiceProvider: EspecieServiceProvider,
		public VariedadesServiceProvider : VariedadesServiceProvider, public ChacrasServiceProvider: ChacrasServiceProvider,
    public TratamientosServiceProvider: TratamientosServiceProvider, public CuadrosServiceProvider: CuadrosServiceProvider,
    public AlertController: AlertController, private formBuilder: FormBuilder) {
		
		this.lote = this.navParams.get('lote');

    this.calidad = this.formBuilder.control('', Validators.required);
    this.variedad = this.formBuilder.control('', Validators.required);
    this.especie = this.formBuilder.control('', Validators.required);
    this.chacra = this.formBuilder.control('', Validators.required);
    this.tratamiento = this.formBuilder.control('', Validators.required);
    this.cuadro = this.formBuilder.control('', Validators.required);

    this.formEditLote = this.formBuilder.group({
      nroRemito: ['', Validators.required],
      cantBins: ['', Validators.compose([Validators.required, Validators.minLength(7), Validators.maxLength(7)])],
      pesoNeto: ['', Validators.compose([Validators.required, Validators.minLength(7), Validators.maxLength(7)])],
      calidad: this.calidad,
      variedad: this.variedad,
      especie: this.especie,
      chacra: this.chacra,
      tratamiento: this.tratamiento,
      cuadro: this.cuadro
    });

    this.nroRemito = this.formEditLote.controls['nroRemito'];
    this.cantBins = this.formEditLote.controls['cantBins'];
    this.pesoNeto = this.formEditLote.controls['pesoNeto'];

		this.CalidadesServiceProvider.getAllCalidades()
      .subscribe(data => 
        {
          this.calidades = data;
          this.calidad.setValue(this.lote['calidad']);
        });

		this.EspecieServiceProvider.getAllEmpecies()
      .subscribe(data => 
        {
          this.especies = data;
          this.especie.setValue(this.lote['especy']);
        });

		this.VariedadesServiceProvider.getAllVariedades(this.lote['especy'].id)
      .subscribe(data => 
        {
          this.variedades = data
          this.variedad.setValue(this.lote['variedad']);
        });

    this.ChacrasServiceProvider.getAllChacras()
      .subscribe(data => 
        {
          this.chacras = data;
          this.chacra.setValue(this.lote['chacra']);
        });

    this.CuadrosServiceProvider.getAllCuadrosByChacras(this.lote['chacra'].id)
      .subscribe(data => 
        {
          this.cuadros = data;
          this.cuadro.setValue(this.lote['cuadro']);
        });

    this.TratamientosServiceProvider.getAllTratamientos()
      .subscribe(data => 
        {
          this.tratamientos = data;
          this.tratamiento.setValue(this.lote['tratamiento']);
        });
	}

	editLote(){
      if(!this.formEditLote.valid)
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
        this.LotesServiceProvider.editLote(this.lote).subscribe(data => this.alertEditLote(data));
      }
  	}

	destroyView(){
		this.navCtrl.pop();
	}

	calidadChange(event: { component: SelectSearchable, value: any }, lote) {
        lote.calidadId = event.value.id;
    }

    especieChange(event: { component: SelectSearchable, value: any }, lote) {
        lote.especieId = event.value.id;
        this.VariedadesServiceProvider.getAllVariedades(lote.especieId)
          .subscribe(data => 
            {
              this.variedades = data;
              this.variedad.setValue('');
            });
    }

    variedadChange(event: { component: SelectSearchable, value: any }, lote) {
        lote.variedadId = event.value.id;
    }

    chacraChange(event: { component: SelectSearchable, value: any }, lote) {
        lote.chacraId = event.value.id;
        this.CuadrosServiceProvider.getAllCuadrosByChacras(lote.chacraId)
          .subscribe(data => 
            {
              this.cuadros = data;
              this.cuadro.setValue('');
            });
    }

    cuadroChange(event: { component: SelectSearchable, value: any }, lote) {
        lote.cuadroId = event.value.id;
    }

    tratamientoChange(event: { component: SelectSearchable, value: any }, lote) {
        lote.tratamientoId = event.value.id;
    }

    alertEditLote(data) {
      let alert;

      if(!JSON.parse(data._body).error)
      {
        alert = this.AlertController.create({
          title: 'Edicion exitosa',
          message: 'Se ha editado correctamente el lote.',
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
          message: 'Se ha producido un error al intentar editar el lote.',
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

}

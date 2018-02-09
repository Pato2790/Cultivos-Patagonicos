import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { SelectSearchable } from '../../shared/select/select';

import { LotesServiceProvider } from '../../providers/lotes-service/lotes-service';
import { CalidadesServiceProvider } from '../../providers/calidades-service/calidades-service';
import { EspecieServiceProvider } from '../../providers/especie-service/especie-service';
import { VariedadesServiceProvider } from '../../providers/variedades-service/variedades-service';


@Component({
  selector: 'page-edit-lote',
  templateUrl: 'edit-lote.html',
})
export class EditLote {

	lote = [];
	calidades = [];
	variedades = [];
	especies = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, public LotesServiceProvider: LotesServiceProvider,
		public CalidadesServiceProvider: CalidadesServiceProvider, public EspecieServiceProvider: EspecieServiceProvider,
		public VariedadesServiceProvider : VariedadesServiceProvider, public AlertController: AlertController) {
		
		this.lote = this.navParams.get('lote');
		this.CalidadesServiceProvider.getAllCalidades().subscribe(data => this.calidades = data);
		this.EspecieServiceProvider.getAllEmpecies().subscribe(data => this.especies = data);
		let especieId = this.lote['especy'].id;
		this.VariedadesServiceProvider.getAllVariedades(especieId).subscribe(data => this.variedades = data);
	}

	editLote(){
  		this.LotesServiceProvider.editLote(this.lote).subscribe(data => this.alertEditLote(data.error));
  	}

	destroyView(){
		this.navCtrl.pop();
	}

	calidadChange(event: { component: SelectSearchable, value: any }, lote) {
        lote.calidadId = event.value.id;
    }

    especieChange(event: { component: SelectSearchable, value: any }, lote) {
        lote.especieId = event.value.id;
        this.VariedadesServiceProvider.getAllVariedades(lote.especieId).subscribe(data => this.variedades = data);
        this.lote['variedad'] = [];
    }

    variedadChange(event: { component: SelectSearchable, value: any }, lote) {
        lote.variedadId = event.value.id;
    }

    alertEditLote(error) {
      let alert;

      if(!error)
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

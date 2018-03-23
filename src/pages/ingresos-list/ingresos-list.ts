import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, IonicPage, LoadingController } from 'ionic-angular';
import { SelectSearchable } from '../../shared/select/select';

import { IngresosServiceProvider } from '../../providers/ingresos-service/ingresos-service';

import { EditIngreso } from '../../pages/edit-ingreso/edit-ingreso';
import { NewIngreso } from '../../pages/new-ingreso/new-ingreso';
import { ViajesList } from '../../pages/viajes-list/viajes-list';
import { LotesList } from '../../pages/lotes-list/lotes-list';
import { PrinterView } from '../../pages/printer-view/printer-view';

import { ChacrasServiceProvider } from '../../providers/chacras-service/chacras-service';
import { CamionesServiceProvider } from '../../providers/camiones-service/camiones-service';
import { InstitucionesServiceProvider } from '../../providers/instituciones-service/instituciones-service';
import { ProductoresServiceProvider } from '../../providers/productores-service/productores-service';

@IonicPage()
@Component({
  selector: 'page-ingresos-list',
  templateUrl: 'ingresos-list.html',
})
export class IngresosList {

  ingresosList = [];
  itemExpandHeight: number = 100;
  instituciones = [];
  camiones = [];
  chacras = [];
  productores = [];

  loadingSpinner;

  searchInput = "";
  ingresosSearchAux = [];
  resultLength;

  byDate = "";

  byChofer = "";
  choferNombre = "";

  byInstitucion = "";
  institucionNombre = "";

  byChacra = "";
  chacraNombre = "";

  byProductor = "";
  productorNombre = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public IngresosServiceProvider: IngresosServiceProvider, 
    public AlertController:AlertController, private ChacrasServiceProvider: ChacrasServiceProvider, private  CamionesServiceProvider: CamionesServiceProvider,
    private InstitucionesServiceProvider: InstitucionesServiceProvider, private ProductoresServiceProvider: ProductoresServiceProvider,
    public loadingCtrl: LoadingController) {
  	
    this.loadingSpinner = this.loadingCtrl.create({
      content: 'Obteniendo los ingresos. Por favor espere...'
    });

    this.loadingSpinner.present();

    this.getAllIngresos();

    this.ChacrasServiceProvider.getAllChacras()
      .subscribe(data => 
        {
          this.chacras = data;
        });

    this.InstitucionesServiceProvider.getAllInstituciones()
      .subscribe(data => 
        {
          this.instituciones = data;
        });

    this.CamionesServiceProvider.getAllCamiones()
      .subscribe(data => 
        {
          this.camiones = data;
        });

    this.ProductoresServiceProvider.getAllProductores()
      .subscribe(data => 
        {
          this.productores = data;
        });  
  }

  getAllIngresos()
  {
    this.IngresosServiceProvider.getAllIngresos()
      .subscribe(data => 
        {
          this.ingresosList = data;
          this.ingresosSearchAux = data;
          this.resultLength = data.length;
          this.loadingSpinner.dismiss();
        });
  }

  toggleIngreso(index) {
    this.ingresosList[index].open = !this.ingresosList[index].open;
  }

  goToEditIngreso(ingreso: any)
  {
    this.navCtrl.push(EditIngreso, {
      ingreso : ingreso
    })
  }

  goToAddIngreso()
  {
    this.navCtrl.push(NewIngreso);
  }

  alertDeleteIngreso(ingresoId) {
    let alert = this.AlertController.create({
      title: 'Confirmar eliminacion',
      message: 'Esta seguro que desea eliminar el ingreso de la lista?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {}
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.deleteIngreso(ingresoId);
          }
        }
      ]
    });
    alert.present();
  }

  deleteIngreso(ingresoId) {
    this.IngresosServiceProvider.deleteIngreso(ingresoId).subscribe(data => this.getAllIngresos());
  }

  goToViajes(ingreso)
  {
    this.navCtrl.push(ViajesList, {
      viajes : ingreso.ingresos_viajes
    })
  }

  goToLotes(ingreso)
  {
    this.navCtrl.push(LotesList, {
      lotes : ingreso.lotes
    })
  }

  goToPrint(ingreso)  
  {
    this.navCtrl.push(PrinterView, {
      ingreso : ingreso
    })
  }

  onSearchInput(event)
  {
    this.applyFilters();
  }

  dateChange(value)
  {
    this.byDate = value;
    this.applyFilters();
  }

  camionChange(event: { component: SelectSearchable, value: any }) {
    event.value === null ? this.choferNombre = "" : this.choferNombre = event.value.nombreChofer;    
    this.applyFilters();
  }

  institucionChange(event: { component: SelectSearchable, value: any }) {
    event.value === null ? this.institucionNombre = "" : this.institucionNombre = event.value.nombre;
    this.applyFilters();
  }

  chacraChange(event: { component: SelectSearchable, value: any }) {
    event.value === null ? this.chacraNombre = "" : this.chacraNombre = event.value.nombre;
    this.applyFilters();
  }

  productorChange(event: { component: SelectSearchable, value: any }) {
    event.value === null ? this.productorNombre = "" : this.productorNombre = event.value.nombre;
    this.applyFilters();
  }

  applyFilters()
  {
    this.ingresosList = this.ingresosSearchAux;

    if(this.searchInput !== "") {
      this.ingresosList = this.ingresosList
        .filter(ingreso => ingreso.nroRemito.indexOf(this.searchInput) >= 0 ? true : false );
    }

    if(this.choferNombre !== "") { 
      this.ingresosList = this.ingresosList
        .filter(ingreso => ingreso.ingresos_viajes[0].camion.nombreChofer.indexOf(this.choferNombre) >= 0 ? true : false );
    }

    if(this.institucionNombre !== "") { 
      this.ingresosList = this.ingresosList
        .filter(ingreso => ingreso.ingresos_viajes[0].institucion.nombre.indexOf(this.institucionNombre) >= 0 ? true : false );
    }

    if(this.chacraNombre !== null || this.chacraNombre !== "") { 
      this.ingresosList = this.ingresosList
        .filter(ingreso => ingreso.lotes[0].chacra.nombre.indexOf(this.chacraNombre) >= 0 ? true : false );
    }

    if(this.productorNombre !== "") { 
      this.ingresosList = this.ingresosList
        .filter(ingreso => ingreso.lotes[0].chacra.productor.nombre.indexOf(this.productorNombre) >= 0 ? true : false );
    }

    if(this.byDate !== "") { 
      this.ingresosList = this.ingresosList
        .filter(ingreso => ingreso.fechaIngreso.localeCompare(this.byDate) === 0 ? true : false );
    }
    
    this.resultLength = this.ingresosList.length;
  }
}

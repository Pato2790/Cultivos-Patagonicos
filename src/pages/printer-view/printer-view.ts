import { Printer, PrintOptions } from '@ionic-native/printer';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-printer-view',
  templateUrl: 'printer-view.html',
})
export class PrinterView {

	estado:string = "Apagada";
	impresora: string = "-";
	options: PrintOptions;
	ingreso = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, public printer: Printer) {
		this.ingreso = this.navParams.get('ingreso');
		console.log(this.ingreso);
	}

	pickPrinter()
	{
		this.printer.pick()
			.then(newPrinter => this.checkPrinter(newPrinter))	
			.catch(error => alert('Hubo un error al seleccional la impresora de la lista de impresoras'));
	}

	checkPrinter(newPrinter)
	{
		this.impresora =  newPrinter.split('|')[1];
		this.printer.isAvailable()
			.then(result => this.estado = "Lista")
			.catch(error => alert('La impresora no se encuentra lista. Por favor compruebe que se encuentre enchufada y en correcto funcionamiento'));
	}

	print()
	{
		if(this.estado === "Lista" && this.impresora !== "-")
		{
			this.options = {
		        name: 'MyDocument',
		        printerId: this.impresora,
		        duplex: false,
		        landscape: false,
		        grayscale: true,
		        bounds: [0,0,0,0]
		    };

		    //let context = "<ion-content padding><ion-grid><ion-row><ion-col col-12 padding><h1 text-center>Nuevo Ingresos</h1><p text-center>Ingrese los datos necesarios para generar un nuevo ingreso de fruta.</p></ion-col><ion-col col-12 class='back-black-color'><ion-item col-12 class='no-border'><ion-label stacked>Impresora</ion-label><ion-input type='text' [value]='impresora' (input)='impresora = $event.target.value' [disabled]='true'  name='selectedPrinter'></ion-input></ion-item><ion-item col-12 class='no-border'><button ion-button type='button' color='semiDark' (click)='pickPrinter()'>Seleccionar Impresora</button></ion-item></ion-col></ion-row></ion-grid></ion-content>"
		    

		    this.printer.print(this.parserHTML(this.buildHTML()),this.options)
		    .then(function(resutl) { alert('Se ha imprimido correctamente') }, 
		    	function(error) { alert('Se ha generado un error mientras se realizaba la impresion.') });
		}
		else{
			alert('Seleccione una impresora o corrobore que se encuentre en estado Lista');
		}
	}

	parserHTML(htmlText) : HTMLElement {
		let parser = new DOMParser();
		return parser.parseFromString(htmlText, "text/html").body;
	}

	buildHTML()
	{
		let contextPrint = "<body style='margin:0px; padding:0px'>";
		let lotesFaltantes = 0;

		console.log(this.ingreso);

		for(let lote of this.ingreso['lotes'])
		{
			contextPrint =  contextPrint + "<div style='width:695px; height: 1040px; float:left; margin: 0px;'>" +
								"<p style='width:100%; float: left; text-align: center; padding:0px; margin:2px; font-size:60px; font-weight: bold; margin-bottom: 20px;'>" + lote.chacra.productor.nombre + "</p>" +
								"<p style='width:40%; float: left; text-align: center; padding:0px; margin:10px; font-size:25px;'>Nro Remito </p>" +
								"<p style='width:50%; float: left; text-align: center; padding:0px; margin:10px; font-size:25px;'>UMI-UP </p>" + 
								"<p style='width:40%; float: left; text-align: center; padding:0px; margin:1px; font-size:40px; margin-bottom: 20px;'>" + this.ingreso['nroRemito'] + "</p>" +
								"<p style='width:50%; float: left; text-align: center; padding:0px; margin:1px; font-size:40px; font-weight: bold; margin-bottom: 20px;'>" + lote.cuadro.up + "</p>" +
								"<h3 style='width:100%; float: left; text-align: left; padding:2px; margin:0px; font-size:30px; background-color:#e4e4e4;'>" + lote.especy.tipo + "</h3>" +
								"<p style='width:100%; float: left; text-align: center; padding:2px; margin:0px; background-color:#e4e4e4; font-size:60px; font-weight: bold;'>" + lote.variedad.tipo + "</p>" +
								"<p style='width:100%; float: left; padding:0px; margin:10px; font-size:25px; font-size:25px;'>Lote Nro: </p>" +
								"<p style='width:100%; float: left; text-align: center; margin:0px; font-size:80px;'>" + lote.nroLote + "</p>" +
								"<p style='width:40%; float: left; text-align: center; padding:0px; margin:10px; font-size:25px;'>Fecha Ingreso</p>" +
								"<p style='width:50%; float: left; text-align: center; padding:0px; margin:10px; font-size:25px;'>Peso Neto</p>" + 
								"<p style='width:40%; float: left; text-align: center; padding:0px; margin:1px; font-size:35px; margin-bottom: 20px;'>" + this.ingreso['fechaIngreso'] + "</p>" +
								"<p style='width:50%; float: left; text-align: center; padding:0px; margin:1px; font-size:35px; font-weight: bold; margin-bottom: 20px;'>" + lote.pesoNeto + "</p>" +
								"<p style='width:30%; float: left; text-align: left; padding:0px; margin:10px; font-size:25px;'>Cant. Bins: </p>" + 
								"<p style='width:90%; float: left; text-align: center; padding:0px; margin:1px; font-size:80px;'>" + lote.cantBins + "</p>" +
								"<p style='width:30%; float: left; text-align: left; padding:0px; margin:10px; font-size:25px;'>Tratamiento: </p>" + 
								"<p style='width:90%; float: left; text-align: center; padding:0px; margin:1px; font-size:40px; font-weight: bold;'>" + lote.tratamiento.tipo + "</p>" +
								"</div>";

			let bodyLote = "<div style='width:335px; height: 342px; float:left; margin: 0px; border-style: dashed;'>" +
							"<h3 style='width:100%; float: left; text-align: left; padding:0px; margin:2px;'>" + lote.especy.tipo + "</h3>" +
							"<p style='width:100%; float: left; text-align: center; padding:0px; margin:2px; font-size:45px; font-weight: bold;'>" + lote.variedad.tipo + "</p>" +
							"<p style='width:100%; float: left; padding:0px; margin:2px'>Fecha: " + this.ingreso['fechaIngreso'] + "</p>" +
							"<p style='width:30%; float: left; text-align: left; padding:0px; margin:10px;'>Cant. Bins: </p>" + 
							"<p style='width:60%; float: left; text-align: center; padding:0px; margin:1px; font-size:40px;'>" + lote.cantBins + "</p>" +
							"<p style='width:100%; float: left; padding:0px; margin:2px'>Productor: " + lote.chacra.productor.nombre + "</p>" +
							"<p style='width:100%; float: left; padding:0px; margin:2px'>Tratamiento: " + lote.tratamiento.tipo + "</p>" +
							"<p style='width:100%; float: left; padding:0px; margin:2px;'>UMI-UP:</p>" + 
							"<p style='width:97%; float: left; text-align: center; background-color:#e4e4e4; padding:0px; margin:5px; font-weight: bold; font-size: 25px;'>" + lote.cuadro.up + "</p>" +
							"<p style='width:100%; float: left; padding:0px; margin:0px;'>Lote Nro: </p>" + 
							"<p style='width:100%; float: left; text-align: center; margin:0px; font-size:40px;'>" + lote.nroLote + "</p>" +
							"</div>";

			let emptyLote = "<div style='width:335px; height: 342px; float:left; margin: 0px;'></div>";

			for(let i = 0; i < lote.cantBins; i++)
			{
				contextPrint = contextPrint + bodyLote;
			}

			lotesFaltantes = 0;
			if(lote.cantBins % 6 !== 0)
			{
				lotesFaltantes = 6 - (lote.cantBins % 6);
			}

			for(let j = 0; j < lotesFaltantes; j++)
			{
				contextPrint = contextPrint + emptyLote;
			}
		}

		contextPrint = contextPrint + "</body>";

		return contextPrint;
	}
}


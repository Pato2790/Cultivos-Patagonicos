import { Printer, PrintOptions } from '@ionic-native/printer';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-printer-view',
  templateUrl: 'printer-view.html',
})
export class PrinterView {

	available = 'Apagada';
	selectedPrinter = '';
	options: PrintOptions;

	constructor(public navCtrl: NavController, public navParams: NavParams, public printer: Printer) {
	}

	pickPrinter()
	{
		this.printer.pick()
			.then(data => 
				{
					this.selectedPrinter = data;
					this.checkPrinter();
				})
			.catch(error => alert('Hubo un error al intentar seleccionar la impresora'));
	}

	checkPrinter()
	{
		this.printer.isAvailable()
			.then(data => this.available = 'Lista')
			.catch(error => alert('La impresora no se encuentra lista. Por favor compruebe que se encuentre enchufada y en correcto funcionamiento'));
	}

	print()
	{
		if(this.selectedPrinter !== '' && this.available === 'Lista')
		{
			this.options = {
		        name: 'MyDocument',
		        printerId: this.selectedPrinter,
		        duplex: false,
		        landscape: true,
		        grayscale: true
		    };

		    let context = '<html><body><h1>Probando</h1></body></html>';

		    this.printer.print(context,this.options)
		    .then(data => alert('Se ha imprimido correctamente'))
		    .catch(error => alert('Se ha generado un error mientras se realizaba la impresion.'));
		}
		else{
			alert('Seleccione una impresora o corrobore que se encuentre en estado Lista');
		}
	}
}


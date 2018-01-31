import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProductoresServiceProvider } from '../../providers/productores-service/productores-service';

@Component({
  selector: 'page-edit-productor',
  templateUrl: 'edit-productor.html',
})
export class EditProductor {

	productor = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, private ProductoresServiceProvider : ProductoresServiceProvider) {
		this.productor = this.navParams.get('productor');
	}

	editProductor()	{
		this.ProductoresServiceProvider.editProductor(this.productor).subscribe(data => console.log(data));
		this.destroyView();
	}

	destroyView(){
		this.navCtrl.pop();
	}
}

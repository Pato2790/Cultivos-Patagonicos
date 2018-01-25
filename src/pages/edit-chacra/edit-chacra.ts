import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ChacrasServiceProvider } from '../../providers/chacras-service/chacras-service';

@Component({
  selector: 'page-edit-chacra',
  templateUrl: 'edit-chacra.html',
})
export class EditChacra {

  chacra = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private ChacrasServiceProvider : ChacrasServiceProvider) {
    this.chacra = this.navParams.get('chacra');
  }

  editChacra(chacra){
  	this.ChacrasServiceProvider.editChacra(this.chacra).subscribe(data => console.log(data));
  	this.destroyView();
  }

  destroyView(){
  	this.navCtrl.pop();
  }

}

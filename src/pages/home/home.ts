import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Login } from '../../pages/login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  	constructor(public navCtrl: NavController, public AuthServiceProvider: AuthServiceProvider) {
  		
  	}

  	signOut() {
	    this.AuthServiceProvider.signOut();
	    this.navCtrl.setRoot(Login);
	  }
}

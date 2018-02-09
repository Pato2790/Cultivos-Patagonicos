import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Login } from '../../pages/login/login';

import { ProductoresList } from '../../pages/productoresList/productoresList';
import { CamionesList } from '../../pages/camiones-list/camiones-list';
import { EmpresasList } from '../../pages/empresas-list/empresas-list';
import { InstitucionesList } from '../../pages/instituciones-list/instituciones-list';
import { IngresosList } from '../../pages/ingresos-list/ingresos-list';
import { NewIngreso } from '../../pages/new-ingreso/new-ingreso';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	pages = [
      { title: 'Ingreso', icon: 'crop', component: IngresosList },
      { title: 'Nuevo Ingreso', icon: 'add', component: NewIngreso },
      { title: 'Productores', icon: 'contact', component: ProductoresList },
      { title: 'Camiones', icon: 'bus', component: CamionesList },
      { title: 'Empresas', icon: 'briefcase', component: EmpresasList },
      { title: 'Instituciones', icon: 'home', component: InstitucionesList }
    ];

  	constructor(public navCtrl: NavController, public AuthServiceProvider: AuthServiceProvider) {
  		
  	}

  	signOut() {
	    this.AuthServiceProvider.signOut();
	    this.navCtrl.setRoot(Login);
	}

	goToPage(page)
	{
		this.navCtrl.push(page.component);
	}
}

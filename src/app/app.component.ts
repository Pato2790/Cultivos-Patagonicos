import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SideMenuContentComponent } from '../shared/side-menu-content/side-menu-content.component';
import { MenuOptionModel } from '../shared/side-menu-content/models/menu-option-model';
import { SideMenuSettings } from '../shared/side-menu-content/models/side-menu-settings';

import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { ProductoresList } from '../pages/productoresList/productoresList';
import { NewProductor } from '../pages/new-productor/new-productor';
import { ChacrasList } from '../pages/chacras-list/chacras-list';
import { NewChacra } from '../pages/new-chacra/new-chacra';
import { CamionesList } from '../pages/camiones-list/camiones-list';
import { NewCamion } from '../pages/new-camion/new-camion';
import { EmpresasList } from '../pages/empresas-list/empresas-list';
import { NewEmpresa } from '../pages/new-empresa/new-empresa';
import { InstitucionesList } from '../pages/instituciones-list/instituciones-list';
import { NewInstitucion } from '../pages/new-institucion/new-institucion';
import { IngresosList } from '../pages/ingresos-list/ingresos-list';
import { NewIngreso } from '../pages/new-ingreso/new-ingreso';

import { AuthServiceProvider } from '../providers/auth-service/auth-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  @ViewChild(SideMenuContentComponent) sideMenu: SideMenuContentComponent;

  rootPage: any;
  currentUser;

  pages: Array<{title: string, component: any}>;
  public options: Array<MenuOptionModel>;

  public sideMenuSettings: SideMenuSettings = {
        accordionMode: false,
        showSelectedOption: false
    };

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public authService: AuthServiceProvider, public menuCtrl: MenuController) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if (this.authService.authenticated) 
       {
         this.rootPage = HomePage;
       } 
       else {
         this.rootPage = Login;
       }

      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // Create the options
       this.options = this.getSideMenuOptions();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  getCurrentUser()
  {
    this.currentUser = this.authService.getCurrentUser();
  }

  // Initialize the side menu options
  private getSideMenuOptions(): Array<MenuOptionModel> {
      let menuOptions = new Array<MenuOptionModel>();

      menuOptions.push({
          displayName: `DashBoard`,
          component: HomePage
      });

      menuOptions.push({
          displayName: `Ingresos`,
          subItems: [
              {
                  displayName: `Lista Ingresos`,
                  iconName: 'crop',
                  component: IngresosList,
              },
              {
                  displayName: `Nuevo Ingreso`,
                  iconName: 'add',
                  component: NewIngreso,
              }
          ]
      });

      menuOptions.push({
          displayName: `Productores`,
          subItems: [
              {
                  displayName: `Lista Productores`,
                  iconName: 'contacts',
                  component: ProductoresList,
              },
              {
                  displayName: `Nuevo Productor`,
                  iconName: 'add',
                  component: NewProductor,
              }
          ]
      });

      menuOptions.push({
          displayName: `Empresas`,
          subItems: [
              {
                  displayName: `Lista Empresas`,
                  iconName: 'briefcase',
                  component: EmpresasList,
              },
              {
                  displayName: `Nueva Empresa`,
                  iconName: 'add',
                  component: NewEmpresa,
              }
          ]
      });

      menuOptions.push({
          displayName: `Chacras`,
          subItems: [
              {
                  displayName: `Lista Chacras`,
                  iconName: 'leaf',
                  component: ChacrasList,
              },
              {
                  displayName: `Nueva Chacra`,
                  iconName: 'add',
                  component: NewChacra,
              }
          ]
      });

      menuOptions.push({
          displayName: `Camiones`,
          subItems: [
              {
                  displayName: `Lista Camiones`,
                  iconName: 'bus',
                  component: CamionesList,
              },
              {
                  displayName: `Nuevo Camion`,
                  iconName: 'add',
                  component: NewCamion,
              }
          ]
      });

      menuOptions.push({
          displayName: `Instituciones`,
          subItems: [
              {
                  displayName: `Lista Instituciones`,
                  iconName: 'home',
                  component: InstitucionesList,
              },
              {
                  displayName: `Nueva Institucion`,
                  iconName: 'add',
                  component: NewInstitucion,
              }
          ]
      });

      return menuOptions;

  }

  // Redirect the user to the selected page
  public selectOption(option: MenuOptionModel): void {
      this.menuCtrl.close().then(() => {
          // Collapse all the options
          this.sideMenu.collapseAllOptions();

          // Redirect to the selected page
          this.nav.push(option.component);
      });
  }

  public collapseMenuOptions(): void {
      // Collapse all the options
      this.sideMenu.collapseAllOptions();
  }
}

webpackJsonp([0],{

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_productoresList_productoresList__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_camiones_list_camiones_list__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_empresas_list_empresas_list__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_instituciones_list_instituciones_list__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_ingresos_list_ingresos_list__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_new_ingreso_new_ingreso__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = (function () {
    function HomePage(navCtrl, AuthServiceProvider) {
        this.navCtrl = navCtrl;
        this.AuthServiceProvider = AuthServiceProvider;
        this.pages = [
            { title: 'Ingreso', icon: 'crop', component: __WEBPACK_IMPORTED_MODULE_8__pages_ingresos_list_ingresos_list__["a" /* IngresosList */] },
            { title: 'Nuevo Ingreso', icon: 'add', component: __WEBPACK_IMPORTED_MODULE_9__pages_new_ingreso_new_ingreso__["a" /* NewIngreso */] },
            { title: 'Productores', icon: 'contact', component: __WEBPACK_IMPORTED_MODULE_4__pages_productoresList_productoresList__["a" /* ProductoresList */] },
            { title: 'Camiones', icon: 'bus', component: __WEBPACK_IMPORTED_MODULE_5__pages_camiones_list_camiones_list__["a" /* CamionesList */] },
            { title: 'Empresas', icon: 'briefcase', component: __WEBPACK_IMPORTED_MODULE_6__pages_empresas_list_empresas_list__["a" /* EmpresasList */] },
            { title: 'Instituciones', icon: 'home', component: __WEBPACK_IMPORTED_MODULE_7__pages_instituciones_list_instituciones_list__["a" /* InstitucionesList */] }
        ];
    }
    HomePage.prototype.signOut = function () {
        this.AuthServiceProvider.signOut();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* Login */]);
    };
    HomePage.prototype.goToPage = function (page) {
        this.navCtrl.push(page.component);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="cultivos" hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Inicio</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="signOut()">\n        Cerrar Sesion\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="backImg">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-10 offset-2>\n        <ion-row>\n          <ion-col col-3 *ngFor="let page of pages" padding margin> \n            <button (click)="goToPage(page)" ion-item detail-none color="semiDark" class="no-border-cards">\n              <ion-icon item-left style="zoom:1.35;" name="{{page.icon}}"></ion-icon>\n              {{page.title}}\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user_model__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Login = (function () {
    function Login(navCtrl, loadingCtrl, alertCtrl, authService) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.userModel = new __WEBPACK_IMPORTED_MODULE_2__models_user_model__["a" /* UserModel */]();
    }
    Login.prototype.signIn = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Iniciando sesión. Por favor, espere...'
        });
        loading.present();
        this.authService.signInWithEmailAndPassword(this.userModel)
            .then(function (result) {
            loading.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
        })
            .catch(function (error) {
            loading.dismiss();
            _this.alert('Error', error);
        });
    };
    Login.prototype.alert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    Login = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\login\login.html"*/'<ion-header>\n    <ion-navbar color="cultivos" hideBackButton="true">\n        <ion-title>Iniciar Sesión</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="back-color">\n    <form  #signInForm="ngForm" (submit)="signIn()">\n        <ion-grid>\n            <ion-row class="back-black-color" col-4 offset-4 padding padding-top>\n                <ion-col col-8 offset-2>\n                    <img src="assets/imgs/cultivosTexto.png">\n                </ion-col>\n                <ion-col col-12>\n                    <ion-row>\n                        <ion-col col-12 padding>\n                            <p text-center>Inicia sesion en Cultivos Patagonicos con tu cuenta de Google</p>\n                        </ion-col>\n                        <ion-col col-10 offset-1>\n                            <ion-item class="no-border">\n                                <ion-label stacked>Correo electrónico</ion-label>\n                                <ion-input [(ngModel)]="userModel.email" type="email" autocorrect="off" autocapitalize="none" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"\n                                    required></ion-input>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col col-10 offset-1> \n                            <ion-item class="no-border">\n                                <ion-label stacked>Contraseña</ion-label>\n                                <ion-input [(ngModel)]="userModel.password" type="password" name="password" required minlength="6"></ion-input>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                </ion-col>\n                <ion-col col-8 offset-2>\n                    <button ion-button color="semiDark" type="submit" [disabled]="!signInForm.form.valid" block>Ingresar</button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </form>\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], Login);
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LotesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LotesServiceProvider = (function () {
    function LotesServiceProvider(http) {
        this.http = http;
        this.urlAPI = __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__["a" /* urlAPI */] + '/lote';
    }
    LotesServiceProvider.prototype.getAllLotes = function () {
        return this.http.get(this.urlAPI)
            .map(this.extractData)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    LotesServiceProvider.prototype.addNewLote = function (lote) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.post(this.urlAPI, lote, options)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    LotesServiceProvider.prototype.editLote = function (lote) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.put(this.urlAPI + '/' + lote.id, lote, options)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    LotesServiceProvider.prototype.deleteLote = function (loteId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.delete(this.urlAPI + '/' + loteId, options)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    LotesServiceProvider.prototype.catchError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || "Server Error");
    };
    LotesServiceProvider.prototype.extractData = function (res) {
        return res.json().data;
    };
    LotesServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], LotesServiceProvider);
    return LotesServiceProvider;
}());

//# sourceMappingURL=lotes-service.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalidadesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CalidadesServiceProvider = (function () {
    function CalidadesServiceProvider(http) {
        this.http = http;
        this.urlAPI = __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__["a" /* urlAPI */] + '/calidad';
    }
    CalidadesServiceProvider.prototype.getAllCalidades = function () {
        return this.http.get(this.urlAPI)
            .map(this.extractData)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    CalidadesServiceProvider.prototype.catchError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || "Server Error");
    };
    CalidadesServiceProvider.prototype.extractData = function (res) {
        return res.json().data;
    };
    CalidadesServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], CalidadesServiceProvider);
    return CalidadesServiceProvider;
}());

//# sourceMappingURL=calidades-service.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EspecieServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EspecieServiceProvider = (function () {
    function EspecieServiceProvider(http) {
        this.http = http;
        this.urlAPI = __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__["a" /* urlAPI */] + '/especie';
    }
    EspecieServiceProvider.prototype.getAllEmpecies = function () {
        return this.http.get(this.urlAPI)
            .map(this.extractData)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    EspecieServiceProvider.prototype.catchError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || "Server Error");
    };
    EspecieServiceProvider.prototype.extractData = function (res) {
        return res.json().data;
    };
    EspecieServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], EspecieServiceProvider);
    return EspecieServiceProvider;
}());

//# sourceMappingURL=especie-service.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewIngreso; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_ingresos_list_ingresos_list__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_new_viaje_new_viaje__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_calidad_model__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_especie_model__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_variedad_model__ = __webpack_require__(753);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_chacra_model__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_tratamiento_model__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_cuadro_model__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_ingreso_model__ = __webpack_require__(757);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_lote_model__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_calidades_service_calidades_service__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_especie_service_especie_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_cuadros_service_cuadros_service__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_tratamientos_service_tratamientos_service__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_ingresos_service_ingresos_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_auth_service_auth_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_chacras_service_chacras_service__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var NewIngreso = (function () {
    function NewIngreso(navCtrl, navParams, CalidadesServiceProvider, EspecieServiceProvider, IngresosServiceProvider, AuthServiceProvider, ChacrasServiceProvider, CuadrosServiceProvider, TratamientosServiceProvider, AlertController) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.CalidadesServiceProvider = CalidadesServiceProvider;
        this.EspecieServiceProvider = EspecieServiceProvider;
        this.IngresosServiceProvider = IngresosServiceProvider;
        this.AuthServiceProvider = AuthServiceProvider;
        this.ChacrasServiceProvider = ChacrasServiceProvider;
        this.CuadrosServiceProvider = CuadrosServiceProvider;
        this.TratamientosServiceProvider = TratamientosServiceProvider;
        this.AlertController = AlertController;
        this.indexLote = 0;
        this.indexIngreso = 0;
        this.ingresos = new Array();
        this.calidades = [];
        this.especies = [];
        this.variedades = [];
        this.chacras = [];
        this.tratamientos = [];
        this.cuadros = [];
        this.agregarIngresoList();
        this.CalidadesServiceProvider.getAllCalidades().subscribe(function (data) {
            _this.calidades = Object.assign([], data);
            _this.ingresos[0].lotes[0].calidades = Object.assign([], data);
        });
        this.EspecieServiceProvider.getAllEmpecies().subscribe(function (data) {
            _this.especies = Object.assign([], data);
            _this.ingresos[0].lotes[0].especies = Object.assign([], data);
        });
        this.TratamientosServiceProvider.getAllTratamientos().subscribe(function (data) {
            _this.tratamientos = Object.assign([], data);
            _this.ingresos[0].lotes[0].tratamientos = Object.assign([], data);
        });
        this.ChacrasServiceProvider.getAllChacras().subscribe(function (data) {
            _this.chacras = Object.assign([], data);
            _this.ingresos[0].chacras = Object.assign([], data);
        });
    }
    NewIngreso.prototype.agregarIngresoList = function () {
        this.ingresos.push(new __WEBPACK_IMPORTED_MODULE_10__models_ingreso_model__["a" /* IngresoModel */](this.indexIngreso, 0, this.formatDate(), 0, 0, this.AuthServiceProvider.getCurrentUser().email, new Array(new __WEBPACK_IMPORTED_MODULE_11__models_lote_model__["a" /* LoteModel */](this.indexLote, 0, 0, 0, 0, 0, 0, 0, 0, Object.assign([], this.calidades), new __WEBPACK_IMPORTED_MODULE_4__models_calidad_model__["a" /* CalidadModel */](), Object.assign([], this.especies), new __WEBPACK_IMPORTED_MODULE_5__models_especie_model__["a" /* EspecieModel */](), new Array(), new __WEBPACK_IMPORTED_MODULE_6__models_variedad_model__["a" /* VariedadModel */](), Object.assign([], this.tratamientos), new __WEBPACK_IMPORTED_MODULE_8__models_tratamiento_model__["a" /* TratamientoModel */](), new Array(), new __WEBPACK_IMPORTED_MODULE_9__models_cuadro_model__["a" /* CuadroModel */]())), Object.assign([], this.chacras), new __WEBPACK_IMPORTED_MODULE_7__models_chacra_model__["a" /* ChacraModel */]()));
        this.indexLote++;
        this.indexIngreso++;
    };
    NewIngreso.prototype.agregarLoteList = function (ingreso) {
        var index = this.ingresos.indexOf(ingreso, 0);
        this.ingresos[index].lotes.push(new __WEBPACK_IMPORTED_MODULE_11__models_lote_model__["a" /* LoteModel */](this.indexLote, 0, 0, 0, 0, 0, 0, 0, 0, Object.assign([], this.calidades), new __WEBPACK_IMPORTED_MODULE_4__models_calidad_model__["a" /* CalidadModel */](), Object.assign([], this.especies), new __WEBPACK_IMPORTED_MODULE_5__models_especie_model__["a" /* EspecieModel */](), new Array(), new __WEBPACK_IMPORTED_MODULE_6__models_variedad_model__["a" /* VariedadModel */](), Object.assign([], this.tratamientos), new __WEBPACK_IMPORTED_MODULE_8__models_tratamiento_model__["a" /* TratamientoModel */](), new Array(), new __WEBPACK_IMPORTED_MODULE_9__models_cuadro_model__["a" /* CuadroModel */]()));
        this.indexLote++;
    };
    NewIngreso.prototype.deleteIngresoList = function (ingreso) {
        var index = this.ingresos.indexOf(ingreso, 0);
        this.ingresos.splice(index, 1);
    };
    NewIngreso.prototype.deleteLoteList = function (ingreso, lote) {
        var index = ingreso.lotes.indexOf(lote, 0);
        ingreso.lotes.splice(index, 1);
    };
    NewIngreso.prototype.calidadChange = function (event, lote) {
        lote.calidadId = event.value.id;
    };
    NewIngreso.prototype.especieChange = function (event, lote) {
        lote.especieId = event.value.id;
        var currentVariedades = this.especies[this.especies.indexOf(event.value, 0)].variedads;
        lote.variedades = Object.assign([], currentVariedades);
    };
    NewIngreso.prototype.variedadChange = function (event, lote) {
        lote.variedadId = event.value.id;
    };
    NewIngreso.prototype.tratamientoChange = function (event, lote) {
        lote.tratamientoId = event.value.id;
    };
    NewIngreso.prototype.chacraChange = function (event, ingreso) {
        ingreso.chacraId = event.value.id;
        var currentCuadros = this.chacras[this.chacras.indexOf(event.value, 0)].cuadros;
        for (var _i = 0, _a = ingreso.lotes; _i < _a.length; _i++) {
            var lote = _a[_i];
            lote.cuadros = Object.assign([], currentCuadros);
        }
    };
    NewIngreso.prototype.cuadroChange = function (event, lote) {
        lote.cuadroId = event.value.id;
    };
    NewIngreso.prototype.addNewIngreso = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_new_viaje_new_viaje__["a" /* NewViaje */], {
            ingresos: this.ingresos
        });
    };
    NewIngreso.prototype.alertNewIngreso = function () {
        var _this = this;
        var alert = this.AlertController.create({
            title: 'Revise los datos ingresados',
            message: 'Se procedera a realizar la carga del viaje. Desea continuar?',
            buttons: [
                {
                    text: 'Aceptar',
                    handler: function () {
                        _this.addNewIngreso();
                    }
                },
                {
                    text: 'Cancelar',
                    handler: function () { }
                }
            ]
        });
        alert.present();
    };
    NewIngreso.prototype.destroyView = function () {
        this.navCtrl.pop();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_ingresos_list_ingresos_list__["a" /* IngresosList */]);
    };
    NewIngreso.prototype.formatDate = function () {
        var fecha = new Date();
        return fecha.getFullYear() + "-" + fecha.getMonth() + 1 + "-" + fecha.getDate();
    };
    NewIngreso.prototype.trackByFn = function (index, value) {
        return value.id;
    };
    NewIngreso = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-ingreso',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-ingreso\new-ingreso.html"*/'<ion-header>\n  <ion-navbar color="cultivos" hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Nuevo Ingreso</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="back-color">\n    <ion-grid>\n        <ion-row>\n            <ion-col col-sm-12 col-md-12 padding>\n              <h1 text-center>Nuevo Ingresos</h1>\n              <p text-center>Ingrese los datos necesarios para generar un nuevo ingreso de fruta.</p>\n            </ion-col>\n            <ion-col col-sm-12 col-md-12 padding>\n            	<form (ngSubmit)="alertNewIngreso()">\n            	    <ion-grid *ngFor="let ingreso of ingresos; trackBy:trackByFn" class="back-black-color" padding margin>\n                        <ion-row>\n                            <ion-col col-sm-12 col-md-12 padding-bottom>\n                                <h3 padding-top no-margin>Datos generales del Ingreso</h3>\n                            </ion-col>\n                            <ion-col col-sm-12 col-md-12 padding-bottom>\n                                <ion-row>\n                                    <ion-item col-sm-12 col-md-6 class="no-border">\n                                      <ion-label stacked>Nro Remito</ion-label>\n                                      <ion-input type="text" [(ngModel)]="ingreso.nroRemito" name="nroRemito"></ion-input>\n                                    </ion-item>\n                                    <ion-item col-sm-12 col-md-6 class="no-border">\n                                      <ion-label stacked>Fecha de Ingreso</ion-label>\n                                      <ion-input type="date" [value]="ingreso.fechaIngreso" (input)="ingreso.fechaIngreso = $event.target.value" name="fechaIngreso"></ion-input>\n                                    </ion-item>\n                                </ion-row>\n                                <ion-item class="no-border">\n                                    <select-searchable\n                                        [(ngModel)]="ingreso.chacra"\n                                        name="chacra"\n                                        title="Chacras"\n                                        itemValueField="id"\n                                        itemTextField="nombre"\n                                        [items]="ingreso.chacras"\n                                        [canSearch]="true"\n                                        (onChange)="chacraChange($event, ingreso)">\n                                    </select-searchable>\n                                </ion-item>\n                            </ion-col>\n                            <ion-col col-sm-12 col-md-12 padding class="back-color">\n                                <ion-row>\n                                    <ion-col col-sm-12 col-md-12 no-padding>\n                                        <h3 padding>Datos generales del nuevo Lote</h3>\n                                    </ion-col>\n                                    <ion-row *ngFor="let lote of ingreso.lotes; trackBy:trackByFn" margin>\n                                        <ion-col col-sm-12 col-md-12 no-padding>\n                                            <ion-row>\n                                                <ion-item class="no-border" col-sm-12 col-md-4>\n                                                  <ion-label stacked>Numero Lote</ion-label>\n                                                  <ion-input type="number" [value]="lote.nroLote" (input)="lote.nroLote = $event.target.value" name="nroLote"></ion-input>\n                                                </ion-item>\n                                                <ion-item class="no-border" col-sm-12 col-md-4>\n                                                  <ion-label stacked>Cantidad Bins</ion-label>\n                                                  <ion-input type="number" [value]="lote.cantBins" (input)="lote.cantBins = $event.target.value" name="cantBins"></ion-input>\n                                                </ion-item>\n                                                <ion-item class="no-border" col-sm-12 col-md-4>\n                                                  <ion-label stacked>Peso</ion-label>\n                                                  <ion-input type="number" [value]="lote.peso" (input)="lote.peso = $event.target.value" name="peso"></ion-input>\n                                                </ion-item>\n                                            </ion-row>\n                                        </ion-col>\n                                        <ion-col col-sm-12 col-md-12 no-padding>\n                                            <ion-item class="no-border">\n                                                <select-searchable\n                                                    [(ngModel)]="lote.calidad"\n                                                    name="calidad"\n                                                    title="Calidades"\n                                                    itemValueField="id"\n                                                    itemTextField="tipo"\n                                                    [items]="lote.calidades"\n                                                    [canSearch]="true"\n                                                    (onChange)="calidadChange($event,lote)">\n                                                </select-searchable>\n                                            </ion-item>\n                                        </ion-col>\n                                        <ion-col col-sm-12 col-md-12 no-padding>\n                                            <ion-item class="no-border">\n                                                <select-searchable\n                                                    [(ngModel)]="lote.especie"\n                                                    name="especie"\n                                                    title="Especies"\n                                                    itemValueField="id"\n                                                    itemTextField="tipo"\n                                                    [items]="lote.especies"\n                                                    [canSearch]="true"\n                                                    (onChange)="especieChange($event,lote)">\n                                                </select-searchable>\n                                            </ion-item>\n                                        </ion-col>\n                                        <ion-col col-sm-12 col-md-12 no-padding>\n                                            <ion-item class="no-border">\n                                                <select-searchable\n                                                    [(ngModel)]="lote.variedad"\n                                                    name="variedad"\n                                                    title="Variedades"\n                                                    itemValueField="id"\n                                                    itemTextField="tipo"\n                                                    [items]="lote.variedades"\n                                                    [canSearch]="true"\n                                                    (onChange)="variedadChange($event,lote)">\n                                                </select-searchable>\n                                            </ion-item>\n                                        </ion-col>\n                                        <ion-col col-sm-12 col-md-12 no-padding>\n                                            <ion-item class="no-border">\n                                                <select-searchable\n                                                    [(ngModel)]="lote.tratamiento"\n                                                    name="tratamiento"\n                                                    title="Tratamientos"\n                                                    itemValueField="id"\n                                                    itemTextField="tipo"\n                                                    [items]="lote.tratamientos"\n                                                    [canSearch]="true"\n                                                    (onChange)="tratamientoChange($event,lote)">\n                                                </select-searchable>\n                                            </ion-item>\n                                        </ion-col>\n                                        <ion-col col-sm-12 col-md-12 no-padding>\n                                            <ion-item class="no-border">\n                                                <select-searchable\n                                                    [(ngModel)]="lote.cuadro"\n                                                    name="cuadro"\n                                                    title="Cuadros"\n                                                    itemValueField="id"\n                                                    itemTextField="up"\n                                                    [items]="lote.cuadros"\n                                                    [canSearch]="true"\n                                                    (onChange)="cuadroChange($event,lote)">\n                                                </select-searchable>\n                                            </ion-item>\n                                        </ion-col>\n                                        <ion-col col-sm-12 col-md-12 padding>\n                                            <ion-buttons right>\n                                                <button ion-button type="button" color="semiDark" (click)="deleteLoteList(ingreso,lote)">Eliminar Lote</button>\n                                            </ion-buttons>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-row>\n                            </ion-col>\n                            <ion-col col-sm-12 col-md-12 padding>\n                                <ion-buttons right>\n                                    <button ion-button type="button" color="semiDark" (click)="agregarLoteList(ingreso)">Agregar Lote</button>\n                                    <button *ngIf="ingresos.length > 1" ion-button type="button" color="semiDark" (click)="deleteIngresoList(ingreso)">Eliminar Ingreso</button>\n                                </ion-buttons>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                    <ion-col col-sm-12 col-md-12 padding>\n                            <ion-buttons left>\n                                <button ion-button color="semiDark" type="submit">Siguiente</button>\n                            </ion-buttons>\n                    </ion-col>\n            	</form>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <ion-fab bottom right padding margin>\n        <button ion-fab color="semiDark" (click)="agregarIngresoList()"><ion-icon name="crop"></ion-icon></button>\n    </ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-ingreso\new-ingreso.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_12__providers_calidades_service_calidades_service__["a" /* CalidadesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_especie_service_especie_service__["a" /* EspecieServiceProvider */], __WEBPACK_IMPORTED_MODULE_16__providers_ingresos_service_ingresos_service__["a" /* IngresosServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_17__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_18__providers_chacras_service_chacras_service__["a" /* ChacrasServiceProvider */], __WEBPACK_IMPORTED_MODULE_14__providers_cuadros_service_cuadros_service__["a" /* CuadrosServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_15__providers_tratamientos_service_tratamientos_service__["a" /* TratamientosServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], NewIngreso);
    return NewIngreso;
}());

//# sourceMappingURL=new-ingreso.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CuadrosServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CuadrosServiceProvider = (function () {
    function CuadrosServiceProvider(http) {
        this.http = http;
        this.urlAPI = __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__["a" /* urlAPI */] + '/cuadro';
    }
    CuadrosServiceProvider.prototype.getAllCuadros = function () {
        return this.http.get(this.urlAPI)
            .map(this.extractData)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    CuadrosServiceProvider.prototype.addNewCuadro = function (cuadro) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.post(this.urlAPI, cuadro, options)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    CuadrosServiceProvider.prototype.editCuadro = function (cuadro) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.put(this.urlAPI + '/' + cuadro.id, cuadro, options)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    CuadrosServiceProvider.prototype.deleteCuadro = function (cuadroId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.delete(this.urlAPI + '/' + cuadroId, options)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    CuadrosServiceProvider.prototype.catchError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || "Server Error");
    };
    CuadrosServiceProvider.prototype.extractData = function (res) {
        return res.json().data;
    };
    CuadrosServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], CuadrosServiceProvider);
    return CuadrosServiceProvider;
}());

//# sourceMappingURL=cuadros-service.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChacrasList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chacras_service_chacras_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_cuadros_service_cuadros_service__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_edit_chacra_edit_chacra__ = __webpack_require__(393);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChacrasList = (function () {
    function ChacrasList(navCtrl, navParams, ChacrasServiceProvider, CuadrosServiceProvider, AlertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ChacrasServiceProvider = ChacrasServiceProvider;
        this.CuadrosServiceProvider = CuadrosServiceProvider;
        this.AlertController = AlertController;
        this.chacrasList = [];
        this.newCuadro = { up: '', chacraId: '' };
        this.getAllChacras();
    }
    ChacrasList.prototype.getAllChacras = function () {
        var _this = this;
        this.ChacrasServiceProvider.getAllChacras().subscribe(function (data) { return _this.chacrasList = data; });
    };
    ChacrasList.prototype.goToEdit = function (chacra) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_edit_chacra_edit_chacra__["a" /* EditChacra */], {
            chacra: chacra
        });
    };
    ChacrasList.prototype.deleteChacra = function (chacraId) {
        var _this = this;
        this.ChacrasServiceProvider.deleteChacra(chacraId).subscribe(function (data) { return _this.getAllChacras(); });
    };
    ChacrasList.prototype.alertDeleteChacra = function (chacraId) {
        var _this = this;
        var alert = this.AlertController.create({
            title: 'Confirmar eliminacion',
            message: 'Esta seguro que desea eliminar la chacra de la lista?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () { }
                },
                {
                    text: 'Eliminar',
                    handler: function () {
                        _this.deleteChacra(chacraId);
                    }
                }
            ]
        });
        alert.present();
    };
    //CUADROS
    ChacrasList.prototype.alertNewCuadro = function (chacraId) {
        var _this = this;
        var alert = this.AlertController.create({
            title: 'Agregar Cuadro',
            inputs: [
                {
                    name: 'Up',
                    placeholder: 'Up',
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Crear',
                    handler: function (data) {
                        _this.newCuadro.up = data.Up;
                        _this.newCuadro.chacraId = chacraId;
                        _this.addNewCuadro();
                    }
                }
            ]
        });
        alert.present();
    };
    ChacrasList.prototype.addNewCuadro = function () {
        var _this = this;
        this.CuadrosServiceProvider.addNewCuadro(this.newCuadro).subscribe(function (data) { return _this.getAllChacras(); });
        this.newCuadro = { up: '', chacraId: '' };
    };
    ChacrasList.prototype.alertEditCuadro = function (cuadro) {
        var _this = this;
        var alert = this.AlertController.create({
            title: 'Editar Cuadro',
            inputs: [
                {
                    name: 'Up',
                    placeholder: 'Up',
                    value: cuadro.up,
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Editar',
                    handler: function (data) {
                        cuadro.up = data.Up;
                        _this.editCuadro(cuadro);
                    }
                }
            ]
        });
        alert.present();
    };
    ChacrasList.prototype.editCuadro = function (cuadro) {
        var _this = this;
        this.CuadrosServiceProvider.editCuadro(cuadro).subscribe(function (data) { return _this.getAllChacras(); });
    };
    ChacrasList.prototype.alertDeleteCuadro = function (cuadroId) {
        var _this = this;
        var alert = this.AlertController.create({
            title: 'Confirmar eliminacion',
            message: 'Esta seguro que desea eliminar el cuadro de la lista?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () { }
                },
                {
                    text: 'Eliminar',
                    handler: function () {
                        _this.deleteCuadro(cuadroId);
                    }
                }
            ]
        });
        alert.present();
    };
    ChacrasList.prototype.deleteCuadro = function (cuadroId) {
        var _this = this;
        this.CuadrosServiceProvider.deleteCuadro(cuadroId).subscribe(function (data) { return _this.getAllChacras(); });
    };
    ChacrasList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chacras-list',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\chacras-list\chacras-list.html"*/'<ion-header>\n  <ion-navbar color="cultivos" hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Chacras</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="back-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-sm-12 col-md-12 padding>\n        <h1 text-center>Listado de Chacras</h1>\n        <p text-center>Presentacion en forma de lista de chacras donde se obtiene la produccion</p>\n      </ion-col>\n      <ion-col col-sm-12 col-md-12 padding class="back-black-color">\n        <h4 padding-top no-margin>Chacras</h4>\n        <ion-row padding>\n          <ion-col col-sm-12 col-md-10 offset-md-1>\n            <ion-list>\n              <ion-item ion-item *ngFor="let chacra of chacrasList" class="no-border">\n                <ion-avatar item-left>\n                  <img src="assets/imgs/chacra-icon.png">\n                </ion-avatar>\n                <ion-row>\n                  <ion-col col-sm-12 col-md-5>\n                    <ion-row>\n                      <ion-col col-sm-12 col-md-12>\n                        <h2 text-center>Chacra</h2>\n                      </ion-col>\n                      <ion-col col-sm-12 col-md-12>\n                        <p text-center>{{chacra.nombre}}</p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                  <ion-col col-sm-12 col-md-5>\n                    <ion-row>\n                      <ion-col col-sm-12 col-md-12>\n                        <h2 text-center>Renspa</h2>\n                      </ion-col>\n                      <ion-col col-sm-12 col-md-12>\n                        <p text-center>{{chacra.renspa}}</p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                  <ion-col col-sm-12 col-md-2> \n                    <ion-row>\n                      <ion-col col-sm-12 col-md-4>\n                        <button ion-button color="semiDark" round icon-only small (click)="alertNewCuadro(chacra.id)">\n                          <ion-icon name="add"></ion-icon>\n                        </button>\n                      </ion-col>\n                      <ion-col col-sm-12 col-md-4>\n                        <button ion-button color="semiDark" round icon-only small (click)="goToEdit(chacra)">\n                          <ion-icon name="create"></ion-icon>\n                        </button>\n                      </ion-col>\n                      <ion-col col-sm-12 col-md-4>\n                        <button ion-button color="semiDark" round icon-only small \n                          (click)="alertDeleteChacra(chacra.id)">\n                          <ion-icon name="trash"></ion-icon>\n                        </button>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                  <ion-col col-sm-12 col-md-12>\n                    <h2>Cuadros</h2>\n                  </ion-col>\n                  <ion-col *ngFor="let cuadro of chacra.cuadros; let i = \'index\'" no-padding margin col-sm-12 col-md-2>\n                    <ion-row>\n                      <ion-list>\n                        <ion-item class="no-border" class="back-color">\n                          <ion-row>\n                            <ion-col col-sm-12 col-md-12>\n                              <ion-row>\n                                <ion-col col-sm-12 col-md-12>\n                                  <h2 text-center>UP</h2>\n                                </ion-col>\n                                <ion-col col-sm-12 col-md-12>\n                                  <p text-center>{{cuadro.up}}</p>\n                                </ion-col>\n                              </ion-row>\n                            </ion-col>\n                            <ion-col col-sm-12 col-md-12> \n                              <ion-row>\n                                <ion-col col-sm-12 col-md-6>\n                                  <button ion-button color="semiDark" round icon-only small (click)="alertEditCuadro(cuadro)">\n                                    <ion-icon name="create"></ion-icon>\n                                  </button>\n                                </ion-col>\n                                <ion-col col-sm-12 col-md-6>\n                                  <button ion-button color="semiDark" round icon-only small \n                                    (click)="alertDeleteCuadro(cuadro.id)">\n                                    <ion-icon name="trash"></ion-icon>\n                                  </button>\n                                </ion-col>\n                              </ion-row>\n                            </ion-col>\n                          </ion-row>\n                        </ion-item>\n                      </ion-list>\n                    </ion-row>    \n                  </ion-col>\n                </ion-row>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<!--ion-content padding class="back-color">\n  <div class="back-black-color" padding>\n    <h3 padding>Listado de Chacras:</h3>\n      <ion-list>\n        <ion-item ion-item *ngFor="let chacra of chacrasList">\n          <ion-avatar item-left>\n            <img src="assets/img/user.png">\n          </ion-avatar>\n          <h2>{{chacra.nombre}}</h2>\n          <p>Renspa: {{chacra.renspa}}</p>\n          <div padding>\n            <h3 padding>Cuadros: </h3>\n            <ion-list>\n              <ion-item ion-item *ngFor="let cuadro of chacra.cuadros">\n                <p>UP: {{cuadro.up}}</p>\n                <button ion-button (click)="alertEditCuadro(cuadro)">\n                 Editar\n                </button>\n                <button ion-button (click)="alertDeleteCuadro(cuadro.id)">\n                 Eliminar\n                </button>\n              </ion-item>\n            </ion-list>\n            <button ion-button (click)="alertNewCuadro(chacra.id)">\n             Agregar Cuadro\n            </button>\n          </div>\n          <button ion-button (click)="goToEdit(chacra)">\n           Editar\n          </button>\n          <button ion-button (click)="alertDeleteChacra(chacra.id)">\n           Eliminar\n          </button>\n        </ion-item>\n      </ion-list>\n    </div>\n</ion-content-->\n\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\chacras-list\chacras-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_chacras_service_chacras_service__["a" /* ChacrasServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_cuadros_service_cuadros_service__["a" /* CuadrosServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ChacrasList);
    return ChacrasList;
}());

//# sourceMappingURL=chacras-list.js.map

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 186;

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return urlAPI; });
var urlAPI = 'http://localhost:3000';
//# sourceMappingURL=api-service.js.map

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 231;

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_side_menu_redirect_events__ = __webpack_require__(440);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Angular
 // tslint:disable-line
// Ionic


var InnerMenuOptionModel = (function () {
    function InnerMenuOptionModel() {
    }
    InnerMenuOptionModel.fromMenuOptionModel = function (option, parent) {
        var innerMenuOptionModel = new InnerMenuOptionModel();
        innerMenuOptionModel.id = this.counter++;
        innerMenuOptionModel.iconName = option.iconName;
        innerMenuOptionModel.displayName = option.displayName;
        innerMenuOptionModel.badge = option.badge;
        innerMenuOptionModel.targetOption = option;
        innerMenuOptionModel.parent = parent || null;
        innerMenuOptionModel.selected = option.selected;
        if (option.subItems) {
            innerMenuOptionModel.expanded = false;
            innerMenuOptionModel.subItemsCount = option.subItems.length;
            innerMenuOptionModel.subOptions = [];
            option.subItems.forEach(function (subItem) {
                var innerSubItem = InnerMenuOptionModel.fromMenuOptionModel(subItem, innerMenuOptionModel);
                innerMenuOptionModel.subOptions.push(innerSubItem);
                // Select the parent if any
                // child option is selected
                if (subItem.selected) {
                    innerSubItem.parent.selected = true;
                    innerSubItem.parent.expanded = true;
                }
            });
        }
        return innerMenuOptionModel;
    };
    InnerMenuOptionModel.counter = 1;
    return InnerMenuOptionModel;
}());
var SideMenuContentComponent = (function () {
    function SideMenuContentComponent(platform, eventsCtrl, cdRef) {
        var _this = this;
        this.platform = platform;
        this.eventsCtrl = eventsCtrl;
        this.cdRef = cdRef;
        this.collapsableItems = [];
        // Outputs: return the selected option to the caller
        this.selectOption = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        // Handle the redirect event
        this.eventsCtrl.subscribe(__WEBPACK_IMPORTED_MODULE_2__models_side_menu_redirect_events__["a" /* SideMenuRedirectEvent */], function (data) {
            _this.updateSelectedOption(data);
        });
    }
    Object.defineProperty(SideMenuContentComponent.prototype, "options", {
        set: function (value) {
            var _this = this;
            if (value) {
                // Keep a reference to the options
                // sent to this component
                this.menuOptions = value;
                this.collapsableItems = new Array();
                // Map the options to our internal models
                this.menuOptions.forEach(function (option) {
                    var innerMenuOption = InnerMenuOptionModel.fromMenuOptionModel(option);
                    _this.collapsableItems.push(innerMenuOption);
                    // Check if there's any option marked as selected
                    if (option.selected) {
                        _this.selectedOption = innerMenuOption;
                    }
                    else if (innerMenuOption.subItemsCount) {
                        innerMenuOption.subOptions.forEach(function (subItem) {
                            if (subItem.selected) {
                                _this.selectedOption = subItem;
                            }
                        });
                    }
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SideMenuContentComponent.prototype, "settings", {
        set: function (value) {
            if (value) {
                this.menuSettings = value;
                this.mergeSettings();
            }
        },
        enumerable: true,
        configurable: true
    });
    SideMenuContentComponent.prototype.ngOnDestroy = function () {
        this.eventsCtrl.unsubscribe(__WEBPACK_IMPORTED_MODULE_2__models_side_menu_redirect_events__["a" /* SideMenuRedirectEvent */]);
    };
    // ---------------------------------------------------
    // PUBLIC methods
    // ---------------------------------------------------
    // Send the selected option to the caller component
    SideMenuContentComponent.prototype.select = function (option) {
        if (this.menuSettings.showSelectedOption) {
            this.setSelectedOption(option);
        }
        // Return the selected option (not our inner option)
        this.selectOption.emit(option.targetOption);
    };
    // Toggle the sub options of the selected item
    SideMenuContentComponent.prototype.toggleItemOptions = function (targetOption) {
        if (!targetOption)
            return;
        // If the accordion mode is set to true, we need
        // to collapse all the other menu options
        if (this.menuSettings.accordionMode) {
            this.collapsableItems.forEach(function (option) {
                if (option.id !== targetOption.id) {
                    option.expanded = false;
                }
            });
        }
        // Toggle the selected option
        targetOption.expanded = !targetOption.expanded;
    };
    // Reset the entire menu
    SideMenuContentComponent.prototype.collapseAllOptions = function () {
        this.collapsableItems.forEach(function (option) {
            if (!option.selected) {
                option.expanded = false;
            }
            if (option.subItemsCount) {
                option.subOptions.forEach(function (subItem) {
                    if (subItem.selected) {
                        // Expand the parent if any of
                        // its childs is selected
                        subItem.parent.expanded = true;
                    }
                });
            }
        });
        // Update the view since there wasn't
        // any user interaction with it
        this.cdRef.detectChanges();
    };
    Object.defineProperty(SideMenuContentComponent.prototype, "subOptionIndentation", {
        // Get the proper indentation of each option
        get: function () {
            if (this.platform.is('ios'))
                return this.menuSettings.subOptionIndentation.ios;
            if (this.platform.is('windows'))
                return this.menuSettings.subOptionIndentation.wp;
            return this.menuSettings.subOptionIndentation.md;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SideMenuContentComponent.prototype, "itemHeight", {
        // Get the proper height of each option
        get: function () {
            if (this.platform.is('ios'))
                return this.menuSettings.itemHeight.ios;
            if (this.platform.is('windows'))
                return this.menuSettings.itemHeight.wp;
            return this.menuSettings.itemHeight.md;
        },
        enumerable: true,
        configurable: true
    });
    // ---------------------------------------------------
    // PRIVATE methods
    // ---------------------------------------------------
    // Method that set the selected option and its parent
    SideMenuContentComponent.prototype.setSelectedOption = function (option) {
        if (!option.targetOption.component)
            return;
        // Clean the current selected option if any
        if (this.selectedOption) {
            this.selectedOption.selected = false;
            this.selectedOption.targetOption.selected = false;
            if (this.selectedOption.parent) {
                this.selectedOption.parent.selected = false;
                this.selectedOption.parent.expanded = false;
            }
            this.selectedOption = null;
        }
        // Set this option to be the selected
        option.selected = true;
        option.targetOption.selected = true;
        if (option.parent) {
            option.parent.selected = true;
            option.parent.expanded = true;
        }
        // Keep a reference to the selected option
        this.selectedOption = option;
        // Update the view if needed since we may have
        // expanded or collapsed some options
        this.cdRef.detectChanges();
    };
    // Update the selected option
    SideMenuContentComponent.prototype.updateSelectedOption = function (data) {
        if (!data.displayName) {
            return;
        }
        var targetOption;
        this.collapsableItems.forEach(function (option) {
            if (option.displayName.toLowerCase() === data.displayName.toLowerCase()) {
                targetOption = option;
            }
            else if (option.subItemsCount) {
                option.subOptions.forEach(function (subOption) {
                    if (subOption.displayName.toLowerCase() === data.displayName.toLowerCase()) {
                        targetOption = subOption;
                    }
                });
            }
        });
        if (targetOption) {
            this.setSelectedOption(targetOption);
        }
    };
    // Merge the settings received with the default settings
    SideMenuContentComponent.prototype.mergeSettings = function () {
        var defaultSettings = {
            accordionMode: false,
            itemHeight: {
                ios: 50,
                md: 50,
                wp: 50
            },
            arrowIcon: 'ios-arrow-down',
            showSelectedOption: false,
            selectedOptionClass: 'selected-option',
            indentSubOptionsWithoutIcons: false,
            subOptionIndentation: {
                ios: '16px',
                md: '16px',
                wp: '16px'
            }
        };
        if (!this.menuSettings) {
            // Use the default values
            this.menuSettings = defaultSettings;
            return;
        }
        if (!this.menuSettings.itemHeight) {
            this.menuSettings.itemHeight = defaultSettings.itemHeight;
        }
        else {
            this.menuSettings.itemHeight.ios = this.isDefinedAndPositive(this.menuSettings.itemHeight.ios) ? this.menuSettings.itemHeight.ios : defaultSettings.itemHeight.ios;
            this.menuSettings.itemHeight.md = this.isDefinedAndPositive(this.menuSettings.itemHeight.md) ? this.menuSettings.itemHeight.md : defaultSettings.itemHeight.md;
            this.menuSettings.itemHeight.wp = this.isDefinedAndPositive(this.menuSettings.itemHeight.wp) ? this.menuSettings.itemHeight.wp : defaultSettings.itemHeight.wp;
        }
        this.menuSettings.showSelectedOption = this.isDefined(this.menuSettings.showSelectedOption) ? this.menuSettings.showSelectedOption : defaultSettings.showSelectedOption;
        this.menuSettings.accordionMode = this.isDefined(this.menuSettings.accordionMode) ? this.menuSettings.accordionMode : defaultSettings.accordionMode;
        this.menuSettings.arrowIcon = this.isDefined(this.menuSettings.arrowIcon) ? this.menuSettings.arrowIcon : defaultSettings.arrowIcon;
        this.menuSettings.selectedOptionClass = this.isDefined(this.menuSettings.selectedOptionClass) ? this.menuSettings.selectedOptionClass : defaultSettings.selectedOptionClass;
        this.menuSettings.subOptionIndentation = this.isDefined(this.menuSettings.subOptionIndentation) ? this.menuSettings.subOptionIndentation : defaultSettings.subOptionIndentation;
        this.menuSettings.indentSubOptionsWithoutIcons = this.isDefined(this.menuSettings.indentSubOptionsWithoutIcons) ? this.menuSettings.indentSubOptionsWithoutIcons : defaultSettings.indentSubOptionsWithoutIcons;
        if (!this.menuSettings.subOptionIndentation) {
            this.menuSettings.subOptionIndentation = defaultSettings.subOptionIndentation;
        }
        else {
            this.menuSettings.subOptionIndentation.ios = this.isDefined(this.menuSettings.subOptionIndentation.ios) ? this.menuSettings.subOptionIndentation.ios : defaultSettings.subOptionIndentation.ios;
            this.menuSettings.subOptionIndentation.md = this.isDefined(this.menuSettings.subOptionIndentation.md) ? this.menuSettings.subOptionIndentation.md : defaultSettings.subOptionIndentation.md;
            this.menuSettings.subOptionIndentation.wp = this.isDefined(this.menuSettings.subOptionIndentation.wp) ? this.menuSettings.subOptionIndentation.wp : defaultSettings.subOptionIndentation.wp;
        }
    };
    SideMenuContentComponent.prototype.isDefined = function (property) {
        return property !== null && property !== undefined;
    };
    SideMenuContentComponent.prototype.isDefinedAndPositive = function (property) {
        return this.isDefined(property) && !isNaN(property) && property > 0;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('options'),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], SideMenuContentComponent.prototype, "options", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('settings'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], SideMenuContentComponent.prototype, "settings", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], SideMenuContentComponent.prototype, "selectOption", void 0);
    SideMenuContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'side-menu-content',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\shared\side-menu-content\side-menu-content.component.html"*/'<ion-list no-margin no-lines>\n    <ng-template ngFor let-option [ngForOf]="collapsableItems" let-i="index">\n\n        <!-- It is a simple option -->\n        <ng-template [ngIf]="!option.subItemsCount">\n            <ion-item class="option" [ngClass]="menuSettings?.showSelectedOption && option.selected ? menuSettings.selectedOptionClass : null" (tap)="select(option)" tappable>\n                <ion-icon *ngIf="option.iconName" [name]="option.iconName" item-left></ion-icon>\n                {{ option.displayName }} <ion-badge item-right *ngIf="option.badge | async as badgeNo">{{ badgeNo }}</ion-badge>\n            </ion-item>\n        </ng-template>\n\n        <!-- It has nested options -->\n        <ng-template [ngIf]="option.subItemsCount">\n\n            <ion-list no-margin class="accordion-menu">\n\n                <!-- Header -->\n                <ion-item class="header" [ngClass]="menuSettings?.showSelectedOption && option.selected ? menuSettings.selectedOptionClass : null" (tap)="toggleItemOptions(option)" tappable>\n                    <ion-icon [class.rotate]="option.expanded" class="header-icon" [name]="option.iconName || menuSettings.arrowIcon" item-left></ion-icon>\n                    {{ option.displayName }}\n                </ion-item>\n\n                <!-- Sub items -->\n                <div [style.height]="option.expanded ? ((itemHeight + 1) * option.subItemsCount) + \'px\' : \'0px\'" class="options">\n                    <ng-template ngFor let-item [ngForOf]="option.subOptions">\n                        <ion-item class="sub-option" [style.padding-left]="subOptionIndentation" [class.no-icon]="menuSettings?.indentSubOptionsWithoutIcons && !item.iconName" [ngClass]="menuSettings?.showSelectedOption && item.selected ? menuSettings.selectedOptionClass : null" tappable (tap)="select(item)">\n                            <ion-icon *ngIf="item.iconName" [name]="item.iconName" item-left></ion-icon>\n                            {{ item.displayName }}  <ion-badge item-right *ngIf="item.badge | async as badgeNo">{{ badgeNo }}</ion-badge>\n                        </ion-item>\n                    </ng-template>\n                </div>\n            </ion-list>\n\n        </ng-template>\n\n    </ng-template>\n</ion-list>'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\shared\side-menu-content\side-menu-content.component.html"*/,
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], SideMenuContentComponent);
    return SideMenuContentComponent;
}());

//# sourceMappingURL=side-menu-content.component.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectSearchablePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectSearchablePage = (function () {
    function SelectSearchablePage(navParams) {
        var _this = this;
        this.navParams = navParams;
        this.selectedItems = [];
        this.selectComponent = this.navParams.get('selectComponent');
        this.navController = this.navParams.get('navController');
        this.filteredItems = this.selectComponent.items;
        this.filterItems();
        if (this.selectComponent.value) {
            if (this.selectComponent.multiple) {
                this.selectComponent.value.forEach(function (item) {
                    _this.selectedItems.push(item);
                });
            }
            else {
                this.selectedItems.push(this.selectComponent.value);
            }
        }
    }
    SelectSearchablePage.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.searchbarComponent) {
            // Focus after a delay because focus doesn't work without it.
            setTimeout(function () {
                _this.searchbarComponent.setFocus();
            }, 1000);
        }
    };
    SelectSearchablePage.prototype.isItemSelected = function (item) {
        var _this = this;
        return this.selectedItems.find(function (selectedItem) {
            if (_this.selectComponent.itemValueField) {
                return item[_this.selectComponent.itemValueField] === selectedItem[_this.selectComponent.itemValueField];
            }
            return item === selectedItem;
        }) !== undefined;
    };
    SelectSearchablePage.prototype.deleteSelectedItem = function (item) {
        var _this = this;
        var itemToDeleteIndex;
        this.selectedItems.forEach(function (selectedItem, itemIndex) {
            if (_this.selectComponent.itemValueField) {
                if (item[_this.selectComponent.itemValueField] === selectedItem[_this.selectComponent.itemValueField]) {
                    itemToDeleteIndex = itemIndex;
                }
            }
            else if (item === selectedItem) {
                itemToDeleteIndex = itemIndex;
            }
        });
        this.selectedItems.splice(itemToDeleteIndex, 1);
    };
    SelectSearchablePage.prototype.addSelectedItem = function (item) {
        this.selectedItems.push(item);
    };
    SelectSearchablePage.prototype.select = function (item) {
        if (this.selectComponent.multiple) {
            if (this.isItemSelected(item)) {
                this.deleteSelectedItem(item);
            }
            else {
                this.addSelectedItem(item);
            }
        }
        else {
            if (!this.isItemSelected(item)) {
                this.selectedItems = [];
                this.addSelectedItem(item);
                this.selectComponent.select(item);
            }
            this.close();
        }
    };
    SelectSearchablePage.prototype.ok = function () {
        this.selectComponent.select(this.selectedItems.length ? this.selectedItems : null);
        this.close();
    };
    SelectSearchablePage.prototype.close = function () {
        var _this = this;
        // Focused input interferes with the animation.
        // Blur it first, wait a bit and then close the page.
        if (this.searchbarComponent) {
            this.searchbarComponent._fireBlur();
        }
        setTimeout(function () {
            _this.navController.pop();
            if (!_this.selectComponent.hasSearchEvent) {
                _this.selectComponent.filterText = '';
            }
        });
    };
    SelectSearchablePage.prototype.reset = function () {
        this.navController.pop();
        this.selectComponent.reset();
    };
    SelectSearchablePage.prototype.filterItems = function () {
        var _this = this;
        if (this.selectComponent.hasSearchEvent) {
            // Delegate filtering to the event.
            this.selectComponent.emitSearch();
        }
        else {
            var items = [];
            // Default filtering.
            if (!this.selectComponent.filterText || !this.selectComponent.filterText.trim()) {
                items = this.selectComponent.items;
            }
            else {
                var filterText_1 = this.selectComponent.filterText.trim().toLowerCase();
                items = this.selectComponent.items.filter(function (item) {
                    return (_this.selectComponent.itemTextField ? item[_this.selectComponent.itemTextField] : item)
                        .toLowerCase().indexOf(filterText_1) !== -1;
                });
            }
            this.filteredItems = items;
        }
    };
    SelectSearchablePage.prototype.getMoreItems = function (infiniteScroll) {
        this.selectComponent.onInfiniteScroll.emit({
            component: this.selectComponent,
            infiniteScroll: infiniteScroll
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('searchbarComponent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Searchbar */])
    ], SelectSearchablePage.prototype, "searchbarComponent", void 0);
    SelectSearchablePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'select-searchable-page',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\shared\select\select-page.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{selectComponent.title}}</ion-title>\n    </ion-navbar>\n    <ion-toolbar *ngIf="selectComponent.canSearch">\n        <ion-searchbar\n            #searchbarComponent\n            [(ngModel)]="selectComponent.filterText"\n            (ionInput)="filterItems()"\n            [placeholder]="selectComponent.searchPlaceholder || \'Search\'">\n        </ion-searchbar>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <div class="select-searchable-spinner" *ngIf="selectComponent.isSearching">\n        <div class="select-searchable-spinner-background"></div>\n        <ion-spinner></ion-spinner>\n    </div>\n    <ion-list no-margin *ngIf="filteredItems.length">\n        <button ion-item detail-none *ngFor="let item of filteredItems" (click)="select(item)">\n            <ion-icon\n                [name]="isItemSelected(item) ? \'checkmark-circle\' : \'radio-button-off\'"\n                [color]="isItemSelected(item) ? \'primary\' : \'daek\'"\n                item-left>\n            </ion-icon>\n            <h2>{{selectComponent.formatItem(item)}}</h2>\n        </button>\n    </ion-list>\n    <ion-infinite-scroll [enabled]="selectComponent.hasInfiniteScroll" (ionInfinite)="getMoreItems($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n    <div *ngIf="!filteredItems.length" margin>No items found.</div>\n</ion-content>\n<ion-footer *ngIf="selectComponent.canReset || selectComponent.multiple">\n    <ion-toolbar padding>\n        <ion-row>\n            <ion-col no-padding *ngIf="selectComponent.canReset"\n                [attr.col-6]="selectComponent.canReset && selectComponent.multiple ? \'\' : null"\n                [attr.col-12]="selectComponent.canReset && !selectComponent.multiple ? \'\' : null">\n                <button ion-button full no-margin (click)="reset()" [disabled]="!selectedItems.length">\n                    Clear\n                </button>\n            </ion-col>\n            <ion-col no-padding *ngIf="selectComponent.multiple"\n                [attr.col-6]="selectComponent.canReset && selectComponent.multiple ? \'\' : null"\n                [attr.col-12]="!selectComponent.canReset && selectComponent.multiple ? \'\' : null">\n                <button ion-button full no-margin (click)="ok()">\n                    OK\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\shared\select\select-page.html"*/,
            host: {
                'class': 'select-searchable-page',
                '[class.select-searchable-page-can-reset]': 'selectComponent.canReset',
                '[class.select-searchable-page-multiple]': 'selectComponent.multiple'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], SelectSearchablePage);
    return SelectSearchablePage;
}());

//# sourceMappingURL=select-page.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProductor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_productores_service_productores_service__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditProductor = (function () {
    function EditProductor(navCtrl, navParams, ProductoresServiceProvider, AlertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ProductoresServiceProvider = ProductoresServiceProvider;
        this.AlertController = AlertController;
        this.productor = [];
        this.productor = this.navParams.get('productor');
    }
    EditProductor.prototype.editProductor = function () {
        var _this = this;
        this.ProductoresServiceProvider.editProductor(this.productor).subscribe(function (data) { return _this.alertEditLote(data.error); });
    };
    EditProductor.prototype.alertEditLote = function (error) {
        var _this = this;
        var alert;
        if (!error) {
            alert = this.AlertController.create({
                title: 'Edicion exitosa',
                message: 'Se ha editado correctamente el productor.',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function () {
                            _this.destroyView();
                        }
                    }
                ]
            });
        }
        else {
            alert = this.AlertController.create({
                title: 'Error',
                message: 'Se ha producido un error al intentar editar el productor.',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function () { }
                    }
                ]
            });
        }
        alert.present();
    };
    EditProductor.prototype.destroyView = function () {
        this.navCtrl.pop();
    };
    EditProductor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-productor',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-productor\edit-productor.html"*/'<ion-header>\n  <ion-navbar color="cultivos">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Editar Productor</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="back-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-sm-12 col-md-12 padding>\n        <h1 text-center>Editar Productor</h1>\n        <p text-center>Ingrese los datos necesarios para editar un productor existente.</p>\n      </ion-col>\n      <ion-col col-sm-12 col-md-12 padding class="back-black-color">\n        <h3 padding-top no-margin>Datos generales del productor</h3>\n        <form (ngSubmit)="editProductor()">\n          <ion-grid>\n            <ion-row>\n              <ion-col col-sm-12 col-md-12 padding-bottom>\n                <ion-row>\n                  <ion-item col-sm-12 col-md-6 class="no-border">\n                    <ion-label stacked>Nombre</ion-label>\n                    <ion-input type="text" [(ngModel)]="productor.nombre" name="name"></ion-input>\n                  </ion-item>\n                  <ion-item col-sm-12 col-md-6 class="no-border">\n                    <ion-label stacked>DNI</ion-label>\n                    <ion-input type="text" [(ngModel)]="productor.dni" name="dni"></ion-input>\n                  </ion-item>\n                  <ion-item col-sm-12 col-md-6 class="no-border">\n                    <ion-label stacked>Telefono</ion-label>\n                    <ion-input type="number" [(ngModel)]="productor.telefono" name="telefono"></ion-input>\n                  </ion-item>\n                  <ion-col col-sm-12 col-md-12 padding>\n                    <ion-buttons right>\n                        <button ion-button type="submit" color="semiDark">Editar</button>\n                    </ion-buttons>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-productor\edit-productor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_productores_service_productores_service__["a" /* ProductoresServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EditProductor);
    return EditProductor;
}());

//# sourceMappingURL=edit-productor.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCamion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_camiones_service_camiones_service__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditCamion = (function () {
    function EditCamion(navCtrl, navParams, CamionesServiceProvider, AlertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.CamionesServiceProvider = CamionesServiceProvider;
        this.AlertController = AlertController;
        this.camion = [];
        this.camion = this.navParams.get('camion');
    }
    EditCamion.prototype.editCamion = function (camion) {
        var _this = this;
        this.CamionesServiceProvider.editCamion(this.camion).subscribe(function (data) { return _this.alertEditCamion(data.error); });
    };
    EditCamion.prototype.alertEditCamion = function (error) {
        var _this = this;
        var alert;
        if (!error) {
            alert = this.AlertController.create({
                title: 'Edicion exitosa',
                message: 'Se ha editado correctamente el camion.',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function () {
                            _this.destroyView();
                        }
                    }
                ]
            });
        }
        else {
            alert = this.AlertController.create({
                title: 'Error',
                message: 'Se ha producido un error al intentar editar el camion.',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function () { }
                    }
                ]
            });
        }
        alert.present();
    };
    EditCamion.prototype.destroyView = function () {
        this.navCtrl.pop();
    };
    EditCamion = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-camion',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-camion\edit-camion.html"*/'<ion-header>\n  <ion-navbar color="cultivos">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Editar Camion</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="back-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-sm-12 col-md-12 padding>\n        <h1 text-center>Editar Camion</h1>\n        <p text-center>Ingrese los datos necesarios para editar un camion existente.</p>\n      </ion-col>\n      <ion-col col-sm-12 col-md-12 padding class="back-black-color">\n        <h3 padding-top no-margin>Datos generales del camion</h3>\n        <form (ngSubmit)="editCamion()">\n          <ion-grid>\n            <ion-row>\n              <ion-col col-sm-12 col-md-12 padding-bottom>\n                <ion-row>\n                  <ion-item col-sm-12 col-md-12 class="no-border">\n                    <ion-label stacked>Nombre Chofer</ion-label>\n                    <ion-input type="text" [(ngModel)]="camion.nombreChofer" name="nombreChofer"></ion-input>\n                  </ion-item>\n                  <ion-item col-sm-12 col-md-6 class="no-border">\n                    <ion-label stacked>Patente Acoplado</ion-label>\n                    <ion-input type="text" [(ngModel)]="camion.patenteAcoplado" name="patenteAcoplado"></ion-input>\n                  </ion-item>\n                  <ion-item col-sm-12 col-md-6 class="no-border">\n                    <ion-label stacked>Patente Chasis</ion-label>\n                    <ion-input type="text" [(ngModel)]="camion.patenteChasis" name="patenteChasis"></ion-input>\n                  </ion-item>\n                  <ion-col col-sm-12 col-md-12 padding>\n                    <ion-buttons right>\n                        <button ion-button type="submit" color="semiDark">Editar</button>\n                    </ion-buttons>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-camion\edit-camion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_camiones_service_camiones_service__["a" /* CamionesServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EditCamion);
    return EditCamion;
}());

//# sourceMappingURL=edit-camion.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEmpresa; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_empresas_service_empresas_service__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditEmpresa = (function () {
    function EditEmpresa(navCtrl, navParams, EmpresasServiceProvider, AlertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.EmpresasServiceProvider = EmpresasServiceProvider;
        this.AlertController = AlertController;
        this.empresa = [];
        this.empresa = this.navParams.get('empresa');
    }
    EditEmpresa.prototype.editEmpresa = function (chacra) {
        var _this = this;
        this.EmpresasServiceProvider.editEmpresa(this.empresa).subscribe(function (data) { return _this.alertEditEmpresa(data.error); });
    };
    EditEmpresa.prototype.alertEditEmpresa = function (error) {
        var _this = this;
        var alert;
        if (!error) {
            alert = this.AlertController.create({
                title: 'Edicion exitosa',
                message: 'Se ha editado correctamente la empresa.',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function () {
                            _this.destroyView();
                        }
                    }
                ]
            });
        }
        else {
            alert = this.AlertController.create({
                title: 'Error',
                message: 'Se ha producido un error al intentar editar la empresa.',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function () { }
                    }
                ]
            });
        }
        alert.present();
    };
    EditEmpresa.prototype.destroyView = function () {
        this.navCtrl.pop();
    };
    EditEmpresa = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-empresa',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-empresa\edit-empresa.html"*/'<ion-header>\n  <ion-navbar color="cultivos">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Editar Empresa</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="back-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-sm-12 col-md-12 padding>\n        <h1 text-center>Editar Empresa</h1>\n        <p text-center>Ingrese los datos necesarios para generar una empresa existente.</p>\n      </ion-col>\n      <ion-col col-sm-12 col-md-12 padding class="back-black-color">\n        <h3 padding-top no-margin>Datos generales de la empresa</h3>\n        <form (ngSubmit)="editEmpresa()">\n          <ion-grid>\n            <ion-row>\n              <ion-col col-sm-12 col-md-12 padding-bottom>\n                <ion-row>\n                  <ion-item col-sm-12 col-md-6 class="no-border">\n                    <ion-label stacked>Nombre</ion-label>\n                    <ion-input type="text" [(ngModel)]="empresa.nombre" name="name"></ion-input>\n                  </ion-item>\n                  <ion-item col-sm-12 col-md-6 class="no-border">\n                    <ion-label stacked>Direccion</ion-label>\n                    <ion-input type="text" [(ngModel)]="empresa.direccion" name="direccion"></ion-input>\n                  </ion-item>\n                  <ion-item col-sm-12 col-md-6 class="no-border">\n                    <ion-label stacked>Telefono</ion-label>\n                    <ion-input type="number" [(ngModel)]="empresa.telefono" name="telefono"></ion-input>\n                  </ion-item>\n                  <ion-col col-sm-12 col-md-12 padding>\n                    <ion-buttons right>\n                        <button ion-button type="submit" color="semiDark">Editar</button>\n                    </ion-buttons>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-empresa\edit-empresa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_empresas_service_empresas_service__["a" /* EmpresasServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EditEmpresa);
    return EditEmpresa;
}());

//# sourceMappingURL=edit-empresa.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditInstitucion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_instituciones_service_instituciones_service__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditInstitucion = (function () {
    function EditInstitucion(navCtrl, navParams, InstitucionesServiceProvider, AlertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.InstitucionesServiceProvider = InstitucionesServiceProvider;
        this.AlertController = AlertController;
        this.institucion = [];
        this.institucion = this.navParams.get('institucion');
    }
    EditInstitucion.prototype.editInstitucion = function (institucion) {
        var _this = this;
        this.InstitucionesServiceProvider.editInstitucion(this.institucion).subscribe(function (data) { return _this.alertEditInstitucion(data.error); });
    };
    EditInstitucion.prototype.alertEditInstitucion = function (error) {
        var _this = this;
        var alert;
        if (!error) {
            alert = this.AlertController.create({
                title: 'Edicion exitosa',
                message: 'Se ha editado correctamente la institucion.',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function () {
                            _this.destroyView();
                        }
                    }
                ]
            });
        }
        else {
            alert = this.AlertController.create({
                title: 'Error',
                message: 'Se ha producido un error al intentar editar la institucion.',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function () { }
                    }
                ]
            });
        }
        alert.present();
    };
    EditInstitucion.prototype.destroyView = function () {
        this.navCtrl.pop();
    };
    EditInstitucion = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-institucion',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-institucion\edit-institucion.html"*/'<ion-header>\n  <ion-navbar color="cultivos">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Editar Institucion</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="back-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-sm-12 col-md-12 padding>\n        <h1 text-center>Editar Institucion</h1>\n        <p text-center>Ingrese los datos necesarios para editar una institucion existente.</p>\n      </ion-col>\n      <ion-col col-sm-12 col-md-12 padding class="back-black-color">\n        <h3 padding-top no-margin>Datos generales de la institucion</h3>\n        <form (ngSubmit)="editInstitucion()">\n          <ion-grid>\n            <ion-row>\n              <ion-col col-sm-12 col-md-12 padding-bottom>\n                <ion-row>\n                  <ion-item col-sm-12 col-md-6 class="no-border">\n                    <ion-label stacked>Nombre</ion-label>\n                    <ion-input type="text" [(ngModel)]="institucion.nombre" name="name"></ion-input>\n                  </ion-item>\n                  <ion-item col-sm-12 col-md-6 class="no-border">\n                    <ion-label stacked>Direccion</ion-label>\n                    <ion-input type="text" [(ngModel)]="institucion.direccion" name="direccion"></ion-input>\n                  </ion-item>\n                  <ion-item col-sm-12 col-md-6 class="no-border">\n                    <ion-label stacked>Telefono</ion-label>\n                    <ion-input type="number" [(ngModel)]="institucion.telefono" name="telefono"></ion-input>\n                  </ion-item>\n                  <ion-col col-sm-12 col-md-12 padding>\n                    <ion-buttons right>\n                        <button ion-button type="submit" color="semiDark">Editar</button>\n                    </ion-buttons>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-institucion\edit-institucion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_instituciones_service_instituciones_service__["a" /* InstitucionesServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EditInstitucion);
    return EditInstitucion;
}());

//# sourceMappingURL=edit-institucion.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditIngreso; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ingresos_service_ingresos_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_instituciones_service_instituciones_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_chacras_service_chacras_service__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditIngreso = (function () {
    function EditIngreso(navCtrl, navParams, IngresosServiceProvider, InstitucionesServiceProvider, ChacrasServiceProvider, AlertController) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.IngresosServiceProvider = IngresosServiceProvider;
        this.InstitucionesServiceProvider = InstitucionesServiceProvider;
        this.ChacrasServiceProvider = ChacrasServiceProvider;
        this.AlertController = AlertController;
        this.ingreso = [];
        this.chacras = [];
        this.instituciones = [];
        this.InstitucionesServiceProvider.getAllInstituciones().subscribe(function (data) { return _this.instituciones = data; });
        this.ChacrasServiceProvider.getAllChacras().subscribe(function (data) { return _this.chacras = data; });
        this.ingreso = this.navParams.get('ingreso');
    }
    EditIngreso.prototype.editIngreso = function (ingreso) {
        var _this = this;
        this.IngresosServiceProvider.editIngreso(this.ingreso).subscribe(function (data) { return _this.alertEditIngreso(data.error); });
    };
    EditIngreso.prototype.alertEditIngreso = function (error) {
        var _this = this;
        var alert;
        if (!error) {
            alert = this.AlertController.create({
                title: 'Edicion exitosa',
                message: 'Se ha editado correctamente el ingreso.',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function () {
                            _this.destroyView();
                        }
                    }
                ]
            });
        }
        else {
            alert = this.AlertController.create({
                title: 'Error',
                message: 'Se ha producido un error al intentar editar el ingreso.',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function () { }
                    }
                ]
            });
        }
        alert.present();
    };
    EditIngreso.prototype.destroyView = function () {
        this.navCtrl.pop();
    };
    EditIngreso = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-ingreso',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-ingreso\edit-ingreso.html"*/'<ion-header>\n  <ion-navbar color="cultivos">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Editar Ingreso</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="back-color">\n    <ion-grid>\n        <ion-row>\n            <ion-col col-sm-12 col-md-12 padding>\n              <h1 text-center>Editar Ingreso</h1>\n              <p text-center>Ingrese los datos necesarios para editar un ingreso de fruta existente.</p>\n            </ion-col>\n            <ion-col col-sm-12 col-md-12 padding class="back-black-color">\n                <h3 padding-top no-margin>Datos generales del Ingreso</h3>\n            	<form (ngSubmit)="editIngreso()">\n            	    <ion-grid>\n                        <ion-row>\n                            <ion-col col-sm-12 col-md-12 padding-bottom>\n                                <ion-row>\n                                    <ion-item col-sm-12 col-md-6 class="no-border">\n                                      <ion-label stacked>Nro Remito</ion-label>\n                                      <ion-input type="text" [(ngModel)]="ingreso.nroRemito" name="nroRemito"></ion-input>\n                                    </ion-item>\n                                    <ion-item col-sm-12 col-md-6 class="no-border">\n                                      <ion-label stacked>Fecha de Ingreso</ion-label>\n                                      <ion-input type="date" [value]="ingreso.fechaIngreso" (input)="ingreso.fechaIngreso = $event.target.value" name="fechaIngreso"></ion-input>\n                                    </ion-item>\n                                </ion-row>\n                            </ion-col>\n                            <ion-col col-sm-12 col-md-12 padding>\n                                    <ion-buttons right>\n                                        <button ion-button color="semiDark" type="submit">Editar</button>\n                                    </ion-buttons>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n            	</form>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-ingreso\edit-ingreso.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_ingresos_service_ingresos_service__["a" /* IngresosServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_instituciones_service_instituciones_service__["a" /* InstitucionesServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_chacras_service_chacras_service__["a" /* ChacrasServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EditIngreso);
    return EditIngreso;
}());

//# sourceMappingURL=edit-ingreso.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViajesList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViajesList = (function () {
    function ViajesList(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viajes = [];
        this.viajes = this.navParams.get('viajes');
    }
    ViajesList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viajes-list',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\viajes-list\viajes-list.html"*/'<ion-header>\n  <ion-navbar color="cultivos">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Viajes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="back-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-sm-12 col-md-12 padding>\n        <h1 text-center>Listado de Viajes</h1>\n        <p text-center>Presentacion en forma de lista de los viajes para el ingreso seleccionado<p>\n      </ion-col>\n      <ion-col col-sm-12 col-md-12 padding class="back-black-color">\n        <h4 padding-top no-margin>Viajes</h4>\n        <ion-row padding>\n          <ion-col col-sm-12 col-md-8 offset-md-2>\n            <ion-list>\n              <ion-item ion-item *ngFor="let viaje of viajes" class="no-border">\n                <ion-avatar item-left>\n                  <img src="assets/imgs/camion-icon.png">\n                </ion-avatar>\n                <ion-row>\n                  <ion-col col-sm-12 col-md-2>\n                    <ion-row>\n                      <ion-col col-sm-12 col-md-12>\n                        <h2 text-center>Fecha</h2>\n                      </ion-col>\n                      <ion-col col-sm-12 col-md-12>\n                        <p text-center>{{viaje.fecha}}</p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                  <ion-col col-sm-12 col-md-3>\n                    <ion-row>\n                      <ion-col col-sm-12 col-md-12>\n                        <h2 text-center>Costo</h2>\n                      </ion-col>\n                      <ion-col col-sm-12 col-md-12>\n                        <p text-center>{{viaje.costo}}</p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                  <ion-col col-sm-12 col-md-3> \n                    <ion-row>\n                      <ion-col col-sm-12 col-md-12>\n                        <h2 text-center>Chofer</h2>\n                      </ion-col>\n                      <ion-col col-sm-12 col-md-12>\n                        <p text-center>{{viaje.camion.nombreChofer}}</p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                  <ion-col col-sm-12 col-md-3> \n                    <ion-row>\n                      <ion-col col-sm-12 col-md-12>\n                        <h2 text-center>Lugar</h2>\n                      </ion-col>\n                      <ion-col col-sm-12 col-md-12>\n                        <p text-center>{{viaje.institucion.nombre}}</p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                </ion-row>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\viajes-list\viajes-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ViajesList);
    return ViajesList;
}());

//# sourceMappingURL=viajes-list.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LotesList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_edit_lote_edit_lote__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_lotes_service_lotes_service__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LotesList = (function () {
    function LotesList(navCtrl, navParams, LotesServiceProvider, AlertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.LotesServiceProvider = LotesServiceProvider;
        this.AlertController = AlertController;
        this.lotes = [];
        this.lotes = this.navParams.get('lotes');
    }
    LotesList.prototype.alertDeleteLote = function (loteId) {
        var _this = this;
        var alert = this.AlertController.create({
            title: 'Confirmar eliminacion',
            message: 'Esta seguro que desea eliminar el lote de la lista?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () { }
                },
                {
                    text: 'Eliminar',
                    handler: function () {
                        _this.deleteLote(loteId);
                    }
                }
            ]
        });
        alert.present();
    };
    LotesList.prototype.deleteLote = function (loteId) {
        this.LotesServiceProvider.deleteLote(loteId);
    };
    LotesList.prototype.goToEditLote = function (lote) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_edit_lote_edit_lote__["a" /* EditLote */], {
            lote: lote
        });
    };
    LotesList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lotes-list',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\lotes-list\lotes-list.html"*/'<ion-header>\n  <ion-navbar color="cultivos">\n    <ion-title>Lotes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="back-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 padding>\n        <h1 text-center>Listado de Lotes</h1>\n        <p text-center>Presentacion en forma de lista de los lotes para el ingreso seleccionado<p>\n      </ion-col>\n      <ion-col col-12 padding class="back-black-color">\n        <h4 padding-top no-margin>Lotes</h4>\n        <ion-row padding>\n          <!-- Formato lista-->\n          <ion-col col-sm-12 col-md-10 offset-md-1 class="hidden-sm-down">\n            <ion-list>\n              <ion-item ion-item *ngFor="let lote of lotes">\n                <ion-row align-items-center>\n                  <ion-col col-sm-12 col-md-1>\n                    <ion-row>\n                      <ion-col col-sm-12 col-md-12 text-center>\n                        <ion-icon class="size-icon" name="information-circle"></ion-icon>\n                      </ion-col>\n                      <ion-col col-sm-12 col-md-12>\n                        <p text-center>{{lote.nroLote}}</p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                  <ion-col col-sm-12 col-md-1>\n                    <ion-row>\n                      <ion-col col-sm-12 col-md-12 text-center>\n                        <ion-icon class="size-icon" name="cube"></ion-icon>\n                      </ion-col>\n                      <ion-col col-sm-12 col-md-12>\n                        <p text-center>{{lote.cantBins}} Bins</p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                  <ion-col col-sm-12 col-md-2> \n                    <ion-row>\n                      <ion-col col-sm-12 col-md-12 text-center>\n                        <ion-icon class="size-icon" name="podium"></ion-icon>\n                      </ion-col>\n                      <ion-col col-sm-12 col-md-12>\n                        <p text-center>{{lote.pesoNeto}} Kg</p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                  <ion-col col-sm-12 col-md-1> \n                    <ion-row>\n                      <ion-col col-sm-12 col-md-12 text-center>\n                        <ion-icon class="size-icon" name="rose"></ion-icon>\n                      </ion-col>\n                      <ion-col col-sm-12 col-md-12>\n                        <p text-center>{{lote.especy.tipo}}</p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                  <ion-col col-sm-12 col-md-2>\n                    <ion-row>\n                      <ion-col col-sm-12 col-md-12 text-center>\n                        <ion-icon class="size-icon" name="flower"></ion-icon>\n                      </ion-col>\n                      <ion-col col-sm-12 col-md-12>\n                        <p text-center>{{lote.variedad.tipo}}</p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                  <ion-col col-sm-12 col-md-1>\n                    <ion-row>\n                      <ion-col col-sm-12 col-md-12 text-center>\n                        <ion-icon class="size-icon" name="star-half"></ion-icon>\n                      </ion-col>\n                      <ion-col col-sm-12 col-md-12>\n                        <p text-center>{{lote.calidad.tipo}}</p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                  <ion-col col-sm-12 col-md-2>\n                    <ion-row>\n                      <ion-col col-sm-12 col-md-12 text-center>\n                        <ion-icon class="size-icon" name="color-fill"></ion-icon>\n                      </ion-col>\n                      <ion-col col-sm-12 col-md-12>\n                        <p text-center>{{lote.tratamiento.tipo}}</p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                  <ion-col col-sm-12 col-md-1>\n                    <ion-row>\n                      <ion-col col-sm-12 col-md-12 text-center>\n                        <ion-icon class="size-icon" name="grid"></ion-icon>\n                      </ion-col>\n                      <ion-col col-sm-12 col-md-12>\n                        <p text-center>{{lote.cuadro.up}}</p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                  <ion-col col-sm-12 col-md-1>\n                    <ion-row>\n                      <ion-col col-sm-12 col-md-6>\n                        <button ion-button color="semiDark" round icon-only small (click)="goToEditLote(lote)">\n                          <ion-icon name="create"></ion-icon>\n                        </button>\n                      </ion-col>\n                      <ion-col col-sm-12 col-md-6>\n                        <button ion-button color="semiDark" round icon-only small \n                          (click)="alertDeleteLote(lote.id)">\n                          <ion-icon name="trash"></ion-icon>\n                        </button>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                </ion-row>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n\n          <!-- Formato Card-->\n          <ion-col *ngFor="let lote of lotes" padding offset-sm-1 col-sm-10 col-12 class="hidden-md-up">\n            <ion-list>\n              <ion-item class="no-border">\n                <ion-card>\n                  <ion-card-header no-padding no-margin class="card-hearder-color no-border">\n                    <ion-row>\n                      <ion-col col-md-6 no-padding>\n                        <h2 margin text-center style="color: white">Lote Nro {{lote.nroLote}}</h2>\n                      </ion-col>\n                      <ion-col col-md-6 no-padding> \n                        <ion-buttons right>\n                          <button ion-button clear color="white" icon-only small (click)="goToEditLote(lote)">\n                            <ion-icon name="create"></ion-icon>\n                          </button>\n                          <button ion-button clear color="white" icon-only small (click)="alertDeleteLote(lote.id)">\n                            <ion-icon name="trash"></ion-icon>\n                          </button>\n                        </ion-buttons>\n                      </ion-col>\n                    </ion-row>\n                  </ion-card-header>\n                  <ion-card-content>\n                    <ion-list no-padding no-margin>\n                      <ion-item class="no-border">\n                        <ion-icon name="cube" item-start></ion-icon>\n                        {{lote.cantBins}} Bins\n                      </ion-item>\n                      <ion-item class="no-border">\n                        <ion-icon name="podium" item-start></ion-icon>\n                        {{lote.pesoNeto}} Kgs\n                      </ion-item>\n                      <ion-item class="no-border">\n                        <ion-icon name="rose" item-start></ion-icon>\n                        {{lote.especy.tipo}}\n                      </ion-item>\n                      <ion-item class="no-border">\n                        <ion-icon name="flower" item-start></ion-icon>\n                        {{lote.variedad.tipo}}\n                      </ion-item>\n                      <ion-item class="no-border">\n                        <ion-icon name="star-half" item-start></ion-icon>\n                        {{lote.calidad.tipo}}\n                      </ion-item>\n                      <ion-item class="no-border">\n                        <ion-icon name="color-fill" item-start></ion-icon>\n                        {{lote.tratamiento.tipo}}\n                      </ion-item>\n                      <ion-item class="no-border">\n                        <ion-icon name="grid" item-start></ion-icon>\n                        {{lote.cuadro.up}}\n                      </ion-item>\n                    </ion-list>\n                  </ion-card-content>\n                </ion-card>\n              </ion-item>\n            </ion-list>    \n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\lotes-list\lotes-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_lotes_service_lotes_service__["a" /* LotesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LotesList);
    return LotesList;
}());

//# sourceMappingURL=lotes-list.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditLote; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_lotes_service_lotes_service__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_calidades_service_calidades_service__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_especie_service_especie_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_variedades_service_variedades_service__ = __webpack_require__(388);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditLote = (function () {
    function EditLote(navCtrl, navParams, LotesServiceProvider, CalidadesServiceProvider, EspecieServiceProvider, VariedadesServiceProvider, AlertController) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.LotesServiceProvider = LotesServiceProvider;
        this.CalidadesServiceProvider = CalidadesServiceProvider;
        this.EspecieServiceProvider = EspecieServiceProvider;
        this.VariedadesServiceProvider = VariedadesServiceProvider;
        this.AlertController = AlertController;
        this.lote = [];
        this.calidades = [];
        this.variedades = [];
        this.especies = [];
        this.lote = this.navParams.get('lote');
        this.CalidadesServiceProvider.getAllCalidades().subscribe(function (data) { return _this.calidades = data; });
        this.EspecieServiceProvider.getAllEmpecies().subscribe(function (data) { return _this.especies = data; });
        var especieId = this.lote['especy'].id;
        this.VariedadesServiceProvider.getAllVariedades(especieId).subscribe(function (data) { return _this.variedades = data; });
    }
    EditLote.prototype.editLote = function () {
        var _this = this;
        this.LotesServiceProvider.editLote(this.lote).subscribe(function (data) { return _this.alertEditLote(data.error); });
    };
    EditLote.prototype.destroyView = function () {
        this.navCtrl.pop();
    };
    EditLote.prototype.calidadChange = function (event, lote) {
        lote.calidadId = event.value.id;
    };
    EditLote.prototype.especieChange = function (event, lote) {
        var _this = this;
        lote.especieId = event.value.id;
        this.VariedadesServiceProvider.getAllVariedades(lote.especieId).subscribe(function (data) { return _this.variedades = data; });
        this.lote['variedad'] = [];
    };
    EditLote.prototype.variedadChange = function (event, lote) {
        lote.variedadId = event.value.id;
    };
    EditLote.prototype.alertEditLote = function (error) {
        var _this = this;
        var alert;
        if (!error) {
            alert = this.AlertController.create({
                title: 'Edicion exitosa',
                message: 'Se ha editado correctamente el lote.',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function () {
                            _this.destroyView();
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
                        handler: function () { }
                    }
                ]
            });
        }
        alert.present();
    };
    EditLote = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-lote',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-lote\edit-lote.html"*/'<ion-header>\n  <ion-navbar color="cultivos">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Editar Lote</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="back-color">\n    <ion-grid>\n        <ion-row>\n            <ion-col col-sm-12 col-md-12 padding>\n              <h1 text-center>Editar Lote</h1>\n              <p text-center>Ingrese los datos necesarios para editar un lote de fruta existente.</p>\n            </ion-col>\n            <ion-col col-sm-12 col-md-12 padding class="back-black-color">\n                <h3 padding-top no-margin>Datos generales del Lote</h3>\n            	<form (ngSubmit)="editLote()">\n            	    <ion-grid>\n                        <ion-row>\n                            <ion-col col-sm-12 col-md-12 padding-bottom>\n                                <ion-row>\n                                    <ion-item col-sm-12 col-md-4 class="no-border">\n                                      <ion-label stacked>Numero Lote</ion-label>\n                                      <ion-input type="text" [(ngModel)]="lote.nroLote" name="nroRemito"></ion-input>\n                                    </ion-item>\n                                    <ion-item col-sm-12 col-md-4 class="no-border">\n                                      <ion-label stacked>Cantidad Bins</ion-label>\n                                      <ion-input type="number" [value]="lote.cantBins" (input)="lote.cantBins = $event.target.value" name="cantBins"></ion-input>\n                                    </ion-item>\n                                    <ion-item col-sm-12 col-md-4 class="no-border">\n                                      <ion-label stacked>Peso</ion-label>\n                                      <ion-input type="number" [value]="lote.pesoNeto" (input)="lote.pesoNeto = $event.target.value" name="pesoNeto"></ion-input>\n                                    </ion-item>\n                                </ion-row>\n                                <ion-col col-sm-12 col-md-12 no-padding>\n                                    <ion-item class="no-border">\n                                        <select-searchable\n                                            [(ngModel)]="lote.calidad"\n                                            name="calidad"\n                                            title="Calidades"\n                                            itemValueField="id"\n                                            itemTextField="tipo"\n                                            [items]="calidades"\n                                            [canSearch]="true"\n                                            (onChange)="calidadChange($event,lote)">\n                                        </select-searchable>\n                                    </ion-item>\n                                </ion-col>\n                                <ion-col col-sm-12 col-md-12 no-padding>\n                                    <ion-item class="no-border">\n                                        <select-searchable\n                                            [(ngModel)]="lote.especy"\n                                            name="especie"\n                                            title="Especies"\n                                            itemValueField="id"\n                                            itemTextField="tipo"\n                                            [items]="especies"\n                                            [canSearch]="true"\n                                            (onChange)="especieChange($event,lote)">\n                                        </select-searchable>\n                                    </ion-item>\n                                </ion-col>\n                                <ion-col col-sm-12 col-md-12 no-padding>\n                                    <ion-item class="no-border">\n                                        <select-searchable\n                                            [(ngModel)]="lote.variedad"\n                                            name="variedad"\n                                            title="Variedades"\n                                            itemValueField="id"\n                                            itemTextField="tipo"\n                                            [items]="variedades"\n                                            [canSearch]="true"\n                                            (onChange)="variedadChange($event,lote)">\n                                        </select-searchable>\n                                    </ion-item>\n                                </ion-col>\n                            </ion-col>\n                            <ion-col col-sm-12 col-md-12 padding>\n                                <ion-buttons left>\n                                    <button ion-button color="semiDark" type="submit">Editar</button>\n                                </ion-buttons>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n            	</form>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-lote\edit-lote.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_lotes_service_lotes_service__["a" /* LotesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_calidades_service_calidades_service__["a" /* CalidadesServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_especie_service_especie_service__["a" /* EspecieServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_variedades_service_variedades_service__["a" /* VariedadesServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EditLote);
    return EditLote;
}());

//# sourceMappingURL=edit-lote.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariedadesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VariedadesServiceProvider = (function () {
    function VariedadesServiceProvider(http) {
        this.http = http;
        this.urlAPI = __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__["a" /* urlAPI */] + '/variedad';
    }
    VariedadesServiceProvider.prototype.getAllVariedades = function (especieId) {
        return this.http.get(this.urlAPI + '/' + especieId)
            .map(this.extractData)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    VariedadesServiceProvider.prototype.catchError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || "Server Error");
    };
    VariedadesServiceProvider.prototype.extractData = function (res) {
        return res.json().data;
    };
    VariedadesServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], VariedadesServiceProvider);
    return VariedadesServiceProvider;
}());

//# sourceMappingURL=variedades-service.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewViaje; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ingresos_service_ingresos_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_camiones_service_camiones_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_instituciones_service_instituciones_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_viajes_service_viajes_service__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_ingresos_list_ingresos_list__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NewViaje = (function () {
    function NewViaje(navCtrl, navParams, AuthServiceProvider, IngresosServiceProvider, ViajesServiceProvider, CamionesServiceProvider, InstitucionesServiceProvider, AlertController) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.AuthServiceProvider = AuthServiceProvider;
        this.IngresosServiceProvider = IngresosServiceProvider;
        this.ViajesServiceProvider = ViajesServiceProvider;
        this.CamionesServiceProvider = CamionesServiceProvider;
        this.InstitucionesServiceProvider = InstitucionesServiceProvider;
        this.AlertController = AlertController;
        this.ingresos = [];
        this.viaje = { fecha: this.formatDate(), costo: 0, createdFor: this.AuthServiceProvider.getCurrentUser().email,
            institucionId: 0, camionId: 0, camiones: [], camion: {}, instituciones: [], institucion: {}, ingresos: [] };
        this.ingresos = this.navParams.get('ingresos');
        this.InstitucionesServiceProvider.getAllInstituciones().subscribe(function (data) { return _this.viaje.instituciones = data; });
        this.CamionesServiceProvider.getAllCamiones().subscribe(function (data) { return _this.viaje.camiones = data; });
    }
    NewViaje.prototype.camionChange = function (event) {
        this.viaje.camionId = event.value.id;
    };
    NewViaje.prototype.institucionChange = function (event) {
        this.viaje.institucionId = event.value.id;
    };
    NewViaje.prototype.addNewViaje = function () {
        var _this = this;
        this.viaje.ingresos = this.ingresos;
        this.ViajesServiceProvider.addNewViajeWithIngresos(this.viaje).subscribe(function (data) { return _this.alertSuccess(data); });
    };
    NewViaje.prototype.finishAdding = function () {
        this.navCtrl.pop();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_ingresos_list_ingresos_list__["a" /* IngresosList */]);
    };
    NewViaje.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    NewViaje.prototype.formatDate = function () {
        var fecha = new Date();
        return fecha.getFullYear() + "-" + fecha.getMonth() + 1 + "-" + fecha.getDate();
    };
    NewViaje.prototype.alertSuccess = function (data) {
        var _this = this;
        var alert;
        if (JSON.parse(data._body).error) {
            alert = this.AlertController.create({
                title: 'Error',
                message: 'No se ha podido llevar a cabo los nuevos ingresos. Revise los datos ingresados y pruebe nuevamente.',
                buttons: [
                    {
                        text: 'Aceptar',
                        role: 'aceptar',
                        handler: function () { }
                    }
                ]
            });
        }
        else {
            alert = this.AlertController.create({
                title: 'Exito',
                message: 'Se han cargado correctamente los datos.',
                buttons: [
                    {
                        text: 'Aceptar',
                        role: 'aceptar',
                        handler: function () {
                            _this.finishAdding();
                        }
                    }
                ]
            });
        }
        alert.present();
    };
    NewViaje = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-viaje',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-viaje\new-viaje.html"*/'<ion-header>\n  <ion-navbar color="cultivos" hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Nuevo Viaje</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="back-color">\n    <ion-grid>\n        <ion-row>\n            <ion-col col-sm-12 col-md-12 padding>\n              <h1 text-center>Nuevo Viaje</h1>\n              <p text-center>Ingrese los datos necesarios para generar un nuevo viaje</p>\n            </ion-col>\n            <ion-col col-sm-12 col-md-12 padding class="back-black-color">\n                <h3 padding-top no-margin>Datos generales del Viaje</h3>\n            	<form (ngSubmit)="addNewViaje()">\n            	    <ion-grid>\n                        <ion-row>\n                            <ion-col col-sm-12 col-md-12 padding-bottom>\n                                <ion-row>\n                                    <ion-item col-sm-12 col-md-6 class="no-border">\n                                      <ion-label stacked>Fecha</ion-label>\n                                      <ion-input type="date" [value]="viaje.fecha" (input)="viaje.fecha = $event.target.value" name="fecha"></ion-input>\n                                    </ion-item>\n                                    <ion-item col-sm-12 col-md-6 class="no-border">\n                                      <ion-label stacked>Costo</ion-label>\n                                      <ion-input type="number" [(ngModel)]="viaje.costo" name="costo">\n                                      </ion-input>\n                                    </ion-item>\n                                </ion-row>\n                                <ion-item class="no-border">\n                                    <select-searchable\n                                        [(ngModel)]="viaje.institucion"\n                                        name="institucion"\n                                        title="Instituciones"\n                                        itemValueField="id"\n                                        itemTextField="nombre"\n                                        [items]="viaje.instituciones"\n                                        [canSearch]="true"\n                                        (onChange)="institucionChange($event)">\n                                    </select-searchable>\n                                </ion-item>\n                                <ion-item class="no-border">\n                                    <select-searchable\n                                        [(ngModel)]="viaje.camion"\n                                        name="camion"\n                                        title="Camiones"\n                                        itemValueField="id"\n                                        itemTextField="nombreChofer"\n                                        [items]="viaje.camiones"\n                                        [canSearch]="true"\n                                        (onChange)="camionChange($event)">\n                                    </select-searchable>\n                                </ion-item>\n                            </ion-col>\n                            <ion-col col-sm-12 col-md-12 padding>\n                                <ion-buttons right>\n                                    <button ion-button color="semiDark" type="button" (click)="goBack()">Volver</button>\n                                    <button ion-button color="semiDark" type="submit">Finalizar</button>\n                                </ion-buttons>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n            	</form>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-viaje\new-viaje.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_ingresos_service_ingresos_service__["a" /* IngresosServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_viajes_service_viajes_service__["a" /* ViajesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_camiones_service_camiones_service__["a" /* CamionesServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_instituciones_service_instituciones_service__["a" /* InstitucionesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], NewViaje);
    return NewViaje;
}());

//# sourceMappingURL=new-viaje.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViajesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViajesServiceProvider = (function () {
    function ViajesServiceProvider(http) {
        this.http = http;
        this.urlAPI = __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__["a" /* urlAPI */] + '/viaje';
    }
    ViajesServiceProvider.prototype.getAllViajes = function () {
        return this.http.get(this.urlAPI)
            .map(this.extractData)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    ViajesServiceProvider.prototype.addNewViaje = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.post(this.urlAPI, data, options)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    ViajesServiceProvider.prototype.addNewViajeWithIngresos = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.post(this.urlAPI + '/withIngresos', data, options)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    ViajesServiceProvider.prototype.editViaje = function (viaje) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.put(this.urlAPI + '/' + viaje.id, viaje, options)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    ViajesServiceProvider.prototype.deleteViaje = function (viajeId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.delete(this.urlAPI + '/' + viajeId, options)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    ViajesServiceProvider.prototype.catchError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || "Server Error");
    };
    ViajesServiceProvider.prototype.extractData = function (res) {
        return res.json().data;
    };
    ViajesServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ViajesServiceProvider);
    return ViajesServiceProvider;
}());

//# sourceMappingURL=viajes-service.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TratamientosServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TratamientosServiceProvider = (function () {
    function TratamientosServiceProvider(http) {
        this.http = http;
        this.urlAPI = __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__["a" /* urlAPI */] + '/tratamiento';
    }
    TratamientosServiceProvider.prototype.getAllTratamientos = function () {
        return this.http.get(this.urlAPI)
            .map(this.extractData)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    TratamientosServiceProvider.prototype.catchError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || "Server Error");
    };
    TratamientosServiceProvider.prototype.extractData = function (res) {
        return res.json().data;
    };
    TratamientosServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], TratamientosServiceProvider);
    return TratamientosServiceProvider;
}());

//# sourceMappingURL=tratamientos-service.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewProductor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_productores_service_productores_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_chacras_service_chacras_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_productoresList_productoresList__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewProductor = (function () {
    function NewProductor(navCtrl, navParams, ProductoresServiceProvider, ChacrasServiceProvider, AlertController) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ProductoresServiceProvider = ProductoresServiceProvider;
        this.ChacrasServiceProvider = ChacrasServiceProvider;
        this.AlertController = AlertController;
        this.productor = { nombre: '', dni: '', telefono: '', chacras_ids: [] };
        this.chacras = [];
        this.ChacrasServiceProvider.getAllChacras().subscribe(function (data) { return _this.chacras = data; });
    }
    NewProductor.prototype.addNewProductor = function () {
        var _this = this;
        this.ProductoresServiceProvider.addNewProductor(this.productor).subscribe(function (data) { return _this.alertNewProductor(data.error); });
    };
    NewProductor.prototype.alertNewProductor = function (error) {
        var _this = this;
        var alert;
        if (!error) {
            alert = this.AlertController.create({
                title: 'Creacion exitosa',
                message: 'Se ha creado correctamente el nuevo productor.',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function () {
                            _this.destroyView();
                        }
                    }
                ]
            });
        }
        else {
            alert = this.AlertController.create({
                title: 'Error',
                message: 'Se ha producido un error al intentar ingresar el nuevo productor.',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function () { }
                    }
                ]
            });
        }
        alert.present();
    };
    NewProductor.prototype.destroyView = function () {
        this.navCtrl.pop();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_productoresList_productoresList__["a" /* ProductoresList */]);
    };
    NewProductor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-productor',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-productor\new-productor.html"*/'<ion-header>\n  <ion-navbar color="cultivos" hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Nuevo Productor</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="back-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-sm-12 col-md-12 padding>\n        <h1 text-center>Nuevo Productor</h1>\n        <p text-center>Ingrese los datos necesarios para generar un nuevo productor.</p>\n      </ion-col>\n      <ion-col col-sm-12 col-md-12 padding class="back-black-color">\n        <h3 padding-top no-margin>Datos generales del productor</h3>\n        <form (ngSubmit)="addNewProductor()">\n          <ion-grid>\n            <ion-row>\n              <ion-col col-sm-12 col-md-12 padding-bottom>\n                <ion-row>\n                  <ion-item col-sm-12 col-md-6 class="no-border">\n                    <ion-label stacked>Nombre</ion-label>\n                    <ion-input type="text" [(ngModel)]="productor.nombre" name="name"></ion-input>\n                  </ion-item>\n                  <ion-item col-sm-12 col-md-6 class="no-border">\n                    <ion-label stacked>DNI</ion-label>\n                    <ion-input type="text" [(ngModel)]="productor.dni" name="dni"></ion-input>\n                  </ion-item>\n                  <ion-item col-sm-12 col-md-6 class="no-border">\n                    <ion-label stacked>Telefono</ion-label>\n                    <ion-input type="number" [(ngModel)]="productor.telefono" name="telefono"></ion-input>\n                  </ion-item>\n                  <ion-item col-sm-12 col-md-6 class="no-border">\n                    <ion-label stacked>Chacras</ion-label>\n                    <ion-select [(ngModel)]="productor.chacras_ids" multiple="true" cancelText="Cancelar" okText="Aceptar" name="chacras_ids">\n                      <ion-option *ngFor="let chacra of chacras" [value] = "chacra.id" >{{chacra.nombre}}</ion-option>\n                    </ion-select>\n                  </ion-item>\n                  <ion-col col-sm-12 col-md-12 padding>\n                    <ion-buttons right>\n                        <button ion-button type="submit" color="semiDark">Agregar</button>\n                    </ion-buttons>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-productor\new-productor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_productores_service_productores_service__["a" /* ProductoresServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_chacras_service_chacras_service__["a" /* ChacrasServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], NewProductor);
    return NewProductor;
}());

//# sourceMappingURL=new-productor.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditChacra; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chacras_service_chacras_service__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditChacra = (function () {
    function EditChacra(navCtrl, navParams, ChacrasServiceProvider, AlertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ChacrasServiceProvider = ChacrasServiceProvider;
        this.AlertController = AlertController;
        this.chacra = [];
        this.chacra = this.navParams.get('chacra');
    }
    EditChacra.prototype.editChacra = function (chacra) {
        var _this = this;
        this.ChacrasServiceProvider.editChacra(this.chacra).subscribe(function (data) { return _this.alertEditChacra(data.error); });
    };
    EditChacra.prototype.alertEditChacra = function (error) {
        var _this = this;
        var alert;
        if (!error) {
            alert = this.AlertController.create({
                title: 'Edicion exitosa',
                message: 'Se ha editado correctamente la chacra.',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function () {
                            _this.destroyView();
                        }
                    }
                ]
            });
        }
        else {
            alert = this.AlertController.create({
                title: 'Error',
                message: 'Se ha producido un error al intentar editar la chacra.',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function () { }
                    }
                ]
            });
        }
        alert.present();
    };
    EditChacra.prototype.destroyView = function () {
        this.navCtrl.pop();
    };
    EditChacra = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-chacra',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-chacra\edit-chacra.html"*/'<ion-header>\n  <ion-navbar color="cultivos">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Editar Chacra</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="back-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-sm-12 col-md-12 padding>\n        <h1 text-center>Editar Chacra</h1>\n        <p text-center>Ingrese los datos necesarios para editar una chacra existente.</p>\n      </ion-col>\n      <ion-col col-sm-12 col-md-12 padding class="back-black-color">\n        <h3 padding-top no-margin>Datos generales de la Chacra</h3>\n        <form (ngSubmit)="editChacra()">\n          <ion-grid>\n            <ion-row>\n              <ion-col col-sm-12 col-md-12 padding-bottom>\n                <ion-row>\n                  <ion-item col-sm-12 col-md-6 class="no-border">\n                    <ion-label stacked>Nombre</ion-label>\n                    <ion-input type="text" [(ngModel)]="chacra.nombre" name="name"></ion-input>\n                  </ion-item>\n                  <ion-item col-sm-12 col-md-6 class="no-border">\n                    <ion-label stacked>Renspa</ion-label>\n                    <ion-input type="text" [(ngModel)]="chacra.renspa" name="renspa"></ion-input>\n                  </ion-item>\n                  <ion-col col-sm-12 col-md-12 padding>\n                    <ion-buttons right>\n                        <button ion-button type="submit" color="semiDark">Editar</button>\n                    </ion-buttons>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-chacra\edit-chacra.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_chacras_service_chacras_service__["a" /* ChacrasServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EditChacra);
    return EditChacra;
}());

//# sourceMappingURL=edit-chacra.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewChacra; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chacras_service_chacras_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_chacras_list_chacras_list__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewChacra = (function () {
    function NewChacra(navCtrl, navParams, ChacrasServiceProvider, AlertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ChacrasServiceProvider = ChacrasServiceProvider;
        this.AlertController = AlertController;
        this.chacra = { nombre: '', renspa: '' };
    }
    NewChacra.prototype.addNewChacra = function () {
        var _this = this;
        this.ChacrasServiceProvider.addNewChacra(this.chacra).subscribe(function (data) { return _this.alertNewChacra(data.error); });
    };
    NewChacra.prototype.alertNewChacra = function (error) {
        var _this = this;
        var alert;
        if (!error) {
            alert = this.AlertController.create({
                title: 'Creacion exitosa',
                message: 'Se ha creado correctamente la nueva chacra.',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function () {
                            _this.destroyView();
                        }
                    }
                ]
            });
        }
        else {
            alert = this.AlertController.create({
                title: 'Error',
                message: 'Se ha producido un error al intentar ingresar la nueva chacra.',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function () { }
                    }
                ]
            });
        }
        alert.present();
    };
    NewChacra.prototype.destroyView = function () {
        this.navCtrl.pop();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_chacras_list_chacras_list__["a" /* ChacrasList */]);
    };
    NewChacra = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-chacra',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-chacra\new-chacra.html"*/'<ion-header>\n  <ion-navbar color="cultivos" hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Nueva Chacra</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="back-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-sm-12 col-md-12 padding>\n        <h1 text-center>Nueva Chacra</h1>\n        <p text-center>Ingrese los datos necesarios para generar una nueva chacra.</p>\n      </ion-col>\n      <ion-col col-sm-12 col-md-12 padding class="back-black-color">\n        <h3 padding-top no-margin>Datos generales de la Chacra</h3>\n        <form (ngSubmit)="addNewChacra()">\n          <ion-grid>\n            <ion-row>\n              <ion-col col-sm-12 col-md-12 padding-bottom>\n                <ion-row>\n                  <ion-item col-sm-12 col-md-6 class="no-border">\n                    <ion-label stacked>Nombre</ion-label>\n                    <ion-input type="text" [(ngModel)]="chacra.nombre" name="name"></ion-input>\n                  </ion-item>\n                  <ion-item col-sm-12 col-md-6 class="no-border">\n                    <ion-label stacked>Renspa</ion-label>\n                    <ion-input type="text" [(ngModel)]="chacra.renspa" name="renspa"></ion-input>\n                  </ion-item>\n                  <ion-col col-sm-12 col-md-12 padding>\n                    <ion-buttons right>\n                        <button ion-button type="submit" color="semiDark">Agregar</button>\n                    </ion-buttons>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-chacra\new-chacra.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_chacras_service_chacras_service__["a" /* ChacrasServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], NewChacra);
    return NewChacra;
}());

//# sourceMappingURL=new-chacra.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewCamion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_camiones_service_camiones_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_camiones_list_camiones_list__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewCamion = (function () {
    function NewCamion(navCtrl, navParams, CamionesServiceProvider, AlertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.CamionesServiceProvider = CamionesServiceProvider;
        this.AlertController = AlertController;
        this.camion = { patenteChasis: '', patenteAcoplado: '', nombreChofer: '' };
    }
    NewCamion.prototype.addNewCamion = function () {
        var _this = this;
        this.CamionesServiceProvider.addNewCamion(this.camion).subscribe(function (data) { return _this.alertNewCamion(data.error); });
    };
    NewCamion.prototype.alertNewCamion = function (error) {
        var _this = this;
        var alert;
        if (!error) {
            alert = this.AlertController.create({
                title: 'Creacion exitosa',
                message: 'Se ha creado correctamente el nuevo camion.',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function () {
                            _this.destroyView();
                        }
                    }
                ]
            });
        }
        else {
            alert = this.AlertController.create({
                title: 'Error',
                message: 'Se ha producido un error al intentar ingresar el nuevo camion.',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function () { }
                    }
                ]
            });
        }
        alert.present();
    };
    NewCamion.prototype.destroyView = function () {
        this.navCtrl.pop();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_camiones_list_camiones_list__["a" /* CamionesList */]);
    };
    NewCamion = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-camion',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-camion\new-camion.html"*/'<ion-header>\n  <ion-navbar color="cultivos" hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Nuevo Camion</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="back-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-sm-12 col-md-12 padding>\n        <h1 text-center>Nuevo Camion</h1>\n        <p text-center>Ingrese los datos necesarios para generar un nuevo camion.</p>\n      </ion-col>\n      <ion-col col-sm-12 col-md-12 padding class="back-black-color">\n        <h3 padding-top no-margin>Datos generales del camion</h3>\n        <form (ngSubmit)="addNewCamion()">\n          <ion-grid>\n            <ion-row>\n              <ion-col col-sm-12 col-md-12 padding-bottom>\n                <ion-row>\n                  <ion-item col-sm-12 col-md-12 class="no-border">\n                    <ion-label stacked>Nombre Chofer</ion-label>\n                    <ion-input type="text" [(ngModel)]="camion.nombreChofer" name="nombreChofer"></ion-input>\n                  </ion-item>\n                  <ion-item col-sm-12 col-md-6 class="no-border">\n                    <ion-label stacked>Patente Acoplado</ion-label>\n                    <ion-input type="text" [(ngModel)]="camion.patenteAcoplado" name="patenteAcoplado"></ion-input>\n                  </ion-item>\n                  <ion-item col-sm-12 col-md-6 class="no-border">\n                    <ion-label stacked>Patente Chasis</ion-label>\n                    <ion-input type="text" [(ngModel)]="camion.patenteChasis" name="patenteChasis"></ion-input>\n                  </ion-item>\n                  <ion-col col-sm-12 col-md-12 padding>\n                    <ion-buttons right>\n                        <button ion-button type="submit" color="semiDark">Agregar</button>\n                    </ion-buttons>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-camion\new-camion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_camiones_service_camiones_service__["a" /* CamionesServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], NewCamion);
    return NewCamion;
}());

//# sourceMappingURL=new-camion.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewEmpresa; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_empresas_list_empresas_list__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_empresas_service_empresas_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_camiones_service_camiones_service__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewEmpresa = (function () {
    function NewEmpresa(navCtrl, navParams, CamionesServiceProvider, EmpresasServiceProvider, AlertController) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.CamionesServiceProvider = CamionesServiceProvider;
        this.EmpresasServiceProvider = EmpresasServiceProvider;
        this.AlertController = AlertController;
        this.empresa = { nombre: '', direcccion: '', telefono: '', camiones_ids: [] };
        this.camiones = [];
        this.CamionesServiceProvider.getAllCamiones().subscribe(function (data) { return _this.camiones = data; });
    }
    NewEmpresa.prototype.addNewEmpresa = function () {
        var _this = this;
        this.EmpresasServiceProvider.addNewEmpresa(this.empresa).subscribe(function (data) { return _this.alertNewEmpresa(data.error); });
    };
    NewEmpresa.prototype.alertNewEmpresa = function (error) {
        var _this = this;
        var alert;
        if (!error) {
            alert = this.AlertController.create({
                title: 'Creacion exitosa',
                message: 'Se ha creado correctamente la nueva empresa.',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function () {
                            _this.destroyView();
                        }
                    }
                ]
            });
        }
        else {
            alert = this.AlertController.create({
                title: 'Error',
                message: 'Se ha producido un error al intentar ingresar la nueva empresa.',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function () { }
                    }
                ]
            });
        }
        alert.present();
    };
    NewEmpresa.prototype.destroyView = function () {
        this.navCtrl.pop();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_empresas_list_empresas_list__["a" /* EmpresasList */]);
    };
    NewEmpresa = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-empresa',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-empresa\new-empresa.html"*/'<ion-header>\n  <ion-navbar color="cultivos" hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Nuevo Empresa</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="back-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-sm-12 col-md-12 padding>\n        <h1 text-center>Nueva Empresa</h1>\n        <p text-center>Ingrese los datos necesarios para generar una nueva empresa.</p>\n      </ion-col>\n      <ion-col col-sm-12 col-md-12 padding class="back-black-color">\n        <h3 padding-top no-margin>Datos generales de la empresa</h3>\n        <form (ngSubmit)="addNewEmpresa()">\n          <ion-grid>\n            <ion-row>\n              <ion-col col-sm-12 col-md-12 padding-bottom>\n                <ion-row>\n                  <ion-item col-sm-12 col-md-6 class="no-border">\n                    <ion-label stacked>Nombre</ion-label>\n                    <ion-input type="text" [(ngModel)]="empresa.nombre" name="name"></ion-input>\n                  </ion-item>\n                  <ion-item col-sm-12 col-md-6 class="no-border">\n                    <ion-label stacked>Direccion</ion-label>\n                    <ion-input type="text" [(ngModel)]="empresa.direccion" name="direccion"></ion-input>\n                  </ion-item>\n                  <ion-item col-sm-12 col-md-6 class="no-border">\n                    <ion-label stacked>Telefono</ion-label>\n                    <ion-input type="number" [(ngModel)]="empresa.telefono" name="telefono"></ion-input>\n                  </ion-item>\n                  <ion-item col-sm-12 col-md-6 class="no-border">\n                    <ion-label stacked>Camiones</ion-label>\n                    <ion-select [(ngModel)]="empresa.camiones_ids" multiple="true" cancelText="Cancelar" okText="Aceptar" name="camiones_ids">\n                      <ion-option *ngFor="let camion of camiones" [value] = "camion.id" >{{camion.nombreChofer}}</ion-option>\n                    </ion-select>\n                  </ion-item>\n                  <ion-col col-sm-12 col-md-12 padding>\n                    <ion-buttons right>\n                        <button ion-button type="submit" color="semiDark">Agregar</button>\n                    </ion-buttons>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-empresa\new-empresa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_camiones_service_camiones_service__["a" /* CamionesServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_empresas_service_empresas_service__["a" /* EmpresasServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], NewEmpresa);
    return NewEmpresa;
}());

//# sourceMappingURL=new-empresa.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewInstitucion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_instituciones_service_instituciones_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_instituciones_list_instituciones_list__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewInstitucion = (function () {
    function NewInstitucion(navCtrl, navParams, InstitucionesServiceProvider, AlertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.InstitucionesServiceProvider = InstitucionesServiceProvider;
        this.AlertController = AlertController;
        this.institucion = { nombre: '', direccion: '', telefono: '' };
    }
    NewInstitucion.prototype.addNewInstitucion = function () {
        var _this = this;
        this.InstitucionesServiceProvider.addNewInstitucion(this.institucion).subscribe(function (data) { return _this.alertNewInstitucion(data.error); });
    };
    NewInstitucion.prototype.alertNewInstitucion = function (error) {
        var _this = this;
        var alert;
        if (!error) {
            alert = this.AlertController.create({
                title: 'Creacion exitosa',
                message: 'Se ha creado correctamente la nueva institucion.',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function () {
                            _this.destroyView();
                        }
                    }
                ]
            });
        }
        else {
            alert = this.AlertController.create({
                title: 'Error',
                message: 'Se ha producido un error al intentar ingresar la nueva institucion.',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function () { }
                    }
                ]
            });
        }
        alert.present();
    };
    NewInstitucion.prototype.destroyView = function () {
        this.navCtrl.pop();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_instituciones_list_instituciones_list__["a" /* InstitucionesList */]);
    };
    NewInstitucion = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-institucion',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-institucion\new-institucion.html"*/'<ion-header>\n  <ion-navbar color="cultivos" hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Nueva Institucion</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="back-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-sm-12 col-md-12 padding>\n        <h1 text-center>Nueva Institucion</h1>\n        <p text-center>Ingrese los datos necesarios para generar una nueva institucion.</p>\n      </ion-col>\n      <ion-col col-sm-12 col-md-12 padding class="back-black-color">\n        <h3 padding-top no-margin>Datos generales de la institucion</h3>\n        <form (ngSubmit)="addNewInstitucion()">\n          <ion-grid>\n            <ion-row>\n              <ion-col col-sm-12 col-md-12 padding-bottom>\n                <ion-row>\n                  <ion-item col-sm-12 col-md-6 class="no-border">\n                    <ion-label stacked>Nombre</ion-label>\n                    <ion-input type="text" [(ngModel)]="institucion.nombre" name="name"></ion-input>\n                  </ion-item>\n                  <ion-item col-sm-12 col-md-6 class="no-border">\n                    <ion-label stacked>Direccion</ion-label>\n                    <ion-input type="text" [(ngModel)]="institucion.direccion" name="direccion"></ion-input>\n                  </ion-item>\n                  <ion-item col-sm-12 col-md-6 class="no-border">\n                    <ion-label stacked>Telefono</ion-label>\n                    <ion-input type="number" [(ngModel)]="institucion.telefono" name="telefono"></ion-input>\n                  </ion-item>\n                  <ion-col col-sm-12 col-md-12 padding>\n                    <ion-buttons right>\n                        <button ion-button type="submit" color="semiDark">Agregar</button>\n                    </ion-buttons>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-institucion\new-institucion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_instituciones_service_instituciones_service__["a" /* InstitucionesServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], NewInstitucion);
    return NewInstitucion;
}());

//# sourceMappingURL=new-institucion.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(403);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_side_menu_content_side_menu_content_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_select_select_module__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_productoresList_productoresList__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_new_productor_new_productor__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_edit_productor_edit_productor__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_chacras_list_chacras_list__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_new_chacra_new_chacra__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_edit_chacra_edit_chacra__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_camiones_list_camiones_list__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_new_camion_new_camion__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_edit_camion_edit_camion__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_empresas_list_empresas_list__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_new_empresa_new_empresa__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_edit_empresa_edit_empresa__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_instituciones_list_instituciones_list__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_new_institucion_new_institucion__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_edit_institucion_edit_institucion__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_new_ingreso_new_ingreso__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_ingresos_list_ingresos_list__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_edit_ingreso_edit_ingreso__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_edit_lote_edit_lote__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_new_viaje_new_viaje__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_viajes_list_viajes_list__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_lotes_list_lotes_list__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_status_bar__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_splash_screen__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_angularfire2__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_angularfire2_auth__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_auth_service_auth_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_camiones_service_camiones_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_empresas_service_empresas_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_instituciones_service_instituciones_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_cuadros_service_cuadros_service__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_ingresos_service_ingresos_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_especie_service_especie_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_calidades_service_calidades_service__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_variedades_service_variedades_service__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__providers_chacras_service_chacras_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_productores_service_productores_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_lotes_service_lotes_service__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_tratamientos_service_tratamientos_service__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__providers_viajes_service_viajes_service__ = __webpack_require__(390);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















































var firebaseConfig = {
    apiKey: "AIzaSyAlCvR3L2sO5B8GFSaRvPRMWD1uU498VgE",
    authDomain: "cultivos-sistema.firebaseapp.com",
    databaseURL: "https://cultivos-sistema.firebaseio.com",
    projectId: "cultivos-sistema",
    storageBucket: "cultivos-sistema.appspot.com",
    messagingSenderId: "1042519531953"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__shared_side_menu_content_side_menu_content_component__["a" /* SideMenuContentComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_productoresList_productoresList__["a" /* ProductoresList */],
                __WEBPACK_IMPORTED_MODULE_9__pages_new_productor_new_productor__["a" /* NewProductor */],
                __WEBPACK_IMPORTED_MODULE_10__pages_edit_productor_edit_productor__["a" /* EditProductor */],
                __WEBPACK_IMPORTED_MODULE_11__pages_chacras_list_chacras_list__["a" /* ChacrasList */],
                __WEBPACK_IMPORTED_MODULE_12__pages_new_chacra_new_chacra__["a" /* NewChacra */],
                __WEBPACK_IMPORTED_MODULE_13__pages_edit_chacra_edit_chacra__["a" /* EditChacra */],
                __WEBPACK_IMPORTED_MODULE_14__pages_camiones_list_camiones_list__["a" /* CamionesList */],
                __WEBPACK_IMPORTED_MODULE_15__pages_new_camion_new_camion__["a" /* NewCamion */],
                __WEBPACK_IMPORTED_MODULE_16__pages_edit_camion_edit_camion__["a" /* EditCamion */],
                __WEBPACK_IMPORTED_MODULE_17__pages_empresas_list_empresas_list__["a" /* EmpresasList */],
                __WEBPACK_IMPORTED_MODULE_18__pages_new_empresa_new_empresa__["a" /* NewEmpresa */],
                __WEBPACK_IMPORTED_MODULE_19__pages_edit_empresa_edit_empresa__["a" /* EditEmpresa */],
                __WEBPACK_IMPORTED_MODULE_20__pages_instituciones_list_instituciones_list__["a" /* InstitucionesList */],
                __WEBPACK_IMPORTED_MODULE_21__pages_new_institucion_new_institucion__["a" /* NewInstitucion */],
                __WEBPACK_IMPORTED_MODULE_22__pages_edit_institucion_edit_institucion__["a" /* EditInstitucion */],
                __WEBPACK_IMPORTED_MODULE_24__pages_ingresos_list_ingresos_list__["a" /* IngresosList */],
                __WEBPACK_IMPORTED_MODULE_23__pages_new_ingreso_new_ingreso__["a" /* NewIngreso */],
                __WEBPACK_IMPORTED_MODULE_25__pages_edit_ingreso_edit_ingreso__["a" /* EditIngreso */],
                __WEBPACK_IMPORTED_MODULE_26__pages_edit_lote_edit_lote__["a" /* EditLote */],
                __WEBPACK_IMPORTED_MODULE_27__pages_new_viaje_new_viaje__["a" /* NewViaje */],
                __WEBPACK_IMPORTED_MODULE_28__pages_viajes_list_viajes_list__["a" /* ViajesList */],
                __WEBPACK_IMPORTED_MODULE_29__pages_lotes_list_lotes_list__["a" /* LotesList */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_33_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_34_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_select_select_module__["a" /* SelectSearchableModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_productoresList_productoresList__["a" /* ProductoresList */],
                __WEBPACK_IMPORTED_MODULE_9__pages_new_productor_new_productor__["a" /* NewProductor */],
                __WEBPACK_IMPORTED_MODULE_10__pages_edit_productor_edit_productor__["a" /* EditProductor */],
                __WEBPACK_IMPORTED_MODULE_11__pages_chacras_list_chacras_list__["a" /* ChacrasList */],
                __WEBPACK_IMPORTED_MODULE_12__pages_new_chacra_new_chacra__["a" /* NewChacra */],
                __WEBPACK_IMPORTED_MODULE_13__pages_edit_chacra_edit_chacra__["a" /* EditChacra */],
                __WEBPACK_IMPORTED_MODULE_14__pages_camiones_list_camiones_list__["a" /* CamionesList */],
                __WEBPACK_IMPORTED_MODULE_15__pages_new_camion_new_camion__["a" /* NewCamion */],
                __WEBPACK_IMPORTED_MODULE_16__pages_edit_camion_edit_camion__["a" /* EditCamion */],
                __WEBPACK_IMPORTED_MODULE_17__pages_empresas_list_empresas_list__["a" /* EmpresasList */],
                __WEBPACK_IMPORTED_MODULE_18__pages_new_empresa_new_empresa__["a" /* NewEmpresa */],
                __WEBPACK_IMPORTED_MODULE_19__pages_edit_empresa_edit_empresa__["a" /* EditEmpresa */],
                __WEBPACK_IMPORTED_MODULE_20__pages_instituciones_list_instituciones_list__["a" /* InstitucionesList */],
                __WEBPACK_IMPORTED_MODULE_21__pages_new_institucion_new_institucion__["a" /* NewInstitucion */],
                __WEBPACK_IMPORTED_MODULE_22__pages_edit_institucion_edit_institucion__["a" /* EditInstitucion */],
                __WEBPACK_IMPORTED_MODULE_24__pages_ingresos_list_ingresos_list__["a" /* IngresosList */],
                __WEBPACK_IMPORTED_MODULE_23__pages_new_ingreso_new_ingreso__["a" /* NewIngreso */],
                __WEBPACK_IMPORTED_MODULE_25__pages_edit_ingreso_edit_ingreso__["a" /* EditIngreso */],
                __WEBPACK_IMPORTED_MODULE_26__pages_edit_lote_edit_lote__["a" /* EditLote */],
                __WEBPACK_IMPORTED_MODULE_27__pages_new_viaje_new_viaje__["a" /* NewViaje */],
                __WEBPACK_IMPORTED_MODULE_28__pages_viajes_list_viajes_list__["a" /* ViajesList */],
                __WEBPACK_IMPORTED_MODULE_29__pages_lotes_list_lotes_list__["a" /* LotesList */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_45__providers_productores_service_productores_service__["a" /* ProductoresServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_44__providers_chacras_service_chacras_service__["a" /* ChacrasServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_35__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_36__providers_camiones_service_camiones_service__["a" /* CamionesServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_37__providers_empresas_service_empresas_service__["a" /* EmpresasServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_38__providers_instituciones_service_instituciones_service__["a" /* InstitucionesServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_39__providers_cuadros_service_cuadros_service__["a" /* CuadrosServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_40__providers_ingresos_service_ingresos_service__["a" /* IngresosServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_41__providers_especie_service_especie_service__["a" /* EspecieServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_42__providers_calidades_service_calidades_service__["a" /* CalidadesServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_43__providers_variedades_service_variedades_service__["a" /* VariedadesServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_46__providers_lotes_service_lotes_service__["a" /* LotesServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_47__providers_tratamientos_service_tratamientos_service__["a" /* TratamientosServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_48__providers_viajes_service_viajes_service__["a" /* ViajesServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuRedirectEvent; });
// SideMenuRedirectEvent constant
var SideMenuRedirectEvent = 'sidemenu:redirect';
//# sourceMappingURL=side-menu-redirect-events.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectSearchableModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_page__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SelectSearchableModule = (function () {
    function SelectSearchableModule() {
    }
    SelectSearchableModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__select__["a" /* SelectSearchable */],
                __WEBPACK_IMPORTED_MODULE_3__select_page__["a" /* SelectSearchablePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__select__["a" /* SelectSearchable */]),
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__select_page__["a" /* SelectSearchablePage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__select__["a" /* SelectSearchable */],
                __WEBPACK_IMPORTED_MODULE_3__select_page__["a" /* SelectSearchablePage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__select__["a" /* SelectSearchable */],
                __WEBPACK_IMPORTED_MODULE_3__select_page__["a" /* SelectSearchablePage */]
            ]
        })
    ], SelectSearchableModule);
    return SelectSearchableModule;
}());

//# sourceMappingURL=select-module.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectSearchable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_page__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var SelectSearchable = (function () {
    function SelectSearchable(navController, ionForm, platform, ionItem) {
        this.navController = navController;
        this.ionForm = ionForm;
        this.platform = platform;
        this.ionItem = ionItem;
        this._items = [];
        this.filterText = '';
        this.value = null;
        this.canSearch = false;
        this.canReset = false;
        this.hasInfiniteScroll = false;
        this.searchPlaceholder = 'Enter 3 or more characters';
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onSearch = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onInfiniteScroll = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.propagateChange = function (_) { };
    }
    SelectSearchable_1 = SelectSearchable;
    Object.defineProperty(SelectSearchable.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (items) {
            // The original reference of the array should be preserved to keep two-way data binding working between SelectSearchable and SelectSearchablePage.
            this._items.splice(0, this._items.length);
            // Add new items to the array.
            Array.prototype.push.apply(this._items, items);
        },
        enumerable: true,
        configurable: true
    });
    SelectSearchable.prototype.isNullOrWhiteSpace = function (value) {
        if (value === null || value === undefined) {
            return true;
        }
        // Convert value to string in case if it's not.
        return value.toString().replace(/\s/g, '').length < 1;
    };
    SelectSearchable.prototype.ngOnInit = function () {
        this.isIos = this.platform.is('ios');
        this.isMd = this.platform.is('android');
        this.hasSearchEvent = this.onSearch.observers.length > 0 && !this.hasInfiniteScroll;
        this.ionForm.register(this);
        if (this.ionItem) {
            this.ionItem.setElementClass('item-select-searchable', true);
        }
    };
    SelectSearchable.prototype.initFocus = function () { };
    SelectSearchable.prototype._click = function (event) {
        if (event.detail === 0) {
            // Don't continue if the click event came from a form submit.
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        this.open();
    };
    SelectSearchable.prototype.select = function (selectedItem) {
        this.value = selectedItem;
        this.emitChange();
    };
    SelectSearchable.prototype.emitChange = function () {
        this.propagateChange(this.value);
        this.onChange.emit({
            component: this,
            value: this.value
        });
    };
    SelectSearchable.prototype.emitSearch = function () {
        this.onSearch.emit({
            component: this,
            text: this.filterText
        });
    };
    SelectSearchable.prototype.open = function () {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_3__select_page__["a" /* SelectSearchablePage */], {
            selectComponent: this,
            navController: this.navController
        });
    };
    SelectSearchable.prototype.reset = function () {
        this.setValue(null);
        this.emitChange();
    };
    SelectSearchable.prototype.formatItem = function (value) {
        if (this.itemTemplate) {
            return this.itemTemplate(value);
        }
        if (this.isNullOrWhiteSpace(value)) {
            return null;
        }
        return this.itemTextField ? value[this.itemTextField] : value.toString();
    };
    SelectSearchable.prototype.formatValue = function () {
        var _this = this;
        if (!this.value) {
            return null;
        }
        if (this.multiple) {
            return this.value.map(function (item) { return _this.formatItem(item); }).join(', ');
        }
        else {
            return this.formatItem(this.value);
        }
    };
    SelectSearchable.prototype.writeValue = function (value) {
        this.setValue(value);
    };
    SelectSearchable.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    SelectSearchable.prototype.registerOnTouched = function (fn) { };
    SelectSearchable.prototype.setDisabledState = function (isDisabled) { };
    SelectSearchable.prototype.ngOnDestroy = function () {
        this.ionForm.deregister(this);
    };
    SelectSearchable.prototype.setValue = function (value) {
        var _this = this;
        this.value = value;
        // Get an item from the list for value.
        // We need this in case value contains only id, which is not sufficient for template rendering.
        if (this.value && !this.isNullOrWhiteSpace(this.value[this.itemValueField])) {
            var selectedItem = this.items.find(function (item) {
                return item[_this.itemValueField] === _this.value[_this.itemValueField];
            });
            if (selectedItem) {
                this.value = selectedItem;
            }
        }
    };
    SelectSearchable.prototype.ngOnChanges = function (changes) {
        if (changes['items'] && this.items.length > 0) {
            this.setValue(this.value);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('items'),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], SelectSearchable.prototype, "items", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], SelectSearchable.prototype, "isSearching", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SelectSearchable.prototype, "itemValueField", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SelectSearchable.prototype, "itemTextField", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SelectSearchable.prototype, "canSearch", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SelectSearchable.prototype, "canReset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SelectSearchable.prototype, "hasInfiniteScroll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SelectSearchable.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SelectSearchable.prototype, "searchPlaceholder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], SelectSearchable.prototype, "onChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], SelectSearchable.prototype, "onSearch", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], SelectSearchable.prototype, "onInfiniteScroll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], SelectSearchable.prototype, "itemTemplate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], SelectSearchable.prototype, "multiple", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [UIEvent]),
        __metadata("design:returntype", void 0)
    ], SelectSearchable.prototype, "_click", null);
    SelectSearchable = SelectSearchable_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'select-searchable',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\shared\select\select.html"*/'<div class="select-searchable-label">{{title}}</div>\n<div class="select-searchable-value">{{formatValue()}}</div>\n<div class="select-searchable-icon">\n    <div class="select-searchable-icon-inner"></div>\n</div>\n<button aria-haspopup="true" ion-button="item-cover" class="item-cover"></button>'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\shared\select\select.html"*/,
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* forwardRef */])(function () { return SelectSearchable_1; }),
                    multi: true
                }],
            host: {
                'class': 'select-searchable',
                '[class.select-searchable-ios]': 'isIos',
                '[class.select-searchable-md]': 'isMd',
                '[class.select-searchable-can-reset]': 'canReset'
            }
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Form */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Item */]])
    ], SelectSearchable);
    return SelectSearchable;
    var SelectSearchable_1;
}());

//# sourceMappingURL=select.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_side_menu_content_side_menu_content_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_productoresList_productoresList__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_new_productor_new_productor__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_chacras_list_chacras_list__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_new_chacra_new_chacra__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_camiones_list_camiones_list__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_new_camion_new_camion__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_empresas_list_empresas_list__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_new_empresa_new_empresa__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_instituciones_list_instituciones_list__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_new_institucion_new_institucion__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_ingresos_list_ingresos_list__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_new_ingreso_new_ingreso__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_auth_service_auth_service__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, authService, menuCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.authService = authService;
        this.menuCtrl = menuCtrl;
        this.sideMenuSettings = {
            accordionMode: false,
            showSelectedOption: false
        };
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            if (_this.authService.authenticated) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* Login */];
            }
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            // Create the options
            _this.options = _this.getSideMenuOptions();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.getCurrentUser = function () {
        this.currentUser = this.authService.getCurrentUser();
    };
    // Initialize the side menu options
    MyApp.prototype.getSideMenuOptions = function () {
        var menuOptions = new Array();
        menuOptions.push({
            displayName: "DashBoard",
            component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]
        });
        menuOptions.push({
            displayName: "Ingresos",
            subItems: [
                {
                    displayName: "Lista Ingresos",
                    iconName: 'crop',
                    component: __WEBPACK_IMPORTED_MODULE_17__pages_ingresos_list_ingresos_list__["a" /* IngresosList */],
                },
                {
                    displayName: "Nuevo Ingreso",
                    iconName: 'add',
                    component: __WEBPACK_IMPORTED_MODULE_18__pages_new_ingreso_new_ingreso__["a" /* NewIngreso */],
                }
            ]
        });
        menuOptions.push({
            displayName: "Productores",
            subItems: [
                {
                    displayName: "Lista Productores",
                    iconName: 'contacts',
                    component: __WEBPACK_IMPORTED_MODULE_7__pages_productoresList_productoresList__["a" /* ProductoresList */],
                },
                {
                    displayName: "Nuevo Productor",
                    iconName: 'add',
                    component: __WEBPACK_IMPORTED_MODULE_8__pages_new_productor_new_productor__["a" /* NewProductor */],
                }
            ]
        });
        menuOptions.push({
            displayName: "Empresas",
            subItems: [
                {
                    displayName: "Lista Empresas",
                    iconName: 'briefcase',
                    component: __WEBPACK_IMPORTED_MODULE_13__pages_empresas_list_empresas_list__["a" /* EmpresasList */],
                },
                {
                    displayName: "Nueva Empresa",
                    iconName: 'add',
                    component: __WEBPACK_IMPORTED_MODULE_14__pages_new_empresa_new_empresa__["a" /* NewEmpresa */],
                }
            ]
        });
        menuOptions.push({
            displayName: "Chacras",
            subItems: [
                {
                    displayName: "Lista Chacras",
                    iconName: 'leaf',
                    component: __WEBPACK_IMPORTED_MODULE_9__pages_chacras_list_chacras_list__["a" /* ChacrasList */],
                },
                {
                    displayName: "Nueva Chacra",
                    iconName: 'add',
                    component: __WEBPACK_IMPORTED_MODULE_10__pages_new_chacra_new_chacra__["a" /* NewChacra */],
                }
            ]
        });
        menuOptions.push({
            displayName: "Camiones",
            subItems: [
                {
                    displayName: "Lista Camiones",
                    iconName: 'bus',
                    component: __WEBPACK_IMPORTED_MODULE_11__pages_camiones_list_camiones_list__["a" /* CamionesList */],
                },
                {
                    displayName: "Nuevo Camion",
                    iconName: 'add',
                    component: __WEBPACK_IMPORTED_MODULE_12__pages_new_camion_new_camion__["a" /* NewCamion */],
                }
            ]
        });
        menuOptions.push({
            displayName: "Instituciones",
            subItems: [
                {
                    displayName: "Lista Instituciones",
                    iconName: 'home',
                    component: __WEBPACK_IMPORTED_MODULE_15__pages_instituciones_list_instituciones_list__["a" /* InstitucionesList */],
                },
                {
                    displayName: "Nueva Institucion",
                    iconName: 'add',
                    component: __WEBPACK_IMPORTED_MODULE_16__pages_new_institucion_new_institucion__["a" /* NewInstitucion */],
                }
            ]
        });
        return menuOptions;
    };
    // Redirect the user to the selected page
    MyApp.prototype.selectOption = function (option) {
        var _this = this;
        this.menuCtrl.close().then(function () {
            // Collapse all the options
            _this.sideMenu.collapseAllOptions();
            // Redirect to the selected page
            _this.nav.push(option.component);
        });
    };
    MyApp.prototype.collapseMenuOptions = function () {
        // Collapse all the options
        this.sideMenu.collapseAllOptions();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__shared_side_menu_content_side_menu_content_component__["a" /* SideMenuContentComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__shared_side_menu_content_side_menu_content_component__["a" /* SideMenuContentComponent */])
    ], MyApp.prototype, "sideMenu", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\app\app.html"*/'<ion-menu persistent="true" [content]="content" (ionClose)="collapseMenuOptions()">\n  <ion-header>\n    <ion-toolbar color="cultivos">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <side-menu-content [settings]="sideMenuSettings" [options]="options" (selectOption)="selectOption($event)" style="padding: 0"></side-menu-content>\n  </ion-content>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_19__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChacrasServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChacrasServiceProvider = (function () {
    function ChacrasServiceProvider(http) {
        this.http = http;
        this.urlAPI = __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__["a" /* urlAPI */] + '/chacra';
    }
    ChacrasServiceProvider.prototype.getAllChacras = function () {
        return this.http.get(this.urlAPI)
            .map(this.extractData)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    ChacrasServiceProvider.prototype.addNewChacra = function (chacra) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.post(this.urlAPI, chacra, options)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    ChacrasServiceProvider.prototype.editChacra = function (chacra) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.put(this.urlAPI + '/' + chacra.id, chacra, options)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    ChacrasServiceProvider.prototype.deleteChacra = function (chacraId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.delete(this.urlAPI + '/' + chacraId, options)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    ChacrasServiceProvider.prototype.catchError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || "Server Error");
    };
    ChacrasServiceProvider.prototype.extractData = function (res) {
        return res.json().data;
    };
    ChacrasServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], ChacrasServiceProvider);
    return ChacrasServiceProvider;
}());

//# sourceMappingURL=chacras-service.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthServiceProvider = (function () {
    function AuthServiceProvider(angularFireAuth) {
        var _this = this;
        this.angularFireAuth = angularFireAuth;
        this.angularFireAuth.authState.subscribe(function (user) {
            _this.user = user;
        });
    }
    Object.defineProperty(AuthServiceProvider.prototype, "authenticated", {
        get: function () {
            return this.user !== null;
        },
        enumerable: true,
        configurable: true
    });
    AuthServiceProvider.prototype.signInWithEmailAndPassword = function (userModel) {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(userModel.email, userModel.password);
    };
    AuthServiceProvider.prototype.createUserWithEmailAndPassword = function (userModel) {
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(userModel.email, userModel.password);
    };
    AuthServiceProvider.prototype.signOut = function () {
        return this.angularFireAuth.auth.signOut();
    };
    AuthServiceProvider.prototype.getCurrentUser = function () {
        return this.angularFireAuth.auth.currentUser;
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModel; });
var UserModel = (function () {
    function UserModel() {
    }
    return UserModel;
}());

//# sourceMappingURL=user-model.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CamionesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CamionesServiceProvider = (function () {
    function CamionesServiceProvider(http) {
        this.http = http;
        this.urlAPI = __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__["a" /* urlAPI */] + '/camion';
    }
    CamionesServiceProvider.prototype.getAllCamiones = function () {
        return this.http.get(this.urlAPI)
            .map(this.extractData)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    CamionesServiceProvider.prototype.addNewCamion = function (camion) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.post(this.urlAPI, camion, options)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    CamionesServiceProvider.prototype.editCamion = function (camion) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.put(this.urlAPI + '/' + camion.id, camion, options)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    CamionesServiceProvider.prototype.deleteCamion = function (camionId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.delete(this.urlAPI + '/' + camionId, options)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    CamionesServiceProvider.prototype.catchError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || "Server Error");
    };
    CamionesServiceProvider.prototype.extractData = function (res) {
        return res.json().data;
    };
    CamionesServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], CamionesServiceProvider);
    return CamionesServiceProvider;
}());

//# sourceMappingURL=camiones-service.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstitucionesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InstitucionesServiceProvider = (function () {
    function InstitucionesServiceProvider(http) {
        this.http = http;
        this.urlAPI = __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__["a" /* urlAPI */] + '/institucion';
    }
    InstitucionesServiceProvider.prototype.getAllInstituciones = function () {
        return this.http.get(this.urlAPI)
            .map(this.extractData)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    InstitucionesServiceProvider.prototype.addNewInstitucion = function (institucion) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.post(this.urlAPI, institucion, options)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    InstitucionesServiceProvider.prototype.editInstitucion = function (institucion) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.put(this.urlAPI + '/' + institucion.id, institucion, options)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    InstitucionesServiceProvider.prototype.deleteInstitucion = function (institucionId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.delete(this.urlAPI + '/' + institucionId, options)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    InstitucionesServiceProvider.prototype.catchError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || "Server Error");
    };
    InstitucionesServiceProvider.prototype.extractData = function (res) {
        return res.json().data;
    };
    InstitucionesServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], InstitucionesServiceProvider);
    return InstitucionesServiceProvider;
}());

//# sourceMappingURL=instituciones-service.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IngresosList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ingresos_service_ingresos_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_edit_ingreso_edit_ingreso__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_viajes_list_viajes_list__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_lotes_list_lotes_list__ = __webpack_require__(386);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var IngresosList = (function () {
    function IngresosList(navCtrl, navParams, IngresosServiceProvider, AlertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.IngresosServiceProvider = IngresosServiceProvider;
        this.AlertController = AlertController;
        this.ingresosList = [];
        this.itemExpandHeight = 100;
        this.getAllIngresos();
    }
    IngresosList.prototype.getAllIngresos = function () {
        var _this = this;
        this.IngresosServiceProvider.getAllIngresos().subscribe(function (data) { return _this.ingresosList = data; });
    };
    IngresosList.prototype.toggleIngreso = function (index) {
        this.ingresosList[index].open = !this.ingresosList[index].open;
    };
    IngresosList.prototype.goToEditIngreso = function (ingreso) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_edit_ingreso_edit_ingreso__["a" /* EditIngreso */], {
            ingreso: ingreso
        });
    };
    IngresosList.prototype.alertDeleteIngreso = function (ingresoId) {
        var _this = this;
        var alert = this.AlertController.create({
            title: 'Confirmar eliminacion',
            message: 'Esta seguro que desea eliminar el ingreso de la lista?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () { }
                },
                {
                    text: 'Eliminar',
                    handler: function () {
                        _this.deleteIngreso(ingresoId);
                    }
                }
            ]
        });
        alert.present();
    };
    IngresosList.prototype.deleteIngreso = function (ingresoId) {
        var _this = this;
        this.IngresosServiceProvider.deleteIngreso(ingresoId).subscribe(function (data) { return _this.getAllIngresos(); });
    };
    IngresosList.prototype.goToViajes = function (ingreso) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_viajes_list_viajes_list__["a" /* ViajesList */], {
            viajes: ingreso.ingresos_viajes
        });
    };
    IngresosList.prototype.goToLotes = function (ingreso) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_lotes_list_lotes_list__["a" /* LotesList */], {
            lotes: ingreso.lotes
        });
    };
    IngresosList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ingresos-list',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\ingresos-list\ingresos-list.html"*/'<ion-header>\n  <ion-navbar color="cultivos" hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Ingresos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="back-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <h1 padding text-center>Listado de Ingresos</h1>\n        <p text-center>Listado de de todos los ingresos de fruta con sus correspondientes lotes</p>\n      </ion-col>\n      <ion-col padding col-12 class="accordion-list" *ngFor=" let ingreso of ingresosList; let i = \'index\'">\n        <button ion-item class="no-border-cards" (click)="toggleIngreso(i)" detail-none [ngClass]="{ \'section-active\': ingreso.open, \'section\': !ingreso.open }">\n          <ion-row>\n            <ion-col col-1 >\n              <ion-icon item-left name="arrow-forward" *ngIf="!ingreso.open"></ion-icon>\n              <ion-icon item-left name="arrow-down" *ngIf="ingreso.open"></ion-icon>\n            </ion-col>        \n            <ion-col col-5>\n              <h2 padding text-left>Remito {{ingreso.nroRemito}}</h2>\n            </ion-col>\n            <ion-col col-6>\n              <ion-buttons right>\n                <button ion-button icon-only small outline color="white" (click)="goToLotes(ingreso)"><ion-icon name="cube"></ion-icon></button>\n                <button ion-button icon-only small outline color="white" (click)="goToViajes(ingreso)"><ion-icon name="bus"></ion-icon></button>\n                <button ion-button icon-only small outline color="white" (click)="goToEditIngreso(ingreso)"><ion-icon name="create"></ion-icon></button>\n                <button ion-button icon-only small outline color="white" (click)="alertDeleteIngreso(ingreso.id)"><ion-icon name="trash"></ion-icon></button>\n              </ion-buttons>\n            </ion-col>\n          </ion-row>\n        </button>\n        <ion-grid *ngIf="ingreso.open" class="back-black-color">\n          <ion-row>\n            <ion-col padding col-sm-12 col-md-12>\n              <ion-row>\n                <ion-col padding col-sm-12 col-md-6>\n                  <ion-item class="no-border">\n                    <ion-icon name="calendar" item-start></ion-icon>\n                      {{ingreso.fechaIngreso}}\n                  </ion-item>\n                </ion-col>\n                <ion-col padding col-sm-12 col-md-6>\n                  <ion-item class="no-border">\n                    <ion-icon name="contact" item-start></ion-icon>\n                      {{ingreso.createdFor}}\n                  </ion-item>\n                </ion-col>\n                <ion-col padding col-sm-12 col-md-4>\n                  <ion-item class="no-border">\n                    <ion-icon name="leaf" item-start></ion-icon>\n                      {{ingreso.lotes[0].chacra.renspa}} - {{ingreso.lotes[0].chacra.nombre}}\n                  </ion-item>\n                </ion-col>\n                <ion-col padding col-sm-12 col-md-4>\n                  <ion-item class="no-border">\n                    <ion-icon name="home" item-start></ion-icon>\n                      {{ingreso.ingresos_viajes[0].institucion.nombre}}\n                  </ion-item>\n                </ion-col>\n                <ion-col padding col-sm-12 col-md-4>\n                  <ion-item class="no-border">\n                    <ion-icon name="bus" item-start></ion-icon>\n                      {{ingreso.ingresos_viajes[0].camion.nombreChofer}}\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <!--ion-col *ngFor="let lote of ingreso.lotes" padding col-sm-12 col-md-4>\n              <ion-list>\n                <ion-item class="no-border">\n                  <ion-card>\n                    <ion-card-header no-padding no-margin class="card-hearder-color no-border">\n                      <ion-row>\n                        <ion-col col-md-6 no-padding>\n                          <h2 margin text-center class="black-color">Lote Nro {{lote.nroLote}}</h2>\n                        </ion-col>\n                        <ion-col col-md-6 no-padding> \n                          <ion-buttons right>\n                            <button ion-button clear color="white" icon-only small (click)="goToEditLote(lote)">\n                              <ion-icon name="create"></ion-icon>\n                            </button>\n                            <button ion-button clear color="white" icon-only small (click)="alertDeleteLote(lote.id)">\n                              <ion-icon name="trash"></ion-icon>\n                            </button>\n                          </ion-buttons>\n                        </ion-col>\n                      </ion-row>\n                    </ion-card-header>\n                    <ion-card-content>\n                      <ion-list no-padding no-margin>\n                        <ion-item class="no-border">\n                          <ion-icon name="cube" item-start></ion-icon>\n                          {{lote.cantBins}} Bins\n                        </ion-item>\n                        <ion-item class="no-border">\n                          <ion-icon name="podium" item-start></ion-icon>\n                          {{lote.pesoNeto}} Kgs\n                        </ion-item>\n                        <ion-item class="no-border">\n                          <ion-icon name="rose" item-start></ion-icon>\n                          {{lote.especy.tipo}}\n                        </ion-item>\n                        <ion-item class="no-border">\n                          <ion-icon name="flower" item-start></ion-icon>\n                          {{lote.variedad.tipo}}\n                        </ion-item>\n                        <ion-item class="no-border">\n                          <ion-icon name="star-half" item-start></ion-icon>\n                          {{lote.calidad.tipo}}\n                        </ion-item>\n                        <ion-item class="no-border">\n                          <ion-icon name="color-fill" item-start></ion-icon>\n                          {{lote.tratamiento.tipo}}\n                        </ion-item>\n                        <ion-item class="no-border">\n                          <ion-icon name="grid" item-start></ion-icon>\n                          {{lote.cuadro.up}}\n                        </ion-item>\n                      </ion-list>\n                    </ion-card-content>\n                  </ion-card>\n                </ion-item>\n              </ion-list>    \n            </ion-col-->\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\ingresos-list\ingresos-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_ingresos_service_ingresos_service__["a" /* IngresosServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], IngresosList);
    return IngresosList;
}());

//# sourceMappingURL=ingresos-list.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IngresosServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IngresosServiceProvider = (function () {
    function IngresosServiceProvider(http) {
        this.http = http;
        this.urlAPI = __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__["a" /* urlAPI */] + '/ingreso';
    }
    IngresosServiceProvider.prototype.getAllIngresos = function () {
        return this.http.get(this.urlAPI)
            .map(this.extractData)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    IngresosServiceProvider.prototype.addNewIngreso = function (ingreso) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.post(this.urlAPI, ingreso, options)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    IngresosServiceProvider.prototype.editIngreso = function (ingreso) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.put(this.urlAPI + '/' + ingreso.id, ingreso, options)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    IngresosServiceProvider.prototype.deleteIngreso = function (ingresoId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.delete(this.urlAPI + '/' + ingresoId, options)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    IngresosServiceProvider.prototype.catchError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || "Server Error");
    };
    IngresosServiceProvider.prototype.extractData = function (res) {
        return res.json().data;
    };
    IngresosServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], IngresosServiceProvider);
    return IngresosServiceProvider;
}());

//# sourceMappingURL=ingresos-service.js.map

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalidadModel; });
var CalidadModel = (function () {
    function CalidadModel() {
    }
    return CalidadModel;
}());

//# sourceMappingURL=calidad-model.js.map

/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EspecieModel; });
var EspecieModel = (function () {
    function EspecieModel() {
    }
    return EspecieModel;
}());

//# sourceMappingURL=especie-model.js.map

/***/ }),

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariedadModel; });
var VariedadModel = (function () {
    function VariedadModel() {
    }
    return VariedadModel;
}());

//# sourceMappingURL=variedad-model.js.map

/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChacraModel; });
var ChacraModel = (function () {
    function ChacraModel() {
    }
    return ChacraModel;
}());

//# sourceMappingURL=chacra-model.js.map

/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TratamientoModel; });
var TratamientoModel = (function () {
    function TratamientoModel() {
    }
    return TratamientoModel;
}());

//# sourceMappingURL=tratamiento-model.js.map

/***/ }),

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CuadroModel; });
var CuadroModel = (function () {
    function CuadroModel() {
    }
    return CuadroModel;
}());

//# sourceMappingURL=cuadro-model.js.map

/***/ }),

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IngresoModel; });
var IngresoModel = (function () {
    function IngresoModel(id, nroRemito, fechaIngreso, viajeId, chacraId, createdFor, lotes, chacras, chacra) {
        this.id = id;
        this.nroRemito = nroRemito;
        this.fechaIngreso = fechaIngreso;
        this.viajeId = viajeId;
        this.chacraId = chacraId;
        this.createdFor = createdFor;
        this.lotes = lotes;
        this.chacras = chacras;
        this.chacra = chacra;
    }
    return IngresoModel;
}());

//# sourceMappingURL=ingreso-model.js.map

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoteModel; });
var LoteModel = (function () {
    function LoteModel(id, peso, nroLote, cantBins, calidadId, especieId, variedadId, tratamientoId, cuadroId, calidades, calidad, especies, especie, variedades, variedad, tratamientos, tratamiento, cuadros, cuadro) {
        this.id = id;
        this.peso = peso;
        this.nroLote = nroLote;
        this.cantBins = cantBins;
        this.calidadId = calidadId;
        this.especieId = especieId;
        this.variedadId = variedadId;
        this.tratamientoId = tratamientoId;
        this.cuadroId = cuadroId;
        this.calidades = calidades;
        this.calidad = calidad;
        this.especies = especies;
        this.especie = especie;
        this.variedades = variedades;
        this.variedad = variedad;
        this.tratamientos = tratamientos;
        this.tratamiento = tratamiento;
        this.cuadros = cuadros;
        this.cuadro = cuadro;
    }
    return LoteModel;
}());

//# sourceMappingURL=lote-model.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoresList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_productores_service_productores_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_edit_productor_edit_productor__ = __webpack_require__(380);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductoresList = (function () {
    function ProductoresList(navCtrl, navParams, ProductoresServiceProvider, AlertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ProductoresServiceProvider = ProductoresServiceProvider;
        this.AlertController = AlertController;
        this.productoresList = [];
        this.getProductores();
    }
    ProductoresList.prototype.getProductores = function () {
        var _this = this;
        this.ProductoresServiceProvider.getAllProductores().subscribe(function (data) { return _this.productoresList = data; });
    };
    ProductoresList.prototype.goToEdit = function (productor) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_edit_productor_edit_productor__["a" /* EditProductor */], {
            productor: productor
        });
    };
    ProductoresList.prototype.deleteProductor = function (productorId) {
        var _this = this;
        this.ProductoresServiceProvider.deleteProductor(productorId).subscribe(function (data) { return _this.getProductores(); });
    };
    ProductoresList.prototype.alertDeleteProductor = function (productorId) {
        var _this = this;
        var alert = this.AlertController.create({
            title: 'Confirmar eliminacion',
            message: 'Esta seguro que desea eliminar el productor de la lista?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () { }
                },
                {
                    text: 'Eliminar',
                    handler: function () {
                        _this.deleteProductor(productorId);
                    }
                }
            ]
        });
        alert.present();
    };
    ProductoresList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\productoresList\productoresList.html"*/'<ion-header>\n  <ion-navbar color="cultivos" hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Productores</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="back-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-sm-12 col-md-12 padding>\n        <h1 text-center>Listado de Productores</h1>\n        <p text-center>Presentacion en forma de lista de los productores con los que se trabaja</p>\n      </ion-col>\n      <ion-col col-sm-12 col-md-12 padding class="back-black-color">\n        <h4 padding-top no-margin>Datos generales de los productores</h4>\n        <ion-row padding>\n          <ion-col col-sm-12 col-md-8 offset-md-2>\n            <ion-list>\n              <ion-item ion-item *ngFor="let prod of productoresList" class="no-border">\n                <ion-avatar item-left>\n                  <img src="assets/imgs/user.png">\n                </ion-avatar>\n                <ion-row>\n                  <ion-col col-sm-12 col-md-3>\n                    <ion-row>\n                      <ion-col col-sm-12 col-md-12>\n                        <h2 text-center>Productor</h2>\n                      </ion-col>\n                      <ion-col col-sm-12 col-md-12>\n                        <p text-center>{{prod.nombre}}</p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                  <ion-col col-sm-12 col-md-3>\n                    <ion-row>\n                      <ion-col col-sm-12 col-md-12>\n                        <h2 text-center>Dni</h2>\n                      </ion-col>\n                      <ion-col col-sm-12 col-md-12>\n                        <p text-center>{{prod.dni}}</p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                  <ion-col col-sm-12 col-md-3> \n                    <ion-row>\n                      <ion-col col-sm-12 col-md-12>\n                        <h2 text-center>Telefono</h2>\n                      </ion-col>\n                      <ion-col col-sm-12 col-md-12>\n                        <p text-center>{{prod.telefono}}</p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                  <ion-col col-sm-12 col-md-3> \n                    <ion-row>\n                      <ion-col col-sm-12 col-md-6>\n                        <button ion-button color="semiDark" round icon-only small (click)="goToEdit(prod)">\n                          <ion-icon name="create"></ion-icon>\n                        </button>\n                      </ion-col>\n                      <ion-col col-sm-12 col-md-6>\n                        <button ion-button color="semiDark" round icon-only small \n                          (click)="alertDeleteProductor(prod.id)">\n                          <ion-icon name="trash"></ion-icon>\n                        </button>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                </ion-row>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\productoresList\productoresList.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_productores_service_productores_service__["a" /* ProductoresServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ProductoresList);
    return ProductoresList;
}());

//# sourceMappingURL=productoresList.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoresServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductoresServiceProvider = (function () {
    function ProductoresServiceProvider(http) {
        this.http = http;
        this.urlAPI = __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__["a" /* urlAPI */] + '/productor';
    }
    ProductoresServiceProvider.prototype.getAllProductores = function () {
        return this.http.get(this.urlAPI)
            .map(this.extractData)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    ProductoresServiceProvider.prototype.addNewProductor = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.post(this.urlAPI, data, options)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    ProductoresServiceProvider.prototype.editProductor = function (productor) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.put(this.urlAPI + '/' + productor.id, productor, options)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    ProductoresServiceProvider.prototype.deleteProductor = function (productorId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.delete(this.urlAPI + '/' + productorId, options)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    ProductoresServiceProvider.prototype.catchError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || "Server Error");
    };
    ProductoresServiceProvider.prototype.extractData = function (res) {
        return res.json().data;
    };
    ProductoresServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ProductoresServiceProvider);
    return ProductoresServiceProvider;
}());

//# sourceMappingURL=productores-service.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CamionesList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_camiones_service_camiones_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_edit_camion_edit_camion__ = __webpack_require__(381);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CamionesList = (function () {
    function CamionesList(navCtrl, navParams, CamionesServiceProvider, AlertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.CamionesServiceProvider = CamionesServiceProvider;
        this.AlertController = AlertController;
        this.camionesList = [];
        this.getAllCamiones();
    }
    CamionesList.prototype.getAllCamiones = function () {
        var _this = this;
        this.CamionesServiceProvider.getAllCamiones().subscribe(function (data) { return _this.camionesList = data; });
    };
    CamionesList.prototype.goToEdit = function (camion) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_edit_camion_edit_camion__["a" /* EditCamion */], {
            camion: camion
        });
    };
    CamionesList.prototype.deleteCamion = function (camionId) {
        var _this = this;
        this.CamionesServiceProvider.deleteCamion(camionId).subscribe(function (data) { return _this.getAllCamiones(); });
    };
    CamionesList.prototype.alertDeleteCamion = function (camionId) {
        var _this = this;
        var alert = this.AlertController.create({
            title: 'Confirmar eliminacion',
            message: 'Esta seguro que desea eliminar el camion de la lista?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () { }
                },
                {
                    text: 'Eliminar',
                    handler: function () {
                        _this.deleteCamion(camionId);
                    }
                }
            ]
        });
        alert.present();
    };
    CamionesList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-camiones-list',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\camiones-list\camiones-list.html"*/'<ion-header>\n  <ion-navbar color="cultivos" hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Camiones</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="back-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-sm-12 col-md-12 padding>\n        <h1 text-center>Listado de Camiones</h1>\n        <p text-center>Presentacion en forma de lista de los camiones con los que se transporta</p>\n      </ion-col>\n      <ion-col col-sm-12 col-md-12 padding class="back-black-color">\n        <h4 padding-top no-margin>Camiones</h4>\n        <ion-row padding>\n          <ion-col col-sm-12 col-md-8 offset-md-2>\n            <ion-list>\n              <ion-item ion-item *ngFor="let camion of camionesList" class="no-border">\n                <ion-avatar item-left>\n                  <img src="assets/imgs/camion-icon.png">\n                </ion-avatar>\n                <ion-row>\n                  <ion-col col-sm-12 col-md-3>\n                    <ion-row>\n                      <ion-col col-sm-12 col-md-12>\n                        <h2 text-center>Chofer</h2>\n                      </ion-col>\n                      <ion-col col-sm-12 col-md-12>\n                        <p text-center>{{camion.nombreChofer}}</p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                  <ion-col col-sm-12 col-md-3>\n                    <ion-row>\n                      <ion-col col-sm-12 col-md-12>\n                        <h2 text-center>Patente Chasis</h2>\n                      </ion-col>\n                      <ion-col col-sm-12 col-md-12>\n                        <p text-center>{{camion.patenteChasis}}</p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                  <ion-col col-sm-12 col-md-3> \n                    <ion-row>\n                      <ion-col col-sm-12 col-md-12>\n                        <h2 text-center>Patente Acoplado</h2>\n                      </ion-col>\n                      <ion-col col-sm-12 col-md-12>\n                        <p text-center>{{camion.patenteAcoplado}}</p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                  <ion-col col-sm-12 col-md-3> \n                    <ion-row>\n                      <ion-col col-sm-12 col-md-6>\n                        <button ion-button color="semiDark" round icon-only small (click)="goToEdit(camion)">\n                          <ion-icon name="create"></ion-icon>\n                        </button>\n                      </ion-col>\n                      <ion-col col-sm-12 col-md-6>\n                        <button ion-button color="semiDark" round icon-only small \n                          (click)="alertDeleteCamion(camion.id)">\n                          <ion-icon name="trash"></ion-icon>\n                        </button>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                </ion-row>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\camiones-list\camiones-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_camiones_service_camiones_service__["a" /* CamionesServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CamionesList);
    return CamionesList;
}());

//# sourceMappingURL=camiones-list.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpresasList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_empresas_service_empresas_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_edit_empresa_edit_empresa__ = __webpack_require__(382);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmpresasList = (function () {
    function EmpresasList(navCtrl, navParams, EmpresasServiceProvider, AlertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.EmpresasServiceProvider = EmpresasServiceProvider;
        this.AlertController = AlertController;
        this.empresasList = [];
        this.getAllEmpresas();
    }
    EmpresasList.prototype.getAllEmpresas = function () {
        var _this = this;
        this.EmpresasServiceProvider.getAllEmpresas().subscribe(function (data) { return _this.empresasList = data; });
    };
    EmpresasList.prototype.goToEdit = function (empresa) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_edit_empresa_edit_empresa__["a" /* EditEmpresa */], {
            empresa: empresa
        });
    };
    EmpresasList.prototype.deleteEmpresa = function (empresaId) {
        var _this = this;
        this.EmpresasServiceProvider.deleteEmpresa(empresaId).subscribe(function (data) { return _this.getAllEmpresas(); });
    };
    EmpresasList.prototype.alertDeleteEmpresa = function (empresaId) {
        var _this = this;
        var alert = this.AlertController.create({
            title: 'Confirmar eliminacion',
            message: 'Esta seguro que desea eliminar la empresa de la lista?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () { }
                },
                {
                    text: 'Eliminar',
                    handler: function () {
                        _this.deleteEmpresa(empresaId);
                    }
                }
            ]
        });
        alert.present();
    };
    EmpresasList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-empresas-list',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\empresas-list\empresas-list.html"*/'<ion-header>\n  <ion-navbar color="cultivos" hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Empresas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="back-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-sm-12 col-md-12 padding>\n        <h1 text-center>Listado de Empresas</h1>\n        <p text-center>Presentacion en forma de lista de las empresas con los que se comercializa</p>\n      </ion-col>\n      <ion-col col-sm-12 col-md-12 padding class="back-black-color">\n        <h4 padding-top no-margin>Empresas</h4>\n        <ion-row padding>\n          <ion-col col-sm-12 col-md-8 offset-md-2>\n            <ion-list>\n              <ion-item ion-item *ngFor="let empresa of empresasList" class="no-border">\n                <ion-avatar item-left>\n                  <img src="assets/imgs/emperesa-icon.png">\n                </ion-avatar>\n                <ion-row>\n                  <ion-col col-sm-12 col-md-3>\n                    <ion-row>\n                      <ion-col col-sm-12 col-md-12>\n                        <h2 text-center>Empresa</h2>\n                      </ion-col>\n                      <ion-col col-sm-12 col-md-12>\n                        <p text-center>{{empresa.nombre}}</p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                  <ion-col col-sm-12 col-md-3>\n                    <ion-row>\n                      <ion-col col-sm-12 col-md-12>\n                        <h2 text-center>Direccion</h2>\n                      </ion-col>\n                      <ion-col col-sm-12 col-md-12>\n                        <p text-center>{{empresa.direccion}}</p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                  <ion-col col-sm-12 col-md-3> \n                    <ion-row>\n                      <ion-col col-sm-12 col-md-12>\n                        <h2 text-center>Telefono</h2>\n                      </ion-col>\n                      <ion-col col-sm-12 col-md-12>\n                        <p text-center>{{empresa.telefono}}</p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                  <ion-col col-sm-12 col-md-3> \n                    <ion-row>\n                      <ion-col col-sm-12 col-md-6>\n                        <button ion-button color="semiDark" round icon-only small (click)="goToEdit(empresa)">\n                          <ion-icon name="create"></ion-icon>\n                        </button>\n                      </ion-col>\n                      <ion-col col-sm-12 col-md-6>\n                        <button ion-button color="semiDark" round icon-only small \n                          (click)="alertDeleteEmpresa(empresa.id)">\n                          <ion-icon name="trash"></ion-icon>\n                        </button>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                </ion-row>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\empresas-list\empresas-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_empresas_service_empresas_service__["a" /* EmpresasServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EmpresasList);
    return EmpresasList;
}());

//# sourceMappingURL=empresas-list.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpresasServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmpresasServiceProvider = (function () {
    function EmpresasServiceProvider(http) {
        this.http = http;
        this.urlAPI = __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__["a" /* urlAPI */] + '/empresa';
    }
    EmpresasServiceProvider.prototype.getAllEmpresas = function () {
        return this.http.get(this.urlAPI)
            .map(this.extractData)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    EmpresasServiceProvider.prototype.addNewEmpresa = function (empresa) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.post(this.urlAPI, empresa, options)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    EmpresasServiceProvider.prototype.editEmpresa = function (empresa) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.put(this.urlAPI + '/' + empresa.id, empresa, options)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    EmpresasServiceProvider.prototype.deleteEmpresa = function (empresaId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.delete(this.urlAPI + '/' + empresaId, options)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    EmpresasServiceProvider.prototype.catchError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || "Server Error");
    };
    EmpresasServiceProvider.prototype.extractData = function (res) {
        return res.json().data;
    };
    EmpresasServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], EmpresasServiceProvider);
    return EmpresasServiceProvider;
}());

//# sourceMappingURL=empresas-service.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstitucionesList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_instituciones_service_instituciones_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_edit_institucion_edit_institucion__ = __webpack_require__(383);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InstitucionesList = (function () {
    function InstitucionesList(navCtrl, navParams, InstitucionesServiceProvider, AlertController) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.InstitucionesServiceProvider = InstitucionesServiceProvider;
        this.AlertController = AlertController;
        this.institucionesList = [];
        this.InstitucionesServiceProvider.getAllInstituciones().subscribe(function (data) { return _this.institucionesList = data; });
    }
    InstitucionesList.prototype.getAllInstituciones = function () {
        var _this = this;
        this.InstitucionesServiceProvider.getAllInstituciones().subscribe(function (data) { return _this.institucionesList = data; });
    };
    InstitucionesList.prototype.goToEdit = function (institucion) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_edit_institucion_edit_institucion__["a" /* EditInstitucion */], {
            institucion: institucion
        });
    };
    InstitucionesList.prototype.deleteInstitucion = function (institucionId) {
        var _this = this;
        this.InstitucionesServiceProvider.deleteInstitucion(institucionId).subscribe(function (data) { return _this.getAllInstituciones(); });
    };
    InstitucionesList.prototype.alertDeleteInstitucion = function (institucionId) {
        var _this = this;
        var alert = this.AlertController.create({
            title: 'Confirmar eliminacion',
            message: 'Esta seguro que desea eliminar el camion de la lista?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () { }
                },
                {
                    text: 'Eliminar',
                    handler: function () {
                        _this.deleteInstitucion(institucionId);
                    }
                }
            ]
        });
        alert.present();
    };
    InstitucionesList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-instituciones-list',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\instituciones-list\instituciones-list.html"*/'<ion-header>\n  <ion-navbar color="cultivos" hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Instituciones</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="back-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-sm-12 col-md-12 padding>\n        <h1 text-center>Listado de Instituciones</h1>\n        <p text-center>Presentacion en forma de lista de las intituciones donde se destina la fruta</p>\n      </ion-col>\n      <ion-col col-sm-12 col-md-12 padding class="back-black-color">\n        <h4 padding-top no-margin>Instituciones</h4>\n        <ion-row padding>\n          <ion-col col-sm-12 col-md-8 offset-md-2>\n            <ion-list>\n              <ion-item ion-item *ngFor="let institucion of institucionesList" class="no-border">\n                <ion-avatar item-left>\n                  <img src="assets/imgs/institucion-icon.png">\n                </ion-avatar>\n                <ion-row>\n                  <ion-col col-sm-12 col-md-3>\n                    <ion-row>\n                      <ion-col col-sm-12 col-md-12>\n                        <h2 text-center>Institucion</h2>\n                      </ion-col>\n                      <ion-col col-sm-12 col-md-12>\n                        <p text-center>{{institucion.nombre}}</p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                  <ion-col col-sm-12 col-md-3>\n                    <ion-row>\n                      <ion-col col-sm-12 col-md-12>\n                        <h2 text-center>Direccion</h2>\n                      </ion-col>\n                      <ion-col col-sm-12 col-md-12>\n                        <p text-center>{{institucion.direccion}}</p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                  <ion-col col-sm-12 col-md-3> \n                    <ion-row>\n                      <ion-col col-sm-12 col-md-12>\n                        <h2 text-center>Telefono</h2>\n                      </ion-col>\n                      <ion-col col-sm-12 col-md-12>\n                        <p text-center>{{institucion.telefono}}</p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                  <ion-col col-sm-12 col-md-3> \n                    <ion-row>\n                      <ion-col col-sm-12 col-md-6>\n                        <button ion-button color="semiDark" round icon-only small (click)="goToEdit(institucion)">\n                          <ion-icon name="create"></ion-icon>\n                        </button>\n                      </ion-col>\n                      <ion-col col-sm-12 col-md-6>\n                        <button ion-button color="semiDark" round icon-only small \n                          (click)="alertDeleteInstitucion(institucion.id)">\n                          <ion-icon name="trash"></ion-icon>\n                        </button>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                </ion-row>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\instituciones-list\instituciones-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_instituciones_service_instituciones_service__["a" /* InstitucionesServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], InstitucionesList);
    return InstitucionesList;
}());

//# sourceMappingURL=instituciones-list.js.map

/***/ })

},[398]);
//# sourceMappingURL=main.js.map
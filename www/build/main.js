webpackJsonp([0],{

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewCamion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_camiones_service_camiones_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_empresas_service_empresas_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_camiones_list_camiones_list__ = __webpack_require__(83);
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
    function NewCamion(navCtrl, navParams, CamionesServiceProvider, AlertController, formBuilder, EmpresasServiceProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.CamionesServiceProvider = CamionesServiceProvider;
        this.AlertController = AlertController;
        this.formBuilder = formBuilder;
        this.EmpresasServiceProvider = EmpresasServiceProvider;
        this.camion = { patenteChasis: '', patenteAcoplado: '', nombreChofer: '', empresa_id: '' };
        this.empresas = [];
        this.empresa = [];
        this.empresa_id = this.formBuilder.control('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required);
        this.formNewCamion = this.formBuilder.group({
            nombreChofer: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            patenteAcoplado: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(7), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(7)])],
            patenteChasis: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(7), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(7)])],
            empresa_id: this.empresa_id,
        });
        this.nombreChofer = this.formNewCamion.controls['nombreChofer'];
        this.patenteAcoplado = this.formNewCamion.controls['patenteAcoplado'];
        this.patenteChasis = this.formNewCamion.controls['patenteChasis'];
        this.EmpresasServiceProvider.getAllEmpresas()
            .subscribe(function (data) {
            _this.empresas = data;
            _this.empresa_id.setValue('');
        });
    }
    NewCamion.prototype.addNewCamion = function () {
        var _this = this;
        if (!this.formNewCamion.valid) {
            this.AlertController.create({
                title: 'Datos Incorrectos',
                message: 'Los datos ingresados pueden ser incorrectos o faltantes.',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function () { }
                    }
                ]
            }).present();
        }
        else {
            this.CamionesServiceProvider.addNewCamion(this.camion).subscribe(function (data) { return _this.alertNewCamion(data); });
        }
    };
    NewCamion.prototype.alertNewCamion = function (data) {
        var _this = this;
        var alert;
        if (!JSON.parse(data._body).error) {
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
    NewCamion.prototype.empresaChange = function (event) {
        this.camion.empresa_id = event.value.id;
    };
    NewCamion.prototype.destroyView = function () {
        this.navCtrl.pop();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_camiones_list_camiones_list__["a" /* CamionesList */]);
    };
    NewCamion = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-camion',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-camion\new-camion.html"*/'<ion-header>\n  <ion-navbar color="cultivos" hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Nuevo Camion</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="back-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 padding>\n        <h1 text-center>Nuevo Camion</h1>\n        <p text-center>Ingrese los datos necesarios para generar un nuevo camion.</p>\n      </ion-col>\n      <ion-col col-12 padding class="back-black-color">\n        <h3 padding-top no-margin>Datos generales del camion</h3>\n        <form [formGroup]="formNewCamion" (ngSubmit)="addNewCamion()">\n          <ion-grid>\n            <ion-row>\n              <ion-col col-12 padding-bottom>\n                <ion-row>\n                  <ion-item col-12 class="no-border">\n                    <ion-label stacked>Nombre Chofer</ion-label>\n                    <ion-input type="text" [(ngModel)]="camion.nombreChofer" formControlName="nombreChofer"></ion-input>\n                  </ion-item>\n                  <ion-item col-12 col-md-6 col-lg-6 class="no-border">\n                    <ion-label stacked>Patente Acoplado</ion-label>\n                    <ion-input type="text" [(ngModel)]="camion.patenteAcoplado" formControlName="patenteAcoplado"></ion-input>\n                  </ion-item>\n                  <ion-item col-12 col-md-6 col-lg-6 class="no-border">\n                    <ion-label stacked>Patente Chasis</ion-label>\n                    <ion-input type="text" [(ngModel)]="camion.patenteChasis" formControlName="patenteChasis"></ion-input>\n                  </ion-item>\n                  <ion-item class="no-border">\n                    <select-searchable\n                        [(ngModel)]="empresa"\n                        formControlName="empresa_id"\n                        title="Empresas"\n                        itemValueField="id"\n                        itemTextField="nombre"\n                        [items]="empresas"\n                        [canSearch]="true"\n                        (onChange)="empresaChange($event)">\n                    </select-searchable>\n                  </ion-item>\n                  <ion-col col-12 padding>\n                    <ion-buttons right>\n                        <button ion-button type="submit" color="semiDark">Agregar</button>\n                    </ion-buttons>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-camion\new-camion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_camiones_service_camiones_service__["a" /* CamionesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_empresas_service_empresas_service__["a" /* EmpresasServiceProvider */]])
    ], NewCamion);
    return NewCamion;
}());

//# sourceMappingURL=new-camion.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewChacra; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_chacras_service_chacras_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_productores_service_productores_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_chacras_list_chacras_list__ = __webpack_require__(92);
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
    function NewChacra(navCtrl, navParams, ChacrasServiceProvider, AlertController, formBuilder, ProductoresServiceProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ChacrasServiceProvider = ChacrasServiceProvider;
        this.AlertController = AlertController;
        this.formBuilder = formBuilder;
        this.ProductoresServiceProvider = ProductoresServiceProvider;
        this.chacra = { nombre: '', renspa: '', productor_id: '' };
        this.productores = [];
        this.ProductoresServiceProvider.getAllProductores().subscribe(function (data) { return _this.productores = data; });
        this.formNewChacra = this.formBuilder.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            renspa: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(12), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(12)])],
            productor_id: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
        this.nombre = this.formNewChacra.controls['nombre'];
        this.renspa = this.formNewChacra.controls['renspa'];
        this.productor_id = this.formNewChacra.controls['productor_id'];
    }
    NewChacra.prototype.addNewChacra = function () {
        var _this = this;
        console.log(this.productor_id.valid);
        if (!this.formNewChacra.valid) {
            this.AlertController.create({
                title: 'Datos Incorrectos',
                message: 'Los datos ingresados pueden ser incorrectos o faltantes.',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function () { }
                    }
                ]
            }).present();
        }
        else {
            this.ChacrasServiceProvider.addNewChacra(this.chacra).subscribe(function (data) { return _this.alertNewChacra(data); });
        }
    };
    NewChacra.prototype.alertNewChacra = function (data) {
        var _this = this;
        var alert;
        if (!JSON.parse(data._body).error) {
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_chacras_list_chacras_list__["a" /* ChacrasList */]);
    };
    NewChacra = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-chacra',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-chacra\new-chacra.html"*/'<ion-header>\n  <ion-navbar color="cultivos" hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Nueva Chacra</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="back-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 padding>\n        <h1 text-center>Nueva Chacra</h1>\n        <p text-center>Ingrese los datos necesarios para generar una nueva chacra.</p>\n      </ion-col>\n      <ion-col col-12 padding class="back-black-color">\n        <h3 padding-top no-margin>Datos generales de la Chacra</h3>\n        <form [formGroup]="formNewChacra" (ngSubmit)="addNewChacra()">\n          <ion-grid>\n            <ion-row>\n              <ion-col col-12 padding-bottom>\n                <ion-row>\n                  <ion-item col-12 col-md-6 col-lg-6 class="no-border">\n                    <ion-label stacked>Nombre</ion-label>\n                    <ion-input type="text" [(ngModel)]="chacra.nombre" formControlName="nombre"></ion-input>\n                  </ion-item>\n                  <ion-item col-12 col-md-6 col-lg-6 class="no-border">\n                    <ion-label stacked>Renspa</ion-label>\n                    <ion-input type="text" [(ngModel)]="chacra.renspa" formControlName="renspa"></ion-input>\n                  </ion-item>\n                  <ion-item col-12 class="no-border">\n                    <ion-label stacked>Productor</ion-label>\n                    <ion-select [(ngModel)]="chacra.productor_id" cancelText="Cancelar" okText="Aceptar" formControlName="productor_id">\n                      <ion-option *ngFor="let productor of productores" [value] = "productor.id" >{{productor.nombre}}</ion-option>\n                    </ion-select>\n                  </ion-item>\n                  <ion-col col-12 padding>\n                    <ion-buttons right>\n                        <button ion-button type="submit" color="semiDark">Agregar</button>\n                    </ion-buttons>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-chacra\new-chacra.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_chacras_service_chacras_service__["a" /* ChacrasServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_productores_service_productores_service__["a" /* ProductoresServiceProvider */]])
    ], NewChacra);
    return NewChacra;
}());

//# sourceMappingURL=new-chacra.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LotesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(26);
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

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalidadesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(26);
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

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EspecieServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(26);
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

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TratamientosServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(26);
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

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewEmpresa; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_empresas_list_empresas_list__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_empresas_service_empresas_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_camiones_service_camiones_service__ = __webpack_require__(48);
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
    function NewEmpresa(navCtrl, navParams, CamionesServiceProvider, EmpresasServiceProvider, AlertController, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.CamionesServiceProvider = CamionesServiceProvider;
        this.EmpresasServiceProvider = EmpresasServiceProvider;
        this.AlertController = AlertController;
        this.formBuilder = formBuilder;
        this.empresa = { nombre: '', direcccion: '', telefono: '' };
        this.camiones = [];
        this.CamionesServiceProvider.getAllCamiones().subscribe(function (data) { return _this.camiones = data; });
        this.formNewEmpresa = this.formBuilder.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            direccion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            telefono: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10)])],
        });
        this.nombre = this.formNewEmpresa.controls['nombre'];
        this.direccion = this.formNewEmpresa.controls['direccion'];
        this.telefono = this.formNewEmpresa.controls['telefono'];
    }
    NewEmpresa.prototype.addNewEmpresa = function () {
        var _this = this;
        if (!this.formNewEmpresa.valid) {
            this.AlertController.create({
                title: 'Datos Incorrectos',
                message: 'Los datos ingresados pueden ser incorrectos o faltantes.',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function () { }
                    }
                ]
            }).present();
        }
        else {
            this.EmpresasServiceProvider.addNewEmpresa(this.empresa).subscribe(function (data) { return _this.alertNewEmpresa(data); });
        }
    };
    NewEmpresa.prototype.alertNewEmpresa = function (data) {
        var _this = this;
        var alert;
        if (!JSON.parse(data._body).error) {
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_empresas_list_empresas_list__["a" /* EmpresasList */]);
    };
    NewEmpresa = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-empresa',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-empresa\new-empresa.html"*/'<ion-header>\n  <ion-navbar color="cultivos" hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Nuevo Empresa</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="back-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 padding>\n        <h1 text-center>Nueva Empresa</h1>\n        <p text-center>Ingrese los datos necesarios para generar una nueva empresa.</p>\n      </ion-col>\n      <ion-col col-12 padding class="back-black-color">\n        <h3 padding-top no-margin>Datos generales de la empresa</h3>\n        <form [formGroup]="formNewEmpresa" (ngSubmit)="addNewEmpresa()">\n          <ion-grid>\n            <ion-row>\n              <ion-col col-12 padding-bottom>\n                <ion-row>\n                  <ion-item col-12 class="no-border">\n                    <ion-label stacked>Nombre</ion-label>\n                    <ion-input type="text" [(ngModel)]="empresa.nombre" formControlName="nombre"></ion-input>\n                  </ion-item>\n                  <ion-item col-12 col-md-6 col-lg-6 class="no-border">\n                    <ion-label stacked>Direccion</ion-label>\n                    <ion-input type="text" [(ngModel)]="empresa.direccion" formControlName="direccion"></ion-input>\n                  </ion-item>\n                  <ion-item col-12 col-md-6 col-lg-6 class="no-border">\n                    <ion-label stacked>Telefono</ion-label>\n                    <ion-input type="number" [(ngModel)]="empresa.telefono" formControlName="telefono"></ion-input>\n                  </ion-item>\n                  <ion-col col-12 padding>\n                    <ion-buttons right>\n                        <button ion-button type="submit" color="semiDark">Agregar</button>\n                    </ion-buttons>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-empresa\new-empresa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_camiones_service_camiones_service__["a" /* CamionesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_empresas_service_empresas_service__["a" /* EmpresasServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], NewEmpresa);
    return NewEmpresa;
}());

//# sourceMappingURL=new-empresa.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_productoresList_productoresList__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_new_viaje_ingreso_new_viaje_ingreso__ = __webpack_require__(765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_camiones_list_camiones_list__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_empresas_list_empresas_list__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_instituciones_list_instituciones_list__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_chacras_list_chacras_list__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_ingresos_list_ingresos_list__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_new_ingreso_new_ingreso__ = __webpack_require__(98);
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
            { title: 'Ingresos', icon: 'crop', component: __WEBPACK_IMPORTED_MODULE_10__pages_ingresos_list_ingresos_list__["a" /* IngresosList */] },
            { title: 'Nuevo Ingreso', icon: 'add', component: __WEBPACK_IMPORTED_MODULE_11__pages_new_ingreso_new_ingreso__["a" /* NewIngreso */] },
            { title: 'Nuevo Viaje', icon: 'add', component: __WEBPACK_IMPORTED_MODULE_5__pages_new_viaje_ingreso_new_viaje_ingreso__["a" /* NewViajeIngreso */] },
            { title: 'Productores', icon: 'contact', component: __WEBPACK_IMPORTED_MODULE_4__pages_productoresList_productoresList__["a" /* ProductoresList */] },
            { title: 'Empresas', icon: 'briefcase', component: __WEBPACK_IMPORTED_MODULE_7__pages_empresas_list_empresas_list__["a" /* EmpresasList */] },
            { title: 'Chacras', icon: 'leaf', component: __WEBPACK_IMPORTED_MODULE_9__pages_chacras_list_chacras_list__["a" /* ChacrasList */] },
            { title: 'Camiones', icon: 'bus', component: __WEBPACK_IMPORTED_MODULE_6__pages_camiones_list_camiones_list__["a" /* CamionesList */] },
            { title: 'Instituciones', icon: 'home', component: __WEBPACK_IMPORTED_MODULE_8__pages_instituciones_list_instituciones_list__["a" /* InstitucionesList */] }
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
            selector: 'page-home',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="cultivos" hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Inicio</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="signOut()">\n        Cerrar Sesion\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="backImg">\n  <ion-col col-10 offset-1>\n    <ion-row>\n      <ion-col col-12>\n        <p padding text-center style="font-size: 35px; font-weight:700">Panel de Control</p>\n      </ion-col>\n      <ion-col col-lg-3 col-md-6 col-sm-6 col-12 *ngFor="let page of pages"> \n        <button (click)="goToPage(page)" ion-item detail-none color="semiDark" class="no-border-cards">\n          <ion-icon item-left style="zoom:1.35;" name="{{page.icon}}"></ion-icon>\n          {{page.title}}\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-col>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user_model__ = __webpack_require__(753);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(154);
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
            selector: 'page-login',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\login\login.html"*/'<ion-header>\n    <ion-navbar color="cultivos" hideBackButton="true">\n        <ion-title>Iniciar Sesión</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="back-color">\n    <form  #signInForm="ngForm" (submit)="signIn()">\n        <ion-grid>\n            <ion-row class="back-black-color" col-10 offset-1 col-lg-4 offset-lg-4 padding>\n                <ion-col col-8 offset-2>\n                    <img src="assets/imgs/cultivosTexto.png">\n                </ion-col>\n                <ion-col col-12>\n                    <ion-row>\n                        <ion-col col-12 padding>\n                            <p text-center>Inicia sesion en Cultivos Patagonicos con tu cuenta de Google</p>\n                        </ion-col>\n                        <ion-col col-10 offset-1>\n                            <ion-item class="no-border">\n                                <ion-label stacked>Correo electrónico</ion-label>\n                                <ion-input [(ngModel)]="userModel.email" type="email" autocorrect="off" autocapitalize="none" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"\n                                    required></ion-input>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col col-10 offset-1> \n                            <ion-item class="no-border">\n                                <ion-label stacked>Contraseña</ion-label>\n                                <ion-input [(ngModel)]="userModel.password" type="password" name="password" required minlength="6"></ion-input>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                </ion-col>\n                <ion-col col-8 offset-2>\n                    <button ion-button color="semiDark" type="submit" [disabled]="!signInForm.form.valid" block>Ingresar</button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </form>\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\login\login.html"*/,
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

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewInstitucion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_instituciones_service_instituciones_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_instituciones_list_instituciones_list__ = __webpack_require__(97);
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
    function NewInstitucion(navCtrl, navParams, InstitucionesServiceProvider, AlertController, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.InstitucionesServiceProvider = InstitucionesServiceProvider;
        this.AlertController = AlertController;
        this.formBuilder = formBuilder;
        this.institucion = { nombre: '', direccion: '', telefono: '' };
        this.formNewInstitucion = this.formBuilder.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            direccion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            telefono: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10)])],
        });
        this.nombre = this.formNewInstitucion.controls['nombre'];
        this.direccion = this.formNewInstitucion.controls['direccion'];
        this.telefono = this.formNewInstitucion.controls['telefono'];
    }
    NewInstitucion.prototype.addNewInstitucion = function () {
        var _this = this;
        if (!this.formNewInstitucion.valid) {
            this.AlertController.create({
                title: 'Datos Incorrectos',
                message: 'Los datos ingresados pueden ser incorrectos o faltantes.',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function () { }
                    }
                ]
            }).present();
        }
        else {
            this.InstitucionesServiceProvider.addNewInstitucion(this.institucion).subscribe(function (data) { return _this.alertNewInstitucion(data); });
        }
    };
    NewInstitucion.prototype.alertNewInstitucion = function (data) {
        var _this = this;
        var alert;
        if (!JSON.parse(data._body).error) {
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_instituciones_list_instituciones_list__["a" /* InstitucionesList */]);
    };
    NewInstitucion = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-institucion',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-institucion\new-institucion.html"*/'<ion-header>\n  <ion-navbar color="cultivos" hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Nueva Institucion</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="back-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 padding>\n        <h1 text-center>Nueva Institucion</h1>\n        <p text-center>Ingrese los datos necesarios para generar una nueva institucion.</p>\n      </ion-col>\n      <ion-col col-12 padding class="back-black-color">\n        <h3 padding-top no-margin>Datos generales de la institucion</h3>\n        <form [formGroup]="formNewInstitucion" (ngSubmit)="addNewInstitucion()">\n          <ion-grid>\n            <ion-row>\n              <ion-col col-12 padding-bottom>\n                <ion-row>\n                  <ion-item col-12 class="no-border">\n                    <ion-label stacked>Nombre</ion-label>\n                    <ion-input type="text" [(ngModel)]="institucion.nombre" formControlName="nombre"></ion-input>\n                  </ion-item>\n                  <ion-item col-sm-12 col-md-6 col-lg-6 class="no-border">\n                    <ion-label stacked>Direccion</ion-label>\n                    <ion-input type="text" [(ngModel)]="institucion.direccion" formControlName="direccion"></ion-input>\n                  </ion-item>\n                  <ion-item col-sm-12 col-md-6 col-lg-6 class="no-border">\n                    <ion-label stacked>Telefono</ion-label>\n                    <ion-input type="number" [(ngModel)]="institucion.telefono" formControlName="telefono"></ion-input>\n                  </ion-item>\n                  <ion-col col-12 padding>\n                    <ion-buttons right>\n                        <button ion-button type="submit" color="semiDark">Agregar</button>\n                    </ion-buttons>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-institucion\new-institucion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_instituciones_service_instituciones_service__["a" /* InstitucionesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], NewInstitucion);
    return NewInstitucion;
}());

//# sourceMappingURL=new-institucion.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViajesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(26);
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

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViajesList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
            selector: 'page-viajes-list',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\viajes-list\viajes-list.html"*/'<ion-header>\n  <ion-navbar color="cultivos">\n    <ion-title>Viajes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="back-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 padding>\n        <h1 text-center>Listado de Viajes</h1>\n        <p text-center>Presentacion en forma de lista de los viajes para el ingreso seleccionado</p>\n      </ion-col>\n\n      <ion-col col-12 padding class="back-black-color">\n        <h4 padding-top no-margin>Datos generales de los Viajes</h4>\n        <ion-row padding>\n\n          <!-- Forma Lista -->\n          <ion-col col-12 padding class="back-black-color hidden-md-down">\n            <ion-row padding-top>\n              <ion-col col-12 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2>\n                <ion-list>\n                  <ion-item ion-item class="no-border">\n                    <ion-row>\n                      <ion-col col-3>\n                        <h2 text-center>Fecha</h2>\n                      </ion-col>\n                      <ion-col col-3>\n                        <h2 text-center>Costo</h2>\n                      </ion-col>\n                      <ion-col col-3> \n                        <h2 text-center>Chofer</h2>\n                      </ion-col>\n                      <ion-col col-3 class="vertical-align-icon"> \n                        <h2 text-center>Lugar</h2>\n                      </ion-col>\n                    </ion-row>\n                  </ion-item>\n                  <ion-item  *ngFor="let viaje of viajes" class="no-border">\n                    <ion-row align-items-center>\n                      <ion-col col-3>\n                        <p text-center>{{viaje.fecha}}</p>\n                      </ion-col>\n                      <ion-col col-3>\n                        <p text-center>{{viaje.costo}}</p>\n                      </ion-col>\n                      <ion-col col-3> \n                        <p text-center>{{viaje.camion.nombreChofer}}</p>\n                      </ion-col>\n                      <ion-col col-3> \n                        <p text-center>{{viaje.institucion.nombre}}</p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-item>\n                </ion-list>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n\n          <!-- Formato Card-->\n          <ion-col  *ngFor="let viaje of viajes; let i = \'index\'" offset-sm-1 col-sm-10 col-12 col-md-6 offset-md-0 no-padding class="hidden-lg-up">\n            <ion-list>\n              <ion-item class="no-border">\n                <ion-card>\n                  <ion-card-header no-padding no-margin class="card-hearder-color no-border">\n                      <h2 margin text-center style="color: white">Viaje {{i+1}}</h2>\n                  </ion-card-header>\n                  <ion-card-content>\n                    <ion-list no-padding no-margin>\n                      <ion-item class="no-border">\n                        <ion-icon name="calendar" item-start></ion-icon>\n                        {{viaje.fecha}}\n                      </ion-item>\n                      <ion-item class="no-border">\n                        <ion-icon name="cash" item-start></ion-icon>\n                        {{viaje.costo}}\n                      </ion-item>\n                      <ion-item class="no-border">\n                        <ion-icon name="bus" item-start></ion-icon>\n                        {{viaje.camion.nombreChofer}}\n                      </ion-item>\n                      <ion-item class="no-border">\n                        <ion-icon name="home" item-start></ion-icon>\n                        {{viaje.institucion.nombre}}\n                      </ion-item>\n                    </ion-list>\n                  </ion-card-content>\n                </ion-card>\n              </ion-item>\n            </ion-list>    \n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\viajes-list\viajes-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ViajesList);
    return ViajesList;
}());

//# sourceMappingURL=viajes-list.js.map

/***/ }),

/***/ 196:
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
webpackEmptyAsyncContext.id = 196;

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectSearchableModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_page__ = __webpack_require__(339);
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

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/camiones-list/camiones-list.module": [
		242
	],
	"../pages/chacras-list/chacras-list.module": [
		340
	],
	"../pages/edit-camion/edit-camion.module": [
		338
	],
	"../pages/edit-chacra/edit-chacra.module": [
		342
	],
	"../pages/edit-empresa/edit-empresa.module": [
		343
	],
	"../pages/edit-ingreso/edit-ingreso.module": [
		345
	],
	"../pages/edit-institucion/edit-institucion.module": [
		347
	],
	"../pages/edit-lote/edit-lote.module": [
		349
	],
	"../pages/edit-productor/edit-productor.module": [
		352
	],
	"../pages/empresas-list/empresas-list.module": [
		354
	],
	"../pages/home/home.module": [
		355
	],
	"../pages/ingresos-list/ingresos-list.module": [
		370
	],
	"../pages/instituciones-list/instituciones-list.module": [
		371
	],
	"../pages/login/login.module": [
		372
	],
	"../pages/lotes-list/lotes-list.module": [
		373
	],
	"../pages/new-camion/new-camion.module": [
		380
	],
	"../pages/new-chacra/new-chacra.module": [
		374
	],
	"../pages/new-empresa/new-empresa.module": [
		375
	],
	"../pages/new-institucion/new-institucion.module": [
		378
	],
	"../pages/new-productor/new-productor.module": [
		379
	],
	"../pages/new-viaje-ingreso/new-viaje-ingreso.module": [
		376
	],
	"../pages/new-viaje/new-viaje.module": [
		377
	],
	"../pages/productoresList/productoresList.module": [
		381
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 241;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamionesListModule", function() { return CamionesListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__camiones_list__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CamionesListModule = (function () {
    function CamionesListModule() {
    }
    CamionesListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__camiones_list__["a" /* CamionesList */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__camiones_list__["a" /* CamionesList */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__camiones_list__["a" /* CamionesList */]
            ],
        })
    ], CamionesListModule);
    return CamionesListModule;
}());

//# sourceMappingURL=camiones-list.module.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return urlAPI; });
var urlAPI = 'http://cultivospatagonicos.sytes.net:3000';
//export const urlAPI= 'http://localhost:3000'; 
//# sourceMappingURL=api-service.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCamion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_camiones_service_camiones_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_empresas_service_empresas_service__ = __webpack_require__(52);
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
    function EditCamion(navCtrl, navParams, CamionesServiceProvider, AlertController, formBuilder, EmpresasServiceProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.CamionesServiceProvider = CamionesServiceProvider;
        this.AlertController = AlertController;
        this.formBuilder = formBuilder;
        this.EmpresasServiceProvider = EmpresasServiceProvider;
        this.camion = [];
        this.empresas = [];
        this.selectedEmpresa = {};
        this.empresa_id = this.formBuilder.control('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required);
        this.camion = this.navParams.get('camion');
        this.formEditCamion = this.formBuilder.group({
            nombreChofer: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            patenteAcoplado: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(7), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(7)])],
            patenteChasis: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(7), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(7)])],
            empresa_id: this.empresa_id
        });
        this.nombreChofer = this.formEditCamion.controls['nombreChofer'];
        this.patenteAcoplado = this.formEditCamion.controls['patenteAcoplado'];
        this.patenteChasis = this.formEditCamion.controls['patenteChasis'];
        this.EmpresasServiceProvider.getAllEmpresas()
            .subscribe(function (data) {
            _this.empresas = data;
            _this.empresa_id.setValue(_this.camion['empresa']);
        });
    }
    EditCamion.prototype.editCamion = function (camion) {
        var _this = this;
        if (!this.formEditCamion.valid) {
            this.AlertController.create({
                title: 'Datos Incorrectos',
                message: 'Los datos ingresados pueden ser incorrectos o faltantes.',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function () { }
                    }
                ]
            }).present();
        }
        else {
            this.CamionesServiceProvider.editCamion(this.camion).subscribe(function (data) { return _this.alertEditCamion(data); });
        }
    };
    EditCamion.prototype.alertEditCamion = function (data) {
        var _this = this;
        var alert;
        if (!JSON.parse(data._body).error) {
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
    EditCamion.prototype.empresaChange = function (event) {
        this.camion['empresaId'] = event.value.id;
    };
    EditCamion.prototype.destroyView = function () {
        this.navCtrl.pop();
    };
    EditCamion = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-camion',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-camion\edit-camion.html"*/'<ion-header>\n  <ion-navbar color="cultivos">\n    <ion-title>Editar Camion</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="back-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 padding>\n        <h1 text-center>Editar Camion</h1>\n        <p text-center>Ingrese los datos necesarios para editar un camion existente.</p>\n      </ion-col>\n      <ion-col col-12 padding class="back-black-color">\n        <h3 padding-top no-margin>Datos generales del camion</h3>\n        <form [formGroup]="formEditCamion" (ngSubmit)="editCamion()">\n          <ion-grid>\n            <ion-row>\n              <ion-col col-12 padding-bottom>\n                <ion-row>\n                  <ion-item col-12 class="no-border">\n                    <ion-label stacked>Nombre Chofer</ion-label>\n                    <ion-input type="text" [(ngModel)]="camion.nombreChofer" formControlName="nombreChofer"></ion-input>\n                  </ion-item>\n                  <ion-item col-12 col-md-6 col-lg-6 class="no-border">\n                    <ion-label stacked>Patente Acoplado</ion-label>\n                    <ion-input type="text" [(ngModel)]="camion.patenteAcoplado" formControlName="patenteAcoplado"></ion-input>\n                  </ion-item>\n                  <ion-item col-12 col-md-6 col-lg-6 class="no-border">\n                    <ion-label stacked>Patente Chasis</ion-label>\n                    <ion-input type="text" [(ngModel)]="camion.patenteChasis" formControlName="patenteChasis"></ion-input>\n                  </ion-item>\n                  <ion-item class="no-border">\n                    <select-searchable\n                        [(ngModel)]="camion.empresa"\n                        formControlName="empresa_id"\n                        title="Empresas"\n                        itemValueField="id"\n                        itemTextField="nombre"\n                        [items]="empresas"\n                        [canSearch]="true"\n                        (onChange)="empresaChange($event)">\n                    </select-searchable>\n                  </ion-item>\n                  <ion-col col-12 padding>\n                    <ion-buttons right>\n                        <button ion-button type="submit" color="semiDark">Editar</button>\n                    </ion-buttons>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-camion\edit-camion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_camiones_service_camiones_service__["a" /* CamionesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_empresas_service_empresas_service__["a" /* EmpresasServiceProvider */]])
    ], EditCamion);
    return EditCamion;
}());

//# sourceMappingURL=edit-camion.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCamionModule", function() { return EditCamionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_camion__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_select_select_module__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EditCamionModule = (function () {
    function EditCamionModule() {
    }
    EditCamionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_camion__["a" /* EditCamion */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_camion__["a" /* EditCamion */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_select_select_module__["a" /* SelectSearchableModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__edit_camion__["a" /* EditCamion */]
            ],
        })
    ], EditCamionModule);
    return EditCamionModule;
}());

//# sourceMappingURL=edit-camion.module.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectSearchablePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChacrasListModule", function() { return ChacrasListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chacras_list__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChacrasListModule = (function () {
    function ChacrasListModule() {
    }
    ChacrasListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chacras_list__["a" /* ChacrasList */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chacras_list__["a" /* ChacrasList */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__chacras_list__["a" /* ChacrasList */]
            ],
        })
    ], ChacrasListModule);
    return ChacrasListModule;
}());

//# sourceMappingURL=chacras-list.module.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditChacra; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_chacras_service_chacras_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_productores_service_productores_service__ = __webpack_require__(53);
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
    function EditChacra(navCtrl, navParams, ChacrasServiceProvider, AlertController, formBuilder, ProductoresServiceProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ChacrasServiceProvider = ChacrasServiceProvider;
        this.AlertController = AlertController;
        this.formBuilder = formBuilder;
        this.ProductoresServiceProvider = ProductoresServiceProvider;
        this.chacra = [];
        this.productores = [];
        this.productor = {};
        this.productor_id = this.formBuilder.control('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required);
        this.chacra = this.navParams.get('chacra');
        this.formEditChacra = this.formBuilder.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            renspa: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(12), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(12)])],
            productor_id: this.productor_id,
        });
        this.nombre = this.formEditChacra.controls['nombre'];
        this.renspa = this.formEditChacra.controls['renspa'];
        this.ProductoresServiceProvider.getAllProductores()
            .subscribe(function (data) {
            _this.productores = data;
            _this.productor = _this.productores.filter(function (productor) { return productor.id === _this.chacra['productorId']; })[0];
            _this.productor_id.setValue(_this.productor);
        });
    }
    EditChacra.prototype.editChacra = function (chacra) {
        var _this = this;
        if (!this.formEditChacra.valid) {
            this.AlertController.create({
                title: 'Datos Incorrectos',
                message: 'Los datos ingresados pueden ser incorrectos o faltantes.',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function () { }
                    }
                ]
            }).present();
        }
        else {
            this.ChacrasServiceProvider.editChacra(this.chacra).subscribe(function (data) { return _this.alertEditChacra(data); });
        }
    };
    EditChacra.prototype.alertEditChacra = function (data) {
        var _this = this;
        var alert;
        if (!JSON.parse(data._body).error) {
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
    EditChacra.prototype.productorChange = function (event) {
        this.chacra['productorId'] = event.value.id;
    };
    EditChacra.prototype.destroyView = function () {
        this.navCtrl.pop();
    };
    EditChacra = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-chacra',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-chacra\edit-chacra.html"*/'<ion-header>\n  <ion-navbar color="cultivos">\n    <ion-title>Editar Chacra</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="back-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 padding>\n        <h1 text-center>Editar Chacra</h1>\n        <p text-center>Ingrese los datos necesarios para editar una chacra existente.</p>\n      </ion-col>\n      <ion-col col-12 padding class="back-black-color">\n        <h3 padding-top no-margin>Datos generales de la Chacra</h3>\n        <form [formGroup]="formEditChacra" (ngSubmit)="editChacra()">\n          <ion-grid>\n            <ion-row>\n              <ion-col col-12 padding-bottom>\n                <ion-row>\n                  <ion-item col-12 col-md-6 col-lg-6 class="no-border">\n                    <ion-label stacked>Nombre</ion-label>\n                    <ion-input type="text" [(ngModel)]="chacra.nombre" formControlName="nombre"></ion-input>\n                  </ion-item>\n                  <ion-item col-12 col-md-6 col-lg-6 class="no-border">\n                    <ion-label stacked>Renspa</ion-label>\n                    <ion-input type="text" [(ngModel)]="chacra.renspa" formControlName="renspa"></ion-input>\n                  </ion-item>\n                  <ion-item class="no-border">\n                    <select-searchable\n                        [(ngModel)]="productor"\n                        formControlName="productor_id"\n                        title="Productor"\n                        itemValueField="id"\n                        itemTextField="nombre"\n                        [items]="productores"\n                        [canSearch]="true"\n                        (onChange)="productorChange($event)">\n                    </select-searchable>\n                  </ion-item>\n                  <ion-col col-12 col-md-12 padding>\n                    <ion-buttons right>\n                        <button ion-button type="submit" color="semiDark">Editar</button>\n                    </ion-buttons>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-chacra\edit-chacra.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_chacras_service_chacras_service__["a" /* ChacrasServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_productores_service_productores_service__["a" /* ProductoresServiceProvider */]])
    ], EditChacra);
    return EditChacra;
}());

//# sourceMappingURL=edit-chacra.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditChacraModule", function() { return EditChacraModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_chacra__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_select_select_module__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EditChacraModule = (function () {
    function EditChacraModule() {
    }
    EditChacraModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_chacra__["a" /* EditChacra */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_chacra__["a" /* EditChacra */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_select_select_module__["a" /* SelectSearchableModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__edit_chacra__["a" /* EditChacra */]
            ],
        })
    ], EditChacraModule);
    return EditChacraModule;
}());

//# sourceMappingURL=edit-chacra.module.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEmpresaModule", function() { return EditEmpresaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_empresa__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_select_select_module__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EditEmpresaModule = (function () {
    function EditEmpresaModule() {
    }
    EditEmpresaModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_empresa__["a" /* EditEmpresa */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_empresa__["a" /* EditEmpresa */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_select_select_module__["a" /* SelectSearchableModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__edit_empresa__["a" /* EditEmpresa */]
            ],
        })
    ], EditEmpresaModule);
    return EditEmpresaModule;
}());

//# sourceMappingURL=edit-empresa.module.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEmpresa; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_empresas_service_empresas_service__ = __webpack_require__(52);
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
    function EditEmpresa(navCtrl, navParams, EmpresasServiceProvider, AlertController, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.EmpresasServiceProvider = EmpresasServiceProvider;
        this.AlertController = AlertController;
        this.formBuilder = formBuilder;
        this.empresa = [];
        this.empresa = this.navParams.get('empresa');
        this.formEditEmpresa = this.formBuilder.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            direccion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            telefono: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10)])],
        });
        this.nombre = this.formEditEmpresa.controls['nombre'];
        this.direccion = this.formEditEmpresa.controls['direccion'];
        this.telefono = this.formEditEmpresa.controls['telefono'];
    }
    EditEmpresa.prototype.editEmpresa = function (chacra) {
        var _this = this;
        if (!this.formEditEmpresa.valid) {
            this.AlertController.create({
                title: 'Datos Incorrectos',
                message: 'Los datos ingresados pueden ser incorrectos o faltantes.',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function () { }
                    }
                ]
            }).present();
        }
        else {
            this.EmpresasServiceProvider.editEmpresa(this.empresa).subscribe(function (data) { return _this.alertEditEmpresa(data); });
        }
    };
    EditEmpresa.prototype.alertEditEmpresa = function (data) {
        var _this = this;
        var alert;
        if (!JSON.parse(data._body).error) {
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
            selector: 'page-edit-empresa',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-empresa\edit-empresa.html"*/'<ion-header>\n  <ion-navbar color="cultivos">\n    <ion-title>Editar Empresa</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="back-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 padding>\n        <h1 text-center>Editar Empresa</h1>\n        <p text-center>Ingrese los datos necesarios para generar una empresa existente.</p>\n      </ion-col>\n      <ion-col col-12 padding class="back-black-color">\n        <h3 padding-top no-margin>Datos generales de la empresa</h3>\n        <form [formGroup]="formEditEmpresa" (ngSubmit)="editEmpresa()">\n          <ion-grid>\n            <ion-row>\n              <ion-col col-12 padding-bottom>\n                <ion-row>\n                  <ion-item col-12 class="no-border">\n                    <ion-label stacked>Nombre</ion-label>\n                    <ion-input type="text" [(ngModel)]="empresa.nombre" formControlName="nombre"></ion-input>\n                  </ion-item>\n                  <ion-item col-12 col-md-6 col-lg-6 class="no-border">\n                    <ion-label stacked>Direccion</ion-label>\n                    <ion-input type="text" [(ngModel)]="empresa.direccion" formControlName="direccion"></ion-input>\n                  </ion-item>\n                  <ion-item col-12 col-md-6 col-lg-6 class="no-border">\n                    <ion-label stacked>Telefono</ion-label>\n                    <ion-input type="number" [(ngModel)]="empresa.telefono" formControlName="telefono"></ion-input>\n                  </ion-item>\n                  <ion-col col-12 col-md-12 padding>\n                    <ion-buttons right>\n                        <button ion-button type="submit" color="semiDark">Editar</button>\n                    </ion-buttons>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-empresa\edit-empresa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_empresas_service_empresas_service__["a" /* EmpresasServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], EditEmpresa);
    return EditEmpresa;
}());

//# sourceMappingURL=edit-empresa.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditIngresoModule", function() { return EditIngresoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_ingreso__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_select_select_module__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EditIngresoModule = (function () {
    function EditIngresoModule() {
    }
    EditIngresoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_ingreso__["a" /* EditIngreso */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_ingreso__["a" /* EditIngreso */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_select_select_module__["a" /* SelectSearchableModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__edit_ingreso__["a" /* EditIngreso */]
            ],
        })
    ], EditIngresoModule);
    return EditIngresoModule;
}());

//# sourceMappingURL=edit-ingreso.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditIngreso; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ingresos_service_ingresos_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_instituciones_service_instituciones_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_chacras_service_chacras_service__ = __webpack_require__(43);
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
    function EditIngreso(navCtrl, navParams, IngresosServiceProvider, InstitucionesServiceProvider, ChacrasServiceProvider, AlertController, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.IngresosServiceProvider = IngresosServiceProvider;
        this.InstitucionesServiceProvider = InstitucionesServiceProvider;
        this.ChacrasServiceProvider = ChacrasServiceProvider;
        this.AlertController = AlertController;
        this.formBuilder = formBuilder;
        this.ingreso = [];
        this.ingreso = this.navParams.get('ingreso');
        this.formEditIngreso = this.formBuilder.group({
            nroRemito: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(12), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(12)])],
            fechaIngreso: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
        this.nroRemito = this.formEditIngreso.controls['nroRemito'];
        this.fechaIngreso = this.formEditIngreso.controls['fechaIngreso'];
    }
    EditIngreso.prototype.editIngreso = function (ingreso) {
        var _this = this;
        if (!this.formEditIngreso.valid) {
            this.AlertController.create({
                title: 'Datos Incorrectos',
                message: 'Los datos ingresados pueden ser incorrectos o faltantes.',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function () { }
                    }
                ]
            }).present();
        }
        else {
            this.IngresosServiceProvider.editIngreso(this.ingreso).subscribe(function (data) { return _this.alertEditIngreso(data); });
        }
    };
    EditIngreso.prototype.alertEditIngreso = function (data) {
        var _this = this;
        var alert;
        if (!JSON.parse(data._body).error) {
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
            selector: 'page-edit-ingreso',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-ingreso\edit-ingreso.html"*/'<ion-header>\n  <ion-navbar color="cultivos">\n    <ion-title>Editar Ingreso</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="back-color">\n    <ion-grid>\n        <ion-row>\n            <ion-col col-12 padding>\n              <h1 text-center>Editar Ingreso</h1>\n              <p text-center>Ingrese los datos necesarios para editar un ingreso de fruta existente.</p>\n            </ion-col>\n            <ion-col col-12 padding class="back-black-color">\n                <h3 padding-top no-margin>Datos generales del Ingreso</h3>\n            	<form [formGroup]="formEditIngreso" (ngSubmit)="editIngreso()">\n            	    <ion-grid>\n                        <ion-row>\n                            <ion-col col-12 padding-bottom>\n                                <ion-row>\n                                    <ion-item col-12 col-md-6 col-lg-6 class="no-border">\n                                      <ion-label stacked>Nro Remito</ion-label>\n                                      <ion-input type="text" [(ngModel)]="ingreso.nroRemito" formControlName="nroRemito"></ion-input>\n                                    </ion-item>\n                                    <ion-item col-12 col-md-6 col-lg-6 class="no-border">\n                                      <ion-label stacked>Fecha de Ingreso</ion-label>\n                                      <ion-input type="date" [value]="ingreso.fechaIngreso" (input)="ingreso.fechaIngreso = $event.target.value" formControlName="fechaIngreso"></ion-input>\n                                    </ion-item>\n                                </ion-row>\n                            </ion-col>\n                            <ion-col col-12 padding>\n                                    <ion-buttons right>\n                                        <button ion-button color="semiDark" type="submit">Editar</button>\n                                    </ion-buttons>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n            	</form>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-ingreso\edit-ingreso.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_ingresos_service_ingresos_service__["a" /* IngresosServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_instituciones_service_instituciones_service__["a" /* InstitucionesServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_chacras_service_chacras_service__["a" /* ChacrasServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], EditIngreso);
    return EditIngreso;
}());

//# sourceMappingURL=edit-ingreso.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditInstitucionModule", function() { return EditInstitucionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_institucion__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_select_select_module__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EditInstitucionModule = (function () {
    function EditInstitucionModule() {
    }
    EditInstitucionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_institucion__["a" /* EditInstitucion */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_institucion__["a" /* EditInstitucion */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_select_select_module__["a" /* SelectSearchableModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__edit_institucion__["a" /* EditInstitucion */]
            ],
        })
    ], EditInstitucionModule);
    return EditInstitucionModule;
}());

//# sourceMappingURL=edit-institucion.module.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditInstitucion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_instituciones_service_instituciones_service__ = __webpack_require__(49);
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
    function EditInstitucion(navCtrl, navParams, InstitucionesServiceProvider, AlertController, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.InstitucionesServiceProvider = InstitucionesServiceProvider;
        this.AlertController = AlertController;
        this.formBuilder = formBuilder;
        this.institucion = [];
        this.institucion = this.navParams.get('institucion');
        this.formEditInstitucion = this.formBuilder.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            direccion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            telefono: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10)])],
        });
        this.nombre = this.formEditInstitucion.controls['nombre'];
        this.direccion = this.formEditInstitucion.controls['direccion'];
        this.telefono = this.formEditInstitucion.controls['telefono'];
    }
    EditInstitucion.prototype.editInstitucion = function (institucion) {
        var _this = this;
        if (!this.formEditInstitucion.valid) {
            this.AlertController.create({
                title: 'Datos Incorrectos',
                message: 'Los datos ingresados pueden ser incorrectos o faltantes.',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function () { }
                    }
                ]
            }).present();
        }
        else {
            this.InstitucionesServiceProvider.editInstitucion(this.institucion).subscribe(function (data) { return _this.alertEditInstitucion(data); });
        }
    };
    EditInstitucion.prototype.alertEditInstitucion = function (data) {
        var _this = this;
        var alert;
        if (!JSON.parse(data._body).error) {
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
            selector: 'page-edit-institucion',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-institucion\edit-institucion.html"*/'<ion-header>\n  <ion-navbar color="cultivos">\n    <ion-title>Editar Institucion</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="back-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 padding>\n        <h1 text-center>Editar Institucion</h1>\n        <p text-center>Ingrese los datos necesarios para editar una institucion existente.</p>\n      </ion-col>\n      <ion-col col-12 padding class="back-black-color">\n        <h3 padding-top no-margin>Datos generales de la institucion</h3>\n        <form [formGroup]="formEditInstitucion" (ngSubmit)="editInstitucion()">\n          <ion-grid>\n            <ion-row>\n              <ion-col col-12 padding-bottom>\n                <ion-row>\n                  <ion-item col-12 class="no-border">\n                    <ion-label stacked>Nombre</ion-label>\n                    <ion-input type="text" [(ngModel)]="institucion.nombre" formControlName="nombre"></ion-input>\n                  </ion-item>\n                  <ion-item col-12 col-md-6 col-lg-6 class="no-border">\n                    <ion-label stacked>Direccion</ion-label>\n                    <ion-input type="text" [(ngModel)]="institucion.direccion" formControlName="direccion"></ion-input>\n                  </ion-item>\n                  <ion-item col-12 col-md-6 col-lg-6 class="no-border">\n                    <ion-label stacked>Telefono</ion-label>\n                    <ion-input type="number" [(ngModel)]="institucion.telefono" formControlName="telefono"></ion-input>\n                  </ion-item>\n                  <ion-col ccol-12 padding>\n                    <ion-buttons right>\n                        <button ion-button type="submit" color="semiDark">Editar</button>\n                    </ion-buttons>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-institucion\edit-institucion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_instituciones_service_instituciones_service__["a" /* InstitucionesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], EditInstitucion);
    return EditInstitucion;
}());

//# sourceMappingURL=edit-institucion.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditLoteModule", function() { return EditLoteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_lote__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_select_select_module__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EditLoteModule = (function () {
    function EditLoteModule() {
    }
    EditLoteModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_lote__["a" /* EditLote */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_lote__["a" /* EditLote */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_select_select_module__["a" /* SelectSearchableModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__edit_lote__["a" /* EditLote */]
            ],
        })
    ], EditLoteModule);
    return EditLoteModule;
}());

//# sourceMappingURL=edit-lote.module.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditLote; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_lotes_service_lotes_service__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_calidades_service_calidades_service__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_especie_service_especie_service__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_variedades_service_variedades_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_chacras_service_chacras_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_tratamientos_service_tratamientos_service__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_cuadros_service_cuadros_service__ = __webpack_require__(93);
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
    function EditLote(navCtrl, navParams, LotesServiceProvider, CalidadesServiceProvider, EspecieServiceProvider, VariedadesServiceProvider, ChacrasServiceProvider, TratamientosServiceProvider, CuadrosServiceProvider, AlertController, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.LotesServiceProvider = LotesServiceProvider;
        this.CalidadesServiceProvider = CalidadesServiceProvider;
        this.EspecieServiceProvider = EspecieServiceProvider;
        this.VariedadesServiceProvider = VariedadesServiceProvider;
        this.ChacrasServiceProvider = ChacrasServiceProvider;
        this.TratamientosServiceProvider = TratamientosServiceProvider;
        this.CuadrosServiceProvider = CuadrosServiceProvider;
        this.AlertController = AlertController;
        this.formBuilder = formBuilder;
        this.lote = [];
        this.calidades = [];
        this.variedades = [];
        this.especies = [];
        this.chacras = [];
        this.tratamientos = [];
        this.cuadros = [];
        this.lote = this.navParams.get('lote');
        this.calidad = this.formBuilder.control('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required);
        this.variedad = this.formBuilder.control('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required);
        this.especie = this.formBuilder.control('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required);
        this.chacra = this.formBuilder.control('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required);
        this.tratamiento = this.formBuilder.control('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required);
        this.cuadro = this.formBuilder.control('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required);
        this.formEditLote = this.formBuilder.group({
            nroRemito: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            cantBins: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(7), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(7)])],
            pesoNeto: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(7), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(7)])],
            calidad: this.calidad,
            variedad: this.variedad,
            especie: this.especie,
            chacra: this.chacra,
            tratamiento: this.tratamiento,
            cuadro: this.cuadro
        });
        this.nroRemito = this.formEditLote.controls['nroRemito'];
        this.cantBins = this.formEditLote.controls['cantBins'];
        this.pesoNeto = this.formEditLote.controls['pesoNeto'];
        this.CalidadesServiceProvider.getAllCalidades()
            .subscribe(function (data) {
            _this.calidades = data;
            _this.calidad.setValue(_this.lote['calidad']);
        });
        this.EspecieServiceProvider.getAllEmpecies()
            .subscribe(function (data) {
            _this.especies = data;
            _this.especie.setValue(_this.lote['especy']);
        });
        this.VariedadesServiceProvider.getAllVariedades(this.lote['especy'].id)
            .subscribe(function (data) {
            _this.variedades = data;
            _this.variedad.setValue(_this.lote['variedad']);
        });
        this.ChacrasServiceProvider.getAllChacras()
            .subscribe(function (data) {
            _this.chacras = data;
            _this.chacra.setValue(_this.lote['chacra']);
        });
        this.CuadrosServiceProvider.getAllCuadrosByChacras(this.lote['chacra'].id)
            .subscribe(function (data) {
            _this.cuadros = data;
            _this.cuadro.setValue(_this.lote['cuadro']);
        });
        this.TratamientosServiceProvider.getAllTratamientos()
            .subscribe(function (data) {
            _this.tratamientos = data;
            _this.tratamiento.setValue(_this.lote['tratamiento']);
        });
    }
    EditLote.prototype.editLote = function () {
        var _this = this;
        if (!this.formEditLote.valid) {
            this.AlertController.create({
                title: 'Datos Incorrectos',
                message: 'Los datos ingresados pueden ser incorrectos o faltantes.',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function () { }
                    }
                ]
            }).present();
        }
        else {
            this.LotesServiceProvider.editLote(this.lote).subscribe(function (data) { return _this.alertEditLote(data); });
        }
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
        this.VariedadesServiceProvider.getAllVariedades(lote.especieId)
            .subscribe(function (data) {
            _this.variedades = data;
            _this.variedad.setValue('');
        });
    };
    EditLote.prototype.variedadChange = function (event, lote) {
        lote.variedadId = event.value.id;
    };
    EditLote.prototype.chacraChange = function (event, lote) {
        var _this = this;
        lote.chacraId = event.value.id;
        this.CuadrosServiceProvider.getAllCuadrosByChacras(lote.chacraId)
            .subscribe(function (data) {
            _this.cuadros = data;
            _this.cuadro.setValue('');
        });
    };
    EditLote.prototype.cuadroChange = function (event, lote) {
        lote.cuadroId = event.value.id;
    };
    EditLote.prototype.tratamientoChange = function (event, lote) {
        lote.tratamientoId = event.value.id;
    };
    EditLote.prototype.alertEditLote = function (data) {
        var _this = this;
        var alert;
        if (!JSON.parse(data._body).error) {
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
            selector: 'page-edit-lote',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-lote\edit-lote.html"*/'<ion-header>\n  <ion-navbar color="cultivos">\n    <ion-title>Editar Lote</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="back-color">\n    <ion-grid>\n        <ion-row>\n            <ion-col col-12 padding>\n              <h1 text-center>Editar Lote</h1>\n              <p text-center>Ingrese los datos necesarios para editar un lote de fruta existente.</p>\n            </ion-col>\n            <ion-col col-12 padding class="back-black-color">\n                <h3 padding-top no-margin>Datos generales del Lote</h3>\n            	<form [formGroup]="formEditLote" (ngSubmit)="editLote()">\n            	    <ion-grid>\n                        <ion-row>\n                            <ion-col col-12 padding-bottom>\n                                <ion-row>\n                                    <ion-item col-12 col-md-4 col-lg-4 class="no-border">\n                                      <ion-label stacked>Numero Lote</ion-label>\n                                      <ion-input type="text" [(ngModel)]="lote.nroLote" formControlName="nroRemito"></ion-input>\n                                    </ion-item>\n                                    <ion-item col-12 col-md-4 col-lg-4 class="no-border">\n                                      <ion-label stacked>Cantidad Bins</ion-label>\n                                      <ion-input type="number" [value]="lote.cantBins" (input)="lote.cantBins = $event.target.value" formControlName="cantBins"></ion-input>\n                                    </ion-item>\n                                    <ion-item col-12 col-md-4 col-lg-4 class="no-border">\n                                      <ion-label stacked>Peso</ion-label>\n                                      <ion-input type="number" [value]="lote.pesoNeto" (input)="lote.pesoNeto = $event.target.value" formControlName="pesoNeto"></ion-input>\n                                    </ion-item>\n                                </ion-row>\n                                <ion-col col-12 no-padding>\n                                    <ion-item class="no-border">\n                                        <select-searchable\n                                            [(ngModel)]="lote.calidad"\n                                            formControlName="calidad"\n                                            title="Calidades"\n                                            itemValueField="id"\n                                            itemTextField="tipo"\n                                            [items]="calidades"\n                                            [canSearch]="true"\n                                            (onChange)="calidadChange($event,lote)">\n                                        </select-searchable>\n                                    </ion-item>\n                                </ion-col>\n                                <ion-col col-12 no-padding>\n                                    <ion-item class="no-border">\n                                        <select-searchable\n                                            [(ngModel)]="lote.especy"\n                                            formControlName="especie"\n                                            title="Especies"\n                                            itemValueField="id"\n                                            itemTextField="tipo"\n                                            [items]="especies"\n                                            [canSearch]="true"\n                                            (onChange)="especieChange($event,lote)">\n                                        </select-searchable>\n                                    </ion-item>\n                                </ion-col>\n                                <ion-col col-12 no-padding>\n                                    <ion-item class="no-border">\n                                        <select-searchable\n                                            [(ngModel)]="lote.variedad"\n                                            formControlName="variedad"\n                                            title="Variedades"\n                                            itemValueField="id"\n                                            itemTextField="tipo"\n                                            [items]="variedades"\n                                            [canSearch]="true"\n                                            (onChange)="variedadChange($event,lote)">\n                                        </select-searchable>\n                                    </ion-item>\n                                </ion-col>\n                                <ion-col col-12 no-padding>\n                                    <ion-item class="no-border">\n                                        <select-searchable\n                                            [(ngModel)]="lote.chacra"\n                                            formControlName="chacra"\n                                            title="Chacras"\n                                            itemValueField="id"\n                                            itemTextField="nombre"\n                                            [items]="chacras"\n                                            [canSearch]="true"\n                                            (onChange)="chacraChange($event,lote)">\n                                        </select-searchable>\n                                    </ion-item>\n                                </ion-col>\n                                <ion-col col-12 no-padding>\n                                    <ion-item class="no-border">\n                                        <select-searchable\n                                            [(ngModel)]="lote.cuadro"\n                                            formControlName="cuadro"\n                                            title="Cuadros"\n                                            itemValueField="id"\n                                            itemTextField="up"\n                                            [items]="cuadros"\n                                            [canSearch]="true"\n                                            (onChange)="cuadroChange($event,lote)">\n                                        </select-searchable>\n                                    </ion-item>\n                                </ion-col>\n                                <ion-col col-12 no-padding>\n                                    <ion-item class="no-border">\n                                        <select-searchable\n                                            [(ngModel)]="lote.tratamiento"\n                                            formControlName="tratamiento"\n                                            title="Tratamientos"\n                                            itemValueField="id"\n                                            itemTextField="tipo"\n                                            [items]="tratamientos"\n                                            [canSearch]="true"\n                                            (onChange)="tratamientoChange($event,lote)">\n                                        </select-searchable>\n                                    </ion-item>\n                                </ion-col>\n                            </ion-col>\n                            <ion-col col-12 padding>\n                                <ion-buttons left>\n                                    <button ion-button color="semiDark" type="submit">Editar</button>\n                                </ion-buttons>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n            	</form>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-lote\edit-lote.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_lotes_service_lotes_service__["a" /* LotesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_calidades_service_calidades_service__["a" /* CalidadesServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_especie_service_especie_service__["a" /* EspecieServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_variedades_service_variedades_service__["a" /* VariedadesServiceProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_chacras_service_chacras_service__["a" /* ChacrasServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_tratamientos_service_tratamientos_service__["a" /* TratamientosServiceProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_cuadros_service_cuadros_service__["a" /* CuadrosServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], EditLote);
    return EditLote;
}());

//# sourceMappingURL=edit-lote.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariedadesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(26);
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

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductorModule", function() { return EditProductorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_productor__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_select_select_module__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EditProductorModule = (function () {
    function EditProductorModule() {
    }
    EditProductorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_productor__["a" /* EditProductor */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_productor__["a" /* EditProductor */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_select_select_module__["a" /* SelectSearchableModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__edit_productor__["a" /* EditProductor */]
            ],
        })
    ], EditProductorModule);
    return EditProductorModule;
}());

//# sourceMappingURL=edit-productor.module.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProductor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_productores_service_productores_service__ = __webpack_require__(53);
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
    function EditProductor(navCtrl, navParams, ProductoresServiceProvider, AlertController, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ProductoresServiceProvider = ProductoresServiceProvider;
        this.AlertController = AlertController;
        this.formBuilder = formBuilder;
        this.productor = [];
        this.productor = this.navParams.get('productor');
        this.formEditProductor = this.formBuilder.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            dni: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(8)])],
            telefono: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10)])],
        });
        this.nombre = this.formEditProductor.controls['nombre'];
        this.dni = this.formEditProductor.controls['dni'];
        this.telefono = this.formEditProductor.controls['telefono'];
    }
    EditProductor.prototype.editProductor = function () {
        var _this = this;
        if (!this.formEditProductor.valid) {
            this.AlertController.create({
                title: 'Datos Incorrectos',
                message: 'Los datos ingresados pueden ser incorrectos o faltantes.',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function () { }
                    }
                ]
            }).present();
        }
        else {
            this.ProductoresServiceProvider.editProductor(this.productor).subscribe(function (data) { return _this.alertEditLote(data); });
        }
    };
    EditProductor.prototype.alertEditLote = function (data) {
        var _this = this;
        var alert;
        if (!JSON.parse(data._body).error) {
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
            selector: 'page-edit-productor',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-productor\edit-productor.html"*/'<ion-header>\n  <ion-navbar color="cultivos">\n    <ion-title>Editar Productor</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="back-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 padding>\n        <h1 text-center>Editar Productor</h1>\n        <p text-center>Ingrese los datos necesarios para editar un productor existente.</p>\n      </ion-col>\n      <ion-col col-12 padding class="back-black-color">\n        <h3 padding-top no-margin>Datos generales del productor</h3>\n        <form [formGroup]="formEditProductor" (ngSubmit)="editProductor()">\n          <ion-grid>\n            <ion-row>\n              <ion-col ccol-12 padding-bottom>\n                <ion-row>\n                  <ion-item col-12 class="no-border">\n                    <ion-label stacked>Nombre</ion-label>\n                    <ion-input type="text" [(ngModel)]="productor.nombre" formControlName="nombre"></ion-input>\n                  </ion-item>\n                  <ion-item col-12 col-md-6 col-lg-6 class="no-border">\n                    <ion-label stacked>DNI</ion-label>\n                    <ion-input type="text" [(ngModel)]="productor.dni" formControlName="dni"></ion-input>\n                  </ion-item>\n                  <ion-item col-12 col-md-6 col-lg-6 class="no-border">\n                    <ion-label stacked>Telefono</ion-label>\n                    <ion-input type="number" [(ngModel)]="productor.telefono" formControlName="telefono"></ion-input>\n                  </ion-item>\n                  <ion-col col-12 padding>\n                    <ion-buttons right>\n                        <button ion-button type="submit" color="semiDark">Editar</button>\n                    </ion-buttons>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-productor\edit-productor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_productores_service_productores_service__["a" /* ProductoresServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], EditProductor);
    return EditProductor;
}());

//# sourceMappingURL=edit-productor.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpresasListModule", function() { return EmpresasListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__empresas_list__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EmpresasListModule = (function () {
    function EmpresasListModule() {
    }
    EmpresasListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__empresas_list__["a" /* EmpresasList */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__empresas_list__["a" /* EmpresasList */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__empresas_list__["a" /* EmpresasList */]
            ],
        })
    ], EmpresasListModule);
    return EmpresasListModule;
}());

//# sourceMappingURL=empresas-list.module.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewViaje; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ingresos_service_ingresos_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_camiones_service_camiones_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_instituciones_service_instituciones_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_viajes_service_viajes_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_ingresos_list_ingresos_list__ = __webpack_require__(71);
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
    function NewViaje(navCtrl, navParams, AuthServiceProvider, IngresosServiceProvider, ViajesServiceProvider, CamionesServiceProvider, InstitucionesServiceProvider, AlertController, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.AuthServiceProvider = AuthServiceProvider;
        this.IngresosServiceProvider = IngresosServiceProvider;
        this.ViajesServiceProvider = ViajesServiceProvider;
        this.CamionesServiceProvider = CamionesServiceProvider;
        this.InstitucionesServiceProvider = InstitucionesServiceProvider;
        this.AlertController = AlertController;
        this.formBuilder = formBuilder;
        this.ingresos = [];
        this.viaje = { fecha: this.formatDate(), costo: 0, createdFor: this.AuthServiceProvider.getCurrentUser().email,
            institucionId: '', camionId: '', camiones: [], camion: {}, instituciones: [], institucion: {}, ingresos: [] };
        this.ingresos = this.navParams.get('ingresos');
        this.institucion = this.formBuilder.control('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required);
        this.camion = this.formBuilder.control('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required);
        this.formNewViaje = this.formBuilder.group({
            institucion: this.institucion,
            camion: this.camion,
            fecha: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            costo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        this.fecha = this.formNewViaje.controls['fecha'];
        this.costo = this.formNewViaje.controls['costo'];
        this.InstitucionesServiceProvider.getAllInstituciones()
            .subscribe(function (data) {
            _this.viaje.instituciones = data;
            _this.institucion.setValue('');
        });
        this.CamionesServiceProvider.getAllCamiones()
            .subscribe(function (data) {
            _this.viaje.camiones = data;
            _this.camion.setValue('');
        });
    }
    NewViaje.prototype.camionChange = function (event) {
        this.viaje.camionId = event.value.id;
    };
    NewViaje.prototype.institucionChange = function (event) {
        this.viaje.institucionId = event.value.id;
    };
    NewViaje.prototype.addNewViaje = function () {
        var _this = this;
        if (!this.formNewViaje.valid) {
            this.AlertController.create({
                title: 'Datos Incorrectos',
                message: 'Los datos ingresados pueden ser incorrectos o faltantes.',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function () { }
                    }
                ]
            }).present();
        }
        else {
            this.viaje.ingresos = this.ingresos;
            this.ViajesServiceProvider.addNewViajeWithIngresos(this.viaje).subscribe(function (data) { return _this.alertSuccess(data); });
        }
    };
    NewViaje.prototype.finishAdding = function () {
        this.navCtrl.pop();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_ingresos_list_ingresos_list__["a" /* IngresosList */]);
    };
    NewViaje.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    NewViaje.prototype.formatDate = function () {
        var fecha = new Date();
        return fecha.getFullYear() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getDate();
    };
    NewViaje.prototype.alertSuccess = function (data) {
        var _this = this;
        var alert;
        if (!JSON.parse(data._body).error) {
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
            selector: 'page-new-viaje',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-viaje\new-viaje.html"*/'<ion-header>\n  <ion-navbar color="cultivos" hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Nuevo Viaje</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="back-color">\n    <ion-grid>\n        <ion-row>\n            <ion-col col-12 padding>\n              <h1 text-center>Nuevo Viaje</h1>\n              <p text-center>Ingrese los datos necesarios para generar un nuevo viaje</p>\n            </ion-col>\n            <ion-col col-12 padding class="back-black-color">\n                <h3 padding-top no-margin>Datos generales del Viaje</h3>\n            	<form [formGroup]="formNewViaje" (ngSubmit)="addNewViaje()">\n            	    <ion-grid>\n                        <ion-row>\n                            <ion-col col-12 padding-bottom>\n                                <ion-row>\n                                    <ion-item col-12 col-md-6 col-lg-6 class="no-border">\n                                      <ion-label stacked>Fecha</ion-label>\n                                      <ion-input type="date" [value]="viaje.fecha" (input)="viaje.fecha = $event.target.value" formControlName="fecha"></ion-input>\n                                    </ion-item>\n                                    <ion-item col-12 col-md-6 col-lg-6 class="no-border">\n                                      <ion-label stacked>Costo</ion-label>\n                                      <ion-input type="number" [(ngModel)]="viaje.costo" formControlName="costo">\n                                      </ion-input>\n                                    </ion-item>\n                                </ion-row>\n                                <ion-item class="no-border">\n                                    <select-searchable\n                                        [(ngModel)]="viaje.institucion"\n                                        formControlName="institucion"\n                                        title="Instituciones"\n                                        itemValueField="id"\n                                        itemTextField="nombre"\n                                        [items]="viaje.instituciones"\n                                        [canSearch]="true"\n                                        (onChange)="institucionChange($event)">\n                                    </select-searchable>\n                                </ion-item>\n                                <ion-item class="no-border">\n                                    <select-searchable\n                                        [(ngModel)]="viaje.camion"\n                                        formControlName="camion"\n                                        title="Camiones"\n                                        itemValueField="id"\n                                        itemTextField="nombreChofer"\n                                        [items]="viaje.camiones"\n                                        [canSearch]="true"\n                                        (onChange)="camionChange($event)">\n                                    </select-searchable>\n                                </ion-item>\n                            </ion-col>\n                            <ion-col col-12 padding>\n                                <ion-buttons right>\n                                    <button ion-button color="semiDark" type="button" (click)="goBack()">Volver</button>\n                                    <button ion-button color="semiDark" type="submit">Finalizar</button>\n                                </ion-buttons>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n            	</form>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-viaje\new-viaje.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_ingresos_service_ingresos_service__["a" /* IngresosServiceProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_viajes_service_viajes_service__["a" /* ViajesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_camiones_service_camiones_service__["a" /* CamionesServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_instituciones_service_instituciones_service__["a" /* InstitucionesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], NewViaje);
    return NewViaje;
}());

//# sourceMappingURL=new-viaje.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LotesList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_edit_lote_edit_lote__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_lotes_service_lotes_service__ = __webpack_require__(149);
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
            selector: 'page-lotes-list',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\lotes-list\lotes-list.html"*/'<ion-header>\n  <ion-navbar color="cultivos">\n    <ion-title>Lotes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="back-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 padding>\n        <h1 text-center>Listado de Lotes</h1>\n        <p text-center>Presentacion en forma de lista de los lotes para el ingreso seleccionado<p>\n      </ion-col>\n      <ion-col col-12 padding class="back-black-color">\n        <h4 padding-top no-margin>Lotes</h4>\n        <ion-row padding>\n          <!-- Formato lista-->\n          <ion-col col-12 col-md-10 offset-md-1 class="hidden-md-down">\n            <ion-list>\n              <ion-item ion-item col-12 class="no-border">\n                <ion-row>\n                  <ion-col col-1 class="vertical-align-icon">\n                    <ion-icon class="size-icon" name="information-circle"></ion-icon>\n                  </ion-col>\n                  <ion-col col-1 class="vertical-align-icon">\n                    <ion-icon class="size-icon" name="cube"></ion-icon>\n                  </ion-col>\n                  <ion-col col-1 class="vertical-align-icon"> \n                    <ion-icon class="size-icon" name="podium"></ion-icon>\n                  </ion-col>\n                  <ion-col col-2 class="vertical-align-icon"> \n                    <ion-icon class="size-icon" name="rose"></ion-icon>\n                  </ion-col>\n                  <ion-col col-2 class="vertical-align-icon">\n                    <ion-icon class="size-icon" name="flower"></ion-icon>\n                  </ion-col>\n                  <ion-col col-1 class="vertical-align-icon">\n                    <ion-icon class="size-icon" name="star-half"></ion-icon>\n                  </ion-col>\n                  <ion-col col-2 class="vertical-align-icon">\n                    <ion-icon class="size-icon" name="color-fill"></ion-icon>\n                  </ion-col>\n                  <ion-col col-1 class="vertical-align-icon">\n                    <ion-icon class="size-icon" name="grid"></ion-icon>\n                  </ion-col>\n                  <ion-col col-1 class="vertical-align-icon">\n                    <ion-icon class="size-icon" name="more"></ion-icon>\n                  </ion-col>\n                </ion-row>\n              </ion-item>\n              <ion-item ion-item *ngFor="let lote of lotes" col-12 class="no-border">\n                <ion-row align-items-center>\n                  <ion-col col-1>\n                    <p text-center>{{lote.nroLote}}</p>\n                  </ion-col>\n                  <ion-col col-1>\n                    <p text-center>{{lote.cantBins}} Bins</p>\n                  </ion-col>\n                  <ion-col col-1> \n                    <p text-center>{{lote.pesoNeto}} Kg</p>\n                  </ion-col>\n                  <ion-col col-2> \n                    <p text-center>{{lote.especy.tipo}}</p>\n                  </ion-col>\n                  <ion-col col-2>\n                    <p text-center>{{lote.variedad.tipo}}</p>\n                  </ion-col>\n                  <ion-col col-1>\n                    <p text-center>{{lote.calidad.tipo}}</p>\n                  </ion-col>\n                  <ion-col col-2>\n                    <p text-center>{{lote.tratamiento.tipo}}</p>\n                  </ion-col>\n                  <ion-col col-1>\n                    <p text-center>{{lote.cuadro.up}}</p>\n                  </ion-col>\n                  <ion-col col-1>\n                    <ion-row>\n                      <ion-col col-12 class="vertical-align-icon">\n                        <button ion-button color="semiDark" round icon-only small (click)="goToEditLote(lote)">\n                          <ion-icon name="create"></ion-icon>\n                        </button>\n                      </ion-col>\n                      <ion-col col-12 class="vertical-align-icon">\n                        <button ion-button color="semiDark" round icon-only small \n                          (click)="alertDeleteLote(lote.id)">\n                          <ion-icon name="trash"></ion-icon>\n                        </button>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                </ion-row>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n\n          <!-- Formato Card-->\n          <ion-col *ngFor="let lote of lotes" offset-sm-1 col-sm-10 col-12 col-md-6 offset-md-0 no-padding class="hidden-lg-up">\n            <ion-list>\n              <ion-item class="no-border">\n                <ion-card>\n                  <ion-card-header no-padding no-margin class="card-hearder-color no-border">\n                    <ion-row align-items-center>\n                      <ion-col col-6 no-padding>\n                        <h2 margin text-center style="color: white">Lote Nro {{lote.nroLote}}</h2>\n                      </ion-col>\n                      <ion-col col-6 no-padding> \n                        <ion-buttons right>\n                          <button ion-button clear color="white" icon-only small (click)="goToEditLote(lote)">\n                            <ion-icon name="create"></ion-icon>\n                          </button>\n                          <button ion-button clear color="white" icon-only small (click)="alertDeleteLote(lote.id)">\n                            <ion-icon name="trash"></ion-icon>\n                          </button>\n                        </ion-buttons>\n                      </ion-col>\n                    </ion-row>\n                  </ion-card-header>\n                  <ion-card-content>\n                    <ion-list no-padding no-margin>\n                      <ion-item class="no-border">\n                        <ion-icon name="cube" item-start></ion-icon>\n                        {{lote.cantBins}} Bins\n                      </ion-item>\n                      <ion-item class="no-border">\n                        <ion-icon name="podium" item-start></ion-icon>\n                        {{lote.pesoNeto}} Kgs\n                      </ion-item>\n                      <ion-item class="no-border">\n                        <ion-icon name="rose" item-start></ion-icon>\n                        {{lote.especy.tipo}}\n                      </ion-item>\n                      <ion-item class="no-border">\n                        <ion-icon name="flower" item-start></ion-icon>\n                        {{lote.variedad.tipo}}\n                      </ion-item>\n                      <ion-item class="no-border">\n                        <ion-icon name="star-half" item-start></ion-icon>\n                        {{lote.calidad.tipo}}\n                      </ion-item>\n                      <ion-item class="no-border">\n                        <ion-icon name="color-fill" item-start></ion-icon>\n                        {{lote.tratamiento.tipo}}\n                      </ion-item>\n                      <ion-item class="no-border">\n                        <ion-icon name="grid" item-start></ion-icon>\n                        {{lote.cuadro.up}}\n                      </ion-item>\n                    </ion-list>\n                  </ion-card-content>\n                </ion-card>\n              </ion-item>\n            </ion-list>    \n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\lotes-list\lotes-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_lotes_service_lotes_service__["a" /* LotesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LotesList);
    return LotesList;
}());

//# sourceMappingURL=lotes-list.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrinterView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_printer__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrinterView = (function () {
    function PrinterView(navCtrl, navParams, printer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.printer = printer;
        this.estado = "Apagada";
        this.impresora = "-";
        this.ingreso = [];
        this.ingreso = this.navParams.get('ingreso');
        console.log(this.ingreso);
    }
    PrinterView.prototype.pickPrinter = function () {
        var _this = this;
        this.printer.pick()
            .then(function (newPrinter) { return _this.checkPrinter(newPrinter); })
            .catch(function (error) { return alert('Hubo un error al seleccional la impresora de la lista de impresoras'); });
    };
    PrinterView.prototype.checkPrinter = function (newPrinter) {
        var _this = this;
        this.impresora = newPrinter.split('|')[1];
        this.printer.isAvailable()
            .then(function (result) { return _this.estado = "Lista"; })
            .catch(function (error) { return alert('La impresora no se encuentra lista. Por favor compruebe que se encuentre enchufada y en correcto funcionamiento'); });
    };
    PrinterView.prototype.print = function () {
        if (this.estado === "Lista" && this.impresora !== "-") {
            this.options = {
                name: 'MyDocument',
                printerId: this.impresora,
                duplex: false,
                landscape: false,
                grayscale: true,
                bounds: [0, 0, 0, 0]
            };
            //let context = "<ion-content padding><ion-grid><ion-row><ion-col col-12 padding><h1 text-center>Nuevo Ingresos</h1><p text-center>Ingrese los datos necesarios para generar un nuevo ingreso de fruta.</p></ion-col><ion-col col-12 class='back-black-color'><ion-item col-12 class='no-border'><ion-label stacked>Impresora</ion-label><ion-input type='text' [value]='impresora' (input)='impresora = $event.target.value' [disabled]='true'  name='selectedPrinter'></ion-input></ion-item><ion-item col-12 class='no-border'><button ion-button type='button' color='semiDark' (click)='pickPrinter()'>Seleccionar Impresora</button></ion-item></ion-col></ion-row></ion-grid></ion-content>"
            this.printer.print(this.parserHTML(this.buildHTML()), this.options)
                .then(function (resutl) { alert('Se ha imprimido correctamente'); }, function (error) { alert('Se ha generado un error mientras se realizaba la impresion.'); });
        }
        else {
            alert('Seleccione una impresora o corrobore que se encuentre en estado Lista');
        }
    };
    PrinterView.prototype.parserHTML = function (htmlText) {
        var parser = new DOMParser();
        return parser.parseFromString(htmlText, "text/html").body;
    };
    PrinterView.prototype.buildHTML = function () {
        var contextPrint = "<body style='margin:0px; padding:0px'>";
        var lotesFaltantes = 0;
        console.log(this.ingreso);
        for (var _i = 0, _a = this.ingreso['lotes']; _i < _a.length; _i++) {
            var lote = _a[_i];
            contextPrint = contextPrint + "<div style='width:695px; height: 1040px; float:left; margin: 0px;'>" +
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
            var bodyLote = "<div style='width:335px; height: 342px; float:left; margin: 0px; border-style: dashed;'>" +
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
            var emptyLote = "<div style='width:335px; height: 342px; float:left; margin: 0px;'></div>";
            for (var i = 0; i < lote.cantBins; i++) {
                contextPrint = contextPrint + bodyLote;
            }
            lotesFaltantes = 0;
            if (lote.cantBins % 6 !== 0) {
                lotesFaltantes = 6 - (lote.cantBins % 6);
            }
            for (var j = 0; j < lotesFaltantes; j++) {
                contextPrint = contextPrint + emptyLote;
            }
        }
        contextPrint = contextPrint + "</body>";
        return contextPrint;
    };
    PrinterView = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-printer-view',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\printer-view\printer-view.html"*/'<ion-header>\n  <ion-navbar color="cultivos">\n    <ion-title>Imprimir</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="back-color">\n	<ion-grid>\n	    <ion-row>\n	        <ion-col col-12 padding>\n	          <h1 text-center>Nuevo Ingresos</h1>\n	          <p text-center>Ingrese los datos necesarios para generar un nuevo ingreso de fruta.</p>\n	        </ion-col>\n	        <ion-col col-12 col-lg-10 offset-lg-1 col-md-10 offset-md-1 class="back-black-color">\n	        	<h5 padding-top margin>Seleccione la impresora con la que desea imprimir</h5>\n	        	<ion-row>\n	        		<ion-col col-12>\n			        	<ion-item class="no-border">\n			        	  <ion-label stacked>Impresora</ion-label>\n			        	  <ion-input type="text" [value]="impresora" (input)="impresora = $event.target.value" [disabled]="true"  name="selectedPrinter"></ion-input>\n			        	</ion-item>\n			        </ion-col>\n			        <ion-col col-12>\n			        	<ion-item class="no-border">\n			        	  <ion-label stacked>Estado</ion-label>\n			        	  <ion-input type="text" [value]="estado" (input)="estado = $event.target.value" [disabled]="true"  name="available"></ion-input>\n			        	</ion-item>\n			        </ion-col>\n			        <ion-col col-12>\n			        	<ion-buttons right>\n			        		<button ion-button type="button" color="semiDark" (click)="pickPrinter()">Seleccionar</button>\n			        		<button ion-button type="button" color="semiDark" (click)="print()">Imprimir</button>\n			        	</ion-buttons>\n			        </ion-col>\n		        </ion-row>\n	        </ion-col>\n	    </ion-row>\n	</ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\printer-view\printer-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_printer__["a" /* Printer */]])
    ], PrinterView);
    return PrinterView;
}());

//# sourceMappingURL=printer-view.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresosListModule", function() { return IngresosListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ingresos_list__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IngresosListModule = (function () {
    function IngresosListModule() {
    }
    IngresosListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ingresos_list__["a" /* IngresosList */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ingresos_list__["a" /* IngresosList */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__ingresos_list__["a" /* IngresosList */]
            ],
        })
    ], IngresosListModule);
    return IngresosListModule;
}());

//# sourceMappingURL=ingresos-list.module.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstitucionesListModule", function() { return InstitucionesListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__instituciones_list__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InstitucionesListModule = (function () {
    function InstitucionesListModule() {
    }
    InstitucionesListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__instituciones_list__["a" /* InstitucionesList */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__instituciones_list__["a" /* InstitucionesList */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__instituciones_list__["a" /* InstitucionesList */]
            ],
        })
    ], InstitucionesListModule);
    return InstitucionesListModule;
}());

//# sourceMappingURL=instituciones-list.module.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* Login */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* Login */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* Login */]
            ],
        })
    ], LoginModule);
    return LoginModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotesListModule", function() { return LotesListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lotes_list__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LotesListModule = (function () {
    function LotesListModule() {
    }
    LotesListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lotes_list__["a" /* LotesList */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lotes_list__["a" /* LotesList */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__lotes_list__["a" /* LotesList */]
            ],
        })
    ], LotesListModule);
    return LotesListModule;
}());

//# sourceMappingURL=lotes-list.module.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewChacraModule", function() { return NewChacraModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_chacra__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_select_select_module__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewChacraModule = (function () {
    function NewChacraModule() {
    }
    NewChacraModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__new_chacra__["a" /* NewChacra */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_chacra__["a" /* NewChacra */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_select_select_module__["a" /* SelectSearchableModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__new_chacra__["a" /* NewChacra */]
            ],
        })
    ], NewChacraModule);
    return NewChacraModule;
}());

//# sourceMappingURL=new-chacra.module.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewEmpresaModule", function() { return NewEmpresaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_empresa__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_select_select_module__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewEmpresaModule = (function () {
    function NewEmpresaModule() {
    }
    NewEmpresaModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__new_empresa__["a" /* NewEmpresa */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_empresa__["a" /* NewEmpresa */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_select_select_module__["a" /* SelectSearchableModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__new_empresa__["a" /* NewEmpresa */]
            ],
        })
    ], NewEmpresaModule);
    return NewEmpresaModule;
}());

//# sourceMappingURL=new-empresa.module.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewViajeIngresoModule", function() { return NewViajeIngresoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_viaje_ingreso__ = __webpack_require__(765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_select_select_module__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewViajeIngresoModule = (function () {
    function NewViajeIngresoModule() {
    }
    NewViajeIngresoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__new_viaje_ingreso__["a" /* NewViajeIngreso */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_viaje_ingreso__["a" /* NewViajeIngreso */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_select_select_module__["a" /* SelectSearchableModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__new_viaje_ingreso__["a" /* NewViajeIngreso */]
            ],
        })
    ], NewViajeIngresoModule);
    return NewViajeIngresoModule;
}());

//# sourceMappingURL=new-viaje-ingreso.module.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewViajeModule", function() { return NewViajeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_viaje__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_select_select_module__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewViajeModule = (function () {
    function NewViajeModule() {
    }
    NewViajeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__new_viaje__["a" /* NewViaje */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_viaje__["a" /* NewViaje */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_select_select_module__["a" /* SelectSearchableModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__new_viaje__["a" /* NewViaje */]
            ],
        })
    ], NewViajeModule);
    return NewViajeModule;
}());

//# sourceMappingURL=new-viaje.module.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewInstitucionModule", function() { return NewInstitucionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_institucion__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_select_select_module__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewInstitucionModule = (function () {
    function NewInstitucionModule() {
    }
    NewInstitucionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__new_institucion__["a" /* NewInstitucion */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_institucion__["a" /* NewInstitucion */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_select_select_module__["a" /* SelectSearchableModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__new_institucion__["a" /* NewInstitucion */]
            ],
        })
    ], NewInstitucionModule);
    return NewInstitucionModule;
}());

//# sourceMappingURL=new-institucion.module.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProductorModule", function() { return NewProductorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_productor__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_select_select_module__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewProductorModule = (function () {
    function NewProductorModule() {
    }
    NewProductorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__new_productor__["a" /* NewProductor */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_productor__["a" /* NewProductor */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_select_select_module__["a" /* SelectSearchableModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__new_productor__["a" /* NewProductor */]
            ],
        })
    ], NewProductorModule);
    return NewProductorModule;
}());

//# sourceMappingURL=new-productor.module.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCamionModule", function() { return NewCamionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_camion__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_select_select_module__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewCamionModule = (function () {
    function NewCamionModule() {
    }
    NewCamionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__new_camion__["a" /* NewCamion */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_camion__["a" /* NewCamion */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_select_select_module__["a" /* SelectSearchableModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__new_camion__["a" /* NewCamion */]
            ],
        })
    ], NewCamionModule);
    return NewCamionModule;
}());

//# sourceMappingURL=new-camion.module.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoresListModule", function() { return ProductoresListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productoresList__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductoresListModule = (function () {
    function ProductoresListModule() {
    }
    ProductoresListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__productoresList__["a" /* ProductoresList */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__productoresList__["a" /* ProductoresList */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__productoresList__["a" /* ProductoresList */]
            ],
        })
    ], ProductoresListModule);
    return ProductoresListModule;
}());

//# sourceMappingURL=productoresList.module.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_side_menu_redirect_events__ = __webpack_require__(783);
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

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(429);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_side_menu_content_side_menu_content_component__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_printer__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home_module__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login_module__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_productoresList_productoresList_module__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_new_productor_new_productor_module__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_edit_productor_edit_productor_module__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_chacras_list_chacras_list_module__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_new_chacra_new_chacra_module__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_edit_chacra_edit_chacra_module__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_camiones_list_camiones_list_module__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_new_camion_new_camion_module__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_edit_camion_edit_camion_module__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_empresas_list_empresas_list_module__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_new_empresa_new_empresa_module__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_edit_empresa_edit_empresa_module__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_instituciones_list_instituciones_list_module__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_new_institucion_new_institucion_module__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_edit_institucion_edit_institucion_module__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_new_ingreso_new_ingreso_module__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_ingresos_list_ingresos_list_module__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_edit_ingreso_edit_ingreso_module__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_edit_lote_edit_lote_module__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_new_viaje_new_viaje_module__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_new_viaje_ingreso_new_viaje_ingreso_module__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_viajes_list_viajes_list_module__ = __webpack_require__(786);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_lotes_list_lotes_list_module__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_printer_view_printer_view__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_status_bar__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_splash_screen__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__shared_select_select_module__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_angularfire2__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_angularfire2_auth__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_auth_service_auth_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_camiones_service_camiones_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_empresas_service_empresas_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_instituciones_service_instituciones_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_cuadros_service_cuadros_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_ingresos_service_ingresos_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__providers_especie_service_especie_service__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_calidades_service_calidades_service__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_variedades_service_variedades_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_chacras_service_chacras_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__providers_productores_service_productores_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__providers_lotes_service_lotes_service__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__providers_tratamientos_service_tratamientos_service__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__providers_viajes_service_viajes_service__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















































var firebaseConfig = {
    apiKey: "AIzaSyBAxnE0e9OGn8Vs-iXAex0WOKezzml0F8Y",
    authDomain: "cultivos-patagonicos-app.firebaseapp.com",
    databaseURL: "https://cultivos-patagonicos-app.firebaseio.com",
    projectId: "cultivos-patagonicos-app",
    storageBucket: "cultivos-patagonicos-app.appspot.com",
    messagingSenderId: "203353588881"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__shared_side_menu_content_side_menu_content_component__["a" /* SideMenuContentComponent */],
                __WEBPACK_IMPORTED_MODULE_31__pages_printer_view_printer_view__["a" /* PrinterView */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/camiones-list/camiones-list.module#CamionesListModule', name: 'CamionesList', segment: 'camiones-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-camion/edit-camion.module#EditCamionModule', name: 'EditCamion', segment: 'edit-camion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chacras-list/chacras-list.module#ChacrasListModule', name: 'ChacrasList', segment: 'chacras-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-chacra/edit-chacra.module#EditChacraModule', name: 'EditChacra', segment: 'edit-chacra', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-empresa/edit-empresa.module#EditEmpresaModule', name: 'EditEmpresa', segment: 'edit-empresa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-ingreso/edit-ingreso.module#EditIngresoModule', name: 'EditIngreso', segment: 'edit-ingreso', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-institucion/edit-institucion.module#EditInstitucionModule', name: 'EditInstitucion', segment: 'edit-institucion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-lote/edit-lote.module#EditLoteModule', name: 'EditLote', segment: 'edit-lote', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-productor/edit-productor.module#EditProductorModule', name: 'EditProductor', segment: 'edit-productor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/empresas-list/empresas-list.module#EmpresasListModule', name: 'EmpresasList', segment: 'empresas-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ingresos-list/ingresos-list.module#IngresosListModule', name: 'IngresosList', segment: 'ingresos-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/instituciones-list/instituciones-list.module#InstitucionesListModule', name: 'InstitucionesList', segment: 'instituciones-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginModule', name: 'Login', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lotes-list/lotes-list.module#LotesListModule', name: 'LotesList', segment: 'lotes-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-chacra/new-chacra.module#NewChacraModule', name: 'NewChacra', segment: 'new-chacra', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-empresa/new-empresa.module#NewEmpresaModule', name: 'NewEmpresa', segment: 'new-empresa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-viaje-ingreso/new-viaje-ingreso.module#NewViajeIngresoModule', name: 'NewViajeIngreso', segment: 'new-viaje-ingreso', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-viaje/new-viaje.module#NewViajeModule', name: 'NewViaje', segment: 'new-viaje', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-institucion/new-institucion.module#NewInstitucionModule', name: 'NewInstitucion', segment: 'new-institucion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-productor/new-productor.module#NewProductorModule', name: 'NewProductor', segment: 'new-productor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-camion/new-camion.module#NewCamionModule', name: 'NewCamion', segment: 'new-camion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productoresList/productoresList.module#ProductoresListModule', name: 'ProductoresList', segment: 'productoresList', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_36_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_37_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_35__shared_select_select_module__["a" /* SelectSearchableModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login_module__["LoginModule"],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home_module__["HomePageModule"],
                __WEBPACK_IMPORTED_MODULE_8__pages_productoresList_productoresList_module__["ProductoresListModule"],
                __WEBPACK_IMPORTED_MODULE_9__pages_new_productor_new_productor_module__["NewProductorModule"],
                __WEBPACK_IMPORTED_MODULE_10__pages_edit_productor_edit_productor_module__["EditProductorModule"],
                __WEBPACK_IMPORTED_MODULE_11__pages_chacras_list_chacras_list_module__["ChacrasListModule"],
                __WEBPACK_IMPORTED_MODULE_12__pages_new_chacra_new_chacra_module__["NewChacraModule"],
                __WEBPACK_IMPORTED_MODULE_13__pages_edit_chacra_edit_chacra_module__["EditChacraModule"],
                __WEBPACK_IMPORTED_MODULE_14__pages_camiones_list_camiones_list_module__["CamionesListModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_new_camion_new_camion_module__["NewCamionModule"],
                __WEBPACK_IMPORTED_MODULE_16__pages_edit_camion_edit_camion_module__["EditCamionModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_empresas_list_empresas_list_module__["EmpresasListModule"],
                __WEBPACK_IMPORTED_MODULE_18__pages_new_empresa_new_empresa_module__["NewEmpresaModule"],
                __WEBPACK_IMPORTED_MODULE_19__pages_edit_empresa_edit_empresa_module__["EditEmpresaModule"],
                __WEBPACK_IMPORTED_MODULE_20__pages_instituciones_list_instituciones_list_module__["InstitucionesListModule"],
                __WEBPACK_IMPORTED_MODULE_21__pages_new_institucion_new_institucion_module__["NewInstitucionModule"],
                __WEBPACK_IMPORTED_MODULE_22__pages_edit_institucion_edit_institucion_module__["EditInstitucionModule"],
                __WEBPACK_IMPORTED_MODULE_24__pages_ingresos_list_ingresos_list_module__["IngresosListModule"],
                __WEBPACK_IMPORTED_MODULE_23__pages_new_ingreso_new_ingreso_module__["a" /* NewIngresoModule */],
                __WEBPACK_IMPORTED_MODULE_25__pages_edit_ingreso_edit_ingreso_module__["EditIngresoModule"],
                __WEBPACK_IMPORTED_MODULE_26__pages_edit_lote_edit_lote_module__["EditLoteModule"],
                __WEBPACK_IMPORTED_MODULE_27__pages_new_viaje_new_viaje_module__["NewViajeModule"],
                __WEBPACK_IMPORTED_MODULE_29__pages_viajes_list_viajes_list_module__["a" /* ViajesListModule */],
                __WEBPACK_IMPORTED_MODULE_30__pages_lotes_list_lotes_list_module__["LotesListModule"],
                __WEBPACK_IMPORTED_MODULE_28__pages_new_viaje_ingreso_new_viaje_ingreso_module__["NewViajeIngresoModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_31__pages_printer_view_printer_view__["a" /* PrinterView */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_printer__["a" /* Printer */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_48__providers_productores_service_productores_service__["a" /* ProductoresServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_47__providers_chacras_service_chacras_service__["a" /* ChacrasServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_38__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_39__providers_camiones_service_camiones_service__["a" /* CamionesServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_40__providers_empresas_service_empresas_service__["a" /* EmpresasServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_41__providers_instituciones_service_instituciones_service__["a" /* InstitucionesServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_42__providers_cuadros_service_cuadros_service__["a" /* CuadrosServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_43__providers_ingresos_service_ingresos_service__["a" /* IngresosServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_44__providers_especie_service_especie_service__["a" /* EspecieServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_45__providers_calidades_service_calidades_service__["a" /* CalidadesServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_46__providers_variedades_service_variedades_service__["a" /* VariedadesServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_49__providers_lotes_service_lotes_service__["a" /* LotesServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_50__providers_tratamientos_service_tratamientos_service__["a" /* TratamientosServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_51__providers_viajes_service_viajes_service__["a" /* ViajesServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChacrasServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(26);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CamionesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(26);
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

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstitucionesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(26);
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

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(356);
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

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpresasServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(26);
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

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoresServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(26);
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

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IngresosServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(26);
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
    IngresosServiceProvider.prototype.getAllSimplifyIngresos = function () {
        return this.http.get(this.urlAPI + '/simplifyIngresos')
            .map(this.extractData)
            .do(function (res) { return console.log(res); })
            .catch(this.catchError);
    };
    IngresosServiceProvider.prototype.getAllIngresosWithViajes = function (ingresoId) {
        return this.http.get(this.urlAPI + '/withViajes/' + ingresoId)
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

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IngresosList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ingresos_service_ingresos_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_edit_ingreso_edit_ingreso__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_new_ingreso_new_ingreso__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_viajes_list_viajes_list__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_lotes_list_lotes_list__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_printer_view_printer_view__ = __webpack_require__(367);
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
    IngresosList.prototype.goToAddIngreso = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_new_ingreso_new_ingreso__["a" /* NewIngreso */]);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_viajes_list_viajes_list__["a" /* ViajesList */], {
            viajes: ingreso.ingresos_viajes
        });
    };
    IngresosList.prototype.goToLotes = function (ingreso) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_lotes_list_lotes_list__["a" /* LotesList */], {
            lotes: ingreso.lotes
        });
    };
    IngresosList.prototype.goToPrint = function (ingreso) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_printer_view_printer_view__["a" /* PrinterView */], {
            ingreso: ingreso
        });
    };
    IngresosList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ingresos-list',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\ingresos-list\ingresos-list.html"*/'<ion-header>\n  <ion-navbar color="cultivos" hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Ingresos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="back-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <h1 padding text-center>Listado de Ingresos</h1>\n        <p text-center>Listado de de todos los ingresos de fruta con sus correspondientes lotes</p>\n      </ion-col>\n      <ion-col padding col-12 class="accordion-list" *ngFor=" let ingreso of ingresosList; let i = \'index\'">\n        <button ion-item class="no-border-cards" (click)="toggleIngreso(i)" detail-none [ngClass]="{ \'section-active\': ingreso.open, \'section\': !ingreso.open }">\n          <ion-row align-items-center>\n            <ion-col col-sm-1 col-md-1 col-lg-1 class="hidden-xs-down">\n              <ion-icon item-left name="arrow-forward" *ngIf="!ingreso.open"></ion-icon>\n              <ion-icon item-left name="arrow-down" *ngIf="ingreso.open"></ion-icon>\n            </ion-col>        \n            <ion-col col-12 col-sm-7 col-md-9 col-lg-9>\n              <h2 padding text-center>Remito {{ingreso.nroRemito}}</h2>\n            </ion-col>\n            <ion-col col-8 offset-2 col-sm-4 col-md-2 col-lg-2 offset-sm-0 offset-md-0 offset-lg-0>\n              <ion-buttons>\n                <ion-row align-items-center>\n                  <ion-col col-2 class="vertical-align-icon">\n                    <button ion-button icon-only small outline color="white" (click)="goToLotes(ingreso)"><ion-icon name="cube"></ion-icon></button>\n                  </ion-col>\n                  <ion-col col-2 class="vertical-align-icon">\n                    <button ion-button icon-only small outline color="white" (click)="goToViajes(ingreso)"><ion-icon name="bus"></ion-icon></button>\n                  </ion-col>\n                  <ion-col col-2 class="vertical-align-icon">\n                    <button ion-button icon-only small outline color="white" (click)="goToEditIngreso(ingreso)"><ion-icon name="create"></ion-icon></button>\n                  </ion-col>\n                  <ion-col col-2 class="vertical-align-icon">\n                    <button ion-button icon-only small outline color="white" (click)="alertDeleteIngreso(ingreso.id)"><ion-icon name="trash"></ion-icon></button>\n                  </ion-col>\n                  <ion-col col-2 class="vertical-align-icon">\n                    <button ion-button icon-only small outline color="white" (click)="goToPrint(ingreso)"><ion-icon name="print"></ion-icon></button>\n                  </ion-col>\n                </ion-row>\n              </ion-buttons>\n            </ion-col>\n          </ion-row>\n        </button>\n        <ion-grid *ngIf="ingreso.open" class="back-black-color">\n          <ion-row>\n            <ion-col padding col-sm-12 col-md-12>\n              <ion-row>\n                <ion-col padding col-sm-12 col-md-6>\n                  <ion-item class="no-border">\n                    <ion-icon name="calendar" item-start></ion-icon>\n                      {{ingreso.fechaIngreso}}\n                  </ion-item>\n                </ion-col>\n                <ion-col padding col-sm-12 col-md-6>\n                  <ion-item class="no-border">\n                    <ion-icon name="contact" item-start></ion-icon>\n                      {{ingreso.createdFor}}\n                  </ion-item>\n                </ion-col>\n                <ion-col padding col-sm-12 col-md-4>\n                  <ion-item class="no-border">\n                    <ion-icon name="leaf" item-start></ion-icon>\n                      {{ingreso.lotes[0].chacra.renspa}} - {{ingreso.lotes[0].chacra.nombre}}\n                  </ion-item>\n                </ion-col>\n                <ion-col padding col-sm-12 col-md-4>\n                  <ion-item class="no-border">\n                    <ion-icon name="home" item-start></ion-icon>\n                      {{ingreso.ingresos_viajes[0].institucion.nombre}}\n                  </ion-item>\n                </ion-col>\n                <ion-col padding col-sm-12 col-md-4>\n                  <ion-item class="no-border">\n                    <ion-icon name="bus" item-start></ion-icon>\n                      {{ingreso.ingresos_viajes[0].camion.nombreChofer}}\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <!--ion-col *ngFor="let lote of ingreso.lotes" padding col-sm-12 col-md-4>\n              <ion-list>\n                <ion-item class="no-border">\n                  <ion-card>\n                    <ion-card-header no-padding no-margin class="card-hearder-color no-border">\n                      <ion-row>\n                        <ion-col col-md-6 no-padding>\n                          <h2 margin text-center class="black-color">Lote Nro {{lote.nroLote}}</h2>\n                        </ion-col>\n                        <ion-col col-md-6 no-padding> \n                          <ion-buttons right>\n                            <button ion-button clear color="white" icon-only small (click)="goToEditLote(lote)">\n                              <ion-icon name="create"></ion-icon>\n                            </button>\n                            <button ion-button clear color="white" icon-only small (click)="alertDeleteLote(lote.id)">\n                              <ion-icon name="trash"></ion-icon>\n                            </button>\n                          </ion-buttons>\n                        </ion-col>\n                      </ion-row>\n                    </ion-card-header>\n                    <ion-card-content>\n                      <ion-list no-padding no-margin>\n                        <ion-item class="no-border">\n                          <ion-icon name="cube" item-start></ion-icon>\n                          {{lote.cantBins}} Bins\n                        </ion-item>\n                        <ion-item class="no-border">\n                          <ion-icon name="podium" item-start></ion-icon>\n                          {{lote.pesoNeto}} Kgs\n                        </ion-item>\n                        <ion-item class="no-border">\n                          <ion-icon name="rose" item-start></ion-icon>\n                          {{lote.especy.tipo}}\n                        </ion-item>\n                        <ion-item class="no-border">\n                          <ion-icon name="flower" item-start></ion-icon>\n                          {{lote.variedad.tipo}}\n                        </ion-item>\n                        <ion-item class="no-border">\n                          <ion-icon name="star-half" item-start></ion-icon>\n                          {{lote.calidad.tipo}}\n                        </ion-item>\n                        <ion-item class="no-border">\n                          <ion-icon name="color-fill" item-start></ion-icon>\n                          {{lote.tratamiento.tipo}}\n                        </ion-item>\n                        <ion-item class="no-border">\n                          <ion-icon name="grid" item-start></ion-icon>\n                          {{lote.cuadro.up}}\n                        </ion-item>\n                      </ion-list>\n                    </ion-card-content>\n                  </ion-card>\n                </ion-item>\n              </ion-list>    \n            </ion-col-->\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-fab bottom right padding margin>\n      <button ion-fab color="semiDark" (click)="goToAddIngreso()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\ingresos-list\ingresos-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_ingresos_service_ingresos_service__["a" /* IngresosServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], IngresosList);
    return IngresosList;
}());

//# sourceMappingURL=ingresos-list.js.map

/***/ }),

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectSearchable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_page__ = __webpack_require__(339);
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
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
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

/***/ 753:
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

/***/ 754:
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

/***/ 755:
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

/***/ 756:
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

/***/ 757:
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

/***/ 758:
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

/***/ 759:
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

/***/ 760:
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

/***/ 761:
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

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewViajeIngreso; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_camiones_service_camiones_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_instituciones_service_instituciones_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_ingresos_service_ingresos_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_viajes_service_viajes_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_viajes_list_viajes_list__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var NewViajeIngreso = (function () {
    function NewViajeIngreso(navCtrl, navParams, CamionesServiceProvider, InstitucionesServiceProvider, IngresosServiceProvider, ViajesServiceProvider, AuthServiceProvider, formBuilder, AlertController) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.CamionesServiceProvider = CamionesServiceProvider;
        this.InstitucionesServiceProvider = InstitucionesServiceProvider;
        this.IngresosServiceProvider = IngresosServiceProvider;
        this.ViajesServiceProvider = ViajesServiceProvider;
        this.AuthServiceProvider = AuthServiceProvider;
        this.formBuilder = formBuilder;
        this.AlertController = AlertController;
        this.viaje = { fecha: this.formatDate(), costo: 0, createdFor: this.AuthServiceProvider.getCurrentUser().email,
            ingresoId: '', camionId: '', institucionId: '', ingreso: {}, camion: {}, institucion: {} };
        this.ingresos = [];
        this.camiones = [];
        this.instituciones = [];
        this.formNewViajeIngreso = this.formBuilder.group({
            fecha: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            costo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            ingreso: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            camion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            institucion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
        this.IngresosServiceProvider.getAllSimplifyIngresos()
            .subscribe(function (data) {
            _this.ingresos = data;
            _this.formNewViajeIngreso.controls['ingreso'].setValue('');
        });
        this.CamionesServiceProvider.getAllCamiones()
            .subscribe(function (data) {
            _this.camiones = data;
            _this.formNewViajeIngreso.controls['camion'].setValue('');
        });
        this.InstitucionesServiceProvider.getAllInstituciones()
            .subscribe(function (data) {
            _this.instituciones = data;
            _this.formNewViajeIngreso.controls['institucion'].setValue('');
        });
    }
    NewViajeIngreso.prototype.camionChange = function (event) {
        this.viaje.camionId = event.value.id;
    };
    NewViajeIngreso.prototype.institucionChange = function (event) {
        this.viaje.institucionId = event.value.id;
    };
    NewViajeIngreso.prototype.ingresoChange = function (event) {
        this.viaje.ingresoId = event.value.id;
    };
    NewViajeIngreso.prototype.addNewViajeIngreso = function () {
        var _this = this;
        if (!this.formNewViajeIngreso.valid) {
            this.AlertController.create({
                title: 'Datos Incorrectos',
                message: 'Los datos ingresados pueden ser incorrectos o faltantes.',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function () { }
                    }
                ]
            }).present();
        }
        else {
            this.ViajesServiceProvider.addNewViaje(this.viaje).subscribe(function (data) { return _this.alertNewViajeIngreso(data); });
        }
    };
    NewViajeIngreso.prototype.alertNewViajeIngreso = function (data) {
        var _this = this;
        var alert;
        if (!JSON.parse(data._body).error) {
            alert = this.AlertController.create({
                title: 'Creacion exitosa',
                message: 'Se ha creado correctamente el nuevo viaje.',
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
                message: 'Se ha producido un error al intentar ingresar el nuevo viaje.',
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
    NewViajeIngreso.prototype.destroyView = function () {
        var _this = this;
        this.IngresosServiceProvider.getAllIngresosWithViajes(this.viaje.ingresoId).subscribe(function (data) {
            _this.navCtrl.pop();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_viajes_list_viajes_list__["a" /* ViajesList */], {
                viajes: data[0].ingresos_viajes
            });
        });
    };
    NewViajeIngreso.prototype.formatDate = function () {
        var fecha = new Date();
        return fecha.getFullYear() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getDate();
    };
    NewViajeIngreso = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-viaje-ingreso',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-viaje-ingreso\new-viaje-ingreso.html"*/'<ion-header>\n  <ion-navbar color="cultivos" hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Nuevo Viaje</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="back-color">\n    <ion-grid>\n        <ion-row>\n            <ion-col col-12 padding>\n              <h1 text-center>Nuevo Viaje</h1>\n              <p text-center>Ingrese los datos necesarios para generar un nuevo viaje</p>\n            </ion-col>\n            <ion-col col-12 padding class="back-black-color">\n                <h3 padding-top no-margin>Datos generales del Viaje</h3>\n            	<form [formGroup]="formNewViajeIngreso" (ngSubmit)="addNewViajeIngreso()">\n            	    <ion-grid>\n                        <ion-row>\n                            <ion-col col-12 padding-bottom>\n                                <ion-row>\n                                    <ion-item col-12 col-md-6 col-lg-6 class="no-border">\n                                      <ion-label stacked>Fecha</ion-label>\n                                      <ion-input type="date" [value]="viaje.fecha" (input)="viaje.fecha = $event.target.value" formControlName="fecha"></ion-input>\n                                    </ion-item>\n                                    <ion-item col-12 col-md-6 col-lg-6 class="no-border">\n                                      <ion-label stacked>Costo</ion-label>\n                                      <ion-input type="number" [(ngModel)]="viaje.costo" formControlName="costo">\n                                      </ion-input>\n                                    </ion-item>\n                                </ion-row>\n                                <ion-item class="no-border">\n                                    <select-searchable\n                                        [(ngModel)]="viaje.ingreso"\n                                        formControlName="ingreso"\n                                        title="Ingresos"\n                                        itemValueField="id"\n                                        itemTextField="nroRemito"\n                                        [items]="ingresos"\n                                        [canSearch]="true"\n                                        (onChange)="ingresoChange($event)">\n                                    </select-searchable>\n                                </ion-item>\n                                <ion-item class="no-border">\n                                    <select-searchable\n                                        [(ngModel)]="viaje.institucion"\n                                        formControlName="institucion"\n                                        title="Instituciones"\n                                        itemValueField="id"\n                                        itemTextField="nombre"\n                                        [items]="instituciones"\n                                        [canSearch]="true"\n                                        (onChange)="institucionChange($event)">\n                                    </select-searchable>\n                                </ion-item>\n                                <ion-item class="no-border">\n                                    <select-searchable\n                                        [(ngModel)]="viaje.camion"\n                                        formControlName="camion"\n                                        title="Camiones"\n                                        itemValueField="id"\n                                        itemTextField="nombreChofer"\n                                        [items]="camiones"\n                                        [canSearch]="true"\n                                        (onChange)="camionChange($event)">\n                                    </select-searchable>\n                                </ion-item>\n                            </ion-col>\n                            <ion-col col-12 padding>\n                                <ion-buttons right>\n                                    <button ion-button color="semiDark" type="submit">Agregar</button>\n                                </ion-buttons>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n            	</form>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-viaje-ingreso\new-viaje-ingreso.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_camiones_service_camiones_service__["a" /* CamionesServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_camiones_service_camiones_service__["a" /* CamionesServiceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__providers_instituciones_service_instituciones_service__["a" /* InstitucionesServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_instituciones_service_instituciones_service__["a" /* InstitucionesServiceProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__providers_ingresos_service_ingresos_service__["a" /* IngresosServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_ingresos_service_ingresos_service__["a" /* IngresosServiceProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__providers_viajes_service_viajes_service__["a" /* ViajesServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_viajes_service_viajes_service__["a" /* ViajesServiceProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _j || Object])
    ], NewViajeIngreso);
    return NewViajeIngreso;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=new-viaje-ingreso.js.map

/***/ }),

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuRedirectEvent; });
// SideMenuRedirectEvent constant
var SideMenuRedirectEvent = 'sidemenu:redirect';
//# sourceMappingURL=side-menu-redirect-events.js.map

/***/ }),

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_side_menu_content_side_menu_content_component__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_productoresList_productoresList__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_new_productor_new_productor__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_chacras_list_chacras_list__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_new_chacra_new_chacra__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_camiones_list_camiones_list__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_new_camion_new_camion__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_empresas_list_empresas_list__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_new_empresa_new_empresa__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_instituciones_list_instituciones_list__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_new_institucion_new_institucion__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_ingresos_list_ingresos_list__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_new_ingreso_new_ingreso__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_new_viaje_ingreso_new_viaje_ingreso__ = __webpack_require__(765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_auth_service_auth_service__ = __webpack_require__(50);
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
            displayName: "Viajes",
            subItems: [
                {
                    displayName: "Nuevo Viaje",
                    iconName: 'add',
                    component: __WEBPACK_IMPORTED_MODULE_19__pages_new_viaje_ingreso_new_viaje_ingreso__["a" /* NewViajeIngreso */],
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
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__shared_side_menu_content_side_menu_content_component__["a" /* SideMenuContentComponent */]),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_side_menu_content_side_menu_content_component__["a" /* SideMenuContentComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_side_menu_content_side_menu_content_component__["a" /* SideMenuContentComponent */]) === "function" && _b || Object)
    ], MyApp.prototype, "sideMenu", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\app\app.html"*/'<ion-menu persistent="true" [content]="content" (ionClose)="collapseMenuOptions()">\n  <ion-header>\n    <ion-toolbar color="cultivos">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <side-menu-content [settings]="sideMenuSettings" [options]="options" (selectOption)="selectOption($event)" style="padding: 0"></side-menu-content>\n  </ion-content>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_20__providers_auth_service_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_20__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */]) === "function" && _g || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewIngresoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_ingreso__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_select_select_module__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewIngresoModule = (function () {
    function NewIngresoModule() {
    }
    NewIngresoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__new_ingreso__["a" /* NewIngreso */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_ingreso__["a" /* NewIngreso */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_select_select_module__["a" /* SelectSearchableModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__new_ingreso__["a" /* NewIngreso */]
            ],
        })
    ], NewIngresoModule);
    return NewIngresoModule;
}());

//# sourceMappingURL=new-ingreso.module.js.map

/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViajesListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viajes_list__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ViajesListModule = (function () {
    function ViajesListModule() {
    }
    ViajesListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__viajes_list__["a" /* ViajesList */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__viajes_list__["a" /* ViajesList */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__viajes_list__["a" /* ViajesList */]
            ],
        })
    ], ViajesListModule);
    return ViajesListModule;
}());

//# sourceMappingURL=viajes-list.module.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CamionesList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_camiones_service_camiones_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_edit_camion_edit_camion__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_new_camion_new_camion__ = __webpack_require__(147);
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
    CamionesList.prototype.goToAddCamion = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_new_camion_new_camion__["a" /* NewCamion */]);
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
            selector: 'page-camiones-list',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\camiones-list\camiones-list.html"*/'<ion-header>\n  <ion-navbar color="cultivos" hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Camiones</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="back-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 padding>\n        <h1 text-center>Listado de Camiones</h1>\n        <p text-center>Presentacion en forma de lista de los camiones con los que se transporta</p>\n      </ion-col>\n\n      <ion-col col-12 padding class="back-black-color">\n        <h4 padding-top no-margin>Datos generales de los Camiones</h4>\n        <ion-row padding>\n\n          <!-- Forma Lista -->\n          <ion-col col-12 padding class="back-black-color hidden-md-down">\n            <ion-row padding-top>\n              <ion-col col-12 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2>\n                <ion-list>\n                  <ion-item ion-item class="no-border">\n                    <ion-row>\n                      <ion-col col-3>\n                        <h2 text-center>Chofer</h2>\n                      </ion-col>\n                      <ion-col col-3>\n                        <h2 text-center>Patente Chasis</h2>\n                      </ion-col>\n                      <ion-col col-3> \n                        <h2 text-center>Patente Acoplado</h2>\n                      </ion-col>\n                      <ion-col col-3 class="vertical-align-icon"> \n                        <ion-icon class="size-icon" name="more"></ion-icon>\n                      </ion-col>\n                    </ion-row>\n                  </ion-item>\n                  <ion-item  *ngFor="let camion of camionesList" class="no-border">\n                    <ion-row align-items-center>\n                      <ion-col col-3>\n                        <p text-center>{{camion.nombreChofer}}</p>\n                      </ion-col>\n                      <ion-col col-3>\n                        <p text-center>{{camion.patenteChasis}}</p>\n                      </ion-col>\n                      <ion-col col-3> \n                        <p text-center>{{camion.patenteAcoplado}}</p>\n                      </ion-col>\n                      <ion-col col-3> \n                        <ion-row>\n                          <ion-col col-6 class="vertical-align-icon">\n                            <button ion-button color="semiDark" round icon-only small (click)="goToEdit(camion)">\n                              <ion-icon name="create"></ion-icon>\n                            </button>\n                          </ion-col>\n                          <ion-col col-6 class="vertical-align-icon">\n                            <button ion-button color="semiDark" round icon-only small \n                              (click)="alertDeleteCamion(camion.id)">\n                              <ion-icon name="trash"></ion-icon>\n                            </button>\n                          </ion-col>\n                        </ion-row>\n                      </ion-col>\n                    </ion-row>\n                  </ion-item>\n                </ion-list>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n\n          <!-- Formato Card-->\n          <ion-col  *ngFor="let camion of camionesList" offset-sm-1 col-sm-10 col-12 col-md-6 offset-md-0 no-padding class="hidden-lg-up">\n            <ion-list>\n              <ion-item class="no-border">\n                <ion-card>\n                  <ion-card-header no-padding no-margin class="card-hearder-color no-border">\n                    <ion-row align-items-center>\n                      <ion-col col-6 no-padding>\n                        <h2 margin text-center style="color: white">{{camion.nombreChofer}}</h2>\n                      </ion-col>\n                      <ion-col col-6 no-padding> \n                        <ion-buttons right>\n                          <button ion-button clear color="white" icon-only small (click)="goToEdit(camion)">\n                            <ion-icon name="create"></ion-icon>\n                          </button>\n                          <button ion-button clear color="white" icon-only small (click)="alertDeleteCamion(camion.id)">\n                            <ion-icon name="trash"></ion-icon>\n                          </button>\n                        </ion-buttons>\n                      </ion-col>\n                    </ion-row>\n                  </ion-card-header>\n                  <ion-card-content>\n                    <ion-list no-padding no-margin>\n                      <ion-item class="no-border">\n                        <ion-icon name="contact" item-start></ion-icon>\n                        {{camion.patenteChasis}}\n                      </ion-item>\n                      <ion-item class="no-border">\n                        <ion-icon name="call" item-start></ion-icon>\n                        {{camion.patenteAcoplado}}\n                      </ion-item>\n                    </ion-list>\n                  </ion-card-content>\n                </ion-card>\n              </ion-item>\n            </ion-list>    \n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-fab bottom right padding margin>\n      <button ion-fab color="semiDark" (click)="goToAddCamion()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\camiones-list\camiones-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_camiones_service_camiones_service__["a" /* CamionesServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CamionesList);
    return CamionesList;
}());

//# sourceMappingURL=camiones-list.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChacrasList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chacras_service_chacras_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_cuadros_service_cuadros_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_edit_chacra_edit_chacra__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_new_chacra_new_chacra__ = __webpack_require__(148);
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
    ChacrasList.prototype.goToAddChacra = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_new_chacra_new_chacra__["a" /* NewChacra */]);
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
        var alertMessage = this.AlertController.create({
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
                        if (data.Up.length === 11) {
                            _this.newCuadro.up = data.Up;
                            _this.newCuadro.chacraId = chacraId;
                            _this.addNewCuadro();
                        }
                        else {
                            alert("El Up debe constar de 11 caracteres. Ingrese los datos nuevamente");
                            return false;
                        }
                    }
                }
            ]
        });
        alertMessage.present();
    };
    ChacrasList.prototype.addNewCuadro = function () {
        var _this = this;
        this.CuadrosServiceProvider.addNewCuadro(this.newCuadro).subscribe(function (data) { return _this.getAllChacras(); });
        this.newCuadro = { up: '', chacraId: '' };
    };
    ChacrasList.prototype.alertEditCuadro = function (cuadro) {
        var _this = this;
        var alertMessage = this.AlertController.create({
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
                        if (data.Up.length === 11) {
                            cuadro.up = data.Up;
                            _this.editCuadro(cuadro);
                        }
                        else {
                            alert("El Up debe constar de 11 caracteres. Ingrese los datos nuevamente");
                            return false;
                        }
                    }
                }
            ]
        });
        alertMessage.present();
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
            selector: 'page-chacras-list',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\chacras-list\chacras-list.html"*/'<ion-header>\n  <ion-navbar color="cultivos" hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Chacras</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="back-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 padding>\n        <h1 text-center>Listado de Chacras</h1>\n        <p text-center>Presentacion en forma de lista de chacras donde se obtiene la produccion</p>\n      </ion-col>\n      <ion-col col-12 class="back-black-color">\n        <h4 padding no-margin>Datos generales de las Chacras</h4>\n        <ion-row>\n\n          <!--Formato Lista-->\n          <ion-col col-12 col-md-10 offset-md-1 class="hidden-xs-down">\n            <ion-list>\n              <ion-item ion-item *ngFor="let chacra of chacrasList" class="no-border">\n                <ion-row>\n                  <ion-col col-12>\n                    <ion-row align-items-center>\n                      <ion-col col-4>\n                        <ion-row>\n                          <ion-col col-12>\n                            <h2 text-center>Chacra</h2>\n                          </ion-col>\n                          <ion-col col-12>\n                            <p text-center>{{chacra.nombre}}</p>\n                          </ion-col>\n                        </ion-row>\n                      </ion-col>\n                      <ion-col col-4>\n                        <ion-row>\n                          <ion-col col-12>\n                            <h2 text-center>Renspa</h2>\n                          </ion-col>\n                          <ion-col col-12>\n                            <p text-center>{{chacra.renspa}}</p>\n                          </ion-col>\n                        </ion-row>\n                      </ion-col>\n                      <ion-col col-4> \n                        <ion-row>\n                          <ion-col col-12 class="vertical-align-icon">\n                            <ion-icon class="size-icon" name="more"></ion-icon>\n                          </ion-col>\n                          <ion-col col-12 class="vertical-align-icon">\n                            <ion-row>\n                              <ion-col col-4>\n                                <button ion-button color="semiDark" round icon-only small (click)="alertNewCuadro(chacra.id)">\n                                  <ion-icon name="add"></ion-icon>\n                                </button>\n                              </ion-col>\n                              <ion-col col-4>\n                                <button ion-button color="semiDark" round icon-only small (click)="goToEdit(chacra)">\n                                  <ion-icon name="create"></ion-icon>\n                                </button>\n                              </ion-col>\n                              <ion-col col-4>\n                                <button ion-button color="semiDark" round icon-only small \n                                  (click)="alertDeleteChacra(chacra.id)">\n                                  <ion-icon name="trash"></ion-icon>\n                                </button>\n                              </ion-col>\n                            </ion-row>\n                          </ion-col>\n                        </ion-row>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n\n                  <ion-col no-padding col-12 col-lg-8 offset-lg-2 offset-0>\n                    <ion-list>\n                      <ion-item class="no-border">\n                        <ion-row align-items-center>\n                          <ion-col col-4 class="vertical-align-icon">\n                            <p text-center>Cuadro</p>\n                          </ion-col>\n                          <ion-col col-4 class="vertical-align-icon">\n                            <p text-center>Up</p>\n                          </ion-col>\n                          <ion-col col-4 class="vertical-align-icon"> \n                             <ion-icon class="size-icon" name="more"></ion-icon>\n                          </ion-col>\n                        </ion-row>\n                      </ion-item>\n                      <ion-item class="no-border" *ngFor="let cuadro of chacra.cuadros; let i = \'index\'">\n                        <ion-row align-items-center>\n                          <ion-col col-4 class="vertical-align-icon">\n                            <p text-center>{{i}}</p>\n                          </ion-col>\n                          <ion-col col-4 class="vertical-align-icon">\n                            <p text-center>{{cuadro.up}}</p>\n                          </ion-col>\n                          <ion-col col-4 class="vertical-align-icon"> \n                            <ion-row align-items-center>\n                              <ion-col col-6>\n                                <button ion-button color="semiDark" round icon-only small (click)="alertEditCuadro(cuadro)">\n                                  <ion-icon name="create"></ion-icon>\n                                </button>\n                              </ion-col>\n                              <ion-col col-6>\n                                <button ion-button color="semiDark" round icon-only small \n                                  (click)="alertDeleteCuadro(cuadro.id)">\n                                  <ion-icon name="trash"></ion-icon>\n                                </button>\n                              </ion-col>\n                            </ion-row>\n                          </ion-col>\n                        </ion-row>\n                      </ion-item>\n                    </ion-list>\n                  </ion-col>\n                </ion-row>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n\n          <!-- Formato Card-->\n          <ion-col *ngFor="let chacra of chacrasList" offset-sm-1 col-sm-10 col-12 col-md-6 offset-md-0 col-lg-8 offset-lg-2 offset-0 no-padding class="hidden-sm-up">\n            <ion-card no-padding>\n              <ion-card-header no-padding no-margin class="card-hearder-color no-border">\n                <ion-row align-items-center>\n                  <ion-col col-6 no-padding>\n                    <h2 margin text-center style="color: white">{{chacra.nombre}}</h2>\n                  </ion-col>\n                  <ion-col col-6 no-padding> \n                    <ion-buttons right>\n                      <ion-col col-4>\n                        <button ion-button color="semiDark" round icon-only small (click)="alertNewCuadro(chacra.id)">\n                          <ion-icon name="add"></ion-icon>\n                        </button>\n                      </ion-col>\n                      <ion-col col-4>\n                        <button ion-button color="semiDark" round icon-only small (click)="goToEdit(chacra)">\n                          <ion-icon name="create"></ion-icon>\n                        </button>\n                      </ion-col>\n                      <ion-col col-4>\n                        <button ion-button color="semiDark" round icon-only small \n                          (click)="alertDeleteChacra(chacra.id)">\n                          <ion-icon name="trash"></ion-icon>\n                        </button>\n                      </ion-col>\n                    </ion-buttons>\n                  </ion-col>\n                </ion-row>\n              </ion-card-header>\n              <ion-card-content no-padding no-margin>\n                <ion-list no-padding no-margin>\n                  <ion-item class="no-border" padding>\n                    <ion-icon name="cube" item-start></ion-icon>\n                    {{chacra.renspa}}\n                  </ion-item>\n                  <ion-item class="no-border">\n                    <ion-list>\n                      <ion-item>\n                        <ion-row align-items-center>\n                          <ion-col col-4 class="vertical-align-icon">\n                            <p text-center>Cuadro</p>\n                          </ion-col>\n                          <ion-col col-4 class="vertical-align-icon">\n                            <p text-center>Up</p>\n                          </ion-col>\n                          <ion-col col-4 class="vertical-align-icon"> \n                             <ion-icon class="size-icon" name="more"></ion-icon>\n                          </ion-col>\n                        </ion-row>\n                      </ion-item>\n                      <ion-item class="no-border" *ngFor="let cuadro of chacra.cuadros; let i = \'index\'">\n                        <ion-row align-items-center>\n                          <ion-col col-4 class="vertical-align-icon">\n                            <p text-center>{{i}}</p>\n                          </ion-col>\n                          <ion-col col-4 class="vertical-align-icon">\n                            <p text-center>{{cuadro.up}}</p>\n                          </ion-col>\n                          <ion-col col-4 class="vertical-align-icon"> \n                            <ion-row align-items-center>\n                              <ion-col col-12>\n                                <button ion-button color="semiDark" round icon-only small (click)="alertEditCuadro(cuadro)">\n                                  <ion-icon name="create"></ion-icon>\n                                </button>\n                              </ion-col>\n                              <ion-col col-12>\n                                <button ion-button color="semiDark" round icon-only small \n                                  (click)="alertDeleteCuadro(cuadro.id)">\n                                  <ion-icon name="trash"></ion-icon>\n                                </button>\n                              </ion-col>\n                            </ion-row>\n                          </ion-col>\n                        </ion-row>\n                      </ion-item>\n                    </ion-list>\n                  </ion-item>\n                </ion-list>\n              </ion-card-content>\n            </ion-card>  \n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-fab bottom right padding margin>\n    <button ion-fab color="semiDark" (click)="goToAddChacra()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n\n\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\chacras-list\chacras-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_chacras_service_chacras_service__["a" /* ChacrasServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_cuadros_service_cuadros_service__["a" /* CuadrosServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ChacrasList);
    return ChacrasList;
}());

//# sourceMappingURL=chacras-list.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CuadrosServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(26);
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
    CuadrosServiceProvider.prototype.getAllCuadrosByChacras = function (chacrasId) {
        return this.http.get(this.urlAPI + "/byChacra/" + chacrasId)
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

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpresasList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_empresas_service_empresas_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_edit_empresa_edit_empresa__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_new_empresa_new_empresa__ = __webpack_require__(153);
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
    EmpresasList.prototype.goToAddEmpresa = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_new_empresa_new_empresa__["a" /* NewEmpresa */]);
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
            selector: 'page-empresas-list',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\empresas-list\empresas-list.html"*/'<ion-header>\n  <ion-navbar color="cultivos" hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Empresas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="back-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 padding>\n        <h1 text-center>Listado de Empresas</h1>\n        <p text-center>Presentacion en forma de lista de las empresas con los que se comercializa</p>\n      </ion-col>\n\n      <ion-col col-12 padding class="back-black-color">\n        <h4 padding-top no-margin>Datos generales de las Empresas</h4>\n        <ion-row padding>\n\n          <!-- Forma Lista -->\n          <ion-col col-12 padding class="back-black-color hidden-md-down">\n            <ion-row padding-top>\n              <ion-col col-12 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2>\n                <ion-list>\n                  <ion-item ion-item class="no-border">\n                    <ion-row>\n                      <ion-col col-3>\n                        <h2 text-center>Empresa</h2>\n                      </ion-col>\n                      <ion-col col-3>\n                        <h2 text-center>Direccion</h2>\n                      </ion-col>\n                      <ion-col col-3> \n                        <h2 text-center>Telefono</h2>\n                      </ion-col>\n                      <ion-col col-3 class="vertical-align-icon"> \n                        <ion-icon class="size-icon" name="more"></ion-icon>\n                      </ion-col>\n                    </ion-row>\n                  </ion-item>\n                  <ion-item ion-item *ngFor="let empresa of empresasList" class="no-border">\n                    <ion-row align-items-center>\n                      <ion-col col-3>\n                        <p text-center>{{empresa.nombre}}</p>\n                      </ion-col>\n                      <ion-col col-3>\n                        <p text-center>{{empresa.direccion}}</p>\n                      </ion-col>\n                      <ion-col col-3> \n                        <p text-center>{{empresa.telefono}}</p>\n                      </ion-col>\n                      <ion-col col-3> \n                        <ion-row>\n                          <ion-col col-6 class="vertical-align-icon">\n                            <button ion-button color="semiDark" round icon-only small (click)="goToEdit(empresa)">\n                              <ion-icon name="create"></ion-icon>\n                            </button>\n                          </ion-col>\n                          <ion-col col-6 class="vertical-align-icon">\n                            <button ion-button color="semiDark" round icon-only small \n                              (click)="alertDeleteEmpresa(empresa.id)">\n                              <ion-icon name="trash"></ion-icon>\n                            </button>\n                          </ion-col>\n                        </ion-row>\n                      </ion-col>\n                    </ion-row>\n                  </ion-item>\n                </ion-list>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n\n          <!-- Formato Card-->\n          <ion-col *ngFor="let empresa of empresasList" offset-sm-1 col-sm-10 col-12 col-md-6 offset-md-0 no-padding class="hidden-lg-up">\n            <ion-list>\n              <ion-item class="no-border">\n                <ion-card>\n                  <ion-card-header no-padding no-margin class="card-hearder-color no-border">\n                    <ion-row align-items-center>\n                      <ion-col col-6 no-padding>\n                        <h2 margin text-center style="color: white">{{empresa.nombre}}</h2>\n                      </ion-col>\n                      <ion-col col-6 no-padding> \n                        <ion-buttons right>\n                          <button ion-button clear color="white" icon-only small (click)="goToEdit(empresa)">\n                            <ion-icon name="create"></ion-icon>\n                          </button>\n                          <button ion-button clear color="white" icon-only small (click)="alertDeleteEmpresa(empresa.id)">\n                            <ion-icon name="trash"></ion-icon>\n                          </button>\n                        </ion-buttons>\n                      </ion-col>\n                    </ion-row>\n                  </ion-card-header>\n                  <ion-card-content>\n                    <ion-list no-padding no-margin>\n                      <ion-item class="no-border">\n                        <ion-icon name="contact" item-start></ion-icon>\n                        {{empresa.direccion}}\n                      </ion-item>\n                      <ion-item class="no-border">\n                        <ion-icon name="call" item-start></ion-icon>\n                        {{empresa.telefono}}\n                      </ion-item>\n                    </ion-list>\n                  </ion-card-content>\n                </ion-card>\n              </ion-item>\n            </ion-list>    \n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-fab bottom right padding margin>\n      <button ion-fab color="semiDark" (click)="goToAddEmpresa()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\empresas-list\empresas-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_empresas_service_empresas_service__["a" /* EmpresasServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EmpresasList);
    return EmpresasList;
}());

//# sourceMappingURL=empresas-list.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoresList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_productores_service_productores_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_edit_productor_edit_productor__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_new_productor_new_productor__ = __webpack_require__(96);
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
    ProductoresList.prototype.goToAddProductor = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_new_productor_new_productor__["a" /* NewProductor */]);
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
            selector: 'page-list',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\productoresList\productoresList.html"*/'<ion-header>\n  <ion-navbar color="cultivos" hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Productores</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="back-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 padding>\n        <h1 text-center>Listado de Productores</h1>\n        <p text-center>Presentacion en forma de lista de los productores con los que se trabaja</p>\n      </ion-col>\n\n      <ion-col col-12 padding class="back-black-color">\n        <h4 padding-top no-margin>Datos generales de los Productores</h4>\n        <ion-row padding>\n\n          <!-- Forma Lista -->\n          <ion-col col-12 padding class="back-black-color hidden-md-down">\n            <ion-row padding-top>\n              <ion-col col-12 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2>\n                <ion-list>\n                  <ion-item ion-item class="no-border">\n                    <ion-row>\n                      <ion-col col-3>\n                        <h2 text-center>Productor</h2>\n                      </ion-col>\n                      <ion-col col-3>\n                        <h2 text-center>Dni</h2>\n                      </ion-col>\n                      <ion-col col-3> \n                        <h2 text-center>Telefono</h2>\n                      </ion-col>\n                      <ion-col col-3 class="vertical-align-icon"> \n                        <ion-icon class="size-icon" name="more"></ion-icon>\n                      </ion-col>\n                    </ion-row>\n                  </ion-item>\n                  <ion-item ion-item *ngFor="let prod of productoresList" class="no-border">\n                    <ion-row align-items-center>\n                      <ion-col col-3>\n                        <p text-center>{{prod.nombre}}</p>\n                      </ion-col>\n                      <ion-col col-3>\n                        <p text-center>{{prod.dni}}</p>\n                      </ion-col>\n                      <ion-col col-3> \n                        <p text-center>{{prod.telefono}}</p>\n                      </ion-col>\n                      <ion-col col-3> \n                        <ion-row>\n                          <ion-col col-6 class="vertical-align-icon">\n                            <button ion-button color="semiDark" round icon-only small (click)="goToEdit(prod)">\n                              <ion-icon name="create"></ion-icon>\n                            </button>\n                          </ion-col>\n                          <ion-col col-6 class="vertical-align-icon">\n                            <button ion-button color="semiDark" round icon-only small \n                              (click)="alertDeleteProductor(prod.id)">\n                              <ion-icon name="trash"></ion-icon>\n                            </button>\n                          </ion-col>\n                        </ion-row>\n                      </ion-col>\n                    </ion-row>\n                  </ion-item>\n                </ion-list>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n\n          <!-- Formato Card-->\n          <ion-col *ngFor="let prod of productoresList" offset-sm-1 col-sm-10 col-12 col-md-6 offset-md-0 no-padding class="hidden-lg-up">\n            <ion-list>\n              <ion-item class="no-border">\n                <ion-card>\n                  <ion-card-header no-padding no-margin class="card-hearder-color no-border">\n                    <ion-row align-items-center>\n                      <ion-col col-6 no-padding>\n                        <h2 margin text-center style="color: white">{{prod.nombre}}</h2>\n                      </ion-col>\n                      <ion-col col-6 no-padding> \n                        <ion-buttons right>\n                          <button ion-button clear color="white" icon-only small (click)="goToEdit(prod)">\n                            <ion-icon name="create"></ion-icon>\n                          </button>\n                          <button ion-button clear color="white" icon-only small (click)="alertDeleteProductor(prod.id)">\n                            <ion-icon name="trash"></ion-icon>\n                          </button>\n                        </ion-buttons>\n                      </ion-col>\n                    </ion-row>\n                  </ion-card-header>\n                  <ion-card-content>\n                    <ion-list no-padding no-margin>\n                      <ion-item class="no-border">\n                        <ion-icon name="contact" item-start></ion-icon>\n                        {{prod.dni}}\n                      </ion-item>\n                      <ion-item class="no-border">\n                        <ion-icon name="call" item-start></ion-icon>\n                        {{prod.telefono}}\n                      </ion-item>\n                    </ion-list>\n                  </ion-card-content>\n                </ion-card>\n              </ion-item>\n            </ion-list>    \n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-fab bottom right padding margin>\n      <button ion-fab color="semiDark" (click)="goToAddProductor()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\productoresList\productoresList.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_productores_service_productores_service__["a" /* ProductoresServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ProductoresList);
    return ProductoresList;
}());

//# sourceMappingURL=productoresList.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewProductor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_productores_service_productores_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_chacras_service_chacras_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_productoresList_productoresList__ = __webpack_require__(95);
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
    function NewProductor(navCtrl, navParams, ProductoresServiceProvider, ChacrasServiceProvider, AlertController, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ProductoresServiceProvider = ProductoresServiceProvider;
        this.ChacrasServiceProvider = ChacrasServiceProvider;
        this.AlertController = AlertController;
        this.formBuilder = formBuilder;
        this.productor = { nombre: '', dni: '', telefono: '', chacras_ids: [] };
        this.chacras = [];
        this.ChacrasServiceProvider.getAllChacras().subscribe(function (data) { return _this.chacras = data; });
        this.formNewProductor = this.formBuilder.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            dni: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(8)])],
            telefono: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(10)])],
        });
        this.nombre = this.formNewProductor.controls['nombre'];
        this.dni = this.formNewProductor.controls['dni'];
        this.telefono = this.formNewProductor.controls['telefono'];
    }
    NewProductor.prototype.addNewProductor = function () {
        var _this = this;
        if (!this.formNewProductor.valid) {
            this.AlertController.create({
                title: 'Datos Incorrectos',
                message: 'Los datos ingresados pueden ser incorrectos o faltantes.',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function () { }
                    }
                ]
            }).present();
        }
        else {
            this.ProductoresServiceProvider.addNewProductor(this.productor).subscribe(function (data) { return _this.alertNewProductor(data); });
        }
    };
    NewProductor.prototype.alertNewProductor = function (data) {
        var _this = this;
        var alert;
        if (!JSON.parse(data._body).error) {
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_productoresList_productoresList__["a" /* ProductoresList */]);
    };
    NewProductor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-productor',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-productor\new-productor.html"*/'<ion-header>\n  <ion-navbar color="cultivos" hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Nuevo Productor</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="back-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 padding>\n        <h1 text-center>Nuevo Productor</h1>\n        <p text-center>Ingrese los datos necesarios para generar un nuevo productor.</p>\n      </ion-col>\n      <ion-col col-12 padding class="back-black-color">\n        <h3 padding-top no-margin>Datos generales del productor</h3>\n        <form [formGroup]="formNewProductor" (ngSubmit)="addNewProductor()">\n          <ion-grid>\n            <ion-row>\n              <ion-col col-12 padding-bottom>\n                <ion-row>\n                  <ion-item col-12 class="no-border">\n                    <ion-label stacked>Nombre</ion-label>\n                    <ion-input type="text" [(ngModel)]="productor.nombre" formControlName="nombre"></ion-input>\n                  </ion-item>\n                  <ion-item col-12 col-md-6 col-lg-6 class="no-border">\n                    <ion-label stacked>DNI</ion-label>\n                    <ion-input type="text" [(ngModel)]="productor.dni" formControlName="dni"></ion-input>\n                  </ion-item>\n                  <ion-item col-12 col-md-6 col-lg-6 class="no-border">\n                    <ion-label stacked>Telefono</ion-label>\n                    <ion-input type="number" [(ngModel)]="productor.telefono" formControlName="telefono"></ion-input>\n                  </ion-item>\n                  <ion-col col-12 padding>\n                    <ion-buttons right>\n                        <button ion-button type="submit" color="semiDark">Agregar</button>\n                    </ion-buttons>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-productor\new-productor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_productores_service_productores_service__["a" /* ProductoresServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_chacras_service_chacras_service__["a" /* ChacrasServiceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], NewProductor);
    return NewProductor;
}());

//# sourceMappingURL=new-productor.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstitucionesList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_instituciones_service_instituciones_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_edit_institucion_edit_institucion__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_new_institucion_new_institucion__ = __webpack_require__(158);
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
    InstitucionesList.prototype.goToAddInstitucion = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_new_institucion_new_institucion__["a" /* NewInstitucion */]);
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
            selector: 'page-instituciones-list',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\instituciones-list\instituciones-list.html"*/'<ion-header>\n  <ion-navbar color="cultivos" hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Instituciones</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="back-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 padding>\n        <h1 text-center>Listado de Instituciones</h1>\n        <p text-center>Presentacion en forma de lista de las intituciones donde se destina la fruta</p>\n      </ion-col>\n\n      <ion-col col-12 padding class="back-black-color">\n        <h4 padding-top no-margin>Datos generales de las Instituciones</h4>\n        <ion-row padding>\n\n          <!-- Forma Lista -->\n          <ion-col col-12 padding class="back-black-color hidden-md-down">\n            <ion-row padding-top>\n              <ion-col col-12 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2>\n                <ion-list>\n                  <ion-item ion-item class="no-border">\n                    <ion-row>\n                      <ion-col col-3>\n                        <h2 text-center>Institucion</h2>\n                      </ion-col>\n                      <ion-col col-3>\n                        <h2 text-center>Direccion</h2>\n                      </ion-col>\n                      <ion-col col-3> \n                        <h2 text-center>Telefono</h2>\n                      </ion-col>\n                      <ion-col col-3 class="vertical-align-icon"> \n                        <ion-icon class="size-icon" name="more"></ion-icon>\n                      </ion-col>\n                    </ion-row>\n                  </ion-item>\n                  <ion-item  *ngFor="let institucion of institucionesList" class="no-border">\n                    <ion-row align-items-center>\n                      <ion-col col-3>\n                        <p text-center>{{institucion.nombre}}</p>\n                      </ion-col>\n                      <ion-col col-3>\n                        <p text-center>{{institucion.direccion}}</p>\n                      </ion-col>\n                      <ion-col col-3> \n                        <p text-center>{{institucion.telefono}}</p>\n                      </ion-col>\n                      <ion-col col-3> \n                        <ion-row>\n                          <ion-col col-6 class="vertical-align-icon">\n                            <button ion-button color="semiDark" round icon-only small (click)="goToEdit(institucion)">\n                              <ion-icon name="create"></ion-icon>\n                            </button>\n                          </ion-col>\n                          <ion-col col-6 class="vertical-align-icon">\n                            <button ion-button color="semiDark" round icon-only small \n                              (click)="alertDeleteInstitucion(institucion.id)">\n                              <ion-icon name="trash"></ion-icon>\n                            </button>\n                          </ion-col>\n                        </ion-row>\n                      </ion-col>\n                    </ion-row>\n                  </ion-item>\n                </ion-list>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n\n          <!-- Formato Card-->\n          <ion-col  *ngFor="let institucion of institucionesList" offset-sm-1 col-sm-10 col-12 col-md-6 offset-md-0 no-padding class="hidden-lg-up">\n            <ion-list>\n              <ion-item class="no-border">\n                <ion-card>\n                  <ion-card-header no-padding no-margin class="card-hearder-color no-border">\n                    <ion-row align-items-center>\n                      <ion-col col-6 no-padding>\n                        <h2 margin text-center style="color: white">{{institucion.nombre}}</h2>\n                      </ion-col>\n                      <ion-col col-6 no-padding> \n                        <ion-buttons right>\n                          <button ion-button clear color="white" icon-only small (click)="goToEdit(institucion)">\n                            <ion-icon name="create"></ion-icon>\n                          </button>\n                          <button ion-button clear color="white" icon-only small (click)="alertDeleteInstitucion(institucion.id)">\n                            <ion-icon name="trash"></ion-icon>\n                          </button>\n                        </ion-buttons>\n                      </ion-col>\n                    </ion-row>\n                  </ion-card-header>\n                  <ion-card-content>\n                    <ion-list no-padding no-margin>\n                      <ion-item class="no-border">\n                        <ion-icon name="contact" item-start></ion-icon>\n                        {{institucion.direccion}}\n                      </ion-item>\n                      <ion-item class="no-border">\n                        <ion-icon name="call" item-start></ion-icon>\n                        {{institucion.telefono}}\n                      </ion-item>\n                    </ion-list>\n                  </ion-card-content>\n                </ion-card>\n              </ion-item>\n            </ion-list>    \n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-fab bottom right padding margin>\n      <button ion-fab color="semiDark" (click)="goToAddInstitucion()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\instituciones-list\instituciones-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_instituciones_service_instituciones_service__["a" /* InstitucionesServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], InstitucionesList);
    return InstitucionesList;
}());

//# sourceMappingURL=instituciones-list.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewIngreso; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_ingresos_list_ingresos_list__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_new_viaje_new_viaje__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_calidad_model__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_especie_model__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_variedad_model__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_chacra_model__ = __webpack_require__(757);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_tratamiento_model__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_cuadro_model__ = __webpack_require__(759);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_ingreso_model__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_lote_model__ = __webpack_require__(761);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_calidades_service_calidades_service__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_especie_service_especie_service__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_cuadros_service_cuadros_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_tratamientos_service_tratamientos_service__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_ingresos_service_ingresos_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_auth_service_auth_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_chacras_service_chacras_service__ = __webpack_require__(43);
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
            selector: 'page-new-ingreso',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-ingreso\new-ingreso.html"*/'<ion-header>\n\n  <ion-navbar color="cultivos" hideBackButton="true">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Nuevo Ingreso</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="back-color">\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col col-12 padding>\n\n              <h1 text-center>Nuevo Ingresos</h1>\n\n              <p text-center>Ingrese los datos necesarios para generar un nuevo ingreso de fruta.</p>\n\n            </ion-col>\n\n            <ion-col col-12 class="back-black-color">\n\n            	<form (ngSubmit)="alertNewIngreso()">\n\n                    <ion-row *ngFor="let ingreso of ingresos; trackBy:trackByFn">\n\n                        <ion-col col-12 padding-bottom>\n\n                            <h3 padding-top no-margin>Datos generales del Ingreso</h3>\n\n                        </ion-col>\n\n                        <ion-col col-12 padding-bottom>\n\n                            <ion-row>\n\n                                <ion-item col-12 col-md-6 col-lg-6 class="no-border">\n\n                                  <ion-label stacked>Nro Remito</ion-label>\n\n                                  <ion-input type="text" [(ngModel)]="ingreso.nroRemito" name="nroRemito"></ion-input>\n\n                                </ion-item>\n\n                                <ion-item col-12 col-md-6 col-lg-6 class="no-border">\n\n                                  <ion-label stacked>Fecha de Ingreso</ion-label>\n\n                                  <ion-input type="date" [value]="ingreso.fechaIngreso" (input)="ingreso.fechaIngreso = $event.target.value" name="fechaIngreso"></ion-input>\n\n                                </ion-item>\n\n                            </ion-row>\n\n                            <ion-item class="no-border">\n\n                                <select-searchable\n\n                                    [(ngModel)]="ingreso.chacra"\n\n                                    name="chacra"\n\n                                    title="Chacras"\n\n                                    itemValueField="id"\n\n                                    itemTextField="nombre"\n\n                                    [items]="ingreso.chacras"\n\n                                    [canSearch]="true"\n\n                                    (onChange)="chacraChange($event, ingreso)">\n\n                                </select-searchable>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-12 padding class="back-color">\n\n                            <ion-row>\n\n                                <ion-col col-12 no-padding>\n\n                                    <h3 padding>Datos generales del nuevo Lote</h3>\n\n                                </ion-col>\n\n                                <ion-row *ngFor="let lote of ingreso.lotes; trackBy:trackByFn" margin>\n\n                                    <ion-col col-12 no-padding>\n\n                                        <ion-row>\n\n                                            <ion-item class="no-border" col-12 col-md-4 col-lg-4>\n\n                                              <ion-label stacked>Numero Lote</ion-label>\n\n                                              <ion-input type="number" [value]="lote.nroLote" (input)="lote.nroLote = $event.target.value" name="nroLote"></ion-input>\n\n                                            </ion-item>\n\n                                            <ion-item class="no-border" col-12 col-md-4 col-lg-4>\n\n                                              <ion-label stacked>Cantidad Bins</ion-label>\n\n                                              <ion-input type="number" [value]="lote.cantBins" (input)="lote.cantBins = $event.target.value" name="cantBins"></ion-input>\n\n                                            </ion-item>\n\n                                            <ion-item class="no-border" col-12 col-md-4 col-lg-4>\n\n                                              <ion-label stacked>Peso</ion-label>\n\n                                              <ion-input type="number" [value]="lote.peso" (input)="lote.peso = $event.target.value" name="peso"></ion-input>\n\n                                            </ion-item>\n\n                                        </ion-row>\n\n                                    </ion-col>\n\n                                    <ion-col col-12 no-padding>\n\n                                        <ion-item class="no-border">\n\n                                            <select-searchable\n\n                                                [(ngModel)]="lote.calidad"\n\n                                                name="calidad"\n\n                                                title="Calidades"\n\n                                                itemValueField="id"\n\n                                                itemTextField="tipo"\n\n                                                [items]="lote.calidades"\n\n                                                [canSearch]="true"\n\n                                                (onChange)="calidadChange($event,lote)">\n\n                                            </select-searchable>\n\n                                        </ion-item>\n\n                                    </ion-col>\n\n                                    <ion-col col-12 no-padding>\n\n                                        <ion-item class="no-border">\n\n                                            <select-searchable\n\n                                                [(ngModel)]="lote.especie"\n\n                                                name="especie"\n\n                                                title="Especies"\n\n                                                itemValueField="id"\n\n                                                itemTextField="tipo"\n\n                                                [items]="lote.especies"\n\n                                                [canSearch]="true"\n\n                                                (onChange)="especieChange($event,lote)">\n\n                                            </select-searchable>\n\n                                        </ion-item>\n\n                                    </ion-col>\n\n                                    <ion-col col-12 no-padding>\n\n                                        <ion-item class="no-border">\n\n                                            <select-searchable\n\n                                                [(ngModel)]="lote.variedad"\n\n                                                name="variedad"\n\n                                                title="Variedades"\n\n                                                itemValueField="id"\n\n                                                itemTextField="tipo"\n\n                                                [items]="lote.variedades"\n\n                                                [canSearch]="true"\n\n                                                (onChange)="variedadChange($event,lote)">\n\n                                            </select-searchable>\n\n                                        </ion-item>\n\n                                    </ion-col>\n\n                                    <ion-col col-12 no-padding>\n\n                                        <ion-item class="no-border">\n\n                                            <select-searchable\n\n                                                [(ngModel)]="lote.tratamiento"\n\n                                                name="tratamiento"\n\n                                                title="Tratamientos"\n\n                                                itemValueField="id"\n\n                                                itemTextField="tipo"\n\n                                                [items]="lote.tratamientos"\n\n                                                [canSearch]="true"\n\n                                                (onChange)="tratamientoChange($event,lote)">\n\n                                            </select-searchable>\n\n                                        </ion-item>\n\n                                    </ion-col>\n\n                                    <ion-col col-12 no-padding>\n\n                                        <ion-item class="no-border">\n\n                                            <select-searchable\n\n                                                [(ngModel)]="lote.cuadro"\n\n                                                name="cuadro"\n\n                                                title="Cuadros"\n\n                                                itemValueField="id"\n\n                                                itemTextField="up"\n\n                                                [items]="lote.cuadros"\n\n                                                [canSearch]="true"\n\n                                                (onChange)="cuadroChange($event,lote)">\n\n                                            </select-searchable>\n\n                                        </ion-item>\n\n                                    </ion-col>\n\n                                    <ion-col col-12 padding>\n\n                                        <ion-buttons right>\n\n                                            <button ion-button type="button" color="semiDark" (click)="deleteLoteList(ingreso,lote)">Eliminar Lote</button>\n\n                                        </ion-buttons>\n\n                                    </ion-col>\n\n                                </ion-row>\n\n                            </ion-row>\n\n                        </ion-col>\n\n                        <ion-col col-12 padding>\n\n                            <ion-buttons right>\n\n                                <button ion-button type="button" color="semiDark" (click)="agregarLoteList(ingreso)">Agregar Lote</button>\n\n                                <button *ngIf="ingresos.length > 1" ion-button type="button" color="semiDark" (click)="deleteIngresoList(ingreso)">Eliminar Ingreso</button>\n\n                            </ion-buttons>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-col col-12 padding>\n\n                            <ion-buttons left>\n\n                                <button ion-button color="semiDark" type="submit">Siguiente</button>\n\n                            </ion-buttons>\n\n                    </ion-col>\n\n            	</form>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n    <ion-fab bottom right padding margin>\n\n        <button ion-fab color="semiDark" (click)="agregarIngresoList()"><ion-icon name="crop"></ion-icon></button>\n\n    </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-ingreso\new-ingreso.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_12__providers_calidades_service_calidades_service__["a" /* CalidadesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_especie_service_especie_service__["a" /* EspecieServiceProvider */], __WEBPACK_IMPORTED_MODULE_16__providers_ingresos_service_ingresos_service__["a" /* IngresosServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_17__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_18__providers_chacras_service_chacras_service__["a" /* ChacrasServiceProvider */], __WEBPACK_IMPORTED_MODULE_14__providers_cuadros_service_cuadros_service__["a" /* CuadrosServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_15__providers_tratamientos_service_tratamientos_service__["a" /* TratamientosServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], NewIngreso);
    return NewIngreso;
}());

//# sourceMappingURL=new-ingreso.js.map

/***/ })

},[424]);
//# sourceMappingURL=main.js.map
webpackJsonp([0],{

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(145);
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
    }
    HomePage.prototype.signOut = function () {
        this.AuthServiceProvider.signOut();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* Login */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Inicio</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="signOut()">\n        Cerrar Sesion\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user_model__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(139);
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
        this.authService.signInWithEmailAndPassword(this.userModel).then(function (result) {
            loading.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
        }).catch(function (error) {
            loading.dismiss();
            console.log(error);
            _this.alert('Error', 'Ha ocurrido un error inesperado. Por favor intente nuevamente.');
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
            selector: 'page-login',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\login\login.html"*/'<ion-header>\n    <ion-navbar hideBackButton="true">\n        <ion-title>Iniciar Sesión</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <form #signInForm="ngForm" (submit)="signIn()">\n        <ion-list>\n            <ion-item>\n                <ion-label stacked>Correo electrónico</ion-label>\n                <ion-input [(ngModel)]="userModel.email" type="email" autocorrect="off" autocapitalize="none" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"\n                    required></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label stacked>Contraseña</ion-label>\n                <ion-input [(ngModel)]="userModel.password" type="password" name="password" required minlength="6"></ion-input>\n            </ion-item>\n\n            <div padding-left padding-right padding-top>\n                <button ion-button [disabled]="!signInForm.form.valid" block>Entrar</button>\n            </div>\n        </ion-list>\n    </form>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], Login);
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 171:
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
webpackEmptyAsyncContext.id = 171;

/***/ }),

/***/ 216:
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
webpackEmptyAsyncContext.id = 216;

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoresList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_productores_service_productores_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_edit_productor_edit_productor__ = __webpack_require__(364);
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
            selector: 'page-list',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\productoresList\productoresList.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Productores</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="back-color">\n  <div class="back-black-color" padding>\n    <h3 padding>Listado de Productores:</h3>\n    <ion-list>\n      <ion-item ion-item *ngFor="let prod of productoresList">\n        <ion-avatar item-left>\n          <img src="assets/img/user.png">\n        </ion-avatar>\n        <h2>{{prod.nombre}}</h2>\n        <p>Dni: {{prod.dni}}</p>\n        <p>Telefono: {{prod.telefono}}</p>\n        <button ion-button (click)="goToEdit(prod)">\n         Editar\n        </button>\n        <button ion-button (click)="alertDeleteProductor(prod.id)">\n         Eliminar\n        </button>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\productoresList\productoresList.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_productores_service_productores_service__["a" /* ProductoresServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ProductoresList);
    return ProductoresList;
}());

//# sourceMappingURL=productoresList.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProductor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_productores_service_productores_service__ = __webpack_require__(79);
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
    function EditProductor(navCtrl, navParams, ProductoresServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ProductoresServiceProvider = ProductoresServiceProvider;
        this.productor = [];
        this.productor = this.navParams.get('productor');
    }
    EditProductor.prototype.editProductor = function () {
        this.ProductoresServiceProvider.editProductor(this.productor).subscribe(function (data) { return console.log(data); });
        this.destroyView();
    };
    EditProductor.prototype.destroyView = function () {
        this.navCtrl.pop();
    };
    EditProductor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-productor',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-productor\edit-productor.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Editar Productor</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="editProductor()">\n      <ion-item>\n        <ion-label>Nombre</ion-label>\n        <ion-input type="text" [(ngModel)]="productor.nombre" name="name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>DNI</ion-label>\n        <ion-input type="text" [(ngModel)]="productor.dni" name="dni"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Telefono</ion-label>\n        <ion-input type="number" [(ngModel)]="productor.telefono" name="telefono"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Chacra</ion-label>\n        <ion-select [(ngModel)]="productor.chacras_ids" multiple="true" cancelText="Cancelar" okText="Aceptar" name="chacras_ids">\n          <ion-option *ngFor="let chacra of chacras" [value] = "chacra.id" >{{chacra.nombre}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <button ion-button type="submit" block>Editar</button>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-productor\edit-productor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_productores_service_productores_service__["a" /* ProductoresServiceProvider */]])
    ], EditProductor);
    return EditProductor;
}());

//# sourceMappingURL=edit-productor.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewProductor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_productores_service_productores_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_chacras_service_chacras_service__ = __webpack_require__(61);
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
    function NewProductor(navCtrl, navParams, ProductoresServiceProvider, ChacrasServiceProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ProductoresServiceProvider = ProductoresServiceProvider;
        this.ChacrasServiceProvider = ChacrasServiceProvider;
        this.productor = { nombre: '', dni: '', telefono: '', chacras_ids: [] };
        this.chacras = [];
        this.ChacrasServiceProvider.getAllChacras().subscribe(function (data) { return _this.chacras = data; });
    }
    NewProductor.prototype.addNewProductor = function () {
        this.ProductoresServiceProvider.addNewProductor(this.productor).subscribe(function (data) { return console.log(data); });
        this.destroyView();
    };
    NewProductor.prototype.destroyView = function () {
        this.navCtrl.pop();
    };
    NewProductor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-productor',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-productor\new-productor.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Nuevo Productor</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<form (ngSubmit)="addNewProductor()">\n    <ion-item>\n      <ion-label>Nombre</ion-label>\n      <ion-input type="text" [(ngModel)]="productor.nombre" name="name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>DNI</ion-label>\n      <ion-input type="text" [(ngModel)]="productor.dni" name="dni"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Telefono</ion-label>\n      <ion-input type="number" [(ngModel)]="productor.telefono" name="telefono"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Chacras</ion-label>\n      <ion-select [(ngModel)]="productor.chacras_ids" multiple="true" cancelText="Cancelar" okText="Aceptar" name="chacras_ids">\n        <ion-option *ngFor="let chacra of chacras" [value] = "chacra.id" >{{chacra.nombre}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <button ion-button type="submit" block>Agregar</button>\n</form>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-productor\new-productor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_productores_service_productores_service__["a" /* ProductoresServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_chacras_service_chacras_service__["a" /* ChacrasServiceProvider */]])
    ], NewProductor);
    return NewProductor;
}());

//# sourceMappingURL=new-productor.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChacrasList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chacras_service_chacras_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_edit_chacra_edit_chacra__ = __webpack_require__(367);
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
    function ChacrasList(navCtrl, navParams, ChacrasServiceProvider, AlertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ChacrasServiceProvider = ChacrasServiceProvider;
        this.AlertController = AlertController;
        this.chacrasList = [];
        this.getAllChacras();
    }
    ChacrasList.prototype.getAllChacras = function () {
        var _this = this;
        this.ChacrasServiceProvider.getAllChacras().subscribe(function (data) { return _this.chacrasList = data; });
    };
    ChacrasList.prototype.goToEdit = function (chacra) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_edit_chacra_edit_chacra__["a" /* EditChacra */], {
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
    ChacrasList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chacras-list',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\chacras-list\chacras-list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Chacras</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="back-color">\n  <div class="back-black-color" padding>\n    <h3 padding>Listado de Chacras:</h3>\n      <ion-list>\n        <ion-item ion-item *ngFor="let chacra of chacrasList">\n          <ion-avatar item-left>\n            <img src="assets/img/user.png">\n          </ion-avatar>\n          <h2>{{chacra.nombre}}</h2>\n          <p>Renspa: {{chacra.renspa}}</p>\n          <button ion-button (click)="goToEdit(chacra)">\n           Editar\n          </button>\n          <button ion-button (click)="alertDeleteChacra(chacra.id)">\n           Eliminar\n          </button>\n        </ion-item>\n      </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\chacras-list\chacras-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_chacras_service_chacras_service__["a" /* ChacrasServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ChacrasList);
    return ChacrasList;
}());

//# sourceMappingURL=chacras-list.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditChacra; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chacras_service_chacras_service__ = __webpack_require__(61);
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
    function EditChacra(navCtrl, navParams, ChacrasServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ChacrasServiceProvider = ChacrasServiceProvider;
        this.chacra = [];
        this.chacra = this.navParams.get('chacra');
    }
    EditChacra.prototype.editChacra = function (chacra) {
        this.ChacrasServiceProvider.editChacra(this.chacra).subscribe(function (data) { return console.log(data); });
        this.destroyView();
    };
    EditChacra.prototype.destroyView = function () {
        this.navCtrl.pop();
    };
    EditChacra = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-chacra',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-chacra\edit-chacra.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Editar Chacra</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form (ngSubmit)="editChacra()">\n      <ion-item>\n        <ion-label>Nombre</ion-label>\n        <ion-input type="text" [(ngModel)]="chacra.nombre" name="name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Renspa</ion-label>\n        <ion-input type="text" [(ngModel)]="chacra.renspa" name="dni"></ion-input>\n      </ion-item>\n      <button ion-button type="submit" block>Editar</button>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-chacra\edit-chacra.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_chacras_service_chacras_service__["a" /* ChacrasServiceProvider */]])
    ], EditChacra);
    return EditChacra;
}());

//# sourceMappingURL=edit-chacra.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewChacra; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chacras_service_chacras_service__ = __webpack_require__(61);
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
    function NewChacra(navCtrl, navParams, ChacrasServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ChacrasServiceProvider = ChacrasServiceProvider;
        this.chacra = { nombre: '', renspa: '' };
    }
    NewChacra.prototype.addNewChacra = function () {
        this.ChacrasServiceProvider.addNewChacra(this.chacra).subscribe(function (data) { return console.log(data); });
    };
    NewChacra.prototype.destroyView = function () {
        this.navCtrl.pop();
    };
    NewChacra = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-chacra',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-chacra\new-chacra.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Nueva Chacra</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<form (ngSubmit)="addNewChacra()">\n    <ion-item>\n      <ion-label>Nombre</ion-label>\n      <ion-input type="text" [(ngModel)]="chacra.nombre" name="nombre"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Renspa</ion-label>\n      <ion-input type="text" [(ngModel)]="chacra.renspa" name="renspa"></ion-input>\n    </ion-item>\n    <button ion-button type="submit" block>Agregar</button>\n</form>\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-chacra\new-chacra.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_chacras_service_chacras_service__["a" /* ChacrasServiceProvider */]])
    ], NewChacra);
    return NewChacra;
}());

//# sourceMappingURL=new-chacra.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CamionesList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_camiones_service_camiones_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_edit_camion_edit_camion__ = __webpack_require__(370);
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
            selector: 'page-camiones-list',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\camiones-list\camiones-list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Camiones</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="back-color">\n  <div class="back-black-color" padding>\n    <h3 padding>Listado de Camiones:</h3>\n      <ion-list>\n        <ion-item ion-item *ngFor="let camion of camionesList">\n          <ion-avatar item-left>\n            <img src="assets/img/user.png">\n          </ion-avatar>\n          <h2>{{camion.nombreChofer}}</h2>\n          <p>Patente Chasis: {{camion.patenteChasis}}</p>\n          <p>Patente Acoplado: {{camion.patenteAcoplado}}</p>\n          <button ion-button (click)="goToEdit(camion)">\n           Editar\n          </button>\n          <button ion-button (click)="alertDeleteCamion(camion.id)">\n           Eliminar\n          </button>\n        </ion-item>\n      </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\camiones-list\camiones-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_camiones_service_camiones_service__["a" /* CamionesServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CamionesList);
    return CamionesList;
}());

//# sourceMappingURL=camiones-list.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCamion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_camiones_service_camiones_service__ = __webpack_require__(88);
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
    function EditCamion(navCtrl, navParams, CamionesServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.CamionesServiceProvider = CamionesServiceProvider;
        this.camion = [];
        this.camion = this.navParams.get('camion');
    }
    EditCamion.prototype.editCamion = function (camion) {
        this.CamionesServiceProvider.editCamion(this.camion).subscribe(function (data) { return console.log(data); });
        this.destroyView();
    };
    EditCamion.prototype.destroyView = function () {
        this.navCtrl.pop();
    };
    EditCamion = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-camion',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-camion\edit-camion.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Editar Camion</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form (ngSubmit)="editCamion()">\n      <ion-item>\n      <ion-label>Nombre Chofer</ion-label>\n      <ion-input type="text" [(ngModel)]="camion.nombreChofer" name="nombre"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Patente Acoplado</ion-label>\n      <ion-input type="text" [(ngModel)]="camion.patenteAcoplado" name="renspa"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Patente Chasis</ion-label>\n      <ion-input type="text" [(ngModel)]="camion.patenteChasis" name="renspa"></ion-input>\n    </ion-item>\n      <button ion-button type="submit" block>Editar</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-camion\edit-camion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_camiones_service_camiones_service__["a" /* CamionesServiceProvider */]])
    ], EditCamion);
    return EditCamion;
}());

//# sourceMappingURL=edit-camion.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewCamion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_camiones_service_camiones_service__ = __webpack_require__(88);
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
    function NewCamion(navCtrl, navParams, CamionesServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.CamionesServiceProvider = CamionesServiceProvider;
        this.camion = { patenteChasis: '', patenteAcoplado: '', nombreChofer: '' };
    }
    NewCamion.prototype.addNewCamion = function () {
        this.CamionesServiceProvider.addNewCamion(this.camion).subscribe(function (data) { return console.log(data); });
    };
    NewCamion.prototype.destroyView = function () {
        this.navCtrl.pop();
    };
    NewCamion = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-camion',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-camion\new-camion.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Nuevo Camion</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<form (ngSubmit)="addNewCamion()">\n    <ion-item>\n      <ion-label>Nombre Chofer</ion-label>\n      <ion-input type="text" [(ngModel)]="camion.nombreChofer" name="nombre"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Patente Acoplado</ion-label>\n      <ion-input type="text" [(ngModel)]="camion.patenteAcoplado" name="renspa"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Patente Chasis</ion-label>\n      <ion-input type="text" [(ngModel)]="camion.patenteChasis" name="renspa"></ion-input>\n    </ion-item>\n    <button ion-button type="submit" block>Agregar</button>\n</form>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-camion\new-camion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_camiones_service_camiones_service__["a" /* CamionesServiceProvider */]])
    ], NewCamion);
    return NewCamion;
}());

//# sourceMappingURL=new-camion.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(377);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_productoresList_productoresList__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_new_productor_new_productor__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_edit_productor_edit_productor__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_chacras_list_chacras_list__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_new_chacra_new_chacra__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_edit_chacra_edit_chacra__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_camiones_list_camiones_list__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_new_camion_new_camion__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_edit_camion_edit_camion__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_empresas_list_empresas_list__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_new_empresa_new_empresa__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_edit_empresa_edit_empresa__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_productores_service_productores_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_chacras_service_chacras_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2_auth__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_auth_service_auth_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_camiones_service_camiones_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_empresas_service_empresas_service__ = __webpack_require__(722);
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
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_productoresList_productoresList__["a" /* ProductoresList */],
                __WEBPACK_IMPORTED_MODULE_7__pages_new_productor_new_productor__["a" /* NewProductor */],
                __WEBPACK_IMPORTED_MODULE_8__pages_edit_productor_edit_productor__["a" /* EditProductor */],
                __WEBPACK_IMPORTED_MODULE_9__pages_chacras_list_chacras_list__["a" /* ChacrasList */],
                __WEBPACK_IMPORTED_MODULE_10__pages_new_chacra_new_chacra__["a" /* NewChacra */],
                __WEBPACK_IMPORTED_MODULE_11__pages_edit_chacra_edit_chacra__["a" /* EditChacra */],
                __WEBPACK_IMPORTED_MODULE_12__pages_camiones_list_camiones_list__["a" /* CamionesList */],
                __WEBPACK_IMPORTED_MODULE_13__pages_new_camion_new_camion__["a" /* NewCamion */],
                __WEBPACK_IMPORTED_MODULE_14__pages_edit_camion_edit_camion__["a" /* EditCamion */],
                __WEBPACK_IMPORTED_MODULE_15__pages_empresas_list_empresas_list__["a" /* EmpresasList */],
                __WEBPACK_IMPORTED_MODULE_16__pages_new_empresa_new_empresa__["a" /* NewEmpresa */],
                __WEBPACK_IMPORTED_MODULE_17__pages_edit_empresa_edit_empresa__["a" /* EditEmpresa */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_23_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_24_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_http__["c" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_productoresList_productoresList__["a" /* ProductoresList */],
                __WEBPACK_IMPORTED_MODULE_7__pages_new_productor_new_productor__["a" /* NewProductor */],
                __WEBPACK_IMPORTED_MODULE_8__pages_edit_productor_edit_productor__["a" /* EditProductor */],
                __WEBPACK_IMPORTED_MODULE_9__pages_chacras_list_chacras_list__["a" /* ChacrasList */],
                __WEBPACK_IMPORTED_MODULE_10__pages_new_chacra_new_chacra__["a" /* NewChacra */],
                __WEBPACK_IMPORTED_MODULE_11__pages_edit_chacra_edit_chacra__["a" /* EditChacra */],
                __WEBPACK_IMPORTED_MODULE_12__pages_camiones_list_camiones_list__["a" /* CamionesList */],
                __WEBPACK_IMPORTED_MODULE_13__pages_new_camion_new_camion__["a" /* NewCamion */],
                __WEBPACK_IMPORTED_MODULE_14__pages_edit_camion_edit_camion__["a" /* EditCamion */],
                __WEBPACK_IMPORTED_MODULE_15__pages_empresas_list_empresas_list__["a" /* EmpresasList */],
                __WEBPACK_IMPORTED_MODULE_16__pages_new_empresa_new_empresa__["a" /* NewEmpresa */],
                __WEBPACK_IMPORTED_MODULE_17__pages_edit_empresa_edit_empresa__["a" /* EditEmpresa */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__providers_productores_service_productores_service__["a" /* ProductoresServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_chacras_service_chacras_service__["a" /* ChacrasServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_camiones_service_camiones_service__["a" /* CamionesServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_empresas_service_empresas_service__["a" /* EmpresasServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_productoresList_productoresList__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_new_productor_new_productor__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_chacras_list_chacras_list__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_new_chacra_new_chacra__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_camiones_list_camiones_list__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_new_camion_new_camion__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_empresas_list_empresas_list__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_new_empresa_new_empresa__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_auth_service_auth_service__ = __webpack_require__(77);
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
    function MyApp(platform, statusBar, splashScreen, authService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* Login */];
        if (authService.authenticated) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* Login */];
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        }
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Productores', component: __WEBPACK_IMPORTED_MODULE_6__pages_productoresList_productoresList__["a" /* ProductoresList */] },
            { title: 'Nuevo Productor', component: __WEBPACK_IMPORTED_MODULE_7__pages_new_productor_new_productor__["a" /* NewProductor */] },
            { title: 'Chacras', component: __WEBPACK_IMPORTED_MODULE_8__pages_chacras_list_chacras_list__["a" /* ChacrasList */] },
            { title: 'Nueva Chacra', component: __WEBPACK_IMPORTED_MODULE_9__pages_new_chacra_new_chacra__["a" /* NewChacra */] },
            { title: 'Camiones', component: __WEBPACK_IMPORTED_MODULE_10__pages_camiones_list_camiones_list__["a" /* CamionesList */] },
            { title: 'Nuevo Camion', component: __WEBPACK_IMPORTED_MODULE_11__pages_new_camion_new_camion__["a" /* NewCamion */] },
            { title: 'Empresas', component: __WEBPACK_IMPORTED_MODULE_12__pages_empresas_list_empresas_list__["a" /* EmpresasList */] },
            { title: 'Nuevo Empresa', component: __WEBPACK_IMPORTED_MODULE_13__pages_new_empresa_new_empresa__["a" /* NewEmpresa */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_14__providers_auth_service_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]) === "function" && _e || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 452:
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

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChacrasServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ChacrasServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ChacrasServiceProvider = (function () {
    function ChacrasServiceProvider(http) {
        this.http = http;
        this.urlAPI = 'http://localhost:3000/chacra';
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

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpresasServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the EmpresasServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var EmpresasServiceProvider = (function () {
    function EmpresasServiceProvider(http) {
        this.http = http;
        this.urlAPI = 'http://localhost:3000/empresa';
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

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpresasList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_empresas_service_empresas_service__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_edit_empresa_edit_empresa__ = __webpack_require__(725);
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
            selector: 'page-empresas-list',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\empresas-list\empresas-list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Empresas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="back-color">\n  <div class="back-black-color" padding>\n    <h3 padding>Listado de Empresas:</h3>\n      <ion-list>\n        <ion-item ion-item *ngFor="let empresa of empresasList">\n          <ion-avatar item-left>\n            <img src="assets/img/user.png">\n          </ion-avatar>\n          <h2>{{empresa.nombre}}</h2>\n          <p>Direccion: {{empresa.direccion}}</p>\n          <p>Telefono: {{empresa.telefono}}</p>\n          <button ion-button (click)="goToEdit(empresa)">\n           Editar\n          </button>\n          <button ion-button (click)="alertDeleteEmpresa(empresa.id)">\n           Eliminar\n          </button>\n        </ion-item>\n      </ion-list>\n    </div>\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\empresas-list\empresas-list.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_empresas_service_empresas_service__["a" /* EmpresasServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_empresas_service_empresas_service__["a" /* EmpresasServiceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
    ], EmpresasList);
    return EmpresasList;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=empresas-list.js.map

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewEmpresa; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_empresas_service_empresas_service__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_camiones_service_camiones_service__ = __webpack_require__(88);
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
    function NewEmpresa(navCtrl, navParams, CamionesServiceProvider, EmpresasServiceProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.CamionesServiceProvider = CamionesServiceProvider;
        this.EmpresasServiceProvider = EmpresasServiceProvider;
        this.empresa = { nombre: '', direcccion: '', telefono: '', camiones_ids: [] };
        this.camiones = [];
        this.CamionesServiceProvider.getAllCamiones().subscribe(function (data) { return _this.camiones = data; });
    }
    NewEmpresa.prototype.addNewEmpresa = function () {
        this.EmpresasServiceProvider.addNewEmpresa(this.empresa).subscribe(function (data) { return console.log(data); });
        this.destroyView();
    };
    NewEmpresa.prototype.destroyView = function () {
        this.navCtrl.pop();
    };
    NewEmpresa = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-empresa',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-empresa\new-empresa.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Nuevo Empresa</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<form (ngSubmit)="addNewEmpresa()">\n    <ion-item>\n      <ion-label>Nombre</ion-label>\n      <ion-input type="text" [(ngModel)]="empresa.nombre" name="name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Direccion</ion-label>\n      <ion-input type="text" [(ngModel)]="empresa.direccion" name="dni"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Telefono</ion-label>\n      <ion-input type="number" [(ngModel)]="empresa.telefono" name="telefono"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Camiones</ion-label>\n      <ion-select [(ngModel)]="empresa.camiones_ids" multiple="true" cancelText="Cancelar" okText="Aceptar" name="camiones_ids">\n        <ion-option *ngFor="let camion of camiones" [value] = "camion.id" >{{camion.nombreChofer}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <button ion-button type="submit" block>Agregar</button>\n</form>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-empresa\new-empresa.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_camiones_service_camiones_service__["a" /* CamionesServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_camiones_service_camiones_service__["a" /* CamionesServiceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_empresas_service_empresas_service__["a" /* EmpresasServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_empresas_service_empresas_service__["a" /* EmpresasServiceProvider */]) === "function" && _d || Object])
    ], NewEmpresa);
    return NewEmpresa;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=new-empresa.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEmpresa; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_empresas_service_empresas_service__ = __webpack_require__(722);
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
    function EditEmpresa(navCtrl, navParams, EmpresasServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.EmpresasServiceProvider = EmpresasServiceProvider;
        this.empresa = [];
        this.empresa = this.navParams.get('empresa');
    }
    EditEmpresa.prototype.editEmpresa = function (chacra) {
        this.EmpresasServiceProvider.editEmpresa(this.empresa).subscribe(function (data) { return console.log(data); });
        this.destroyView();
    };
    EditEmpresa.prototype.destroyView = function () {
        this.navCtrl.pop();
    };
    EditEmpresa = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-empresa',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-empresa\edit-empresa.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Editar Empresa</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form (ngSubmit)="editEmpresa()">\n      <ion-item>\n        <ion-label>Nombre</ion-label>\n        <ion-input type="text" [(ngModel)]="empresa.nombre" name="name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Direccion</ion-label>\n        <ion-input type="text" [(ngModel)]="empresa.direccion" name="direccion"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Telefono</ion-label>\n        <ion-input type="number" [(ngModel)]="empresa.telefono" name="telefono"></ion-input>\n      </ion-item>\n      <button ion-button type="submit" block>Editar</button>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-empresa\edit-empresa.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_empresas_service_empresas_service__["a" /* EmpresasServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_empresas_service_empresas_service__["a" /* EmpresasServiceProvider */]) === "function" && _c || Object])
    ], EditEmpresa);
    return EditEmpresa;
    var _a, _b, _c;
}());

//# sourceMappingURL=edit-empresa.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(262);
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
        angularFireAuth.authState.subscribe(function (user) {
            _this.user = user;
        });
    }
    Object.defineProperty(AuthServiceProvider.prototype, "authenticated", {
        get: function () {
            return this.user != null;
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
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoresServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
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
        this.urlAPI = 'http://localhost:3000/productor';
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

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CamionesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
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
        this.urlAPI = 'http://localhost:3000/camion';
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

/***/ })

},[372]);
//# sourceMappingURL=main.js.map
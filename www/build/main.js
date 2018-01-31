webpackJsonp([0],{

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(149);
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
            selector: 'page-home',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Inicio</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="signOut()">\n        Cerrar Sesion\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user_model__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(142);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], Login);
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IngresosServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(33);
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




var IngresosServiceProvider = (function () {
    function IngresosServiceProvider(http) {
        this.http = http;
        this.urlAPI = 'http://localhost:3000/ingreso';
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

/***/ 176:
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
webpackEmptyAsyncContext.id = 176;

/***/ }),

/***/ 220:
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
webpackEmptyAsyncContext.id = 220;

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_side_menu_redirect_events__ = __webpack_require__(432);
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

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectSearchablePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoresList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_productores_service_productores_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_edit_productor_edit_productor__ = __webpack_require__(371);
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
            selector: 'page-list',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\productoresList\productoresList.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Productores</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="back-color">\n  <div class="back-black-color" padding>\n    <h3 padding>Listado de Productores:</h3>\n    <ion-list>\n      <ion-item ion-item *ngFor="let prod of productoresList">\n        <ion-avatar item-left>\n          <img src="assets/img/user.png">\n        </ion-avatar>\n        <h2>{{prod.nombre}}</h2>\n        <p>Dni: {{prod.dni}}</p>\n        <p>Telefono: {{prod.telefono}}</p>\n        <button ion-button (click)="goToEdit(prod)">\n         Editar\n        </button>\n        <button ion-button (click)="alertDeleteProductor(prod.id)">\n         Eliminar\n        </button>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\productoresList\productoresList.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_productores_service_productores_service__["a" /* ProductoresServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ProductoresList);
    return ProductoresList;
}());

//# sourceMappingURL=productoresList.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProductor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_productores_service_productores_service__ = __webpack_require__(82);
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
            selector: 'page-edit-productor',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-productor\edit-productor.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Editar Productor</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="editProductor()">\n      <ion-item>\n        <ion-label>Nombre</ion-label>\n        <ion-input type="text" [(ngModel)]="productor.nombre" name="name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>DNI</ion-label>\n        <ion-input type="text" [(ngModel)]="productor.dni" name="dni"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Telefono</ion-label>\n        <ion-input type="number" [(ngModel)]="productor.telefono" name="telefono"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Chacra</ion-label>\n        <ion-select [(ngModel)]="productor.chacras_ids" multiple="true" cancelText="Cancelar" okText="Aceptar" name="chacras_ids">\n          <ion-option *ngFor="let chacra of chacras" [value] = "chacra.id" >{{chacra.nombre}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <button ion-button type="submit" block>Editar</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-productor\edit-productor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_productores_service_productores_service__["a" /* ProductoresServiceProvider */]])
    ], EditProductor);
    return EditProductor;
}());

//# sourceMappingURL=edit-productor.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewProductor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_productores_service_productores_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_chacras_service_chacras_service__ = __webpack_require__(64);
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
            selector: 'page-new-productor',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-productor\new-productor.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Nuevo Productor</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<form (ngSubmit)="addNewProductor()">\n    <ion-item>\n      <ion-label>Nombre</ion-label>\n      <ion-input type="text" [(ngModel)]="productor.nombre" name="name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>DNI</ion-label>\n      <ion-input type="text" [(ngModel)]="productor.dni" name="dni"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Telefono</ion-label>\n      <ion-input type="number" [(ngModel)]="productor.telefono" name="telefono"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Chacras</ion-label>\n      <ion-select [(ngModel)]="productor.chacras_ids" multiple="true" cancelText="Cancelar" okText="Aceptar" name="chacras_ids">\n        <ion-option *ngFor="let chacra of chacras" [value] = "chacra.id" >{{chacra.nombre}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <button ion-button type="submit" block>Agregar</button>\n</form>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-productor\new-productor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_productores_service_productores_service__["a" /* ProductoresServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_chacras_service_chacras_service__["a" /* ChacrasServiceProvider */]])
    ], NewProductor);
    return NewProductor;
}());

//# sourceMappingURL=new-productor.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChacrasList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chacras_service_chacras_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_cuadros_service_cuadros_service__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_edit_chacra_edit_chacra__ = __webpack_require__(375);
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
            title: 'Editar Cuadro',
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
            selector: 'page-chacras-list',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\chacras-list\chacras-list.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Chacras</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="back-color">\n  <div class="back-black-color" padding>\n    <h3 padding>Listado de Chacras:</h3>\n      <ion-list>\n        <ion-item ion-item *ngFor="let chacra of chacrasList">\n          <ion-avatar item-left>\n            <img src="assets/img/user.png">\n          </ion-avatar>\n          <h2>{{chacra.nombre}}</h2>\n          <p>Renspa: {{chacra.renspa}}</p>\n          <div padding>\n            <h3 padding>Cuadros: </h3>\n            <ion-list>\n              <ion-item ion-item *ngFor="let cuadro of chacra.cuadros">\n                <p>UP: {{cuadro.up}}</p>\n                <button ion-button (click)="alertEditCuadro(cuadro)">\n                 Editar\n                </button>\n                <button ion-button (click)="alertDeleteCuadro(cuadro.id)">\n                 Eliminar\n                </button>\n              </ion-item>\n            </ion-list>\n            <button ion-button (click)="alertNewCuadro(chacra.id)">\n             Agregar Cuadro\n            </button>\n          </div>\n          <button ion-button (click)="goToEdit(chacra)">\n           Editar\n          </button>\n          <button ion-button (click)="alertDeleteChacra(chacra.id)">\n           Eliminar\n          </button>\n        </ion-item>\n      </ion-list>\n    </div>\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\chacras-list\chacras-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_chacras_service_chacras_service__["a" /* ChacrasServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_cuadros_service_cuadros_service__["a" /* CuadrosServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ChacrasList);
    return ChacrasList;
}());

//# sourceMappingURL=chacras-list.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CuadrosServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(33);
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




var CuadrosServiceProvider = (function () {
    function CuadrosServiceProvider(http) {
        this.http = http;
        this.urlAPI = 'http://localhost:3000/cuadro';
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

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditChacra; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chacras_service_chacras_service__ = __webpack_require__(64);
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
            selector: 'page-edit-chacra',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-chacra\edit-chacra.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Editar Chacra</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form (ngSubmit)="editChacra()">\n      <ion-item>\n        <ion-label>Nombre</ion-label>\n        <ion-input type="text" [(ngModel)]="chacra.nombre" name="name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Renspa</ion-label>\n        <ion-input type="text" [(ngModel)]="chacra.renspa" name="dni"></ion-input>\n      </ion-item>\n      <button ion-button type="submit" block>Editar</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-chacra\edit-chacra.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_chacras_service_chacras_service__["a" /* ChacrasServiceProvider */]])
    ], EditChacra);
    return EditChacra;
}());

//# sourceMappingURL=edit-chacra.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewChacra; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chacras_service_chacras_service__ = __webpack_require__(64);
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
            selector: 'page-new-chacra',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-chacra\new-chacra.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Nueva Chacra</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<form (ngSubmit)="addNewChacra()">\n    <ion-item>\n      <ion-label>Nombre</ion-label>\n      <ion-input type="text" [(ngModel)]="chacra.nombre" name="nombre"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Renspa</ion-label>\n      <ion-input type="text" [(ngModel)]="chacra.renspa" name="renspa"></ion-input>\n    </ion-item>\n    <button ion-button type="submit" block>Agregar</button>\n</form>\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-chacra\new-chacra.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_chacras_service_chacras_service__["a" /* ChacrasServiceProvider */]])
    ], NewChacra);
    return NewChacra;
}());

//# sourceMappingURL=new-chacra.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CamionesList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_camiones_service_camiones_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_edit_camion_edit_camion__ = __webpack_require__(378);
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
            selector: 'page-camiones-list',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\camiones-list\camiones-list.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Camiones</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="back-color">\n  <div class="back-black-color" padding>\n    <h3 padding>Listado de Camiones:</h3>\n      <ion-list>\n        <ion-item ion-item *ngFor="let camion of camionesList">\n          <ion-avatar item-left>\n            <img src="assets/img/user.png">\n          </ion-avatar>\n          <h2>{{camion.nombreChofer}}</h2>\n          <p>Patente Chasis: {{camion.patenteChasis}}</p>\n          <p>Patente Acoplado: {{camion.patenteAcoplado}}</p>\n          <button ion-button (click)="goToEdit(camion)">\n           Editar\n          </button>\n          <button ion-button (click)="alertDeleteCamion(camion.id)">\n           Eliminar\n          </button>\n        </ion-item>\n      </ion-list>\n    </div>\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\camiones-list\camiones-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_camiones_service_camiones_service__["a" /* CamionesServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CamionesList);
    return CamionesList;
}());

//# sourceMappingURL=camiones-list.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCamion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_camiones_service_camiones_service__ = __webpack_require__(46);
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
            selector: 'page-edit-camion',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-camion\edit-camion.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Editar Camion</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form (ngSubmit)="editCamion()">\n      <ion-item>\n      <ion-label>Nombre Chofer</ion-label>\n      <ion-input type="text" [(ngModel)]="camion.nombreChofer" name="nombre"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Patente Acoplado</ion-label>\n      <ion-input type="text" [(ngModel)]="camion.patenteAcoplado" name="renspa"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Patente Chasis</ion-label>\n      <ion-input type="text" [(ngModel)]="camion.patenteChasis" name="renspa"></ion-input>\n    </ion-item>\n      <button ion-button type="submit" block>Editar</button>\n  </form>\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-camion\edit-camion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_camiones_service_camiones_service__["a" /* CamionesServiceProvider */]])
    ], EditCamion);
    return EditCamion;
}());

//# sourceMappingURL=edit-camion.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewCamion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_camiones_service_camiones_service__ = __webpack_require__(46);
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
            selector: 'page-new-camion',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-camion\new-camion.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Nuevo Camion</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<form (ngSubmit)="addNewCamion()">\n    <ion-item>\n      <ion-label>Nombre Chofer</ion-label>\n      <ion-input type="text" [(ngModel)]="camion.nombreChofer" name="nombre"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Patente Acoplado</ion-label>\n      <ion-input type="text" [(ngModel)]="camion.patenteAcoplado" name="renspa"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Patente Chasis</ion-label>\n      <ion-input type="text" [(ngModel)]="camion.patenteChasis" name="renspa"></ion-input>\n    </ion-item>\n    <button ion-button type="submit" block>Agregar</button>\n</form>\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-camion\new-camion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_camiones_service_camiones_service__["a" /* CamionesServiceProvider */]])
    ], NewCamion);
    return NewCamion;
}());

//# sourceMappingURL=new-camion.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpresasList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_empresas_service_empresas_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_edit_empresa_edit_empresa__ = __webpack_require__(381);
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
            selector: 'page-empresas-list',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\empresas-list\empresas-list.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Empresas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="back-color">\n  <div class="back-black-color" padding>\n    <h3 padding>Listado de Empresas:</h3>\n      <ion-list>\n        <ion-item ion-item *ngFor="let empresa of empresasList">\n          <ion-avatar item-left>\n            <img src="assets/img/user.png">\n          </ion-avatar>\n          <h2>{{empresa.nombre}}</h2>\n          <p>Direccion: {{empresa.direccion}}</p>\n          <p>Telefono: {{empresa.telefono}}</p>\n          <button ion-button (click)="goToEdit(empresa)">\n           Editar\n          </button>\n          <button ion-button (click)="alertDeleteEmpresa(empresa.id)">\n           Eliminar\n          </button>\n        </ion-item>\n      </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\empresas-list\empresas-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_empresas_service_empresas_service__["a" /* EmpresasServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EmpresasList);
    return EmpresasList;
}());

//# sourceMappingURL=empresas-list.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEmpresa; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_empresas_service_empresas_service__ = __webpack_require__(90);
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
            selector: 'page-edit-empresa',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-empresa\edit-empresa.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Editar Empresa</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form (ngSubmit)="editEmpresa()">\n      <ion-item>\n        <ion-label>Nombre</ion-label>\n        <ion-input type="text" [(ngModel)]="empresa.nombre" name="name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Direccion</ion-label>\n        <ion-input type="text" [(ngModel)]="empresa.direccion" name="direccion"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Telefono</ion-label>\n        <ion-input type="number" [(ngModel)]="empresa.telefono" name="telefono"></ion-input>\n      </ion-item>\n      <button ion-button type="submit" block>Editar</button>\n  </form>\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-empresa\edit-empresa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_empresas_service_empresas_service__["a" /* EmpresasServiceProvider */]])
    ], EditEmpresa);
    return EditEmpresa;
}());

//# sourceMappingURL=edit-empresa.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewEmpresa; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_empresas_service_empresas_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_camiones_service_camiones_service__ = __webpack_require__(46);
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
            selector: 'page-new-empresa',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-empresa\new-empresa.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Nuevo Empresa</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<form (ngSubmit)="addNewEmpresa()">\n    <ion-item>\n      <ion-label>Nombre</ion-label>\n      <ion-input type="text" [(ngModel)]="empresa.nombre" name="name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Direccion</ion-label>\n      <ion-input type="text" [(ngModel)]="empresa.direccion" name="dni"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Telefono</ion-label>\n      <ion-input type="number" [(ngModel)]="empresa.telefono" name="telefono"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Camiones</ion-label>\n      <ion-select [(ngModel)]="empresa.camiones_ids" multiple="true" cancelText="Cancelar" okText="Aceptar" name="camiones_ids">\n        <ion-option *ngFor="let camion of camiones" [value] = "camion.id" >{{camion.nombreChofer}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <button ion-button type="submit" block>Agregar</button>\n</form>\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-empresa\new-empresa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_camiones_service_camiones_service__["a" /* CamionesServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_empresas_service_empresas_service__["a" /* EmpresasServiceProvider */]])
    ], NewEmpresa);
    return NewEmpresa;
}());

//# sourceMappingURL=new-empresa.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstitucionesList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_instituciones_service_instituciones_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_edit_institucion_edit_institucion__ = __webpack_require__(384);
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
            selector: 'page-instituciones-list',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\instituciones-list\instituciones-list.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Instituciones</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="back-color">\n  <div class="back-black-color" padding>\n    <h3 padding>Listado de Instituciones:</h3>\n      <ion-list>\n        <ion-item ion-item *ngFor="let institucion of institucionesList">\n          <ion-avatar item-left>\n            <img src="assets/img/user.png">\n          </ion-avatar>\n          <h2>{{institucion.nombre}}</h2>\n          <p>Direccion: {{institucion.direccion}}</p>\n          <p>Telefono: {{institucion.telefono}}</p>\n          <button ion-button (click)="goToEdit(institucion)">\n           Editar\n          </button>\n          <button ion-button (click)="alertDeleteInstitucion(institucion.id)">\n           Eliminar\n          </button>\n        </ion-item>\n      </ion-list>\n    </div>\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\instituciones-list\instituciones-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_instituciones_service_instituciones_service__["a" /* InstitucionesServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], InstitucionesList);
    return InstitucionesList;
}());

//# sourceMappingURL=instituciones-list.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditInstitucion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_instituciones_service_instituciones_service__ = __webpack_require__(65);
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
    function EditInstitucion(navCtrl, navParams, InstitucionesServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.InstitucionesServiceProvider = InstitucionesServiceProvider;
        this.institucion = [];
        this.institucion = this.navParams.get('institucion');
    }
    EditInstitucion.prototype.editInstitucion = function (institucion) {
        this.InstitucionesServiceProvider.editInstitucion(this.institucion).subscribe(function (data) { return console.log(data); });
        this.destroyView();
    };
    EditInstitucion.prototype.destroyView = function () {
        this.navCtrl.pop();
    };
    EditInstitucion = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-institucion',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-institucion\edit-institucion.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Editar Institucion</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form (ngSubmit)="editInstitucion()">\n      <ion-item>\n        <ion-label>Nombre</ion-label>\n        <ion-input type="text" [(ngModel)]="institucion.nombre" name="name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Direccion</ion-label>\n        <ion-input type="text" [(ngModel)]="institucion.direccion" name="direccion"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Telefono</ion-label>\n        <ion-input type="number" [(ngModel)]="institucion.telefono" name="telefono"></ion-input>\n      </ion-item>\n      <button ion-button type="submit" block>Editar</button>\n  </form>\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\edit-institucion\edit-institucion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_instituciones_service_instituciones_service__["a" /* InstitucionesServiceProvider */]])
    ], EditInstitucion);
    return EditInstitucion;
}());

//# sourceMappingURL=edit-institucion.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewInstitucion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_instituciones_service_instituciones_service__ = __webpack_require__(65);
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
    function NewInstitucion(navCtrl, navParams, InstitucionesServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.InstitucionesServiceProvider = InstitucionesServiceProvider;
        this.institucion = { nombre: '', direccion: '', telefono: '' };
    }
    NewInstitucion.prototype.addNewInstitucion = function () {
        this.InstitucionesServiceProvider.addNewInstitucion(this.institucion).subscribe(function (data) { return console.log(data); });
        this.destroyView();
    };
    NewInstitucion.prototype.destroyView = function () {
        this.navCtrl.pop();
    };
    NewInstitucion = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-institucion',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-institucion\new-institucion.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Nueva Institucion</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<form (ngSubmit)="addNewInstitucion()">\n    <ion-item>\n      <ion-label>Nombre</ion-label>\n      <ion-input type="text" [(ngModel)]="institucion.nombre" name="name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Direccion</ion-label>\n      <ion-input type="text" [(ngModel)]="institucion.direccion" name="direccion"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Telefono</ion-label>\n      <ion-input type="number" [(ngModel)]="institucion.telefono" name="telefono"></ion-input>\n    </ion-item>\n    <button ion-button type="submit" block>Agregar</button>\n</form>\n</ion-content>\n\n\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-institucion\new-institucion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_instituciones_service_instituciones_service__["a" /* InstitucionesServiceProvider */]])
    ], NewInstitucion);
    return NewInstitucion;
}());

//# sourceMappingURL=new-institucion.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IngresosList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ingresos_service_ingresos_service__ = __webpack_require__(163);
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
    function IngresosList(navCtrl, navParams, IngresosServiceProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.IngresosServiceProvider = IngresosServiceProvider;
        this.ingresosList = [];
        this.IngresosServiceProvider.getAllIngresos().subscribe(function (data) { return _this.ingresosList = data; });
    }
    IngresosList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ingresos-list',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\ingresos-list\ingresos-list.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Ingresos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="back-color">\n  <div class="back-black-color" padding>\n    <h3 padding>Listado de Ingresos:</h3>\n      <ion-list>\n        <ion-item ion-item *ngFor="let ingreso of ingresosList">\n          <h2>Remito: {{ingreso.nroRemito}}</h2>\n          <p>Fecha Ingreso: {{ingreso.fechaIngreso}}</p>\n          <p>Ingresado por: {{ingreso.createdFor}}</p>\n          <div padding>\n            <h3 padding>Lotes: </h3>\n            <ion-list>\n              <ion-item ion-item *ngFor="let lote of ingreso.lotes">\n                <p>Nro Lote: {{lote.nroLote}}</p>\n                <p>Cantidad Bins: {{lote.cantBins}}</p>\n                <p>Peso Neto: {{lote.pesoNeto}}</p>\n                <p>Especie: {{lote.especy.tipo}}</p>\n                <p>Variedad: {{lote.variedad.tipo}}</p>\n                <p>Calidad: {{lote.calidad.tipo}}</p>\n                <p>Lugar Actual: {{lote.institucion.nombre}}</p>\n                <p>Camion Transporto: {{lote.camion.nombreChofer}}</p>\n                <button ion-button (click)="alertEditCuadro(cuadro)">\n                 Editar\n                </button>\n                <button ion-button (click)="alertDeleteCuadro(cuadro.id)">\n                 Eliminar\n                </button>\n              </ion-item>\n            </ion-list>\n          </div>\n          <button ion-button (click)="goToEdit(chacra)">\n           Editar\n          </button>\n          <button ion-button (click)="alertDeleteChacra(chacra.id)">\n           Eliminar\n          </button>\n        </ion-item>\n      </ion-list>\n    </div>\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\ingresos-list\ingresos-list.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_ingresos_service_ingresos_service__["a" /* IngresosServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_ingresos_service_ingresos_service__["a" /* IngresosServiceProvider */]) === "function" && _c || Object])
    ], IngresosList);
    return IngresosList;
    var _a, _b, _c;
}());

//# sourceMappingURL=ingresos-list.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewIngreso; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_calidad_model__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_especie_model__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_variedad_model__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_institucion_model__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_camion_model__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_calidades_service_calidades_service__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_especie_service_especie_service__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_instituciones_service_instituciones_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_camiones_service_camiones_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_ingresos_service_ingresos_service__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_auth_service_auth_service__ = __webpack_require__(80);
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
    function NewIngreso(navCtrl, navParams, CalidadesServiceProvider, EspecieServiceProvider, InstitucionesServiceProvider, CamionesServiceProvider, IngresosServiceProvider, AuthServiceProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.CalidadesServiceProvider = CalidadesServiceProvider;
        this.EspecieServiceProvider = EspecieServiceProvider;
        this.InstitucionesServiceProvider = InstitucionesServiceProvider;
        this.CamionesServiceProvider = CamionesServiceProvider;
        this.IngresosServiceProvider = IngresosServiceProvider;
        this.AuthServiceProvider = AuthServiceProvider;
        this.ingreso = { nroRemito: 0, fechaIngreso: this.formatDate(), institucionId: 0, camionId: 0, createdFor: '', lotes: [] };
        this.calidades = [];
        this.calidad = __WEBPACK_IMPORTED_MODULE_2__models_calidad_model__["a" /* CalidadModel */];
        this.especie = __WEBPACK_IMPORTED_MODULE_3__models_especie_model__["a" /* EspecieModel */];
        this.especies = [];
        this.variedad = __WEBPACK_IMPORTED_MODULE_4__models_variedad_model__["a" /* VariedadModel */];
        this.variedades = [];
        this.institucion = __WEBPACK_IMPORTED_MODULE_5__models_institucion_model__["a" /* InstitucionModel */];
        this.instituciones = [];
        this.camion = __WEBPACK_IMPORTED_MODULE_6__models_camion_model__["a" /* CamionModel */];
        this.camiones = [];
        this.lotes = [];
        this.agregarLoteList();
        this.CalidadesServiceProvider.getAllCalidades().subscribe(function (data) { return _this.calidades = _this.lotes[0].calidades = Object.assign([], data); });
        this.EspecieServiceProvider.getAllEmpecies().subscribe(function (data) { return _this.especies = _this.lotes[0].especies = Object.assign([], data); });
        this.InstitucionesServiceProvider.getAllInstituciones().subscribe(function (data) { return _this.instituciones = _this.lotes[0].instituciones = Object.assign([], data); });
        this.CamionesServiceProvider.getAllCamiones().subscribe(function (data) { return _this.camiones = data; });
        console.log(this.lotes);
    }
    NewIngreso.prototype.agregarLoteList = function () {
        this.lotes.push({ peso: 0, nroLote: 0, cantBins: 0, calidadId: 0, especieId: 0, variedadId: 0,
            calidades: Object.assign([], this.calidades), especies: Object.assign([], this.especies), variedades: Object.assign([], this.variedades),
            especie: Object.assign({}, this.especie), variedad: Object.assign({}, this.variedad), calidad: Object.assign({}, this.calidad) });
    };
    NewIngreso.prototype.deleteLoteList = function (lote) {
        var index = this.lotes.indexOf(lote, 0);
        this.lotes.splice(index, 1);
    };
    NewIngreso.prototype.calidadChange = function (event, lote) {
        lote.calidadId = event.value.id;
        console.log('value:', event.value);
    };
    NewIngreso.prototype.especieChange = function (event, lote) {
        lote.especieId = event.value.id;
        var currentVariedades = this.especies[this.especies.indexOf(event.value, 0)].variedads;
        lote.variedades = Object.assign([], currentVariedades);
        console.log('value:', event.value);
    };
    NewIngreso.prototype.variedadChange = function (event, lote) {
        lote.variedadId = event.value.id;
        console.log('value:', event.value);
    };
    NewIngreso.prototype.institucionChange = function (event) {
        this.ingreso.institucionId = event.value.id;
        console.log('value:', event.value);
    };
    NewIngreso.prototype.camionChange = function (event) {
        this.ingreso.camionId = event.value.id;
        console.log('value:', event.value);
    };
    NewIngreso.prototype.addNewIngreso = function () {
        this.ingreso.lotes = this.lotes;
        this.ingreso.createdFor = this.AuthServiceProvider.getCurrentUser().email;
        this.IngresosServiceProvider.addNewIngreso(this.ingreso).subscribe(function (data) { return console.log(data); });
        console.log(this.ingreso);
    };
    NewIngreso.prototype.formatDate = function () {
        var fecha = new Date();
        return fecha.getFullYear() + "-" + fecha.getMonth() + 1 + "-" + fecha.getDate();
    };
    NewIngreso = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-ingreso',template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-ingreso\new-ingreso.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Nuevo Ingreso</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<form (ngSubmit)="addNewIngreso()">\n	    <ion-item>\n	      <ion-label>Nro Remito</ion-label>\n	      <ion-input type="text" [(ngModel)]="ingreso.nroRemito" name="nroRemito"></ion-input>\n	    </ion-item>\n	    <ion-item>\n	      <ion-label>Fecha de Ingreso</ion-label>\n	      <ion-input type="date" [value]="ingreso.fechaIngreso" (input)="ingreso.fechaIngreso = $event.target.value" name="fechaIngreso"></ion-input>\n	    </ion-item>\n	    <ion-item>\n	        <select-searchable\n	            [(ngModel)]="institucion"\n	            [ngModelOptions]="{standalone: true}"\n	            title="Instituciones"\n	            itemValueField="id"\n	            itemTextField="nombre"\n	            [items]="instituciones"\n	            [canSearch]="true"\n	            (onChange)="institucionChange($event)">\n	        </select-searchable>\n	    </ion-item>\n	    <ion-item>\n	        <select-searchable\n	            [(ngModel)]="camion"\n	            [ngModelOptions]="{standalone: true}"\n	            title="Camiones"\n	            itemValueField="id"\n	            itemTextField="nombreChofer"\n	            [items]="camiones"\n	            [canSearch]="true"\n	            (onChange)="camionChange($event)">\n	        </select-searchable>\n	    </ion-item>\n	    <div *ngFor="let lote of lotes" padding>\n            <h3 padding>Nuevo Lote: </h3>\n            <ion-item>\n              <ion-label>Nro Lote</ion-label>\n              <ion-input type="number" [value]="lote.nroLote" (input)="lote.nroLote = $event.target.value" name="nroLote"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label>Cantidad Bins</ion-label>\n              <ion-input type="number" [value]="lote.cantBins" (input)="lote.cantBins = $event.target.value" name="cantBins"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label>Peso</ion-label>\n              <ion-input type="number" [value]="lote.peso" (input)="lote.peso = $event.target.value" name="peso"></ion-input>\n            </ion-item>\n            <ion-item>\n                <select-searchable\n                    [(ngModel)]="lote.calidad"\n                    [ngModelOptions]="{standalone: true}"\n                    title="Calidades"\n                    itemValueField="id"\n                    itemTextField="tipo"\n                    [items]="lote.calidades"\n                    [canSearch]="true"\n                    (onChange)="calidadChange($event,lote)">\n                </select-searchable>\n            </ion-item>\n            <ion-item>\n                <select-searchable\n                    [(ngModel)]="lote.especie"\n                    [ngModelOptions]="{standalone: true}"\n                    title="Especies"\n                    itemValueField="id"\n                    itemTextField="tipo"\n                    [items]="lote.especies"\n                    [canSearch]="true"\n                    (onChange)="especieChange($event,lote)">\n                </select-searchable>\n            </ion-item>\n            <ion-item>\n                <select-searchable\n                    [(ngModel)]="lote.variedad"\n                    [ngModelOptions]="{standalone: true}"\n                    title="Variedades"\n                    itemValueField="id"\n                    itemTextField="tipo"\n                    [items]="lote.variedades"\n                    [canSearch]="true"\n                    (onChange)="variedadChange($event,lote)">\n                </select-searchable>\n            </ion-item>\n            <button ion-button (click)="deleteLoteList(lote)">Eliminar Lote</button>\n        </div>\n        <button ion-button type="button" (click)="agregarLoteList()">Nuevo Lote</button>\n	    <button ion-button type="submit" block>Aceptar Ingreso</button>\n	</form>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\pages\new-ingreso\new-ingreso.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__providers_calidades_service_calidades_service__["a" /* CalidadesServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_calidades_service_calidades_service__["a" /* CalidadesServiceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__providers_especie_service_especie_service__["a" /* EspecieServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__providers_especie_service_especie_service__["a" /* EspecieServiceProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_9__providers_instituciones_service_instituciones_service__["a" /* InstitucionesServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__providers_instituciones_service_instituciones_service__["a" /* InstitucionesServiceProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_10__providers_camiones_service_camiones_service__["a" /* CamionesServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__providers_camiones_service_camiones_service__["a" /* CamionesServiceProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_11__providers_ingresos_service_ingresos_service__["a" /* IngresosServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__providers_ingresos_service_ingresos_service__["a" /* IngresosServiceProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_12__providers_auth_service_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]) === "function" && _h || Object])
    ], NewIngreso);
    return NewIngreso;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=new-ingreso.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalidadesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(33);
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




var CalidadesServiceProvider = (function () {
    function CalidadesServiceProvider(http) {
        this.http = http;
        this.urlAPI = 'http://localhost:3000/calidad';
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

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EspecieServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(33);
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




var EspecieServiceProvider = (function () {
    function EspecieServiceProvider(http) {
        this.http = http;
        this.urlAPI = 'http://localhost:3000/especie';
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

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(395);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_side_menu_content_side_menu_content_component__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_select_select_module__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_productoresList_productoresList__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_new_productor_new_productor__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_edit_productor_edit_productor__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_chacras_list_chacras_list__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_new_chacra_new_chacra__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_edit_chacra_edit_chacra__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_camiones_list_camiones_list__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_new_camion_new_camion__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_edit_camion_edit_camion__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_empresas_list_empresas_list__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_new_empresa_new_empresa__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_edit_empresa_edit_empresa__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_instituciones_list_instituciones_list__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_new_institucion_new_institucion__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_edit_institucion_edit_institucion__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_new_ingreso_new_ingreso__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_ingresos_list_ingresos_list__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angularfire2__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angularfire2_auth__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_auth_service_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_camiones_service_camiones_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_empresas_service_empresas_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_instituciones_service_instituciones_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_cuadros_service_cuadros_service__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_ingresos_service_ingresos_service__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_especie_service_especie_service__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_calidades_service_calidades_service__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_variedades_service_variedades_service__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_chacras_service_chacras_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_productores_service_productores_service__ = __webpack_require__(82);
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
                __WEBPACK_IMPORTED_MODULE_23__pages_new_ingreso_new_ingreso__["a" /* NewIngreso */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_28_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_29_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_http__["c" /* HttpModule */],
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
                __WEBPACK_IMPORTED_MODULE_23__pages_new_ingreso_new_ingreso__["a" /* NewIngreso */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_40__providers_productores_service_productores_service__["a" /* ProductoresServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_39__providers_chacras_service_chacras_service__["a" /* ChacrasServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_camiones_service_camiones_service__["a" /* CamionesServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_empresas_service_empresas_service__["a" /* EmpresasServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_33__providers_instituciones_service_instituciones_service__["a" /* InstitucionesServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_34__providers_cuadros_service_cuadros_service__["a" /* CuadrosServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_35__providers_ingresos_service_ingresos_service__["a" /* IngresosServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_36__providers_especie_service_especie_service__["a" /* EspecieServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_37__providers_calidades_service_calidades_service__["a" /* CalidadesServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_38__providers_variedades_service_variedades_service__["a" /* VariedadesServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuRedirectEvent; });
// SideMenuRedirectEvent constant
var SideMenuRedirectEvent = 'sidemenu:redirect';
//# sourceMappingURL=side-menu-redirect-events.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectSearchableModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_page__ = __webpack_require__(261);
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

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectSearchable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_page__ = __webpack_require__(261);
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

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_side_menu_content_side_menu_content_component__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_productoresList_productoresList__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_new_productor_new_productor__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_chacras_list_chacras_list__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_new_chacra_new_chacra__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_camiones_list_camiones_list__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_new_camion_new_camion__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_empresas_list_empresas_list__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_new_empresa_new_empresa__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_instituciones_list_instituciones_list__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_new_institucion_new_institucion__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_ingresos_list_ingresos_list__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_new_ingreso_new_ingreso__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_auth_service_auth_service__ = __webpack_require__(80);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* Login */];
        this.sideMenuSettings = {
            accordionMode: false,
            showSelectedOption: false
        };
        if (authService.authenticated) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* Login */];
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        }
        this.initializeApp();
        // used for an example of ngFor and navigation
        /*this.pages = [
          { title: 'Inicio', component: HomePage },
          { title: 'Productores', component: ProductoresList },
          { title: 'Nuevo Productor', component: NewProductor },
          { title: 'Chacras', component: ChacrasList },
          { title: 'Nueva Chacra', component: NewChacra },
          { title: 'Camiones', component: CamionesList },
          { title: 'Nuevo Camion', component: NewCamion },
          { title: 'Empresas', component: EmpresasList },
          { title: 'Nuevo Empresa', component: NewEmpresa }
        ];*/
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
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
                    iconName: 'add',
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\app\app.html"*/'<ion-menu persistent="true" [content]="content" (ionClose)="collapseMenuOptions()">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <!--ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list-->\n    <side-menu-content [settings]="sideMenuSettings" [options]="options" (selectOption)="selectOption($event)" style="padding: 0"></side-menu-content>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\xampp\htdocs\Cultivos\Mobile-Web\Ingresos-App\src\app\app.html"*/
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CamionesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(33);
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

/***/ }),

/***/ 473:
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

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChacrasServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(33);
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

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstitucionesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(33);
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




var InstitucionesServiceProvider = (function () {
    function InstitucionesServiceProvider(http) {
        this.http = http;
        this.urlAPI = 'http://localhost:3000/institucion';
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

/***/ 741:
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

/***/ 742:
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

/***/ 743:
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

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstitucionModel; });
var InstitucionModel = (function () {
    function InstitucionModel() {
    }
    return InstitucionModel;
}());

//# sourceMappingURL=institucion-model.js.map

/***/ }),

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CamionModel; });
var CamionModel = (function () {
    function CamionModel() {
    }
    return CamionModel;
}());

//# sourceMappingURL=camion-model.js.map

/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariedadesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
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
  Generated class for the VariedadesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var VariedadesServiceProvider = (function () {
    function VariedadesServiceProvider(http) {
        this.http = http;
        console.log('Hello VariedadesServiceProvider Provider');
    }
    VariedadesServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], VariedadesServiceProvider);
    return VariedadesServiceProvider;
}());

//# sourceMappingURL=variedades-service.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(268);
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
    AuthServiceProvider.prototype.getCurrentUser = function () {
        return this.angularFireAuth.auth.currentUser;
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object])
    ], AuthServiceProvider);
    return AuthServiceProvider;
    var _a;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoresServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(33);
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

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpresasServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(33);
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

/***/ })

},[390]);
//# sourceMappingURL=main.js.map
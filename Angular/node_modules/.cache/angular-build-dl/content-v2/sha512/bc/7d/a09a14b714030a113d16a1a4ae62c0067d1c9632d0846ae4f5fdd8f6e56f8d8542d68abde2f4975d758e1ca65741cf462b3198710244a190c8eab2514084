function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dynamic-menu-dynamic-menu-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dynamic-menu/dynamic-menu.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dynamic-menu/dynamic-menu.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDynamicMenuDynamicMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"center\">\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.sm=\"60\" class=\"flex-p\">\r\n        <mat-card class=\"list\">\r\n            <mat-card-content>\r\n                <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">      \r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Title\" formControlName=\"title\">\r\n                        <mat-error *ngIf=\"form.controls.title.errors?.required\">Menu title is required</mat-error>\r\n                        <mat-error *ngIf=\"form.controls.title.hasError('minlength')\">Menu title isn't long enough, minimum of 3 characters</mat-error>\r\n                    </mat-form-field> \r\n                    <mat-form-field class=\"w-100\">\r\n                        <mat-select placeholder=\"Icon\" formControlName=\"icon\">\r\n                            <mat-option *ngFor=\"let icon of icons\" [value]=\"icon\">\r\n                                <mat-icon>{{ icon }}</mat-icon>\r\n                            </mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"w-100\" >\r\n                        <input matInput placeholder=\"RouterLink\" formControlName=\"routerLink\" matTooltip=\"e.g. /dashboard\" matTooltipPosition=\"after\">\r\n                        <mat-error *ngIf=\"form.controls.routerLink.errors?.required\">Routerlink or href is required</mat-error>\r\n                    </mat-form-field>\r\n                    <mat-checkbox formControlName=\"hasSubMenu\">Has sub menu</mat-checkbox>\r\n                    <mat-form-field class=\"w-100\" >\r\n                        <input matInput placeholder=\"Href\" formControlName=\"href\" matTooltip=\"e.g. http://themeseason.com\" matTooltipPosition=\"after\">\r\n                        <mat-error *ngIf=\"form.controls.href.errors?.required\">Href or routerlink is required</mat-error>\r\n                    </mat-form-field>\r\n                    <mat-radio-group formControlName=\"target\">\r\n                        <mat-radio-button value=\"_blank\">_blank</mat-radio-button>\r\n                        <mat-radio-button value=\"_self\" class=\"mx-1\">_self</mat-radio-button>\r\n                    </mat-radio-group>\r\n                    <mat-form-field class=\"w-100\">\r\n                        <mat-select placeholder=\"Parent menu\" formControlName=\"parentId\">\r\n                            <mat-option value=\"0\">-- Select Parent Menu --</mat-option>\r\n                            <mat-option *ngFor=\"let menuItem of menuItems\" [value]=\"menuItem.id\">\r\n                                {{menuItem.title}}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"center\">\r\n                        <button mat-raised-button color=\"primary\" [disabled]=\"!form.valid\" type=\"submit\">Add New Menu Item</button>\r\n                    </div>\r\n                </form>\r\n            </mat-card-content>\r\n        </mat-card>\r\n      </div> \r\n</div> ";
    /***/
  },

  /***/
  "./src/app/pages/dynamic-menu/dynamic-menu.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/dynamic-menu/dynamic-menu.component.ts ***!
    \**************************************************************/

  /*! exports provided: DynamicMenuComponent */

  /***/
  function srcAppPagesDynamicMenuDynamicMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicMenuComponent", function () {
      return DynamicMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../theme/components/menu/menu.service */
    "./src/app/theme/components/menu/menu.service.ts");
    /* harmony import */


    var _dynamic_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dynamic-menu.service */
    "./src/app/pages/dynamic-menu/dynamic-menu.service.ts");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../app.settings */
    "./src/app/app.settings.ts");
    /* harmony import */


    var _theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../theme/components/menu/vertical-menu/vertical-menu.component */
    "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.ts");
    /* harmony import */


    var _theme_utils_app_animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../theme/utils/app-animation */
    "./src/app/theme/utils/app-animation.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var DynamicMenuComponent =
    /*#__PURE__*/
    function () {
      function DynamicMenuComponent(appSettings, formBuilder, snackBar, menuService, dynamicMenuService) {
        _classCallCheck(this, DynamicMenuComponent);

        this.appSettings = appSettings;
        this.formBuilder = formBuilder;
        this.snackBar = snackBar;
        this.menuService = menuService;
        this.dynamicMenuService = dynamicMenuService;
        this.icons = ['home', 'person', 'card_travel', 'delete', 'event', 'favorite', 'help'];
        this.settings = this.appSettings.settings;
        this.menuItems = this.menuService.getVerticalMenuItems();
      }

      _createClass(DynamicMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.formBuilder.group({
            'title': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)])],
            'icon': null,
            'routerLink': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'href': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'target': null,
            'hasSubMenu': false,
            'parentId': 0
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          this.form.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500)).subscribe(function (menu) {
            if (menu.routerLink && menu.routerLink != '') {
              _this.form.controls['href'].setValue(null);

              _this.form.controls['href'].disable();

              _this.form.controls['href'].clearValidators();

              _this.form.controls['target'].setValue(null);

              _this.form.controls['target'].disable();
            } else {
              _this.form.controls['href'].enable();

              _this.form.controls['href'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);

              _this.form.controls['target'].enable();
            }

            _this.form.controls['href'].updateValueAndValidity();

            if (menu.href && menu.href != '') {
              _this.form.controls['routerLink'].setValue(null);

              _this.form.controls['routerLink'].disable();

              _this.form.controls['routerLink'].clearValidators();

              _this.form.controls['hasSubMenu'].setValue(false);

              _this.form.controls['hasSubMenu'].disable();
            } else {
              _this.form.controls['routerLink'].enable();

              _this.form.controls['routerLink'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);

              _this.form.controls['hasSubMenu'].enable();
            }

            _this.form.controls['routerLink'].updateValueAndValidity();
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(menu) {
          if (this.form.valid) {
            this.dynamicMenuService.addNewMenuItem(_theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_7__["VerticalMenuComponent"], this.menuItems, menu);
            this.snackBar.open('New menu item added successfully!', null, {
              duration: 2000
            });
            this.form.reset({
              hasSubMenu: false,
              parentId: 0
            });
          }
        }
      }]);

      return DynamicMenuComponent;
    }();

    DynamicMenuComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }, {
        type: _theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"]
      }, {
        type: _dynamic_menu_service__WEBPACK_IMPORTED_MODULE_5__["DynamicMenuService"]
      }];
    };

    DynamicMenuComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-dynamic-menu',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./dynamic-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dynamic-menu/dynamic-menu.component.html")).default,
      providers: [_dynamic_menu_service__WEBPACK_IMPORTED_MODULE_5__["DynamicMenuService"], _theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"]],
      animations: [_theme_utils_app_animation__WEBPACK_IMPORTED_MODULE_8__["listTransition"]],
      host: {
        '[@listTransition]': ''
      }
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"], _dynamic_menu_service__WEBPACK_IMPORTED_MODULE_5__["DynamicMenuService"]])], DynamicMenuComponent);
    /***/
  },

  /***/
  "./src/app/pages/dynamic-menu/dynamic-menu.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/dynamic-menu/dynamic-menu.module.ts ***!
    \***********************************************************/

  /*! exports provided: routes, DynamicMenuModule */

  /***/
  function srcAppPagesDynamicMenuDynamicMenuModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicMenuModule", function () {
      return DynamicMenuModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _dynamic_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dynamic-menu.component */
    "./src/app/pages/dynamic-menu/dynamic-menu.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var routes = [{
      path: '',
      component: _dynamic_menu_component__WEBPACK_IMPORTED_MODULE_5__["DynamicMenuComponent"],
      pathMatch: 'full'
    }];

    var DynamicMenuModule = function DynamicMenuModule() {
      _classCallCheck(this, DynamicMenuModule);
    };

    DynamicMenuModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
      declarations: [_dynamic_menu_component__WEBPACK_IMPORTED_MODULE_5__["DynamicMenuComponent"]]
    })], DynamicMenuModule);
    /***/
  },

  /***/
  "./src/app/pages/dynamic-menu/dynamic-menu.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/dynamic-menu/dynamic-menu.service.ts ***!
    \************************************************************/

  /*! exports provided: DynamicMenuService */

  /***/
  function srcAppPagesDynamicMenuDynamicMenuServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicMenuService", function () {
      return DynamicMenuService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _theme_components_menu_menu_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../theme/components/menu/menu.model */
    "./src/app/theme/components/menu/menu.model.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var DynamicMenuService =
    /*#__PURE__*/
    function () {
      function DynamicMenuService(componentFactoryResolver, applicationRef, injector) {
        _classCallCheck(this, DynamicMenuService);

        this.componentFactoryResolver = componentFactoryResolver;
        this.applicationRef = applicationRef;
        this.injector = injector;
      }

      _createClass(DynamicMenuService, [{
        key: "addNewMenuItem",
        value: function addNewMenuItem(component, menuItems, menuItem) {
          var lastId = menuItems[menuItems.length - 1].id;
          var newMenuItem = new _theme_components_menu_menu_model__WEBPACK_IMPORTED_MODULE_1__["Menu"](lastId + 1, menuItem['title'], menuItem['routerLink'], menuItem['href'], menuItem['icon'], menuItem['target'], menuItem['hasSubMenu'], parseInt(menuItem['parentId']));
          menuItems.push(newMenuItem);
          var item = menuItems.filter(function (item) {
            return item.id == newMenuItem.parentId;
          })[0];
          if (item) item.hasSubMenu = true;
          var componentRef = this.componentFactoryResolver.resolveComponentFactory(component).create(this.injector);
          this.applicationRef.attachView(componentRef.hostView);
          var instance = componentRef.instance;
          instance.menuItems = menuItems;
          instance.menuParentId = 0;
          var elem = componentRef.hostView.rootNodes[0];
          var verticalMenu = document.getElementById('vertical-menu');
          verticalMenu.replaceChild(elem, verticalMenu.children[0]);
        }
      }]);

      return DynamicMenuService;
    }();

    DynamicMenuService.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }];
    };

    DynamicMenuService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])], DynamicMenuService);
    /***/
  }
}]);
//# sourceMappingURL=pages-dynamic-menu-dynamic-menu-module-es5.js.map
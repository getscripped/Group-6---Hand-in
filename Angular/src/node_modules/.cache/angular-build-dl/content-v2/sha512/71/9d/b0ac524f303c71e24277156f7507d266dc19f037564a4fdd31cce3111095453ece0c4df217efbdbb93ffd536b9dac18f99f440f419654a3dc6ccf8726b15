function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"app\" class=\"app\" [dir]=\"(settings.rtl) ? 'rtl' : 'ltr'\"\r\n            [ngClass]=\"settings.theme\" \r\n            [class.fixed-header]=\"settings.fixedHeader\"\r\n            [class.horizontal-menu]=\"settings.menu == 'horizontal'\" \r\n            [class.compact]=\"settings.menuType == 'compact'\" \r\n            [class.mini]=\"settings.menuType == 'mini'\" >\r\n    <router-outlet></router-outlet>\r\n    <div id=\"app-spinner\" [class.hide]=\"!settings.loadingSpinner\"> \r\n        <mat-spinner color=\"primary\"></mat-spinner>  \r\n        <h4>loading...</h4>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/equipment-types/equipment-types.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/equipment-types/equipment-types.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEquipmentTypesEquipmentTypesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>equipment-types works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/equipment/equipment.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/equipment/equipment.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEquipmentEquipmentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<h1 style=\"text-align: center;\">Equipment</h1>\n<button mat-raised-button color=\"primary\" (click) = \"AddEquipment()\" class=\"m-1\">Add New</button>\n<button mat-raised-button color=\"primary\" (click) = \"LoadTypes()\" class=\"m-1\">Equipment Types</button>\n<button mat-raised-button color=\"primary\" (click) = \"Download()\" class=\"m-1\">Download List</button>\n\n<div fxLayout=\"column\">\n    <div class=\"flex-p\" *ngIf = \"showtable\"> \n        <div fxLayout=\"column\" class=\"mat-elevation-z8\">           \n            <mat-form-field class=\"p-1\">\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Type to filter all columns\">\n            </mat-form-field> \n        </div>\n        <mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">       \n            <ng-container matColumnDef=\"Equipment_ID\">\n                <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.Equipment_ID}} </mat-cell>\n            </ng-container>         \n            <ng-container matColumnDef=\"Equipment_type_Description\">\n                <mat-header-cell *matHeaderCellDef> Type </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.Equipment_type_Description}} </mat-cell>\n            </ng-container>     \n            <ng-container matColumnDef=\"Equipment_Description\">\n                <mat-header-cell *matHeaderCellDef> Description </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.Equipment_Description}} </mat-cell>\n            </ng-container>        \n            <ng-container matColumnDef=\"Infrastructure_Name\">\n                <mat-header-cell *matHeaderCellDef> Infrastructure </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.Infrastructure_Name}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"Equipment_Condition\">\n                <mat-header-cell *matHeaderCellDef> Condition </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.Equipment_Condition}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"Equipment_Cost\">\n                <mat-header-cell *matHeaderCellDef> Cost </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.Equipment_Cost}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"Is_Active\">\n                <mat-header-cell *matHeaderCellDef> Active </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.Is_Active}} </mat-cell>\n            </ng-container>\n\\\n            <ng-container matColumnDef=\"Actions\">\n                <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\" >\n                    <button mat-fab class=\"m-1\"  style=\"color: green; background-color:rgb(51, 49, 49)\" (click) ='getEquipmentDetail(element.Equipment_ID)'>\n                        <mat-icon>edit</mat-icon>\n                    </button>\n                    <button mat-fab class=\"m-1\"  style=\"color: red; background-color: rgb(51, 49, 49);\" (click)=\"deleteEquipment()\">\n                        <mat-icon>delete_forever</mat-icon>\n                    </button>\n\n               </mat-cell>\n            </ng-container>\n\n            \n\n\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>  \n        <mat-paginator #paginator [pageSize]=\"15\" [pageSizeOptions]=\"[15, 20]\"></mat-paginator>      \n    </div>\n</div>\n<br>\n\n<ng-container *ngIf=\"show\">\n<form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"PutEquipment()\">\n    <mat-card>\n        <mat-card-header>                \n           \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <mat-select placeholder=\"Equipment Type\" [(ngModel)]=\"selectedValue\" name=\"Type\">\n                    <mat-option *ngFor=\"let type of types\" [value]=\"type\">\n                        {{type}}\n                    </mat-option>\n                </mat-select>\n                \n            </mat-form-field>\n        </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n        <mat-card-header>                \n           \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <mat-select placeholder=\"Infrastructure location\" [(ngModel)]=\"InfrastructureSelect\" name=\"Infras\">\n                    <mat-option *ngFor=\"let type of infrastructures\" [value]=\"type\">\n                        {{type}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n        </mat-card-content>\n    </mat-card>\n\n\n    <mat-card>\n        <mat-card-header>                \n           \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <mat-select placeholder=\"Condition\" [(ngModel)]=\"conditionSelect\" name=\"Section\">\n                    <mat-option *ngFor=\"let type of condition\" [value]=\"type\">\n                        {{type}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n        </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n        <mat-card-header fxLayoutAlign=\"center\">                \n           \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <input matInput placeholder=\"Description\" [(ngModel)]=\"equipmentEdit.Equipment_Description\" name=\"Description\" required>\n            </mat-form-field>\n                               \n        </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n        <mat-card-header fxLayoutAlign=\"center\">                \n           \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <input matInput placeholder=\"Cost\" [(ngModel)]=\"equipmentEdit.Equipment_Cost\" name=\"Color\" required>\n            </mat-form-field>\n                               \n        </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n        <mat-card-header>                \n           \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <mat-select placeholder=\"Active\" [(ngModel)]=\"selectedActive\" name=\"active\">\n                    <mat-option *ngFor=\"let type of active\" [value]=\"type\">\n                        {{type}}\n                    </mat-option>\n                </mat-select>\n                \n            </mat-form-field>\n        </mat-card-content>\n    </mat-card>\n\n\n    \n    <button mat-raised-button color=\"primary\" class=\"m-1\">Save Changes</button>\n  </form>\n  <button mat-raised-button color=\"primary\" class=\"m-1\" (click)=\"showTable()\">Back</button>\n</ng-container>\n\n\n\n\n\n<ng-container *ngIf=\"showAdd\">\n    <form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"PutVehicle()\">\n        <mat-card>\n            <mat-card-header>                \n               \n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <mat-form-field>\n                    <mat-select placeholder=\"Equipment Type\" [(ngModel)]=\"equipmentAdd.Equipment_type_Description\" name=\"Type\">\n                        <mat-option *ngFor=\"let type of types\" [value]=\"type\">\n                            {{type}}\n                        </mat-option>\n                    </mat-select>\n                    \n                </mat-form-field>\n            </mat-card-content>\n        </mat-card>\n    \n        <mat-card>\n            <mat-card-header>                \n               \n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <mat-form-field>\n                    <mat-select placeholder=\"Infrastructure location\" [(ngModel)]=\"equipmentAdd.Infrastructure_Name\" name=\"Infras\">\n                        <mat-option *ngFor=\"let type of infrastructures\" [value]=\"type\">\n                            {{type}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </mat-card-content>\n        </mat-card>\n    \n    \n        <mat-card>\n            <mat-card-header>                \n               \n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <mat-form-field>\n                    <mat-select placeholder=\"Condition\" [(ngModel)]=\"equipmentAdd.Equipment_Condition\" name=\"Section\">\n                        <mat-option *ngFor=\"let type of condition\" [value]=\"type\">\n                            {{type}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </mat-card-content>\n        </mat-card>\n    \n        <mat-card>\n            <mat-card-header fxLayoutAlign=\"center\">                \n               \n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <mat-form-field>\n                    <input matInput placeholder=\"Description\" [(ngModel)]=\"equipmentAdd.Equipment_Description\" name=\"Description\" required>\n                </mat-form-field>\n                                   \n            </mat-card-content>\n        </mat-card>\n    \n        <mat-card>\n            <mat-card-header fxLayoutAlign=\"center\">                \n               \n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <mat-form-field>\n                    <input matInput placeholder=\"Cost\" [(ngModel)]=\"equipmentAdd.Equipment_Cost\" name=\"Color\" required>\n                </mat-form-field>\n                                   \n            </mat-card-content>\n        </mat-card>\n        <button mat-raised-button color=\"primary\" class=\"m-1\">Save</button>\n      </form>\n      <button mat-raised-button color=\"primary\" class=\"m-1\" (click)=\"showTable()\">Back</button>\n    </ng-container>\n\n\n    \n\n\n\n    ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/farm-health/farm-health.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/farm-health/farm-health.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFarmHealthFarmHealthComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 style=\"text-align: center;\">Farm Health</h1>\n<button mat-raised-button color=\"primary\" (click) = \"Download()\" class=\"m-1\">Download Report</button>\n\n\n<mat-card>\n    <mat-card-header  style=\"font-size: large;\">                \n       Overall score: April\n    </mat-card-header>\n    <mat-card-content  fxLayoutAlign=\"center\">\n        <ngx-gauge [type]=\"gaugeType\" \n        [value]=\"54\" \n        [label]=\"gaugeLabel\"  \n        [append]=\"gaugeAppendText\" [thick]=\"12\" foregroundColor = \"green\">\n</ngx-gauge>\n    </mat-card-content>\n</mat-card>\n\n<mat-card>\n    <mat-card-header  style=\"font-size: large;\">                \n       Individual Scores\n    </mat-card-header>\n    <mat-card-content  fxLayoutAlign=\"center\">\n        <ngx-gauge [type]=\"gaugeType\" \n        [value]=\"30\" \n        [label]=\"vehicleLabel\"  \n        [append]=\"gaugeAppendText\" [thick]=\"12\" foregroundColor = \"green\">\n</ngx-gauge>\n<ngx-gauge [type]=\"gaugeType\" \n        [value]=\"80\" \n        [label]=\"taskLabel\"  \n        [append]=\"gaugeAppendText\" [thick]=\"12\" foregroundColor = \"green\">\n</ngx-gauge>\n<ngx-gauge [type]=\"gaugeType\" \n        [value]=\"60\" \n        [label]=\"maintLabel\"  \n        [append]=\"gaugeAppendText\" [thick]=\"12\" foregroundColor = \"green\">\n</ngx-gauge>\n<ngx-gauge [type]=\"gaugeType\" \n        [value]=\"40\" \n        [label]=\"faultLabel\"  \n        [append]=\"gaugeAppendText\" [thick]=\"12\" foregroundColor = \"green\">\n</ngx-gauge>\n    </mat-card-content>\n</mat-card>\n<br>\n<mat-card>\n    <mat-card-header style=\"font-size: large;\">                \n       Suggestions to improve vehicle score:\n    </mat-card-header>\n    <br>\n    <mat-card-content  fxLayoutAlign=\"center\">\n        <ul>\n            <li>Service vehicles on or before scheduled times</li>\n            <li>Fix vehicle faults as soon as possible</li>\n            <li>Service vehicles on or before scheduled times</li>\n            <li>Fix vehicle faults as soon as possible</li>\n            <li>Service vehicles on or before scheduled times</li>\n            <li>Fix vehicle faults as soon as possible</li>\n            <li>Service vehicles on or before scheduled times</li>\n            <li>Fix vehicle faults as soon as possible</li>\n        </ul>\n    </mat-card-content>\n</mat-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/farm/farm.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/farm/farm.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFarmFarmComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 style=\"text-align: center;\">Farm</h1>\n<button mat-raised-button color=\"primary\" (click) = \"addFarm()\" class=\"m-1\">Add New</button>\n<button mat-raised-button color=\"primary\" (click) = \"Download()\" class=\"m-1\">Download List</button>\n<div fxLayout=\"column\">\n    <div class=\"flex-p\" *ngIf = \"showtable\"> \n        <div fxLayout=\"column\" class=\"mat-elevation-z8\" >           \n            <mat-form-field class=\"p-1\">\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Type to filter all columns\">\n            </mat-form-field> \n        </div>\n        <mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">       \n            <ng-container matColumnDef=\"Farm ID\">\n                <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.Farm_ID}} </mat-cell>\n            </ng-container>         \n            <ng-container matColumnDef=\"Farm Type\">\n                <mat-header-cell *matHeaderCellDef> Type </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.Farm_Type}} </mat-cell>\n            </ng-container>     \n            <ng-container matColumnDef=\"Farm Description\">\n                <mat-header-cell *matHeaderCellDef> Description </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.Farm_Description}} </mat-cell>\n            </ng-container>        \n            <ng-container matColumnDef=\"Farm Owner\">\n                <mat-header-cell *matHeaderCellDef> Owner </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.Farm_Owner}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"Farm Size\">\n                <mat-header-cell *matHeaderCellDef> Size </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.Farm_Size}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"Active\">\n                <mat-header-cell *matHeaderCellDef> Active </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.is_Active}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"Actions\">\n                <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\" >\n                    <button mat-fab class=\"m-1\" style=\"color: green; background-color:rgb(51, 49, 49)\" (click) ='getFarmInfo(element.Farm_ID)'>\n                        <mat-icon>edit</mat-icon>\n                    </button>\n                    <button mat-fab class=\"m-1\" style=\"color: red; background-color: rgb(51, 49, 49);\" (click)=\"deleteFarm()\">\n                        <mat-icon>delete_forever</mat-icon>\n                    </button>\n                    <!-- <button mat-raised-button color=\"primary\">Mileage</button> -->\n               </mat-cell>\n            </ng-container>\n\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>  \n        <mat-paginator #paginator [pageSize]=\"15\" [pageSizeOptions]=\"[15, 20]\"></mat-paginator>      \n    </div>\n</div>\n<br>\n\n<ng-container *ngIf=\"show\">\n<form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"putFarm()\">\n    <mat-card>\n        <mat-card-header>  \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <mat-select placeholder=\"Farm Type\" [(ngModel)]=\"selectedValue\" name=\"Type\">\n                    <mat-option *ngFor=\"let type of farmTypes\" [value]=\"type\">\n                        {{type}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n        </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n        <mat-card-header>                \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <mat-select placeholder=\"Province\" [(ngModel)]=\"provinceSelect\" name=\"Province\">\n                    <mat-option *ngFor=\"let type of provinces\" [value]=\"type\">\n                        {{type}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n        </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n        <mat-card-header fxLayoutAlign=\"center\">   \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <input matInput placeholder=\"Size\" [(ngModel)]=\"FarmEdit.Farm_Size\" name=\"Size\" required>\n            </mat-form-field>\n        </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n        <mat-card-header fxLayoutAlign=\"center\">     \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <input matInput placeholder=\"Address\" [(ngModel)]=\"FarmEdit.Farm_Address\" name=\"Address\" required>\n            </mat-form-field>\n        </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n        <mat-card-header fxLayoutAlign=\"center\">  \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <input matInput placeholder=\"Name\" [(ngModel)]=\"FarmEdit.Farm_Name\" name=\"Name\" required>\n            </mat-form-field>\n        </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n        <mat-card-header fxLayoutAlign=\"center\">   \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <input matInput placeholder=\"Email\" [(ngModel)]=\"FarmEdit.Farm_Email\" name=\"Email\" required>\n            </mat-form-field>    \n        </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n        <mat-card-header fxLayoutAlign=\"center\">                \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <input matInput placeholder=\"Number\" [(ngModel)]=\"FarmEdit.Farm_ContactNumber\" name=\"Number\" required required>\n            </mat-form-field>             \n        </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n        <mat-card-header fxLayoutAlign=\"center\">                \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <input matInput placeholder=\"Status\" [(ngModel)]=\"FarmEdit.Active\" name=\"Active\" required>\n            </mat-form-field>\n        </mat-card-content>\n    </mat-card>\n\n    <button mat-raised-button color=\"primary\" class=\"m-1\">Save Changes</button>\n  </form>\n  <button mat-raised-button color=\"primary\" class=\"m-1\" (click)=\"showTable()\">Back</button>\n</ng-container>\n\n\n<ng-container *ngIf=\"showAdd\">\n    <form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"putFarm()\">\n        <mat-card>\n            <mat-card-header>        \n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <mat-form-field>\n                    <mat-select placeholder=\"Vehicle Type\" [(ngModel)]=\"FarmAdd.Farm_Type\" name=\"Type\" required>\n                        <option value=\"\" disabled selected>Choose</option>\n                        <mat-option *ngFor=\"let type of farmTypes\" [value]=\"type\">\n                            {{type}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </mat-card-content>\n        </mat-card>\n\n        <mat-card>\n            <mat-card-header>                \n               \n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <mat-form-field>\n                    <mat-select placeholder=\"Province\" [(ngModel)]=\"FarmAdd.Province\" name=\"Province\" required>\n                        <option value=\"\" disabled selected>Choose</option>\n                        <mat-option *ngFor=\"let type of provinces\" [value]=\"type\">\n                            {{type}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </mat-card-content>\n        </mat-card>\n    \n        <mat-card>\n            <mat-card-header fxLayoutAlign=\"center\">    \n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <mat-form-field>\n                    <input matInput placeholder=\"Number\" [(ngModel)]=\"FarmAdd.Farm_ContactNumber\" name=\"Number\" required>\n                </mat-form-field>\n            </mat-card-content>\n        </mat-card>\n    \n        <mat-card>\n            <mat-card-header fxLayoutAlign=\"center\">   \n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <mat-form-field>\n                    <input matInput placeholder=\"Address\" [(ngModel)]=\"FarmAdd.Farm_Address\" name=\"Address\" required>\n                </mat-form-field>\n            </mat-card-content>\n        </mat-card>\n    \n        <mat-card>\n            <mat-card-header fxLayoutAlign=\"center\">  \n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <mat-form-field>\n                    <input matInput placeholder=\"Email\" [(ngModel)]=\"FarmAdd.Farm_Email\" name=\"Email\" required>\n                </mat-form-field>\n            </mat-card-content>\n        </mat-card>\n    \n        <mat-card>\n            <mat-card-header fxLayoutAlign=\"center\">    \n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <mat-form-field>\n                    <input matInput placeholder=\"Name\" [(ngModel)]=\"FarmAdd.Farm_Name\" name=\"Name\" required>\n                </mat-form-field>\n            </mat-card-content>\n        </mat-card>\n    \n        <mat-card>\n            <mat-card-header fxLayoutAlign=\"center\">       \n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <mat-form-field>\n                    <input matInput placeholder=\"Size\" [(ngModel)]=\"FarmAdd.Farm_Size\" name=\"Size\" required>\n                </mat-form-field>\n            </mat-card-content>\n        </mat-card>\n    \n    \n        <mat-card>\n            <mat-card-header fxLayoutAlign=\"center\">   \n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <mat-form-field>\n                    <input matInput placeholder=\"Status\" [(ngModel)]=\"FarmAdd.Active\" name=\"Active\" required>\n                </mat-form-field>\n            </mat-card-content>\n        </mat-card>\n    \n        <button mat-raised-button color=\"primary\" class=\"m-1\">Save</button>\n      </form>\n      <button mat-raised-button color=\"primary\" class=\"m-1\" (click)=\"showTable()\">Back</button>\n    </ng-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/insurnace-provider/insurnace-provider.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/insurnace-provider/insurnace-provider.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInsurnaceProviderInsurnaceProviderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button mat-raised-button color=\"primary\" (click) = \"addInsurance()\" class=\"m-1\">Add New</button>\n\n<div fxLayout=\"column\">\n    <div class=\"flex-p\" *ngIf = \"showtable\"> \n        <div fxLayout=\"column\" class=\"mat-elevation-z8\" >           \n            <mat-form-field class=\"p-1\">\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Type to filter all columns\">\n            </mat-form-field> \n        </div>\n        <mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">       \n            <ng-container matColumnDef=\"IP_ID\">\n                <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.IP_ID}} </mat-cell>\n            </ng-container>         \n            <ng-container matColumnDef=\"IP_Name\">\n                <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.IP_Name}} </mat-cell>\n            </ng-container>     \n            <ng-container matColumnDef=\"IP_Reg_Number\">\n                <mat-header-cell *matHeaderCellDef> Registration Number </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.IP_Reg_Number}} </mat-cell>\n            </ng-container>        \n            <ng-container matColumnDef=\"IP_VAT_Number\">\n                <mat-header-cell *matHeaderCellDef> VAT Number </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.IP_VAT_Number}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"IP_Phone_Number\">\n                <mat-header-cell *matHeaderCellDef> Phone Number </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.IP_Phone_Number}} </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"Actions\">\n                <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\" >\n                    <button mat-fab class=\"m-1\" color=\"red\" (click) ='getInsuranceInfo(element.IP_ID)'>\n                        <mat-icon>edit</mat-icon>\n                    </button>\n                    <button mat-fab class=\"m-1\" color=\"red\" (click)=\"deleteInsurance()\">\n                        <mat-icon>delete_forever</mat-icon>\n                    </button>\n               </mat-cell>\n            </ng-container>\n\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>  \n        <mat-paginator #paginator [pageSize]=\"15\" [pageSizeOptions]=\"[15, 20]\"></mat-paginator>      \n    </div>\n</div>\n<br>\n\n<ng-container *ngIf=\"show\">\n<form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"putInsurance()\">\n\n    <mat-card>\n        <mat-card-header fxLayoutAlign=\"center\">    \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <input matInput placeholder=\"Name\" [(ngModel)]=\"InsuranceEdit.IP_Name\" name=\"Name\" required>\n            </mat-form-field> \n        </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n        <mat-card-header fxLayoutAlign=\"center\">        \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <input matInput placeholder=\"Reg_Num\" [(ngModel)]=\"InsuranceEdit.IP_Reg_Number\" name=\"Reg_Num\" required>\n            </mat-form-field>\n        </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n        <mat-card-header fxLayoutAlign=\"center\">        \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <input matInput placeholder=\"VAT\" [(ngModel)]=\"InsuranceEdit.IP_VAT_Number\" name=\"VAT\" required>\n            </mat-form-field>\n        </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n        <mat-card-header fxLayoutAlign=\"center\">    \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <input matInput placeholder=\"Phone_Num\" [(ngModel)]=\"InsuranceEdit.IP_Phone_Number\" name=\"Phone_Num\" required>\n            </mat-form-field>\n        </mat-card-content>\n    </mat-card>\n    \n    <button mat-raised-button color=\"primary\" class=\"m-1\">Save Changes</button>\n  </form>\n  <button mat-raised-button color=\"primary\" class=\"m-1\" (click)=\"showTable()\">Back</button>\n</ng-container>\n\n<ng-container *ngIf=\"showAdd\">\n    <form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"putInsurance()\">\n    \n        <mat-card>\n            <mat-card-header fxLayoutAlign=\"center\">    \n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <mat-form-field>\n                    <input matInput placeholder=\"Name\" [(ngModel)]=\"InsuranceaAdd.IP_Name\" name=\"Name\" required>\n                </mat-form-field>\n            </mat-card-content>\n        </mat-card>\n    \n        <mat-card>\n            <mat-card-header fxLayoutAlign=\"center\">        \n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <mat-form-field>\n                    <input matInput placeholder=\"Reg_num\" [(ngModel)]=\"InsuranceaAdd.IP_Reg_Number\" name=\"Reg_num\" required>\n                </mat-form-field>\n            </mat-card-content>\n        </mat-card>\n    \n        <mat-card>\n            <mat-card-header fxLayoutAlign=\"center\">                \n               \n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <mat-form-field>\n                    <input matInput placeholder=\"VAT_num\" [(ngModel)]=\"InsuranceaAdd.IP_VAT_Number\" name=\"VAT_num\" required>\n                </mat-form-field>\n            </mat-card-content>\n        </mat-card>\n    \n        <mat-card>\n            <mat-card-header fxLayoutAlign=\"center\">     \n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <mat-form-field>\n                    <input matInput placeholder=\"Phone\" [(ngModel)]=\"InsuranceaAdd.IP_Phone_Number\" name=\"Phone\" required>\n                </mat-form-field>\n            </mat-card-content>\n        </mat-card>\n    \n        <button mat-raised-button color=\"primary\" class=\"m-1\">Save</button>\n      </form>\n      <button mat-raised-button color=\"primary\" class=\"m-1\" (click)=\"showTable()\">Back</button>\n    </ng-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/blank/blank.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/blank/blank.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesBlankBlankComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/errors/error/error.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/errors/error/error.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesErrorsErrorErrorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-sidenav-container>\r\n  \r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"h-100\">\r\n\r\n        <div fxFlex=\"80\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"60\">\r\n\r\n            <mat-card class=\"p-0 mat-elevation-z24 box\">\r\n                <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"bg-primary box-header\">\r\n                    <button mat-fab color=\"accent\" class=\"mat-elevation-z12\">\r\n                        <mat-icon>warning</mat-icon>\r\n                    </button>\r\n                    <h1 class=\"error\">500</h1>\r\n                </div>\r\n                <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"end center\" class=\"box-content\">\r\n                    <mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"mat-elevation-z12 box-content-inner\">\r\n                        <span class=\"box-content-header server-error\">Internal server error</span>  \r\n                        <p class=\"box-text\">Opps, something went wrong.</p> \r\n                        <p class=\"box-text\">You can go to home page.</p> \r\n                    </mat-card>\r\n                    <button mat-raised-button color=\"primary\" class=\"mat-elevation-z12 box-button\" type=\"button\" (click)=\"goHome()\">GO HOME</button>\r\n                </mat-card-content>\r\n            </mat-card>\r\n            \r\n          </div>    \r\n  \r\n  </div>\r\n\r\n</mat-sidenav-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/errors/not-found/not-found.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/errors/not-found/not-found.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesErrorsNotFoundNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-sidenav-container>\r\n  \r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"h-100\">\r\n\r\n        <div fxFlex=\"80\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"60\">\r\n\r\n            <mat-card class=\"p-0 mat-elevation-z24 box\">\r\n                <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"bg-primary box-header\">\r\n                    <button mat-fab color=\"accent\" class=\"mat-elevation-z12\">\r\n                        <mat-icon>error</mat-icon>\r\n                    </button>\r\n                    <h1 class=\"error\">404</h1>\r\n                </div>\r\n                <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"end center\" class=\"box-content\">\r\n                    <mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"mat-elevation-z12 box-content-inner\">\r\n                        <p class=\"box-text\">Opps, it seems that this page does not exist.</p> \r\n                        <p class=\"box-text\">If you are sure it should, search for it.</p> \r\n                        <mat-form-field class=\"w-100\">\r\n                            <input matInput placeholder=\"Enter search keyword...\">\r\n                        </mat-form-field>\r\n                    </mat-card>\r\n                    <button mat-raised-button color=\"primary\" class=\"mat-elevation-z12 box-button\" type=\"button\" (click)=\"searchResult()\">SUBMIT</button>\r\n                </mat-card-content>\r\n            </mat-card>\r\n            \r\n          </div>    \r\n  \r\n  </div>\r\n\r\n</mat-sidenav-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPagesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-sidenav-container>\r\n    <mat-sidenav *ngIf=\"settings.menu == 'vertical'\" [opened]=\"settings.sidenavIsOpened\" [mode]=\"(settings.sidenavIsPinned) ? 'side' : 'over'\" #sidenav class=\"sidenav mat-elevation-z6\">\r\n        <app-sidenav></app-sidenav>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content id=\"main\" perfectScrollbar [disabled]=\"settings.fixedHeader\" (psScrollY)=\"onPsScrollY($event)\">\r\n        <mat-toolbar color=\"gray\" class=\"flex-p-x\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"w-100\">            \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"center center\">                    \r\n                    <button *ngIf=\"settings.menu == 'vertical'\" mat-icon-button (click)=\"toggleSidenav()\">\r\n                        <mat-icon>menu</mat-icon>\r\n                    </button> \r\n                    <button fxShow=\"false\" fxShow.gt-xs *ngIf=\"settings.menu == 'vertical'\" mat-icon-button (click)=\"settings.sidenavUserBlock = !settings.sidenavUserBlock\">\r\n                        <mat-icon>person</mat-icon>\r\n                    </button> \r\n                    <a *ngIf=\"settings.menu == 'horizontal'\" mat-raised-button color=\"accent\" routerLink=\"/\" (click)=\"closeSubMenus()\" class=\"small-logo\">A</a>\r\n                    <a *ngIf=\"settings.menu == 'horizontal'\" class=\"logo\" routerLink=\"/\" (click)=\"closeSubMenus()\">AGRILOG</a>  \r\n                </div>            \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n<!-- ------------------------------------------------Use this for farm selection and add farm----------------------------------- -->\r\n                    \r\n                    \r\n                    <label for=\"food\">Select Farm</label>\r\n                    <mat-select placeholder=\"Favorite food\" [(ngModel)]=\"selectedValue\" name=\"food\" (ngModelChange)=\"farmChange()\">\r\n                       \r\n                        <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\r\n                            {{food.viewValue}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"end center\"><mat-icon role=\"img\" class=\"mat-icon notranslate material-icons mat-icon-no-color\" aria-hidden=\"true\">add</mat-icon></div>\r\n                    \r\n <!-- ------------------------------------------------------------------------------------------------------ -->\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxShow=\"false\" fxShow.gt-xs class=\"search-bar\">\r\n                       \r\n                    </div>                \r\n                    \r\n                    <app-fullscreen></app-fullscreen> \r\n                    \r\n                    <app-user-menu></app-user-menu> \r\n                </div>\r\n            </div>\r\n        </mat-toolbar>\r\n\r\n        <mat-toolbar id=\"horizontal-menu\" color=\"primary\" *ngIf=\"settings.menu == 'horizontal'\" \r\n            class=\"horizontal-menu flex-p-x transition-2\"  \r\n            [class.fixed-top]=\"!settings.fixedHeader\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"w-100\">            \r\n                <app-horizontal-menu [menuParentId]=\"0\"></app-horizontal-menu>\r\n            </div>            \r\n        </mat-toolbar>\r\n\r\n        <div id=\"main-content\" class=\"inner-sidenav-content transition-2\" perfectScrollbar [disabled]=\"!settings.fixedHeader\" (psScrollY)=\"onPsScrollY($event)\"> \r\n            <app-breadcrumb></app-breadcrumb>\r\n            <div [class.has-footer]=\"settings.hasFooter\">\r\n                <router-outlet></router-outlet>\r\n            </div>           \r\n           \r\n        </div>\r\n\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"options-icon\" (click)=\"options.toggle()\">\r\n            <mat-icon>settings</mat-icon>\r\n        </div>\r\n\r\n        <div #backToTop fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"back-to-top\" (click)=\"scrollToTop()\">\r\n            <mat-icon>arrow_upward</mat-icon>\r\n        </div>\r\n\r\n    </mat-sidenav-content>\r\n    \r\n    <mat-sidenav #options position=\"end\" class=\"options\">        \r\n       \r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"control mat-elevation-z1\">\r\n            <h2>Settings</h2>\r\n        </div>  \r\n\r\n        <div perfectScrollbar>\r\n\r\n            <div fxLayout=\"column\" class=\"control\">\r\n                <h4>Layout</h4>        \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>Fixed header</span>\r\n                    <mat-slide-toggle [checked]=\"settings.fixedHeader\" (change)=\"settings.fixedHeader = !settings.fixedHeader\" labelPosition=\"before\"></mat-slide-toggle>\r\n                </div>                \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>RTL</span>\r\n                    <mat-slide-toggle [checked]=\"settings.rtl\" (change)=\"settings.rtl = !settings.rtl\" labelPosition=\"before\"></mat-slide-toggle>\r\n                </div>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>Has Footer</span>\r\n                    <mat-slide-toggle [checked]=\"settings.hasFooter\" (change)=\"settings.hasFooter = !settings.hasFooter\" labelPosition=\"before\"></mat-slide-toggle>\r\n                </div>\r\n            </div>\r\n\r\n            <div fxLayout=\"column\" class=\"control\">\r\n                <h4>Choose menu</h4>\r\n                <mat-radio-group [(ngModel)]=\"menuOption\" (change)=\"chooseMenu()\">\r\n                    <mat-radio-button *ngFor=\"let menu of menus\" [value]=\"menu\">{{menu}}</mat-radio-button>\r\n                </mat-radio-group>\r\n            </div>\r\n\r\n            <div fxLayout=\"column\" class=\"control\">\r\n                <h4>Choose menu type</h4>\r\n                <mat-radio-group [(ngModel)]=\"menuTypeOption\" (change)=\"chooseMenuType()\">\r\n                    <mat-radio-button *ngFor=\"let menuType of menuTypes\" [value]=\"menuType\">{{menuType}}</mat-radio-button>\r\n                </mat-radio-group>\r\n            </div>\r\n\r\n            <div fxLayout=\"column\" class=\"control\">\r\n                <h4>Choose theme skin</h4>        \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\"> \r\n                    <div class=\"skin-primary indigo-light\" (click)=\"changeTheme('indigo-light')\"><div class=\"skin-secondary\"></div></div>  \r\n                    <div class=\"skin-primary teal-light\" (click)=\"changeTheme('teal-light')\"><div class=\"skin-secondary\"></div></div>  \r\n                    <div class=\"skin-primary red-light\" (click)=\"changeTheme('red-light')\"><div class=\"skin-secondary\"></div></div>  \r\n                    <div class=\"skin-primary blue-dark\" (click)=\"changeTheme('blue-dark')\"><div class=\"skin-secondary\"></div></div>  \r\n                    <div class=\"skin-primary green-dark\" (click)=\"changeTheme('green-dark')\"><div class=\"skin-secondary\"></div></div>  \r\n                    <div class=\"skin-primary pink-dark\" (click)=\"changeTheme('pink-dark')\"><div class=\"skin-secondary\"></div></div>  \r\n                </div>\r\n            </div>\r\n\r\n            <div fxLayout=\"column\" class=\"control\">\r\n                <h4>Sidenav options</h4>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>Opened sidenav</span>\r\n                    <mat-slide-toggle [checked]=\"settings.sidenavIsOpened\" (change)=\"settings.sidenavIsOpened = !settings.sidenavIsOpened\" labelPosition=\"before\"></mat-slide-toggle>\r\n                </div>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>Pinned sidenav</span>\r\n                    <mat-slide-toggle [checked]=\"settings.sidenavIsPinned\" (change)=\"settings.sidenavIsPinned = !settings.sidenavIsPinned\" labelPosition=\"before\"></mat-slide-toggle>\r\n                </div>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>Sidenav user info</span>\r\n                    <mat-slide-toggle [checked]=\"settings.sidenavUserBlock\" (change)=\"settings.sidenavUserBlock = !settings.sidenavUserBlock\" labelPosition=\"before\"></mat-slide-toggle>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </mat-sidenav>\r\n\r\n</mat-sidenav-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSearchSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"row wrap\">\r\n  <div fxFlex class=\"flex-p\"> <h4>Search results...</h4></div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTestTestComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>test works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/applications/applications.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/applications/applications.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeComponentsApplicationsApplicationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button mat-icon-button [matMenuTriggerFor]=\"appsMenu\" #appsMenuTrigger=\"matMenuTrigger\">\r\n    <mat-icon>apps</mat-icon>\r\n</button>\r\n<mat-menu #appsMenu=\"matMenu\" [overlapTrigger]=\"false\" class=\"toolbar-dropdown-menu applications\">\r\n    <span (mouseleave)=\"appsMenuTrigger.closeMenu()\">\r\n        <mat-toolbar color=\"primary\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"header\">\r\n               Applications \r\n            </div>  \r\n        </mat-toolbar>\r\n        <mat-card>           \r\n            <mat-grid-list cols=\"3\" rowHeight=\"1:1\">\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">person</mat-icon>\r\n                      <span>My account</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">search</mat-icon>\r\n                      <span>Search</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">play_arrow</mat-icon>\r\n                      <span>Player</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">settings</mat-icon>\r\n                      <span>Settings</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">event</mat-icon>\r\n                      <span>Calendar</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">image</mat-icon>\r\n                      <span>Gallery</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                 <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">library_books</mat-icon>\r\n                      <span>Documents</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">mail</mat-icon>\r\n                      <span>Mail</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">place</mat-icon>\r\n                      <span>Maps</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n            </mat-grid-list>\r\n        </mat-card>\r\n    </span>\r\n</mat-menu>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/breadcrumb/breadcrumb.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/breadcrumb/breadcrumb.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeComponentsBreadcrumbBreadcrumbComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"row wrap\" *ngIf=\"router.url != '/'\">\r\n    <div fxFlex=\"100\" class=\"flex-p\">\r\n        <mat-card fxLayout=\"row\" class=\"breadcrumb\">\r\n            <a *ngIf=\"router.url != '/'\" routerLink=\"/\" class=\"breadcrumb-item\" fxLayout=\"row\" fxLayoutAlign=\"start center\" (click)=\"closeSubMenus()\">\r\n                <mat-icon>home</mat-icon>\r\n                <span class=\"breadcrumb-title\">Home</span>\r\n            </a>\r\n            <div *ngFor=\"let breadcrumb of breadcrumbs; let i = index;\" class=\"breadcrumb-item\" fxLayout=\"row\" fxLayoutAlign=\"start center\">                 \r\n                <a [hidden]=\"i == (breadcrumbs.length - 1)\" [routerLink]=\"[breadcrumb.url]\">{{breadcrumb.name}}</a>   \r\n                <span [hidden]=\"i != (breadcrumbs.length - 1)\" class=\"breadcrumb-title active\">{{breadcrumb.name}}</span>\r\n            </div> \r\n        </mat-card>\r\n    </div> \r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/flags-menu/flags-menu.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/flags-menu/flags-menu.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeComponentsFlagsMenuFlagsMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button mat-icon-button [matMenuTriggerFor]=\"flagsMenu\" #flagsMenuTrigger=\"matMenuTrigger\">\r\n    <mat-icon>flag</mat-icon>\r\n</button>\r\n<!--<button mat-icon-button [matMenuTriggerFor]=\"flagsMenu\" #flagsMenuTrigger=\"matMenuTrigger\">\r\n    <img src=\"assets/img/flags/gb.svg\" width=\"20\" alt=\"english\"> \r\n</button>-->\r\n<mat-menu #flagsMenu=\"matMenu\" [overlapTrigger]=\"false\" class=\"toolbar-dropdown-menu flags\">\r\n    <span (mouseleave)=\"flagsMenuTrigger.closeMenu()\">      \r\n        <button mat-menu-item>\r\n            <img src=\"assets/img/flags/gb.svg\" width=\"20\" alt=\"english\"> \r\n            English\r\n        </button>\r\n        <button mat-menu-item>\r\n            <img src=\"assets/img/flags/de.svg\" width=\"20\" alt=\"german\"> \r\n            German\r\n        </button>\r\n        <button mat-menu-item>\r\n            <img src=\"assets/img/flags/fr.svg\" width=\"20\" alt=\"french\"> \r\n            French\r\n        </button>\r\n        <button mat-menu-item>\r\n            <img src=\"assets/img/flags/ru.svg\" width=\"20\" alt=\"russian\"> \r\n            Russian\r\n        </button>\r\n        <button mat-menu-item>\r\n            <img src=\"assets/img/flags/tr.svg\" width=\"20\" alt=\"turkish\"> \r\n            Turkish\r\n        </button>\r\n    </span>\r\n</mat-menu>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeComponentsMenuHorizontalMenuHorizontalMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [fxLayout]=\"(menuParentId == 0) ? 'row' : 'column'\" fxLayoutAlign=\"start center\">\r\n    \r\n\r\n    \r\n    <div *ngFor=\"let menu of menuItems\" class=\"horizontal-menu-item w-100\">\r\n        \r\n\r\n        \r\n        \r\n        <a *ngIf=\"menu.routerLink && !menu.hasSubMenu\" mat-button \r\n            fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n            [routerLink]=\"[menu.routerLink]\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:true}\"\r\n            [matTooltip]=\"menu.title\" matTooltipPosition=\"above\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n            [id]=\"'horizontal-menu-item-'+menu.id\">\r\n            <mat-icon class=\"horizontal-menu-icon\">{{menu.icon}}</mat-icon>\r\n            <span class=\"horizontal-menu-title\">{{menu.title}}</span>\r\n        </a>\r\n        <a *ngIf=\"menu.href && !menu.subMenu\" mat-button \r\n            fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n            [attr.href]=\"menu.href || ''\" [attr.target]=\"menu.target || ''\"\r\n            [matTooltip]=\"menu.title\" matTooltipPosition=\"above\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n            [id]=\"'horizontal-menu-item-'+menu.id\">\r\n            <mat-icon class=\"horizontal-menu-icon\">{{menu.icon}}</mat-icon>\r\n            <span class=\"horizontal-menu-title\">{{menu.title}}</span>\r\n        </a>\r\n        <a *ngIf=\"menu.hasSubMenu\" mat-button \r\n            fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n            [matTooltip]=\"menu.title\" matTooltipPosition=\"above\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n            [id]=\"'horizontal-menu-item-'+menu.id\">\r\n            <mat-icon class=\"horizontal-menu-icon\">{{menu.icon}}</mat-icon>\r\n            <span class=\"horizontal-menu-title\">{{menu.title}}</span>\r\n        </a>\r\n\r\n        <div *ngIf=\"menu.hasSubMenu\" class=\"horizontal-sub-menu\" [id]=\"'horizontal-sub-menu-'+menu.id\">\r\n            <app-horizontal-menu [menuParentId]=\"menu.id\"></app-horizontal-menu>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/menu/vertical-menu/vertical-menu.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/menu/vertical-menu/vertical-menu.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeComponentsMenuVerticalMenuVerticalMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngFor=\"let menu of parentMenu\" class=\"menu-item\">\r\n    <a *ngIf=\"menu.routerLink && !menu.hasSubMenu\" mat-button \r\n        fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n        [routerLink]=\"[menu.routerLink]\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:true}\"\r\n        [matTooltip]=\"menu.title\" matTooltipPosition=\"after\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n        (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\r\n        <mat-icon class=\"menu-icon\">{{menu.icon}}</mat-icon>\r\n        <span class=\"menu-title\">{{menu.title}}</span>\r\n    </a>\r\n    <a *ngIf=\"menu.href && !menu.subMenu\" mat-button \r\n        fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n        [attr.href]=\"menu.href || ''\" [attr.target]=\"menu.target || ''\"\r\n        [matTooltip]=\"menu.title\" matTooltipPosition=\"after\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n        (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\r\n        <mat-icon class=\"menu-icon\">{{menu.icon}}</mat-icon>\r\n        <span class=\"menu-title\">{{menu.title}}</span>\r\n    </a>\r\n    <a *ngIf=\"menu.hasSubMenu\" mat-button \r\n        fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n        [matTooltip]=\"menu.title\" matTooltipPosition=\"after\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n        (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\r\n        <mat-icon class=\"menu-icon\">{{menu.icon}}</mat-icon>\r\n        <span class=\"menu-title\">{{menu.title}}</span>\r\n        <mat-icon class=\"menu-expand-icon transition-2\">arrow_drop_down</mat-icon>\r\n    </a>\r\n\r\n    <div *ngIf=\"menu.hasSubMenu\" class=\"sub-menu\" [id]=\"'sub-menu-'+menu.id\">\r\n        <app-vertical-menu [menuItems]=\"menuItems\" [menuParentId]=\"menu.id\"></app-vertical-menu>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/messages/messages.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/messages/messages.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeComponentsMessagesMessagesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button mat-icon-button [matMenuTriggerFor]=\"messagesMenu\" (click)=\"openMessagesMenu()\">\r\n    <mat-icon>notifications</mat-icon>\r\n</button>\r\n<mat-menu #messagesMenu=\"matMenu\" [overlapTrigger]=\"false\" class=\"toolbar-dropdown-menu messages\">\r\n    <!--<span (mouseleave)=\"onMouseLeave()\">-->\r\n        <mat-tab-group backgroundColor=\"primary\" (click)=\"stopClickPropagate($event)\" [selectedIndex]=\"selectedTab\">\r\n            <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                    <mat-icon>message</mat-icon>\r\n                </ng-template>\r\n                <mat-card class=\"content\" perfectScrollbar>\r\n                  <div fxLayout=\"column\" fxLayoutAlign=\"none\">\r\n                      <button mat-button *ngFor=\"let message of messages\">\r\n                          <img src=\"{{ ( message.image || (message.name | profilePicture)) }}\" width=\"50\">   \r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"none\" class=\"w-100\">\r\n                              <div fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n                                  <span class=\"name\">{{message.name}}</span>\r\n                                  <span class=\"info\"><mat-icon>access_time</mat-icon> {{message.time}}</span>\r\n                              </div>\r\n                              <span class=\"text muted-text\">{{message.text}}</span>\r\n                          </div>\r\n                      </button>\r\n                    </div>             \r\n                </mat-card>\r\n            </mat-tab>\r\n            <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                    <mat-icon>description</mat-icon>\r\n                </ng-template>\r\n                <mat-card class=\"content\" perfectScrollbar>\r\n                  <div fxLayout=\"column\" fxLayoutAlign=\"none\">\r\n                      <button mat-button *ngFor=\"let file of files\">\r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"none\" class=\"w-100\">\r\n                              <div fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n                                  <span class=\"name\">{{file.text}}</span>\r\n                                  <span class=\"info\">{{file.size}}</span>\r\n                              </div>\r\n                              <mat-progress-bar\r\n                                  class=\"example-margin\"\r\n                                  [color]=\"file.color\"\r\n                                  mode=\"indeterminate\"\r\n                                  [value]=\"file.value\">\r\n                              </mat-progress-bar>\r\n                          </div>\r\n                      </button>\r\n                    </div>             \r\n                </mat-card>\r\n            </mat-tab>\r\n            <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                    <mat-icon>event</mat-icon>\r\n                </ng-template>\r\n                <mat-card class=\"content\" perfectScrollbar>\r\n                  <div fxLayout=\"column\" fxLayoutAlign=\"none\">\r\n                      <button mat-button *ngFor=\"let meeting of meetings\">  \r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"row-1\">\r\n                              <span class=\"name\">{{meeting.day}}</span>\r\n                              <span class=\"name\">{{meeting.month}}</span>\r\n                          </div>\r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"none\">\r\n                              <span class=\"name\">{{meeting.title}}</span>\r\n                              <span class=\"text muted-text\">{{meeting.text}}</span>\r\n                          </div>\r\n                      </button>\r\n                    </div>             \r\n                </mat-card>\r\n            </mat-tab>\r\n        </mat-tab-group>\r\n    <!--</span>-->\r\n</mat-menu>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/sidenav/sidenav.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/sidenav/sidenav.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeComponentsSidenavSidenavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar color=\"gray\" [fxLayoutAlign]=\"(settings.menuType != 'mini') ? 'space-between center' : 'center center'\" class=\"sidenav-header\">\r\n\r\n    <img src=\"../../../../assets/img/Logo-02.png\"  *ngIf=\"settings.menuType == 'default'\" class=\"logo\" routerLink=\"/\" (click)=\"closeSubMenus()\" style=\"height: 78px; width: 115px;\">\r\n    <svg *ngIf=\"settings.menuType != 'mini'\" class=\"pin\" (click)=\"settings.sidenavIsPinned = !settings.sidenavIsPinned\">\r\n        <path *ngIf=\"!settings.sidenavIsPinned\" d=\"M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z\" />\r\n        <path *ngIf=\"settings.sidenavIsPinned\" d=\"M2,5.27L3.28,4L20,20.72L18.73,22L12.8,16.07V22H11.2V16H6V14L8,12V11.27L2,5.27M16,12L18,14V16H17.82L8,6.18V4H7V2H17V4H16V12Z\" />\r\n    </svg>  \r\n</mat-toolbar>\r\n\r\n\r\n\r\n<perfect-scrollbar class=\"sidenav-menu-outer\" [class.user-block-show]=\"settings.sidenavUserBlock\">\r\n    <div id=\"vertical-menu\">\r\n        <app-vertical-menu [menuItems]=\"menuItems\" [menuParentId]=\"0\"></app-vertical-menu> \r\n    </div>   \r\n</perfect-scrollbar>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/user-menu/user-menu.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/user-menu/user-menu.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeComponentsUserMenuUserMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button mat-icon-button [matMenuTriggerFor]=\"userMenu\" #userMenuTrigger=\"matMenuTrigger\" >\r\n    <mat-icon>account_circle</mat-icon>\r\n</button>\r\n\r\n<mat-menu #userMenu=\"matMenu\" [overlapTrigger]=\"false\" class=\"toolbar-dropdown-menu user-menu\">\r\n    <!--<span (mouseleave)=\"userMenuTrigger.closeMenu()\">-->\r\n        <mat-toolbar color=\"primary\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"user-info\">\r\n                <img [src]=\"userImage\" alt=\"user-image\" width=\"80\" class=\"rounded mat-elevation-z6\">\r\n                <p>Emilio Verdines <br> <small>Web developer</small></p>\r\n            </div>  \r\n        </mat-toolbar>\r\n        <a mat-menu-item routerLink=\"/profile/projects\"> \r\n            <mat-icon>person</mat-icon>\r\n            <span>Profile</span> \r\n        </a>\r\n        <a mat-menu-item routerLink=\"/profile/user-info\"> \r\n            <mat-icon>edit</mat-icon>\r\n            <span>Edit Profile</span> \r\n        </a>\r\n\r\n\r\n        <a mat-menu-item routerLink=\"help\"> \r\n            <mat-icon>help</mat-icon>\r\n            <span>Help</span> \r\n        </a>\r\n        <div class=\"divider\"></div>\r\n        <a mat-menu-item routerLink=\"/login\"> \r\n            <mat-icon>power_settings_new</mat-icon>\r\n            <span>Log out</span> \r\n        </a>\r\n    <!--</span>-->\r\n</mat-menu>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle-service/vehicle-service.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle-service/vehicle-service.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVehicleServiceVehicleServiceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 style=\"text-align: center;\">Vehicle Service</h1>\n<button mat-raised-button color=\"primary\" (click) = \"addVehicleService()\" class=\"m-1\">Add New</button>\n<button mat-raised-button color=\"primary\" (click) = \"Download()\" class=\"m-1\">Download List</button>\n\n<div fxLayout=\"column\">\n    <div class=\"flex-p\" *ngIf = \"showtable\"> \n        <div fxLayout=\"column\" class=\"mat-elevation-z8\" >           \n            <mat-form-field class=\"p-1\">\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Type to filter all columns\">\n            </mat-form-field> \n        </div>\n        <mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">       \n            <ng-container matColumnDef=\"Vehicle_Service_ID\">\n                <mat-header-cell *matHeaderCellDef> Service ID </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.Vehicle_Service_ID}} </mat-cell>\n            </ng-container>         \n            <ng-container matColumnDef=\"Vehicle_ID\">\n                <mat-header-cell *matHeaderCellDef> Vehicle ID </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.Vehicle_ID}} </mat-cell>\n            </ng-container>     \n            <ng-container matColumnDef=\"Vehicle_Service_Milage\">\n                <mat-header-cell *matHeaderCellDef> Service Milage </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.Vehicle_Service_Milage}} </mat-cell>\n            </ng-container>        \n            <ng-container matColumnDef=\"Vehicle_Service_Description\">\n                <mat-header-cell *matHeaderCellDef> Description </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.Vehicle_Service_Description}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"Vehicle_Service_Start_Date\">\n                <mat-header-cell *matHeaderCellDef> Service Start Date </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.Vehicle_Service_Start_Date}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"Vehicle_Service_End_Date\">\n                <mat-header-cell *matHeaderCellDef> Service End Date </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.Vehicle_Service_End_Date}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"Invoice\">\n                <mat-header-cell *matHeaderCellDef> Service End Date </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                    <button mat-fab class=\"m-1\" color=\"red\" (click) ='getVehicleServiceDetail(element.Vehicle_Service_ID)'>\n                    <mat-icon>Download Invoice</mat-icon>\n                </button></mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"Actions\">\n                <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\" >\n                    <button mat-fab class=\"m-1\" color=\"red\" (click) ='getVehicleServiceDetail(element.Vehicle_Service_ID)'>\n                        <mat-icon>edit</mat-icon>\n                    </button>\n                    <button mat-fab class=\"m-1\" color=\"red\" (click)=\"deleteVehicleService()\">\n                        <mat-icon>delete_forever</mat-icon>\n                    </button>\n                    <button mat-raised-button color=\"primary\"  >Mileage</button>\n               </mat-cell>\n            </ng-container>\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>  \n        <mat-paginator #paginator [pageSize]=\"15\" [pageSizeOptions]=\"[15, 20]\"></mat-paginator>      \n    </div>\n</div>\n<br>\n\n<ng-container *ngIf=\"show\">\n<form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"putVehicleService()\">\n    <mat-card>\n        <mat-card-header>   \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <mat-select placeholder=\"Vehicle Type\" [(ngModel)]=\"selectedValue\" name=\"Type\">\n                    <mat-option *ngFor=\"let type of types\" [value]=\"type\">\n                        {{type}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n        </mat-card-content>\n    </mat-card>\n\n\n    <mat-card>\n        <mat-card-header>       \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <mat-select placeholder=\"Provider\" [(ngModel)]=\"providersSelect\" name=\"Provider\">\n                    <mat-option *ngFor=\"let type of providers\" [value]=\"type\">\n                        {{type}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n        </mat-card-content>\n    </mat-card>\n\n\n    <mat-card>\n        <mat-card-header fxLayoutAlign=\"center\">     \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <input matInput placeholder=\"Desc\" [(ngModel)]=\"VehicleServEdit.Vehicle_Service_Description\" name=\"Desc\" required>\n            </mat-form-field>\n        </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n        <mat-card-header fxLayoutAlign=\"center\">    \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <input matInput placeholder=\"Milage\" [(ngModel)]=\"VehicleServEdit.Vehicle_Service_Milage\" name=\"Milage\" required>\n            </mat-form-field>\n        </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n        <mat-card-header fxLayoutAlign=\"center\">      \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <input matInput placeholder=\"Start\" [(ngModel)]=\"VehicleServEdit.Vehicle_Service_Start_Date\" name=\"Start\" required>\n            </mat-form-field>\n        </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n        <mat-card-header fxLayoutAlign=\"center\">    \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <input matInput placeholder=\"End\" [(ngModel)]=\"VehicleServEdit.Vehicle_Service_End_Date\" name=\"End\" required>\n            </mat-form-field>\n        </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n        <mat-card-header fxLayoutAlign=\"center\">      \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <input matInput placeholder=\"VSD\" [(ngModel)]=\"VehicleServEdit.VSD\" name=\"VSD\" required required>\n            </mat-form-field>\n        </mat-card-content>\n    </mat-card>\n\n    <button mat-raised-button color=\"primary\" class=\"m-1\">Save Changes</button>\n  </form>\n</ng-container>\n\n\n<ng-container *ngIf=\"showAdd\">\n    <form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"putVehicleService()\">\n        <mat-card>\n            <mat-card-header>                \n               \n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <mat-form-field>\n                    <mat-select placeholder=\"Vehicle Type\" [(ngModel)]=\"VehicleServAdd.Vehicle_Type\" name=\"Type\" required>\n                        <option value=\"\" disabled selected>Choose</option>\n                        <mat-option *ngFor=\"let type of types\" [value]=\"type\">\n                            {{type}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </mat-card-content>\n        </mat-card>\n    \n        <mat-card>\n            <mat-card-header>                \n               \n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <mat-form-field>\n                    <mat-select placeholder=\"Provider\" [(ngModel)]=\"VehicleServAdd.Providers\" name=\"Provider\" required>\n                        <option value=\"\" disabled selected>Choose</option>\n                        <mat-option *ngFor=\"let type of providers\" [value]=\"type\">\n                            {{type}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </mat-card-content>\n        </mat-card>\n    \n        <mat-card>\n            <mat-card-header fxLayoutAlign=\"center\">              \n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <mat-form-field>\n                    <input matInput placeholder=\"Desc\" [(ngModel)]=\"VehicleServAdd.Vehicle_Service_Description\" name=\"Desc\" required>\n                </mat-form-field>\n            </mat-card-content>\n        </mat-card>\n    \n        <mat-card>\n            <mat-card-header fxLayoutAlign=\"center\">             \n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <mat-form-field>\n                    <input matInput placeholder=\"Milage\" [(ngModel)]=\"VehicleServAdd.Vehicle_Service_Milage\" name=\"Milage\" required>\n                </mat-form-field>\n            </mat-card-content>\n        </mat-card>\n    \n        <mat-card>\n            <mat-card-header fxLayoutAlign=\"center\">        \n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <mat-form-field>\n                    <input matInput placeholder=\"Start\" [(ngModel)]=\"VehicleServAdd.Vehicle_Service_Start_Date\" name=\"Start\" required>\n                </mat-form-field>\n            </mat-card-content>\n        </mat-card>\n    \n        <mat-card>\n            <mat-card-header fxLayoutAlign=\"center\">        \n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <mat-form-field>\n                    <input matInput placeholder=\"End\" [(ngModel)]=\"VehicleServAdd.Vehicle_Service_End_Date\" name=\"End\" required>\n                </mat-form-field>\n            </mat-card-content>\n        </mat-card>\n    \n        <mat-card>\n            <mat-card-header fxLayoutAlign=\"center\">  \n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <mat-form-field>\n                    <input matInput placeholder=\"VSD\" [(ngModel)]=\"VehicleServAdd.VSD\" name=\"VSD\" required>\n                </mat-form-field>\n            </mat-card-content>\n        </mat-card>\n        \n        <button mat-raised-button color=\"primary\" class=\"m-1\">Save</button>\n      </form>\n    </ng-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle-types/vehicle-types.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle-types/vehicle-types.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVehicleTypesVehicleTypesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>vehicle-types works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle/vehicle.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle/vehicle.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVehicleVehicleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 style=\"text-align: center;\">Vehicle</h1>\n<button mat-raised-button color=\"primary\" (click) = \"AddVehicle()\" class=\"m-1\">Add New</button>\n<button mat-raised-button color=\"primary\" (click) = \"LoadTypes()\" class=\"m-1\">Vehicle Types</button>\n<button mat-raised-button color=\"primary\" (click) = \"Download()\" class=\"m-1\">Download List</button>\n<div fxLayout=\"column\">\n    <div class=\"flex-p\" *ngIf = \"showtable\"> \n        <div fxLayout=\"column\" class=\"mat-elevation-z8\" >           \n            <mat-form-field class=\"p-1\">\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Type to filter all columns\">\n            </mat-form-field> \n        </div>\n        <mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">       \n            <ng-container matColumnDef=\"Vehicle_ID\">\n                <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.Vehicle_ID}} </mat-cell>\n            </ng-container>         \n            <ng-container matColumnDef=\"Vehicle_Type_Description\">\n                <mat-header-cell *matHeaderCellDef> Type </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.Vehicle_Type_Description}} </mat-cell>\n            </ng-container>     \n            <ng-container matColumnDef=\"Model_Description\">\n                <mat-header-cell *matHeaderCellDef> Model </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.Model_Description}} </mat-cell>\n            </ng-container>        \n            <ng-container matColumnDef=\"Section_Name\">\n                <mat-header-cell *matHeaderCellDef> Section </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.Section_Name}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"Vehicle_Mileage_Current\">\n                <mat-header-cell *matHeaderCellDef> Curr. Mileage </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.Vehicle_Mileage_Current}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"Vehicle_Registration_Number\">\n                <mat-header-cell *matHeaderCellDef> Reg no </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.Vehicle_Registration_Number}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"is_Active\">\n                <mat-header-cell *matHeaderCellDef> Active </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.is_Active}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"Actions\">\n                <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\" >\n                    <button mat-fab class=\"m-1\"  style=\"color: green; background-color:rgb(51, 49, 49)\" (click) ='getVehicleDetail(element.Vehicle_ID)'>\n                        <mat-icon>edit</mat-icon>\n                    </button>\n                    <button mat-fab class=\"m-1\"  style=\"color: red; background-color:rgb(51, 49, 49)\" (click)=\"deleteVehicle()\">\n                        <mat-icon>delete_forever</mat-icon>\n                    </button>\n                    <button mat-raised-button color=\"primary\"  >Mileage</button>\n               </mat-cell>\n            </ng-container>\n\n            \n\n\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>  \n        <mat-paginator #paginator [pageSize]=\"15\" [pageSizeOptions]=\"[15, 20]\"></mat-paginator>      \n    </div>\n</div>\n<br>\n\n<ng-container *ngIf=\"show\">\n<form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"AddVehicle()\">\n    <mat-card>\n        <mat-card-header>                \n           \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <mat-select placeholder=\"Vehicle Type\" [(ngModel)]=\"selectedValue\" name=\"Type\">\n                    <mat-option *ngFor=\"let type of types\" [value]=\"type\">\n                        {{type}}\n                    </mat-option>\n                </mat-select>\n                \n            </mat-form-field>\n        </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n        <mat-card-header>                \n           \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <mat-select placeholder=\"Section\" [(ngModel)]=\"SectionSelect\" name=\"Section\">\n                    <mat-option *ngFor=\"let type of sections\" [value]=\"type\">\n                        {{type}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n        </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n        <mat-card-header>                \n           \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <mat-select placeholder=\"Infrastructure location\" [(ngModel)]=\"InfrastructureSelect\" name=\"Infras\">\n                    <mat-option *ngFor=\"let type of infrastructures\" [value]=\"type\">\n                        {{type}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n        </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n        <mat-card-header>                \n           \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <mat-select placeholder=\"Make\" [(ngModel)]=\"MakeSelect\" name=\"Make\">\n                    <mat-option *ngFor=\"let type of makes\" [value]=\"type\">\n                        {{type}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n        </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n        <mat-card-header>                \n           \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <mat-select placeholder=\"Model\" [(ngModel)]=\"ModelSelect\" name=\"Model\">\n                    <mat-option *ngFor=\"let type of models\" [value]=\"type\">\n                        {{type}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n        </mat-card-content>\n    </mat-card>\n\n   \n\n    <mat-card>\n        <mat-card-header fxLayoutAlign=\"center\">                \n           \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <input matInput placeholder=\"Year\" [(ngModel)]=\"VehicleEdit.Year\" name=\"Year\" required>\n            </mat-form-field>\n                               \n        </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n        <mat-card-header fxLayoutAlign=\"center\">                \n           \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <input matInput placeholder=\"Colour\" [(ngModel)]=\"VehicleEdit.Colour\" name=\"Color\" required>\n            </mat-form-field>\n                               \n        </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n        <mat-card-header fxLayoutAlign=\"center\">                \n           \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <input matInput placeholder=\"Mileage on purchase\" [(ngModel)]=\"VehicleEdit.StartMileage\" name=\"PurchMileage\" required>\n            </mat-form-field>\n                               \n        </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n        <mat-card-header fxLayoutAlign=\"center\">                \n           \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <input matInput placeholder=\"Current Mileage\" [(ngModel)]=\"VehicleEdit.CurrentMileage\" name=\"CurrMileage\" required>\n            </mat-form-field>\n                               \n        </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n        <mat-card-header fxLayoutAlign=\"center\">                \n           \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <input matInput placeholder=\"Service interval\" [(ngModel)]=\"VehicleEdit.ServiceIntervals\" name=\"Interval\" required required>\n            </mat-form-field>\n                               \n        </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n        <mat-card-header fxLayoutAlign=\"center\">                \n           \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <input matInput placeholder=\"Last Service mileage\" [(ngModel)]=\"VehicleEdit.LastServiceKM\" name=\"LastService\" required>\n            </mat-form-field>\n                               \n        </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n        <mat-card-header fxLayoutAlign=\"center\">                \n           \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <input matInput placeholder=\"Registration\" [(ngModel)]=\"VehicleEdit.Registration\" name=\"Registration\" required>\n            </mat-form-field>\n                               \n        </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n        <mat-card-header fxLayoutAlign=\"center\">                \n           \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <input matInput placeholder=\"DateOfPurchase\" [(ngModel)]=\"VehicleEdit.DateofPurchase\" name=\"PurchaseDate\" required>\n            </mat-form-field>\n                               \n        </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n        <mat-card-header fxLayoutAlign=\"center\">                \n           \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <input matInput placeholder=\"PurchasePrice\" [(ngModel)]=\"VehicleEdit.DateofPurchase\" name=\"Price\" required>\n            </mat-form-field>\n                               \n        </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n        <mat-card-header fxLayoutAlign=\"center\">                \n           \n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field>\n                <input matInput placeholder=\"Status\" [(ngModel)]=\"VehicleEdit.Active\" name=\"Active\" required>\n            </mat-form-field>\n                               \n        </mat-card-content>\n    </mat-card>\n\n    \n    <button mat-raised-button color=\"primary\" class=\"m-1\">Save Changes</button>\n  </form>\n  <button mat-raised-button color=\"primary\" class=\"m-1\" (click)=\"showTable()\">Back</button>\n</ng-container>\n\n\n\n\n\n\n<ng-container *ngIf=\"showAdd\">\n    <form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"PutVehicle()\">\n        <mat-card>\n            <mat-card-header>                \n               \n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <mat-form-field>\n                    <mat-select placeholder=\"Vehicle Type\" [(ngModel)]=\"VehicleAdd.Vehicle_Type\" name=\"Type\" required>\n                        <option value=\"\" disabled selected>Choose</option>\n                        <mat-option *ngFor=\"let type of types\" [value]=\"type\">\n                            {{type}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </mat-card-content>\n        </mat-card>\n    \n        <mat-card>\n            <mat-card-header>                \n               \n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <mat-form-field>\n                    <mat-select placeholder=\"Section\" [(ngModel)]=\"VehicleAdd.Section\" name=\"Section\" required>\n                        <option value=\"\" disabled selected>Choose</option>\n                        <mat-option *ngFor=\"let type of sections\" [value]=\"type\">\n                            {{type}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </mat-card-content>\n        </mat-card>\n\n        <mat-card>\n            <mat-card-header>                \n               \n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <mat-form-field>\n                    <mat-select placeholder=\"Infrastructure location\" [(ngModel)]=\"VehicleAdd.Infrastructure\" name=\"Infras\" required>\n                        <option value=\"\" disabled selected>Choose</option>\n                        <mat-option *ngFor=\"let type of infrastructures\" [value]=\"type\">\n                            {{type}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </mat-card-content>\n        </mat-card>\n    \n        <mat-card>\n            <mat-card-header>                \n               \n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <mat-form-field>\n                    <mat-select placeholder=\"Make\" [(ngModel)]=\"VehicleAdd.Make\" name=\"Make\" required>\n                        <option value=\"\" disabled selected>Choose</option>\n                        <mat-option *ngFor=\"let type of makes\" [value]=\"type\">\n                            {{type}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </mat-card-content>\n        </mat-card>\n    \n        <mat-card>\n            <mat-card-header>                \n               \n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <mat-form-field>\n                    <mat-select placeholder=\"Model\" [(ngModel)]=\"VehicleAdd.Model_Description\" name=\"Model\" required>\n                        <option value=\"\" disabled selected>Choose</option>\n                        <mat-option *ngFor=\"let type of models\" [value]=\"type\">\n                            {{type}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </mat-card-content>\n        </mat-card>\n    \n\n    \n        <mat-card>\n            <mat-card-header fxLayoutAlign=\"center\">                \n               \n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <mat-form-field>\n                    <input matInput placeholder=\"Year\" [(ngModel)]=\"VehicleAdd.Year\" name=\"Year\" required>\n                </mat-form-field>\n                                   \n            </mat-card-content>\n        </mat-card>\n    \n        <mat-card>\n            <mat-card-header fxLayoutAlign=\"center\">                \n               \n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <mat-form-field>\n                    <input matInput placeholder=\"Colour\" [(ngModel)]=\"VehicleAdd.Colour\" name=\"Color\" required>\n                </mat-form-field>\n                                   \n            </mat-card-content>\n        </mat-card>\n    \n        <mat-card>\n            <mat-card-header fxLayoutAlign=\"center\">                \n               \n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <mat-form-field>\n                    <input matInput placeholder=\"Mileage on purchase\" [(ngModel)]=\"VehicleAdd.StartMileage\" name=\"PurchMileage\" required>\n                </mat-form-field>\n                                   \n            </mat-card-content>\n        </mat-card>\n    \n        <mat-card>\n            <mat-card-header fxLayoutAlign=\"center\">                \n               \n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <mat-form-field>\n                    <input matInput placeholder=\"Current Mileage\" [(ngModel)]=\"VehicleAdd.CurrentMileage\" name=\"CurrMileage\" required>\n                </mat-form-field>\n                                   \n            </mat-card-content>\n        </mat-card>\n    \n        <mat-card>\n            <mat-card-header fxLayoutAlign=\"center\">                \n               \n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <mat-form-field>\n                    <input matInput placeholder=\"Service interval\" [(ngModel)]=\"VehicleAdd.ServiceIntervals\" name=\"Interval\" required>\n                </mat-form-field>\n                                   \n            </mat-card-content>\n        </mat-card>\n    \n        <mat-card>\n            <mat-card-header fxLayoutAlign=\"center\">                \n               \n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <mat-form-field>\n                    <input matInput placeholder=\"Last Service mileage\" [(ngModel)]=\"VehicleAdd.LastServiceKM\" name=\"LastService\" required>\n                </mat-form-field>\n                                   \n            </mat-card-content>\n        </mat-card>\n    \n        <mat-card>\n            <mat-card-header fxLayoutAlign=\"center\">                \n               \n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <mat-form-field>\n                    <input matInput placeholder=\"Registration\" [(ngModel)]=\"VehicleAdd.Registration\" name=\"Registration\" required>\n                </mat-form-field>\n                                   \n            </mat-card-content>\n        </mat-card>\n    \n        <mat-card>\n            <mat-card-header fxLayoutAlign=\"center\">                \n               \n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <mat-form-field>\n                    <input matInput placeholder=\"DateOfPurchase\" [(ngModel)]=\"VehicleAdd.DateofPurchase\" name=\"PurchaseDate\" required>\n                </mat-form-field>\n                                   \n            </mat-card-content>\n        </mat-card>\n    \n        <mat-card>\n            <mat-card-header fxLayoutAlign=\"center\">                \n               \n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <mat-form-field>\n                    <input matInput placeholder=\"PurchasePrice\" [(ngModel)]=\"VehicleAdd.Price\" name=\"Price\" required>\n                </mat-form-field>\n                                   \n            </mat-card-content>\n        </mat-card>\n    \n        <mat-card>\n            <mat-card-header fxLayoutAlign=\"center\">                \n               \n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <mat-form-field>\n                    <input matInput placeholder=\"Status\" [(ngModel)]=\"VehicleAdd.Active\" name=\"Active\" required>\n                </mat-form-field>\n                                   \n            </mat-card-content>\n        </mat-card>\n    \n        \n        <button mat-raised-button color=\"primary\" class=\"m-1\">Save</button>\n      </form>\n      <button mat-raised-button color=\"primary\" class=\"m-1\" (click)=\"showTable()\">Back</button>\n    </ng-container>";
    /***/
  },

  /***/
  "./src/app/Models/Farm.ts":
  /*!********************************!*\
    !*** ./src/app/Models/Farm.ts ***!
    \********************************/

  /*! exports provided: Farm */

  /***/
  function srcAppModelsFarmTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Farm", function () {
      return Farm;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var Farm = function Farm() {
      _classCallCheck(this, Farm);
    };
    /***/

  },

  /***/
  "./src/app/Models/InsuranceProvider.ts":
  /*!*********************************************!*\
    !*** ./src/app/Models/InsuranceProvider.ts ***!
    \*********************************************/

  /*! exports provided: Insurance */

  /***/
  function srcAppModelsInsuranceProviderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Insurance", function () {
      return Insurance;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var Insurance = function Insurance() {
      _classCallCheck(this, Insurance);
    };
    /***/

  },

  /***/
  "./src/app/Models/VehicleService.ts":
  /*!******************************************!*\
    !*** ./src/app/Models/VehicleService.ts ***!
    \******************************************/

  /*! exports provided: VehicleService */

  /***/
  function srcAppModelsVehicleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VehicleService", function () {
      return VehicleService;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var VehicleService = function VehicleService() {
      _classCallCheck(this, VehicleService);
    };
    /***/

  },

  /***/
  "./src/app/Models/Vehicles.ts":
  /*!************************************!*\
    !*** ./src/app/Models/Vehicles.ts ***!
    \************************************/

  /*! exports provided: Vehicles */

  /***/
  function srcAppModelsVehiclesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Vehicles", function () {
      return Vehicles;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var Vehicles = function Vehicles() {
      _classCallCheck(this, Vehicles);
    };
    /***/

  },

  /***/
  "./src/app/Models/equipment.ts":
  /*!*************************************!*\
    !*** ./src/app/Models/equipment.ts ***!
    \*************************************/

  /*! exports provided: Equipment */

  /***/
  function srcAppModelsEquipmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Equipment", function () {
      return Equipment;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var Equipment = function Equipment() {
      _classCallCheck(this, Equipment);
    };
    /***/

  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".app {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n#app-spinner {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  background: #fff;\n  z-index: 999999;\n  visibility: visible;\n  opacity: 1;\n  -webkit-transition: visibility 0.5s, opacity 0.3s linear;\n  transition: visibility 0.5s, opacity 0.3s linear;\n}\n\n#app-spinner.hide {\n  visibility: hidden;\n  opacity: 0;\n}\n\n#app-spinner h4 {\n  margin-top: 10px;\n  letter-spacing: 0.02em;\n  opacity: 0;\n  text-transform: uppercase;\n  -webkit-animation: loading-text-opacity 2s linear 0s infinite normal;\n  animation: loading-text-opacity 2s linear 0s infinite normal;\n}\n\n@keyframes loading-text-opacity {\n  0% {\n    opacity: 0;\n  }\n  20% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes loading-text-opacity {\n  0% {\n    opacity: 0;\n  }\n  20% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXDM3MFxcUHJvamVjdCBjb2RlXFxncmFkdXMvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUlBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSx3REFBQTtFQUVBLGdEQUFBO0FDQ0o7O0FEQUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUNFUjs7QURBSTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFHQSxvRUFBQTtFQUNBLDREQUFBO0FDRVI7O0FERUE7RUFDSTtJQUFLLFVBQUE7RUNFUDtFRERFO0lBQUssVUFBQTtFQ0lQO0VESEU7SUFBSyxVQUFBO0VDTVA7RURMRTtJQUFLLFVBQUE7RUNRUDtBQUNGOztBRERBO0VBQ0k7SUFBSyxVQUFBO0VDa0JQO0VEakJFO0lBQUssVUFBQTtFQ29CUDtFRG5CRTtJQUFLLFVBQUE7RUNzQlA7RURyQkU7SUFBSyxVQUFBO0VDd0JQO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwe1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6MDtcclxuICAgIGxlZnQ6MDtcclxuICAgIHJpZ2h0OjA7XHJcbiAgICBib3R0b206MDtcclxufVxyXG5cclxuI2FwcC1zcGlubmVye1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB6LWluZGV4OiA5OTk5OTk7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjVzLCBvcGFjaXR5IDAuM3MgbGluZWFyO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuNXMsIG9wYWNpdHkgMC4zcyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuNXMsIG9wYWNpdHkgMC4zcyBsaW5lYXI7XHJcbiAgICAmLmhpZGV7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7IFxyXG4gICAgfVxyXG4gICAgaDR7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAtbW96LWFuaW1hdGlvbjogbG9hZGluZy10ZXh0LW9wYWNpdHkgMnMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDtcclxuICAgICAgICAtby1hbmltYXRpb246IGxvYWRpbmctdGV4dC1vcGFjaXR5IDJzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGxvYWRpbmctdGV4dC1vcGFjaXR5IDJzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBsb2FkaW5nLXRleHQtb3BhY2l0eSAycyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGxvYWRpbmctdGV4dC1vcGFjaXR5IHtcclxuICAgIDAlICB7b3BhY2l0eTogMH1cclxuICAgIDIwJSB7b3BhY2l0eTogMH1cclxuICAgIDUwJSB7b3BhY2l0eTogMX1cclxuICAgIDEwMCV7b3BhY2l0eTogMH1cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgbG9hZGluZy10ZXh0LW9wYWNpdHkge1xyXG4gICAgMCUgIHtvcGFjaXR5OiAwfVxyXG4gICAgMjAlIHtvcGFjaXR5OiAwfVxyXG4gICAgNTAlIHtvcGFjaXR5OiAxfVxyXG4gICAgMTAwJXtvcGFjaXR5OiAwfVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkaW5nLXRleHQtb3BhY2l0eSB7XHJcbiAgICAwJSAge29wYWNpdHk6IDB9XHJcbiAgICAyMCUge29wYWNpdHk6IDB9XHJcbiAgICA1MCUge29wYWNpdHk6IDF9XHJcbiAgICAxMDAle29wYWNpdHk6IDB9XHJcbn1cclxuQC1vLWtleWZyYW1lcyBsb2FkaW5nLXRleHQtb3BhY2l0eSB7XHJcbiAgICAwJSAge29wYWNpdHk6IDB9XHJcbiAgICAyMCUge29wYWNpdHk6IDB9XHJcbiAgICA1MCUge29wYWNpdHk6IDF9XHJcbiAgICAxMDAle29wYWNpdHk6IDB9XHJcbn1cclxuIiwiLmFwcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xufVxuXG4jYXBwLXNwaW5uZXIge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgei1pbmRleDogOTk5OTk5O1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xuICAtd2Via2l0LXRyYW5zaXRpb246IHZpc2liaWxpdHkgMC41cywgb3BhY2l0eSAwLjNzIGxpbmVhcjtcbiAgLW1vei10cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuNXMsIG9wYWNpdHkgMC4zcyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC41cywgb3BhY2l0eSAwLjNzIGxpbmVhcjtcbn1cbiNhcHAtc3Bpbm5lci5oaWRlIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xufVxuI2FwcC1zcGlubmVyIGg0IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgb3BhY2l0eTogMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgLW1vei1hbmltYXRpb246IGxvYWRpbmctdGV4dC1vcGFjaXR5IDJzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7XG4gIC1vLWFuaW1hdGlvbjogbG9hZGluZy10ZXh0LW9wYWNpdHkgMnMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvYWRpbmctdGV4dC1vcGFjaXR5IDJzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7XG4gIGFuaW1hdGlvbjogbG9hZGluZy10ZXh0LW9wYWNpdHkgMnMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDtcbn1cblxuQGtleWZyYW1lcyBsb2FkaW5nLXRleHQtb3BhY2l0eSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDIwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGxvYWRpbmctdGV4dC1vcGFjaXR5IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMjAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZGluZy10ZXh0LW9wYWNpdHkge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAyMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgbG9hZGluZy10ZXh0LW9wYWNpdHkge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAyMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.settings */
    "./src/app/app.settings.ts");

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

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(appSettings) {
        _classCallCheck(this, AppComponent);

        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]
      }];
    };

    AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-root',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./theme/utils/custom-overlay-container */
    "./src/app/theme/utils/custom-overlay-container.ts");
    /* harmony import */


    var ngx_gauge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-gauge */
    "./node_modules/ngx-gauge/__ivy_ngcc__/fesm2015/ngx-gauge.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
    /* harmony import */


    var angular_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular-calendar */
    "./node_modules/angular-calendar/__ivy_ngcc__/fesm2015/angular-calendar.js");
    /* harmony import */


    var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! angular-calendar/date-adapters/date-fns */
    "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
    /* harmony import */


    var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./theme/pipes/pipes.module */
    "./src/app/theme/pipes/pipes.module.ts");
    /* harmony import */


    var _app_routing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./app.routing */
    "./src/app/app.routing.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _pages_pages_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/pages.component */
    "./src/app/pages/pages.component.ts");
    /* harmony import */


    var _pages_blank_blank_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pages/blank/blank.component */
    "./src/app/pages/blank/blank.component.ts");
    /* harmony import */


    var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/search/search.component */
    "./src/app/pages/search/search.component.ts");
    /* harmony import */


    var _pages_errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./pages/errors/not-found/not-found.component */
    "./src/app/pages/errors/not-found/not-found.component.ts");
    /* harmony import */


    var _pages_errors_error_error_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pages/errors/error/error.component */
    "./src/app/pages/errors/error/error.component.ts");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./app.settings */
    "./src/app/app.settings.ts");
    /* harmony import */


    var _theme_components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./theme/components/sidenav/sidenav.component */
    "./src/app/theme/components/sidenav/sidenav.component.ts");
    /* harmony import */


    var _theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./theme/components/menu/vertical-menu/vertical-menu.component */
    "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.ts");
    /* harmony import */


    var _theme_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./theme/components/menu/horizontal-menu/horizontal-menu.component */
    "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts");
    /* harmony import */


    var _theme_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./theme/components/breadcrumb/breadcrumb.component */
    "./src/app/theme/components/breadcrumb/breadcrumb.component.ts");
    /* harmony import */


    var _theme_components_flags_menu_flags_menu_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./theme/components/flags-menu/flags-menu.component */
    "./src/app/theme/components/flags-menu/flags-menu.component.ts");
    /* harmony import */


    var _theme_components_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./theme/components/fullscreen/fullscreen.component */
    "./src/app/theme/components/fullscreen/fullscreen.component.ts");
    /* harmony import */


    var _theme_components_applications_applications_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./theme/components/applications/applications.component */
    "./src/app/theme/components/applications/applications.component.ts");
    /* harmony import */


    var _theme_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./theme/components/messages/messages.component */
    "./src/app/theme/components/messages/messages.component.ts");
    /* harmony import */


    var _theme_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./theme/components/user-menu/user-menu.component */
    "./src/app/theme/components/user-menu/user-menu.component.ts");
    /* harmony import */


    var _test_test_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./test/test.component */
    "./src/app/test/test.component.ts");
    /* harmony import */


    var _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./vehicle/vehicle.component */
    "./src/app/vehicle/vehicle.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _equipment_equipment_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./equipment/equipment.component */
    "./src/app/equipment/equipment.component.ts");
    /* harmony import */


    var _farm_health_farm_health_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./farm-health/farm-health.component */
    "./src/app/farm-health/farm-health.component.ts");
    /* harmony import */


    var _insurnace_provider_insurnace_provider_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./insurnace-provider/insurnace-provider.component */
    "./src/app/insurnace-provider/insurnace-provider.component.ts");
    /* harmony import */


    var _vehicle_service_vehicle_service_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./vehicle-service/vehicle-service.component */
    "./src/app/vehicle-service/vehicle-service.component.ts");
    /* harmony import */


    var _farm_farm_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./farm/farm.component */
    "./src/app/farm/farm.component.ts");
    /* harmony import */


    var _equipment_types_equipment_types_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./equipment-types/equipment-types.component */
    "./src/app/equipment-types/equipment-types.component.ts");
    /* harmony import */


    var _vehicle_types_vehicle_types_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./vehicle-types/vehicle-types.component */
    "./src/app/vehicle-types/vehicle-types.component.ts");

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

    var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
      wheelPropagation: true,
      suppressScrollX: true
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["CommonModule"], ngx_gauge__WEBPACK_IMPORTED_MODULE_6__["NgxGaugeModule"], _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
        apiKey: 'AIzaSyAir4tXhx3X-wcdZnhe8TLlo9J2m_AKx6w'
      }), ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_9__["CalendarModule"].forRoot({
        provide: angular_calendar__WEBPACK_IMPORTED_MODULE_9__["DateAdapter"],
        useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10__["adapterFactory"]
      }), _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__["PipesModule"], _app_routing__WEBPACK_IMPORTED_MODULE_13__["routing"]],
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"], _pages_pages_component__WEBPACK_IMPORTED_MODULE_15__["PagesComponent"], _pages_blank_blank_component__WEBPACK_IMPORTED_MODULE_16__["BlankComponent"], _pages_search_search_component__WEBPACK_IMPORTED_MODULE_17__["SearchComponent"], _pages_errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__["NotFoundComponent"], _pages_errors_error_error_component__WEBPACK_IMPORTED_MODULE_19__["ErrorComponent"], _theme_components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_21__["SidenavComponent"], _theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_22__["VerticalMenuComponent"], _theme_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_23__["HorizontalMenuComponent"], _theme_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_24__["BreadcrumbComponent"], _theme_components_flags_menu_flags_menu_component__WEBPACK_IMPORTED_MODULE_25__["FlagsMenuComponent"], _theme_components_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_26__["FullScreenComponent"], _theme_components_applications_applications_component__WEBPACK_IMPORTED_MODULE_27__["ApplicationsComponent"], _theme_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_28__["MessagesComponent"], _theme_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_29__["UserMenuComponent"], _test_test_component__WEBPACK_IMPORTED_MODULE_30__["TestComponent"], _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_31__["VehicleComponent"], _equipment_equipment_component__WEBPACK_IMPORTED_MODULE_33__["EquipmentComponent"], _farm_health_farm_health_component__WEBPACK_IMPORTED_MODULE_34__["FarmHealthComponent"], _farm_farm_component__WEBPACK_IMPORTED_MODULE_37__["FarmComponent"], _vehicle_service_vehicle_service_component__WEBPACK_IMPORTED_MODULE_36__["VehicleServiceComponent"], _insurnace_provider_insurnace_provider_component__WEBPACK_IMPORTED_MODULE_35__["InsurnaceProviderComponent"], _equipment_types_equipment_types_component__WEBPACK_IMPORTED_MODULE_38__["EquipmentTypesComponent"], _vehicle_types_vehicle_types_component__WEBPACK_IMPORTED_MODULE_39__["VehicleTypesComponent"]],
      entryComponents: [_theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_22__["VerticalMenuComponent"]],
      providers: [_app_settings__WEBPACK_IMPORTED_MODULE_20__["AppSettings"], {
        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PERFECT_SCROLLBAR_CONFIG"],
        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      }, {
        provide: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayContainer"],
        useClass: _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_5__["CustomOverlayContainer"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.routing.ts":
  /*!********************************!*\
    !*** ./src/app/app.routing.ts ***!
    \********************************/

  /*! exports provided: routes, routing */

  /***/
  function srcAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routing", function () {
      return routing;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./pages/pages.component */
    "./src/app/pages/pages.component.ts");
    /* harmony import */


    var _pages_blank_blank_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/blank/blank.component */
    "./src/app/pages/blank/blank.component.ts");
    /* harmony import */


    var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/search/search.component */
    "./src/app/pages/search/search.component.ts");
    /* harmony import */


    var _pages_errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/errors/not-found/not-found.component */
    "./src/app/pages/errors/not-found/not-found.component.ts");
    /* harmony import */


    var _pages_errors_error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/errors/error/error.component */
    "./src/app/pages/errors/error/error.component.ts");
    /* harmony import */


    var _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./vehicle/vehicle.component */
    "./src/app/vehicle/vehicle.component.ts");
    /* harmony import */


    var _equipment_equipment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./equipment/equipment.component */
    "./src/app/equipment/equipment.component.ts");
    /* harmony import */


    var _farm_health_farm_health_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./farm-health/farm-health.component */
    "./src/app/farm-health/farm-health.component.ts");
    /* harmony import */


    var _farm_farm_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./farm/farm.component */
    "./src/app/farm/farm.component.ts");
    /* harmony import */


    var _vehicle_service_vehicle_service_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./vehicle-service/vehicle-service.component */
    "./src/app/vehicle-service/vehicle-service.component.ts");
    /* harmony import */


    var _vehicle_types_vehicle_types_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./vehicle-types/vehicle-types.component */
    "./src/app/vehicle-types/vehicle-types.component.ts");
    /* harmony import */


    var _equipment_types_equipment_types_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./equipment-types/equipment-types.component */
    "./src/app/equipment-types/equipment-types.component.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var routes = [{
      path: '',
      component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_1__["PagesComponent"],
      children: [{
        path: '',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-dashboard-dashboard-module */
          [__webpack_require__.e("default~pages-charts-charts-module~pages-dashboard-dashboard-module"), __webpack_require__.e("pages-dashboard-dashboard-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/dashboard/dashboard.module */
          "./src/app/pages/dashboard/dashboard.module.ts")).then(function (m) {
            return m.DashboardModule;
          });
        },
        data: {
          breadcrumb: 'Dashboard'
        }
      }, {
        path: 'users',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-users-users-module */
          "pages-users-users-module").then(__webpack_require__.bind(null,
          /*! ./pages/users/users.module */
          "./src/app/pages/users/users.module.ts")).then(function (m) {
            return m.UsersModule;
          });
        },
        data: {
          breadcrumb: 'Users'
        }
      }, {
        path: 'ui',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-ui-ui-module */
          "pages-ui-ui-module").then(__webpack_require__.bind(null,
          /*! ./pages/ui/ui.module */
          "./src/app/pages/ui/ui.module.ts")).then(function (m) {
            return m.UiModule;
          });
        },
        data: {
          breadcrumb: 'UI'
        }
      }, {
        path: 'form-controls',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-form-controls-form-controls-module */
          "pages-form-controls-form-controls-module").then(__webpack_require__.bind(null,
          /*! ./pages/form-controls/form-controls.module */
          "./src/app/pages/form-controls/form-controls.module.ts")).then(function (m) {
            return m.FormControlsModule;
          });
        },
        data: {
          breadcrumb: 'Form Controls'
        }
      }, {
        path: 'tables',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-tables-tables-module */
          "pages-tables-tables-module").then(__webpack_require__.bind(null,
          /*! ./pages/tables/tables.module */
          "./src/app/pages/tables/tables.module.ts")).then(function (m) {
            return m.TablesModule;
          });
        },
        data: {
          breadcrumb: 'Tables'
        }
      }, {
        path: 'icons',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-icons-icons-module */
          "pages-icons-icons-module").then(__webpack_require__.bind(null,
          /*! ./pages/icons/icons.module */
          "./src/app/pages/icons/icons.module.ts")).then(function (m) {
            return m.IconsModule;
          });
        },
        data: {
          breadcrumb: 'Material Icons'
        }
      }, {
        path: 'drag-drop',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-drag-drop-drag-drop-module */
          "pages-drag-drop-drag-drop-module").then(__webpack_require__.bind(null,
          /*! ./pages/drag-drop/drag-drop.module */
          "./src/app/pages/drag-drop/drag-drop.module.ts")).then(function (m) {
            return m.DragDropModule;
          });
        },
        data: {
          breadcrumb: 'Drag & Drop'
        }
      }, {
        path: 'schedule',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-schedule-schedule-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-schedule-schedule-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/schedule/schedule.module */
          "./src/app/pages/schedule/schedule.module.ts")).then(function (m) {
            return m.ScheduleModule;
          });
        },
        data: {
          breadcrumb: 'Schedule'
        }
      }, {
        path: 'mailbox',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-mailbox-mailbox-module */
          "pages-mailbox-mailbox-module").then(__webpack_require__.bind(null,
          /*! ./pages/mailbox/mailbox.module */
          "./src/app/pages/mailbox/mailbox.module.ts")).then(function (m) {
            return m.MailboxModule;
          });
        },
        data: {
          breadcrumb: 'Mailbox'
        }
      }, {
        path: 'chat',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-chat-chat-module */
          "pages-chat-chat-module").then(__webpack_require__.bind(null,
          /*! ./pages/chat/chat.module */
          "./src/app/pages/chat/chat.module.ts")).then(function (m) {
            return m.ChatModule;
          });
        },
        data: {
          breadcrumb: 'Chat'
        }
      }, {
        path: 'maps',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-maps-maps-module */
          "pages-maps-maps-module").then(__webpack_require__.bind(null,
          /*! ./pages/maps/maps.module */
          "./src/app/pages/maps/maps.module.ts")).then(function (m) {
            return m.MapsModule;
          });
        },
        data: {
          breadcrumb: 'Maps'
        }
      }, {
        path: 'charts',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-charts-charts-module */
          [__webpack_require__.e("default~pages-charts-charts-module~pages-dashboard-dashboard-module"), __webpack_require__.e("pages-charts-charts-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/charts/charts.module */
          "./src/app/pages/charts/charts.module.ts")).then(function (m) {
            return m.ChartsModule;
          });
        },
        data: {
          breadcrumb: 'Charts'
        }
      }, {
        path: 'dynamic-menu',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-dynamic-menu-dynamic-menu-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-dynamic-menu-dynamic-menu-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/dynamic-menu/dynamic-menu.module */
          "./src/app/pages/dynamic-menu/dynamic-menu.module.ts")).then(function (m) {
            return m.DynamicMenuModule;
          });
        },
        data: {
          breadcrumb: 'Dynamic Menu'
        }
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-profile-profile-module */
          "pages-profile-profile-module").then(__webpack_require__.bind(null,
          /*! ./pages/profile/profile.module */
          "./src/app/pages/profile/profile.module.ts")).then(function (m) {
            return m.ProfileModule;
          });
        },
        data: {
          breadcrumb: 'Profile'
        }
      }, {
        path: 'blank',
        component: _pages_blank_blank_component__WEBPACK_IMPORTED_MODULE_2__["BlankComponent"],
        data: {
          breadcrumb: 'Blank page'
        }
      }, {
        path: 'search',
        component: _pages_search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"],
        data: {
          breadcrumb: 'Search'
        }
      }, {
        path: 'vehicles',
        component: _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_6__["VehicleComponent"]
      }, {
        path: 'equipment',
        component: _equipment_equipment_component__WEBPACK_IMPORTED_MODULE_7__["EquipmentComponent"]
      }, {
        path: 'health',
        component: _farm_health_farm_health_component__WEBPACK_IMPORTED_MODULE_8__["FarmHealthComponent"]
      }, {
        path: 'farm',
        component: _farm_farm_component__WEBPACK_IMPORTED_MODULE_9__["FarmComponent"]
      }, {
        path: 'service',
        component: _vehicle_service_vehicle_service_component__WEBPACK_IMPORTED_MODULE_10__["VehicleServiceComponent"]
      }, {
        path: 'eqTypes',
        component: _equipment_types_equipment_types_component__WEBPACK_IMPORTED_MODULE_12__["EquipmentTypesComponent"]
      }, {
        path: 'veTypes',
        component: _vehicle_types_vehicle_types_component__WEBPACK_IMPORTED_MODULE_11__["VehicleTypesComponent"]
      }]
    }, {
      path: 'landing',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-landing-landing-module */
        "pages-landing-landing-module").then(__webpack_require__.bind(null,
        /*! ./pages/landing/landing.module */
        "./src/app/pages/landing/landing.module.ts")).then(function (m) {
          return m.LandingModule;
        });
      }
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-login-login-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-login-login-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/login/login.module */
        "./src/app/pages/login/login.module.ts")).then(function (m) {
          return m.LoginModule;
        });
      }
    }, {
      path: 'register',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-register-register-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-register-register-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/register/register.module */
        "./src/app/pages/register/register.module.ts")).then(function (m) {
          return m.RegisterModule;
        });
      }
    }, {
      path: 'error',
      component: _pages_errors_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"],
      data: {
        breadcrumb: 'Error'
      }
    }, {
      path: '**',
      component: _pages_errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]
    }];

    var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
      preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"]
    });
    /***/

  },

  /***/
  "./src/app/app.settings.model.ts":
  /*!***************************************!*\
    !*** ./src/app/app.settings.model.ts ***!
    \***************************************/

  /*! exports provided: Settings */

  /***/
  function srcAppAppSettingsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Settings", function () {
      return Settings;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var Settings = function Settings(name, loadingSpinner, fixedHeader, sidenavIsOpened, sidenavIsPinned, sidenavUserBlock, menu, menuType, theme, rtl, hasFooter) {
      _classCallCheck(this, Settings);

      this.name = name;
      this.loadingSpinner = loadingSpinner;
      this.fixedHeader = fixedHeader;
      this.sidenavIsOpened = sidenavIsOpened;
      this.sidenavIsPinned = sidenavIsPinned;
      this.sidenavUserBlock = sidenavUserBlock;
      this.menu = menu;
      this.menuType = menuType;
      this.theme = theme;
      this.rtl = rtl;
      this.hasFooter = hasFooter;
    };
    /***/

  },

  /***/
  "./src/app/app.settings.ts":
  /*!*********************************!*\
    !*** ./src/app/app.settings.ts ***!
    \*********************************/

  /*! exports provided: AppSettings */

  /***/
  function srcAppAppSettingsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppSettings", function () {
      return AppSettings;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_settings_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.settings.model */
    "./src/app/app.settings.model.ts");

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

    var AppSettings = function AppSettings() {
      _classCallCheck(this, AppSettings);

      this.settings = new _app_settings_model__WEBPACK_IMPORTED_MODULE_1__["Settings"]('Gradus', //theme name
      true, //loadingSpinner
      true, //fixedHeader
      true, //sidenavIsOpened
      true, //sidenavIsPinned  
      true, //sidenavUserBlock 
      'vertical', //horizontal , vertical
      'default', //default, compact, mini
      'green-dark', //indigo-light, teal-light, red-light, blue-dark, green-dark, pink-dark
      false, // true = rtl, false = ltr
      true // true = has footer, false = no footer
      );
    };

    AppSettings = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], AppSettings);
    /***/
  },

  /***/
  "./src/app/equipment-types/equipment-types.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/equipment-types/equipment-types.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEquipmentTypesEquipmentTypesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VxdWlwbWVudC10eXBlcy9lcXVpcG1lbnQtdHlwZXMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/equipment-types/equipment-types.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/equipment-types/equipment-types.component.ts ***!
    \**************************************************************/

  /*! exports provided: EquipmentTypesComponent */

  /***/
  function srcAppEquipmentTypesEquipmentTypesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipmentTypesComponent", function () {
      return EquipmentTypesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

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

    var EquipmentTypesComponent =
    /*#__PURE__*/
    function () {
      function EquipmentTypesComponent() {
        _classCallCheck(this, EquipmentTypesComponent);
      }

      _createClass(EquipmentTypesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EquipmentTypesComponent;
    }();

    EquipmentTypesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-equipment-types',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./equipment-types.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/equipment-types/equipment-types.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./equipment-types.component.scss */
      "./src/app/equipment-types/equipment-types.component.scss")).default]
    }), __metadata("design:paramtypes", [])], EquipmentTypesComponent);
    /***/
  },

  /***/
  "./src/app/equipment/equipment.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/equipment/equipment.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEquipmentEquipmentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-column-is_Active {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  -webkit-box-flex: 0 !important;\n          flex: 0 0 5% !important;\n  width: 28% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXF1aXBtZW50L0Q6XFwzNzBcXFByb2plY3QgY29kZVxcZ3JhZHVzL3NyY1xcYXBwXFxlcXVpcG1lbnRcXGVxdWlwbWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZXF1aXBtZW50L2VxdWlwbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtVQUFBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBRUEsc0JBQUE7RUFFQSxpQkFBQTtFQUVBLHFCQUFBO0VBQ0EsYUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvZXF1aXBtZW50L2VxdWlwbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY29sdW1uLWlzX0FjdGl2ZSB7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDUlICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMjglICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIFxyXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICBcclxuICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xyXG4gICAgLW1vei1oeXBoZW5zOiBhdXRvO1xyXG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG4gICAgaHlwaGVuczogYXV0bztcclxuICB9IiwiLm1hdC1jb2x1bW4taXNfQWN0aXZlIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICBmbGV4OiAwIDAgNSUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDI4JSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAtbW96LWh5cGhlbnM6IGF1dG87XG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgaHlwaGVuczogYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/equipment/equipment.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/equipment/equipment.component.ts ***!
    \**************************************************/

  /*! exports provided: EquipmentComponent */

  /***/
  function srcAppEquipmentEquipmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipmentComponent", function () {
      return EquipmentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../app.settings */
    "./src/app/app.settings.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _Models_equipment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Models/equipment */
    "./src/app/Models/equipment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

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

    var EquipmentComponent =
    /*#__PURE__*/
    function () {
      function EquipmentComponent(appSettings, router) {
        _classCallCheck(this, EquipmentComponent);

        this.appSettings = appSettings;
        this.router = router;
        this.displayedColumns = ['Equipment_ID', 'Equipment_type_Description', 'Equipment_Description', 'Infrastructure_Name', 'Equipment_Condition', 'Equipment_Cost', 'Is_Active', 'Actions'];
        this.show = false;
        this.showAdd = false;
        this.showtable = true;
        this.data = [{
          Equipment_ID: "12321",
          Equipment_Condition: "Fair",
          Infrastructure_Name: "Building 2",
          Equipment_type_Description: "Tools",
          Is_Active: "True",
          Equipment_Cost: 1000,
          Equipment_Description: "Sker"
        }, {
          Equipment_ID: "12321",
          Equipment_Condition: "Fair",
          Infrastructure_Name: "Building 2",
          Equipment_type_Description: "Tools",
          Is_Active: "True",
          Equipment_Cost: 1000,
          Equipment_Description: "Sker"
        }, {
          Equipment_ID: "12321",
          Equipment_Condition: "Fair",
          Infrastructure_Name: "Building 2",
          Equipment_type_Description: "Tools",
          Is_Active: "True",
          Equipment_Cost: 1000,
          Equipment_Description: "Sker"
        }, {
          Equipment_ID: "12321",
          Equipment_Condition: "Fair",
          Infrastructure_Name: "Building 2",
          Equipment_type_Description: "Tools",
          Is_Active: "True",
          Equipment_Cost: 1000,
          Equipment_Description: "Sker"
        }, {
          Equipment_ID: "12321",
          Equipment_Condition: "Fair",
          Infrastructure_Name: "Building 2",
          Equipment_type_Description: "Tools",
          Is_Active: "True",
          Equipment_Cost: 1000,
          Equipment_Description: "Sker"
        }];
        this.types = ["Tools", "Planting tools", "Car tools"];
        this.condition = ["Poor", "Fair", "Good"];
        this.infrastructures = ["Building 1", "Building 2"];
        this.active = ["True", "False"];
        this.settings = this.appSettings.settings;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.data);
      }

      _createClass(EquipmentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.AdminPriv = localStorage.getItem("PrivelageLevel");
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
        }
      }, {
        key: "changeform",
        value: function changeform() {
          if (this.show == false) {
            this.show = true;
            this.showAdd = false;
            this.showtable = false;
          }
        }
      }, {
        key: "getEquipmentDetail",
        value: function getEquipmentDetail(Id) {
          this.equipmentEdit = new _Models_equipment__WEBPACK_IMPORTED_MODULE_4__["Equipment"]();
          this.equipmentEdit.Equipment_type_Description = "Tools";
          this.equipmentEdit.Equipment_Condition = "Good";
          this.equipmentEdit.Equipment_Cost = 1000;
          this.equipmentEdit.Infrastructure_Name = "Building 1";
          this.equipmentEdit.Equipment_Description = "Sker";
          this.equipmentEdit.Is_Active = "False";
          this.selectedValue = this.equipmentEdit.Equipment_type_Description;
          this.InfrastructureSelect = this.equipmentEdit.Infrastructure_Name;
          this.conditionSelect = this.equipmentEdit.Equipment_Condition;
          this.selectedActive = this.equipmentEdit.Is_Active;
          this.changeform();
        }
      }, {
        key: "AddEquipment",
        value: function AddEquipment() {
          if (this.show == true) {
            this.show = false;
          }

          this.equipmentAdd = new _Models_equipment__WEBPACK_IMPORTED_MODULE_4__["Equipment"]();
          this.showAdd = true;
          this.showtable = false;
        }
      }, {
        key: "PutEquipment",
        value: function PutEquipment() {
          alert("Done");
        }
      }, {
        key: "deleteEquipment",
        value: function deleteEquipment() {
          if (confirm("Are you sure to delete " + name)) {
            console.log("Implement delete functionality here");
          }
        }
      }, {
        key: "showTable",
        value: function showTable() {
          this.showtable = true;
          this.showAdd = false;
          this.show = false;
        }
      }, {
        key: "Download",
        value: function Download() {}
      }, {
        key: "LoadTypes",
        value: function LoadTypes() {
          this.router.navigateByUrl("eqTypes");
        }
      }]);

      return EquipmentComponent;
    }();

    EquipmentComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]), __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])], EquipmentComponent.prototype, "paginator", void 0);

    EquipmentComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-equipment',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./equipment.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/equipment/equipment.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./equipment.component.scss */
      "./src/app/equipment/equipment.component.scss")).default]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], EquipmentComponent);
    /***/
  },

  /***/
  "./src/app/farm-health/farm-health.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/farm-health/farm-health.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFarmHealthFarmHealthComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhcm0taGVhbHRoL2Zhcm0taGVhbHRoLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/farm-health/farm-health.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/farm-health/farm-health.component.ts ***!
    \******************************************************/

  /*! exports provided: FarmHealthComponent */

  /***/
  function srcAppFarmHealthFarmHealthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FarmHealthComponent", function () {
      return FarmHealthComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

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

    var FarmHealthComponent =
    /*#__PURE__*/
    function () {
      function FarmHealthComponent() {
        _classCallCheck(this, FarmHealthComponent);

        this.gaugeType = "arch";
        this.gaugeValue = 28.3;
        this.gaugeLabel = "Overall Health";
        this.gaugeAppendText = "/100";

        this.customColors = function (value) {
          console.log(value);
          return "#ff0000";
        };

        this.vehicleLabel = "Vehicle Score";
        this.taskLabel = "Task Score";
        this.maintLabel = "Maintenance Score";
        this.vehicleValue = 50;
        this.faultLabel = "Fault Score";
      }

      _createClass(FarmHealthComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "Download",
        value: function Download() {}
      }]);

      return FarmHealthComponent;
    }();

    FarmHealthComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-farm-health',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./farm-health.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/farm-health/farm-health.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./farm-health.component.scss */
      "./src/app/farm-health/farm-health.component.scss")).default]
    }), __metadata("design:paramtypes", [])], FarmHealthComponent);
    /***/
  },

  /***/
  "./src/app/farm/farm.component.scss":
  /*!******************************************!*\
    !*** ./src/app/farm/farm.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppFarmFarmComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhcm0vZmFybS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/farm/farm.component.ts":
  /*!****************************************!*\
    !*** ./src/app/farm/farm.component.ts ***!
    \****************************************/

  /*! exports provided: FarmComponent */

  /***/
  function srcAppFarmFarmComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FarmComponent", function () {
      return FarmComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../app.settings */
    "./src/app/app.settings.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _Models_Farm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Models/Farm */
    "./src/app/Models/Farm.ts");

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

    var FarmComponent =
    /*#__PURE__*/
    function () {
      function FarmComponent(appSettings) {
        _classCallCheck(this, FarmComponent);

        this.appSettings = appSettings;
        this.displayedColumns = ['Farm ID', 'Farm Type', 'Farm Description', 'Farm Size', 'Farm Owner', 'Active', 'Actions'];
        this.show = false;
        this.showAdd = false;
        this.data = [{
          Farm_ID: "1",
          Farm_Type: "Cattle-Beef",
          Farm_Description: "Description",
          Farm_Owner: "Kyle Drotsky",
          Farm_Size: 20000,
          is_Active: "Yes"
        }, {
          Farm_ID: "2",
          Farm_Type: "Field Crops",
          Farm_Description: "Description",
          Farm_Owner: "Kyle Drotsky",
          Farm_Size: 20000,
          is_Active: "Yes"
        }, {
          Farm_ID: "3",
          Farm_Type: "Fruit",
          Farm_Description: "Description",
          Farm_Owner: "Kyle Drotsky",
          Farm_Size: 20000,
          is_Active: "Yes"
        }, {
          Farm_ID: "4",
          Farm_Type: "Game",
          Farm_Description: "Description",
          Farm_Owner: "Kyle Drotsky",
          Farm_Size: 20000,
          is_Active: "Yes"
        }, {
          Farm_ID: "5",
          Farm_Type: "Gardening",
          Farm_Description: "Description",
          Farm_Owner: "Kyle Drotsky",
          Farm_Size: 20000,
          is_Active: "Yes"
        }, {
          Farm_ID: "6",
          Farm_Type: "Poultry",
          Farm_Description: "Description",
          Farm_Owner: "Kyle Drotsky",
          Farm_Size: 20000,
          is_Active: "Yes"
        }];
        this.farmTypes = ['Cattle-Beef', 'Cattle-Diary', 'Field Crops', 'Forage and Grazing Crops', 'Fruit', 'Game', 'Gardening', 'Goats', 'Poultry', 'Sheep', 'Swine', 'Tree Crops', 'Vegetables'];
        this.provinces = ['Gauteng', 'KwaZulu Natal', 'Free State', 'North West', 'Limpopo', 'Eastern Cape', 'Western Cape', 'Northern Cape', 'Mpumalanga'];
        this.showtable = true;
        this.settings = this.appSettings.settings;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.data);
      }

      _createClass(FarmComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.AdminPriv = localStorage.getItem("PrivelageLevel");
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
        }
      }, {
        key: "changeform",
        value: function changeform() {
          if (this.show == false) {
            this.show = true;
            this.showAdd = false;
            this.showtable = false;
          }
        }
      }, {
        key: "getFarmInfo",
        value: function getFarmInfo(Id) {
          this.FarmEdit = new _Models_Farm__WEBPACK_IMPORTED_MODULE_4__["Farm"]();
          this.FarmEdit.Active = "True";
          this.FarmEdit.Farm_Type = "Cattle-Beef";
          this.FarmEdit.Farm_Address = "asdas";
          this.FarmEdit.Farm_ContactNumber = 869876785;
          this.FarmEdit.Farm_Email = "Hilux@gmail.com";
          this.FarmEdit.Farm_Name = "Hentie";
          this.FarmEdit.Farm_Size = 4456789;
          this.FarmEdit.Active = "True";
          this.FarmEdit.Province = "Gauteng";
          this.selectedValue = this.FarmEdit.Farm_Type;
          this.provinceSelect = this.FarmEdit.Province;
          this.changeform();
        }
      }, {
        key: "addFarm",
        value: function addFarm() {
          if (this.show == true) {
            this.show = false;
          }

          this.FarmAdd = new _Models_Farm__WEBPACK_IMPORTED_MODULE_4__["Farm"]();
          this.showAdd = true;
          this.showtable = false;
        }
      }, {
        key: "putFarm",
        value: function putFarm() {
          alert("Done");
        }
      }, {
        key: "deleteFarm",
        value: function deleteFarm() {
          if (confirm("Are you sure to delete " + name)) {
            console.log("Implement delete functionality here");
          }
        }
      }, {
        key: "showTable",
        value: function showTable() {
          this.showtable = true;
          this.showAdd = false;
          this.show = false;
        }
      }, {
        key: "Download",
        value: function Download() {}
      }]);

      return FarmComponent;
    }();

    FarmComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]), __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])], FarmComponent.prototype, "paginator", void 0);

    FarmComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-farm',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./farm.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/farm/farm.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./farm.component.scss */
      "./src/app/farm/farm.component.scss")).default]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]])], FarmComponent);
    /***/
  },

  /***/
  "./src/app/insurnace-provider/insurnace-provider.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/insurnace-provider/insurnace-provider.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInsurnaceProviderInsurnaceProviderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc3VybmFjZS1wcm92aWRlci9pbnN1cm5hY2UtcHJvdmlkZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/insurnace-provider/insurnace-provider.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/insurnace-provider/insurnace-provider.component.ts ***!
    \********************************************************************/

  /*! exports provided: InsurnaceProviderComponent */

  /***/
  function srcAppInsurnaceProviderInsurnaceProviderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InsurnaceProviderComponent", function () {
      return InsurnaceProviderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app.settings */
    "./src/app/app.settings.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _Models_InsuranceProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Models/InsuranceProvider */
    "./src/app/Models/InsuranceProvider.ts");

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

    var InsurnaceProviderComponent =
    /*#__PURE__*/
    function () {
      function InsurnaceProviderComponent(appSettings) {
        _classCallCheck(this, InsurnaceProviderComponent);

        this.appSettings = appSettings;
        this.showtable = true;
        this.displayedColumns = ['IP_ID', 'IP_Name', 'IP_Reg_Number', 'IP_VAT_Number', 'IP_Phone_Number', 'Actions'];
        this.show = false;
        this.showAdd = false;
        this.data = [{
          IP_ID: "1",
          IP_Name: "Outsurance",
          IP_Reg_Number: "djfbowero431234",
          IP_VAT_Number: 32938243984239,
          IP_Phone_Number: 943234343
        }, {
          IP_ID: "2",
          IP_Name: "King Price",
          IP_Reg_Number: "sdkfjbsdfje23e2",
          IP_VAT_Number: 14234234234231,
          IP_Phone_Number: 845678382
        }, {
          IP_ID: "3",
          IP_Name: "Discovery",
          IP_Reg_Number: "sascdsfjkndskjfs",
          IP_VAT_Number: 9876543456754,
          IP_Phone_Number: 823234322
        }, {
          IP_ID: "4",
          IP_Name: "Momentum",
          IP_Reg_Number: "4383y4hrhuudwjadd",
          IP_VAT_Number: 9878463784631,
          IP_Phone_Number: 882342353
        }];
        this.settings = this.appSettings.settings;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.data);
      }

      _createClass(InsurnaceProviderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.AdminPriv = localStorage.getItem("PrivelageLevel");
          this.InsuranceEdit.IP_ID = "1";
          this.InsuranceEdit.IP_Name = "Outsurance";
          this.InsuranceEdit.IP_Phone_Number = 5555555;
          this.InsuranceEdit.IP_Reg_Number = "2131233";
          this.InsuranceEdit.IP_VAT_Number = 32123312;
          this.InsuranceEdit.User_ID = "213123";
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
        }
      }, {
        key: "changeform",
        value: function changeform() {
          if (this.show == false) {
            this.show = true;
            this.showAdd = false;
            this.showtable = false;
          }
        }
      }, {
        key: "getInsuranceInfo",
        value: function getInsuranceInfo(Id) {
          this.changeform();
        }
      }, {
        key: "addInsurance",
        value: function addInsurance() {
          if (this.show == true) {
            this.show = false;
          }

          this.InsuranceaAdd = new _Models_InsuranceProvider__WEBPACK_IMPORTED_MODULE_4__["Insurance"]();
          this.showAdd = true;
          this.showtable = false;
        }
      }, {
        key: "putInsurance",
        value: function putInsurance() {
          alert("Done");
        }
      }, {
        key: "deleteInsurance",
        value: function deleteInsurance() {
          alert("Are you sure");

          if (confirm("Are you sure to delete " + name)) {
            console.log("Implement delete functionality here");
          }
        }
      }, {
        key: "showTable",
        value: function showTable() {
          this.showtable = true;
          this.showAdd = false;
          this.show = false;
        }
      }]);

      return InsurnaceProviderComponent;
    }();

    InsurnaceProviderComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]), __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])], InsurnaceProviderComponent.prototype, "paginator", void 0);

    InsurnaceProviderComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-insurnace-provider',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./insurnace-provider.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/insurnace-provider/insurnace-provider.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./insurnace-provider.component.scss */
      "./src/app/insurnace-provider/insurnace-provider.component.scss")).default]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]])], InsurnaceProviderComponent);
    /***/
  },

  /***/
  "./src/app/pages/blank/blank.component.css":
  /*!*************************************************!*\
    !*** ./src/app/pages/blank/blank.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesBlankBlankComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JsYW5rL2JsYW5rLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/blank/blank.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/blank/blank.component.ts ***!
    \************************************************/

  /*! exports provided: BlankComponent */

  /***/
  function srcAppPagesBlankBlankComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlankComponent", function () {
      return BlankComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

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

    var BlankComponent =
    /*#__PURE__*/
    function () {
      function BlankComponent() {
        _classCallCheck(this, BlankComponent);
      }

      _createClass(BlankComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BlankComponent;
    }();

    BlankComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-blank',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./blank.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/blank/blank.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./blank.component.css */
      "./src/app/pages/blank/blank.component.css")).default]
    }), __metadata("design:paramtypes", [])], BlankComponent);
    /***/
  },

  /***/
  "./src/app/pages/errors/error/error.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/errors/error/error.component.ts ***!
    \*******************************************************/

  /*! exports provided: ErrorComponent */

  /***/
  function srcAppPagesErrorsErrorErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
      return ErrorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../app.settings */
    "./src/app/app.settings.ts");

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

    var ErrorComponent =
    /*#__PURE__*/
    function () {
      function ErrorComponent(appSettings, router) {
        _classCallCheck(this, ErrorComponent);

        this.appSettings = appSettings;
        this.router = router;
        this.settings = this.appSettings.settings;
      }

      _createClass(ErrorComponent, [{
        key: "goHome",
        value: function goHome() {
          this.router.navigate(['/']);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.settings.loadingSpinner = false;
        }
      }]);

      return ErrorComponent;
    }();

    ErrorComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    ErrorComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-error',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./error.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/errors/error/error.component.html")).default
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], ErrorComponent);
    /***/
  },

  /***/
  "./src/app/pages/errors/not-found/not-found.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/errors/not-found/not-found.component.ts ***!
    \***************************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppPagesErrorsNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../app.settings */
    "./src/app/app.settings.ts");

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

    var NotFoundComponent =
    /*#__PURE__*/
    function () {
      function NotFoundComponent(appSettings, router) {
        _classCallCheck(this, NotFoundComponent);

        this.appSettings = appSettings;
        this.router = router;
        this.settings = this.appSettings.settings;
      }

      _createClass(NotFoundComponent, [{
        key: "searchResult",
        value: function searchResult() {
          this.router.navigate(['/search']);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.settings.loadingSpinner = false;
        }
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    NotFoundComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-not-found',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/errors/not-found/not-found.component.html")).default
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], NotFoundComponent);
    /***/
  },

  /***/
  "./src/app/pages/pages.component.scss":
  /*!********************************************!*\
    !*** ./src/app/pages/pages.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPagesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sidenav {\n  width: 250px;\n  overflow: hidden;\n  border: none !important;\n}\n\n.horizontal-menu {\n  padding: 0;\n  position: relative;\n  z-index: 9;\n  height: 0;\n}\n\n.horizontal-menu.sticky {\n  height: 0;\n  min-height: 0;\n  overflow: hidden;\n}\n\n.horizontal-menu.sticky.fixed-top {\n  position: fixed;\n  top: 0;\n  height: 56px;\n  overflow: visible;\n}\n\n.inner-sidenav-content {\n  position: absolute;\n  top: 56px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 8px;\n  min-height: calc(100% - (56px + 8px*2));\n}\n\n.inner-sidenav-content .has-footer {\n  min-height: calc(100% - (45px + 56px));\n}\n\n.inner-sidenav-content .footer {\n  height: 56px;\n  margin: 0 -8px -8px -8px;\n  padding: 0 16px;\n}\n\n.options {\n  position: fixed;\n  width: 250px;\n  overflow: hidden;\n}\n\n.options .control {\n  padding: 6px 14px;\n}\n\n.options .control div {\n  padding: 6px 0;\n}\n\n.options .control h4 {\n  border-bottom: 1px solid #ccc;\n  margin: 12px 0 6px 0;\n}\n\n.options .control .skin-primary {\n  width: 32px;\n  height: 32px;\n  padding: 0;\n  overflow: hidden;\n  cursor: pointer;\n}\n\n.options .control .skin-primary .skin-secondary {\n  width: 0;\n  height: 0;\n  padding: 0;\n  border-bottom: 32px solid;\n  border-left: 32px solid transparent;\n}\n\n.options .control .skin-primary.indigo-light {\n  background-color: #3F51B5;\n  border: 1px solid #3F51B5;\n}\n\n.options .control .skin-primary.indigo-light .skin-secondary {\n  border-bottom-color: #ececec;\n}\n\n.options .control .skin-primary.teal-light {\n  background-color: #009688;\n  border: 1px solid #009688;\n}\n\n.options .control .skin-primary.teal-light .skin-secondary {\n  border-bottom-color: #ececec;\n}\n\n.options .control .skin-primary.red-light {\n  background-color: #F44336;\n  border: 1px solid #F44336;\n}\n\n.options .control .skin-primary.red-light .skin-secondary {\n  border-bottom-color: #ececec;\n}\n\n.options .control .skin-primary.blue-dark {\n  background-color: #0277bd;\n  border: 1px solid #0277bd;\n}\n\n.options .control .skin-primary.blue-dark .skin-secondary {\n  border-bottom-color: #262626;\n}\n\n.options .control .skin-primary.green-dark {\n  background-color: #388E3C;\n  border: 1px solid #388E3C;\n}\n\n.options .control .skin-primary.green-dark .skin-secondary {\n  border-bottom-color: #262626;\n}\n\n.options .control .skin-primary.pink-dark {\n  background-color: #D81B60;\n  border: 1px solid #D81B60;\n}\n\n.options .control .skin-primary.pink-dark .skin-secondary {\n  border-bottom-color: #262626;\n}\n\n.options .mat-radio-group {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.options .mat-radio-group .mat-radio-button {\n  margin: 2px 0;\n}\n\n.options .mat-slide-toggle {\n  height: auto;\n}\n\n.options .ps {\n  height: calc(100% - 48px);\n}\n\n.op-image {\n  box-shadow: 0 0 2px #ccc;\n  border: 2px solid;\n  border-color: transparent;\n  cursor: pointer;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n}\n\n.options-icon {\n  position: fixed;\n  top: 110px;\n  right: 0;\n  width: 40px;\n  height: 40px;\n  background: rgba(0, 0, 0, 0.7);\n  color: #fff;\n  cursor: pointer;\n  z-index: 999999;\n}\n\n.options-icon .mat-icon {\n  -webkit-animation: spin 8s linear infinite;\n  animation: spin 8s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.back-to-top {\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  z-index: 999999;\n  right: 20px;\n  bottom: 20px;\n  opacity: 0.5;\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.75);\n  border-radius: 4px;\n}\n\n.back-to-top:hover {\n  opacity: 0.9;\n}\n\n.search-bar form input {\n  height: 28px;\n  border: none;\n  padding: 0;\n  border-radius: 15px;\n  outline: none;\n  color: #444;\n  width: 0;\n  overflow: hidden;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n\n.search-bar form input.show {\n  padding: 0 8px;\n  width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvRDpcXDM3MFxcUHJvamVjdCBjb2RlXFxncmFkdXMvc3JjXFxhcHBcXHBhZ2VzXFxwYWdlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvRDpcXDM3MFxcUHJvamVjdCBjb2RlXFxncmFkdXMvc3JjXFxhcHBcXHRoZW1lXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGFnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQ0VZO0VERFosZ0JBQUE7RUFDQSx1QkFBQTtBRURKOztBRkdBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUVBSjs7QUZDSTtFQUNJLFNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUVDUjs7QUZBUTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsWUNqQks7RURrQkwsaUJBQUE7QUVFWjs7QUZHQTtFQUNFLGtCQUFBO0VBQ0EsU0N6QmU7RUQwQmYsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUN0QmM7RUR1QmQsdUNBQUE7QUVBRjs7QUZDRTtFQUNFLHNDQUFBO0FFQ0o7O0FGQ0U7RUFDRSxZQ3BCWTtFRHFCWix3QkFBQTtFQUNBLGVBQUE7QUVDSjs7QUZHQTtFQUNJLGVBQUE7RUFDQSxZQ3hDWTtFRHlDWixnQkFBQTtBRUFKOztBRkNJO0VBQ0ksaUJBQUE7QUVDUjs7QUZBUTtFQUNJLGNBQUE7QUVFWjs7QUZBUTtFQUNJLDZCQUFBO0VBQ0Esb0JBQUE7QUVFWjs7QUZBUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBRUVaOztBRkRZO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxtQ0FBQTtBRUdoQjs7QUZEWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUVHaEI7O0FGRmdCO0VBQ0ksNEJBQUE7QUVJcEI7O0FGRFk7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0FFR2hCOztBRkZnQjtFQUNJLDRCQUFBO0FFSXBCOztBRkRZO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtBRUdoQjs7QUZGZ0I7RUFDSSw0QkFBQTtBRUlwQjs7QUZEWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUVHaEI7O0FGRmdCO0VBQ0ksNEJBQUE7QUVJcEI7O0FGRFk7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0FFR2hCOztBRkZnQjtFQUNJLDRCQUFBO0FFSXBCOztBRkRZO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtBRUdoQjs7QUZGZ0I7RUFDSSw0QkFBQTtBRUlwQjs7QUZDSTtFQUNJLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUVDUjs7QUZBUTtFQUNJLGFBQUE7QUVFWjs7QUZDSTtFQUNJLFlBQUE7QUVDUjs7QUZDSTtFQUNJLHlCQUFBO0FFQ1I7O0FGRUE7RUFDSSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBRUNKOztBRkNBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBRUVKOztBRkRJO0VBQ0ksMENBQUE7RUFFQSxrQ0FBQTtBRUdSOztBRk1BO0VBQ0k7SUFDSSxpQ0FBQTtFRUVOO0FBQ0Y7O0FGQUE7RUFDSTtJQUNJLGlDQUFBO1lBQUEseUJBQUE7RUVFTjtBQUNGOztBRkNBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtBRUNKOztBRkFJO0VBQ0ksWUFBQTtBRUVSOztBRktRO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7QUVGWjs7QUZHWTtFQUNHLGNBQUE7RUFDQSxZQUFBO0FFRGYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi90aGVtZS9zdHlsZXMvdmFyaWFibGVzXCI7XHJcblxyXG4uc2lkZW5hdntcclxuICAgIHdpZHRoOiAkc2lkZW5hdi13aWR0aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47IFxyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7ICBcclxufVxyXG4uaG9yaXpvbnRhbC1tZW51e1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDk7ICAgIFxyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgJi5zdGlja3l7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAmLmZpeGVkLXRvcHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogJGhvcml6b250YWwtbWVudS1oZWlnaHQ7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmlubmVyLXNpZGVuYXYtY29udGVudCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDokdG9vbGJhci1oZWlnaHQ7XHJcbiAgYm90dG9tOjA7XHJcbiAgbGVmdDowO1xyXG4gIHJpZ2h0OjA7ICBcclxuICBwYWRkaW5nOiAkaW5uZXItc2lkZW5hdi1jb250ZW50LXBhZGRpbmc7XHJcbiAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gKCN7JHRvb2xiYXItaGVpZ2h0fSArICN7JGlubmVyLXNpZGVuYXYtY29udGVudC1wYWRkaW5nfSoyKSk7XHJcbiAgLmhhcy1mb290ZXJ7ICBcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtICg0NXB4ICsgI3skZm9vdGVyLWhlaWdodH0pKTtcclxuICB9XHJcbiAgLmZvb3RlcntcclxuICAgIGhlaWdodDogJGZvb3Rlci1oZWlnaHQ7XHJcbiAgICBtYXJnaW46IDAgLThweCAtOHB4IC04cHg7IFxyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLm9wdGlvbnN7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogJHNpZGVuYXYtd2lkdGg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLmNvbnRyb2x7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDE0cHg7XHJcbiAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA2cHggMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDR7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEycHggMCA2cHggMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNraW4tcHJpbWFyeXtcclxuICAgICAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgICAgICAgICAgICBcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyOyAgXHJcbiAgICAgICAgICAgIC5za2luLXNlY29uZGFyeXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwOyBcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMDsgXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMzJweCBzb2xpZDsgXHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMzJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmluZGlnby1saWdodHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzRjUxQjU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjM0Y1MUI1O1xyXG4gICAgICAgICAgICAgICAgLnNraW4tc2Vjb25kYXJ5e1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNlY2VjZWM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi50ZWFsLWxpZ2h0e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDk2ODg7XHJcbiAgICAgICAgICAgICAgICAuc2tpbi1zZWNvbmRhcnl7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2VjZWNlYztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLnJlZC1saWdodHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNDQzMzY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjQ0MzM2O1xyXG4gICAgICAgICAgICAgICAgLnNraW4tc2Vjb25kYXJ5e1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNlY2VjZWM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5ibHVlLWRhcmt7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI3N2JkO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAyNzdiZDtcclxuICAgICAgICAgICAgICAgIC5za2luLXNlY29uZGFyeXtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMjYyNjI2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuZ3JlZW4tZGFya3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODhFM0M7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzg4RTNDO1xyXG4gICAgICAgICAgICAgICAgLnNraW4tc2Vjb25kYXJ5e1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMyNjI2MjY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5waW5rLWRhcmt7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDgxQjYwO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0Q4MUI2MDtcclxuICAgICAgICAgICAgICAgIC5za2luLXNlY29uZGFyeXtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMjYyNjI2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1hdC1yYWRpby1ncm91cHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIC5tYXQtcmFkaW8tYnV0dG9ue1xyXG4gICAgICAgICAgICBtYXJnaW46IDJweCAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tYXQtc2xpZGUtdG9nZ2xle1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuICAgIC5wc3tcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ4cHgpO1xyXG4gICAgfVxyXG59XHJcbi5vcC1pbWFnZXtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAycHggI2NjYztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbn1cclxuLm9wdGlvbnMtaWNvbntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMTEwcHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuNyk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHotaW5kZXg6IDk5OTk5OTtcclxuICAgIC5tYXQtaWNvbntcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiA4cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgLW1vei1hbmltYXRpb246IHNwaW4gOHMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgIGFuaW1hdGlvbjogc3BpbiA4cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkAtbW96LWtleWZyYW1lcyBzcGluIHsgXHJcbiAgICAxMDAlIHsgXHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyBcclxuICAgIH0gXHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4geyBcclxuICAgIDEwMCUgeyBcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IFxyXG4gICAgfSBcclxufVxyXG5Aa2V5ZnJhbWVzIHNwaW4geyBcclxuICAgIDEwMCUgeyBcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYmFjay10by10b3B7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHotaW5kZXg6IDk5OTk5OTtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjc1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDsgICAgXHJcbiAgICAmOmhvdmVye1xyXG4gICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIH0gICAgXHJcbn1cclxuXHJcblxyXG4uc2VhcmNoLWJhcntcclxuICAgIGZvcm17XHJcbiAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogIzQ0NDtcclxuICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgICAgICYuc2hvd3tcclxuICAgICAgICAgICAgICAgcGFkZGluZzogMCA4cHg7XHJcbiAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiJGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuXHJcbiR0b29sYmFyLWhlaWdodDogNTZweDsgXHJcbiRob3Jpem9udGFsLW1lbnUtaGVpZ2h0OiAkdG9vbGJhci1oZWlnaHQ7XHJcblxyXG4kc2lkZW5hdi13aWR0aDogMjUwcHg7XHJcbiRzaWRlbmF2LXVzZXItYmxvY2staGVpZ2h0OiAxNTZweDtcclxuJG1pbmktc2lkZW5hdi11c2VyLWJsb2NrLWhlaWdodDogNzBweDtcclxuXHJcbiRmbGV4LWRpc3RhbmNlOiA4cHg7XHJcbiRpbm5lci1zaWRlbmF2LWNvbnRlbnQtcGFkZGluZzogJGZsZXgtZGlzdGFuY2U7XHJcblxyXG4vL0xvZ2luLCBSZWdpc3RlciwgRXJyb3JzIGJveFxyXG4kYm94LWhlaWdodDogMTg2cHg7XHJcbiRib3gtcG9zaXRpb246IDM0cHg7XHJcbiRyZWdpc3Rlci1ib3gtaGVpZ2h0OiAzMDBweDtcclxuXHJcbiRmb290ZXItaGVpZ2h0OiA1NnB4OyAiLCIuc2lkZW5hdiB7XG4gIHdpZHRoOiAyNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5ob3Jpem9udGFsLW1lbnUge1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk7XG4gIGhlaWdodDogMDtcbn1cbi5ob3Jpem9udGFsLW1lbnUuc3RpY2t5IHtcbiAgaGVpZ2h0OiAwO1xuICBtaW4taGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmhvcml6b250YWwtbWVudS5zdGlja3kuZml4ZWQtdG9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGhlaWdodDogNTZweDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi5pbm5lci1zaWRlbmF2LWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTZweDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgcGFkZGluZzogOHB4O1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSAoNTZweCArIDhweCoyKSk7XG59XG4uaW5uZXItc2lkZW5hdi1jb250ZW50IC5oYXMtZm9vdGVyIHtcbiAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gKDQ1cHggKyA1NnB4KSk7XG59XG4uaW5uZXItc2lkZW5hdi1jb250ZW50IC5mb290ZXIge1xuICBoZWlnaHQ6IDU2cHg7XG4gIG1hcmdpbjogMCAtOHB4IC04cHggLThweDtcbiAgcGFkZGluZzogMCAxNnB4O1xufVxuXG4ub3B0aW9ucyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDI1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm9wdGlvbnMgLmNvbnRyb2wge1xuICBwYWRkaW5nOiA2cHggMTRweDtcbn1cbi5vcHRpb25zIC5jb250cm9sIGRpdiB7XG4gIHBhZGRpbmc6IDZweCAwO1xufVxuLm9wdGlvbnMgLmNvbnRyb2wgaDQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgbWFyZ2luOiAxMnB4IDAgNnB4IDA7XG59XG4ub3B0aW9ucyAuY29udHJvbCAuc2tpbi1wcmltYXJ5IHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm9wdGlvbnMgLmNvbnRyb2wgLnNraW4tcHJpbWFyeSAuc2tpbi1zZWNvbmRhcnkge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItYm90dG9tOiAzMnB4IHNvbGlkO1xuICBib3JkZXItbGVmdDogMzJweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5vcHRpb25zIC5jb250cm9sIC5za2luLXByaW1hcnkuaW5kaWdvLWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNGNTFCNTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNGNTFCNTtcbn1cbi5vcHRpb25zIC5jb250cm9sIC5za2luLXByaW1hcnkuaW5kaWdvLWxpZ2h0IC5za2luLXNlY29uZGFyeSB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNlY2VjZWM7XG59XG4ub3B0aW9ucyAuY29udHJvbCAuc2tpbi1wcmltYXJ5LnRlYWwtbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA5Njg4O1xufVxuLm9wdGlvbnMgLmNvbnRyb2wgLnNraW4tcHJpbWFyeS50ZWFsLWxpZ2h0IC5za2luLXNlY29uZGFyeSB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNlY2VjZWM7XG59XG4ub3B0aW9ucyAuY29udHJvbCAuc2tpbi1wcmltYXJ5LnJlZC1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNDQzMzY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGNDQzMzY7XG59XG4ub3B0aW9ucyAuY29udHJvbCAuc2tpbi1wcmltYXJ5LnJlZC1saWdodCAuc2tpbi1zZWNvbmRhcnkge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZWNlY2VjO1xufVxuLm9wdGlvbnMgLmNvbnRyb2wgLnNraW4tcHJpbWFyeS5ibHVlLWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI3N2JkO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDI3N2JkO1xufVxuLm9wdGlvbnMgLmNvbnRyb2wgLnNraW4tcHJpbWFyeS5ibHVlLWRhcmsgLnNraW4tc2Vjb25kYXJ5IHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzI2MjYyNjtcbn1cbi5vcHRpb25zIC5jb250cm9sIC5za2luLXByaW1hcnkuZ3JlZW4tZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODhFM0M7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzODhFM0M7XG59XG4ub3B0aW9ucyAuY29udHJvbCAuc2tpbi1wcmltYXJ5LmdyZWVuLWRhcmsgLnNraW4tc2Vjb25kYXJ5IHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzI2MjYyNjtcbn1cbi5vcHRpb25zIC5jb250cm9sIC5za2luLXByaW1hcnkucGluay1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q4MUI2MDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q4MUI2MDtcbn1cbi5vcHRpb25zIC5jb250cm9sIC5za2luLXByaW1hcnkucGluay1kYXJrIC5za2luLXNlY29uZGFyeSB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMyNjI2MjY7XG59XG4ub3B0aW9ucyAubWF0LXJhZGlvLWdyb3VwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ub3B0aW9ucyAubWF0LXJhZGlvLWdyb3VwIC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luOiAycHggMDtcbn1cbi5vcHRpb25zIC5tYXQtc2xpZGUtdG9nZ2xlIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLm9wdGlvbnMgLnBzIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0OHB4KTtcbn1cblxuLm9wLWltYWdlIHtcbiAgYm94LXNoYWRvdzogMCAwIDJweCAjY2NjO1xuICBib3JkZXI6IDJweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4ub3B0aW9ucy1pY29uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDExMHB4O1xuICByaWdodDogMDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiA5OTk5OTk7XG59XG4ub3B0aW9ucy1pY29uIC5tYXQtaWNvbiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDhzIGxpbmVhciBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IHNwaW4gOHMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb246IHNwaW4gOHMgbGluZWFyIGluZmluaXRlO1xufVxuXG5ALW1vei1rZXlmcmFtZXMgc3BpbiB7XG4gIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi5iYWNrLXRvLXRvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIHJpZ2h0OiAyMHB4O1xuICBib3R0b206IDIwcHg7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5iYWNrLXRvLXRvcDpob3ZlciB7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLnNlYXJjaC1iYXIgZm9ybSBpbnB1dCB7XG4gIGhlaWdodDogMjhweDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogIzQ0NDtcbiAgd2lkdGg6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG4uc2VhcmNoLWJhciBmb3JtIGlucHV0LnNob3cge1xuICBwYWRkaW5nOiAwIDhweDtcbiAgd2lkdGg6IDI1MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/pages.component.ts":
  /*!******************************************!*\
    !*** ./src/app/pages/pages.component.ts ***!
    \******************************************/

  /*! exports provided: PagesComponent */

  /***/
  function srcAppPagesPagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesComponent", function () {
      return PagesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../app.settings */
    "./src/app/app.settings.ts");
    /* harmony import */


    var _theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../theme/components/menu/menu.service */
    "./src/app/theme/components/menu/menu.service.ts");

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

    var PagesComponent =
    /*#__PURE__*/
    function () {
      function PagesComponent(appSettings, router, menuService) {
        _classCallCheck(this, PagesComponent);

        this.appSettings = appSettings;
        this.router = router;
        this.menuService = menuService;
        this.menus = ['vertical', 'horizontal'];
        this.menuTypes = ['default', 'compact', 'mini'];
        this.lastScrollTop = 0;
        this.showBackToTop = false;
        this.toggleSearchBar = false;
        this.foods = [{
          value: 'steak-0',
          viewValue: 'Steak'
        }, {
          value: 'pizza-1',
          viewValue: 'Pizza'
        }, {
          value: 'tacos-2',
          viewValue: 'Tacos'
        }];
        this.settings = this.appSettings.settings;
      } //====================================================================


      _createClass(PagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (window.innerWidth <= 768) {
            this.settings.menu = 'vertical';
            this.settings.sidenavIsOpened = false;
            this.settings.sidenavIsPinned = false;
          }

          this.menuOption = this.settings.menu;
          this.menuTypeOption = this.settings.menuType;
          this.defaultMenu = this.settings.menu;
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          setTimeout(function () {
            _this.settings.loadingSpinner = false;
          }, 300);
          this.backToTop.nativeElement.style.display = 'none';
          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
              if (!_this.settings.sidenavIsPinned) {
                _this.sidenav.close();
              }

              if (window.innerWidth <= 768) {
                _this.sidenav.close();
              }
            }
          });
          if (this.settings.menu == "vertical") this.menuService.expandActiveSubMenu(this.menuService.getVerticalMenuItems());
        }
      }, {
        key: "chooseMenu",
        value: function chooseMenu() {
          this.settings.menu = this.menuOption;
          this.defaultMenu = this.menuOption;
          this.router.navigate(['/']);
        }
      }, {
        key: "chooseMenuType",
        value: function chooseMenuType() {
          this.settings.menuType = this.menuTypeOption;
        }
      }, {
        key: "changeTheme",
        value: function changeTheme(theme) {
          this.settings.theme = theme;
        }
      }, {
        key: "toggleSidenav",
        value: function toggleSidenav() {
          this.sidenav.toggle();
        }
      }, {
        key: "onPsScrollY",
        value: function onPsScrollY(event) {
          event.target.scrollTop > 300 ? this.backToTop.nativeElement.style.display = 'flex' : this.backToTop.nativeElement.style.display = 'none';

          if (this.settings.menu == 'horizontal') {
            if (this.settings.fixedHeader) {
              var currentScrollTop = event.target.scrollTop > 56 ? event.target.scrollTop : 0;

              if (currentScrollTop > this.lastScrollTop) {
                document.querySelector('#horizontal-menu').classList.add('sticky');
                event.target.classList.add('horizontal-menu-hidden');
              } else {
                document.querySelector('#horizontal-menu').classList.remove('sticky');
                event.target.classList.remove('horizontal-menu-hidden');
              }

              this.lastScrollTop = currentScrollTop;
            } else {
              if (event.target.scrollTop > 56) {
                document.querySelector('#horizontal-menu').classList.add('sticky');
                event.target.classList.add('horizontal-menu-hidden');
              } else {
                document.querySelector('#horizontal-menu').classList.remove('sticky');
                event.target.classList.remove('horizontal-menu-hidden');
              }
            }
          }
        }
      }, {
        key: "scrollToTop",
        value: function scrollToTop() {
          this.pss.forEach(function (ps) {
            if (ps.elementRef.nativeElement.id == 'main' || ps.elementRef.nativeElement.id == 'main-content') {
              ps.scrollToTop(0, 250);
            }
          });
        }
      }, {
        key: "farmChange",
        value: function farmChange() {
          localStorage.setItem("currentFarmID", this.selectedValue);
          alert("Done");
        }
      }, {
        key: "onWindowResize",
        value: function onWindowResize() {
          if (window.innerWidth <= 768) {
            this.settings.sidenavIsOpened = false;
            this.settings.sidenavIsPinned = false;
            this.settings.menu = 'vertical';
          } else {
            this.defaultMenu == 'horizontal' ? this.settings.menu = 'horizontal' : this.settings.menu = 'vertical';
            this.settings.sidenavIsOpened = true;
            this.settings.sidenavIsPinned = true;
          }
        }
      }, {
        key: "closeSubMenus",
        value: function closeSubMenus() {
          var menu = document.querySelector(".sidenav-menu-outer");

          if (menu) {
            for (var i = 0; i < menu.children[0].children.length; i++) {
              var child = menu.children[0].children[i];

              if (child) {
                if (child.children[0].classList.contains('expanded')) {
                  child.children[0].classList.remove('expanded');
                  child.children[1].classList.remove('show');
                }
              }
            }
          }
        }
      }]);

      return PagesComponent;
    }();

    PagesComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'), __metadata("design:type", Object)], PagesComponent.prototype, "sidenav", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('backToTop'), __metadata("design:type", Object)], PagesComponent.prototype, "backToTop", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarDirective"]), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])], PagesComponent.prototype, "pss", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], PagesComponent.prototype, "onWindowResize", null);

    PagesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-pages',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./pages.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages.component.html")).default,
      providers: [_theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"]],
      styles: [__importDefault(__webpack_require__(
      /*! ./pages.component.scss */
      "./src/app/pages/pages.component.scss")).default]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"]])], PagesComponent);
    /***/
  },

  /***/
  "./src/app/pages/search/search.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/search/search.component.ts ***!
    \**************************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppPagesSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

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

    var SearchComponent =
    /*#__PURE__*/
    function () {
      function SearchComponent() {
        _classCallCheck(this, SearchComponent);
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SearchComponent;
    }();

    SearchComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-search',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.component.html")).default
    }), __metadata("design:paramtypes", [])], SearchComponent);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
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


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");

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

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__["MatStepperModule"]],
      exports: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__["MatStepperModule"]],
      declarations: []
    })], SharedModule);
    /***/
  },

  /***/
  "./src/app/test/test.component.scss":
  /*!******************************************!*\
    !*** ./src/app/test/test.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppTestTestComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/test/test.component.ts":
  /*!****************************************!*\
    !*** ./src/app/test/test.component.ts ***!
    \****************************************/

  /*! exports provided: TestComponent */

  /***/
  function srcAppTestTestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestComponent", function () {
      return TestComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

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

    var TestComponent =
    /*#__PURE__*/
    function () {
      function TestComponent() {
        _classCallCheck(this, TestComponent);
      }

      _createClass(TestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TestComponent;
    }();

    TestComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-test',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./test.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./test.component.scss */
      "./src/app/test/test.component.scss")).default]
    }), __metadata("design:paramtypes", [])], TestComponent);
    /***/
  },

  /***/
  "./src/app/theme/components/applications/applications.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/theme/components/applications/applications.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeComponentsApplicationsApplicationsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".applications .mat-toolbar, .applications .mat-toolbar-row {\n  height: 40px !important;\n  min-height: 40px !important;\n}\n.applications .header {\n  width: 250px;\n  font-size: 16px;\n}\n.applications .mat-card {\n  padding: 0;\n}\n.applications .mat-card .mat-button {\n  height: 100%;\n}\n.applications .mat-card .mat-button .mat-button-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9hcHBsaWNhdGlvbnMvRDpcXDM3MFxcUHJvamVjdCBjb2RlXFxncmFkdXMvc3JjXFxhcHBcXHRoZW1lXFxjb21wb25lbnRzXFxhcHBsaWNhdGlvbnNcXGFwcGxpY2F0aW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9hcHBsaWNhdGlvbnMvYXBwbGljYXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksdUJBQUE7RUFDQSwyQkFBQTtBQ0FSO0FERUk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQ0FSO0FERUk7RUFDSSxVQUFBO0FDQVI7QURDUTtFQUNJLFlBQUE7QUNDWjtBREFZO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0VoQiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvYXBwbGljYXRpb25zL2FwcGxpY2F0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHBsaWNhdGlvbnN7XHJcbiAgICAubWF0LXRvb2xiYXIsIC5tYXQtdG9vbGJhci1yb3d7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLWhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmhlYWRlcntcclxuICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1jYXJke1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLm1hdC1idXR0b257XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgLm1hdC1idXR0b24td3JhcHBlcntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5hcHBsaWNhdGlvbnMgLm1hdC10b29sYmFyLCAuYXBwbGljYXRpb25zIC5tYXQtdG9vbGJhci1yb3cge1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogNDBweCAhaW1wb3J0YW50O1xufVxuLmFwcGxpY2F0aW9ucyAuaGVhZGVyIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uYXBwbGljYXRpb25zIC5tYXQtY2FyZCB7XG4gIHBhZGRpbmc6IDA7XG59XG4uYXBwbGljYXRpb25zIC5tYXQtY2FyZCAubWF0LWJ1dHRvbiB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5hcHBsaWNhdGlvbnMgLm1hdC1jYXJkIC5tYXQtYnV0dG9uIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/theme/components/applications/applications.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/theme/components/applications/applications.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ApplicationsComponent */

  /***/
  function srcAppThemeComponentsApplicationsApplicationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplicationsComponent", function () {
      return ApplicationsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

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

    var ApplicationsComponent =
    /*#__PURE__*/
    function () {
      function ApplicationsComponent() {
        _classCallCheck(this, ApplicationsComponent);
      }

      _createClass(ApplicationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ApplicationsComponent;
    }();

    ApplicationsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-applications',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./applications.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/applications/applications.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
      styles: [__importDefault(__webpack_require__(
      /*! ./applications.component.scss */
      "./src/app/theme/components/applications/applications.component.scss")).default]
    }), __metadata("design:paramtypes", [])], ApplicationsComponent);
    /***/
  },

  /***/
  "./src/app/theme/components/breadcrumb/breadcrumb.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/theme/components/breadcrumb/breadcrumb.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeComponentsBreadcrumbBreadcrumbComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".breadcrumb {\n  padding: 8px;\n}\n.breadcrumb .mat-icon {\n  font-size: 20px;\n  height: 20px;\n  width: 20px;\n  padding: 0 6px;\n}\n.breadcrumb .breadcrumb-title.active {\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.breadcrumb .breadcrumb-item + .breadcrumb-item:before {\n  display: inline-block;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  content: \"/\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9icmVhZGNydW1iL0Q6XFwzNzBcXFByb2plY3QgY29kZVxcZ3JhZHVzL3NyY1xcYXBwXFx0aGVtZVxcY29tcG9uZW50c1xcYnJlYWRjcnVtYlxcYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7QURBSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNFUjtBREFJO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQ0VSO0FEQUk7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmVhZGNydW1ie1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgLm1hdC1pY29ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMCA2cHg7XHJcbiAgICB9XHJcbiAgICAuYnJlYWRjcnVtYi10aXRsZS5hY3RpdmV7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgLmJyZWFkY3J1bWItaXRlbSsuYnJlYWRjcnVtYi1pdGVtOmJlZm9yZXtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogLjVyZW07XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcclxuICAgICAgICBjb250ZW50OiBcIi9cIjtcclxuICAgIH1cclxufSIsIi5icmVhZGNydW1iIHtcbiAgcGFkZGluZzogOHB4O1xufVxuLmJyZWFkY3J1bWIgLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBwYWRkaW5nOiAwIDZweDtcbn1cbi5icmVhZGNydW1iIC5icmVhZGNydW1iLXRpdGxlLmFjdGl2ZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uYnJlYWRjcnVtYiAuYnJlYWRjcnVtYi1pdGVtICsgLmJyZWFkY3J1bWItaXRlbTpiZWZvcmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gIGNvbnRlbnQ6IFwiL1wiO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/theme/components/breadcrumb/breadcrumb.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/theme/components/breadcrumb/breadcrumb.component.ts ***!
    \*********************************************************************/

  /*! exports provided: BreadcrumbComponent */

  /***/
  function srcAppThemeComponentsBreadcrumbBreadcrumbComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () {
      return BreadcrumbComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../app.settings */
    "./src/app/app.settings.ts");

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

    var BreadcrumbComponent =
    /*#__PURE__*/
    function () {
      function BreadcrumbComponent(appSettings, router, activatedRoute, title) {
        var _this2 = this;

        _classCallCheck(this, BreadcrumbComponent);

        this.appSettings = appSettings;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = title;
        this.breadcrumbs = [];
        this.settings = this.appSettings.settings;
        this.router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
            _this2.breadcrumbs = [];

            _this2.parseRoute(_this2.router.routerState.snapshot.root);

            _this2.pageTitle = "";

            _this2.breadcrumbs.forEach(function (breadcrumb) {
              _this2.pageTitle += ' > ' + breadcrumb.name;
            });

            _this2.title.setTitle(_this2.settings.name + _this2.pageTitle);
          }
        });
      }

      _createClass(BreadcrumbComponent, [{
        key: "parseRoute",
        value: function parseRoute(node) {
          if (node.data['breadcrumb']) {
            if (node.url.length) {
              var urlSegments = [];
              node.pathFromRoot.forEach(function (routerState) {
                urlSegments = urlSegments.concat(routerState.url);
              });
              var url = urlSegments.map(function (urlSegment) {
                return urlSegment.path;
              }).join('/');
              this.breadcrumbs.push({
                name: node.data['breadcrumb'],
                url: '/' + url
              });
            }
          }

          if (node.firstChild) {
            this.parseRoute(node.firstChild);
          }
        }
      }, {
        key: "closeSubMenus",
        value: function closeSubMenus() {
          var menu = document.querySelector(".sidenav-menu-outer");

          if (menu) {
            for (var i = 0; i < menu.children[0].children.length; i++) {
              var child = menu.children[0].children[i];

              if (child) {
                if (child.children[0].classList.contains('expanded')) {
                  child.children[0].classList.remove('expanded');
                  child.children[1].classList.remove('show');
                }
              }
            }
          }
        }
      }]);

      return BreadcrumbComponent;
    }();

    BreadcrumbComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]
      }];
    };

    BreadcrumbComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-breadcrumb',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./breadcrumb.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/breadcrumb/breadcrumb.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./breadcrumb.component.scss */
      "./src/app/theme/components/breadcrumb/breadcrumb.component.scss")).default]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])], BreadcrumbComponent);
    /***/
  },

  /***/
  "./src/app/theme/components/flags-menu/flags-menu.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/theme/components/flags-menu/flags-menu.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeComponentsFlagsMenuFlagsMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".flags img {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n.flags .mat-menu-item {\n  height: 36px;\n  line-height: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9mbGFncy1tZW51L0Q6XFwzNzBcXFByb2plY3QgY29kZVxcZ3JhZHVzL3NyY1xcYXBwXFx0aGVtZVxcY29tcG9uZW50c1xcZmxhZ3MtbWVudVxcZmxhZ3MtbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9mbGFncy1tZW51L2ZsYWdzLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxzQkFBQTtFQUNBLGlCQUFBO0FDQVI7QURFSTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9mbGFncy1tZW51L2ZsYWdzLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxhZ3N7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIH1cclxuICAgIC5tYXQtbWVudS1pdGVte1xyXG4gICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgIH1cclxufSIsIi5mbGFncyBpbWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi5mbGFncyAubWF0LW1lbnUtaXRlbSB7XG4gIGhlaWdodDogMzZweDtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/theme/components/flags-menu/flags-menu.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/theme/components/flags-menu/flags-menu.component.ts ***!
    \*********************************************************************/

  /*! exports provided: FlagsMenuComponent */

  /***/
  function srcAppThemeComponentsFlagsMenuFlagsMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlagsMenuComponent", function () {
      return FlagsMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../app.settings */
    "./src/app/app.settings.ts");

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

    var FlagsMenuComponent =
    /*#__PURE__*/
    function () {
      function FlagsMenuComponent(appSettings) {
        _classCallCheck(this, FlagsMenuComponent);

        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
      }

      _createClass(FlagsMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FlagsMenuComponent;
    }();

    FlagsMenuComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]
      }];
    };

    FlagsMenuComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-flags-menu',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./flags-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/flags-menu/flags-menu.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
      styles: [__importDefault(__webpack_require__(
      /*! ./flags-menu.component.scss */
      "./src/app/theme/components/flags-menu/flags-menu.component.scss")).default]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]])], FlagsMenuComponent);
    /***/
  },

  /***/
  "./src/app/theme/components/fullscreen/fullscreen.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/theme/components/fullscreen/fullscreen.component.ts ***!
    \*********************************************************************/

  /*! exports provided: FullScreenComponent */

  /***/
  function srcAppThemeComponentsFullscreenFullscreenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FullScreenComponent", function () {
      return FullScreenComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

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

    var FullScreenComponent =
    /*#__PURE__*/
    function () {
      function FullScreenComponent() {
        _classCallCheck(this, FullScreenComponent);

        this.toggle = false;
      }

      _createClass(FullScreenComponent, [{
        key: "requestFullscreen",
        value: function requestFullscreen(elem) {
          if (elem.requestFullscreen) {
            elem.requestFullscreen();
          } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
          } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
          } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
          } else {
            console.log('Fullscreen API is not supported.');
          }
        }
      }, {
        key: "exitFullscreen",
        value: function exitFullscreen() {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          } else {
            console.log('Fullscreen API is not supported.');
          }
        }
      }, {
        key: "getFullscreen",
        value: function getFullscreen() {
          if (this.expand) {
            this.requestFullscreen(document.documentElement);
          }

          if (this.compress) {
            this.exitFullscreen();
          }
        }
      }, {
        key: "onFullScreenChange",
        value: function onFullScreenChange() {
          var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;

          if (fullscreenElement != null) {
            this.toggle = true;
          } else {
            this.toggle = false;
          }
        }
      }]);

      return FullScreenComponent;
    }();

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('expand'), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])], FullScreenComponent.prototype, "expand", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('compress'), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])], FullScreenComponent.prototype, "compress", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], FullScreenComponent.prototype, "getFullscreen", null);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], FullScreenComponent.prototype, "onFullScreenChange", null);

    FullScreenComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-fullscreen',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
      template: "\n    <button mat-icon-button class=\"full-screen\">\n        <mat-icon *ngIf=\"!toggle\" #expand>fullscreen</mat-icon>\n        <mat-icon *ngIf=\"toggle\" #compress>fullscreen_exit</mat-icon>\n    </button> \n  "
    })], FullScreenComponent);
    /***/
  },

  /***/
  "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeComponentsMenuHorizontalMenuHorizontalMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".horizontal-menu-item {\n  position: relative;\n}\n.horizontal-menu-item .mat-button {\n  height: 56px;\n  font-weight: 400;\n}\n.horizontal-menu-item .horizontal-menu-icon {\n  margin-right: 5px;\n}\n.horizontal-menu-item .horizontal-sub-menu {\n  position: absolute;\n  width: 190px;\n  max-height: 0;\n  overflow: hidden;\n  -webkit-transition: max-height 0.25s ease-out;\n  transition: max-height 0.25s ease-out;\n}\n.horizontal-menu-item .horizontal-sub-menu .mat-button {\n  width: 100%;\n  height: 36px;\n}\n.horizontal-menu-item:hover > .horizontal-sub-menu {\n  max-height: 500px;\n  overflow: visible;\n}\n.horizontal-sub-menu .horizontal-sub-menu {\n  left: 100%;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZW51L2hvcml6b250YWwtbWVudS9EOlxcMzcwXFxQcm9qZWN0IGNvZGVcXGdyYWR1cy9zcmNcXGFwcFxcdGhlbWVcXGNvbXBvbmVudHNcXG1lbnVcXGhvcml6b250YWwtbWVudVxcaG9yaXpvbnRhbC1tZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL21lbnUvaG9yaXpvbnRhbC1tZW51L2hvcml6b250YWwtbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZW51L2hvcml6b250YWwtbWVudS9EOlxcMzcwXFxQcm9qZWN0IGNvZGVcXGdyYWR1cy9zcmNcXGFwcFxcdGhlbWVcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7QUNBSjtBRENJO0VBQ0ksWUVGUztFRkdULGdCQUFBO0FDQ1I7QURDSTtFQUNJLGlCQUFBO0FDQ1I7QURDSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDZDQUFBO0VBRUEscUNBQUE7QUNDUjtBREFRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNFWjtBREVBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQ0NKO0FEQ0E7RUFDSSxVQUFBO0VBQ0EsTUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZW51L2hvcml6b250YWwtbWVudS9ob3Jpem9udGFsLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG4uaG9yaXpvbnRhbC1tZW51LWl0ZW17XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAubWF0LWJ1dHRvbntcclxuICAgICAgICBoZWlnaHQ6ICRob3Jpem9udGFsLW1lbnUtaGVpZ2h0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbiAgICAuaG9yaXpvbnRhbC1tZW51LWljb257XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcbiAgICAuaG9yaXpvbnRhbC1zdWItbWVudXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDE5MHB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7ICBcclxuICAgICAgICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7ICBcclxuICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0OyAgICBcclxuICAgICAgICAubWF0LWJ1dHRvbntcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzZweDsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5ob3Jpem9udGFsLW1lbnUtaXRlbTpob3ZlciA+IC5ob3Jpem9udGFsLXN1Yi1tZW51e1xyXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxufVxyXG4uaG9yaXpvbnRhbC1zdWItbWVudSAuaG9yaXpvbnRhbC1zdWItbWVudXtcclxuICAgIGxlZnQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbn0iLCIuaG9yaXpvbnRhbC1tZW51LWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaG9yaXpvbnRhbC1tZW51LWl0ZW0gLm1hdC1idXR0b24ge1xuICBoZWlnaHQ6IDU2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uaG9yaXpvbnRhbC1tZW51LWl0ZW0gLmhvcml6b250YWwtbWVudS1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4uaG9yaXpvbnRhbC1tZW51LWl0ZW0gLmhvcml6b250YWwtc3ViLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxOTBweDtcbiAgbWF4LWhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0O1xuICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7XG59XG4uaG9yaXpvbnRhbC1tZW51LWl0ZW0gLmhvcml6b250YWwtc3ViLW1lbnUgLm1hdC1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNnB4O1xufVxuXG4uaG9yaXpvbnRhbC1tZW51LWl0ZW06aG92ZXIgPiAuaG9yaXpvbnRhbC1zdWItbWVudSB7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLmhvcml6b250YWwtc3ViLW1lbnUgLmhvcml6b250YWwtc3ViLW1lbnUge1xuICBsZWZ0OiAxMDAlO1xuICB0b3A6IDA7XG59IiwiJGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuXHJcbiR0b29sYmFyLWhlaWdodDogNTZweDsgXHJcbiRob3Jpem9udGFsLW1lbnUtaGVpZ2h0OiAkdG9vbGJhci1oZWlnaHQ7XHJcblxyXG4kc2lkZW5hdi13aWR0aDogMjUwcHg7XHJcbiRzaWRlbmF2LXVzZXItYmxvY2staGVpZ2h0OiAxNTZweDtcclxuJG1pbmktc2lkZW5hdi11c2VyLWJsb2NrLWhlaWdodDogNzBweDtcclxuXHJcbiRmbGV4LWRpc3RhbmNlOiA4cHg7XHJcbiRpbm5lci1zaWRlbmF2LWNvbnRlbnQtcGFkZGluZzogJGZsZXgtZGlzdGFuY2U7XHJcblxyXG4vL0xvZ2luLCBSZWdpc3RlciwgRXJyb3JzIGJveFxyXG4kYm94LWhlaWdodDogMTg2cHg7XHJcbiRib3gtcG9zaXRpb246IDM0cHg7XHJcbiRyZWdpc3Rlci1ib3gtaGVpZ2h0OiAzMDBweDtcclxuXHJcbiRmb290ZXItaGVpZ2h0OiA1NnB4OyAiXX0= */";
    /***/
  },

  /***/
  "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts ***!
    \************************************************************************************/

  /*! exports provided: HorizontalMenuComponent */

  /***/
  function srcAppThemeComponentsMenuHorizontalMenuHorizontalMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HorizontalMenuComponent", function () {
      return HorizontalMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../app.settings */
    "./src/app/app.settings.ts");
    /* harmony import */


    var _menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../menu.service */
    "./src/app/theme/components/menu/menu.service.ts");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");

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

    var HorizontalMenuComponent =
    /*#__PURE__*/
    function () {
      function HorizontalMenuComponent(appSettings, menuService, router) {
        _classCallCheck(this, HorizontalMenuComponent);

        this.appSettings = appSettings;
        this.menuService = menuService;
        this.router = router;
        this.settings = this.appSettings.settings;
      }

      _createClass(HorizontalMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.menuItems = this.menuService.getHorizontalMenuItems();
          this.menuItems = this.menuItems.filter(function (item) {
            return item.parentId == _this3.menuParentId;
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this4 = this;

          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
              if (_this4.settings.fixedHeader) {
                var mainContent = document.getElementById('main-content');

                if (mainContent) {
                  mainContent.scrollTop = 0;
                }
              } else {
                document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
              }
            }
          });
        }
      }]);

      return HorizontalMenuComponent;
    }();

    HorizontalMenuComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]
      }, {
        type: _menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('menuParentId'), __metadata("design:type", Object)], HorizontalMenuComponent.prototype, "menuParentId", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"]), __metadata("design:type", _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"])], HorizontalMenuComponent.prototype, "trigger", void 0);

    HorizontalMenuComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-horizontal-menu',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./horizontal-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
      providers: [_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]],
      styles: [__importDefault(__webpack_require__(
      /*! ./horizontal-menu.component.scss */
      "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.scss")).default]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], HorizontalMenuComponent);
    /***/
  },

  /***/
  "./src/app/theme/components/menu/menu.model.ts":
  /*!*****************************************************!*\
    !*** ./src/app/theme/components/menu/menu.model.ts ***!
    \*****************************************************/

  /*! exports provided: Menu */

  /***/
  function srcAppThemeComponentsMenuMenuModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Menu", function () {
      return Menu;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var Menu = function Menu(id, title, routerLink, href, icon, target, hasSubMenu, parentId) {
      _classCallCheck(this, Menu);

      this.id = id;
      this.title = title;
      this.routerLink = routerLink;
      this.href = href;
      this.icon = icon;
      this.target = target;
      this.hasSubMenu = hasSubMenu;
      this.parentId = parentId;
    };
    /***/

  },

  /***/
  "./src/app/theme/components/menu/menu.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/theme/components/menu/menu.service.ts ***!
    \*******************************************************/

  /*! exports provided: MenuService */

  /***/
  function srcAppThemeComponentsMenuMenuServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuService", function () {
      return MenuService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./menu */
    "./src/app/theme/components/menu/menu.ts");

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

    var MenuService =
    /*#__PURE__*/
    function () {
      function MenuService(location, router) {
        _classCallCheck(this, MenuService);

        this.location = location;
        this.router = router;
      }

      _createClass(MenuService, [{
        key: "getVerticalMenuItems",
        value: function getVerticalMenuItems() {
          return _menu__WEBPACK_IMPORTED_MODULE_3__["verticalMenuItems"];
        }
      }, {
        key: "getHorizontalMenuItems",
        value: function getHorizontalMenuItems() {
          return _menu__WEBPACK_IMPORTED_MODULE_3__["horizontalMenuItems"];
        }
      }, {
        key: "expandActiveSubMenu",
        value: function expandActiveSubMenu(menu) {
          var _this5 = this;

          var url = this.location.path();
          var routerLink = url; // url.substring(1, url.length);

          var activeMenuItem = menu.filter(function (item) {
            return item.routerLink === routerLink;
          });

          if (activeMenuItem[0]) {
            (function () {
              var menuItem = activeMenuItem[0];

              while (menuItem.parentId != 0) {
                var parentMenuItem = menu.filter(function (item) {
                  return item.id == menuItem.parentId;
                })[0];
                menuItem = parentMenuItem;

                _this5.toggleMenuItem(menuItem.id);
              }
            })();
          }
        }
      }, {
        key: "toggleMenuItem",
        value: function toggleMenuItem(menuId) {
          var menuItem = document.getElementById('menu-item-' + menuId);
          var subMenu = document.getElementById('sub-menu-' + menuId);

          if (subMenu) {
            if (subMenu.classList.contains('show')) {
              subMenu.classList.remove('show');
              menuItem.classList.remove('expanded');
            } else {
              subMenu.classList.add('show');
              menuItem.classList.add('expanded');
            }
          }
        }
      }, {
        key: "closeOtherSubMenus",
        value: function closeOtherSubMenus(menu, menuId) {
          var currentMenuItem = menu.filter(function (item) {
            return item.id == menuId;
          })[0];

          if (currentMenuItem.parentId == 0 && !currentMenuItem.target) {
            menu.forEach(function (item) {
              if (item.id != menuId) {
                var subMenu = document.getElementById('sub-menu-' + item.id);
                var menuItem = document.getElementById('menu-item-' + item.id);

                if (subMenu) {
                  if (subMenu.classList.contains('show')) {
                    subMenu.classList.remove('show');
                    menuItem.classList.remove('expanded');
                  }
                }
              }
            });
          }
        }
      }]);

      return MenuService;
    }();

    MenuService.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    MenuService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], MenuService);
    /***/
  },

  /***/
  "./src/app/theme/components/menu/menu.ts":
  /*!***********************************************!*\
    !*** ./src/app/theme/components/menu/menu.ts ***!
    \***********************************************/

  /*! exports provided: verticalMenuItems, horizontalMenuItems */

  /***/
  function srcAppThemeComponentsMenuMenuTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "verticalMenuItems", function () {
      return verticalMenuItems;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "horizontalMenuItems", function () {
      return horizontalMenuItems;
    });
    /* harmony import */


    var _menu_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./menu.model */
    "./src/app/theme/components/menu/menu.model.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var verticalMenuItems = [new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](1, 'Dashboard', '/', null, 'dashboard', null, false, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](2, 'Vehicles', '/vehicles', null, 'airline_seat_recline_normal', null, false, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](2, 'Equipment', '/equipment', null, 'build', null, false, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](2, 'Staff', '/users', null, 'supervisor_account', null, false, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](2, 'Farm Health', '/health', null, 'healing', null, false, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](2, 'Farm', '/farm', null, 'healing', null, false, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](2, 'Vehicle Service', '/service', null, 'healing', null, false, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](3, 'UI Features', null, null, 'computer', null, true, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](4, 'Buttons', '/ui/buttons', null, 'keyboard', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](5, 'Cards', '/ui/cards', null, 'card_membership', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](6, 'Lists', '/ui/lists', null, 'list', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](7, 'Grids', '/ui/grids', null, 'grid_on', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](8, 'Tabs', '/ui/tabs', null, 'tab', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](9, 'Expansion Panel', '/ui/expansion-panel', null, 'dns', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](10, 'Chips', '/ui/chips', null, 'label', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](11, 'Progress', '/ui/progress', null, 'data_usage', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](12, 'Dialog', '/ui/dialog', null, 'open_in_new', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](13, 'Tooltip', '/ui/tooltip', null, 'chat_bubble', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](14, 'Snackbar', '/ui/snack-bar', null, 'sms', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](15, 'Dynamic Menu', '/dynamic-menu', null, 'format_list_bulleted', null, false, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](20, 'Form Controls', null, null, 'dvr', null, true, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](21, 'Autocomplete', '/form-controls/autocomplete', null, 'short_text', null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](22, 'Checkbox', '/form-controls/checkbox', null, 'check_box', null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](23, 'Datepicker', '/form-controls/datepicker', null, 'today', null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](24, 'Form field', '/form-controls/form-field', null, 'view_stream', null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](25, 'Input', '/form-controls/input', null, 'input', null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](26, 'Radio button', '/form-controls/radio-button', null, 'radio_button_checked', null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](27, 'Select', '/form-controls/select', null, 'playlist_add_check', null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](28, 'Slider', '/form-controls/slider', null, 'tune', null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](29, 'Slide toggle', '/form-controls/slide-toggle', null, 'star_half', null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](30, 'Tables', null, null, 'view_module', null, true, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](31, 'Basic', '/tables/basic', null, 'view_column', null, false, 30), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](32, 'Paging', '/tables/paging', null, 'last_page', null, false, 30), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](33, 'Sorting', '/tables/sorting', null, 'sort', null, false, 30), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](34, 'Filtering', '/tables/filtering', null, 'format_line_spacing', null, false, 30), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](35, 'Selecting', '/tables/selecting', null, 'playlist_add_check', null, false, 30), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](36, 'NGX DataTable', '/tables/ngx-table', null, 'view_array', null, false, 30), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](40, 'Pages', null, null, 'library_books', null, true, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](43, 'Login', '/login', null, 'exit_to_app', null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](44, 'Register', '/register', null, 'person_add', null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](45, 'Blank', '/blank', null, 'check_box_outline_blank', null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](46, 'Page Not Found', '/pagenotfound', null, 'error_outline', null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](47, 'Error', '/error', null, 'warning', null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](48, 'Landing', '/landing', null, 'filter', null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](49, 'Profile', null, null, 'person', null, true, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](50, 'Projects', '/profile/projects', null, 'note', null, false, 49), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](51, 'User Info', '/profile/user-info', null, 'perm_contact_calendar', null, false, 49), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](70, 'Charts', null, null, 'multiline_chart', null, true, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](71, 'Bar Charts', '/charts/bar', null, 'insert_chart', null, false, 70), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](72, 'Pie Charts', '/charts/pie', null, 'pie_chart', null, false, 70), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](73, 'Line Charts', '/charts/line', null, 'show_chart', null, false, 70), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](74, 'Bubble Charts', '/charts/bubble', null, 'bubble_chart', null, false, 70), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](81, 'Drag & Drop', '/drag-drop', null, 'mouse', null, false, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](85, 'Material Icons', '/icons', null, 'insert_emoticon', null, false, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](140, 'Level 1', null, null, 'more_horiz', null, true, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](141, 'Level 2', null, null, 'folder_open', null, true, 140), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](142, 'Level 3', null, null, 'folder_open', null, true, 141), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](143, 'Level 4', null, null, 'folder_open', null, true, 142), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](144, 'Level 5', null, 'http://themeseason.com', 'link', null, false, 143), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](200, 'External Link', null, 'http://themeseason.com', 'open_in_new', '_blank', false, 0)];
    var horizontalMenuItems = [new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](1, 'Dashboard', '/', null, 'dashboard', null, false, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](2, 'Users', '/users', null, 'supervisor_account', null, false, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](3, 'UI Features', null, null, 'computer', null, true, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](4, 'Buttons', '/ui/buttons', null, 'keyboard', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](5, 'Cards', '/ui/cards', null, 'card_membership', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](6, 'Lists', '/ui/lists', null, 'list', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](7, 'Grids', '/ui/grids', null, 'grid_on', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](8, 'Tabs', '/ui/tabs', null, 'tab', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](9, 'Expansion Panel', '/ui/expansion-panel', null, 'dns', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](10, 'Chips', '/ui/chips', null, 'label', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](11, 'Progress', '/ui/progress', null, 'data_usage', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](12, 'Dialog', '/ui/dialog', null, 'open_in_new', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](13, 'Tooltip', '/ui/tooltip', null, 'chat_bubble', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](14, 'Snackbar', '/ui/snack-bar', null, 'sms', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](20, 'Form Controls', null, null, 'dvr', null, true, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](21, 'Autocomplete', '/form-controls/autocomplete', null, 'short_text', null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](22, 'Checkbox', '/form-controls/checkbox', null, 'check_box', null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](23, 'Datepicker', '/form-controls/datepicker', null, 'today', null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](24, 'Form field', '/form-controls/form-field', null, 'view_stream', null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](25, 'Input', '/form-controls/input', null, 'input', null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](26, 'Radio button', '/form-controls/radio-button', null, 'radio_button_checked', null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](27, 'Select', '/form-controls/select', null, 'playlist_add_check', null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](28, 'Slider', '/form-controls/slider', null, 'tune', null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](29, 'Slide toggle', '/form-controls/slide-toggle', null, 'star_half', null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](30, 'Tables', null, null, 'view_module', null, true, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](31, 'Basic', '/tables/basic', null, 'view_column', null, false, 30), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](32, 'Paging', '/tables/paging', null, 'last_page', null, false, 30), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](33, 'Sorting', '/tables/sorting', null, 'sort', null, false, 30), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](34, 'Filtering', '/tables/filtering', null, 'format_line_spacing', null, false, 30), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](35, 'Selecting', '/tables/selecting', null, 'playlist_add_check', null, false, 30), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](36, 'NGX DataTable', '/tables/ngx-table', null, 'view_array', null, false, 30), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](70, 'Charts', null, null, 'multiline_chart', null, true, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](71, 'Bar Charts', '/charts/bar', null, 'insert_chart', null, false, 70), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](72, 'Pie Charts', '/charts/pie', null, 'pie_chart', null, false, 70), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](73, 'Line Charts', '/charts/line', null, 'show_chart', null, false, 70), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](74, 'Bubble Charts', '/charts/bubble', null, 'bubble_chart', null, false, 70), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](81, 'Drag & Drop', '/drag-drop', null, 'mouse', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](85, 'Material Icons', '/icons', null, 'insert_emoticon', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](40, 'Pages', null, null, 'library_books', null, true, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](43, 'Login', '/login', null, 'exit_to_app', null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](44, 'Register', '/register', null, 'person_add', null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](45, 'Blank', '/blank', null, 'check_box_outline_blank', null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](46, 'Page Not Found', '/pagenotfound', null, 'error_outline', null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](47, 'Error', '/error', null, 'warning', null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](48, 'Landing', '/landing', null, 'filter', null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](49, 'Profile', null, null, 'person', null, true, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](50, 'Projects', '/profile/projects', null, 'note', null, false, 49), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](51, 'User Info', '/profile/user-info', null, 'perm_contact_calendar', null, false, 49), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](200, 'External Link', null, 'http://themeseason.com', 'open_in_new', '_blank', false, 40)];
    /***/
  },

  /***/
  "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/theme/components/menu/vertical-menu/vertical-menu.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeComponentsMenuVerticalMenuVerticalMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".menu-icon {\n  margin-right: 12px;\n}\n\n.menu-expand-icon {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.menu-item .mat-button {\n  padding: 0;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  width: 100%;\n  font-weight: 400;\n}\n\n.menu-item .mat-button.expanded .menu-expand-icon {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n\n.menu-item .mat-button-wrapper {\n  padding-left: 16px;\n}\n\n.sub-menu {\n  max-height: 0;\n  overflow: hidden;\n  -webkit-transition: max-height 0.25s ease-out;\n  transition: max-height 0.25s ease-out;\n}\n\n.sub-menu .sub-menu .mat-button {\n  padding-left: 40px;\n}\n\n.sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 60px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 80px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 100px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 120px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 140px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 160px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 180px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 200px;\n}\n\n.sub-menu .mat-button {\n  padding-left: 20px;\n}\n\n.sub-menu.show {\n  max-height: 500px;\n  -webkit-transition: max-height 0.25s ease-in;\n  transition: max-height 0.25s ease-in;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZW51L3ZlcnRpY2FsLW1lbnUvRDpcXDM3MFxcUHJvamVjdCBjb2RlXFxncmFkdXMvc3JjXFxhcHBcXHRoZW1lXFxjb21wb25lbnRzXFxtZW51XFx2ZXJ0aWNhbC1tZW51XFx2ZXJ0aWNhbC1tZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL21lbnUvdmVydGljYWwtbWVudS92ZXJ0aWNhbC1tZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL21lbnUvdmVydGljYWwtbWVudS9EOlxcMzcwXFxQcm9qZWN0IGNvZGVcXGdyYWR1cy9zcmNcXGFwcFxcdGhlbWVcXHN0eWxlc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQUE7QUNESjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNBSjs7QURJSTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDRFI7O0FER1k7RUFDSSxpQ0FBQTtFQUVBLHlCQUFBO0FDRGhCOztBRE1JO0VBQ0ksa0JBQUE7QUNKUjs7QURRQTtFQUVJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDZDQUFBO0VBRUEscUNBQUE7QUNOSjs7QUM1QlE7RUFLUSxrQkFBQTtBRDBCaEI7O0FDL0JRO0VBS1Esa0JBQUE7QUQ2QmhCOztBQ2xDUTtFQUtRLGtCQUFBO0FEZ0NoQjs7QUNyQ1E7RUFLUSxtQkFBQTtBRG1DaEI7O0FDeENRO0VBS1EsbUJBQUE7QURzQ2hCOztBQzNDUTtFQUtRLG1CQUFBO0FEeUNoQjs7QUM5Q1E7RUFLUSxtQkFBQTtBRDRDaEI7O0FDakRRO0VBS1EsbUJBQUE7QUQrQ2hCOztBQ3BEUTtFQUtRLG1CQUFBO0FEa0RoQjs7QURwQkk7RUFDSSxrQkFBQTtBQ3NCUjs7QURwQkk7RUFDSSxpQkFBQTtFQUNBLDRDQUFBO0VBRUEsb0NBQUE7QUNzQlIiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL21lbnUvdmVydGljYWwtbWVudS92ZXJ0aWNhbC1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9taXhpbnNcIjtcclxuXHJcbi5tZW51LWljb257XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbn1cclxuLm1lbnUtZXhwYW5kLWljb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHRvcDogMTBweDtcclxufVxyXG5cclxuLm1lbnUtaXRlbXtcclxuICAgIC5tYXQtYnV0dG9ue1xyXG4gICAgICAgIHBhZGRpbmc6IDA7ICAgIFxyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDNweDsgXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAmLmV4cGFuZGVke1xyXG4gICAgICAgICAgICAubWVudS1leHBhbmQtaWNvbntcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgLm1hdC1idXR0b24td3JhcHBlcntcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG4uc3ViLW1lbnV7XHJcbiAgICBAaW5jbHVkZSBtZW51LWxldmVsLXBhZGRpbmcoJ2x0cicpO1xyXG4gICAgbWF4LWhlaWdodDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7ICBcclxuICAgIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDsgIFxyXG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDsgICAgXHJcbiAgICAubWF0LWJ1dHRvbntcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7ICAgICAgXHJcbiAgICB9IFxyXG4gICAgJi5zaG93e1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLWluO1xyXG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLWluO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1pbjtcclxuICAgIH0gICAgXHJcbn0iLCIubWVudS1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuXG4ubWVudS1leHBhbmQtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbn1cblxuLm1lbnUtaXRlbSAubWF0LWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDA7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLm1lbnUtaXRlbSAubWF0LWJ1dHRvbi5leHBhbmRlZCAubWVudS1leHBhbmQtaWNvbiB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuLm1lbnUtaXRlbSAubWF0LWJ1dHRvbi13cmFwcGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuXG4uc3ViLW1lbnUge1xuICBtYXgtaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDtcbn1cbi5zdWItbWVudSAuc3ViLW1lbnUgLm1hdC1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG59XG4uc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAubWF0LWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogNjBweDtcbn1cbi5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAubWF0LWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogODBweDtcbn1cbi5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLm1hdC1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xufVxuLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLm1hdC1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDEyMHB4O1xufVxuLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5tYXQtYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiAxNDBweDtcbn1cbi5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLm1hdC1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDE2MHB4O1xufVxuLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLm1hdC1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDE4MHB4O1xufVxuLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5tYXQtYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiAyMDBweDtcbn1cbi5zdWItbWVudSAubWF0LWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5zdWItbWVudS5zaG93IHtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLWluO1xuICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1pbjtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLWluO1xufSIsIkBtaXhpbiBtZW51LWxldmVsLXBhZGRpbmcoJGRpcmVjdGlvbil7XHJcbiAgICAkZWxlbTogJyc7XHJcbiAgICBAZm9yICRpIGZyb20gMiB0aHJvdWdoIDEwIHtcclxuICAgICAgICAkZWxlbTogaWYoJGkgPT0gMiwgXCIuc3ViLW1lbnVcIiwgc2VsZWN0b3ItbmVzdCgkZWxlbSwgXCIuc3ViLW1lbnVcIikpOyAgICAgIFxyXG4gICAgICAgICN7JGVsZW0gKyAnIC5tYXQtYnV0dG9uJ30geyBcclxuICAgICAgICAgICAgQGlmICRkaXJlY3Rpb24gPT0gXCJydGxcIiB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4ICogJGk7IFxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBAZWxzZXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweCAqICRpOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/theme/components/menu/vertical-menu/vertical-menu.component.ts ***!
    \********************************************************************************/

  /*! exports provided: VerticalMenuComponent */

  /***/
  function srcAppThemeComponentsMenuVerticalMenuVerticalMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerticalMenuComponent", function () {
      return VerticalMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../app.settings */
    "./src/app/app.settings.ts");
    /* harmony import */


    var _menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../menu.service */
    "./src/app/theme/components/menu/menu.service.ts");

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

    var VerticalMenuComponent =
    /*#__PURE__*/
    function () {
      function VerticalMenuComponent(appSettings, menuService, router) {
        _classCallCheck(this, VerticalMenuComponent);

        this.appSettings = appSettings;
        this.menuService = menuService;
        this.router = router;
        this.onClickMenuItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.settings = this.appSettings.settings;
      }

      _createClass(VerticalMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.parentMenu = this.menuItems.filter(function (item) {
            return item.parentId == _this6.menuParentId;
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this7 = this;

          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
              if (_this7.settings.fixedHeader) {
                var mainContent = document.getElementById('main-content');

                if (mainContent) {
                  mainContent.scrollTop = 0;
                }
              } else {
                document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
              }
            }
          });
        }
      }, {
        key: "onClick",
        value: function onClick(menuId) {
          this.menuService.toggleMenuItem(menuId);
          this.menuService.closeOtherSubMenus(this.menuItems, menuId);
          this.onClickMenuItem.emit(menuId);
        }
      }]);

      return VerticalMenuComponent;
    }();

    VerticalMenuComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]
      }, {
        type: _menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('menuItems'), __metadata("design:type", Object)], VerticalMenuComponent.prototype, "menuItems", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('menuParentId'), __metadata("design:type", Object)], VerticalMenuComponent.prototype, "menuParentId", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], VerticalMenuComponent.prototype, "onClickMenuItem", void 0);

    VerticalMenuComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-vertical-menu',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./vertical-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/menu/vertical-menu/vertical-menu.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
      providers: [_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]],
      styles: [__importDefault(__webpack_require__(
      /*! ./vertical-menu.component.scss */
      "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.scss")).default]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], VerticalMenuComponent);
    /***/
  },

  /***/
  "./src/app/theme/components/messages/messages.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/theme/components/messages/messages.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeComponentsMessagesMessagesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".messages .mat-tab-label {\n  min-width: 93.3px;\n  height: 40px;\n}\n.messages .content {\n  padding: 0;\n  height: 250px;\n}\n.messages img {\n  margin-right: 8px;\n  border-radius: 4px;\n}\n.messages span.name {\n  text-transform: capitalize;\n  font-size: 13px;\n  line-height: 22px;\n}\n.messages span.info {\n  font-size: 12px;\n  opacity: 0.8;\n  line-height: 22px;\n}\n.messages span.text {\n  font-size: 11px;\n  line-height: 14px;\n  white-space: initial;\n  text-align: left;\n}\n.messages .mat-button {\n  padding: 8px;\n}\n.messages .mat-button .mat-button-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n.messages .mat-button .mat-icon {\n  height: 16px;\n  font-size: 12px;\n  width: 12px;\n  vertical-align: middle;\n}\n.messages .row-1 {\n  box-shadow: 0 0 5px #ccc;\n  border-radius: 4px;\n  padding: 2px 13px;\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZXNzYWdlcy9EOlxcMzcwXFxQcm9qZWN0IGNvZGVcXGdyYWR1cy9zcmNcXGFwcFxcdGhlbWVcXGNvbXBvbmVudHNcXG1lc3NhZ2VzXFxtZXNzYWdlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQ0FSO0FERUk7RUFDSSxVQUFBO0VBQ0EsYUFBQTtBQ0FSO0FERUk7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDQVI7QURFSTtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQVI7QURFSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNBUjtBREVJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQ0FSO0FERUk7RUFDSSxZQUFBO0FDQVI7QURDUTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDWjtBRENRO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNDWjtBREVJO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZXN7XHJcbiAgICAubWF0LXRhYi1sYWJlbHtcclxuICAgICAgICBtaW4td2lkdGg6IDkzLjNweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGVudHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICB9XHJcbiAgICBpbWd7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG4gICAgc3Bhbi5uYW1le1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIH1cclxuICAgIHNwYW4uaW5mb3tcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgfVxyXG4gICAgc3Bhbi50ZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogaW5pdGlhbDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfSAgXHJcbiAgICAubWF0LWJ1dHRvbntcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgLm1hdC1idXR0b24td3JhcHBlcntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYXQtaWNvbntcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yb3ctMXtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgNXB4ICNjY2M7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDJweCAxM3B4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgfVxyXG59IiwiLm1lc3NhZ2VzIC5tYXQtdGFiLWxhYmVsIHtcbiAgbWluLXdpZHRoOiA5My4zcHg7XG4gIGhlaWdodDogNDBweDtcbn1cbi5tZXNzYWdlcyAuY29udGVudCB7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogMjUwcHg7XG59XG4ubWVzc2FnZXMgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5tZXNzYWdlcyBzcGFuLm5hbWUge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbn1cbi5tZXNzYWdlcyBzcGFuLmluZm8ge1xuICBmb250LXNpemU6IDEycHg7XG4gIG9wYWNpdHk6IDAuODtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG4ubWVzc2FnZXMgc3Bhbi50ZXh0IHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgd2hpdGUtc3BhY2U6IGluaXRpYWw7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubWVzc2FnZXMgLm1hdC1idXR0b24ge1xuICBwYWRkaW5nOiA4cHg7XG59XG4ubWVzc2FnZXMgLm1hdC1idXR0b24gLm1hdC1idXR0b24td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLm1lc3NhZ2VzIC5tYXQtYnV0dG9uIC5tYXQtaWNvbiB7XG4gIGhlaWdodDogMTZweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aWR0aDogMTJweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5tZXNzYWdlcyAucm93LTEge1xuICBib3gtc2hhZG93OiAwIDAgNXB4ICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMnB4IDEzcHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/theme/components/messages/messages.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/theme/components/messages/messages.component.ts ***!
    \*****************************************************************/

  /*! exports provided: MessagesComponent */

  /***/
  function srcAppThemeComponentsMessagesMessagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesComponent", function () {
      return MessagesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./messages.service */
    "./src/app/theme/components/messages/messages.service.ts");

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

    var MessagesComponent =
    /*#__PURE__*/
    function () {
      function MessagesComponent(messagesService) {
        _classCallCheck(this, MessagesComponent);

        this.messagesService = messagesService;
        this.selectedTab = 1;
        this.messages = messagesService.getMessages();
        this.files = messagesService.getFiles();
        this.meetings = messagesService.getMeetings();
      }

      _createClass(MessagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openMessagesMenu",
        value: function openMessagesMenu() {
          this.trigger.openMenu();
          this.selectedTab = 0;
        }
      }, {
        key: "onMouseLeave",
        value: function onMouseLeave() {
          this.trigger.closeMenu();
        }
      }, {
        key: "stopClickPropagate",
        value: function stopClickPropagate(event) {
          event.stopPropagation();
          event.preventDefault();
        }
      }]);

      return MessagesComponent;
    }();

    MessagesComponent.ctorParameters = function () {
      return [{
        type: _messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"]), __metadata("design:type", _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"])], MessagesComponent.prototype, "trigger", void 0);

    MessagesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-messages',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./messages.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/messages/messages.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
      providers: [_messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]],
      styles: [__importDefault(__webpack_require__(
      /*! ./messages.component.scss */
      "./src/app/theme/components/messages/messages.component.scss")).default]
    }), __metadata("design:paramtypes", [_messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]])], MessagesComponent);
    /***/
  },

  /***/
  "./src/app/theme/components/messages/messages.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/theme/components/messages/messages.service.ts ***!
    \***************************************************************/

  /*! exports provided: MessagesService */

  /***/
  function srcAppThemeComponentsMessagesMessagesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesService", function () {
      return MessagesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

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

    var MessagesService =
    /*#__PURE__*/
    function () {
      function MessagesService() {
        _classCallCheck(this, MessagesService);

        this.messages = [{
          name: 'ashley',
          text: 'After you get up and running, you can place Font Awesome icons just about...',
          time: '1 min ago'
        }, {
          name: 'michael',
          text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
          time: '2 hrs ago'
        }, {
          name: 'julia',
          text: 'Want to request new icons? Here\'s how. Need vectors or want to use on the...',
          time: '10 hrs ago'
        }, {
          name: 'bruno',
          text: 'Explore your passions and discover new ones by getting involved. Stretch your...',
          time: '1 day ago'
        }, {
          name: 'tereza',
          text: 'Get to know who we are - from the inside out. From our history and culture, to the...',
          time: '1 day ago'
        }, {
          name: 'adam',
          text: 'Need some support to reach your goals? Apply for scholarships across...',
          time: '2 days ago'
        }, {
          name: 'michael',
          text: 'Wrap the dropdown\'s trigger and the dropdown menu within .dropdown, or...',
          time: '1 week ago'
        }];
        this.files = [{
          text: 'gradus.zip',
          size: '~6.2 MB',
          value: '47',
          color: 'primary'
        }, {
          text: 'documentation.pdf',
          size: '~14.6 MB',
          value: '33',
          color: 'accent'
        }, {
          text: 'wallpaper.jpg',
          size: '~558 KB',
          value: '60',
          color: 'warn'
        }, {
          text: 'letter.doc',
          size: '~57 KB',
          value: '80',
          color: 'primary'
        }, {
          text: 'azimuth.zip',
          size: '~10.2 MB',
          value: '55',
          color: 'warn'
        }, {
          text: 'contacts.xlsx',
          size: '~96 KB',
          value: '75',
          color: 'accent'
        }];
        this.meetings = [{
          day: '09',
          month: 'May',
          title: 'Meeting with Bruno',
          text: 'Fusce ut condimentum velit, quis egestas eros. Quisque sed condimentum neque.',
          color: 'danger'
        }, {
          day: '15',
          month: 'May',
          title: 'Training course',
          text: 'Fusce arcu tortor, tempor aliquam augue vel, consectetur vehicula lectus.',
          color: 'primary'
        }, {
          day: '12',
          month: 'June',
          title: 'Dinner with Ashley',
          text: 'Curabitur rhoncus facilisis augue sed fringilla.',
          color: 'info'
        }, {
          day: '14',
          month: 'June',
          title: 'Sport time',
          text: 'Vivamus tristique enim eros, ac ultricies sem ultrices vitae.',
          color: 'warning'
        }, {
          day: '29',
          month: 'July',
          title: 'Birthday of Julia',
          text: 'Nam porttitor justo nec elit efficitur vestibulum.',
          color: 'success'
        }];
      }

      _createClass(MessagesService, [{
        key: "getMessages",
        value: function getMessages() {
          return this.messages;
        }
      }, {
        key: "getFiles",
        value: function getFiles() {
          return this.files;
        }
      }, {
        key: "getMeetings",
        value: function getMeetings() {
          return this.meetings;
        }
      }]);

      return MessagesService;
    }();

    MessagesService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], MessagesService);
    /***/
  },

  /***/
  "./src/app/theme/components/sidenav/sidenav.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/theme/components/sidenav/sidenav.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeComponentsSidenavSidenavComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".pin {\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n  fill: currentColor;\n}\n\n.sidenav-header {\n  padding: 0 10px !important;\n}\n\n.user-block {\n  height: 0;\n  position: relative;\n  z-index: 1;\n  overflow: hidden;\n}\n\n.user-block img {\n  width: 80px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 50%;\n}\n\n.user-block .user-info-wrapper {\n  padding: 0 6px;\n  margin: 6px 0;\n  width: 100%;\n}\n\n.user-block .user-info-wrapper .user-info {\n  text-align: center;\n}\n\n.user-block .user-info-wrapper .user-info .name {\n  font-size: 15px;\n}\n\n.user-block .user-info-wrapper .user-info .position {\n  font-size: 13px;\n}\n\n.user-block.show {\n  height: 156px;\n}\n\n.sidenav-menu-outer .ps {\n  height: calc(100% - 56px);\n}\n\n.sidenav-menu-outer.user-block-show .ps {\n  height: calc(100% - 212px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9zaWRlbmF2L0Q6XFwzNzBcXFByb2plY3QgY29kZVxcZ3JhZHVzL3NyY1xcYXBwXFx0aGVtZVxcY29tcG9uZW50c1xcc2lkZW5hdlxcc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvc2lkZW5hdi9EOlxcMzcwXFxQcm9qZWN0IGNvZGVcXGdyYWR1cy9zcmNcXGFwcFxcdGhlbWVcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURJQTtFQUNJLDBCQUFBO0FDREo7O0FESUE7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURFSTtFQUNJLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FDQVI7O0FERUk7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNBUjs7QURDUTtFQUNJLGtCQUFBO0FDQ1o7O0FEQVk7RUFDSSxlQUFBO0FDRWhCOztBREFZO0VBQ0ksZUFBQTtBQ0VoQjs7QURFSTtFQUNJLGFFaENvQjtBRGdDNUI7O0FES0k7RUFDSSx5QkFBQTtBQ0ZSOztBREtRO0VBQ0ksMEJBQUE7QUNIWiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuXHJcbi5waW57XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcclxufVxyXG5cclxuLnNpZGVuYXYtaGVhZGVye1xyXG4gICAgcGFkZGluZzogMCAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51c2VyLWJsb2Nre1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAgXHJcbiAgICB6LWluZGV4OiAxOyBcclxuICAgIG92ZXJmbG93OiBoaWRkZW47ICBcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogODBweDsgXHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgICAgICAgXHJcbiAgICB9XHJcbiAgICAudXNlci1pbmZvLXdyYXBwZXJ7XHJcbiAgICAgICAgcGFkZGluZzogMCA2cHg7XHJcbiAgICAgICAgbWFyZ2luOiA2cHggMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAudXNlci1pbmZve1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC5uYW1le1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnBvc2l0aW9ue1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuICAgICYuc2hvd3tcclxuICAgICAgICBoZWlnaHQ6ICRzaWRlbmF2LXVzZXItYmxvY2staGVpZ2h0O1xyXG4gICAgfSAgICAgIFxyXG59IFxyXG5cclxuLnNpZGVuYXYtbWVudS1vdXRlcntcclxuICAgIC5wc3tcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JHRvb2xiYXItaGVpZ2h0fSk7IFxyXG4gICAgfSAgICAgICBcclxuICAgICYudXNlci1ibG9jay1zaG93e1xyXG4gICAgICAgIC5wc3sgICAgICAgIFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JHRvb2xiYXItaGVpZ2h0ICsgJHNpZGVuYXYtdXNlci1ibG9jay1oZWlnaHR9KTsgXHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxufSIsIi5waW4ge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcbn1cblxuLnNpZGVuYXYtaGVhZGVyIHtcbiAgcGFkZGluZzogMCAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi51c2VyLWJsb2NrIHtcbiAgaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udXNlci1ibG9jayBpbWcge1xuICB3aWR0aDogODBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4udXNlci1ibG9jayAudXNlci1pbmZvLXdyYXBwZXIge1xuICBwYWRkaW5nOiAwIDZweDtcbiAgbWFyZ2luOiA2cHggMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4udXNlci1ibG9jayAudXNlci1pbmZvLXdyYXBwZXIgLnVzZXItaW5mbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi51c2VyLWJsb2NrIC51c2VyLWluZm8td3JhcHBlciAudXNlci1pbmZvIC5uYW1lIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLnVzZXItYmxvY2sgLnVzZXItaW5mby13cmFwcGVyIC51c2VyLWluZm8gLnBvc2l0aW9uIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLnVzZXItYmxvY2suc2hvdyB7XG4gIGhlaWdodDogMTU2cHg7XG59XG5cbi5zaWRlbmF2LW1lbnUtb3V0ZXIgLnBzIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1NnB4KTtcbn1cbi5zaWRlbmF2LW1lbnUtb3V0ZXIudXNlci1ibG9jay1zaG93IC5wcyB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMjEycHgpO1xufSIsIiRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcblxyXG4kdG9vbGJhci1oZWlnaHQ6IDU2cHg7IFxyXG4kaG9yaXpvbnRhbC1tZW51LWhlaWdodDogJHRvb2xiYXItaGVpZ2h0O1xyXG5cclxuJHNpZGVuYXYtd2lkdGg6IDI1MHB4O1xyXG4kc2lkZW5hdi11c2VyLWJsb2NrLWhlaWdodDogMTU2cHg7XHJcbiRtaW5pLXNpZGVuYXYtdXNlci1ibG9jay1oZWlnaHQ6IDcwcHg7XHJcblxyXG4kZmxleC1kaXN0YW5jZTogOHB4O1xyXG4kaW5uZXItc2lkZW5hdi1jb250ZW50LXBhZGRpbmc6ICRmbGV4LWRpc3RhbmNlO1xyXG5cclxuLy9Mb2dpbiwgUmVnaXN0ZXIsIEVycm9ycyBib3hcclxuJGJveC1oZWlnaHQ6IDE4NnB4O1xyXG4kYm94LXBvc2l0aW9uOiAzNHB4O1xyXG4kcmVnaXN0ZXItYm94LWhlaWdodDogMzAwcHg7XHJcblxyXG4kZm9vdGVyLWhlaWdodDogNTZweDsgIl19 */";
    /***/
  },

  /***/
  "./src/app/theme/components/sidenav/sidenav.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/theme/components/sidenav/sidenav.component.ts ***!
    \***************************************************************/

  /*! exports provided: SidenavComponent */

  /***/
  function srcAppThemeComponentsSidenavSidenavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidenavComponent", function () {
      return SidenavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../app.settings */
    "./src/app/app.settings.ts");
    /* harmony import */


    var _menu_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../menu/menu.service */
    "./src/app/theme/components/menu/menu.service.ts");

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

    var SidenavComponent =
    /*#__PURE__*/
    function () {
      function SidenavComponent(appSettings, menuService) {
        _classCallCheck(this, SidenavComponent);

        this.appSettings = appSettings;
        this.menuService = menuService;
        this.userImage = '../assets/img/users/user.jpg';
        this.settings = this.appSettings.settings;
      }

      _createClass(SidenavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.menuItems = this.menuService.getVerticalMenuItems();
        }
      }, {
        key: "closeSubMenus",
        value: function closeSubMenus() {
          var menu = document.getElementById("vertical-menu");

          if (menu) {
            for (var i = 0; i < menu.children[0].children.length; i++) {
              var child = menu.children[0].children[i];

              if (child) {
                if (child.children[0].classList.contains('expanded')) {
                  child.children[0].classList.remove('expanded');
                  child.children[1].classList.remove('show');
                }
              }
            }
          }
        }
      }]);

      return SidenavComponent;
    }();

    SidenavComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]
      }, {
        type: _menu_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]
      }];
    };

    SidenavComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-sidenav',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./sidenav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/sidenav/sidenav.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
      providers: [_menu_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]],
      styles: [__importDefault(__webpack_require__(
      /*! ./sidenav.component.scss */
      "./src/app/theme/components/sidenav/sidenav.component.scss")).default]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"], _menu_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]])], SidenavComponent);
    /***/
  },

  /***/
  "./src/app/theme/components/user-menu/user-menu.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/theme/components/user-menu/user-menu.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeComponentsUserMenuUserMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".user-menu .mat-toolbar, .user-menu .mat-toolbar-row {\n  height: 100px !important;\n}\n.user-menu .user-info {\n  width: 230px;\n}\n.user-menu .user-info p {\n  font-size: 16px;\n  line-height: 22px;\n  text-align: center;\n}\n.user-menu .mat-menu-item {\n  height: 36px;\n  line-height: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy91c2VyLW1lbnUvRDpcXDM3MFxcUHJvamVjdCBjb2RlXFxncmFkdXMvc3JjXFxhcHBcXHRoZW1lXFxjb21wb25lbnRzXFx1c2VyLW1lbnVcXHVzZXItbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy91c2VyLW1lbnUvdXNlci1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksd0JBQUE7QUNBUjtBREVJO0VBQ0ksWUFBQTtBQ0FSO0FEQ1E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NaO0FERUk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvdXNlci1tZW51L3VzZXItbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLW1lbnV7XHJcbiAgICAubWF0LXRvb2xiYXIsIC5tYXQtdG9vbGJhci1yb3d7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnVzZXItaW5mb3tcclxuICAgICAgICB3aWR0aDogMjMwcHg7XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tYXQtbWVudS1pdGVte1xyXG4gICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgIH1cclxufSIsIi51c2VyLW1lbnUgLm1hdC10b29sYmFyLCAudXNlci1tZW51IC5tYXQtdG9vbGJhci1yb3cge1xuICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG59XG4udXNlci1tZW51IC51c2VyLWluZm8ge1xuICB3aWR0aDogMjMwcHg7XG59XG4udXNlci1tZW51IC51c2VyLWluZm8gcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi51c2VyLW1lbnUgLm1hdC1tZW51LWl0ZW0ge1xuICBoZWlnaHQ6IDM2cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/theme/components/user-menu/user-menu.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/theme/components/user-menu/user-menu.component.ts ***!
    \*******************************************************************/

  /*! exports provided: UserMenuComponent */

  /***/
  function srcAppThemeComponentsUserMenuUserMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserMenuComponent", function () {
      return UserMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

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

    var UserMenuComponent =
    /*#__PURE__*/
    function () {
      function UserMenuComponent() {
        _classCallCheck(this, UserMenuComponent);

        this.userImage = '../assets/img/users/user.jpg';
      }

      _createClass(UserMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserMenuComponent;
    }();

    UserMenuComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-user-menu',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./user-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/user-menu/user-menu.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
      styles: [__importDefault(__webpack_require__(
      /*! ./user-menu.component.scss */
      "./src/app/theme/components/user-menu/user-menu.component.scss")).default]
    }), __metadata("design:paramtypes", [])], UserMenuComponent);
    /***/
  },

  /***/
  "./src/app/theme/pipes/pagination/pagination.pipe.ts":
  /*!***********************************************************!*\
    !*** ./src/app/theme/pipes/pagination/pagination.pipe.ts ***!
    \***********************************************************/

  /*! exports provided: PaginationPipe */

  /***/
  function srcAppThemePipesPaginationPaginationPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginationPipe", function () {
      return PaginationPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

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

    var PaginationPipe =
    /*#__PURE__*/
    function () {
      function PaginationPipe() {
        _classCallCheck(this, PaginationPipe);
      }

      _createClass(PaginationPipe, [{
        key: "transform",
        value: function transform(data, args) {
          if (!args) {
            args = {
              pageIndex: 0,
              pageSize: 6,
              length: data.length
            };
          }

          return this.paginate(data, args.pageSize, args.pageIndex);
        }
      }, {
        key: "paginate",
        value: function paginate(array, page_size, page_number) {
          return array.slice(page_number * page_size, (page_number + 1) * page_size);
        }
      }]);

      return PaginationPipe;
    }();

    PaginationPipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
      name: 'pagination'
    })], PaginationPipe);
    /***/
  },

  /***/
  "./src/app/theme/pipes/pipes.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/theme/pipes/pipes.module.ts ***!
    \*********************************************/

  /*! exports provided: PipesModule */

  /***/
  function srcAppThemePipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
      return PipesModule;
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


    var _pagination_pagination_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pagination/pagination.pipe */
    "./src/app/theme/pipes/pagination/pagination.pipe.ts");
    /* harmony import */


    var _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profilePicture/profilePicture.pipe */
    "./src/app/theme/pipes/profilePicture/profilePicture.pipe.ts");
    /* harmony import */


    var _search_chat_person_search_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./search/chat-person-search.pipe */
    "./src/app/theme/pipes/search/chat-person-search.pipe.ts");
    /* harmony import */


    var _search_user_search_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./search/user-search.pipe */
    "./src/app/theme/pipes/search/user-search.pipe.ts");
    /* harmony import */


    var _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./truncate/truncate.pipe */
    "./src/app/theme/pipes/truncate/truncate.pipe.ts");
    /* harmony import */


    var _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./search/mail-search.pipe */
    "./src/app/theme/pipes/search/mail-search.pipe.ts");

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

    var PipesModule = function PipesModule() {
      _classCallCheck(this, PipesModule);
    };

    PipesModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
      declarations: [_pagination_pagination_pipe__WEBPACK_IMPORTED_MODULE_2__["PaginationPipe"], _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_3__["ProfilePicturePipe"], _search_chat_person_search_pipe__WEBPACK_IMPORTED_MODULE_4__["ChatPersonSearchPipe"], _search_user_search_pipe__WEBPACK_IMPORTED_MODULE_5__["UserSearchPipe"], _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_6__["TruncatePipe"], _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_7__["MailSearchPipe"]],
      exports: [_pagination_pagination_pipe__WEBPACK_IMPORTED_MODULE_2__["PaginationPipe"], _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_3__["ProfilePicturePipe"], _search_chat_person_search_pipe__WEBPACK_IMPORTED_MODULE_4__["ChatPersonSearchPipe"], _search_user_search_pipe__WEBPACK_IMPORTED_MODULE_5__["UserSearchPipe"], _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_6__["TruncatePipe"], _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_7__["MailSearchPipe"]]
    })], PipesModule);
    /***/
  },

  /***/
  "./src/app/theme/pipes/profilePicture/profilePicture.pipe.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/theme/pipes/profilePicture/profilePicture.pipe.ts ***!
    \*******************************************************************/

  /*! exports provided: ProfilePicturePipe */

  /***/
  function srcAppThemePipesProfilePictureProfilePicturePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePicturePipe", function () {
      return ProfilePicturePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

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

    var ProfilePicturePipe =
    /*#__PURE__*/
    function () {
      function ProfilePicturePipe() {
        _classCallCheck(this, ProfilePicturePipe);
      }

      _createClass(ProfilePicturePipe, [{
        key: "transform",
        value: function transform(input) {
          var ext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'jpg';
          return '../assets/img/profile/' + input + '.' + ext;
        }
      }]);

      return ProfilePicturePipe;
    }();

    ProfilePicturePipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
      name: 'profilePicture'
    })], ProfilePicturePipe);
    /***/
  },

  /***/
  "./src/app/theme/pipes/search/chat-person-search.pipe.ts":
  /*!***************************************************************!*\
    !*** ./src/app/theme/pipes/search/chat-person-search.pipe.ts ***!
    \***************************************************************/

  /*! exports provided: ChatPersonSearchPipe */

  /***/
  function srcAppThemePipesSearchChatPersonSearchPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatPersonSearchPipe", function () {
      return ChatPersonSearchPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

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

    var ChatPersonSearchPipe =
    /*#__PURE__*/
    function () {
      function ChatPersonSearchPipe() {
        _classCallCheck(this, ChatPersonSearchPipe);
      }

      _createClass(ChatPersonSearchPipe, [{
        key: "transform",
        value: function transform(value, args) {
          var searchText = new RegExp(args, 'ig');

          if (value) {
            return value.filter(function (message) {
              if (message.author) {
                return message.author.search(searchText) !== -1;
              }
            });
          }
        }
      }]);

      return ChatPersonSearchPipe;
    }();

    ChatPersonSearchPipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
      name: 'ChatPersonSearchPipe'
    })], ChatPersonSearchPipe);
    /***/
  },

  /***/
  "./src/app/theme/pipes/search/mail-search.pipe.ts":
  /*!********************************************************!*\
    !*** ./src/app/theme/pipes/search/mail-search.pipe.ts ***!
    \********************************************************/

  /*! exports provided: MailSearchPipe */

  /***/
  function srcAppThemePipesSearchMailSearchPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MailSearchPipe", function () {
      return MailSearchPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

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

    var MailSearchPipe =
    /*#__PURE__*/
    function () {
      function MailSearchPipe() {
        _classCallCheck(this, MailSearchPipe);
      }

      _createClass(MailSearchPipe, [{
        key: "transform",
        value: function transform(value, args) {
          var searchText = new RegExp(args, 'ig');

          if (value) {
            return value.filter(function (mail) {
              if (mail.sender || mail.subject) {
                if (mail.sender.search(searchText) !== -1 || mail.subject.search(searchText) !== -1) {
                  return true;
                }
              }
            });
          }
        }
      }]);

      return MailSearchPipe;
    }();

    MailSearchPipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
      name: 'MailSearch'
    })], MailSearchPipe);
    /***/
  },

  /***/
  "./src/app/theme/pipes/search/user-search.pipe.ts":
  /*!********************************************************!*\
    !*** ./src/app/theme/pipes/search/user-search.pipe.ts ***!
    \********************************************************/

  /*! exports provided: UserSearchPipe */

  /***/
  function srcAppThemePipesSearchUserSearchPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserSearchPipe", function () {
      return UserSearchPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

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

    var UserSearchPipe =
    /*#__PURE__*/
    function () {
      function UserSearchPipe() {
        _classCallCheck(this, UserSearchPipe);
      }

      _createClass(UserSearchPipe, [{
        key: "transform",
        value: function transform(value, args) {
          var searchText = new RegExp(args, 'ig');

          if (value) {
            return value.filter(function (user) {
              if (user.profile.name) {
                return user.profile.name.search(searchText) !== -1;
              } else {
                return user.username.search(searchText) !== -1;
              }
            });
          }
        }
      }]);

      return UserSearchPipe;
    }();

    UserSearchPipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
      name: 'UserSearchPipe',
      pure: false
    })], UserSearchPipe);
    /***/
  },

  /***/
  "./src/app/theme/pipes/truncate/truncate.pipe.ts":
  /*!*******************************************************!*\
    !*** ./src/app/theme/pipes/truncate/truncate.pipe.ts ***!
    \*******************************************************/

  /*! exports provided: TruncatePipe */

  /***/
  function srcAppThemePipesTruncateTruncatePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TruncatePipe", function () {
      return TruncatePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

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

    var TruncatePipe =
    /*#__PURE__*/
    function () {
      function TruncatePipe() {
        _classCallCheck(this, TruncatePipe);
      }

      _createClass(TruncatePipe, [{
        key: "transform",
        value: function transform(value, args) {
          var limit = args > 0 ? parseInt(args) : 10;
          return value.length > limit ? value.substring(0, limit) + '...' : value;
        }
      }]);

      return TruncatePipe;
    }();

    TruncatePipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
      name: 'truncate'
    })], TruncatePipe);
    /***/
  },

  /***/
  "./src/app/theme/utils/custom-overlay-container.ts":
  /*!*********************************************************!*\
    !*** ./src/app/theme/utils/custom-overlay-container.ts ***!
    \*********************************************************/

  /*! exports provided: CustomOverlayContainer */

  /***/
  function srcAppThemeUtilsCustomOverlayContainerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomOverlayContainer", function () {
      return CustomOverlayContainer;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");

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

    var CustomOverlayContainer =
    /*#__PURE__*/
    function (_angular_cdk_overlay_) {
      _inherits(CustomOverlayContainer, _angular_cdk_overlay_);

      var _super = _createSuper(CustomOverlayContainer);

      function CustomOverlayContainer() {
        _classCallCheck(this, CustomOverlayContainer);

        return _super.apply(this, arguments);
      }

      _createClass(CustomOverlayContainer, [{
        key: "_createContainer",
        value: function _createContainer() {
          var container = document.createElement('div');
          container.classList.add('cdk-overlay-container');
          document.getElementById('app').appendChild(container);
          this._containerElement = container;
        }
      }]);

      return CustomOverlayContainer;
    }(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayContainer"]);

    CustomOverlayContainer = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], CustomOverlayContainer);
    /***/
  },

  /***/
  "./src/app/vehicle-service/vehicle-service.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/vehicle-service/vehicle-service.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVehicleServiceVehicleServiceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGUtc2VydmljZS92ZWhpY2xlLXNlcnZpY2UuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/vehicle-service/vehicle-service.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/vehicle-service/vehicle-service.component.ts ***!
    \**************************************************************/

  /*! exports provided: VehicleServiceComponent */

  /***/
  function srcAppVehicleServiceVehicleServiceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VehicleServiceComponent", function () {
      return VehicleServiceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app.settings */
    "./src/app/app.settings.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _Models_VehicleService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Models/VehicleService */
    "./src/app/Models/VehicleService.ts");

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

    var VehicleServiceComponent =
    /*#__PURE__*/
    function () {
      function VehicleServiceComponent(appSettings) {
        _classCallCheck(this, VehicleServiceComponent);

        this.appSettings = appSettings;
        this.showtable = true;
        this.displayedColumns = ['Vehicle_Service_ID', 'Vehicle_ID', 'Vehicle_Service_Milage', 'Vehicle_Service_Start_Date', 'Vehicle_Service_End_Date', 'Invoice', 'Actions'];
        this.show = false;
        this.showAdd = false;
        this.data = [];
        this.providers = ['Toyota Service Shop', 'Nissan Service Shop', 'Mitsubishi Service Shop'];
        this.types = ["Bakkie", "Tractor", "Car"];
        this.settings = this.appSettings.settings;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.data);
      }

      _createClass(VehicleServiceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.AdminPriv = localStorage.getItem("PrivelageLevel");
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
        }
      }, {
        key: "changeform",
        value: function changeform() {
          if (this.show == false) {
            this.show = true;
            this.showAdd = false;
            this.showtable = false;
          }
        }
      }, {
        key: "getVehicleServiceDetail",
        value: function getVehicleServiceDetail(Id) {
          this.VehicleServEdit = new _Models_VehicleService__WEBPACK_IMPORTED_MODULE_4__["VehicleService"]();
          this.VehicleServEdit.Vehicle_Service_Milage = 25000;
          this.VehicleServEdit.Vehicle_Service_Description = "Description";
          this.VehicleServEdit.Vehicle_Service_Start_Date = "15 June";
          this.VehicleServEdit.Vehicle_Service_End_Date = "22 June";
          this.VehicleServEdit.VSD = "VSD.pdf";
          this.providersSelect = this.VehicleServEdit.Providers;
          this.selectedValue = this.VehicleServEdit.Vehicle_Type;
          this.changeform();
        }
      }, {
        key: "addVehicleService",
        value: function addVehicleService() {
          if (this.show == true) {
            this.show = false;
          }

          this.VehicleServAdd = new _Models_VehicleService__WEBPACK_IMPORTED_MODULE_4__["VehicleService"]();
          this.showAdd = true;
          this.showtable = false;
        }
      }, {
        key: "putVehicleService",
        value: function putVehicleService() {
          alert("Done");
        }
      }, {
        key: "deleteVehicleService",
        value: function deleteVehicleService() {
          if (confirm("Are you sure to delete " + name)) {
            console.log("Implement delete functionality here");
          }
        }
      }, {
        key: "showTable",
        value: function showTable() {
          this.showtable = true;
          this.showAdd = false;
          this.show = false;
        }
      }, {
        key: "Download",
        value: function Download() {}
      }]);

      return VehicleServiceComponent;
    }();

    VehicleServiceComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]), __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])], VehicleServiceComponent.prototype, "paginator", void 0);

    VehicleServiceComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-vehicle-service',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./vehicle-service.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle-service/vehicle-service.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./vehicle-service.component.scss */
      "./src/app/vehicle-service/vehicle-service.component.scss")).default]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]])], VehicleServiceComponent);
    /***/
  },

  /***/
  "./src/app/vehicle-types/vehicle-types.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/vehicle-types/vehicle-types.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVehicleTypesVehicleTypesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGUtdHlwZXMvdmVoaWNsZS10eXBlcy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/vehicle-types/vehicle-types.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/vehicle-types/vehicle-types.component.ts ***!
    \**********************************************************/

  /*! exports provided: VehicleTypesComponent */

  /***/
  function srcAppVehicleTypesVehicleTypesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VehicleTypesComponent", function () {
      return VehicleTypesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

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

    var VehicleTypesComponent =
    /*#__PURE__*/
    function () {
      function VehicleTypesComponent() {
        _classCallCheck(this, VehicleTypesComponent);
      }

      _createClass(VehicleTypesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VehicleTypesComponent;
    }();

    VehicleTypesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-vehicle-types',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./vehicle-types.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle-types/vehicle-types.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./vehicle-types.component.scss */
      "./src/app/vehicle-types/vehicle-types.component.scss")).default]
    }), __metadata("design:paramtypes", [])], VehicleTypesComponent);
    /***/
  },

  /***/
  "./src/app/vehicle/vehicle.component.scss":
  /*!************************************************!*\
    !*** ./src/app/vehicle/vehicle.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVehicleVehicleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-column-is_Active {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  -webkit-box-flex: 0 !important;\n          flex: 0 0 5% !important;\n  width: 28% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVoaWNsZS9EOlxcMzcwXFxQcm9qZWN0IGNvZGVcXGdyYWR1cy9zcmNcXGFwcFxcdmVoaWNsZVxcdmVoaWNsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmVoaWNsZS92ZWhpY2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO1VBQUEsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFFQSxzQkFBQTtFQUVBLGlCQUFBO0VBRUEscUJBQUE7RUFDQSxhQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC92ZWhpY2xlL3ZlaGljbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNvbHVtbi1pc19BY3RpdmUge1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCA1JSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDI4JSAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICBcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgXHJcbiAgICAtbXMtaHlwaGVuczogYXV0bztcclxuICAgIC1tb3otaHlwaGVuczogYXV0bztcclxuICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuICAgIGh5cGhlbnM6IGF1dG87XHJcbiAgfSIsIi5tYXQtY29sdW1uLWlzX0FjdGl2ZSB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgZmxleDogMCAwIDUlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyOCUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAtbXMtaHlwaGVuczogYXV0bztcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gIGh5cGhlbnM6IGF1dG87XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/vehicle/vehicle.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/vehicle/vehicle.component.ts ***!
    \**********************************************/

  /*! exports provided: VehicleComponent */

  /***/
  function srcAppVehicleVehicleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VehicleComponent", function () {
      return VehicleComponent;
    });
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../app.settings */
    "./src/app/app.settings.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _Models_Vehicles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Models/Vehicles */
    "./src/app/Models/Vehicles.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

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

    var VehicleComponent =
    /*#__PURE__*/
    function () {
      function VehicleComponent(appSettings, router) {
        _classCallCheck(this, VehicleComponent);

        this.appSettings = appSettings;
        this.router = router;
        this.displayedColumns = ['Vehicle_ID', 'Vehicle_Type_Description', 'Model_Description', 'Section_Name', 'Vehicle_Mileage_Current', 'Vehicle_Registration_Number', 'is_Active', 'Actions'];
        this.show = false;
        this.showAdd = false;
        this.data = [{
          Vehicle_ID: "1",
          Vehicle_Type_Description: "Car",
          Make_Description: 'Toyota',
          Model_Description: "Hilux",
          Section_Name: "Dam 2",
          Vehicle_Mileage_Current: '1234556',
          Vehicle_Registration_Number: 'YTD819GP',
          is_Active: 'Yes'
        }, {
          Vehicle_ID: "2",
          Vehicle_Type_Description: "Bakkie",
          Make_Description: 'Toyota',
          Model_Description: "Hilux",
          Section_Name: "Dam 2",
          Vehicle_Mileage_Current: '1234556',
          Vehicle_Registration_Number: 'YTD819GP',
          is_Active: 'Yes'
        }, {
          Vehicle_ID: "3",
          Vehicle_Type_Description: "Bakkie",
          Make_Description: 'Toyota',
          Model_Description: "Hilux",
          Section_Name: "Dam 2",
          Vehicle_Mileage_Current: '1234556',
          Vehicle_Registration_Number: 'YTD819GP',
          is_Active: 'Yes'
        }, {
          Vehicle_ID: "4",
          Vehicle_Type_Description: "Bakkie",
          Make_Description: 'Toyota',
          Model_Description: "Hilux",
          Section_Name: "Dam 2",
          Vehicle_Mileage_Current: '1234556',
          Vehicle_Registration_Number: 'YTD819GP',
          is_Active: 'Yes'
        }, {
          Vehicle_ID: "5",
          Vehicle_Type_Description: "Bakkie",
          Make_Description: 'Toyota',
          Model_Description: "Hilux",
          Section_Name: "Dam 2",
          Vehicle_Mileage_Current: '1234556',
          Vehicle_Registration_Number: 'YTD819GP',
          is_Active: 'Yes'
        }, {
          Vehicle_ID: "6",
          Vehicle_Type_Description: "Bakkie",
          Make_Description: 'Toyota',
          Model_Description: "Hilux",
          Section_Name: "Dam 2",
          Vehicle_Mileage_Current: '1234556',
          Vehicle_Registration_Number: 'YTD819GP',
          is_Active: 'Yes'
        }, {
          Vehicle_ID: "7",
          Vehicle_Type_Description: "Bakkie",
          Make_Description: 'Toyota',
          Model_Description: "Hilux",
          Section_Name: "Dam 2",
          Vehicle_Mileage_Current: '1234556',
          Vehicle_Registration_Number: 'YTD819GP',
          is_Active: 'Yes'
        }];
        this.types = ["Bakkie", "Tractor", "Car"];
        this.infrastructures = ["Building1", "Building2"];
        this.makes = ["Ford", "Toyota"];
        this.sections = ["Veld 1", "Veld 2"];
        this.models = ["Hilux", "Patrol"];
        this.showtable = true;
        this.settings = this.appSettings.settings;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.data);
      }

      _createClass(VehicleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.AdminPriv = localStorage.getItem("PrivelageLevel");
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
        }
      }, {
        key: "changeform",
        value: function changeform() {
          if (this.show == false) {
            this.show = true;
            this.showAdd = false;
            this.showtable = false;
          }
        }
      }, {
        key: "getVehicleDetail",
        value: function getVehicleDetail(Id) {
          //Implement function to pupulate edit field and populate vehicle edit\
          this.VehicleEdit = new _Models_Vehicles__WEBPACK_IMPORTED_MODULE_4__["Vehicles"]();
          this.VehicleEdit.Active = "True";
          this.VehicleEdit.Vehicle_Type = "Bakkie";
          this.VehicleEdit.Infrastructure = "Building1";
          this.VehicleEdit.Make = "Toyota";
          this.VehicleEdit.Model = "Hilux";
          this.VehicleEdit.Section = "Veld 2";
          this.VehicleEdit.Year = "1998";
          this.VehicleEdit.Colour = "Silver";
          this.VehicleEdit.StartMileage = "102000";
          this.VehicleEdit.CurrentMileage = "11525222";
          this.VehicleEdit.ServiceIntervals = "11000";
          this.VehicleEdit.LastServiceKM = "15522522";
          this.VehicleEdit.Registration = "Ytd819GP";
          this.VehicleEdit.DateofPurchase = "01/02/1998";
          this.VehicleEdit.Active = "True";
          this.selectedValue = this.VehicleEdit.Vehicle_Type;
          this.ModelSelect = this.VehicleEdit.Model;
          this.MakeSelect = this.VehicleEdit.Make;
          this.SectionSelect = this.VehicleEdit.Section;
          this.InfrastructureSelect = this.VehicleEdit.Infrastructure;
          this.changeform();
        }
      }, {
        key: "AddVehicle",
        value: function AddVehicle() {
          if (this.show == true) {
            this.show = false;
          }

          this.VehicleAdd = new _Models_Vehicles__WEBPACK_IMPORTED_MODULE_4__["Vehicles"]();
          this.showAdd = true;
          this.showtable = false;
        }
      }, {
        key: "PutVehicle",
        value: function PutVehicle() {
          alert("Done");
        }
      }, {
        key: "deleteVehicle",
        value: function deleteVehicle() {
          if (confirm("Are you sure to delete " + name)) {
            console.log("Implement delete functionality here");
          }
        }
      }, {
        key: "showTable",
        value: function showTable() {
          this.showtable = true;
          this.showAdd = false;
          this.show = false;
        }
      }, {
        key: "Download",
        value: function Download() {}
      }, {
        key: "LoadTypes",
        value: function LoadTypes() {
          this.router.navigateByUrl("veTypes");
        }
      }]);

      return VehicleComponent;
    }();

    VehicleComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]), __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])], VehicleComponent.prototype, "paginator", void 0);

    VehicleComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-vehicle',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./vehicle.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle/vehicle.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./vehicle.component.scss */
      "./src/app/vehicle/vehicle.component.scss")).default]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], VehicleComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\370\Project code\gradus\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
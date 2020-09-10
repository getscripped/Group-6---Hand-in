function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 style=\"text-align: center; background-color: rgb(87, 84, 84);\">About</h1>\r\n\r\n<mat-card>\r\n<mat-card  class=\"block\" style=\"width: 60%; margin: 10px auto;\">\r\n    <mat-card-header>\r\n        <div mat-card-avatar class=\"example-header-image\"></div>\r\n        <mat-card-title style=\"color: green;\"></mat-card-title>\r\n        <mat-card-subtitle></mat-card-subtitle>\r\n      </mat-card-header>\r\n      <mat-card-content style=\"justify-content: center\">\r\n        <p>\r\n        Agrilog is a new revoutionary system dedicated to help farmers spend more time with the things that matters, we aim to provide a plateform dedicated to make farm management easier for every day to day task. The system aims to replace the well known \"Black book\" found in every farmers car.\r\n        The system is asimple to use platform making it possible to keep track of tasks, vehicles, staff, equipment, farm sections, faults , maintenance and the general upkeep of the farm.\r\n        </p>\r\n        <br/>\r\n        <img src=\"../../assets/img/crop.jpg\"/>\r\n      </mat-card-content>\r\n</mat-card>\r\n\r\n\r\n\r\n</mat-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/active-list/active-list.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/active-list/active-list.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppActiveListActiveListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Active List</h1>\r\n<button mat-raised-button color=\"primary\" (click) = \"Download()\" class=\"m-1\" (click)= \"back()\">Download List</button>\r\n&nbsp;\r\n&nbsp;\r\n<button mat-raised-button color=\"primary\" (click) = \"Cancel()\" class=\"m-1\" (click)= \"back()\">Cancel</button>\r\n";
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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/audit-log/audit-log.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/audit-log/audit-log.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuditLogAuditLogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Generate Audit Log</h1>\r\n\r\n<mat-form-field appearance=\"fill\">\r\n    <mat-label>Choose a Start Date</mat-label>\r\n    <input matInput [matDatepicker]=\"picker\">\r\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n    <mat-datepicker #picker></mat-datepicker>\r\n  </mat-form-field>\r\n  <mat-form-field appearance=\"fill\">\r\n    <mat-label>Choose an End Date</mat-label>\r\n    <input matInput [matDatepicker]=\"picker\">\r\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n    <mat-datepicker #picker></mat-datepicker>\r\n  </mat-form-field>\r\n\r\n\r\n<button mat-raised-button color=\"primary\" class=\"m-1\">Submit</button>\r\n&nbsp;\r\n&nbsp;\r\n<button mat-raised-button color=\"primary\" class=\"m-1\" (click)= \"back()\">Cancel</button>\r\n&nbsp;\r\n&nbsp;\r\n<button mat-raised-button color=\"primary\" class=\"m-1\" disabled>Download</button>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/email-sent/email-sent.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/email-sent/email-sent.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEmailSentEmailSentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Email sent!</h1>\r\n\r\n<p>Please check your email for the link to change your password.</p>";
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


    __webpack_exports__["default"] = "<h1 style=\"text-align: center;\">Equipment Types</h1>\r\n<button mat-raised-button color=\"primary\" (click) = \"AddVehicleType()\" class=\"m-1\">Add New</button>\r\n\r\n<div fxLayout=\"column\">\r\n    <div class=\"flex-p\" > \r\n        <div fxLayout=\"column\" class=\"mat-elevation-z8\" >           \r\n            <mat-form-field class=\"p-1\">\r\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Type to filter all columns\">\r\n            </mat-form-field> \r\n        </div>\r\n        <mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">       \r\n            <ng-container matColumnDef=\"Type_ID\">\r\n                <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Equipment_Type_ID}} </mat-cell>\r\n            </ng-container>         \r\n            <ng-container matColumnDef=\"Type\">\r\n                <mat-header-cell *matHeaderCellDef> Type </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Equipment_Type_Description}} </mat-cell>\r\n            </ng-container>     \r\n\r\n            <ng-container matColumnDef=\"Actions\">\r\n                <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" >\r\n                    <button mat-fab class=\"m-1\"  style=\"color: green; background-color:rgb(51, 49, 49)\" (click) ='getTypeDetail(element.Equipment_Type_ID)'>\r\n                        <mat-icon>edit</mat-icon>\r\n                    </button>\r\n \r\n               </mat-cell>\r\n            </ng-container>\r\n\r\n            \r\n\r\n\r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>  \r\n        <mat-paginator #paginator [pageSize]=\"15\" [pageSizeOptions]=\"[15, 20]\"></mat-paginator>      \r\n    </div>\r\n</div>\r\n<br>\r\n\r\n<ng-container *ngIf=\"show\">\r\n<form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"putType()\">\r\n           \r\n           \r\n    \r\n            <mat-card>\r\n                <mat-card-header fxLayoutAlign=\"center\">                \r\n                   \r\n                </mat-card-header>\r\n                <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Type\" [(ngModel)]=\"TypeEdit.Equipment_Type_Description\"   name=\"PurchMileage\" required>\r\n                    </mat-form-field>\r\n                                       \r\n                </mat-card-content>\r\n            </mat-card>\r\n        \r\n\r\n    <button mat-raised-button color=\"primary\" class=\"m-1\">Save Changes</button>\r\n  </form>\r\n  <button mat-raised-button color=\"primary\" class=\"m-1\" (click)=\"showTable()\">Back</button>\r\n</ng-container>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<ng-container *ngIf=\"showAdd\">\r\n    <form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"AddNewVehicle()\">\r\n            \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n               \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Type\"  name=\"PurchMileage\" required >\r\n                </mat-form-field>\r\n                                   \r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n       \r\n\r\n        \r\n        <button mat-raised-button color=\"primary\" class=\"m-1\">Save</button>\r\n      </form>\r\n      <button mat-raised-button color=\"primary\" class=\"m-1\" (click)=\"showTable()\">Back</button>\r\n    </ng-container>";
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


    __webpack_exports__["default"] = "\r\n<h1 style=\"text-align: center;\">Equipment</h1>\r\n<button mat-raised-button color=\"primary\" (click) = \"AddEquipment()\" class=\"m-1\">Add New </button>\r\n<button mat-raised-button color=\"primary\" (click) = \"LoadTypes()\" class=\"m-1\">Equipment Types</button>\r\n<button mat-raised-button color=\"primary\" (click) = \"Download()\" class=\"m-1\">Download List</button>\r\n\r\n<div fxLayout=\"column\">\r\n    <div class=\"flex-p\" *ngIf = \"showtable\"> \r\n        <div fxLayout=\"column\" class=\"mat-elevation-z8\">           \r\n            <mat-form-field class=\"p-1\">\r\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Type to filter all columns\">\r\n            </mat-form-field> \r\n        </div>\r\n        <mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">       \r\n            <ng-container matColumnDef=\"Equipment_ID\">\r\n                <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Equipment_ID}} </mat-cell>\r\n            </ng-container>         \r\n            <ng-container matColumnDef=\"Equipment_type_Description\">\r\n                <mat-header-cell *matHeaderCellDef> Type </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Equipment_type_Description}} </mat-cell>\r\n            </ng-container>     \r\n            <ng-container matColumnDef=\"Equipment_Description\">\r\n                <mat-header-cell *matHeaderCellDef> Description </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Equipment_Description}} </mat-cell>\r\n            </ng-container>        \r\n            <ng-container matColumnDef=\"Infrastructure_Name\">\r\n                <mat-header-cell *matHeaderCellDef> Infrastructure </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Infrastructure_Name}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Equipment_Condition\">\r\n                <mat-header-cell *matHeaderCellDef> Condition </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Equipment_Condition}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Equipment_Cost\">\r\n                <mat-header-cell *matHeaderCellDef> Cost </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Equipment_Cost}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Is_Active\">\r\n                <mat-header-cell *matHeaderCellDef> Active </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Is_Active}} </mat-cell>\r\n            </ng-container>\r\n\\\r\n            <ng-container matColumnDef=\"Actions\">\r\n                <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" >\r\n                    <button mat-fab class=\"m-1\"  style=\"color: green; background-color:rgb(51, 49, 49)\" (click) ='getEquipmentDetail(element.Equipment_ID)'>\r\n                        <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <button mat-fab class=\"m-2\"  style=\"color: red; background-color: rgb(51, 49, 49);\" (click)=\"deleteEquipment(element.Equipment_ID)\">\r\n                        <mat-icon>delete_forever</mat-icon>\r\n                    </button>\r\n\r\n               </mat-cell>\r\n            </ng-container>\r\n\r\n            \r\n\r\n\r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>  \r\n        <mat-paginator #paginator [pageSize]=\"15\" [pageSizeOptions]=\"[15, 20]\"></mat-paginator>      \r\n    </div>\r\n</div>\r\n<br>\r\n\r\n<ng-container *ngIf=\"show\">\r\n<form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"PutEquipment()\" [formGroup] = \"form\" [ngModelOptions]=\"{standalone: true}\">\r\n    <mat-card>\r\n        <mat-card-header>                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Equipment Type\" [(ngModel)]=\"equipmentEdit.Equipment_Type_ID\" name=\"Type\" formControlName = \"Type\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-option *ngFor=\"let type of types\" [value]=\"type.Equipment_Type_ID\">\r\n                        {{type.Equipment_Type_Description}}\r\n                    </mat-option>\r\n                </mat-select>\r\n                \r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header>                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Infrastructure location\" [(ngModel)]=\"equipmentEdit.Infrastructure_ID\" name=\"Infras\" formControlName = \"Infras\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-option *ngFor=\"let type of infrastructures\" [value]=\"type.Infrastructure_ID\">\r\n                        {{type.Infrastructure_Name}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n\r\n    <mat-card>\r\n        <mat-card-header>                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Condition\" [(ngModel)]=\"equipmentEdit.Equipment_Condition\" name=\"condition\" formControlName = \"Condition\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-option *ngFor=\"let type of condition\" [value]=\"type\">\r\n                        {{type}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Description\" [(ngModel)]=\"equipmentEdit.Equipment_Description\" name=\"Description\" required formControlName = \"Description\" [ngModelOptions]=\"{standalone: true}\">\r\n                <mat-error *ngIf = \"form.controls.Description.errors?.required\">Desccription is required</mat-error>\r\n                <mat-error *ngIf = \"form.controls.Description.errors?.maxlength\">Description cannot exceed 50 charachters</mat-error>\r\n            </mat-form-field>\r\n                               \r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Cost\" type=\"number\" [(ngModel)]=\"equipmentEdit.Equipment_Cost\" name=\"Cost\" required formControlName = \"Cost\" [ngModelOptions]=\"{standalone: true}\">\r\n                <mat-error *ngIf = \"form.controls.Cost.errors?.required\">Price is required</mat-error>\r\n                <mat-error *ngIf = \"form.controls.Cost.errors?.maxlength\">Price cannot exceed 10 charachters</mat-error>\r\n            </mat-form-field>\r\n                               \r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header>                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Active\" [(ngModel)]=\"equipmentEdit.Is_Active\" name=\"active\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-option *ngFor=\"let type of active\" [value]=\"type.Value\">\r\n                        {{type.Text}}\r\n                    </mat-option>\r\n                </mat-select>\r\n                \r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n\r\n    \r\n    <button mat-raised-button color=\"primary\" class=\"m-1\">Save Changes</button>\r\n  </form>\r\n  <button mat-raised-button color=\"primary\" class=\"m-1\" (click)=\"showTable()\">Back</button>\r\n</ng-container>\r\n\r\n\r\n\r\n\r\n\r\n<ng-container *ngIf=\"showAdd\">\r\n    <form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"addNewEquipment()\" [formGroup] = \"form\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n               \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Equipment Type\" [(ngModel)]=\"equipmentAdd.Equipment_Type_ID\" name=\"Type\" formControlName = \"Type\" [ngModelOptions]=\"{standalone: true}\">\r\n                        <mat-option *ngFor=\"let type of types\" [value]=\"type.Equipment_Type_ID\">\r\n                            {{type.Equipment_Type_Description}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                    \r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header>                \r\n               \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Infrastructure location\" [(ngModel)]=\"equipmentAdd.Infrastructure_ID\" name=\"Infras\" formControlName = \"Infras\" [ngModelOptions]=\"{standalone: true}\">\r\n                        <mat-option *ngFor=\"let type of infrastructures\" [value]=\"type.Infrastructure_ID\">\r\n                            {{type.Infrastructure_Name}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n    \r\n        <mat-card>\r\n            <mat-card-header>                \r\n               \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Condition\" [(ngModel)]=\"equipmentAdd.Equipment_Condition\" name=\"Condition\" formControlName = \"Condition\" [ngModelOptions]=\"{standalone: true}\">\r\n                        <mat-option *ngFor=\"let type of condition\" [value]=\"type\">\r\n                            {{type}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n               \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Description\" [(ngModel)]=\"equipmentAdd.Equipment_Description\" name=\"Description\" required formControlName = \"Description\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-error *ngIf = \"form.controls.Description.errors?.required\">Description is required</mat-error>\r\n                    <mat-error *ngIf = \"form.controls.Description.errors?.maxlength\">Description cannot exceed 50 charachters</mat-error>\r\n                </mat-form-field>\r\n                                   \r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n               \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Cost\" type=\"number\" [(ngModel)]=\"equipmentAdd.Equipment_Cost\" name=\"Cost\" required formControlName = \"Cost\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-error *ngIf = \"form.controls.Cost.errors?.required\">Price is required</mat-error>\r\n                    <mat-error *ngIf = \"form.controls.Cost.errors?.maxlength\">Price cannot exceed 10 charachters</mat-error>\r\n                </mat-form-field>\r\n                                   \r\n            </mat-card-content>\r\n        </mat-card>\r\n        <button mat-raised-button color=\"primary\" class=\"m-1\">Save</button>\r\n      </form>\r\n      <button mat-raised-button color=\"primary\" class=\"m-1\" (click)=\"showTable()\">Back</button>\r\n    </ng-container>\r\n\r\n\r\n    \r\n\r\n\r\n\r\n    ";
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


    __webpack_exports__["default"] = "<h1 style=\"text-align: center;\">Farm Health</h1>\r\n<button mat-raised-button color=\"primary\" (click) = \"Download(1)\" class=\"m-1\">Download Report</button>\r\n<button mat-raised-button color=\"primary\" (click) = \"Download(2)\" class=\"m-1\">Download History Report</button>\r\n\r\n\r\n<mat-card>\r\n    <mat-card-header  style=\"font-size: large;\">                \r\n       Overall score: April\r\n    </mat-card-header>\r\n    <mat-card-content  fxLayoutAlign=\"center\">\r\n        <ngx-gauge [type]=\"gaugeType\" \r\n        [value]=\"54\" \r\n        [label]=\"gaugeLabel\"  \r\n        [append]=\"gaugeAppendText\" [thick]=\"12\" foregroundColor = \"green\">\r\n</ngx-gauge>\r\n    </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card>\r\n    <mat-card-header  style=\"font-size: large;\">                \r\n       Individual Scores\r\n    </mat-card-header>\r\n    <mat-card-content  fxLayoutAlign=\"center\">\r\n        <ngx-gauge [type]=\"gaugeType\" \r\n        [value]=\"30\" \r\n        [label]=\"vehicleLabel\"  \r\n        [append]=\"gaugeAppendText\" [thick]=\"12\" foregroundColor = \"green\">\r\n</ngx-gauge>\r\n<ngx-gauge [type]=\"gaugeType\" \r\n        [value]=\"80\" \r\n        [label]=\"taskLabel\"  \r\n        [append]=\"gaugeAppendText\" [thick]=\"12\" foregroundColor = \"green\">\r\n</ngx-gauge>\r\n<ngx-gauge [type]=\"gaugeType\" \r\n        [value]=\"60\" \r\n        [label]=\"maintLabel\"  \r\n        [append]=\"gaugeAppendText\" [thick]=\"12\" foregroundColor = \"green\">\r\n</ngx-gauge>\r\n<ngx-gauge [type]=\"gaugeType\" \r\n        [value]=\"40\" \r\n        [label]=\"faultLabel\"  \r\n        [append]=\"gaugeAppendText\" [thick]=\"12\" foregroundColor = \"green\">\r\n</ngx-gauge>\r\n    </mat-card-content>\r\n</mat-card>\r\n<br>\r\n<br>\r\n\r\n<div> \r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">                \r\n            <mat-card-subtitle><h2>Long term scores</h2></mat-card-subtitle>\r\n        </mat-card-header>\r\n        <div class=\"w-100 h-300p\">\r\n            <ngx-charts-line-chart\r\n                [scheme]=\"colorScheme\"\r\n                [results]=\"multi\"\r\n                [gradient]=\"gradient\"\r\n                [xAxis]=\"showXAxis\"\r\n                [yAxis]=\"showYAxis\"\r\n                [legend]=\"showLegend\"\r\n                [showXAxisLabel]=\"showXAxisLabel\"\r\n                [showYAxisLabel]=\"showYAxisLabel\"\r\n                [xAxisLabel]=\"xAxisLabel\"\r\n                [yAxisLabel]=\"yAxisLabel\"\r\n                [autoScale]=\"autoScale\"\r\n            >\r\n            </ngx-charts-line-chart>                  \r\n        </div>\r\n    </mat-card>\r\n</div>\r\n\r\n\r\n<br>\r\n<mat-card>\r\n    <mat-card-header style=\"font-size: large;\">                \r\n       Suggestions to improve vehicle score:\r\n    </mat-card-header>\r\n    <br>\r\n    <mat-card-content  fxLayoutAlign=\"center\">\r\n        <ul>\r\n            <li>Service vehicles on or before scheduled times</li>\r\n            <li>Fix vehicle faults as soon as possible</li>\r\n            <li>Service vehicles on or before scheduled times</li>\r\n            <li>Fix vehicle faults as soon as possible</li>\r\n            <li>Service vehicles on or before scheduled times</li>\r\n            <li>Fix vehicle faults as soon as possible</li>\r\n            <li>Service vehicles on or before scheduled times</li>\r\n            <li>Fix vehicle faults as soon as possible</li>\r\n        </ul>\r\n    </mat-card-content>\r\n</mat-card>";
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


    __webpack_exports__["default"] = "<h1 style=\"text-align: center;\">Farms</h1>\r\n<button mat-raised-button color=\"primary\" (click) = \"addFarm()\" class=\"m-1\">Add New</button>\r\n<button mat-raised-button color=\"primary\" (click) = \"Foreman(1)\" class=\"m-1\">Foreman</button>\r\n\r\n<div fxLayout=\"column\">\r\n    <div class=\"flex-p\" *ngIf = \"showtable\"> \r\n        <div fxLayout=\"column\" class=\"mat-elevation-z8\" >           \r\n            <mat-form-field class=\"p-1\">\r\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Type to filter all columns\">\r\n            </mat-form-field> \r\n        </div>\r\n        <mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">       \r\n            <ng-container matColumnDef=\"Farm ID\">\r\n                <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Farm_ID}} </mat-cell>\r\n            </ng-container>         \r\n            <ng-container matColumnDef=\"Farm Type\">\r\n                <mat-header-cell *matHeaderCellDef> Type </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Farm_Type_Description}} </mat-cell>\r\n            </ng-container>    \r\n            <ng-container matColumnDef=\"Farm Name\">\r\n                <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Farm_Name}} </mat-cell>\r\n            </ng-container>        \r\n            <ng-container matColumnDef=\"Farm Size\">\r\n                <mat-header-cell *matHeaderCellDef> Size </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Farm_Size}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Farm Address\">\r\n                <mat-header-cell *matHeaderCellDef> Address</mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Farm_Address}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Province\">\r\n                <mat-header-cell *matHeaderCellDef> Province </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Province_Description}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Farm Email\">\r\n                <mat-header-cell *matHeaderCellDef> Email </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Farm_Email}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Farm Number\">\r\n                <mat-header-cell *matHeaderCellDef> Number </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Farm_ContactNumber}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Active\">\r\n                <mat-header-cell *matHeaderCellDef> Active </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Is_Active}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Actions\">\r\n                <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" >\r\n                    <button mat-fab class=\"m-1\" style=\"color: green; background-color:rgb(51, 49, 49)\" (click) ='getFarmInfo(element.Farm_ID)'>\r\n                        <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <button mat-fab class=\"m-1\" style=\"color: red; background-color: rgb(51, 49, 49);\" (click)=\"deleteFarm()\">\r\n                        <mat-icon>delete_forever</mat-icon>\r\n                    </button>\r\n               </mat-cell>\r\n            </ng-container>\r\n\r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>  \r\n        <mat-paginator #paginator [pageSize]=\"15\" [pageSizeOptions]=\"[15, 20]\"></mat-paginator>      \r\n    </div>\r\n</div>\r\n<br>\r\n\r\n<ng-container *ngIf=\"show\"> <!--to edit the farm on the system-->\r\n<form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"putFarm()\" [formGroup] = \"form\" [ngModelOptions]=\"{standalone: true}\">\r\n    <mat-card>\r\n        <mat-card-header>  \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n\r\n                <mat-select placeholder=\"Farm Type\" [(ngModel)]=\"FarmEdit.farmTypes\" name=\"Type\" formControlName =\"Types\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-option *ngFor=\"let type of farmtypes\" [value]=\"type.Farm_Type_ID\">\r\n                        {{type.Farm_Type_Description}}\r\n\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header>                \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Province\" [(ngModel)]=\"FarmEdit.Province_ID\" name=\"Province\" formControlName =\"Prov\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-option *ngFor=\"let province of provinces\" [value]=\"province.Province_ID\">\r\n                        {{province.Province_Description}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">   \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Size\" [(ngModel)]=\"FarmEdit.Farm_Size\" name=\"Size\" required formControlName =\"Size\" [ngModelOptions]=\"{standalone: true}\">\r\n                <mat-error *ngIf = \"form.controls.Size.errors?.required\">Size is required</mat-error>\r\n                <mat-error *ngIf = \"form.controls.Size.errors?.maxlength\">Size cannot exceed 30 characters</mat-error>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">     \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Address\" [(ngModel)]=\"FarmEdit.Farm_Address\" name=\"Address\" required formControlName =\"Address\" [ngModelOptions]=\"{standalone: true}\">\r\n                <mat-error *ngIf = \"form.controls.Address.errors?.required\">Address is required</mat-error>\r\n                <mat-error *ngIf = \"form.controls.Address.errors?.maxlength\">Address cannot exceed 150 characters</mat-error>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">  \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Name\" [(ngModel)]=\"FarmEdit.Farm_Name\" name=\"Name\" required formControlName =\"Name\" [ngModelOptions]=\"{standalone: true}\">\r\n                <mat-error *ngIf = \"form.controls.Name.errors?.required\">Name is required</mat-error>\r\n                <mat-error *ngIf = \"form.controls.Name.errors?.maxlength\">Name cannot exceed 100 characters</mat-error>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">   \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Email\" [(ngModel)]=\"FarmEdit.Farm_Email\" name=\"Email\" required formControlName =\"Email\" [ngModelOptions]=\"{standalone: true}\">\r\n                <mat-error *ngIf = \"form.controls.Email.errors?.required\">Email is required</mat-error>\r\n                <mat-error *ngIf = \"form.controls.Email.errors?.maxlength\">Email cannot exceed 150 characters</mat-error>\r\n            </mat-form-field>    \r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">                \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Number\" [(ngModel)]=\"FarmEdit.Farm_Number\" name=\"Number\" required formControlName =\"Number\" [ngModelOptions]=\"{standalone: true}\">\r\n                <mat-error *ngIf = \"form.controls.Number.errors?.required\">Number is required</mat-error>\r\n                <mat-error *ngIf = \"form.controls.Number.errors?.maxlength\">Number cannot exceed 10 characters</mat-error>\r\n            </mat-form-field>             \r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">                \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Status\" [(ngModel)]=\"FarmAdd.Is_Active\" name=\"Active\" required  [ngModelOptions]=\"{standalone: true}\">\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <button mat-raised-button color=\"primary\" class=\"m-1\">Save Changes</button>\r\n  </form>\r\n  <button mat-raised-button color=\"primary\" class=\"m-1\" (click)=\"showTable()\">Back</button>\r\n</ng-container>\r\n\r\n\r\n<ng-container *ngIf=\"showAdd\"> <!--to add a farm to the system-->\r\n    <form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"putFarm()\" [formGroup] =\"form\">\r\n        <mat-card>\r\n            <mat-card-header>        \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Farm Type\" [(ngModel)]=\"FarmAdd.Farm_Type_ID\" name=\"Type\" formControlName =\"Types\" [ngModelOptions]=\"{standalone: true}\">\r\n                        <option value=\"\" disabled selected>Choose</option>\r\n\r\n                        <mat-option *ngFor=\"let type of farmtypes\" [value]=\"type.Farm_Type_ID\">\r\n                            {{type.Farm_Type_Description}}\r\n\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n\r\n        <mat-card>\r\n            <mat-card-header>                \r\n               \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Province\" [(ngModel)]=\"FarmAdd.Province_ID\" name=\"Province\" required formControlName =\"Prov\" [ngModelOptions]=\"{standalone: true}\">\r\n                        <option value=\"\" disabled selected>Choose</option>\r\n                        <mat-option *ngFor=\"let province of provinces\" [value]=\"province.Province_ID\">\r\n                            {{province.Province_Description}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">    \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Number\" [(ngModel)]=\"FarmAdd.Farm_Number\" name=\"Number\" required formControlName =\"Number\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-error *ngIf = \"form.controls.Number.errors?.required\">Number is required</mat-error>\r\n                    <mat-error *ngIf = \"form.controls.Number.errors?.maxlength\">Number cannot exceed 10 characters</mat-error>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">  \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Email\" [(ngModel)]=\"FarmAdd.Farm_Email\" name=\"Email\" required formControlName =\"Email\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-error *ngIf = \"form.controls.Email.errors?.required\">Email is required</mat-error>\r\n                    <mat-error *ngIf = \"form.controls.Email.errors?.maxlength\">Email cannot exceed 150 characters</mat-error>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">    \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Name\" [(ngModel)]=\"FarmAdd.Farm_Name\" name=\"Name\" require formControlName =\"Name\" [ngModelOptions]=\"{standalone: true}\"d>\r\n                    <mat-error *ngIf = \"form.controls.Name.errors?.required\">Name is required</mat-error>\r\n                    <mat-error *ngIf = \"form.controls.Name.errors?.maxlength\">Name cannot exceed 100 characters</mat-error>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">       \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Size\" [(ngModel)]=\"FarmAdd.Farm_Size\" name=\"Size\" required formControlName =\"Size\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-error *ngIf = \"form.controls.Size.errors?.required\">Size is required</mat-error>\r\n                    <mat-error *ngIf = \"form.controls.Size.errors?.maxlength\">Size cannot exceed 30 characters</mat-error>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">       \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Address\" [(ngModel)]=\"FarmAdd.Farm_Address\" name=\"Address\" required formControlName =\"Address\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-error *ngIf = \"form.controls.Address.errors?.required\">Address is required</mat-error>\r\n                    <mat-error *ngIf = \"form.controls.Address.errors?.maxlength\">Address cannot exceed 150 characters</mat-error>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">   \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Status\" [(ngModel)]=\"FarmAdd.Is_Active\" name=\"Active\" required  [ngModelOptions]=\"{standalone: true}\">\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <button mat-raised-button color=\"primary\" class=\"m-1\">Save</button>\r\n      </form>\r\n      <button mat-raised-button color=\"primary\" class=\"m-1\" (click)=\"showTable()\">Back</button>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"showFAdd\"> <!--for the add foreman to farm form-->\r\n        <form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"putForeman()\" >\r\n            <h1>Add Foreman</h1>\r\n            <mat-card>\r\n                <mat-card-header fxLayoutAlign=\"center\">\r\n                </mat-card-header>\r\n                <mat-card-content>\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Foreman Email\" [(ngModel)]=\"FarmAdd.Foreman_Email\" name=\"ForemanEmail\" required formControlName =\"ForemanEmail\" [ngModelOptions]=\"{standalone: true}\">\r\n                    </mat-form-field>\r\n                </mat-card-content>\r\n            </mat-card>\r\n\r\n            <mat-card>\r\n                <mat-card-header fxLayoutAlign=\"center\">\r\n                </mat-card-header>\r\n                <mat-card-content>\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Foreman Name\" [(ngModel)]=\"FarmAdd.Foreman_Name\" name=\"ForemanName\" required formControlName =\"ForemanName\" [ngModelOptions]=\"{standalone: true}\">\r\n                    </mat-form-field>\r\n                </mat-card-content>\r\n            </mat-card>\r\n\r\n            <button mat-raised-button color=\"primary\" class=\"m-1\">Save</button>\r\n            <button mat-raised-button color=\"primary\" (click) = \"Foreman(3)\" class=\"m-1\">Cancel</button>\r\n        </form>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf= \"showF\"> <!--to display the foreman on the farm form-->\r\n        <h1>Foreman</h1>\r\n        <form g-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"addForeman()\" >\r\n            <mat-card>\r\n                <mat-card-header fxLayoutAlign=\"center\">\r\n                </mat-card-header>\r\n                <mat-card-content>\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Foreman Email\" [(ngModel)]=\"FarmAdd.Foreman_Email\" name=\"ForemanEmail\" required formControlName =\"ForemanEmail\" [ngModelOptions]=\"{standalone: true}\">\r\n                    </mat-form-field>\r\n                </mat-card-content>\r\n            </mat-card>\r\n\r\n            <mat-card>\r\n                <mat-card-header fxLayoutAlign=\"center\">\r\n                </mat-card-header>\r\n                <mat-card-content>\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Foreman Name\" [(ngModel)]=\"FarmAdd.Foreman_Name\" name=\"ForemanName\" required formControlName =\"ForemanName\" [ngModelOptions]=\"{standalone: true}\">\r\n                    </mat-form-field>\r\n                </mat-card-content>\r\n            </mat-card>\r\n\r\n\r\n            <button mat-raised-button (click) = \"Foreman(2)\" color=\"primary\" class=\"m-1\">Add</button>\r\n            <button mat-raised-button color=\"primary\" class=\"m-1\">Remove</button>\r\n        </form>\r\n        <!-- <button mat-raised-button color=\"primary\" class=\"m-1\" (click)=\"showTable()\">Back</button> -->\r\n    </ng-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/fault-log/fault-log.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fault-log/fault-log.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFaultLogFaultLogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 style=\"text-align: center;\">Fault Log</h1>\r\n\r\n<button mat-raised-button color=\"primary\" (click) = \"AddFault()\" class=\"m-1\">Add New</button>\r\n\r\n<div fxLayout=\"column\">\r\n    <div class=\"flex-p\"> \r\n        <div fxLayout=\"column\" class=\"mat-elevation-z8\">           \r\n            <mat-form-field class=\"p-1\">\r\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Type to filter all columns\">\r\n            </mat-form-field> \r\n        </div>\r\n        <mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">       \r\n            <ng-container matColumnDef=\"Fault_ID\">\r\n                <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Fault_ID}} </mat-cell>\r\n            </ng-container>         \r\n            <ng-container matColumnDef=\"Fault_Type_Description\">\r\n                <mat-header-cell *matHeaderCellDef> Type </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Fault_Type_Description}} </mat-cell>\r\n            </ng-container>     \r\n            <ng-container matColumnDef=\"Fault_Description\">\r\n                <mat-header-cell *matHeaderCellDef> Description </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Fault_Description}} </mat-cell>\r\n            </ng-container>        \r\n            <ng-container matColumnDef=\"Fault_Start_Date\">\r\n                <mat-header-cell *matHeaderCellDef> Start Date </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Fault_Start_Date}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Fault_End_Date\">\r\n                <mat-header-cell *matHeaderCellDef> End Date </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Fault_End_Date}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Importance_Description\">\r\n                <mat-header-cell *matHeaderCellDef> Importance </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Importance_Description}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Status_Description\">\r\n                <mat-header-cell *matHeaderCellDef> Status </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Status_Description}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Actions\">\r\n                <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" >\r\n                    <button mat-fab class=\"m-1\" style=\"color: green; background-color:rgb(51, 49, 49)\" (click) ='getFaultDetail(element.Fault_ID)'>\r\n                        <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <button mat-fab class=\"m-1\" style=\"color: red; background-color: rgb(51, 49, 49);\" (click)=\"deleteFault()\">\r\n                        <mat-icon>delete_forever</mat-icon>\r\n                    </button>\r\n               </mat-cell>\r\n            </ng-container>\r\n\r\n            \r\n\r\n\r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>  \r\n        <mat-paginator #paginator [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10]\"></mat-paginator>      \r\n    </div>\r\n</div>\r\n<br>\r\n\r\n<ng-container *ngIf=\"show\">\r\n<form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"PutFault()\">\r\n    <mat-card>\r\n        <mat-card-header>                \r\n           Fault Description\r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                    \r\n                        <input matInput placeholder=\"Description\"  name=\"Fault_Description\" required>\r\n                   \r\n                                       \r\n                </mat-card-content>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header>                \r\n           Start Date\r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-form-field appearance=\"fill\">\r\n                    <mat-label>Choose an Start Date</mat-label>\r\n                    <input matInput [matDatepicker]=\"picker\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n                  </mat-form-field>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header>                \r\n           End Date\r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-form-field appearance=\"fill\">\r\n                    <mat-label>Choose an End Date</mat-label>\r\n                    <input matInput [matDatepicker]=\"picker\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n                  </mat-form-field>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header>                \r\n           Importance\r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Model\" name=\"Importance\">\r\n                    <mat-option *ngFor=\"let type of importances\" [value]=\"type\">\r\n                        {{type}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header>                \r\n           Infrastructure\r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Infrastructure\"  name=\"Infrastructure\">\r\n                    <mat-option *ngFor=\"let type of infrastructures\" [value]=\"type\">\r\n                        {{type}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">                \r\n           Equipment\r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Equipment\"  name=\"Equipment\">\r\n                    <mat-option *ngFor=\"let type of equipments\" [value]=\"type\">\r\n                        {{type}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n                               \r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">                \r\n           Staff Member\r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Staff\" [(ngModel)]=\"StaffSelect\" name=\"Staff\">\r\n                    <mat-option *ngFor=\"let type of staffs\" [value]=\"type\">\r\n                        {{type}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n                               \r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    \r\n    <button mat-raised-button color=\"primary\" class=\"m-1\" (click)=\"back()\">Save</button>\r\n        &nbsp;\r\n        &nbsp;\r\n        <button mat-raised-button color=\"primary\" class=\"m-1\" (click)=\"back()\">Cancel</button>\r\n  </form>\r\n</ng-container>\r\n\r\n\r\n\r\n\r\n<ng-container *ngIf=\"showAdd\">\r\n    <form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"PutFault()\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n               Fault Type\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Fault Type\"  name=\"Type\" required>\r\n                        <option value=\"\" disabled selected>Choose</option>\r\n                        <mat-option *ngFor=\"let type of types\" [value]=\"type\">\r\n                            {{type}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header>                \r\n               Description\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Description\"  name=\"Fault_Description\" required>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header>                \r\n               Start Date\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <mat-form-field appearance=\"fill\">\r\n                        <mat-label>Choose an Start Date</mat-label>\r\n                        <input matInput [matDatepicker]=\"picker\">\r\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #picker></mat-datepicker>\r\n                      </mat-form-field>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header>                \r\n               End Date\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <mat-form-field appearance=\"fill\">\r\n                        <mat-label>Choose an End Date</mat-label>\r\n                        <input matInput [matDatepicker]=\"picker\">\r\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #picker></mat-datepicker>\r\n                      </mat-form-field>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n\r\n        <mat-card>\r\n            <mat-card-header>                \r\n               Importance\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Importance\"  name=\"Importance\" required>\r\n                        <option value=\"\" disabled selected>Choose</option>\r\n                        <mat-option *ngFor=\"let type of importances\" [value]=\"type\">\r\n                            {{type}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n        <mat-card>\r\n            <mat-card-header>                \r\n               Staff\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Staff\"  name=\"Staff\" required>\r\n                        <option value=\"\" disabled selected>Choose</option>\r\n                        <mat-option *ngFor=\"let type of staffs\" [value]=\"type\">\r\n                            {{type}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n\r\n        <mat-card>\r\n            <mat-card-header>                \r\n               Infrastructure\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Infrastructure\"  name=\"Infrastructure\" >\r\n                        <option value=\"\" disabled selected>Choose</option>\r\n                        <mat-option *ngFor=\"let type of infrastructures\" [value]=\"type\">\r\n                            {{type}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n        <mat-card>\r\n            <mat-card-header>                \r\n               Equipment\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Equipment\"  name=\"Equipment\">\r\n                        <option value=\"\" disabled selected>Choose</option>\r\n                        <mat-option *ngFor=\"let type of equipments\" [value]=\"type\">\r\n                            {{type}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n        \r\n        <mat-card>\r\n            <label for=\"myfile\">Select a file:</label>\r\n            <input type=\"file\" id=\"myfile\" name=\"myfile\">\r\n        </mat-card>\r\n\r\n        <button mat-raised-button color=\"primary\" class=\"m-1\" (click)=\"back()\">Save</button>\r\n        &nbsp;\r\n        &nbsp;\r\n        <button mat-raised-button color=\"primary\" class=\"m-1\" (click)=\"back()\">Cancel</button>\r\n      </form>\r\n    </ng-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/faultreport/faultreport.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faultreport/faultreport.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFaultreportFaultreportComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>faultreport works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/fm-main/fm-main.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fm-main/fm-main.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFmMainFmMainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Faults and Maintenance</h1>\r\n<br>\r\n<button mat-raised-button color=\"primary\" (click) = \"FMReport()\" class=\"m-1\">Generate Report</button>\r\n&nbsp;\r\n&nbsp;\r\n<button mat-raised-button color=\"primary\" (click) = \"ActiveList()\" class=\"m-1\">Generate Active List</button>\r\n\r\n<!-- <app-report></app-report>\r\n\r\n<app-active-list></app-active-list>\r\n\r\n<app-fault></app-fault>\r\n\r\n<app-maintenance></app-maintenance> -->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 style=\"text-align: center; background-color: rgb(87, 84, 84);\">Home</h1>\r\n\r\n<mat-card>\r\n      <mat-card-content>\r\n        <img src=\"../../assets/img/home.jpg\" style=\"width: 90%;\" />\r\n      </mat-card-content>\r\n\r\n</mat-card>\r\n\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/infrastructure/infrastructure.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/infrastructure/infrastructure.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInfrastructureInfrastructureComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Infrastructures</h1>\r\n<div *ngIf=\"hideTable\">\r\n<button mat-raised-button color=\"primary\" (click) = \"AddInfrastructure()\" class=\"m-1\">Add New</button>\r\n<button mat-raised-button color=\"primary\" (click) = \"GenerateReport()\" class=\"m-1\">Generate Infrastructure Report</button>\r\n\r\n<div fxLayout=\"column\">\r\n    <div class=\"flex-p\"> \r\n        <div fxLayout=\"column\" class=\"mat-elevation-z8\">           \r\n            <mat-form-field class=\"p-1\">\r\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Type to filter all columns\">\r\n            </mat-form-field> \r\n        </div>\r\n        <mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">       \r\n            <ng-container matColumnDef=\"Infrastructure_ID\">\r\n                <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Infrastructure_ID}} </mat-cell>\r\n            </ng-container> \r\n            <ng-container matColumnDef=\"Section_Name\">\r\n                <mat-header-cell *matHeaderCellDef> Section </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Section_Name}} </mat-cell>\r\n            </ng-container>        \r\n            <ng-container matColumnDef=\"Infrastructure_Type_Description\">\r\n                <mat-header-cell *matHeaderCellDef> Type </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Infrastructure_Type_Description}} </mat-cell>\r\n            </ng-container>     \r\n            <ng-container matColumnDef=\"Infrastructure_Name\">\r\n                <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Infrastructure_Name}} </mat-cell>\r\n            </ng-container>        \r\n            <ng-container matColumnDef=\"Infrastructure_Location\">\r\n                <mat-header-cell *matHeaderCellDef> Location </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Infrastructure_Location}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Infrastructure_Size\">\r\n                <mat-header-cell *matHeaderCellDef> Size </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Infrastructure_Size}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"is_Active\">\r\n                <mat-header-cell *matHeaderCellDef> Active </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.is_Active}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Actions\">\r\n                <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" >\r\n                    <button mat-fab class=\"m-1\" style=\"color: green; background-color:rgb(51, 49, 49)\" (click) ='getInfrastructureDetail(element.Infrastructure_ID)'>\r\n                        <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <button mat-fab class=\"m-1\" style=\"color: red; background-color: rgb(51, 49, 49);\" (click)=\"deleteInfrastructure()\">\r\n                        <mat-icon>delete_forever</mat-icon>\r\n                    </button>\r\n               </mat-cell>\r\n            </ng-container>\r\n\r\n            \r\n\r\n\r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>  \r\n        <mat-paginator #paginator [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10]\"></mat-paginator>      \r\n    </div>\r\n</div>\r\n</div>\r\n<br>\r\n\r\n<ng-container *ngIf=\"show\">\r\n    <h2>Edit Infrastructure</h2>\r\n<form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"PutInfrastructure()\">\r\n    <mat-card>\r\n        <mat-card-header>                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Section\" [(ngModel)]=\"SectionSelect\" name=\"Section\" required>\r\n                    <mat-option *ngFor=\"let type of sections\" [value]=\"type\">\r\n                        {{type}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n    \r\n    <mat-card>\r\n        <mat-card-header>                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Infrastructure Type\" [(ngModel)]=\"selectedValue\" name=\"Type\" required>\r\n                    <mat-option *ngFor=\"let type of types\" [value]=\"type\">\r\n                        {{type}}\r\n                    </mat-option>\r\n                </mat-select>\r\n                \r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Name\" [(ngModel)]=\"InfrastructureEdit.Infrastructure_Name\" name=\"Name\" required>\r\n            </mat-form-field>\r\n                               \r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Location\" [(ngModel)]=\"InfrastructureEdit.Infrastructure_Location\" name=\"Location\" required>\r\n            </mat-form-field>\r\n                               \r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Size\" [(ngModel)]=\"InfrastructureEdit.Infrastructure_Size\" name=\"Size\" required>\r\n            </mat-form-field>\r\n                               \r\n        </mat-card-content>\r\n    </mat-card>\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Active?\" [(ngModel)]=\"InfrastructureEdit.Active\" name=\"Currently Active\" required>\r\n            </mat-form-field>\r\n                               \r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    \r\n    <button mat-raised-button color=\"primary\" class=\"m-1\">Save Changes</button>\r\n  </form>\r\n  <button mat-raised-button color=\"m-1\" (click)=\"back()\">Back</button>\r\n</ng-container>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<ng-container *ngIf=\"showAdd\">\r\n    <h2>Add New Infrastructure</h2>\r\n    <form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"PutInfrastructure()\">\r\n        <mat-card>              \r\n        <mat-card-header>                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Section\" [(ngModel)]=\"InfrastructureAdd.SectionSelect\" name=\"Section\" required>\r\n                    <option value=\"\" disabled selected>Choose</option>\r\n                    <mat-option *ngFor=\"let type of sections\" [value]=\"type\">\r\n                        {{type}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n    \r\n    <mat-card>\r\n        <mat-card-header>                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Infrastructure Type\" [(ngModel)]=\"InfrastructureAdd.selectedValue\" name=\"Type\" required>\r\n                    <option value=\"\" disabled selected>Choose</option>\r\n                    <mat-option *ngFor=\"let type of types\" [value]=\"type\">\r\n                        {{type}}\r\n                    </mat-option>\r\n                </mat-select>\r\n                \r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Name\" [(ngModel)]=\"InfrastructureAdd.Infrastructure_Name\" name=\"Name\" required>\r\n            </mat-form-field>\r\n                               \r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Location\" [(ngModel)]=\"InfrastructureAdd.Infrastructure_Location\" name=\"Location\" required>\r\n            </mat-form-field>\r\n                               \r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Size - (square meters)\" [(ngModel)]=\"InfrastructureAdd.Infrastructure_Size\" name=\"Size\" required>\r\n            </mat-form-field>\r\n                               \r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <!-- <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Status\" [(ngModel)]=\"InfrastructureAdd.Active\" name=\"Currently Active\" required>\r\n            </mat-form-field>\r\n                               \r\n        </mat-card-content>\r\n    </mat-card> -->\r\n\r\n        <button mat-raised-button color=\"primary\" class=\"m-1\">Save</button>\r\n      </form>\r\n      <button mat-raised-button color=\"m-1\" (click)=\"back()\" class=\"m-1\">Back</button>\r\n    </ng-container>";
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


    __webpack_exports__["default"] = "<!-- <button mat-raised-button color=\"primary\" (click) = \"addInsurance()\" class=\"m-1\">Add New</button> -->\r\n\r\n<div fxLayout=\"column\">\r\n    <div class=\"flex-p\" *ngIf = \"showtable\"> \r\n        <div fxLayout=\"column\" class=\"mat-elevation-z8\" >           \r\n            <mat-form-field class=\"p-1\">\r\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Type to filter all columns\">\r\n            </mat-form-field> \r\n        </div>\r\n        <mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">       \r\n            <ng-container matColumnDef=\"IP_ID\">\r\n                <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.IP_ID}} </mat-cell>\r\n            </ng-container>         \r\n            <ng-container matColumnDef=\"IP_Name\">\r\n                <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.IP_Name}} </mat-cell>\r\n            </ng-container>     \r\n            <ng-container matColumnDef=\"IP_Reg_Number\">\r\n                <mat-header-cell *matHeaderCellDef> Registration Number </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.IP_Reg_Number}} </mat-cell>\r\n            </ng-container>        \r\n            <ng-container matColumnDef=\"IP_VAT_Number\">\r\n                <mat-header-cell *matHeaderCellDef> VAT Number </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.IP_VAT_Number}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"IP_Phone_Number\">\r\n                <mat-header-cell *matHeaderCellDef> Phone Number </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.IP_Phone_Number}} </mat-cell>\r\n            </ng-container>\r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>  \r\n        <mat-paginator #paginator [pageSize]=\"15\" [pageSizeOptions]=\"[15, 20]\"></mat-paginator>      \r\n    </div>\r\n</div>\r\n<br>\r\n\r\n<ng-container *ngIf=\"show\">\r\n<form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"putInsurance()\" [formGroup] = \"form\" [ngModelOptions]=\"{standalone: true}\">\r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">    \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Name\" [(ngModel)]=\"InsuranceEdit.IP_Name\" name=\"Name\" required formControlName =\"Name\" [ngModelOptions]=\"{standalone: true}\">\r\n                <mat-error *ngIf = \"form.controls.Name.errors?.required\">Insurance Provider Name is required</mat-error>\r\n                <mat-error *ngIf = \"form.controls.Name.errors?.maxlength\">Insurance Provider Name cannot exceed 50 charachters</mat-error>\r\n            </mat-form-field> \r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">        \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Reg_Num\" [(ngModel)]=\"InsuranceEdit.IP_Reg_Number\" name=\"Reg_Num\" required formControlName = \"RegNum\" [ngModelOptions]=\"{standalone: true}\">\r\n                <mat-error *ngIf = \"form.controls.RegNumber.errors?.required\">Registration Number is required</mat-error>\r\n                <mat-error *ngIf = \"form.controls.RegNumber.errors?.maxlength\">Registration Number cannot exceed 50 charachters</mat-error>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">        \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"VAT\" [(ngModel)]=\"InsuranceEdit.IP_VAT_Number\" name=\"VAT\" required formControlName = \"VAT\" [ngModelOptions]=\"{standalone: true}\">\r\n                <mat-error *ngIf = \"form.controls.VATNumber.errors?.required\">VAT Number is required</mat-error>\r\n                <mat-error *ngIf = \"form.controls.VATNumber.errors?.maxlength\">VAT Number cannot exceed 50 charachters</mat-error>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">    \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Phone_Num\" [(ngModel)]=\"InsuranceEdit.IP_Phone_Number\" name=\"Phone_Num\" required formControlName = \"PhoneNum\" [ngModelOptions]=\"{standalone: true}\">\r\n                <mat-error *ngIf = \"form.controls.PhoneNumber.errors?.required\">Phone Number is required</mat-error>\r\n                <mat-error *ngIf = \"form.controls.PhoneNumber.errors?.maxlength\">Phone Number cannot exceed 10 charachters</mat-error>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n    \r\n    <button mat-raised-button color=\"primary\" class=\"m-1\">Save Changes</button>\r\n  </form>\r\n  <button mat-raised-button color=\"primary\" class=\"m-1\" (click)=\"showTable()\">Back</button>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"showAdd\">\r\n    <form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"putInsurance()\" [formGroup] = \"form\" [ngModelOptions]=\"{standalone: true}\">\r\n    \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">    \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Name\" [(ngModel)]=\"InsuranceaAdd.IP_Name\" name=\"Name\" required formControlName = \"Name\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-error *ngIf = \"form.controls.Name.errors?.required\">Insurance Provider Name is required</mat-error>\r\n                    <mat-error *ngIf = \"form.controls.Name.errors?.maxlength\">Insurance Provider Name cannot exceed 50 charachters</mat-error>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">        \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Reg_num\" [(ngModel)]=\"InsuranceaAdd.IP_Reg_Number\" name=\"Reg_num\" required formControlName = \"RegNum\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-error *ngIf = \"form.controls.RegNumber.errors?.required\">Registration Number is required</mat-error>\r\n                    <mat-error *ngIf = \"form.controls.RegNumber.errors?.maxlength\">Registration Number cannot exceed 50 charachters</mat-error>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n               \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"VAT_num\" [(ngModel)]=\"InsuranceaAdd.IP_VAT_Number\" name=\"VAT_num\" required formControlName = \"VAT\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-error *ngIf = \"form.controls.VATNumber.errors?.required\">VAT Number  is required</mat-error>\r\n                    <mat-error *ngIf = \"form.controls.VATNumber.errors?.maxlength\">VAT Number cannot exceed 50 charachters</mat-error>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">     \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Phone\" [(ngModel)]=\"InsuranceaAdd.IP_Phone_Number\" name=\"Phone\" required formControlName = \"PhoneNum\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-error *ngIf = \"form.controls.PhoneNumber.errors?.required\">Phone Number is required</mat-error>\r\n                    <mat-error *ngIf = \"form.controls.PhoneNumber.errors?.maxlength\">Phone Number cannot exceed 10 charachters</mat-error>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <button mat-raised-button color=\"primary\" class=\"m-1\">Save</button>\r\n      </form>\r\n      <button mat-raised-button color=\"primary\" class=\"m-1\" (click)=\"showTable()\">Back</button>\r\n    </ng-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLogoutLogoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>logout works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/maintenance-log/maintenance-log.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/maintenance-log/maintenance-log.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMaintenanceLogMaintenanceLogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 style=\"text-align: center;\">Maintenance Log</h1>\r\n\r\n<button mat-raised-button color=\"primary\" (click) = \"AddMaintenance()\" class=\"m-1\">Add New</button>\r\n\r\n<div fxLayout=\"column\" *ngIf=\"showtable\">\r\n    <div class=\"flex-p\"> \r\n        <div fxLayout=\"column\" class=\"mat-elevation-z8\">           \r\n            <mat-form-field class=\"p-1\">\r\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Type to filter all columns\">\r\n            </mat-form-field> \r\n        </div>\r\n        <mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">       \r\n            <ng-container matColumnDef=\"Maintenance_ID\">\r\n                <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Maintenance_ID}} </mat-cell>\r\n            </ng-container>         \r\n            <ng-container matColumnDef=\"Maintenance_Type_Description\">\r\n                <mat-header-cell *matHeaderCellDef> Type </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Maintenance_Type_Description}} </mat-cell>\r\n            </ng-container>     \r\n            <ng-container matColumnDef=\"Maintenance_Description\">\r\n                <mat-header-cell *matHeaderCellDef> Description </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Maintenance_Description}} </mat-cell>\r\n            </ng-container>        \r\n            <ng-container matColumnDef=\"Maintenance_Start_Date\">\r\n                <mat-header-cell *matHeaderCellDef> Start Date </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Maintenance_Start_Date}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Maintenance_End_Date\">\r\n                <mat-header-cell *matHeaderCellDef> End Date </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Maintenance_End_Date}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Importance_Description\">\r\n                <mat-header-cell *matHeaderCellDef> Importance </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Importance_Description}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Status_Description\">\r\n                <mat-header-cell *matHeaderCellDef> Status </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Status_Description}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Actions\">\r\n                <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" >\r\n                    <button mat-fab class=\"m-1\" style=\"color: green; background-color:rgb(51, 49, 49)\" (click) ='getMaintenanceDetail(element.Maintenance_ID)'>\r\n                        <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <button mat-fab class=\"m-1\" style=\"color: red; background-color: rgb(51, 49, 49);\" (click)=\"deleteMaintenance()\">\r\n                        <mat-icon>delete_forever</mat-icon>\r\n                    </button>\r\n               </mat-cell>\r\n            </ng-container>\r\n\r\n            \r\n\r\n\r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>  \r\n        <mat-paginator #paginator [pageSize]=\"10\" [pageSizeOptions]=\"[15, 20]\"></mat-paginator>      \r\n    </div>\r\n</div>\r\n<br>\r\n\r\n\r\n<ng-container *ngIf=\"show\">\r\n    <form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"PutMaintenance()\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n               Maintenance Type\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Maintenance Type\"  name=\"Type\" required>\r\n                        <option value=\"\" disabled selected>Choose</option>\r\n                        <mat-option *ngFor=\"let type of types\" [value]=\"type\">\r\n                            {{type}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header>                \r\n               Description\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Description\"  name=\"Maintenance_Description\" required>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header>                \r\n               Start Date\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <mat-form-field appearance=\"fill\">\r\n                        <mat-label>Choose an Start Date</mat-label>\r\n                        <input matInput [matDatepicker]=\"picker\">\r\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #picker></mat-datepicker>\r\n                      </mat-form-field>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header>                \r\n               End Date\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <mat-form-field appearance=\"fill\">\r\n                        <mat-label>Choose an End Date</mat-label>\r\n                        <input matInput [matDatepicker]=\"picker\">\r\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #picker></mat-datepicker>\r\n                      </mat-form-field>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n\r\n        <mat-card>\r\n            <mat-card-header>                \r\n               Importance\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Importance\"  name=\"Importance\" required>\r\n                        <option value=\"\" disabled selected>Choose</option>\r\n                        <mat-option *ngFor=\"let type of importances\" [value]=\"type\">\r\n                            {{type}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n        <mat-card>\r\n            <mat-card-header>                \r\n               Staff\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Staff\"  name=\"Staff\" required>\r\n                        <option value=\"\" disabled selected>Choose</option>\r\n                        <mat-option *ngFor=\"let type of staffs\" [value]=\"type\">\r\n                            {{type}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n\r\n        <mat-card>\r\n            <mat-card-header>                \r\n               Infrastructure\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Infrastructure\"  name=\"Infrastructure\" >\r\n                        <option value=\"\" disabled selected>Choose</option>\r\n                        <mat-option *ngFor=\"let type of infrastructures\" [value]=\"type\">\r\n                            {{type}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n        <mat-card>\r\n            <mat-card-header>                \r\n               Equipment\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Equipment\"  name=\"Equipment\">\r\n                        <option value=\"\" disabled selected>Choose</option>\r\n                        <mat-option *ngFor=\"let type of equipments\" [value]=\"type\">\r\n                            {{type}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n        \r\n        <mat-card>\r\n        <button mat-icon-button color=\"primary\" aria-label=\"Example icon button with a home icon\">\r\n            <mat-icon>camera</mat-icon>\r\n          </button>\r\n        </mat-card>\r\n\r\n        <button mat-raised-button color=\"primary\" class=\"m-1\" (click)=\"back()\">Save</button>\r\n        &nbsp;\r\n        &nbsp;\r\n        <button mat-raised-button color=\"primary\" class=\"m-1\" (click)=\"back()\">Cancel</button>\r\n      </form>\r\n    </ng-container>\r\n\r\n\r\n\r\n<ng-container *ngIf=\"showAdd\">\r\n    <form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"PutMaintenance()\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n               Maintenance Type\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Maintenance Type\"  name=\"Type\" required>\r\n                        <option value=\"\" disabled selected>Choose</option>\r\n                        <mat-option *ngFor=\"let type of types\" [value]=\"type\">\r\n                            {{type}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header>                \r\n               Description\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Description\"  name=\"Maintenance_Description\" required>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header>                \r\n               Start Date\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <mat-form-field appearance=\"fill\">\r\n                        <mat-label>Choose an Start Date</mat-label>\r\n                        <input matInput [matDatepicker]=\"picker\">\r\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #picker></mat-datepicker>\r\n                      </mat-form-field>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header>                \r\n               End Date\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <mat-form-field appearance=\"fill\">\r\n                        <mat-label>Choose an End Date</mat-label>\r\n                        <input matInput [matDatepicker]=\"picker\">\r\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #picker></mat-datepicker>\r\n                      </mat-form-field>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n\r\n        <mat-card>\r\n            <mat-card-header>                \r\n               Importance\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Importance\"  name=\"Importance\" required>\r\n                        <option value=\"\" disabled selected>Choose</option>\r\n                        <mat-option *ngFor=\"let type of importances\" [value]=\"type\">\r\n                            {{type}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n        <mat-card>\r\n            <mat-card-header>                \r\n               Staff\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Staff\"  name=\"Staff\" required>\r\n                        <option value=\"\" disabled selected>Choose</option>\r\n                        <mat-option *ngFor=\"let type of staffs\" [value]=\"type\">\r\n                            {{type}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n\r\n        <mat-card>\r\n            <mat-card-header>                \r\n               Infrastructure\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Infrastructure\"  name=\"Infrastructure\" >\r\n                        <option value=\"\" disabled selected>Choose</option>\r\n                        <mat-option *ngFor=\"let type of infrastructures\" [value]=\"type\">\r\n                            {{type}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n        <mat-card>\r\n            <mat-card-header>                \r\n               Equipment\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Equipment\"  name=\"Equipment\">\r\n                        <option value=\"\" disabled selected>Choose</option>\r\n                        <mat-option *ngFor=\"let type of equipments\" [value]=\"type\">\r\n                            {{type}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n        \r\n        <mat-card>\r\n            <label for=\"myfile\">Select a file:</label>\r\n            <input type=\"file\" id=\"myfile\" name=\"myfile\">\r\n        </mat-card>\r\n\r\n        <button mat-raised-button color=\"primary\" class=\"m-1\" (click)=\"back()\">Save</button>\r\n        &nbsp;\r\n        &nbsp;\r\n        <button mat-raised-button color=\"primary\" class=\"m-1\" (click)=\"back()\">Cancel</button>\r\n      </form>\r\n    </ng-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/maintenance-report/maintenance-report.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/maintenance-report/maintenance-report.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMaintenanceReportMaintenanceReportComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>maintenance-report works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/new-password/new-password.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-password/new-password.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewPasswordNewPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Reset Password</h1>\r\n\r\n<mat-card>\r\n    <mat-card-header>                \r\n       Username\r\n    </mat-card-header>\r\n    <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"Username\"  name=\"Username\" required>\r\n        </mat-form-field>\r\n    </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card>\r\n    <mat-card-header>                \r\n       New Password\r\n    </mat-card-header>\r\n    <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"NPassword\" name=\"New_Password\" required>\r\n        </mat-form-field>\r\n    </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card>\r\n    <mat-card-header>                \r\n       Confirm Password\r\n    </mat-card-header>\r\n    <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"CPassword\"  name=\"Confirmed_Password\" required>\r\n        </mat-form-field>\r\n    </mat-card-content>\r\n    \r\n</mat-card>\r\n\r\n<button mat-raised-button color=\"primary\" class=\"m-1\">Submit</button>\r\n&nbsp;\r\n&nbsp;\r\n<button mat-raised-button color=\"primary\" class=\"m-1\" (click)= \"back()\">Cancel</button>";
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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/repair-log/repair-log.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/repair-log/repair-log.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRepairLogRepairLogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Repair Logs</h1>\r\n<div *ngIf=\"hideTable\">\r\n<button mat-raised-button color=\"primary\" (click) = \"AddRepairLog()\" class=\"m-1\">Add New</button>\r\n<button mat-raised-button color=\"primary\" (click) = \"SendNotification()\" class=\"m-1\">Send Repair Notification</button>\r\n<button mat-raised-button color=\"primary\" (click) = \"GenerateReport()\" class=\"m-1\">Generate Repair Report</button>\r\n\r\n<div fxLayout=\"column\">\r\n    <div class=\"flex-p\"> \r\n        <div fxLayout=\"column\" class=\"mat-elevation-z8\">           \r\n            <mat-form-field class=\"p-1\">\r\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Type to filter all columns\">\r\n            </mat-form-field> \r\n        </div>\r\n        <mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">       \r\n            <ng-container matColumnDef=\"VehicleRepair_ID\">\r\n                <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.VehicleRepair_ID}} </mat-cell>\r\n            </ng-container> \r\n            <ng-container matColumnDef=\"Provider_Name\">\r\n                <mat-header-cell *matHeaderCellDef> Repair Provider </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Provider_Name}} </mat-cell>\r\n            </ng-container>        \r\n            <ng-container matColumnDef=\"VRD_Invoice\">\r\n                <mat-header-cell *matHeaderCellDef> Invoice </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.VRD_Invoice}} </mat-cell>\r\n           </ng-container>     <!--(here we need to have option to submit an invoice)    -->\r\n            <ng-container matColumnDef=\"Vehicle_Registration_Number\">\r\n                <mat-header-cell *matHeaderCellDef> Vehicle Registration Number </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Vehicle_Registration_Number}} </mat-cell>\r\n            </ng-container>        \r\n            <ng-container matColumnDef=\"Vehicle_Repair_Date_Started\">\r\n                <mat-header-cell *matHeaderCellDef> Date Started </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Vehicle_Repair_Date_Started | date}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Vehicle_Repair_Date_Ended\">\r\n                <mat-header-cell *matHeaderCellDef> Date Ended </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Vehicle_Repair_Date_Ended | date}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Vehicle_Repair_Cost\">\r\n                <mat-header-cell *matHeaderCellDef> Cost </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Vehicle_Repair_Cost}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Status_Description\">\r\n                <mat-header-cell *matHeaderCellDef> Status </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Status_Description}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Actions\">\r\n                <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" >\r\n                    <button mat-fab class=\"m-1\" style=\"color: green; background-color:rgb(51, 49, 49)\" (click) ='getRepairLogDetail(element.VehicleRepair_ID)'>\r\n                        <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <button mat-fab class=\"m-1\"  style=\"color: red; background-color: rgb(51, 49, 49);\"  (click)=\"deleteRepairLog()\">\r\n                        <mat-icon>delete_forever</mat-icon>\r\n                    </button>\r\n               </mat-cell>\r\n            </ng-container>\r\n\r\n            \r\n\r\n\r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>  \r\n        <mat-paginator #paginator [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10]\"></mat-paginator>      \r\n    </div>\r\n</div>\r\n</div>\r\n<br>\r\n\r\n<ng-container *ngIf=\"show\">\r\n    <h2>Edit Repair Log</h2>\r\n<form ng-show=\"show\" name=\"RepairLogSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"PutRepairLog()\">\r\n    <mat-card>\r\n        <mat-card-header>                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Provider\" [(ngModel)]=\"ProviderSelect\" name=\"Provider\">\r\n                    <mat-option *ngFor=\"let type of providers\" [value]=\"type\">\r\n                        {{type}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n    \r\n    <mat-card>              \r\n        <mat-card-header>                \r\n           \r\n        </mat-card-header>\r\n        <mat-label>Upload Invoice Here: </mat-label>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <input class=\"ng-hide\" id=\"input-file-id\" multiple type=\"file\" placeholder=\"All Auto Repair-Agrilog-Invoice.pdf\"/>\r\n    </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header>                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Vehicle\" [(ngModel)]=\"selectedValue\" name=\"Vehicle\">\r\n                    <mat-option *ngFor=\"let type of vehicles\" [value]=\"type\">\r\n                        {{type}}\r\n                    </mat-option>\r\n                </mat-select>\r\n                \r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-label>Choose a start date</mat-label>\r\n                <input matInput [matDatepicker]=\"updateStartDatePicker\" placeholder=\"Start_Date\" [(ngModel)]=\"StartDateSelected\" name=\"Start_Date\" required>\r\n                <mat-datepicker-toggle matSuffix [for]=\"updateStartDatePicker\"></mat-datepicker-toggle>\r\n                <mat-datepicker #updateStartDatePicker></mat-datepicker>\r\n              </mat-form-field>                                 \r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-label>Choose an end date</mat-label>\r\n                <input matInput [matDatepicker]=\"updateEndDatePicker\" placeholder=\"End_Date\" [(ngModel)]=\"EndDateSelected\" name=\"End_Date\" required>\r\n                <mat-datepicker-toggle matSuffix [for]=\"updateEndDatePicker\"></mat-datepicker-toggle>\r\n                <mat-datepicker #updateEndDatePicker></mat-datepicker>\r\n              </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Cost\" [(ngModel)]=\"RepairLogEdit.Vehicle_Repair_Cost\" name=\"Cost\" required>\r\n            </mat-form-field>\r\n                               \r\n        </mat-card-content>\r\n    </mat-card>\r\n    <mat-card>\r\n        <mat-card-header>                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Status\" [(ngModel)]=\"StatusSelect\" name=\"Status\">\r\n                    <mat-option *ngFor=\"let type of statusses\" [value]=\"type\">\r\n                        {{type}}\r\n                    </mat-option>\r\n                </mat-select>\r\n                \r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    \r\n    <button mat-raised-button color=\"primary\" class=\"m-1\">Save Changes</button>\r\n  </form>\r\n  <button mat-raised-button color=\"m-1\" (click)=\"back()\">Back</button>\r\n</ng-container>\r\n\r\n    <ng-container *ngIf=\"showAdd\">\r\n        <h2>Add Repair Log</h2>\r\n        <form ng-show=\"show\" name=\"RepairLogSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"PutRepairLog()\">\r\n            <mat-card>              \r\n            <mat-card-header>                \r\n               \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Provider\" [(ngModel)]=\"RepairLogAdd.ProviderSelect\" name=\"Provider\" required>\r\n                        <option value=\"\" disabled selected>Choose</option>\r\n                        <mat-option *ngFor=\"let type of providers\" [value]=\"type\">\r\n                            {{type}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n         <mat-card>              \r\n            <mat-card-header>                \r\n               \r\n            </mat-card-header>\r\n            <mat-label>Upload Invoice Here: </mat-label>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                    <input class=\"ng-hide\" id=\"input-file-id\" multiple type=\"file\" />\r\n        </mat-card-content>\r\n        </mat-card> \r\n        \r\n        <mat-card>\r\n            <mat-card-header>                \r\n               \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Vehicle\" [(ngModel)]=\"RepairLogAdd.selectedValue\" name=\"Vehicle\" required>\r\n                        <option value=\"\" disabled selected>Choose</option>\r\n                        <mat-option *ngFor=\"let type of vehicles\" [value]=\"type\">\r\n                            {{type}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                    \r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n               \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <!-- <mat-form-field>\r\n                    <input matInput type=\"datetime\" placeholder=\"Start_Date\" [(ngModel)]=\"RepairLogAdd.Vehicle_Repair_Date_Started\" name=\"Start_Date\" required>\r\n                </mat-form-field> -->\r\n                <mat-form-field>\r\n                    <mat-label>Choose a start date</mat-label>\r\n                    <input matInput [matDatepicker]=\"addStartDatePicker\" placeholder=\"Start_Date\" [(ngModel)]=\"RepairLogAdd.Vehicle_Repair_Date_Started\" name=\"Start_Date\" required>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"addStartDatePicker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #addStartDatePicker></mat-datepicker>\r\n                  </mat-form-field>                                 \r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n               \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <!-- <mat-form-field>\r\n                    <input matInput type=\"datetime\" placeholder=\"End_Date\" [(ngModel)]=\"RepairLogAdd.Vehicle_Repair_Date_Ended\" name=\"End_Date\" required>\r\n                </mat-form-field> -->\r\n                <mat-form-field>\r\n                    <mat-label>Choose an end date</mat-label>\r\n                    <input matInput [matDatepicker]=\"addEndDatePicker\" placeholder=\"End_Date\" [(ngModel)]=\"RepairLogAdd.Vehicle_Repair_Date_Ended\" name=\"End_Date\" required>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"addEndDatePicker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #addEndDatePicker></mat-datepicker>\r\n                  </mat-form-field>                   \r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n               \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Cost\" [(ngModel)]=\"RepairLogAdd.Vehicle_Repair_Cost\" name=\"Cost\" required>\r\n                </mat-form-field>\r\n                                   \r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header>                \r\n               \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Status\" [(ngModel)]=\"RepairLogAdd.StatusSelect\" name=\"Status\" required>\r\n                        <option value=\"\" disabled selected>Choose</option>\r\n                        <mat-option *ngFor=\"let type of statusses\" [value]=\"type\">\r\n                            {{type}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                    \r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n            <button mat-raised-button color=\"primary\" class=\"m-1\">Save</button>\r\n          </form>\r\n          <button mat-raised-button color=\"m-1\" (click)=\"back()\" class=\"m-1\">Back</button>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"showRequest\">\r\n            <h2>Send Repair Request</h2>\r\n            <form ng-show=\"show\" name=\"RepairLogSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"PutRepairRequest()\">\r\n                <mat-card>              \r\n                <mat-card-header>                \r\n                   \r\n                </mat-card-header>\r\n                <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                    <mat-form-field>\r\n                        <mat-select placeholder=\"Provider\" [(ngModel)]=\"RepairRequestAdd.ProviderSelect\" name=\"Provider\" required>\r\n                            <option value=\"\" disabled selected>Choose</option>\r\n                            <mat-option *ngFor=\"let type of providers\" [value]=\"type\">\r\n                                {{type}}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                </mat-card-content>\r\n            </mat-card>\r\n        \r\n            <!-- <mat-card>              \r\n                <mat-card-header>                \r\n                   \r\n                </mat-card-header>\r\n                <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                    <mat-form-field>\r\n                        <ngx-mat-file-input [formControl]=\"fileControl\" [multiple]=\"multiple\" [accept]=\"accept\" [color]=\"color\">\r\n                           <mat-icon ngxMatFileInputIcon>folder</mat-icon>\r\n                        </ngx-mat-file-input>\r\n                     </mat-form-field>\r\n            </mat-card-content>\r\n            </mat-card> -->\r\n            \r\n            <mat-card>\r\n                <mat-card-header>                \r\n                   \r\n                </mat-card-header>\r\n                <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                    <mat-form-field>\r\n                        <mat-select placeholder=\"Vehicle\" [(ngModel)]=\"RepairRequestAdd.selectedValue\" name=\"Vehicle\" required>\r\n                            <option value=\"\" disabled selected>Choose</option>\r\n                            <mat-option *ngFor=\"let type of vehicles\" [value]=\"type\">\r\n                                {{type}}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                        \r\n                    </mat-form-field>\r\n                </mat-card-content>\r\n            </mat-card>\r\n        \r\n            <mat-card>\r\n                <mat-card-header fxLayoutAlign=\"center\">                \r\n                   \r\n                </mat-card-header>\r\n                <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                    <!-- <mat-form-field>\r\n                        <input matInput type=\"datetime\" placeholder=\"Start_Date\" [(ngModel)]=\"RepairLogAdd.Vehicle_Repair_Date_Started\" name=\"Start_Date\" required>\r\n                    </mat-form-field> -->\r\n                    <mat-form-field>\r\n                        <mat-label>Choose a start date</mat-label>\r\n                        <input matInput [matDatepicker]=\"addStartDatePicker\" placeholder=\"Start_Date\" [(ngModel)]=\"RepairRequestAdd.Vehicle_Repair_Date_Started\" name=\"Start_Date\" required>\r\n                        <mat-datepicker-toggle matSuffix [for]=\"addStartDatePicker\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #addStartDatePicker></mat-datepicker>\r\n                      </mat-form-field>                                 \r\n                </mat-card-content>\r\n            </mat-card>\r\n        \r\n            <!-- <mat-card>\r\n                <mat-card-header fxLayoutAlign=\"center\">                \r\n                   \r\n                </mat-card-header>\r\n                <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                     <mat-form-field>\r\n                        <input matInput type=\"datetime\" placeholder=\"End_Date\" [(ngModel)]=\"RepairLogAdd.Vehicle_Repair_Date_Ended\" name=\"End_Date\" required>\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                        <mat-label>Choose an end date</mat-label>\r\n                        <input matInput [matDatepicker]=\"addEndDatePicker\" placeholder=\"End_Date\" [(ngModel)]=\"RepairLogAdd.Vehicle_Repair_Date_Ended\" name=\"End_Date\" required>\r\n                        <mat-datepicker-toggle matSuffix [for]=\"addEndDatePicker\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #addEndDatePicker></mat-datepicker>\r\n                      </mat-form-field>                   \r\n                </mat-card-content>\r\n            </mat-card> -->\r\n        \r\n            <mat-card>\r\n                <mat-card-header fxLayoutAlign=\"center\">                \r\n                   \r\n                </mat-card-header>\r\n                <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Cost\" [(ngModel)]=\"RepairRequestAdd.Vehicle_Repair_Cost\" name=\"Cost\" required>\r\n                    </mat-form-field>\r\n                                       \r\n                </mat-card-content>\r\n            </mat-card>\r\n        \r\n            <mat-card>\r\n                <mat-card-header>                \r\n                   \r\n                </mat-card-header>\r\n                <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                    <mat-form-field>\r\n                        <mat-select placeholder=\"Status\" [(ngModel)]=\"RepairRequestAdd.StatusSelect\" name=\"Status\" required>\r\n                            <option value=\"\" disabled selected>Choose</option>\r\n                            <mat-option *ngFor=\"let type of statusses\" [value]=\"type\">\r\n                                {{type}}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                        \r\n                    </mat-form-field>\r\n                </mat-card-content>\r\n            </mat-card>\r\n        \r\n                <button mat-raised-button color=\"primary\" class=\"m-1\">Send</button>\r\n              </form>\r\n              <button mat-raised-button color=\"m-1\" (click)=\"back()\" class=\"m-1\">Back</button>\r\n            </ng-container>\r\n    ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/request-email/request-email.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/request-email/request-email.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRequestEmailRequestEmailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Reset Password</h1>\r\n\r\n<mat-card>\r\n    <mat-card-header>                \r\n       Username\r\n    </mat-card-header>\r\n    <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"Username\"  name=\"Username\" required>\r\n        </mat-form-field>\r\n    </mat-card-content>\r\n</mat-card>\r\n\r\n<button mat-raised-button color=\"primary\" class=\"m-1\">Save</button>\r\n        &nbsp;\r\n        &nbsp;\r\n        <button mat-raised-button color=\"primary\" class=\"m-1\" (click)= \"back()\">Cancel</button>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/scheduledtasks/scheduledtasks.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scheduledtasks/scheduledtasks.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppScheduledtasksScheduledtasksComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Scheduled Tasks</h1>\r\n<div *ngIf=\"hideTable\">\r\n<button mat-raised-button color=\"primary\" (click) = \"AddScheduledTask()\" class=\"m-1\">Schedule Task</button>\r\n<button mat-raised-button color=\"primary\" (click) = \"SendSchedules()\" class=\"m-1\">Send Daily Schedules</button>\r\n<button mat-raised-button color=\"primary\" (click) = \"GenerateSchedules()\" class=\"m-1\">Generate Daily Schedules</button>\r\n\r\n<div fxLayout=\"column\">\r\n    <div class=\"flex-p\"> \r\n        <div fxLayout=\"column\" class=\"mat-elevation-z8\">           \r\n            <mat-form-field class=\"p-1\">\r\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Type to filter all columns\">\r\n            </mat-form-field> \r\n        </div>\r\n        <mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">       \r\n            <ng-container matColumnDef=\"Schedule_ID\">\r\n                <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Schedule_ID}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Day_Description\">\r\n                <mat-header-cell *matHeaderCellDef> Day of Week </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Day_Description}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Schedule_Start_Date\">\r\n                <mat-header-cell *matHeaderCellDef> Start Date </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Schedule_Start_Date | date}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Schedule_End_Date\">\r\n                <mat-header-cell *matHeaderCellDef> End Date </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Schedule_End_Date | date}} </mat-cell>\r\n            </ng-container>       \r\n            <!-- <ng-container matColumnDef=\"VRD_Invoice\">\r\n                <mat-header-cell *matHeaderCellDef> Type </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.VRD_Invoice}} </mat-cell>\r\n            </ng-container>   (here we need to have option to submit an invoice)   -->\r\n            <ng-container matColumnDef=\"Task_Description\">\r\n                <mat-header-cell *matHeaderCellDef> Task </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Task_Description}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Staff_Name\">\r\n                <mat-header-cell *matHeaderCellDef> Staff Assigned </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Staff_Name}} </mat-cell>\r\n            </ng-container>        \r\n            <ng-container matColumnDef=\"Status_Description\">\r\n                <mat-header-cell *matHeaderCellDef> Status </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Status_Description}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Actions\">\r\n                <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" >\r\n                    <button mat-fab class=\"m-1\" style=\"color: green; background-color:rgb(51, 49, 49)\" (click) ='getScheduledTaskDetail(element.Schedule_ID)'>\r\n                        <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <button mat-fab class=\"m-1\" style=\"color: red; background-color: rgb(51, 49, 49);\" (click)=\"deleteScheduledTask()\">\r\n                        <mat-icon>delete_forever</mat-icon>\r\n                    </button>\r\n               </mat-cell>\r\n            </ng-container>\r\n\r\n            \r\n\r\n\r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>  \r\n        <mat-paginator #paginator [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10]\"></mat-paginator>      \r\n    </div>\r\n</div>\r\n</div>\r\n<br>\r\n\r\n<ng-container *ngIf=\"show\">\r\n    <h2>Edit Scheduled Task</h2>\r\n<form ng-show=\"show\" name=\"ScheduleSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"PutScheduledTask()\">\r\n\r\n    <mat-card>\r\n        <mat-card-header>                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <section class=\"example-section\">\r\n                    <mat-checkbox (change)=\"onChangeRecurring()\" class=\"example-margin\" [(ngModel)]=\"once\" [(ngModel)]=\"recurring\" name=\"recurring\">Schedule task to reoccur over a specified time period: </mat-checkbox>\r\n                  </section>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card *ngIf=\"recurring\">\r\n        <mat-card-header>                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Day\" [(ngModel)]=\"DaySelect\" name=\"Day\" required>\r\n                    <mat-option *ngFor=\"let type of days\" [value]=\"type\">\r\n                        {{type}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n    \r\n    <mat-card >\r\n        <mat-card-header fxLayoutAlign=\"center\">                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-label *ngIf=\"recurring\">Choose a start date</mat-label>\r\n                <mat-label *ngIf=\"once\">Choose a date</mat-label>\r\n                <input matInput [matDatepicker]=\"updateStartDatePicker\" placeholder=\"Start_Date\" [(ngModel)]=\"StartDateSelected\" name=\"Start_Date\" required>\r\n                <mat-datepicker-toggle matSuffix [for]=\"updateStartDatePicker\"></mat-datepicker-toggle>\r\n                <mat-datepicker #updateStartDatePicker></mat-datepicker>\r\n              </mat-form-field>                                 \r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card *ngIf=\"recurring\">\r\n        <mat-card-header fxLayoutAlign=\"center\">                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-label>Choose an end date</mat-label>\r\n                <input matInput [matDatepicker]=\"updateEndDatePicker\" placeholder=\"End_Date\" [(ngModel)]=\"EndDateSelected\" name=\"End_Date\" required>\r\n                <mat-datepicker-toggle matSuffix [for]=\"updateEndDatePicker\"></mat-datepicker-toggle>\r\n                <mat-datepicker #updateEndDatePicker></mat-datepicker>\r\n              </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header>                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Task\" [(ngModel)]=\"TaskSelect\" name=\"Task\" required>\r\n                    <mat-option *ngFor=\"let type of tasks\" [value]=\"type\">\r\n                        {{type}}\r\n                    </mat-option>\r\n                </mat-select>\r\n                \r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header>                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Staff\" [(ngModel)]=\"StaffSelect\" name=\"Staff\" required>\r\n                    <mat-option *ngFor=\"let type of staff\" [value]=\"type\">\r\n                        {{type}}\r\n                    </mat-option>\r\n                </mat-select>\r\n                \r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n    <mat-card>\r\n        <mat-card-header>                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Status\" [(ngModel)]=\"StatusSelect\" name=\"Status\" required>\r\n                    <mat-option *ngFor=\"let type of statusses\" [value]=\"type\">\r\n                        {{type}}\r\n                    </mat-option>\r\n                </mat-select>\r\n                \r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    \r\n    <button mat-raised-button color=\"primary\" class=\"m-1\">Save Changes</button>\r\n  </form>\r\n  <button mat-raised-button color=\"m-1\" (click)=\"back()\">Back</button>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"showAdd\">\r\n    <h2>Schedule Task</h2>\r\n    <form ng-show=\"show\" name=\"ScheduleSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"PutScheduledTask()\">\r\n\r\n        <mat-card>\r\n            <mat-card-header>                \r\n               \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                    <section class=\"example-section\">\r\n                        <mat-checkbox (change)=\"onChangeRecurring()\" class=\"example-margin\" [(ngModel)]=\"once\" [(ngModel)]=\"recurring\" name=\"recurring\">Schedule task to reoccur over a specified time period: </mat-checkbox>\r\n                      </section>\r\n            </mat-card-content>\r\n        </mat-card>\r\n\r\n        <mat-card *ngIf=\"recurring\">\r\n            <mat-card-header>                \r\n               \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Day\" (ngModelChange)=\"onChangeDay($event)\" [(ngModel)]=\"ScheduledTaskAdd.DaySelect\" name=\"Day\" required> \r\n                        <option value=\"\" disabled selected>Choose</option>\r\n                        <mat-option *ngFor=\"let type of days\" value=\"type\">\r\n                            {{type}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n<mat-card > \r\n        <mat-card-header fxLayoutAlign=\"center\">                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-label *ngIf=\"recurring\">Choose a start date</mat-label>\r\n                <mat-label *ngIf=\"once\">Choose a date</mat-label>\r\n                <input matInput [matDatepicker]=\"addStartDatePicker\" (ngModelChange)=\"onChangeStartDate($event)\" placeholder=\"Start_Date\" [(ngModel)]=\"ScheduledTaskAdd.Schedule_Start_Date\" name=\"Start_Date\" required>\r\n                <mat-datepicker-toggle matSuffix [for]=\"addStartDatePicker\"></mat-datepicker-toggle>\r\n                <mat-datepicker #addStartDatePicker></mat-datepicker>\r\n              </mat-form-field>                                 \r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card *ngIf=\"recurring\">\r\n        <mat-card-header fxLayoutAlign=\"center\">                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-label>Choose an end date</mat-label>\r\n                <input matInput [matDatepicker]=\"addEndDatePicker\" (ngModelChange)=\"onChangeEndDate($event)\" placeholder=\"End_Date\" [(ngModel)]=\"ScheduledTaskAdd.Schedule_End_Date\" name=\"End_Date\" required>\r\n                <mat-datepicker-toggle matSuffix [for]=\"addEndDatePicker\"></mat-datepicker-toggle>\r\n                <mat-datepicker #addEndDatePicker></mat-datepicker>\r\n              </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header>                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Task\" (ngModelChange)=\"onChangeTask($event)\" [(ngModel)]=\"ScheduledTaskAdd.TaskSelect\" name=\"Task\" [disabled]=\"!disableTask\" required>\r\n                    <option value=\"\" disabled selected>Choose</option>\r\n                    <mat-option *ngFor=\"let type of tasks\" value=\"type\">\r\n                        {{type}}\r\n                    </mat-option>\r\n                </mat-select>\r\n                \r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header>                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Staff\" [(ngModel)]=\"ScheduledTaskAdd.StaffSelect\" name=\"Staff\" [disabled]=\"!disableStaff\" required>\r\n                    <option value=\"\" disabled selected>Choose</option>\r\n                    <mat-option *ngFor=\"let type of staff\" value=\"type\">\r\n                        {{type}}\r\n                    </mat-option>\r\n                </mat-select>\r\n                \r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n        <button mat-raised-button color=\"primary\" type=\"submit\" class=\"m-1\">Save</button>\r\n      </form>\r\n      <button mat-raised-button color=\"m-1\" (click)=\"back()\" class=\"m-1\">Back</button>\r\n    </ng-container>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/section-report/section-report.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/section-report/section-report.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSectionReportSectionReportComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Generate Section Report</h1>\r\n\r\n  <section class=\"example-section\">\r\n    <mat-checkbox class=\"example-margin\">Sections</mat-checkbox>\r\n  </section>\r\n\r\n  <section class=\"example-section\">\r\n    <mat-checkbox class=\"example-margin\">Section Types</mat-checkbox>\r\n  </section>\r\n\r\n  <br>\r\n\r\n  <button mat-raised-button color=\"primary\" (click) = \"generateReport()\" class=\"m-1\">Submit</button>\r\n  &nbsp;\r\n  &nbsp;\r\n  <button mat-raised-button color=\"primary\" (click) = \"Cancel()\" class=\"m-1\">Cancel</button>\r\n  &nbsp;\r\n  &nbsp;\r\n  <button mat-raised-button color=\"primary\" class=\"m-1\" disabled>Download</button>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/section-type/section-type.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/section-type/section-type.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSectionTypeSectionTypeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 style=\"text-align: center;\">Section Types</h1>\r\n<button mat-raised-button color=\"primary\" (click) = \"AddSectionType()\" class=\"m-1\">Add New SectionType Type</button>\r\n\r\n<div fxLayout=\"column\">\r\n    <div class=\"flex-p\"> \r\n        <div fxLayout=\"column\" class=\"mat-elevation-z8\">           \r\n            <mat-form-field class=\"p-1\">\r\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Type to filter all columns\">\r\n            </mat-form-field> \r\n        </div>\r\n        <mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">       \r\n            <ng-container matColumnDef=\"Section_Type_ID\">\r\n                <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Section_Type_ID}} </mat-cell>\r\n            </ng-container>         \r\n            <ng-container matColumnDef=\"Section_Type_Description\">\r\n                <mat-header-cell *matHeaderCellDef> Description </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Section_Type_Description}} </mat-cell>\r\n            </ng-container>     \r\n\r\n            <ng-container matColumnDef=\"Actions\">\r\n                <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" >\r\n                    <button mat-fab class=\"m-1\" style=\"color: green; background-color:rgb(51, 49, 49)\" (click) ='getSectionTypeDetail(element.Vehicle_ID)'>\r\n                        <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    \r\n               </mat-cell>\r\n            </ng-container>\r\n\r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>  \r\n        <mat-paginator #paginator [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10]\"></mat-paginator>      \r\n    </div>\r\n</div>\r\n<br>\r\n\r\n<ng-container *ngIf=\"show\">\r\n<form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"PutSectionType()\">\r\n    <mat-card>\r\n        <mat-card-header>                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Description\"  name=\"Section_Type_Description\" required>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <button mat-raised-button color=\"primary\" class=\"m-1\">Save</button>\r\n        &nbsp;\r\n        &nbsp;\r\n        <button mat-raised-button color=\"primary\" class=\"m-1\">Cancel</button>\r\n  </form>\r\n</ng-container>\r\n\r\n\r\n\r\n<ng-container *ngIf=\"showAdd\">\r\n    <form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"PutSectionType()\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n               \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Description\"  name=\"Section_Type_Description\" required>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n           \r\n        <button mat-raised-button color=\"primary\" class=\"m-1\">Save</button>\r\n        &nbsp;\r\n        &nbsp;\r\n        <button mat-raised-button color=\"primary\" class=\"m-1\">Cancel</button>\r\n      </form>\r\n    </ng-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/section/section.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/section/section.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSectionSectionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 style=\"text-align: center;\">Sections</h1>\r\n\r\n<br>\r\n<button mat-raised-button color=\"primary\" (click) = \"SectionTypes()\" class=\"m-1\">Section Types</button>\r\n&nbsp;\r\n<button mat-raised-button color=\"primary\" (click) = \"AddSection()\" class=\"m-1\">Add Section</button>\r\n\r\n<div fxLayout=\"column\" *ngIf =\"hideTable\">\r\n    <div class=\"flex-p\"> \r\n        <div fxLayout=\"column\" class=\"mat-elevation-z8\">           \r\n            <mat-form-field class=\"p-1\">\r\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Type to filter all columns\">\r\n            </mat-form-field> \r\n        </div>\r\n        <mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">       \r\n            <ng-container matColumnDef=\"Section_ID\">\r\n                <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Section_ID}} </mat-cell>\r\n            </ng-container>         \r\n            <ng-container matColumnDef=\"Section_Type_Description\">\r\n                <mat-header-cell *matHeaderCellDef> Type </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Section_Type_Description}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Section_Location\">\r\n                <mat-header-cell *matHeaderCellDef> Location </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Section_Location}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Section_Size\">\r\n                <mat-header-cell *matHeaderCellDef> Size </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Section_Size}} </mat-cell>\r\n            </ng-container>     \r\n\r\n            <ng-container matColumnDef=\"Actions\">\r\n                <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" >\r\n                    <button mat-fab class=\"m-1\" style=\"color: green; background-color:rgb(51, 49, 49)\" (click) ='getSectionDetail(element.Vehicle_ID)'>\r\n                        <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <button mat-fab class=\"m-1\" style=\"color: red; background-color: rgb(51, 49, 49);\" (click)=\"deleteSection()\">\r\n                        <mat-icon>delete_forever</mat-icon>\r\n                    </button>\r\n                    \r\n               </mat-cell>\r\n            </ng-container>\r\n\r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>  \r\n        <mat-paginator #paginator [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10]\"></mat-paginator>      \r\n    </div>\r\n</div>\r\n<br>\r\n\r\n<ng-container *ngIf=\"show\">\r\n<form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"PutSection()\">\r\n    <mat-card>\r\n        <mat-card-header>                \r\n           Section Name\r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Section Type\" [(ngModel)]=\"selectedValue\" name=\"Type\">\r\n                    <mat-option *ngFor=\"let type of types\" [value]=\"type\">\r\n                        {{type}}\r\n                    </mat-option>\r\n                </mat-select>\r\n                \r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n    <mat-card>\r\n        <mat-card-header>                \r\n           Section Type\r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Section Type\"  name=\"Type\">\r\n                    <mat-option *ngFor=\"let type of types\" [value]=\"type\">\r\n                        {{type}}\r\n                    </mat-option>\r\n                </mat-select>\r\n                \r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n    <mat-card>\r\n        <mat-card-header>                \r\n           Location\r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Section Type\"  name=\"Type\">\r\n                    <mat-option *ngFor=\"let type of types\" [value]=\"type\">\r\n                        {{type}}\r\n                    </mat-option>\r\n                </mat-select>\r\n                \r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n    <mat-card>\r\n        <mat-card-header>                \r\n           Size\r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Section Type\" [(ngModel)]=\"selectedValue\" name=\"Type\">\r\n                    <mat-option *ngFor=\"let type of types\" [value]=\"type\">\r\n                        {{type}}\r\n                    </mat-option>\r\n                </mat-select>\r\n                \r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <button mat-raised-button color=\"primary\" class=\"m-1\" (click)= \"back()\">Save</button>\r\n        &nbsp;\r\n        &nbsp;\r\n        <button mat-raised-button color=\"primary\" class=\"m-1\" (click)= \"back()\">Cancel</button>\r\n  </form>\r\n</ng-container>\r\n\r\n\r\n\r\n<ng-container *ngIf=\"showAdd\">\r\n    <form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"PutSection()\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n               Section Name\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Name\"  name=\"Section_Name\" required>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n        <mat-card>\r\n            <mat-card-header>                \r\n               Section Type\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Section Type\" [(ngModel)]=\"SectionAdd.SectionTypeSelect\" name=\"Type\" required>\r\n                        <option value=\"\" disabled selected>Choose</option>\r\n                        <mat-option *ngFor=\"let type of types\" [value]=\"type\">\r\n                            {{type}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n        <mat-card>\r\n            <mat-card-header>                \r\n               Location\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Location\"  name=\"Section_Location\" required>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n        <mat-card>\r\n            <mat-card-header>                \r\n               Size\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Size\"  name=\"Section_Size\" required>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n           \r\n        <button mat-raised-button color=\"primary\" class=\"m-1\" (click)= \"back()\">Save</button>\r\n        &nbsp;\r\n        &nbsp;\r\n        <button mat-raised-button color=\"primary\" class=\"m-1\" (click)= \"back()\">Cancel</button>\r\n      </form>\r\n    </ng-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/skill/editskill-dialog/editskill-dialog.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/skill/editskill-dialog/editskill-dialog.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSkillEditskillDialogEditskillDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"matdialog\" >\r\n        <h1 mat-dialog-title>Update Skill</h1>\r\n        <div mat-dialog-content>\r\n           <form [formGroup]=\"form\" ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"PutSkill()\">\r\n                    <mat-label id=\"provideLabel\">Please provide the following details:</mat-label>\r\n                <mat-card>\r\n                    <mat-card-header fxLayoutAlign=\"center\">                \r\n                       \r\n                    </mat-card-header>\r\n                    <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"Skill Decription\" name=\"Description\" [(ngModel)]=\"skill.Skill_Description\" formControlName=\"Skill_Description\" required>\r\n                            <mat-error *ngIf=\"form.controls.Skill_Description.errors?.required\">Skill Description is required </mat-error>\r\n                            <mat-error *ngIf=\"form.controls.Skill_Description.errors?.maxlength\">Skill Description cannot exceed 20 characters </mat-error>\r\n                        </mat-form-field> \r\n                    </mat-card-content>\r\n                </mat-card>\r\n        \r\n                <button mat-raised-button color=\"primary\" id=\"endButton\" class=\"m-1\" (click)=\"PutSkill()\">Save</button>\r\n                <button [mat-dialog-close]=\"true\"  mat-raised-button color=\"primary\" id=\"endButton\" class=\"m-1\" >Back</button>\r\n            </form>\r\n            \r\n        </div>\r\n        </div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/skill/skill-dialog/skill-dialog.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/skill/skill-dialog/skill-dialog.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSkillSkillDialogSkillDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"matdialog\">\r\n<h1 mat-dialog-title>Add Skill</h1>\r\n<div mat-dialog-content>\r\n   <form [formGroup]=\"form\" ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"addNewSkill()\">\r\n            <mat-label id=\"provideLabel\">Please provide the following details:</mat-label>\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n               \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Skill Decription\" [(ngModel)]=\"SkillAdd.Skill_Description\" name=\"Description\" formControlName=\"skill_description\" required>\r\n                    <mat-error *ngIf=\"form.controls.skill_description.errors?.required\">Skill Description is required </mat-error>\r\n                    <mat-error *ngIf=\"form.controls.skill_description.errors?.maxlength\">Skill Description cannot exceed 20 characters </mat-error>\r\n                </mat-form-field> \r\n            </mat-card-content>\r\n        </mat-card>\r\n\r\n        <button mat-raised-button color=\"primary\" id=\"endButton\" class=\"m-1\" (click)=\"addNewSkill()\">Save</button>\r\n        <button [mat-dialog-close]=\"true\"  mat-raised-button color=\"primary\" id=\"endButton\" class=\"m-1\" >Back</button>\r\n    </form>\r\n    \r\n</div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/skill/skill.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/skill/skill.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSkillSkillComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Staff Member Skills</h1>\r\n<div *ngIf=\"hideTable\">\r\n<button class=\"addSkill\" mat-raised-button color=\"primary\" (click) = \"AddSkillDialog()\" >\r\n    <mat-icon>add</mat-icon> Add Skill</button>\r\n\r\n\r\n<div fxLayout=\"column\">\r\n    <div class=\"flex-p\"> \r\n        <div fxLayout=\"column\" class=\"search\">           \r\n            <mat-form-field class=\"p-1\">\r\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Type to filter all columns\">\r\n            </mat-form-field> \r\n        </div>\r\n        <mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">       \r\n            <ng-container matColumnDef=\"Skill_ID\">\r\n                <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\r\n                <mat-cell   *matCellDef=\"let skill\"> {{skill.Skill_ID}} </mat-cell>\r\n                \r\n            </ng-container>         \r\n            <ng-container matColumnDef=\"Skill_Description\">\r\n                <mat-header-cell *matHeaderCellDef> Skill Type </mat-header-cell>\r\n                <mat-cell contenteditable=\"true\" (keydown.enter)=\"getSkillDetails(skill.Skill_ID)\" *matCellDef=\"let skill\"> {{skill.Skill_Description}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container class=\"col\" matColumnDef=\"Actions\">\r\n                <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let skill\" >\r\n                    <button mat-fab class=\"m-1\" style=\"color: green; background-color:rgb(51, 49, 49)\" (click) =\"getSkillDetails(skill.Skill_ID)\">\r\n                        <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <button mat-fab class=\"m-1\" style=\"color: red; background-color: rgb(51, 49, 49);\" (click)=\"deleteSkill(skill.Skill_ID)\">\r\n                        <mat-icon>delete_forever</mat-icon>\r\n                    </button>\r\n                    \r\n               </mat-cell>\r\n            </ng-container>        \r\n\r\n\r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>  \r\n        <mat-paginator #paginator [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10]\"></mat-paginator>      \r\n    </div>\r\n</div>\r\n<br>\r\n</div>\r\n\r\n<!--<ng-container *ngIf=\"show\">\r\n<form ng-show=\"show\" name=\"OwnerSub\" #form=\"ngForm\" ngNativeValidate (ngSubmit)=\"PutSkill()\">\r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Skill Description\" [(ngModel)]=\"SkillEdit.Skill_Description\" name=\"Description\" required>\r\n            </mat-form-field>\r\n                               \r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    \r\n    <button mat-raised-button id=\"endButton\" color=\"primary\" class=\"m-1\" >Save Changes</button>\r\n  </form>\r\n  <button mat-raised-button id=\"endButton\" color=\"primary\" class=\"m-1\" (click)=\"back()\">Back</button>\r\n</ng-container> \r\n\r\n\r\n<ng-container *ngIf=\"showAdd\">\r\n\r\n     <form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"addNewSkill()\">\r\n            <mat-label id=\"provideLabel\">Please provide the following details:</mat-label>\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n               \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Decription\" [(ngModel)]=\"SkillAdd.Skill_Description\" name=\"Description\" required>\r\n                </mat-form-field> \r\n            </mat-card-content>\r\n        </mat-card>\r\n\r\n        <button mat-raised-button color=\"primary\" id=\"endButton\" class=\"m-1\">Save</button>\r\n    </form>\r\n    <button mat-raised-button color=\"primary\" id=\"endButton\" class=\"m-1\" (click)=\"back()\">Back</button> \r\n</ng-container> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sr-provider/sr-provider.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sr-provider/sr-provider.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSrProviderSrProviderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Service and Repair Providers</h1>\r\n\r\n<div >\r\n<button mat-raised-button color=\"primary\" (click) = \"AddSRProvider()\" class=\"m-1\">Add Provider</button>\r\n\r\n<div fxLayout=\"column\" *ngIf=\"hideTable\">\r\n    <div class=\"flex-p\"> \r\n        <div fxLayout=\"column\" class=\"mat-elevation-z8\">           \r\n            <mat-form-field class=\"p-1\">\r\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Type to filter all columns\">\r\n            </mat-form-field> \r\n        </div>\r\n        <mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">       \r\n            <ng-container matColumnDef=\"Provider_ID\">\r\n                <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Provider_ID}} </mat-cell>\r\n            </ng-container>         \r\n            <ng-container matColumnDef=\"Provider_Name\">\r\n                <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Provider_Name}} </mat-cell>\r\n            </ng-container>     \r\n            <ng-container matColumnDef=\"Provider_Contact\">\r\n                <mat-header-cell *matHeaderCellDef> Contact Number </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Provider_Contact}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Provider_Email\">\r\n                <mat-header-cell *matHeaderCellDef> Email </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Provider_Email}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Provider_Address\">\r\n                <mat-header-cell *matHeaderCellDef> Address </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Provider_Address}} </mat-cell>\r\n            </ng-container>\r\n            \r\n\r\n            <ng-container matColumnDef=\"Actions\">\r\n                <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" >\r\n                    <button mat-fab class=\"m-1\" style=\"color: green; background-color:rgb(51, 49, 49)\" (click) ='getSRProviderDetail(element.Provider_ID)'>\r\n                        <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <button mat-fab class=\"m-1\" style=\"color: red; background-color: rgb(51, 49, 49);\" (click)=\"deleteSRProvider()\">\r\n                        <mat-icon>delete_forever</mat-icon>\r\n                    </button>\r\n               </mat-cell>\r\n            </ng-container>\r\n\r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>  \r\n        <mat-paginator #paginator [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10]\"></mat-paginator>      \r\n    </div>\r\n</div>\r\n</div>\r\n<br>\r\n\r\n<ng-container *ngIf=\"show\">\r\n<form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"PutSRProvider()\">\r\n    <mat-card>\r\n        <mat-card-header>                \r\n           Name\r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Name\"  name=\"Provider_Name\" required>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n    <mat-card>\r\n        <mat-card-header>                \r\n           Contact Number\r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Number\"  name=\"Provider_Contact\" required>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n    <mat-card>\r\n        <mat-card-header>                \r\n           Email Address\r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Email\"  name=\"Provider_Email\" required>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n    <mat-card>\r\n        <mat-card-header>                \r\n           Address\r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Address\"  name=\"Provider_Address\" required>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <button mat-raised-button color=\"primary\" class=\"m-1\">Save</button>\r\n        &nbsp;\r\n        &nbsp;\r\n        <button mat-raised-button color=\"primary\" (click) = \"back()\" class=\"m-1\">Cancel</button>\r\n  </form>\r\n</ng-container>\r\n\r\n\r\n\r\n<ng-container *ngIf=\"showAdd\">\r\n    <form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"PutSRProvider()\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n               Name\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Name\"  name=\"Provider_Name\" required>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n        <mat-card>\r\n            <mat-card-header>                \r\n               Contact\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Number\" name=\"Provider_Contact\" required>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n        <mat-card>\r\n            <mat-card-header>                \r\n               Address\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Address\"  name=\"Provider_Address\" required>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n        <mat-card>\r\n            <mat-card-header>                \r\n               Email\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Email\"  name=\"Provider_Email\" required>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n           \r\n        <button mat-raised-button color=\"primary\" class=\"m-1\">Save</button>\r\n        &nbsp;\r\n        &nbsp;\r\n        <button mat-raised-button color=\"primary\" (click) = \"back()\" class=\"m-1\">Cancel</button>\r\n      </form>\r\n    </ng-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/staff-schedule/staff-schedule.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff-schedule/staff-schedule.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStaffScheduleStaffScheduleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<h1>Your Tasks</h1>\r\n<div *ngIf=\"hideTable\">\r\n<div fxLayout=\"column\">\r\n    <div class=\"flex-p\"> \r\n        <div fxLayout=\"column\" class=\"mat-elevation-z8\">           \r\n            <mat-form-field class=\"p-1\">\r\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Type to filter all columns\">\r\n            </mat-form-field> \r\n        </div>\r\n        <mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">          \r\n            <ng-container matColumnDef=\"Task_Description\">\r\n                <mat-header-cell *matHeaderCellDef> Task </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Task_Description}} </mat-cell>\r\n            </ng-container>       \r\n            <ng-container matColumnDef=\"Status_Description\">\r\n                <mat-header-cell *matHeaderCellDef> Status </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Status_Description}} </mat-cell>\r\n            </ng-container>\r\n\r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>  \r\n        <mat-paginator #paginator [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10]\"></mat-paginator>      \r\n    </div>\r\n</div>\r\n</div>\r\n<br>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/staff/staff.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/staff.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStaffStaffComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n    <h1> Staff Members Clocked-in for the Day</h1>\r\n    \r\n    <!---------------------------------------------------------------------------------------------------------------------------------------->\r\n    <div>\r\n    <!--Task Table-->\r\n            <mat-table  #table [dataSource]=\"data\" class=\"mat-elevation-z8\">       \r\n                <ng-container matColumnDef=\"Staff_ID\">\r\n                    <mat-header-cell *matHeaderCellDef> ID Number </mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let element\"> {{element.Staff_ID}} </mat-cell>\r\n                </ng-container>         \r\n                   \r\n                <ng-container matColumnDef=\"Staff_Name\">\r\n                    <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let element\"> {{element.Staff_Name}} </mat-cell>\r\n                </ng-container>        \r\n                <ng-container matColumnDef=\"Staff_Surname\">\r\n                    <mat-header-cell *matHeaderCellDef> Surname </mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let element\"> {{element.Staff_Surname}} </mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"Staff_Phone_Number\">\r\n                    <mat-header-cell *matHeaderCellDef> Phone Number </mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let element\"> {{element.Staff_Phone_Number}} </mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"Clock_in_Time\">\r\n                        <mat-header-cell *matHeaderCellDef> Clocked-in Time </mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let element\"> {{element.Clock_in_Time}} </mat-cell>\r\n                    </ng-container>\r\n        \r\n                <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n            </mat-table>  \r\n            <mat-paginator #paginator [pageSize]=\"15\" [pageSizeOptions]=\"[15, 20]\"></mat-paginator>      \r\n        </div>\r\n    </div>\r\n    \r\n    ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/task-type/task-type.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/task-type/task-type.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTaskTypeTaskTypeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Task Types</h1>\r\n<div *ngIf=\"hideTable\">\r\n<button mat-raised-button color=\"primary\" (click) = \"AddTaskType()\" class=\"m-1\">Add New</button>\r\n\r\n<div fxLayout=\"column\">\r\n    <div class=\"flex-p\"> \r\n        <div fxLayout=\"column\" class=\"mat-elevation-z8\">           \r\n            <mat-form-field class=\"p-1\">\r\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Type to filter all columns\">\r\n            </mat-form-field> \r\n        </div>\r\n        <mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">       \r\n            <ng-container matColumnDef=\"Task_Type_ID\">\r\n                <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Task_Type_ID}} </mat-cell>\r\n            </ng-container>         \r\n            <ng-container matColumnDef=\"Task_Type_Description\">\r\n                <mat-header-cell *matHeaderCellDef> Skill Type </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Task_Type_Description}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Actions\">\r\n                <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" >\r\n                    <button mat-fab class=\"m-1\" style=\"color: green; background-color:rgb(51, 49, 49);\" (click) =\"getTaskTypeDetail(element.Task_Type_ID)\">\r\n                        <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <button mat-fab class=\"m-1\" style=\"color: red; background-color: rgb(51, 49, 49);\" (click)=\"deleteTaskType()\">\r\n                        <mat-icon>delete_forever</mat-icon>\r\n                    </button>\r\n                    \r\n               </mat-cell>\r\n            </ng-container>        \r\n\r\n\r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>  \r\n        <mat-paginator #paginator [pageSize]=\"15\" [pageSizeOptions]=\"[15, 20]\"></mat-paginator>      \r\n    </div>\r\n</div>\r\n<br>\r\n</div>\r\n\r\n<ng-container *ngIf=\"show\">\r\n<form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"PutTaskType()\">\r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Task Type\" [(ngModel)]=\"Task_TypeEdit.Task_Type_Description\" name=\"Description\" required>\r\n            </mat-form-field>\r\n                               \r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    \r\n    <button mat-raised-button color=\"primary\" class=\"m-1\">Save Changes</button>\r\n  </form>\r\n  <button mat-raised-button color=\"primary\" class=\"m-1\" (click)=\"back()\">Back</button>\r\n</ng-container>\r\n\r\n\r\n<ng-container *ngIf=\"showAdd\">\r\n    <form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"PutTaskType()\">\r\n    \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n               \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Decription\" [(ngModel)]=\"Task_TypeAdd.Task_Type_Description\" name=\"Description\" required>\r\n                </mat-form-field> \r\n            </mat-card-content>\r\n        </mat-card>\r\n\r\n        <button mat-raised-button color=\"primary\" class=\"m-1\">Save</button>\r\n    </form>\r\n    <button mat-raised-button color=\"primary\" class=\"m-1\" (click)=\"back()\">Back</button>\r\n</ng-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/task/task.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/task/task.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTaskTaskComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Farm Tasks</h1>\r\n<!---------------------------------------------------------------------------------------------------------------------------------------->\r\n<!--Task buttons to add and download-->\r\n<div *ngIf=\"hideTable\">\r\n<button mat-raised-button color=\"primary\" (click) = \"AddTask()\" class=\"m-1\">Add Task</button>\r\n<button mat-raised-button color=\"primary\" (click) = \"download()\" class=\"m-1\">Download</button>\r\n<!--Task Search-->\r\n<div fxLayout=\"column\">\r\n    <div class=\"flex-p\"> \r\n        <div fxLayout=\"column\" class=\"mat-elevation-z8\">         \r\n            <mat-form-field class=\"p-1\">\r\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Type to filter all columns\">\r\n            </mat-form-field> \r\n        </div>\r\n\r\n<!--Task Table-->\r\n        <mat-table  #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">       \r\n            <ng-container matColumnDef=\"Task_ID\">\r\n                <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Task_ID}} </mat-cell>\r\n            </ng-container>         \r\n               \r\n            <ng-container matColumnDef=\"Section_Name\">\r\n                <mat-header-cell *matHeaderCellDef> Section </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Section_Name}} </mat-cell>\r\n            </ng-container>        \r\n            <ng-container matColumnDef=\"Infrastructure_Name\">\r\n                <mat-header-cell *matHeaderCellDef> Infrastructure </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Infrastructure_Name}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Equipment_Description\">\r\n                <mat-header-cell *matHeaderCellDef> Equipment </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Equipment_Description}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Task_Type_Description\">\r\n                    <mat-header-cell *matHeaderCellDef> Type </mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let element\"> {{element.Task_Type_Description}} </mat-cell>\r\n                </ng-container>  \r\n            <ng-container matColumnDef=\"Task_Description\">\r\n                <mat-header-cell *matHeaderCellDef> Task Description </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Task_Description}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Task_Duration\">\r\n                <mat-header-cell *matHeaderCellDef> Duration </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Task_Duration}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Importance_Description\">\r\n                <mat-header-cell *matHeaderCellDef> Importance </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Importance_Description}} </mat-cell>\r\n            </ng-container> \r\n            <ng-container matColumnDef=\"Skill_Description\">\r\n                <mat-header-cell *matHeaderCellDef> Skill </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Skill_Description}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Actions\">\r\n                <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" >\r\n                    <button mat-fab class=\"m-1\" style=\"color: green; background-color:rgb(51, 49, 49)\" (click) ='getTaskDetail(element.Task_ID)'>\r\n                        <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <button mat-fab class=\"m-1\" style=\"color: red; background-color: rgb(51, 49, 49);\" (click)=\"deleteTask()\">\r\n                        <mat-icon>delete_forever</mat-icon>\r\n                    </button>\r\n                    \r\n               </mat-cell>\r\n            </ng-container>\r\n\r\n\r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>  \r\n        <mat-paginator #paginator [pageSize]=\"15\" [pageSizeOptions]=\"[15, 20]\"></mat-paginator>      \r\n    </div>\r\n</div>\r\n<br>\r\n</div>\r\n\r\n<!---------------------------------------------------------------------------------------------------------------------------------->\r\n<!--EDIT TASK------EDIT TASK -->\r\n<ng-container *ngIf=\"show\">\r\n<form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"PutTask()\" >\r\n    \r\n    <!--Section-->\r\n    <mat-card>\r\n        <mat-card-header>                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Section location\" [(ngModel)]=\"SectionSelect\" name=\"Section\">\r\n                    <mat-option *ngFor=\"let type of sections\" [value]=\"type\">\r\n                        {{type}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <!-- Infrastructure-->\r\n    <mat-card>\r\n        <mat-card-header>                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Infrastructure location\" [(ngModel)]=\"InfrastructureSelect\" name=\"Infras\">\r\n                    <mat-option *ngFor=\"let type of infrastructures\" [value]=\"type\">\r\n                        {{type}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n<!-- Equipment-->\r\n    <mat-card>\r\n        <mat-card-header>                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Equipment\" [(ngModel)]=\"EquipmentSelect\" name=\"Equipment\">\r\n                    <mat-option *ngFor=\"let type of equipments\" [value]=\"type\">\r\n                        {{type}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n<!--Task Type-->\r\n    <mat-card>\r\n            <mat-card-header>                \r\n               \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Task Type\" [(ngModel)]=\"selectedValue\" name=\"Type\">\r\n                        <mat-option *ngFor=\"let type of types\" [value]=\"type\">\r\n                            {{type}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                    \r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n        \r\n        <!--Task Description-->\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Task Description\" [(ngModel)]=\"TaskEdit.Task_Description\" name=\"task_description\" required>\r\n            </mat-form-field>\r\n                               \r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <!--Task Duration-->\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Task Duration Minutes\" type=\"number\" [(ngModel)]=\"TaskEdit.Task_Duration\" name=\"task_duration\" required>\r\n            </mat-form-field>\r\n                               \r\n        </mat-card-content>\r\n    </mat-card>\r\n<!--Importance-->\r\n    <mat-card>\r\n        <mat-card-header>                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Importance\" [(ngModel)]=\"ImportanceSelect\" name=\"importance\">\r\n                    <mat-option *ngFor=\"let type of importances\" [value]=\"type\">\r\n                        {{type}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <!--Skills-->\r\n    <mat-card>\r\n            <mat-card-header>\r\n                    Skills Neccessary For Completion                \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\" >\r\n                        <!-- filter skill checkboxes-->\r\n                        <mat-form-field>\r\n                                <mat-label>Type to filter skills</mat-label>\r\n                                    <input matInput  name=\"searchSkills\" >\r\n                            </mat-form-field>\r\n                        <!-- show skills in checkbox format-->\r\n                        <mat-selection-list [(ngModel)]=\"SkillSelect\" name=\"skill_description\">\r\n                            <mat-list-option *ngFor=\"let type of skills\" [value]=\"type\">\r\n                                {{type}}\r\n                            </mat-list-option>\r\n                        </mat-selection-list>\r\n            </mat-card-content>\r\n        </mat-card>\r\n<br>\r\n    <button mat-raised-button color=\"primary\"  class=\"endButton\">Save Changes</button>\r\n    \r\n  </form>\r\n <br> <button mat-raised-button color=\"primary\" class=\"endButton\" (click)=\"back()\">Back</button>\r\n</ng-container>\r\n\r\n\r\n\r\n <!---------------------------------------------------------------------------------------------------------------------------------->\r\n <!-- ADD TASK--------ADD TASK -->\r\n<ng-container *ngIf=\"showAdd\">\r\n    <mat-card class=\"p-0\" >  \r\n    <div class=\"bg-primary text-center py-1\">       \r\n        <h1>Add Task:</h1> \r\n    </div> \r\n    <form class=\"addForm\" [formGroup]=\"form\" name=\"OwnerSub\" #userForm=\"ngForm\" novalidate (ngSubmit)=\"PutTask()\" fxLayout=\"row wrap\" >\r\n        <mat-label id=\"provideLabel\" fxLayoutAlign=\"center\">Please provide the following details:</mat-label>\r\n\r\n         <!-- Section -->\r\n       <mat-card-content fxLayoutAlign=\"center\" fxFlex=\"100\" fxFlex.gt-sm=\"100\" fxFlex.sm=\"100\" class=\"p-1\" fxLayoutGap>\r\n        <div>\r\n            <mat-form-field appearance=\"outline\">\r\n                <mat-label>Section</mat-label>\r\n                <mat-select   placeholder=\"Select Section location\" [(ngModel)]=\"TaskAdd.Section_Name\" name=\"section\" required formControlName=\"section\" >\r\n                    <option  value=\"\" disabled selected >Choose</option>\r\n                    <mat-option *ngFor=\"let type of sections\" [value]=\"type\">\r\n                        {{type}}\r\n                    </mat-option>\r\n                </mat-select>\r\n                <mat-error *ngIf=\"form.controls.section.errors?.required\">Section is required</mat-error>                   \r\n            </mat-form-field> \r\n        </div>\r\n    </mat-card-content>\r\n    \r\n    \r\n    <div fxLayoutAlign=\"center\" fxFlex=\"100\" fxFlex.gt-sm=\"100\" fxFlex.sm=\"100\" class=\"p-1\">\r\n            <mat-label class=\"labelCenter\" fxLayoutAlign=\"center\">Where does the task you are creating take place? </mat-label>\r\n    </div>\r\n    <div  fxLayoutAlign=\"center\" fxFlex=\"100\" fxFlex.gt-sm=\"100\" fxFlex.sm=\"100\" class=\"p-1\">\r\n    <mat-selection-list #list>\r\n            <mat-list-option (click)=\"justSection()\">\r\n                Just on the Section selected\r\n            </mat-list-option>\r\n            \r\n            <mat-list-option (click)=\"justInfrastructure()\">\r\n                On Infrastructure on the Section\r\n            </mat-list-option>\r\n            <div *ngIf=\"infrastructure\">\r\n                    <div fxLayoutAlign=\"center\" fxFlex=\"100\" fxFlex.gt-sm=\"100\" fxFlex.sm=\"50\" class=\"p-1\"fxLayoutGap >\r\n                            <mat-form-field appearance=\"outline\">\r\n                                    <mat-label>Infrastructure</mat-label>\r\n                                <mat-select placeholder=\"Select Infrastructure location\" [(ngModel)]=\"TaskAdd.Infrastructure_Name\" name=\"infrastructure\" required formControlName=\"infrastructure\">\r\n                                    <option value=\"\" disabled selected>Choose</option>\r\n                                    <mat-option *ngFor=\"let type of infrastructures\" [value]=\"type\">\r\n                                        {{type}}\r\n                                    </mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                        </div>\r\n            </div>\r\n            <mat-list-option (click)=\"justEquipment()\" >\r\n                On Equipment on the Section?\r\n            </mat-list-option>\r\n            <div *ngIf=\"equipment\">\r\n            <div  fxLayoutAlign=\"center\" fxFlex=\"100\" fxFlex.gt-sm=\"100\" fxFlex.sm=\"50\" class=\"p-1\"fxLayoutGap >\r\n                    <mat-form-field appearance=\"outline\">\r\n                        <mat-label>Equipment</mat-label>\r\n                        <mat-select placeholder=\"Select Equipment\" [(ngModel)]=\"TaskAdd.Equipment_Description\" name=\"equipment\" required formControlName=\"equipment\" >\r\n                            <option value=\"\" disabled selected>Choose</option>\r\n                            <mat-option *ngFor=\"let type of equipments\" [value]=\"type\">\r\n                                {{type}}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n            <mat-list-option (click)=\"InfrastructureAndEquipment()\">\r\n                On Equipment stored in an Infrastructure on the Section?\r\n            </mat-list-option>\r\n            <div *ngIf=\"infrastructureAndEquipment\">\r\n                    <div fxLayoutAlign=\"center\" fxFlex=\"100\" fxFlex.gt-sm=\"100\" fxFlex.sm=\"50\" class=\"p-1\"fxLayoutGap>\r\n                            <mat-form-field appearance=\"outline\">\r\n                                    <mat-label>Infrastructure</mat-label>\r\n                                <mat-select placeholder=\"Select Infrastructure location\" [(ngModel)]=\"TaskAdd.Infrastructure_Name\" name=\"infrastructure\" required formControlName=\"infrastructure1\">\r\n                                    <option value=\"\" disabled selected>Choose</option>\r\n                                    <mat-option *ngFor=\"let type of infrastructures\" [value]=\"type\">\r\n                                        {{type}}\r\n                                    </mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                        </div>\r\n            \r\n                    <div  fxLayoutAlign=\"center\" fxFlex=\"100\" fxFlex.gt-sm=\"100\" fxFlex.sm=\"50\" class=\"p-1\"fxLayoutGap>\r\n                            <mat-form-field appearance=\"outline\">\r\n                                <mat-label>Equipment</mat-label>\r\n                                <mat-select placeholder=\"Select Equipment\" [(ngModel)]=\"TaskAdd.Equipment_Description\" name=\"equipment\"  required formControlName=\"equipment1\" >\r\n                                    <option value=\"\" disabled selected>Choose</option>\r\n                                    <mat-option *ngFor=\"let type of equipments\" [value]=\"type\">\r\n                                        {{type}}\r\n                                    </mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n        </mat-selection-list>\r\n        \r\n    \r\n    </div>\r\n     \r\n         <!-- Task type dropdown -->\r\n     \r\n         <div fxLayoutAlign=\"center\" fxFlex=\"100\" fxFlex.gt-sm=\"100\" fxFlex.sm=\"50\" class=\"p-1\"fxLayoutGap>\r\n                    <mat-form-field appearance=\"outline\">\r\n                            <mat-label>Task Type</mat-label>\r\n                        <mat-select placeholder=\" Select Task Type\" [(ngModel)]=\"TaskAdd.Task_Type\" name=\"Type\" required formControlName=\"task_type\" >\r\n                            <option value=\"\" disabled selected>Choose</option>\r\n                            <mat-option *ngFor=\"let type of types\" [value]=\"type\">\r\n                                {{type}}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                        <mat-error *ngIf=\"form.controls.task_type.errors?.required\">Task Type is required </mat-error>\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n   \r\n\r\n             <!-- Task Description -->\r\n        \r\n             <div fxFlex=\"100\" fxLayoutAlign=\"center\" class=\"p-1\">\r\n                <mat-form-field class=\"description\" appearance=\"outline\">\r\n                        <mat-label>Task Description</mat-label>\r\n                    <input matInput placeholder=\"Provide Task Description\" [(ngModel)]=\"TaskAdd.Task_Description\" type=\"text\" name=\"task_description\" required formControlName=\"task_description\">\r\n                    <mat-error *ngIf=\"form.controls.task_description.errors?.required\">Task Description is required </mat-error>\r\n                    <mat-error *ngIf=\"form.controls.task_description.errors?.maxlength\">Maximum length 50 characters</mat-error>\r\n                </mat-form-field>\r\n                                   \r\n             </div>\r\n               <!-- Importance -->\r\n       \r\n               <div fxLayoutAlign=\"center\" fxFlex=\"100\" fxFlex.gt-sm=\"100\" fxFlex.sm=\"50\" class=\"p-1\"fxLayoutGap>\r\n                    <mat-form-field appearance=\"outline\">\r\n                            <mat-label>Task Importance</mat-label>\r\n                        <mat-select placeholder=\"Select Task Importance\" [(ngModel)]=\"TaskAdd.Importance_Description\" name=\"importance\" required formControlName=\"importance\">\r\n                            <option value=\"\" disabled selected>Choose</option>\r\n                            <mat-option *ngFor=\"let type of importances\" [value]=\"type\">\r\n                                {{type}}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                        <mat-error *ngIf=\"form.controls.importance.errors?.required\">Importance is required </mat-error>\r\n                    </mat-form-field>\r\n        </div>\r\n\r\n     <!-- Task Duration -->\r\n       \r\n     <div fxLayoutAlign=\"center\" fxFlex=\"100\" fxFlex.gt-sm=\"100\" fxFlex.sm=\"50\" class=\"p-1\"fxLayoutGap>\r\n            \r\n                <mat-form-field appearance=\"outline\">\r\n                        <mat-label>Task Duration</mat-label>\r\n                        <mat-select placeholder=\"Select Task Importance\" [(ngModel)]=\"TaskAdd.Importance_Description\" name=\"importance\" required formControlName=\"task_duration\">\r\n                                <option value=\"\" disabled selected>Choose</option>\r\n                                <mat-option *ngFor=\"let type of time\" [value]=\"type\">\r\n                                    {{type}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                    <mat-error *ngIf=\"form.controls.task_duration.errors?.required\">Task Duration is required </mat-error>\r\n                    <mat-error *ngIf=\"form.controls.task_duration.errors?.max\">Duration cannot exceed 8 hours (480 mins) </mat-error>\r\n                </mat-form-field>\r\n                                   \r\n        </div>\r\n\r\n  \r\n        \r\n    <div  fxLayoutAlign=\"center\" fxFlex=\"100\" fxFlex.gt-sm=\"100\" fxFlex.sm=\"50\" class=\"p-1\" fxLayoutGap >\r\n                        <!-- filter skill checkboxes-->\r\n                          \r\n                        <!-- show skills in checkbox format-->\r\n                        <mat-form-field class=\"skills\" appearance=\"outline\">\r\n                            <mat-label>Staff skills needed for completion</mat-label>\r\n                        <mat-select [(ngModel)]=\"TaskAdd.Skill_Description\" name=\"skillBoxes\" multiple>\r\n                            <mat-option *ngFor=\"let type of skills\" [value]=\"type\">{{type}}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                    \r\n    </div>\r\n    \r\n        <!-- save new task-->\r\n        <div fxLayoutAlign=\"right\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.sm=\"50\" class=\"p-1\" fxLayoutGap>\r\n        <button  mat-raised-button color=\"primary\" type=\"submit\" class=\"endButton\">Save</button>\r\n        \r\n        </div>\r\n        <div fxLayoutAlign=\"left\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.sm=\"50\" class=\"p-1\" fxLayoutGap>\r\n                <button  mat-raised-button color=\"primary\" class=\"otherbutton\"(click)=\"back()\">Back</button>\r\n        </div>\r\n      <!-- go back to the task page with the table-->\r\n      <br>\r\n    </form>\r\n      </mat-card>\r\n    </ng-container>\r\n    <!---------------------------------------------------------------------------------------------------------------------------------->\r\n\r\n";
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


    __webpack_exports__["default"] = "<mat-toolbar color=\"gray\" [fxLayoutAlign]=\"(settings.menuType != 'mini') ? 'space-between center' : 'center center'\" class=\"sidenav-header\">\r\n\r\n    <img src=\"../../../../assets/img/Logo-02.png\"  *ngIf=\"settings.menuType == 'default'\" class=\"logo\" routerLink=\"/\" (click)=\"closeSubMenus()\" style=\"height: 110px; width: 145px;\">\r\n    <svg *ngIf=\"settings.menuType != 'mini'\" class=\"pin\" (click)=\"settings.sidenavIsPinned = !settings.sidenavIsPinned\">\r\n        <path *ngIf=\"!settings.sidenavIsPinned\" d=\"M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z\" />\r\n        <path *ngIf=\"settings.sidenavIsPinned\" d=\"M2,5.27L3.28,4L20,20.72L18.73,22L12.8,16.07V22H11.2V16H6V14L8,12V11.27L2,5.27M16,12L18,14V16H17.82L8,6.18V4H7V2H17V4H16V12Z\" />\r\n    </svg>  \r\n</mat-toolbar>\r\n\r\n\r\n\r\n<perfect-scrollbar class=\"sidenav-menu-outer\" [class.user-block-show]=\"settings.sidenavUserBlock\">\r\n    <div id=\"vertical-menu\">\r\n        <app-vertical-menu [menuItems]=\"menuItems\" [menuParentId]=\"0\"></app-vertical-menu> \r\n    </div>   \r\n</perfect-scrollbar>\r\n\r\n";
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


    __webpack_exports__["default"] = "<button mat-icon-button [matMenuTriggerFor]=\"userMenu\" #userMenuTrigger=\"matMenuTrigger\" >\r\n    <mat-icon>account_circle</mat-icon>\r\n</button>\r\n\r\n<mat-menu #userMenu=\"matMenu\" [overlapTrigger]=\"false\" class=\"toolbar-dropdown-menu user-menu\">\r\n    <!--<span (mouseleave)=\"userMenuTrigger.closeMenu()\">-->\r\n        <mat-toolbar color=\"primary\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"user-info\">\r\n                <img [src]=\"userImage\" alt=\"user-image\" width=\"80\" class=\"rounded mat-elevation-z6\">\r\n                <p>Emilio Verdines <br> <small>Web developer</small></p>\r\n            </div>  \r\n        </mat-toolbar>\r\n        <a mat-menu-item routerLink=\"/profile/projects\"> \r\n            <mat-icon>person</mat-icon>\r\n            <span>Profile</span> \r\n        </a>\r\n        <a mat-menu-item routerLink=\"/profile/user-info\"> \r\n            <mat-icon>edit</mat-icon>\r\n            <span>Edit Profile</span> \r\n        </a>\r\n\r\n\r\n        <a mat-menu-item routerLink=\"help\"> \r\n            <mat-icon>help</mat-icon>\r\n            <span>Help</span> \r\n        </a>\r\n        <div class=\"divider\"></div>\r\n        <a mat-menu-item routerLink=\"/logout\"> \r\n            <mat-icon>power_settings_new</mat-icon>\r\n            <span>Log out</span> \r\n        </a>\r\n    <!--</span>-->\r\n</mat-menu>";
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


    __webpack_exports__["default"] = "<h1 style=\"text-align: center;\">Vehicle Service</h1>\r\n<button mat-raised-button color=\"primary\" (click) = \"addVehicleService()\" class=\"m-1\">Add New</button>\r\n<button mat-raised-button color=\"primary\" (click) = \"Download()\" class=\"m-1\">Download List</button>\r\n<button mat-raised-button color=\"primary\" (click) = \"showServiceNotification()\" class=\"m-1\">Send Service Request</button>\r\n\r\n<div fxLayout=\"column\">\r\n    <div class=\"flex-p\" *ngIf = \"showtable\"> \r\n        <div fxLayout=\"column\" class=\"mat-elevation-z8\" >           \r\n            <mat-form-field class=\"p-1\">\r\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Type to filter all columns\">\r\n            </mat-form-field> \r\n        </div>\r\n        <mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">       \r\n            <ng-container matColumnDef=\"Vehicle_Service_ID\">\r\n                <mat-header-cell *matHeaderCellDef> Service ID </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Vehicle_Service_ID}} </mat-cell>\r\n            </ng-container>         \r\n            <ng-container matColumnDef=\"Vehicle_ID\">\r\n                <mat-header-cell *matHeaderCellDef> Vehicle ID </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Vehicle_ID}} </mat-cell>\r\n            </ng-container>     \r\n            <ng-container matColumnDef=\"Vehicle_Service_Milage\">\r\n                <mat-header-cell *matHeaderCellDef> Service Mileage </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Vehicle_Service_Milage}} </mat-cell>\r\n            </ng-container>        \r\n            <ng-container matColumnDef=\"Vehicle_Service_Description\">\r\n                <mat-header-cell *matHeaderCellDef> Description </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Vehicle_Service_Description}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Vehicle_Service_Start_Date\">\r\n                <mat-header-cell *matHeaderCellDef> Service Start Date </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Vehicle_Service_Start_Date}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Vehicle_Service_End_Date\">\r\n                <mat-header-cell *matHeaderCellDef> Service End Date </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Vehicle_Service_End_Date}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Invoice\">\r\n                <mat-header-cell *matHeaderCellDef>Invoice</mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\">\r\n                    <button mat-fab class=\"m-1\" color=\"red\" (click) ='getVehicleServiceDetail(element.Vehicle_Service_ID)'>\r\n                    <mat-icon>Download Invoice</mat-icon>\r\n                </button></mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Actions\">\r\n                <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" >\r\n                    <button mat-fab class=\"m-1\" color=\"red\" (click) ='getVehicleServiceDetail(element.Vehicle_Service_ID)'>\r\n                        <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <button mat-fab class=\"m-1\" color=\"red\" (click)=\"deleteVehicleService()\">\r\n                        <mat-icon>delete_forever</mat-icon>\r\n                    </button>\r\n                    <button mat-raised-button color=\"primary\">Mileage</button>\r\n               </mat-cell>\r\n            </ng-container>\r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>  \r\n        <mat-paginator #paginator [pageSize]=\"15\" [pageSizeOptions]=\"[15, 20]\"></mat-paginator>      \r\n    </div>\r\n</div>\r\n<br>\r\n\r\n<ng-container *ngIf=\"show\">\r\n<form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"putVehicleService()\" [formGroup] = \"form\" [ngModelOptions]=\"{standalone: true}\">\r\n    <mat-card>\r\n        <mat-card-header>   \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Vehicle\" [(ngModel)]=\"VehicleServEdit.Vehicle_ID\" name=\"Type\" formControlName = \"Type\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-option *ngFor=\"let type of types\" [value]=\"type\">\r\n                        {{type.Vehicle}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n\r\n    <mat-card>\r\n        <mat-card-header>       \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Provider\" [(ngModel)]=\"VehicleServEdit.Provider_ID\" name=\"Provider\" formControlName = \"providers\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-option *ngFor=\"let type of providers\" [value]=\"type\">\r\n                        {{type.Provider}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">     \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Description\" [(ngModel)]=\"VehicleServEdit.Vehicle_Service_Description\" name=\"Desc\" required formControlName = \"Desc\" [ngModelOptions]=\"{standalone: true}\">\r\n                <mat-error *ngIf = \"form.controls.Description.errors?.required\">Description is required</mat-error>\r\n                <mat-error *ngIf = \"form.controls.Description.errors?.maxlength\">Description cannot exceed 150 characters</mat-error>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">    \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Mileage\" [(ngModel)]=\"VehicleServEdit.Vehicle_Service_Mileage\" name=\"Mileage\" required formControlName = \"Mie\" [ngModelOptions]=\"{standalone: true}\">\r\n                <mat-error *ngIf = \"form.controls.Mileage.errors?.required\">Mileage is required</mat-error>\r\n                <mat-error *ngIf = \"form.controls.Mileage.errors?.maxlength\">Mileage cannot exceed 50 characters</mat-error>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">      \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Start\" [(ngModel)]=\"VehicleServEdit.Vehicle_Service_Start_Date\" name=\"Start\" required formControlName = \"Start\" [ngModelOptions]=\"{standalone: true}\">\r\n                <mat-error *ngIf = \"form.controls.Start.errors?.required\">Start Date is required</mat-error>\r\n                <mat-error *ngIf = \"form.controls.Start.errors?.maxlength\">Start Date cannot exceed 8 characters</mat-error>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">    \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"End\" [(ngModel)]=\"VehicleServEdit.Vehicle_Service_End_Date\" name=\"End\" required formControlName = \"End\" [ngModelOptions]=\"{standalone: true}\">\r\n                <mat-error *ngIf = \"form.controls.End.errors?.required\">End Date is required</mat-error>\r\n                <mat-error *ngIf = \"form.controls.End.errors?.maxlength\">End Date cannot exceed 8 characters</mat-error>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">      \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"VSD\" [(ngModel)]=\"VehicleServEdit.VSD_Invoice\" name=\"VSD\" required formControlName = \"VSD \" [ngModelOptions]=\"{standalone: true}\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"file\" style=\"text-align:center;display: block;\">Invoice</label>\r\n                    <input \r\n                        formControlName=\"file\"\r\n                        id=\"file\" \r\n                        type=\"file\" \r\n                        class=\"form-control\"\r\n                        (change)=\"onSelectedFile($event)\">\r\n                </div>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <button mat-raised-button color=\"primary\" class=\"m-1\">Save Changes</button>\r\n  </form>\r\n</ng-container>\r\n\r\n\r\n<ng-container *ngIf=\"showAdd\">\r\n    <form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"putVehicleService()\" [formGroup] = \"form\" [ngModelOptions]=\"{standalone: true}\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n               \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Vehicle Type\" [(ngModel)]=\"VehicleServAdd.Vehicle\" name=\"Type\" required formControlName = \"Type\" [ngModelOptions]=\"{standalone: true}\">\r\n                        <option value=\"\" disabled selected>Choose</option>\r\n                        <mat-option *ngFor=\"let type of types\" [value]=\"type\">\r\n                            {{type.Vehicle}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header>                \r\n               \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Provider\" [(ngModel)]=\"VehicleServAdd.Providers\" name=\"Provider\" required formControlName = \"providers\" [ngModelOptions]=\"{standalone: true}\">\r\n                        <option value=\"\" disabled selected>Choose</option>\r\n                        <mat-option *ngFor=\"let type of providers\" [value]=\"type\">\r\n                            {{type}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">              \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Description\" [(ngModel)]=\"VehicleServAdd.Vehicle_Service_Description\" name=\"Desc\" required formControlName = \"Desc\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-error *ngIf = \"form.controls.Description.errors?.required\">Description is required</mat-error>\r\n                    <mat-error *ngIf = \"form.controls.Description.errors?.maxlength\">Description cannot exceed 150 characters</mat-error>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">             \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Mileage\" [(ngModel)]=\"VehicleServAdd.Vehicle_Service_Milage\" name=\"Mileage\" required formControlName = \"Mileage\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-error *ngIf = \"form.controls.Mileage.errors?.required\">Mileage is required</mat-error>\r\n                    <mat-error *ngIf = \"form.controls.Mileage.errors?.maxlength\">Mileage cannot exceed 50 characters</mat-error>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">        \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Start\" [matDatepicker]=\"updateStartDatePicker\" [(ngModel)]=\"VehicleServAdd.Vehicle_Service_Start_Date\" name=\"Start\" required formControlName = \"Start\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"updateStartDatePicker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #updateStartDatePicker></mat-datepicker>\r\n                    <mat-error *ngIf = \"form.controls.Start.errors?.required\">Start Date is required</mat-error>\r\n                    <mat-error *ngIf = \"form.controls.Start.errors?.maxlength\">Start Date cannot exceed 8 characters</mat-error>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">        \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"End\" [matDatepicker]=\"updateEndDatePicker\" [(ngModel)]=\"VehicleServAdd.Vehicle_Service_End_Date\" name=\"End\" required formControlName = \"End\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"updateStartDatePicker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #updateEndDatePicker></mat-datepicker>\r\n                    <mat-error *ngIf = \"form.controls.End.errors?.required\">End Date is required</mat-error>\r\n                    <mat-error *ngIf = \"form.controls.End.errors?.maxlength\">End Date cannot exceed 8 characters</mat-error>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">  \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"VSD\" [(ngModel)]=\"VehicleServAdd.VSD_Invoice\" name=\"VSD\" required formControlName = \"VSD\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"file\" style=\"text-align:center;display: block;\">Invoice</label>\r\n                        <input \r\n                            formControlName=\"file\"\r\n                            id=\"file\" \r\n                            type=\"file\" \r\n                            class=\"form-control\"\r\n                            (change)=\"onSelectedFile($event)\">\r\n                    </div>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n        \r\n        <button mat-raised-button color=\"primary\" class=\"m-1\">Save</button>\r\n      </form>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"showService\">\r\n        <form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"putServiceNotification()\" [formGroup]=\"form\">\r\n            <mat-card>\r\n                <mat-card-header>                \r\n                   \r\n                </mat-card-header>\r\n                <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                    <mat-form-field>\r\n                        <mat-select placeholder=\"Vehicle Type\" [(ngModel)]=\"VehicleNotificationAdd.Vehicle_ID\" name=\"Type\" formControlName=\"Type\" [ngModelOptions]=\"{standalone: true}\">\r\n                            <option value=\"\" disabled selected>Choose</option>\r\n                            <mat-option *ngFor=\"let type of types\" [value]=\"type\">\r\n                                {{type.Vehicle}}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                        <mat-error *ngIf=\"form.controls.Type.errors?.required\">Type is required</mat-error>\r\n                    </mat-form-field>\r\n                </mat-card-content>\r\n            </mat-card>\r\n        \r\n            <mat-card>\r\n                <mat-card-header>                \r\n                   \r\n                </mat-card-header>\r\n                <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                    <mat-form-field>\r\n                        <mat-select placeholder=\"Provider\" [(ngModel)]=\"VehicleNotificationAdd.Provider_ID\" name=\"Provider\" formControlName = \"providers\" [ngModelOptions]=\"{standalone: true}\">\r\n                            <option value=\"\" disabled selected>Choose</option>\r\n                            <mat-option *ngFor=\"let type of providers\" [value]=\"type\">\r\n                                {{type.Provider}}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                        <mat-error *ngIf=\"form.controls.Provider.errors?.required\">Provider is required</mat-error>\r\n                    </mat-form-field>\r\n                </mat-card-content>\r\n            </mat-card>\r\n        \r\n            <mat-card>\r\n                <mat-card-header fxLayoutAlign=\"center\">              \r\n                </mat-card-header>\r\n                <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Description\" [(ngModel)]=\"VehicleNotificationAdd.Vehicle_Service_Description\" name=\"Desc\" formControlName=\"Description\" [ngModelOptions]=\"{standalone: true}\">\r\n                        <mat-error *ngIf=\"form.controls.Description.errors?.required\">Description is required</mat-error>\r\n                        <mat-error *ngIf=\"form.controls.End.errors?.maxlength\">Description cannot exceed 150 characters</mat-error>\r\n                    </mat-form-field>\r\n                </mat-card-content>\r\n            </mat-card>\r\n        \r\n            <mat-card>\r\n                <mat-card-header fxLayoutAlign=\"center\">             \r\n                </mat-card-header>\r\n                <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Mileage\" [(ngModel)]=\"VehicleNotificationAdd.Vehicle_Service_Mileage\" name=\"Mileage\" formControlName=\"Mileage\" [ngModelOptions]=\"{standalone: true}\">\r\n                        <mat-error *ngIf=\"form.controls.Mileage.errors?.required\">Mileage is required</mat-error>\r\n                        <mat-error *ngIf=\"form.controls.Mileage.errors?.maxlength\">Mileage cannot exceed 50 characters</mat-error>\r\n                    </mat-form-field>\r\n                </mat-card-content>\r\n            </mat-card>\r\n        \r\n            <mat-card>\r\n                <mat-card-header fxLayoutAlign=\"center\">        \r\n                </mat-card-header>\r\n                <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Start\" [(ngModel)]=\"VehicleNotificationAdd.Vehicle_Service_Start_Date\" name=\"Start\" formControlName=\"Start\" [ngModelOptions]=\"{standalone: true}\">\r\n                        <mat-datepicker-toggle matSuffix [for]=\"updateStartDatePicker\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #updateStartDatePicker></mat-datepicker>\r\n                        <mat-error *ngIf=\"form.controls.Start.errors?.required\">Start Date is required</mat-error>\r\n                        <mat-error *ngIf=\"form.controls.Start.errors?.maxlength\">Start Date cannot exceed 8 characters</mat-error>\r\n                    </mat-form-field>\r\n                </mat-card-content>\r\n            </mat-card>\r\n        \r\n            <mat-card>\r\n                <mat-card-header fxLayoutAlign=\"center\">        \r\n                </mat-card-header>\r\n                <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"End\" [matDatepicker]=\"updateEndDatePicker\" [(ngModel)]=\"VehicleNotificationAdd.Vehicle_Service_End_Date\" name=\"End\" formControlName=\"End\" [ngModelOptions]=\"{standalone: true}\">\r\n                        <mat-datepicker-toggle matSuffix [for]=\"updateStartDatePicker\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #updateEndDatePicker></mat-datepicker>\r\n                        <mat-error *ngIf=\"form.controls.End.errors?.required\">End Date is required</mat-error>\r\n                        <mat-error *ngIf=\"form.controls.End.errors?.maxlength\">End Date cannot exceed 8 characters</mat-error>\r\n                    </mat-form-field>\r\n                </mat-card-content>\r\n            </mat-card>    \r\n            <button mat-raised-button color=\"primary\" class=\"m-1\" (click)=\"sentNotification()\">Save</button>\r\n          </form>\r\n        </ng-container> \r\n\r\n";
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


    __webpack_exports__["default"] = "<h1 style=\"text-align: center;\">Vehicle Types</h1>\r\n<button mat-raised-button color=\"primary\" (click) = \"AddVehicleType()\" class=\"m-1\">Add New</button>\r\n\r\n<div fxLayout=\"column\">\r\n    <div class=\"flex-p\" > \r\n        <div fxLayout=\"column\" class=\"mat-elevation-z8\" >           \r\n            <mat-form-field class=\"p-1\">\r\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Type to filter all columns\">\r\n            </mat-form-field> \r\n        </div>\r\n        <mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">       \r\n            <ng-container matColumnDef=\"Type_ID\">\r\n                <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Type_ID}} </mat-cell>\r\n            </ng-container>         \r\n            <ng-container matColumnDef=\"Type\">\r\n                <mat-header-cell *matHeaderCellDef> Type </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Type}} </mat-cell>\r\n            </ng-container>     \r\n\r\n            <ng-container matColumnDef=\"Actions\">\r\n                <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" >\r\n                    <button mat-fab class=\"m-1\"  style=\"color: green; background-color:rgb(51, 49, 49)\" (click) ='getTypeDetail(element.Vehicle_ID)'>\r\n                        <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <button mat-fab class=\"m-1\"  style=\"color: red; background-color:rgb(51, 49, 49)\" (click)=\"deleteVehicle()\">\r\n                        <mat-icon>delete_forever</mat-icon>\r\n                    </button>\r\n               </mat-cell>\r\n            </ng-container>\r\n\r\n            \r\n\r\n\r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>  \r\n        <mat-paginator #paginator [pageSize]=\"15\" [pageSizeOptions]=\"[15, 20]\"></mat-paginator>      \r\n    </div>\r\n</div>\r\n<br>\r\n\r\n<ng-container *ngIf=\"show\">\r\n<form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"PutVehicle()\">\r\n           \r\n           \r\n    \r\n            <mat-card>\r\n                <mat-card-header fxLayoutAlign=\"center\">                \r\n                   \r\n                </mat-card-header>\r\n                <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Type\" [(ngModel)]=\"TypeEdit\"   name=\"PurchMileage\" required>\r\n                    </mat-form-field>\r\n                                       \r\n                </mat-card-content>\r\n            </mat-card>\r\n        \r\n\r\n    <button mat-raised-button color=\"primary\" class=\"m-1\">Save Changes</button>\r\n  </form>\r\n  <button mat-raised-button color=\"primary\" class=\"m-1\" (click)=\"showTable()\">Back</button>\r\n</ng-container>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<ng-container *ngIf=\"showAdd\">\r\n    <form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"AddNewVehicle()\">\r\n            \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n               \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Type\"  name=\"PurchMileage\" required>\r\n                </mat-form-field>\r\n                                   \r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n       \r\n\r\n        \r\n        <button mat-raised-button color=\"primary\" class=\"m-1\">Save</button>\r\n      </form>\r\n      <button mat-raised-button color=\"primary\" class=\"m-1\" (click)=\"showTable()\">Back</button>\r\n    </ng-container>";
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


    __webpack_exports__["default"] = "<h1 style=\"text-align: center;\">Vehicle</h1>\r\n<button mat-raised-button color=\"primary\" (click) = \"AddVehicle()\" class=\"m-1\">Add New</button>\r\n<button mat-raised-button color=\"primary\" (click) = \"LoadTypes()\" class=\"m-1\">Vehicle Types</button>\r\n<button mat-raised-button color=\"primary\" (click) = \"Download()\" class=\"m-1\">Download List</button>\r\n<div fxLayout=\"column\">\r\n    <div class=\"flex-p\" *ngIf = \"showtable\"> \r\n        <div fxLayout=\"column\" class=\"mat-elevation-z8\" >           \r\n            <mat-form-field class=\"p-1\">\r\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Type to filter all columns\">\r\n            </mat-form-field> \r\n        </div>\r\n        <mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">       \r\n            <ng-container matColumnDef=\"Vehicle_ID\" >\r\n                <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" > {{element.Vehicle_ID}} </mat-cell>\r\n            </ng-container>         \r\n            <ng-container matColumnDef=\"Vehicle_Type_Description\">\r\n                <mat-header-cell *matHeaderCellDef> Type </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Vehicle_Type_Description}} </mat-cell>\r\n            </ng-container>     \r\n            <ng-container matColumnDef=\"Model_Description\">\r\n                <mat-header-cell *matHeaderCellDef> Model </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Model_Description}} </mat-cell>\r\n            </ng-container>        \r\n            <ng-container matColumnDef=\"Section_Name\">\r\n                <mat-header-cell *matHeaderCellDef> Section </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Section_Name}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Vehicle_Mileage_Current\">\r\n                <mat-header-cell *matHeaderCellDef> Curr. Mileage </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Vehicle_Mileage_Current}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Vehicle_Registration_Number\">\r\n                <mat-header-cell *matHeaderCellDef> Reg no </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.Vehicle_Registration_Number}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"is_Active\">\r\n                <mat-header-cell *matHeaderCellDef> Active </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.is_Active}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Actions\">\r\n                <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" >\r\n                    <button mat-fab class=\"m-1\"  style=\"color: green; background-color:rgb(51, 49, 49)\" (click) ='getVehicleDetail(element.Vehicle_ID)'>\r\n                        <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <button mat-fab class=\"m-1\"  style=\"color: red; background-color:rgb(51, 49, 49)\" (click)=\"deleteVehicle()\">\r\n                        <mat-icon>delete_forever</mat-icon>\r\n                    </button>\r\n                    <button mat-raised-button color=\"primary\"  (click) = \"Prompt()\">Mileage</button>\r\n                    \r\n               </mat-cell>\r\n            </ng-container>\r\n\r\n            \r\n\r\n\r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>  \r\n        <mat-paginator #paginator [pageSize]=\"15\" [pageSizeOptions]=\"[15, 20]\"></mat-paginator>      \r\n    </div>\r\n</div>\r\n<br>\r\n\r\n<ng-container *ngIf=\"show\">\r\n<form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"putVehicle()\" [formGroup] = \"form\">\r\n    <mat-card>\r\n        <mat-card-header>                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Vehicle Type\" [(ngModel)]=\"selectedValue\" name=\"Type\" formControlName = \"Type\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-option *ngFor=\"let type of types\" [value]=\"type.Vehicle_Type_ID\">\r\n                        {{type.Vehicle_Type_Description}}\r\n                    </mat-option>\r\n                </mat-select>\r\n                \r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header>                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Section\" [(ngModel)]=\"SectionSelect\" name=\"Section\" formControlName = \"Section\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-option *ngFor=\"let type of sections\" [value]=\"type\">\r\n                        {{type}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header>                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Infrastructure location\" [(ngModel)]=\"InfrastructureSelect\" name=\"Infras\" formControlName = \"Infras\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-option *ngFor=\"let type of infrastructures\" [value]=\"type\">\r\n                        {{type}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header>                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Make\" [(ngModel)]=\"MakeSelect\" name=\"Make\" formControlName = \"Make\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-option *ngFor=\"let type of makes\" [value]=\"type\">\r\n                        {{type}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header>                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Model\" [(ngModel)]=\"ModelSelect\" name=\"Model\" formControlName = \"Model\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-option *ngFor=\"let type of models\" [value]=\"type\">\r\n                        {{type}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n   \r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Year\" [(ngModel)]=\"VehicleEdit.Year\" name=\"Year\" required formControlName = \"Year\" [ngModelOptions]=\"{standalone: true}\">\r\n                <mat-error *ngIf = \"form.controls.Year.errors?.required\">Year is required</mat-error>\r\n                <mat-error *ngIf = \"form.controls.Year.errors?.maxlength\">Year cannot exceed 4 charachters</mat-error>\r\n            </mat-form-field>\r\n                               \r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Colour\" [(ngModel)]=\"VehicleEdit.Colour\" name=\"Color\" required formControlName = \"Color\" [ngModelOptions]=\"{standalone: true}\">\r\n                <mat-error *ngIf = \"form.controls.Color.errors?.required\">Color is required</mat-error>\r\n                <mat-error *ngIf = \"form.controls.Color.errors?.maxlength\">Color cannot exceed 16 charachters</mat-error>\r\n            </mat-form-field>\r\n                               \r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Mileage on purchase\" [(ngModel)]=\"VehicleEdit.StartMileage\" name=\"PurchMileage\" required formControlName = \"PurchMileage\" [ngModelOptions]=\"{standalone: true}\">\r\n                <mat-error *ngIf = \"form.controls.PurchMileage.errors?.required\">Purchase Mileage is required</mat-error>\r\n                <mat-error *ngIf = \"form.controls.PurchMileage.errors?.maxlength\">Purchase Mileage cannot exceed 8 charachters</mat-error>\r\n            </mat-form-field>\r\n                               \r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Current Mileage\" [(ngModel)]=\"VehicleEdit.CurrentMileage\" name=\"CurrMileage\" required formControlName = \"CurrMileage\" [ngModelOptions]=\"{standalone: true}\" >\r\n                <mat-error *ngIf = \"form.controls.CurrMileage.errors?.required\">Current Mileage is required</mat-error>\r\n                <mat-error *ngIf = \"form.controls.CurrMileage.errors?.maxlength\">Current Mileage cannot exceed 8 charachters</mat-error>\r\n            </mat-form-field>\r\n                               \r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Service interval\" [(ngModel)]=\"VehicleEdit.ServiceIntervals\" name=\"Interval\" required  formControlName = \"Interval\" [ngModelOptions]=\"{standalone: true}\">\r\n                <mat-error *ngIf = \"form.controls.Interval.errors?.required\">Interval Mileage is required</mat-error>\r\n                <mat-error *ngIf = \"form.controls.Interval.errors?.maxlength\">Interval Mileage cannot exceed 8 charachters</mat-error>\r\n            </mat-form-field>\r\n                               \r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Last Service mileage\" [(ngModel)]=\"VehicleEdit.LastServiceKM\" name=\"LastService\" required formControlName = \"LastService\" [ngModelOptions]=\"{standalone: true}\">\r\n                <mat-error *ngIf = \"form.controls.LastService.errors?.required\">Last Service Mileage is required</mat-error>\r\n                <mat-error *ngIf = \"form.controls.LastService.errors?.maxlength\">Last Service Mileage cannot exceed 8 charachters</mat-error>\r\n            </mat-form-field>\r\n                               \r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Registration\" [(ngModel)]=\"VehicleEdit.Registration\" name=\"Registration\" required formControlName = \"Registration\" [ngModelOptions]=\"{standalone: true}\">\r\n                <mat-error *ngIf = \"form.controls.Registration.errors?.required\">Registration is required</mat-error>\r\n                <mat-error *ngIf = \"form.controls.Registration.errors?.maxlength\">Registration cannot exceed 15 charachters</mat-error>\r\n            </mat-form-field>\r\n                               \r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"DateOfPurchase\" [(ngModel)]=\"VehicleEdit.DateofPurchase\" name=\"PurchaseDate\" required formControlName = \"PurchaseDate\" [ngModelOptions]=\"{standalone: true}\">\r\n                <mat-error *ngIf = \"form.controls.PurchaseDate.errors?.required\">PurchaseDate is required</mat-error>\r\n                <mat-error *ngIf = \"form.controls.PurchaseDate.errors?.maxlength\">Purchase Date cannot exceed 10 charachters</mat-error>\r\n            </mat-form-field>\r\n                               \r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"PurchasePrice\" [(ngModel)]=\"VehicleEdit.DateofPurchase\" name=\"Price\" required formControlName = \"Price\" [ngModelOptions]=\"{standalone: true}\">\r\n                <mat-error *ngIf = \"form.controls.Price.errors?.required\">Price is required</mat-error>\r\n                <mat-error *ngIf = \"form.controls.Price.errors?.maxlength\">Price cannot exceed 6 charachters</mat-error>\r\n            </mat-form-field>\r\n                               \r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">                \r\n           \r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Status\" [(ngModel)]=\"VehicleEdit.Active\" name=\"Active\" required [ngModelOptions]=\"{standalone: true}\">\r\n            </mat-form-field>\r\n                               \r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    \r\n    <button mat-raised-button color=\"primary\" class=\"m-1\">Save Changes</button>\r\n  </form>\r\n  <button mat-raised-button color=\"primary\" class=\"m-1\" (click)=\"showTable()\">Back</button>\r\n</ng-container>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<ng-container *ngIf=\"showAdd\">\r\n    <form ng-show=\"show\" name=\"OwnerSub\" #userForm=\"ngForm\" ngNativeValidate (ngSubmit)=\"addNewVehicle()\" [formGroup] = \"form\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n               \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Vehicle Type\" [(ngModel)]=\"VehicleAdd.Vehicle_Type\" name=\"Type\" required formControlName = \"Type\" [ngModelOptions]=\"{standalone: true}\">\r\n                        <option value=\"\" disabled selected>Choose</option>\r\n                        <mat-option *ngFor=\"let type of types\" [value]=\"type\">\r\n                            {{type}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header>                \r\n               \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Section\" [(ngModel)]=\"VehicleAdd.Section\" name=\"Section\" required formControlName = \"Section\" [ngModelOptions]=\"{standalone: true}\">\r\n                        <option value=\"\" disabled selected>Choose</option>\r\n                        <mat-option *ngFor=\"let type of sections\" [value]=\"type\">\r\n                            {{type}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n\r\n        <mat-card>\r\n            <mat-card-header>                \r\n               \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Infrastructure location\" [(ngModel)]=\"VehicleAdd.Infrastructure\" name=\"Infras\" required formControlName = \"Infras\" [ngModelOptions]=\"{standalone: true}\">\r\n                        <option value=\"\" disabled selected>Choose</option>\r\n                        <mat-option *ngFor=\"let type of infrastructures\" [value]=\"type\">\r\n                            {{type}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header>                \r\n               \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Make\" [(ngModel)]=\"VehicleAdd.Make\" name=\"Make\" required formControlName = \"Make\" [ngModelOptions]=\"{standalone: true}\">\r\n                        <option value=\"\" disabled selected>Choose</option>\r\n                        <mat-option *ngFor=\"let type of makes\" [value]=\"type\">\r\n                            {{type}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header>                \r\n               \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Model\" [(ngModel)]=\"VehicleAdd.Model_Description\" name=\"Model\" required formControlName = \"Model\" [ngModelOptions]=\"{standalone: true}\">\r\n                        <option value=\"\" disabled selected>Choose</option>\r\n                        <mat-option *ngFor=\"let type of models\" [value]=\"type\">\r\n                            {{type}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n\r\n    \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n               \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Year\" [(ngModel)]=\"VehicleAdd.Year\" name=\"Year\" required formControlName = \"Year\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-error *ngIf = \"form.controls.Year.errors?.required\">Year is required</mat-error>\r\n                    <mat-error *ngIf = \"form.controls.Year.errors?.maxlength\">Year cannot exceed 4 charachters</mat-error>\r\n                </mat-form-field>\r\n                                   \r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n               \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Colour\" [(ngModel)]=\"VehicleAdd.Colour\" name=\"Color\" required formControlName = \"Color\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-error *ngIf = \"form.controls.Color.errors?.required\">Color is required</mat-error>\r\n                    <mat-error *ngIf = \"form.controls.Color.errors?.maxlength\">Color cannot exceed 16 charachters</mat-error>\r\n                </mat-form-field>\r\n                                   \r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n               \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Mileage on purchase\" [(ngModel)]=\"VehicleAdd.StartMileage\" name=\"PurchMileage\" required formControlName = \"PurchMileage\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-error *ngIf = \"form.controls.PurchMileage.errors?.required\">Purchase Mileage is required</mat-error>\r\n                    <mat-error *ngIf = \"form.controls.PurchMileage.errors?.maxlength\">Purchase Mileage cannot exceed 8 charachters</mat-error>\r\n                </mat-form-field>\r\n                                   \r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n               \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Current Mileage\" [(ngModel)]=\"VehicleAdd.CurrentMileage\" name=\"CurrMileage\" required formControlName = \"CurrMileage\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-error *ngIf = \"form.controls.CurrMileage.errors?.required\">Current Mileage is required</mat-error>\r\n                    <mat-error *ngIf = \"form.controls.CurrMileage.errors?.maxlength\">Current Mileage cannot exceed 8 charachters</mat-error>\r\n                </mat-form-field>\r\n                                   \r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n               \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Service interval\" [(ngModel)]=\"VehicleAdd.ServiceIntervals\" name=\"Interval\" required formControlName = \"Interval\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-error *ngIf = \"form.controls.Interval.errors?.required\">Interval Mileage is required</mat-error>\r\n                    <mat-error *ngIf = \"form.controls.Interval.errors?.maxlength\">Interval Mileage cannot exceed 8 charachters</mat-error>\r\n                </mat-form-field>\r\n                                   \r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n               \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Last Service mileage\" [(ngModel)]=\"VehicleAdd.LastServiceKM\" name=\"LastService\" required formControlName = \"LastService\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-error *ngIf = \"form.controls.LastService.errors?.required\">Last Service Mileage is required</mat-error>\r\n                    <mat-error *ngIf = \"form.controls.LastService.errors?.maxlength\">Last Service Mileage cannot exceed 8 charachters</mat-error>\r\n                </mat-form-field>\r\n                                   \r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n               \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Registration\" [(ngModel)]=\"VehicleAdd.Registration\" name=\"Registration\" required formControlName = \"Registration\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-error *ngIf = \"form.controls.Registration.errors?.required\">Registration is required</mat-error>\r\n                    <mat-error *ngIf = \"form.controls.Registration.errors?.maxlength\">Registration cannot exceed 15 charachters</mat-error>\r\n                </mat-form-field>\r\n                                   \r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n               \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"DateOfPurchase\" [(ngModel)]=\"VehicleAdd.DateofPurchase\" name=\"PurchaseDate\" required formControlName = \"PurchaseDate\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-error *ngIf = \"form.controls.PurchaseDate.errors?.required\">PurchaseDate is required</mat-error>\r\n                    <mat-error *ngIf = \"form.controls.PurchaseDate.errors?.maxlength\">Purchase Date cannot exceed 10 charachters</mat-error>\r\n                </mat-form-field>\r\n                                   \r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n               \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"PurchasePrice\" [(ngModel)]=\"VehicleAdd.Price\" name=\"Price\" required formControlName = \"Price\" [ngModelOptions]=\"{standalone: true}\">\r\n                    <mat-error *ngIf = \"form.controls.Price.errors?.required\">Price is required</mat-error>\r\n                    <mat-error *ngIf = \"form.controls.Price.errors?.maxlength\">Price cannot exceed 6 charachters</mat-error>\r\n                </mat-form-field>\r\n                                   \r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n               \r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Status\" [(ngModel)]=\"VehicleAdd.Active\" name=\"Active\" required [ngModelOptions]=\"{standalone: true}\">\r\n                </mat-form-field>\r\n                                   \r\n            </mat-card-content>\r\n        </mat-card>\r\n    \r\n        \r\n        <button mat-raised-button color=\"primary\" class=\"m-1\">Save</button>\r\n      </form>\r\n      <button mat-raised-button color=\"primary\" class=\"m-1\" (click)=\"showTable()\">Back</button>\r\n    </ng-container>";
    /***/
  },

  /***/
  "./src/app/Models/Farm.ts":
  /*!********************************!*\
    !*** ./src/app/Models/Farm.ts ***!
    \********************************/

  /*! exports provided: Farm, PostFarm, PostForeman */

  /***/
  function srcAppModelsFarmTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Farm", function () {
      return Farm;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostFarm", function () {
      return PostFarm;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostForeman", function () {
      return PostForeman;
    });

    var Farm = function Farm() {
      _classCallCheck(this, Farm);
    };

    var PostFarm = function PostFarm() {
      _classCallCheck(this, PostFarm);
    };

    var PostForeman = function PostForeman() {
      _classCallCheck(this, PostForeman);
    };
    /***/

  },

  /***/
  "./src/app/Models/Fault.ts":
  /*!*********************************!*\
    !*** ./src/app/Models/Fault.ts ***!
    \*********************************/

  /*! exports provided: Faults */

  /***/
  function srcAppModelsFaultTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Faults", function () {
      return Faults;
    });

    var Faults = function Faults() {
      _classCallCheck(this, Faults);
    };
    /***/

  },

  /***/
  "./src/app/Models/Infrastructures.ts":
  /*!*******************************************!*\
    !*** ./src/app/Models/Infrastructures.ts ***!
    \*******************************************/

  /*! exports provided: Infrastructures */

  /***/
  function srcAppModelsInfrastructuresTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Infrastructures", function () {
      return Infrastructures;
    });

    var Infrastructures = function Infrastructures() {
      _classCallCheck(this, Infrastructures);
    };
    /***/

  },

  /***/
  "./src/app/Models/InsuranceProviders.ts":
  /*!**********************************************!*\
    !*** ./src/app/Models/InsuranceProviders.ts ***!
    \**********************************************/

  /*! exports provided: Insurance, PostInsurance */

  /***/
  function srcAppModelsInsuranceProvidersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Insurance", function () {
      return Insurance;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostInsurance", function () {
      return PostInsurance;
    });

    var Insurance = function Insurance() {
      _classCallCheck(this, Insurance);
    };

    var PostInsurance = function PostInsurance() {
      _classCallCheck(this, PostInsurance);
    };
    /***/

  },

  /***/
  "./src/app/Models/Maintenance.ts":
  /*!***************************************!*\
    !*** ./src/app/Models/Maintenance.ts ***!
    \***************************************/

  /*! exports provided: Maintenance */

  /***/
  function srcAppModelsMaintenanceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Maintenance", function () {
      return Maintenance;
    });

    var Maintenance = function Maintenance() {
      _classCallCheck(this, Maintenance);
    };
    /***/

  },

  /***/
  "./src/app/Models/RepairLogs.ts":
  /*!**************************************!*\
    !*** ./src/app/Models/RepairLogs.ts ***!
    \**************************************/

  /*! exports provided: RepairLogs */

  /***/
  function srcAppModelsRepairLogsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RepairLogs", function () {
      return RepairLogs;
    });

    var RepairLogs = function RepairLogs() {
      _classCallCheck(this, RepairLogs);
    };
    /***/

  },

  /***/
  "./src/app/Models/RepairRequests.ts":
  /*!******************************************!*\
    !*** ./src/app/Models/RepairRequests.ts ***!
    \******************************************/

  /*! exports provided: RepairRequests */

  /***/
  function srcAppModelsRepairRequestsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RepairRequests", function () {
      return RepairRequests;
    });

    var RepairRequests = function RepairRequests() {
      _classCallCheck(this, RepairRequests);
    };
    /***/

  },

  /***/
  "./src/app/Models/SRProvider.ts":
  /*!**************************************!*\
    !*** ./src/app/Models/SRProvider.ts ***!
    \**************************************/

  /*! exports provided: SRProviders, PostSRProviders */

  /***/
  function srcAppModelsSRProviderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SRProviders", function () {
      return SRProviders;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostSRProviders", function () {
      return PostSRProviders;
    });

    var SRProviders = function SRProviders() {
      _classCallCheck(this, SRProviders);
    };

    var PostSRProviders = function PostSRProviders() {
      _classCallCheck(this, PostSRProviders);
    };
    /***/

  },

  /***/
  "./src/app/Models/ScheduledTasks.ts":
  /*!******************************************!*\
    !*** ./src/app/Models/ScheduledTasks.ts ***!
    \******************************************/

  /*! exports provided: ScheduledTasks */

  /***/
  function srcAppModelsScheduledTasksTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScheduledTasks", function () {
      return ScheduledTasks;
    });

    var ScheduledTasks = function ScheduledTasks() {
      _classCallCheck(this, ScheduledTasks);
    };
    /***/

  },

  /***/
  "./src/app/Models/Section.ts":
  /*!***********************************!*\
    !*** ./src/app/Models/Section.ts ***!
    \***********************************/

  /*! exports provided: Sections */

  /***/
  function srcAppModelsSectionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Sections", function () {
      return Sections;
    });

    var Sections = function Sections() {
      _classCallCheck(this, Sections);
    };
    /***/

  },

  /***/
  "./src/app/Models/SectionType.ts":
  /*!***************************************!*\
    !*** ./src/app/Models/SectionType.ts ***!
    \***************************************/

  /*! exports provided: SectionTypes */

  /***/
  function srcAppModelsSectionTypeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SectionTypes", function () {
      return SectionTypes;
    });

    var SectionTypes = function SectionTypes() {
      _classCallCheck(this, SectionTypes);
    };
    /***/

  },

  /***/
  "./src/app/Models/Skill.ts":
  /*!*********************************!*\
    !*** ./src/app/Models/Skill.ts ***!
    \*********************************/

  /*! exports provided: Skill, PostSkill */

  /***/
  function srcAppModelsSkillTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Skill", function () {
      return Skill;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostSkill", function () {
      return PostSkill;
    });

    var Skill = function Skill() {
      _classCallCheck(this, Skill);
    };

    var PostSkill = function PostSkill() {
      _classCallCheck(this, PostSkill);
    };
    /***/

  },

  /***/
  "./src/app/Models/Task.ts":
  /*!********************************!*\
    !*** ./src/app/Models/Task.ts ***!
    \********************************/

  /*! exports provided: Task */

  /***/
  function srcAppModelsTaskTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Task", function () {
      return Task;
    });

    var Task = function Task() {
      _classCallCheck(this, Task);
    };
    /***/

  },

  /***/
  "./src/app/Models/Task_Type.ts":
  /*!*************************************!*\
    !*** ./src/app/Models/Task_Type.ts ***!
    \*************************************/

  /*! exports provided: Task_Type */

  /***/
  function srcAppModelsTask_TypeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Task_Type", function () {
      return Task_Type;
    });

    var Task_Type = function Task_Type() {
      _classCallCheck(this, Task_Type);
    };
    /***/

  },

  /***/
  "./src/app/Models/VehicleService.ts":
  /*!******************************************!*\
    !*** ./src/app/Models/VehicleService.ts ***!
    \******************************************/

  /*! exports provided: VehicleService, PostVehicleService, PostNotification */

  /***/
  function srcAppModelsVehicleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VehicleService", function () {
      return VehicleService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostVehicleService", function () {
      return PostVehicleService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostNotification", function () {
      return PostNotification;
    });

    var VehicleService = function VehicleService() {
      _classCallCheck(this, VehicleService);
    };

    var PostVehicleService = function PostVehicleService() {
      _classCallCheck(this, PostVehicleService);
    };

    var PostNotification = function PostNotification() {
      _classCallCheck(this, PostNotification);
    };
    /***/

  },

  /***/
  "./src/app/Models/Vehicles.ts":
  /*!************************************!*\
    !*** ./src/app/Models/Vehicles.ts ***!
    \************************************/

  /*! exports provided: Vehicles, postVehicle */

  /***/
  function srcAppModelsVehiclesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Vehicles", function () {
      return Vehicles;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "postVehicle", function () {
      return postVehicle;
    });

    var Vehicles = function Vehicles() {
      _classCallCheck(this, Vehicles);
    };

    var postVehicle = function postVehicle() {
      _classCallCheck(this, postVehicle);
    };
    /***/

  },

  /***/
  "./src/app/Models/equipment.ts":
  /*!*************************************!*\
    !*** ./src/app/Models/equipment.ts ***!
    \*************************************/

  /*! exports provided: Equipment, PostEquipment */

  /***/
  function srcAppModelsEquipmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Equipment", function () {
      return Equipment;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostEquipment", function () {
      return PostEquipment;
    });

    var Equipment = function Equipment() {
      _classCallCheck(this, Equipment);
    };

    var PostEquipment = function PostEquipment() {
      _classCallCheck(this, PostEquipment);
    };
    /***/

  },

  /***/
  "./src/app/about/about.component.scss":
  /*!********************************************!*\
    !*** ./src/app/about/about.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAboutAboutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-card {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvRDpcXDM3MFxcRmluYWxGcm9udGVuZC9zcmNcXGFwcFxcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFVLGtCQUFBO0FDRVYiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHt0ZXh0LWFsaWduOiBjZW50ZXJ9IiwibWF0LWNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
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

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-about',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./about.component.scss */
      "./src/app/about/about.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], AboutComponent);
    /***/
  },

  /***/
  "./src/app/active-list/active-list.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/active-list/active-list.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppActiveListActiveListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjdGl2ZS1saXN0L2FjdGl2ZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/active-list/active-list.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/active-list/active-list.component.ts ***!
    \******************************************************/

  /*! exports provided: ActiveListComponent */

  /***/
  function srcAppActiveListActiveListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActiveListComponent", function () {
      return ActiveListComponent;
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

    var ActiveListComponent = /*#__PURE__*/function () {
      function ActiveListComponent() {
        _classCallCheck(this, ActiveListComponent);
      }

      _createClass(ActiveListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "Download",
        value: function Download() {}
      }, {
        key: "NewFunc",
        value: function NewFunc() {}
      }, {
        key: "Cancel",
        value: function Cancel() {}
      }, {
        key: "back",
        value: function back() {}
      }]);

      return ActiveListComponent;
    }();

    ActiveListComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-active-list',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./active-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/active-list/active-list.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./active-list.component.scss */
      "./src/app/active-list/active-list.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], ActiveListComponent);
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


    __webpack_exports__["default"] = ".app {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n#app-spinner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  background: #fff;\n  z-index: 999999;\n  visibility: visible;\n  opacity: 1;\n  transition: visibility 0.5s, opacity 0.3s linear;\n}\n\n#app-spinner.hide {\n  visibility: hidden;\n  opacity: 0;\n}\n\n#app-spinner h4 {\n  margin-top: 10px;\n  letter-spacing: 0.02em;\n  opacity: 0;\n  text-transform: uppercase;\n  -webkit-animation: loading-text-opacity 2s linear 0s infinite normal;\n  animation: loading-text-opacity 2s linear 0s infinite normal;\n}\n\n@keyframes loading-text-opacity {\n  0% {\n    opacity: 0;\n  }\n  20% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes loading-text-opacity {\n  0% {\n    opacity: 0;\n  }\n  20% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXDM3MFxcRmluYWxGcm9udGVuZC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTtFQUtJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBR0EsZ0RBQUE7QUNDSjs7QURBSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQ0VSOztBREFJO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUdBLG9FQUFBO0VBQ0EsNERBQUE7QUNFUjs7QURFQTtFQUNJO0lBQUssVUFBQTtFQ0VQO0VEREU7SUFBSyxVQUFBO0VDSVA7RURIRTtJQUFLLFVBQUE7RUNNUDtFRExFO0lBQUssVUFBQTtFQ1FQO0FBQ0Y7O0FEREE7RUFDSTtJQUFLLFVBQUE7RUNrQlA7RURqQkU7SUFBSyxVQUFBO0VDb0JQO0VEbkJFO0lBQUssVUFBQTtFQ3NCUDtFRHJCRTtJQUFLLFVBQUE7RUN3QlA7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDowO1xyXG4gICAgcmlnaHQ6MDtcclxuICAgIGJvdHRvbTowO1xyXG59XHJcblxyXG4jYXBwLXNwaW5uZXJ7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHotaW5kZXg6IDk5OTk5OTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuNXMsIG9wYWNpdHkgMC4zcyBsaW5lYXI7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IHZpc2liaWxpdHkgMC41cywgb3BhY2l0eSAwLjNzIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC41cywgb3BhY2l0eSAwLjNzIGxpbmVhcjtcclxuICAgICYuaGlkZXtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgb3BhY2l0eTogMDsgXHJcbiAgICB9XHJcbiAgICBoNHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIC1tb3otYW5pbWF0aW9uOiBsb2FkaW5nLXRleHQtb3BhY2l0eSAycyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO1xyXG4gICAgICAgIC1vLWFuaW1hdGlvbjogbG9hZGluZy10ZXh0LW9wYWNpdHkgMnMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZGluZy10ZXh0LW9wYWNpdHkgMnMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDtcclxuICAgICAgICBhbmltYXRpb246IGxvYWRpbmctdGV4dC1vcGFjaXR5IDJzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbG9hZGluZy10ZXh0LW9wYWNpdHkge1xyXG4gICAgMCUgIHtvcGFjaXR5OiAwfVxyXG4gICAgMjAlIHtvcGFjaXR5OiAwfVxyXG4gICAgNTAlIHtvcGFjaXR5OiAxfVxyXG4gICAgMTAwJXtvcGFjaXR5OiAwfVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBsb2FkaW5nLXRleHQtb3BhY2l0eSB7XHJcbiAgICAwJSAge29wYWNpdHk6IDB9XHJcbiAgICAyMCUge29wYWNpdHk6IDB9XHJcbiAgICA1MCUge29wYWNpdHk6IDF9XHJcbiAgICAxMDAle29wYWNpdHk6IDB9XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWRpbmctdGV4dC1vcGFjaXR5IHtcclxuICAgIDAlICB7b3BhY2l0eTogMH1cclxuICAgIDIwJSB7b3BhY2l0eTogMH1cclxuICAgIDUwJSB7b3BhY2l0eTogMX1cclxuICAgIDEwMCV7b3BhY2l0eTogMH1cclxufVxyXG5ALW8ta2V5ZnJhbWVzIGxvYWRpbmctdGV4dC1vcGFjaXR5IHtcclxuICAgIDAlICB7b3BhY2l0eTogMH1cclxuICAgIDIwJSB7b3BhY2l0eTogMH1cclxuICAgIDUwJSB7b3BhY2l0eTogMX1cclxuICAgIDEwMCV7b3BhY2l0eTogMH1cclxufVxyXG4iLCIuYXBwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG5cbiNhcHAtc3Bpbm5lciB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjVzLCBvcGFjaXR5IDAuM3MgbGluZWFyO1xuICAtbW96LXRyYW5zaXRpb246IHZpc2liaWxpdHkgMC41cywgb3BhY2l0eSAwLjNzIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjVzLCBvcGFjaXR5IDAuM3MgbGluZWFyO1xufVxuI2FwcC1zcGlubmVyLmhpZGUge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG59XG4jYXBwLXNwaW5uZXIgaDQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICBvcGFjaXR5OiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAtbW96LWFuaW1hdGlvbjogbG9hZGluZy10ZXh0LW9wYWNpdHkgMnMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDtcbiAgLW8tYW5pbWF0aW9uOiBsb2FkaW5nLXRleHQtb3BhY2l0eSAycyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO1xuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZGluZy10ZXh0LW9wYWNpdHkgMnMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDtcbiAgYW5pbWF0aW9uOiBsb2FkaW5nLXRleHQtb3BhY2l0eSAycyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO1xufVxuXG5Aa2V5ZnJhbWVzIGxvYWRpbmctdGV4dC1vcGFjaXR5IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMjAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgbG9hZGluZy10ZXh0LW9wYWNpdHkge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAyMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkaW5nLXRleHQtb3BhY2l0eSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDIwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBsb2FkaW5nLXRleHQtb3BhY2l0eSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDIwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufSJdfQ== */";
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

    var AppComponent = /*#__PURE__*/function () {
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
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


    var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10__);
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


    var _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./vehicle/vehicle.component */
    "./src/app/vehicle/vehicle.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _equipment_equipment_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./equipment/equipment.component */
    "./src/app/equipment/equipment.component.ts");
    /* harmony import */


    var _farm_health_farm_health_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./farm-health/farm-health.component */
    "./src/app/farm-health/farm-health.component.ts");
    /* harmony import */


    var _insurnace_provider_insurnace_provider_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./insurnace-provider/insurnace-provider.component */
    "./src/app/insurnace-provider/insurnace-provider.component.ts");
    /* harmony import */


    var _vehicle_service_vehicle_service_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./vehicle-service/vehicle-service.component */
    "./src/app/vehicle-service/vehicle-service.component.ts");
    /* harmony import */


    var _farm_farm_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./farm/farm.component */
    "./src/app/farm/farm.component.ts");
    /* harmony import */


    var _equipment_types_equipment_types_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./equipment-types/equipment-types.component */
    "./src/app/equipment-types/equipment-types.component.ts");
    /* harmony import */


    var _vehicle_types_vehicle_types_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./vehicle-types/vehicle-types.component */
    "./src/app/vehicle-types/vehicle-types.component.ts");
    /* harmony import */


    var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @swimlane/ngx-charts */
    "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");
    /* harmony import */


    var _infrastructure_infrastructure_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./infrastructure/infrastructure.component */
    "./src/app/infrastructure/infrastructure.component.ts");
    /* harmony import */


    var _scheduledtasks_scheduledtasks_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./scheduledtasks/scheduledtasks.component */
    "./src/app/scheduledtasks/scheduledtasks.component.ts");
    /* harmony import */


    var _repair_log_repair_log_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./repair-log/repair-log.component */
    "./src/app/repair-log/repair-log.component.ts");
    /* harmony import */


    var _sr_provider_sr_provider_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./sr-provider/sr-provider.component */
    "./src/app/sr-provider/sr-provider.component.ts");
    /* harmony import */


    var _active_list_active_list_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./active-list/active-list.component */
    "./src/app/active-list/active-list.component.ts");
    /* harmony import */


    var _fault_log_fault_log_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./fault-log/fault-log.component */
    "./src/app/fault-log/fault-log.component.ts");
    /* harmony import */


    var _maintenance_log_maintenance_log_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./maintenance-log/maintenance-log.component */
    "./src/app/maintenance-log/maintenance-log.component.ts");
    /* harmony import */


    var _faultreport_faultreport_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./faultreport/faultreport.component */
    "./src/app/faultreport/faultreport.component.ts");
    /* harmony import */


    var _fm_main_fm_main_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./fm-main/fm-main.component */
    "./src/app/fm-main/fm-main.component.ts");
    /* harmony import */


    var _section_report_section_report_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ./section-report/section-report.component */
    "./src/app/section-report/section-report.component.ts");
    /* harmony import */


    var _section_section_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ./section/section.component */
    "./src/app/section/section.component.ts");
    /* harmony import */


    var _section_type_section_type_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ./section-type/section-type.component */
    "./src/app/section-type/section-type.component.ts");
    /* harmony import */


    var _audit_log_audit_log_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! ./audit-log/audit-log.component */
    "./src/app/audit-log/audit-log.component.ts");
    /* harmony import */


    var _email_sent_email_sent_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! ./email-sent/email-sent.component */
    "./src/app/email-sent/email-sent.component.ts");
    /* harmony import */


    var _new_password_new_password_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! ./new-password/new-password.component */
    "./src/app/new-password/new-password.component.ts");
    /* harmony import */


    var _request_email_request_email_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! ./request-email/request-email.component */
    "./src/app/request-email/request-email.component.ts");
    /* harmony import */


    var _skill_skill_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
    /*! ./skill/skill.component */
    "./src/app/skill/skill.component.ts");
    /* harmony import */


    var _staff_staff_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
    /*! ./staff/staff.component */
    "./src/app/staff/staff.component.ts");
    /* harmony import */


    var _task_task_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
    /*! ./task/task.component */
    "./src/app/task/task.component.ts");
    /* harmony import */


    var _task_type_task_type_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
    /*! ./task-type/task-type.component */
    "./src/app/task-type/task-type.component.ts");
    /* harmony import */


    var _maintenance_report_maintenance_report_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
    /*! ./maintenance-report/maintenance-report.component */
    "./src/app/maintenance-report/maintenance-report.component.ts");
    /* harmony import */


    var _staff_schedule_staff_schedule_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
    /*! ./staff-schedule/staff-schedule.component */
    "./src/app/staff-schedule/staff-schedule.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _logout_logout_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(
    /*! ./logout/logout.component */
    "./src/app/logout/logout.component.ts");
    /* harmony import */


    var _app_equipment_equipmentservice__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(
    /*! ../app/equipment/equipmentservice */
    "./src/app/equipment/equipmentservice.ts");
    /* harmony import */


    var _app_equipment_types_equipmenttypeservice__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(
    /*! ../app/equipment-types/equipmenttypeservice */
    "./src/app/equipment-types/equipmenttypeservice.ts");
    /* harmony import */


    var _app_vehicle_vehicleservice__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(
    /*! ../app/vehicle/vehicleservice */
    "./src/app/vehicle/vehicleservice.ts");
    /* harmony import */


    var _skill_skill_dialog_skill_dialog_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(
    /*! ./skill/skill-dialog/skill-dialog.component */
    "./src/app/skill/skill-dialog/skill-dialog.component.ts");
    /* harmony import */


    var _skill_editskill_dialog_editskill_dialog_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(
    /*! ./skill/editskill-dialog/editskill-dialog.component */
    "./src/app/skill/editskill-dialog/editskill-dialog.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
      wheelPropagation: true,
      suppressScrollX: true
    }; // For setup
    // For database
    // For Storage    <<<<<<
    //==================================Add all service here=============================

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_fire__WEBPACK_IMPORTED_MODULE_65__["AngularFireModule"].initializeApp({
        apiKey: "AIzaSyCqkWTeMLdmWaF6quvPZulOz4jxvVtnmgE",
        authDomain: "agrilogphotoservice.firebaseapp.com",
        databaseURL: "https://agrilogphotoservice.firebaseio.com",
        projectId: "agrilogphotoservice",
        storageBucket: "agrilogphotoservice.appspot.com",
        messagingSenderId: "240406745743",
        appId: "1:240406745743:web:34f47cb1646c237c11d6fa",
        measurementId: "G-P6XQ0VE3X7"
      }), _angular_fire_database__WEBPACK_IMPORTED_MODULE_66__["AngularFireDatabaseModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_67__["AngularFireStorageModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_31__["CommonModule"], ngx_gauge__WEBPACK_IMPORTED_MODULE_6__["NgxGaugeModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_39__["NgxChartsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_64__["HttpClientModule"], _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
        apiKey: 'AIzaSyAir4tXhx3X-wcdZnhe8TLlo9J2m_AKx6w'
      }), ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_9__["CalendarModule"].forRoot({
        provide: angular_calendar__WEBPACK_IMPORTED_MODULE_9__["DateAdapter"],
        useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10__["adapterFactory"]
      }), _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__["PipesModule"], _app_routing__WEBPACK_IMPORTED_MODULE_13__["routing"]],
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"], _pages_pages_component__WEBPACK_IMPORTED_MODULE_15__["PagesComponent"], _pages_blank_blank_component__WEBPACK_IMPORTED_MODULE_16__["BlankComponent"], _pages_search_search_component__WEBPACK_IMPORTED_MODULE_17__["SearchComponent"], _pages_errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__["NotFoundComponent"], _pages_errors_error_error_component__WEBPACK_IMPORTED_MODULE_19__["ErrorComponent"], _theme_components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_21__["SidenavComponent"], _theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_22__["VerticalMenuComponent"], _theme_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_23__["HorizontalMenuComponent"], _theme_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_24__["BreadcrumbComponent"], _theme_components_flags_menu_flags_menu_component__WEBPACK_IMPORTED_MODULE_25__["FlagsMenuComponent"], _theme_components_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_26__["FullScreenComponent"], _theme_components_applications_applications_component__WEBPACK_IMPORTED_MODULE_27__["ApplicationsComponent"], _theme_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_28__["MessagesComponent"], _theme_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_29__["UserMenuComponent"], _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_30__["VehicleComponent"], _equipment_equipment_component__WEBPACK_IMPORTED_MODULE_32__["EquipmentComponent"], _farm_health_farm_health_component__WEBPACK_IMPORTED_MODULE_33__["FarmHealthComponent"], _farm_farm_component__WEBPACK_IMPORTED_MODULE_36__["FarmComponent"], _vehicle_service_vehicle_service_component__WEBPACK_IMPORTED_MODULE_35__["VehicleServiceComponent"], _insurnace_provider_insurnace_provider_component__WEBPACK_IMPORTED_MODULE_34__["InsurnaceProviderComponent"], _equipment_types_equipment_types_component__WEBPACK_IMPORTED_MODULE_37__["EquipmentTypesComponent"], _vehicle_types_vehicle_types_component__WEBPACK_IMPORTED_MODULE_38__["VehicleTypesComponent"], _infrastructure_infrastructure_component__WEBPACK_IMPORTED_MODULE_40__["InfrastructureComponent"], _scheduledtasks_scheduledtasks_component__WEBPACK_IMPORTED_MODULE_41__["ScheduledtasksComponent"], _repair_log_repair_log_component__WEBPACK_IMPORTED_MODULE_42__["RepairLogComponent"], _sr_provider_sr_provider_component__WEBPACK_IMPORTED_MODULE_43__["SrProviderComponent"], _active_list_active_list_component__WEBPACK_IMPORTED_MODULE_44__["ActiveListComponent"], _fault_log_fault_log_component__WEBPACK_IMPORTED_MODULE_45__["FaultLogComponent"], _maintenance_log_maintenance_log_component__WEBPACK_IMPORTED_MODULE_46__["MaintenanceLogComponent"], _faultreport_faultreport_component__WEBPACK_IMPORTED_MODULE_47__["FaultreportComponent"], _fm_main_fm_main_component__WEBPACK_IMPORTED_MODULE_48__["FmMainComponent"], _section_report_section_report_component__WEBPACK_IMPORTED_MODULE_49__["SectionReportComponent"], _section_section_component__WEBPACK_IMPORTED_MODULE_50__["SectionComponent"], _section_type_section_type_component__WEBPACK_IMPORTED_MODULE_51__["SectionTypeComponent"], _audit_log_audit_log_component__WEBPACK_IMPORTED_MODULE_52__["AuditLogComponent"], _email_sent_email_sent_component__WEBPACK_IMPORTED_MODULE_53__["EmailSentComponent"], _new_password_new_password_component__WEBPACK_IMPORTED_MODULE_54__["NewPasswordComponent"], _request_email_request_email_component__WEBPACK_IMPORTED_MODULE_55__["RequestEmailComponent"], _skill_skill_component__WEBPACK_IMPORTED_MODULE_56__["SkillComponent"], _staff_staff_component__WEBPACK_IMPORTED_MODULE_57__["StaffComponent"], _task_task_component__WEBPACK_IMPORTED_MODULE_58__["TaskComponent"], _task_type_task_type_component__WEBPACK_IMPORTED_MODULE_59__["TaskTypeComponent"], _maintenance_report_maintenance_report_component__WEBPACK_IMPORTED_MODULE_60__["MaintenanceReportComponent"], _staff_schedule_staff_schedule_component__WEBPACK_IMPORTED_MODULE_61__["StaffScheduleComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_62__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_63__["AboutComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_68__["LogoutComponent"], _skill_skill_dialog_skill_dialog_component__WEBPACK_IMPORTED_MODULE_72__["SkillDialogComponent"], _skill_editskill_dialog_editskill_dialog_component__WEBPACK_IMPORTED_MODULE_73__["EditskillDialogComponent"]],
      entryComponents: [_theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_22__["VerticalMenuComponent"]],
      providers: [_app_settings__WEBPACK_IMPORTED_MODULE_20__["AppSettings"], {
        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PERFECT_SCROLLBAR_CONFIG"],
        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      }, {
        provide: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayContainer"],
        useClass: _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_5__["CustomOverlayContainer"]
      }, [_app_equipment_equipmentservice__WEBPACK_IMPORTED_MODULE_69__["EquipmentService"]], [_app_equipment_types_equipmenttypeservice__WEBPACK_IMPORTED_MODULE_70__["EquipmentTypeService"]], [_app_vehicle_vehicleservice__WEBPACK_IMPORTED_MODULE_71__["VehicleService"]]],
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


    var _insurnace_provider_insurnace_provider_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./insurnace-provider/insurnace-provider.component */
    "./src/app/insurnace-provider/insurnace-provider.component.ts");
    /* harmony import */


    var _vehicle_service_vehicle_service_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./vehicle-service/vehicle-service.component */
    "./src/app/vehicle-service/vehicle-service.component.ts");
    /* harmony import */


    var _vehicle_types_vehicle_types_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./vehicle-types/vehicle-types.component */
    "./src/app/vehicle-types/vehicle-types.component.ts");
    /* harmony import */


    var _equipment_types_equipment_types_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./equipment-types/equipment-types.component */
    "./src/app/equipment-types/equipment-types.component.ts");
    /* harmony import */


    var _scheduledtasks_scheduledtasks_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./scheduledtasks/scheduledtasks.component */
    "./src/app/scheduledtasks/scheduledtasks.component.ts");
    /* harmony import */


    var _repair_log_repair_log_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./repair-log/repair-log.component */
    "./src/app/repair-log/repair-log.component.ts");
    /* harmony import */


    var _infrastructure_infrastructure_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./infrastructure/infrastructure.component */
    "./src/app/infrastructure/infrastructure.component.ts");
    /* harmony import */


    var _active_list_active_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./active-list/active-list.component */
    "./src/app/active-list/active-list.component.ts");
    /* harmony import */


    var _fault_log_fault_log_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./fault-log/fault-log.component */
    "./src/app/fault-log/fault-log.component.ts");
    /* harmony import */


    var _fm_main_fm_main_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./fm-main/fm-main.component */
    "./src/app/fm-main/fm-main.component.ts");
    /* harmony import */


    var _maintenance_log_maintenance_log_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./maintenance-log/maintenance-log.component */
    "./src/app/maintenance-log/maintenance-log.component.ts");
    /* harmony import */


    var _faultreport_faultreport_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./faultreport/faultreport.component */
    "./src/app/faultreport/faultreport.component.ts");
    /* harmony import */


    var _section_section_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./section/section.component */
    "./src/app/section/section.component.ts");
    /* harmony import */


    var _section_type_section_type_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./section-type/section-type.component */
    "./src/app/section-type/section-type.component.ts");
    /* harmony import */


    var _sr_provider_sr_provider_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./sr-provider/sr-provider.component */
    "./src/app/sr-provider/sr-provider.component.ts");
    /* harmony import */


    var _audit_log_audit_log_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./audit-log/audit-log.component */
    "./src/app/audit-log/audit-log.component.ts");
    /* harmony import */


    var _email_sent_email_sent_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./email-sent/email-sent.component */
    "./src/app/email-sent/email-sent.component.ts");
    /* harmony import */


    var _new_password_new_password_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./new-password/new-password.component */
    "./src/app/new-password/new-password.component.ts");
    /* harmony import */


    var _request_email_request_email_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./request-email/request-email.component */
    "./src/app/request-email/request-email.component.ts");
    /* harmony import */


    var _skill_skill_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./skill/skill.component */
    "./src/app/skill/skill.component.ts");
    /* harmony import */


    var _staff_staff_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./staff/staff.component */
    "./src/app/staff/staff.component.ts");
    /* harmony import */


    var _task_task_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./task/task.component */
    "./src/app/task/task.component.ts");
    /* harmony import */


    var _task_type_task_type_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./task-type/task-type.component */
    "./src/app/task-type/task-type.component.ts");
    /* harmony import */


    var _section_report_section_report_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./section-report/section-report.component */
    "./src/app/section-report/section-report.component.ts");
    /* harmony import */


    var _maintenance_report_maintenance_report_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./maintenance-report/maintenance-report.component */
    "./src/app/maintenance-report/maintenance-report.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _logout_logout_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./logout/logout.component */
    "./src/app/logout/logout.component.ts");

    var routes = [{
      path: '',
      component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_1__["PagesComponent"],
      children: [{
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_35__["HomeComponent"]
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
          return __webpack_require__.e(
          /*! import() | pages-charts-charts-module */
          "pages-charts-charts-module").then(__webpack_require__.bind(null,
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
          return __webpack_require__.e(
          /*! import() | pages-dynamic-menu-dynamic-menu-module */
          "pages-dynamic-menu-dynamic-menu-module").then(__webpack_require__.bind(null,
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
        component: _vehicle_service_vehicle_service_component__WEBPACK_IMPORTED_MODULE_11__["VehicleServiceComponent"]
      }, {
        path: 'eqTypes',
        component: _equipment_types_equipment_types_component__WEBPACK_IMPORTED_MODULE_13__["EquipmentTypesComponent"]
      }, {
        path: 'veTypes',
        component: _vehicle_types_vehicle_types_component__WEBPACK_IMPORTED_MODULE_12__["VehicleTypesComponent"]
      }, {
        path: 'schedule',
        component: _scheduledtasks_scheduledtasks_component__WEBPACK_IMPORTED_MODULE_14__["ScheduledtasksComponent"]
      }, {
        path: 'repairlog',
        component: _repair_log_repair_log_component__WEBPACK_IMPORTED_MODULE_15__["RepairLogComponent"]
      }, {
        path: 'infrastructure',
        component: _infrastructure_infrastructure_component__WEBPACK_IMPORTED_MODULE_16__["InfrastructureComponent"]
      }, {
        path: 'active-list',
        component: _active_list_active_list_component__WEBPACK_IMPORTED_MODULE_17__["ActiveListComponent"]
      }, {
        path: 'fault-log',
        component: _fault_log_fault_log_component__WEBPACK_IMPORTED_MODULE_18__["FaultLogComponent"]
      }, {
        path: 'fm-main',
        component: _fm_main_fm_main_component__WEBPACK_IMPORTED_MODULE_19__["FmMainComponent"]
      }, {
        path: 'maintenance',
        component: _maintenance_log_maintenance_log_component__WEBPACK_IMPORTED_MODULE_20__["MaintenanceLogComponent"]
      }, {
        path: 'report',
        component: _faultreport_faultreport_component__WEBPACK_IMPORTED_MODULE_21__["FaultreportComponent"]
      }, {
        path: 'sec-report',
        component: _section_report_section_report_component__WEBPACK_IMPORTED_MODULE_33__["SectionReportComponent"]
      }, {
        path: 'section',
        component: _section_section_component__WEBPACK_IMPORTED_MODULE_22__["SectionComponent"]
      }, {
        path: 'sec-type',
        component: _section_type_section_type_component__WEBPACK_IMPORTED_MODULE_23__["SectionTypeComponent"]
      }, {
        path: 'sr-prov',
        component: _sr_provider_sr_provider_component__WEBPACK_IMPORTED_MODULE_24__["SrProviderComponent"]
      }, {
        path: 'audit-log',
        component: _audit_log_audit_log_component__WEBPACK_IMPORTED_MODULE_25__["AuditLogComponent"]
      }, {
        path: 'emailsent',
        component: _email_sent_email_sent_component__WEBPACK_IMPORTED_MODULE_26__["EmailSentComponent"]
      }, {
        path: 'newPass',
        component: _new_password_new_password_component__WEBPACK_IMPORTED_MODULE_27__["NewPasswordComponent"]
      }, {
        path: 'reqEmail',
        component: _request_email_request_email_component__WEBPACK_IMPORTED_MODULE_28__["RequestEmailComponent"]
      }, {
        path: 'insure',
        component: _insurnace_provider_insurnace_provider_component__WEBPACK_IMPORTED_MODULE_10__["InsurnaceProviderComponent"]
      }, {
        path: 'skill',
        component: _skill_skill_component__WEBPACK_IMPORTED_MODULE_29__["SkillComponent"]
      }, {
        path: 'staff',
        component: _staff_staff_component__WEBPACK_IMPORTED_MODULE_30__["StaffComponent"]
      }, {
        path: 'task',
        component: _task_task_component__WEBPACK_IMPORTED_MODULE_31__["TaskComponent"]
      }, {
        path: 'task-type',
        component: _task_type_task_type_component__WEBPACK_IMPORTED_MODULE_32__["TaskTypeComponent"]
      }, {
        path: 'maintenance-report',
        component: _maintenance_report_maintenance_report_component__WEBPACK_IMPORTED_MODULE_34__["MaintenanceReportComponent"]
      }, {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_36__["AboutComponent"]
      }, {
        path: 'logout',
        component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_37__["LogoutComponent"]
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
  "./src/app/audit-log/audit-log.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/audit-log/audit-log.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuditLogAuditLogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1ZGl0LWxvZy9hdWRpdC1sb2cuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/audit-log/audit-log.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/audit-log/audit-log.component.ts ***!
    \**************************************************/

  /*! exports provided: AuditLogComponent */

  /***/
  function srcAppAuditLogAuditLogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuditLogComponent", function () {
      return AuditLogComponent;
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

    var AuditLogComponent = /*#__PURE__*/function () {
      function AuditLogComponent() {
        _classCallCheck(this, AuditLogComponent);
      }

      _createClass(AuditLogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "back",
        value: function back() {}
      }]);

      return AuditLogComponent;
    }();

    AuditLogComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-audit-log',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./audit-log.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/audit-log/audit-log.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./audit-log.component.scss */
      "./src/app/audit-log/audit-log.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], AuditLogComponent);
    /***/
  },

  /***/
  "./src/app/email-sent/email-sent.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/email-sent/email-sent.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEmailSentEmailSentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtYWlsLXNlbnQvZW1haWwtc2VudC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/email-sent/email-sent.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/email-sent/email-sent.component.ts ***!
    \****************************************************/

  /*! exports provided: EmailSentComponent */

  /***/
  function srcAppEmailSentEmailSentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailSentComponent", function () {
      return EmailSentComponent;
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

    var EmailSentComponent = /*#__PURE__*/function () {
      function EmailSentComponent() {
        _classCallCheck(this, EmailSentComponent);
      }

      _createClass(EmailSentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EmailSentComponent;
    }();

    EmailSentComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-email-sent',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./email-sent.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/email-sent/email-sent.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./email-sent.component.scss */
      "./src/app/email-sent/email-sent.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], EmailSentComponent);
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _equipmenttypeservice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./equipmenttypeservice */
    "./src/app/equipment-types/equipmenttypeservice.ts");

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

    var EquipmentTypesComponent = /*#__PURE__*/function () {
      function EquipmentTypesComponent(appSettings, router, http, eqtService) {
        _classCallCheck(this, EquipmentTypesComponent);

        this.appSettings = appSettings;
        this.router = router;
        this.http = http;
        this.eqtService = eqtService;
        this.displayedColumns = ['Type_ID', 'Type', 'Actions'];
        this.show = false; // <<< Show edit form

        this.showtable = true; // <<<  show table variable

        this.showAdd = false; //<<< show add form variable

        this.data = []; // <<< data goes here

        this.settings = this.appSettings.settings;
      } //=======================================Filter table======================


      _createClass(EquipmentTypesComponent, [{
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.dataSource.filter = filterValue.trim().toLowerCase();
        } //======================================Paginator=========================

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
        } //=====================================Formchange to show edit===========

      }, {
        key: "changeform",
        value: function changeform() {
          if (this.show == false) {
            this.show = true;
            this.showAdd = false;
            this.showtable = false;
          }
        } //====================================Formchange to show add============

      }, {
        key: "AddVehicleType",
        value: function AddVehicleType() {
          if (this.show == true) {
            this.show = false;
          }

          this.showAdd = true;
          this.showtable = false;
        } //=================================New type POST========================

      }, {
        key: "AddNewVehicleType",
        value: function AddNewVehicleType() {} //=================================Get type details to edit============

      }, {
        key: "getTypeDetail",
        value: function getTypeDetail(selected) {
          var _this = this;

          this.eqtService.getEquipmentTypeDetails(selected).subscribe( //<<<<<<Get equipment types
          function (response) {
            _this.data1 = response;
            console.log(_this.data1);
            _this.TypeEdit = _this.data1;
            _this.editSelect = selected;
          });
          this.changeform();
        } //========================================Re show table================

      }, {
        key: "showTable",
        value: function showTable() {
          this.showtable = true;
          this.showAdd = false;
          this.show = false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (localStorage.getItem("jwtToken") === null) {
            this.router.navigateByUrl("login");
          } else {
            localStorage.setItem("currentFarm", "7"); //<<<<<< Remove when done!!!!!!!!!!!!!!!!!!!!

            this.getData();
          }
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this2 = this;

          this.eqtService.getEquipmentType().subscribe(function (response) {
            _this2.data1 = response;
            _this2.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this2.data1);
            _this2.dataSource.paginator = _this2.paginator;
          }, function (error) {
            alert("An error has occured, please re login");

            _this2.router.navigateByUrl("logout");
          });
        } //===============================================================

      }, {
        key: "putType",
        value: function putType() {
          this.eqtService.putEquipmentType(this.TypeEdit, this.editSelect).subscribe(function (success) {
            console.log("Success");
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return EquipmentTypesComponent;
    }();

    EquipmentTypesComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _equipmenttypeservice__WEBPACK_IMPORTED_MODULE_6__["EquipmentTypeService"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]), __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])], EquipmentTypesComponent.prototype, "paginator", void 0);

    EquipmentTypesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-equipment-types',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./equipment-types.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/equipment-types/equipment-types.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./equipment-types.component.scss */
      "./src/app/equipment-types/equipment-types.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _equipmenttypeservice__WEBPACK_IMPORTED_MODULE_6__["EquipmentTypeService"]])], EquipmentTypesComponent);
    /***/
  },

  /***/
  "./src/app/equipment-types/equipmenttypeservice.ts":
  /*!*********************************************************!*\
    !*** ./src/app/equipment-types/equipmenttypeservice.ts ***!
    \*********************************************************/

  /*! exports provided: EquipmentTypeService */

  /***/
  function srcAppEquipmentTypesEquipmenttypeserviceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipmentTypeService", function () {
      return EquipmentTypeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

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

    var EquipmentTypeService = /*#__PURE__*/function () {
      function EquipmentTypeService(http) {
        _classCallCheck(this, EquipmentTypeService);

        this.http = http;
        this.baseURL = "http://35.178.156.37/api/";
      } //=========================================================


      _createClass(EquipmentTypeService, [{
        key: "getEquipmentType",
        value: function getEquipmentType() {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.get(this.baseURL + "EquipmentTypes/" + localStorage.getItem("currentFarm"), ops);
        } //=========================================================

      }, {
        key: "getEquipmentTypeDetails",
        value: function getEquipmentTypeDetails(Id) {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.get(this.baseURL + "EquipmentTypeDetails/" + Id.toString(), ops);
        } //=========================================================

      }, {
        key: "postEquipmentType",
        value: function postEquipmentType(equipment) {} //=========================================================

      }, {
        key: "putEquipmentType",
        value: function putEquipmentType(equipmentT, Id) {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.put(this.baseURL + "EquipmentType/put/" + Id.toString(), equipmentT, ops);
        }
      }]);

      return EquipmentTypeService;
    }();

    EquipmentTypeService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    EquipmentTypeService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], EquipmentTypeService);
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


    __webpack_exports__["default"] = ".mat-column-is_Active {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 5% !important;\n  width: 28% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\nmat-header-cell {\n  background-color: #308b30;\n  font-size: 16px;\n}\n\nmat-card {\n  width: 70%;\n  align-items: center;\n  margin-left: 15%;\n}\n\n.m-1 {\n  color: green;\n  background-color: #333131;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXF1aXBtZW50L0Q6XFwzNzBcXEZpbmFsRnJvbnRlbmQvc3JjXFxhcHBcXGVxdWlwbWVudFxcZXF1aXBtZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lcXVpcG1lbnQvZXF1aXBtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBRUEsc0JBQUE7RUFFQSxpQkFBQTtFQUVBLHFCQUFBO0VBQ0EsYUFBQTtBQ0RKOztBRElFO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDREo7O0FESUE7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0RKOztBRElBO0VBQ0MsWUFBQTtFQUNDLHlCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9lcXVpcG1lbnQvZXF1aXBtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jb2x1bW4taXNfQWN0aXZlIHtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgNSUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAyOCUgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgXHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIFxyXG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XHJcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgICBoeXBoZW5zOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgbWF0LWhlYWRlci1jZWxse1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LCAxMzksIDQ4KTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxubWF0LWNhcmR7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbn1cclxuXHJcbi5tLTF7XHJcbiBjb2xvcjogZ3JlZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNTEsIDQ5LCA0OSk7XHJcbn0iLCIubWF0LWNvbHVtbi1pc19BY3RpdmUge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDAgMCA1JSAhaW1wb3J0YW50O1xuICB3aWR0aDogMjglICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgLW1zLWh5cGhlbnM6IGF1dG87XG4gIC1tb3otaHlwaGVuczogYXV0bztcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICBoeXBoZW5zOiBhdXRvO1xufVxuXG5tYXQtaGVhZGVyLWNlbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA4YjMwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbm1hdC1jYXJkIHtcbiAgd2lkdGg6IDcwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcbn1cblxuLm0tMSB7XG4gIGNvbG9yOiBncmVlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzEzMTtcbn0iXX0= */";
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
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _equipmentservice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./equipmentservice */
    "./src/app/equipment/equipmentservice.ts");

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

    var EquipmentComponent = /*#__PURE__*/function () {
      function EquipmentComponent(appSettings, router, formbuilder, dialog, http, eqService) {
        _classCallCheck(this, EquipmentComponent);

        this.appSettings = appSettings;
        this.router = router;
        this.formbuilder = formbuilder;
        this.dialog = dialog;
        this.http = http;
        this.eqService = eqService;
        this.displayedColumns = ['Equipment_ID', 'Equipment_type_Description', 'Equipment_Description', 'Infrastructure_Name', 'Equipment_Condition', 'Equipment_Cost', 'Is_Active', 'Actions'];
        this.show = false; // <<< edit form show

        this.showAdd = false; // <<< Add form show

        this.showtable = true; // <<< show table

        this.types = []; // <<<< dropdown data for equipment types

        this.condition = ["Good", "Fair", "Poor"]; // <<<< dropdown data

        this.infrastructures = []; // <<<< dropdown data to be populated at ngONinit!!!!!!!!!!!!!!!!!!!!!!!!!!!

        this.active = [{
          Value: 1,
          Text: "True"
        }, {
          Value: 0,
          Text: "False"
        }]; // <<<< dropdown data

        this.data = []; // <<< Table data goes here

        this.equipmentEdit = new _Models_equipment__WEBPACK_IMPORTED_MODULE_4__["PostEquipment"](); // <<<< equipment instance for PUT

        this.equipmentAdd = new _Models_equipment__WEBPACK_IMPORTED_MODULE_4__["PostEquipment"](); // <<<< equipment instance for POST

        this.settings = this.appSettings.settings;
        this.form = this.formbuilder.group({
          'Description': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(50)])],
          'Cost': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(10)])],
          Type: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
          Condition: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
          Infras: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]()
        });
      }

      _createClass(EquipmentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (localStorage.getItem("jwtToken") == null) {
            this.router.navigateByUrl("login");
          } else {
            this.AdminPriv = localStorage.getItem("PrivelageLevel");
            localStorage.setItem("currentFarm", "7"); //<<<<<< Remove when done!!!!!!!!!!!!!!!!!!!!

            this.getData();
          }
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this3 = this;

          this.eqService.getEquipment().subscribe( //<<<<<<Get All Equipment
          function (response) {
            _this3.data1 = response;
            console.log(_this3.data1);
            _this3.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this3.data1); //<<<<populate datasource

            _this3.dataSource.paginator = _this3.paginator; // <<<<<<< Paginator setup
          }, function (error) {
            alert("An error has occured, please re login");

            _this3.router.navigateByUrl("logout");
          });
          this.eqService.getEquipmentTypes().subscribe( //<<<<<<Get equipment types
          function (response) {
            _this3.data1 = response;
            console.log(_this3.data1);
            _this3.types = _this3.data1;
          });
          this.eqService.getInfras().subscribe(function (success) {
            _this3.data1 = success;
            _this3.infrastructures = _this3.data1;
          });
        } //====================================Table Filter==========================

      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.dataSource.filter = filterValue.trim().toLowerCase();
        } //==============================Paginator initializer======================

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
        } //===========================Change between add and edit forms===========

      }, {
        key: "changeform",
        value: function changeform() {
          if (this.show == false) {
            this.show = true;
            this.showAdd = false;
            this.showtable = false;
          }
        } //========================Get Values for selected equipment to edit=====

      }, {
        key: "getEquipmentDetail",
        value: function getEquipmentDetail(Id) {
          var _this4 = this;

          localStorage.setItem("CurrentEquipment", Id.toString());
          this.ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          this.eqService.getEquipmentDetails(Id).subscribe( // <<<< get specific equipment
          // <<<< get specific equipment
          function (success) {
            _this4.data1 = success;
            _this4.equipmentEdit = _this4.data1;
            _this4.currentEdit = Id;
          });
          this.changeform();
        } //===========================Change forms to add equipment============

      }, {
        key: "AddEquipment",
        value: function AddEquipment() {
          if (this.show == true) {
            this.show = false;
          }

          this.equipmentAdd = new _Models_equipment__WEBPACK_IMPORTED_MODULE_4__["PostEquipment"]();
          this.showAdd = true;
          this.showtable = false;
        } //=============================PUT equipment==========================

      }, {
        key: "PutEquipment",
        value: function PutEquipment() {
          this.eqService.putEquipment(this.equipmentEdit, this.currentEdit).subscribe(function (success) {
            console.log(success);
          }, function (error) {
            console.log(error);
          });
        } //===========================POST equipment==========================

      }, {
        key: "addNewEquipment",
        value: function addNewEquipment() {
          this.equipmentAdd.Farm_ID = 7;
          this.equipmentAdd.Is_Active = "1";
          this.ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          this.eqService.postEquipment(this.equipmentAdd).subscribe( //<<<<<<<< Add equipment
          function (response) {
            console.log(response);
          });
        } //===========================Remove Equipment=======================

      }, {
        key: "deleteEquipment",
        value: function deleteEquipment(Id) {
          if (confirm("Are you sure to delete ?")) {
            this.eqService.deleteEquipment(Id).subscribe(function (success) {
              alert("Equipment succesfully removed");
            }, function (error) {
              alert(error);
            });
          }
        } //=========================Un Hide table===========================

      }, {
        key: "showTable",
        value: function showTable() {
          this.showtable = true;
          this.showAdd = false;
          this.show = false;
        } //=======================Download Equipment report================

      }, {
        key: "Download",
        value: function Download() {
          alert("Download started");
        } //=======================Navigate to equipment types==============

      }, {
        key: "LoadTypes",
        value: function LoadTypes() {
          this.router.navigateByUrl("eqTypes");
        }
      }, {
        key: "random",
        value: function random() {}
      }]);

      return EquipmentComponent;
    }();

    EquipmentComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]
      }, {
        type: _equipmentservice__WEBPACK_IMPORTED_MODULE_9__["EquipmentService"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]), __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])], EquipmentComponent.prototype, "paginator", void 0);

    EquipmentComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-equipment',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./equipment.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/equipment/equipment.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./equipment.component.scss */
      "./src/app/equipment/equipment.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"], _equipmentservice__WEBPACK_IMPORTED_MODULE_9__["EquipmentService"]])], EquipmentComponent);
    /***/
  },

  /***/
  "./src/app/equipment/equipmentservice.ts":
  /*!***********************************************!*\
    !*** ./src/app/equipment/equipmentservice.ts ***!
    \***********************************************/

  /*! exports provided: EquipmentService */

  /***/
  function srcAppEquipmentEquipmentserviceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipmentService", function () {
      return EquipmentService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

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
    }; //======================================================================REMEMBER TO ADD YOUR SERVICE TO PROVIDERS IN APP.MODULE.TS======================================================


    var EquipmentService = /*#__PURE__*/function () {
      function EquipmentService(http) {
        _classCallCheck(this, EquipmentService);

        this.http = http;
        this.baseURL = "http://35.178.156.37/api/";
      } //===================================Get all=========================


      _createClass(EquipmentService, [{
        key: "getEquipment",
        value: function getEquipment() {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.get(this.baseURL + "Equipment/" + localStorage.getItem("currentFarm"), ops);
        } //==================================Get all types=====================

      }, {
        key: "getEquipmentTypes",
        value: function getEquipmentTypes() {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.get(this.baseURL + "EquipmentTypes/" + localStorage.getItem("currentFarm"), ops);
        } //=====================================Get specific detail=============

      }, {
        key: "getEquipmentDetails",
        value: function getEquipmentDetails(Id) {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.get(this.baseURL + "EquipmentDetails/" + Id.toString(), ops);
        } //======================================Post new Equipment==============

      }, {
        key: "postEquipment",
        value: function postEquipment(equipment) {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.post(this.baseURL + "Equipment/Add", equipment, ops);
        } //================================Put details======================

      }, {
        key: "putEquipment",
        value: function putEquipment(equipment, Id) {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.put(this.baseURL + "Equipment/put/" + Id.toString(), equipment, ops);
        } //==================================Delete========================

      }, {
        key: "deleteEquipment",
        value: function deleteEquipment(id) {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http["delete"](this.baseURL + "Equipment/Delete" + id.toString(), ops);
        }
      }, {
        key: "getInfras",
        value: function getInfras() {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.get(this.baseURL + "Equipment/getInfras/" + localStorage.getItem("currentFarm"), ops);
        }
      }]);

      return EquipmentService;
    }();

    EquipmentService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    EquipmentService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], EquipmentService);
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


    __webpack_exports__["default"] = "mat-card {\n  line-height: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFybS1oZWFsdGgvRDpcXDM3MFxcRmluYWxGcm9udGVuZC9zcmNcXGFwcFxcZmFybS1oZWFsdGhcXGZhcm0taGVhbHRoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mYXJtLWhlYWx0aC9mYXJtLWhlYWx0aC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2Zhcm0taGVhbHRoL2Zhcm0taGVhbHRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmR7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxufSIsIm1hdC1jYXJkIHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/farm-health/farm-health.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/farm-health/farm-health.component.ts ***!
    \******************************************************/

  /*! exports provided: multi, FarmHealthComponent */

  /***/
  function srcAppFarmHealthFarmHealthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "multi", function () {
      return multi;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FarmHealthComponent", function () {
      return FarmHealthComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
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

    var multi = [{
      name: 'Total score',
      series: [{
        name: 'January',
        value: 60
      }, {
        name: 'February',
        value: 40
      }, {
        name: 'March',
        value: 30
      }, {
        name: 'April',
        value: 54
      }]
    }, {
      name: 'Vehicle score',
      series: [{
        name: 'January',
        value: 52
      }, {
        name: 'February',
        value: 30
      }, {
        name: 'March',
        value: 41
      }, {
        name: 'April',
        value: 30
      }]
    }, {
      name: 'Fault score',
      series: [{
        name: 'January',
        value: 30
      }, {
        name: 'February',
        value: 45
      }, {
        name: 'March',
        value: 35
      }, {
        name: 'April',
        value: 80
      }]
    }, {
      name: 'Maintenance score',
      series: [{
        name: 'January',
        value: 10
      }, {
        name: 'February',
        value: 20
      }, {
        name: 'March',
        value: 28
      }, {
        name: 'April',
        value: 40
      }]
    }, {
      name: 'Vehicle score',
      series: [{
        name: 'January',
        value: 42
      }, {
        name: 'February',
        value: 50
      }, {
        name: 'March',
        value: 51
      }, {
        name: 'April',
        value: 60
      }]
    }];

    var FarmHealthComponent = /*#__PURE__*/function () {
      function FarmHealthComponent(appSettings, router) {
        _classCallCheck(this, FarmHealthComponent);

        this.appSettings = appSettings;
        this.router = router;
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
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Last 4 months';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Scores';
        this.colorScheme = {
          domain: ['#7CFC00', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
        };
        this.autoScale = true;
        this.settings = this.appSettings.settings;
        Object.assign(this, {
          multi: multi
        });
      }

      _createClass(FarmHealthComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (localStorage.getItem("jwtToken") == null) {
            this.router.navigateByUrl("login");
          }
        }
      }, {
        key: "Download",
        value: function Download(selected) {
          alert("Download started");
        }
      }]);

      return FarmHealthComponent;
    }();

    FarmHealthComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    FarmHealthComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-farm-health',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./farm-health.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/farm-health/farm-health.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./farm-health.component.scss */
      "./src/app/farm-health/farm-health.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], FarmHealthComponent);
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


    __webpack_exports__["default"] = "mat-header-cell {\n  background-color: #308b30;\n  font-size: 16px;\n}\n\nmat-card {\n  width: 70%;\n  align-items: center;\n  margin-left: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFybS9EOlxcMzcwXFxGaW5hbEZyb250ZW5kL3NyY1xcYXBwXFxmYXJtXFxmYXJtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mYXJtL2Zhcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUNDSjs7QURDQTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9mYXJtL2Zhcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtaGVhZGVyLWNlbGx7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsIDEzOSwgNDgpO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbm1hdC1jYXJke1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG59IiwibWF0LWhlYWRlci1jZWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwOGIzMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5tYXQtY2FyZCB7XG4gIHdpZHRoOiA3MCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxNSU7XG59Il19 */";
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
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _farmService_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./farmService.service */
    "./src/app/farm/farmService.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

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

    var FarmComponent = /*#__PURE__*/function () {
      function FarmComponent(appSettings, farmservice, router, formbuilder, dialog, http) {
        _classCallCheck(this, FarmComponent);

        this.appSettings = appSettings;
        this.farmservice = farmservice;
        this.router = router;
        this.formbuilder = formbuilder;
        this.dialog = dialog;
        this.http = http;
        this.displayedColumns = ['Farm ID', 'Farm Type', 'Farm Name', 'Farm Size', 'Farm Address', 'Province', 'Farm Email', 'Farm Number', 'Active', 'Actions'];
        this.show = false;
        this.showAdd = false;
        this.showF = false;
        this.showFAdd = false; // farmTypes:string[]=[
        //   'Cattle-Beef', 'Cattle-Diary', 'Field Crops', 'Forage and Grazing Crops', 'Fruit', 'Game','Gardening', 'Goats', 'Poultry',
        //   'Sheep', 'Swine', 'Tree Crops', 'Vegetables'
        // ]
        // provinces:string[]=[
        //   'Gauteng','KwaZulu Natal', 'Free State', 'North West','Limpopo','Eastern Cape','Western Cape', 'Northern Cape','Mpumalanga'
        // ];

        this.farmtypes = [];
        this.provinces = [];
        this.Active = [{
          Value: 1,
          Text: "Yes"
        }, {
          Value: 0,
          Text: "No"
        }];
        this.data = [];
        this.FarmAdd = new _Models_Farm__WEBPACK_IMPORTED_MODULE_4__["PostFarm"]();
        this.FarmEdit = new _Models_Farm__WEBPACK_IMPORTED_MODULE_4__["PostFarm"]();
        this.showtable = true;
        this.settings = this.appSettings.settings;
        this.form = this.formbuilder.group({
          'Size': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(30)])],
          'Address': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(150)])],
          'Name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(100)])],
          'Email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(150)])],
          'Number': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(10)])],
          Types: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](),
          Prov: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]()
        });
      }

      _createClass(FarmComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {//    if(localStorage.getItem("jwtToken") === null){
          //     this.router.navigateByUrl("login");
          //  }else{
          //   this.AdminPriv = localStorage.getItem("PrivelageLevel");
          //   localStorage.setItem("currentFarm","7"); //<<<<<< Remove when done!!!!!!!!!!!!!!!!!!!!
          //   this.getData();
          //  } 
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this5 = this;

          this.farmservice.getFarm().subscribe(function (response) {
            _this5.data1 = response;
            console.log(_this5.data1["farmlist"]);
            _this5.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this5.data1["farmList"]);
            _this5.dataSource.paginator = _this5.paginator;
          }, function (error) {});
          this.farmservice.getFarmTypes().subscribe(function (response) {
            _this5.data1 = response;
            console.log(_this5.data1);
            _this5.farmtypes = _this5.data1;
          });
          this.farmservice.getProvinces().subscribe(function (response) {
            _this5.data1 = response;
            console.log(_this5.data1);
            _this5.provinces = _this5.data1;
          });
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
        } // getFarmTypes(id:number){
        //   localStorage.setItem("CurrentFarmType", id.toString())
        //   this.ops = {   
        //     headers: new HttpHeaders({
        //       'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        //     })
        //   };
        //   this.farmservice.getFarmTypeDetails(id).subscribe( 
        //     success => {
        //       this.data1 = success;
        //       this.FarmEdit = this.data1;
        //       this.currentEdit = id;
        //     }
        //   );
        //   this.changeform();
        // }
        // getProvinces(id:number){
        //   localStorage.setItem("CurrentProvince", id.toString())
        //   this.ops = {    
        //     headers: new HttpHeaders({
        //       'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        //     })
        //   };
        //   this.farmservice.getProvinceDetails(id).subscribe( 
        //     success => {
        //       this.data1 = success;
        //       this.FarmEdit = this.data1;
        //       this.currentEdit = id;
        //     }
        //   );
        //   this.changeform();
        // }

      }, {
        key: "addFarm",
        value: function addFarm() {
          if (this.show == true) {
            this.show = false;
          }

          this.FarmAdd = new _Models_Farm__WEBPACK_IMPORTED_MODULE_4__["PostFarm"]();
          this.showAdd = true;
          this.showtable = false;
          this.showF = false;
          this.showFAdd = false;
        }
      }, {
        key: "putFarm",
        value: function putFarm() {
          this.farmservice.putFarm(this.FarmEdit, this.currentEdit).subscribe(function (success) {
            console.log(success);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "postFarm",
        value: function postFarm() {
          this.FarmAdd.Farm_ID = 7;
          this.FarmAdd.Is_Active = "1";
          this.ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          this.farmservice.postFarm(this.FarmAdd).subscribe(function (response) {
            console.log(response);
          });
        }
      }, {
        key: "deleteFarm",
        value: function deleteFarm(id) {
          if (confirm("Are you sure to delete ?")) {
            this.farmservice.deleteFarm(id).subscribe(function (success) {
              alert("Farm succesfully removed");
            }, function (error) {
              alert(error);
            });
          }
        }
      }, {
        key: "showTable",
        value: function showTable() {
          this.showtable = true;
          this.showAdd = false;
          this.show = false;
          this.showF = false;
          this.showFAdd = false;
        }
      }, {
        key: "Foreman",
        value: function Foreman(selected) {
          if (selected == 1) {
            this.showtable = false;
            this.showAdd = false;
            this.show = false;
            this.showF = true;
            this.showFAdd = false;
          }

          if (selected == 2) {
            this.showtable = false;
            this.showAdd = false;
            this.show = false;
            this.showF = false;
            this.showFAdd = true;
          }

          if (selected == 3) {
            this.showtable = false;
            this.showAdd = false;
            this.show = false;
            this.showF = true;
            this.showFAdd = false;
          }
        }
      }, {
        key: "addForeman",
        value: function addForeman() {}
      }, {
        key: "putForeman",
        value: function putForeman() {}
      }, {
        key: "deleteForeman",
        value: function deleteForeman() {}
      }, {
        key: "getFarmInfo",
        value: function getFarmInfo() {}
      }]);

      return FarmComponent;
    }();

    FarmComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]
      }, {
        type: _farmService_service__WEBPACK_IMPORTED_MODULE_6__["farmService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]), __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])], FarmComponent.prototype, "paginator", void 0);

    FarmComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-farm',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./farm.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/farm/farm.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./farm.component.scss */
      "./src/app/farm/farm.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"], _farmService_service__WEBPACK_IMPORTED_MODULE_6__["farmService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]])], FarmComponent);
    /***/
  },

  /***/
  "./src/app/farm/farmService.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/farm/farmService.service.ts ***!
    \*********************************************/

  /*! exports provided: farmService */

  /***/
  function srcAppFarmFarmServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "farmService", function () {
      return farmService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

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

    var farmService = /*#__PURE__*/function () {
      function farmService(http) {
        _classCallCheck(this, farmService);

        this.http = http; // baseURL= "http://35.178.156.37/api/";

        this.baseURL = "https://localhost:44382/api/";
      }

      _createClass(farmService, [{
        key: "getFarm",
        value: function getFarm() {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.get(this.baseURL + "Farm/" + localStorage.getItem("currentFarm"), ops);
        }
      }, {
        key: "getFarmDetails",
        value: function getFarmDetails(id) {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.get(this.baseURL + "FarmDetails/" + id.toString(), ops);
        }
      }, {
        key: "putFarm",
        value: function putFarm(farm, id) {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.put(this.baseURL + "Farm/put/" + id.toString(), farm, ops);
        }
      }, {
        key: "postFarm",
        value: function postFarm(farm) {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.post(this.baseURL + "Farm/add/", farm, ops);
        }
      }, {
        key: "deleteFarm",
        value: function deleteFarm(id) {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http["delete"](this.baseURL + "Farm/delete/" + id.toString(), ops);
        }
      }, {
        key: "getFarmTypes",
        value: function getFarmTypes() {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.get(this.baseURL + "/FarmTypes", ops);
        }
      }, {
        key: "getProvinces",
        value: function getProvinces() {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.get(this.baseURL + "Provinces", ops);
        }
      }, {
        key: "getProvinceDetails",
        value: function getProvinceDetails(id) {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.get(this.baseURL + "Farms/ProvinceDetails/" + id.toString(), ops);
        }
      }, {
        key: "getForeman",
        value: function getForeman() {}
      }, {
        key: "putForeman",
        value: function putForeman() {}
      }, {
        key: "postForeman",
        value: function postForeman() {}
      }, {
        key: "deleteForeman",
        value: function deleteForeman() {}
      }]);

      return farmService;
    }();

    farmService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    farmService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], farmService);
    /***/
  },

  /***/
  "./src/app/fault-log/fault-log.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/fault-log/fault-log.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFaultLogFaultLogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-column-is_Active {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 5% !important;\n  width: 28% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\nmat-header-cell {\n  background-color: #308b30;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmF1bHQtbG9nL0Q6XFwzNzBcXEZpbmFsRnJvbnRlbmQvc3JjXFxhcHBcXGZhdWx0LWxvZ1xcZmF1bHQtbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mYXVsdC1sb2cvZmF1bHQtbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBRUEsc0JBQUE7RUFFQSxpQkFBQTtFQUVBLHFCQUFBO0VBQ0EsYUFBQTtBQ0RKOztBRElFO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9mYXVsdC1sb2cvZmF1bHQtbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jb2x1bW4taXNfQWN0aXZlIHtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgNSUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAyOCUgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgXHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIFxyXG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XHJcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgICBoeXBoZW5zOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgbWF0LWhlYWRlci1jZWxse1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LDEzOSw0OCk7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn0iLCIubWF0LWNvbHVtbi1pc19BY3RpdmUge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDAgMCA1JSAhaW1wb3J0YW50O1xuICB3aWR0aDogMjglICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgLW1zLWh5cGhlbnM6IGF1dG87XG4gIC1tb3otaHlwaGVuczogYXV0bztcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICBoeXBoZW5zOiBhdXRvO1xufVxuXG5tYXQtaGVhZGVyLWNlbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA4YjMwO1xuICBmb250LXNpemU6IDE2cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/fault-log/fault-log.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/fault-log/fault-log.component.ts ***!
    \**************************************************/

  /*! exports provided: FaultLogComponent */

  /***/
  function srcAppFaultLogFaultLogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaultLogComponent", function () {
      return FaultLogComponent;
    });
    /* harmony import */


    var src_app_app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/app.settings */
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


    var src_app_Models_Fault__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Models/Fault */
    "./src/app/Models/Fault.ts");

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

    var FaultLogComponent = /*#__PURE__*/function () {
      function FaultLogComponent(appSettings) {
        _classCallCheck(this, FaultLogComponent);

        this.appSettings = appSettings;
        this.displayedColumns = ['Fault_ID', 'Fault_Type_Description', 'Fault_Description', 'Fault_Start_Date', 'Fault_End_Date', 'Status_Description', 'Importance_Description', 'Actions'];
        this.show = false;
        this.showAdd = false;
        this.data = [{
          Fault_ID: "1",
          Fault_Type_Description: "Infrastructure",
          Fault_Description: 'Check Barn wiring',
          Fault_Start_Date: "05/07/2020",
          Fault_End_Date: "05/07/2020",
          Status_Description: 'In Progress',
          Importance_Description: 'Medium'
        }, {
          Fault_ID: "2",
          Fault_Type_Description: "Equipment",
          Fault_Description: 'Clean Ploughs',
          Fault_Start_Date: "02/01/2020",
          Fault_End_Date: "05/01/2020",
          Status_Description: 'Completed',
          Importance_Description: 'High'
        }, {
          Fault_ID: "3",
          Fault_Type_Description: "Other",
          Fault_Description: 'Sweep Barn',
          Fault_Start_Date: "22/05/2020",
          Fault_End_Date: "22/05/2020",
          Status_Description: 'Incomplete',
          Importance_Description: 'Low'
        }];
        this.types = ["Wiring", "Structural", "Security"];
        this.infrastructures = ["Building1", "Building2"];
        this.staff = ["John", "Petrus"];
        this.equipment = ["Trailer", "Plow"];
        this.status = ["In Progress", "Completed", "Pending"];
        this.importance = ["High", "Low", "Medium"];
        this.settings = this.appSettings.settings;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.data);
      }

      _createClass(FaultLogComponent, [{
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
          }
        }
      }, {
        key: "getFaultDetail",
        value: function getFaultDetail(Id) {
          //Implement function to pupulate edit field and populate vehicle edit\
          this.FaultEdit = new src_app_Models_Fault__WEBPACK_IMPORTED_MODULE_4__["Faults"]();
          this.FaultEdit.Fault_Description = "Clean Ploughs";
          this.FaultEdit.Fault_Type_Description = "Equipment";
          this.FaultEdit.Infrastructure_Description = "Barn";
          this.FaultEdit.Equipment_Description = "Plough";
          this.FaultEdit.Status_Description = "Active";
          this.FaultEdit.Importance_Description = "High";
          this.FaultEdit.Staff_Name = "John";
          this.FaultEdit.Fault_Start_Date = "22/07/2020";
          this.FaultEdit.Fault_End_Date = "25/07/2020";
          this.selectedValue = this.FaultEdit.Fault_Type_Description;
          this.EquipmentSelect = this.FaultEdit.Equipment_Description;
          this.InfrastructureSelect = this.FaultEdit.Infrastructure_Description;
          this.StatusSelect = this.FaultEdit.Status_Description;
          this.ImportanceSelect = this.FaultEdit.Importance_Description;
          this.StaffSelect = this.FaultEdit.Staff_Name;
          this.changeform();
        }
      }, {
        key: "AddFault",
        value: function AddFault() {
          if (this.show == true) {
            this.show = false;
          }

          this.FaultAdd = new src_app_Models_Fault__WEBPACK_IMPORTED_MODULE_4__["Faults"]();
          this.showAdd = true;
        }
      }, {
        key: "PutFault",
        value: function PutFault() {
          alert("Done");
        }
      }, {
        key: "deleteFault",
        value: function deleteFault() {
          alert("Are you sure");
        }
      }]);

      return FaultLogComponent;
    }();

    FaultLogComponent.ctorParameters = function () {
      return [{
        type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]), __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])], FaultLogComponent.prototype, "paginator", void 0);

    FaultLogComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-Fault-log',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./fault-log.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/fault-log/fault-log.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./fault-log.component.scss */
      "./src/app/fault-log/fault-log.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [src_app_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"]])], FaultLogComponent);
    /***/
  },

  /***/
  "./src/app/faultreport/faultreport.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/faultreport/faultreport.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFaultreportFaultreportComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhdWx0cmVwb3J0L2ZhdWx0cmVwb3J0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/faultreport/faultreport.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/faultreport/faultreport.component.ts ***!
    \******************************************************/

  /*! exports provided: FaultreportComponent */

  /***/
  function srcAppFaultreportFaultreportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaultreportComponent", function () {
      return FaultreportComponent;
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

    var FaultreportComponent = /*#__PURE__*/function () {
      function FaultreportComponent() {
        _classCallCheck(this, FaultreportComponent);
      }

      _createClass(FaultreportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FaultreportComponent;
    }();

    FaultreportComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-faultreport',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./faultreport.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/faultreport/faultreport.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./faultreport.component.scss */
      "./src/app/faultreport/faultreport.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], FaultreportComponent);
    /***/
  },

  /***/
  "./src/app/fm-main/fm-main.component.scss":
  /*!************************************************!*\
    !*** ./src/app/fm-main/fm-main.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFmMainFmMainComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZtLW1haW4vZm0tbWFpbi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/fm-main/fm-main.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/fm-main/fm-main.component.ts ***!
    \**********************************************/

  /*! exports provided: FmMainComponent */

  /***/
  function srcAppFmMainFmMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FmMainComponent", function () {
      return FmMainComponent;
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

    var FmMainComponent = /*#__PURE__*/function () {
      function FmMainComponent() {
        _classCallCheck(this, FmMainComponent);
      }

      _createClass(FmMainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "FMReport",
        value: function FMReport() {}
      }, {
        key: "ActiveList",
        value: function ActiveList() {}
      }]);

      return FmMainComponent;
    }();

    FmMainComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-fm-main',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./fm-main.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/fm-main/fm-main.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./fm-main.component.scss */
      "./src/app/fm-main/fm-main.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], FmMainComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".block {\n  width: 45%;\n  margin-bottom: 50px;\n  float: left;\n}\n\nmat-card {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcMzcwXFxGaW5hbEZyb250ZW5kL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFBVSxrQkFBQTtBQ0VWIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2Nre1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxubWF0LWNhcmQge3RleHQtYWxpZ246IGNlbnRlcn0iLCIuYmxvY2sge1xuICB3aWR0aDogNDUlO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxubWF0LWNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
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

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-home',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], HomeComponent);
    /***/
  },

  /***/
  "./src/app/infrastructure/infrastructure.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/infrastructure/infrastructure.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInfrastructureInfrastructureComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-column-is_Active {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 5% !important;\n  width: 28% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mcmFzdHJ1Y3R1cmUvRDpcXDM3MFxcRmluYWxGcm9udGVuZC9zcmNcXGFwcFxcaW5mcmFzdHJ1Y3R1cmVcXGluZnJhc3RydWN0dXJlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pbmZyYXN0cnVjdHVyZS9pbmZyYXN0cnVjdHVyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUVBLHNCQUFBO0VBRUEsaUJBQUE7RUFFQSxxQkFBQTtFQUNBLGFBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2luZnJhc3RydWN0dXJlL2luZnJhc3RydWN0dXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jb2x1bW4taXNfQWN0aXZlIHtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgNSUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAyOCUgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgXHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIFxyXG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XHJcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgICBoeXBoZW5zOiBhdXRvO1xyXG4gIH0iLCIubWF0LWNvbHVtbi1pc19BY3RpdmUge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDAgMCA1JSAhaW1wb3J0YW50O1xuICB3aWR0aDogMjglICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgLW1zLWh5cGhlbnM6IGF1dG87XG4gIC1tb3otaHlwaGVuczogYXV0bztcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICBoeXBoZW5zOiBhdXRvO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/infrastructure/infrastructure.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/infrastructure/infrastructure.component.ts ***!
    \************************************************************/

  /*! exports provided: InfrastructureComponent */

  /***/
  function srcAppInfrastructureInfrastructureComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfrastructureComponent", function () {
      return InfrastructureComponent;
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


    var _Models_Infrastructures__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Models/Infrastructures */
    "./src/app/Models/Infrastructures.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

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

    var InfrastructureComponent = /*#__PURE__*/function () {
      function InfrastructureComponent(appSettings, route, dialog) {
        _classCallCheck(this, InfrastructureComponent);

        this.appSettings = appSettings;
        this.route = route;
        this.dialog = dialog;
        this.displayedColumns = ['Infrastructure_ID', 'Infrastructure_Name', 'Infrastructure_Location', 'Infrastructure_Size', 'Section_Name', 'Infrastructure_Type_Description', 'is_Active', 'Actions'];
        this.infrastructure = {
          Infrastructure_Name: '',
          Infrastructure_Location: '',
          Infrastructure_Size: '',
          Section_Name: '',
          Infrastructure_Type_Description: '',
          is_Active: ''
        };
        this.show = false;
        this.showAdd = false;
        this.hideTable = true;
        this.data = [{
          Infrastructure_ID: "1",
          Infrastructure_Name: "South Coop",
          Infrastructure_Location: 'Next to Brown Barn',
          Infrastructure_Size: "30",
          Section_Name: "Veld 2",
          Infrastructure_Type_Description: 'Coop',
          is_Active: true
        }, {
          Infrastructure_ID: "2",
          Infrastructure_Name: "Brown Barn",
          Infrastructure_Location: 'Next to Red Barn',
          Infrastructure_Size: "100",
          Section_Name: "Veld 1",
          Infrastructure_Type_Description: 'Barn',
          is_Active: true
        }, {
          Infrastructure_ID: "3",
          Infrastructure_Name: "North Coop",
          Infrastructure_Location: 'Next to Red Barn',
          Infrastructure_Size: "30",
          Section_Name: "Veld 2",
          Infrastructure_Type_Description: 'Coop',
          is_Active: true
        }, {
          Infrastructure_ID: "4",
          Infrastructure_Name: "Main House",
          Infrastructure_Location: 'Next to Shed',
          Infrastructure_Size: "120",
          Section_Name: "Veld 1",
          Infrastructure_Type_Description: 'House',
          is_Active: true
        }, {
          Infrastructure_ID: "5",
          Infrastructure_Name: "Staff House",
          Infrastructure_Location: 'Next to Shed',
          Infrastructure_Size: "300",
          Section_Name: "Veld 1",
          Infrastructure_Type_Description: 'House',
          is_Active: true
        }, {
          Infrastructure_ID: "6",
          Infrastructure_Name: "Red Barn",
          Infrastructure_Location: 'Next to Red Barn',
          Infrastructure_Size: "100",
          Section_Name: "Veld 2",
          Infrastructure_Type_Description: 'Barn',
          is_Active: true
        }, {
          Infrastructure_ID: "7",
          Infrastructure_Name: "Shed",
          Infrastructure_Location: 'Next to Main House',
          Infrastructure_Size: "10",
          Section_Name: "Veld 2",
          Infrastructure_Type_Description: 'Barn',
          is_Active: true
        }];
        this.types = ["Barn", "House", "Coop"];
        this.sections = ["Veld 1", "Veld 2"];
        this.settings = this.appSettings.settings;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.data);
      }

      _createClass(InfrastructureComponent, [{
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
            this.hideTable = false;
          }
        }
      }, {
        key: "getInfrastructureDetail",
        value: function getInfrastructureDetail(Id) {
          //Implement function to pupulate edit field and populate vehicle edit\
          this.InfrastructureEdit = new _Models_Infrastructures__WEBPACK_IMPORTED_MODULE_4__["Infrastructures"]();
          this.InfrastructureEdit.Active = true;
          this.InfrastructureEdit.Infrastructure_Type = "Coop";
          this.InfrastructureEdit.Infrastructure_Name = "South Coop";
          this.InfrastructureEdit.Infrastructure_Location = "Next to Red Barn";
          this.InfrastructureEdit.Infrastructure_Size = "30";
          this.InfrastructureEdit.Section = "Veld 2";
          this.InfrastructureEdit.Active = true;
          this.selectedValue = this.InfrastructureEdit.Infrastructure_Type;
          this.SectionSelect = this.InfrastructureEdit.Section;
          this.changeform();
        }
      }, {
        key: "GenerateReport",
        value: function GenerateReport() {
          alert("Report generated successfully!");
        }
      }, {
        key: "AddInfrastructure",
        value: function AddInfrastructure() {
          if (this.show == true) {
            this.show = false;
          }

          this.InfrastructureAdd = new _Models_Infrastructures__WEBPACK_IMPORTED_MODULE_4__["Infrastructures"]();
          this.showAdd = true;
          this.hideTable = false;
        }
      }, {
        key: "PutInfrastructure",
        value: function PutInfrastructure() {
          alert("Done");
        }
      }, {
        key: "deleteInfrastructure",
        value: function deleteInfrastructure() {
          alert("Are you sure");
        }
      }, {
        key: "back",
        value: function back() {
          this.show = false;
          this.hideTable = true;
          this.showAdd = false;
        }
      }, {
        key: "NewTestFunction",
        value: function NewTestFunction() {}
      }]);

      return InfrastructureComponent;
    }();

    InfrastructureComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]), __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])], InfrastructureComponent.prototype, "paginator", void 0);

    InfrastructureComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-infrastructure',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./infrastructure.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/infrastructure/infrastructure.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./infrastructure.component.scss */
      "./src/app/infrastructure/infrastructure.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])], InfrastructureComponent);
    /***/
  },

  /***/
  "./src/app/insurnace-provider/insuranceService.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/insurnace-provider/insuranceService.service.ts ***!
    \****************************************************************/

  /*! exports provided: insuranceService */

  /***/
  function srcAppInsurnaceProviderInsuranceServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "insuranceService", function () {
      return insuranceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

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

    var insuranceService = /*#__PURE__*/function () {
      function insuranceService(http) {
        _classCallCheck(this, insuranceService);

        this.http = http;
        this.baseURL = "https://localhost:44349/api/";
      }

      _createClass(insuranceService, [{
        key: "getInsuranceProviders",
        value: function getInsuranceProviders() {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.get(this.baseURL + "InsuranceProviders/" + localStorage.getItem("currentUser"), ops);
        }
      }, {
        key: "getInsuranceProviderDetails",
        value: function getInsuranceProviderDetails(id) {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.get(this.baseURL + "InsuranceProviderDetails/" + id.toString(), ops);
        }
      }, {
        key: "postInsuranceProvider",
        value: function postInsuranceProvider(Insurance) {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.post(this.baseURL + "InsuranceProviders/", Insurance, ops);
        }
      }, {
        key: "putInsuranceProvider",
        value: function putInsuranceProvider(Insurance, id) {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.put(this.baseURL + "InsuranceProviders" + id.toString(), Insurance, ops);
        }
      }, {
        key: "deleteInsuranceProvider",
        value: function deleteInsuranceProvider(id) {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http["delete"](this.baseURL + "InsuranceProviders/" + id.toString(), ops);
        }
      }]);

      return insuranceService;
    }();

    insuranceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    insuranceService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], insuranceService);
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


    var _Models_InsuranceProviders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Models/InsuranceProviders */
    "./src/app/Models/InsuranceProviders.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _insuranceService_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./insuranceService.service */
    "./src/app/insurnace-provider/insuranceService.service.ts");

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

    var InsurnaceProviderComponent = /*#__PURE__*/function () {
      function InsurnaceProviderComponent(appSettings, router, formbuilder, dialog, http, insuranceService) {
        _classCallCheck(this, InsurnaceProviderComponent);

        this.appSettings = appSettings;
        this.router = router;
        this.formbuilder = formbuilder;
        this.dialog = dialog;
        this.http = http;
        this.insuranceService = insuranceService;
        this.displayedColumns = ['IP_ID', 'IP_Name', 'IP_Reg_Number', 'IP_VAT_Number', 'IP_Phone_Number'];
        this.show = false;
        this.showAdd = false;
        this.showtable = true;
        this.InsuranceaAdd = new _Models_InsuranceProviders__WEBPACK_IMPORTED_MODULE_4__["PostInsurance"]();
        this.InsuranceEdit = new _Models_InsuranceProviders__WEBPACK_IMPORTED_MODULE_4__["PostInsurance"]();
        this.data = [];
        this.settings = this.appSettings.settings;
        this.form = this.formbuilder.group({
          'Name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(50)])],
          'PhoneNumber': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(10)])],
          'RegNumber': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(50)])],
          'VATNumber': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(50)])]
        });
      }

      _createClass(InsurnaceProviderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (localStorage.getItem("jwtToken") === null) {
            this.router.navigateByUrl("login");
          } else {
            this.AdminPriv = localStorage.getItem("PrivelageLevel");
            localStorage.setItem("currentFarm", "7");
            this.getData();
          }
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this6 = this;

          this.insuranceService.getInsuranceProviders().subscribe(function (response) {
            _this6.data1 = response;
            console.log(_this6.data1["IPList"]);
            _this6.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this6.data1["IPList"]);
            _this6.dataSource.paginator = _this6.paginator;
          }, function (error) {
            alert("An error has occured, please login.");

            _this6.router.navigateByUrl("logout");
          });
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
        key: "getInsuranceProviderDetails",
        value: function getInsuranceProviderDetails(id) {
          var _this7 = this;

          localStorage.setItem("CurrentInsuranceProvider", id.toString());
          this.ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          this.insuranceService.getInsuranceProviderDetails(id).subscribe(function (success) {
            _this7.data1 = success;
            _this7.InsuranceEdit = _this7.data1;
            _this7.currentEdit = id;
          });
          this.changeform();
        }
      }, {
        key: "addInsurance",
        value: function addInsurance() {
          if (this.show == true) {
            this.show = false;
          }

          this.InsuranceaAdd = new _Models_InsuranceProviders__WEBPACK_IMPORTED_MODULE_4__["PostInsurance"]();
          this.showAdd = true;
          this.showtable = false;
        }
      }, {
        key: "putInsurance",
        value: function putInsurance() {
          this.insuranceService.putInsuranceProvider(this.InsuranceEdit, this.currentEdit).subscribe(function (success) {
            console.log(success);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "addNewInsuranceProvider",
        value: function addNewInsuranceProvider() {
          this.ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          this.insuranceService.postInsuranceProvider(this.InsuranceaAdd).subscribe(function (response) {
            console.log(response);
          });
        }
      }, {
        key: "deleteInsurance",
        value: function deleteInsurance(id) {
          if (confirm("Are you sure to delete ?")) {
            this.insuranceService.deleteInsuranceProvider(id).subscribe(function (success) {
              alert("Equipment succesfully removed");
            }, function (error) {
              alert(error);
            });
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
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
      }, {
        type: _insuranceService_service__WEBPACK_IMPORTED_MODULE_9__["insuranceService"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]), __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])], InsurnaceProviderComponent.prototype, "paginator", void 0);

    InsurnaceProviderComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-insurnace-provider',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./insurnace-provider.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/insurnace-provider/insurnace-provider.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./insurnace-provider.component.scss */
      "./src/app/insurnace-provider/insurnace-provider.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _insuranceService_service__WEBPACK_IMPORTED_MODULE_9__["insuranceService"]])], InsurnaceProviderComponent);
    /***/
  },

  /***/
  "./src/app/logout/logout.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/logout/logout.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLogoutLogoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/logout/logout.component.ts":
  /*!********************************************!*\
    !*** ./src/app/logout/logout.component.ts ***!
    \********************************************/

  /*! exports provided: LogoutComponent */

  /***/
  function srcAppLogoutLogoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () {
      return LogoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
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

    var LogoutComponent = /*#__PURE__*/function () {
      function LogoutComponent(router) {
        _classCallCheck(this, LogoutComponent);

        this.router = router;
      } //===============Logout user and route to Login========================


      _createClass(LogoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          localStorage.removeItem("jwtToken"); //<<< delete JWT token

          this.router.navigateByUrl("login"); //<<< ReRoute
        }
      }]);

      return LogoutComponent;
    }();

    LogoutComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    LogoutComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-logout',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./logout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./logout.component.scss */
      "./src/app/logout/logout.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], LogoutComponent);
    /***/
  },

  /***/
  "./src/app/maintenance-log/maintenance-log.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/maintenance-log/maintenance-log.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMaintenanceLogMaintenanceLogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-column-is_Active {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 5% !important;\n  width: 28% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\nmat-header-cell {\n  background-color: #308b30;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnRlbmFuY2UtbG9nL0Q6XFwzNzBcXEZpbmFsRnJvbnRlbmQvc3JjXFxhcHBcXG1haW50ZW5hbmNlLWxvZ1xcbWFpbnRlbmFuY2UtbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWludGVuYW5jZS1sb2cvbWFpbnRlbmFuY2UtbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBRUEsc0JBQUE7RUFFQSxpQkFBQTtFQUVBLHFCQUFBO0VBQ0EsYUFBQTtBQ0RKOztBRElFO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9tYWludGVuYW5jZS1sb2cvbWFpbnRlbmFuY2UtbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jb2x1bW4taXNfQWN0aXZlIHtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgNSUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAyOCUgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgXHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIFxyXG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XHJcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgICBoeXBoZW5zOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgbWF0LWhlYWRlci1jZWxse1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LDEzOSw0OCk7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn0iLCIubWF0LWNvbHVtbi1pc19BY3RpdmUge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDAgMCA1JSAhaW1wb3J0YW50O1xuICB3aWR0aDogMjglICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgLW1zLWh5cGhlbnM6IGF1dG87XG4gIC1tb3otaHlwaGVuczogYXV0bztcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICBoeXBoZW5zOiBhdXRvO1xufVxuXG5tYXQtaGVhZGVyLWNlbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA4YjMwO1xuICBmb250LXNpemU6IDE2cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/maintenance-log/maintenance-log.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/maintenance-log/maintenance-log.component.ts ***!
    \**************************************************************/

  /*! exports provided: MaintenanceLogComponent */

  /***/
  function srcAppMaintenanceLogMaintenanceLogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaintenanceLogComponent", function () {
      return MaintenanceLogComponent;
    });
    /* harmony import */


    var src_app_app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/app.settings */
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


    var src_app_Models_Maintenance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Models/Maintenance */
    "./src/app/Models/Maintenance.ts");

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

    var MaintenanceLogComponent = /*#__PURE__*/function () {
      function MaintenanceLogComponent(appSettings) {
        _classCallCheck(this, MaintenanceLogComponent);

        this.appSettings = appSettings;
        this.displayedColumns = ['Maintenance_ID', 'Maintenance_Type_Description', 'Maintenance_Description', 'Maintenance_Start_Date', 'Maintenance_End_Date', 'Status_Description', 'Importance_Description', 'Actions'];
        this.show = false;
        this.showAdd = false;
        this.data = [{
          Maintenance_ID: "1",
          Maintenance_Type_Description: "Infrastructure",
          Maintenance_Description: 'Check Barn wiring',
          Maintenance_Start_Date: "05/07/2020",
          Maintenance_End_Date: "05/07/2020",
          Status_Description: 'In Progress',
          Importance_Description: 'Medium'
        }, {
          Maintenance_ID: "2",
          Maintenance_Type_Description: "Equipment",
          Maintenance_Description: 'Clean Ploughs',
          Maintenance_Start_Date: "02/01/2020",
          Maintenance_End_Date: "05/01/2020",
          Status_Description: 'Completed',
          Importance_Description: 'High'
        }, {
          Maintenance_ID: "3",
          Maintenance_Type_Description: "Other",
          Maintenance_Description: 'Sweep Barn',
          Maintenance_Start_Date: "22/05/2020",
          Maintenance_End_Date: "22/05/2020",
          Status_Description: 'Incomplete',
          Importance_Description: 'Low'
        }];
        this.types = ["Wiring", "Structural", "Security"];
        this.infrastructures = ["Building1", "Building2"];
        this.staff = ["John", "Petrus"];
        this.equipment = ["Trailer", "Plow"];
        this.status = ["In Progress", "Completed", "Pending"];
        this.importance = ["High", "Low", "Medium"];
        this.showtable = true;
        this.settings = this.appSettings.settings;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.data);
      }

      _createClass(MaintenanceLogComponent, [{
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
        key: "getMaintenanceDetail",
        value: function getMaintenanceDetail(Id) {
          //Implement function to pupulate edit field and populate vehicle edit\
          this.MaintenanceEdit = new src_app_Models_Maintenance__WEBPACK_IMPORTED_MODULE_4__["Maintenance"]();
          this.MaintenanceEdit.Maintenance_Description = "Clean Ploughs";
          this.MaintenanceEdit.Maintenance_Type_Description = "Equipment";
          this.MaintenanceEdit.Infrastructure_Description = "Barn";
          this.MaintenanceEdit.Equipment_Description = "Plough";
          this.MaintenanceEdit.Status_Description = "Active";
          this.MaintenanceEdit.Importance_Description = "High";
          this.MaintenanceEdit.Staff_Name = "John";
          this.MaintenanceEdit.Maintenance_Start_Date = "22/07/2020";
          this.MaintenanceEdit.Maintenance_End_Date = "25/07/2020";
          this.selectedValue = this.MaintenanceEdit.Maintenance_Type_Description;
          this.EquipmentSelect = this.MaintenanceEdit.Equipment_Description;
          this.InfrastructureSelect = this.MaintenanceEdit.Infrastructure_Description;
          this.StatusSelect = this.MaintenanceEdit.Status_Description;
          this.ImportanceSelect = this.MaintenanceEdit.Importance_Description;
          this.StaffSelect = this.MaintenanceEdit.Staff_Name;
          this.changeform();
        }
      }, {
        key: "AddMaintenance",
        value: function AddMaintenance() {
          if (this.show == true) {
            this.show = false;
          }

          this.MaintenanceAdd = new src_app_Models_Maintenance__WEBPACK_IMPORTED_MODULE_4__["Maintenance"]();
          this.showAdd = true;
          this.showtable = false;
        }
      }, {
        key: "PutMaintenance",
        value: function PutMaintenance() {
          alert("Done");
        }
      }, {
        key: "deleteMaintenance",
        value: function deleteMaintenance() {
          alert("Are you sure");
        }
      }, {
        key: "back",
        value: function back() {
          this.showtable = true;
          this.show = false;
          this.showAdd = false;
        }
      }]);

      return MaintenanceLogComponent;
    }();

    MaintenanceLogComponent.ctorParameters = function () {
      return [{
        type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]), __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])], MaintenanceLogComponent.prototype, "paginator", void 0);

    MaintenanceLogComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-maintenance-log',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./maintenance-log.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/maintenance-log/maintenance-log.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./maintenance-log.component.scss */
      "./src/app/maintenance-log/maintenance-log.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [src_app_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"]])], MaintenanceLogComponent);
    /***/
  },

  /***/
  "./src/app/maintenance-report/maintenance-report.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/maintenance-report/maintenance-report.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMaintenanceReportMaintenanceReportComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW50ZW5hbmNlLXJlcG9ydC9tYWludGVuYW5jZS1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/maintenance-report/maintenance-report.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/maintenance-report/maintenance-report.component.ts ***!
    \********************************************************************/

  /*! exports provided: MaintenanceReportComponent */

  /***/
  function srcAppMaintenanceReportMaintenanceReportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaintenanceReportComponent", function () {
      return MaintenanceReportComponent;
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

    var MaintenanceReportComponent = /*#__PURE__*/function () {
      function MaintenanceReportComponent() {
        _classCallCheck(this, MaintenanceReportComponent);
      }

      _createClass(MaintenanceReportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MaintenanceReportComponent;
    }();

    MaintenanceReportComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-maintenance-report',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./maintenance-report.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/maintenance-report/maintenance-report.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./maintenance-report.component.scss */
      "./src/app/maintenance-report/maintenance-report.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], MaintenanceReportComponent);
    /***/
  },

  /***/
  "./src/app/new-password/new-password.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/new-password/new-password.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewPasswordNewPasswordComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1wYXNzd29yZC9uZXctcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/new-password/new-password.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/new-password/new-password.component.ts ***!
    \********************************************************/

  /*! exports provided: NewPasswordComponent */

  /***/
  function srcAppNewPasswordNewPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewPasswordComponent", function () {
      return NewPasswordComponent;
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

    var NewPasswordComponent = /*#__PURE__*/function () {
      function NewPasswordComponent() {
        _classCallCheck(this, NewPasswordComponent);
      }

      _createClass(NewPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "back",
        value: function back() {}
      }]);

      return NewPasswordComponent;
    }();

    NewPasswordComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-new-password',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./new-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/new-password/new-password.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./new-password.component.scss */
      "./src/app/new-password/new-password.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], NewPasswordComponent);
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

    var BlankComponent = /*#__PURE__*/function () {
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/blank/blank.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./blank.component.css */
      "./src/app/pages/blank/blank.component.css"))["default"]]
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

    var ErrorComponent = /*#__PURE__*/function () {
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/errors/error/error.component.html"))["default"]
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

    var NotFoundComponent = /*#__PURE__*/function () {
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/errors/not-found/not-found.component.html"))["default"]
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


    __webpack_exports__["default"] = ".sidenav {\n  width: 250px;\n  overflow: hidden;\n  border: none !important;\n}\n\n.horizontal-menu {\n  padding: 0;\n  position: relative;\n  z-index: 9;\n  height: 0;\n}\n\n.horizontal-menu.sticky {\n  height: 0;\n  min-height: 0;\n  overflow: hidden;\n}\n\n.horizontal-menu.sticky.fixed-top {\n  position: fixed;\n  top: 0;\n  height: 56px;\n  overflow: visible;\n}\n\n.inner-sidenav-content {\n  position: absolute;\n  top: 56px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 8px;\n  min-height: calc(100% - (56px + 8px*2));\n}\n\n.inner-sidenav-content .has-footer {\n  min-height: calc(100% - (45px + 56px));\n}\n\n.inner-sidenav-content .footer {\n  height: 56px;\n  margin: 0 -8px -8px -8px;\n  padding: 0 16px;\n}\n\n.options {\n  position: fixed;\n  width: 250px;\n  overflow: hidden;\n}\n\n.options .control {\n  padding: 6px 14px;\n}\n\n.options .control div {\n  padding: 6px 0;\n}\n\n.options .control h4 {\n  border-bottom: 1px solid #ccc;\n  margin: 12px 0 6px 0;\n}\n\n.options .control .skin-primary {\n  width: 32px;\n  height: 32px;\n  padding: 0;\n  overflow: hidden;\n  cursor: pointer;\n}\n\n.options .control .skin-primary .skin-secondary {\n  width: 0;\n  height: 0;\n  padding: 0;\n  border-bottom: 32px solid;\n  border-left: 32px solid transparent;\n}\n\n.options .control .skin-primary.indigo-light {\n  background-color: #3F51B5;\n  border: 1px solid #3F51B5;\n}\n\n.options .control .skin-primary.indigo-light .skin-secondary {\n  border-bottom-color: #ececec;\n}\n\n.options .control .skin-primary.teal-light {\n  background-color: #009688;\n  border: 1px solid #009688;\n}\n\n.options .control .skin-primary.teal-light .skin-secondary {\n  border-bottom-color: #ececec;\n}\n\n.options .control .skin-primary.red-light {\n  background-color: #F44336;\n  border: 1px solid #F44336;\n}\n\n.options .control .skin-primary.red-light .skin-secondary {\n  border-bottom-color: #ececec;\n}\n\n.options .control .skin-primary.blue-dark {\n  background-color: #0277bd;\n  border: 1px solid #0277bd;\n}\n\n.options .control .skin-primary.blue-dark .skin-secondary {\n  border-bottom-color: #262626;\n}\n\n.options .control .skin-primary.green-dark {\n  background-color: #388E3C;\n  border: 1px solid #388E3C;\n}\n\n.options .control .skin-primary.green-dark .skin-secondary {\n  border-bottom-color: #262626;\n}\n\n.options .control .skin-primary.pink-dark {\n  background-color: #D81B60;\n  border: 1px solid #D81B60;\n}\n\n.options .control .skin-primary.pink-dark .skin-secondary {\n  border-bottom-color: #262626;\n}\n\n.options .mat-radio-group {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.options .mat-radio-group .mat-radio-button {\n  margin: 2px 0;\n}\n\n.options .mat-slide-toggle {\n  height: auto;\n}\n\n.options .ps {\n  height: calc(100% - 48px);\n}\n\n.op-image {\n  box-shadow: 0 0 2px #ccc;\n  border: 2px solid;\n  border-color: transparent;\n  cursor: pointer;\n  transition: 0.2s;\n}\n\n.options-icon {\n  position: fixed;\n  top: 110px;\n  right: 0;\n  width: 40px;\n  height: 40px;\n  background: rgba(0, 0, 0, 0.7);\n  color: #fff;\n  cursor: pointer;\n  z-index: 999999;\n}\n\n.options-icon .mat-icon {\n  -webkit-animation: spin 8s linear infinite;\n  animation: spin 8s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.back-to-top {\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  z-index: 999999;\n  right: 20px;\n  bottom: 20px;\n  opacity: 0.5;\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.75);\n  border-radius: 4px;\n}\n\n.back-to-top:hover {\n  opacity: 0.9;\n}\n\n.search-bar form input {\n  height: 28px;\n  border: none;\n  padding: 0;\n  border-radius: 15px;\n  outline: none;\n  color: #444;\n  width: 0;\n  overflow: hidden;\n  transition: 0.3s;\n}\n\n.search-bar form input.show {\n  padding: 0 8px;\n  width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvRDpcXDM3MFxcRmluYWxGcm9udGVuZC9zcmNcXGFwcFxccGFnZXNcXHBhZ2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9EOlxcMzcwXFxGaW5hbEZyb250ZW5kL3NyY1xcYXBwXFx0aGVtZVxcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUNFWTtFRERaLGdCQUFBO0VBQ0EsdUJBQUE7QUVESjs7QUZHQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FFQUo7O0FGQ0k7RUFDSSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FFQ1I7O0FGQVE7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFlDakJLO0VEa0JMLGlCQUFBO0FFRVo7O0FGR0E7RUFDRSxrQkFBQTtFQUNBLFNDekJlO0VEMEJmLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlDdEJjO0VEdUJkLHVDQUFBO0FFQUY7O0FGQ0U7RUFDRSxzQ0FBQTtBRUNKOztBRkNFO0VBQ0UsWUNwQlk7RURxQlosd0JBQUE7RUFDQSxlQUFBO0FFQ0o7O0FGR0E7RUFDSSxlQUFBO0VBQ0EsWUN4Q1k7RUR5Q1osZ0JBQUE7QUVBSjs7QUZDSTtFQUNJLGlCQUFBO0FFQ1I7O0FGQVE7RUFDSSxjQUFBO0FFRVo7O0FGQVE7RUFDSSw2QkFBQTtFQUNBLG9CQUFBO0FFRVo7O0FGQVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUVFWjs7QUZEWTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUNBQUE7QUVHaEI7O0FGRFk7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0FFR2hCOztBRkZnQjtFQUNJLDRCQUFBO0FFSXBCOztBRkRZO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtBRUdoQjs7QUZGZ0I7RUFDSSw0QkFBQTtBRUlwQjs7QUZEWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUVHaEI7O0FGRmdCO0VBQ0ksNEJBQUE7QUVJcEI7O0FGRFk7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0FFR2hCOztBRkZnQjtFQUNJLDRCQUFBO0FFSXBCOztBRkRZO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtBRUdoQjs7QUZGZ0I7RUFDSSw0QkFBQTtBRUlwQjs7QUZEWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUVHaEI7O0FGRmdCO0VBQ0ksNEJBQUE7QUVJcEI7O0FGQ0k7RUFDSSxvQkFBQTtFQUNBLHNCQUFBO0FFQ1I7O0FGQVE7RUFDSSxhQUFBO0FFRVo7O0FGQ0k7RUFDSSxZQUFBO0FFQ1I7O0FGQ0k7RUFDSSx5QkFBQTtBRUNSOztBRkVBO0VBQ0ksd0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FFQ0o7O0FGQ0E7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FFRUo7O0FGREk7RUFDSSwwQ0FBQTtFQUVBLGtDQUFBO0FFR1I7O0FGTUE7RUFDSTtJQUNJLGlDQUFBO0VFRU47QUFDRjs7QUZBQTtFQUNJO0lBQ0kseUJBQUE7RUVFTjtBQUNGOztBRkNBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtBRUNKOztBRkFJO0VBQ0ksWUFBQTtBRUVSOztBRktRO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FFRlo7O0FGR1k7RUFDRyxjQUFBO0VBQ0EsWUFBQTtBRURmIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGFnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vdGhlbWUvc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLnNpZGVuYXZ7XHJcbiAgICB3aWR0aDogJHNpZGVuYXYtd2lkdGg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuOyBcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50OyAgXHJcbn1cclxuLmhvcml6b250YWwtbWVudXtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiA5OyAgICBcclxuICAgIGhlaWdodDogMDtcclxuICAgICYuc3RpY2t5e1xyXG4gICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAwO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgJi5maXhlZC10b3B7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICRob3Jpem9udGFsLW1lbnUtaGVpZ2h0O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbm5lci1zaWRlbmF2LWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6JHRvb2xiYXItaGVpZ2h0O1xyXG4gIGJvdHRvbTowO1xyXG4gIGxlZnQ6MDtcclxuICByaWdodDowOyAgXHJcbiAgcGFkZGluZzogJGlubmVyLXNpZGVuYXYtY29udGVudC1wYWRkaW5nO1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtICgjeyR0b29sYmFyLWhlaWdodH0gKyAjeyRpbm5lci1zaWRlbmF2LWNvbnRlbnQtcGFkZGluZ30qMikpO1xyXG4gIC5oYXMtZm9vdGVyeyAgXHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSAoNDVweCArICN7JGZvb3Rlci1oZWlnaHR9KSk7XHJcbiAgfVxyXG4gIC5mb290ZXJ7XHJcbiAgICBoZWlnaHQ6ICRmb290ZXItaGVpZ2h0O1xyXG4gICAgbWFyZ2luOiAwIC04cHggLThweCAtOHB4OyBcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICB9XHJcbn1cclxuXHJcbi5vcHRpb25ze1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6ICRzaWRlbmF2LXdpZHRoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC5jb250cm9se1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCAxNHB4O1xyXG4gICAgICAgIGRpdntcclxuICAgICAgICAgICAgcGFkZGluZzogNnB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg0e1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgICAgbWFyZ2luOiAxMnB4IDAgNnB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5za2luLXByaW1hcnl7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsgIFxyXG4gICAgICAgICAgICAuc2tpbi1zZWNvbmRhcnl7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMDsgXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7IFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDMycHggc29saWQ7IFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDMycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5pbmRpZ28tbGlnaHR7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y1MUI1O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzNGNTFCNTtcclxuICAgICAgICAgICAgICAgIC5za2luLXNlY29uZGFyeXtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZWNlY2VjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYudGVhbC1saWdodHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA5Njg4O1xyXG4gICAgICAgICAgICAgICAgLnNraW4tc2Vjb25kYXJ5e1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNlY2VjZWM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5yZWQtbGlnaHR7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjQ0MzM2O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0Y0NDMzNjtcclxuICAgICAgICAgICAgICAgIC5za2luLXNlY29uZGFyeXtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZWNlY2VjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuYmx1ZS1kYXJre1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAyNzdiZDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMjc3YmQ7XHJcbiAgICAgICAgICAgICAgICAuc2tpbi1zZWNvbmRhcnl7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzI2MjYyNjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmdyZWVuLWRhcmt7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg4RTNDO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzM4OEUzQztcclxuICAgICAgICAgICAgICAgIC5za2luLXNlY29uZGFyeXtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMjYyNjI2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYucGluay1kYXJre1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Q4MUI2MDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEODFCNjA7XHJcbiAgICAgICAgICAgICAgICAuc2tpbi1zZWNvbmRhcnl7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzI2MjYyNjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tYXQtcmFkaW8tZ3JvdXB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAubWF0LXJhZGlvLWJ1dHRvbntcclxuICAgICAgICAgICAgbWFyZ2luOiAycHggMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubWF0LXNsaWRlLXRvZ2dsZXtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICAucHN7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0OHB4KTtcclxuICAgIH1cclxufVxyXG4ub3AtaW1hZ2V7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMnB4ICNjY2M7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG59XHJcbi5vcHRpb25zLWljb257XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDExMHB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjcpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB6LWluZGV4OiA5OTk5OTk7XHJcbiAgICAubWF0LWljb257XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gOHMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgIC1tb3otYW5pbWF0aW9uOiBzcGluIDhzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICBhbmltYXRpb246IHNwaW4gOHMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5ALW1vei1rZXlmcmFtZXMgc3BpbiB7IFxyXG4gICAgMTAwJSB7IFxyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgXHJcbiAgICB9IFxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHsgXHJcbiAgICAxMDAlIHsgXHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyBcclxuICAgIH0gXHJcbn1cclxuQGtleWZyYW1lcyBzcGluIHsgXHJcbiAgICAxMDAlIHsgXHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuLmJhY2stdG8tdG9we1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB6LWluZGV4OiA5OTk5OTk7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIGJvdHRvbTogMjBweDtcclxuICAgIG9wYWNpdHk6IC41O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC43NSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7ICAgIFxyXG4gICAgJjpob3ZlcntcclxuICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG5cclxuLnNlYXJjaC1iYXJ7XHJcbiAgICBmb3Jte1xyXG4gICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6ICM0NDQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgICAgICAmLnNob3d7XHJcbiAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgOHB4O1xyXG4gICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiIsIiRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcblxyXG4kdG9vbGJhci1oZWlnaHQ6IDU2cHg7IFxyXG4kaG9yaXpvbnRhbC1tZW51LWhlaWdodDogJHRvb2xiYXItaGVpZ2h0O1xyXG5cclxuJHNpZGVuYXYtd2lkdGg6IDI1MHB4O1xyXG4kc2lkZW5hdi11c2VyLWJsb2NrLWhlaWdodDogMTU2cHg7XHJcbiRtaW5pLXNpZGVuYXYtdXNlci1ibG9jay1oZWlnaHQ6IDcwcHg7XHJcblxyXG4kZmxleC1kaXN0YW5jZTogOHB4O1xyXG4kaW5uZXItc2lkZW5hdi1jb250ZW50LXBhZGRpbmc6ICRmbGV4LWRpc3RhbmNlO1xyXG5cclxuLy9Mb2dpbiwgUmVnaXN0ZXIsIEVycm9ycyBib3hcclxuJGJveC1oZWlnaHQ6IDI1MHB4O1xyXG4kYm94LXBvc2l0aW9uOiAzNHB4O1xyXG4kcmVnaXN0ZXItYm94LWhlaWdodDogNzAwcHg7XHJcblxyXG4kZm9vdGVyLWhlaWdodDogNTZweDsgIiwiLnNpZGVuYXYge1xuICB3aWR0aDogMjUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaG9yaXpvbnRhbC1tZW51IHtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5O1xuICBoZWlnaHQ6IDA7XG59XG4uaG9yaXpvbnRhbC1tZW51LnN0aWNreSB7XG4gIGhlaWdodDogMDtcbiAgbWluLWhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5ob3Jpem9udGFsLW1lbnUuc3RpY2t5LmZpeGVkLXRvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDU2cHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4uaW5uZXItc2lkZW5hdi1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDU2cHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gKDU2cHggKyA4cHgqMikpO1xufVxuLmlubmVyLXNpZGVuYXYtY29udGVudCAuaGFzLWZvb3RlciB7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtICg0NXB4ICsgNTZweCkpO1xufVxuLmlubmVyLXNpZGVuYXYtY29udGVudCAuZm9vdGVyIHtcbiAgaGVpZ2h0OiA1NnB4O1xuICBtYXJnaW46IDAgLThweCAtOHB4IC04cHg7XG4gIHBhZGRpbmc6IDAgMTZweDtcbn1cblxuLm9wdGlvbnMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAyNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5vcHRpb25zIC5jb250cm9sIHtcbiAgcGFkZGluZzogNnB4IDE0cHg7XG59XG4ub3B0aW9ucyAuY29udHJvbCBkaXYge1xuICBwYWRkaW5nOiA2cHggMDtcbn1cbi5vcHRpb25zIC5jb250cm9sIGg0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIG1hcmdpbjogMTJweCAwIDZweCAwO1xufVxuLm9wdGlvbnMgLmNvbnRyb2wgLnNraW4tcHJpbWFyeSB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIHBhZGRpbmc6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5vcHRpb25zIC5jb250cm9sIC5za2luLXByaW1hcnkgLnNraW4tc2Vjb25kYXJ5IHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLWJvdHRvbTogMzJweCBzb2xpZDtcbiAgYm9yZGVyLWxlZnQ6IDMycHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4ub3B0aW9ucyAuY29udHJvbCAuc2tpbi1wcmltYXJ5LmluZGlnby1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRjUxQjU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzRjUxQjU7XG59XG4ub3B0aW9ucyAuY29udHJvbCAuc2tpbi1wcmltYXJ5LmluZGlnby1saWdodCAuc2tpbi1zZWNvbmRhcnkge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZWNlY2VjO1xufVxuLm9wdGlvbnMgLmNvbnRyb2wgLnNraW4tcHJpbWFyeS50ZWFsLWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwOTY4ODtcbn1cbi5vcHRpb25zIC5jb250cm9sIC5za2luLXByaW1hcnkudGVhbC1saWdodCAuc2tpbi1zZWNvbmRhcnkge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZWNlY2VjO1xufVxuLm9wdGlvbnMgLmNvbnRyb2wgLnNraW4tcHJpbWFyeS5yZWQtbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjQ0MzM2O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRjQ0MzM2O1xufVxuLm9wdGlvbnMgLmNvbnRyb2wgLnNraW4tcHJpbWFyeS5yZWQtbGlnaHQgLnNraW4tc2Vjb25kYXJ5IHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2VjZWNlYztcbn1cbi5vcHRpb25zIC5jb250cm9sIC5za2luLXByaW1hcnkuYmx1ZS1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyNzdiZDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAyNzdiZDtcbn1cbi5vcHRpb25zIC5jb250cm9sIC5za2luLXByaW1hcnkuYmx1ZS1kYXJrIC5za2luLXNlY29uZGFyeSB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMyNjI2MjY7XG59XG4ub3B0aW9ucyAuY29udHJvbCAuc2tpbi1wcmltYXJ5LmdyZWVuLWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg4RTNDO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzg4RTNDO1xufVxuLm9wdGlvbnMgLmNvbnRyb2wgLnNraW4tcHJpbWFyeS5ncmVlbi1kYXJrIC5za2luLXNlY29uZGFyeSB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMyNjI2MjY7XG59XG4ub3B0aW9ucyAuY29udHJvbCAuc2tpbi1wcmltYXJ5LnBpbmstZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEODFCNjA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEODFCNjA7XG59XG4ub3B0aW9ucyAuY29udHJvbCAuc2tpbi1wcmltYXJ5LnBpbmstZGFyayAuc2tpbi1zZWNvbmRhcnkge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMjYyNjI2O1xufVxuLm9wdGlvbnMgLm1hdC1yYWRpby1ncm91cCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLm9wdGlvbnMgLm1hdC1yYWRpby1ncm91cCAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gIG1hcmdpbjogMnB4IDA7XG59XG4ub3B0aW9ucyAubWF0LXNsaWRlLXRvZ2dsZSB7XG4gIGhlaWdodDogYXV0bztcbn1cbi5vcHRpb25zIC5wcyB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDhweCk7XG59XG5cbi5vcC1pbWFnZSB7XG4gIGJveC1zaGFkb3c6IDAgMCAycHggI2NjYztcbiAgYm9yZGVyOiAycHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLm9wdGlvbnMtaWNvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxMTBweDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogOTk5OTk5O1xufVxuLm9wdGlvbnMtaWNvbiAubWF0LWljb24ge1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiA4cyBsaW5lYXIgaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uOiBzcGluIDhzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBzcGluIDhzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQC1tb3ota2V5ZnJhbWVzIHNwaW4ge1xuICAxMDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4uYmFjay10by10b3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogOTk5OTk5O1xuICByaWdodDogMjBweDtcbiAgYm90dG9tOiAyMHB4O1xuICBvcGFjaXR5OiAwLjU7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uYmFjay10by10b3A6aG92ZXIge1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbi5zZWFyY2gtYmFyIGZvcm0gaW5wdXQge1xuICBoZWlnaHQ6IDI4cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICM0NDQ7XG4gIHdpZHRoOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuLnNlYXJjaC1iYXIgZm9ybSBpbnB1dC5zaG93IHtcbiAgcGFkZGluZzogMCA4cHg7XG4gIHdpZHRoOiAyNTBweDtcbn0iXX0= */";
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

    var PagesComponent = /*#__PURE__*/function () {
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
          viewValue: 'Farm1'
        }, {
          value: 'pizza-1',
          viewValue: 'Farm2'
        }, {
          value: 'tacos-2',
          viewValue: 'Farm3'
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
          var _this8 = this;

          setTimeout(function () {
            _this8.settings.loadingSpinner = false;
          }, 300);
          this.backToTop.nativeElement.style.display = 'none';
          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
              if (!_this8.settings.sidenavIsPinned) {
                _this8.sidenav.close();
              }

              if (window.innerWidth <= 768) {
                _this8.sidenav.close();
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages.component.html"))["default"],
      providers: [_theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"]],
      styles: [__importDefault(__webpack_require__(
      /*! ./pages.component.scss */
      "./src/app/pages/pages.component.scss"))["default"]]
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

    var SearchComponent = /*#__PURE__*/function () {
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.component.html"))["default"]
    }), __metadata("design:paramtypes", [])], SearchComponent);
    /***/
  },

  /***/
  "./src/app/repair-log/repair-log.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/repair-log/repair-log.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRepairLogRepairLogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-column-is_Active {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 5% !important;\n  width: 28% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwYWlyLWxvZy9EOlxcMzcwXFxGaW5hbEZyb250ZW5kL3NyY1xcYXBwXFxyZXBhaXItbG9nXFxyZXBhaXItbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZXBhaXItbG9nL3JlcGFpci1sb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFFQSxzQkFBQTtFQUVBLGlCQUFBO0VBRUEscUJBQUE7RUFDQSxhQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9yZXBhaXItbG9nL3JlcGFpci1sb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNvbHVtbi1pc19BY3RpdmUge1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCA1JSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDI4JSAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICBcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgXHJcbiAgICAtbXMtaHlwaGVuczogYXV0bztcclxuICAgIC1tb3otaHlwaGVuczogYXV0bztcclxuICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuICAgIGh5cGhlbnM6IGF1dG87XHJcbiAgfSIsIi5tYXQtY29sdW1uLWlzX0FjdGl2ZSB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgZmxleDogMCAwIDUlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyOCUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAtbXMtaHlwaGVuczogYXV0bztcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gIGh5cGhlbnM6IGF1dG87XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/repair-log/repair-log.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/repair-log/repair-log.component.ts ***!
    \****************************************************/

  /*! exports provided: RepairLogComponent */

  /***/
  function srcAppRepairLogRepairLogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RepairLogComponent", function () {
      return RepairLogComponent;
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


    var _Models_RepairLogs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Models/RepairLogs */
    "./src/app/Models/RepairLogs.ts");
    /* harmony import */


    var _Models_RepairRequests__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../Models/RepairRequests */
    "./src/app/Models/RepairRequests.ts");

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

    var RepairLogComponent = /*#__PURE__*/function () {
      function RepairLogComponent(appSettings) {
        _classCallCheck(this, RepairLogComponent);

        this.appSettings = appSettings;
        this.displayedColumns = ['VehicleRepair_ID', 'VRD_Invoice', 'Vehicle_Registration_Number', 'Provider_Name', 'Vehicle_Repair_Cost', 'Vehicle_Repair_Date_Started', 'Vehicle_Repair_Date_Ended', 'Status_Description', 'Actions'];
        this.StartDateDef = new Date('1970-01-01');
        this.EndDateDef = new Date(2020, 11, 10);
        this.show = false;
        this.showAdd = false;
        this.showRequest = false;
        this.hideTable = true;
        this.data = [{
          VehicleRepair_ID: "1",
          VRD_Invoice: "Toyota-Menlyn-Agrilog-Invoice.pdf",
          Vehicle_Registration_Number: "TSK766GP",
          Provider_Name: 'Toyota-Menlyn',
          Vehicle_Repair_Cost: "2000",
          Vehicle_Repair_Date_Started: this.StartDateDef,
          Vehicle_Repair_Date_Ended: new Date(2020, 10, 1),
          Status_Description: 'Completed'
        }, {
          VehicleRepair_ID: "2",
          VRD_Invoice: "All Auto Repair-Agrilog-Invoice.pdf",
          Vehicle_Registration_Number: "TRE555GP",
          Provider_Name: 'All Auto Repair',
          Vehicle_Repair_Cost: "1547.55",
          Vehicle_Repair_Date_Started: new Date(2020, 1, 1),
          Vehicle_Repair_Date_Ended: new Date(2020, 10, 1),
          Status_Description: 'In Progress'
        }, {
          VehicleRepair_ID: "3",
          VRD_Invoice: "Toyota-Menlyn-Agrilog-Invoice.pdf",
          Vehicle_Registration_Number: "TRE555GP",
          Provider_Name: 'Toyota-Menlyn',
          Vehicle_Repair_Cost: "84555",
          Vehicle_Repair_Date_Started: new Date(2020, 1, 1),
          Vehicle_Repair_Date_Ended: new Date(2020, 10, 1),
          Status_Description: 'Completed'
        }, {
          VehicleRepair_ID: "4",
          VRD_Invoice: "Toyota-Menlyn-Agrilog-Invoice.pdf",
          Vehicle_Registration_Number: "TSK766GP",
          Provider_Name: 'Toyota-Menlyn',
          Vehicle_Repair_Cost: "65000",
          Vehicle_Repair_Date_Started: new Date(2020, 1, 1),
          Vehicle_Repair_Date_Ended: new Date(2020, 10, 1),
          Status_Description: 'Completed'
        }, {
          VehicleRepair_ID: "5",
          VRD_Invoice: "All Auto Repair-Agrilog-Invoice.pdf",
          Vehicle_Registration_Number: "TSK766GP",
          Provider_Name: 'All Auto Repair',
          Vehicle_Repair_Cost: "55000",
          Vehicle_Repair_Date_Started: new Date(2020, 1, 1),
          Vehicle_Repair_Date_Ended: new Date(2020, 10, 1),
          Status_Description: 'Completed'
        }, {
          VehicleRepair_ID: "6",
          VRD_Invoice: "Toyota-Menlyn-Agrilog-Invoice.pdf",
          Vehicle_Registration_Number: "SMK420GP",
          Provider_Name: 'Toyota-Menlyn',
          Vehicle_Repair_Cost: "15000",
          Vehicle_Repair_Date_Started: new Date(2020, 1, 1),
          Vehicle_Repair_Date_Ended: new Date(2020, 10, 1),
          Status_Description: 'In Progress'
        }, {
          VehicleRepair_ID: "7",
          VRD_Invoice: "Johns Auto Repair-Agrilog-Invoice.pdf",
          Vehicle_Registration_Number: "TSK766GP",
          Provider_Name: 'Johns Auto Repair',
          Vehicle_Repair_Cost: "1000",
          Vehicle_Repair_Date_Started: new Date(2020, 1, 1),
          Vehicle_Repair_Date_Ended: new Date(2020, 10, 1),
          Status_Description: 'In Progress'
        }];
        this.vehicles = ["TSK766GP", "TRE555GP", "SMK420GP"];
        this.providers = ["Toyota-Menlyn", "John's Auto Repair", "All Auto Repair"];
        this.statusses = ["In Progress", "Completed"];
        this.settings = this.appSettings.settings;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.data);
      }

      _createClass(RepairLogComponent, [{
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
            this.hideTable = false;
            this.showRequest = false;
          }
        }
      }, {
        key: "getRepairLogDetail",
        value: function getRepairLogDetail(Id) {
          //Implement function to pupulate edit field and populate vehicle edit\
          this.RepairLogEdit = new _Models_RepairLogs__WEBPACK_IMPORTED_MODULE_4__["RepairLogs"]();
          this.RepairLogEdit.Vehicle_Repair_Date_Ended = this.EndDateDef;
          this.RepairLogEdit.Vehicle_Repair_Date_Started = this.StartDateDef;
          this.RepairLogEdit.Provider = "Toyota-Menlyn";
          this.RepairLogEdit.Vehicle_Repair_Cost = "1500";
          this.RepairLogEdit.Vehicle = "TSK766GP";
          this.RepairLogEdit.VRD_Invoice = "TSK766GP";
          this.RepairLogEdit.Status = "In Progress";
          this.selectedValue = this.RepairLogEdit.Vehicle;
          this.ProviderSelect = this.RepairLogEdit.Provider;
          this.StartDateSelected = this.RepairLogEdit.Vehicle_Repair_Date_Started;
          this.EndDateSelected = this.RepairLogEdit.Vehicle_Repair_Date_Ended;
          this.StatusSelect = this.RepairLogEdit.Status;
          this.changeform();
        }
      }, {
        key: "AddRepairLog",
        value: function AddRepairLog() {
          if (this.show == true) {
            this.show = false;
          }

          this.RepairLogAdd = new _Models_RepairLogs__WEBPACK_IMPORTED_MODULE_4__["RepairLogs"]();
          this.showAdd = true;
          this.hideTable = false;
          this.showRequest = false;
        }
      }, {
        key: "SendNotification",
        value: function SendNotification() {
          if (this.show == true) {
            this.show = false;
          }

          this.RepairRequestAdd = new _Models_RepairRequests__WEBPACK_IMPORTED_MODULE_5__["RepairRequests"]();
          this.showAdd = false;
          this.showRequest = true;
          this.hideTable = false;
        }
      }, {
        key: "GenerateReport",
        value: function GenerateReport() {
          alert("Report generated successfully!");
        }
      }, {
        key: "PutRepairLog",
        value: function PutRepairLog() {
          if (this.RepairLogAdd.Vehicle_Repair_Date_Started > this.RepairLogAdd.Vehicle_Repair_Date_Ended) {
            alert("Please check that the start date provided preceeds the end date provided!");
          } else {
            alert("Done");
          }
        }
      }, {
        key: "PutRepairRequest",
        value: function PutRepairRequest() {
          alert("Done");
        }
      }, {
        key: "deleteRepairLog",
        value: function deleteRepairLog() {
          alert("Are you sure");
        }
      }, {
        key: "back",
        value: function back() {
          this.show = false;
          this.hideTable = true;
          this.showAdd = false;
        }
      }]);

      return RepairLogComponent;
    }();

    RepairLogComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]), __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])], RepairLogComponent.prototype, "paginator", void 0);

    RepairLogComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-repair-log',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./repair-log.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/repair-log/repair-log.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./repair-log.component.scss */
      "./src/app/repair-log/repair-log.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"]])], RepairLogComponent);
    /***/
  },

  /***/
  "./src/app/request-email/request-email.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/request-email/request-email.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRequestEmailRequestEmailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcXVlc3QtZW1haWwvcmVxdWVzdC1lbWFpbC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/request-email/request-email.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/request-email/request-email.component.ts ***!
    \**********************************************************/

  /*! exports provided: RequestEmailComponent */

  /***/
  function srcAppRequestEmailRequestEmailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestEmailComponent", function () {
      return RequestEmailComponent;
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

    var RequestEmailComponent = /*#__PURE__*/function () {
      function RequestEmailComponent() {
        _classCallCheck(this, RequestEmailComponent);
      }

      _createClass(RequestEmailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "back",
        value: function back() {}
      }]);

      return RequestEmailComponent;
    }();

    RequestEmailComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-request-email',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./request-email.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/request-email/request-email.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./request-email.component.scss */
      "./src/app/request-email/request-email.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], RequestEmailComponent);
    /***/
  },

  /***/
  "./src/app/scheduledtasks/scheduledtasks.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/scheduledtasks/scheduledtasks.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppScheduledtasksScheduledtasksComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-column-is_Active {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 5% !important;\n  width: 28% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NoZWR1bGVkdGFza3MvRDpcXDM3MFxcRmluYWxGcm9udGVuZC9zcmNcXGFwcFxcc2NoZWR1bGVkdGFza3NcXHNjaGVkdWxlZHRhc2tzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zY2hlZHVsZWR0YXNrcy9zY2hlZHVsZWR0YXNrcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUVBLHNCQUFBO0VBRUEsaUJBQUE7RUFFQSxxQkFBQTtFQUNBLGFBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3NjaGVkdWxlZHRhc2tzL3NjaGVkdWxlZHRhc2tzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jb2x1bW4taXNfQWN0aXZlIHtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgNSUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAyOCUgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgXHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIFxyXG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XHJcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgICBoeXBoZW5zOiBhdXRvO1xyXG4gIH0iLCIubWF0LWNvbHVtbi1pc19BY3RpdmUge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDAgMCA1JSAhaW1wb3J0YW50O1xuICB3aWR0aDogMjglICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgLW1zLWh5cGhlbnM6IGF1dG87XG4gIC1tb3otaHlwaGVuczogYXV0bztcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICBoeXBoZW5zOiBhdXRvO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/scheduledtasks/scheduledtasks.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/scheduledtasks/scheduledtasks.component.ts ***!
    \************************************************************/

  /*! exports provided: ScheduledtasksComponent */

  /***/
  function srcAppScheduledtasksScheduledtasksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScheduledtasksComponent", function () {
      return ScheduledtasksComponent;
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


    var _Models_ScheduledTasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Models/ScheduledTasks */
    "./src/app/Models/ScheduledTasks.ts");

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

    var ScheduledtasksComponent = /*#__PURE__*/function () {
      function ScheduledtasksComponent(appSettings) {
        _classCallCheck(this, ScheduledtasksComponent);

        this.appSettings = appSettings;
        this.displayedColumns = ['Schedule_ID', 'Day_Description', 'Task_Description', 'Staff_Name', 'Schedule_Start_Date', 'Schedule_End_Date', 'Status_Description', 'Actions'];
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.once = false;
        this.StartSelected = false;
        this.EndSelected = false;
        this.DaySelected = false;
        this.StartDateDef = new Date('1970-01-01');
        this.EndDateDef = new Date(2020, 11, 10);
        this.show = false;
        this.showAdd = false;
        this.hideTable = true; //StartDateDef

        this.data = [{
          Schedule_ID: "1",
          Day_Description: "Monday",
          Task_Description: 'Feed Chickens',
          Staff_Name: "John",
          Schedule_Start_Date: new Date(2020, 1, 1),
          Schedule_End_Date: new Date(2020, 10, 1),
          Status_Description: 'Completed'
        }, {
          Schedule_ID: "2",
          Day_Description: "Monday",
          Task_Description: 'Fix Fence',
          Staff_Name: "Jack",
          Schedule_Start_Date: new Date(2020, 1, 1),
          Schedule_End_Date: new Date(2020, 10, 1),
          Status_Description: 'In Progress'
        }, {
          Schedule_ID: "3",
          Day_Description: "Tuesday",
          Task_Description: 'Feed Chickens',
          Staff_Name: "Janice",
          Schedule_Start_Date: new Date(2020, 1, 1),
          Schedule_End_Date: new Date(2020, 10, 1),
          Status_Description: 'Completed'
        }, {
          Schedule_ID: "4",
          Day_Description: "Wednesday",
          Task_Description: 'Mow Lawn',
          Staff_Name: "John",
          Schedule_Start_Date: new Date(2020, 1, 1),
          Schedule_End_Date: new Date(2020, 10, 1),
          Status_Description: 'Completed'
        }, {
          Schedule_ID: "5",
          Day_Description: "Monday",
          Task_Description: 'Fix Fence',
          Staff_Name: "Janice",
          Schedule_Start_Date: new Date(2020, 1, 1),
          Schedule_End_Date: new Date(2020, 10, 1),
          Status_Description: 'In Progress'
        }, {
          Schedule_ID: "6",
          Day_Description: "Saturday",
          Task_Description: 'Mow Lawn',
          Staff_Name: "Jack",
          Schedule_Start_Date: new Date(2020, 1, 1),
          Schedule_End_Date: new Date(2020, 10, 1),
          Status_Description: 'In Progress'
        }, {
          Schedule_ID: "7",
          Day_Description: "Wednesday",
          Task_Description: 'Fix Fence',
          Staff_Name: "Jack",
          Schedule_Start_Date: new Date(2020, 1, 1),
          Schedule_End_Date: new Date(2020, 10, 1),
          Status_Description: 'Completed'
        }];
        this.days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        this.tasks = ["Fix Fence", "Mow Lawn", "Feed Chickens"];
        this.staff = ["John", "Jack", "Janice"];
        this.statusses = ["In Progress", "Completed"];
        this.settings = this.appSettings.settings;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.data);
      }

      _createClass(ScheduledtasksComponent, [{
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
            this.hideTable = false;
          }
        }
      }, {
        key: "getScheduledTaskDetail",
        value: function getScheduledTaskDetail(Id) {
          //Implement function to pupulate edit field and populate vehicle edit\
          this.ScheduledTaskEdit = new _Models_ScheduledTasks__WEBPACK_IMPORTED_MODULE_4__["ScheduledTasks"]();
          this.ScheduledTaskEdit.Schedule_End_Date = this.EndDateDef;
          this.ScheduledTaskEdit.Schedule_Start_Date = this.StartDateDef;
          this.ScheduledTaskEdit.Day = "Monday";
          this.ScheduledTaskEdit.Task = "Mow Lawn";
          this.ScheduledTaskEdit.Staff = "John";
          this.ScheduledTaskEdit.Status = "In Progress";
          this.TaskSelect = this.ScheduledTaskEdit.Task;
          this.DaySelect = this.ScheduledTaskEdit.Day;
          this.StaffSelect = this.ScheduledTaskEdit.Staff;
          this.StartDateSelected = this.ScheduledTaskEdit.Schedule_Start_Date;
          this.EndDateSelected = this.ScheduledTaskEdit.Schedule_End_Date;
          this.StatusSelect = this.ScheduledTaskEdit.Status;
          this.changeform();
          this.recurring = true;
          this.once = false;
        }
      }, {
        key: "AddScheduledTask",
        value: function AddScheduledTask() {
          if (this.show == true) {
            this.show = false;
          }

          this.ScheduledTaskAdd = new _Models_ScheduledTasks__WEBPACK_IMPORTED_MODULE_4__["ScheduledTasks"]();
          this.showAdd = true;
          this.hideTable = false;
          this.recurring = true;
          this.once = false;
        }
      }, {
        key: "onChangeRecurring",
        value: function onChangeRecurring() {
          this.once = !this.once;
          this.recurring != this.recurring;
        }
      }, {
        key: "onChangeStartDate",
        value: function onChangeStartDate(event) {
          this.StartSelected = true;

          if (this.StartSelected = true && this.EndSelected == true && this.DaySelected == true || this.once == true && this.StartSelected == true) {
            this.disableTask = true;
          }
        }
      }, {
        key: "onChangeEndDate",
        value: function onChangeEndDate(event) {
          this.EndSelected = true;

          if (this.StartSelected = true && this.EndSelected == true && this.DaySelected == true) {
            this.disableTask = true;
          }
        }
      }, {
        key: "onChangeDay",
        value: function onChangeDay(event) {
          this.DaySelected = true;

          if (this.StartSelected = true && this.EndSelected == true && this.DaySelected == true) {
            this.disableTask = true;
          }
        }
      }, {
        key: "onChangeTask",
        value: function onChangeTask() {
          this.disableStaff = true;
        }
      }, {
        key: "PutScheduledTask",
        value: function PutScheduledTask() {
          if (this.recurring = true && this.once == false) {
            this.DateDifference = Math.floor((Date.UTC(this.ScheduledTaskAdd.Schedule_End_Date.getFullYear(), this.ScheduledTaskAdd.Schedule_End_Date.getMonth(), this.ScheduledTaskAdd.Schedule_End_Date.getDate()) - Date.UTC(this.ScheduledTaskAdd.Schedule_Start_Date.getFullYear(), this.ScheduledTaskAdd.Schedule_Start_Date.getMonth(), this.ScheduledTaskAdd.Schedule_Start_Date.getDate())) / (1000 * 60 * 60 * 24));

            if (this.ScheduledTaskAdd.Schedule_Start_Date > this.ScheduledTaskAdd.Schedule_End_Date) {
              alert("Please check that the start date provided preceds the end date provided!");
            } else if (this.DateDifference > 183) {
              alert("The time period may not exceed 6 months, please review your selection!");
            } else {
              alert("Done!");
            } //this.StartString = this.DateDifference.toString();

          } else if (this.once = true && this.recurring == false) {
            alert("Done!");
          }
        }
      }, {
        key: "deleteScheduledTask",
        value: function deleteScheduledTask() {
          alert("Are you sure");
        }
      }, {
        key: "GenerateSchedules",
        value: function GenerateSchedules() {
          alert("Daily Schedules have been generated successfully!");
        }
      }, {
        key: "SendSchedules",
        value: function SendSchedules() {
          alert("Daily Schedules have been sent successfully!");
        }
      }, {
        key: "back",
        value: function back() {
          this.show = false;
          this.hideTable = true;
          this.showAdd = false;
        }
      }]);

      return ScheduledtasksComponent;
    }();

    ScheduledtasksComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]), __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])], ScheduledtasksComponent.prototype, "paginator", void 0);

    ScheduledtasksComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-scheduledtasks',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./scheduledtasks.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/scheduledtasks/scheduledtasks.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./scheduledtasks.component.scss */
      "./src/app/scheduledtasks/scheduledtasks.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"]])], ScheduledtasksComponent);
    /***/
  },

  /***/
  "./src/app/section-report/section-report.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/section-report/section-report.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSectionReportSectionReportComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb24tcmVwb3J0L3NlY3Rpb24tcmVwb3J0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/section-report/section-report.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/section-report/section-report.component.ts ***!
    \************************************************************/

  /*! exports provided: SectionReportComponent */

  /***/
  function srcAppSectionReportSectionReportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SectionReportComponent", function () {
      return SectionReportComponent;
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

    var SectionReportComponent = /*#__PURE__*/function () {
      function SectionReportComponent() {
        _classCallCheck(this, SectionReportComponent);
      }

      _createClass(SectionReportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "generateReport",
        value: function generateReport() {}
      }, {
        key: "Cancel",
        value: function Cancel() {}
      }]);

      return SectionReportComponent;
    }();

    SectionReportComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-section-report',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./section-report.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/section-report/section-report.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./section-report.component.scss */
      "./src/app/section-report/section-report.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], SectionReportComponent);
    /***/
  },

  /***/
  "./src/app/section-type/section-type.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/section-type/section-type.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSectionTypeSectionTypeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-column-is_Active {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 5% !important;\n  width: 28% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\nmat-header-cell {\n  background-color: #308b30;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbi10eXBlL0Q6XFwzNzBcXEZpbmFsRnJvbnRlbmQvc3JjXFxhcHBcXHNlY3Rpb24tdHlwZVxcc2VjdGlvbi10eXBlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWN0aW9uLXR5cGUvc2VjdGlvbi10eXBlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBRUEsc0JBQUE7RUFFQSxpQkFBQTtFQUVBLHFCQUFBO0VBQ0EsYUFBQTtBQ0RKOztBRElFO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9zZWN0aW9uLXR5cGUvc2VjdGlvbi10eXBlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jb2x1bW4taXNfQWN0aXZlIHtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgNSUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAyOCUgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgXHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIFxyXG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XHJcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgICBoeXBoZW5zOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgbWF0LWhlYWRlci1jZWxse1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LDEzOSw0OCk7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn0iLCIubWF0LWNvbHVtbi1pc19BY3RpdmUge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDAgMCA1JSAhaW1wb3J0YW50O1xuICB3aWR0aDogMjglICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgLW1zLWh5cGhlbnM6IGF1dG87XG4gIC1tb3otaHlwaGVuczogYXV0bztcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICBoeXBoZW5zOiBhdXRvO1xufVxuXG5tYXQtaGVhZGVyLWNlbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA4YjMwO1xuICBmb250LXNpemU6IDE2cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/section-type/section-type.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/section-type/section-type.component.ts ***!
    \********************************************************/

  /*! exports provided: SectionTypeComponent */

  /***/
  function srcAppSectionTypeSectionTypeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SectionTypeComponent", function () {
      return SectionTypeComponent;
    });
    /* harmony import */


    var src_app_app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/app.settings */
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


    var src_app_Models_SectionType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Models/SectionType */
    "./src/app/Models/SectionType.ts");

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

    var SectionTypeComponent = /*#__PURE__*/function () {
      function SectionTypeComponent(appSettings) {
        _classCallCheck(this, SectionTypeComponent);

        this.appSettings = appSettings;
        this.displayedColumns = ['Section_Type_ID', 'Section_Type_Description', "Actions"];
        this.show = false;
        this.showAdd = false;
        this.data = [{
          Section_Type_ID: "1",
          Section_Type_Description: "Field"
        }, {
          Section_Type_ID: "2",
          Section_Type_Description: "Livestock"
        }, {
          Section_Type_ID: "3",
          Section_Type_Description: "Land"
        }];
        this.types = ["Field", "Livestock", "Land"];
        this.settings = this.appSettings.settings;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.data);
      }

      _createClass(SectionTypeComponent, [{
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
          }
        }
      }, {
        key: "getSectionTypeDetail",
        value: function getSectionTypeDetail(Id) {
          //Implement function to pupulate edit field and populate vehicle edit\
          this.SectionTypeEdit = new src_app_Models_SectionType__WEBPACK_IMPORTED_MODULE_4__["SectionTypes"]();
          this.SectionTypeEdit.Section_Type_Description = "New Type";
          this.changeform();
        }
      }, {
        key: "AddSectionType",
        value: function AddSectionType() {
          if (this.show == true) {
            this.show = false;
          }

          this.SectionTypeAdd = new src_app_Models_SectionType__WEBPACK_IMPORTED_MODULE_4__["SectionTypes"]();
          this.showAdd = true;
        }
      }, {
        key: "PutSectionType",
        value: function PutSectionType() {
          alert("Done");
        }
      }, {
        key: "deleteSectionType",
        value: function deleteSectionType() {
          alert("Are you sure");
        }
      }]);

      return SectionTypeComponent;
    }();

    SectionTypeComponent.ctorParameters = function () {
      return [{
        type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]), __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])], SectionTypeComponent.prototype, "paginator", void 0);

    SectionTypeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-section-type',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./section-type.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/section-type/section-type.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./section-type.component.scss */
      "./src/app/section-type/section-type.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [src_app_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"]])], SectionTypeComponent);
    /***/
  },

  /***/
  "./src/app/section/section.component.scss":
  /*!************************************************!*\
    !*** ./src/app/section/section.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSectionSectionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-column-is_Active {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 5% !important;\n  width: 28% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\nmat-header-cell {\n  background-color: #308b30;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbi9EOlxcMzcwXFxGaW5hbEZyb250ZW5kL3NyY1xcYXBwXFxzZWN0aW9uXFxzZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWN0aW9uL3NlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFFQSxzQkFBQTtFQUVBLGlCQUFBO0VBRUEscUJBQUE7RUFDQSxhQUFBO0FDREo7O0FESUU7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb24vc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY29sdW1uLWlzX0FjdGl2ZSB7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDUlICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMjglICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIFxyXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICBcclxuICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xyXG4gICAgLW1vei1oeXBoZW5zOiBhdXRvO1xyXG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG4gICAgaHlwaGVuczogYXV0bztcclxuICB9XHJcblxyXG4gIG1hdC1oZWFkZXItY2VsbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwxMzksNDgpO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59IiwiLm1hdC1jb2x1bW4taXNfQWN0aXZlIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICBmbGV4OiAwIDAgNSUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDI4JSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAtbW96LWh5cGhlbnM6IGF1dG87XG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgaHlwaGVuczogYXV0bztcbn1cblxubWF0LWhlYWRlci1jZWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwOGIzMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/section/section.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/section/section.component.ts ***!
    \**********************************************/

  /*! exports provided: SectionComponent */

  /***/
  function srcAppSectionSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SectionComponent", function () {
      return SectionComponent;
    });
    /* harmony import */


    var src_app_app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/app.settings */
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


    var src_app_Models_Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Models/Section */
    "./src/app/Models/Section.ts");

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

    var SectionComponent = /*#__PURE__*/function () {
      function SectionComponent(appSettings) {
        _classCallCheck(this, SectionComponent);

        this.appSettings = appSettings;
        this.displayedColumns = ['Section_ID', 'Section_Type_Description', 'Section_Location', 'Section_Size', 'Actions'];
        this.show = false;
        this.showAdd = false;
        this.hideTable = true;
        this.data = [{
          Section_ID: "1",
          Section_Name: "Oop grond",
          Section_Type_Description: "Field",
          Section_Location: "Noord van huis",
          Section_Size: "2 km²"
        }, {
          Section_ID: "2",
          Section_Name: "Bees Kraal",
          Section_Type_Description: "Livestock",
          Section_Location: "Langs Stoor",
          Section_Size: "5 km²"
        }, {
          Section_ID: "3",
          Section_Name: "Mielies 1",
          Section_Type_Description: "Land",
          Section_Location: "Wes van stoor",
          Section_Size: "1 km²"
        }];
        this.types = ["Field", "Land", "Livestock"];
        this.settings = this.appSettings.settings;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.data);
      }

      _createClass(SectionComponent, [{
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
            this.hideTable = false;
          }
        }
      }, {
        key: "getSectionDetail",
        value: function getSectionDetail(Id) {
          //Implement function to pupulate edit field and populate vehicle edit\
          this.SectionEdit = new src_app_Models_Section__WEBPACK_IMPORTED_MODULE_4__["Sections"]();
          this.SectionEdit.Section_Type_Description = "New Type";
          this.changeform();
        }
      }, {
        key: "AddSection",
        value: function AddSection() {
          if (this.show == true) {
            this.show = false;
          }

          this.SectionAdd = new src_app_Models_Section__WEBPACK_IMPORTED_MODULE_4__["Sections"]();
          this.showAdd = true;
          this.hideTable = false;
        }
      }, {
        key: "PutSection",
        value: function PutSection() {
          alert("Done");
        }
      }, {
        key: "deleteSection",
        value: function deleteSection() {
          alert("Are you sure");
        }
      }, {
        key: "back",
        value: function back() {
          this.show = false;
          this.hideTable = true;
          this.showAdd = false;
        }
      }, {
        key: "SectionTypes",
        value: function SectionTypes() {}
      }]);

      return SectionComponent;
    }();

    SectionComponent.ctorParameters = function () {
      return [{
        type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]), __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])], SectionComponent.prototype, "paginator", void 0);

    SectionComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-section',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./section.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/section/section.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./section.component.scss */
      "./src/app/section/section.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [src_app_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"]])], SectionComponent);
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
  "./src/app/skill/editskill-dialog/editskill-dialog.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/skill/editskill-dialog/editskill-dialog.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSkillEditskillDialogEditskillDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NraWxsL2VkaXRza2lsbC1kaWFsb2cvZWRpdHNraWxsLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/skill/editskill-dialog/editskill-dialog.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/skill/editskill-dialog/editskill-dialog.component.ts ***!
    \**********************************************************************/

  /*! exports provided: EditskillDialogComponent */

  /***/
  function srcAppSkillEditskillDialogEditskillDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditskillDialogComponent", function () {
      return EditskillDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app.settings */
    "./src/app/app.settings.ts");
    /* harmony import */


    var _Models_Skill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../Models/Skill */
    "./src/app/Models/Skill.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _skill_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../skill-service.service */
    "./src/app/skill/skill-service.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

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

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var EditskillDialogComponent = /*#__PURE__*/function () {
      function EditskillDialogComponent(appSettings, router, skillService, dialog, http, formBuilder, dialogRef, skill) {
        _classCallCheck(this, EditskillDialogComponent);

        this.appSettings = appSettings;
        this.router = router;
        this.skillService = skillService;
        this.dialog = dialog;
        this.http = http;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.skill = skill;
        this.show = false;
        this.showEdit = false;
        this.showAdd = false;
        this.hideTable = true;
        this.data = [];
        this.SkillEdit = new _Models_Skill__WEBPACK_IMPORTED_MODULE_3__["PostSkill"]();
        this.SkillAdd = new _Models_Skill__WEBPACK_IMPORTED_MODULE_3__["PostSkill"]();
        this.settings = this.appSettings.settings; //this.dataSource = new MatTableDataSource<Skill>(this.data);

        this.form = this.formBuilder.group({
          $id: null,
          Skill_ID: null,
          Skill_Description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(20)])]
        });
      }

      _createClass(EditskillDialogComponent, [{
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.skill) {
            this.form.setValue(this.skill);
            this.editSkillID = this.skill.Skill_ID;
            console.log(this.editSkillID);
          }
        } //============================== update skill =====================================

      }, {
        key: "PutSkill",
        value: function PutSkill() {
          this.ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          this.skillService.putSkill(this.editSkillID, this.skill).subscribe( //<<<<<<<< update skill
          function (response) {
            console.log(response);
          });
          window.location.reload();
        }
      }]);

      return EditskillDialogComponent;
    }();

    EditskillDialogComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _skill_service_service__WEBPACK_IMPORTED_MODULE_5__["SkillServiceService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
      }, {
        type: _Models_Skill__WEBPACK_IMPORTED_MODULE_3__["Skill"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    EditskillDialogComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-editskill-dialog',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./editskill-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/skill/editskill-dialog/editskill-dialog.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./editskill-dialog.component.scss */
      "./src/app/skill/editskill-dialog/editskill-dialog.component.scss"))["default"]]
    }), __param(7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _skill_service_service__WEBPACK_IMPORTED_MODULE_5__["SkillServiceService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], _Models_Skill__WEBPACK_IMPORTED_MODULE_3__["Skill"]])], EditskillDialogComponent);
    /***/
  },

  /***/
  "./src/app/skill/skill-dialog/skill-dialog.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/skill/skill-dialog/skill-dialog.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSkillSkillDialogSkillDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1 {\n  text-align: center;\n}\n\n.m-1 {\n  margin-left: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGwvc2tpbGwtZGlhbG9nL0Q6XFwzNzBcXEZpbmFsRnJvbnRlbmQvc3JjXFxhcHBcXHNraWxsXFxza2lsbC1kaWFsb2dcXHNraWxsLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2tpbGwvc2tpbGwtZGlhbG9nL3NraWxsLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvc2tpbGwvc2tpbGwtZGlhbG9nL3NraWxsLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5tLTF7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG59XHJcbiIsImgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubS0xIHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/skill/skill-dialog/skill-dialog.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/skill/skill-dialog/skill-dialog.component.ts ***!
    \**************************************************************/

  /*! exports provided: SkillDialogComponent */

  /***/
  function srcAppSkillSkillDialogSkillDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillDialogComponent", function () {
      return SkillDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app.settings */
    "./src/app/app.settings.ts");
    /* harmony import */


    var _Models_Skill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../Models/Skill */
    "./src/app/Models/Skill.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _skill_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../skill-service.service */
    "./src/app/skill/skill-service.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

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

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var SkillDialogComponent = /*#__PURE__*/function () {
      function SkillDialogComponent(appSettings, router, skillService, dialog, http, formBuilder, dialogRef, skill) {
        _classCallCheck(this, SkillDialogComponent);

        this.appSettings = appSettings;
        this.router = router;
        this.skillService = skillService;
        this.dialog = dialog;
        this.http = http;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.skill = skill;
        this.show = false;
        this.showEdit = false;
        this.showAdd = false;
        this.hideTable = true;
        this.data = [];
        this.SkillEdit = new _Models_Skill__WEBPACK_IMPORTED_MODULE_3__["PostSkill"]();
        this.SkillAdd = new _Models_Skill__WEBPACK_IMPORTED_MODULE_3__["PostSkill"]();
        this.settings = this.appSettings.settings; //this.dataSource = new MatTableDataSource<Skill>(this.data);

        this.form = this.formBuilder.group({
          'skill_description': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(20)])]
        });
      }

      _createClass(SkillDialogComponent, [{
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.skill) {
            this.form.setValue(this.skill);
          } else {
            this.skill = new _Models_Skill__WEBPACK_IMPORTED_MODULE_3__["Skill"]();
          }
        }
      }, {
        key: "addNewSkill",
        value: function addNewSkill() {
          var _this9 = this;

          this.SkillAdd.Farm_ID = 6;
          this.ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          this.skillService.postSkill(this.SkillAdd).subscribe( //<<<<<<<< Add skill
          function (response) {
            console.log(response);

            _this9.dialogRef.close();

            window.location.reload();
          });
        } //============================== update skill =====================================

      }, {
        key: "PutSkill",
        value: function PutSkill() {
          var _this10 = this;

          this.ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          this.skillService.putSkill(this.id, this.SkillEdit).subscribe( //<<<<<<<< update skill
          function (response) {
            console.log(response);

            _this10.dialogRef.close();

            window.location.reload();
          });
        }
      }]);

      return SkillDialogComponent;
    }();

    SkillDialogComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _skill_service_service__WEBPACK_IMPORTED_MODULE_5__["SkillServiceService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
      }, {
        type: _Models_Skill__WEBPACK_IMPORTED_MODULE_3__["Skill"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    SkillDialogComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-skill-dialog',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./skill-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/skill/skill-dialog/skill-dialog.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./skill-dialog.component.scss */
      "./src/app/skill/skill-dialog/skill-dialog.component.scss"))["default"]]
    }), __param(7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _skill_service_service__WEBPACK_IMPORTED_MODULE_5__["SkillServiceService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], _Models_Skill__WEBPACK_IMPORTED_MODULE_3__["Skill"]])], SkillDialogComponent);
    /***/
  },

  /***/
  "./src/app/skill/skill-service.service.ts":
  /*!************************************************!*\
    !*** ./src/app/skill/skill-service.service.ts ***!
    \************************************************/

  /*! exports provided: SkillServiceService */

  /***/
  function srcAppSkillSkillServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillServiceService", function () {
      return SkillServiceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

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

    var SkillServiceService = /*#__PURE__*/function () {
      function SkillServiceService(http) {
        _classCallCheck(this, SkillServiceService);

        this.http = http;
        this.apiURL = "http://localhost:52620/api/";
      }

      _createClass(SkillServiceService, [{
        key: "getSkill",
        value: function getSkill() {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.get(this.apiURL + "Skill/" + localStorage.getItem("currentFarm"), ops);
        } //=========================== get a skill's details============================

      }, {
        key: "getSkillDetails",
        value: function getSkillDetails(id) {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.get(this.apiURL + "SkillDetails/" + id.toString(), ops);
        } //=================================add skill==================================

      }, {
        key: "postSkill",
        value: function postSkill(skill) {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.post(this.apiURL + "Skill/AddSkill", skill, ops);
        } //================================Put details======================

      }, {
        key: "putSkill",
        value: function putSkill(id, skill) {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.put(this.apiURL + "Skill/UpdateSkill/" + id.toString(), skill, ops);
        } //==================================Delete========================

      }, {
        key: "deleteSkill",
        value: function deleteSkill(id) {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http["delete"](this.apiURL + "Skill/DeleteSkill/" + id.toString(), ops);
        }
      }]);

      return SkillServiceService;
    }();

    SkillServiceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    SkillServiceService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], SkillServiceService);
    /***/
  },

  /***/
  "./src/app/skill/skill.component.scss":
  /*!********************************************!*\
    !*** ./src/app/skill/skill.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSkillSkillComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-column-is_Active {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 5% !important;\n  width: 28% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\nh1 {\n  text-align: center;\n}\n\nmat-header-cell {\n  background-color: #308b30;\n  font-size: 16px;\n}\n\n#provideLabel {\n  text-align: center;\n  font-size: 14px;\n  margin-left: 43%;\n}\n\nmat-card {\n  width: 70%;\n  align-items: center;\n  margin-left: 15%;\n}\n\n#endButton {\n  width: 15%;\n  margin: 0%;\n  align-items: center;\n}\n\nmat-table {\n  max-width: 400px;\n  margin-left: 35%;\n  table-layout: fixed;\n}\n\nmat-paginator {\n  max-width: 400px;\n  margin-left: 35%;\n}\n\n.search {\n  max-width: 400px;\n  width: 50%;\n  margin-left: 35%;\n}\n\n.addSkill {\n  margin-left: 35%;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGwvRDpcXDM3MFxcRmluYWxGcm9udGVuZC9zcmNcXGFwcFxcc2tpbGxcXHNraWxsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9za2lsbC9za2lsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUVBLHNCQUFBO0VBRUEsaUJBQUE7RUFFQSxxQkFBQTtFQUNBLGFBQUE7QUNESjs7QURHRTtFQUNFLGtCQUFBO0FDQUo7O0FER0E7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUNBRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0VGOztBRENBO0VBQ0UsVUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ0VGOztBRENBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRUY7O0FESUE7RUFDRSxnQkFBQTtFQUNGLGdCQUFBO0FDREE7O0FER0E7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDRixnQkFBQTtBQ0FBOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvc2tpbGwvc2tpbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNvbHVtbi1pc19BY3RpdmUge1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCA1JSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDI4JSAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICBcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgXHJcbiAgICAtbXMtaHlwaGVuczogYXV0bztcclxuICAgIC1tb3otaHlwaGVuczogYXV0bztcclxuICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuICAgIGh5cGhlbnM6IGF1dG87XHJcbiAgfVxyXG4gIGgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LCAxMzksIDQ4KTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuI3Byb3ZpZGVMYWJlbHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA0MyU7XHJcbn1cclxubWF0LWNhcmR7XHJcbiAgd2lkdGg6NzAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6MTUlO1xyXG5cclxufVxyXG4jZW5kQnV0dG9ue1xyXG4gIHdpZHRoOiAxNSU7XHJcbiAgbWFyZ2luOjAlOyBcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxufVxyXG5tYXQtdGFibGV7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBtYXJnaW4tbGVmdDogMzUlO1xyXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgLy9kaXNwbGF5OiA7XHJcbiAgLy9mbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gIFxyXG5cclxufVxyXG5tYXQtcGFnaW5hdG9ye1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbm1hcmdpbi1sZWZ0OiAzNSU7XHJcbn1cclxuLnNlYXJjaHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIHdpZHRoOjUwJTsgXHJcbm1hcmdpbi1sZWZ0OiAzNSU7XHJcbn1cclxuXHJcbi5hZGRTa2lsbHtcclxuICBtYXJnaW4tbGVmdDozNSU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4iLCIubWF0LWNvbHVtbi1pc19BY3RpdmUge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDAgMCA1JSAhaW1wb3J0YW50O1xuICB3aWR0aDogMjglICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgLW1zLWh5cGhlbnM6IGF1dG87XG4gIC1tb3otaHlwaGVuczogYXV0bztcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICBoeXBoZW5zOiBhdXRvO1xufVxuXG5oMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubWF0LWhlYWRlci1jZWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwOGIzMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4jcHJvdmlkZUxhYmVsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiA0MyU7XG59XG5cbm1hdC1jYXJkIHtcbiAgd2lkdGg6IDcwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcbn1cblxuI2VuZEJ1dHRvbiB7XG4gIHdpZHRoOiAxNSU7XG4gIG1hcmdpbjogMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbm1hdC10YWJsZSB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzNSU7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG59XG5cbm1hdC1wYWdpbmF0b3Ige1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXJnaW4tbGVmdDogMzUlO1xufVxuXG4uc2VhcmNoIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDM1JTtcbn1cblxuLmFkZFNraWxsIHtcbiAgbWFyZ2luLWxlZnQ6IDM1JTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/skill/skill.component.ts":
  /*!******************************************!*\
    !*** ./src/app/skill/skill.component.ts ***!
    \******************************************/

  /*! exports provided: SkillComponent */

  /***/
  function srcAppSkillSkillComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillComponent", function () {
      return SkillComponent;
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


    var _Models_Skill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Models/Skill */
    "./src/app/Models/Skill.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _skill_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./skill-service.service */
    "./src/app/skill/skill-service.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _skill_dialog_skill_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./skill-dialog/skill-dialog.component */
    "./src/app/skill/skill-dialog/skill-dialog.component.ts");
    /* harmony import */


    var _editskill_dialog_editskill_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./editskill-dialog/editskill-dialog.component */
    "./src/app/skill/editskill-dialog/editskill-dialog.component.ts");

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

    var SkillComponent = /*#__PURE__*/function () {
      function SkillComponent(appSettings, router, skillService, dialog, http, formBuilder) {
        _classCallCheck(this, SkillComponent);

        this.appSettings = appSettings;
        this.router = router;
        this.skillService = skillService;
        this.dialog = dialog;
        this.http = http;
        this.formBuilder = formBuilder;
        this.displayedColumns = ['Skill_Description', 'Actions'];
        this.show = false;
        this.showEdit = false;
        this.showAdd = false;
        this.hideTable = true;
        this.ngHide = true;
        this.ngShow = false;
        this.data = [];
        this.SkillEdit = new _Models_Skill__WEBPACK_IMPORTED_MODULE_4__["PostSkill"]();
        this.SkillAdd = new _Models_Skill__WEBPACK_IMPORTED_MODULE_4__["PostSkill"]();
        this.settings = this.appSettings.settings; //this.dataSource = new MatTableDataSource<Skill>(this.data);

        this.form = this.formBuilder.group({
          'skill_description': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(20)])]
        });
      }

      _createClass(SkillComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (localStorage.getItem("jwtToken") === null) {
            this.router.navigateByUrl("login");
          } else {
            this.AdminPriv = localStorage.getItem("PrivelageLevel");
            localStorage.setItem("currentFarm", "6"); //<<<<<< Remove when done!!!!!!!!!!!!!!!!!!!!

            this.getData();
          }
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this11 = this;

          this.skillService.getSkill().subscribe( //get all skills
          function (response) {
            _this11.data1 = response;
            console.log(_this11.data1);
            _this11.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this11.data1); //populate data

            _this11.dataSource.paginator = _this11.paginator;
          });
        } //============================= table filter ======================================

      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.dataSource.filter = filterValue.trim().toLowerCase();
        } //============================ paginator initializer =============================

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
        } //======================== change between add and edit form =======================
        // changeform(){
        //   if(this.show == false){
        //     this.show =true;
        //     this.showAdd = false;
        //     this.hideTable=false;
        //   }
        // }
        //========== gets details to populate edit dialog box that gets called==========

      }, {
        key: "getSkillDetails",
        value: function getSkillDetails(id) {
          var _this12 = this;

          //Implement function to pupulate edit field and populate skill edit\
          this.editSkillID = id;
          console.log(this.editSkillID); //this.changeform();
          //localStorage.setItem("CurrentSkill", id.toString())

          this.ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          this.skillService.getSkillDetails(id).subscribe( // <<<< get specific skill
          // <<<< get specific skill
          function (success) {
            _this12.data1 = success;
            _this12.SkillEdit = _this12.data1; //this.PutSkill();

            var dialogRef = _this12.dialog.open(_editskill_dialog_editskill_dialog_component__WEBPACK_IMPORTED_MODULE_11__["EditskillDialogComponent"], {
              data: _this12.data1
            });
          });
        } //========================== calls dialog to add a skill===========================

      }, {
        key: "AddSkillDialog",
        value: function AddSkillDialog(skill) {
          var dialogRef = this.dialog.open(_skill_dialog_skill_dialog_component__WEBPACK_IMPORTED_MODULE_10__["SkillDialogComponent"]); //this.showAdd=true;

          dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: ".concat(result));
          });
        } //================================= delete skill ======================================

      }, {
        key: "deleteSkill",
        value: function deleteSkill(id) {
          if (confirm("Are you sure to delete?")) {
            this.ops = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({
                'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
              })
            };
            this.skillService.deleteSkill(id).subscribe( //<<<<<<<< delete skill
            function (response) {
              console.log(response);
            });
          }

          window.location.reload();
        }
      }, {
        key: "download",
        value: function download() {
          alert("Download successful");
        }
      }, {
        key: "back",
        value: function back() {
          this.show = false;
          this.hideTable = true;
          this.showAdd = false;
        }
      }]);

      return SkillComponent;
    }();

    SkillComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _skill_service_service__WEBPACK_IMPORTED_MODULE_6__["SkillServiceService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]), __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])], SkillComponent.prototype, "paginator", void 0);

    SkillComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-skill',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./skill.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/skill/skill.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./skill.component.scss */
      "./src/app/skill/skill.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _skill_service_service__WEBPACK_IMPORTED_MODULE_6__["SkillServiceService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]])], SkillComponent);
    /***/
  },

  /***/
  "./src/app/sr-provider/sr-provider.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/sr-provider/sr-provider.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSrProviderSrProviderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-column-is_Active {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 5% !important;\n  width: 28% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\nmat-header-cell {\n  background-color: #308b30;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ItcHJvdmlkZXIvRDpcXDM3MFxcRmluYWxGcm9udGVuZC9zcmNcXGFwcFxcc3ItcHJvdmlkZXJcXHNyLXByb3ZpZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zci1wcm92aWRlci9zci1wcm92aWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUVBLHNCQUFBO0VBRUEsaUJBQUE7RUFFQSxxQkFBQTtFQUNBLGFBQUE7QUNESjs7QURJRTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvc3ItcHJvdmlkZXIvc3ItcHJvdmlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNvbHVtbi1pc19BY3RpdmUge1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCA1JSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDI4JSAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICBcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgXHJcbiAgICAtbXMtaHlwaGVuczogYXV0bztcclxuICAgIC1tb3otaHlwaGVuczogYXV0bztcclxuICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuICAgIGh5cGhlbnM6IGF1dG87XHJcbiAgfVxyXG5cclxuICBtYXQtaGVhZGVyLWNlbGx7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsMTM5LDQ4KTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufSIsIi5tYXQtY29sdW1uLWlzX0FjdGl2ZSB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgZmxleDogMCAwIDUlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyOCUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAtbXMtaHlwaGVuczogYXV0bztcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gIGh5cGhlbnM6IGF1dG87XG59XG5cbm1hdC1oZWFkZXItY2VsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDhiMzA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/sr-provider/sr-provider.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/sr-provider/sr-provider.component.ts ***!
    \******************************************************/

  /*! exports provided: SrProviderComponent */

  /***/
  function srcAppSrProviderSrProviderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SrProviderComponent", function () {
      return SrProviderComponent;
    });
    /* harmony import */


    var src_app_app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/app.settings */
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


    var src_app_Models_SRProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Models/SRProvider */
    "./src/app/Models/SRProvider.ts");

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

    var SrProviderComponent = /*#__PURE__*/function () {
      function SrProviderComponent(appSettings) {
        _classCallCheck(this, SrProviderComponent);

        this.appSettings = appSettings;
        this.displayedColumns = ['Provider_ID', 'Provider_Name', 'Provider_Contact', 'Provider_Email', 'Provider_Address', 'Actions'];
        this.show = false;
        this.hideTable = true;
        this.showAdd = false;
        this.data = [{
          Provider_ID: "1",
          Provider_Name: "Jon Auto",
          Provider_Address: "12 Long Street Vaalpark",
          Provider_Contact: "0169761235",
          Provider_Email: "jauto@gmail.com"
        }, {
          Provider_ID: "2",
          Provider_Name: "Mercedes",
          Provider_Address: "13 Gutem Road Vereeniging",
          Provider_Contact: "0569667825",
          Provider_Email: "support@mercedes.com"
        }, {
          Provider_ID: "3",
          Provider_Name: "Piet Spares",
          Provider_Address: "8 Short Lane Sandton",
          Provider_Contact: "0139763255",
          Provider_Email: "piet@spares.com"
        }];
        this.types = ["Wiring", "Structural", "Security", "Miscellaneous"];
        this.settings = this.appSettings.settings;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.data);
      }

      _createClass(SrProviderComponent, [{
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
            this.hideTable = false;
          }
        }
      }, {
        key: "getSRProviderDetail",
        value: function getSRProviderDetail(Id) {
          //Implement function to pupulate edit field and populate vehicle edit\
          this.SRProviderEdit = new src_app_Models_SRProvider__WEBPACK_IMPORTED_MODULE_4__["SRProviders"]();
          this.SRProviderEdit.Provider_Name = "New Name";
          this.SRProviderEdit.Provider_Name = "New Number";
          this.SRProviderEdit.Provider_Name = "New Email";
          this.SRProviderEdit.Provider_Name = "New Address";
          this.changeform();
        }
      }, {
        key: "AddSRProvider",
        value: function AddSRProvider() {
          if (this.show == true) {
            this.show = false;
          }

          this.SRProviderAdd = new src_app_Models_SRProvider__WEBPACK_IMPORTED_MODULE_4__["SRProviders"]();
          this.showAdd = true;
          this.hideTable = false;
        }
      }, {
        key: "PutSRProvider",
        value: function PutSRProvider() {
          alert("Done");
        }
      }, {
        key: "deleteSRProvider",
        value: function deleteSRProvider() {
          alert("Are you sure?");
        }
      }, {
        key: "back",
        value: function back() {
          this.show = false;
          this.showAdd = false;
          this.hideTable = true;
        }
      }]);

      return SrProviderComponent;
    }();

    SrProviderComponent.ctorParameters = function () {
      return [{
        type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]), __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])], SrProviderComponent.prototype, "paginator", void 0);

    SrProviderComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-srProvider',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./sr-provider.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sr-provider/sr-provider.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./sr-provider.component.scss */
      "./src/app/sr-provider/sr-provider.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [src_app_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"]])], SrProviderComponent);
    /***/
  },

  /***/
  "./src/app/staff-schedule/staff-schedule.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/staff-schedule/staff-schedule.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStaffScheduleStaffScheduleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-column-is_Active {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 5% !important;\n  width: 28% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhZmYtc2NoZWR1bGUvRDpcXDM3MFxcRmluYWxGcm9udGVuZC9zcmNcXGFwcFxcc3RhZmYtc2NoZWR1bGVcXHN0YWZmLXNjaGVkdWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdGFmZi1zY2hlZHVsZS9zdGFmZi1zY2hlZHVsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUVBLHNCQUFBO0VBRUEsaUJBQUE7RUFFQSxxQkFBQTtFQUNBLGFBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3N0YWZmLXNjaGVkdWxlL3N0YWZmLXNjaGVkdWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jb2x1bW4taXNfQWN0aXZlIHtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgNSUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAyOCUgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgXHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIFxyXG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XHJcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgICBoeXBoZW5zOiBhdXRvO1xyXG4gIH0iLCIubWF0LWNvbHVtbi1pc19BY3RpdmUge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDAgMCA1JSAhaW1wb3J0YW50O1xuICB3aWR0aDogMjglICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgLW1zLWh5cGhlbnM6IGF1dG87XG4gIC1tb3otaHlwaGVuczogYXV0bztcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICBoeXBoZW5zOiBhdXRvO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/staff-schedule/staff-schedule.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/staff-schedule/staff-schedule.component.ts ***!
    \************************************************************/

  /*! exports provided: StaffScheduleComponent */

  /***/
  function srcAppStaffScheduleStaffScheduleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaffScheduleComponent", function () {
      return StaffScheduleComponent;
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

    var StaffScheduleComponent = /*#__PURE__*/function () {
      function StaffScheduleComponent(appSettings) {
        _classCallCheck(this, StaffScheduleComponent);

        this.appSettings = appSettings;
        this.displayedColumns = ['Task_Description', 'Status_Description'];
        this.StartDateDef = new Date('1970-01-01');
        this.EndDateDef = new Date(2020, 11, 10);
        this.show = false;
        this.showAdd = false;
        this.hideTable = true;
        this.Recurring = true;
        this.weekday = false;
        this.staffShow = false;
        this.taskshow = false;
        this.data = [{
          Task_Description: 'Feed Chickens',
          Status_Description: 'Completed'
        }, {
          Task_Description: 'Fix Fence',
          Status_Description: 'In Progress'
        }, {
          Task_Description: 'Feed Chickens',
          Status_Description: 'Completed'
        }, {
          Task_Description: 'Mow Lawn',
          Status_Description: 'Completed'
        }, {
          Task_Description: 'Fix Fence',
          Status_Description: 'In Progress'
        }, {
          Task_Description: 'Mow Lawn',
          Status_Description: 'In Progress'
        }, {
          Task_Description: 'Fix Fence',
          Status_Description: 'Completed'
        }];
        this.tasks = ["Fix Fence", "Mow Lawn", "Feed Chickens"];
        this.statusses = ["In Progress", "Completed"];
        this.settings = this.appSettings.settings;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.data);
      }

      _createClass(StaffScheduleComponent, [{
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
      }]);

      return StaffScheduleComponent;
    }();

    StaffScheduleComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]), __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])], StaffScheduleComponent.prototype, "paginator", void 0);

    StaffScheduleComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-staff-schedule',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./staff-schedule.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/staff-schedule/staff-schedule.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./staff-schedule.component.scss */
      "./src/app/staff-schedule/staff-schedule.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"]])], StaffScheduleComponent);
    /***/
  },

  /***/
  "./src/app/staff/staff.component.scss":
  /*!********************************************!*\
    !*** ./src/app/staff/staff.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppStaffStaffComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1 {\n  text-align: center;\n}\n\nmat-header-cell {\n  background-color: #308b30;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhZmYvRDpcXDM3MFxcRmluYWxGcm9udGVuZC9zcmNcXGFwcFxcc3RhZmZcXHN0YWZmLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdGFmZi9zdGFmZi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3N0YWZmL3N0YWZmLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxubWF0LWhlYWRlci1jZWxse1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LCAxMzksIDQ4KTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9IiwiaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbm1hdC1oZWFkZXItY2VsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDhiMzA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/staff/staff.component.ts":
  /*!******************************************!*\
    !*** ./src/app/staff/staff.component.ts ***!
    \******************************************/

  /*! exports provided: StaffComponent */

  /***/
  function srcAppStaffStaffComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaffComponent", function () {
      return StaffComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");

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

    var StaffComponent = /*#__PURE__*/function () {
      function StaffComponent() {
        _classCallCheck(this, StaffComponent);

        this.displayedColumns = ['Staff_ID', 'Staff_Name', 'Staff_Surname', 'Staff_Phone_Number', 'Clock_in_Time'];
        this.data = [{
          Staff_ID: 6902150236082,
          Staff_Name: "Jack",
          Staff_Surname: "Black",
          Staff_Phone_Number: "0845648884",
          Clock_in_Time: '12:00'
        }, {
          Staff_ID: 9203050458083,
          Staff_Name: "Solomn",
          Staff_Surname: "Mplunga",
          Staff_Phone_Number: "0832654785",
          Clock_in_Time: '08:00'
        }, {
          Staff_ID: 8710081256081,
          Staff_Name: "Happy",
          Staff_Surname: "Hlingani",
          Staff_Phone_Number: "0784561289",
          Clock_in_Time: '08:30'
        }, {
          Staff_ID: 6102185621083,
          Staff_Name: "Gracious",
          Staff_Surname: "Nkosi",
          Staff_Phone_Number: "0614589874",
          Clock_in_Time: '09:10'
        }, {
          Staff_ID: 9805201584082,
          Staff_Name: "Susan",
          Staff_Surname: "Grant",
          Staff_Phone_Number: "0725698563",
          Clock_in_Time: '13:10'
        }];
      }

      _createClass(StaffComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StaffComponent;
    }();

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]), __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])], StaffComponent.prototype, "paginator", void 0);

    StaffComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-staff',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./staff.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/staff/staff.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./staff.component.scss */
      "./src/app/staff/staff.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], StaffComponent);
    /***/
  },

  /***/
  "./src/app/task-type/task-type.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/task-type/task-type.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTaskTypeTaskTypeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-column-is_Active {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 5% !important;\n  width: 28% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\nh1 {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay10eXBlL0Q6XFwzNzBcXEZpbmFsRnJvbnRlbmQvc3JjXFxhcHBcXHRhc2stdHlwZVxcdGFzay10eXBlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90YXNrLXR5cGUvdGFzay10eXBlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBRUEsc0JBQUE7RUFFQSxpQkFBQTtFQUVBLHFCQUFBO0VBQ0EsYUFBQTtBQ0RKOztBREdFO0VBQ0Usa0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3Rhc2stdHlwZS90YXNrLXR5cGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNvbHVtbi1pc19BY3RpdmUge1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCA1JSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDI4JSAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICBcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgXHJcbiAgICAtbXMtaHlwaGVuczogYXV0bztcclxuICAgIC1tb3otaHlwaGVuczogYXV0bztcclxuICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuICAgIGh5cGhlbnM6IGF1dG87XHJcbiAgfVxyXG4gIGgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59IiwiLm1hdC1jb2x1bW4taXNfQWN0aXZlIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICBmbGV4OiAwIDAgNSUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDI4JSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAtbW96LWh5cGhlbnM6IGF1dG87XG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgaHlwaGVuczogYXV0bztcbn1cblxuaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/task-type/task-type.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/task-type/task-type.component.ts ***!
    \**************************************************/

  /*! exports provided: TaskTypeComponent */

  /***/
  function srcAppTaskTypeTaskTypeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskTypeComponent", function () {
      return TaskTypeComponent;
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


    var _Models_Task_Type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Models/Task_Type */
    "./src/app/Models/Task_Type.ts");
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

    var TaskTypeComponent = /*#__PURE__*/function () {
      function TaskTypeComponent(appSettings, router) {
        _classCallCheck(this, TaskTypeComponent);

        this.appSettings = appSettings;
        this.router = router;
        this.displayedColumns = ['Task_Type_ID', 'Task_Type_Description', 'Actions'];
        this.show = false;
        this.showAdd = false;
        this.hideTable = true;
        this.data = [{
          Task_Type_ID: 1,
          Task_Type_Description: "Farming"
        }, {
          Task_Type_ID: 2,
          Task_Type_Description: "Plumbing"
        }, {
          Task_Type_ID: 3,
          Task_Type_Description: "Livestock"
        }];
        this.settings = this.appSettings.settings;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.data);
      }

      _createClass(TaskTypeComponent, [{
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
          }
        }
      }, {
        key: "getTaskTypeDetail",
        value: function getTaskTypeDetail(Id) {
          //Implement function to pupulate edit field and populate vehicle edit\
          this.Task_TypeEdit = new _Models_Task_Type__WEBPACK_IMPORTED_MODULE_4__["Task_Type"]();
          this.Task_TypeEdit.Task_Type_Description = "Crops";
          this.changeform();
        }
      }, {
        key: "AddTaskType",
        value: function AddTaskType() {
          if (this.show == true) {
            this.show = false;
          }

          this.Task_TypeAdd = new _Models_Task_Type__WEBPACK_IMPORTED_MODULE_4__["Task_Type"]();
          this.showAdd = true;
        }
      }, {
        key: "PutTaskType",
        value: function PutTaskType() {
          alert("Done");
        }
      }, {
        key: "deleteTaskType",
        value: function deleteTaskType() {
          alert("Are you sure");
        }
      }, {
        key: "back",
        value: function back() {
          this.show = false;
          this.hideTable = true;
          this.showAdd = false;
        }
      }]);

      return TaskTypeComponent;
    }();

    TaskTypeComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]), __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])], TaskTypeComponent.prototype, "paginator", void 0);

    TaskTypeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-task-type',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./task-type.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/task-type/task-type.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./task-type.component.scss */
      "./src/app/task-type/task-type.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], TaskTypeComponent);
    /***/
  },

  /***/
  "./src/app/task/task.component.scss":
  /*!******************************************!*\
    !*** ./src/app/task/task.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppTaskTaskComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-column-is_Active {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 5% !important;\n  width: 28% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\nh1 {\n  text-align: center;\n}\n\n.endButton {\n  width: 20%;\n  margin-left: auto;\n}\n\n.otherbutton {\n  width: 20%;\n}\n\n#provideLabel {\n  text-align: center;\n  font-size: 14px;\n  margin-left: 38.5%;\n}\n\n.labelCenter {\n  text-align: center;\n  font-size: 14px;\n}\n\nmat-card {\n  width: 40%;\n  margin-left: 25%;\n}\n\n.skillLabel {\n  font-size: 14px;\n}\n\nmat-header-cell {\n  background-color: #308b30;\n  font-size: 16px;\n}\n\nmat-card-header {\n  text-align: left;\n}\n\n.description {\n  width: 70%;\n}\n\n.skills {\n  width: 50%;\n}\n\n.p-0 {\n  height: 70%;\n  position: fixed;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay9EOlxcMzcwXFxGaW5hbEZyb250ZW5kL3NyY1xcYXBwXFx0YXNrXFx0YXNrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90YXNrL3Rhc2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0E7RUFDSSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFFQSxzQkFBQTtFQUVBLGlCQUFBO0VBRUEscUJBQUE7RUFDQSxhQUFBO0FDWko7O0FEY0U7RUFDSSxrQkFBQTtBQ1hOOztBRGVFO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FDWko7O0FEY0M7RUFDRyxVQUFBO0FDWEo7O0FEY0U7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ1hOOztBRGNFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDWEo7O0FEY0U7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUNYTjs7QURjRTtFQUNFLGVBQUE7QUNYSjs7QURhRTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQ1ZOOztBRFlFO0VBQ0ksZ0JBQUE7QUNUTjs7QURZQztFQUNJLFVBQUE7QUNUTDs7QURZQztFQUNJLFVBQUE7QUNUTDs7QURZRTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ1ROIiwiZmlsZSI6InNyYy9hcHAvdGFzay90YXNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYm9keSxodG1se1xyXG4vLyAgICAgaGVpZ2h0OjEwMCU7XHJcbi8vIH1cclxuLy8gLmJncmR7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvT0lQICgxKS5qcGcnKTtcclxuLy8gICAgIGhlaWdodDogYXV0bztcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4vLyAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuLy8gICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuLy8gfVxyXG4ubWF0LWNvbHVtbi1pc19BY3RpdmUge1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCA1JSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDI4JSAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICBcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgXHJcbiAgICAtbXMtaHlwaGVuczogYXV0bztcclxuICAgIC1tb3otaHlwaGVuczogYXV0bztcclxuICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuICAgIGh5cGhlbnM6IGF1dG87XHJcbiAgfVxyXG4gIGgxe1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIFxyXG4gIH1cclxuXHJcbiAgLmVuZEJ1dHRvbntcclxuICAgIHdpZHRoOjIwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIH1cclxuIC5vdGhlcmJ1dHRvbntcclxuICAgIHdpZHRoOjIwJTsgXHJcbiB9XHJcblxyXG4gICNwcm92aWRlTGFiZWx7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMzguNSU7XHJcbiAgfVxyXG5cclxuICAubGFiZWxDZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgIFxyXG4gIH1cclxuICBtYXQtY2FyZHtcclxuICAgICAgd2lkdGg6NDAlO1xyXG4gICAgICBtYXJnaW4tbGVmdDoyNSU7XHJcblxyXG4gIH1cclxuICAuc2tpbGxMYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgbWF0LWhlYWRlci1jZWxse1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsIDEzOSwgNDgpO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIG1hdC1jYXJkLWhlYWRlcntcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcblxyXG4gLmRlc2NyaXB0aW9ue1xyXG4gICAgIHdpZHRoOiA3MCU7XHJcbiB9XHJcblxyXG4gLnNraWxsc3tcclxuICAgICB3aWR0aDogNTAlO1xyXG4gfVxyXG5cclxuICAucC0we1xyXG4gICAgICBoZWlnaHQ6IDcwJTtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcblxyXG4vLyAgLmJnLXByaW1hcnl7XHJcbi8vICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4vLyAgICAgIHdpZHRoOiA0MCU7XHJcbi8vICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuLy8gIH1cclxuLy8gIC5hZGRGb3Jte1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuLy8gICAgIHRvcDogMTAwcHg7XHJcbi8vICB9IiwiLm1hdC1jb2x1bW4taXNfQWN0aXZlIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICBmbGV4OiAwIDAgNSUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDI4JSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAtbW96LWh5cGhlbnM6IGF1dG87XG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgaHlwaGVuczogYXV0bztcbn1cblxuaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5lbmRCdXR0b24ge1xuICB3aWR0aDogMjAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLm90aGVyYnV0dG9uIHtcbiAgd2lkdGg6IDIwJTtcbn1cblxuI3Byb3ZpZGVMYWJlbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogMzguNSU7XG59XG5cbi5sYWJlbENlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5tYXQtY2FyZCB7XG4gIHdpZHRoOiA0MCU7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG59XG5cbi5za2lsbExhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5tYXQtaGVhZGVyLWNlbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA4YjMwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbm1hdC1jYXJkLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIHdpZHRoOiA3MCU7XG59XG5cbi5za2lsbHMge1xuICB3aWR0aDogNTAlO1xufVxuXG4ucC0wIHtcbiAgaGVpZ2h0OiA3MCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/task/task.component.ts":
  /*!****************************************!*\
    !*** ./src/app/task/task.component.ts ***!
    \****************************************/

  /*! exports provided: TaskComponent */

  /***/
  function srcAppTaskTaskComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskComponent", function () {
      return TaskComponent;
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


    var _Models_Task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Models/Task */
    "./src/app/Models/Task.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

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

    var TaskComponent = /*#__PURE__*/function () {
      function TaskComponent(appSettings, router, formBuilder) {
        _classCallCheck(this, TaskComponent);

        this.appSettings = appSettings;
        this.router = router;
        this.formBuilder = formBuilder;
        this.displayedColumns = ['Task_ID', 'Section_Name', 'Infrastructure_Name', 'Equipment_Description', 'Task_Type_Description', 'Task_Description', 'Task_Duration', 'Importance_Description', 'Actions'];
        this.show = false;
        this.showAdd = false;
        this.hideTable = true;
        this.section = false;
        this.infrastructure = false;
        this.equipment = false;
        this.infrastructureAndEquipment = false;
        this.add = false;
        this.notEquipment = false;
        this.equipmentSelected = true;
        this.data = [{
          Task_ID: 1,
          Task_Type_Description: "Cleaning",
          Importance_Description: "Medium",
          Section_Name: "Section2",
          Infrastructure_Name: "N/A",
          Equipment_Description: "N/A",
          Task_Description: "Clean Pig Cage",
          Task_Duration: 30,
          Skill_Description: "Cleaner"
        }, {
          Task_ID: 2,
          Task_Type_Description: "Plant",
          Importance_Description: "High",
          Section_Name: "Section1",
          Infrastructure_Name: "N/A",
          Equipment_Description: "N/A",
          Task_Description: "Plant crops",
          Task_Duration: 120,
          Skill_Description: "Farming"
        }, {
          Task_ID: 3,
          Task_Type_Description: "Storage",
          Importance_Description: "Low",
          Section_Name: "Section 2",
          Infrastructure_Name: "Building1",
          Equipment_Description: "Cutters",
          Task_Description: "Check equipment",
          Task_Duration: 15,
          Skill_Description: "Stock Take"
        }];
        this.types = ["Cleaning", "Planting", "Storage"];
        this.infrastructures = ["N/A", "Building1", "Building2"];
        this.sections = ["Section1", "Section2"];
        this.equipments = ["N/A", "Cutters", "Saw"];
        this.importances = ["High", "Medium", "Low"];
        this.skills = ["Cleaner", "Farming", "Plumber", "Mechanic", "Metal Work", "Wood Work"];
        this.time = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320, 330, 340, 350, 360, 370, 380, 390, 400, 410, 420, 430, 440, 450, 460, 470, 480];
        this.settings = this.appSettings.settings;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.data);
        this.form = this.formBuilder.group({
          'section': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])],
          'task_description': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(50)])],
          'task_duration': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].max(480)])],
          'task_type': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])],
          'importance': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])],
          'equipment': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])],
          'infrastructure': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])],
          'equipment1': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])],
          'infrastructure1': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])]
        });
      }

      _createClass(TaskComponent, [{
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
            this.hideTable = false;
          }
        }
      }, {
        key: "getTaskDetail",
        value: function getTaskDetail(Id) {
          //Implement function to populate edit field and populate task edit\
          this.TaskEdit = new _Models_Task__WEBPACK_IMPORTED_MODULE_4__["Task"]();
          this.TaskEdit.Task_Type_Description = "Cleaning";
          this.TaskEdit.Importance_Description = "Medium";
          this.TaskEdit.Section_Name = "Section2";
          this.TaskEdit.Infrastructure_Name = "N/A";
          this.TaskEdit.Equipment_Description = "N/A";
          this.TaskEdit.Task_Description = "Clean Pig Cage";
          this.TaskEdit.Task_Duration = 30;
          this.TaskEdit.Skill_Description = "Cleaner";
          this.selectedValue = this.TaskEdit.Task_Type_Description;
          this.SectionSelect = this.TaskEdit.Section_Name;
          this.InfrastructureSelect = this.TaskEdit.Infrastructure_Name;
          this.EquipmentSelect = this.TaskEdit.Equipment_Description;
          this.SkillSelect = this.TaskEdit.Skill_Description;
          this.ImportanceSelect = this.TaskEdit.Importance_Description;
          this.changeform();
        }
      }, {
        key: "AddTask",
        value: function AddTask() {
          if (this.show == true) {
            this.show = false;
          }

          this.TaskAdd = new _Models_Task__WEBPACK_IMPORTED_MODULE_4__["Task"]();
          this.showAdd = true;
          this.hideTable = false;
        }
      }, {
        key: "PutTask",
        value: function PutTask() {
          alert("Done");
        }
      }, {
        key: "deleteTask",
        value: function deleteTask() {
          alert("Are you sure");
        }
      }, {
        key: "download",
        value: function download() {
          alert("Download successful");
        }
      }, {
        key: "back",
        value: function back() {
          this.show = false;
          this.hideTable = true;
          this.showAdd = false;
        }
      }, {
        key: "justSection",
        value: function justSection() {
          this.section = true;
          this.infrastructure = false;
          this.equipment = false;
          this.infrastructureAndEquipment = false;
        }
      }, {
        key: "justInfrastructure",
        value: function justInfrastructure() {
          this.section = false;
          this.infrastructure = true;
          this.equipment = false;
        } //if infrastructure is N/A continue to adding the rest of the task and skip equipment

      }, {
        key: "justEquipment",
        value: function justEquipment() {
          this.section = false;
          this.infrastructure = false;
          this.equipment = true;
          this.infrastructureAndEquipment = false;
        }
      }, {
        key: "InfrastructureAndEquipment",
        value: function InfrastructureAndEquipment() {
          this.section = false;
          this.infrastructure = false;
          this.equipment = false;
          this.infrastructureAndEquipment = true;
        }
      }]);

      return TaskComponent;
    }();

    TaskComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]), __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])], TaskComponent.prototype, "paginator", void 0);

    TaskComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-task',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./task.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/task/task.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./task.component.scss */
      "./src/app/task/task.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])], TaskComponent);
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


    __webpack_exports__["default"] = ".applications .mat-toolbar, .applications .mat-toolbar-row {\n  height: 40px !important;\n  min-height: 40px !important;\n}\n.applications .header {\n  width: 250px;\n  font-size: 16px;\n}\n.applications .mat-card {\n  padding: 0;\n}\n.applications .mat-card .mat-button {\n  height: 100%;\n}\n.applications .mat-card .mat-button .mat-button-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9hcHBsaWNhdGlvbnMvRDpcXDM3MFxcRmluYWxGcm9udGVuZC9zcmNcXGFwcFxcdGhlbWVcXGNvbXBvbmVudHNcXGFwcGxpY2F0aW9uc1xcYXBwbGljYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL2FwcGxpY2F0aW9ucy9hcHBsaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSx1QkFBQTtFQUNBLDJCQUFBO0FDQVI7QURFSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDQVI7QURFSTtFQUNJLFVBQUE7QUNBUjtBRENRO0VBQ0ksWUFBQTtBQ0NaO0FEQVk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0VoQiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvYXBwbGljYXRpb25zL2FwcGxpY2F0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHBsaWNhdGlvbnN7XHJcbiAgICAubWF0LXRvb2xiYXIsIC5tYXQtdG9vbGJhci1yb3d7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLWhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmhlYWRlcntcclxuICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1jYXJke1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLm1hdC1idXR0b257XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgLm1hdC1idXR0b24td3JhcHBlcntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5hcHBsaWNhdGlvbnMgLm1hdC10b29sYmFyLCAuYXBwbGljYXRpb25zIC5tYXQtdG9vbGJhci1yb3cge1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogNDBweCAhaW1wb3J0YW50O1xufVxuLmFwcGxpY2F0aW9ucyAuaGVhZGVyIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uYXBwbGljYXRpb25zIC5tYXQtY2FyZCB7XG4gIHBhZGRpbmc6IDA7XG59XG4uYXBwbGljYXRpb25zIC5tYXQtY2FyZCAubWF0LWJ1dHRvbiB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5hcHBsaWNhdGlvbnMgLm1hdC1jYXJkIC5tYXQtYnV0dG9uIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */";
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

    var ApplicationsComponent = /*#__PURE__*/function () {
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/applications/applications.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
      styles: [__importDefault(__webpack_require__(
      /*! ./applications.component.scss */
      "./src/app/theme/components/applications/applications.component.scss"))["default"]]
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


    __webpack_exports__["default"] = ".breadcrumb {\n  padding: 8px;\n}\n.breadcrumb .mat-icon {\n  font-size: 20px;\n  height: 20px;\n  width: 20px;\n  padding: 0 6px;\n}\n.breadcrumb .breadcrumb-title.active {\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.breadcrumb .breadcrumb-item + .breadcrumb-item:before {\n  display: inline-block;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  content: \"/\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9icmVhZGNydW1iL0Q6XFwzNzBcXEZpbmFsRnJvbnRlbmQvc3JjXFxhcHBcXHRoZW1lXFxjb21wb25lbnRzXFxicmVhZGNydW1iXFxicmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjtBREFJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0VSO0FEQUk7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0FDRVI7QURBSTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyZWFkY3J1bWJ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAubWF0LWljb257XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDZweDtcclxuICAgIH1cclxuICAgIC5icmVhZGNydW1iLXRpdGxlLmFjdGl2ZXtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICAuYnJlYWRjcnVtYi1pdGVtKy5icmVhZGNydW1iLWl0ZW06YmVmb3Jle1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiL1wiO1xyXG4gICAgfVxyXG59IiwiLmJyZWFkY3J1bWIge1xuICBwYWRkaW5nOiA4cHg7XG59XG4uYnJlYWRjcnVtYiAubWF0LWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIHBhZGRpbmc6IDAgNnB4O1xufVxuLmJyZWFkY3J1bWIgLmJyZWFkY3J1bWItdGl0bGUuYWN0aXZlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5icmVhZGNydW1iIC5icmVhZGNydW1iLWl0ZW0gKyAuYnJlYWRjcnVtYi1pdGVtOmJlZm9yZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgY29udGVudDogXCIvXCI7XG59Il19 */";
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

    var BreadcrumbComponent = /*#__PURE__*/function () {
      function BreadcrumbComponent(appSettings, router, activatedRoute, title) {
        var _this13 = this;

        _classCallCheck(this, BreadcrumbComponent);

        this.appSettings = appSettings;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = title;
        this.breadcrumbs = [];
        this.settings = this.appSettings.settings;
        this.router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
            _this13.breadcrumbs = [];

            _this13.parseRoute(_this13.router.routerState.snapshot.root);

            _this13.pageTitle = "";

            _this13.breadcrumbs.forEach(function (breadcrumb) {
              _this13.pageTitle += ' > ' + breadcrumb.name;
            });

            _this13.title.setTitle(_this13.settings.name + _this13.pageTitle);
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/breadcrumb/breadcrumb.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./breadcrumb.component.scss */
      "./src/app/theme/components/breadcrumb/breadcrumb.component.scss"))["default"]]
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


    __webpack_exports__["default"] = ".flags img {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n.flags .mat-menu-item {\n  height: 36px;\n  line-height: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9mbGFncy1tZW51L0Q6XFwzNzBcXEZpbmFsRnJvbnRlbmQvc3JjXFxhcHBcXHRoZW1lXFxjb21wb25lbnRzXFxmbGFncy1tZW51XFxmbGFncy1tZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL2ZsYWdzLW1lbnUvZmxhZ3MtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7QUNBUjtBREVJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL2ZsYWdzLW1lbnUvZmxhZ3MtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGFnc3tcclxuICAgIGltZ3tcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1tZW51LWl0ZW17XHJcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgfVxyXG59IiwiLmZsYWdzIGltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLmZsYWdzIC5tYXQtbWVudS1pdGVtIHtcbiAgaGVpZ2h0OiAzNnB4O1xuICBsaW5lLWhlaWdodDogMzZweDtcbn0iXX0= */";
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

    var FlagsMenuComponent = /*#__PURE__*/function () {
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/flags-menu/flags-menu.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
      styles: [__importDefault(__webpack_require__(
      /*! ./flags-menu.component.scss */
      "./src/app/theme/components/flags-menu/flags-menu.component.scss"))["default"]]
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

    var FullScreenComponent = /*#__PURE__*/function () {
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


    __webpack_exports__["default"] = ".horizontal-menu-item {\n  position: relative;\n}\n.horizontal-menu-item .mat-button {\n  height: 56px;\n  font-weight: 400;\n}\n.horizontal-menu-item .horizontal-menu-icon {\n  margin-right: 5px;\n}\n.horizontal-menu-item .horizontal-sub-menu {\n  position: absolute;\n  width: 190px;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.25s ease-out;\n}\n.horizontal-menu-item .horizontal-sub-menu .mat-button {\n  width: 100%;\n  height: 36px;\n}\n.horizontal-menu-item:hover > .horizontal-sub-menu {\n  max-height: 500px;\n  overflow: visible;\n}\n.horizontal-sub-menu .horizontal-sub-menu {\n  left: 100%;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZW51L2hvcml6b250YWwtbWVudS9EOlxcMzcwXFxGaW5hbEZyb250ZW5kL3NyY1xcYXBwXFx0aGVtZVxcY29tcG9uZW50c1xcbWVudVxcaG9yaXpvbnRhbC1tZW51XFxob3Jpem9udGFsLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvbWVudS9ob3Jpem9udGFsLW1lbnUvaG9yaXpvbnRhbC1tZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL21lbnUvaG9yaXpvbnRhbC1tZW51L0Q6XFwzNzBcXEZpbmFsRnJvbnRlbmQvc3JjXFxhcHBcXHRoZW1lXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0FDQUo7QURDSTtFQUNJLFlFRlM7RUZHVCxnQkFBQTtBQ0NSO0FEQ0k7RUFDSSxpQkFBQTtBQ0NSO0FEQ0k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFHQSxxQ0FBQTtBQ0NSO0FEQVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0VaO0FERUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0o7QURDQTtFQUNJLFVBQUE7RUFDQSxNQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL21lbnUvaG9yaXpvbnRhbC1tZW51L2hvcml6b250YWwtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzXCI7XHJcbi5ob3Jpem9udGFsLW1lbnUtaXRlbXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5tYXQtYnV0dG9ue1xyXG4gICAgICAgIGhlaWdodDogJGhvcml6b250YWwtbWVudS1oZWlnaHQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICAgIC5ob3Jpem9udGFsLW1lbnUtaWNvbntcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxuICAgIC5ob3Jpem9udGFsLXN1Yi1tZW51e1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTkwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDsgIFxyXG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDsgIFxyXG4gICAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7ICAgIFxyXG4gICAgICAgIC5tYXQtYnV0dG9ue1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4OyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmhvcml6b250YWwtbWVudS1pdGVtOmhvdmVyID4gLmhvcml6b250YWwtc3ViLW1lbnV7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcbi5ob3Jpem9udGFsLXN1Yi1tZW51IC5ob3Jpem9udGFsLXN1Yi1tZW51e1xyXG4gICAgbGVmdDogMTAwJTtcclxuICAgIHRvcDogMDtcclxufSIsIi5ob3Jpem9udGFsLW1lbnUtaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ob3Jpem9udGFsLW1lbnUtaXRlbSAubWF0LWJ1dHRvbiB7XG4gIGhlaWdodDogNTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5ob3Jpem9udGFsLW1lbnUtaXRlbSAuaG9yaXpvbnRhbC1tZW51LWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5ob3Jpem9udGFsLW1lbnUtaXRlbSAuaG9yaXpvbnRhbC1zdWItbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE5MHB4O1xuICBtYXgtaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDtcbn1cbi5ob3Jpem9udGFsLW1lbnUtaXRlbSAuaG9yaXpvbnRhbC1zdWItbWVudSAubWF0LWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM2cHg7XG59XG5cbi5ob3Jpem9udGFsLW1lbnUtaXRlbTpob3ZlciA+IC5ob3Jpem9udGFsLXN1Yi1tZW51IHtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4uaG9yaXpvbnRhbC1zdWItbWVudSAuaG9yaXpvbnRhbC1zdWItbWVudSB7XG4gIGxlZnQ6IDEwMCU7XG4gIHRvcDogMDtcbn0iLCIkZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5cclxuJHRvb2xiYXItaGVpZ2h0OiA1NnB4OyBcclxuJGhvcml6b250YWwtbWVudS1oZWlnaHQ6ICR0b29sYmFyLWhlaWdodDtcclxuXHJcbiRzaWRlbmF2LXdpZHRoOiAyNTBweDtcclxuJHNpZGVuYXYtdXNlci1ibG9jay1oZWlnaHQ6IDE1NnB4O1xyXG4kbWluaS1zaWRlbmF2LXVzZXItYmxvY2staGVpZ2h0OiA3MHB4O1xyXG5cclxuJGZsZXgtZGlzdGFuY2U6IDhweDtcclxuJGlubmVyLXNpZGVuYXYtY29udGVudC1wYWRkaW5nOiAkZmxleC1kaXN0YW5jZTtcclxuXHJcbi8vTG9naW4sIFJlZ2lzdGVyLCBFcnJvcnMgYm94XHJcbiRib3gtaGVpZ2h0OiAyNTBweDtcclxuJGJveC1wb3NpdGlvbjogMzRweDtcclxuJHJlZ2lzdGVyLWJveC1oZWlnaHQ6IDcwMHB4O1xyXG5cclxuJGZvb3Rlci1oZWlnaHQ6IDU2cHg7ICJdfQ== */";
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

    var HorizontalMenuComponent = /*#__PURE__*/function () {
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
          var _this14 = this;

          this.menuItems = this.menuService.getHorizontalMenuItems();
          this.menuItems = this.menuItems.filter(function (item) {
            return item.parentId == _this14.menuParentId;
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this15 = this;

          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
              if (_this15.settings.fixedHeader) {
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
      providers: [_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]],
      styles: [__importDefault(__webpack_require__(
      /*! ./horizontal-menu.component.scss */
      "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.scss"))["default"]]
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

    var MenuService = /*#__PURE__*/function () {
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
          var _this16 = this;

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

                _this16.toggleMenuItem(menuItem.id);
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

    var verticalMenuItems = [//new Menu (1, 'Dashboard', '/', null, 'dashboard', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](30, 'Farm', null, null, 'computer', null, true, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](1, 'Farm', '/farm', null, 'business', null, false, 30), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](1, 'Insurance Providers', '/insure', null, 'business', null, false, 30), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](2, 'Farm Health', '/health', null, 'healing', null, false, 30), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](31, 'Section', null, null, 'computer', null, true, 30), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](32, 'Staff Management', null, null, 'groups', null, true, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](33, 'Vehicles', null, null, 'time_to_leave', null, true, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](21, 'Farm Tasks', '/task', null, 'healing', null, false, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](15, 'Section', '/section', null, 'healing', null, false, 31), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](3, 'Infrastructure', '/infrastructure', null, 'home', null, false, 30), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](7, 'Equipment', '/equipment', null, 'gavel', null, false, 30), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](4, 'Vehicles', '/vehicles', null, 'airline_seat_recline_normal', null, false, 33), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](5, 'Vehicle Service', '/service', null, 'build', null, false, 33), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](6, 'Repair Log', '/repairlog', null, 'calendar_view_day', null, false, 33), // new Menu (2, 'Staff', '/users', null, 'supervisor_account', null, false, 0), 
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](36, 'Scheduling', null, null, 'build', null, true, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](8, 'Task Scheduling', '/schedule', null, 'calendar_today', null, false, 36), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](16, 'Section Type', '/sec-type', null, 'healing', null, false, 31), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](9, 'Active List', '/active-list', null, 'list', null, false, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](34, 'Faults', null, null, 'highlight_off', null, true, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](10, 'Farm Faults', '/fault-log', null, 'highlight_off', null, false, 34), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](13, 'Fault Report', '/report', null, 'sort', null, false, 34), // new Menu (11, 'Fm main', '/fm-main', null, 'healing', null, false, 0), 
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](35, 'Maintenance', null, null, 'build', null, true, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](12, 'Maintenance', '/maintenance', null, 'healing', null, false, 35), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](12, 'Maintenance Report', '/maintenance-report', null, 'sort', null, false, 35), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](14, 'Section Report', '/sec-report', null, 'healing', null, false, 31), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](17, 'Service Providers', '/sr-prov', null, 'healing', null, false, 33), // new Menu (22, 'Task-Type', '/task-type', null, 'healing', null, false, 0), 
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](2, 'Staff Members', '/users', null, 'emoji_people', null, false, 32), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](20, 'Staff Skills', '/skill', null, 'insert_emoticon', null, false, 32), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](19, 'Checked in Staff', '/staff', null, 'check', null, false, 32), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](18, 'Audit Report', '/audit-log', null, 'healing', null, false, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](18, 'About Us', '/about', null, 'healing', null, false, 0)];
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


    __webpack_exports__["default"] = ".menu-icon {\n  margin-right: 12px;\n}\n\n.menu-expand-icon {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.menu-item .mat-button {\n  padding: 0;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  width: 100%;\n  font-weight: 400;\n}\n\n.menu-item .mat-button.expanded .menu-expand-icon {\n  transform: rotate(180deg);\n}\n\n.menu-item .mat-button-wrapper {\n  padding-left: 16px;\n}\n\n.sub-menu {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.25s ease-out;\n}\n\n.sub-menu .sub-menu .mat-button {\n  padding-left: 40px;\n}\n\n.sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 60px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 80px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 100px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 120px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 140px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 160px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 180px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 200px;\n}\n\n.sub-menu .mat-button {\n  padding-left: 20px;\n}\n\n.sub-menu.show {\n  max-height: 500px;\n  transition: max-height 0.25s ease-in;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZW51L3ZlcnRpY2FsLW1lbnUvRDpcXDM3MFxcRmluYWxGcm9udGVuZC9zcmNcXGFwcFxcdGhlbWVcXGNvbXBvbmVudHNcXG1lbnVcXHZlcnRpY2FsLW1lbnVcXHZlcnRpY2FsLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvbWVudS92ZXJ0aWNhbC1tZW51L3ZlcnRpY2FsLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvbWVudS92ZXJ0aWNhbC1tZW51L0Q6XFwzNzBcXEZpbmFsRnJvbnRlbmQvc3JjXFxhcHBcXHRoZW1lXFxzdHlsZXNcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFBO0FDREo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDQUo7O0FESUk7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0RSOztBREdZO0VBR0kseUJBQUE7QUNEaEI7O0FETUk7RUFDSSxrQkFBQTtBQ0pSOztBRFFBO0VBRUksYUFBQTtFQUNBLGdCQUFBO0VBR0EscUNBQUE7QUNOSjs7QUM1QlE7RUFLUSxrQkFBQTtBRDBCaEI7O0FDL0JRO0VBS1Esa0JBQUE7QUQ2QmhCOztBQ2xDUTtFQUtRLGtCQUFBO0FEZ0NoQjs7QUNyQ1E7RUFLUSxtQkFBQTtBRG1DaEI7O0FDeENRO0VBS1EsbUJBQUE7QURzQ2hCOztBQzNDUTtFQUtRLG1CQUFBO0FEeUNoQjs7QUM5Q1E7RUFLUSxtQkFBQTtBRDRDaEI7O0FDakRRO0VBS1EsbUJBQUE7QUQrQ2hCOztBQ3BEUTtFQUtRLG1CQUFBO0FEa0RoQjs7QURwQkk7RUFDSSxrQkFBQTtBQ3NCUjs7QURwQkk7RUFDSSxpQkFBQTtFQUdBLG9DQUFBO0FDc0JSIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZW51L3ZlcnRpY2FsLW1lbnUvdmVydGljYWwtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvbWl4aW5zXCI7XHJcblxyXG4ubWVudS1pY29ue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG59XHJcbi5tZW51LWV4cGFuZC1pY29ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB0b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5tZW51LWl0ZW17XHJcbiAgICAubWF0LWJ1dHRvbntcclxuICAgICAgICBwYWRkaW5nOiAwOyAgICBcclxuICAgICAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzcHg7IFxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgJi5leHBhbmRlZHtcclxuICAgICAgICAgICAgLm1lbnUtZXhwYW5kLWljb257XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIC5tYXQtYnV0dG9uLXdyYXBwZXJ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgfSAgICBcclxufVxyXG5cclxuLnN1Yi1tZW51e1xyXG4gICAgQGluY2x1ZGUgbWVudS1sZXZlbC1wYWRkaW5nKCdsdHInKTtcclxuICAgIG1heC1oZWlnaHQ6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0OyAgXHJcbiAgICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7ICBcclxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7ICAgIFxyXG4gICAgLm1hdC1idXR0b257XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4OyAgICAgIFxyXG4gICAgfSBcclxuICAgICYuc2hvd3tcclxuICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1pbjtcclxuICAgICAgICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1pbjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2UtaW47XHJcbiAgICB9ICAgIFxyXG59IiwiLm1lbnUtaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuLm1lbnUtZXhwYW5kLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDEwcHg7XG59XG5cbi5tZW51LWl0ZW0gLm1hdC1idXR0b24ge1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5tZW51LWl0ZW0gLm1hdC1idXR0b24uZXhwYW5kZWQgLm1lbnUtZXhwYW5kLWljb24ge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cbi5tZW51LWl0ZW0gLm1hdC1idXR0b24td3JhcHBlciB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cblxuLnN1Yi1tZW51IHtcbiAgbWF4LWhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0O1xuICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7XG59XG4uc3ViLW1lbnUgLnN1Yi1tZW51IC5tYXQtYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xufVxuLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLm1hdC1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG59XG4uc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLm1hdC1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDgwcHg7XG59XG4uc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5tYXQtYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiAxMDBweDtcbn1cbi5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5tYXQtYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiAxMjBweDtcbn1cbi5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAubWF0LWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogMTQwcHg7XG59XG4uc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5tYXQtYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiAxNjBweDtcbn1cbi5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5tYXQtYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiAxODBweDtcbn1cbi5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAubWF0LWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogMjAwcHg7XG59XG4uc3ViLW1lbnUgLm1hdC1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG4uc3ViLW1lbnUuc2hvdyB7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1pbjtcbiAgLW1vei10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2UtaW47XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1pbjtcbn0iLCJAbWl4aW4gbWVudS1sZXZlbC1wYWRkaW5nKCRkaXJlY3Rpb24pe1xyXG4gICAgJGVsZW06ICcnO1xyXG4gICAgQGZvciAkaSBmcm9tIDIgdGhyb3VnaCAxMCB7XHJcbiAgICAgICAgJGVsZW06IGlmKCRpID09IDIsIFwiLnN1Yi1tZW51XCIsIHNlbGVjdG9yLW5lc3QoJGVsZW0sIFwiLnN1Yi1tZW51XCIpKTsgICAgICBcclxuICAgICAgICAjeyRlbGVtICsgJyAubWF0LWJ1dHRvbid9IHsgXHJcbiAgICAgICAgICAgIEBpZiAkZGlyZWN0aW9uID09IFwicnRsXCIge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweCAqICRpOyBcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgQGVsc2V7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHggKiAkaTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */";
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

    var VerticalMenuComponent = /*#__PURE__*/function () {
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
          var _this17 = this;

          this.parentMenu = this.menuItems.filter(function (item) {
            return item.parentId == _this17.menuParentId;
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this18 = this;

          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
              if (_this18.settings.fixedHeader) {
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/menu/vertical-menu/vertical-menu.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
      providers: [_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]],
      styles: [__importDefault(__webpack_require__(
      /*! ./vertical-menu.component.scss */
      "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.scss"))["default"]]
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


    __webpack_exports__["default"] = ".messages .mat-tab-label {\n  min-width: 93.3px;\n  height: 40px;\n}\n.messages .content {\n  padding: 0;\n  height: 250px;\n}\n.messages img {\n  margin-right: 8px;\n  border-radius: 4px;\n}\n.messages span.name {\n  text-transform: capitalize;\n  font-size: 13px;\n  line-height: 22px;\n}\n.messages span.info {\n  font-size: 12px;\n  opacity: 0.8;\n  line-height: 22px;\n}\n.messages span.text {\n  font-size: 11px;\n  line-height: 14px;\n  white-space: initial;\n  text-align: left;\n}\n.messages .mat-button {\n  padding: 8px;\n}\n.messages .mat-button .mat-button-wrapper {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n}\n.messages .mat-button .mat-icon {\n  height: 16px;\n  font-size: 12px;\n  width: 12px;\n  vertical-align: middle;\n}\n.messages .row-1 {\n  box-shadow: 0 0 5px #ccc;\n  border-radius: 4px;\n  padding: 2px 13px;\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZXNzYWdlcy9EOlxcMzcwXFxGaW5hbEZyb250ZW5kL3NyY1xcYXBwXFx0aGVtZVxcY29tcG9uZW50c1xcbWVzc2FnZXNcXG1lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FDQVI7QURFSTtFQUNJLFVBQUE7RUFDQSxhQUFBO0FDQVI7QURFSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNBUjtBREVJO0VBQ0ksMEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNBUjtBREVJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0FSO0FERUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDQVI7QURFSTtFQUNJLFlBQUE7QUNBUjtBRENRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNDWjtBRENRO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNDWjtBREVJO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZXN7XHJcbiAgICAubWF0LXRhYi1sYWJlbHtcclxuICAgICAgICBtaW4td2lkdGg6IDkzLjNweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGVudHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICB9XHJcbiAgICBpbWd7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG4gICAgc3Bhbi5uYW1le1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIH1cclxuICAgIHNwYW4uaW5mb3tcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgfVxyXG4gICAgc3Bhbi50ZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogaW5pdGlhbDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfSAgXHJcbiAgICAubWF0LWJ1dHRvbntcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgLm1hdC1idXR0b24td3JhcHBlcntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYXQtaWNvbntcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yb3ctMXtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgNXB4ICNjY2M7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDJweCAxM3B4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgfVxyXG59IiwiLm1lc3NhZ2VzIC5tYXQtdGFiLWxhYmVsIHtcbiAgbWluLXdpZHRoOiA5My4zcHg7XG4gIGhlaWdodDogNDBweDtcbn1cbi5tZXNzYWdlcyAuY29udGVudCB7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogMjUwcHg7XG59XG4ubWVzc2FnZXMgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5tZXNzYWdlcyBzcGFuLm5hbWUge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbn1cbi5tZXNzYWdlcyBzcGFuLmluZm8ge1xuICBmb250LXNpemU6IDEycHg7XG4gIG9wYWNpdHk6IDAuODtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG4ubWVzc2FnZXMgc3Bhbi50ZXh0IHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgd2hpdGUtc3BhY2U6IGluaXRpYWw7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubWVzc2FnZXMgLm1hdC1idXR0b24ge1xuICBwYWRkaW5nOiA4cHg7XG59XG4ubWVzc2FnZXMgLm1hdC1idXR0b24gLm1hdC1idXR0b24td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLm1lc3NhZ2VzIC5tYXQtYnV0dG9uIC5tYXQtaWNvbiB7XG4gIGhlaWdodDogMTZweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aWR0aDogMTJweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5tZXNzYWdlcyAucm93LTEge1xuICBib3gtc2hhZG93OiAwIDAgNXB4ICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMnB4IDEzcHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufSJdfQ== */";
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

    var MessagesComponent = /*#__PURE__*/function () {
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/messages/messages.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
      providers: [_messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]],
      styles: [__importDefault(__webpack_require__(
      /*! ./messages.component.scss */
      "./src/app/theme/components/messages/messages.component.scss"))["default"]]
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

    var MessagesService = /*#__PURE__*/function () {
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


    __webpack_exports__["default"] = ".pin {\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n  fill: currentColor;\n}\n\n.sidenav-header {\n  padding: 0 10px !important;\n}\n\n.user-block {\n  height: 0;\n  position: relative;\n  z-index: 1;\n  overflow: hidden;\n}\n\n.user-block img {\n  width: 80px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 50%;\n}\n\n.user-block .user-info-wrapper {\n  padding: 0 6px;\n  margin: 6px 0;\n  width: 100%;\n}\n\n.user-block .user-info-wrapper .user-info {\n  text-align: center;\n}\n\n.user-block .user-info-wrapper .user-info .name {\n  font-size: 15px;\n}\n\n.user-block .user-info-wrapper .user-info .position {\n  font-size: 13px;\n}\n\n.user-block.show {\n  height: 156px;\n}\n\n.sidenav-menu-outer .ps {\n  height: calc(100% - 56px);\n}\n\n.sidenav-menu-outer.user-block-show .ps {\n  height: calc(100% - 212px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9zaWRlbmF2L0Q6XFwzNzBcXEZpbmFsRnJvbnRlbmQvc3JjXFxhcHBcXHRoZW1lXFxjb21wb25lbnRzXFxzaWRlbmF2XFxzaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9zaWRlbmF2L0Q6XFwzNzBcXEZpbmFsRnJvbnRlbmQvc3JjXFxhcHBcXHRoZW1lXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFDSSwwQkFBQTtBQ0RKOztBRElBO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDREo7O0FERUk7RUFDSSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQ0FSOztBREVJO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDQVI7O0FEQ1E7RUFDSSxrQkFBQTtBQ0NaOztBREFZO0VBQ0ksZUFBQTtBQ0VoQjs7QURBWTtFQUNJLGVBQUE7QUNFaEI7O0FERUk7RUFDSSxhRWhDb0I7QURnQzVCOztBREtJO0VBQ0kseUJBQUE7QUNGUjs7QURLUTtFQUNJLDBCQUFBO0FDSFoiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvdmFyaWFibGVzXCI7XHJcblxyXG4ucGlue1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmaWxsOiBjdXJyZW50Q29sb3I7XHJcbn1cclxuXHJcbi5zaWRlbmF2LWhlYWRlcntcclxuICAgIHBhZGRpbmc6IDAgMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udXNlci1ibG9ja3tcclxuICAgIGhlaWdodDogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgIFxyXG4gICAgei1pbmRleDogMTsgXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAgXHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7IFxyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7ICAgICAgIFxyXG4gICAgfVxyXG4gICAgLnVzZXItaW5mby13cmFwcGVye1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNnB4O1xyXG4gICAgICAgIG1hcmdpbjogNnB4IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLnVzZXItaW5mb3tcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAubmFtZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wb3NpdGlvbntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbiAgICAmLnNob3d7XHJcbiAgICAgICAgaGVpZ2h0OiAkc2lkZW5hdi11c2VyLWJsb2NrLWhlaWdodDtcclxuICAgIH0gICAgICBcclxufSBcclxuXHJcbi5zaWRlbmF2LW1lbnUtb3V0ZXJ7XHJcbiAgICAucHN7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAjeyR0b29sYmFyLWhlaWdodH0pOyBcclxuICAgIH0gICAgICAgXHJcbiAgICAmLnVzZXItYmxvY2stc2hvd3tcclxuICAgICAgICAucHN7ICAgICAgICBcclxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAjeyR0b29sYmFyLWhlaWdodCArICRzaWRlbmF2LXVzZXItYmxvY2staGVpZ2h0fSk7IFxyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbn0iLCIucGluIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG5cbi5zaWRlbmF2LWhlYWRlciB7XG4gIHBhZGRpbmc6IDAgMTBweCAhaW1wb3J0YW50O1xufVxuXG4udXNlci1ibG9jayB7XG4gIGhlaWdodDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnVzZXItYmxvY2sgaW1nIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnVzZXItYmxvY2sgLnVzZXItaW5mby13cmFwcGVyIHtcbiAgcGFkZGluZzogMCA2cHg7XG4gIG1hcmdpbjogNnB4IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnVzZXItYmxvY2sgLnVzZXItaW5mby13cmFwcGVyIC51c2VyLWluZm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udXNlci1ibG9jayAudXNlci1pbmZvLXdyYXBwZXIgLnVzZXItaW5mbyAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi51c2VyLWJsb2NrIC51c2VyLWluZm8td3JhcHBlciAudXNlci1pbmZvIC5wb3NpdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi51c2VyLWJsb2NrLnNob3cge1xuICBoZWlnaHQ6IDE1NnB4O1xufVxuXG4uc2lkZW5hdi1tZW51LW91dGVyIC5wcyB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNTZweCk7XG59XG4uc2lkZW5hdi1tZW51LW91dGVyLnVzZXItYmxvY2stc2hvdyAucHMge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIxMnB4KTtcbn0iLCIkZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5cclxuJHRvb2xiYXItaGVpZ2h0OiA1NnB4OyBcclxuJGhvcml6b250YWwtbWVudS1oZWlnaHQ6ICR0b29sYmFyLWhlaWdodDtcclxuXHJcbiRzaWRlbmF2LXdpZHRoOiAyNTBweDtcclxuJHNpZGVuYXYtdXNlci1ibG9jay1oZWlnaHQ6IDE1NnB4O1xyXG4kbWluaS1zaWRlbmF2LXVzZXItYmxvY2staGVpZ2h0OiA3MHB4O1xyXG5cclxuJGZsZXgtZGlzdGFuY2U6IDhweDtcclxuJGlubmVyLXNpZGVuYXYtY29udGVudC1wYWRkaW5nOiAkZmxleC1kaXN0YW5jZTtcclxuXHJcbi8vTG9naW4sIFJlZ2lzdGVyLCBFcnJvcnMgYm94XHJcbiRib3gtaGVpZ2h0OiAyNTBweDtcclxuJGJveC1wb3NpdGlvbjogMzRweDtcclxuJHJlZ2lzdGVyLWJveC1oZWlnaHQ6IDcwMHB4O1xyXG5cclxuJGZvb3Rlci1oZWlnaHQ6IDU2cHg7ICJdfQ== */";
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

    var SidenavComponent = /*#__PURE__*/function () {
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/sidenav/sidenav.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
      providers: [_menu_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]],
      styles: [__importDefault(__webpack_require__(
      /*! ./sidenav.component.scss */
      "./src/app/theme/components/sidenav/sidenav.component.scss"))["default"]]
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


    __webpack_exports__["default"] = ".user-menu .mat-toolbar, .user-menu .mat-toolbar-row {\n  height: 100px !important;\n}\n.user-menu .user-info {\n  width: 230px;\n}\n.user-menu .user-info p {\n  font-size: 16px;\n  line-height: 22px;\n  text-align: center;\n}\n.user-menu .mat-menu-item {\n  height: 36px;\n  line-height: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy91c2VyLW1lbnUvRDpcXDM3MFxcRmluYWxGcm9udGVuZC9zcmNcXGFwcFxcdGhlbWVcXGNvbXBvbmVudHNcXHVzZXItbWVudVxcdXNlci1tZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL3VzZXItbWVudS91c2VyLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSx3QkFBQTtBQ0FSO0FERUk7RUFDSSxZQUFBO0FDQVI7QURDUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ1o7QURFSTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy91c2VyLW1lbnUvdXNlci1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItbWVudXtcclxuICAgIC5tYXQtdG9vbGJhciwgLm1hdC10b29sYmFyLXJvd3tcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAudXNlci1pbmZve1xyXG4gICAgICAgIHdpZHRoOiAyMzBweDtcclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1hdC1tZW51LWl0ZW17XHJcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgfVxyXG59IiwiLnVzZXItbWVudSAubWF0LXRvb2xiYXIsIC51c2VyLW1lbnUgLm1hdC10b29sYmFyLXJvdyB7XG4gIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbn1cbi51c2VyLW1lbnUgLnVzZXItaW5mbyB7XG4gIHdpZHRoOiAyMzBweDtcbn1cbi51c2VyLW1lbnUgLnVzZXItaW5mbyBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnVzZXItbWVudSAubWF0LW1lbnUtaXRlbSB7XG4gIGhlaWdodDogMzZweDtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG59Il19 */";
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

    var UserMenuComponent = /*#__PURE__*/function () {
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/user-menu/user-menu.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
      styles: [__importDefault(__webpack_require__(
      /*! ./user-menu.component.scss */
      "./src/app/theme/components/user-menu/user-menu.component.scss"))["default"]]
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

    var PaginationPipe = /*#__PURE__*/function () {
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

    var ProfilePicturePipe = /*#__PURE__*/function () {
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

    var ChatPersonSearchPipe = /*#__PURE__*/function () {
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

    var MailSearchPipe = /*#__PURE__*/function () {
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

    var UserSearchPipe = /*#__PURE__*/function () {
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

    var TruncatePipe = /*#__PURE__*/function () {
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

    var CustomOverlayContainer = /*#__PURE__*/function (_angular_cdk_overlay_) {
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


    __webpack_exports__["default"] = "mat-header-cell {\n  background-color: #308b30;\n  font-size: 16px;\n}\n\nmat-card {\n  width: 70%;\n  align-items: center;\n  margin-left: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVoaWNsZS1zZXJ2aWNlL0Q6XFwzNzBcXEZpbmFsRnJvbnRlbmQvc3JjXFxhcHBcXHZlaGljbGUtc2VydmljZVxcdmVoaWNsZS1zZXJ2aWNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92ZWhpY2xlLXNlcnZpY2UvdmVoaWNsZS1zZXJ2aWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvdmVoaWNsZS1zZXJ2aWNlL3ZlaGljbGUtc2VydmljZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1oZWFkZXItY2VsbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgMTM5LCA0OCk7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxubWF0LWNhcmR7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbn0iLCJtYXQtaGVhZGVyLWNlbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA4YjMwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbm1hdC1jYXJkIHtcbiAgd2lkdGg6IDcwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcbn0iXX0= */";
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
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _vsService_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./vsService.service */
    "./src/app/vehicle-service/vsService.service.ts");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");

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

    var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var VehicleServiceComponent = /*#__PURE__*/function () {
      function VehicleServiceComponent(appSettings, router, formbuilder, dialog, http, vsService, fireStorage) {
        _classCallCheck(this, VehicleServiceComponent);

        this.appSettings = appSettings;
        this.router = router;
        this.formbuilder = formbuilder;
        this.dialog = dialog;
        this.http = http;
        this.vsService = vsService;
        this.fireStorage = fireStorage;
        this.showtable = true;
        this.displayedColumns = ['Vehicle_Service_ID', 'Vehicle_ID', 'Vehicle_Service_Milage', 'Vehicle_Service_Start_Date', 'Vehicle_Service_End_Date', 'Invoice', 'Actions'];
        this.show = false;
        this.showAdd = false;
        this.showService = false;
        this.basePath = '/invoices';
        this.downloadableURL = '';
        this.submit1 = false;
        this.submit2 = false;
        this.VehicleNotificationAdd = new _Models_VehicleService__WEBPACK_IMPORTED_MODULE_4__["PostNotification"]();
        this.VehicleServEdit = new _Models_VehicleService__WEBPACK_IMPORTED_MODULE_4__["PostVehicleService"]();
        this.VehicleServAdd = new _Models_VehicleService__WEBPACK_IMPORTED_MODULE_4__["PostVehicleService"]();
        this.active = [{
          Value: 1,
          Text: "Yes"
        }, {
          Value: 0,
          Text: "No"
        }];
        this.providers = [];
        this.data = [];
        this.SubmitData = new _Models_VehicleService__WEBPACK_IMPORTED_MODULE_4__["VehicleService"]();
        this.PostData = new _Models_VehicleService__WEBPACK_IMPORTED_MODULE_4__["VehicleService"]();
        this.settings = this.appSettings.settings;
        this.form = this.formbuilder.group({
          'Description': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(150)])],
          'Mileage': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(10)])],
          'Start': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(8)])],
          'End': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(8)])],
          Providers: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]()
        });
      }

      _createClass(VehicleServiceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (localStorage.getItem("jwtToken") === null) {
            this.router.navigateByUrl("login");
          } else {
            this.AdminPriv = localStorage.getItem("PrivelageLevel");
            localStorage.setItem("currentFarm", "7");
            this.getData();
          }
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this19 = this;

          this.vsService.getVehicleService().subscribe(function (response) {
            _this19.data3 = response;
            console.log(_this19.data3);
            _this19.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this19.data3["vsList"]);
            _this19.dataSource.paginator = _this19.paginator;
          }, function (error) {
            alert("An error has occured, please login.");

            _this19.router.navigateByUrl("logout");
          });
          this.vsService.getServiceProviders().subscribe(function (response) {
            _this19.data3 = response;
            console.log(_this19.data3);
            _this19.providers = _this19.data3;
          });
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
            this.showService = false;
          }
        }
      }, {
        key: "getVehicleServiceDetail",
        value: function getVehicleServiceDetail(id) {
          var _this20 = this;

          localStorage.setItem("CurrentEquipment", id.toString());
          this.ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          this.vsService.getVehicleServiceDetails(id).subscribe(function (success) {
            _this20.data3 = success;
            _this20.VehicleServEdit = _this20.data3;
            _this20.currentEdit = id;
          });
          this.changeform();
        }
      }, {
        key: "addVehicleService",
        value: function addVehicleService() {
          if (this.show == true) {
            this.show = false;
          }

          this.VehicleServAdd = new _Models_VehicleService__WEBPACK_IMPORTED_MODULE_4__["PostVehicleService"]();
          this.showAdd = true;
          this.showtable = false;
          this.showService = false;
        }
      }, {
        key: "putVehicleService",
        value: function putVehicleService() {
          this.vsService.putVehicleService(this.VehicleServEdit, this.currentEdit).subscribe(function (success) {
            console.log(success);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "postVehicleService",
        value: function postVehicleService() {
          this.ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          this.vsService.postVehicleService(this.VehicleServAdd).subscribe(function (response) {
            console.log(response);
          });
        }
      }, {
        key: "deleteVehicleService",
        value: function deleteVehicleService(id) {
          if (confirm("Are you sure to delete ?")) {
            this.vsService.deleteVehicleService(id).subscribe(function (success) {
              alert("Equipment succesfully removed");
            }, function (error) {
              alert(error);
            });
          }
        }
      }, {
        key: "showTable",
        value: function showTable() {
          this.showtable = true;
          this.showAdd = false;
          this.show = false;
          this.showService = false;
        }
      }, {
        key: "showServiceNotification",
        value: function showServiceNotification() {
          if (this.show == true) {
            this.show = false;
          }

          this.VehicleNotificationAdd = new _Models_VehicleService__WEBPACK_IMPORTED_MODULE_4__["PostVehicleService"]();
          this.showAdd = false;
          this.showtable = false;
          this.showService = true;
        }
      }, {
        key: "postServiceRequest",
        value: function postServiceRequest() {}
      }, {
        key: "Download",
        value: function Download() {
          alert("Download started");
        }
      }, {
        key: "putServiceRequest",
        value: function putServiceRequest() {
          alert("Done");
        }
      }, {
        key: "removeVehicleService",
        value: function removeVehicleService() {}
      }, {
        key: "successfullyAddedService",
        value: function successfullyAddedService() {}
      }, {
        key: "editVehicleService",
        value: function editVehicleService() {}
      }, {
        key: "sentNotification",
        value: function sentNotification() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this21 = this;

            var filePath;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!this.file) {
                      _context.next = 9;
                      break;
                    }

                    filePath = "".concat(this.basePath, "/").concat(this.SubmitData.VSD_ID);
                    this.task = this.fireStorage.upload(filePath, this.file); // this.progress = this.snapTask.percentageChanges();

                    this.progressValue = this.task.percentageChanges();
                    _context.next = 6;
                    return this.task;

                  case 6:
                    _context.sent.ref.getDownloadURL().then(function (url) {
                      _this21.downloadableURL = url;

                      _this21.postData();
                    });

                    _context.next = 11;
                    break;

                  case 9:
                    this.downloadableURL = '';
                    this.postData();

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "postData",
        value: function postData() {
          this.PostData = this.SubmitData;
          this.PostData.VSD_Invoice = this.downloadableURL;
          this.http.post("http://35.178.156.37/api/", this.PostData).subscribe(function (success) {
            alert("Upload Successful!");
          });
        }
      }, {
        key: "onSelectedFile",
        value: function onSelectedFile(event) {
          var _this22 = this;

          var reader = new FileReader();

          if (event.target.files && event.target.files.length) {
            var _event$target$files = _slicedToArray(event.target.files, 1),
                file = _event$target$files[0];

            reader.readAsDataURL(file);

            reader.onload = function () {
              _this22.invoiceSrc = reader.result;

              _this22.form.patchValue({
                fileSource: reader.result
              });
            };
          }

          this.file = event.target.files[0];
          this.file.name = this.SubmitData.VSD_ID;
        }
      }]);

      return VehicleServiceComponent;
    }();

    VehicleServiceComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]
      }, {
        type: _vsService_service__WEBPACK_IMPORTED_MODULE_9__["vsService"]
      }, {
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorage"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]), __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])], VehicleServiceComponent.prototype, "paginator", void 0);

    VehicleServiceComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-vehicle-service',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./vehicle-service.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle-service/vehicle-service.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./vehicle-service.component.scss */
      "./src/app/vehicle-service/vehicle-service.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"], _vsService_service__WEBPACK_IMPORTED_MODULE_9__["vsService"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorage"]])], VehicleServiceComponent);
    /***/
  },

  /***/
  "./src/app/vehicle-service/vsService.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/vehicle-service/vsService.service.ts ***!
    \******************************************************/

  /*! exports provided: vsService */

  /***/
  function srcAppVehicleServiceVsServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "vsService", function () {
      return vsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

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

    var vsService = /*#__PURE__*/function () {
      //baseURL = "http://35.178.156.37/api/";
      function vsService(http) {
        _classCallCheck(this, vsService);

        this.http = http;
        this.baseURL = "https://localhost:44349/api/";
      }

      _createClass(vsService, [{
        key: "getVehicleService",
        value: function getVehicleService() {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.get(this.baseURL + "VehicleService/" + localStorage.getItem("CurrentVehicle"), ops);
        }
      }, {
        key: "getServiceProviders",
        value: function getServiceProviders() {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.get(this.baseURL + "VehicleService/ServiceProviders/" + localStorage.getItem("ServiceProvider"), ops);
        }
      }, {
        key: "getVehicleServiceDetails",
        value: function getVehicleServiceDetails(id) {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.get(this.baseURL + "VehicleService/" + id.toString(), ops);
        }
      }, {
        key: "putVehicleService",
        value: function putVehicleService(VehicleService, id) {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.put(this.baseURL + "VehicleService/" + id.toString(), VehicleService, ops);
        }
      }, {
        key: "postVehicleService",
        value: function postVehicleService(VehicleService) {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.post(this.baseURL + "VehicleService/", VehicleService, ops);
        }
      }, {
        key: "deleteVehicleService",
        value: function deleteVehicleService(id) {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http["delete"](this.baseURL + "VehicleService" + id.toString(), ops);
        }
      }, {
        key: "putSendService",
        value: function putSendService() {}
      }, {
        key: "postSendService",
        value: function postSendService() {}
      }, {
        key: "getServiceNotification",
        value: function getServiceNotification() {}
      }]);

      return vsService;
    }();

    vsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    vsService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], vsService);
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


    __webpack_exports__["default"] = "mat-header-cell {\n  background-color: #308b30;\n  font-size: 16px;\n}\n\nmat-card {\n  width: 70%;\n  align-items: center;\n  margin-left: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVoaWNsZS10eXBlcy9EOlxcMzcwXFxGaW5hbEZyb250ZW5kL3NyY1xcYXBwXFx2ZWhpY2xlLXR5cGVzXFx2ZWhpY2xlLXR5cGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92ZWhpY2xlLXR5cGVzL3ZlaGljbGUtdHlwZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC92ZWhpY2xlLXR5cGVzL3ZlaGljbGUtdHlwZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtaGVhZGVyLWNlbGx7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsIDEzOSwgNDgpO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5tYXQtY2FyZHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxufSIsIm1hdC1oZWFkZXItY2VsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDhiMzA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxubWF0LWNhcmQge1xuICB3aWR0aDogNzAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMTUlO1xufSJdfQ== */";
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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

    var VehicleTypesComponent = /*#__PURE__*/function () {
      function VehicleTypesComponent(appSettings, router) {
        _classCallCheck(this, VehicleTypesComponent);

        this.appSettings = appSettings;
        this.router = router;
        this.displayedColumns = ['Type_ID', 'Type', 'Actions'];
        this.TypeEdit = "Truck";
        this.show = false; //<<< show edit form

        this.showtable = true; //<<< show table

        this.showAdd = false; //<<< show add form

        this.data = [{
          Type_ID: "1",
          Type: "Car"
        }, {
          Type_ID: "1",
          Type: "Truck"
        }, {
          Type_ID: "1",
          Type: "Truck"
        }, {
          Type_ID: "1",
          Type: "Truck"
        }, {
          Type_ID: "1",
          Type: "Truck"
        }, {
          Type_ID: "1",
          Type: "Truck"
        }];
        this.settings = this.appSettings.settings;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.data);
      } //==============================Filter table==================


      _createClass(VehicleTypesComponent, [{
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.dataSource.filter = filterValue.trim().toLowerCase();
        } //============================Initialize paginator============

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
        } //==================Change to edit form=====================

      }, {
        key: "changeform",
        value: function changeform() {
          if (this.show == false) {
            this.show = true;
            this.showAdd = false;
            this.showtable = false;
          }
        } //=================change to add form=======================

      }, {
        key: "AddVehicleType",
        value: function AddVehicleType() {
          if (this.show == true) {
            this.show = false;
          }

          this.showAdd = true;
          this.showtable = false;
        } //===============Vehicle POST==============================

      }, {
        key: "AddNewVehicleType",
        value: function AddNewVehicleType() {} //================Get type to edit in object===============

      }, {
        key: "getTypeDetail",
        value: function getTypeDetail(selected) {
          this.changeform();
        } //===========================Show table ===================

      }, {
        key: "showTable",
        value: function showTable() {
          this.showtable = true;
          this.showAdd = false;
          this.show = false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (localStorage.getItem("jwtToken") === null) {
            this.router.navigateByUrl("login");
          }
        }
      }]);

      return VehicleTypesComponent;
    }();

    VehicleTypesComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]), __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])], VehicleTypesComponent.prototype, "paginator", void 0);

    VehicleTypesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-vehicle-types',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./vehicle-types.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle-types/vehicle-types.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./vehicle-types.component.scss */
      "./src/app/vehicle-types/vehicle-types.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], VehicleTypesComponent);
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


    __webpack_exports__["default"] = ".mat-column-is_Active {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 5% !important;\n  width: 28% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\nmat-header-cell {\n  background-color: #308b30;\n  font-size: 16px;\n}\n\nmat-card {\n  width: 70%;\n  align-items: center;\n  margin-left: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVoaWNsZS9EOlxcMzcwXFxGaW5hbEZyb250ZW5kL3NyY1xcYXBwXFx2ZWhpY2xlXFx2ZWhpY2xlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92ZWhpY2xlL3ZlaGljbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFFQSxzQkFBQTtFQUVBLGlCQUFBO0VBRUEscUJBQUE7RUFDQSxhQUFBO0FDREo7O0FESUU7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUNESjs7QURJQTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC92ZWhpY2xlL3ZlaGljbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNvbHVtbi1pc19BY3RpdmUge1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCA1JSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDI4JSAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICBcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgXHJcbiAgICAtbXMtaHlwaGVuczogYXV0bztcclxuICAgIC1tb3otaHlwaGVuczogYXV0bztcclxuICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuICAgIGh5cGhlbnM6IGF1dG87XHJcbiAgfVxyXG5cclxuICBtYXQtaGVhZGVyLWNlbGx7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsIDEzOSwgNDgpO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5tYXQtY2FyZHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxufSIsIi5tYXQtY29sdW1uLWlzX0FjdGl2ZSB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgZmxleDogMCAwIDUlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyOCUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAtbXMtaHlwaGVuczogYXV0bztcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gIGh5cGhlbnM6IGF1dG87XG59XG5cbm1hdC1oZWFkZXItY2VsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDhiMzA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxubWF0LWNhcmQge1xuICB3aWR0aDogNzAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMTUlO1xufSJdfQ== */";
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
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _vehicleservice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./vehicleservice */
    "./src/app/vehicle/vehicleservice.ts");

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

    var VehicleComponent = /*#__PURE__*/function () {
      function VehicleComponent(appSettings, router, formbuilder, veService) {
        _classCallCheck(this, VehicleComponent);

        this.appSettings = appSettings;
        this.router = router;
        this.formbuilder = formbuilder;
        this.veService = veService;
        this.displayedColumns = ['Vehicle_ID', 'Vehicle_Type_Description', 'Model_Description', 'Section_Name', 'Vehicle_Mileage_Current', 'Vehicle_Registration_Number', 'is_Active', 'Actions'];
        this.show = false;
        this.showAdd = false;
        this.data = [// << dummy data
        ];
        this.types = ["Bakkie", "Tractor", "Car"];
        this.infrastructures = ["Building1", "Building2"];
        this.makes = ["Ford", "Toyota"];
        this.sections = ["Veld 1", "Veld 2"];
        this.models = ["Hilux", "Patrol"];
        this.showtable = true; // <<< show table variable

        this.settings = this.appSettings.settings;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.data);
        this.form = this.formbuilder.group({
          'Price': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(6)])],
          'PurchaseDate': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(8)])],
          'Registration': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(15)])],
          'LastService': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(6)])],
          'Interval': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(30)])],
          'CurrMileage': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(6)])],
          'PurchMileage': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(8)])],
          'Color': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(30)])],
          'Year': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(4)])],
          Type: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
          Section: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
          Infras: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
          Make: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
          Model: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]()
        });
      }

      _createClass(VehicleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.AdminPriv = localStorage.getItem("PrivelageLevel");

          if (localStorage.getItem("jwtToken") === null) {
            this.router.navigateByUrl("login");
          }

          this.getData();
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this23 = this;

          this.veService.getVehicle().subscribe(function (response) {
            _this23.data1 = response;
            console.log(_this23.data1);
            _this23.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this23.data1); //<<<<populate datasource
          }, function (error) {
            alert("An error has occured, please re login");

            _this23.router.navigateByUrl("logout");
          });
          this.veService.getBrands().subscribe(function (success) {
            _this23.data1 = success;
            _this23.makes = _this23.data1["Makes"];
            _this23.models = _this23.data1["Models"];
            console.log(_this23.makes);
            console.log(_this23.models);
          }, function (error) {
            console.log(error);
          });
          this.veService.getSections().subscribe(function (success) {
            _this23.data1 = success;
            _this23.sections = _this23.data1;
          }, function (error) {
            console.log(error);
          });
          this.veService.getInfras().subscribe(function (success) {
            _this23.data1 = success;
            console.log(_this23.data1);
            _this23.infrastructures = _this23.data1;
          }, function (error) {
            console.log(error);
          });
          this.veService.getTypes().subscribe(function (success) {
            _this23.data1 = success;
            _this23.types = _this23.data1;
          }, function (error) {
            console.log(error);
          });
        } //================================Table filter=========================

      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.dataSource.filter = filterValue.trim().toLowerCase();
        } //==============================Paginator setup======================

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
        } //=============================Show edit form=======================

      }, {
        key: "changeform",
        value: function changeform() {
          if (this.show == false) {
            this.show = true;
            this.showAdd = false;
            this.showtable = false;
          }
        } //===========================Populate edit vehicle object==========

      }, {
        key: "getVehicleDetail",
        value: function getVehicleDetail(Id) {
          //Implement function to pupulate edit field and populate vehicle edit\
          this.VehicleEdit = new _Models_Vehicles__WEBPACK_IMPORTED_MODULE_4__["postVehicle"]();
          this.changeform();
        } //====================================Show add vehicle form=============

      }, {
        key: "AddVehicle",
        value: function AddVehicle() {
          if (this.show == true) {
            this.show = false;
          }

          this.VehicleAdd = new _Models_Vehicles__WEBPACK_IMPORTED_MODULE_4__["postVehicle"]();
          this.showAdd = true;
          this.showtable = false;
        } //===============================Vehicle PUT function=================

      }, {
        key: "PutVehicle",
        value: function PutVehicle() {
          alert("Done");
        } //==============================Vehicle POST function=================

      }, {
        key: "addNewVehicle",
        value: function addNewVehicle() {} //=============================Vehicle Delete function===============

      }, {
        key: "deleteVehicle",
        value: function deleteVehicle() {
          if (confirm("Are you sure to delete " + name)) {
            console.log("Implement delete functionality here");
          }
        } //============================Show table============================

      }, {
        key: "showTable",
        value: function showTable() {
          this.showtable = true;
          this.showAdd = false;
          this.show = false;
        } //=============================Download vehicle list================

      }, {
        key: "Download",
        value: function Download() {
          alert("Download started");
        } //==============================Navigate to vehicle types===========

      }, {
        key: "LoadTypes",
        value: function LoadTypes() {
          this.router.navigateByUrl("veTypes");
        } //===============================New mileage prompt=================

      }, {
        key: "Prompt",
        value: function Prompt() {
          var result = prompt("Incorrect format: Please add new mileage");
        }
      }]);

      return VehicleComponent;
    }();

    VehicleComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _vehicleservice__WEBPACK_IMPORTED_MODULE_7__["VehicleService"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]), __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])], VehicleComponent.prototype, "paginator", void 0);

    VehicleComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-vehicle',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./vehicle.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle/vehicle.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./vehicle.component.scss */
      "./src/app/vehicle/vehicle.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _vehicleservice__WEBPACK_IMPORTED_MODULE_7__["VehicleService"]])], VehicleComponent);
    /***/
  },

  /***/
  "./src/app/vehicle/vehicleservice.ts":
  /*!*******************************************!*\
    !*** ./src/app/vehicle/vehicleservice.ts ***!
    \*******************************************/

  /*! exports provided: VehicleService */

  /***/
  function srcAppVehicleVehicleserviceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VehicleService", function () {
      return VehicleService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

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

    var VehicleService = /*#__PURE__*/function () {
      function VehicleService(http) {
        _classCallCheck(this, VehicleService);

        this.http = http;
        this.baseURL = "http://35.178.156.37/";
      }

      _createClass(VehicleService, [{
        key: "getVehicle",
        value: function getVehicle() {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.get("http://35.178.156.37/api/Vehicle/" + localStorage.getItem("currentFarm"), ops);
        }
      }, {
        key: "getVehicleDetails",
        value: function getVehicleDetails(id) {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.get(this.baseURL + "api/VehicleDetails/" + id.toString(), ops);
        }
      }, {
        key: "postVehicle",
        value: function postVehicle(vehicle) {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.post(this.baseURL + "api/Vehicle/Add/" + localStorage.getItem("currentUser"), vehicle, ops); //================IMPLEMENT!!!
        }
      }, {
        key: "putVehicle",
        value: function putVehicle(vehicle) {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.put(this.baseURL + "api/Vehicle/put/" + localStorage.getItem("currentFarm"), vehicle);
        }
      }, {
        key: "deleteVehicle",
        value: function deleteVehicle(id) {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http["delete"](this.baseURL + "api/Vehicle/Delete/" + id.toString());
        }
      }, {
        key: "getInfras",
        value: function getInfras() {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.get(this.baseURL + "api/Vehicle/getInfras/" + localStorage.getItem("currentFarm"));
        }
      }, {
        key: "getSections",
        value: function getSections() {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.get(this.baseURL + "api/Vehicle/getSections/" + localStorage.getItem("currentFarm"));
        }
      }, {
        key: "getBrands",
        value: function getBrands() {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.get(this.baseURL + "api/Vehicle/getBrands");
        }
      }, {
        key: "getTypes",
        value: function getTypes() {
          var ops = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.get(this.baseURL + "api/Vehicle/VehicleType/" + localStorage.getItem("currentFarm"));
        }
      }]);

      return VehicleService;
    }();

    VehicleService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    VehicleService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], VehicleService);
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

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
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
    /*! D:\370\FinalFrontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
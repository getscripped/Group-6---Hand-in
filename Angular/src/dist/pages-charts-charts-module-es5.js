function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-charts-charts-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/charts/bar/bar.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/charts/bar/bar.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesChartsBarBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\">\r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Vertical Bar Chart</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <div class=\"w-100 h-300p\">\r\n                <ngx-charts-bar-vertical\r\n                      [scheme]=\"colorScheme\"\r\n                      [gradient]=\"gradient\"\r\n                      [xAxis]=\"showXAxis\"\r\n                      [yAxis]=\"showYAxis\"\r\n                      [legend]=\"showLegend\"\r\n                      [showXAxisLabel]=\"showXAxisLabel\"\r\n                      [showYAxisLabel]=\"showYAxisLabel\"\r\n                      [xAxisLabel]=\"xAxisLabel\"\r\n                      [yAxisLabel]=\"yAxisLabel\"\r\n                      [results]=\"single\"\r\n                      (select)=\"onSelect($event)\">\r\n                </ngx-charts-bar-vertical>                  \r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Horizontal Bar Chart</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <div class=\"w-100 h-300p\">\r\n                <ngx-charts-bar-horizontal\r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"single\"\r\n                    [gradient]=\"gradient\"\r\n                    [xAxis]=\"showXAxis\"\r\n                    [yAxis]=\"showYAxis\"\r\n                    [legend]=\"showLegend\"\r\n                    [showXAxisLabel]=\"showXAxisLabel\"\r\n                    [showYAxisLabel]=\"showYAxisLabel\"\r\n                    [xAxisLabel]=\"yAxisLabel\"\r\n                    [yAxisLabel]=\"xAxisLabel\"\r\n                    (select)=\"onSelect($event)\">\r\n                </ngx-charts-bar-horizontal>         \r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\"  class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Grouped Vertical Bar Chart</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <div class=\"w-100 h-300p\">\r\n                <ngx-charts-bar-vertical-2d\r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"multi\"\r\n                    [gradient]=\"gradient\"\r\n                    [xAxis]=\"showXAxis\"\r\n                    [yAxis]=\"showYAxis\"\r\n                    [legend]=\"showLegend\"\r\n                    [showXAxisLabel]=\"showXAxisLabel\"\r\n                    [showYAxisLabel]=\"showYAxisLabel\"\r\n                    [xAxisLabel]=\"xAxisLabel\"\r\n                    [yAxisLabel]=\"yAxisLabel\"\r\n                    (select)=\"onSelect($event)\">\r\n                </ngx-charts-bar-vertical-2d>        \r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Grouped Horizontal Bar Chart</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <div class=\"w-100 h-300p\">\r\n                <ngx-charts-bar-horizontal-2d\r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"multi\"\r\n                    [gradient]=\"gradient\"\r\n                    [xAxis]=\"showXAxis\"\r\n                    [yAxis]=\"showYAxis\"\r\n                    [legend]=\"showLegend\"\r\n                    [showXAxisLabel]=\"showXAxisLabel\"\r\n                    [showYAxisLabel]=\"showYAxisLabel\"\r\n                    [xAxisLabel]=\"yAxisLabel\"\r\n                    [yAxisLabel]=\"xAxisLabel\"\r\n                    (select)=\"onSelect($event)\">\r\n                </ngx-charts-bar-horizontal-2d>        \r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Stacked Vertical Bar Chart</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <div class=\"w-100 h-300p\">\r\n                <ngx-charts-bar-vertical-stacked\r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"multi\"\r\n                    [gradient]=\"gradient\"\r\n                    [xAxis]=\"showXAxis\"\r\n                    [yAxis]=\"showYAxis\"\r\n                    [legend]=\"showLegend\"\r\n                    [showXAxisLabel]=\"showXAxisLabel\"\r\n                    [showYAxisLabel]=\"showYAxisLabel\"\r\n                    [xAxisLabel]=\"xAxisLabel\"\r\n                    [yAxisLabel]=\"yAxisLabel\"\r\n                    (select)=\"onSelect($event)\">\r\n                </ngx-charts-bar-vertical-stacked>         \r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Stacked Horizontal Bar Chart</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <div class=\"w-100 h-300p\">\r\n                <ngx-charts-bar-horizontal-stacked\r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"multi\"\r\n                    [gradient]=\"gradient\"\r\n                    [xAxis]=\"showXAxis\"\r\n                    [yAxis]=\"showYAxis\"\r\n                    [legend]=\"showLegend\"\r\n                    [showXAxisLabel]=\"showXAxisLabel\"\r\n                    [showYAxisLabel]=\"showYAxisLabel\"\r\n                    [xAxisLabel]=\"yAxisLabel\"\r\n                    [yAxisLabel]=\"xAxisLabel\"\r\n                    (select)=\"onSelect($event)\">\r\n                </ngx-charts-bar-horizontal-stacked>         \r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Normalized Vertical Bar Chart</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <div class=\"w-100 h-300p\">\r\n                <ngx-charts-bar-vertical-normalized\r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"multi\"\r\n                    [gradient]=\"gradient\"\r\n                    [xAxis]=\"showXAxis\"\r\n                    [yAxis]=\"showYAxis\"\r\n                    [legend]=\"showLegend\"\r\n                    [showXAxisLabel]=\"showXAxisLabel\"\r\n                    [showYAxisLabel]=\"showYAxisLabel\"\r\n                    [xAxisLabel]=\"xAxisLabel\"\r\n                    [yAxisLabel]=\"yAxisLabel\"\r\n                    (select)=\"onSelect($event)\">\r\n                </ngx-charts-bar-vertical-normalized>         \r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Normalized Horizontal Bar Chart</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <div class=\"w-100 h-300p\">\r\n                <ngx-charts-bar-horizontal-normalized\r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"multi\"\r\n                    [gradient]=\"gradient\"\r\n                    [xAxis]=\"showXAxis\"\r\n                    [yAxis]=\"showYAxis\"\r\n                    [legend]=\"showLegend\"\r\n                    [showXAxisLabel]=\"showXAxisLabel\"\r\n                    [showYAxisLabel]=\"showYAxisLabel\"\r\n                    [xAxisLabel]=\"yAxisLabel\"\r\n                    [yAxisLabel]=\"xAxisLabel\"\r\n                    (select)=\"onSelect($event)\">\r\n                </ngx-charts-bar-horizontal-normalized>         \r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/charts/bubble/bubble.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/charts/bubble/bubble.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesChartsBubbleBubbleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"column\">\r\n    <div class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Bubble Chart</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <div class=\"w-100 h-300p\">\r\n                <ngx-charts-bubble-chart\r\n                    [results]=\"bubble\"\r\n                    [showGridLines]=\"showGridLines\"\r\n                    [legend]=\"showLegend\"\r\n                    [legendTitle]=\"legendTitle\"\r\n                    [xAxis]=\"showXAxis\"\r\n                    [yAxis]=\"showYAxis\"\r\n                    [showXAxisLabel]=\"showXAxisLabel\"\r\n                    [showYAxisLabel]=\"showYAxisLabel\"\r\n                    [xAxisLabel]=\"xAxisLabel\"\r\n                    [yAxisLabel]=\"yAxisLabel\"\r\n                    [autoScale]=\"autoScale\"\r\n                    [scheme]=\"colorScheme\"\r\n                    [schemeType]=\"schemeType\"\r\n                    [roundDomains]=\"roundDomains\"\r\n                    [tooltipDisabled]=\"tooltipDisabled\"\r\n                    [minRadius]=\"minRadius\"\r\n                    [maxRadius]=\"maxRadius\">\r\n                </ngx-charts-bubble-chart>                  \r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/charts/line/line.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/charts/line/line.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesChartsLineLineComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\">\r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Line Chart</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <div class=\"w-100 h-300p\">\r\n                <ngx-charts-line-chart\r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"multi\"\r\n                    [gradient]=\"gradient\"\r\n                    [xAxis]=\"showXAxis\"\r\n                    [yAxis]=\"showYAxis\"\r\n                    [legend]=\"showLegend\"\r\n                    [showXAxisLabel]=\"showXAxisLabel\"\r\n                    [showYAxisLabel]=\"showYAxisLabel\"\r\n                    [xAxisLabel]=\"xAxisLabel\"\r\n                    [yAxisLabel]=\"yAxisLabel\"\r\n                    [autoScale]=\"autoScale\"\r\n                    (select)=\"onSelect($event)\">\r\n                </ngx-charts-line-chart>                  \r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Area Chart</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <div class=\"w-100 h-300p\">\r\n                <ngx-charts-area-chart\r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"multi\"\r\n                    [gradient]=\"gradient\"\r\n                    [xAxis]=\"showXAxis\"\r\n                    [yAxis]=\"showYAxis\"\r\n                    [legend]=\"showLegend\"\r\n                    [showXAxisLabel]=\"showXAxisLabel\"\r\n                    [showYAxisLabel]=\"showYAxisLabel\"\r\n                    [xAxisLabel]=\"xAxisLabel\"\r\n                    [yAxisLabel]=\"yAxisLabel\"\r\n                    [autoScale]=\"autoScale\"\r\n                    (select)=\"onSelect($event)\">\r\n                </ngx-charts-area-chart>         \r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Stacked Area Chart</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <div class=\"w-100 h-300p\">\r\n                <ngx-charts-area-chart-stacked                     \r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"multi\"\r\n                    [gradient]=\"gradient\"\r\n                    [xAxis]=\"showXAxis\"\r\n                    [yAxis]=\"showYAxis\"\r\n                    [legend]=\"showLegend\"\r\n                    [showXAxisLabel]=\"showXAxisLabel\"\r\n                    [showYAxisLabel]=\"showYAxisLabel\"\r\n                    [xAxisLabel]=\"xAxisLabel\"\r\n                    [yAxisLabel]=\"yAxisLabel\"\r\n                    (select)=\"onSelect($event)\">\r\n                </ngx-charts-area-chart-stacked>         \r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\">\r\n      <mat-card>\r\n          <mat-card-header fxLayoutAlign=\"center center\">                \r\n              <mat-card-subtitle><h2>Normalized Area Chart</h2></mat-card-subtitle>\r\n          </mat-card-header>\r\n          <div class=\"w-100 h-300p\">\r\n              <ngx-charts-area-chart-normalized\r\n                  [scheme]=\"colorScheme\"\r\n                  [results]=\"multi\"\r\n                  [gradient]=\"gradient\"\r\n                  [xAxis]=\"showXAxis\"\r\n                  [yAxis]=\"showYAxis\"\r\n                  [legend]=\"showLegend\"\r\n                  [showXAxisLabel]=\"showXAxisLabel\"\r\n                  [showYAxisLabel]=\"showYAxisLabel\"\r\n                  [xAxisLabel]=\"xAxisLabel\"\r\n                  [yAxisLabel]=\"yAxisLabel\"\r\n                  (select)=\"onSelect($event)\">\r\n              </ngx-charts-area-chart-normalized>          \r\n          </div>\r\n      </mat-card>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/charts/pie/pie.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/charts/pie/pie.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesChartsPiePieComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"column\">\r\n    <div class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Pie Chart</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <div class=\"w-100 h-300p\">\r\n                <ngx-charts-pie-chart\r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"single\"\r\n                    [legend]=\"showLegend\"\r\n                    [explodeSlices]=\"explodeSlices\"\r\n                    [labels]=\"showLabels\"\r\n                    [doughnut]=\"doughnut\"\r\n                    [gradient]=\"gradient\"\r\n                    (select)=\"onSelect($event)\">\r\n                </ngx-charts-pie-chart>                  \r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Advanced Pie Chart</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <div class=\"w-100 h-300p\">\r\n                <ngx-charts-advanced-pie-chart\r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"single\"\r\n                    [gradient]=\"gradient\"\r\n                    (select)=\"onSelect($event)\">\r\n                </ngx-charts-advanced-pie-chart>         \r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Pie Grid Chart</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <div class=\"w-100 h-300p\">\r\n                <ngx-charts-pie-grid\r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"single\"\r\n                    (select)=\"onSelect($event)\">\r\n                </ngx-charts-pie-grid>        \r\n            </div>\r\n        </mat-card>\r\n    </div>    \r\n</div>";
    /***/
  },

  /***/
  "./src/app/pages/charts/bar/bar.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/charts/bar/bar.component.ts ***!
    \***************************************************/

  /*! exports provided: BarComponent */

  /***/
  function srcAppPagesChartsBarBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BarComponent", function () {
      return BarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _charts_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../charts.data */
    "./src/app/pages/charts/charts.data.ts");
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

    var BarComponent = /*#__PURE__*/function () {
      function BarComponent(appSettings) {
        _classCallCheck(this, BarComponent);

        this.appSettings = appSettings;
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Population';
        this.colorScheme = {
          domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
        };
        this.settings = this.appSettings.settings;
        Object.assign(this, {
          single: _charts_data__WEBPACK_IMPORTED_MODULE_1__["single"],
          multi: _charts_data__WEBPACK_IMPORTED_MODULE_1__["multi"]
        });
      }

      _createClass(BarComponent, [{
        key: "onSelect",
        value: function onSelect(event) {
          console.log(event);
        }
      }]);

      return BarComponent;
    }();

    BarComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]
      }];
    };

    BarComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-bar',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/charts/bar/bar.component.html"))["default"]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]])], BarComponent);
    /***/
  },

  /***/
  "./src/app/pages/charts/bubble/bubble.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/charts/bubble/bubble.component.ts ***!
    \*********************************************************/

  /*! exports provided: BubbleComponent */

  /***/
  function srcAppPagesChartsBubbleBubbleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BubbleComponent", function () {
      return BubbleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _charts_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../charts.data */
    "./src/app/pages/charts/charts.data.ts");
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

    var BubbleComponent = /*#__PURE__*/function () {
      function BubbleComponent(appSettings) {
        _classCallCheck(this, BubbleComponent);

        this.appSettings = appSettings;
        this.legendTitle = 'Legend';
        this.showLegend = true;
        this.tooltipDisabled = false;
        this.showGridLines = true;
        this.roundDomains = false;
        this.maxRadius = 10;
        this.minRadius = 3;
        this.schemeType = 'ordinal';
        this.showXAxis = true;
        this.showYAxis = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Census Date';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Life expectancy [years]';
        this.colorScheme = {
          domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
        };
        this.autoScale = true;
        this.settings = this.appSettings.settings;
        Object.assign(this, {
          bubble: _charts_data__WEBPACK_IMPORTED_MODULE_1__["bubble"]
        });
      }

      _createClass(BubbleComponent, [{
        key: "onSelect",
        value: function onSelect(event) {
          console.log(event);
        }
      }]);

      return BubbleComponent;
    }();

    BubbleComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]
      }];
    };

    BubbleComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-bubble',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./bubble.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/charts/bubble/bubble.component.html"))["default"]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]])], BubbleComponent);
    /***/
  },

  /***/
  "./src/app/pages/charts/charts.data.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/charts/charts.data.ts ***!
    \*********************************************/

  /*! exports provided: single, multi, bubble */

  /***/
  function srcAppPagesChartsChartsDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "single", function () {
      return single;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "multi", function () {
      return multi;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "bubble", function () {
      return bubble;
    });

    var single = [{
      name: 'Germany',
      value: 40632
    }, {
      name: 'United States',
      value: 49737
    }, {
      name: 'France',
      value: 36745
    }, {
      name: 'United Kingdom',
      value: 36240
    }, {
      name: 'Spain',
      value: 33000
    }, {
      name: 'Italy',
      value: 35800
    }];
    var multi = [{
      name: 'Germany',
      series: [{
        name: '2017',
        value: 71632
      }, {
        name: '2010',
        value: 40632
      }, {
        name: '2000',
        value: 76953
      }, {
        name: '1990',
        value: 31476
      }]
    }, {
      name: 'United States',
      series: [{
        name: '2017',
        value: 82632
      }, {
        name: '2010',
        value: 49737
      }, {
        name: '2000',
        value: 55986
      }, {
        name: '1990',
        value: 37060
      }]
    }, {
      name: 'France',
      series: [{
        name: '2017',
        value: 51732
      }, {
        name: '2010',
        value: 36745
      }, {
        name: '2000',
        value: 34774
      }, {
        name: '1990',
        value: 29476
      }]
    }, {
      name: 'United Kingdom',
      series: [{
        name: '2017',
        value: 95652
      }, {
        name: '2010',
        value: 36240
      }, {
        name: '2000',
        value: 32543
      }, {
        name: '1990',
        value: 26424
      }]
    }];
    var bubble = [{
      name: 'Germany',
      series: [{
        name: '2009',
        x: new Date(2009, 0, 1),
        y: 80.3,
        r: 80.4
      }, {
        name: '2006',
        x: new Date(2006, 0, 1),
        y: 80.3,
        r: 78
      }, {
        name: '1995',
        x: new Date(1995, 0, 1),
        y: 77.7,
        r: 58.1
      }, {
        name: '1990',
        x: new Date(1990, 0, 1),
        y: 75.4,
        r: 79
      }]
    }, {
      name: 'United States',
      series: [{
        name: '2010',
        x: new Date(2010, 0, 1),
        y: 78.8,
        r: 310
      }, {
        name: '2005',
        x: new Date(2005, 0, 1),
        y: 76.9,
        r: 283
      }, {
        name: '1996',
        x: new Date(1996, 0, 1),
        y: 78.7,
        r: 59.1
      }, {
        name: '1990',
        x: new Date(1990, 0, 1),
        y: 75.4,
        r: 253
      }]
    }, {
      name: 'France',
      series: [{
        name: '2008',
        x: new Date(2008, 0, 1),
        y: 81.4,
        r: 63
      }, {
        name: '2000',
        x: new Date(2000, 0, 1),
        y: 79.1,
        r: 59.4
      }, {
        name: '1994',
        x: new Date(1994, 0, 1),
        y: 76.7,
        r: 58.1
      }, {
        name: '1990',
        x: new Date(1990, 0, 1),
        y: 77.2,
        r: 56.9
      }]
    }, {
      name: 'United Kingdom',
      series: [{
        name: '2007',
        x: new Date(2007, 0, 1),
        y: 80.2,
        r: 62.7
      }, {
        name: '2003',
        x: new Date(2003, 0, 1),
        y: 77.8,
        r: 58.9
      }, {
        name: '1995',
        x: new Date(1995, 0, 1),
        y: 78.7,
        r: 59.1
      }, {
        name: '1990',
        x: new Date(1990, 0, 1),
        y: 75.7,
        r: 57.1
      }]
    }];
    /***/
  },

  /***/
  "./src/app/pages/charts/charts.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/charts/charts.module.ts ***!
    \***********************************************/

  /*! exports provided: routes, ChartsModule */

  /***/
  function srcAppPagesChartsChartsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartsModule", function () {
      return ChartsModule;
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


    var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @swimlane/ngx-charts */
    "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _bar_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./bar/bar.component */
    "./src/app/pages/charts/bar/bar.component.ts");
    /* harmony import */


    var _bubble_bubble_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./bubble/bubble.component */
    "./src/app/pages/charts/bubble/bubble.component.ts");
    /* harmony import */


    var _line_line_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./line/line.component */
    "./src/app/pages/charts/line/line.component.ts");
    /* harmony import */


    var _pie_pie_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pie/pie.component */
    "./src/app/pages/charts/pie/pie.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var routes = [{
      path: '',
      redirectTo: 'bar',
      pathMatch: 'full'
    }, {
      path: 'bar',
      component: _bar_bar_component__WEBPACK_IMPORTED_MODULE_5__["BarComponent"],
      data: {
        breadcrumb: 'Bar Charts'
      }
    }, {
      path: 'pie',
      component: _pie_pie_component__WEBPACK_IMPORTED_MODULE_8__["PieComponent"],
      data: {
        breadcrumb: 'Pie Charts'
      }
    }, {
      path: 'line',
      component: _line_line_component__WEBPACK_IMPORTED_MODULE_7__["LineComponent"],
      data: {
        breadcrumb: 'Line Charts'
      }
    }, {
      path: 'bubble',
      component: _bubble_bubble_component__WEBPACK_IMPORTED_MODULE_6__["BubbleComponent"],
      data: {
        breadcrumb: 'Bubble Charts'
      }
    }];

    var ChartsModule = function ChartsModule() {
      _classCallCheck(this, ChartsModule);
    };

    ChartsModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["NgxChartsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
      declarations: [_bar_bar_component__WEBPACK_IMPORTED_MODULE_5__["BarComponent"], _bubble_bubble_component__WEBPACK_IMPORTED_MODULE_6__["BubbleComponent"], _line_line_component__WEBPACK_IMPORTED_MODULE_7__["LineComponent"], _pie_pie_component__WEBPACK_IMPORTED_MODULE_8__["PieComponent"]]
    })], ChartsModule);
    /***/
  },

  /***/
  "./src/app/pages/charts/line/line.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/charts/line/line.component.ts ***!
    \*****************************************************/

  /*! exports provided: LineComponent */

  /***/
  function srcAppPagesChartsLineLineComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LineComponent", function () {
      return LineComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _charts_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../charts.data */
    "./src/app/pages/charts/charts.data.ts");
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

    var LineComponent = /*#__PURE__*/function () {
      function LineComponent(appSettings) {
        _classCallCheck(this, LineComponent);

        this.appSettings = appSettings;
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Year';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Population';
        this.colorScheme = {
          domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
        };
        this.autoScale = true;
        this.settings = this.appSettings.settings;
        Object.assign(this, {
          single: _charts_data__WEBPACK_IMPORTED_MODULE_1__["single"],
          multi: _charts_data__WEBPACK_IMPORTED_MODULE_1__["multi"]
        });
      }

      _createClass(LineComponent, [{
        key: "onSelect",
        value: function onSelect(event) {
          console.log(event);
        }
      }]);

      return LineComponent;
    }();

    LineComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]
      }];
    };

    LineComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-line',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./line.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/charts/line/line.component.html"))["default"]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]])], LineComponent);
    /***/
  },

  /***/
  "./src/app/pages/charts/pie/pie.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/charts/pie/pie.component.ts ***!
    \***************************************************/

  /*! exports provided: PieComponent */

  /***/
  function srcAppPagesChartsPiePieComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PieComponent", function () {
      return PieComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _charts_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../charts.data */
    "./src/app/pages/charts/charts.data.ts");
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

    var PieComponent = /*#__PURE__*/function () {
      function PieComponent(appSettings) {
        _classCallCheck(this, PieComponent);

        this.appSettings = appSettings;
        this.showLegend = true;
        this.gradient = true;
        this.colorScheme = {
          domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
        };
        this.showLabels = true;
        this.explodeSlices = false;
        this.doughnut = false;
        this.settings = this.appSettings.settings;
        Object.assign(this, {
          single: _charts_data__WEBPACK_IMPORTED_MODULE_1__["single"],
          multi: _charts_data__WEBPACK_IMPORTED_MODULE_1__["multi"]
        });
      }

      _createClass(PieComponent, [{
        key: "onSelect",
        value: function onSelect(event) {
          console.log(event);
        }
      }]);

      return PieComponent;
    }();

    PieComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]
      }];
    };

    PieComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-pie',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./pie.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/charts/pie/pie.component.html"))["default"]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]])], PieComponent);
    /***/
  }
}]);
//# sourceMappingURL=pages-charts-charts-module-es5.js.map
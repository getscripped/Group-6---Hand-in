(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container>\r\n  \r\n    <div fxLayout=\"row\"  fxLayoutAlign=\"center center\" class=\"h-100\"  style=\"overflow: auto\">      \r\n  \r\n         <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" fxFlex=\"100\"  fxFlex.gt-sm=\"40\"  >\r\n  \r\n              <mat-card class=\"p-0 mat-elevation-z24 box register\">\r\n                  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"bg-primary box-header\">\r\n                      <button mat-fab color=\"accent\" class=\"mat-elevation-z12\" (click)=\"onSubmit();\">\r\n                          <mat-icon>person_add</mat-icon>\r\n                      </button>\r\n                      <a mat-button routerLink=\"/login\">Already have an account? Sign in!</a>\r\n                      \r\n                  </div>\r\n                  <mat-card-content fxLayout=\"column\"  fxLayoutAlign=\"end center\"  class=\"box-content\">\r\n                  \r\n                      <mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"mat-elevation-z12 box-content-inner\">\r\n                        <h1>Register Farmer</h1>  \r\n                        \r\n                        <img [src]=\"imageSrc\" *ngIf=\"imageSrc\" style=\"height: 100px; width:100px; position: relative;float: right;overflow: hidden;\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"file\" style=\"text-align:center;display: block;\">Profile Photo</label>\r\n                          <input \r\n                              formControlName=\"file\"\r\n                              id=\"file\" \r\n                              type=\"file\" \r\n                              class=\"form-control\"\r\n                              (change)=\"onSelectedFile($event)\">\r\n                          \r\n                      </div>\r\n                      \r\n                     \r\n                      \r\n\r\n                         \r\n                          <mat-form-field class=\"w-100\">\r\n                            <input matInput placeholder=\"Full Name\" (keypress)=\"omit_special_char($event)\" formControlName=\"name\" [(ngModel)] = \"SubmitData.Name\" required>\r\n                            <mat-error *ngIf=\"form.controls.name.errors?.required\">Full Name is required</mat-error>\r\n                            <mat-error *ngIf=\"form.controls.name.hasError('minlength')\">Full Name isn't long enough, minimum of 3 characters</mat-error>\r\n                          </mat-form-field>\r\n                          <mat-form-field class=\"w-100\">\r\n                          <input matInput placeholder=\"Surname\" formControlName=\"surname\" (keypress)=\"omit_special_char($event)\"  [(ngModel)] = \"SubmitData.Surname\" required>\r\n                            <mat-error *ngIf=\"form.controls.surname.errors?.required\">Surname is required</mat-error>\r\n                            <mat-error *ngIf=\"form.controls.surname.hasError('minlength')\">Surname isn't long enough, minimum of 3 characters</mat-error>\r\n                          </mat-form-field>\r\n                          <mat-form-field class=\"w-100\">\r\n                            <input matInput placeholder=\"ID Number\" formControlName=\"id\" (keypress)=\"omit_special_char_Let($event)\" maxlength=\"13\"  [(ngModel)] = \"SubmitData.IDNum\" (change) = \"checkID()\" required>\r\n                              <mat-error *ngIf=\"form.controls.id.errors?.required\">ID Number is required</mat-error>\r\n                              <mat-error *ngIf=\"form.controls.id.hasError('minlength')\">ID Number invalid</mat-error>\r\n                            </mat-form-field>\r\n                            <mat-form-field class=\"w-100\">\r\n                                <input matInput placeholder=\"Street Address\" formControlName=\"address\" (keypress)=\"omit_special_char($event)\"  [(ngModel)] = \"SubmitData.Adress\" required>\r\n                                  <mat-error *ngIf=\"form.controls.address.errors?.required\">Address is required</mat-error>\r\n                                  <mat-error *ngIf=\"form.controls.address.hasError('minlength')\">Address invalid</mat-error>\r\n                            </mat-form-field>\r\n                            <mat-form-field class=\"w-100\">\r\n                                <input matInput placeholder=\"Phone Number\" maxlength=\"10\" formControlName=\"number\" (keypress)=\"omit_special_char($event)\"  [(ngModel)] = \"SubmitData.Phone\" required>\r\n                                  <mat-error *ngIf=\"form.controls.number.errors?.required\">Phone Number is required</mat-error>\r\n                                  <mat-error *ngIf=\"form.controls.number.hasError('minlength')\">Phone Number invalid</mat-error>\r\n                                </mat-form-field>\r\n                          <mat-form-field class=\"w-100\">\r\n                              <input matInput placeholder=\"Email\" type=\"email\" formControlName=\"email\"  [(ngModel)] = \"SubmitData.Email\" (blur) = \"CheckEmail()\" required>\r\n                              <mat-error *ngIf=\"form.controls.email.errors?.required\">Email is required</mat-error>\r\n                              <mat-error *ngIf=\"form.controls.email.hasError('invalidEmail')\">Invalid email address</mat-error>\r\n                          </mat-form-field>\r\n                          <mat-form-field class=\"w-100\">\r\n                              <input matInput placeholder=\"Password\" formControlName=\"password\" type=\"password\" minlength=\"6\"  [(ngModel)] = \"SubmitData.Password\" required>\r\n                              <mat-error *ngIf=\"form.controls.password.errors?.required\">Password is required</mat-error>\r\n                              <mat-error *ngIf=\"form.controls.password.hasError('minlength')\">Password isn't long enough, minimum of 6 characters</mat-error>\r\n                          </mat-form-field> \r\n                          <mat-form-field class=\"w-100\">\r\n                            <input matInput placeholder=\"Confirm Password\" formControlName=\"confirmPassword\" type=\"password\" required>\r\n                            <mat-error *ngIf=\"form.controls.confirmPassword.errors?.required\">Confirm Password is required</mat-error>\r\n                            <mat-error *ngIf=\"form.controls.confirmPassword.hasError('mismatchedPasswords')\">Passwords do not match</mat-error>\r\n                          </mat-form-field>\r\n\r\n\r\n                          \r\n                          \r\n                         \r\n                      </mat-card>\r\n                      <button mat-raised-button color=\"primary\" class=\"mat-elevation-z12 box-button\" type=\"submit\" *ngIf = \"submit1 && submit2\">SIGN UP</button>\r\n                  </mat-card-content>\r\n              </mat-card>\r\n              \r\n         </form>   \r\n    \r\n    \r\n    </div>\r\n  \r\n  </mat-sidenav-container>\r\n\r\n");

/***/ }),

/***/ "./src/app/Models/register.ts":
/*!************************************!*\
  !*** ./src/app/Models/register.ts ***!
  \************************************/
/*! exports provided: Register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
class Register {
    constructor() { }
}


/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme/utils/app-validators */ "./src/app/theme/utils/app-validators.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var src_app_Models_register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Models/register */ "./src/app/Models/register.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






 //   import <<<<

let RegisterComponent = class RegisterComponent {
    constructor(appSettings, fb, router, fireStorage, http) {
        this.appSettings = appSettings;
        this.fb = fb;
        this.router = router;
        this.fireStorage = fireStorage;
        this.http = http;
        this.basePath = '/images'; //  <<<<<<< Image base path
        this.downloadableURL = ''; //  <<<<<<<   URL for firebase image view
        this.submit1 = false;
        this.submit2 = false;
        this.SubmitData = new src_app_Models_register__WEBPACK_IMPORTED_MODULE_5__["Register"](); //  <<< Submitted from the form
        this.PostData = new src_app_Models_register__WEBPACK_IMPORTED_MODULE_5__["Register"](); //  <<< To be Submitted to the API
        this.settings = this.appSettings.settings;
        this.form = this.fb.group({
            'name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
            'surname': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
            'id': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(13)])],
            'number': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)])],
            'city': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
            'address': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
            'postalCode': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_3__["emailValidator"]])],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'confirmPassword': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, { validator: Object(_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_3__["matchingPasswords"])('password', 'confirmPassword') });
    }
    //=================================Initial submit for image upload to firebase========================
    onSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.file) {
                const filePath = `${this.basePath}/${this.SubmitData.IDNum}`; // path at which image will be stored in the firebase storage
                this.task = this.fireStorage.upload(filePath, this.file); // upload task
                // this.progress = this.snapTask.percentageChanges();
                this.progressValue = this.task.percentageChanges();
                (yield this.task).ref.getDownloadURL().then(url => {
                    this.downloadableURL = url; // <<< url is found here
                    this.postData();
                });
            }
            else {
                this.downloadableURL = '';
                this.postData();
            }
        });
    }
    //=================================Secondary functio to submit to API===========================
    postData() {
        this.PostData = this.SubmitData;
        this.PostData.Image = this.downloadableURL; //   <<< Set firebase URl for database
        this.http.post("http://35.178.156.37/api/User/Register", this.PostData).subscribe(success => {
            alert("Registration succesfull!");
        });
    }
    //=================================================================================================
    onSelectedFile(event) {
        const reader = new FileReader();
        if (event.target.files && event.target.files.length) {
            const [file] = event.target.files;
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.imageSrc = reader.result;
                this.form.patchValue({
                    fileSource: reader.result
                });
            };
        }
        this.file = event.target.files[0];
        this.file.name = this.SubmitData.IDNum;
    }
    //==================================Post to Api to check if ID exists=============================
    checkID() {
        if (this.SubmitData.IDNum.length == 13) {
            this.http.post("http://35.178.156.37/api/UserExists", this.SubmitData.IDNum).subscribe(//  <<< Post for ID exists check
            //  <<< Post for ID exists check
            success => {
                this.submit1 = true; // <<< Button shows if ID not found
            }, error => {
                alert("Id number is already in use");
                this.SubmitData.IDNum = null;
                this.submit1 = false; // <<< Button hides when ID found
            });
        }
        else {
            this.submit1 = false; // <<< Button hide
        }
    }
    //==================================Post to api to see if email exists=============================
    CheckEmail() {
        this.http.post("http://35.178.156.37/api/UserExists", this.SubmitData.Email).subscribe(//  <<< Post for Email exists check
        //  <<< Post for Email exists check
        success => {
            this.submit2 = true; // <<< Button shows if ID not found
            if (this.SubmitData.Email.length == 0) {
                this.submit2 = false; // <<< Button hides 
            }
        }, error => {
            alert("Email is already in use");
            this.SubmitData.Email = null;
            console.log(error);
            this.submit2 = false; // <<< Button hides when ID found
        });
    }
    //====================================Loading bar for file upload===============================
    ngAfterViewInit() {
        this.settings.loadingSpinner = false;
    }
    //===========================================REGEX to avoid SQL injection=======================
    omit_special_char(event) {
        var k;
        k = event.charCode; //         k = event.keyCode;  (Both can be used)
        return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
    }
    //============================================REGEX only to allow numbers=======================
    omit_special_char_Let(event) {
        var k;
        k = event.charCode; //         k = event.keyCode;  (Both can be used)
        return ((k >= 48 && k <= 57));
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
];
RegisterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-register',
        template: __importDefault(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html")).default
    }),
    __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]])
], RegisterComponent);



/***/ }),

/***/ "./src/app/pages/register/register.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: routes, RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







const routes = [
    { path: '', component: _register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"], pathMatch: 'full' }
];
let RegisterModule = class RegisterModule {
};
RegisterModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"]
        ],
        declarations: [
            _register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
        ]
    })
], RegisterModule);



/***/ })

}]);
//# sourceMappingURL=pages-register-register-module-es2015.js.map
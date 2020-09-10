function _slicedToArray(r,e){return _arrayWithHoles(r)||_iterableToArrayLimit(r,e)||_unsupportedIterableToArray(r,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(r,e){if(r){if("string"==typeof r)return _arrayLikeToArray(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,e):void 0}}function _arrayLikeToArray(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function _iterableToArrayLimit(r,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var t=[],n=!0,o=!1,a=void 0;try{for(var i,c=r[Symbol.iterator]();!(n=(i=c.next()).done)&&(t.push(i.value),!e||t.length!==e);n=!0);}catch(s){o=!0,a=s}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return t}}function _arrayWithHoles(r){if(Array.isArray(r))return r}function _defineProperties(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function _createClass(r,e,t){return e&&_defineProperties(r.prototype,e),t&&_defineProperties(r,t),r}function _classCallCheck(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{fhSy:function(r,e,t){"use strict";t.r(e),t.d(e,"routes",(function(){return j})),t.d(e,"RegisterModule",(function(){return G}));var n=t("DVwZ"),o=t("4i9L"),a=t("P2P6"),i=t("PCNd"),c=t("VAss"),s=t("/RaO"),u=function r(){_classCallCheck(this,r)},l=t("I2fu"),m=t("GUzc"),f=t("Is5F"),h=t("X7+G"),d=t("X6d8"),g=t("GpQZ"),p=t("08HT"),b=t("wzcP"),v=t("Cq4z"),y=t("zjsz");function w(r,e){if(1&r&&l.cc(0,"img",23),2&r){var t=l.tc();l.Ac("src",t.imageSrc,l.Rc)}}function A(r,e){1&r&&(l.hc(0,"mat-error"),l.Yc(1,"Full Name is required"),l.gc())}function I(r,e){1&r&&(l.hc(0,"mat-error"),l.Yc(1,"Full Name isn't long enough, minimum of 3 characters"),l.gc())}function N(r,e){1&r&&(l.hc(0,"mat-error"),l.Yc(1,"Surname is required"),l.gc())}function S(r,e){1&r&&(l.hc(0,"mat-error"),l.Yc(1,"Surname isn't long enough, minimum of 3 characters"),l.gc())}function C(r,e){1&r&&(l.hc(0,"mat-error"),l.Yc(1,"ID Number is required"),l.gc())}function D(r,e){1&r&&(l.hc(0,"mat-error"),l.Yc(1,"ID Number invalid"),l.gc())}function k(r,e){1&r&&(l.hc(0,"mat-error"),l.Yc(1,"Address is required"),l.gc())}function _(r,e){1&r&&(l.hc(0,"mat-error"),l.Yc(1,"Address invalid"),l.gc())}function P(r,e){1&r&&(l.hc(0,"mat-error"),l.Yc(1,"Phone Number is required"),l.gc())}function q(r,e){1&r&&(l.hc(0,"mat-error"),l.Yc(1,"Phone Number invalid"),l.gc())}function x(r,e){1&r&&(l.hc(0,"mat-error"),l.Yc(1,"Email is required"),l.gc())}function M(r,e){1&r&&(l.hc(0,"mat-error"),l.Yc(1,"Invalid email address"),l.gc())}function L(r,e){1&r&&(l.hc(0,"mat-error"),l.Yc(1,"Password is required"),l.gc())}function E(r,e){1&r&&(l.hc(0,"mat-error"),l.Yc(1,"Password isn't long enough, minimum of 6 characters"),l.gc())}function Y(r,e){1&r&&(l.hc(0,"mat-error"),l.Yc(1,"Confirm Password is required"),l.gc())}function W(r,e){1&r&&(l.hc(0,"mat-error"),l.Yc(1,"Passwords do not match"),l.gc())}function R(r,e){1&r&&(l.hc(0,"button",24),l.Yc(1,"SIGN UP"),l.gc())}var T,U,z=((T=function(){function r(e,t,n,o,i){_classCallCheck(this,r),this.appSettings=e,this.fb=t,this.router=n,this.fireStorage=o,this.http=i,this.basePath="/images",this.downloadableURL="",this.submit1=!1,this.submit2=!1,this.SubmitData=new u,this.PostData=new u,this.settings=this.appSettings.settings,this.form=this.fb.group({name:[null,a.v.compose([a.v.required,a.v.minLength(3)])],surname:[null,a.v.compose([a.v.required,a.v.minLength(3)])],id:[null,a.v.compose([a.v.required,a.v.minLength(13)])],number:[null,a.v.compose([a.v.required,a.v.minLength(10)])],city:[null,a.v.compose([a.v.required,a.v.minLength(3)])],address:[null,a.v.compose([a.v.required,a.v.minLength(3)])],postalCode:[null,a.v.compose([a.v.required,a.v.minLength(3)])],email:[null,a.v.compose([a.v.required,c.a])],password:["",a.v.required],confirmPassword:["",a.v.required]},{validator:Object(c.b)("password","confirmPassword")})}return _createClass(r,[{key:"onSubmit",value:function(){return r=this,t=regeneratorRuntime.mark((function r(){var e=this;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!this.file){r.next=8;break}return this.task=this.fireStorage.upload("".concat(this.basePath,"/").concat(this.SubmitData.IDNum),this.file),this.progressValue=this.task.percentageChanges(),r.next=5,this.task;case 5:r.sent.ref.getDownloadURL().then((function(r){e.downloadableURL=r,e.postData()})),r.next=9;break;case 8:this.downloadableURL="",this.postData();case 9:case"end":return r.stop()}}),r,this)})),new((e=void 0)||(e=Promise))((function(n,o){function a(r){try{c(t.next(r))}catch(e){o(e)}}function i(r){try{c(t.throw(r))}catch(e){o(e)}}function c(r){var t;r.done?n(r.value):(t=r.value,t instanceof e?t:new e((function(r){r(t)}))).then(a,i)}c((t=t.apply(r,[])).next())}));var r,e,t}},{key:"postData",value:function(){this.PostData=this.SubmitData,this.PostData.Image=this.downloadableURL,this.http.post("http://35.178.156.37/api/User/Register",this.PostData).subscribe((function(r){alert("Registration succesfull!")}))}},{key:"onSelectedFile",value:function(r){var e=this,t=new FileReader;if(r.target.files&&r.target.files.length){var n=_slicedToArray(r.target.files,1)[0];t.readAsDataURL(n),t.onload=function(){e.imageSrc=t.result,e.form.patchValue({fileSource:t.result})}}this.file=r.target.files[0],this.file.name=this.SubmitData.IDNum}},{key:"checkID",value:function(){var r=this;13==this.SubmitData.IDNum.length?this.http.post("http://35.178.156.37/api/UserExists",this.SubmitData.IDNum).subscribe((function(e){r.submit1=!0}),(function(e){alert("Id number is already in use"),r.SubmitData.IDNum=null,r.submit1=!1})):this.submit1=!1}},{key:"CheckEmail",value:function(){var r=this;this.http.post("http://35.178.156.37/api/UserExists",this.SubmitData.Email).subscribe((function(e){r.submit2=!0,0==r.SubmitData.Email.length&&(r.submit2=!1)}),(function(e){alert("Email is already in use"),r.SubmitData.Email=null,console.log(e),r.submit2=!1}))}},{key:"ngAfterViewInit",value:function(){this.settings.loadingSpinner=!1}},{key:"omit_special_char",value:function(r){var e;return(e=r.charCode)>64&&e<91||e>96&&e<123||8==e||32==e||e>=48&&e<=57}},{key:"omit_special_char_Let",value:function(r){var e;return(e=r.charCode)>=48&&e<=57}}]),r}()).\u0275fac=function(r){return new(r||T)(l.bc(s.a),l.bc(a.c),l.bc(o.d),l.bc(m.a),l.bc(f.b))},T.\u0275cmp=l.Vb({type:T,selectors:[["app-register"]],decls:52,vars:26,consts:[["fxLayout","row","fxLayoutAlign","center center",1,"h-100",2,"overflow","auto"],["fxFlex","100","fxFlex.gt-sm","40",3,"formGroup","ngSubmit"],[1,"p-0","mat-elevation-z24","box","register"],["fxLayout","column","fxLayoutAlign","center center",1,"bg-primary","box-header"],["mat-fab","","color","accent",1,"mat-elevation-z12",3,"click"],["mat-button","","routerLink","/login"],["fxLayout","column","fxLayoutAlign","end center",1,"box-content"],["fxLayout","column","fxLayoutAlign","center center",1,"mat-elevation-z12","box-content-inner"],["style","height: 100px; width:100px; position: relative;float: right;overflow: hidden;",3,"src",4,"ngIf"],[1,"form-group"],["for","file",2,"text-align","center","display","block"],["formControlName","file","id","file","type","file",1,"form-control",3,"change"],[1,"w-100"],["matInput","","placeholder","Full Name","formControlName","name","required","",3,"ngModel","keypress","ngModelChange"],[4,"ngIf"],["matInput","","placeholder","Surname","formControlName","surname","required","",3,"ngModel","keypress","ngModelChange"],["matInput","","placeholder","ID Number","formControlName","id","maxlength","13","required","",3,"ngModel","keypress","ngModelChange","change"],["matInput","","placeholder","Street Address","formControlName","address","required","",3,"ngModel","keypress","ngModelChange"],["matInput","","placeholder","Phone Number","maxlength","10","formControlName","number","required","",3,"ngModel","keypress","ngModelChange"],["matInput","","placeholder","Email","type","email","formControlName","email","required","",3,"ngModel","ngModelChange","blur"],["matInput","","placeholder","Password","formControlName","password","type","password","minlength","6","required","",3,"ngModel","ngModelChange"],["matInput","","placeholder","Confirm Password","formControlName","confirmPassword","type","password","required",""],["mat-raised-button","","color","primary","class","mat-elevation-z12 box-button","type","submit",4,"ngIf"],[2,"height","100px","width","100px","position","relative","float","right","overflow","hidden",3,"src"],["mat-raised-button","","color","primary","type","submit",1,"mat-elevation-z12","box-button"]],template:function(r,e){1&r&&(l.hc(0,"mat-sidenav-container"),l.hc(1,"div",0),l.hc(2,"form",1),l.pc("ngSubmit",(function(r){return e.onSubmit()})),l.hc(3,"mat-card",2),l.hc(4,"div",3),l.hc(5,"button",4),l.pc("click",(function(r){return e.onSubmit()})),l.hc(6,"mat-icon"),l.Yc(7,"person_add"),l.gc(),l.gc(),l.hc(8,"a",5),l.Yc(9,"Already have an account? Sign in!"),l.gc(),l.gc(),l.hc(10,"mat-card-content",6),l.hc(11,"mat-card",7),l.hc(12,"h1"),l.Yc(13,"Register Farmer"),l.gc(),l.Wc(14,w,1,1,"img",8),l.hc(15,"div",9),l.hc(16,"label",10),l.Yc(17,"Profile Photo"),l.gc(),l.hc(18,"input",11),l.pc("change",(function(r){return e.onSelectedFile(r)})),l.gc(),l.gc(),l.hc(19,"mat-form-field",12),l.hc(20,"input",13),l.pc("keypress",(function(r){return e.omit_special_char(r)}))("ngModelChange",(function(r){return e.SubmitData.Name=r})),l.gc(),l.Wc(21,A,2,0,"mat-error",14),l.Wc(22,I,2,0,"mat-error",14),l.gc(),l.hc(23,"mat-form-field",12),l.hc(24,"input",15),l.pc("keypress",(function(r){return e.omit_special_char(r)}))("ngModelChange",(function(r){return e.SubmitData.Surname=r})),l.gc(),l.Wc(25,N,2,0,"mat-error",14),l.Wc(26,S,2,0,"mat-error",14),l.gc(),l.hc(27,"mat-form-field",12),l.hc(28,"input",16),l.pc("keypress",(function(r){return e.omit_special_char_Let(r)}))("ngModelChange",(function(r){return e.SubmitData.IDNum=r}))("change",(function(r){return e.checkID()})),l.gc(),l.Wc(29,C,2,0,"mat-error",14),l.Wc(30,D,2,0,"mat-error",14),l.gc(),l.hc(31,"mat-form-field",12),l.hc(32,"input",17),l.pc("keypress",(function(r){return e.omit_special_char(r)}))("ngModelChange",(function(r){return e.SubmitData.Adress=r})),l.gc(),l.Wc(33,k,2,0,"mat-error",14),l.Wc(34,_,2,0,"mat-error",14),l.gc(),l.hc(35,"mat-form-field",12),l.hc(36,"input",18),l.pc("keypress",(function(r){return e.omit_special_char(r)}))("ngModelChange",(function(r){return e.SubmitData.Phone=r})),l.gc(),l.Wc(37,P,2,0,"mat-error",14),l.Wc(38,q,2,0,"mat-error",14),l.gc(),l.hc(39,"mat-form-field",12),l.hc(40,"input",19),l.pc("ngModelChange",(function(r){return e.SubmitData.Email=r}))("blur",(function(r){return e.CheckEmail()})),l.gc(),l.Wc(41,x,2,0,"mat-error",14),l.Wc(42,M,2,0,"mat-error",14),l.gc(),l.hc(43,"mat-form-field",12),l.hc(44,"input",20),l.pc("ngModelChange",(function(r){return e.SubmitData.Password=r})),l.gc(),l.Wc(45,L,2,0,"mat-error",14),l.Wc(46,E,2,0,"mat-error",14),l.gc(),l.hc(47,"mat-form-field",12),l.cc(48,"input",21),l.Wc(49,Y,2,0,"mat-error",14),l.Wc(50,W,2,0,"mat-error",14),l.gc(),l.gc(),l.Wc(51,R,2,0,"button",22),l.gc(),l.gc(),l.gc(),l.gc(),l.gc()),2&r&&(l.Nb(2),l.Ac("formGroup",e.form),l.Nb(12),l.Ac("ngIf",e.imageSrc),l.Nb(6),l.Ac("ngModel",e.SubmitData.Name),l.Nb(1),l.Ac("ngIf",null==e.form.controls.name.errors?null:e.form.controls.name.errors.required),l.Nb(1),l.Ac("ngIf",e.form.controls.name.hasError("minlength")),l.Nb(2),l.Ac("ngModel",e.SubmitData.Surname),l.Nb(1),l.Ac("ngIf",null==e.form.controls.surname.errors?null:e.form.controls.surname.errors.required),l.Nb(1),l.Ac("ngIf",e.form.controls.surname.hasError("minlength")),l.Nb(2),l.Ac("ngModel",e.SubmitData.IDNum),l.Nb(1),l.Ac("ngIf",null==e.form.controls.id.errors?null:e.form.controls.id.errors.required),l.Nb(1),l.Ac("ngIf",e.form.controls.id.hasError("minlength")),l.Nb(2),l.Ac("ngModel",e.SubmitData.Adress),l.Nb(1),l.Ac("ngIf",null==e.form.controls.address.errors?null:e.form.controls.address.errors.required),l.Nb(1),l.Ac("ngIf",e.form.controls.address.hasError("minlength")),l.Nb(2),l.Ac("ngModel",e.SubmitData.Phone),l.Nb(1),l.Ac("ngIf",null==e.form.controls.number.errors?null:e.form.controls.number.errors.required),l.Nb(1),l.Ac("ngIf",e.form.controls.number.hasError("minlength")),l.Nb(2),l.Ac("ngModel",e.SubmitData.Email),l.Nb(1),l.Ac("ngIf",null==e.form.controls.email.errors?null:e.form.controls.email.errors.required),l.Nb(1),l.Ac("ngIf",e.form.controls.email.hasError("invalidEmail")),l.Nb(2),l.Ac("ngModel",e.SubmitData.Password),l.Nb(1),l.Ac("ngIf",null==e.form.controls.password.errors?null:e.form.controls.password.errors.required),l.Nb(1),l.Ac("ngIf",e.form.controls.password.hasError("minlength")),l.Nb(3),l.Ac("ngIf",null==e.form.controls.confirmPassword.errors?null:e.form.controls.confirmPassword.errors.required),l.Nb(1),l.Ac("ngIf",e.form.controls.confirmPassword.hasError("mismatchedPasswords")),l.Nb(1),l.Ac("ngIf",e.submit1&&e.submit2))},directives:[h.b,d.c,d.b,a.x,a.o,d.a,a.g,g.a,p.b,b.a,p.a,o.g,g.d,n.n,a.b,a.n,a.f,v.b,y.b,a.u,a.i,a.j,v.a],encapsulation:2}),T),F=t("pM2v"),j=[{path:"",component:z,pathMatch:"full"}],G=((U=function r(){_classCallCheck(this,r)}).\u0275mod=l.Zb({type:U}),U.\u0275inj=l.Yb({factory:function(r){return new(r||U)},imports:[[n.c,o.h.forChild(j),a.h,a.t,i.a,F.c]]}),U)}}]);
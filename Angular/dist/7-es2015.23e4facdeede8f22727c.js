(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"4BUI":function(t,e,r){var n=r("tZOz");t.exports=function(t){var e=t.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw"Illegal base64url string!"}try{return function(t){return decodeURIComponent(n(t).replace(/(.)/g,(function(t,e){var r=e.charCodeAt(0).toString(16).toUpperCase();return r.length<2&&(r="0"+r),"%"+r})))}(e)}catch(r){return n(e)}}},F4UR:function(t,e,r){"use strict";r.r(e),r.d(e,"routes",(function(){return k})),r.d(e,"LoginModule",(function(){return L}));var n=r("DVwZ"),o=r("4i9L"),a=r("P2P6"),c=r("PCNd"),i=r("VAss"),s=r("/RaO"),l=r("gdRx"),u=r("I2fu"),m=r("Is5F"),g=r("X7+G"),d=r("X6d8"),h=r("GpQZ"),f=r("08HT"),p=r("wzcP"),b=r("Cq4z"),w=r("zjsz");function v(t,e){1&t&&(u.hc(0,"mat-error"),u.Yc(1,"Email is required"),u.gc())}function x(t,e){1&t&&(u.hc(0,"mat-error"),u.Yc(1,"Invalid email address"),u.gc())}function I(t,e){1&t&&(u.hc(0,"mat-error"),u.Yc(1,"Password is required"),u.gc())}function y(t,e){1&t&&(u.hc(0,"mat-error"),u.Yc(1,"Password isn't long enough, minimum of 6 characters"),u.gc())}class S{}const k=[{path:"",component:(()=>{class t{constructor(t,e,r,n){this.appSettings=t,this.fb=e,this.router=r,this.httpserv=n,this.username="",this.password="",this.UserSubmit=new S,this.settings=this.appSettings.settings,this.form=this.fb.group({email:[null,a.v.compose([a.v.required,i.a])],password:[null,a.v.compose([a.v.required,a.v.minLength(6)])]})}onSubmit(t){this.form.valid&&this.router.navigate(["/"])}Login(){this.newPass=this.password,this.UserSubmit.User_Email=this.username,this.UserSubmit.User_Password=this.newPass,this.httpserv.post("http://35.178.156.37/api/User/Login",this.UserSubmit).subscribe(t=>{localStorage.setItem("jwtToken",t.Token);var e=l(t.Token);localStorage.setItem("currentUser",e.unique_name),localStorage.setItem("loggedIn","Yes"),alert(localStorage.getItem("jwtToken")),this.router.navigateByUrl("/farm")},t=>{alert("Login failed")})}ngAfterViewInit(){this.settings.loadingSpinner=!1}}return t.\u0275fac=function(e){return new(e||t)(u.bc(s.a),u.bc(a.c),u.bc(o.d),u.bc(m.b))},t.\u0275cmp=u.Vb({type:t,selectors:[["app-login"]],decls:24,vars:7,consts:[["fxLayout","row","fxLayoutAlign","center center",1,"h-100"],["fxFlex","80","fxFlex.gt-sm","30","fxFlex.sm","60",3,"formGroup","ngSubmit"],[1,"p-0","mat-elevation-z24","box"],["fxLayout","column","fxLayoutAlign","center center",1,"bg-primary","box-header"],["mat-fab","","type","button","color","accent",1,"mat-elevation-z12",3,"click"],["mat-button","","routerLink","/register"],["fxLayout","column","fxLayoutAlign","end center",1,"box-content"],["fxLayout","column","fxLayoutAlign","center center",1,"mat-elevation-z12","box-content-inner"],[1,"box-content-header"],[1,"w-100"],["matInput","","placeholder","Email","formControlName","email",3,"ngModel","ngModelChange"],[4,"ngIf"],["matInput","","type","password","placeholder","Password","formControlName","password",3,"ngModel","ngModelChange"],["mat-raised-button","","color","primary","type","submit",1,"mat-elevation-z12","box-button"]],template:function(t,e){1&t&&(u.hc(0,"mat-sidenav-container"),u.hc(1,"div",0),u.hc(2,"form",1),u.pc("ngSubmit",(function(t){return e.Login()})),u.hc(3,"mat-card",2),u.hc(4,"div",3),u.hc(5,"button",4),u.pc("click",(function(t){return e.onSubmit(e.form.value)})),u.hc(6,"mat-icon"),u.Yc(7,"exit_to_app"),u.gc(),u.gc(),u.hc(8,"a",5),u.Yc(9,"Don't have an account? Sign up now!"),u.gc(),u.gc(),u.hc(10,"mat-card-content",6),u.hc(11,"mat-card",7),u.hc(12,"span",8),u.Yc(13,"member login"),u.gc(),u.hc(14,"mat-form-field",9),u.hc(15,"input",10),u.pc("ngModelChange",(function(t){return e.username=t})),u.gc(),u.Wc(16,v,2,0,"mat-error",11),u.Wc(17,x,2,0,"mat-error",11),u.gc(),u.hc(18,"mat-form-field",9),u.hc(19,"input",12),u.pc("ngModelChange",(function(t){return e.password=t})),u.gc(),u.Wc(20,I,2,0,"mat-error",11),u.Wc(21,y,2,0,"mat-error",11),u.gc(),u.gc(),u.hc(22,"button",13),u.Yc(23,"SIGN IN"),u.gc(),u.gc(),u.gc(),u.gc(),u.gc(),u.gc()),2&t&&(u.Nb(2),u.Ac("formGroup",e.form),u.Nb(13),u.Ac("ngModel",e.username),u.Nb(1),u.Ac("ngIf",null==e.form.controls.email.errors?null:e.form.controls.email.errors.required),u.Nb(1),u.Ac("ngIf",e.form.controls.email.hasError("invalidEmail")),u.Nb(2),u.Ac("ngModel",e.password),u.Nb(1),u.Ac("ngIf",null==e.form.controls.password.errors?null:e.form.controls.password.errors.required),u.Nb(1),u.Ac("ngIf",e.form.controls.password.hasError("minlength")))},directives:[g.b,d.c,d.b,a.x,a.o,d.a,a.g,h.a,f.b,p.a,f.a,o.g,h.d,b.b,w.b,a.b,a.n,a.f,n.n,b.a],encapsulation:2}),t})(),pathMatch:"full"}];let L=(()=>{class t{}return t.\u0275mod=u.Zb({type:t}),t.\u0275inj=u.Yb({factory:function(e){return new(e||t)},imports:[[n.c,o.h.forChild(k),a.h,a.t,c.a]]}),t})()},gdRx:function(t,e,r){"use strict";var n=r("4BUI");function o(t){this.message=t}(o.prototype=new Error).name="InvalidTokenError",t.exports=function(t,e){if("string"!=typeof t)throw new o("Invalid token specified");var r=!0===(e=e||{}).header?0:1;try{return JSON.parse(n(t.split(".")[r]))}catch(a){throw new o("Invalid token specified: "+a.message)}},t.exports.InvalidTokenError=o},tZOz:function(t,e){function r(t){this.message=t}(r.prototype=new Error).name="InvalidCharacterError",t.exports="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(t){var e=String(t).replace(/=+$/,"");if(e.length%4==1)throw new r("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,o,a=0,c=0,i="";o=e.charAt(c++);~o&&(n=a%4?64*n+o:o,a++%4)?i+=String.fromCharCode(255&n>>(-2*a&6)):0)o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return i}}}]);
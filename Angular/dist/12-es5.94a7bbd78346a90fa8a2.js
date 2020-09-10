function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{yqEH:function(e,t,r){"use strict";r.r(t),r.d(t,"routes",(function(){return T})),r.d(t,"DynamicMenuModule",(function(){return F}));var o,n=r("DVwZ"),c=r("4i9L"),a=r("P2P6"),i=r("PCNd"),l=r("9M2L"),s=r("8fVf"),u=r("ySTs"),m=r("I2fu"),f=((o=function(){function e(t,r,o){_classCallCheck(this,e),this.componentFactoryResolver=t,this.applicationRef=r,this.injector=o}return _createClass(e,[{key:"addNewMenuItem",value:function(e,t,r){var o=new u.a(t[t.length-1].id+1,r.title,r.routerLink,r.href,r.icon,r.target,r.hasSubMenu,parseInt(r.parentId));t.push(o);var n=t.filter((function(e){return e.id==o.parentId}))[0];n&&(n.hasSubMenu=!0);var c=this.componentFactoryResolver.resolveComponentFactory(e).create(this.injector);this.applicationRef.attachView(c.hostView);var a=c.instance;a.menuItems=t,a.menuParentId=0;var i=c.hostView.rootNodes[0],l=document.getElementById("vertical-menu");l.replaceChild(i,l.children[0])}}]),e}()).\u0275fac=function(e){return new(e||o)(m.lc(m.l),m.lc(m.g),m.lc(m.w))},o.\u0275prov=m.Xb({token:o,factory:o.\u0275fac}),o),h=r("/RaO"),b=r("XuPb"),p=r("rIv2");Object(p.o)("blockTransition",[Object(p.n)(":enter",[Object(p.i)(".block",Object(p.m)({opacity:0}),{optional:!0}),Object(p.i)(".block",Object(p.k)(150,[Object(p.m)({transform:"translateY(100px)"}),Object(p.e)("1s cubic-bezier(.75,-0.48,.26,1.52)",Object(p.m)({transform:"translateY(0px)",opacity:1}))]),{optional:!0})]),Object(p.n)(":leave",[Object(p.i)(".block",Object(p.k)(100,[Object(p.m)({transform:"translateY(0px)",opacity:1}),Object(p.e)("1s cubic-bezier(.75,-0.48,.26,1.52)",Object(p.m)({transform:"translateY(100px)",opacity:0}))]),{optional:!0})])]);var d=Object(p.o)("listTransition",[Object(p.n)(":enter",[Object(p.i)(".list",Object(p.m)({opacity:0}),{optional:!0}),Object(p.i)(".list",Object(p.k)("300ms",[Object(p.e)("1s ease-in",Object(p.h)([Object(p.m)({opacity:0,transform:"translateY(-75px)",offset:0}),Object(p.m)({opacity:.5,transform:"translateY(35px)",offset:.3}),Object(p.m)({opacity:1,transform:"translateY(0)",offset:1})]))]),{optional:!0})]),Object(p.n)(":leave",[Object(p.i)(".list",Object(p.k)("300ms",[Object(p.e)("1s ease-in",Object(p.h)([Object(p.m)({opacity:1,transform:"translateY(0)",offset:0}),Object(p.m)({opacity:.5,transform:"translateY(35px)",offset:.3}),Object(p.m)({opacity:0,transform:"translateY(-75px)",offset:1})]))]),{optional:!0})])]),g=r("L/ns"),v=r("X6d8"),y=r("GpQZ"),k=r("Cq4z"),O=r("zjsz"),j=r("b5vR"),I=r("9mPs"),w=r("23B3"),C=r("czPY"),L=r("yXbL"),N=r("08HT"),Y=r("wzcP");function x(e,t){1&e&&(m.hc(0,"mat-error"),m.Yc(1,"Menu title is required"),m.gc())}function M(e,t){1&e&&(m.hc(0,"mat-error"),m.Yc(1,"Menu title isn't long enough, minimum of 3 characters"),m.gc())}function V(e,t){if(1&e&&(m.hc(0,"mat-option",19),m.hc(1,"mat-icon"),m.Yc(2),m.gc(),m.gc()),2&e){var r=t.$implicit;m.Ac("value",r),m.Nb(2),m.Zc(r)}}function S(e,t){1&e&&(m.hc(0,"mat-error"),m.Yc(1,"Routerlink or href is required"),m.gc())}function A(e,t){1&e&&(m.hc(0,"mat-error"),m.Yc(1,"Href or routerlink is required"),m.gc())}function P(e,t){if(1&e&&(m.hc(0,"mat-option",19),m.Yc(1),m.gc()),2&e){var r=t.$implicit;m.Ac("value",r.id),m.Nb(1),m.ad(" ",r.title," ")}}var _,q,T=[{path:"",component:(_=function(){function e(t,r,o,n,c){_classCallCheck(this,e),this.appSettings=t,this.formBuilder=r,this.snackBar=o,this.menuService=n,this.dynamicMenuService=c,this.icons=["home","person","card_travel","delete","event","favorite","help"],this.settings=this.appSettings.settings,this.menuItems=this.menuService.getVerticalMenuItems()}return _createClass(e,[{key:"ngOnInit",value:function(){this.form=this.formBuilder.group({title:["",a.v.compose([a.v.required,a.v.minLength(3)])],icon:null,routerLink:["",a.v.required],href:["",a.v.required],target:null,hasSubMenu:!1,parentId:0})}},{key:"ngAfterViewInit",value:function(){var e=this;this.form.valueChanges.pipe(Object(l.a)(500)).subscribe((function(t){t.routerLink&&""!=t.routerLink?(e.form.controls.href.setValue(null),e.form.controls.href.disable(),e.form.controls.href.clearValidators(),e.form.controls.target.setValue(null),e.form.controls.target.disable()):(e.form.controls.href.enable(),e.form.controls.href.setValidators([a.v.required]),e.form.controls.target.enable()),e.form.controls.href.updateValueAndValidity(),t.href&&""!=t.href?(e.form.controls.routerLink.setValue(null),e.form.controls.routerLink.disable(),e.form.controls.routerLink.clearValidators(),e.form.controls.hasSubMenu.setValue(!1),e.form.controls.hasSubMenu.disable()):(e.form.controls.routerLink.enable(),e.form.controls.routerLink.setValidators([a.v.required]),e.form.controls.hasSubMenu.enable()),e.form.controls.routerLink.updateValueAndValidity()}))}},{key:"onSubmit",value:function(e){this.form.valid&&(this.dynamicMenuService.addNewMenuItem(b.a,this.menuItems,e),this.snackBar.open("New menu item added successfully!",null,{duration:2e3}),this.form.reset({hasSubMenu:!1,parentId:0}))}}]),e}(),_.\u0275fac=function(e){return new(e||_)(m.bc(h.a),m.bc(a.c),m.bc(g.a),m.bc(s.a),m.bc(f))},_.\u0275cmp=m.Vb({type:_,selectors:[["app-dynamic-menu"]],hostVars:1,hostBindings:function(e,t){2&e&&m.cd("@listTransition",void 0)},features:[m.Mb([f,s.a])],decls:33,vars:8,consts:[["fxLayout","row wrap","fxLayoutAlign","center"],["fxFlex","100","fxFlex.gt-sm","50","fxFlex.sm","60",1,"flex-p"],[1,"list"],[3,"formGroup","ngSubmit"],[1,"w-100"],["matInput","","placeholder","Title","formControlName","title"],[4,"ngIf"],["placeholder","Icon","formControlName","icon"],[3,"value",4,"ngFor","ngForOf"],["matInput","","placeholder","RouterLink","formControlName","routerLink","matTooltip","e.g. /dashboard","matTooltipPosition","after"],["formControlName","hasSubMenu"],["matInput","","placeholder","Href","formControlName","href","matTooltip","e.g. http://themeseason.com","matTooltipPosition","after"],["formControlName","target"],["value","_blank"],["value","_self",1,"mx-1"],["placeholder","Parent menu","formControlName","parentId"],["value","0"],["fxLayout","row","fxLayoutAlign","center"],["mat-raised-button","","color","primary","type","submit",3,"disabled"],[3,"value"]],template:function(e,t){1&e&&(m.hc(0,"div",0),m.hc(1,"div",1),m.hc(2,"mat-card",2),m.hc(3,"mat-card-content"),m.hc(4,"form",3),m.pc("ngSubmit",(function(e){return t.onSubmit(t.form.value)})),m.hc(5,"mat-form-field",4),m.cc(6,"input",5),m.Wc(7,x,2,0,"mat-error",6),m.Wc(8,M,2,0,"mat-error",6),m.gc(),m.hc(9,"mat-form-field",4),m.hc(10,"mat-select",7),m.Wc(11,V,3,2,"mat-option",8),m.gc(),m.gc(),m.hc(12,"mat-form-field",4),m.cc(13,"input",9),m.Wc(14,S,2,0,"mat-error",6),m.gc(),m.hc(15,"mat-checkbox",10),m.Yc(16,"Has sub menu"),m.gc(),m.hc(17,"mat-form-field",4),m.cc(18,"input",11),m.Wc(19,A,2,0,"mat-error",6),m.gc(),m.hc(20,"mat-radio-group",12),m.hc(21,"mat-radio-button",13),m.Yc(22,"_blank"),m.gc(),m.hc(23,"mat-radio-button",14),m.Yc(24,"_self"),m.gc(),m.gc(),m.hc(25,"mat-form-field",4),m.hc(26,"mat-select",15),m.hc(27,"mat-option",16),m.Yc(28,"-- Select Parent Menu --"),m.gc(),m.Wc(29,P,2,2,"mat-option",8),m.gc(),m.gc(),m.hc(30,"div",17),m.hc(31,"button",18),m.Yc(32,"Add New Menu Item"),m.gc(),m.gc(),m.gc(),m.gc(),m.gc(),m.gc(),m.gc()),2&e&&(m.Nb(4),m.Ac("formGroup",t.form),m.Nb(3),m.Ac("ngIf",null==t.form.controls.title.errors?null:t.form.controls.title.errors.required),m.Nb(1),m.Ac("ngIf",t.form.controls.title.hasError("minlength")),m.Nb(3),m.Ac("ngForOf",t.icons),m.Nb(3),m.Ac("ngIf",null==t.form.controls.routerLink.errors?null:t.form.controls.routerLink.errors.required),m.Nb(5),m.Ac("ngIf",null==t.form.controls.href.errors?null:t.form.controls.href.errors.required),m.Nb(10),m.Ac("ngForOf",t.menuItems),m.Nb(2),m.Ac("disabled",!t.form.valid))},directives:[v.c,v.b,v.a,y.a,y.d,a.x,a.o,a.g,k.b,O.b,a.b,a.n,a.f,n.n,j.a,n.m,I.a,w.a,C.b,C.a,L.n,N.b,k.a,Y.a],encapsulation:2,data:{animation:[d]}}),_),pathMatch:"full"}],F=((q=function e(){_classCallCheck(this,e)}).\u0275mod=m.Zb({type:q}),q.\u0275inj=m.Yb({factory:function(e){return new(e||q)},imports:[[n.c,a.h,a.t,c.h.forChild(T),i.a]]}),q)}}]);
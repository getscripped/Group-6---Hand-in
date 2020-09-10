function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var c=0;c<t.length;c++){var e=t[c];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function _createClass(n,t,c){return t&&_defineProperties(n.prototype,t),c&&_defineProperties(n,c),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{CXjK:function(n,t,c){"use strict";c.r(t),c.d(t,"routes",(function(){return d})),c.d(t,"LandingModule",(function(){return u}));var e,i,a=c("DVwZ"),o=c("4i9L"),g=c("PCNd"),r=c("/RaO"),s=c("I2fu"),l=c("X6d8"),h=c("08HT"),d=[{path:"",component:(e=function(){function n(t){_classCallCheck(this,n),this.appSettings=t,this.settings=this.appSettings.settings}return _createClass(n,[{key:"ngOnInit",value:function(){this.settings.rtl=!1}},{key:"ngAfterViewInit",value:function(){this.settings.loadingSpinner=!1}},{key:"scrollToDemos",value:function(){setTimeout((function(){window.scrollTo(0,520)}))}},{key:"changeLayout",value:function(n,t,c){this.settings.menu=n,this.settings.menuType=t,this.settings.rtl=c,this.settings.theme="indigo-light"}},{key:"changeTheme",value:function(n){this.settings.theme=n}}]),n}(),e.\u0275fac=function(n){return new(n||e)(s.bc(r.a))},e.\u0275cmp=s.Vb({type:e,selectors:[["app-landing"]],decls:89,vars:0,consts:[["fxLayout","column","fxLayoutAlign","center center",1,"landing-header"],[1,"logo"],[1,"intro-text"],[1,"desc","m-0"],[1,"desc"],["fxLayout","row","fxLayoutAlign","center center"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","accent","href","https://themeforest.net/item/gradus-angular-5-material-design-admin-template/21241729","target","blank"],[1,"container"],[1,"muted-text"],[1,"muted-text","desc"],["fxLayout","row wrap",1,"py-1"],["fxFlex","100","fxFlex.gt-sm","50",1,"demo"],[1,"text"],["routerLink","/",1,"link",3,"click"],["src","assets/img/landing/vertical-default.jpg"],["src","assets/img/landing/horizontal-default.jpg"],["src","assets/img/landing/vertical-compact.jpg"],["src","assets/img/landing/horizontal-compact.jpg"],["src","assets/img/landing/vertical-mini.jpg"],["src","assets/img/landing/horizontal-mini.jpg"],["src","assets/img/landing/vertical-rtl.jpg"],["src","assets/img/landing/horizontal-rtl.jpg"],["fxFlex","100","fxFlex.gt-sm","33.3",1,"demo"],["src","assets/img/landing/teal-light.jpg"],["src","assets/img/landing/red-light.jpg"],["src","assets/img/landing/blue-dark.jpg"],["src","assets/img/landing/green-dark.jpg"],["src","assets/img/landing/pink-dark.jpg"],[1,"bg-primary","w-100"],["fxLayout.xs","column","fxLayout.gt-xs","row wrap","fxLayoutAlign","space-between center",1,"landing-footer"],["mat-button","","href","https://themeforest.net/user/theme_season/portfolio","target","blank"]],template:function(n,t){1&n&&(s.hc(0,"div",0),s.hc(1,"p",1),s.Yc(2,"GRADUS"),s.gc(),s.hc(3,"p",2),s.Yc(4,"Angular 8 Material Design Admin Template"),s.gc(),s.hc(5,"p",3),s.Yc(6,"Start creating your app with GRADUS template"),s.gc(),s.hc(7,"p",4),s.Yc(8," 8 layouts, 6 color styles, 35+ pages"),s.gc(),s.hc(9,"div",5),s.hc(10,"button",6),s.pc("click",(function(n){return t.scrollToDemos()})),s.Yc(11,"View demos"),s.gc(),s.hc(12,"a",7),s.Yc(13,"Purchase now"),s.gc(),s.gc(),s.gc(),s.hc(14,"div",8),s.hc(15,"h2",9),s.Yc(16,"Check out our demo styles"),s.gc(),s.hc(17,"p",10),s.Yc(18,"Fully responsive, organized folder structure, clean & customizable code, easy to use and much more..."),s.gc(),s.hc(19,"div",11),s.hc(20,"div",12),s.hc(21,"p",13),s.Yc(22,"Vertical default menu"),s.gc(),s.hc(23,"a",14),s.pc("click",(function(n){return t.changeLayout("vertical","default",!1)})),s.cc(24,"img",15),s.gc(),s.gc(),s.hc(25,"div",12),s.hc(26,"p",13),s.Yc(27,"Horizontal default menu"),s.gc(),s.hc(28,"a",14),s.pc("click",(function(n){return t.changeLayout("horizontal","default",!1)})),s.cc(29,"img",16),s.gc(),s.gc(),s.hc(30,"div",12),s.hc(31,"p",13),s.Yc(32,"Vertical compact menu"),s.gc(),s.hc(33,"a",14),s.pc("click",(function(n){return t.changeLayout("vertical","compact",!1)})),s.cc(34,"img",17),s.gc(),s.gc(),s.hc(35,"div",12),s.hc(36,"p",13),s.Yc(37,"Horizontal compact menu"),s.gc(),s.hc(38,"a",14),s.pc("click",(function(n){return t.changeLayout("horizontal","compact",!1)})),s.cc(39,"img",18),s.gc(),s.gc(),s.hc(40,"div",12),s.hc(41,"p",13),s.Yc(42,"Vertical mini menu"),s.gc(),s.hc(43,"a",14),s.pc("click",(function(n){return t.changeLayout("vertical","mini",!1)})),s.cc(44,"img",19),s.gc(),s.gc(),s.hc(45,"div",12),s.hc(46,"p",13),s.Yc(47,"Horizontal mini menu"),s.gc(),s.hc(48,"a",14),s.pc("click",(function(n){return t.changeLayout("horizontal","mini",!1)})),s.cc(49,"img",20),s.gc(),s.gc(),s.hc(50,"div",12),s.hc(51,"p",13),s.Yc(52,"Vertical menu RTL"),s.gc(),s.hc(53,"a",14),s.pc("click",(function(n){return t.changeLayout("vertical","default",!0)})),s.cc(54,"img",21),s.gc(),s.gc(),s.hc(55,"div",12),s.hc(56,"p",13),s.Yc(57,"Horizontal menu RTL"),s.gc(),s.hc(58,"a",14),s.pc("click",(function(n){return t.changeLayout("horizontal","default",!0)})),s.cc(59,"img",22),s.gc(),s.gc(),s.gc(),s.hc(60,"h2",9),s.Yc(61,"Skins"),s.gc(),s.hc(62,"div",11),s.hc(63,"div",23),s.hc(64,"a",14),s.pc("click",(function(n){return t.changeTheme("indigo-light")})),s.cc(65,"img",15),s.gc(),s.gc(),s.hc(66,"div",23),s.hc(67,"a",14),s.pc("click",(function(n){return t.changeTheme("teal-light")})),s.cc(68,"img",24),s.gc(),s.gc(),s.hc(69,"div",23),s.hc(70,"a",14),s.pc("click",(function(n){return t.changeTheme("red-light")})),s.cc(71,"img",25),s.gc(),s.gc(),s.hc(72,"div",23),s.hc(73,"a",14),s.pc("click",(function(n){return t.changeTheme("blue-dark")})),s.cc(74,"img",26),s.gc(),s.gc(),s.hc(75,"div",23),s.hc(76,"a",14),s.pc("click",(function(n){return t.changeTheme("green-dark")})),s.cc(77,"img",27),s.gc(),s.gc(),s.hc(78,"div",23),s.hc(79,"a",14),s.pc("click",(function(n){return t.changeTheme("pink-dark")})),s.cc(80,"img",28),s.gc(),s.gc(),s.gc(),s.gc(),s.hc(81,"div",29),s.hc(82,"div",30),s.hc(83,"span"),s.Yc(84,"Copyright \xa92018 All Rights Reserved"),s.gc(),s.hc(85,"span"),s.Yc(86,"made by "),s.hc(87,"a",31),s.Yc(88,"ThemeSeason"),s.gc(),s.gc(),s.gc(),s.gc())},directives:[l.c,l.b,h.b,h.a,l.a,o.g],styles:['.landing-header[_ngcontent-%COMP%]{position:relative;color:#fff;height:520px;text-align:center}.landing-header[_ngcontent-%COMP%]:before{content:"";display:block;position:absolute;top:0;left:0;right:0;height:520px;background-color:#242424;background-image:url(header.24a2322d785d0b88208e.jpg);background-repeat:no-repeat;background-size:cover;background-position-y:center;z-index:-1}.landing-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:1rem}.landing-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{font-size:48px}.landing-header[_ngcontent-%COMP%]   .intro-text[_ngcontent-%COMP%]{font-size:36px}.landing-header[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{font-size:16px;font-weight:300;letter-spacing:.03rem}.landing-header[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%]{margin:0 14px}.container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:16px 32px;text-align:center}.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2rem}.container[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{font-size:1.25rem}.container[_ngcontent-%COMP%]   .demo[_ngcontent-%COMP%]{padding:16px}.container[_ngcontent-%COMP%]   .demo[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:16px;text-transform:uppercase;margin-bottom:1rem}.container[_ngcontent-%COMP%]   .demo[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{display:block}.container[_ngcontent-%COMP%]   .demo[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;box-shadow:0 1px 5px 1px #999;transition:.2s}.container[_ngcontent-%COMP%]   .demo[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{box-shadow:0 1px 5px 5px #999}.landing-footer[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:16px}@media (max-width:767px){.landing-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{font-size:36px}.landing-header[_ngcontent-%COMP%]   .intro-text[_ngcontent-%COMP%]{font-size:24px}}']}),e),pathMatch:"full"}],u=((i=function n(){_classCallCheck(this,n)}).\u0275mod=s.Zb({type:i}),i.\u0275inj=s.Yb({factory:function(n){return new(n||i)},imports:[[a.c,o.h.forChild(d),g.a]]}),i)}}]);
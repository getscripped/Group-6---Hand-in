(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{EdD2:function(t,e,c){"use strict";c.r(e),c.d(e,"routes",(function(){return q})),c.d(e,"ChatModule",(function(){return E}));var n=c("ofXK"),a=c("tyNb"),i=c("3Pt+"),s=c("bFKe"),o=c("PCNd"),r=c("/RaO");class h{constructor(t,e,c,n,a,i){this.image=t,this.author=e,this.authorStatus=c,this.text=n,this.date=a,this.my=i}}var g=c("fXoL");let l=new Date,u=l.getDate(),m=l.getMonth(),p=l.getFullYear(),f=l.getHours(),d=l.getMinutes(),b=[new h("assets/img/profile/ashley.jpg","Ashley Ahlberg","Online","Great, then I'll definitely buy this theme. Thanks!",new Date(p,m,u-2,f,d),!1),new h("assets/img/profile/bruno.jpg","Bruno Vespa","Do not disturb","Great, then I'll definitely buy this theme. Thanks!",new Date(p,m,u-2,f,d),!1),new h("assets/img/profile/julia.jpg","Julia Aniston","Away","Great, then I'll definitely buy this theme. Thanks!",new Date(p,m,u-2,f,d),!1),new h("assets/img/profile/adam.jpg","Adam Sandler","Online","Great, then I'll definitely buy this theme. Thanks!",new Date(p,m,u-2,f,d),!1),new h("assets/img/profile/tereza.jpg","Tereza Stiles","Offline","Great, then I'll definitely buy this theme. Thanks!",new Date(p,m,u-2,f,d),!1),new h("assets/img/profile/michael.jpg","Michael Blair","Online","Great, then I'll definitely buy this theme. Thanks!",new Date(p,m,u-2,f,d),!1)],w=[new h("assets/img/profile/ashley.jpg","Ashley Ahlberg","Online","Hi, I'm looking for admin template with angular material 2 design.  What do you think about Gradus Admin Template?",new Date(p,m,u-2,f,d+3),!1),new h("assets/img/users/user.jpg","Emilio Verdines","Online","Hi, Gradus is a fully compatible with angular material 2, responsive, organized folder structure, clean & customizable code, easy to use and much more...",new Date(p,m,u-2,f,d+2),!0)],y=(()=>{class t{getChats(){return b}getTalk(){return w}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=g.Xb({token:t,factory:t.\u0275fac}),t})();var M=c("XiUz"),v=c("Wp6s"),x=c("XhcP"),C=c("/t3+"),O=c("MutI"),k=c("bTqV"),A=c("STbY"),_=c("NFeN"),X=c("f0Cb"),N=c("kmnG"),L=c("qFsG"),P=c("FKr1"),S=c("znSr");const T=["sidenav"];function I(t,e){1&t&&(g.hc(0,"mat-icon",39),g.Xc(1,"check_circle"),g.gc())}function z(t,e){1&t&&(g.hc(0,"mat-icon",39),g.Xc(1,"highlight_off"),g.gc())}function D(t,e){1&t&&(g.hc(0,"mat-icon",39),g.Xc(1,"schedule"),g.gc())}function F(t,e){1&t&&(g.hc(0,"mat-icon",39),g.Xc(1,"not_interested"),g.gc())}function V(t,e){if(1&t){const t=g.ic();g.hc(0,"mat-list-item",33),g.pc("click",(function(c){g.Oc(t);const n=e.$implicit;return g.tc().getChat(n)})),g.cc(1,"img",7),g.hc(2,"h6",34),g.Xc(3),g.gc(),g.hc(4,"p",35),g.hc(5,"span",36),g.Vc(6,I,2,0,"mat-icon",37),g.Vc(7,z,2,0,"mat-icon",37),g.Vc(8,D,2,0,"mat-icon",37),g.Vc(9,F,2,0,"mat-icon",37),g.gc(),g.hc(10,"span",38),g.Xc(11),g.gc(),g.gc(),g.gc()}if(2&t){const t=e.$implicit;g.Nb(1),g.Ac("src",t.image,g.Qc),g.Nb(2),g.Zc(" ",t.author," "),g.Nb(2),g.Ac("ngSwitch",t.authorStatus),g.Nb(1),g.Ac("ngSwitchCase","Online"),g.Nb(1),g.Ac("ngSwitchCase","Offline"),g.Nb(1),g.Ac("ngSwitchCase","Away"),g.Nb(1),g.Ac("ngSwitchCase","Do not disturb"),g.Nb(2),g.Yc(t.authorStatus)}}function j(t,e){if(1&t&&(g.hc(0,"mat-list",6),g.hc(1,"mat-list-item"),g.cc(2,"img",7),g.gc(),g.gc()),2&t){const t=g.tc();g.Nb(2),g.Ac("src",t.currentChat.image,g.Qc)}}function G(t,e){if(1&t&&(g.hc(0,"span",40),g.Xc(1),g.gc()),2&t){const t=g.tc();g.Nb(1),g.Yc(t.currentChat.author)}}function H(t,e){if(1&t&&(g.hc(0,"mat-list-item",42),g.cc(1,"img",7),g.hc(2,"p",43),g.hc(3,"span",44),g.Xc(4),g.gc(),g.gc(),g.hc(5,"p",45),g.hc(6,"small"),g.Xc(7),g.uc(8,"date"),g.gc(),g.gc(),g.gc()),2&t){const t=e.$implicit;g.Nb(1),g.Ac("src",t.image,g.Qc),g.Nb(2),g.Ac("ngClass",t.my?"bg-primary":"bg-accent"),g.Nb(1),g.Yc(t.text),g.Nb(3),g.Yc(g.wc(8,4,t.date,"dd MMMM, yyyy 'at' HH:mm"))}}function W(t,e){if(1&t&&(g.hc(0,"mat-list",6),g.Vc(1,H,9,7,"mat-list-item",41),g.gc()),2&t){const t=g.tc();g.Nb(1),g.Ac("ngForOf",t.talks)}}function Y(t,e){1&t&&(g.hc(0,"div",46),g.hc(1,"mat-icon"),g.Xc(2,"chat"),g.gc(),g.hc(3,"p"),g.Xc(4,"Select a interlocutor for talk"),g.gc(),g.gc())}const q=[{path:"",component:(()=>{class t{constructor(t,e){this.appSettings=t,this.chatService=e,this.userImage="assets/img/users/user.jpg",this.sidenavOpen=!0,this.settings=this.appSettings.settings}ngOnInit(){this.chats=this.chatService.getChats(),window.innerWidth<=768&&(this.sidenavOpen=!1)}onWindowResize(){this.sidenavOpen=!(window.innerWidth<=768)}getChat(t){this.talks&&(this.talks.length=2),this.talks=this.chatService.getTalk(),this.talks.push(t),this.currentChat=t,this.talks.forEach(e=>{e.my||(e.image=t.image)}),window.innerWidth<=768&&this.sidenav.close()}sendMessage(t){if((1===t.which||13===t.which)&&""!=this.newMessage.trim()&&this.talks){this.talks.push(new h("assets/img/users/user.jpg","Emilio Verdines","online",this.newMessage,new Date,!0)),this.newMessage="";let t=document.querySelector(".chat-content");t&&setTimeout(()=>{var e=t.querySelectorAll(".mat-list-item");t.scrollTop=t.scrollHeight+e[e.length-1].clientHeight})}}logout(){localStorage.removeItem("jwtToken")}ngOnDestroy(){this.talks&&(this.talks.length=2)}}return t.\u0275fac=function(e){return new(e||t)(g.bc(r.a),g.bc(y))},t.\u0275cmp=g.Vb({type:t,selectors:[["app-chat"]],viewQuery:function(t,e){var c;1&t&&g.cd(T,!0),2&t&&g.Kc(c=g.qc())&&(e.sidenav=c.first)},hostBindings:function(t,e){1&t&&g.pc("resize",(function(t){return e.onWindowResize()}),!1,g.Nc)},features:[g.Mb([y])],decls:79,vars:11,consts:[["fxLayout","row wrap"],["fxFlex","100",1,"flex-p"],[1,"p-0","chat"],[1,"chat-sidenav","mat-elevation-z1",3,"opened","mode"],["sidenav",""],["color","primary","fxLayout","row","fxLayoutAlign","space-between center",1,"p-0"],[1,"p-0"],["matListAvatar","",3,"src"],["mat-icon-button","",3,"matMenuTriggerFor"],["userMenuTrigger","matMenuTrigger"],["xPosition","before","overlapTrigger","true"],["userMenu","matMenu"],[3,"mouseleave"],["mat-menu-item",""],["mat-menu-item","","routerLink","/"],["perfectScrollbar","",1,"p-0","chat-sidenav-list"],[3,"click",4,"ngFor","ngForOf"],["color","primary","fxLayout","row","fxLayoutAlign","space-between center"],["fxLayout","row","fxLayoutAlign","start center"],["mat-icon-button","",3,"click"],["class","p-0",4,"ngIf"],["class","author-name",4,"ngIf"],["personMenuTrigger","matMenuTrigger"],["personMenu","matMenu"],["perfectScrollbar","",1,"chat-content"],["fxLayout","column","fxLayoutAlign","center center","class","h-100 empty",4,"ngIf"],[1,"chat-actions"],["fxLayout","row","fxLayoutAlign","space-between center"],[1,"w-100"],["matInput","","placeholder","Enter your text...",3,"ngModel","keyup","ngModelChange"],["fxLayout","row","fxLayoutAlign","scenter center"],["mat-icon-button","","type","button"],["mat-mini-fab","","color","primary","type","button",3,"click"],[3,"click"],["matLine",""],["matLine","","fxLayout","row","fxLayoutAlign","none center",1,"muted-text"],[3,"ngSwitch"],["class","chat-status-icon",4,"ngSwitchCase"],[1,"author-status"],[1,"chat-status-icon"],[1,"author-name"],["class","talk-item",4,"ngFor","ngForOf"],[1,"talk-item"],["matLine","",1,"message"],[3,"ngClass"],["matLine","",1,"message-date"],["fxLayout","column","fxLayoutAlign","center center",1,"h-100","empty"]],template:function(t,e){if(1&t){const t=g.ic();g.hc(0,"div",0),g.hc(1,"div",1),g.hc(2,"mat-card",2),g.hc(3,"mat-sidenav-container"),g.hc(4,"mat-sidenav",3,4),g.hc(6,"mat-toolbar",5),g.hc(7,"mat-list",6),g.hc(8,"mat-list-item"),g.cc(9,"img",7),g.gc(),g.gc(),g.hc(10,"button",8,9),g.hc(12,"mat-icon"),g.Xc(13,"more_vert"),g.gc(),g.gc(),g.gc(),g.hc(14,"mat-menu",10,11),g.hc(16,"span",12),g.pc("mouseleave",(function(e){return g.Oc(t),g.Lc(11).closeMenu()})),g.hc(17,"button",13),g.hc(18,"mat-icon"),g.Xc(19,"account_circle"),g.gc(),g.hc(20,"span"),g.Xc(21,"Profile"),g.gc(),g.gc(),g.hc(22,"button",13),g.hc(23,"mat-icon"),g.Xc(24,"settings"),g.gc(),g.hc(25,"span"),g.Xc(26,"Settings"),g.gc(),g.gc(),g.hc(27,"a",14),g.hc(28,"mat-icon"),g.Xc(29,"power_settings_new"),g.gc(),g.hc(30,"span"),g.Xc(31,"Exit chat"),g.gc(),g.gc(),g.gc(),g.gc(),g.hc(32,"mat-nav-list",15),g.Vc(33,V,12,8,"mat-list-item",16),g.gc(),g.gc(),g.hc(34,"div"),g.hc(35,"mat-toolbar",17),g.hc(36,"div",18),g.hc(37,"button",19),g.pc("click",(function(e){return g.Oc(t),g.Lc(5).toggle()})),g.hc(38,"mat-icon"),g.Xc(39,"list"),g.gc(),g.gc(),g.Vc(40,j,3,1,"mat-list",20),g.Vc(41,G,2,1,"span",21),g.gc(),g.hc(42,"button",8,22),g.hc(44,"mat-icon"),g.Xc(45,"more_vert"),g.gc(),g.gc(),g.gc(),g.hc(46,"mat-menu",10,23),g.hc(48,"span",12),g.pc("mouseleave",(function(e){return g.Oc(t),g.Lc(43).closeMenu()})),g.hc(49,"button",13),g.hc(50,"mat-icon"),g.Xc(51,"account_circle"),g.gc(),g.hc(52,"span"),g.Xc(53,"Contact info"),g.gc(),g.gc(),g.hc(54,"button",13),g.hc(55,"mat-icon"),g.Xc(56,"volume_mute"),g.gc(),g.hc(57,"span"),g.Xc(58,"Mute"),g.gc(),g.gc(),g.hc(59,"button",13),g.hc(60,"mat-icon"),g.Xc(61,"delete_forever"),g.gc(),g.hc(62,"span"),g.Xc(63,"Clear chat"),g.gc(),g.gc(),g.gc(),g.gc(),g.hc(64,"div",24),g.Vc(65,W,2,1,"mat-list",20),g.Vc(66,Y,5,0,"div",25),g.gc(),g.cc(67,"mat-divider"),g.hc(68,"mat-card",26),g.hc(69,"div",27),g.hc(70,"mat-form-field",28),g.hc(71,"input",29),g.pc("keyup",(function(t){return e.sendMessage(t)}))("ngModelChange",(function(t){return e.newMessage=t})),g.gc(),g.gc(),g.hc(72,"div",30),g.hc(73,"button",31),g.hc(74,"mat-icon"),g.Xc(75,"attach_file"),g.gc(),g.gc(),g.hc(76,"button",32),g.pc("click",(function(t){return e.sendMessage(t)})),g.hc(77,"mat-icon"),g.Xc(78,"send"),g.gc(),g.gc(),g.gc(),g.gc(),g.gc(),g.gc(),g.gc(),g.gc(),g.gc(),g.gc()}if(2&t){const t=g.Lc(15),c=g.Lc(47);g.Nb(4),g.Ac("opened",e.sidenavOpen)("mode",e.sidenavOpen?"side":"over"),g.Nb(5),g.Ac("src",e.userImage,g.Qc),g.Nb(1),g.Ac("matMenuTriggerFor",t),g.Nb(23),g.Ac("ngForOf",e.chats),g.Nb(7),g.Ac("ngIf",e.currentChat),g.Nb(1),g.Ac("ngIf",e.currentChat),g.Nb(1),g.Ac("matMenuTriggerFor",c),g.Nb(23),g.Ac("ngIf",e.talks),g.Nb(1),g.Ac("ngIf",!e.talks),g.Nb(5),g.Ac("ngModel",e.newMessage)}},directives:[M.c,M.a,v.a,x.b,x.a,C.a,M.b,O.a,O.d,O.b,k.b,A.c,_.a,A.d,A.a,a.g,O.g,s.c,n.m,n.n,X.a,N.b,L.b,i.b,i.o,i.r,P.j,n.p,n.q,n.l,S.a],pipes:[n.e],styles:[".chat[_ngcontent-%COMP%]   .chat-actions[_ngcontent-%COMP%]{padding:12px}.chat[_ngcontent-%COMP%]   .author-name[_ngcontent-%COMP%]{font-size:16px;font-weight:400}.chat[_ngcontent-%COMP%]   .talk-item[_ngcontent-%COMP%]{padding:6px 0;height:100%}.chat[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{white-space:unset;text-overflow:unset}.chat[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:6px 10px;border-radius:4px;display:inline-block;font-size:14px}.chat[_ngcontent-%COMP%]   .message-date[_ngcontent-%COMP%]{opacity:.8}.chat[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:220px;height:220px;width:220px;opacity:.4}.chat[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;opacity:.8}.chat-status-icon[_ngcontent-%COMP%]{font-size:14px;height:14px;width:14px;line-height:22px;margin-right:6px}.author-status[_ngcontent-%COMP%]{font-size:13px}.chat-sidenav[_ngcontent-%COMP%]{border-right:1px solid transparent;overflow:hidden;width:200px}.chat-content[_ngcontent-%COMP%]{padding:12px;height:calc(100vh - 310px)}.chat-sidenav-list[_ngcontent-%COMP%]{height:calc(100vh - 206px)}"]}),t})(),pathMatch:"full"}];let E=(()=>{class t{}return t.\u0275mod=g.Zb({type:t}),t.\u0275inj=g.Yb({factory:function(e){return new(e||t)},imports:[[n.c,a.h.forChild(q),i.i,s.d,o.a]]}),t})()}}]);
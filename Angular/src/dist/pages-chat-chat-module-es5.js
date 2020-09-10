function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chat-chat-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesChatChatComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"row wrap\">\r\n    <div fxFlex=\"100\" class=\"flex-p\"> \r\n        <mat-card class=\"p-0 chat\">\r\n            <mat-sidenav-container>\r\n              <mat-sidenav #sidenav [opened]=\"sidenavOpen\" [mode]=\"sidenavOpen ? 'side' : 'over'\" class=\"chat-sidenav mat-elevation-z1\">\r\n                  <mat-toolbar color=\"primary\" class=\"p-0\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                      <mat-list class=\"p-0\">\r\n                          <mat-list-item>\r\n                              <img matListAvatar [src]=\"userImage\">\r\n                          </mat-list-item>\r\n                      </mat-list>\r\n                      <button mat-icon-button [matMenuTriggerFor]=\"userMenu\" #userMenuTrigger=\"matMenuTrigger\">\r\n                          <mat-icon>more_vert</mat-icon>\r\n                      </button>                                     \r\n                  </mat-toolbar>\r\n                  <mat-menu #userMenu=\"matMenu\" xPosition=\"before\" overlapTrigger=\"true\">\r\n                      <span (mouseleave)=\"userMenuTrigger.closeMenu()\">\r\n                          <button mat-menu-item>\r\n                              <mat-icon>account_circle</mat-icon>\r\n                              <span>Profile</span>\r\n                          </button>\r\n                          <button mat-menu-item>\r\n                              <mat-icon>settings</mat-icon>\r\n                              <span>Settings</span>\r\n                          </button>\r\n                          <a mat-menu-item routerLink=\"/\" > \r\n                              <mat-icon>power_settings_new</mat-icon>\r\n                              <span>Exit chat</span>\r\n                          </a>\r\n                      </span>\r\n                  </mat-menu> \r\n                  <mat-nav-list class=\"p-0 chat-sidenav-list\" perfectScrollbar>\r\n                      <mat-list-item *ngFor=\"let chat of chats\" (click)=\"getChat(chat)\">\r\n                          <img matListAvatar [src]=\"chat.image\">\r\n                          <h6 matLine> {{chat.author}} </h6>\r\n                          <p matLine fxLayout=\"row\" fxLayoutAlign=\"none center\" class=\"muted-text\">\r\n                              <span [ngSwitch]=\"chat.authorStatus\">\r\n                                  <mat-icon *ngSwitchCase=\"'Online'\" class=\"chat-status-icon\">check_circle</mat-icon>\r\n                                  <mat-icon *ngSwitchCase=\"'Offline'\" class=\"chat-status-icon\">highlight_off</mat-icon>\r\n                                  <mat-icon *ngSwitchCase=\"'Away'\" class=\"chat-status-icon\">schedule</mat-icon>\r\n                                  <mat-icon *ngSwitchCase=\"'Do not disturb'\" class=\"chat-status-icon\">not_interested</mat-icon>\r\n                              </span>\r\n                              <span class=\"author-status\">{{chat.authorStatus}}</span>\r\n                          </p>\r\n                      </mat-list-item>\r\n                  </mat-nav-list>\r\n              </mat-sidenav>\r\n            \r\n              <div>\r\n                  <mat-toolbar color=\"primary\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                          <button mat-icon-button (click)=\"sidenav.toggle()\">\r\n                              <mat-icon>list</mat-icon>\r\n                          </button>\r\n                          <mat-list *ngIf=\"currentChat\" class=\"p-0\">\r\n                              <mat-list-item>\r\n                                  <img matListAvatar [src]=\"currentChat.image\">\r\n                              </mat-list-item>\r\n                          </mat-list>\r\n                          <span *ngIf=\"currentChat\" class=\"author-name\">{{currentChat.author}}</span>\r\n                      </div>\r\n                      <button mat-icon-button [matMenuTriggerFor]=\"personMenu\" #personMenuTrigger=\"matMenuTrigger\">\r\n                          <mat-icon>more_vert</mat-icon>\r\n                      </button> \r\n                  </mat-toolbar>\r\n                  <mat-menu #personMenu=\"matMenu\" xPosition=\"before\" overlapTrigger=\"true\">\r\n                      <span (mouseleave)=\"personMenuTrigger.closeMenu()\">\r\n                          <button mat-menu-item>\r\n                              <mat-icon>account_circle</mat-icon>\r\n                              <span>Contact info</span>\r\n                          </button>\r\n                          <button mat-menu-item>\r\n                              <mat-icon>volume_mute</mat-icon>\r\n                              <span>Mute</span>\r\n                          </button>\r\n                          <button mat-menu-item> \r\n                              <mat-icon>delete_forever</mat-icon>\r\n                              <span>Clear chat</span>\r\n                          </button>\r\n                      </span>\r\n                  </mat-menu> \r\n                  <div class=\"chat-content\" perfectScrollbar>\r\n                      <mat-list *ngIf=\"talks\" class=\"p-0\" >\r\n                          <mat-list-item *ngFor=\"let talk of talks\" class=\"talk-item\">\r\n                              <img matListAvatar [src]=\"talk.image\">\r\n                              <p matLine class=\"message\">\r\n                                  <span [ngClass]=\"(talk.my) ? 'bg-primary' : 'bg-accent'\">{{talk.text}}</span>\r\n                              </p>                             \r\n                              <p matLine class=\"message-date\">\r\n                                  <small>{{talk.date | date:\"dd MMMM, yyyy 'at' HH:mm\"}}</small>\r\n                              </p> \r\n                          </mat-list-item>\r\n                      </mat-list>\r\n                      <div *ngIf=\"!talks\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"h-100 empty\">\r\n                          <mat-icon>chat</mat-icon>            \r\n                          <p>Select a interlocutor for talk</p>\r\n                      </div> \r\n                  </div>\r\n                  <mat-divider></mat-divider>\r\n                  <mat-card class=\"chat-actions\"> \r\n                      <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                          <mat-form-field class=\"w-100\">\r\n                            <input matInput placeholder=\"Enter your text...\" (keyup)=\"sendMessage($event)\" [(ngModel)]=\"newMessage\">\r\n                          </mat-form-field>\r\n                          <div fxLayout=\"row\" fxLayoutAlign=\"scenter center\">\r\n                              <button mat-icon-button type=\"button\">\r\n                                  <mat-icon>attach_file</mat-icon>\r\n                              </button>\r\n                              <button mat-mini-fab color=\"primary\" type=\"button\" (click)=\"sendMessage($event)\">\r\n                                  <mat-icon>send</mat-icon>\r\n                              </button>\r\n                          </div>\r\n                        </div>\r\n                  </mat-card>\r\n              </div>\r\n            \r\n            </mat-sidenav-container>\r\n        </mat-card>\r\n      </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/chat/chat.component.scss":
  /*!************************************************!*\
    !*** ./src/app/pages/chat/chat.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesChatChatComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".chat .chat-actions {\n  padding: 12px;\n}\n.chat .author-name {\n  font-size: 16px;\n  font-weight: 400;\n}\n.chat .talk-item {\n  padding: 6px 0;\n  height: 100%;\n}\n.chat .message {\n  white-space: unset;\n  text-overflow: unset;\n}\n.chat .message span {\n  padding: 6px 10px;\n  border-radius: 4px;\n  display: inline-block;\n  font-size: 14px;\n}\n.chat .message-date {\n  opacity: 0.8;\n}\n.chat .empty mat-icon {\n  font-size: 220px;\n  height: 220px;\n  width: 220px;\n  opacity: 0.4;\n}\n.chat .empty p {\n  font-size: 18px;\n  opacity: 0.8;\n}\n.chat-status-icon {\n  font-size: 14px;\n  height: 14px;\n  width: 14px;\n  line-height: 22px;\n  margin-right: 6px;\n}\n.author-status {\n  font-size: 13px;\n}\n.chat-sidenav {\n  border-right: 1px solid transparent;\n  overflow: hidden;\n  width: 200px;\n}\n.chat-content {\n  padding: 12px;\n  height: calc(100vh - (56px + 8px*2 + 238px));\n}\n.chat-sidenav-list {\n  height: calc(100vh - (56px + 8px*2 + 134px));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhdC9EOlxcMzcwXFxGaW5hbEZyb250ZW5kL3NyY1xcYXBwXFxwYWdlc1xcY2hhdFxcY2hhdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0ksYUFBQTtBQ0ZSO0FESUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNGUjtBRElJO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUNGUjtBRElJO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtBQ0ZSO0FER1E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDRFo7QURJSTtFQUNJLFlBQUE7QUNGUjtBREtRO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNIWjtBREtRO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNIWjtBRE9BO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0pKO0FETUE7RUFDSSxlQUFBO0FDSEo7QURLQTtFQUNJLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDRko7QURJQTtFQUNJLGFBQUE7RUFDQSw0Q0FBQTtBQ0RKO0FER0E7RUFDSSw0Q0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3RoZW1lL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuXHJcbi5jaGF0e1xyXG4gICAgLmNoYXQtYWN0aW9uc3tcclxuICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgLmF1dGhvci1uYW1le1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gICAgLnRhbGstaXRlbXtcclxuICAgICAgICBwYWRkaW5nOiA2cHggMDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAubWVzc2FnZXtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogdW5zZXQ7XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogdW5zZXQ7ICAgICAgIFxyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tZXNzYWdlLWRhdGV7XHJcbiAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgfVxyXG4gICAgLmVtcHR5e1xyXG4gICAgICAgIG1hdC1pY29ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIyMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5jaGF0LXN0YXR1cy1pY29ue1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgd2lkdGg6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG59XHJcbi5hdXRob3Itc3RhdHVze1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi5jaGF0LXNpZGVuYXZ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMjAwcHg7ICAgXHJcbn1cclxuLmNoYXQtY29udGVudHtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoI3skdG9vbGJhci1oZWlnaHR9ICsgI3skaW5uZXItc2lkZW5hdi1jb250ZW50LXBhZGRpbmd9KjIgKyAyMzhweCkpO1xyXG59XHJcbi5jaGF0LXNpZGVuYXYtbGlzdCB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoI3skdG9vbGJhci1oZWlnaHR9ICsgI3skaW5uZXItc2lkZW5hdi1jb250ZW50LXBhZGRpbmd9KjIgKyAxMzRweCkpO1xyXG59XHJcbiIsIi5jaGF0IC5jaGF0LWFjdGlvbnMge1xuICBwYWRkaW5nOiAxMnB4O1xufVxuLmNoYXQgLmF1dGhvci1uYW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmNoYXQgLnRhbGstaXRlbSB7XG4gIHBhZGRpbmc6IDZweCAwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY2hhdCAubWVzc2FnZSB7XG4gIHdoaXRlLXNwYWNlOiB1bnNldDtcbiAgdGV4dC1vdmVyZmxvdzogdW5zZXQ7XG59XG4uY2hhdCAubWVzc2FnZSBzcGFuIHtcbiAgcGFkZGluZzogNnB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uY2hhdCAubWVzc2FnZS1kYXRlIHtcbiAgb3BhY2l0eTogMC44O1xufVxuLmNoYXQgLmVtcHR5IG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAyMjBweDtcbiAgaGVpZ2h0OiAyMjBweDtcbiAgd2lkdGg6IDIyMHB4O1xuICBvcGFjaXR5OiAwLjQ7XG59XG4uY2hhdCAuZW1wdHkgcCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4uY2hhdC1zdGF0dXMtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICB3aWR0aDogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufVxuXG4uYXV0aG9yLXN0YXR1cyB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmNoYXQtc2lkZW5hdiB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5jaGF0LWNvbnRlbnQge1xuICBwYWRkaW5nOiAxMnB4O1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoNTZweCArIDhweCoyICsgMjM4cHgpKTtcbn1cblxuLmNoYXQtc2lkZW5hdi1saXN0IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKDU2cHggKyA4cHgqMiArIDEzNHB4KSk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/chat/chat.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/chat/chat.component.ts ***!
    \**********************************************/

  /*! exports provided: ChatComponent */

  /***/
  function srcAppPagesChatChatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
      return ChatComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../app.settings */
    "./src/app/app.settings.ts");
    /* harmony import */


    var _chat_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./chat.model */
    "./src/app/pages/chat/chat.model.ts");
    /* harmony import */


    var _chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chat.service */
    "./src/app/pages/chat/chat.service.ts");

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

    var ChatComponent = /*#__PURE__*/function () {
      function ChatComponent(appSettings, chatService) {
        _classCallCheck(this, ChatComponent);

        this.appSettings = appSettings;
        this.chatService = chatService;
        this.userImage = 'assets/img/users/user.jpg';
        this.sidenavOpen = true;
        this.settings = this.appSettings.settings;
      }

      _createClass(ChatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.chats = this.chatService.getChats();

          if (window.innerWidth <= 768) {
            this.sidenavOpen = false;
          }
        }
      }, {
        key: "onWindowResize",
        value: function onWindowResize() {
          window.innerWidth <= 768 ? this.sidenavOpen = false : this.sidenavOpen = true;
        }
      }, {
        key: "getChat",
        value: function getChat(obj) {
          if (this.talks) {
            this.talks.length = 2;
          }

          this.talks = this.chatService.getTalk();
          this.talks.push(obj);
          this.currentChat = obj;
          this.talks.forEach(function (talk) {
            if (!talk.my) {
              talk.image = obj.image;
            }
          });

          if (window.innerWidth <= 768) {
            this.sidenav.close();
          }
        }
      }, {
        key: "sendMessage",
        value: function sendMessage($event) {
          if (($event.which === 1 || $event.which === 13) && this.newMessage.trim() != '') {
            if (this.talks) {
              this.talks.push(new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('assets/img/users/user.jpg', 'Emilio Verdines', 'online', this.newMessage, new Date(), true));
              this.newMessage = '';
              var chatContainer = document.querySelector('.chat-content');

              if (chatContainer) {
                setTimeout(function () {
                  var nodes = chatContainer.querySelectorAll('.mat-list-item');
                  var newChatTextHeight = nodes[nodes.length - 1];
                  chatContainer.scrollTop = chatContainer.scrollHeight + newChatTextHeight.clientHeight;
                });
              }
            }
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem("jwtToken");
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.talks) this.talks.length = 2;
        }
      }]);

      return ChatComponent;
    }();

    ChatComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]
      }, {
        type: _chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'), __metadata("design:type", Object)], ChatComponent.prototype, "sidenav", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], ChatComponent.prototype, "onWindowResize", null);

    ChatComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-chat',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./chat.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat.component.html"))["default"],
      providers: [_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]],
      styles: [__importDefault(__webpack_require__(
      /*! ./chat.component.scss */
      "./src/app/pages/chat/chat.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"], _chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]])], ChatComponent);
    /***/
  },

  /***/
  "./src/app/pages/chat/chat.model.ts":
  /*!******************************************!*\
    !*** ./src/app/pages/chat/chat.model.ts ***!
    \******************************************/

  /*! exports provided: Chat */

  /***/
  function srcAppPagesChatChatModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Chat", function () {
      return Chat;
    });

    var Chat = function Chat(image, author, authorStatus, text, date, my) {
      _classCallCheck(this, Chat);

      this.image = image;
      this.author = author;
      this.authorStatus = authorStatus;
      this.text = text;
      this.date = date;
      this.my = my;
    };
    /***/

  },

  /***/
  "./src/app/pages/chat/chat.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/chat/chat.module.ts ***!
    \*******************************************/

  /*! exports provided: routes, ChatModule */

  /***/
  function srcAppPagesChatChatModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatModule", function () {
      return ChatModule;
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


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _chat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./chat.component */
    "./src/app/pages/chat/chat.component.ts");

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
      component: _chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"],
      pathMatch: 'full'
    }];

    var ChatModule = function ChatModule() {
      _classCallCheck(this, ChatModule);
    };

    ChatModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
      declarations: [_chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"]]
    })], ChatModule);
    /***/
  },

  /***/
  "./src/app/pages/chat/chat.service.ts":
  /*!********************************************!*\
    !*** ./src/app/pages/chat/chat.service.ts ***!
    \********************************************/

  /*! exports provided: ChatService */

  /***/
  function srcAppPagesChatChatServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatService", function () {
      return ChatService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _chat_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./chat.model */
    "./src/app/pages/chat/chat.model.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var date = new Date(),
        day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear(),
        hour = date.getHours(),
        minute = date.getMinutes(); // let chats = [
    //     new Chat(
    //         'assets/img/profile/ashley.jpg',
    //         'Ashley Ahlberg', 
    //         'Online',
    //         'Hi, I\'m looking for admin template with angular material 2 design.  What do you think about Gradus Admin Template?',
    //         new Date(year, month, day-2, hour, minute),
    //         false
    //     ),
    //     new Chat(
    //         'assets/img/profile/bruno.jpg',
    //         'Bruno Vespa',
    //         'Do not disturb',
    //         'Hi, I\'m looking for admin template with angular material 2 design.  What do you think about Gradus Admin Template?',
    //         new Date(year, month, day-2, hour, minute),
    //         false
    //     ),
    //     new Chat(
    //         'assets/img/profile/julia.jpg',
    //         'Julia Aniston',
    //         'Away',
    //         'Hi, I\'m looking for admin template with angular material 2 design.  What do you think about Gradus Admin Template?',
    //         new Date(year, month, day-2, hour, minute),
    //         false
    //     ),
    //     new Chat(
    //         'assets/img/profile/adam.jpg',
    //         'Adam Sandler',
    //         'Online',
    //         'Hi, I\'m looking for admin template with angular material 2 design.  What do you think about Gradus Admin Template?',
    //         new Date(year, month, day-2, hour, minute),
    //         false
    //     ),
    //     new Chat(
    //         'assets/img/profile/tereza.jpg',
    //         'Tereza Stiles',
    //         'Offline',
    //         'Hi, I\'m looking for admin template with angular material 2 design.  What do you think about Gradus Admin Template?',
    //         new Date(year, month, day-2, hour, minute),
    //         false
    //     ),  
    //     new Chat(
    //         'assets/img/profile/michael.jpg',
    //         'Michael Blair',
    //         'Online',
    //         'Hi, I\'m looking for admin template with angular material 2 design.  What do you think about Gradus Admin Template?',
    //         new Date(year, month, day-2, hour, minute),
    //         false
    //     )
    // ]

    var chats = [new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('assets/img/profile/ashley.jpg', 'Ashley Ahlberg', 'Online', 'Great, then I\'ll definitely buy this theme. Thanks!', new Date(year, month, day - 2, hour, minute), false), new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('assets/img/profile/bruno.jpg', 'Bruno Vespa', 'Do not disturb', 'Great, then I\'ll definitely buy this theme. Thanks!', new Date(year, month, day - 2, hour, minute), false), new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('assets/img/profile/julia.jpg', 'Julia Aniston', 'Away', 'Great, then I\'ll definitely buy this theme. Thanks!', new Date(year, month, day - 2, hour, minute), false), new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('assets/img/profile/adam.jpg', 'Adam Sandler', 'Online', 'Great, then I\'ll definitely buy this theme. Thanks!', new Date(year, month, day - 2, hour, minute), false), new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('assets/img/profile/tereza.jpg', 'Tereza Stiles', 'Offline', 'Great, then I\'ll definitely buy this theme. Thanks!', new Date(year, month, day - 2, hour, minute), false), new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('assets/img/profile/michael.jpg', 'Michael Blair', 'Online', 'Great, then I\'ll definitely buy this theme. Thanks!', new Date(year, month, day - 2, hour, minute), false)];
    var talks = [new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('assets/img/profile/ashley.jpg', 'Ashley Ahlberg', 'Online', 'Hi, I\'m looking for admin template with angular material 2 design.  What do you think about Gradus Admin Template?', new Date(year, month, day - 2, hour, minute + 3), false), new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('assets/img/users/user.jpg', 'Emilio Verdines', 'Online', 'Hi, Gradus is a fully compatible with angular material 2, responsive, organized folder structure, clean & customizable code, easy to use and much more...', new Date(year, month, day - 2, hour, minute + 2), true)];

    var ChatService = /*#__PURE__*/function () {
      function ChatService() {
        _classCallCheck(this, ChatService);
      }

      _createClass(ChatService, [{
        key: "getChats",
        value: function getChats() {
          return chats;
        }
      }, {
        key: "getTalk",
        value: function getTalk() {
          return talks;
        }
      }]);

      return ChatService;
    }();

    ChatService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], ChatService);
    /***/
  }
}]);
//# sourceMappingURL=pages-chat-chat-module-es5.js.map
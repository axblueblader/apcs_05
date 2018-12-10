(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/quiz/quiz.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _quiz_quizdo_quizdo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quiz/quizdo/quizdo.component */ "./src/app/quiz/quizdo/quizdo.component.ts");
/* harmony import */ var _quiz_quizresult_quizresult_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quiz/quizresult/quizresult.component */ "./src/app/quiz/quizresult/quizresult.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'quiz', component: _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_3__["QuizComponent"], children: [
            { path: 'do', component: _quiz_quizdo_quizdo_component__WEBPACK_IMPORTED_MODULE_6__["QuizdoComponent"] },
            { path: 'result', component: _quiz_quizresult_quizresult_component__WEBPACK_IMPORTED_MODULE_7__["QuizresultComponent"] }
        ] },
    { path: 'chat', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"] },
    { path: 'not-found', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"] },
    { path: '**', redirectTo: '/not-found' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <nav class=\"navbar navbar-expand-sm navbar-light bg-light\">\n        <div class=\"container-fluid\">\n            <div class=\"navbar-header\">\n                <a routerLink=\"/\" class=\"navbar-brand\">Tale</a>\n            </div>\n            <div class=\"collapse navbar-collapse\">\n                <ul class=\"navbar-nav mr-auto\">\n                    <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/quiz\">Quiz</a></li>\n                    <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/chat\">Chat</a></li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n</div>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _socketio_socketio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./socketio/socketio.service */ "./src/app/socketio/socketio.service.ts");
/* harmony import */ var _socketio_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socketio/user.service */ "./src/app/socketio/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'client';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            providers: [
                _socketio_socketio_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"],
                _socketio_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
            ]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/quiz/quiz.component.ts");
/* harmony import */ var _quiz_quizdo_quizdo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quiz/quizdo/quizdo.component */ "./src/app/quiz/quizdo/quizdo.component.ts");
/* harmony import */ var _quiz_quizresult_quizresult_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quiz/quizresult/quizresult.component */ "./src/app/quiz/quizresult/quizresult.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _home_signup_dialog_signup_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/signup-dialog/signup-dialog.component */ "./src/app/home/signup-dialog/signup-dialog.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _home_signup_dialog_signup_dialog_component__WEBPACK_IMPORTED_MODULE_12__["SignupDialogComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_10__["ChatComponent"],
                _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_6__["QuizComponent"],
                _quiz_quizdo_quizdo_component__WEBPACK_IMPORTED_MODULE_7__["QuizdoComponent"],
                _quiz_quizresult_quizresult_component__WEBPACK_IMPORTED_MODULE_8__["QuizresultComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__["NotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"]
            ],
            entryComponents: [_home_signup_dialog_signup_dialog_component__WEBPACK_IMPORTED_MODULE_12__["SignupDialogComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".msg_container{\n    margin: 10px 0 10px 0 ;\n    padding: 30px;\n    overflow-y: auto;\n    display: block;\n    background: whitesmoke;\n}\n\n.input_field{\n    width: 100%;\n}\n\n.their_msg{\n  background: dodgerblue;\n}\n\n.list-group{\n  display:inline-block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksWUFBWTtDQUNmOztBQUVEO0VBQ0UsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0UscUJBQXFCO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXNnX2NvbnRhaW5lcntcbiAgICBtYXJnaW46IDEwcHggMCAxMHB4IDAgO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xufVxuXG4uaW5wdXRfZmllbGR7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi50aGVpcl9tc2d7XG4gIGJhY2tncm91bmQ6IGRvZGdlcmJsdWU7XG59XG5cbi5saXN0LWdyb3Vwe1xuICBkaXNwbGF5OmlubGluZS1ibG9jaztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container h-100\">\n    <div class=\"container h-75 msg_container\" #msgbox >\n        <div class=\"row flex-row flex-row-reverse\"\n             *ngFor=\"let msg of msg_list\"\n              [ngClass]=\"{'flex-row-reverse': msg.owner === 'me'}\" >\n          <ul class=\"list-group\" >\n            <li class=\"list-group-item their_msg\" [ngClass]=\"{'their_msg': msg.owner === 'partner'}\">{{msg.msg}}</li>\n          </ul>\n        </div>\n    </div>\n\n    <div class=\"container h-25\">\n        <div class=\"row flex-row\">\n           <div class=\"col-md-6\">\n               <mat-form-field class=\"input_field\">\n                   <input #newMsg\n                          matInput\n                          placeholder=\"Your message here\"\n                          (keyup.enter)=\"addMsg(newMsg.value)\">\n               </mat-form-field>\n           </div>\n            <div class=\"col-md-1\">\n                <button class=\"btn btn-default\" (click)=\"addMsg(newMsg.value)\">Send</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
        this.msg_list = [];
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            _this.msg_list.push({ msg: 'partner send', owner: 'partner' });
        }, 10000);
    };
    ChatComponent.prototype.addMsg = function (value) {
        this.msg_list.push({ msg: value, owner: 'me' });
        this.inputfield.nativeElement.value = '';
        console.log(this.msgbox.nativeElement.clientHeight);
        console.log(this.msgbox.nativeElement.scrollTop);
        console.log(this.msgbox.nativeElement.scrollHeight);
    };
    ChatComponent.prototype.ngAfterViewChecked = function () {
        this.msgbox.nativeElement.scrollTop = this.msgbox.nativeElement.scrollHeight - this.msgbox.nativeElement.clientHeight;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('msgbox'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ChatComponent.prototype, "msgbox", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('newMsg'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ChatComponent.prototype, "inputfield", void 0);
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")]
        })
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#first-line {\n  background-color: #3f51b5;\n}\n\n#tableTop {\n  margin: auto;\n  width: 70%;\n  table-layout: fixed;\n}\n\n.flbutton {\n  height: 3.6em;\n}\n\n#colLeft {\n  text-align: left;\n}\n\n#colMid {\n  text-align: center;\n  color: white;\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n  font-size: 2em;\n}\n\n#colRight {\n  text-align: right;\n}\n\nbody {\n  background-color: aliceblue;\n}\n\nmat-progress-bar {\n  width: 40%;\n  margin: auto;\n}\n\n#search-button {\n  text-align: center;\n  padding: 3.5em 0;\n}\n\nmat-spinner {\n  margin: auto;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin-top: -24px;\n  z-index: 1;\n}\n\n.raised-button {\n  width: 150px;\n  height: 150px;\n  font-size: 100px;\n  border-radius: 50%;\n  color: white;\n  z-index: 2;\n}\n\nmat-expansion-panel {\n  background-color: lavenderblush;\n}\n\n#search {\n  margin: auto;\n  width: 30%;\n}\n\n#search-option {\n  margin: auto;\n  text-shadow: 0 1px gray;\n  font-size: 20px;\n  color: #ff4081;\n}\n\n#tableSearch {\n  width: 100%;\n  background-color: white;\n}\n\n#tableSearch td {\n  padding: 25px;\n  border-bottom: 1px solid lavenderblush;\n}\n\n.title {\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n.radio-button {\n  padding-right: 50px;\n}\n\nmat-slider {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0dBQXNHO0VBQ3RHLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSw0QkFBNEI7Q0FDN0I7O0FBRUQ7RUFDRSxXQUFXO0VBQ1gsYUFBYTtDQUNkOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsV0FBVztDQUNaOztBQUVEO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxnQ0FBZ0M7Q0FDakM7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsV0FBVztDQUNaOztBQUVEO0VBQ0UsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLFlBQVk7RUFDWix3QkFBd0I7Q0FDekI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsdUNBQXVDO0NBQ3hDOztBQUVEO0VBQ0UsdUhBQXVIO0NBQ3hIOztBQUVEO0VBQ0Usb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsWUFBWTtDQUNiIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZmlyc3QtbGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG59XG5cbiN0YWJsZVRvcCB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDcwJTtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cblxuLmZsYnV0dG9uIHtcbiAgaGVpZ2h0OiAzLjZlbTtcbn1cblxuI2NvbExlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4jY29sTWlkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDJlbTtcbn1cblxuI2NvbFJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG59XG5cbm1hdC1wcm9ncmVzcy1iYXIge1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbiNzZWFyY2gtYnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAzLjVlbSAwO1xufVxuXG5tYXQtc3Bpbm5lciB7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luLXRvcDogLTI0cHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5yYWlzZWQtYnV0dG9uIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBmb250LXNpemU6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogMjtcbn1cblxubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxhdmVuZGVyYmx1c2g7XG59XG5cbiNzZWFyY2gge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAzMCU7XG59XG5cbiNzZWFyY2gtb3B0aW9uIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggZ3JheTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmNDA4MTtcbn1cblxuI3RhYmxlU2VhcmNoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4jdGFibGVTZWFyY2ggdGQge1xuICBwYWRkaW5nOiAyNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGF2ZW5kZXJibHVzaDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cblxuLnJhZGlvLWJ1dHRvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG59XG5cbm1hdC1zbGlkZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"first-line\">\n  <table id=\"tableTop\">\n    <tr>\n      <td id=\"colLeft\"><button mat-flat-button color=\"primary\" class=\"flbutton\">≡</button></td>\n      <td id=\"colMid\">Tale</td>\n      <td id=\"colRight\"><button mat-flat-button color=\"primary\" class=\"flbutton\" (click)=\"openDialog()\">Sign In</button></td>\n    </tr>\n  </table>\n</div>\n<body>\n  <div id=\"search-button\">\n    <mat-spinner color=\"accent\" diameter=\"200\" strokeWidth=\"5\" *ngIf=\"clicked\"></mat-spinner>\n    <button mat-raised-button color=\"accent\" class=\"raised-button\" (click) = \"onClick()\">\n      {{clicked ? \"×\" : \"+\"}}\n    </button>\n  </div>\n\n  <div id=\"search\">\n    <mat-accordion>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <p id=\"search-option\">Searching options</p>\n        </mat-expansion-panel-header>\n        <table id=\"tableSearch\">\n          <tr>\n            <td class=\"title\">Gender</td>\n            <td>\n              <mat-radio-group>\n                  <mat-radio-button class=\"radio-button\" value=\"1\">Male</mat-radio-button>\n                  <mat-radio-button class=\"radio-button\" value=\"2\">Female</mat-radio-button>\n              </mat-radio-group>\n            </td>\n          </tr>\n          <tr>\n            <td class=\"title\">Age</td>\n            <td>\n              <mat-radio-group>\n                <mat-slider thumbLabel min=\"10\" max=\"90\" tickInterval=\"5\"></mat-slider>\n              </mat-radio-group>\n            </td>\n          </tr>\n        </table>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </div>\n</body>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _signup_dialog_signup_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup-dialog/signup-dialog.component */ "./src/app/home/signup-dialog/signup-dialog.component.ts");
/* harmony import */ var _socketio_socketio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../socketio/socketio.service */ "./src/app/socketio/socketio.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(dialog, socketService) {
        this.dialog = dialog;
        this.socketService = socketService;
    }
    HomeComponent.prototype.onClick = function () {
        if (this.clicked) {
            this.clicked = false;
        }
        else {
            this.clicked = true;
        }
    };
    HomeComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_signup_dialog_signup_dialog_component__WEBPACK_IMPORTED_MODULE_2__["SignupDialogComponent"], {});
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
        });
    };
    HomeComponent.prototype.startSearch = function () {
        var data = {
            userid: this.userID,
            queueType: 'quick' // queueType from options chose in screen
        };
        this.socketService.startSearch(data);
    };
    HomeComponent.prototype.stopSearch = function () {
        this.socketService.stopSearch(this.userID);
    };
    HomeComponent.prototype.initSocketEventHandler = function () {
        this.socketService.onWaitingInQueue().subscribe(function (data) {
            // Show waiting animation and message
        });
        this.socketService.onFoundMatch().subscribe(function (data) {
            // Show found match and navigate to quiz page
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.socketService.initSocket();
        this.initSocketEventHandler();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _socketio_socketio_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/signup-dialog/signup-dialog.component.css":
/*!****************************************************************!*\
  !*** ./src/app/home/signup-dialog/signup-dialog.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog-content {\n  display: flex;\n  flex-direction: column;\n  padding: 20px 0;\n}\n\n.dialog-content> * {\n  width: 100%;\n}\n\nmat-form-field {\n  padding: 0 0 20px 0;\n}\n\n.dialog-actions {\n  text-align: center;\n  padding-bottom: 10px;\n}\n\n.radio-button {\n  padding-left: 30px;\n}\n\n#gender {\n  float: left;\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zaWdudXAtZGlhbG9nL3NpZ251cC1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsWUFBWTtDQUNiOztBQUVEO0VBQ0Usb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQjtDQUN0Qjs7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLFlBQVk7RUFDWix1SEFBdUg7Q0FDeEgiLCJmaWxlIjoic3JjL2FwcC9ob21lL3NpZ251cC1kaWFsb2cvc2lnbnVwLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG4uZGlhbG9nLWNvbnRlbnQ+ICoge1xuICB3aWR0aDogMTAwJTtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICBwYWRkaW5nOiAwIDAgMjBweCAwO1xufVxuXG4uZGlhbG9nLWFjdGlvbnMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4ucmFkaW8tYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4jZ2VuZGVyIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/signup-dialog/signup-dialog.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/home/signup-dialog/signup-dialog.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group dynamicHeight>\n  <mat-tab label=\"Sign In\">\n    <div class=\"dialog-content\">\n      <mat-form-field>\n        <input matInput placeholder=\"Phone number\" type=\"tel\" [formControl]=\"phoneIn\">\n        <mat-error *ngIf=\"phoneIn.invalid\">{{getErrorMessagePhoneIn()}}</mat-error>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Password\" type=\"password\" [formControl]=\"passwordIn\">\n        <mat-error *ngIf=\"passwordIn.invalid\">{{getErrorMessagePasswordIn()}}</mat-error>\n      </mat-form-field>\n      <mat-radio-group>\n        <p id=\"gender\">Gender</p>\n        <mat-radio-button class=\"radio-button\" value=\"1\">Male</mat-radio-button>\n        <mat-radio-button class=\"radio-button\" value=\"2\">Female</mat-radio-button>\n      </mat-radio-group>\n    </div>\n    <div class=\"dialog-actions\">\n      <button mat-button mat-dialog-close>Cancel</button>\n      <button mat-raised-button color=\"primary\" (click)=\"onAccessAccount()\">Sign In</button>\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Sign Up\">\n    <div class=\"dialog-content\">\n      <mat-form-field>\n        <input matInput placeholder=\"Username\" type=\"text\" [formControl]=\"usernameUp\">\n        <mat-error *ngIf=\"usernameUp.invalid\">{{getErrorMessageUsernameUp()}}</mat-error>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Phone number\" type=\"tel\" [formControl]=\"phoneUp\">\n        <mat-error *ngIf=\"phoneUp.invalid\">{{getErrorMessagePhoneUp()}}</mat-error>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Password\" type=\"password\" [formControl]=\"passwordUp\">\n        <mat-error *ngIf=\"passwordUp.invalid\">{{getErrorMessagePasswordUp()}}</mat-error>\n      </mat-form-field>\n    </div>\n    <div class=\"dialog-actions\">\n      <button mat-button mat-dialog-close>Cancel</button>\n      <button mat-raised-button color=\"primary\" (click)=\"onCreateAccount()\">Sign Up</button>\n    </div>\n  </mat-tab>\n</mat-tab-group>\n\n\n\n"

/***/ }),

/***/ "./src/app/home/signup-dialog/signup-dialog.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/signup-dialog/signup-dialog.component.ts ***!
  \***************************************************************/
/*! exports provided: SignupDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupDialogComponent", function() { return SignupDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var SignupDialogComponent = /** @class */ (function () {
    function SignupDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.phoneIn = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.passwordIn = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.usernameUp = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.phoneUp = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.passwordUp = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
    }
    SignupDialogComponent.prototype.ngOnInit = function () {
    };
    SignupDialogComponent.prototype.onAccessAccount = function () {
        var enteredValuesIn = {
            enteredPhonenumber: this.phoneIn.setValue('enteredPhonenumberIn'),
            enteredPassword: this.passwordIn.setValue('enteredPasswordIn')
        };
        this.dialogRef.close(enteredValuesIn);
    };
    SignupDialogComponent.prototype.onCreateAccount = function () {
        var enteredValuesUp = {
            enteredUsername: this.usernameUp.setValue('enteredPhonenumberUp'),
            enteredPhonenumber: this.phoneUp.setValue('enteredPhonenumberUp'),
            enteredPassword: this.passwordUp.setValue('enteredPasswordUp')
        };
        this.dialogRef.close(enteredValuesUp);
    };
    SignupDialogComponent.prototype.getErrorMessagePhoneIn = function () {
        return this.phoneIn.hasError('required') ? 'Enter phone number' : '';
    };
    SignupDialogComponent.prototype.getErrorMessagePasswordIn = function () {
        return this.phoneIn.hasError('required') ? 'Enter password' : '';
    };
    SignupDialogComponent.prototype.getErrorMessageUsernameUp = function () {
        return this.usernameUp.hasError('required') ? 'Enter username' : '';
    };
    SignupDialogComponent.prototype.getErrorMessagePhoneUp = function () {
        return this.phoneUp.hasError('required') ? 'Enter phone number' : '';
    };
    SignupDialogComponent.prototype.getErrorMessagePasswordUp = function () {
        return this.phoneUp.hasError('required') ? 'Enter password' : '';
    };
    SignupDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup-dialog',
            template: __webpack_require__(/*! ./signup-dialog.component.html */ "./src/app/home/signup-dialog/signup-dialog.component.html"),
            styles: [__webpack_require__(/*! ./signup-dialog.component.css */ "./src/app/home/signup-dialog/signup-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], SignupDialogComponent);
    return SignupDialogComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/quiz/quiz.component.css":
/*!*****************************************!*\
  !*** ./src/app/quiz/quiz.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1aXovcXVpei5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/quiz/quiz.component.html":
/*!******************************************!*\
  !*** ./src/app/quiz/quiz.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/quiz/quiz.component.ts":
/*!****************************************!*\
  !*** ./src/app/quiz/quiz.component.ts ***!
  \****************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quizdata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quizdata.service */ "./src/app/quiz/quizdata.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizComponent = /** @class */ (function () {
    function QuizComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    QuizComponent.prototype.ngOnInit = function () {
        this.router.navigate(['do'], { relativeTo: this.route });
    };
    QuizComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quiz',
            template: __webpack_require__(/*! ./quiz.component.html */ "./src/app/quiz/quiz.component.html"),
            styles: [__webpack_require__(/*! ./quiz.component.css */ "./src/app/quiz/quiz.component.css")],
            providers: [_quizdata_service__WEBPACK_IMPORTED_MODULE_1__["QuizdataService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "./src/app/quiz/quizdata.service.ts":
/*!******************************************!*\
  !*** ./src/app/quiz/quizdata.service.ts ***!
  \******************************************/
/*! exports provided: QuizdataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizdataService", function() { return QuizdataService; });
var QuizdataService = /** @class */ (function () {
    function QuizdataService() {
        this.quizList = [
            { left: 'http://homepages.neiu.edu/~ejgore/cs300/images/red.png', right: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Blue_%28film%29.jpg' },
            { left: 'http://homepages.neiu.edu/~ejgore/cs300/images/red.png', right: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Blue_%28film%29.jpg' },
            { left: 'http://homepages.neiu.edu/~ejgore/cs300/images/red.png', right: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Blue_%28film%29.jpg' },
            { left: 'http://homepages.neiu.edu/~ejgore/cs300/images/red.png', right: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Blue_%28film%29.jpg' },
            { left: 'http://homepages.neiu.edu/~ejgore/cs300/images/red.png', right: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Blue_%28film%29.jpg' },
        ];
        this.quizRes = [];
        this.partnerRes = ['left', 'right', 'right', 'left', 'right', 'left', 'left', 'right'];
    }
    QuizdataService.prototype.addResult = function (result) {
        this.quizRes.push(result);
    };
    QuizdataService.prototype.getList = function () {
        return this.quizList;
    };
    QuizdataService.prototype.getResult = function () {
        return this.quizRes;
    };
    QuizdataService.prototype.getPartnerRes = function () {
        return this.partnerRes;
    };
    return QuizdataService;
}());



/***/ }),

/***/ "./src/app/quiz/quizdo/quizdo.component.css":
/*!**************************************************!*\
  !*** ./src/app/quiz/quizdo/quizdo.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1aXovcXVpemRvL3F1aXpkby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/quiz/quizdo/quizdo.component.html":
/*!***************************************************!*\
  !*** ./src/app/quiz/quizdo/quizdo.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row flex-row\">\n    <div class=\"col-md\">\n      <h3 class=\"text-center\">Current question</h3>\n    </div>\n  </div>\n  <div class=\"row flex-row\">\n    <div class=\"col-md d-flex justify-content-center\">\n      <div class=\"answer\">\n         <img  class=\"img-fluid\" src=\"{{quizList[currQuest].left}}\" (click)=\"imgClick('left') \">\n        <!--<input type=\"image\" src=\"http://homepages.neiu.edu/~ejgore/cs300/images/red.png\" (click)=\"imgClick('red')\">-->\n      </div>\n    </div>\n    <div class=\"col-md d-flex justify-content-center\">\n      <div class=\"answer\">\n         <img class=\"img-fluid\" src=\"{{quizList[currQuest].right}}\" (click)=\"imgClick('right')\">\n        <!--<input type=\"image\" src=\"https://upload.wikimedia.org/wikipedia/commons/e/e8/Blue_%28film%29.jpg\" (click)=\"imgClick('blue')\">-->\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<style type=\"text/css\">\n  .answer{\n    width: 300px;\n    height: 300px;\n    overflow: hidden;\n  }\n\n  .answer img{\n    width: 100%;\n    height: 100%;\n  }\n</style>\n"

/***/ }),

/***/ "./src/app/quiz/quizdo/quizdo.component.ts":
/*!*************************************************!*\
  !*** ./src/app/quiz/quizdo/quizdo.component.ts ***!
  \*************************************************/
/*! exports provided: QuizdoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizdoComponent", function() { return QuizdoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quizdata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quizdata.service */ "./src/app/quiz/quizdata.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizdoComponent = /** @class */ (function () {
    function QuizdoComponent(quizDataService, router, route) {
        this.quizDataService = quizDataService;
        this.router = router;
        this.route = route;
        this.changeState = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    QuizdoComponent.prototype.ngOnInit = function () {
        this.quizList = this.quizDataService.getList();
        this.currQuest = 0;
        console.log(this.quizList.length);
    };
    QuizdoComponent.prototype.imgClick = function (color) {
        console.log(color);
        console.log(this.currQuest);
        if (this.currQuest < (this.quizList.length - 1)) {
            this.currQuest++;
            this.quizDataService.addResult(color);
        }
        else {
            this.quizDataService.addResult(color);
            this.router.navigate(['../result'], { relativeTo: this.route });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], QuizdoComponent.prototype, "changeState", void 0);
    QuizdoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quizdo',
            template: __webpack_require__(/*! ./quizdo.component.html */ "./src/app/quiz/quizdo/quizdo.component.html"),
            styles: [__webpack_require__(/*! ./quizdo.component.css */ "./src/app/quiz/quizdo/quizdo.component.css")]
        }),
        __metadata("design:paramtypes", [_quizdata_service__WEBPACK_IMPORTED_MODULE_1__["QuizdataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], QuizdoComponent);
    return QuizdoComponent;
}());



/***/ }),

/***/ "./src/app/quiz/quizresult/quizresult.component.css":
/*!**********************************************************!*\
  !*** ./src/app/quiz/quizresult/quizresult.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1aXovcXVpenJlc3VsdC9xdWl6cmVzdWx0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/quiz/quizresult/quizresult.component.html":
/*!***********************************************************!*\
  !*** ./src/app/quiz/quizresult/quizresult.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"background: #3dcae3\">\n  <div  *ngFor=\"let currQuiz of quizList; let i = index\" class=\"row flex-row topbuffer\" >\n    <div class=\"col-md d-flex justify-content-center\">\n      <div class=\"answer\">\n        <img  class=\"img-fluid\" src=\"{{currQuiz.left}}\" [ngClass]=\"{match: (resultList[i] ==='left')&&(resultList[i] == partnerRes[i]), notmatch: (resultList[i] ==='left')&&(resultList[i] != partnerRes[i])}\" >\n        <!--<input type=\"image\" src=\"http://homepages.neiu.edu/~ejgore/cs300/images/red.png\" (click)=\"imgClick('red')\">-->\n      </div>\n    </div>\n    <div class=\"col-md d-flex justify-content-center\">\n      <div class=\"answer\">\n        <img class=\"img-fluid\" src=\"{{currQuiz.right}}\" [ngClass]=\"{match: (resultList[i] ==='right')&&(resultList[i] == partnerRes[i]), notmatch: (resultList[i] ==='right')&&(resultList[i] != partnerRes[i])}\" >\n        <!--<input type=\"image\" src=\"https://upload.wikimedia.org/wikipedia/commons/e/e8/Blue_%28film%29.jpg\" (click)=\"imgClick('blue')\">-->\n      </div>\n    </div>\n  </div>\n</div>\n\n<style type=\"text/css\">\n  .answer{\n    width: 300px;\n    height: 300px;\n    overflow: hidden;\n  }\n\n  .answer img{\n    width: 100%;\n    height: 100%;\n\n  }\n  .match {\n    background: #3DE356;\n    padding: 10px;\n    border:1px solid #999;\n  }\n\n  .notmatch{\n    background: white;\n    padding: 10px;\n    border:1px solid #999;\n  }\n\n  .topbuffer{\n    margin-top: 15px;\n  }\n</style>\n"

/***/ }),

/***/ "./src/app/quiz/quizresult/quizresult.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/quiz/quizresult/quizresult.component.ts ***!
  \*********************************************************/
/*! exports provided: QuizresultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizresultComponent", function() { return QuizresultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quizdata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quizdata.service */ "./src/app/quiz/quizdata.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuizresultComponent = /** @class */ (function () {
    function QuizresultComponent(quizDataService) {
        this.quizDataService = quizDataService;
    }
    QuizresultComponent.prototype.ngOnInit = function () {
        this.quizList = this.quizDataService.getList();
        this.resultList = this.quizDataService.getResult();
        console.log(this.resultList);
        this.partnerRes = this.quizDataService.getPartnerRes();
        console.log(this.partnerRes);
    };
    QuizresultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quizresult',
            template: __webpack_require__(/*! ./quizresult.component.html */ "./src/app/quiz/quizresult/quizresult.component.html"),
            styles: [__webpack_require__(/*! ./quizresult.component.css */ "./src/app/quiz/quizresult/quizresult.component.css")]
        }),
        __metadata("design:paramtypes", [_quizdata_service__WEBPACK_IMPORTED_MODULE_1__["QuizdataService"]])
    ], QuizresultComponent);
    return QuizresultComponent;
}());



/***/ }),

/***/ "./src/app/socketio/socketio.service.ts":
/*!**********************************************!*\
  !*** ./src/app/socketio/socketio.service.ts ***!
  \**********************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");



var SERVER_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production ? '' : 'http://localhost:3000';
//@Injectable()
var SocketService = /** @class */ (function () {
    function SocketService() {
    }
    // Initalize the socket
    SocketService.prototype.initSocket = function () {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(SERVER_URL);
        console.log('Socket client initialized');
        console.log('Socket object:', this.socket);
        console.log('Server url: ', SERVER_URL);
    };
    /*  REGISTER SOCKET SECTION
    *   register to link userID with socket on server
    */
    SocketService.prototype.register = function (userID) {
        this.socket.emit('register', userID);
    };
    /*  END REGISTER SOCKET SECTION */
    /*  MATCHING SECTION
    *   start search, stop search
    */
    // data: {
    //     userID: userID,
    //     queueType: quick | malemale | malefemale | femalemale | femalefemale
    // }
    SocketService.prototype.startSearch = function (data) {
        this.socket.emit('start search', data);
        console.log('Socket emit: START SEARCH with ', data);
    };
    SocketService.prototype.stopSearch = function (data) {
        this.socket.emit('stop search', data);
        console.log('Socket emit: STOP SEARCH with', data);
    };
    SocketService.prototype.onFoundMatch = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            _this.socket.on('found match', function (data) { return observer.next(data); });
        });
    };
    SocketService.prototype.onWaitingInQueue = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            _this.socket.on('waiting in queue', function (data) { return observer.next(data); });
        });
    };
    /*  END MATCHING SECTION    */
    /*  MESSAGING SECTION
    *   send, recieve message
    *   emit seen event and recieve seen event
    */
    SocketService.prototype.sendMessage = function (data) {
        this.socket.emit('send message', data);
    };
    SocketService.prototype.onNewMessage = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            _this.socket.on('new message', function (data) { return observer.next(data); });
        });
    };
    SocketService.prototype.messageRecieved = function (userID) {
        this.socket.emit('message recieved', userID);
    };
    SocketService.prototype.onMessageSeen = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            // TODO: time as data
            _this.socket.on('message seen', function (data) { return observer.next(data); });
        });
    };
    return SocketService;
}());



/***/ }),

/***/ "./src/app/socketio/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/socketio/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.getUserID = function () {
        return this.userID;
    };
    UserService.prototype.signIn = function (data) {
        // http request server with data
        // set userID with response
    };
    UserService.prototype.signOut = function () {
    };
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/lap10490/apcs/apcs_05/client/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
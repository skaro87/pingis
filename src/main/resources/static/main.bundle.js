webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/addmatch/addmatch.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/addmatch/addmatch.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-horizontal-stepper [linear]=\"true\" #stepper>\n  <mat-step [stepControl]=\"players\">\n    <form [formGroup]=\"players\">\n      <ng-template matStepLabel>Välj spelare</ng-template>\n      \n      \n      <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"10px\">\n      \t<div fxFlex.xs fxFlex=\"200px\">\n      \t\t<mat-form-field>\n       \t\t\t<mat-select placeholder=\"Spelare 1\" formControlName=\"user1\">\n    \t\t\t\t<mat-option *ngFor=\"let user of users\" [value]=\"user\" >\n      \t\t\t\t\t{{ user.name }}\n   \t\t \t\t\t</mat-option>\n   \t\t \t\t</mat-select>\n   \t\t  \t</mat-form-field>\n   \t\t</div>\n   \t\t<div fxFlex.xs fxFlex=\"200px\">\n   \t\t\t<mat-form-field>\n   \t\t \t\t<mat-select placeholder=\"Spelare 2\" formControlName=\"user2\">\n    \t\t\t\t<mat-option *ngFor=\"let user of users\" [value]=\"user\">\n      \t\t\t\t\t{{ user.name }}\n   \t\t \t\t\t</mat-option>\n  \t\t\t\t</mat-select>\n      \t\t</mat-form-field>\n      \t</div>\n      </div>\n      <div>\n        <button mat-button matStepperNext>Nästa</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"score\">\n    <form [formGroup]=\"score\">\n      <ng-template matStepLabel>Ange resultat</ng-template>\n      <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"10px\">\n      \t<div fxFlex.xs fxFlex=\"200px\">\n       \t\t<mat-form-field>\n      \t\t\t<mat-select placeholder=\"Antal set\" formControlName=\"set\">\n    \t\t\t\t<mat-option [value]=\"1\">1</mat-option>\n    \t\t\t\t<mat-option [value]=\"3\">3</mat-option>\n      \t\t\t</mat-select>\n      \t\t</mat-form-field>\n     \t</div>\n     \t</div>\n     \t<div *ngIf=\"score.value.set\">\n     \t<div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"10px\">\n     \t<div fxFlex.xs fxFlex=\"50px\" fxFlexAlign=\"center\" fxFlexAlign.xs=\"left\">\n     \t\tSet 1:\n     \t</div>\n      \t<div fxFlex.xs fxFlex=\"200px\">\n      \t\t<mat-form-field>\n       \t\t\t<input type=\"number\" min=\"0\" max=\"99\" matInput placeholder=\"Poäng {{players.value.user1?.name}}\" formControlName=\"score1player1\">\n      \t\t</mat-form-field>\n      \t</div>\n      \t<div fxFlex.xs fxFlex=\"200px\">\n      \t\t<mat-form-field>\n       \t\t\t<input type=\"number\" min=\"0\" max=\"99\" matInput placeholder=\"Poäng {{players.value.user2?.name}}\" formControlName=\"score1player2\">\n      \t\t</mat-form-field>\n      \t</div>\n      </div>\n      </div>\n      <div *ngIf=\"score.value.set == 3\">\n      \n     \t<div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"10px\">\n     <div fxFlex.xs fxFlex=\"50px\" fxFlexAlign=\"center\" fxFlexAlign.xs=\"left\">\n     \t\tSet 2:\n     \t</div>\n     \t<div fxFlex.xs fxFlex=\"200px\">\n      <mat-form-field>\n       \t<input type=\"number\" min=\"0\" max=\"99\" matInput placeholder=\"Poäng {{players.value.user1?.name}}\" formControlName=\"score2player1\">\n      </mat-form-field>\n      </div>\n      <div fxFlex.xs fxFlex=\"200px\">\n      <mat-form-field>\n       \t<input type=\"number\" min=\"0\" max=\"99\"  matInput placeholder=\"Poäng {{players.value.user2?.name}}\" formControlName=\"score2player2\">\n      </mat-form-field>\n      </div>\n      </div>\n       <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"10px\">\n     <div fxFlex.xs fxFlex=\"50px\" fxFlexAlign=\"center\" fxFlexAlign.xs=\"left\">\n     \t\tSet 3:\n     \t</div> \n     \t<div fxFlex.xs fxFlex=\"200px\">\n      <mat-form-field>\n       \t<input type=\"number\" min=\"0\" max=\"99\" matInput placeholder=\"Poäng {{players.value.user1?.name}}\" formControlName=\"score3player1\">\n      </mat-form-field>\n      </div>\n      <div fxFlex.xs fxFlex=\"200px\">\n      <mat-form-field>\n       \t<input type=\"number\" min=\"0\" max=\"99\" matInput placeholder=\"Poäng {{players.value.user2?.name}}\" formControlName=\"score3player2\">\n      </mat-form-field>\n     </div>\n      </div>\n      </div>\n      \n      <div>\n        <button mat-button matStepperPrevious>Tillbaka</button>\n        <button mat-button matStepperNext>Nästa</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Skicka</ng-template>\n    Spelare: {{players.value.user1?.name}} mot {{players.value.user2?.name}}<br>\n    Set 1: {{score.value.score1player1}} - {{score.value.score1player2}} <br>\n    <div *ngIf=\"score.value.set == 3\">\n    Set 2: {{score.value.score2player1}} - {{score.value.score2player2}} <br>\n    <div *ngIf=\"score.value.score3player1 && score.value.score3player2\">\n    Set 3: {{score.value.score3player1}} - {{score.value.score3player2}} <br>\n    </div>\n    </div>\n    <div>\n      <button mat-button matStepperPrevious>Tillbaka</button>\n      <button mat-button (click)=\"submitMatch(stepper)\">Skicka</button>\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>"

/***/ }),

/***/ "../../../../../src/app/addmatch/addmatch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddmatchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_backend_service__ = __webpack_require__("../../../../../src/app/services/backend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddmatchComponent = (function () {
    function AddmatchComponent(backend, _formBuilder) {
        this.backend = backend;
        this._formBuilder = _formBuilder;
    }
    AddmatchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildForms();
        this.backend.getAllUsers().subscribe(function (res) {
            _this.users = res;
        });
    };
    AddmatchComponent.prototype.buildForms = function () {
        this.players = this._formBuilder.group({
            "user1": [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            "user2": [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]
        });
        this.score = this._formBuilder.group({
            set: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            score1player1: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            score1player2: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            score2player1: [''],
            score2player2: [''],
            score3player1: [''],
            score3player2: ['']
        });
    };
    AddmatchComponent.prototype.submitMatch = function (stepper) {
        var _this = this;
        var match = new MatchForm();
        match.player1 = this.players.value.user1.id;
        match.player2 = this.players.value.user2.id;
        if (match.player1 != match.player2) {
            match.sets.push(this.generateSet(this.players.value.user1.name, this.score.value.score1player1, this.players.value.user2.name, this.score.value.score1player2));
            if (this.score.value.set == 3) {
                match.sets.push(this.generateSet(this.players.value.user1.name, this.score.value.score2player1, this.players.value.user2.name, this.score.value.score2player2));
                if (this.score.value.score3player1 && this.score.value.score3player2) {
                    match.sets.push(this.generateSet(this.players.value.user1.name, this.score.value.score3player1, this.players.value.user2.name, this.score.value.score3player2));
                }
            }
            console.log(match);
            this.backend.submitMatch(match).subscribe(function (res) {
                console.log(res);
                stepper.selectedIndex = 0;
                _this.players.reset();
                _this.score.reset();
            });
        }
        else {
            console.log('Both players had the same user ID');
            stepper.selectedIndex = 0;
            this.players.reset();
            this.score.reset();
        }
    };
    AddmatchComponent.prototype.generateSet = function (player1name, player1score, player2name, player2score) {
        console.log(player1name);
        return _a = {}, _a[player1name] = player1score, _a[player2name] = player2score, _a;
        var _a;
    };
    AddmatchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-addmatch',
            template: __webpack_require__("../../../../../src/app/addmatch/addmatch.component.html"),
            styles: [__webpack_require__("../../../../../src/app/addmatch/addmatch.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_backend_service__["a" /* BackendService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]])
    ], AddmatchComponent);
    return AddmatchComponent;
}());

var MatchForm = (function () {
    function MatchForm() {
        this.sets = [];
    }
    return MatchForm;
}());


/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addmatch_addmatch_component__ = __webpack_require__("../../../../../src/app/addmatch/addmatch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__history_history_component__ = __webpack_require__("../../../../../src/app/history/history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__standings_standings_component__ = __webpack_require__("../../../../../src/app/standings/standings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rules_rules_component__ = __webpack_require__("../../../../../src/app/rules/rules.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__rules_rules_component__["a" /* RulesComponent */] },
    { path: 'addmatch', component: __WEBPACK_IMPORTED_MODULE_2__addmatch_addmatch_component__["a" /* AddmatchComponent */] },
    { path: 'history', component: __WEBPACK_IMPORTED_MODULE_3__history_history_component__["a" /* HistoryComponent */] },
    { path: 'rules', component: __WEBPACK_IMPORTED_MODULE_5__rules_rules_component__["a" /* RulesComponent */] },
    { path: 'standings', component: __WEBPACK_IMPORTED_MODULE_4__standings_standings_component__["a" /* StandingsComponent */] },
    { path: 'user/:name', component: __WEBPACK_IMPORTED_MODULE_6__user_user_component__["a" /* UserComponent */] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<mat-toolbar color=\"primary\">\r\n<span><a mat-button routerLink=\".\"><strong>Apendo pingis</strong></a></span>\r\n\r\n<div fxShow.sm=\"false\"  fxShow.xs=\"false\" fxShow=\"true\" >\r\n<span><a mat-button routerLink=\"addmatch\">Lägg till match</a></span>\r\n<span><a mat-button routerLink=\"standings\">Ranking</a></span> \r\n<span><a mat-button routerLink=\"history\">Matchhistorik</a></span> \r\n<span><a mat-button routerLink=\"rules\">Regler</a></span> \r\n</div>\r\n\t<span class=\"fill-remaining-space\"></span>\r\n<div fxShow.sm=\"true\" fxShow.xs=\"true\" fxShow=\"false\" >\r\n<button mat-icon-button [matMenuTriggerFor]=\"menu\" bg-color=\"primary\">\r\n\t<mat-icon>more_vert</mat-icon>\r\n</button>\r\n</div>\r\n</mat-toolbar>\r\n\r\n<mat-menu #menu=\"matMenu\">\r\n<button mat-menu-item routerLink=\"addmatch\">\r\n\t<mat-icon>add_circle_outline</mat-icon>\r\n\t<span [style.vertical-align]=\"'sub'\">Lägg till match</span>\r\n</button>\r\n<button mat-menu-item routerLink=\"standings\">\r\n\t<mat-icon>format_list_numbered\r\n</mat-icon>\r\n\t<span [style.vertical-align]=\"'sub'\">Ranking</span>\r\n</button>\r\n<button mat-menu-item routerLink=\"history\">\r\n\t<mat-icon>history</mat-icon>\r\n\t<span [style.vertical-align]=\"'sub'\">Matchhistorik</span>\r\n</button>\r\n<button mat-menu-item routerLink=\"rules\">\r\n\t<mat-icon>info_outline</mat-icon>\r\n\t<span [style.vertical-align]=\"'sub'\">Regler</span>\r\n</button>\r\n</mat-menu>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_backend_service__ = __webpack_require__("../../../../../src/app/services/backend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__standings_standings_component__ = __webpack_require__("../../../../../src/app/standings/standings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__history_history_component__ = __webpack_require__("../../../../../src/app/history/history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__addmatch_addmatch_component__ = __webpack_require__("../../../../../src/app/addmatch/addmatch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__rules_rules_component__ = __webpack_require__("../../../../../src/app/rules/rules.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipe_moment_pipe__ = __webpack_require__("../../../../../src/app/pipe/moment.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_10__standings_standings_component__["a" /* StandingsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__history_history_component__["a" /* HistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_12__addmatch_addmatch_component__["a" /* AddmatchComponent */],
                __WEBPACK_IMPORTED_MODULE_13__rules_rules_component__["a" /* RulesComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pipe_moment_pipe__["a" /* MomentPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["A" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["p" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["q" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["r" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["s" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["t" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["u" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["v" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["x" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["w" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["y" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["z" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["C" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["D" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["E" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["F" /* MatTooltipModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_backend_service__["a" /* BackendService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/history/history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/history/history.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let match of history\" class=\"container\" fxLayout\n\tfxLayout.xs=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"20px\"\n\tfxLayoutGap.xs>\n\n\t<div fxFlex=\"25%\">{{match.time | momentPipe}}</div>\n\t<div fxFlex=\"25%\">{{match.sets[0].player1}} -\n\t\t{{match.sets[0].player2}}</div>\n\t<div fxFlex>\n\t\t<span *ngFor=\"let set of match.sets\"> {{set.player1score}} -\n\t\t\t{{set.player2score}} </span>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/history/history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_backend_service__ = __webpack_require__("../../../../../src/app/services/backend.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistoryComponent = (function () {
    function HistoryComponent(backend) {
        this.backend = backend;
    }
    HistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.backend.getHistory().subscribe(function (res) {
            _this.history = res;
        });
    };
    HistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-history',
            template: __webpack_require__("../../../../../src/app/history/history.component.html"),
            styles: [__webpack_require__("../../../../../src/app/history/history.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_backend_service__["a" /* BackendService */]])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pipe/moment.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomentPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MomentPipe = (function () {
    function MomentPipe() {
    }
    MomentPipe.prototype.transform = function (value) {
        __WEBPACK_IMPORTED_MODULE_1_moment__["locale"]('sv');
        return __WEBPACK_IMPORTED_MODULE_1_moment__(value).fromNow();
    };
    MomentPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'momentPipe'
        })
    ], MomentPipe);
    return MomentPipe;
}());



/***/ }),

/***/ "../../../../../src/app/rules/rules.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tab-content {\r\n  padding: 16px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/rules/rules.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-tab-group class=\"tab-group\">\n  <mat-tab label=\"Pingis\">\n    <div class=\"tab-content\">\n    <mat-card>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n      Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\n      In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n      feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n      orci enim rutrum enim, vel tempor sapien arcu a tellus.\n    </mat-card>\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Rundpingis\">\n    <div class=\"tab-content\">\n    <mat-card>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n      Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\n      In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n      feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n      orci enim rutrum enim, vel tempor sapien arcu a tellus.\n      </mat-card>\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Kung\">\n   <div class=\"tab-content\">\n   <mat-card>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n      Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\n      In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n      feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n      orci enim rutrum enim, vel tempor sapien arcu a tellus.\n     </mat-card>\n    </div>  \n  </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "../../../../../src/app/rules/rules.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RulesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RulesComponent = (function () {
    function RulesComponent() {
    }
    RulesComponent.prototype.ngOnInit = function () {
    };
    RulesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-rules',
            template: __webpack_require__("../../../../../src/app/rules/rules.component.html"),
            styles: [__webpack_require__("../../../../../src/app/rules/rules.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], RulesComponent);
    return RulesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/backend.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackendService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BackendService = (function () {
    function BackendService(http) {
        this.http = http;
    }
    BackendService.prototype.getUser = function (name) {
        return this.http.get('/api/user/' + name);
    };
    BackendService.prototype.getAllUsers = function () {
        return this.http.get('/api/user/all');
    };
    BackendService.prototype.getStandings = function () {
        return this.http.get('/api/standings');
    };
    BackendService.prototype.getHistory = function () {
        return this.http.get('/api/match/history');
    };
    BackendService.prototype.submitMatch = function (match) {
        return this.http.post('/api/match', match);
    };
    BackendService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BackendService);
    return BackendService;
}());



/***/ }),

/***/ "../../../../../src/app/standings/standings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\r\n.example-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  min-width: 300px;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/standings/standings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n\n  <mat-table #table [dataSource]=\"standings\">\n\n    <ng-container matColumnDef=\"rank\">\n      <mat-header-cell *matHeaderCellDef> Plats </mat-header-cell>\n      <mat-cell *matCellDef=\"let user\"> {{user.rank}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef> Namn </mat-header-cell>\n      <mat-cell *matCellDef=\"let user\"> \n      <a routerLink=\"/user/{{user.name}}\">\n      {{user.name}} \n      </a>\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"rating\">\n      <mat-header-cell *matHeaderCellDef> Ranking </mat-header-cell>\n      <mat-cell *matCellDef=\"let user\"> {{user.rating}} </mat-cell>\n    </ng-container>\n\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/standings/standings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StandingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_backend_service__ = __webpack_require__("../../../../../src/app/services/backend.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StandingsComponent = (function () {
    function StandingsComponent(backend) {
        this.backend = backend;
        this.displayedColumns = ['rank', 'name', 'rating'];
    }
    StandingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.backend.getStandings().subscribe(function (res) {
            _this.standings = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatTableDataSource */](res);
        });
    };
    StandingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-standings',
            template: __webpack_require__("../../../../../src/app/standings/standings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/standings/standings.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_backend_service__["a" /* BackendService */]])
    ], StandingsComponent);
    return StandingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<pre>{{user | json}}</pre>"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_backend_service__ = __webpack_require__("../../../../../src/app/services/backend.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = (function () {
    function UserComponent(route, backend) {
        this.route = route;
        this.backend = backend;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    UserComponent.prototype.getUser = function () {
        var _this = this;
        console.log(JSON.stringify(this.route.snapshot.paramMap));
        var name = this.route.snapshot.paramMap.get('name');
        this.backend.getUser(name).subscribe(function (user) { return _this.user = user; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], UserComponent.prototype, "user", void 0);
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_backend_service__["a" /* BackendService */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
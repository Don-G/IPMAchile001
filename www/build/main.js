webpackJsonp([6],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DetailReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailReviewPage = (function () {
    function DetailReviewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.answer = navParams.data;
    }
    DetailReviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailReviewPage');
    };
    return DetailReviewPage;
}());
DetailReviewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detail-review',template:/*ion-inline-start:"C:\Users\Jair Acevedo\IONIC_PROJECTS\Quizionic2Evanto\Quiz_IPMA_001\src\pages\detail-review\detail-review.html"*/'<!--\n\n  Generated template for the DetailReviewPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Detalle de Pregunta</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n      <ion-card-header>\n\n         <strong>Pregunta N°{{ answer[0] }}</strong>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            {{answer[1]}}\n\n        </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n     <strong>Respuesta Correcta</strong> \n\n    </ion-card-header>\n\n\n\n    <ion-card-content>\n\n      <strong>{{ answer[2]}}</strong> {{ answer[6] }}\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      <strong>Seleccionada</strong> \n\n    </ion-card-header>\n\n\n\n    <ion-card-content>\n\n      <strong>{{ answer[3] }}</strong> {{ answer[7] }}\n\n    </ion-card-content>\n\n  </ion-card>\n\n  \n\n  <ion-card>\n\n    <ion-card-header>\n\n      <strong>Argumento</strong> \n\n    </ion-card-header>\n\n\n\n    <ion-card-content>\n\n        {{ answer[4] }}\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jair Acevedo\IONIC_PROJECTS\Quizionic2Evanto\Quiz_IPMA_001\src\pages\detail-review\detail-review.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
], DetailReviewPage);

//# sourceMappingURL=detail-review.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_review_detail_review__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ListReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListReviewPage = (function () {
    function ListReviewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.answersResume = navParams.data;
    }
    ListReviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListReviewPage');
        console.log(this.answersResume);
    };
    ListReviewPage.prototype.goToDetailReviewPage = function (answer) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detail_review_detail_review__["a" /* DetailReviewPage */], answer);
    };
    return ListReviewPage;
}());
ListReviewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list-review',template:/*ion-inline-start:"C:\Users\Jair Acevedo\IONIC_PROJECTS\Quizionic2Evanto\Quiz_IPMA_001\src\pages\list-review\list-review.html"*/'<!--\n\n  Generated template for the ListReviewPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Resumen</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-card>\n\n      <div class="card-header">\n\n        <ion-row >\n\n          <ion-col width-100>\n\n            <span>Resultados</span>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n    <ion-list>\n\n       \n\n          \n\n      <!--on-changes-->\n\n        <ion-item *ngFor="let answer of answersResume" >\n\n          <button ion-item class="{{ answer[5] }}" (click)="goToDetailReviewPage(answer)">\n\n            <p><strong>Pregunta N° {{ answer[0] }}</strong></p>\n\n            <p>{{ answer[1] }}</p>\n\n          </button>\n\n        </ion-item>\n\n      <!--/on-changes-->\n\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jair Acevedo\IONIC_PROJECTS\Quizionic2Evanto\Quiz_IPMA_001\src\pages\list-review\list-review.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
], ListReviewPage);

//# sourceMappingURL=list-review.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MasInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MasInfoPage = (function () {
    function MasInfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MasInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MasInfoPage');
    };
    return MasInfoPage;
}());
MasInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mas-info',template:/*ion-inline-start:"C:\Users\Jair Acevedo\IONIC_PROJECTS\Quizionic2Evanto\Quiz_IPMA_001\src\pages\mas-info\mas-info.html"*/'<!--\n\n  Generated template for the MasInfoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Más Información</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="back-info">\n\n\n\n    <ion-card>\n\n        <img src="assets/img/CCDP.png"/>\n\n        <ion-card-content>\n\n          <ion-card-title>\n\n            Nosotros\n\n            </ion-card-title>\n\n          <p>\n\n              La Corporación Chilena de Dirección de Proyectos (CCDP) es una organización sin ánimo de lucro que inicia su trabajo en julio de 2012. El objetivo de la CCDP es contribuir a la mejor preparación de profesionales en dirección de proyectos y facilitar su actuación permanente en la formulación, gestión y dirección de proyectos. Con esta iniciativa, la CCDP busca promover una cultura de eficiencia en el manejo de recursos, tanto en las empresas particulares como en el sector público, a través de la certificación de competencias en la dirección de proyectos, según los lineamientos generales de la International Project Management Association (IPMA®). \n\n          </p>\n\n          <!-- <ion-icon ios="ios-globe" md="md-globe"></ion-icon> -->\n\n          <ion-icon android="ios-globe" md="md-globe">http://www.ccdp-ipma.cl</ion-icon>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <img class="level_D" src="assets/img/nivel-d.jpg"/>\n\n        <ion-card-content>\n\n          <ion-card-title>\n\n            Certificación Nivel D\n\n            </ion-card-title>\n\n          <p>\n\n              Debe tener conocimiento de todos los elementos de competencia (competencia clave).\n\n              La experiencia en los elementos de competencia de la dirección de proyectos no es obligatoria en este nivel; pero es una ventaja si el candidato ha aplicado previamente su conocimiento en dirección de proyectos hasta cierto punto.\n\n          </p>\n\n          <!-- <ion-icon ios="logo-facebook" md="logo-facebook"></ion-icon> -->\n\n          <ion-icon  android="logo-facebook" md="logo-facebook">IPMA Young Crew Chile</ion-icon>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <img src="assets/img/yc.jpg"/>\n\n        <ion-card-content>\n\n          <ion-card-title>\n\n            Young Crew\n\n            </ion-card-title>\n\n          <p>\n\n              Somos la principal red mundial de jóvenes profesionales interesados en el área de proyectos. Young Crew es un componente clave de la Asociación Internacional de Project Management (IPMA) y su crecimiento.\n\n\n\n              Somos una plataforma para jóvenes profesionales y estudiantes de la gestión de proyectos..\n\n          </p>\n\n          <!-- <ion-icon ios="logo-facebook" md="logo-facebook"></ion-icon> -->\n\n          <ion-icon  android="logo-facebook" md="logo-facebook">IPMA Young Crew Chile</ion-icon>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jair Acevedo\IONIC_PROJECTS\Quizionic2Evanto\Quiz_IPMA_001\src\pages\mas-info\mas-info.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
], MasInfoPage);

//# sourceMappingURL=mas-info.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_welcome__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { MyApp } from '../../app/app.component';
/**
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TutorialPage = (function () {
    function TutorialPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.slides = [
            {
                title: "¡Bienvenido a IPMA Chile!",
                description: "La app <b>IPMA Chile</b> contiene 2 tipos de simuladores de exámenes con los conocimientos relevantes para obtener la certificación IPMA Level D y C.",
                image: "assets/img/titulo_ipma.png",
            },
            {
                title: "¿Qué es la Certificación IPMA?",
                description: "Sistema internacional de Certificación de Competencias de un individuo en cuanto a la <b>Gestión de Proyectos</b> que cuenta con 4 niveles",
                image: "assets/img/logo.jpg",
            },
            {
                title: "Exámenes Simples",
                description: "Los Exámenes Simples corresponden a: un <b>Exámen Full</b> que consta de 20 preguntas aleatorias y un tiempo máximo para responder de 8 minutos, y un <b>Exámen Express</b> que consta de 10 preguntas aleatorias y un tiempo máximo para responder de 2 minutos",
                image: "assets/img/examenes_simples.png",
            },
            {
                title: "Exámenes Categorizados",
                description: "La Norma ICB es el estándar internacional del IPMA, y éste actualmente en su versión 3 cuenta con 3 categorias de competencias (Comportamiento, Contextuales y Técnicas) de las cuales se desprenden 3 exámenes especializados en el estudio de dichas categorías",
                image: "assets/img/examenes_categorizados.png",
            },
            {
                title: "Resalto de Respuesta Correcta",
                description: "Cuando respondas correctamente, se resaltará tu respuesta con color verde, asímismo cuando respondas incorrectamente, se resaltará también tu respuesta incorrecta con color rojo",
                image: "assets/img/resalto_correcta.png",
            },
            {
                title: "Resumen de Respuestas Correctas e Incorrectas",
                description: "Luego de responder el exámen podrás visualizar el resumen de tus respuestas y tocar cada pregunta resaltada podrás visualizar la respuesta correcta y el argumento en el que se basa",
                image: "assets/img/resumen_respuestas.png",
            },
            {
                title: "Seguimiento de Resultados",
                description: "Siempre tendrás un registro de tu progreso por cada exámen que realices",
                image: "assets/img/progreso.png",
            }
        ];
    }
    TutorialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TutorialPage');
    };
    TutorialPage.prototype.goToMainPage = function () {
        // this.navCtrl.push(MyApp);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__welcome_welcome__["a" /* WelcomePage */]);
    };
    return TutorialPage;
}());
TutorialPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tutorial',template:/*ion-inline-start:"C:\Users\Jair Acevedo\IONIC_PROJECTS\Quizionic2Evanto\Quiz_IPMA_001\src\pages\tutorial\tutorial.html"*/'<!--\n\n  Generated template for the TutorialPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Tutorial</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="tutorial-page" >\n\n\n\n  <ion-slides pager class="slide">\n\n    <ion-slide *ngFor="let slide of slides">\n\n      <ion-toolbar  color="light">\n\n        <ion-buttons end>\n\n          <button ion-button color="primary" (click)="goToMainPage()">Saltar</button>\n\n        </ion-buttons>\n\n      </ion-toolbar>\n\n      <img [src]="slide.image" class="slide-image"/>\n\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n\n      <p [innerHTML]="slide.description"></p>\n\n    </ion-slide>\n\n    <ion-slide>\n\n      <ion-toolbar>\n\n      </ion-toolbar>\n\n      <img src="assets/img/checkmark.png" class="slide-image"/>\n\n      <h2 class="slide-title">¡Listo!</h2>\n\n      <button ion-button large clear icon-end color="dark" (click)="goToMainPage()">\n\n        Continuar\n\n        <ion-icon name="arrow-forward"></ion-icon>\n\n      </button>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jair Acevedo\IONIC_PROJECTS\Quizionic2Evanto\Quiz_IPMA_001\src\pages\tutorial\tutorial.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
], TutorialPage);

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamListCatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exam_details_exam_details__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_db_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ExamListCatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExamListCatPage = (function () {
    function ExamListCatPage(nav, navParams, dbService) {
        this.nav = nav;
        this.navParams = navParams;
        this.dbService = dbService;
        this.nav = nav;
        //this.dbService = DbService;
        this.source = navParams.get('readySource');
        this.user = navParams.get('user');
        this.adId = navParams.get('adId');
        //console.log(source);
    }
    ExamListCatPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.dbService.findAllEnabledExamsNested().then(function (data) {
            _this.exams = data;
        });
    };
    ExamListCatPage.prototype.itemTapped = function (event, exam) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__exam_details_exam_details__["a" /* ExamDetailsPage */], {
            exam: exam,
            source: this.source,
            user: this.user,
            adId: this.adId,
        });
    };
    return ExamListCatPage;
}());
ExamListCatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-exam-list-cat',template:/*ion-inline-start:"C:\Users\Jair Acevedo\IONIC_PROJECTS\Quizionic2Evanto\Quiz_IPMA_001\src\pages\exam-list-cat\exam-list-cat.html"*/'<!--\n\n  Generated template for the ExamListCatPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Exámenes por Categoría</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="exam-list">\n\n  <ion-card>\n\n      <ion-card-header class="storeCardHeader">\n\n        <ion-icon name="school"></ion-icon>\n\n      </ion-card-header>\n\n\n\n      <div class="card-header">\n\n        <ion-row >\n\n          <ion-col width-100>\n\n            <span>Exámenes Disponibles</span>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n    <ion-list>\n\n      <!--on-changes-->\n\n        <ion-item-sliding *ngFor="let exam of exams" >\n\n            <button ion-item (click)="itemTapped($event, exam)">\n\n                <ion-icon item-left name="{{exam.Icon}}" >\n\n                </ion-icon>\n\n                <h2>{{exam.ExamTitle}}</h2>\n\n                <p>Preguntas: {{exam.Qty}}, Tiempo: {{exam.Duration}}s</p>\n\n                <p>Puntaje Min.: {{exam.MinScore}}%</p>\n\n            </button>\n\n        </ion-item-sliding>\n\n      <!--/on-changes-->\n\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jair Acevedo\IONIC_PROJECTS\Quizionic2Evanto\Quiz_IPMA_001\src\pages\exam-list-cat\exam-list-cat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_db_service__["a" /* DbService */]])
], ExamListCatPage);

//# sourceMappingURL=exam-list-cat.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exam_list_exam_list__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__exam_list_cat_exam_list_cat__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ExamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExamsPage = (function () {
    function ExamsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ExamsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExamsPage');
    };
    ExamsPage.prototype.goToExamListPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__exam_list_exam_list__["a" /* ExamListPage */]);
    };
    ExamsPage.prototype.goToExamListCatPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__exam_list_cat_exam_list_cat__["a" /* ExamListCatPage */]);
    };
    return ExamsPage;
}());
ExamsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-exams',template:/*ion-inline-start:"C:\Users\Jair Acevedo\IONIC_PROJECTS\Quizionic2Evanto\Quiz_IPMA_001\src\pages\exams\exams.html"*/'<!--\n\n  Generated template for the ExamsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Exámenes</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="exam-list">\n\n  <ion-card>\n\n      <ion-card-header class="storeCardHeader">\n\n        <ion-icon name="school"></ion-icon>\n\n      </ion-card-header>\n\n\n\n      <div class="card-header">\n\n        <ion-row >\n\n          <ion-col width-100>\n\n            <span>Exámenes Disponibles</span>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n    <ion-list>\n\n      <!--on-changes-->\n\n        <ion-item-sliding>\n\n            <button ion-item (click)="goToExamListPage()">\n\n                <h2>SIMPLES</h2>\n\n                <p>Preguntas de toda la norma de forma aleatoria</p>\n\n            </button>\n\n            <button ion-item (click)="goToExamListCatPage()">\n\n              <h2>CATEGORIZADOS</h2>\n\n              <p>Preguntas por Categoría de Competencia</p>\n\n          </button>\n\n        </ion-item-sliding>\n\n      <!--/on-changes-->\n\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Jair Acevedo\IONIC_PROJECTS\Quizionic2Evanto\Quiz_IPMA_001\src\pages\exams\exams.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
], ExamsPage);

//# sourceMappingURL=exams.js.map

/***/ }),

/***/ 122:
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
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DbService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { SQLite } from '@ionic-native/sqlite';
var QDB_NAME = 'Q2data.db';
var PDB_NAME = 'Q2progress.db';
var win = window;
var DbService = (function () {
    function DbService(platform, events) {
        var _this = this;
        this.platform = platform;
        this.events = events;
        this.platform.ready().then(function (readySource) { _this.source = readySource; });
    }
    DbService.prototype.init = function () {
        if (win.sqlitePlugin) {
            this.db = win.sqlitePlugin.openDatabase({
                name: QDB_NAME,
                location: 'default',
                createFromLocation: 0
            });
            this.dbp = win.sqlitePlugin.openDatabase({
                name: PDB_NAME,
                location: 'default'
            });
        }
        else {
            console.warn('Storage: SQLite plugin not installed, falling back to WebSQL. Make sure to install cordova-sqlite-storage in production!');
            this.db = win.openDatabase(QDB_NAME, '1.0', 'database1', 5 * 1024 * 1024);
            this.dbp = win.openDatabase(PDB_NAME, '1.0', 'database2', 5 * 1024 * 1024);
        }
        this.createProgressTable();
    };
    DbService.prototype.query = function (dbase, querys, params) {
        if (params === void 0) { params = []; }
        return new Promise(function (resolve, reject) {
            try {
                dbase.transaction(function (tx) {
                    tx.executeSql(querys, params, function (tx, res) { return resolve({ tx: tx, res: res }); }, function (tx, err) { return reject({ tx: tx, err: err }); });
                }, function (err) { return reject({ err: err }); });
            }
            catch (err) {
                reject({ err: err });
            }
        });
    };
    DbService.prototype.get = function (key) {
        return this.query(this.db, 'select key, value from kv where key = ? limit 1', [key]).then(function (data) {
            if (data.res.rows.length > 0) {
                //console.warn(data.res.rows.item(0).value);
                return data.res.rows.item(0).value;
            }
        });
    };
    DbService.prototype.set = function (key, value) {
        return this.query(this.db, 'insert or replace into kv(key, value) values (?, ?)', [key, value]);
    };
    DbService.prototype.remove = function (key) {
        return this.query(this.db, 'delete from kv where key = ?', [key]);
    };
    DbService.prototype.clear = function () {
        return this.query(this.db, 'delete from kv');
    };
    // for future use
    DbService.prototype.getAllProducts = function () {
        var _this = this;
        var PRODUCTS = [];
        return new Promise(function (resolve, reject) { return resolve(_this.query(_this.db, "SELECT * FROM Product").then(function (data) {
            if (data.res.rows.length > 0) {
                for (var i = 0; i < data.res.rows.length; i++) {
                    //console.log(data.res.rows.item(i));
                    PRODUCTS.push(data.res.rows.item(i));
                }
                //console.log("PRODUCTS -> " + JSON.stringify(this.PRODUCTS));
                return PRODUCTS;
            }
        }, function (error) {
            console.log("ERROR -> " + JSON.stringify(error.err));
        })); });
    };
    //----------------------------------------------------------
    // Full/Free version supportive functions ------------------
    DbService.prototype.isFullVersion = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return resolve(_this.get('PAID').then(function (data) {
            if (data != null && data == '1') {
                _this.setFullVersion();
                return true;
            }
            else {
                _this.setFreeVersion();
                return false;
            }
        })); });
    };
    DbService.prototype.setFullVersion = function () {
        this.set('PAID', '1');
        this.events.publish('paid:full', 1);
        this.unlockAll();
    };
    DbService.prototype.setFreeVersion = function () {
        this.set('PAID', '0');
        this.events.publish('paid:free', 0);
        this.lockAll();
    };
    //----------------------------------------------------------
    // Lock and Unlock functions -------------------------------
    DbService.prototype.lockAll = function () {
        var _this = this;
        var qId, cId, eId;
        console.log('lock all for Free Version called');
        this.getProperty('qId').then(function (data) { qId = data; });
        this.getProperty('cId').then(function (data) { cId = data; });
        this.getProperty('eId').then(function (data) {
            eId = data;
            _this.lockAllQuestions(qId).
                then(function (data) { return _this.lockAllCategories(cId).
                then(function (data) { return _this.lockAllExams(eId).
                then(function (data) { return console.log('Lock completed for Free Version'); }); }); });
        });
    };
    DbService.prototype.lockAllQuestions = function (id) {
        var _this = this;
        console.log('lockAllQuestions above question Id:' + id + ' called');
        return new Promise(function (resolve, reject) { return resolve(_this.query(_this.db, 'UPDATE Question SET Enabled=0 WHERE Id>' + id).then(function (data) {
            console.log("Questions locked");
            return;
        }, function (error) {
            console.log("ERROR -> " + JSON.stringify(error.err));
        })); });
    };
    DbService.prototype.lockAllCategories = function (id) {
        var _this = this;
        console.log('lockAllCategories above category Id:' + id + ' called');
        return new Promise(function (resolve, reject) { return resolve(_this.query(_this.db, 'UPDATE Category SET Enabled=0 WHERE CatId>' + id).then(function (data) {
            console.log("Categories locked");
            return;
        }, function (error) {
            console.log("ERROR -> " + JSON.stringify(error.err));
        })); });
    };
    DbService.prototype.lockAllExams = function (id) {
        var _this = this;
        console.log('lockAllExams above exam Id:' + id + ' called');
        return new Promise(function (resolve, reject) { return resolve(_this.query(_this.db, 'UPDATE ExamType SET Enabled=0 WHERE Id>' + id).then(function (data) {
            console.log("Exams locked");
            return;
        }, function (error) {
            console.log("ERROR -> " + JSON.stringify(error.err));
        })); });
    };
    DbService.prototype.unlockAll = function () {
        var _this = this;
        console.log('unlockAll called');
        this.unlockAllQuestions().
            then(function (data) { return _this.unlockAllCategories().
            then(function (data) { return _this.unlockAllExams().
            then(function (data) { return console.log('All Unlocked'); }); }); });
    };
    DbService.prototype.unlockAllQuestions = function () {
        var _this = this;
        console.log('unlockAllQuestions called');
        return new Promise(function (resolve, reject) { return resolve(_this.query(_this.db, 'UPDATE Question SET Enabled=1').then(function () {
            console.log("All questions unlocked");
            return;
        }, function (error) {
            console.log("ERROR -> " + JSON.stringify(error.err));
        })); });
    };
    DbService.prototype.unlockAllCategories = function () {
        var _this = this;
        console.log('unlockAllCategories called');
        return new Promise(function (resolve, reject) { return resolve(_this.query(_this.db, 'UPDATE Category SET Enabled=1').then(function (data) {
            console.log("All Categories unlocked");
            return;
        }, function (error) {
            console.log("ERROR -> " + JSON.stringify(error.err));
        })); });
    };
    DbService.prototype.unlockAllExams = function () {
        var _this = this;
        console.log('unlockAllExams called');
        return new Promise(function (resolve, reject) { return resolve(_this.query(_this.db, 'UPDATE ExamType SET Enabled=1').then(function (data) {
            console.log("All Exams unlocked");
            return;
        }, function (error) {
            console.log("ERROR -> " + JSON.stringify(error.err));
        })); });
    };
    DbService.prototype.unlockQuestionByCatId = function (Id) {
        var _this = this;
        console.log('unlockQuestionByCatId(' + Id + ') called');
        return new Promise(function (resolve, reject) { return resolve(_this.query(_this.db, 'UPDATE Question SET Enabled=1 WHERE (SELECT Q.Id FROM ExamType A, Question Q WHERE A.CatId=Q.CatId AND A.Id=' + Id + ')').then(function (data) {
            console.log("Questions for Exam: " + Id + "unlocked");
            return data;
        }, function (error) {
            console.log("ERROR -> " + JSON.stringify(error.err));
        })); });
    };
    DbService.prototype._unlockExamById = function (Id) {
        var _this = this;
        return new Promise(function (resolve, reject) { return resolve(_this.query(_this.db, "UPDATE ExamType SET Enabled=1 WHERE Id=" + Id).then(function (data) {
            return data;
        }, function (error) {
            console.log("ERROR -> " + JSON.stringify(error.err));
        })); });
    };
    DbService.prototype.unlockExamById = function (Id) {
        var _this = this;
        console.log('unlockExamById(' + Id + ') called');
        var id = Id;
        this.unlockQuestionByCatId(id).then(function (data) {
            console.log('questions unlocked: ' + data);
            _this._unlockExamById(id).then(function (res) {
                console.log('Exam:' + id + ' unlocked');
                return res;
            }, function (error) {
                console.log("ERROR -> " + JSON.stringify(error.err));
            });
            return;
        }, function (error) {
            console.log("ERROR -> " + JSON.stringify(error.err));
        });
    };
    //----------------------------------------------------------
    // From here supportive functions for exams-list.ts
    DbService.prototype.findAllEnabledExams = function () {
        var _this = this;
        var EXAMS = [];
        return new Promise(function (resolve, reject) { return resolve(_this.query(_this.db, "SELECT * FROM ExamType WHERE Enabled=1").then(function (data) {
            if (data.res.rows.length > 0) {
                for (var i = 0; i < data.res.rows.length; i++) {
                    //console.log(data.res.rows.item(i));
                    if (data.res.rows.item(i).is_nested == false) {
                        EXAMS.push(data.res.rows.item(i));
                    }
                }
                console.log(EXAMS);
                //console.log("EXAMS -> " + JSON.stringify(EXAMS));
                return EXAMS;
            }
        }, function (error) {
            console.log("ERROR -> " + JSON.stringify(error.err));
        })); });
    };
    // carga todos los examenes anidados o categorizados
    DbService.prototype.findAllEnabledExamsNested = function () {
        var _this = this;
        var EXAMS = [];
        return new Promise(function (resolve, reject) { return resolve(_this.query(_this.db, "SELECT * FROM ExamType WHERE Enabled=1").then(function (data) {
            if (data.res.rows.length > 0) {
                for (var i = 0; i < data.res.rows.length; i++) {
                    //console.log(data.res.rows.item(i));
                    if (data.res.rows.item(i).is_nested == true) {
                        EXAMS.push(data.res.rows.item(i));
                    }
                }
                console.log(EXAMS);
                //console.log("EXAMS -> " + JSON.stringify(EXAMS));
                return EXAMS;
            }
        }, function (error) {
            console.log("ERROR -> " + JSON.stringify(error.err));
        })); });
    };
    //----------------------------------------------------------
    // From here supportive functions for exams-detail.ts
    DbService.prototype.getQuestionById = function (Id) {
        var _this = this;
        var QUESTION = {};
        return new Promise(function (resolve, reject) { return resolve(_this.query(_this.db, "SELECT * FROM Question WHERE Id=" + Id).then(function (data) {
            if (data.res.rows.length > 0) {
                QUESTION = data.res.rows.item(0);
                console.log("QUESTION -> " + JSON.stringify(QUESTION));
                return QUESTION;
            }
        }, function (error) {
            console.log("ERROR -> " + JSON.stringify(error.err));
        })); });
    };
    DbService.prototype.getQuestionsIdByCatAndQty = function (Cat, Qty) {
        var _this = this;
        var QUESTIONS = [];
        if (this.source == 'cordova') {
            return new Promise(function (resolve, reject) { return resolve(_this.query(_this.db, "SELECT * FROM Question WHERE Question.CatId=" + Cat + " AND Question.Enabled=1 AND Question.Status<2 ORDER BY RANDOM() LIMIT " + Qty).then(function (data) {
                if (data.res.rows.length > 0) {
                    for (var i = 0; i < data.res.rows.length; i++) {
                        QUESTIONS[i] = data.res.rows.item(i).Id;
                    }
                    console.log("QUESTIONS IDs -> " + JSON.stringify(QUESTIONS));
                    return QUESTIONS;
                }
            }, function (error) {
                console.log("ERROR -> " + JSON.stringify(error.err));
            })); });
        }
        else {
            var _tempQuestionsIDs_1 = [];
            var randomNum_1;
            return new Promise(function (resolve, reject) { return resolve(_this.query(_this.db, "SELECT * FROM Question WHERE Question.CatId=" + Cat + " AND Question.Enabled=1 AND Question.Status<2").then(function (data) {
                if (data.res.rows.length > 0) {
                    for (var i = 0; i < data.res.rows.length; i++) {
                        _tempQuestionsIDs_1[i] = data.res.rows.item(i).Id;
                    }
                    for (var i = 0; i < Qty; i++) {
                        randomNum_1 = Math.floor(Math.random() * _tempQuestionsIDs_1.length);
                        QUESTIONS[i] = _tempQuestionsIDs_1[randomNum_1];
                    }
                    console.log("QUESTIONS IDs -> " + JSON.stringify(QUESTIONS));
                    return QUESTIONS;
                }
            }, function (error) {
                console.log("ERROR -> " + JSON.stringify(error.err));
            })); });
        }
    };
    DbService.prototype.getQuestionsById = function (Qty, Id) {
        var randomNum, qId;
        var ArrayQ = [];
        for (var i = 0; i < Qty; i++) {
            randomNum = Math.floor(Math.random() * Id.length);
            qId = Id[randomNum];
            this.getQuestionById(qId).then(function (res) {
                ArrayQ.push(res);
            });
        }
        return ArrayQ;
    };
    DbService.prototype.updateExplaShownInQuestionId = function (Id) {
        this.query(this.db, "UPDATE Question SET ExplanationShown='Y' WHERE Id=" + Id).then(function (data) {
            console.log('Question Id: ' + Id + ' was updated');
        });
    };
    //-------------------------------------------------------------
    // Get and Set Property functions used accross Quizionic2
    DbService.prototype.getProperty = function (property) {
        var _this = this;
        var value;
        return new Promise(function (resolve, reject) { return resolve(_this.query(_this.db, "SELECT * FROM Config WHERE property=?", [property]).then(function (data) {
            value = data.res.rows.item(0).value;
            console.log("PROPERTY GET -> " + property + " = " + value);
            return value;
        }, function (error) {
            console.log("ERROR -> " + JSON.stringify(error.err));
        })); }).catch(console.log.bind(console));
    };
    DbService.prototype.setProperty = function (nameP, value) {
        var _this = this;
        return new Promise(function (resolve, reject) { return resolve(_this.query(_this.db, "UPDATE Config SET value='" + value + "' WHERE property='" + nameP + "'").then(function (data) {
            console.log("PROPERTY SET -> " + nameP + " = " + value);
            return 0;
        }, function (error) {
            console.log("ERROR -> " + JSON.stringify(error.err));
        })); });
    };
    //-------------------------------------------------------------
    // Tracker supportive functions
    DbService.prototype.createProgressTable = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return resolve(_this.query(_this.dbp, "CREATE TABLE 'Progress' ('UserName' TEXT NOT NULL, 'ExamId' INTEGER NOT NULL, 'ExamTitle' TEXT NOT NULL, 'Date' INTEGER NOT NULL, 'Scored' INTEGER NOT NULL, 'Time' INTEGER NOT NULL)").then(function (data) {
            console.log("PROGRESS table created");
        }, function (error) {
            //console.log("ERROR -> " + JSON.stringify(error.err));
        })); });
    };
    DbService.prototype.loadProgress = function (user, lsr, examid) {
        var _this = this;
        var PROGRESS = [];
        var querys;
        if (examid) {
            querys = "SELECT datetime(Progress.Date,'unixepoch') as dt_time, Scored, ExamId, Time, CASE WHEN (Scored<80) THEN 'NO' ELSE 'YES' END AS Passed FROM Progress where UserName='" + user + "' and ExamId=" + examid + " ORDER BY Date DESC limit " + lsr;
        }
        else {
            querys = "SELECT datetime(Progress.Date,'unixepoch') as dt_time, Scored, ExamId, Time, CASE WHEN (Scored<80) THEN 'NO' ELSE 'YES' END AS Passed FROM Progress where UserName='" + user + "' ORDER BY Date DESC limit " + lsr;
        }
        return new Promise(function (resolve, reject) { return resolve(_this.query(_this.dbp, querys).then(function (data) {
            if (data.res.rows.length > 0) {
                for (var i = 0; i < data.res.rows.length; i++) {
                    PROGRESS.push(data.res.rows.item(i));
                }
                console.log("PROGRESS -> " + JSON.stringify(PROGRESS));
                return PROGRESS;
            }
        }, function (error) {
            console.log("ERROR -> " + JSON.stringify(error.err));
        })); });
    };
    DbService.prototype.updateProgress = function (user, examid, examTitle, testScore, spentTime) {
        var _this = this;
        var querys = "INSERT INTO Progress VALUES('" + user + "'," + examid + ",'" + examTitle + "',(SELECT strftime('%s','now'))," + testScore + "," + spentTime + ");";
        return new Promise(function (resolve, reject) { return resolve(_this.query(_this.dbp, querys).then(function (data) {
            console.log("INSERTED Score:" + testScore + " for User: " + user + " in Test: " + examid + " in " + spentTime + "s");
            querys = null;
        }, function (error) {
            console.log("ERROR -> " + JSON.stringify(error.err));
        })); });
    };
    DbService.prototype.getProgressByUserId = function (user) {
        var _this = this;
        var PROGRESS = [];
        var querys = "SELECT DISTINCT ExamId, ExamTitle FROM Progress WHERE UserName='" + user + "' ORDER BY ExamId";
        return new Promise(function (resolve, reject) { return resolve(_this.query(_this.dbp, querys).then(function (data) {
            if (data.res.rows.length > 0) {
                for (var i = 0; i < data.res.rows.length; i++) {
                    PROGRESS.push(data.res.rows.item(i));
                }
                //console.log("PROGRESS -> " + JSON.stringify(PROGRESS));
                return PROGRESS;
            }
        }, function (error) {
            console.log("ERROR -> " + JSON.stringify(error.err));
        })); });
    };
    return DbService;
}());
DbService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
], DbService);

//# sourceMappingURL=db-service.js.map

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/detail-review/detail-review.module": [
		291,
		5
	],
	"../pages/exam-list-cat/exam-list-cat.module": [
		295,
		4
	],
	"../pages/exams/exams.module": [
		296,
		3
	],
	"../pages/list-review/list-review.module": [
		292,
		2
	],
	"../pages/mas-info/mas-info.module": [
		293,
		1
	],
	"../pages/tutorial/tutorial.module": [
		294,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FbProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FbProvider = (function () {
    function FbProvider(platform, storage) {
        this.platform = platform;
        this.platform = platform;
        this.storage = storage;
        this.userId = '';
    }
    FbProvider.prototype.login = function () {
        var _this = this;
        var p = new Promise(function (resolve, reject) {
            if (_this.platform.is('cordova')) {
                facebookConnectPlugin.login(['email'], function (success) {
                    console.log(JSON.stringify(success));
                    _this.userId = success.authResponse.userID;
                    console.log("User logged with Facebook");
                    resolve(success);
                }, function (err) {
                    console.log(JSON.stringify(err));
                    reject(err);
                });
            }
            else {
                console.log("Please run me on a device");
                reject('Please run me on a device');
            }
        });
        return p;
    };
    FbProvider.prototype.getCurrentUserProfile = function () {
        var _this = this;
        var p = new Promise(function (resolve, reject) {
            //Get user's email and name
            facebookConnectPlugin.api('me?fields=email,name,picture', null, function (profileData) {
                _this.storage.set('userName', profileData.name);
                _this.storage.set('email', profileData.email);
                _this.storage.set('id', profileData.id);
                _this.storage.set('picture', profileData.picture.data.url);
                resolve(profileData);
            }, function (err) {
                console.log(JSON.stringify(err));
                reject(err);
            });
        });
        return p;
    };
    FbProvider.prototype.logout = function () {
        var _this = this;
        // check if there was a previous session initiated
        var p = new Promise(function (resolve, reject) {
            _this.storage.get('id').then(function (value) {
                if (value != null && typeof value != 'undefined') {
                    facebookConnectPlugin.logout(function (res) {
                        //user logged out so we will remove him from the Storage
                        _this.storage.remove('userName');
                        _this.storage.remove('email');
                        _this.storage.remove('picture');
                        _this.storage.remove('id');
                        resolve(res);
                    }, function (error) {
                        console.log(JSON.stringify(error));
                        reject(error);
                    });
                }
                else {
                    _this.storage.remove('userName');
                    _this.storage.remove('email');
                    _this.storage.remove('picture');
                    _this.storage.remove('id');
                    resolve();
                }
            });
        });
        return p;
    };
    return FbProvider;
}());
FbProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], FbProvider);

//# sourceMappingURL=fb-provider.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exam_details_exam_details__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_db_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExamListPage = (function () {
    function ExamListPage(nav, navParams, dbService) {
        this.nav = nav;
        this.navParams = navParams;
        this.dbService = dbService;
        this.nav = nav;
        //this.dbService = DbService;
        this.source = navParams.get('readySource');
        this.user = navParams.get('user');
        this.adId = navParams.get('adId');
        //console.log(source);
    }
    ExamListPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.dbService.findAllEnabledExams().then(function (data) {
            _this.exams = data;
        });
    };
    ExamListPage.prototype.itemTapped = function (event, exam) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__exam_details_exam_details__["a" /* ExamDetailsPage */], {
            exam: exam,
            source: this.source,
            user: this.user,
            adId: this.adId,
        });
    };
    return ExamListPage;
}());
ExamListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'exam-list',template:/*ion-inline-start:"C:\Users\Jair Acevedo\IONIC_PROJECTS\Quizionic2Evanto\Quiz_IPMA_001\src\pages\exam-list\exam-list.html"*/'<ion-header>\n\n  <ion-navbar color="stable">\n\n    <button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Exámenes Simples</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="exam-list">\n\n  <ion-card>\n\n      <ion-card-header class="storeCardHeader">\n\n        <ion-icon name="school"></ion-icon>\n\n      </ion-card-header>\n\n\n\n      <div class="card-header">\n\n        <ion-row >\n\n          <ion-col width-100>\n\n            <span>Exámenes Disponibles</span>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n    <ion-list>\n\n      <!--on-changes-->\n\n        <ion-item-sliding *ngFor="let exam of exams" >\n\n            <button ion-item (click)="itemTapped($event, exam)">\n\n                <ion-icon item-left name="{{exam.Icon}}" >\n\n                </ion-icon>\n\n                <h2>{{exam.ExamTitle}}</h2>\n\n                <p>Preguntas: {{exam.Qty}}, Tiempo: {{exam.Duration}}s</p>\n\n                <p>Puntaje Min.: {{exam.MinScore}}%</p>\n\n            </button>\n\n        </ion-item-sliding>\n\n      <!--/on-changes-->\n\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jair Acevedo\IONIC_PROJECTS\Quizionic2Evanto\Quiz_IPMA_001\src\pages\exam-list\exam-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_db_service__["a" /* DbService */]])
], ExamListPage);

//# sourceMappingURL=exam-list.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeveloperPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_db_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeveloperPage = (function () {
    function DeveloperPage(nav, events, navParams, storage, dbService) {
        var _this = this;
        this.nav = nav;
        this.events = events;
        this.navParams = navParams;
        this.storage = storage;
        this.dbService = dbService;
        this.dbService.getProperty('highlight').then(function (data) { return _this._hlra = data; });
        this.dbService.getProperty('admob').then(function (data) { return _this._admob = data; });
        this.dbService.getProperty('login').then(function (data) { return _this._login = data; });
        this.dbService.getProperty('fullversion').then(function (data) { return _this._fullv = data; });
        this.dbService.getProperty('explanation').then(function (data) { return _this._expla = data; });
        this.dbService.getProperty('explanationq').then(function (data) { return _this._quantity = data; });
        this.dbService.getProperty('qId').then(function (data) { return _this._qId = data; });
        this.dbService.getProperty('cId').then(function (data) { return _this._cId = data; });
        this.dbService.getProperty('eId').then(function (data) { return _this._eId = data; });
    }
    DeveloperPage.prototype.logEvent = function (e, pname) {
        console.log(e, pname);
        if (pname == 'fullversion') {
            if (e.checked) {
                this.dbService.setFullVersion();
            }
            else {
                this.dbService.setFreeVersion();
            }
        }
        if (e.checked) {
            this.dbService.setProperty(pname, 'true');
        }
        else {
            this.dbService.setProperty(pname, 'false');
        }
    };
    DeveloperPage.prototype.update = function (value, key) {
        if (value != '') {
            this.dbService.setProperty(key, value);
        }
    };
    return DeveloperPage;
}());
DeveloperPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'developer',template:/*ion-inline-start:"C:\Users\Jair Acevedo\IONIC_PROJECTS\Quizionic2Evanto\Quiz_IPMA_001\src\pages\developer\developer.html"*/'<ion-header>\n  <ion-navbar color="stable">\n    <button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Developer Assistant</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="developer">\n  <ion-card>\n      <ion-card-header class="storeCardHeader">\n        <ion-icon name="build"></ion-icon>\n      </ion-card-header>\n\n      <div class="card-header">\n        <ion-row >\n          <ion-col width-100>\n            <span>Available Config</span>\n          </ion-col>\n        </ion-row>\n      </div>\n    <ion-list>\n      <!--on-changes-->\n        <ion-item>\n          <ion-label>Questions lock > </ion-label>\n          <ion-input type="number" [(ngModel)]="_qId" (input)="update($event.target.value, \'qId\')"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Categories lock > </ion-label>\n          <ion-input type="number" [(ngModel)]="_cId" (input)="update($event.target.value, \'cId\')"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Exams lock > </ion-label>\n          <ion-input type="number" [(ngModel)]="_eId" (input)="update($event.target.value, \'eId\')"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Login Page?</ion-label>\n          <ion-checkbox primary [(ngModel)]="_login" (ionChange)="logEvent($event,\'login\')"></ion-checkbox>\n        </ion-item>\n        <ion-item>\n          <ion-label>Admob Visible?</ion-label>\n          <ion-checkbox primary [(ngModel)]="_admob" (ionChange)="logEvent($event,\'admob\')"></ion-checkbox>\n        </ion-item>\n        <ion-item>\n          <ion-checkbox primary [(ngModel)]="_expla" (ionChange)="logEvent($event,\'explanation\')"></ion-checkbox>\n          <ion-label>Allow Explanations?</ion-label>\n        </ion-item>\n        <ion-item *ngIf="_expla">\n          <ion-label >Set Explanations: </ion-label>\n          <ion-input type="number" [(ngModel)]="_quantity" (input)="update($event.target.value, \'explanationq\')"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-checkbox primary [(ngModel)]="_fullv" (ionChange)="logEvent($event,\'fullversion\')"></ion-checkbox>\n          <ion-label>Full Version</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-checkbox primary [(ngModel)]="_hlra" (ionChange)="logEvent($event,\'highlight\')"></ion-checkbox>\n          <ion-label>Highlight Right Answer?</ion-label>\n        </ion-item>\n      <!--/on-changes-->\n    </ion-list>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jair Acevedo\IONIC_PROJECTS\Quizionic2Evanto\Quiz_IPMA_001\src\pages\developer\developer.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_db_service__["a" /* DbService */]])
], DeveloperPage);

//# sourceMappingURL=developer.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackerListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tracker_details_tracker_details__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_db_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TrackerListPage = (function () {
    function TrackerListPage(nav, storage, navParams, dbService) {
        this.nav = nav;
        this.storage = storage;
        this.navParams = navParams;
        this.dbService = dbService;
        this.nav = nav;
        //let selectedItem = navParams.get('item');
        //this.user = navParams.get('user');
        this.source = navParams.get('readySource');
    }
    TrackerListPage.prototype.ngOnInit = function () {
        var _this = this;
        // if login feature is activated then user is set with user's name
        this.dbService.getProperty('login').then(function (data) {
            if (data == 'true') {
                _this.storage.get('userName').then(function (data) {
                    if (typeof data == "undefined" || data == null) {
                        _this.user = "StudioMob";
                        _this.loadData(_this.user);
                    }
                    else {
                        _this.user = data;
                        _this.loadData(_this.user);
                    }
                });
            }
            else {
                _this.user = "StudioMob";
                _this.loadData(_this.user);
            }
        });
    };
    TrackerListPage.prototype.loadData = function (user) {
        var _this = this;
        this.dbService.getProgressByUserId(user).then(function (data) {
            _this.progressList = data;
        });
        if (this.source == 'cordova') {
            analytics.trackView('Tracker-List');
        }
    };
    TrackerListPage.prototype.itemTapped = function (progressExam) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__tracker_details_tracker_details__["a" /* TrackerExamDetailPage */], {
            progressExam: progressExam,
            user: this.user,
        });
    };
    return TrackerListPage;
}());
TrackerListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'tracker-list',template:/*ion-inline-start:"C:\Users\Jair Acevedo\IONIC_PROJECTS\Quizionic2Evanto\Quiz_IPMA_001\src\pages\tracker-list\tracker-list.html"*/'<ion-header>\n\n  <ion-navbar color="stable">\n\n    <button menuToggle>\n\n        <ion-icon name="progress"></ion-icon>\n\n    </button>\n\n    <ion-title>Seguimiento de Exámenes</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="tracker-list">\n\n  <ion-card>\n\n      <ion-card-header class="storeCardHeader">\n\n        <ion-icon name="stats"></ion-icon>\n\n      </ion-card-header>\n\n\n\n      <div class="card-header">\n\n        <ion-row >\n\n          <ion-col width-100>\n\n            <span>Progresos Disponibles</span>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n\n\n      <!-- <ion-list>\n\n        <ion-item-sliding *ngFor="let pList of progressList">\n\n          <button ion-item (click)="itemTapped(pList)">\n\n            <h2>{{pList.ExamTitle}}</h2>\n\n          </button>\n\n        </ion-item-sliding>\n\n      </ion-list> -->\n\n\n\n      <ion-list>\n\n        <ion-item *ngFor="let pList of progressList">\n\n          <button ion-item (click)="itemTapped(pList)">\n\n            <h2>{{pList.ExamTitle}}</h2>\n\n          </button>\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jair Acevedo\IONIC_PROJECTS\Quizionic2Evanto\Quiz_IPMA_001\src\pages\tracker-list\tracker-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_db_service__["a" /* DbService */]])
], TrackerListPage);

//# sourceMappingURL=tracker-list.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackerExamDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_db_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrackerExamDetailPage = (function () {
    function TrackerExamDetailPage(nav, navParams, dbService) {
        this.nav = nav;
        this.navParams = navParams;
        this.dbService = dbService;
        this.ChartData = [
            {
                data: [],
                label: '',
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(54, 112, 135, 0.2)',
                    'rgba(255, 106, 186, 0.2)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(54, 112, 135, 1)',
                    'rgba(255, 106, 186, 1)',
                ],
                borderWidth: 1
            }
        ];
        this.ChartLabels = [];
        this.ChartOptions = {
            animation: {
                duration: 1000,
                easing: 'easeInQuad'
            },
            responsive: true,
            scales: {
                yAxes: [{
                        ticks: {
                            max: 100,
                            min: 0,
                            stepSize: 20
                        }
                    }]
            }
        };
        this.ChartColours = [
            {
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(54, 112, 135, 0.2)',
                    'rgba(255, 106, 186, 0.2)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(54, 112, 135, 1)',
                    'rgba(255, 106, 186, 1)',
                ],
                borderWidth: 1
            }
        ];
        this.ChartLegend = true;
        this.ChartType = 'bar';
        this.nav = nav;
        var progressExam = navParams.get('progressExam');
        this.title = progressExam.ExamTitle;
        this.examid = progressExam.ExamId;
        this.user = navParams.get('user');
    }
    TrackerExamDetailPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        //let progressData: any = [];
        this.dbService.loadProgress(this.user, 8, this.examid).then(function (data) {
            _this.progressData = data;
            // we invert array to represent values based on time
            _this.progressData.reverse();
            for (var i = 0; i < _this.progressData.length; i++) {
                _this.ChartData[0].data.push(_this.progressData[i].Scored);
                _this.ChartLabels.push('#' + (i + 1));
                _this.progressData[i].index = i + 1;
            }
            _this.ChartData[0].label = _this.title;
            //Chart.defaults.global.defaultFontColor = 'white';
            // we reinvert the array to present most recent score first in
            _this.progressData.reverse();
            _this.showChart();
        });
    };
    TrackerExamDetailPage.prototype.showChart = function () {
        var ctx, myChart;
        ctx = document.getElementById("myChart");
        myChart = new Chart(ctx, {
            type: this.ChartType,
            options: this.ChartOptions,
            data: {
                labels: this.ChartLabels,
                datasets: this.ChartData,
            }
        });
    };
    return TrackerExamDetailPage;
}());
TrackerExamDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'tracker-details',template:/*ion-inline-start:"C:\Users\Jair Acevedo\IONIC_PROJECTS\Quizionic2Evanto\Quiz_IPMA_001\src\pages\tracker-details\tracker-details.html"*/'<ion-header>\n\n  <ion-navbar color="stable">\n\n    <button menuToggle>\n\n        <ion-icon name="trackerDetail"></ion-icon>\n\n    </button>\n\n    <ion-title>Tu progreso</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="tracker">\n\n  <div class="chart-container" >\n\n  <div class="row">\n\n      <div class="col-sm-6">\n\n        <canvas id="myChart" style="position: relative; height:40vh; width:100vw"></canvas>\n\n        <base-chart class="chart"\n\n                    [datasets]="ChartData"\n\n                    [labels]="ChartLabels"\n\n                    [options]="ChartOptions"\n\n                    [colors]="ChartColours"\n\n                    [legend]="ChartLegend"\n\n                    [chartType]="ChartType"\n\n                    ></base-chart>\n\n      </div>\n\n\n\n      <ion-list class="tracker-detail-list">\n\n        <ion-item *ngFor="let p of progressData">\n\n                <h2 item-left padding >#{{p.index}}</h2>\n\n          <ion-icon *ngIf="p.Passed==\'YES\'" item-right color="secondary" name="checkmark-circle"></ion-icon>\n\n          <ion-icon *ngIf="p.Passed==\'NO\'" item-right color="danger" name="close-circle"></ion-icon>\n\n                <h2>Puntaje: {{p.Scored}}%</h2>\n\n                <p>Fecha & Hora: {{p.dt_time}}</p>\n\n        </ion-item>\n\n      </ion-list>\n\n  </div>\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jair Acevedo\IONIC_PROJECTS\Quizionic2Evanto\Quiz_IPMA_001\src\pages\tracker-details\tracker-details.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_db_service__["a" /* DbService */]])
], TrackerExamDetailPage);

//# sourceMappingURL=tracker-details.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_store_service__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import {OnInit} from '@angular/core';


var StoreDetailPage = (function () {
    function StoreDetailPage(nav, navParams, storeService) {
        this.nav = nav;
        this.navParams = navParams;
        this.storeService = storeService;
        this.nav = nav;
        this.storeService = storeService;
        this.product = navParams.get('product');
        this.condition = navParams.get('condition');
    }
    StoreDetailPage.prototype.restoreTapped = function () {
        this.storeService.restorePurchases().subscribe(function (data) { return console.log('Restored purchases: ' + data); });
    };
    StoreDetailPage.prototype.purchaseTapped = function (product) {
        var _this = this;
        console.log('Purchase button clicked on: ' + product.productId);
        this.storeService.purchaseProduct(product, function (success) {
            setTimeout(function () { return _this.nav.pop(); }, 1000);
        }, function (error) {
            console.log('Purchase not completed');
        });
    };
    return StoreDetailPage;
}());
StoreDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'store-details',template:/*ion-inline-start:"C:\Users\Jair Acevedo\IONIC_PROJECTS\Quizionic2Evanto\Quiz_IPMA_001\src\pages\store-details\store-details.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Store {{condition}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="productDetail">\n    <div>\n        <ion-card *ngIf="condition==\'purchase\'">\n            <ion-card-content>\n                <!--<img src="{{product.picture}}"/>-->\n                <h2>Do you want to purchase ?</h2>\n                <h1>{{product.title}}</h1>\n                <p>Price: {{product.price}}</p>\n                <p>{{product.description}}</p>\n            </ion-card-content>\n\n        <div class="card-footer">\n              <button full (click)="purchaseTapped(product)">\n                  Click here to buy it\n              </button>\n        </div>\n        </ion-card>\n        <ion-card *ngIf="condition==\'restore\'">\n            <ion-card-content>\n                <!--<img src="{{product.picture}}"/>-->\n                <h2>Do you want to restore</h2>\n                <h1>purchased products?</h1>\n                <p>non-consumable only</p>\n            </ion-card-content>\n\n        <div class="card-footer">\n              <button full (click)="restoreTapped(product)">\n                  Click here to restore\n              </button>\n        </div>\n        </ion-card>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jair Acevedo\IONIC_PROJECTS\Quizionic2Evanto\Quiz_IPMA_001\src\pages\store-details\store-details.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_store_service__["a" /* StoreService */]])
], StoreDetailPage);

//# sourceMappingURL=store-details.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PINDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_db_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PINDetailPage = (function () {
    function PINDetailPage(platform, alertCtrl, http, viewCtrl, dbService, device, storage, navCtrl, navParams) {
        var _this = this;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.viewCtrl = viewCtrl;
        this.dbService = dbService;
        this.device = device;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform.ready().then(function (readySource) { _this.source = readySource; });
    }
    PINDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PinDetail');
    };
    PINDetailPage.prototype.dismiss = function (email, telephone) {
        var _this = this;
        if (email != null && email != "" && telephone != null && telephone != "") {
            //define the message
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            var requestMsg = {
                username: "Quizionic2",
                telephone: telephone,
                email: email,
                uuid: "0DF0B0CE-BBF6-4A9B-B14D-67485B5F3D18"
            };
            if (this.source != "dom") {
                requestMsg.uuid = this.device.uuid;
            }
            this.http.post('http://www.studiomob.ca/pin/requestPin.php', JSON.stringify(requestMsg), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                var alert = _this.alertCtrl.create({
                    title: 'PIN Requested',
                    subTitle: 'A SMS with your PIN will be provided shorthly.',
                });
                alert.present();
            });
            //this.viewCtrl.dismiss();
        }
    };
    return PINDetailPage;
}());
PINDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pin-detail',template:/*ion-inline-start:"C:\Users\Jair Acevedo\IONIC_PROJECTS\Quizionic2Evanto\Quiz_IPMA_001\src\pages\pin-detail\pin-detail.html"*/'<ion-header>\n  <ion-navbar color="stable">\n    <ion-title>PIN Request Form</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div>\n        <ion-card>\n            <ion-card-content>\n                <h2>Enter your information</h2>\n                <ion-item>\n                  <ion-label floating>Email:</ion-label>\n                  <ion-input type="email" [(ngModel)]="email" name="email" required></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label floating>Telephone:</ion-label>\n                  <ion-input type="tel" [(ngModel)]="telephone" name="telephone" required></ion-input>\n                </ion-item>\n            </ion-card-content>\n\n        <div class="card-footer">\n              <button full (click)="dismiss(email, telephone)">\n                  Submit PIN Request\n              </button>\n        </div>\n        </ion-card>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jair Acevedo\IONIC_PROJECTS\Quizionic2Evanto\Quiz_IPMA_001\src\pages\pin-detail\pin-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_db_service__["a" /* DbService */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
], PINDetailPage);

//# sourceMappingURL=pin-detail.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_welcome_welcome__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_developer_developer__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_exam_list_exam_list__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_exam_details_exam_details__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tracker_list_tracker_list__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_store_details_store_details__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_pin_pin__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_pin_detail_pin_detail__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tracker_details_tracker_details__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_store_list_store_list__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_db_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_sqlite__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_store_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_fb_provider__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_google_analytics__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_admob__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_mas_info_mas_info__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_list_review_list_review__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_detail_review_detail_review__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_exams_exams__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_exam_list_cat_exam_list_cat__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_tutorial_tutorial__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_developer_developer__["a" /* DeveloperPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_exam_list_exam_list__["a" /* ExamListPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_exam_details_exam_details__["a" /* ExamDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_store_details_store_details__["a" /* StoreDetailPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_tracker_details_tracker_details__["a" /* TrackerExamDetailPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tracker_list_tracker_list__["a" /* TrackerListPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_store_list_store_list__["a" /* StoreListPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_pin_pin__["a" /* Pin */],
            __WEBPACK_IMPORTED_MODULE_15__pages_pin_detail_pin_detail__["a" /* PINDetailPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_mas_info_mas_info__["a" /* MasInfoPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_list_review_list_review__["a" /* ListReviewPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_detail_review_detail_review__["a" /* DetailReviewPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_exams_exams__["a" /* ExamsPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_tutorial_tutorial__["a" /* TutorialPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_exam_list_cat_exam_list_cat__["a" /* ExamListCatPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/detail-review/detail-review.module#DetailReviewPageModule', name: 'DetailReviewPage', segment: 'detail-review', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/list-review/list-review.module#ListReviewPageModule', name: 'ListReviewPage', segment: 'list-review', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mas-info/mas-info.module#MasInfoPageModule', name: 'MasInfoPage', segment: 'mas-info', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/exam-list-cat/exam-list-cat.module#ExamListCatPageModule', name: 'ExamListCatPage', segment: 'exam-list-cat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/exams/exams.module#ExamsPageModule', name: 'ExamsPage', segment: 'exams', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_developer_developer__["a" /* DeveloperPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_exam_details_exam_details__["a" /* ExamDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_store_details_store_details__["a" /* StoreDetailPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_tracker_details_tracker_details__["a" /* TrackerExamDetailPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_exam_list_exam_list__["a" /* ExamListPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tracker_list_tracker_list__["a" /* TrackerListPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_store_list_store_list__["a" /* StoreListPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_pin_pin__["a" /* Pin */],
            __WEBPACK_IMPORTED_MODULE_15__pages_pin_detail_pin_detail__["a" /* PINDetailPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_mas_info_mas_info__["a" /* MasInfoPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_list_review_list_review__["a" /* ListReviewPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_detail_review_detail_review__["a" /* DetailReviewPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_exams_exams__["a" /* ExamsPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_tutorial_tutorial__["a" /* TutorialPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_exam_list_cat_exam_list_cat__["a" /* ExamListCatPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_24__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_25__ionic_native_admob__["a" /* AdMob */], __WEBPACK_IMPORTED_MODULE_19__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_18__providers_db_service__["a" /* DbService */], __WEBPACK_IMPORTED_MODULE_20__providers_store_service__["a" /* StoreService */],
            //Storage,
            __WEBPACK_IMPORTED_MODULE_21__providers_fb_provider__["a" /* FbProvider */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicErrorHandler */] }
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_store_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_db_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_developer_developer__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tracker_list_tracker_list__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_analytics__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_admob__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_mas_info_mas_info__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tutorial_tutorial__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_exams_exams__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
var introShown;
var MyApp = (function () {
    function MyApp(platform, events, dbService, storage, storeService, statusBar, splashScreen, analytics, admob, loadingCtrl) {
        var _this = this;
        this.platform = platform;
        this.events = events;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.analytics = analytics;
        this.admob = admob;
        this.loadingCtrl = loadingCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */];
        this.user = '';
        this.email = '';
        this.presentLoading();
        this.platform.ready().then(function () {
            _this.storage.get(introShown).then(function (result) {
                if (result) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_14__pages_tutorial_tutorial__["a" /* TutorialPage */];
                    _this.storage.set(introShown, true);
                }
                _this.loader.dismiss();
            });
        });
        //set app's pages. paid = 0, option always present in menu, paid = 1, only displayed in full version
        this.pages = [
            { title: 'Bienvenido', component: __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */], icon: 'bookmark', paid: 0 },
            // {title: 'Exámenes', component: ExamListPage, icon: 'cube', paid: 0},
            { title: 'Tutorial', component: __WEBPACK_IMPORTED_MODULE_14__pages_tutorial_tutorial__["a" /* TutorialPage */], icon: 'cube', paid: 0 },
            { title: 'Exámenes', component: __WEBPACK_IMPORTED_MODULE_15__pages_exams_exams__["a" /* ExamsPage */], icon: 'cube', paid: 0 },
            { title: 'Resultados', component: __WEBPACK_IMPORTED_MODULE_8__pages_tracker_list_tracker_list__["a" /* TrackerListPage */], icon: "arrow-graph-up-right", paid: 0 },
            { title: 'Más Info', component: __WEBPACK_IMPORTED_MODULE_13__pages_mas_info_mas_info__["a" /* MasInfoPage */], icon: "arrow-graph-up-right", paid: 0 },
        ];
        this.storage = storage;
        this.dbService = dbService;
        this.storeService = storeService;
        this.statusBar.styleDefault();
        this.initializeApp();
        //this.loadProfile(1);
    }
    MyApp.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Cargando..."
        });
        this.loader.present();
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function (readySource) {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            console.log('Platform ready from', readySource);
            _this.readySource = readySource;
            if (readySource == 'cordova') {
                _this.statusBar.styleDefault();
                if (_this.platform.is('ios')) {
                    // Copy data.db from Application folder into Document Database folder
                    window.plugins.sqlDB.copy("Q2data.db", 0, function (success) {
                        // Initialize database service (DbService)
                        _this.dbService.init();
                    }, function (error) {
                        console.log("Error Code = " + JSON.stringify(error));
                    });
                }
                else {
                    // Copy data.db - Android destination
                    window.plugins.sqlDB.copy("Q2data.db", 0, function (success) {
                        // Initialize database service (DbService)
                        _this.dbService.init();
                    }, function (error) {
                        console.log("Error Code = " + JSON.stringify(error));
                    });
                }
                // Google AdMob setup
                _this.admobid = {};
                if (/(android)/i.test(navigator.userAgent)) {
                    _this.admobid = {
                        banner: 'ca-app-pub-3709095601931870/3837206546',
                        interstitial: 'ca-app-pub-3709095601931870/8267406146' // change this value with your Android AdMob Interstitial ID
                    };
                }
                else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
                    _this.admobid = {
                        banner: 'ca-app-pub-3709095601931870/7754515340',
                        interstitial: 'ca-app-pub-3709095601931870/9231248541' // change this value with your iOS AdMob Interstitial ID
                    };
                }
                // Init AdMob
                if (!_this.admob) {
                    alert('admob plugin not ready');
                    return;
                }
                else {
                    // customize banner appearance
                    _this.admob.createBanner({
                        adId: _this.admobid.banner,
                        isTesting: false,
                        overlap: false,
                        autoShow: false,
                        position: _this.admob.AD_POSITION.BOTTOM_CENTER
                    });
                    // customize interstitial
                    _this.admob.prepareInterstitial({
                        adId: _this.admobid.interstitial,
                        autoShow: false
                    });
                    _this.ad = _this.admobid.interstitial;
                }
                // Initialize Google Analytics plugin
                if (_this.analytics) {
                    // Change these values with yours IDs
                    var tracking_ID = _this.platform.is('ios') ? "UA-63761768-4" : "UA-63761768-5";
                    //window.analytics.debugMode();
                    _this.analytics.startTrackerWithId(tracking_ID);
                    _this.analytics.setUserId('Quizionic2');
                    _this.analytics.trackView('Quizionic2 Home');
                    console.log("GA activated");
                }
                // Initialize database service (DbService)
                _this.dbService.init();
                // Initialize storeService (IAP)
                _this.storeService.init();
            }
            else {
                _this.ad = 0;
                // Initialize database service (DbService)
                _this.dbService.init();
                _this.storeService.init();
            }
            // this.dbService.isFullVersion().then(data => this._Paid = data);
            // To force Full Version as default uncomment the 3 lines below
            _this.dbService.setProperty('fullversion', 'true');
            _this.dbService.setFullVersion();
            _this.dbService.setProperty('admob', 'false');
            _this.splashScreen.hide();
            _this.dbService.getProperty('login').then(function (data) {
                if (data == 'true') {
                    _this.loadProfile(1);
                }
            });
        });
        this.events.subscribe('paid:full', function () { return _this._Paid = 1; });
        this.events.subscribe('paid:free', function () { return _this._Paid = 0; });
        this.events.subscribe('loggedIn', function (val) { return _this.loadProfile(val); });
    };
    MyApp.prototype.loadProfile = function (val) {
        var _this = this;
        if (val == 1) {
            this.storage.get('userName').then(function (name) { return _this.user = name; });
            this.storage.get('email').then(function (email) { return _this.email = email; });
            this.storage.get('picture').then(function (picture) { return _this.picture = picture; });
            if (this.pages[this.pages.length - 1].title != 'Cerrar Sesión') {
                this.pages.push({ title: 'Cerrar Sesión', component: __WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */], icon: "key", paid: 0 });
            }
        }
        else {
            this.user = '';
            this.pages.pop();
        }
    };
    MyApp.prototype.openDeveloperPage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_developer_developer__["a" /* DeveloperPage */]);
    };
    MyApp.prototype.openPage = function (page) {
        var user = "StudioMob";
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.component == __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */]) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */]);
        }
        else {
            if (page.component == __WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]) {
                this.nav.push(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */], {
                    logout: true
                });
            }
            else {
                this.nav.push(page.component, {
                    readySource: this.readySource,
                    user: user,
                    adId: this.ad
                });
            }
        }
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app',template:/*ion-inline-start:"C:\Users\Jair Acevedo\IONIC_PROJECTS\Quizionic2Evanto\Quiz_IPMA_001\src\app\app.html"*/'<ion-menu #menu [content]="content" side="left" id="menu">\n\n<ion-header id="header">\n\n    <ion-toolbar id="toolbarT">\n\n      <ion-title *ngIf="_Paid==0">Free version</ion-title>\n\n      <!-- <ion-title *ngIf="_Paid==1">Full version</ion-title> -->\n\n      <ion-title *ngIf="_Paid==1">CCDP IPMA Chile</ion-title>\n\n    </ion-toolbar>\n\n      <div class="ava">\n\n      <ion-item class="item-avatar" item-left *ngIf="user!=\'\'">\n\n        <ion-avatar item-left>\n\n            <img spinner-on-load src="{{picture}}">\n\n        </ion-avatar>\n\n        <h2>Hola {{user}}</h2>\n\n        <p>{{email}}</p>\n\n    </ion-item>\n\n  </div>\n\n</ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list *ngFor="let p of pages" >\n\n        <button menuClose ion-item *ngIf="p.paid<=_Paid"(click)="openPage(p)">\n\n          {{p.title}}\n\n        </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n  <!-- <ion-footer class="ftitle">\n\n           <button menuClose ion-button icon-only (click)="openDeveloperPage()">\n\n            <ion-icon name="build"></ion-icon>\n\n          </button> -->\n\n          <!-- <ion-title>IPMA chile 001</ion-title>\n\n  </ion-footer> -->\n\n</ion-menu>\n\n\n\n<ion-view>\n\n  <ion-nav id="nav" [root]="rootPage" #content swipe-back-enabled="false"></ion-nav>\n\n</ion-view>\n\n'/*ion-inline-end:"C:\Users\Jair Acevedo\IONIC_PROJECTS\Quizionic2Evanto\Quiz_IPMA_001\src\app\app.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__providers_db_service__["a" /* DbService */], __WEBPACK_IMPORTED_MODULE_4__providers_store_service__["a" /* StoreService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_5__providers_db_service__["a" /* DbService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4__providers_store_service__["a" /* StoreService */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
        __WEBPACK_IMPORTED_MODULE_12__ionic_native_admob__["a" /* AdMob */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PRODUCTS; });
var PRODUCTS = [
    {
        "productId": "quiz2_no_ads",
        "title": "No Advertising",
        "price": "$0.99",
        "description": "Non-Consumable: No Advertising",
        "type": "non_consumable"
    },
    {
        "productId": "quiz2_exams_x1",
        "title": "Unlock 1 Exam",
        "price": "$2.99",
        "description": "Non-Consumable: 1 Exam to Unlock",
        "type": "non_consumable"
    },
    {
        "productId": "quiz2_exams_x3",
        "title": "Unlock 3 Exams",
        "price": "$6.99",
        "description": "Non-Consumable: 3 Exams to Unlock",
        "type": "non_consumable"
    },
    {
        "productId": "quiz2_expla_x5",
        "title": "Explanations x5",
        "price": "$1.99",
        "description": "Consumable: Adds 5 explanations view",
        "type": "consumable"
    },
    {
        "productId": "quiz2_expla_x10",
        "title": "Explanations x10",
        "price": "$2.99",
        "description": "Consumable: Adds 10 explanations view",
        "type": "consumable"
    },
    {
        "productId": "quiz2_expla_x50",
        "title": "Explanations x50",
        "price": "$4.99",
        "description": "Consumable: Adds 50 explanations view",
        "type": "consumable"
    },
    {
        "productId": "quiz2_f_version",
        "title": "Full Version Unlock",
        "price": "$9.99",
        "description": "Non-Consumable: All Explanations & No Ads",
        "type": "consumable"
    }
];
//# sourceMappingURL=mock-store.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pin_detail_pin_detail__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_db_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Pin = (function () {
    function Pin(device, platform, navCtrl, dbService, modalCtrl, events, storage, alertCtrl, navParams) {
        var _this = this;
        this.device = device;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.dbService = dbService;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.new_pin = "";
        this.platform.ready().then(function (readySource) { _this.source = readySource; console.log('Source: ', _this.source); });
    }
    Pin.prototype.showAlert = function (title, message) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: [{
                    text: 'Close',
                    handler: function () {
                        setTimeout(function () { return _this.navCtrl.pop(); }, 1000);
                    }
                }]
        });
        alert.present();
    };
    Pin.prototype.requestPIN = function () {
        var modal;
        modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__pin_detail_pin_detail__["a" /* PINDetailPage */], {});
        modal.onDidDismiss(function (data) {
            console.log("modal closed");
            //this.reload()
        });
        modal.present();
    };
    // Handle the PIN verification
    Pin.prototype.enterPIN = function (pin) {
        var secureCode = null;
        var str = null;
        var val = null;
        var arr = [];
        if (this.source != "cordova") {
            arr = "0DF0B0CE-BBF6-4A9B-B14D-67485B5F3D18".split('-'); // just for browser
        }
        else {
            arr = this.device.uuid.split('-');
        }
        if (arr[1] == null) {
            // Android
            str = arr[0].slice(2, 10);
            secureCode = parseInt(str, 16);
        }
        else {
            // iOS
            val = arr[3] + arr[1];
            secureCode = parseInt(arr[0], 16) + parseInt(val, 16);
        }
        if (pin == secureCode) {
            console.log("purchaseProduct");
            this.dbService.setProperty('fullversion', 'true');
            this.dbService.setFullVersion();
            this.dbService.setProperty('admob', 'false');
            this.showAlert('Full Version Unlocked', 'Thanks for purchasing Quizionic full version!');
        }
        else {
            this.showAlert('PIN not valid', 'Please provide a valid one.');
            console.log("PIN not valid");
        }
        ;
    };
    ;
    Pin.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Pin');
    };
    return Pin;
}());
Pin = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pin',template:/*ion-inline-start:"C:\Users\Jair Acevedo\IONIC_PROJECTS\Quizionic2Evanto\Quiz_IPMA_001\src\pages\pin\pin.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>PIN Management</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="productDetail">\n    <div>\n        <ion-card>\n            <ion-card-content>\n                <h2>Unlock Full Version ?</h2>\n                <h1></h1>\n                <p>Track your progress</p>\n                <p>Block Ads</p>\n            </ion-card-content>\n\n        <div class="card-footer">\n              <button full (click)="requestPIN()">\n                  Request a PIN\n              </button>\n        </div>\n        </ion-card>\n        <ion-card>\n            <ion-card-content>\n                <h2>Insert PIN (if you\'ve one)</h2>\n                <ion-item>\n                  <ion-label floating>PIN:</ion-label>\n                  <ion-input type="number" inputmode="numeric" pattern="[0-9]*" [(ngModel)]="new_pin" name="new_pin" required></ion-input>\n                </ion-item>\n            </ion-card-content>\n\n        <div class="card-footer">\n              <button full (click)="enterPIN(new_pin)">\n                  Validate PIN\n              </button>\n        </div>\n        </ion-card>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jair Acevedo\IONIC_PROJECTS\Quizionic2Evanto\Quiz_IPMA_001\src\pages\pin\pin.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_db_service__["a" /* DbService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
], Pin);

//# sourceMappingURL=pin.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_details_store_details__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_store_service__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import {OnInit} from '@angular/core';




var StoreListPage = (function () {
    function StoreListPage(nav, navParams, storeService) {
        this.nav = nav;
        this.navParams = navParams;
        this.storeService = storeService;
        this.nav = nav;
        this.storeready = true;
        this.storeService = storeService;
        //let selectedItem = navParams.get('item');
    }
    StoreListPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storeService.getConsumableQuantity('explanationq').then(function (value) { return _this.explanationQ = value; });
        this.storeService.findAll().subscribe(function (data) {
            console.log(JSON.stringify(data));
            _this.products = data;
        });
        /*if(analytics) {
          analytics.trackView('Store-List');
        }*/
    };
    StoreListPage.prototype.itemTapped = function (product) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__store_details_store_details__["a" /* StoreDetailPage */], {
            product: product,
            condition: 'purchase'
        });
    };
    StoreListPage.prototype.restoreTapped = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__store_details_store_details__["a" /* StoreDetailPage */], {
            product: '',
            condition: 'restore'
        });
    };
    return StoreListPage;
}());
StoreListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Jair Acevedo\IONIC_PROJECTS\Quizionic2Evanto\Quiz_IPMA_001\src\pages\store-list\store-list.html"*/'<ion-header>\n  <ion-navbar color="stable">\n    <button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Store Products</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="storelist">\n\n        <ion-card>\n            <ion-card-header class="storeCardHeader">\n              <ion-icon name="cart"></ion-icon>\n            </ion-card-header>\n            <div class="card-header">\n              <ion-row >\n                <ion-col width-100>\n                  <span>Available Explanations/Tips: {{explanationQ}}</span>\n                </ion-col>\n              </ion-row>\n            </div>\n\n\n            <ion-card-content *ngIf="storeready" (click)="restoreTapped()">\n                <h2>Restore</h2>\n                <h3>Restore all purchases</h3>\n            </ion-card-content>\n            <div class="card-header">\n              <ion-row >\n                <ion-col width-100>\n                  <span>Available Products for Purchase</span>\n                </ion-col>\n              </ion-row>\n            </div>\n            <ion-list>\n              <button ion-item *ngFor="let product of products" (click)="itemTapped(product)">\n                  <h2>{{product.title}}</h2>\n                  <h3>Price: {{product.price}}</h3>\n                  <p>{{product.description}}</p>\n              </button>\n            </ion-list>\n\n        </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jair Acevedo\IONIC_PROJECTS\Quizionic2Evanto\Quiz_IPMA_001\src\pages\store-list\store-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_store_service__["a" /* StoreService */]])
], StoreListPage);

//# sourceMappingURL=store-list.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_db_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WelcomePage = (function () {
    function WelcomePage(events, nav, navParams, storage, dbService) {
        this.events = events;
        this.nav = nav;
        this.navParams = navParams;
        this.storage = storage;
        this.dbService = dbService;
        this.source = navParams.get('source');
        if (this.source == 'cordova') {
            // just in case something has to be trigger on device at this point
        }
    }
    WelcomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        // if login feature is activated then LoginPage
        this.dbService.getProperty('login').then(function (data) {
            if (data == 'true') {
                _this.storage.get('userName').then(function (data) {
                    if (typeof data == "undefined" || data == null) {
                        _this.nav.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
                    }
                    else {
                        _this.events.publish('loggedIn', 1);
                    }
                });
            }
        });
    };
    return WelcomePage;
}());
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'welcome',template:/*ion-inline-start:"C:\Users\Jair Acevedo\IONIC_PROJECTS\Quizionic2Evanto\Quiz_IPMA_001\src\pages\welcome\welcome.html"*/'\n\n<ion-header>\n\n  <ion-navbar color="stable">\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Bienvenido</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="welcome">\n\n    <ion-slides loop="false" autoplay="false" index="1">\n\n        <ion-slide padding>\n\n            <img src="assets/img/titulo_ipma.png"/>\n\n            <div text-center>\n\n                International Project Managment Association\n\n            </div>\n\n        </ion-slide>\n\n    </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jair Acevedo\IONIC_PROJECTS\Quizionic2Evanto\Quiz_IPMA_001\src\pages\welcome\welcome.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_db_service__["a" /* DbService */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_store__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__db_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var androidApplicationLicenseKey;
var productIds;
var existing_purchases;
var product_info;
var productType;
var StoreService = (function () {
    function StoreService(dbservice, platform) {
        var _this = this;
        this.dbservice = dbservice;
        this.platform = platform;
        this.dbservice = dbservice;
        this.platform.ready().then(function (readySource) { _this.source = readySource; });
        // Set androidApplicationLicenseKey for In App Purchase, please change this value with yours.
        androidApplicationLicenseKey = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAko8kYFsrb66OCiGz4K7OvRBlngHS0fvGuHED1xqsmdngpyUUruvK/bfd1RcINevfnilc972OtR+i/mnOO3UIMYsANyOmH0l5ZTxWyiNQ1EGKOM6VxAuTosdLrwCHYbhU6gFaHdCoC26hIGv2xFcWLuyr9mg3mTt5kt/kcMlM5f7qOgZsttgbc98BU/BGaNurOO2mcWzFkfqcpsaBQylPvjY1RGDvsEoOKDwMjR+vrlTlwJ3LDMwWWcmFQd/OgaFwEfIvqeJUnePQYQGAvPD24E8cHqwZZk0xPkBdB9KLxqCyqzPvo4wkPWUD2ZEfVK4E65xjX2BB0l7NWgAoZpilUwIDAQAB";
        // Set productIds with exactly same names as in your store (Google/Itunes)!
        productIds = ["quiz2_exam_x3", "quiz2_exam_x1", "quiz2_expla_x5", "quiz2_expla_x10", "quiz2_expla_x50", "quiz2_f_version", "quiz2_no_ads"];
        // For each listed product in productIds array, corresponds a productType below, either as consumable or non_consumable.
        productType = ["non_consumable", "non_consumable", "consumable", "consumable", "consumable", "non_consumable", "non_consumable"];
        // Some variables reserved for product management
        existing_purchases = [];
        product_info = [];
    }
    StoreService.prototype.init = function () {
        // Initialize InAppPurchase (IAP) plugin
        // if we are on device, we use IAP plugin, otherwise we simulate it in browser
        try {
            if (typeof iap != 'undefined') {
                // Set up de AndroidBillingKey for IAP Plugin
                iap.setUp(androidApplicationLicenseKey);
                // Request product list
                iap.requestStoreListing(productIds, function (result) {
                    for (var i = 0; i < result.length; ++i) {
                        var p = result[i];
                        product_info[i] = { productId: p.productId, title: p.title, price: p.price, description: p.description, type: productType[productIds.indexOf(p.productId)] };
                    }
                }, function (error) {
                    // error to use store
                    alert("Store not available at this time: " + error);
                });
            }
        }
        catch (err) {
            console.log('No IAP Plugin, using PRODUCTS mock');
        }
    };
    StoreService.prototype.findAll = function () {
        // retrieve all available products
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            // We check if we are on device and IAP plugin is available
            try {
                if (iap) {
                    observer.next(product_info);
                }
            }
            catch (err) {
                // if we are in browser, then we get product list from PRODUCTS "JSON" file
                console.log('FOR BROWSER ONLY');
                observer.next(__WEBPACK_IMPORTED_MODULE_1__mock_store__["a" /* PRODUCTS */]);
            }
            observer.complete();
        });
    };
    StoreService.prototype.purchaseProduct = function (product, resultCallback, errorCallback) {
        var _this = this;
        // Proceed with product purchase
        if (typeof iap != 'undefined') {
            iap.purchaseProduct(product.productId, function (result) {
                //alert("Product purchased: "+product.productId);
                // Check if product is consumable and therefore call consumeProduct
                if (product.type === 'consumable') {
                    _this.consumeProduct(product);
                }
                else {
                    if (product.productId == "quiz2_f_version") {
                        //We call all the actions to be taken when purchasing the full Version
                        //This may be different in your case depending your needs.
                        _this.dbservice.setProperty('fullversion', 'true');
                        _this.dbservice.setFullVersion();
                        _this.dbservice.setProperty('admob', 'false');
                    }
                    if (product.productId == "quiz2_no_ads") {
                        //This is the action that we call when purchasing this product No Ads.
                        _this.dbservice.setProperty('admob', 'false');
                    }
                    if (product.productId == "quiz2_exam_x1") {
                        //This is the action that we call when purchasing this product Exam x1.
                        _this.dbservice.unlockExamById(4); //Exam Id shall be passed as parameter
                    }
                    if (product.productId == "quiz2_exam_x3") {
                        //This is the action that we call when purchasing this product Exam x3.
                        _this.dbservice.unlockExamById(4); //Exam Id shall be passed as parameter
                        _this.dbservice.unlockExamById(5); //Exam Id shall be passed as parameter
                        _this.dbservice.unlockExamById(6); //Exam Id shall be passed as parameter
                    }
                }
                return resultCallback("PurchasedDone");
            }, function (error) {
                console.log("error: " + error);
                return errorCallback("noProductIdPurchased");
            });
        }
        else {
            alert("Product purchased (Simulated): " + product.productId);
            if (product.type === 'consumable') {
                this.consumeProduct(product);
            }
            else {
                if (product.productId == "quiz2_f_version") {
                    alert('full version purchased');
                    this.dbservice.setProperty('fullversion', 'true');
                    this.dbservice.setFullVersion();
                    this.dbservice.setProperty('admob', 'false');
                }
                if (product.productId == "quiz2_no_ads") {
                    alert('no ads purchased');
                    this.dbservice.setProperty('admob', 'false');
                }
                if (product.productId == "quiz2_exam_x1") {
                    alert('Exam ID: 4 Unlocked');
                    this.dbservice.unlockExamById(4);
                } //Exam Id shall be passed as parameter
                if (product.productId == "quiz2_exam_x3") {
                    //This is the action that we call when purchasing this product Exam x3.
                    alert('Exams ID: 4/5/6 Unlocked');
                    this.dbservice.unlockExamById(4); //Exam Id shall be passed as parameter
                    this.dbservice.unlockExamById(5); //Exam Id shall be passed as parameter
                    this.dbservice.unlockExamById(6); //Exam Id shall be passed as parameter
                }
            }
            console.log("Simulating Purchasing of product: " + product.productId);
            return resultCallback("PurchasedDone");
        }
    };
    StoreService.prototype.consumeProduct = function (product) {
        var _this = this;
        // Consume purchased product when consumable type is detected
        if (typeof iap != 'undefined') {
            iap.consumeProduct(product.productId, function (result) {
                //alert("Consumed Product: "+product.productId);
                _this.updateConsumable(product);
            }, function (error) {
                console.log("error: " + error);
            });
        }
        else {
            this.updateConsumable(product);
            console.log("Simulating consume product: " + product.productId);
        }
    };
    StoreService.prototype.restorePurchases = function () {
        var _this = this;
        // Restore all purchases
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            if (_this.source == 'cordova') {
                if (typeof iap != 'undefined') {
                    iap.restorePurchases(function (result) {
                        console.log('Restore log: ' + JSON.stringify(result));
                        for (var i = 0; i < result.length; ++i) {
                            var p = result[i];
                            if (result[i].productId == "quiz2_f_version") {
                                alert('full version restored');
                                _this.dbservice.setProperty('fullversion', 'true');
                                _this.dbservice.setFullVersion();
                                _this.dbservice.setProperty('admob', 'false');
                            }
                            if (result[i].productId == "quiz2_no_ads") {
                                alert('no ads restored');
                                _this.dbservice.setProperty('admob', 'false');
                            }
                            if (result[i].productId == "quiz2_exam_x1") {
                                //This is the action that we call when purchasing this product Exam x1.
                                _this.dbservice.unlockExamById(4); //Exam Id shall be passed as parameter
                                alert('Exam Id 4: Restored');
                            }
                            if (result[i].productId == "quiz2_exam_x3") {
                                //This is the action that we call when purchasing this product Exam x3.
                                _this.dbservice.unlockExamById(4); //Exam Id shall be passed as parameter
                                _this.dbservice.unlockExamById(5); //Exam Id shall be passed as parameter
                                _this.dbservice.unlockExamById(6); //Exam Id shall be passed as parameter
                                alert('Exam Id 4/5/6: Restored');
                            }
                            if (existing_purchases.indexOf(p['productId']) === -1)
                                existing_purchases.push(p['productId']);
                        }
                        observer.next(existing_purchases);
                    }, function (error) {
                        alert("Error when attempting to restore purchases: " + error);
                    });
                }
            }
            else {
                // Simulate store restore when in browser execution
                for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_1__mock_store__["a" /* PRODUCTS */].length; ++i) {
                    var p = __WEBPACK_IMPORTED_MODULE_1__mock_store__["a" /* PRODUCTS */][i];
                    if (existing_purchases.indexOf(p['productId']) === -1)
                        existing_purchases.push(p['productId']);
                    console.log("productId: " + p['productId']);
                }
                observer.next(existing_purchases);
            }
        });
    };
    StoreService.prototype.getConsumableQuantity = function (name) {
        return this.dbservice.getProperty(name);
    };
    StoreService.prototype.updateConsumable = function (product) {
        var _this = this;
        var value, consumable;
        var addQuantity = 0;
        // determine the consumable
        switch (product.productId) {
            case 'quiz2_expla_x5':
                addQuantity = 5; // this has to corresponds with the product id configured in productIds array
                consumable = 'explanationq';
                break;
            case 'quiz2_expla_x10':
                addQuantity = 10;
                consumable = 'explanationq';
                break;
            case 'quiz2_expla_x50':
                addQuantity = 50;
                consumable = 'explanationq';
                break;
        }
        // obtain consumbable remaining amount
        this.dbservice.getProperty(consumable).then(function (data) {
            // increase consumbable quantity based on purchased item
            value = Number(data) + addQuantity;
            // update database accordingly
            return _this.dbservice.setProperty(consumable, value.toString()).then(function (result) {
                alert('You have added: ' + addQuantity + " explanations. Qty left: " + value.toString());
            });
        });
    };
    StoreService.prototype.findById = function (id) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            observer.next(__WEBPACK_IMPORTED_MODULE_1__mock_store__["a" /* PRODUCTS */][id - 1]);
            observer.complete();
        });
    };
    return StoreService;
}());
StoreService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__db_service__["a" /* DbService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["p" /* Platform */]])
], StoreService);

//# sourceMappingURL=store-service.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fb_provider__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_welcome__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(events, nav, alertCtrl, plt, navParams, menu, storage, fbProvider) {
        var _this = this;
        this.events = events;
        this.nav = nav;
        this.alertCtrl = alertCtrl;
        this.plt = plt;
        this.navParams = navParams;
        this.menu = menu;
        this.nav = nav;
        this.storage = storage;
        this.fb = fbProvider;
        this.email = '';
        this.name = '';
        this.plt.ready().then(function (readySource) {
            _this.source = readySource;
        });
    }
    LoginPage.prototype.login = function (caller) {
        var _this = this;
        if (caller == 'log') {
            if (this.source == 'cordova') {
                this.fb.login().then(function () {
                    _this.fb.getCurrentUserProfile().then(function (profileData) {
                        _this.events.publish('loggedIn', 1);
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__welcome_welcome__["a" /* WelcomePage */]);
                    });
                }, function (error) {
                    var alert = _this.alertCtrl.create({
                        title: 'Ups...',
                        subTitle: error,
                        buttons: [
                            {
                                text: 'OK',
                                handler: function () {
                                    var alertTransition = alert.dismiss();
                                    alertTransition.then(function () {
                                        //this.nav.pop();
                                    });
                                }
                            }
                        ]
                    });
                    alert.present();
                });
            }
            else {
                // Simulate facebook feedback when in browser execution
                this.storage.set('userName', 'Flavio');
                this.storage.set('email', 'fpassa@studiomob.ca');
                this.storage.set('picture', 'http://www.studiomob.ca/StudioMobCA.hyperesources/surface2.png');
                this.events.publish('loggedIn', 1);
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__welcome_welcome__["a" /* WelcomePage */]);
            }
        }
        else {
            this.storage.set('userName', this.name);
            this.storage.set('email', this.email);
            this.storage.set('picture', 'http://www.studiomob.ca/StudioMobCA.hyperesources/surface2.png');
            this.events.publish('loggedIn', 1);
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__welcome_welcome__["a" /* WelcomePage */]);
        }
    };
    LoginPage.prototype.ionViewDidLeave = function () {
        this.menu.enable(true);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.menu.enable(false);
        var param = this.navParams.get('logout');
        if (typeof param == "undefined") {
            this.title = "Login";
            this.buttonText = "Click here for Login";
            this.buttonTextSig = "Click here for Sign-up";
            this.storage.get('userName').then(function (data) {
                if (data != null) {
                    _this.events.publish('loggedIn', 1);
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__welcome_welcome__["a" /* WelcomePage */]);
                }
            });
        }
        else {
            this.title = "Logout";
            this.buttonText = "";
            this.buttonTextSig = "Click here for Logout";
        }
    };
    LoginPage.prototype.logOut = function () {
        var _this = this;
        this.fb.logout().then(function () {
            _this.events.publish('loggedIn', 0);
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__welcome_welcome__["a" /* WelcomePage */]);
        });
    };
    LoginPage.prototype.action = function (caller) {
        // Based on page's title we determine if it's login/logout
        if (this.title == "Login") {
            this.login(caller);
        }
        else {
            this.logOut();
        }
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\Jair Acevedo\IONIC_PROJECTS\Quizionic2Evanto\Quiz_IPMA_001\src\pages\login\login.html"*/'<ion-nav id="nav" [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n\n\n<ion-header>\n\n\n\n  <ion-navbar color="stable">\n\n    <ion-title>{{title}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="page-login">\n\n   \n\n  <div>\n\n    <ion-card>\n\n      <ion-card-header class="storeCardHeader">\n\n        <ion-icon name="key"></ion-icon>\n\n      </ion-card-header>\n\n\n\n      <div class="card-header">\n\n        <ion-row >\n\n          <ion-col width-100>\n\n            <span *ngIf="title == \'Login\'" >Ingrese su Nombre y su Email</span>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n\n\n      <ion-card-content *ngIf="title == \'Login\'">\n\n        <ion-row >\n\n          <ion-col>\n\n            <ion-list  inset>\n\n              \n\n              <ion-item>\n\n                <ion-input type="text" placeholder="Name" name="name" [(ngModel)]="name" required></ion-input>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                <ion-input type="email" placeholder="Email" name="email" [(ngModel)]="email" required></ion-input>\n\n              </ion-item>\n\n              \n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n    </ion-card-content>\n\n\n\n    <div class="card-footer">\n\n        <button full (click)="action(\'sign\')">\n\n          {{buttonTextSig}}\n\n        </button>\n\n    </div>\n\n   </ion-card>\n\n  </div>\n\n\n\n    <ion-card *ngIf="title == \'Login\'">\n\n      <div class="card-header">\n\n        <ion-row >\n\n          <ion-col width-100>\n\n            <span>O use Facebook para acceder</span>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n\n\n      <div class="card-footer">\n\n          <button full (click)="action(\'log\')">\n\n            {{buttonText}}\n\n          </button>\n\n      </div>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jair Acevedo\IONIC_PROJECTS\Quizionic2Evanto\Quiz_IPMA_001\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_fb_provider__["a" /* FbProvider */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_db_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_analytics__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__list_review_list_review__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var _highlight;
var _qID;
var _score;
var _timeOver;
var _lastQuestion;
var _timed;
var _click;
var _admob;
var _Paid;
var _exam;
var _examOver;
var _nextView;
var _explanation;
var _expQuantity;
var _explaAvailabilty;
var _npbutton;
var _answer; // [orderID, question, selectedAnswer, correctAnswer, argumentAnswer] para cada respuesta
var _orderID; // orden en que se despliegan las preguntas
var ExamDetailsPage = (function () {
    function ExamDetailsPage(analytics, admob, actionSheetCtrl, alertCtrl, nav, navParams, storage, dbService, navCtrl) {
        var _this = this;
        this.analytics = analytics;
        this.admob = admob;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.navParams = navParams;
        this.storage = storage;
        this.dbService = dbService;
        this.navCtrl = navCtrl;
        _orderID = 0;
        _click = false;
        _examOver = false;
        _timeOver = false;
        _nextView = 'back';
        _score = 1;
        this.nav = nav;
        this.score = 0;
        this.isNormal = true;
        this.isOut = false;
        _exam = navParams.get('exam');
        this.source = navParams.get('source');
        //this.user = navParams.get('user'); deactivated as per Login feature
        this.adId = navParams.get('adId');
        this.examid = _exam.Id;
        this.duration = _exam.Duration;
        this.title = _exam.ExamTitle;
        this.qty = _exam.Qty;
        this.scoreArrayID = new Array(this.qty);
        this.answersReview = new Array(); // Inicializa array vacio
        this.recordProgress = _exam.Progress;
        this.nextExam = _exam.NextExam;
        this.minScore = _exam.MinScore;
        if (this.duration > 0) {
            _timed = true;
        }
        else {
            _timed = false;
        }
        this.timed = _timed;
        this._nextID = 0;
        this.dbService.getProperty('explanationq').then(function (data) {
            _expQuantity = data;
            _this.expQty = _expQuantity;
        });
        this.dbService.getQuestionsIdByCatAndQty(_exam.CatId, _exam.Qty).then(function (data) { return _this.questionArrayID = data; });
    }
    // this is the main timer function to update time left in GUI
    ExamDetailsPage.prototype.onTimerTimeout = function () {
        var _this = this;
        //let timerTest = document.getElementById('myTimer');
        this.diff = this.duration--;
        this.spentTime = this.testTime - this.diff;
        if (this.diff === 0) {
            _timeOver = true;
        }
        // format timer value
        this.minutes = (this.diff / 60) | 0;
        this.seconds = (this.diff % 60) | 0;
        this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
        this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;
        this.time = this.minutes + ":" + this.seconds;
        if (this.diff <= 10) {
            //used to change CSS property (color green to red when time <10s)
            this.isOut = true;
            this.isNormal = false;
        }
        // if there is time left, then we call it again
        if (!_timeOver) {
            this.timerTimeout = setTimeout(function () {
                _this.onTimerTimeout();
            }, 1000);
            // otherwise, we cancel the timer and pop-up the alert
        }
        else {
            clearTimeout(this.timerTimeout);
            this.alert("timeOut");
        }
    };
    ExamDetailsPage.prototype.showQuestion = function (questionId) {
        var _this = this;
        this.multiAnswer = false;
        // initialize timer count if we have a timed exam
        // if timer is not in use yet, then we create it
        if (this.timed && typeof this.timerTimeout === 'undefined') {
            this.testTime = this.duration;
            this.timerTimeout = setTimeout(function () { _this.onTimerTimeout(); }, 1000);
        }
        this.scoreArrayID[this._nextID] = 0;
        // get question to show
        this.dbService.getQuestionById(questionId).then(function (data) {
            _this.question = data;
            if (_this.question.Answer.length > 1) {
                _this.multiAnswer = true;
                var temp = _this.question.Answer.replace(/,/g, "");
                _this.question.Answer = temp;
                //console.log(this.question.Answer);
            }
            ;
            _this.question._f = { 'A': 0, 'B': 0, 'C': 0, 'D': 0, 'E': 0 };
            // check if there is explanation text in this question
            // and if overal explanation flag is enabled
            if (_this.question.Explanation !== '' && _explanation) {
                _this.ExplaAvailable = true;
                // then check if explanation has been shown before,
                if (_this.question.ExplanationShown) {
                    _explaAvailabilty = true;
                }
                else {
                    _explaAvailabilty = false;
                }
            }
            else {
                _this.ExplaAvailable = false;
            }
        });
        this.content.resize();
        this.content.scrollToTop();
    };
    ExamDetailsPage.prototype.alert = function (condition) {
        var _this = this;
        // calculate Score
        for (var i = 0; i < this.qty; i++) {
            this.score = this.score + this.scoreArrayID[i];
            console.log(i, this.scoreArrayID[i]);
        }
        var testScore = Math.floor((this.score / this.qty) * 100);
        console.log('testScore ' + testScore + ' minScore: ' + this.minScore);
        if (testScore >= this.minScore) {
            console.log('MinScore reached!');
            if (this.nextExam) {
                //unlock linked exam
                this.dbService.unlockExamById(this.nextExam);
            }
        }
        //is full version and recordProgress enabled for this exam?
        if (_Paid && this.recordProgress == "Y") {
            if (!this.spentTime) {
                this.spentTime = 0;
            }
            //updating progress table
            this.dbService.updateProgress(this.user, this.examid, this.title, testScore, this.spentTime);
        }
        //let's configure the alert based on condition
        var tit;
        var subTit;
        switch (condition) {
            case "timeOut":
                tit = 'Tiempo Terminado';
                subTit = 'Tu puntaje fué: ' + testScore + '%';
                // this.getReview();
                break;
            case "lastQuestion":
                tit = 'Exámen completado';
                subTit = 'Tu Puntaje: ' + testScore + '%';
                // Llamar a List View
                // this.getReview();
                break;
        }
        //cancel the timer if is it not yet cancelled.
        if (typeof this.timerTimeout !== 'undefined') {
            clearTimeout(this.timerTimeout);
        }
        var alert = this.alertCtrl.create({
            title: tit,
            subTitle: subTit,
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        _examOver = true;
                        var alertTransition = alert.dismiss();
                        alertTransition.then(function () {
                            // this.nav.pop();
                            //   this.navCtrl.push(SecondPage, {
                            //     param1: 'John', param2: 'Johnson'
                            // });
                            console.log(_this.answersReview);
                            // this.navCtrl.push(ListReviewPage, this.answersReview);
                            // this.nav.push(ListReviewPage);
                            // this.nav.push(ListReviewPage) // ver resumen de buenas y malas obligado
                        });
                        return false;
                    }
                },
            ]
        });
        alert.present();
        this.nav.pop();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__list_review_list_review__["a" /* ListReviewPage */], this.answersReview);
    };
    // Guarda todas las respuestas
    // Implementado solo para "one answer", trabajo futuro "multiAnswer"
    ExamDetailsPage.prototype.getAnswer = function (question, correctAnswer, selectedAnswer, argumentAnswer, textCorrectAnswer, textSelectedAnswer) {
        console.log('Dentro de getAnswer()');
        _orderID++;
        console.log('_orderID: ' + _orderID);
        var color;
        if (correctAnswer == selectedAnswer) {
            color = 'correct';
        }
        else {
            color = 'wrong';
        }
        if (argumentAnswer == null) {
            argumentAnswer = 'Esta respuesta no posee argumento por ahora';
        }
        console.log('argumentAnswer: ' + argumentAnswer);
        _answer = [_orderID, question, correctAnswer, selectedAnswer, argumentAnswer, color, textCorrectAnswer, textSelectedAnswer];
        this.answersReview.push(_answer);
        console.log('Respuesta guardada');
        console.log(this.answersReview);
    };
    ExamDetailsPage.prototype.getResume = function () {
        // this.datosTienda = this.navParams.get('datosTienda');
        this.answersReview = this.navParams.get('answersReview');
        // return this.answersReview;
    };
    ExamDetailsPage.prototype.getNextQuestionId = function () {
        if (!_timeOver && !_examOver) {
            if (this.indexQ <= this.qty) {
                this._nextID = this.indexQ - 1;
                _qID = this.questionArrayID[this._nextID];
                return _qID;
            }
            else {
                _lastQuestion = true;
                this.alert("lastQuestion");
                if (_admob && !_Paid) {
                    // customize interstitial
                    this.admob.prepareInterstitial({
                        adId: this.adId,
                        autoShow: true
                    });
                }
            }
        }
        else {
            _timeOver = true;
            this.alert("timeOut");
            if (_admob && !_Paid) {
                // customize interstitial
                this.admob.prepareInterstitial({
                    adId: this.adId,
                    autoShow: true
                });
            }
        }
    };
    ExamDetailsPage.prototype.clickedRow = function (rowId) {
        console.log('Pregunta: ' + this.question.Question); // question
        console.log('Correcta: ' + this.question.Answer); // question.Answer = correcta
        console.log('Seleccionada: ' + rowId); // rowId = seleccionada
        console.log('Razón: ' + this.question.Explanation);
        var text_correctAnswer;
        var text_selectedAnswer;
        // Casos para Respuesta Correcta
        switch (this.question.Answer) {
            case 'A':
                text_correctAnswer = this.question.A;
                break;
            case 'B':
                text_correctAnswer = this.question.B;
                break;
            case 'C':
                text_correctAnswer = this.question.C;
                break;
            case 'D':
                text_correctAnswer = this.question.D;
                break;
        }
        // Casos para la Respuesta Seleccionada
        switch (rowId) {
            case 'A':
                text_selectedAnswer = this.question.A;
                break;
            case 'B':
                text_selectedAnswer = this.question.B;
                break;
            case 'C':
                text_selectedAnswer = this.question.C;
                break;
            case 'D':
                text_selectedAnswer = this.question.D;
                break;
        }
        // Crear una lista con las correctas y las malas para ser desplegadas al final
        this.getAnswer(this.question.Question, this.question.Answer, rowId, this.question.Explanation, text_correctAnswer, text_selectedAnswer);
        // check for multiAnswer
        if (this.multiAnswer) {
            if (this.question._f[rowId] == 0) {
                this.question._f[rowId] = 2;
            }
            else {
                this.question._f[rowId] = 0;
            }
        } // only one answer
        else if (!_click && !_examOver) {
            //we avoid rebounce of touch/tap events
            _click = true;
            if (this.question.Answer === rowId) {
                this.question._f[rowId] = 1;
                this.scoreArrayID[this.indexQ - 1] = _score; // lista de respuestas
            }
            else {
                this.question._f[rowId] = -1;
                this.scoreArrayID[this.indexQ - 1] = 0;
                console.log('_highlight ' + _highlight);
                if (_highlight) {
                    this.question._f[this.question.Answer] = 1;
                }
            }
            this.continueExam();
        }
    };
    ExamDetailsPage.prototype.validateAnswer = function () {
        var answerTemp = "";
        for (var rowId = "A".charCodeAt(0); rowId < "F".charCodeAt(0); rowId++) {
            if (this.question._f[String.fromCharCode(rowId)] == 2) {
                answerTemp = answerTemp + String.fromCharCode(rowId);
            }
        }
        var highlightAnswer = this.question.Answer.split("");
        console.log(highlightAnswer);
        var userHighlight = answerTemp.split("");
        console.log(userHighlight);
        if (this.question.Answer === answerTemp) {
            console.log('RESPUESTA CORRECTA');
            this.scoreArrayID[this.indexQ - 1] = _score;
        }
        else {
            console.log('RESPUESTA INCORRECTA');
            // Highlight wrong answers
            this.scoreArrayID[this.indexQ - 1] = 0;
            if (_highlight) {
                for (var i = 0; i < userHighlight.length; i++) {
                    if (userHighlight[i] != highlightAnswer[i]) {
                        this.question._f[userHighlight[i]] = -1;
                    }
                }
            }
        }
        // Highlight correct answers
        if (_highlight) {
            for (var j = 0; j < highlightAnswer.length; j++) {
                this.question._f[highlightAnswer[j]] = 1;
            }
        }
        this.continueExam();
    };
    ExamDetailsPage.prototype.continueExam = function () {
        var _this = this;
        if (this.indexQ === this.qty) {
            _examOver = true;
            _lastQuestion = true;
            this.alert("lastQuestion");
            if (_admob && !_Paid) {
                // customize interstitial
                this.admob.prepareInterstitial({
                    adId: this.adId,
                    autoShow: true
                });
            }
        }
        else {
            setTimeout(function () {
                _click = false;
                _this.nextQuestion();
            }, 1000);
        }
    };
    ExamDetailsPage.prototype.explanation = function (qId) {
        // handle the explanation button functionality
        // if the exam is not over
        var actionSheet;
        if (!_timeOver && !_examOver) {
            // if we have explanations left and if question has an explanation,
            // then we configure the actionsheet to show the explanation text
            if (_expQuantity > 0 || _explaAvailabilty) {
                actionSheet = this.actionSheetCtrl.create({
                    buttons: [
                        { text: this.question.Explanation,
                            handler: function () {
                                var navTransition = actionSheet.dismiss();
                                navTransition.then(function () {
                                    //
                                });
                                console.log('Explanation viewed');
                                return false;
                            }
                        }
                    ]
                });
                // we update question record to indicate that explanation was displayed
                this.dbService.updateExplaShownInQuestionId(qId);
                // we decrease the available quantity only if explanation was not displayed before
                // i.e. only the first time that explanation is displayed, we decrease
                // 1 from available explanations (qty)
                if (!_explaAvailabilty) {
                    // we decrease quantity in memory and in database
                    _expQuantity--;
                    this.expQty--;
                    _explaAvailabilty = true;
                    this.dbService.setProperty('explanationq', _expQuantity);
                    // logging for debugging purpose
                    console.log('Available Explanations: ' + _expQuantity);
                }
            }
            else {
                actionSheet = this.actionSheetCtrl.create({
                    buttons: [
                        { text: 'Ups... You don\'t have any explanation available. Buy them from Store Main Menu option',
                            handler: function () {
                                var navTransition = actionSheet.dismiss();
                                navTransition.then(function () {
                                });
                                console.log('No explanations available');
                                return false;
                            }
                        }
                    ]
                });
            }
            actionSheet.present();
        }
    };
    ExamDetailsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.indexQ = 1;
        this._nextID = 0;
        for (var j = 0; j < this.qty; j++) {
            this.scoreArrayID[j] = 0;
        }
        this.dbService.getProperty('highlight').then(function (data) { return _highlight = data == "true" ? true : false; });
        this.dbService.getProperty('explanation').then(function (data) { return _explanation = data == "true" ? true : false; });
        this.npb = false;
        this.dbService.getProperty('admob')
            .then(function (data) {
            _admob = data == "true" ? true : false;
            if (_admob && !_Paid) {
                if (_this.source == 'cordova') {
                    // present Admob banner
                    _this.admob.showBanner(_this.admob.AD_POSITION.BOTTOM_CENTER);
                }
            }
            else {
                if (_this.source == 'cordova') {
                    _this.admob.removeBanner();
                }
            }
            if (_this.source == 'cordova') {
                _this.analytics.trackView('Exam-Detail Page for ' + _this.title);
            }
        });
        this.dbService.isFullVersion().then(function (data) { return _Paid = data; });
        // this is executed when entering in the component (i.e. this view)
        // when in device, source='cordova' if not, source='dom' (aka browser)
        // we wait 750ms to allow database to response to property queries.
        // if login feature is activated then user is set with user's name
        this.dbService.getProperty('login').then(function (data) {
            if (data == 'true') {
                _this.storage.get('userName').then(function (data) {
                    if (typeof data == "undefined" || data == null) {
                        _this.user = "StudioMob";
                    }
                    else {
                        _this.user = data;
                    }
                });
            }
            else {
                _this.user = "StudioMob";
            }
        });
        setTimeout(function () {
            _this.showQuestion(_this.getNextQuestionId());
        }, 750);
    };
    ExamDetailsPage.prototype.previousQuestion = function () {
        if (this.indexQ > 1) {
            this.indexQ--;
        }
        //removing score if user goes back
        this.scoreArrayID[this.indexQ - 1] = 0;
        this.showQuestion(this.getNextQuestionId());
    };
    ExamDetailsPage.prototype.nextQuestion = function () {
        if (this.indexQ < this.qty) {
            this.indexQ++;
        }
        this.showQuestion(this.getNextQuestionId());
    };
    // when exiting the view, we cancel the timer and clear tracking variables
    ExamDetailsPage.prototype.ionViewWillLeave = function () {
        if (this.source == 'cordova') {
            if (_admob)
                this.admob.hideBanner();
        }
        clearTimeout(this.timerTimeout);
        _timeOver = false;
        _examOver = false;
        _timed = false;
        this.questionArrayID = null;
        this._nextID = null;
        this.qty = null;
        this.indexQ = null;
        this.question = null;
    };
    return ExamDetailsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
], ExamDetailsPage.prototype, "content", void 0);
ExamDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'exam-details',template:/*ion-inline-start:"C:\Users\Jair Acevedo\IONIC_PROJECTS\Quizionic2Evanto\Quiz_IPMA_001\src\pages\exam-details\exam-details.html"*/'<ion-header>\n\n  <ion-navbar color="stable">\n\n    <button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{title}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="exam">\n\n\n\n      <ion-item *ngIf="timed" id="myTimer" [ngClass]="{timer: isNormal, timerout: isOut}">\n\n          <ion-icon subtle name="stopwatch"></ion-icon>\n\n          {{time}}\n\n      </ion-item>\n\n      <ion-item id="validate" *ngIf="multiAnswer">\n\n        <button id="valButton" full (click)="validateAnswer()"> Validar Respuesta</button>\n\n      </ion-item>\n\n\n\n  <div *ngIf="question" class="selection" style="position: relative">\n\n\n\n      <ion-card class="adv-map">\n\n        <div class="card-header">\n\n          <ion-row >\n\n            <ion-col width-35>\n\n              <span small >Pregunta: {{indexQ}}/{{qty}}</span>\n\n            </ion-col>\n\n            <ion-col width-25>\n\n              <span>QId: #{{question.Id}}</span>\n\n            </ion-col>\n\n            <ion-col width-45>\n\n              <!-- <span>Explanations left: {{expQty}}</span> -->\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n\n\n        <div *ngIf="question.Image">\n\n          <p [innerHTML]="question.Image"></p>\n\n        </div>\n\n\n\n        <ion-card-content secondary>\n\n            <h2 [innerHTML]="question.Question"></h2>\n\n        </ion-card-content>\n\n\n\n        <!-- <div class="card-footer">\n\n          <button *ngIf="ExplaAvailable" full (click)="explanation(question.Id)"> Click here for Explanation/Tip\n\n          </button>\n\n        </div> -->\n\n\n\n      <ion-list id="options" class="options">\n\n          <ion-item text-wrap class="item-text-wrap" [ngClass]="{normal: question._f[\'A\']==0, correct: question._f[\'A\']==1, selected: question._f[\'A\']==2, invalid: question._f[\'A\']<0}" id="A" *ngIf="question.A !==\'\'"(click)="clickedRow(\'A\')">\n\n              <h2>A</h2>\n\n              <p [innerHTML]="question.A"></p>\n\n              <ion-icon *ngIf="question._f[\'A\']==1" name="checkmark" item-right color=dark></ion-icon>\n\n              <ion-icon *ngIf="question._f[\'A\']<0" name="close" item-right color=dark></ion-icon>\n\n          </ion-item>\n\n          <ion-item text-wrap class="item-text-wrap" [ngClass]="{normal: question._f[\'B\']==0, correct: question._f[\'B\']==1, selected: question._f[\'B\']==2, invalid: question._f[\'B\']<0}" id="B" *ngIf="question.B !==\'\'"(click)="clickedRow(\'B\')">\n\n              <h2>B</h2>\n\n              <p [innerHTML]="question.B"></p>\n\n              <ion-icon *ngIf="question._f[\'B\']==1" name="checkmark" item-right color=dark></ion-icon>\n\n              <ion-icon *ngIf="question._f[\'B\']<0" name="close" item-right color=dark></ion-icon>\n\n          </ion-item>\n\n          <ion-item text-wrap class="item-text-wrap" [ngClass]="{normal: question._f[\'C\']==0, correct: question._f[\'C\']==1, selected: question._f[\'C\']==2, invalid: question._f[\'C\']<0}" id="C" *ngIf="question.C !==\'\'" (click)="clickedRow(\'C\')">\n\n              <h2>C</h2>\n\n              <p [innerHTML]="question.C"></p>\n\n              <ion-icon *ngIf="question._f[\'C\']==1" name="checkmark" item-right color=dark></ion-icon>\n\n              <ion-icon *ngIf="question._f[\'C\']<0" name="close" item-right color=dark></ion-icon>\n\n          </ion-item>\n\n          <ion-item text-wrap class="item-text-wrap" [ngClass]="{normal: question._f[\'D\']==0, correct: question._f[\'D\']==1, selected: question._f[\'D\']==2, invalid: question._f[\'D\']<0}" id="D" *ngIf="question.D !==\'\'" (click)="clickedRow(\'D\')">\n\n              <h2>D</h2>\n\n              <p [innerHTML]="question.D"></p>\n\n              <ion-icon *ngIf="question._f[\'D\']==1" name="checkmark" item-right color=dark></ion-icon>\n\n              <ion-icon *ngIf="question._f[\'D\']<0" name="close" item-right color=dark></ion-icon>\n\n          </ion-item>\n\n          <!-- <ion-item text-wrap class="item-text-wrap" [ngClass]="{normal: question._f[\'E\']==0, correct: question._f[\'E\']==1, selected: question._f[\'E\']==2, invalid: question._f[\'E\']<0}" id="E" *ngIf="question.E !==\'\'" (click)="clickedRow(\'E\')">\n\n              <h2>E</h2>\n\n              <p [innerHTML]="question.E"></p>\n\n              <ion-icon *ngIf="question._f[\'E\']==1" name="checkmark" item-right color=dark></ion-icon>\n\n              <ion-icon *ngIf="question._f[\'E\']<0" name="close" item-right color=dark></ion-icon>\n\n          </ion-item> -->\n\n      </ion-list>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jair Acevedo\IONIC_PROJECTS\Quizionic2Evanto\Quiz_IPMA_001\src\pages\exam-details\exam-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob__["a" /* AdMob */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_db_service__["a" /* DbService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
], ExamDetailsPage);

//# sourceMappingURL=exam-details.js.map

/***/ })

},[215]);
//# sourceMappingURL=main.js.map
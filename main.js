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
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_blog_blog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/blog/blog.component */ "./src/app/home/blog/blog.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _home_article_article_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/article/article.component */ "./src/app/home/article/article.component.ts");








var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], data: { depth: '1' } },
    { path: 'blog', component: _home_blog_blog_component__WEBPACK_IMPORTED_MODULE_5__["BlogComponent"], data: { depth: '2' } },
    { path: 'blog/:id', component: _home_article_article_component__WEBPACK_IMPORTED_MODULE_7__["ArticleComponent"], data: { depth: '3' } },
    { path: 'experience', component: _experience_experience_component__WEBPACK_IMPORTED_MODULE_6__["ExperienceComponent"], data: { depth: '4' } },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"], data: { depth: '5' } }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _experience_experience_component__WEBPACK_IMPORTED_MODULE_6__["ExperienceComponent"], _home_article_article_component__WEBPACK_IMPORTED_MODULE_7__["ArticleComponent"], _home_blog_blog_component__WEBPACK_IMPORTED_MODULE_5__["BlogComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");\n@import url(\"https://use.fontawesome.com/releases/v5.0.9/css/all.css\");\n@import url(\"https://fonts.googleapis.com/css?family=Caveat\");\nhtml\n{\n  scroll-behavior: smooth;\n}\n#container\n{\n  width: 100%;\n  margin: 0 auto;\n  max-width: 960px;\n  min-width: 300px;\n  height: 100%;\n  /*line below controls the background color if greater than 1080px, center it*/\n  margin-bottom: -50px;\n  z-index: 1;\n}\n.headerBackground\n{\n  width: 100%;\n  display: block;\n  position: absolute;\n  height: 130px;\n  background-color: #045F85;\n  left: 0px;\n  z-index: -10;\n  min-width: 300px;\n}\n#header\n{\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0 5px;\n  margin-bottom: 32.4px;\n  z-index: 1;\n  overflow-x: hidden;\n  min-width: 300px;\n}\n#headerLeft,\n#headerRight\n{\n  position: relative;\n  display: inline-block;\n  width: 50%;\n  vertical-align: top;\n}\n#headerLeft\n{\n  color: white;\n  margin-top: 15px;\n}\n#headerLeft> a\n{\n  color: white;\n  text-decoration: none;\n}\n#headerLeft> a:hover\n{\n  text-decoration: none;\n}\n#headerRight\n{\n  text-align: right;\n  padding-right: 20px;\n}\n#headerRight > a\n{\n  color: #FF7791;\n  border: 1px solid #FF7791;\n  padding: 5px;\n  border-radius: 3px;\n  position: relative;\n  top: 45px;\n  font-size: 13px;\n  transition: color 0.4s;\n}\n#headerRight > a:hover\n{\n  cursor: pointer;\n  text-decoration: none;\n  /* background-color: #E6777F; */\n  color: white;\n  border: 1px solid white;\n  transition: color 0.4s;\n}\n#menuLines\n{\n  position: absolute;\n  z-index: 1;\n  top: 87px;\n  width: 100%;\n  height: 200px;\n  left: 0px;\n  overflow-x: hidden;\n  padding-top: 40px;\n  min-width: 300px;\n}\n#menuLines > hr\n{\n  background-color: #FF7791;\n  color: #FF7791;\n  padding: 1px 0;\n  margin: 0px;\n  display: inline-block;\n  vertical-align: top;\n}\n#leftLine\n{\n  position: relative;\n  width: 45%;\n  left: 0px;\n  top:37px;\n}\n#rotateLine\n{\n  position: relative;\n  -webkit-transform: rotate(-50deg);\n          transform: rotate(-50deg);\n  width: 101px;\n  top:-1px;\n  left: -20px;\n}\n#rightLine\n{\n  position: absolute;\n  width: 55%;\n  top: 0px;\n  right: -62.2px;\n}\n/* Change after width of screen is less than 700px */\n#mainMenu\n{\n  width: 51.3%;\n  position: relative;\n  display: block;\n  float: right;\n  margin-top: -40px;\n  margin-bottom: -5px;\n  z-index: 2;\n  /* filter: blur(0px); */\n}\n#mainMenu > input,\n#mainMenu > label\n{\n  display: none;\n}\n#mainMenu > #pages > a\n{\n  display: inline-block;\n  position: relative;\n  width: 33.3%;\n  padding: 10px;\n  text-align: center;\n  border-bottom: 5px solid transparent;\n  color: white;\n  transition: 0.4s;\n  z-index: 2;\n}\n/* #mainMenu:hover > #pages a */\n.blurBackground\n{\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  -webkit-filter: blur(3.3px);\n          filter: blur(3.3px);\n  transition: -webkit-filter 0.3s;\n  transition: filter 0.3s;\n  transition: filter 0.3s, -webkit-filter 0.3s;\n}\n#mainMenu > #pages > a:hover\n{\n  cursor: pointer;\n  border-bottom: 5px solid #FF7791;\n  color: #FF7791;\n  transition: 0.4s;\n  text-decoration: none;\n  /* transform: scale(2); */\n  -webkit-filter: blur(0px);\n          filter: blur(0px);\n}\n#mainMenu > #pages > a.active\n{\n  cursor: pointer;\n  border-bottom: 5px solid #FF7791;\n  color: #FF7791;\n  transition: 0.4s;\n  text-decoration: none;\n}\n#square\n{\n  height: 34px;\n  width: 26px;\n  position: absolute;\n  left: 0;\n  z-index: 1;\n  background-color:rgba(255,255,255,0.7);\n}\n#trapezoid\n{\n  position: absolute;\n  top:130px;\n  z-index:1;\n  display: inline-block;\n  border-top: 34px solid rgba(255,255,255,0.7);\n  border-right: 28px solid transparent;\n  height: 0;\n  width: 45%;\n  left: 26px;\n}\n#BridgePicture\n{\n  width: 100%;\n  position: relative;\n  display: block;\n  left: 0px;\n  z-index: -10;\n  margin-top: -20px;\n  max-height: 525px;\n  overflow: hidden;\n  min-width: 300px;\n}\n#pageTitle\n{\n  position: absolute;\n  width: 100%;\n  z-index: 1;\n  bottom: 40px;\n  padding-left: 20px;\n  padding-top: 20px;\n}\n#pageTitle > h3\n{\n  margin: auto;\n  max-width: 960px;\n  color: white;\n}\n#BridgePicture > img\n{\n  width: 100%;\n  position: relative;\n  bottom: 0px;\n  z-index: -10;\n}\n#subMenu\n{\n  display: block;\n  position: relative;\n  z-index: 10;\n  padding-top: 5px;\n  padding-left: 5px;\n  width: 40%;\n  left: 0px;\n}\n/* home sub menu */\n#homeSubMenu > a\n{\n  display: inline-block;\n  text-align: center;\n  width: 50%;\n  vertical-align:middle;\n  padding-right: 10px;\n  text-decoration: none;\n}\n#homeSubMenu > a > p\n{\n  color: rgba(0,0,0,0.7);\n  z-index: 3;\n  font-size: 15px;\n  transition: color 0.5s;\n}\n#homeSubMenu > a:hover > p\n{\n  color: #FF7791;\n  transition: color 0.5s;\n}\n#homeSubMenu > a:hover\n{\n  text-decoration: none;\n  cursor: pointer;\n}\n/* Experience */\n#experienceSubMenu\n{\n  width: 100%;\n}\n#experienceSubMenu > a\n{\n  display: inline-block;\n  text-align: center;\n  width: 33%;\n  vertical-align:middle;\n  padding-right: 10px;\n  text-decoration: none;\n}\n#experienceSubMenu > a:nth-of-type(1)\n{\n  /* background-color: blue; */\n  width: 25%;\n  text-align: left;\n}\n#experienceSubMenu > a:nth-of-type(2)\n{\n  /* background-color: blue; */\n  min-width: 128px;\n}\n#experienceSubMenu > a > p\n{\n  color: rgba(0,0,0,0.7);\n  z-index: 3;\n  font-size: 15px;\n  transition: color 0.5s;\n}\n#experienceSubMenu > a:hover > p\n{\n  color: #FF7791;\n  transition: color 0.5s;\n}\n#experienceSubMenu > a:hover\n{\n  text-decoration: none;\n  cursor: pointer;\n}\n/*  */\n#container2\n{\n  width: 100%;\n  margin: 0 auto;\n  max-width: 960px;\n  min-width: 300px;\n  height: 100%;\n  z-index: 10;\n}\n.content\n{\n  position: relative;\n}\n.content > *\n{\n  display: block;\n}\n#footer\n{\n  position: relative;\n  /* bottom: 4px; */\n  width: 100%;\n  color: white;\n  z-index: 1;\n}\n#quickLinks\n{\n  width: 100%;\n  height: 40px;\n  font-family: sans-serif;\n  text-align: center;\n  /* background-color:  rgb(72,91,109); */\n}\n#footer > h3\n{\n  text-align: center;\n  padding-top: 20px;\n  padding-bottom: 10px;\n  font-family: sans-serif;\n  position: relative;\n  /* left:35%; */\n}\n#quickLinks > a\n{\n  width: 33%;\n  color: white;\n  list-style-type: none;\n  display: inline-block;\n  text-align: center;\n}\n#quickLinks > a:hover\n{\n  text-decoration:none;\n  color: #045F85;\n  transition: color 0.35s;\n}\n#signature\n{\n  /* background-color: rgb(72,91,109); */\n  text-align: center;\n  padding-right: 5px;\n  color: white;\n  font-family: sans-serif;\n  font-size: 10px;\n  position: absolute;\n  width: 100%;\n  margin-bottom: 0px;\n  margin-top: 13px;\n}\n#signature > p\n{\n  margin-bottom: 0px;\n}\n#footer-background\n{\n  display: block;\n  position: absolute;\n  height: 134px;\n  background-color: rgba(0,0,0,0.5);\n  width: 100%;\n  left: 0px;\n  z-index: -1;\n  min-width: 300px;\n}\n@media all and (max-width:789px)\n{\n  #subMenu\n  {\n    display: block;\n    position: relative;\n    z-index: 10;\n    padding-top: 5px;\n    padding-left: 5px;\n    width: 40%;\n    left: 0px;\n  }\n  /* Experience */\n  #experienceSubMenu\n  {\n    width: 100%;\n  }\n  #experienceSubMenu > a\n  {\n    display: inline-block;\n    text-align: center;\n    width: 30%;\n    vertical-align:middle;\n    padding-right: 0px;\n    text-decoration: none;\n  }\n  #experienceSubMenu > a:nth-of-type(1)\n  {\n    /* background-color: blue; */\n    width: 22%;\n    text-align: left;\n  }\n  #experienceSubMenu > a:nth-of-type(2)\n  {\n    /* background-color: blue; */\n    min-width: 128px;\n  }\n  #experienceSubMenu > a > p\n  {\n    z-index: 3;\n    font-size: 15px;\n  }\n  #pageTitle\n  {\n    position: absolute;\n    width: 100%;\n    z-index: 1;\n    bottom: 40px;\n    padding-left: 10px;\n    padding-top: 20px;\n  }\n  #pageTitle > h2\n  {\n    margin: auto;\n    max-width: 960px;\n    color: white;\n  }\n}\n@media all and (max-width:700px)\n{\n  #mainMenu\n  {\n    width: 50.5%;\n    position: relative;\n    display: block;\n    float: right;\n    margin-top: -40px;\n    margin-bottom: -5px;\n    z-index: 2;\n  }\n  #mainMenu > #pages > a\n  {\n    display: inline-block;\n    position: relative;\n    width: 33.3%;\n    padding: 10px;\n    text-align: center;\n    z-index: 2;\n  }\n  #subMenu\n  {\n    display: block;\n    position: relative;\n    z-index: 10;\n    padding-top: 5px;\n    padding-left: 5px;\n    width: 50%;\n    left: 0px;\n  }\n  /* Experience */\n  #experienceSubMenu\n  {\n    width: 100%;\n  }\n  #experienceSubMenu > a\n  {\n    display: inline-block;\n    text-align: center;\n    width: 30%;\n    vertical-align:middle;\n    padding-right: 0px;\n    text-decoration: none;\n  }\n  #experienceSubMenu > a:nth-of-type(1)\n  {\n    /* background-color: blue; */\n    width: 19%;\n    text-align: left;\n  }\n  #experienceSubMenu > a:nth-of-type(2)\n  {\n    /* background-color: blue; */\n    min-width: 128px;\n  }\n  #experienceSubMenu > a:nth-of-type(3)\n  {\n    /* background-color: blue; */\n    text-align: left;\n  }\n  #experienceSubMenu > a > p\n  {\n    z-index: 3;\n    font-size: 15px;\n  }\n\n  #BridgePicture\n  {\n    width: 100%;\n    position: relative;\n    display: block;\n    left: 0px;\n    z-index: -10;\n    height: 320px;\n    margin-top: -20px;\n  }\n  #pageTitle > h2\n  {\n    margin: auto;\n    max-width: 960px;\n    color: white;\n  }\n  #BridgePicture > img\n  {\n    width: auto;\n    height: 100%;\n    margin-left: -150px;\n  }\n}\n/* Mobile Switch! */\n@media all and (max-width:596px)\n{\n  .headerBackground\n  {\n    width: 100%;\n    display: block;\n    position: absolute;\n    height: 130px;\n    background-color: #045F85;\n    left: 0px;\n    z-index: 0;\n  }\n  #header\n  {\n    position: relative;\n    display: block;\n    width: 100%;\n    padding: 0 5px;\n    margin-bottom: 32.4px;\n    z-index: 1;\n    overflow-x: hidden;\n  }\n  #headerLeft\n  {\n    display: block;\n    width: 100%;\n    color: white;\n    margin-top: 15px;\n    text-align: center;\n  }\n  #headerLeft > a > h2\n  {\n    margin-bottom: 0px;\n  }\n  #headerLeft> a\n  {\n    color: white;\n    text-decoration: none;\n  }\n  #headerLeft> a:hover\n  {\n    text-decoration: none;\n  }\n  #headerRight\n  {\n    position: absolute;\n    text-align: right;\n    /* padding-right: 20px; */\n    top: 0px;\n    right: 20px;\n  }\n  #headerRight > a\n  {\n    color: #FF7791;\n    border: 1px solid #FF7791;\n    padding: 5px;\n    border-radius: 3px;\n    position: relative;\n    top: 45px;\n    font-size: 13px;\n    transition: 0.4s\n  }\n  #headerRight > a:hover\n  {\n    cursor: pointer;\n    text-decoration: none;\n    /* background-color: #E6777F; */\n    color: white;\n    border: 1px solid white;\n    transition: 0.4s\n  }\n  #menuLines\n  {\n    position: absolute;\n    z-index: 1;\n    top: 87px;\n    width: 100%;\n    left: 0px;\n  }\n  #menuLines > hr\n  {\n    background-color: #FF7791;\n    color: #FF7791;\n    padding: 1px 0;\n    margin: 0px;\n    display: inline-block;\n    vertical-align: top;\n  }\n  #leftLine\n  {\n    position: relative;\n    width: 40px;\n    left: 0px;\n    top:37px;\n  }\n  #rotateLine\n  {\n    position: relative;\n    -webkit-transform: rotate(-50deg);\n            transform: rotate(-50deg);\n    width: 101px;\n    top:-1px;\n    left: -20px;\n  }\n  #rightLine\n  {\n    position: absolute;\n    width: 100%;\n    top: 0px;\n    left: 102px;\n  }\n  #whiteBar\n  {\n    overflow-x: hidden;\n    margin-top: -15px;\n  }\n  #square\n  {\n    display: none;\n  }\n  #trapezoid\n  {\n    position: relative;\n    width: 100%;\n    left: 102px;\n    top: 0px;\n    z-index:1;\n    display: block;\n    border-top: 0px;\n    border-right: 0px;\n    border-bottom: 40px solid rgba(255,255,255,0.7);\n    border-left: 33px solid transparent;\n    height: 0;\n    margin-left: -32px;\n  }\n  #mainMenu\n  {\n    width: 50.5%;\n    position: absolute;\n    display: block;\n    float: right;\n    margin-top: -40px;\n    margin-bottom: -5px;\n    z-index: 3;\n    /* background-color: gray; */\n  }\n  #pages\n  {\n    background-color: rgba(0,0,0,0.85);\n    position: absolute;\n    width: 150px;\n    margin-top: 65px;\n    border-top-right-radius: 8px;\n    border-bottom-right-radius: 8px;\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n    transition: -webkit-transform 0.2s;\n    transition: transform 0.2s;\n    transition: transform 0.2s, -webkit-transform 0.2s;\n  }\n  #pages.slide\n  {\n    margin-left: 0px;\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n    transition: -webkit-transform 0.33s;\n    transition: transform 0.33s;\n    transition: transform 0.33s, -webkit-transform 0.33s;\n    /* transition: 1s; */\n  }\n  #mainMenu > label.active\n  {\n    background-color: white;\n    transition: background-color 0.33s;\n    color: #FF7791;\n    border: 1px solid #FF7791;\n  }\n  #mainMenu > #pages > a\n  {\n    display: block;\n    position: relative;\n    width: 100%;\n    padding: 10px;\n    left: 0px;\n    text-align: center;\n    z-index: 2;\n  }\n\n  #mainMenu > label\n  {\n    position: absolute;\n    margin-top: 15px;\n    font-size: 30px;\n    left: -2px solid transparent;\n    display: inline-block;\n    width: 50px;\n    height: 50px;\n    padding: 10px;\n    color: white;\n    border: 1px solid white;\n    border-radius: 5px;\n    background-color: none;\n    transition: background-color 0.2s;\n    z-index: 3;\n  }\n  #mainMenu > label:hover\n  {\n    cursor: pointer;\n  }\n  #subMenu\n  {\n    display: block;\n    position: absolute;\n    z-index: 2;\n    margin-top: -35px;\n    padding-left: 5px;\n    padding-left: 75px;\n    width: 100%;\n    right: 0px;\n  }\n  /* home sub menu */\n  #homeSubMenu > a\n  {\n    display: inline-block;\n    text-align: center;\n    width: 50%;\n    vertical-align:middle;\n    padding-right: 0px;\n    text-decoration: none;\n  }\n  #homeSubMenu > a > p\n  {\n    color: rgba(0,0,0,0.7);\n    z-index: 3;\n    font-size: 13px;\n    transition: color 0.5s;\n  }\n  /* Experience */\n  #experienceSubMenu\n  {\n    width: 100%;\n  }\n  #experienceSubMenu > a\n  {\n    display: inline-block;\n    text-align: center;\n    width: 30%;\n    vertical-align:middle;\n    padding-right: 0px;\n    text-decoration: none;\n  }\n  #experienceSubMenu > a:nth-of-type(1)\n  {\n    /* background-color: blue; */\n    width: 30%;\n    text-align: center;\n  }\n  #experienceSubMenu > a:nth-of-type(2)\n  {\n    /* background-color: blue; */\n    min-width: 128px;\n  }\n  #experienceSubMenu > a:nth-of-type(3)\n  {\n    /* background-color: blue; */\n    text-align: center;\n  }\n  #experienceSubMenu > a > p\n  {\n    z-index: 3;\n    font-size: 13px;\n  }\n\n  #BridgePicture\n  {\n    width: 100%;\n    position: relative;\n    display: block;\n    left: 0px;\n    z-index: -10;\n    height: 320px;\n    margin-top: -20px;\n    overflow-y: hidden;\n  }\n  #pageTitle > h2\n  {\n    margin: auto;\n    max-width: 960px;\n    color: white;\n  }\n  #BridgePicture > img\n  {\n    width: auto;\n    height: 100%;\n    margin-left: -150px;\n  }\n\n  #quickLinks\n  {\n    width: 100%;\n    margin-top: -10px;\n    margin-bottom: 10px;\n  }\n  #quickLinks > a\n  {\n    width: 50%;\n    font-size: 13px;\n  }\n}\n@media all and (max-width:420px)\n{\n  #headerLeft\n  {\n    display: block;\n    width: 100%;\n    color: white;\n    margin-top: 15px;\n    text-align: center;\n  }\n  #headerLeft > a > h2\n  {\n    margin-bottom: 0px;\n    font-size: 24px;\n    margin-top: 27px;\n  }\n  #headerRight\n  {\n    position: absolute;\n    text-align: right;\n    /* padding-right: 20px; */\n    top: 0px;\n    right: 10px;\n  }\n  #headerRight > a\n  {\n    color: #FF7791;\n    border: 1px solid #FF7791;\n    padding: 5px;\n    border-radius: 3px;\n    position: relative;\n    top: 45px;\n    font-size: 11px;\n    transition: 0.4s\n  }\n  #subMenu\n  {\n    display: block;\n    position: absolute;\n    z-index: 2;\n    margin-top: -35px;\n    padding-left: 5px;\n    padding-left: 75px;\n    width: 100%;\n    right: 0px;\n  }\n  /* home sub menu */\n  #homeSubMenu > a\n  {\n    display: inline-block;\n    text-align: center;\n    width: 50%;\n    vertical-align:middle;\n    padding-right: 0px;\n    text-decoration: none;\n  }\n  #homeSubMenu > a > p\n  {\n    color: rgba(0,0,0,0.7);\n    z-index: 3;\n    font-size: 13px;\n    transition: color 0.5s;\n  }\n  /* Experience */\n  #experienceSubMenu\n  {\n    width: 100%;\n  }\n  #experienceSubMenu > a\n  {\n    display: inline-block;\n    text-align: center;\n    width: 23%;\n    vertical-align:middle;\n    padding-right: 0px;\n    text-decoration: none;\n  }\n  #experienceSubMenu > a:nth-of-type(1)\n  {\n    /* background-color: blue; */\n    /* width: 30%; */\n    text-align: right;\n  }\n  #experienceSubMenu > a:nth-of-type(2)\n  {\n    /* background-color: blue; */\n    min-width: 120px;\n  }\n  #experienceSubMenu > a:nth-of-type(3)\n  {\n    /* background-color: blue; */\n    text-align: center;\n  }\n  #experienceSubMenu > a > p\n  {\n    z-index: 3;\n    font-size: 13px;\n  }\n}\n@media all and (max-width:350px)\n{\n  #headerRight\n  {\n    position: absolute;\n    text-align: right;\n    /* padding-right: 20px; */\n    top: 0px;\n    right: 0px;\n  }\n  #headerRight > a\n  {\n    color: #FF7791;\n    border: 1px solid #FF7791;\n    padding: 5px;\n    border-radius: 3px;\n    position: relative;\n    top: 45px;\n    font-size: 10px;\n    transition: 0.4s\n  }\n  #homeSubMenu > a > p\n  {\n    color: rgba(0,0,0,0.7);\n    z-index: 3;\n    font-size: 12px;\n    transition: color 0.5s;\n  }\n  /* Experience */\n  #experienceSubMenu\n  {\n    width: 100%;\n  }\n  #experienceSubMenu > a\n  {\n    display: inline-block;\n    text-align: center;\n    width: 15%;\n    vertical-align:middle;\n    padding-right: 0px;\n    text-decoration: none;\n  }\n  #experienceSubMenu > a:nth-of-type(1)\n  {\n    /* background-color: blue; */\n    /* width: 30%; */\n    text-align: right;\n  }\n  #experienceSubMenu > a:nth-of-type(2)\n  {\n    /* background-color: blue; */\n    min-width: 100px;\n    text-align: center;\n  }\n  #experienceSubMenu > a:nth-of-type(3)\n  {\n    /* background-color: blue; */\n    text-align: left;\n  }\n  #experienceSubMenu > a > p\n  {\n    z-index: 3;\n    font-size: 12px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0VBQXNFO0FBQ3RFLHNFQUFzRTtBQUN0RSw2REFBNkQ7QUFDN0Q7O0VBRUUsdUJBQXVCO0FBQ3pCO0FBQ0E7O0VBRUUsV0FBVztFQUNYLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiw2RUFBNkU7RUFDN0Usb0JBQW9CO0VBQ3BCLFVBQVU7QUFDWjtBQUNBOztFQUVFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsU0FBUztFQUNULFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFdBQVc7RUFDWCxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7OztFQUdFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjtBQUNBOztFQUVFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCO0FBQ0E7O0VBRUUscUJBQXFCO0FBQ3ZCO0FBQ0E7O0VBRUUsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjtBQUNBOztFQUVFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7QUFDQTs7RUFFRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4QjtBQUNBOztFQUVFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7RUFDWCxhQUFhO0VBQ2IsU0FBUztFQUNULGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxjQUFjO0VBQ2QsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxRQUFRO0FBQ1Y7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsaUNBQXlCO1VBQXpCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osUUFBUTtFQUNSLFdBQVc7QUFDYjtBQUNBOztFQUVFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtFQUNSLGNBQWM7QUFDaEI7QUFDQSxvREFBb0Q7QUFDcEQ7O0VBRUUsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLHVCQUF1QjtBQUN6QjtBQUNBOzs7RUFHRSxhQUFhO0FBQ2Y7QUFDQTs7RUFFRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjtBQUNBLCtCQUErQjtBQUMvQjs7RUFFRSwyQkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDJCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsK0JBQXVCO0VBQXZCLHVCQUF1QjtFQUF2Qiw0Q0FBdUI7QUFDekI7QUFDQTs7RUFFRSxlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6Qix5QkFBaUI7VUFBakIsaUJBQWlCO0FBQ25CO0FBQ0E7O0VBRUUsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2QjtBQUNBOztFQUVFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxVQUFVO0VBQ1Ysc0NBQXNDO0FBQ3hDO0FBQ0E7O0VBRUUsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLDRDQUE0QztFQUM1QyxvQ0FBb0M7RUFDcEMsU0FBUztFQUNULFVBQVU7RUFDVixVQUFVO0FBQ1o7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxTQUFTO0VBQ1QsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBQ0E7O0VBRUUsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTs7RUFFRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixTQUFTO0FBQ1g7QUFDQSxrQkFBa0I7QUFDbEI7O0VBRUUscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7QUFDQTs7RUFFRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7QUFDQTs7RUFFRSxjQUFjO0VBQ2Qsc0JBQXNCO0FBQ3hCO0FBQ0E7O0VBRUUscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7QUFDQSxlQUFlO0FBQ2Y7O0VBRUUsV0FBVztBQUNiO0FBQ0E7O0VBRUUscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7QUFDQTs7RUFFRSw0QkFBNEI7RUFDNUIsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLDRCQUE0QjtFQUM1QixnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7QUFDQTs7RUFFRSxjQUFjO0VBQ2Qsc0JBQXNCO0FBQ3hCO0FBQ0E7O0VBRUUscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7QUFDQSxLQUFLO0FBQ0w7O0VBRUUsV0FBVztFQUNYLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFDQTs7RUFFRSxrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSxjQUFjO0FBQ2hCO0FBQ0E7O0VBRUUsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7QUFDWjtBQUNBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQix1Q0FBdUM7QUFDekM7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFFQTs7RUFFRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCO0FBQ0E7O0VBRUUsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCx1QkFBdUI7QUFDekI7QUFDQTs7RUFFRSxzQ0FBc0M7RUFDdEMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsV0FBVztFQUNYLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCO0FBVUE7O0VBRUU7O0lBRUUsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsU0FBUztFQUNYO0VBQ0EsZUFBZTtFQUNmOztJQUVFLFdBQVc7RUFDYjtFQUNBOztJQUVFLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCO0VBQ0E7O0lBRUUsNEJBQTRCO0lBQzVCLFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7RUFDQTs7SUFFRSw0QkFBNEI7SUFDNUIsZ0JBQWdCO0VBQ2xCO0VBQ0E7O0lBRUUsVUFBVTtJQUNWLGVBQWU7RUFDakI7RUFDQTs7SUFFRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjtFQUNBOztJQUVFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkO0FBQ0Y7QUFVQTs7RUFFRTs7SUFFRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7RUFDQTs7SUFFRSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjtFQUNBOztJQUVFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFNBQVM7RUFDWDtFQUNBLGVBQWU7RUFDZjs7SUFFRSxXQUFXO0VBQ2I7RUFDQTs7SUFFRSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2QjtFQUNBOztJQUVFLDRCQUE0QjtJQUM1QixVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCO0VBQ0E7O0lBRUUsNEJBQTRCO0lBQzVCLGdCQUFnQjtFQUNsQjtFQUNBOztJQUVFLDRCQUE0QjtJQUM1QixnQkFBZ0I7RUFDbEI7RUFDQTs7SUFFRSxVQUFVO0lBQ1YsZUFBZTtFQUNqQjs7RUFFQTs7SUFFRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxTQUFTO0lBQ1QsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7RUFDbkI7RUFDQTs7SUFFRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDtFQUNBOztJQUVFLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0VBQ3JCO0FBQ0Y7QUFRQSxtQkFBbUI7QUFDbkI7O0VBRUU7O0lBRUUsV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1QsVUFBVTtFQUNaO0VBQ0E7O0lBRUUsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1Ysa0JBQWtCO0VBQ3BCO0VBQ0E7O0lBRUUsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjtFQUNBOztJQUVFLGtCQUFrQjtFQUNwQjtFQUNBOztJQUVFLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7RUFDQTs7SUFFRSxxQkFBcUI7RUFDdkI7RUFDQTs7SUFFRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixRQUFRO0lBQ1IsV0FBVztFQUNiO0VBQ0E7O0lBRUUsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZUFBZTtJQUNmO0VBQ0Y7RUFDQTs7SUFFRSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCO0VBQ0Y7RUFDQTs7SUFFRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxXQUFXO0lBQ1gsU0FBUztFQUNYO0VBQ0E7O0lBRUUseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxjQUFjO0lBQ2QsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixtQkFBbUI7RUFDckI7RUFDQTs7SUFFRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxRQUFRO0VBQ1Y7RUFDQTs7SUFFRSxrQkFBa0I7SUFDbEIsaUNBQXlCO1lBQXpCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osUUFBUTtJQUNSLFdBQVc7RUFDYjtFQUNBOztJQUVFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtJQUNSLFdBQVc7RUFDYjtFQUNBOztJQUVFLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7RUFDQTs7SUFFRSxhQUFhO0VBQ2Y7RUFDQTs7SUFFRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxRQUFRO0lBQ1IsU0FBUztJQUNULGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLCtDQUErQztJQUMvQyxtQ0FBbUM7SUFDbkMsU0FBUztJQUNULGtCQUFrQjtFQUNwQjtFQUNBOztJQUVFLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDViw0QkFBNEI7RUFDOUI7RUFDQTs7SUFFRSxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQixvQ0FBNEI7WUFBNUIsNEJBQTRCO0lBQzVCLGtDQUEwQjtJQUExQiwwQkFBMEI7SUFBMUIsa0RBQTBCO0VBQzVCO0VBQ0E7O0lBRUUsZ0JBQWdCO0lBQ2hCLGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsbUNBQTJCO0lBQTNCLDJCQUEyQjtJQUEzQixvREFBMkI7SUFDM0Isb0JBQW9CO0VBQ3RCO0VBQ0E7O0lBRUUsdUJBQXVCO0lBQ3ZCLGtDQUFrQztJQUNsQyxjQUFjO0lBQ2QseUJBQXlCO0VBQzNCO0VBQ0E7O0lBRUUsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtJQUNiLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsVUFBVTtFQUNaOztFQUVBOztJQUVFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGlDQUFpQztJQUNqQyxVQUFVO0VBQ1o7RUFDQTs7SUFFRSxlQUFlO0VBQ2pCO0VBQ0E7O0lBRUUsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7RUFDWjtFQUNBLGtCQUFrQjtFQUNsQjs7SUFFRSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2QjtFQUNBOztJQUVFLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsZUFBZTtJQUNmLHNCQUFzQjtFQUN4QjtFQUNBLGVBQWU7RUFDZjs7SUFFRSxXQUFXO0VBQ2I7RUFDQTs7SUFFRSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2QjtFQUNBOztJQUVFLDRCQUE0QjtJQUM1QixVQUFVO0lBQ1Ysa0JBQWtCO0VBQ3BCO0VBQ0E7O0lBRUUsNEJBQTRCO0lBQzVCLGdCQUFnQjtFQUNsQjtFQUNBOztJQUVFLDRCQUE0QjtJQUM1QixrQkFBa0I7RUFDcEI7RUFDQTs7SUFFRSxVQUFVO0lBQ1YsZUFBZTtFQUNqQjs7RUFFQTs7SUFFRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxTQUFTO0lBQ1QsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCO0VBQ0E7O0lBRUUsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7RUFDQTs7SUFFRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjs7RUFFQTs7SUFFRSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQjtFQUNBOztJQUVFLFVBQVU7SUFDVixlQUFlO0VBQ2pCO0FBQ0Y7QUFXQTs7RUFFRTs7SUFFRSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0VBQ0E7O0lBRUUsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7RUFDQTs7SUFFRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixRQUFRO0lBQ1IsV0FBVztFQUNiO0VBQ0E7O0lBRUUsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZUFBZTtJQUNmO0VBQ0Y7RUFDQTs7SUFFRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtFQUNaO0VBQ0Esa0JBQWtCO0VBQ2xCOztJQUVFLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCO0VBQ0E7O0lBRUUsc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixlQUFlO0lBQ2Ysc0JBQXNCO0VBQ3hCO0VBQ0EsZUFBZTtFQUNmOztJQUVFLFdBQVc7RUFDYjtFQUNBOztJQUVFLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCO0VBQ0E7O0lBRUUsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7RUFDQTs7SUFFRSw0QkFBNEI7SUFDNUIsZ0JBQWdCO0VBQ2xCO0VBQ0E7O0lBRUUsNEJBQTRCO0lBQzVCLGtCQUFrQjtFQUNwQjtFQUNBOztJQUVFLFVBQVU7SUFDVixlQUFlO0VBQ2pCO0FBQ0Y7QUFTQTs7RUFFRTs7SUFFRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixRQUFRO0lBQ1IsVUFBVTtFQUNaO0VBQ0E7O0lBRUUsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZUFBZTtJQUNmO0VBQ0Y7RUFDQTs7SUFFRSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLGVBQWU7SUFDZixzQkFBc0I7RUFDeEI7RUFDQSxlQUFlO0VBQ2Y7O0lBRUUsV0FBVztFQUNiO0VBQ0E7O0lBRUUscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixxQkFBcUI7RUFDdkI7RUFDQTs7SUFFRSw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjtFQUNBOztJQUVFLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0VBQ0E7O0lBRUUsNEJBQTRCO0lBQzVCLGdCQUFnQjtFQUNsQjtFQUNBOztJQUVFLFVBQVU7SUFDVixlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjAuOS9jc3MvYWxsLmNzc1wiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUNhdmVhdFwiKTtcbmh0bWxcbntcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG4jY29udGFpbmVyXG57XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA5NjBweDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICAvKmxpbmUgYmVsb3cgY29udHJvbHMgdGhlIGJhY2tncm91bmQgY29sb3IgaWYgZ3JlYXRlciB0aGFuIDEwODBweCwgY2VudGVyIGl0Ki9cbiAgbWFyZ2luLWJvdHRvbTogLTUwcHg7XG4gIHotaW5kZXg6IDE7XG59XG4uaGVhZGVyQmFja2dyb3VuZFxue1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0NUY4NTtcbiAgbGVmdDogMHB4O1xuICB6LWluZGV4OiAtMTA7XG4gIG1pbi13aWR0aDogMzAwcHg7XG59XG4jaGVhZGVyXG57XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMzIuNHB4O1xuICB6LWluZGV4OiAxO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG1pbi13aWR0aDogMzAwcHg7XG59XG4jaGVhZGVyTGVmdCxcbiNoZWFkZXJSaWdodFxue1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDUwJTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbiNoZWFkZXJMZWZ0XG57XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbiNoZWFkZXJMZWZ0PiBhXG57XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuI2hlYWRlckxlZnQ+IGE6aG92ZXJcbntcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuI2hlYWRlclJpZ2h0XG57XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuI2hlYWRlclJpZ2h0ID4gYVxue1xuICBjb2xvcjogI0ZGNzc5MTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGNzc5MTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0NXB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuNHM7XG59XG4jaGVhZGVyUmlnaHQgPiBhOmhvdmVyXG57XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjRTY3NzdGOyAqL1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjRzO1xufVxuI21lbnVMaW5lc1xue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogODdweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cbiNtZW51TGluZXMgPiBoclxue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3NzkxO1xuICBjb2xvcjogI0ZGNzc5MTtcbiAgcGFkZGluZzogMXB4IDA7XG4gIG1hcmdpbjogMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG4jbGVmdExpbmVcbntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNDUlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDozN3B4O1xufVxuI3JvdGF0ZUxpbmVcbntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNTBkZWcpO1xuICB3aWR0aDogMTAxcHg7XG4gIHRvcDotMXB4O1xuICBsZWZ0OiAtMjBweDtcbn1cbiNyaWdodExpbmVcbntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTUlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IC02Mi4ycHg7XG59XG4vKiBDaGFuZ2UgYWZ0ZXIgd2lkdGggb2Ygc2NyZWVuIGlzIGxlc3MgdGhhbiA3MDBweCAqL1xuI21haW5NZW51XG57XG4gIHdpZHRoOiA1MS4zJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAtNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogLTVweDtcbiAgei1pbmRleDogMjtcbiAgLyogZmlsdGVyOiBibHVyKDBweCk7ICovXG59XG4jbWFpbk1lbnUgPiBpbnB1dCxcbiNtYWluTWVudSA+IGxhYmVsXG57XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4jbWFpbk1lbnUgPiAjcGFnZXMgPiBhXG57XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMzMuMyU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIHotaW5kZXg6IDI7XG59XG4vKiAjbWFpbk1lbnU6aG92ZXIgPiAjcGFnZXMgYSAqL1xuLmJsdXJCYWNrZ3JvdW5kXG57XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIGZpbHRlcjogYmx1cigzLjNweCk7XG4gIHRyYW5zaXRpb246IGZpbHRlciAwLjNzO1xufVxuI21haW5NZW51ID4gI3BhZ2VzID4gYTpob3Zlclxue1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjRkY3NzkxO1xuICBjb2xvcjogI0ZGNzc5MTtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAvKiB0cmFuc2Zvcm06IHNjYWxlKDIpOyAqL1xuICBmaWx0ZXI6IGJsdXIoMHB4KTtcbn1cbiNtYWluTWVudSA+ICNwYWdlcyA+IGEuYWN0aXZlXG57XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNGRjc3OTE7XG4gIGNvbG9yOiAjRkY3NzkxO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4jc3F1YXJlXG57XG4gIGhlaWdodDogMzRweDtcbiAgd2lkdGg6IDI2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LDAuNyk7XG59XG4jdHJhcGV6b2lkXG57XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOjEzMHB4O1xuICB6LWluZGV4OjE7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXRvcDogMzRweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNyk7XG4gIGJvcmRlci1yaWdodDogMjhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogNDUlO1xuICBsZWZ0OiAyNnB4O1xufVxuXG4jQnJpZGdlUGljdHVyZVxue1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGVmdDogMHB4O1xuICB6LWluZGV4OiAtMTA7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBtYXgtaGVpZ2h0OiA1MjVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cbiNwYWdlVGl0bGVcbntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTtcbiAgYm90dG9tOiA0MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuI3BhZ2VUaXRsZSA+IGgzXG57XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiA5NjBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuI0JyaWRnZVBpY3R1cmUgPiBpbWdcbntcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAwcHg7XG4gIHotaW5kZXg6IC0xMDtcbn1cbiNzdWJNZW51XG57XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgd2lkdGg6IDQwJTtcbiAgbGVmdDogMHB4O1xufVxuLyogaG9tZSBzdWIgbWVudSAqL1xuI2hvbWVTdWJNZW51ID4gYVxue1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDUwJTtcbiAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4jaG9tZVN1Yk1lbnUgPiBhID4gcFxue1xuICBjb2xvcjogcmdiYSgwLDAsMCwwLjcpO1xuICB6LWluZGV4OiAzO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuNXM7XG59XG4jaG9tZVN1Yk1lbnUgPiBhOmhvdmVyID4gcFxue1xuICBjb2xvcjogI0ZGNzc5MTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC41cztcbn1cbiNob21lU3ViTWVudSA+IGE6aG92ZXJcbntcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4vKiBFeHBlcmllbmNlICovXG4jZXhwZXJpZW5jZVN1Yk1lbnVcbntcbiAgd2lkdGg6IDEwMCU7XG59XG4jZXhwZXJpZW5jZVN1Yk1lbnUgPiBhXG57XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMzMlO1xuICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiNleHBlcmllbmNlU3ViTWVudSA+IGE6bnRoLW9mLXR5cGUoMSlcbntcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogYmx1ZTsgKi9cbiAgd2lkdGg6IDI1JTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbiNleHBlcmllbmNlU3ViTWVudSA+IGE6bnRoLW9mLXR5cGUoMilcbntcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogYmx1ZTsgKi9cbiAgbWluLXdpZHRoOiAxMjhweDtcbn1cbiNleHBlcmllbmNlU3ViTWVudSA+IGEgPiBwXG57XG4gIGNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7XG4gIHotaW5kZXg6IDM7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC41cztcbn1cbiNleHBlcmllbmNlU3ViTWVudSA+IGE6aG92ZXIgPiBwXG57XG4gIGNvbG9yOiAjRkY3NzkxO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzO1xufVxuI2V4cGVyaWVuY2VTdWJNZW51ID4gYTpob3Zlclxue1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi8qICAqL1xuI2NvbnRhaW5lcjJcbntcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDk2MHB4O1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDEwO1xufVxuLmNvbnRlbnRcbntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbnRlbnQgPiAqXG57XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuI2Zvb3Rlclxue1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qIGJvdHRvbTogNHB4OyAqL1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAxO1xufVxuI3F1aWNrTGlua3NcbntcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIHJnYig3Miw5MSwxMDkpOyAqL1xufVxuI2Zvb3RlciA+IGgzXG57XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiBsZWZ0OjM1JTsgKi9cbn1cblxuI3F1aWNrTGlua3MgPiBhXG57XG4gIHdpZHRoOiAzMyU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNxdWlja0xpbmtzID4gYTpob3Zlclxue1xuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgY29sb3I6ICMwNDVGODU7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMzVzO1xufVxuI3NpZ25hdHVyZVxue1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzIsOTEsMTA5KTsgKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tdG9wOiAxM3B4O1xufVxuI3NpZ25hdHVyZSA+IHBcbntcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuI2Zvb3Rlci1iYWNrZ3JvdW5kXG57XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTM0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDBweDtcbiAgei1pbmRleDogLTE7XG4gIG1pbi13aWR0aDogMzAwcHg7XG59XG5cblxuXG5cblxuXG5cblxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOjc4OXB4KVxue1xuICAjc3ViTWVudVxuICB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBsZWZ0OiAwcHg7XG4gIH1cbiAgLyogRXhwZXJpZW5jZSAqL1xuICAjZXhwZXJpZW5jZVN1Yk1lbnVcbiAge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICNleHBlcmllbmNlU3ViTWVudSA+IGFcbiAge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDMwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICAjZXhwZXJpZW5jZVN1Yk1lbnUgPiBhOm50aC1vZi10eXBlKDEpXG4gIHtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyAqL1xuICAgIHdpZHRoOiAyMiU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICAjZXhwZXJpZW5jZVN1Yk1lbnUgPiBhOm50aC1vZi10eXBlKDIpXG4gIHtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyAqL1xuICAgIG1pbi13aWR0aDogMTI4cHg7XG4gIH1cbiAgI2V4cGVyaWVuY2VTdWJNZW51ID4gYSA+IHBcbiAge1xuICAgIHotaW5kZXg6IDM7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gICNwYWdlVGl0bGVcbiAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJvdHRvbTogNDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gIH1cbiAgI3BhZ2VUaXRsZSA+IGgyXG4gIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWF4LXdpZHRoOiA5NjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6NzAwcHgpXG57XG4gICNtYWluTWVudVxuICB7XG4gICAgd2lkdGg6IDUwLjUlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogLTQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogLTVweDtcbiAgICB6LWluZGV4OiAyO1xuICB9XG4gICNtYWluTWVudSA+ICNwYWdlcyA+IGFcbiAge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDMzLjMlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHotaW5kZXg6IDI7XG4gIH1cbiAgI3N1Yk1lbnVcbiAge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbGVmdDogMHB4O1xuICB9XG4gIC8qIEV4cGVyaWVuY2UgKi9cbiAgI2V4cGVyaWVuY2VTdWJNZW51XG4gIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAjZXhwZXJpZW5jZVN1Yk1lbnUgPiBhXG4gIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgI2V4cGVyaWVuY2VTdWJNZW51ID4gYTpudGgtb2YtdHlwZSgxKVxuICB7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmx1ZTsgKi9cbiAgICB3aWR0aDogMTklO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgI2V4cGVyaWVuY2VTdWJNZW51ID4gYTpudGgtb2YtdHlwZSgyKVxuICB7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmx1ZTsgKi9cbiAgICBtaW4td2lkdGg6IDEyOHB4O1xuICB9XG4gICNleHBlcmllbmNlU3ViTWVudSA+IGE6bnRoLW9mLXR5cGUoMylcbiAge1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsdWU7ICovXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICAjZXhwZXJpZW5jZVN1Yk1lbnUgPiBhID4gcFxuICB7XG4gICAgei1pbmRleDogMztcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cblxuICAjQnJpZGdlUGljdHVyZVxuICB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGxlZnQ6IDBweDtcbiAgICB6LWluZGV4OiAtMTA7XG4gICAgaGVpZ2h0OiAzMjBweDtcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgfVxuICAjcGFnZVRpdGxlID4gaDJcbiAge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAjQnJpZGdlUGljdHVyZSA+IGltZ1xuICB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTUwcHg7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuLyogTW9iaWxlIFN3aXRjaCEgKi9cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6NTk2cHgpXG57XG4gIC5oZWFkZXJCYWNrZ3JvdW5kXG4gIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQ1Rjg1O1xuICAgIGxlZnQ6IDBweDtcbiAgICB6LWluZGV4OiAwO1xuICB9XG4gICNoZWFkZXJcbiAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwIDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMi40cHg7XG4gICAgei1pbmRleDogMTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIH1cbiAgI2hlYWRlckxlZnRcbiAge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAjaGVhZGVyTGVmdCA+IGEgPiBoMlxuICB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG4gICNoZWFkZXJMZWZ0PiBhXG4gIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gICNoZWFkZXJMZWZ0PiBhOmhvdmVyXG4gIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgI2hlYWRlclJpZ2h0XG4gIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgLyogcGFkZGluZy1yaWdodDogMjBweDsgKi9cbiAgICB0b3A6IDBweDtcbiAgICByaWdodDogMjBweDtcbiAgfVxuICAjaGVhZGVyUmlnaHQgPiBhXG4gIHtcbiAgICBjb2xvcjogI0ZGNzc5MTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRkY3NzkxO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNDVweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgdHJhbnNpdGlvbjogMC40c1xuICB9XG4gICNoZWFkZXJSaWdodCA+IGE6aG92ZXJcbiAge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI0U2Nzc3RjsgKi9cbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgdHJhbnNpdGlvbjogMC40c1xuICB9XG4gICNtZW51TGluZXNcbiAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRvcDogODdweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsZWZ0OiAwcHg7XG4gIH1cbiAgI21lbnVMaW5lcyA+IGhyXG4gIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3NzkxO1xuICAgIGNvbG9yOiAjRkY3NzkxO1xuICAgIHBhZGRpbmc6IDFweCAwO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG4gICNsZWZ0TGluZVxuICB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB0b3A6MzdweDtcbiAgfVxuICAjcm90YXRlTGluZVxuICB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC01MGRlZyk7XG4gICAgd2lkdGg6IDEwMXB4O1xuICAgIHRvcDotMXB4O1xuICAgIGxlZnQ6IC0yMHB4O1xuICB9XG4gICNyaWdodExpbmVcbiAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAxMDJweDtcbiAgfVxuICAjd2hpdGVCYXJcbiAge1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgfVxuICAjc3F1YXJlXG4gIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICN0cmFwZXpvaWRcbiAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsZWZ0OiAxMDJweDtcbiAgICB0b3A6IDBweDtcbiAgICB6LWluZGV4OjE7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyLXRvcDogMHB4O1xuICAgIGJvcmRlci1yaWdodDogMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDQwcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjcpO1xuICAgIGJvcmRlci1sZWZ0OiAzM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGhlaWdodDogMDtcbiAgICBtYXJnaW4tbGVmdDogLTMycHg7XG4gIH1cbiAgI21haW5NZW51XG4gIHtcbiAgICB3aWR0aDogNTAuNSU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAtNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtNXB4O1xuICAgIHotaW5kZXg6IDM7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogZ3JheTsgKi9cbiAgfVxuICAjcGFnZXNcbiAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44NSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBtYXJnaW4tdG9wOiA2NXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuICB9XG4gICNwYWdlcy5zbGlkZVxuICB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjMzcztcbiAgICAvKiB0cmFuc2l0aW9uOiAxczsgKi9cbiAgfVxuICAjbWFpbk1lbnUgPiBsYWJlbC5hY3RpdmVcbiAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zM3M7XG4gICAgY29sb3I6ICNGRjc3OTE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0ZGNzc5MTtcbiAgfVxuICAjbWFpbk1lbnUgPiAjcGFnZXMgPiBhXG4gIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHotaW5kZXg6IDI7XG4gIH1cblxuICAjbWFpbk1lbnUgPiBsYWJlbFxuICB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGxlZnQ6IC0ycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG4gICAgei1pbmRleDogMztcbiAgfVxuICAjbWFpbk1lbnUgPiBsYWJlbDpob3ZlclxuICB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gICNzdWJNZW51XG4gIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMjtcbiAgICBtYXJnaW4tdG9wOiAtMzVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDc1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcmlnaHQ6IDBweDtcbiAgfVxuICAvKiBob21lIHN1YiBtZW51ICovXG4gICNob21lU3ViTWVudSA+IGFcbiAge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDUwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICAjaG9tZVN1Yk1lbnUgPiBhID4gcFxuICB7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsMC43KTtcbiAgICB6LWluZGV4OiAzO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzO1xuICB9XG4gIC8qIEV4cGVyaWVuY2UgKi9cbiAgI2V4cGVyaWVuY2VTdWJNZW51XG4gIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAjZXhwZXJpZW5jZVN1Yk1lbnUgPiBhXG4gIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgI2V4cGVyaWVuY2VTdWJNZW51ID4gYTpudGgtb2YtdHlwZSgxKVxuICB7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmx1ZTsgKi9cbiAgICB3aWR0aDogMzAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAjZXhwZXJpZW5jZVN1Yk1lbnUgPiBhOm50aC1vZi10eXBlKDIpXG4gIHtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyAqL1xuICAgIG1pbi13aWR0aDogMTI4cHg7XG4gIH1cbiAgI2V4cGVyaWVuY2VTdWJNZW51ID4gYTpudGgtb2YtdHlwZSgzKVxuICB7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmx1ZTsgKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgI2V4cGVyaWVuY2VTdWJNZW51ID4gYSA+IHBcbiAge1xuICAgIHotaW5kZXg6IDM7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG5cbiAgI0JyaWRnZVBpY3R1cmVcbiAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBsZWZ0OiAwcHg7XG4gICAgei1pbmRleDogLTEwO1xuICAgIGhlaWdodDogMzIwcHg7XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB9XG4gICNwYWdlVGl0bGUgPiBoMlxuICB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1heC13aWR0aDogOTYwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gICNCcmlkZ2VQaWN0dXJlID4gaW1nXG4gIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNTBweDtcbiAgfVxuXG4gICNxdWlja0xpbmtzXG4gIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gICNxdWlja0xpbmtzID4gYVxuICB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDo0MjBweClcbntcbiAgI2hlYWRlckxlZnRcbiAge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAjaGVhZGVyTGVmdCA+IGEgPiBoMlxuICB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBtYXJnaW4tdG9wOiAyN3B4O1xuICB9XG4gICNoZWFkZXJSaWdodFxuICB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIC8qIHBhZGRpbmctcmlnaHQ6IDIwcHg7ICovXG4gICAgdG9wOiAwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gIH1cbiAgI2hlYWRlclJpZ2h0ID4gYVxuICB7XG4gICAgY29sb3I6ICNGRjc3OTE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0ZGNzc5MTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDQ1cHg7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHRyYW5zaXRpb246IDAuNHNcbiAgfVxuICAjc3ViTWVudVxuICB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgbWFyZ2luLXRvcDogLTM1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA3NXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHJpZ2h0OiAwcHg7XG4gIH1cbiAgLyogaG9tZSBzdWIgbWVudSAqL1xuICAjaG9tZVN1Yk1lbnUgPiBhXG4gIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgI2hvbWVTdWJNZW51ID4gYSA+IHBcbiAge1xuICAgIGNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7XG4gICAgei1pbmRleDogMztcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC41cztcbiAgfVxuICAvKiBFeHBlcmllbmNlICovXG4gICNleHBlcmllbmNlU3ViTWVudVxuICB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgI2V4cGVyaWVuY2VTdWJNZW51ID4gYVxuICB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMjMlO1xuICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gICNleHBlcmllbmNlU3ViTWVudSA+IGE6bnRoLW9mLXR5cGUoMSlcbiAge1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsdWU7ICovXG4gICAgLyogd2lkdGg6IDMwJTsgKi9cbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuICAjZXhwZXJpZW5jZVN1Yk1lbnUgPiBhOm50aC1vZi10eXBlKDIpXG4gIHtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyAqL1xuICAgIG1pbi13aWR0aDogMTIwcHg7XG4gIH1cbiAgI2V4cGVyaWVuY2VTdWJNZW51ID4gYTpudGgtb2YtdHlwZSgzKVxuICB7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmx1ZTsgKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgI2V4cGVyaWVuY2VTdWJNZW51ID4gYSA+IHBcbiAge1xuICAgIHotaW5kZXg6IDM7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG59XG5cblxuXG5cblxuXG5cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDozNTBweClcbntcbiAgI2hlYWRlclJpZ2h0XG4gIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgLyogcGFkZGluZy1yaWdodDogMjBweDsgKi9cbiAgICB0b3A6IDBweDtcbiAgICByaWdodDogMHB4O1xuICB9XG4gICNoZWFkZXJSaWdodCA+IGFcbiAge1xuICAgIGNvbG9yOiAjRkY3NzkxO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRjc3OTE7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA0NXB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB0cmFuc2l0aW9uOiAwLjRzXG4gIH1cbiAgI2hvbWVTdWJNZW51ID4gYSA+IHBcbiAge1xuICAgIGNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7XG4gICAgei1pbmRleDogMztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC41cztcbiAgfVxuICAvKiBFeHBlcmllbmNlICovXG4gICNleHBlcmllbmNlU3ViTWVudVxuICB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgI2V4cGVyaWVuY2VTdWJNZW51ID4gYVxuICB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTUlO1xuICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gICNleHBlcmllbmNlU3ViTWVudSA+IGE6bnRoLW9mLXR5cGUoMSlcbiAge1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsdWU7ICovXG4gICAgLyogd2lkdGg6IDMwJTsgKi9cbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuICAjZXhwZXJpZW5jZVN1Yk1lbnUgPiBhOm50aC1vZi10eXBlKDIpXG4gIHtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyAqL1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gICNleHBlcmllbmNlU3ViTWVudSA+IGE6bnRoLW9mLXR5cGUoMylcbiAge1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsdWU7ICovXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICAjZXhwZXJpZW5jZVN1Yk1lbnUgPiBhID4gcFxuICB7XG4gICAgei1pbmRleDogMztcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <div class=\"headerBackground\"></div>\n  <div id=\"header\">\n    <div id=\"headerLeft\">\n      <a routerLink=\"/\"><h2>Chris Mathew</h2></a>\n      <span>Student Developer</span>\n    </div>\n    <div id=\"headerRight\">\n      <a href=\"assets/chris-mathew-resume.pdf\" target=\"_blank\">RESUME</a>\n    </div>\n  </div>\n  <div id=\"menuLines\">\n    <hr id=\"leftLine\">\n    <hr id=\"rotateLine\">\n    <hr id=\"rightLine\">\n  </div>\n\n  <div id=\"mainMenu\" (clickOutside)=\"onClickedOutside($event)\">\n    <input type=\"checkbox\" id=\"nav\" style=\"display: none;\" (click)=\"toggleMenu()\" (click)=\"toggleBlur()\">\n    <label for=\"nav\" class=\"material-icons\">dehaze</label>\n\n    <div id=\"pages\">\n      <a id=\"men1\" (click)=\"setTitleTo($event)\" (click)=\"subMenuSwitch('homeSubMenu')\" (click)=\"slideMenuOut()\" (click)=\"removeBlur()\" routerLink=\"\">Home</a>\n      <a id=\"men2\" (click)=\"setTitleTo($event)\" (click)=\"subMenuSwitch('experienceSubMenu')\" (click)=\"slideMenuOut()\" (click)=\"removeBlur()\" routerLink=\"/experience\">Experience</a>\n      <a id=\"men3\" (click)=\"setTitleTo($event)\" (click)=\"subMenuSwitch('contactSubMenu')\" (click)=\"slideMenuOut()\" (click)=\"removeBlur()\" routerLink=\"/contact\">Contact</a>\n    </div>\n  </div>\n  <div id=\"whiteBar\">\n    <div id=\"square\"></div>\n    <div id=\"trapezoid\"></div>\n  </div>\n\n  <div id=\"subMenu\" [ngSwitch]=\"subMenus\" [@titleSwitch]>\n    <div id=\"homeSubMenu\" *ngSwitchCase=\"'homeSubMenu'\" [@titleSwitch]>\n      <a class=\"submenu\" href= \"#aboutMe\" title=\"\">\n        <p>About Me</p>\n      </a>\n      <a class=\"submenu\" routerLink=\"/blog\" (click)=\"toElement('pageTitle')\">\n        <p>Blog</p>\n      </a>\n    </div>\n    <div id=\"experienceSubMenu\" *ngSwitchCase=\"'experienceSubMenu'\"[@titleSwitch]>\n      <a class=\"submenu\" (click)=\"toElement('portfolio')\">\n        <p>Portfolio</p>\n      </a>\n      <a class=\"submenu\" (click)=\"toElement('workXp')\">\n        <p>Work Experience</p>\n      </a>\n      <a class=\"submenu\" (click)=\"toElement('education')\">\n        <p>Education</p>\n      </a>\n    </div>\n    <div id=\"contactSubMenu\" *ngSwitchCase=\"'contactSubMenu'\">\n    </div>\n  </div>\n\n</div>\n<div id=\"BridgePicture\">\n  <div id=\"pageTitle\" ><h3 [@titleSwitch]>{{ pageTitle }}</h3></div>\n  <img src=\"assets/brooklingBridge.jpg\" alt=\"Brookling Bridge\">\n</div>\n\n<div id=\"container2\">\n  <div [@routeAnimations]=\"prepareRoute(outlet)\" class=\"content\">\n    <router-outlet (activate)=\"onActivate($event)\" #outlet=\"outlet\"></router-outlet>\n  </div>\n  <!-- <app-blog></app-blog> -->\n  <div id=\"footer-background\"></div>\n  <div id=\"footer\">\n    <h3>QUICK LINKS</h3>\n    <div id=\"quickLinks\">\n      <a id=\"men1\" (click)=\"setTitleTo($event)\" (click)=\"subMenuSwitch('homeSubMenu')\" (click)=\"onActivate($event)\"routerLink=\"\">Home</a>\n      <a id=\"men2\" (click)=\"setTitleTo($event)\" (click)=\"subMenuSwitch('experienceSubMenu')\" routerLink=\"/experience\">Experience</a>\n      <a id=\"men3\" (click)=\"setTitleTo($event)\" (click)=\"subMenuSwitch('contactSubMenu')\" routerLink=\"/contact\">Contact</a>\n      <a href=\"assets/chris-mathew-resume.pdf\" target=\"_blank\">Resume</a>\n      <a href=\"https://www.linkedin.com/in/chris-m-525266116/\" target=\"_blank\">LinkedIn</a>\n      <a href=\"https://github.com/chrismathew3\" target=\"_blank\">GitHub</a>\n    </div>\n    <div id=\"signature\">\n      <p>Developed by <a href=\"http://www.pavelaparcana.com\" target=\"_blank\">Pavel Aparcana</a></p>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var src_app_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config.service */ "./src/app/config.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(_contactDataService) {
        this._contactDataService = _contactDataService;
        // page title is set based on what menu option is clicked. It is also set by each component when the window is opened just in case someone goes to the page via URL not through the landing page.
        this.pageTitle = '';
        // this is the swich variable that selects which sub menu is
        this.subMenus = "";
        this.contact = [];
        this.subMenus = "homeSubMenu";
        // this.pageTitle = "Home"
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._contactDataService.getContactData()
            .subscribe(function (data) { return _this.contact = data; });
        this.pageTitle = "Home";
        // $(document).on("click", function (e) {
        //     if ($(e.target).is("#men1 ,#men2 ,#men3") == false) {
        //       $("#mainMenu > label").removeClass("active");
        //       $("#pages").removeClass("slide");
        //       $("#headerLeft> a > h2, #headerLeft>span, #headerRight > a, #BridgePicture > img, #pageTitle, #subMenu, #rotateLine, #rightLine, #trapezoid, #container2").removeClass("blurBackground");
        //     }
        // });
    };
    // slide anination for the menu.
    AppComponent.prototype.toggleMenu = function () {
        $("#mainMenu > label").toggleClass("active");
        $("#pages").toggleClass("slide");
    };
    AppComponent.prototype.slideMenuOut = function () {
        $("#mainMenu > label").removeClass("active");
        $("#pages").removeClass("slide");
        // console.log("Menu clicked!");
    };
    AppComponent.prototype.toggleBlur = function () {
        $("#headerLeft> a > h2, #headerLeft>span, #headerRight > a, #BridgePicture > img, #pageTitle, #subMenu, #rotateLine, #rightLine, #trapezoid, #container2").toggleClass("blurBackground");
    };
    AppComponent.prototype.removeBlur = function () {
        $("#headerLeft> a > h2, #headerLeft>span, #headerRight > a, #BridgePicture > img, #pageTitle, #subMenu, #rotateLine, #rightLine, #trapezoid, #container2").removeClass("blurBackground");
    };
    AppComponent.prototype.onClickedOutside = function (e) {
        // console.log('Clicked outside:', e);
        this.slideMenuOut();
        this.removeBlur();
    };
    // sets title based on what was just clicked
    AppComponent.prototype.setTitleTo = function (e) {
        var target = e.target || e.srcElement || e.currentTarget;
        var idAttr = target.attributes;
        var title = target.innerText;
        this.pageTitle = title;
        this.clearHighlight();
        var targetID = target.id;
        this.setHighlight(targetID);
    };
    AppComponent.prototype.clearHighlight = function () {
        $("#men1 ,#men2 ,#men3").removeClass("active");
    };
    AppComponent.prototype.setHighlight = function (target) {
        $("#" + target).addClass("active");
    };
    AppComponent.prototype.subMenuSwitch = function (x) {
        // x is whatever was clicked. it then changes the value depending on which click.
        this.subMenus = x;
    };
    // to find the id of element for the auto scroll
    AppComponent.prototype.toElement = function (elem) {
        document.getElementById(elem).scrollIntoView();
    };
    AppComponent.prototype.onActivate = function (event) {
        window.scroll(0, 0);
        //or document.body.scrollTop = 0;
        //or document.querySelector('body').scrollTo(0,0)
        this.ngOnInit();
    };
    AppComponent.prototype.prepareRoute = function (outlet) {
        return outlet.activatedRouteData['depth'];
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('titleSwitch', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: '0' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(500)
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(0)
                    ]),
                ]),
                // animations for the router
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('routeAnimations', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('1=>2, 1=>3, 1=>4, 1=>5, 2=>3, 2=>4, 2=>5, 3=>4, 3=>5, 4=>5', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '!' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(100%)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0
                        })),
                        // animate the leave page away
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.3s cubic-bezier(.35,0,.25,1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(-100%)' })),
                            ]),
                            // and now reveal the enter
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.3s cubic-bezier(.35,0,.25,1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(0)' }))),
                        ]),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('5=>4, 5=>3, 5=>2, 5=>1, 4=>3, 4=>2, 4 =>1 , 3=>2, 3=>1, 2=>1', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '!' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(-100%)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0
                        })),
                        // animate the leave page away
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.3s cubic-bezier(.35,0,.25,1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(100%)' })),
                            ]),
                            // and now reveal the enter
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.3s cubic-bezier(.35,0,.25,1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(0)' }))),
                        ]),
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./config.service */ "./src/app/config.service.ts");
/* harmony import */ var _home_blog_blog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/blog/blog.component */ "./src/app/home/blog/blog.component.ts");
/* harmony import */ var _home_article_article_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/article/article.component */ "./src/app/home/article/article.component.ts");
/* harmony import */ var _reverse_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reverse.pipe */ "./src/app/reverse.pipe.ts");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-click-outside */ "./node_modules/ng-click-outside/lib/index.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside__WEBPACK_IMPORTED_MODULE_14__);















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["routingComponents"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _experience_experience_component__WEBPACK_IMPORTED_MODULE_7__["ExperienceComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                _home_blog_blog_component__WEBPACK_IMPORTED_MODULE_11__["BlogComponent"],
                _home_article_article_component__WEBPACK_IMPORTED_MODULE_12__["ArticleComponent"],
                _reverse_pipe__WEBPACK_IMPORTED_MODULE_13__["ReversePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                ng_click_outside__WEBPACK_IMPORTED_MODULE_14__["ClickOutsideModule"]
            ],
            providers: [_config_service__WEBPACK_IMPORTED_MODULE_10__["ConfigService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/config.service.ts":
/*!***********************************!*\
  !*** ./src/app/config.service.ts ***!
  \***********************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ConfigService = /** @class */ (function () {
    function ConfigService(http) {
        this.http = http;
        this._url = 'assets/data/homeData.json';
        this._experienceUrl = 'assets/data/experienceData.json';
        this._contactURL = "assets/data/contactData.json";
    }
    ConfigService.prototype.getData = function () {
        return this.http.get(this._url);
    };
    ConfigService.prototype.getExperienceData = function () {
        return this.http.get(this._experienceUrl);
    };
    ConfigService.prototype.getContactData = function () {
        return this.http.get(this._contactURL);
    };
    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contactContainer\n{\n  position: relative;\n  margin-bottom: 40px;\n  padding: 0 10px;\n  margin-top: 50px;\n  padding-bottom: 50px;\n}\n#profileImg\n{\n  position: relative;\n  margin: auto;\n  width: 28%;\n  overflow: hidden;\n  border: 5px solid #045F85;\n  border-radius: 150px;\n  box-shadow: 5px 10px 18px #888888;\n  margin-bottom: 40px;\n  min-width: 120px;\n}\n#profileImg > img\n{\n  width: 100%;\n}\n.horizontalLine\n{\n  width: 45%;\n  background-color: #FF7791;\n  color: #FF7791;\n  padding: 1px 0;\n  min-width: 200px;\n}\n#contactData\n{\n  position: relative;\n  margin: auto;\n  padding-top: 50px;\n}\n#contactData > p\n{\n  display: block;\n  width: 100%;\n  text-align: center;\n  font-size: 16px;\n}\n/* Mobile Switch! */\n@media all and (max-width:596px)\n{\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0QjtBQUNBOztFQUVFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtFQUNWLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLGlDQUFpQztFQUNqQyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsV0FBVztBQUNiO0FBQ0E7O0VBRUUsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBQ0E7O0VBRUUsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQVdBLG1CQUFtQjtBQUNuQjs7O0FBR0EiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWN0Q29udGFpbmVyXG57XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cbiNwcm9maWxlSW1nXG57XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMjglO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDVweCBzb2xpZCAjMDQ1Rjg1O1xuICBib3JkZXItcmFkaXVzOiAxNTBweDtcbiAgYm94LXNoYWRvdzogNXB4IDEwcHggMThweCAjODg4ODg4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBtaW4td2lkdGg6IDEyMHB4O1xufVxuI3Byb2ZpbGVJbWcgPiBpbWdcbntcbiAgd2lkdGg6IDEwMCU7XG59XG4uaG9yaXpvbnRhbExpbmVcbntcbiAgd2lkdGg6IDQ1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNzc5MTtcbiAgY29sb3I6ICNGRjc3OTE7XG4gIHBhZGRpbmc6IDFweCAwO1xuICBtaW4td2lkdGg6IDIwMHB4O1xufVxuI2NvbnRhY3REYXRhXG57XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cbiNjb250YWN0RGF0YSA+IHBcbntcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuXG5cblxuXG5cblxuXG5cblxuLyogTW9iaWxlIFN3aXRjaCEgKi9cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6NTk2cHgpXG57XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"contactContainer\">\n  <div id=\"profileImg\">\n    <img src=\"assets/contact/profile.jpeg\" alt=\"\">\n  </div>\n\n  <hr class=\"horizontalLine\">\n\n  <div id=\"contactData\">\n    <p>Mobile: <a href=\"tel:{{ contacts.mobile }}\">{{ contacts.phoneNum }}</a></p>\n    <p>Email: <a href=\"mailto:{{ contacts.email }}\">{{ contacts.email }}</a></p>\n    <p>GitHub: <a href=\"https://github.com/chrismathew3\" target=\"_blank\">chrismathew3</a></p>\n    <p><a href=\"https://www.linkedin.com/in/chris-m-525266116/\" target=\"_blank\">LinkedIn</a></p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_app_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config.service */ "./src/app/config.service.ts");




var ContactComponent = /** @class */ (function () {
    function ContactComponent(_setHeaders, _contactDataService) {
        this._setHeaders = _setHeaders;
        this._contactDataService = _contactDataService;
        this.contacts = [];
        this._setHeaders.subMenuSwitch("contactSubMenu");
    }
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        // sets the page title when loaded from URL
        this._setHeaders.pageTitle = "Contact";
        // gets the data fom the JSON file
        this._contactDataService.getContactData()
            .subscribe(function (data) { return _this.contacts = data; });
        // takes all highlights away besides the one active
        var elemID = "men3";
        this._setHeaders.clearHighlight();
        this._setHeaders.setHighlight(elemID);
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], src_app_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/experience/experience.component.css":
/*!*****************************************************!*\
  !*** ./src/app/experience/experience.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".horizontalLine\n{\n  width: 70%;\n  background-color: #FF7791;\n  color: #FF7791;\n  padding: 1px 0;\n}\n#experienceContainer\n{\n  position: relative;\n  margin-bottom: 40px;\n  padding: 0 10px;\n}\n#portfolio\n{\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n#port\n{\n  padding-left: 10px;\n  padding-top: 10px;\n}\n#port > h4\n{\n  color: #045F85;\n  text-decoration: underline;\n}\n#projectList\n{\n  padding-top: 5px;\n  padding-left: 50px;\n}\n#projectList > a > h5\n{\n  color: #FF7791\n}\n#projectList > p\n{\n  padding-right: 30%;\n}\n#workXp\n{\n  padding-top: 10px;\n  padding-bottom: 20px;\n}\n#jobs\n{\n  padding-left: 10px;\n  padding-top: 10px;\n}\n#jobs > h4\n{\n  color: #045F85;\n}\n#jobs > h5\n{\n  color: gray;\n}\n#jobs > div\n{\n  overflow: hidden;\n  position: relative;\n}\n#dateLocation\n{\n  float: right;\n  text-align: right;\n}\n#projectList\n{\n  padding-top: 5px;\n}\n#projectList > a > h5\n{\n  color: #FF7791\n}\n#vLine,\n#jobDescription\n{\n  display: inline-block;\n  position: relative;\n}\n#vLine\n{\n  width: 2px;\n  height: 100%;\n  position: absolute;\n  background-color: #045F85;\n}\n#jobDescription\n{\n  width: 90%;\n}\n#jobDescription > li\n{\n  padding-right: 30%;\n  padding-bottom: 10px;\n  list-style: none;\n}\n#jobDescription > li:last-child\n{\n  padding-bottom: 0px;\n}\n#education\n{\n  padding-top: 10px;\n  padding-bottom: 20px;\n}\n#education > p\n{\n  float: right;\n  padding-top: 25px;\n}\n#school,\n#studies\n{\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n  width: 50%;\n  padding-top: 10px;\n}\n#school\n{\n  padding-left: 130px;\n}\n/* Mobile Switch! */\n@media all and (max-width:596px)\n{\n  #workXp\n  {\n    padding-top: 10px;\n    padding-bottom: 20px;\n  }\n  #jobs\n  {\n    padding-left: 10px;\n    padding-top: 10px;\n  }\n  #jobs > h4\n  {\n    color: #045F85;\n    margin-top: -90px;\n  }\n  #jobs > h5\n  {\n    color: gray;\n    padding-bottom: 60px;\n  }\n  #jobs > div\n  {\n    overflow: hidden;\n    position: relative;\n  }\n  #dateLocation\n  {\n    float: none;\n    text-align: left;\n    position: absolute;\n    z-index: 1;\n    margin-top: 30px;\n    top: 16px;\n  }\n\n  #education\n  {\n    padding-top: 10px;\n    padding-bottom: 20px;\n  }\n  #education > p\n  {\n    position: absolute;\n    right: 5px;\n    margin-top: 30px;\n  }\n  #school,\n  #studies\n  {\n    display: block;\n    position: relative;\n    vertical-align: middle;\n    width: 100%;\n    padding-top: 20px;\n    text-align:center;\n  }\n  #school\n  {\n    padding-left: 0px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsY0FBYztBQUNoQjtBQUNBOztFQUVFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjtBQUNBOztFQUVFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBQ0E7O0VBRUUsY0FBYztFQUNkLDBCQUEwQjtBQUM1QjtBQUNBOztFQUVFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRTtBQUNGO0FBQ0E7O0VBRUUsa0JBQWtCO0FBQ3BCO0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QjtBQUNBOztFQUVFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7QUFDQTs7RUFFRSxjQUFjO0FBQ2hCO0FBQ0E7O0VBRUUsV0FBVztBQUNiO0FBQ0E7O0VBRUUsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBOztFQUVFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRTtBQUNGO0FBQ0E7OztFQUdFLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7QUFDQTs7RUFFRSxVQUFVO0FBQ1o7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLG1CQUFtQjtBQUNyQjtBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7QUFDQTs7RUFFRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBQ0E7OztFQUdFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7QUFDQTs7RUFFRSxtQkFBbUI7QUFDckI7QUFRQSxtQkFBbUI7QUFDbkI7O0VBRUU7O0lBRUUsaUJBQWlCO0lBQ2pCLG9CQUFvQjtFQUN0QjtFQUNBOztJQUVFLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7RUFDQTs7SUFFRSxjQUFjO0lBQ2QsaUJBQWlCO0VBQ25CO0VBQ0E7O0lBRUUsV0FBVztJQUNYLG9CQUFvQjtFQUN0QjtFQUNBOztJQUVFLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7RUFDQTs7SUFFRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFNBQVM7RUFDWDs7RUFFQTs7SUFFRSxpQkFBaUI7SUFDakIsb0JBQW9CO0VBQ3RCO0VBQ0E7O0lBRUUsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7RUFDQTs7O0lBR0UsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7RUFDQTs7SUFFRSxpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvcml6b250YWxMaW5lXG57XG4gIHdpZHRoOiA3MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjc3OTE7XG4gIGNvbG9yOiAjRkY3NzkxO1xuICBwYWRkaW5nOiAxcHggMDtcbn1cbiNleHBlcmllbmNlQ29udGFpbmVyXG57XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuI3BvcnRmb2xpb1xue1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4jcG9ydFxue1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuI3BvcnQgPiBoNFxue1xuICBjb2xvcjogIzA0NUY4NTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4jcHJvamVjdExpc3RcbntcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xufVxuI3Byb2plY3RMaXN0ID4gYSA+IGg1XG57XG4gIGNvbG9yOiAjRkY3NzkxXG59XG4jcHJvamVjdExpc3QgPiBwXG57XG4gIHBhZGRpbmctcmlnaHQ6IDMwJTtcbn1cblxuI3dvcmtYcFxue1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4jam9ic1xue1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuI2pvYnMgPiBoNFxue1xuICBjb2xvcjogIzA0NUY4NTtcbn1cbiNqb2JzID4gaDVcbntcbiAgY29sb3I6IGdyYXk7XG59XG4jam9icyA+IGRpdlxue1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4jZGF0ZUxvY2F0aW9uXG57XG4gIGZsb2F0OiByaWdodDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4jcHJvamVjdExpc3RcbntcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbiNwcm9qZWN0TGlzdCA+IGEgPiBoNVxue1xuICBjb2xvcjogI0ZGNzc5MVxufVxuI3ZMaW5lLFxuI2pvYkRlc2NyaXB0aW9uXG57XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuI3ZMaW5lXG57XG4gIHdpZHRoOiAycHg7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQ1Rjg1O1xufVxuI2pvYkRlc2NyaXB0aW9uXG57XG4gIHdpZHRoOiA5MCU7XG59XG4jam9iRGVzY3JpcHRpb24gPiBsaVxue1xuICBwYWRkaW5nLXJpZ2h0OiAzMCU7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuI2pvYkRlc2NyaXB0aW9uID4gbGk6bGFzdC1jaGlsZFxue1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG4jZWR1Y2F0aW9uXG57XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbiNlZHVjYXRpb24gPiBwXG57XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG59XG4jc2Nob29sLFxuI3N0dWRpZXNcbntcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuI3NjaG9vbFxue1xuICBwYWRkaW5nLWxlZnQ6IDEzMHB4O1xufVxuXG5cblxuXG5cblxuXG4vKiBNb2JpbGUgU3dpdGNoISAqL1xuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDo1OTZweClcbntcbiAgI3dvcmtYcFxuICB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIH1cbiAgI2pvYnNcbiAge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgfVxuICAjam9icyA+IGg0XG4gIHtcbiAgICBjb2xvcjogIzA0NUY4NTtcbiAgICBtYXJnaW4tdG9wOiAtOTBweDtcbiAgfVxuICAjam9icyA+IGg1XG4gIHtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbiAgfVxuICAjam9icyA+IGRpdlxuICB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgI2RhdGVMb2NhdGlvblxuICB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIHRvcDogMTZweDtcbiAgfVxuXG4gICNlZHVjYXRpb25cbiAge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB9XG4gICNlZHVjYXRpb24gPiBwXG4gIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG4gICNzY2hvb2wsXG4gICNzdHVkaWVzXG4gIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgfVxuICAjc2Nob29sXG4gIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/experience/experience.component.html":
/*!******************************************************!*\
  !*** ./src/app/experience/experience.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"experienceContainer\">\n  <div id=\"portfolio\">\n    <h3>Portfolio</h3>\n    <div id=\"port\" *ngFor=\"let portTitle of portTitles\">\n      <h4>{{ portTitle.portfolioTitle }}</h4>\n      <div id=\"projectList\" *ngFor=\"let project of portTitle.projects| reverse\">\n        <a href=\"{{ project.projDocument }}\" target=\"_blank\"><h5>{{ project.projTitle }}</h5></a>\n        <p>{{ project.projSummary }}</p>\n      </div>\n    </div>\n  </div>\n\n  <hr class=\"horizontalLine\">\n\n  <div id=\"workXp\">\n    <h3>Work Experience</h3>\n    <div id=\"jobs\" *ngFor=\"let work of workDetails | reverse\">\n      <div id=\"dateLocation\">\n        <h5>{{ work.workLength }}</h5>\n        <h5><i>{{ work.location }}</i></h5>\n      </div>\n      <h4>{{ work.position }}</h4>\n      <h5>{{ work.companyName }}</h5>\n\n      <div>\n        <div id=\"vLine\"></div>\n        <ul id=\"jobDescription\">\n          <li *ngFor=\"let desc of work.description\">{{ desc.desc }}</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n  <hr class=\"horizontalLine\">\n\n  <div id=\"education\">\n    <p><i>Expected Graduation: Spring 2019</i></p>\n    <h3>Education</h3>\n    <div id=\"school\">\n      <h4>Bachelor of Science</h4>\n      <p>Rutgers University</p>\n    </div>\n    <div id=\"studies\">\n      <p>Major: <i>Computer Science</i></p>\n      <p>Minor: <i>Entrepreneurship</i></p>\n      <p>Minor: <i>Psychology</i></p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_app_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config.service */ "./src/app/config.service.ts");




var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent(_setHeaders, _experienceDataService) {
        this._setHeaders = _setHeaders;
        this._experienceDataService = _experienceDataService;
        // title of portfolios(like data structures, comp arch, side projects)
        this.portTitles = [];
        // details like the work position, location, time
        this.workDetails = [];
        this._setHeaders.subMenuSwitch("experienceSubMenu");
    }
    ExperienceComponent.prototype.ngOnInit = function () {
        var _this = this;
        // sets the page title when loaded from URL
        this._setHeaders.pageTitle = "Experience";
        // gets the data fom the JSON file
        this._experienceDataService.getExperienceData()
            .subscribe(function (data) {
            _this.SetPortTitles(data);
        });
        // takes all highlights away besides the one active
        var elemID = "men2";
        this._setHeaders.clearHighlight();
        this._setHeaders.setHighlight(elemID);
    };
    ExperienceComponent.prototype.SetPortTitles = function (data) {
        // set portfolio data to portTitles
        this.portTitles = data['portfolio'];
        this.workDetails = data['workXp'];
    };
    ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.css */ "./src/app/experience/experience.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], src_app_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/home/article/article.component.css":
/*!****************************************************!*\
  !*** ./src/app/home/article/article.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#articleContainer\n{\n  width: 100%;\n  position: relative;\n  display: block;\n  padding: 0px 10px;\n  margin-bottom: 20px;\n}\n#imgNText\n{\n  width: 100%;\n  position: relative;\n  display: block;\n}\n#image\n{\n  display: block;\n  width: 90%;\n  margin: auto;\n}\n#image > img\n{\n  width: 100%;\n}\n#articleContainer > i\n{\n  position: relative;\n  display: block;\n  padding-bottom: 10px;\n  padding-left: 3px;\n}\n#imgNText > p\n{\n  font-size: 16px;\n  padding: 10px 30px;\n  padding-top: 20px;\n  /* following line is what allows the JSON file to work with paragraph notations like quotes and line breaks */\n  white-space: pre-wrap;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCO0FBQ0E7O0VBRUUsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBQ0E7O0VBRUUsY0FBYztFQUNkLFVBQVU7RUFDVixZQUFZO0FBQ2Q7QUFDQTs7RUFFRSxXQUFXO0FBQ2I7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7QUFDQTs7RUFFRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiw2R0FBNkc7RUFDN0cscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhcnRpY2xlQ29udGFpbmVyXG57XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbiNpbWdOVGV4dFxue1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiNpbWFnZVxue1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuI2ltYWdlID4gaW1nXG57XG4gIHdpZHRoOiAxMDAlO1xufVxuI2FydGljbGVDb250YWluZXIgPiBpXG57XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbn1cbiNpbWdOVGV4dCA+IHBcbntcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICAvKiBmb2xsb3dpbmcgbGluZSBpcyB3aGF0IGFsbG93cyB0aGUgSlNPTiBmaWxlIHRvIHdvcmsgd2l0aCBwYXJhZ3JhcGggbm90YXRpb25zIGxpa2UgcXVvdGVzIGFuZCBsaW5lIGJyZWFrcyAqL1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/article/article.component.html":
/*!*****************************************************!*\
  !*** ./src/app/home/article/article.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"articleContainer\">\n  <h3>{{ posts.blogTitle}}</h3>\n  <i>{{posts.blogDate}}</i>\n  <div id=\"imgNText\">\n    <div id=\"image\"><img src=\"{{posts.blogImage}}\" alt=\"\"></div>\n\n    <p>{{posts.blogEssay}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/article/article.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/article/article.component.ts ***!
  \***************************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config.service */ "./src/app/config.service.ts");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");





var ArticleComponent = /** @class */ (function () {
    function ArticleComponent(route, config, _setTitle) {
        this.route = route;
        this.config = config;
        this._setTitle = _setTitle;
        this.posts = [];
    }
    ArticleComponent.prototype.ngOnInit = function () {
        // sets the title of the page to Blog onn Init.
        this._setTitle.pageTitle = "Blog";
        // gets the ID of the blog post number
        var id = +this.route.snapshot.paramMap.get('id');
        // console.log(id);
        // console.log(this.posts);
        // sends the id number to getPostById
        this.getPostById(id);
    };
    ArticleComponent.prototype.getPostById = function (id) {
        var _this = this;
        // grab the data from the JSON
        this.config.getData()
            .subscribe(function (data) {
            // have to do it this way to solve errors. no idea why.
            // sends the data and the Id to be computed on SetOptionsData
            _this.SetOptionsData(data, id);
        });
    };
    ArticleComponent.prototype.SetOptionsData = function (data, id) {
        // gets the blog objects and computes it accordingly to the array number.
        var blogs = data['blogs'];
        this.posts = blogs[id - 1];
    };
    ArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-article',
            template: __webpack_require__(/*! ./article.component.html */ "./src/app/home/article/article.component.html"),
            styles: [__webpack_require__(/*! ./article.component.css */ "./src/app/home/article/article.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/home/blog/blog.component.css":
/*!**********************************************!*\
  !*** ./src/app/home/blog/blog.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#blogContainer\n{\n  position: relative;\n  margin-top: 40px;\n  padding: 0 10px;\n}\n#blogPreview\n{\n  padding-left: 20px;\n  display: block;\n}\n#blogHeader > a > h4,\n#blogHeader > h6\n{\n  display: block;\n  margin-bottom: 0px;\n}\n#blogHeader > h6\n{\n  margin-top: 5px;\n  color: rgba(0,0,0,0.7);\n  padding-bottom: 5px;\n}\n#blogHeader > a\n{\n  z-index: 3;\n}\n#blogImgNp\n{\n  display: block;\n}\n#blogImg,\n#blogImgNp > p\n{\n  display: inline-block;\n  vertical-align: middle;\n}\n#blogImg\n{\n  width: 20%;\n  border: 1px solid #045F85;\n  border-radius: 8px;\n  overflow: hidden;\n}\n#blogImgNp > p\n{\n  width: 80%;\n  white-space: pre-wrap;\n  padding:0px 15px 0 30px;\n}\n#blogImg > a > img\n{\n  width: 100%;\n}\n@media all and (max-width:420px)\n{\n  #blogImg\n  {\n    width: 100px;\n    border: 1px solid #045F85;\n    border-radius: 8px;\n    overflow: hidden;\n  }\n  #blogImgNp > p\n  {\n    width: 60%;\n    white-space: pre-wrap;\n    padding:0px 0px 0 10px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ibG9nL2Jsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUNBOzs7RUFHRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBQ0E7O0VBRUUsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7QUFDQTs7RUFFRSxVQUFVO0FBQ1o7QUFDQTs7RUFFRSxjQUFjO0FBQ2hCO0FBQ0E7OztFQUdFLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7QUFDQTs7RUFFRSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLHVCQUF1QjtBQUN6QjtBQUNBOztFQUVFLFdBQVc7QUFDYjtBQVNBOztFQUVFOztJQUVFLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjtFQUNBOztJQUVFLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsc0JBQXNCO0VBQ3hCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2Jsb2cvYmxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Jsb2dDb250YWluZXJcbntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4jYmxvZ1ByZXZpZXdcbntcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiNibG9nSGVhZGVyID4gYSA+IGg0LFxuI2Jsb2dIZWFkZXIgPiBoNlxue1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuI2Jsb2dIZWFkZXIgPiBoNlxue1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4jYmxvZ0hlYWRlciA+IGFcbntcbiAgei1pbmRleDogMztcbn1cbiNibG9nSW1nTnBcbntcbiAgZGlzcGxheTogYmxvY2s7XG59XG4jYmxvZ0ltZyxcbiNibG9nSW1nTnAgPiBwXG57XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbiNibG9nSW1nXG57XG4gIHdpZHRoOiAyMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwNDVGODU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiNibG9nSW1nTnAgPiBwXG57XG4gIHdpZHRoOiA4MCU7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgcGFkZGluZzowcHggMTVweCAwIDMwcHg7XG59XG4jYmxvZ0ltZyA+IGEgPiBpbWdcbntcbiAgd2lkdGg6IDEwMCU7XG59XG5cblxuXG5cblxuXG5cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDo0MjBweClcbntcbiAgI2Jsb2dJbWdcbiAge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDQ1Rjg1O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gICNibG9nSW1nTnAgPiBwXG4gIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICBwYWRkaW5nOjBweCAwcHggMCAxMHB4O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/blog/blog.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/blog/blog.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"blogContainer\">\n  <div id=\"blogPreview\" *ngFor=\"let blog of blogs | reverse\">\n    <div id=\"blogHeader\">\n      <a routerLink=\"/blog/{{blog.blogId}}\"><h4>{{ blog.blogTitle }}</h4></a>\n      <h6>{{ blog.blogDate }}</h6>\n    </div>\n\n    <div id=\"blogImgNp\">\n      <div id=\"blogImg\">\n        <a routerLink=\"/blog/{{blog.blogId}}\"><img src={{blog.blogImage}} alt=\"\"></a>\n      </div>\n\n      <p style=\"white-space: pre-wrap;\">{{ blog.blogSummary }}</p>\n    </div>\n    <hr id=\"blogDivider\">\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/home/blog/blog.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/blog/blog.component.ts ***!
  \*********************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config.service */ "./src/app/config.service.ts");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");




var BlogComponent = /** @class */ (function () {
    function BlogComponent(_dataService, _setTitle) {
        this._dataService = _dataService;
        this._setTitle = _setTitle;
        this.blogs = [];
        this._setTitle.subMenuSwitch("homeSubMenu");
    }
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._setTitle.pageTitle = "Blog";
        this._dataService.getData()
            .subscribe(function (data) { return _this.blogs = data['blogs']; });
    };
    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/home/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/home/blog/blog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#aboutMe\n{\n  position: relative;\n  padding: 0 10px;\n}\n#aboutMe > h3\n{\n  padding-top: 20px;\n}\n#aboutMe > p\n{\n  padding: 10px 0px;\n  padding-left: 130px;\n  padding-right: 50px;\n  font-size: 15px;\n}\n.horizontalLine\n{\n  width: 70%;\n  background-color: #FF7791;\n  color: #FF7791;\n  padding: 1px 0;\n}\n#blog\n{\n  position: relative;\n  padding: 0 10px;\n  margin-top: 35px;\n}\n#blog > a\n{\n  color: black;\n}\n#blog > a\n{\n  text-decoration: none;\n}\n#blogPreview\n{\n  padding-left: 20px;\n  display: block;\n}\n#blogHeader > h4,\n#blogHeader > h6\n{\n  display: block;\n  margin-bottom: 0px;\n}\n#blogHeader > h6\n{\n  margin-top: 5px;\n  color: rgba(0,0,0,0.7);\n  padding-bottom: 5px;\n}\n#blogImgNp\n{\n  display: block;\n}\n#blogImg,\n#blogImgNp > p\n{\n  display: inline-block;\n  vertical-align: middle;\n}\n#blogImg\n{\n  width: 20%;\n  border: 1px solid #045F85;\n  border-radius: 8px;\n  overflow: hidden;\n  min-width: 75px;\n}\n#blogImgNp > p\n{\n  width: 80%;\n  padding:0 15px 0 30px;\n  font-size: 15px;\n}\n#blogImg > a > img\n{\n  width: 100%;\n}\n@media all and (max-width:420px)\n{\n  #aboutMe > h3\n  {\n    padding-top: 20px;\n    font-size: 20px;\n  }\n  #aboutMe > p\n  {\n    padding: 10px 0px;\n    padding-left: 75px;\n    padding-right: 30px;\n    font-size: 14px;\n  }\n  #blogImgNp\n  {\n    width: 100%;\n    margin-left: -20px;\n  }\n  #blogImg,\n  #blogImgNp > p\n  {\n    display: inline-block;\n    vertical-align: middle;\n  }\n  \n  #blogImg\n  {\n    width: 100px;\n    border: 1px solid #045F85;\n    border-radius: 8px;\n    overflow: hidden;\n  }\n  #blogImgNp > p\n  {\n    width: 60%;\n    white-space: pre-wrap;\n    padding:0px 0px 0 10px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTs7RUFFRSxpQkFBaUI7QUFDbkI7QUFDQTs7RUFFRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCO0FBQ0E7O0VBRUUsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsY0FBYztBQUNoQjtBQUNBOztFQUVFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsWUFBWTtBQUNkO0FBQ0E7O0VBRUUscUJBQXFCO0FBQ3ZCO0FBQ0E7O0VBRUUsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFDQTs7O0VBR0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjtBQUNBOztFQUVFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCO0FBQ0E7O0VBRUUsY0FBYztBQUNoQjtBQUNBOzs7RUFHRSxxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCO0FBQ0E7O0VBRUUsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFDQTs7RUFFRSxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7QUFDQTs7RUFFRSxXQUFXO0FBQ2I7QUFhQTs7RUFFRTs7SUFFRSxpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjtFQUNBOztJQUVFLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7RUFDakI7RUFDQTs7SUFFRSxXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCO0VBQ0E7OztJQUdFLHFCQUFxQjtJQUNyQixzQkFBc0I7RUFDeEI7O0VBRUE7O0lBRUUsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0VBQ0E7O0lBRUUsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixzQkFBc0I7RUFDeEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Fib3V0TWVcbntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4jYWJvdXRNZSA+IGgzXG57XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuI2Fib3V0TWUgPiBwXG57XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uaG9yaXpvbnRhbExpbmVcbntcbiAgd2lkdGg6IDcwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNzc5MTtcbiAgY29sb3I6ICNGRjc3OTE7XG4gIHBhZGRpbmc6IDFweCAwO1xufVxuI2Jsb2dcbntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG59XG4jYmxvZyA+IGFcbntcbiAgY29sb3I6IGJsYWNrO1xufVxuI2Jsb2cgPiBhXG57XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiNibG9nUHJldmlld1xue1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuI2Jsb2dIZWFkZXIgPiBoNCxcbiNibG9nSGVhZGVyID4gaDZcbntcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbiNibG9nSGVhZGVyID4gaDZcbntcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBjb2xvcjogcmdiYSgwLDAsMCwwLjcpO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuI2Jsb2dJbWdOcFxue1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiNibG9nSW1nLFxuI2Jsb2dJbWdOcCA+IHBcbntcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuI2Jsb2dJbWdcbntcbiAgd2lkdGg6IDIwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzA0NUY4NTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtaW4td2lkdGg6IDc1cHg7XG59XG4jYmxvZ0ltZ05wID4gcFxue1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nOjAgMTVweCAwIDMwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbiNibG9nSW1nID4gYSA+IGltZ1xue1xuICB3aWR0aDogMTAwJTtcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6NDIwcHgpXG57XG4gICNhYm91dE1lID4gaDNcbiAge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICAjYWJvdXRNZSA+IHBcbiAge1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgIHBhZGRpbmctbGVmdDogNzVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAjYmxvZ0ltZ05wXG4gIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gIH1cbiAgI2Jsb2dJbWcsXG4gICNibG9nSW1nTnAgPiBwXG4gIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICBcbiAgI2Jsb2dJbWdcbiAge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDQ1Rjg1O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gICNibG9nSW1nTnAgPiBwXG4gIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICBwYWRkaW5nOjBweCAwcHggMCAxMHB4O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"aboutMe\">\n  <h3>About Me</h3>\n  <p>{{ aboutMe.aboutParagraph }}</p>\n</div>\n<hr class=\"horizontalLine\">\n<div id=\"blog\">\n  <a routerLink=\"/blog\" (click)=\"setTitleTo($event)\"><h3>Blog</h3></a>\n\n  <div id=\"blogPreview\" *ngFor=\"let blog of blogs | reverse | slice:0:3 \">\n    <div id=\"blogHeader\">\n      <a routerLink=\"/blog/{{blog.blogId}}\"><h4>{{ blog.blogTitle }}</h4></a>\n      <h6>{{ blog.blogDate }}</h6>\n    </div>\n\n    <div id=\"blogImgNp\">\n      <div id=\"blogImg\">\n        <a routerLink=\"/blog/{{blog.blogId}}\"><img src={{blog.blogImage}} alt=\"\"></a>\n      </div>\n\n      <p style=\"white-space: pre-wrap;\">{{ blog.blogSummary }}</p>\n    </div>\n    <hr id=\"blogDivider\">\n  </div>\n\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config.service */ "./src/app/config.service.ts");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");




// import { BlogConfigService } from 'src/app/blog-config.service';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_aboutDataService, _setTitle) {
        this._aboutDataService = _aboutDataService;
        this._setTitle = _setTitle;
        this.aboutMe = [];
        this.blogs = [];
        // sets the sub menu type form the app compoment
        this._setTitle.subMenuSwitch("homeSubMenu");
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._aboutDataService.getData()
            .subscribe(function (data) {
            _this.SetQueryOptionsData(data);
        });
        // takes all highlights away besides the one active
        var elemID = "men1";
        this._setTitle.clearHighlight();
        this._setTitle.setHighlight(elemID);
    };
    HomeComponent.prototype.SetQueryOptionsData = function (data) {
        this.aboutMe = data;
        this.blogs = data['blogs'];
    };
    // checks what was just clicked and assigns it to the page title
    HomeComponent.prototype.setTitleTo = function (e) {
        var target = e.target || e.srcElement || e.currentTarget;
        // var idAttr = target.attributes;
        var title = target.innerText;
        console.log(target);
        this._setTitle.pageTitle = title;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/reverse.pipe.ts":
/*!*********************************!*\
  !*** ./src/app/reverse.pipe.ts ***!
  \*********************************/
/*! exports provided: ReversePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReversePipe", function() { return ReversePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReversePipe = /** @class */ (function () {
    function ReversePipe() {
    }
    // since the code does not work from the order I wanted it to, I had to use a reverse pipe to use it on the ng for loop to show the blog titles and suymmaries.
    ReversePipe.prototype.transform = function (value, args) {
        return value.slice().reverse();
    };
    ReversePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'reverse'
        })
    ], ReversePipe);
    return ReversePipe;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pavs/Documents/GitHub/chrisApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header>\n  <app-topnav></app-topnav>\n</header>\n<main>\n  <div class=\"container-fluid pl-0\">\n    <div class=\"row\">\n      <div class=\"col-2\">\n        <app-side-bar></app-side-bar>\n      </div>\n      <div class=\"col-10\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</main>\n<footer>\n  <app-footer></app-footer>\n</footer>\n<!-- <script>\n  (function () {\n  $('.btn').click(function () {\nalert('hello');\n  });\n\n}).call(this);\n\n\n//# sourceURL=coffeescript\n  </script> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Document</title>\n\n  <style>\n   \n\n\n  </style>\n</head>\n\n<body>\n\n  <!-- <app-page-header ></app-page-header> -->\n\n    <!-- <span *ngIf='hight' class=\"arrow\"> <i class=\"fas fa-arrow-left\"></i> Check Out My Projects</span> -->\n    <div class=\"row\">\n\n      <div class=\"col-2 mr-5\">\n        <div>\n          <img src=\"/assets/images/eli.jpg\" width=\"350px\" class='eliImg1' height=\"600px\" alt=\"\"\n            style=\"position: relative;top: 735px;left: 215px;\"><br>\n        </div>\n        <div> <img src=\"/assets/images/e1.png\" width=\"350px\" class='eliImg' height=\"600px\" alt=\"\"></div>\n      </div>\n      \n      <div class=\"col-8 ml-3 \">\n        <div id=\"timeline-content\">\n          <h1>UP To Today.</h1>\n          <ul class=\"timeline\">\n            <li class=\"event\">\n              <h3>Universities</h3>\n              <p>Full stack software developer,HackerU,Ramat gan,IL </p>\n              <img src=\"/assets/images/prog.jpg\" style=\"border-radius: 50%; width: 140px;\" alt=\"\">\n\n            </li>\n            <li class=\"event\">\n              <h3>I.D.F</h3>\n              <p>served in the armed forces</p>\n              <img src=\"/assets/images/army.jpg\" style=\"border-radius: 50%; width: 140px;\" alt=\"\">\n            </li>\n            <li class=\"event\" id=\"date\">\n              <h3>School </h3>\n              <p>Graduation of high school and achieving full matriculation</p>\n              <img src=\"/assets/images/school.jpg\" style=\"border-radius: 50%; width: 140px;\" alt=\"\">\n\n            </li>\n\n            <li class=\"event\">\n              <h3>Eli <br>Was born :</h3>\n              <p>1992</p>\n\n              <img src=\"/assets/images/born.jpg\" style=\"border-radius: 50%; width: 140px;\" alt=\"\">\n\n\n            </li>\n          </ul>\n        </div>\n\n      </div>\n    </div>\n    <div class=\"crf col-2 \" style=\" width: 20%\">\n      <div class=\"row \" style=\"height: 230px; \">\n        <div class=\"container \" >\n          <div class=\"row\"style='width:275px;' >\n            <div class=\"col \" *ngFor='let certificates of certificate' ><br>\n              <img src=\"/assets/images/{{certificates.img}}\" alt=\"\" width=\"255px\" class=\"mb-3 ani\" onblur=\"\" >\n             \n            </div>\n          </div>\n        </div>\n  \n      </div>\n    \n  </div>\n  <script>\n  \n  </script>\n\n</body>\n\n</html>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/api/api.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/api/api.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsApiApiComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-page-header ></app-page-header>\r\n<app-page-main></app-page-main>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog/blog.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog/blog.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsBlogBlogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<body>\n  \n\n\n<h3 class=\"mt-3\">\n  Add User:\n</h3>\n\n<form #addUser='ngForm' (ngSubmit)='addNewUser(addUser.value)' novalidate='novalidate' autocomplete=\"off\" class=\"row mt-4\">\n    <label for=\"fname\" class=\"col-3\">First name:\n    <input type=\"text\" id=\"fname\" name=\"fname\" #fname='ngModel' ngModel required minlength=\"2\" ><br>\n    <span style=\"color: brown; \" *ngIf='!fname.valid && fname.touched'>must fill with min of 2 chapt</span><br>\n  </label><br>\n    <label for=\"lname\"class=\"col-3\">Last name:\n    <input type=\"text\" id=\"lname\" name=\"lname\" #lname='ngModel' ngModel required minlength=\"2\" ><br><br>\n    <span style=\"color: brown;\" *ngIf='!lname.valid && lname.touched'>must fill with min of 2 chapt</span><br>\n   \n  </label><br>\n  <span class=\"col-4\">\n   <input  [disabled]='!addUser.valid' type=\"submit\" name=\"submit\" value=\"Add User\" class=\"bt btn btn-outline-info btn-sm ml-5  mb-4\">\n  </span>\n  </form> \n\n  <hr>\n\n  <table class=\"table\" >\n    <thead>\n      <tr>\n        <th>Firstname</th>\n        <th>Lastname</th>\n        <th>Del/Edit</th>\n      </tr>\n    </thead>\n    <tbody *ngFor='let user of users' >\n      <tr >\n        <!-- <td>{{user.id}}</td> -->\n        <td>{{user.fname}}</td>\n        <td>{{user.lname}}</td>\n        <td><button class=\"btn btn-danger a\" name=\"submit\" (click)='del(user.id)'>Del</button>\n           <button class=\"btn btn-primary ml-2 b\" name=\"submitEdit\" (click)='editIt(user.id)' id='{{user.id}}' >Edit</button></td>\n      </tr>\n    </tbody>\n  </table>\n\n<div *ngIf='flag' >\n  <h3 class=\"mt-3\">\n    Update User:\n  </h3>\n  <form  #editUser='ngForm' (ngSubmit)='updateNow(editUser.value,test.id)' novalidate='novalidate' autocomplete=\"off\" class=\"row mt-4\"   >\n    <label for=\"fname\" class=\"col-3\">First name:\n    <input type=\"text\" id=\"fname\" name=\"fname\" #fname='ngModel' ngModel required minlength=\"2\" value=\"{{test.fname}}\" ><br>\n    <span style=\"color: brown; \" *ngIf='!fname.valid && fname.touched'>must fill with min of 2 chapt</span><br>\n  </label><br>\n    <label for=\"lname\" class=\"col-3\">Last name:\n    <input type=\"text\" id=\"lname\" name=\"lname\" #lname='ngModel' ngModel required minlength=\"2\" value='{{test.lname}}' ><br><br>\n    <span style=\"color: brown;\" *ngIf='!lname.valid && lname.touched'>must fill with min of 2 chapt</span><br>\n  </label><br>\n  <span class=\"col-4\">\n    <input [disabled]='!editUser.valid' type=\"submit\" name=\"submit\" value=\"Update User\" class=\"\"  >\n    </span>\n  </form> \n</div>\n\n</body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contacts/contacts.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contacts/contacts.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsContactsContactsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-page-header \r\n[pageHeader]='pageHeader'\r\n[pageDescription]='pageDescription'\r\n[pageIcone]='pageIcone'>\r\n</app-page-header>\r\n<div *ngIf='contacts;else foo'>\r\n   <div *ngFor='let contact of contacts;let i=index'>\r\n\r\n  <ul>\r\n<li>{{i+1}}. name: {{contact.name|uppercase}}--city:{{contact.city}}--age:{{contact.age}}</li>\r\n\r\n</ul>\r\n</div>\r\n\r\n</div>\r\n\r\n<!-- <div *ngIf='!contacts'>\r\n<p>there are no contacts yet<p>\r\n<div> -->\r\n<ng-template #foo>\r\ntest ng-templat with id foo\r\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer-add/customer-add.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer-add/customer-add.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCustomerAddCustomerAddComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-page-header \n[pageHeader]='pageHeader'\n[pageDescription]='pageDescription'\n[pageIcone]='pageIcone'>\n</app-page-header>\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Document</title>\n</head>\n<body>\n    <!-- <input type=\"text\" #foo (keyup)='test($event)'> -->\n    <form #addCustomerForm='ngForm' (ngSubmit)='onsubmit(addCustomerForm)' novalidate='novalidate' autocomplete=\"off\" class=\"mt-5\">\n        First name:<br>\n        <input type=\"text\" \n        name=\"firstname\"\n        ngModel\n        required\n        minlength=\"4\"\n        #firstname=\"ngModel\"\n        >\n        <br>\n     \n        <span style=\"color: red;\" *ngIf='firstname.invalid && firstname.touched'>min of 4 chars</span><br><br>\n        Last name:<br>\n        <input type=\"text\" name=\"lastname\" value=\"\">\n        <br><br>\n        <input [disabled]='!addCustomerForm.form.valid' type=\"submit\" name=\"sumbmit\" value=\"Submit\" class=\"btn btn-primary\">\n      </form> \n\n\n\n      <input type=\"text\" [(ngModel)]='test' >\n      <!-- {{test}},(keyup)=\"sowthistest()\" -->\n\n</body>\n</html>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customers/customers.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/customers/customers.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCustomersCustomersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-page-header class=\"aph\"\r\n[pageHeader]='pageHeader'\r\n[pageDescription]='pageDescription'\r\n[pageIcone]='pageIcone'>\r\n</app-page-header>\r\n<!-- <a href=\"\" routerLink='/customer/add' class=\"btn btn-success\">+Add new customer</a> -->\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n    <style>\r\n\r\n    </style>\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Document</title>\r\n</head>\r\n<body >\r\n<!-- <h1><a href=\"https://github.com/eliPress\"></a></h1> -->\r\n    <h2  class=\"m-5\">Go To <a href=\"https://github.com/eliPress\">Git</a></h2>\r\n    <embed  src=\"/assets/images/epcv.pdf\" width=\"800px\" height=\"1190px\"   />\r\n\r\n\r\n</body>\r\n</html>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>footer works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/info/info.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/info/info.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsInfoInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n    <title>Document</title>\r\n</head>\r\n<body>\r\n    <ul *ngFor='let infos of info;'>\r\n        <li>{{infos.name}}: {{infos.body}}</li>\r\n        <hr>\r\n    </ul>\r\n</body>\r\n</html>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/java-script/java-script.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/java-script/java-script.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsJavaScriptJavaScriptComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-page-main\r\n[proj]='proj'\r\n></app-page-main\r\n\r\n    >\r\n<!-- [project]='site' -->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/laravel/laravel.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/laravel/laravel.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLaravelLaravelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-page-main\r\n[proj]='proj'\r\n></app-page-main\r\n    >";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-header/page-header.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-header/page-header.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPageHeaderPageHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"profile\">\n  <div class=\"photo\"><img src=\"../../../assets/images/CROPPED-eli.jpg\"/></div>\n  <div class=\"content\">\n    <div class=\"text\">\n      <h3>Eli Press</h3>\n      <h6>Full Stack Developer</h6>\n    </div>\n    <div class=\"btn\"><span></span></div>\n  </div>\n  <div class=\"box\"><i class=\"fa fa-codepen\"></i><i class=\"fa fa-facebook\"></i><i class=\"fa fa-github\"></i><i class=\"fa fa-tumblr\"></i><i class=\"fa fa-twitter\"></i></div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-main/page-main.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-main/page-main.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPageMainPageMainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Document</title>\n  <style>\n    @charset \"UTF-8\";\n\n    *,\n    *:before,\n    *:after {\n      box-sizing: border-box;\n      outline: none;\n    }\n\n    html {\n      font-family: \"Source Sans Pro\", sans-serif;\n      font-size: 16px;\n      font-smooth: auto;\n      font-weight: 300;\n      line-height: 1.5;\n      color: #444;\n    }\n\n    body {\n      position: relative;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: 100%;\n      height: 100vh;\n      /* background-color: #34495e; */\n    }\n\n    a {\n      text-decoration: none;\n    }\n\n    figure {\n      position: relative;\n      display: flex;\n      align-items: flex-start;\n      justify-content: center;\n      \n      width: 250px;\n      height: 365px;\n      padding: 20px 20px;\n      background-position: center center;\n      background-repeat: no-repeat;\n      background-size: 100%;\n      border-radius: 10px;\n      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n      transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);\n      overflow: hidden;\n    }\n\n    figure:before,\n    figure:after {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n    }\n\n    figure:before {\n      content: \"\";\n      background-color: rgba(0, 0, 0, 0.1);\n      z-index: 0;\n    }\n\n    figure:after {\n      content: \"\";\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);\n      overflow: hidden;\n    }\n\n    figure:hover {\n      background-size: 175%;\n    }\n\n    figure:hover:after {\n      content: \"♣︎\";\n      background-color: rgba(241, 196, 15, 0.9);\n      color: white;\n      font-size: 72px;\n      z-index: 2;\n    }\n\n    figure:hover .date {\n      bottom: -59px;\n    }\n\n    figure:hover figcaption {\n      transform: translateY(-110%);\n    }\n\n    figure .date {\n      position: absolute;\n      bottom: 0;\n      right: 30px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column;\n      padding: 10px;\n      background-color: rgba(241, 196, 15, 0.8);\n      text-shadow: 1px 1px rgba(0, 0, 0, 0.7);\n      transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);\n    }\n\n    figure .date span {\n      color: white;\n      line-height: 1;\n    }\n\n    figure .date span:first-child {\n      font-family: \"Source Code Pro\", sans-serif;\n      font-size: 20px;\n      font-weight: 900;\n    }\n\n    figure .date span:last-child {\n      font-size: 14px;\n      font-weight: 400;\n    }\n\n    figure figcaption {\n      color: white;\n      transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);\n      z-index: 1;\n    }\n\n    figure figcaption h4 {\n      margin: 0 0 5px;\n      font-family: \"Source Code Pro\", sans-serif;\n      font-size: 24px;\n      line-height: 1.35;\n      text-shadow: 1px 1px rgba(0, 0, 0, 0.7);\n    }\n\n    figure figcaption h4>span {\n      background-color: rgba(241, 196, 15, 0.8);\n    }\n\n    figure figcaption p {\n      margin: 0;\n      line-height: 1.5;\n    }\n\n  </style>\n</head>\n\n<body>\n  \n  <div class=\"container\">\n    \n    <div class=\"row\" >\n      \n\n\n\n      <div class=\"col ml-5 pl-5 mt-5 \" *ngFor='let projects of proj'   >\n        \n        <!-- *ngFor='projects of proj' -->\n        <a href={{projects.url}} >\n          <!-- {{projects.url}} -->\n          <!-- {{proj}} -->\n          <!-- {{project}} -->\n         \n          <!-- {{projects.img}} -->\n          <figure style=\"background-image: url('/assets/images/{{projects.img}}');\" >\n            <div class=\"date\"><span class=\"card-date-day\"></span><span class=\"card-date-month\">ELI</span></div>\n            <!-- {{projects.id}} -->\n            <figcaption>\n              <h4> <span>{{projects.name}}</span></h4>\n              <!-- {{projects.name}} -->\n              <p>{{projects.description}}</p>\n              <!-- {{project.description}} -->\n            </figcaption>\n          </figure>\n        </a>\n      </div>\n     </div>\n  </div>\n</body>\n\n</html>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-not-found/page-not-found.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-not-found/page-not-found.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPageNotFoundPageNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>page-not-found works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/php/php.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/php/php.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPhpPhpComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-page-main\r\n[proj]='proj'\r\n></app-page-main\r\n    >";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProjectsProjectsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Document</title>\n  <style>\n\n    \n  .cards-list {\n  z-index: 0;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n.card {\n  margin: 30px auto;\n  width: 220px;\n  height: 220px;\n  border-radius: 40px;\nbox-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);\n  cursor: pointer;\n  transition: 0.4s;\n}\n\n.card .card_image {\n  width: inherit;\n  height: inherit;\n  border-radius: 40px;\n}\n\n.card .card_image img {\n  width: inherit;\n  height: inherit;\n  border-radius: 40px;\n  object-fit: cover;\n}\n\n.card .card_title {\n  text-align: center;\n  border-radius: 0px 0px 40px 40px;\n  font-family: sans-serif;\n  font-weight: bold;\n  font-size: 30px;\n  margin-top: -80px;\n  height: 40px;\n}\n\n.card:hover {\n  transform: scale(0.9, 0.9);\n  box-shadow: 5px 5px 30px 15px rgba(0,0,0,0.25), \n    -5px -5px 30px 15px rgba(0,0,0,0.22);\n}\n\n.title-white {\n  color: white;\n}\n\n.title-black {\n  color: black;\n}\n\n@media all and (max-width: 500px) {\n  .card-list {\n    /* On small screens, we are no longer using row direction but column */\n    flex-direction: column;\n  }\n}\n\n\n\n  </style>\n</head>\n\n<body>\n\n  <div class=\"container align-content-center mt-5\">\n    <app-page-header class=\"aph\"></app-page-header>\n    <div class=\"row mt-5\">\n      <div class=\"col\">\n        <a href=\"\" routerLink=\"/javaScript\"  id=\"1\">\n        <div class=\"card 1\">\n  <div class=\"card_image\"> <img src=\"../../../assets/images/code.jpg\" /> </div>\n  <div class=\"card_title title-white\">\n    <p>JavaScript</p>\n  </div>\n   </div>\n   </a>\n      </div>\n      <div class=\"col\">\n          <a href=\"\" routerLink=\"/php\"  id=\"2\">\n        <div class=\"card 1\" >\n          <div class=\"card_image\"> <img src=\"../../../assets/images/code.jpg\" /> </div>\n          <div class=\"card_title title-white\">\n              <p>PHP</p>\n            </div>\n          </div>\n        </a>\n        \n      </div>\n      <div class=\"col\">\n          <a href=\"\" routerLink=\"/laravel\"  id=\"3\">\n        <div class=\"card 1\">\n          <div class=\"card_image\"> <img src=\"../../../assets/images/code.jpg\" /> </div>\n          <div class=\"card_title title-white\">\n              <p>PHP(Laravel)</p>\n            </div>\n          </div>\n        </a>\n        \n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n          <a href=\"\" routerLink=\"/api\"  id=\"4\">\n        <div class=\"card 1\">\n          <div class=\"card_image\"> <img src=\"../../../assets/images/code.jpg\" /> </div>\n          <div class=\"card_title title-white\">\n              <p>Api</p>\n            </div>\n          </div>\n        </a>\n      </div>\n      <div class=\"col\">\n        <div class=\"card 1\">\n          <div class=\"card_image\"> <img src=\"../../../assets/images/code.jpg\" /> </div>\n          <div class=\"card_title title-white\">\n              <p>Soon</p>\n            </div>\n          </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"card 1\">\n          <div class=\"card_image\"> <img src=\"../../../assets/images/code.jpg\" /> </div>\n          <div class=\"card_title title-white\">\n              <p>Soon</p>\n            </div>\n          </div>\n      </div>\n    </div>\n  </div>\n</body>\n\n</html>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/side-bar.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/side-bar.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSideBarSideBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>\n\n</style>\n<div class=\"wrapper 75vh\">\n    <div class=\"sidebar\">\n        <h2>{{title}}</h2>\n        <ul>\n            <li><a href=\"\" routerLink=\"/about\"><i class=\"fas fa-address-card\"></i>About</a></li>\n            <li><a href=\"\" routerLink=\"/projects\" ><i class=\"fas fa-project-diagram\"></i>Projects</a></li>\n            <li><a href=\"\" routerLink=\"/customers\"><i class=\"fas fa-home\"></i>My CV</a></li>\n            <!-- <li><a href=\"\" routerLink=\"/contacts\"><i class=\"fas fa-user\"></i>Contacts</a></li>\n            <li><a href=\"\" routerLink=\"/info\"><i class=\"fas fa-project-diagram\"></i>info</a></li> -->\n            <li><a href=\"\" routerLink='/blog'><i class=\"fas fa-blog\"></i>ANGULAR CRUD</a></li>\n            <!-- <li><a href=\"#\"><i class=\"fas fa-address-book\"></i>Contact</a></li> -->\n            \n        </ul> \n        <div class=\"social_media\">\n          <a href=\"#\"><i class=\"fab fa-facebook-f\"></i></a>\n          <a href=\"#\"><i class=\"fab fa-twitter\"></i></a>\n          <a href=\"#\"><i class=\"fab fa-instagram\"></i></a>\n      </div>\n    </div>\n    \n    \n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-in/sign-in.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-in/sign-in.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSignInSignInComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>sign-in works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/topnav/topnav.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/topnav/topnav.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTopnavTopnavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"text-align:center\">\n    \n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n        \n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n          <div class=\"navbar-nav\">\n            \n            <h3 class=\" text-center\">\n                Welcome to {{ title }}!\n              </h3>\n          </div>\n        </div>\n        \n      </nav>\n      </div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _components_info_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/info/info.component */
    "./src/app/components/info/info.component.ts");
    /* harmony import */


    var _components_customers_customers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/customers/customers.component */
    "./src/app/components/customers/customers.component.ts");
    /* harmony import */


    var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/contacts/contacts.component */
    "./src/app/components/contacts/contacts.component.ts");
    /* harmony import */


    var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/projects/projects.component */
    "./src/app/components/projects/projects.component.ts");
    /* harmony import */


    var _components_java_script_java_script_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/java-script/java-script.component */
    "./src/app/components/java-script/java-script.component.ts");
    /* harmony import */


    var _components_php_php_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/php/php.component */
    "./src/app/components/php/php.component.ts");
    /* harmony import */


    var _components_laravel_laravel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/laravel/laravel.component */
    "./src/app/components/laravel/laravel.component.ts");
    /* harmony import */


    var _components_api_api_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/api/api.component */
    "./src/app/components/api/api.component.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/components/about/about.component.ts");
    /* harmony import */


    var _components_customer_add_customer_add_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/customer-add/customer-add.component */
    "./src/app/components/customer-add/customer-add.component.ts");
    /* harmony import */


    var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/sign-in/sign-in.component */
    "./src/app/components/sign-in/sign-in.component.ts");
    /* harmony import */


    var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/blog/blog.component */
    "./src/app/components/blog/blog.component.ts");
    /* harmony import */


    var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/page-not-found/page-not-found.component */
    "./src/app/components/page-not-found/page-not-found.component.ts");

    var appRoutes = [{
      path: '',
      redirectTo: 'about',
      pathMatch: 'full'
    }, {
      path: 'signin',
      component: _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_15__["SignInComponent"]
    }, {
      path: 'customers',
      component: _components_customers_customers_component__WEBPACK_IMPORTED_MODULE_6__["CustomersComponent"]
    }, {
      path: 'contacts',
      component: _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_7__["ContactsComponent"]
    }, {
      path: 'projects',
      component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"]
    }, {
      path: 'javaScript',
      component: _components_java_script_java_script_component__WEBPACK_IMPORTED_MODULE_9__["JavaScriptComponent"]
    }, {
      path: 'php',
      component: _components_php_php_component__WEBPACK_IMPORTED_MODULE_10__["PhpComponent"]
    }, {
      path: 'laravel',
      component: _components_laravel_laravel_component__WEBPACK_IMPORTED_MODULE_11__["LaravelComponent"]
    }, {
      path: 'api',
      component: _components_api_api_component__WEBPACK_IMPORTED_MODULE_12__["ApiComponent"]
    }, {
      path: 'about',
      component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"]
    }, {
      path: 'info',
      component: _components_info_info_component__WEBPACK_IMPORTED_MODULE_5__["InfoComponent"]
    }, {
      path: 'customer/add',
      component: _components_customer_add_customer_add_component__WEBPACK_IMPORTED_MODULE_14__["CustomerAddComponent"]
    }, {
      path: 'blog',
      component: _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_16__["BlogComponent"]
    }, {
      path: '**',
      component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_17__["PageNotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'crm';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _components_customers_customers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/customers/customers.component */
    "./src/app/components/customers/customers.component.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/topnav/topnav.component */
    "./src/app/components/topnav/topnav.component.ts");
    /* harmony import */


    var _components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/side-bar/side-bar.component */
    "./src/app/components/side-bar/side-bar.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/contacts/contacts.component */
    "./src/app/components/contacts/contacts.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/page-header/page-header.component */
    "./src/app/components/page-header/page-header.component.ts");
    /* harmony import */


    var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/projects/projects.component */
    "./src/app/components/projects/projects.component.ts");
    /* harmony import */


    var _components_java_script_java_script_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/java-script/java-script.component */
    "./src/app/components/java-script/java-script.component.ts");
    /* harmony import */


    var _components_php_php_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/php/php.component */
    "./src/app/components/php/php.component.ts");
    /* harmony import */


    var _components_laravel_laravel_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/laravel/laravel.component */
    "./src/app/components/laravel/laravel.component.ts");
    /* harmony import */


    var _components_api_api_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/api/api.component */
    "./src/app/components/api/api.component.ts");
    /* harmony import */


    var _components_page_main_page_main_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/page-main/page-main.component */
    "./src/app/components/page-main/page-main.component.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/components/about/about.component.ts");
    /* harmony import */


    var _components_info_info_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/info/info.component */
    "./src/app/components/info/info.component.ts");
    /* harmony import */


    var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/page-not-found/page-not-found.component */
    "./src/app/components/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _components_customer_add_customer_add_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/customer-add/customer-add.component */
    "./src/app/components/customer-add/customer-add.component.ts");
    /* harmony import */


    var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/sign-in/sign-in.component */
    "./src/app/components/sign-in/sign-in.component.ts");
    /* harmony import */


    var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/blog/blog.component */
    "./src/app/components/blog/blog.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _components_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_10__["TopnavComponent"], _components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_11__["SideBarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_13__["ContactsComponent"], _components_customers_customers_component__WEBPACK_IMPORTED_MODULE_8__["CustomersComponent"], _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_24__["PageNotFoundComponent"], _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_15__["PageHeaderComponent"], _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_16__["ProjectsComponent"], _components_java_script_java_script_component__WEBPACK_IMPORTED_MODULE_17__["JavaScriptComponent"], _components_php_php_component__WEBPACK_IMPORTED_MODULE_18__["PhpComponent"], _components_laravel_laravel_component__WEBPACK_IMPORTED_MODULE_19__["LaravelComponent"], _components_api_api_component__WEBPACK_IMPORTED_MODULE_20__["ApiComponent"], _components_page_main_page_main_component__WEBPACK_IMPORTED_MODULE_21__["PageMainComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_22__["AboutComponent"], _components_info_info_component__WEBPACK_IMPORTED_MODULE_23__["InfoComponent"], _components_customer_add_customer_add_component__WEBPACK_IMPORTED_MODULE_25__["CustomerAddComponent"], _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_26__["SignInComponent"], _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_27__["BlogComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].firebaseConfig), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/about/about.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/about/about.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAboutAboutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  /* Import */\r\n\r\n    /* Variables */\r\n\r\n    /* Base */\r\n\r\n    body {\r\n        /* background: #252827; */\r\n        font-size: 16px;\r\n      }\r\n\r\n    p {\r\n        font-weight: 300;\r\n        color: black;\r\n      }\r\n\r\n    a {\r\n        /* color: #6c6d6d; */\r\n        text-decoration: none;\r\n        text-transform: uppercase;\r\n        display: block;\r\n        letter-spacing: 0.3em;\r\n        font-size: 0.6em;\r\n        font-weight: 400;\r\n        background: #252727;\r\n        padding: 0.3rem 1rem;\r\n        margin: 1.9rem 0 0 0;\r\n        float: right;\r\n      }\r\n\r\n    a:hover {\r\n        /* color: white; */\r\n        background: #004ffc;\r\n        border-bottom: 0.35em solid black;\r\n      }\r\n\r\n    strong {\r\n        font-weight: 600;\r\n      }\r\n\r\n    h1 {\r\n        font-family: \"Saira\", sans-serif;\r\n        letter-spacing: 1.5px;\r\n        color: black;\r\n        font-weight: 400;\r\n        font-size: 2.4em;\r\n        margin-right:300px ;\r\n      }\r\n\r\n    #timeline-content {\r\n        margin-top: 50px;\r\n        text-align: center;\r\n      }\r\n\r\n    /* Timeline */\r\n\r\n    .timeline {\r\n        border-left: 4px solid #060607;\r\n        /* border-right: 4px rgb(236, 179, 179); */\r\n        border-right-style: dotted;\r\n        border-bottom-right-radius: 4px;\r\n        border-top-right-radius: 4px;\r\n        background: rgba(255, 255, 255, 0.03);\r\n        color: rgba(255, 255, 255, 0.8);\r\n        font-family: \"Chivo\", sans-serif;\r\n        margin: 50px auto;\r\n        letter-spacing: 0.5px;\r\n        position: relative;\r\n        line-height: 1.4em;\r\n        font-size: 1.03em;\r\n        padding: 50px;\r\n        list-style: none;\r\n        text-align: left;\r\n        font-weight: 100;\r\n        max-width: 30%;\r\n      }\r\n\r\n    .timeline h1 {\r\n        font-family: \"Saira\", sans-serif;\r\n        letter-spacing: 1.5px;\r\n        font-weight: 100;\r\n        font-size: 1.4em;\r\n        color: black;\r\n  \r\n      }\r\n\r\n    .timeline h2,\r\n      .timeline h3 {\r\n        font-family: \"Saira\", sans-serif;\r\n        letter-spacing: 1.5px;\r\n        font-weight: 400;\r\n        font-size: 1.4em;\r\n        color: black;\r\n  \r\n      }\r\n\r\n    .timeline .event {\r\n        border-bottom: 1px dashed rgba(255, 255, 255, 0.1);\r\n        padding-bottom: 25px;\r\n        margin-bottom: 50px;\r\n        position: relative;\r\n      }\r\n\r\n    .timeline .event:last-of-type {\r\n        padding-bottom: 0;\r\n        margin-bottom: 0;\r\n        border: none;\r\n      }\r\n\r\n    .timeline .event:before,\r\n      .timeline .event:after {\r\n        position: absolute;\r\n        display: block;\r\n        top: 0;\r\n      }\r\n\r\n    .timeline .event:before {\r\n        left: -217.5px;\r\n        color: rgba(255, 255, 255, 0.4);\r\n        content: attr(data-date);\r\n        text-align: right;\r\n        font-weight: 100;\r\n        font-size: 0.9em;\r\n        min-width: 120px;\r\n        font-family: \"Saira\", sans-serif;\r\n      }\r\n\r\n    .timeline .event:after {\r\n        box-shadow: 0 0 0 4px #004ffc;\r\n        left: -57.85px;\r\n        background: #313534;\r\n        border-radius: 50%;\r\n        height: 11px;\r\n        width: 11px;\r\n        content: \"\";\r\n        top: 5px;\r\n      }\r\n\r\n    .circle {\r\n        width: 100px;\r\n        height: 100px;\r\n        border-radius: 50%;\r\n        font-size: 10px;\r\n        color: rgb(75, 73, 73);\r\n        line-height: 5px;\r\n        text-align: center;\r\n        background: rgb(233, 227, 227)\r\n      }\r\n\r\n    .eliImg{\r\n  position: absolute;\r\n  top: 145px;\r\n  left: 230px;\r\n      }\r\n\r\n    .arrow{\r\n        position: relative;\r\n        top: 170px;\r\n        right: 35px;\r\n      }\r\n\r\n    .crf{\r\n        position: absolute;\r\n        top: 150px;\r\n        left: 930px;\r\n     \r\n      }\r\n\r\n    /* .container-fluid .crf .row .container .row .col img:hover{\r\n    translate: scale(1.5);\r\n  } */\r\n\r\n    @media (max-width:600px) {\r\n          *{\r\n              margin: 0;    \r\n              padding: 0;\r\n              box-sizing: border-box;\r\n          }\r\nbody{\r\n    width: 200px !important;\r\n    box-sizing: content-box !important;\r\n    margin-left: 50px;\r\n    overflow: hidden;\r\n}\r\n\r\n.container-fluid{\r\n    width: 200pxl !important;\r\n    box-sizing: content-box !important;\r\n    \r\n\r\n}\r\n.row{\r\n    padding-right: 300px;\r\n}\r\n\r\n.arrow,.eliImg{\r\n    display: none;\r\n}\r\n\r\nh1{\r\n    font-size: 18px;\r\n    width: 200px;\r\n    padding-right: 50px;\r\n}\r\n.row{\r\n    padding-right:90%;\r\n}\r\nimg{\r\n    width: 15px;\r\n}\r\n\r\n\r\n\r\n\r\n      }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFLFdBQVc7O0lBRVQsY0FBYzs7SUFDZCxTQUFTOztJQUNUO1FBQ0kseUJBQXlCO1FBQ3pCLGVBQWU7TUFDakI7O0lBRUE7UUFDRSxnQkFBZ0I7UUFDaEIsWUFBWTtNQUNkOztJQUVBO1FBQ0Usb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQix5QkFBeUI7UUFDekIsY0FBYztRQUNkLHFCQUFxQjtRQUNyQixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixvQkFBb0I7UUFDcEIsb0JBQW9CO1FBQ3BCLFlBQVk7TUFDZDs7SUFFQTtRQUNFLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsaUNBQWlDO01BQ25DOztJQUVBO1FBQ0UsZ0JBQWdCO01BQ2xCOztJQUVBO1FBQ0UsZ0NBQWdDO1FBQ2hDLHFCQUFxQjtRQUNyQixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixtQkFBbUI7TUFDckI7O0lBRUE7UUFDRSxnQkFBZ0I7UUFDaEIsa0JBQWtCO01BQ3BCOztJQUVBLGFBQWE7O0lBQ2I7UUFDRSw4QkFBOEI7UUFDOUIsMENBQTBDO1FBQzFDLDBCQUEwQjtRQUMxQiwrQkFBK0I7UUFDL0IsNEJBQTRCO1FBQzVCLHFDQUFxQztRQUNyQywrQkFBK0I7UUFDL0IsZ0NBQWdDO1FBQ2hDLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGNBQWM7TUFDaEI7O0lBRUE7UUFDRSxnQ0FBZ0M7UUFDaEMscUJBQXFCO1FBQ3JCLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsWUFBWTs7TUFFZDs7SUFFQTs7UUFFRSxnQ0FBZ0M7UUFDaEMscUJBQXFCO1FBQ3JCLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsWUFBWTs7TUFFZDs7SUFFQTtRQUNFLGtEQUFrRDtRQUNsRCxvQkFBb0I7UUFDcEIsbUJBQW1CO1FBQ25CLGtCQUFrQjtNQUNwQjs7SUFFQTtRQUNFLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsWUFBWTtNQUNkOztJQUVBOztRQUVFLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsTUFBTTtNQUNSOztJQUVBO1FBQ0UsY0FBYztRQUNkLCtCQUErQjtRQUMvQix3QkFBd0I7UUFDeEIsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGdDQUFnQztNQUNsQzs7SUFFQTtRQUNFLDZCQUE2QjtRQUM3QixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osV0FBVztRQUNYLFdBQVc7UUFDWCxRQUFRO01BQ1Y7O0lBRUE7UUFDRSxZQUFZO1FBQ1osYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2Ysc0JBQXNCO1FBQ3RCLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEI7TUFDRjs7SUFFQTtFQUNKLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztNQUNQOztJQUNBO1FBQ0Usa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixXQUFXO01BQ2I7O0lBQ0E7UUFDRSxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFdBQVc7O01BRWI7O0lBRUo7O0tBRUc7O0lBRUM7VUFDSTtjQUNJLFNBQVM7Y0FDVCxVQUFVO2NBQ1Ysc0JBQXNCO1VBQzFCO0FBQ1Y7SUFDSSx1QkFBdUI7SUFDdkIsa0NBQWtDO0lBQ2xDLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsa0NBQWtDOzs7QUFHdEM7QUFDQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7Ozs7O01BS00iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIC8qIEltcG9ydCAqL1xyXG5cclxuICAgIC8qIFZhcmlhYmxlcyAqL1xyXG4gICAgLyogQmFzZSAqL1xyXG4gICAgYm9keSB7XHJcbiAgICAgICAgLyogYmFja2dyb3VuZDogIzI1MjgyNzsgKi9cclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgYSB7XHJcbiAgICAgICAgLyogY29sb3I6ICM2YzZkNmQ7ICovXHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuM2VtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC42ZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMjUyNzI3O1xyXG4gICAgICAgIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xyXG4gICAgICAgIG1hcmdpbjogMS45cmVtIDAgMCAwO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBhOmhvdmVyIHtcclxuICAgICAgICAvKiBjb2xvcjogd2hpdGU7ICovXHJcbiAgICAgICAgYmFja2dyb3VuZDogIzAwNGZmYztcclxuICAgICAgICBib3JkZXItYm90dG9tOiAwLjM1ZW0gc29saWQgYmxhY2s7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgc3Ryb25nIHtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGgxIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJTYWlyYVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDIuNGVtO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDozMDBweCA7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgI3RpbWVsaW5lLWNvbnRlbnQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC8qIFRpbWVsaW5lICovXHJcbiAgICAgIC50aW1lbGluZSB7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMDYwNjA3O1xyXG4gICAgICAgIC8qIGJvcmRlci1yaWdodDogNHB4IHJnYigyMzYsIDE3OSwgMTc5KTsgKi9cclxuICAgICAgICBib3JkZXItcmlnaHQtc3R5bGU6IGRvdHRlZDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKTtcclxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkNoaXZvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS40ZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjAzZW07XHJcbiAgICAgICAgcGFkZGluZzogNTBweDtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICBtYXgtd2lkdGg6IDMwJTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAudGltZWxpbmUgaDEge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlNhaXJhXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgXHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLnRpbWVsaW5lIGgyLFxyXG4gICAgICAudGltZWxpbmUgaDMge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlNhaXJhXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgXHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLnRpbWVsaW5lIC5ldmVudCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLnRpbWVsaW5lIC5ldmVudDpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC50aW1lbGluZSAuZXZlbnQ6YmVmb3JlLFxyXG4gICAgICAudGltZWxpbmUgLmV2ZW50OmFmdGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC50aW1lbGluZSAuZXZlbnQ6YmVmb3JlIHtcclxuICAgICAgICBsZWZ0OiAtMjE3LjVweDtcclxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xyXG4gICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1kYXRlKTtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMjBweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJTYWlyYVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC50aW1lbGluZSAuZXZlbnQ6YWZ0ZXIge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCAjMDA0ZmZjO1xyXG4gICAgICAgIGxlZnQ6IC01Ny44NXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMzMTM1MzQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGhlaWdodDogMTFweDtcclxuICAgICAgICB3aWR0aDogMTFweDtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHRvcDogNXB4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5jaXJjbGUge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6IHJnYig3NSwgNzMsIDczKTtcclxuICAgICAgICBsaW5lLWhlaWdodDogNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjMzLCAyMjcsIDIyNylcclxuICAgICAgfVxyXG4gICAgIFxyXG4gICAgICAuZWxpSW1ne1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE0NXB4O1xyXG4gIGxlZnQ6IDIzMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5hcnJvd3tcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAxNzBweDtcclxuICAgICAgICByaWdodDogMzVweDtcclxuICAgICAgfVxyXG4gICAgICAuY3Jme1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDE1MHB4O1xyXG4gICAgICAgIGxlZnQ6IDkzMHB4O1xyXG4gICAgIFxyXG4gICAgICB9XHJcbiAgICBcclxuICAvKiAuY29udGFpbmVyLWZsdWlkIC5jcmYgLnJvdyAuY29udGFpbmVyIC5yb3cgLmNvbCBpbWc6aG92ZXJ7XHJcbiAgICB0cmFuc2xhdGU6IHNjYWxlKDEuNSk7XHJcbiAgfSAqL1xyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6NjAwcHgpIHtcclxuICAgICAgICAgICp7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwOyAgICBcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICB9XHJcbmJvZHl7XHJcbiAgICB3aWR0aDogMjAwcHggIWltcG9ydGFudDtcclxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWR7XHJcbiAgICB3aWR0aDogMjAwcHhsICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xyXG4gICAgXHJcblxyXG59XHJcbi5yb3d7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLmFycm93LC5lbGlJbWd7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5oMXtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbn1cclxuLnJvd3tcclxuICAgIHBhZGRpbmctcmlnaHQ6OTAlO1xyXG59XHJcbmltZ3tcclxuICAgIHdpZHRoOiAxNXB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4gICAgICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/components/about/about.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/about/about.component.ts ***!
    \*****************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppComponentsAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AboutComponent =
    /*#__PURE__*/
    function () {
      function AboutComponent(fire) {
        _classCallCheck(this, AboutComponent);

        this.fire = fire;
        this.certificate = [];
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.hight = document.body;
          this.html = document.documentElement; //  this.fire.collection('certificates').add({
          //    id:'11',
          //    name:'jq',
          //    img:'jq.jpg'
          //  })

          this.fire.collection('certificates').get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            data.forEach(function (element) {
              _this.certificate.push(element.data()); //  console.log(element.data());

            });
          })).subscribe(function (a) {// console.log(a)
          });
        }
      }]);

      return AboutComponent;
    }();

    AboutComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.css */
      "./src/app/components/about/about.component.css")).default]
    })], AboutComponent);
    /***/
  },

  /***/
  "./src/app/components/api/api.component.css":
  /*!**************************************************!*\
    !*** ./src/app/components/api/api.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsApiApiComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBpL2FwaS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/api/api.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/api/api.component.ts ***!
    \*************************************************/

  /*! exports provided: ApiComponent */

  /***/
  function srcAppComponentsApiApiComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiComponent", function () {
      return ApiComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_projects_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/projects/projects.service */
    "./src/app/services/projects/projects.service.ts");

    var ApiComponent =
    /*#__PURE__*/
    function () {
      function ApiComponent(project) {
        _classCallCheck(this, ApiComponent);

        this.project = project;
      }

      _createClass(ApiComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.project.getProjects(4).subscribe(function (data) {
            _this2.proj = data;
          });
        }
      }]);

      return ApiComponent;
    }();

    ApiComponent.ctorParameters = function () {
      return [{
        type: _services_projects_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]
      }];
    };

    ApiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-api',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./api.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/api/api.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./api.component.css */
      "./src/app/components/api/api.component.css")).default]
    })], ApiComponent);
    /***/
  },

  /***/
  "./src/app/components/blog/blog.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/blog/blog.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsBlogBlogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n\r\n\r\n @media (max-width:600px) {\r\n    body{\r\n        width: 250px !important;\r\n        box-sizing: border-box !important;\r\n        margin-left: 45px;\r\n        overflow: hidden;\r\n        padding-right: 150px;\r\n        }\r\n        form{\r\n            font-size: 12px;\r\n        }\r\n        form label{\r\n            margin-left: 70px;\r\n        }\r\n        .col-4 input{\r\n            width: 90px;\r\n           position: absolute;\r\n           left: 50px;\r\n           bottom: -25px;\r\n        }\r\n   h3{\r\n       width: 150px;\r\n       margin-left: 50px;\r\n\r\n   }\r\n\r\n.table{\r\n    font-size: 8px;\r\n    padding: 0;\r\n}\r\nbutton{\r\n    width: 20px;\r\n    height: 20px;\r\n    font-size: 8px;\r\n    \r\n}\r\n\r\n.b{\r\n    padding-right: 35px;\r\n}\r\n \r\n.a{\r\n    padding-left: 35px;\r\n    margin-left: 10px;\r\n}\r\n.bt{\r\n    position: absolute;\r\n    top: 50px;\r\n}\r\n }\r\n\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ibG9nL2Jsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0NBSUM7SUFDRztRQUNJLHVCQUF1QjtRQUN2QixpQ0FBaUM7UUFDakMsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixvQkFBb0I7UUFDcEI7UUFDQTtZQUNJLGVBQWU7UUFDbkI7UUFDQTtZQUNJLGlCQUFpQjtRQUNyQjtRQUNBO1lBQ0ksV0FBVztXQUNaLGtCQUFrQjtXQUNsQixVQUFVO1dBQ1YsYUFBYTtRQUNoQjtHQUNMO09BQ0ksWUFBWTtPQUNaLGlCQUFpQjs7R0FFckI7O0FBRUg7SUFDSSxjQUFjO0lBQ2QsVUFBVTtBQUNkO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7O0FBRWxCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjtDQUNDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ibG9nL2Jsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcblxyXG4gQG1lZGlhIChtYXgtd2lkdGg6NjAwcHgpIHtcclxuICAgIGJvZHl7XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0NXB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcm17XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9ybSBsYWJlbHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDcwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2wtNCBpbnB1dHtcclxuICAgICAgICAgICAgd2lkdGg6IDkwcHg7XHJcbiAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgIGxlZnQ6IDUwcHg7XHJcbiAgICAgICAgICAgYm90dG9tOiAtMjVweDtcclxuICAgICAgICB9XHJcbiAgIGgze1xyXG4gICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcblxyXG4gICB9XHJcblxyXG4udGFibGV7XHJcbiAgICBmb250LXNpemU6IDhweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDhweDtcclxuICAgIFxyXG59XHJcblxyXG4uYntcclxuICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XHJcbn1cclxuIFxyXG4uYXtcclxuICAgIHBhZGRpbmctbGVmdDogMzVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi5idHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTBweDtcclxufVxyXG4gfVxyXG5cclxuICJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/blog/blog.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/blog/blog.component.ts ***!
    \***************************************************/

  /*! exports provided: BlogComponent */

  /***/
  function srcAppComponentsBlogBlogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogComponent", function () {
      return BlogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var BlogComponent =
    /*#__PURE__*/
    function () {
      function BlogComponent(fire) {
        _classCallCheck(this, BlogComponent);

        this.fire = fire;
        this.flag = false;
        this.flag1 = true;
        this.users = [];
        this.test = {};
      }

      _createClass(BlogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          // show all users
          this.fire.collection('users').get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            data.forEach(function (a) {
              _this3.users.push({
                fname: a.data().fname,
                lname: a.data().lname,
                id: a.id
              });
            });
          })).subscribe(function (s) {// console.log(s);
          });
        } // add new users

      }, {
        key: "addNewUser",
        value: function addNewUser(_ref) {
          var fname = _ref.fname,
              lname = _ref.lname;
          // console.log(fname,lname);
          this.fire.collection('users').add({
            fname: fname,
            lname: lname
          }).then(function (a) {
            location.reload();
          });
        }
      }, {
        key: "del",
        value: function del(id) {
          // console.log(id);
          var x = confirm('Are U Sure ?');

          if (x == true) {
            // console.log(this);
            this.fire.collection('users').doc(id).delete().then(function (x) {
              location.reload();
            });
          }
        }
      }, {
        key: "editIt",
        value: function editIt(x) {
          this.flag = true; //  this.scroll('editUser');

          console.log(x);
          this.updateUser(x);
        }
      }, {
        key: "updateUser",
        value: function updateUser(x) {
          var _this4 = this;

          //  console.log(x);
          this.fire.collection('users').doc(x).get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            _this4.test = {
              fname: data.data().fname,
              lname: data.data().lname,
              id: data.id
            };
            console.log(_this4.test);
          })).subscribe(function (a) {// console.log(a);
          }); //   this.fire.collection('users').doc(x).update({
          //     fname:this.fname,
          //     lname:this.lname
          //             })
          //       this.flag=false;
          //   console.log(x);
        }
      }, {
        key: "updateNow",
        value: function updateNow(_ref2, x) {
          var fname = _ref2.fname,
              lname = _ref2.lname;
          // console.log(fname,lname,x);
          this.fire.collection('users').doc(x).update({
            fname: fname,
            lname: lname
          }).then(function (x) {
            location.reload();
          });
        }
      }]);

      return BlogComponent;
    }();

    BlogComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog/blog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blog.component.css */
      "./src/app/components/blog/blog.component.css")).default]
    })], BlogComponent);
    /***/
  },

  /***/
  "./src/app/components/contacts/contacts.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/contacts/contacts.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsContactsContactsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/contacts/contacts.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/contacts/contacts.component.ts ***!
    \***********************************************************/

  /*! exports provided: ContactsComponent */

  /***/
  function srcAppComponentsContactsContactsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsComponent", function () {
      return ContactsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContactsComponent =
    /*#__PURE__*/
    function () {
      function ContactsComponent() {
        _classCallCheck(this, ContactsComponent);
      }

      _createClass(ContactsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.flag = false;
          this.pageHeader = 'contacts';
          this.pageDescription = 'test contacts';
          this.pageIcone = 'fas fa-users';
          this.contacts = [{
            name: 'eli',
            age: 37,
            city: 'tlv'
          }, {
            name: 'eli1',
            age: 373,
            city: 't3lv'
          }, {
            name: 'eli2',
            age: 337,
            city: 'tlev'
          }];
        }
      }]);

      return ContactsComponent;
    }();

    ContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contacts',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contacts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contacts/contacts.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contacts.component.css */
      "./src/app/components/contacts/contacts.component.css")).default]
    })], ContactsComponent);
    /***/
  },

  /***/
  "./src/app/components/customer-add/customer-add.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/customer-add/customer-add.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCustomerAddCustomerAddComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tZXItYWRkL2N1c3RvbWVyLWFkZC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/customer-add/customer-add.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/customer-add/customer-add.component.ts ***!
    \*******************************************************************/

  /*! exports provided: CustomerAddComponent */

  /***/
  function srcAppComponentsCustomerAddCustomerAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerAddComponent", function () {
      return CustomerAddComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CustomerAddComponent =
    /*#__PURE__*/
    function () {
      function CustomerAddComponent() {
        _classCallCheck(this, CustomerAddComponent);

        this.test = 'foo';
      }

      _createClass(CustomerAddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.pageHeader = 'Add new customers';
          this.pageDescription = 'Add new customers';
          this.pageIcone = 'fas fa-address-book';
        } // test(test){
        //   console.log(test.key);
        // }

      }, {
        key: "onsubmit",
        value: function onsubmit(form) {
          console.log(form.value.firstname);
        }
      }]);

      return CustomerAddComponent;
    }();

    CustomerAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-customer-add',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./customer-add.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer-add/customer-add.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./customer-add.component.css */
      "./src/app/components/customer-add/customer-add.component.css")).default]
    })], CustomerAddComponent);
    /***/
  },

  /***/
  "./src/app/components/customers/customers.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/components/customers/customers.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCustomersCustomersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\r\n    background-image: url(\"/assets/images/b&w.jpg\"); /* The image used */\r\n    background-color: #cccccc; /* Used if the image is unavailable */\r\n    height: 1400px; /* You must set a specified height */\r\n    background-position: center; /* Center the image */\r\n    background-repeat: cover;\r\n  }\r\n\r\n  embed{\r\n      position: relative;\r\n      margin:10% 0 0 15% ;\r\n  }\r\n\r\n  h2{\r\n    position: relative;\r\n    top: 30px;\r\n    left: 155px;\r\n}\r\n\r\n  @media (max-width:600px) {\r\n\r\n    .aph{\r\n        display: none;\r\n    }\r\n\r\n    *{\r\n        margin: 0;    \r\n        padding: 0;\r\n        box-sizing: border-box;\r\n    }\r\nbody{\r\n    margin-left: 35px;\r\n}\r\nh2{\r\n    display: none;\r\n}\r\n\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b21lcnMvY3VzdG9tZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrQ0FBK0MsRUFBRSxtQkFBbUI7SUFDcEUseUJBQXlCLEVBQUUscUNBQXFDO0lBQ2hFLGNBQWMsRUFBRSxvQ0FBb0M7SUFDcEQsMkJBQTJCLEVBQUUscUJBQXFCO0lBQ2xELHdCQUF3QjtFQUMxQjs7RUFFQTtNQUNJLGtCQUFrQjtNQUNsQixtQkFBbUI7RUFDdkI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7QUFDZjs7RUFFQzs7SUFFRztRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxTQUFTO1FBQ1QsVUFBVTtRQUNWLHNCQUFzQjtJQUMxQjtBQUNKO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztDQUVDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jdXN0b21lcnMvY3VzdG9tZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2Imdy5qcGdcIik7IC8qIFRoZSBpbWFnZSB1c2VkICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjOyAvKiBVc2VkIGlmIHRoZSBpbWFnZSBpcyB1bmF2YWlsYWJsZSAqL1xyXG4gICAgaGVpZ2h0OiAxNDAwcHg7IC8qIFlvdSBtdXN0IHNldCBhIHNwZWNpZmllZCBoZWlnaHQgKi9cclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBpbWFnZSAqL1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgZW1iZWR7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgbWFyZ2luOjEwJSAwIDAgMTUlIDtcclxuICB9XHJcbiAgXHJcbiAgaDJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDMwcHg7XHJcbiAgICBsZWZ0OiAxNTVweDtcclxufVxyXG4gIFxyXG4gQG1lZGlhIChtYXgtd2lkdGg6NjAwcHgpIHtcclxuXHJcbiAgICAuYXBoe1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgKntcclxuICAgICAgICBtYXJnaW46IDA7ICAgIFxyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIH1cclxuYm9keXtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xyXG59XHJcbmgye1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/customers/customers.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/customers/customers.component.ts ***!
    \*************************************************************/

  /*! exports provided: CustomersComponent */

  /***/
  function srcAppComponentsCustomersCustomersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomersComponent", function () {
      return CustomersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CustomersComponent =
    /*#__PURE__*/
    function () {
      function CustomersComponent() {
        _classCallCheck(this, CustomersComponent);
      }

      _createClass(CustomersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.pageHeader = 'customers';
          this.pageDescription = 'test customers';
          this.pageIcone = 'fas fa-address-book';
        }
      }, {
        key: "pressMe",
        value: function pressMe() {
          alert('somone press me');
        }
      }]);

      return CustomersComponent;
    }();

    CustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-customers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./customers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customers/customers.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./customers.component.css */
      "./src/app/components/customers/customers.component.css")).default]
    })], CustomersComponent);
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/footer/footer.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/components/footer/footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/components/info/info.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/info/info.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsInfoInfoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5mby9pbmZvLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/info/info.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/info/info.component.ts ***!
    \***************************************************/

  /*! exports provided: InfoComponent */

  /***/
  function srcAppComponentsInfoInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoComponent", function () {
      return InfoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_info_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/info/info.service */
    "./src/app/services/info/info.service.ts");

    var InfoComponent =
    /*#__PURE__*/
    function () {
      function InfoComponent(InfoService) {
        _classCallCheck(this, InfoComponent);

        this.InfoService = InfoService;
      }

      _createClass(InfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.InfoService.getInfo().subscribe(function (data) {
            _this5.info = data;
          });
        }
      }]);

      return InfoComponent;
    }();

    InfoComponent.ctorParameters = function () {
      return [{
        type: _services_info_info_service__WEBPACK_IMPORTED_MODULE_2__["InfoService"]
      }];
    };

    InfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/info/info.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./info.component.css */
      "./src/app/components/info/info.component.css")).default]
    })], InfoComponent);
    /***/
  },

  /***/
  "./src/app/components/java-script/java-script.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/components/java-script/java-script.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsJavaScriptJavaScriptComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvamF2YS1zY3JpcHQvamF2YS1zY3JpcHQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/java-script/java-script.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/java-script/java-script.component.ts ***!
    \*****************************************************************/

  /*! exports provided: JavaScriptComponent */

  /***/
  function srcAppComponentsJavaScriptJavaScriptComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JavaScriptComponent", function () {
      return JavaScriptComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js"); // import { ProjectsService } from '../../services/projects/projects.service';


    var JavaScriptComponent =
    /*#__PURE__*/
    function () {
      function JavaScriptComponent( // private project:ProjectsService
      fire) {
        _classCallCheck(this, JavaScriptComponent);

        this.fire = fire;
        this.proj = [];
      }

      _createClass(JavaScriptComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          // this.project.getProjects(1).subscribe(data=>{this.proj= data})
          // this.fire.collection('projects').add({
          // id:"2",
          // name:"Php Food Store",
          // url:"PhpFoodStore@bslabla.com",
          // description:"Php project including+sociality+ working with ajax and api's +CMS( content management system )",
          // img:"food.jpg",
          // })
          // this.fire.collection("projects").doc().update({
          // id:"1",
          // name:"mini vod",
          // url:"mini_vod@blabla.com",
          // email:'blabla@balbla.com'
          // })
          this.fire.collection('projects').get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            data.forEach(function (projects) {
              if (projects.data().id == 1) {
                var tr = projects.data().img.replace(/ /g, "");
                tr = tr.replace(/ /g, "");

                _this6.proj.push({
                  name: projects.data().name,
                  url: projects.data().url,
                  description: projects.data().description,
                  img: projects.data().img.trim()
                });
              } // this.all
              // console.log(this.proj);
              // console.log(projects.id);

            });
          })).subscribe(function (res) {// console.log(res);
          });
        }
      }]);

      return JavaScriptComponent;
    }();

    JavaScriptComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], JavaScriptComponent.prototype, "proj", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], JavaScriptComponent.prototype, "all", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], JavaScriptComponent.prototype, "imgs", void 0);
    JavaScriptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-java-script',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./java-script.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/java-script/java-script.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./java-script.component.css */
      "./src/app/components/java-script/java-script.component.css")).default]
    })], JavaScriptComponent);
    /***/
  },

  /***/
  "./src/app/components/laravel/laravel.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/components/laravel/laravel.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLaravelLaravelComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFyYXZlbC9sYXJhdmVsLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/laravel/laravel.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/laravel/laravel.component.ts ***!
    \*********************************************************/

  /*! exports provided: LaravelComponent */

  /***/
  function srcAppComponentsLaravelLaravelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LaravelComponent", function () {
      return LaravelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var LaravelComponent =
    /*#__PURE__*/
    function () {
      function LaravelComponent( // private project:ProjectsService,
      fire) {
        _classCallCheck(this, LaravelComponent);

        this.fire = fire;
        this.proj = [];
      }

      _createClass(LaravelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          // this.project.getProjects(3).subscribe(data=>{this.proj=data})
          this.fire.collection('projects').get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            data.forEach(function (element) {
              if (element.data().id == 3) {
                _this7.proj.push({
                  name: element.data().name,
                  url: element.data().url,
                  description: element.data().description,
                  img: element.data().img
                });
              }
            });
          })).subscribe(function (a) {// console.log(a);
          }); // this.fire.collection('projects').add({
          //   id:"1",
          //   name:"Tic Tok Game ",
          //   url:"JavaScript@bslabla.com",
          //   description:"JavaScript Tic Tok Game",
          //   img:"tictok.jpg",
          //   })
        }
      }]);

      return LaravelComponent;
    }();

    LaravelComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LaravelComponent.prototype, "proj", void 0);
    LaravelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-laravel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./laravel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/laravel/laravel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./laravel.component.css */
      "./src/app/components/laravel/laravel.component.css")).default]
    })], LaravelComponent);
    /***/
  },

  /***/
  "./src/app/components/page-header/page-header.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/components/page-header/page-header.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPageHeaderPageHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import 'https://fonts.googleapis.com/css?family=Raleway';\r\n* {\r\n  outline: none;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\nbody, html {\r\n  margin: 0;\r\n  /* background: #ddd; */\r\n  color: #7a7b7c;\r\n}\r\nbody {\r\n  font-family: \"Raleway\", \"Microsoft JhengHei\", Arial, sans-serif;\r\n}\r\n.profile {\r\n  width: 330px;\r\n  height: 100px;\r\n position: absolute;\r\n top: 5%;\r\n left: 80%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  border-radius: 5px;\r\n  background-color: #fafafa;\r\n  box-shadow: 0 0 2rem #babbbc;\r\n  -webkit-animation: show-profile 0.5s forwards ease-in-out;\r\n          animation: show-profile 0.5s forwards ease-in-out;\r\n}\r\n@-webkit-keyframes show-profile {\r\n  0% {\r\n    width: 0;\r\n  }\r\n}\r\n@keyframes show-profile {\r\n  0% {\r\n    width: 0;\r\n  }\r\n}\r\n.profile .photo, .profile .content {\r\n  box-sizing: border-box;\r\n}\r\n.profile .photo {\r\n  width: 100px;\r\n  height: 100px;\r\n  border-radius: 50%;\r\n  overflow: hidden;\r\n  border: 5px solid #fafafa;\r\n  background-color: #fafafa;\r\n  margin-left: -50px;\r\n  box-shadow: 0 0 0.5rem #babbbc;\r\n  -webkit-animation: rotate-photo 0.5s forwards ease-in-out;\r\n          animation: rotate-photo 0.5s forwards ease-in-out;\r\n}\r\n@-webkit-keyframes rotate-photo {\r\n  100% {\r\n    -webkit-transform: rotate(-360deg);\r\n            transform: rotate(-360deg);\r\n  }\r\n}\r\n@keyframes rotate-photo {\r\n  100% {\r\n    -webkit-transform: rotate(-360deg);\r\n            transform: rotate(-360deg);\r\n  }\r\n}\r\n.profile .photo img {\r\n  width: 100%;\r\n}\r\n.profile .content {\r\n  padding: 10px;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n.profile .content::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 230px;\r\n  height: 150px;\r\n  background-color: #e9f3e6;\r\n  left: 0;\r\n  top: -20px;\r\n  z-index: -1;\r\n  -webkit-transform: rotate(-8deg);\r\n          transform: rotate(-8deg);\r\n}\r\n.profile .content .text {\r\n  margin-top: 20px;\r\n  margin-left: 50px;\r\n}\r\n.profile .content .text h3, .profile .content .text h6 {\r\n  font-weight: normal;\r\n  margin: 3px 0;\r\n  letter-spacing: 0.5px;\r\n  white-space: nowrap;\r\n}\r\n.profile .content .btn {\r\n  background-color: #abc;\r\n  width: 50px;\r\n  height: 50px;\r\n  position: absolute;\r\n  right: 25px;\r\n  top: 25px;\r\n  border-radius: 50%;\r\n  z-index: 1;\r\n  cursor: pointer;\r\n  -webkit-transition-duration: 0.3s;\r\n          transition-duration: 0.3s;\r\n  -webkit-animation: pop-btn 0.3s both ease-in-out 0.5s;\r\n          animation: pop-btn 0.3s both ease-in-out 0.5s;\r\n}\r\n@-webkit-keyframes pop-btn {\r\n  0% {\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n  }\r\n  80% {\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n  }\r\n}\r\n@keyframes pop-btn {\r\n  0% {\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n  }\r\n  80% {\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n  }\r\n}\r\n.profile .content .btn:hover {\r\n  box-shadow: 0 0 0 5px rgba(170, 187, 204, 0.5);\r\n}\r\n.profile .content .btn span {\r\n  width: 60%;\r\n  height: 2px;\r\n  position: absolute;\r\n  background-color: white;\r\n  top: 50%;\r\n  left: 20%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  -webkit-animation: to-hamburger 0.3s forwards ease-in-out;\r\n          animation: to-hamburger 0.3s forwards ease-in-out;\r\n}\r\n.profile .content .btn span::before, .profile .content .btn span::after {\r\n  content: \"\";\r\n  width: 100%;\r\n  height: 2px;\r\n  position: absolute;\r\n  background-color: white;\r\n  -webkit-transition-duration: 0.3s;\r\n          transition-duration: 0.3s;\r\n  -webkit-transform: rotate(0deg);\r\n          transform: rotate(0deg);\r\n  right: 0;\r\n}\r\n.profile .content .btn span::before {\r\n  margin-top: -7px;\r\n}\r\n.profile .content .btn span::after {\r\n  margin-top: 7px;\r\n}\r\n.profile .content .btn.active span {\r\n  -webkit-animation: to-arrow 0.3s forwards ease-in-out;\r\n          animation: to-arrow 0.3s forwards ease-in-out;\r\n}\r\n.profile .content .btn.active span::before, .profile .content .btn.active span::after {\r\n  width: 60%;\r\n  right: -1px;\r\n}\r\n.profile .content .btn.active span::before {\r\n  -webkit-transform: rotate(45deg);\r\n          transform: rotate(45deg);\r\n}\r\n.profile .content .btn.active span::after {\r\n  -webkit-transform: rotate(-45deg);\r\n          transform: rotate(-45deg);\r\n}\r\n@-webkit-keyframes to-hamburger {\r\n  from {\r\n    -webkit-transform: translateY(-50%) rotate(-180deg);\r\n            transform: translateY(-50%) rotate(-180deg);\r\n  }\r\n}\r\n@keyframes to-hamburger {\r\n  from {\r\n    -webkit-transform: translateY(-50%) rotate(-180deg);\r\n            transform: translateY(-50%) rotate(-180deg);\r\n  }\r\n}\r\n@-webkit-keyframes to-arrow {\r\n  from {\r\n    -webkit-transform: translateY(-50%) rotate(0deg);\r\n            transform: translateY(-50%) rotate(0deg);\r\n  }\r\n  to {\r\n    -webkit-transform: translateY(-50%) rotate(180deg);\r\n            transform: translateY(-50%) rotate(180deg);\r\n  }\r\n}\r\n@keyframes to-arrow {\r\n  from {\r\n    -webkit-transform: translateY(-50%) rotate(0deg);\r\n            transform: translateY(-50%) rotate(0deg);\r\n  }\r\n  to {\r\n    -webkit-transform: translateY(-50%) rotate(180deg);\r\n            transform: translateY(-50%) rotate(180deg);\r\n  }\r\n}\r\n.profile .box {\r\n  width: 150px;\r\n  height: 150px;\r\n  opacity: 0;\r\n  border-radius: 50%;\r\n  background-color: rgba(255, 255, 255, 0.7);\r\n  position: absolute;\r\n  top: 50%;\r\n  right: -40%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  -webkit-transition-duration: 0.3s;\r\n          transition-duration: 0.3s;\r\n}\r\n.profile .box i {\r\n  width: 50px;\r\n  height: 50px;\r\n  border-radius: 50%;\r\n  background-color: #ececec;\r\n  font-size: 26px;\r\n  text-align: center;\r\n  line-height: 50px;\r\n  position: absolute;\r\n  left: 18px;\r\n  top: calc(75px - 50px/2);\r\n  box-shadow: 0 0 0.5rem #babbbc;\r\n  -webkit-transition-duration: 0.3s;\r\n          transition-duration: 0.3s;\r\n}\r\n.profile .box i:hover {\r\n  -webkit-transition-delay: initial !important;\r\n          transition-delay: initial !important;\r\n  box-shadow: 0 0 0 5px #babbbc;\r\n}\r\n.profile .box.open {\r\n  opacity: 1;\r\n}\r\n.profile .box.open i {\r\n  left: 60px;\r\n}\r\n.profile .box.open i:nth-of-type(1) {\r\n  -webkit-transform: rotate(-90deg) translateX(120px) rotate(90deg);\r\n          transform: rotate(-90deg) translateX(120px) rotate(90deg);\r\n  -webkit-transition-delay: 0s;\r\n          transition-delay: 0s;\r\n}\r\n.profile .box.open i:nth-of-type(2) {\r\n  -webkit-transform: rotate(-45deg) translateX(120px) rotate(45deg);\r\n          transform: rotate(-45deg) translateX(120px) rotate(45deg);\r\n  -webkit-transition-delay: 0.1s;\r\n          transition-delay: 0.1s;\r\n}\r\n.profile .box.open i:nth-of-type(3) {\r\n  -webkit-transform: rotate(0deg) translateX(120px) rotate(0deg);\r\n          transform: rotate(0deg) translateX(120px) rotate(0deg);\r\n  -webkit-transition-delay: 0.2s;\r\n          transition-delay: 0.2s;\r\n}\r\n.profile .box.open i:nth-of-type(4) {\r\n  -webkit-transform: rotate(45deg) translateX(120px) rotate(-45deg);\r\n          transform: rotate(45deg) translateX(120px) rotate(-45deg);\r\n  -webkit-transition-delay: 0.3s;\r\n          transition-delay: 0.3s;\r\n}\r\n.profile .box.open i:nth-of-type(5) {\r\n  -webkit-transform: rotate(90deg) translateX(120px) rotate(-90deg);\r\n          transform: rotate(90deg) translateX(120px) rotate(-90deg);\r\n  -webkit-transition-delay: 0.4s;\r\n          transition-delay: 0.4s;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlLWhlYWRlci9wYWdlLWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDtBQUN6RDtFQUNFLGFBQWE7RUFDYix5QkFBaUI7S0FBakIsc0JBQWlCO01BQWpCLHFCQUFpQjtVQUFqQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjtBQUVBO0VBQ0UsK0RBQStEO0FBQ2pFO0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtDQUNkLGtCQUFrQjtDQUNsQixPQUFPO0NBQ1AsU0FBUztFQUNSLHdDQUFnQztVQUFoQyxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIseURBQWlEO1VBQWpELGlEQUFpRDtBQUNuRDtBQUNBO0VBQ0U7SUFDRSxRQUFRO0VBQ1Y7QUFDRjtBQUpBO0VBQ0U7SUFDRSxRQUFRO0VBQ1Y7QUFDRjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLHlEQUFpRDtVQUFqRCxpREFBaUQ7QUFDbkQ7QUFDQTtFQUNFO0lBQ0Usa0NBQTBCO1lBQTFCLDBCQUEwQjtFQUM1QjtBQUNGO0FBSkE7RUFDRTtJQUNFLGtDQUEwQjtZQUExQiwwQkFBMEI7RUFDNUI7QUFDRjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPO0FBQ1Q7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsT0FBTztFQUNQLFVBQVU7RUFDVixXQUFXO0VBQ1gsZ0NBQXdCO1VBQXhCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGVBQWU7RUFDZixpQ0FBeUI7VUFBekIseUJBQXlCO0VBQ3pCLHFEQUE2QztVQUE3Qyw2Q0FBNkM7QUFDL0M7QUFDQTtFQUNFO0lBQ0UsMkJBQW1CO1lBQW5CLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsNkJBQXFCO1lBQXJCLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsMkJBQW1CO1lBQW5CLG1CQUFtQjtFQUNyQjtBQUNGO0FBVkE7RUFDRTtJQUNFLDJCQUFtQjtZQUFuQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLDZCQUFxQjtZQUFyQixxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLDJCQUFtQjtZQUFuQixtQkFBbUI7RUFDckI7QUFDRjtBQUNBO0VBQ0UsOENBQThDO0FBQ2hEO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsUUFBUTtFQUNSLFNBQVM7RUFDVCxtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLHlEQUFpRDtVQUFqRCxpREFBaUQ7QUFDbkQ7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsaUNBQXlCO1VBQXpCLHlCQUF5QjtFQUN6QiwrQkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLFFBQVE7QUFDVjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxxREFBNkM7VUFBN0MsNkNBQTZDO0FBQy9DO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiO0FBQ0E7RUFDRSxnQ0FBd0I7VUFBeEIsd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxpQ0FBeUI7VUFBekIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRTtJQUNFLG1EQUEyQztZQUEzQywyQ0FBMkM7RUFDN0M7QUFDRjtBQUpBO0VBQ0U7SUFDRSxtREFBMkM7WUFBM0MsMkNBQTJDO0VBQzdDO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsZ0RBQXdDO1lBQXhDLHdDQUF3QztFQUMxQztFQUNBO0lBQ0Usa0RBQTBDO1lBQTFDLDBDQUEwQztFQUM1QztBQUNGO0FBUEE7RUFDRTtJQUNFLGdEQUF3QztZQUF4Qyx3Q0FBd0M7RUFDMUM7RUFDQTtJQUNFLGtEQUEwQztZQUExQywwQ0FBMEM7RUFDNUM7QUFDRjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLDBDQUEwQztFQUMxQyxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0VBQ2hDLGlDQUF5QjtVQUF6Qix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHdCQUF3QjtFQUN4Qiw4QkFBOEI7RUFDOUIsaUNBQXlCO1VBQXpCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsNENBQW9DO1VBQXBDLG9DQUFvQztFQUNwQyw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxpRUFBeUQ7VUFBekQseURBQXlEO0VBQ3pELDRCQUFvQjtVQUFwQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGlFQUF5RDtVQUF6RCx5REFBeUQ7RUFDekQsOEJBQXNCO1VBQXRCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsOERBQXNEO1VBQXRELHNEQUFzRDtFQUN0RCw4QkFBc0I7VUFBdEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxpRUFBeUQ7VUFBekQseURBQXlEO0VBQ3pELDhCQUFzQjtVQUF0QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGlFQUF5RDtVQUF6RCx5REFBeUQ7RUFDekQsOEJBQXNCO1VBQXRCLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1oZWFkZXIvcGFnZS1oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5JztcclxuKiB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuYm9keSwgaHRtbCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIC8qIGJhY2tncm91bmQ6ICNkZGQ7ICovXHJcbiAgY29sb3I6ICM3YTdiN2M7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgXCJNaWNyb3NvZnQgSmhlbmdIZWlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5wcm9maWxlIHtcclxuICB3aWR0aDogMzMwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuIHRvcDogNSU7XHJcbiBsZWZ0OiA4MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgYm94LXNoYWRvdzogMCAwIDJyZW0gI2JhYmJiYztcclxuICBhbmltYXRpb246IHNob3ctcHJvZmlsZSAwLjVzIGZvcndhcmRzIGVhc2UtaW4tb3V0O1xyXG59XHJcbkBrZXlmcmFtZXMgc2hvdy1wcm9maWxlIHtcclxuICAwJSB7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcbn1cclxuLnByb2ZpbGUgLnBob3RvLCAucHJvZmlsZSAuY29udGVudCB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4ucHJvZmlsZSAucGhvdG8ge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkICNmYWZhZmE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICBtYXJnaW4tbGVmdDogLTUwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAuNXJlbSAjYmFiYmJjO1xyXG4gIGFuaW1hdGlvbjogcm90YXRlLXBob3RvIDAuNXMgZm9yd2FyZHMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuQGtleWZyYW1lcyByb3RhdGUtcGhvdG8ge1xyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbi5wcm9maWxlIC5waG90byBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5wcm9maWxlIC5jb250ZW50IHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxufVxyXG4ucHJvZmlsZSAuY29udGVudDo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMjMwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlmM2U2O1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAtMjBweDtcclxuICB6LWluZGV4OiAtMTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOGRlZyk7XHJcbn1cclxuLnByb2ZpbGUgLmNvbnRlbnQgLnRleHQge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuLnByb2ZpbGUgLmNvbnRlbnQgLnRleHQgaDMsIC5wcm9maWxlIC5jb250ZW50IC50ZXh0IGg2IHtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIG1hcmdpbjogM3B4IDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLnByb2ZpbGUgLmNvbnRlbnQgLmJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FiYztcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAyNXB4O1xyXG4gIHRvcDogMjVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgei1pbmRleDogMTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICBhbmltYXRpb246IHBvcC1idG4gMC4zcyBib3RoIGVhc2UtaW4tb3V0IDAuNXM7XHJcbn1cclxuQGtleWZyYW1lcyBwb3AtYnRuIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIH1cclxuICA4MCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG59XHJcbi5wcm9maWxlIC5jb250ZW50IC5idG46aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDVweCByZ2JhKDE3MCwgMTg3LCAyMDQsIDAuNSk7XHJcbn1cclxuLnByb2ZpbGUgLmNvbnRlbnQgLmJ0biBzcGFuIHtcclxuICB3aWR0aDogNjAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiAyMCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIGFuaW1hdGlvbjogdG8taGFtYnVyZ2VyIDAuM3MgZm9yd2FyZHMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLnByb2ZpbGUgLmNvbnRlbnQgLmJ0biBzcGFuOjpiZWZvcmUsIC5wcm9maWxlIC5jb250ZW50IC5idG4gc3Bhbjo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuLnByb2ZpbGUgLmNvbnRlbnQgLmJ0biBzcGFuOjpiZWZvcmUge1xyXG4gIG1hcmdpbi10b3A6IC03cHg7XHJcbn1cclxuLnByb2ZpbGUgLmNvbnRlbnQgLmJ0biBzcGFuOjphZnRlciB7XHJcbiAgbWFyZ2luLXRvcDogN3B4O1xyXG59XHJcbi5wcm9maWxlIC5jb250ZW50IC5idG4uYWN0aXZlIHNwYW4ge1xyXG4gIGFuaW1hdGlvbjogdG8tYXJyb3cgMC4zcyBmb3J3YXJkcyBlYXNlLWluLW91dDtcclxufVxyXG4ucHJvZmlsZSAuY29udGVudCAuYnRuLmFjdGl2ZSBzcGFuOjpiZWZvcmUsIC5wcm9maWxlIC5jb250ZW50IC5idG4uYWN0aXZlIHNwYW46OmFmdGVyIHtcclxuICB3aWR0aDogNjAlO1xyXG4gIHJpZ2h0OiAtMXB4O1xyXG59XHJcbi5wcm9maWxlIC5jb250ZW50IC5idG4uYWN0aXZlIHNwYW46OmJlZm9yZSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcbi5wcm9maWxlIC5jb250ZW50IC5idG4uYWN0aXZlIHNwYW46OmFmdGVyIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG59XHJcbkBrZXlmcmFtZXMgdG8taGFtYnVyZ2VyIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoLTE4MGRlZyk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgdG8tYXJyb3cge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgxODBkZWcpO1xyXG4gIH1cclxufVxyXG4ucHJvZmlsZSAuYm94IHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHJpZ2h0OiAtNDAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbn1cclxuLnByb2ZpbGUgLmJveCBpIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMThweDtcclxuICB0b3A6IGNhbGMoNzVweCAtIDUwcHgvMik7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAuNXJlbSAjYmFiYmJjO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbn1cclxuLnByb2ZpbGUgLmJveCBpOmhvdmVyIHtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgNXB4ICNiYWJiYmM7XHJcbn1cclxuLnByb2ZpbGUgLmJveC5vcGVuIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5wcm9maWxlIC5ib3gub3BlbiBpIHtcclxuICBsZWZ0OiA2MHB4O1xyXG59XHJcbi5wcm9maWxlIC5ib3gub3BlbiBpOm50aC1vZi10eXBlKDEpIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZVgoMTIwcHgpIHJvdGF0ZSg5MGRlZyk7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMHM7XHJcbn1cclxuLnByb2ZpbGUgLmJveC5vcGVuIGk6bnRoLW9mLXR5cGUoMikge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlWCgxMjBweCkgcm90YXRlKDQ1ZGVnKTtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xyXG59XHJcbi5wcm9maWxlIC5ib3gub3BlbiBpOm50aC1vZi10eXBlKDMpIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSB0cmFuc2xhdGVYKDEyMHB4KSByb3RhdGUoMGRlZyk7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcclxufVxyXG4ucHJvZmlsZSAuYm94Lm9wZW4gaTpudGgtb2YtdHlwZSg0KSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZVgoMTIwcHgpIHJvdGF0ZSgtNDVkZWcpO1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuM3M7XHJcbn1cclxuLnByb2ZpbGUgLmJveC5vcGVuIGk6bnRoLW9mLXR5cGUoNSkge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGVYKDEyMHB4KSByb3RhdGUoLTkwZGVnKTtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xyXG59XHJcblxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/page-header/page-header.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/page-header/page-header.component.ts ***!
    \*****************************************************************/

  /*! exports provided: PageHeaderComponent */

  /***/
  function srcAppComponentsPageHeaderPageHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function () {
      return PageHeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);

    var PageHeaderComponent =
    /*#__PURE__*/
    function () {
      function PageHeaderComponent() {
        _classCallCheck(this, PageHeaderComponent);
      }

      _createClass(PageHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          jquery__WEBPACK_IMPORTED_MODULE_2__('.btn').click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__(this).toggleClass('active');
            return jquery__WEBPACK_IMPORTED_MODULE_2__('.box').toggleClass('open');
          }); // this.pageIcon='fas fa-users';
          //   this.pageHeader= 'Customers Page';
          // this.pageDescription='This is all of your registerd customers';
        }
      }]);

      return PageHeaderComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PageHeaderComponent.prototype, "pageHeader", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PageHeaderComponent.prototype, "pageDescription", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PageHeaderComponent.prototype, "pageIcone", void 0);
    PageHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-header/page-header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page-header.component.css */
      "./src/app/components/page-header/page-header.component.css")).default]
    })], PageHeaderComponent);
    /***/
  },

  /***/
  "./src/app/components/page-main/page-main.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/components/page-main/page-main.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPageMainPageMainComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1tYWluL3BhZ2UtbWFpbi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/page-main/page-main.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/page-main/page-main.component.ts ***!
    \*************************************************************/

  /*! exports provided: PageMainComponent */

  /***/
  function srcAppComponentsPageMainPageMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageMainComponent", function () {
      return PageMainComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js"); // import { Projects } from 'src/app/projects.model';


    var PageMainComponent =
    /*#__PURE__*/
    function () {
      function PageMainComponent() // private ProjectsService:ProjectsService
      {
        _classCallCheck(this, PageMainComponent);

        // @Input()
        // project:any;
        this.proj = []; // this.ProjectsService.getProjects().subscribe(data => {console.log(data)})
      }

      _createClass(PageMainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// console.log(this.imgs);
          // console.log(this.proj)
          // this.projects=this.ProjectsService.getProjects();
          //   this.projects = data.map(e => {
          //     return {
          //       id: e.payload.doc.id,
          //       // ...e.payload.doc.data()
          //     } as Projects;
          // });
        }
      }]);

      return PageMainComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PageMainComponent.prototype, "proj", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PageMainComponent.prototype, "imgs", void 0);
    PageMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page-main',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-main.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-main/page-main.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page-main.component.css */
      "./src/app/components/page-main/page-main.component.css")).default]
    })], PageMainComponent);
    /***/
  },

  /***/
  "./src/app/components/page-not-found/page-not-found.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/components/page-not-found/page-not-found.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPageNotFoundPageNotFoundComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/page-not-found/page-not-found.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
    \***********************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppComponentsPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PageNotFoundComponent =
    /*#__PURE__*/
    function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-not-found/page-not-found.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page-not-found.component.css */
      "./src/app/components/page-not-found/page-not-found.component.css")).default]
    })], PageNotFoundComponent);
    /***/
  },

  /***/
  "./src/app/components/php/php.component.css":
  /*!**************************************************!*\
    !*** ./src/app/components/php/php.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPhpPhpComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGhwL3BocC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/php/php.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/php/php.component.ts ***!
    \*************************************************/

  /*! exports provided: PhpComponent */

  /***/
  function srcAppComponentsPhpPhpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhpComponent", function () {
      return PhpComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var PhpComponent =
    /*#__PURE__*/
    function () {
      function PhpComponent( // private project:ProjectsService,
      fire) {
        _classCallCheck(this, PhpComponent);

        this.fire = fire;
        this.proj = [];
      }

      _createClass(PhpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          // this.project.getProjects(2).subscribe(data=>{this.proj=data});
          this.fire.collection('projects').get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            data.forEach(function (element) {
              if (element.data().id == 2) {
                _this8.proj.push({
                  name: element.data().name,
                  url: element.data().url,
                  description: element.data().description,
                  img: element.data().img
                });
              }
            });
          })).subscribe(function (a) {// console.log(a);
          });
        }
      }]);

      return PhpComponent;
    }();

    PhpComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PhpComponent.prototype, "proj", void 0);
    PhpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-php',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./php.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/php/php.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./php.component.css */
      "./src/app/components/php/php.component.css")).default]
    })], PhpComponent);
    /***/
  },

  /***/
  "./src/app/components/projects/projects.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/projects/projects.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProjectsProjectsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n\r\n\r\n\r\n @media (max-width:600px) {\r\n.aph{\r\n    display: none;\r\n}\r\n\r\n*{\r\n    margin: 0;    \r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\nbody{\r\nwidth: 200px !important;\r\nbox-sizing: content-box !important;\r\nmargin-left: 45px;\r\noverflow: hidden;\r\npadding-right: 150px;\r\n}\r\n/* .container{\r\n    width: 200pxl !important;\r\n    box-sizing: content-box !important;\r\n    padding-right: 150px;\r\n    \r\n} */\r\n\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0NBS0M7QUFDRDtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLGtDQUFrQztBQUNsQyxpQkFBaUI7QUFDakIsZ0JBQWdCO0FBQ2hCLG9CQUFvQjtBQUNwQjtBQUNBOzs7OztHQUtHOztDQUVGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuXHJcblxyXG4gQG1lZGlhIChtYXgtd2lkdGg6NjAwcHgpIHtcclxuLmFwaHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbip7XHJcbiAgICBtYXJnaW46IDA7ICAgIFxyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuYm9keXtcclxud2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbmJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XHJcbm1hcmdpbi1sZWZ0OiA0NXB4O1xyXG5vdmVyZmxvdzogaGlkZGVuO1xyXG5wYWRkaW5nLXJpZ2h0OiAxNTBweDtcclxufVxyXG4vKiAuY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDIwMHB4bCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1MHB4O1xyXG4gICAgXHJcbn0gKi9cclxuXHJcbiB9Il19 */";
    /***/
  },

  /***/
  "./src/app/components/projects/projects.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/projects/projects.component.ts ***!
    \***********************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppComponentsProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProjectsComponent =
    /*#__PURE__*/
    function () {
      function ProjectsComponent() {
        _classCallCheck(this, ProjectsComponent);
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projects',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projects.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projects.component.css */
      "./src/app/components/projects/projects.component.css")).default]
    })], ProjectsComponent);
    /***/
  },

  /***/
  "./src/app/components/side-bar/side-bar.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/side-bar/side-bar.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSideBarSideBarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    list-style: none;\r\n    text-decoration: none;\r\n    font-family: 'Josefin Sans', sans-serif;\r\n  }\r\n  \r\n  body{\r\n     background-color: #f3f5f9;\r\n   \r\n  }\r\n  \r\n  .wrapper{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    position: relative;\r\n  }\r\n  \r\n  .wrapper .sidebar{\r\n    width: 200px;\r\n    height: 100%;\r\n    background: #4b4276;\r\n    \r\n    padding: 30px 0px;\r\n    position: fixed;\r\n  }\r\n  \r\n  .wrapper .sidebar h2{\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    margin-bottom: 30px;\r\n  }\r\n  \r\n  .wrapper .sidebar ul li{\r\n    padding: 15px;\r\n    border-bottom: 1px solid #bdb8d7;\r\n    border-bottom: 1px solid rgba(0,0,0,0.05);\r\n    border-top: 1px solid rgba(255,255,255,0.05);\r\n  }\r\n  \r\n  .wrapper .sidebar ul li a{\r\n    color: #bdb8d7;\r\n    display: block;\r\n  }\r\n  \r\n  .wrapper .sidebar ul li a .fas{\r\n    width: 25px;\r\n  }\r\n  \r\n  .wrapper .sidebar ul li:hover{\r\n    background-color: #594f8d;\r\n  }\r\n  \r\n  .wrapper .sidebar ul li:hover a{\r\n    color: #fff;\r\n  }\r\n  \r\n  .wrapper .sidebar .social_media{\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 50%;\r\n    -webkit-transform: translateX(-50%);\r\n            transform: translateX(-50%);\r\n    display: -webkit-box;\r\n    display: flex;\r\n  }\r\n  \r\n  .wrapper .sidebar .social_media a{\r\n    display: block;\r\n    width: 40px;\r\n    background: #594f8d;\r\n    height: 40px;\r\n    line-height: 45px;\r\n    text-align: center;\r\n    margin: 0 5px;\r\n    color: #bdb8d7;\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n  }\r\n  \r\n  .wrapper .main_content{\r\n    width: 100%;\r\n    margin-left: 200px;\r\n  }\r\n  \r\n  .wrapper .main_content .header{\r\n    padding: 20px;\r\n    background: #fff;\r\n    color: #717171;\r\n    border-bottom: 1px solid #e0e4e8;\r\n  }\r\n  \r\n  .wrapper .main_content .info{\r\n    margin: 20px;\r\n    color: #717171;\r\n    line-height: 25px;\r\n  }\r\n  \r\n  .wrapper .main_content .info div{\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  @media (max-width:600px) {\r\n .sidebar{\r\n   width: 100px !important;\r\n }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlLWJhci9zaWRlLWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQix1Q0FBdUM7RUFDekM7O0VBRUE7S0FDRyx5QkFBeUI7O0VBRTVCOztFQUVBO0lBQ0Usb0JBQWE7SUFBYixhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7O0lBRW5CLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGdDQUFnQztJQUNoQyx5Q0FBeUM7SUFDekMsNENBQTRDO0VBQzlDOztFQUVBO0lBQ0UsY0FBYztJQUNkLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLG9CQUFhO0lBQWIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGNBQWM7SUFDZCwyQkFBMkI7SUFDM0IsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGdDQUFnQztFQUNsQzs7RUFFQTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0NBQ0Q7R0FDRSx1QkFBdUI7Q0FDekI7RUFDQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1iYXIvc2lkZS1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIGJvZHl7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjVmOTtcclxuICAgXHJcbiAgfVxyXG4gIFxyXG4gIC53cmFwcGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLndyYXBwZXIgLnNpZGViYXJ7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNGI0Mjc2O1xyXG4gICAgXHJcbiAgICBwYWRkaW5nOiAzMHB4IDBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICB9XHJcbiAgXHJcbiAgLndyYXBwZXIgLnNpZGViYXIgaDJ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuICBcclxuICAud3JhcHBlciAuc2lkZWJhciB1bCBsaXtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JkYjhkNztcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMDUpO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7XHJcbiAgfSAgICBcclxuICBcclxuICAud3JhcHBlciAuc2lkZWJhciB1bCBsaSBhe1xyXG4gICAgY29sb3I6ICNiZGI4ZDc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLndyYXBwZXIgLnNpZGViYXIgdWwgbGkgYSAuZmFze1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC53cmFwcGVyIC5zaWRlYmFyIHVsIGxpOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU5NGY4ZDtcclxuICB9XHJcbiAgICAgIFxyXG4gIC53cmFwcGVyIC5zaWRlYmFyIHVsIGxpOmhvdmVyIGF7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgIFxyXG4gIC53cmFwcGVyIC5zaWRlYmFyIC5zb2NpYWxfbWVkaWF7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICBcclxuICAud3JhcHBlciAuc2lkZWJhciAuc29jaWFsX21lZGlhIGF7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzU5NGY4ZDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxuICAgIGNvbG9yOiAjYmRiOGQ3O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLndyYXBwZXIgLm1haW5fY29udGVudHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gIH1cclxuICBcclxuICAud3JhcHBlciAubWFpbl9jb250ZW50IC5oZWFkZXJ7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGNvbG9yOiAjNzE3MTcxO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGU0ZTg7XHJcbiAgfVxyXG4gIFxyXG4gIC53cmFwcGVyIC5tYWluX2NvbnRlbnQgLmluZm97XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBjb2xvcjogIzcxNzE3MTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gIH1cclxuICBcclxuICAud3JhcHBlciAubWFpbl9jb250ZW50IC5pbmZvIGRpdntcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDo2MDBweCkge1xyXG4gLnNpZGViYXJ7XHJcbiAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gfVxyXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/side-bar/side-bar.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/side-bar/side-bar.component.ts ***!
    \***********************************************************/

  /*! exports provided: SideBarComponent */

  /***/
  function srcAppComponentsSideBarSideBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideBarComponent", function () {
      return SideBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SideBarComponent =
    /*#__PURE__*/
    function () {
      function SideBarComponent() {
        _classCallCheck(this, SideBarComponent);

        this.title = 'Elis';
      }

      _createClass(SideBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SideBarComponent;
    }();

    SideBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-side-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./side-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/side-bar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./side-bar.component.css */
      "./src/app/components/side-bar/side-bar.component.css")).default]
    })], SideBarComponent);
    /***/
  },

  /***/
  "./src/app/components/sign-in/sign-in.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/components/sign-in/sign-in.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSignInSignInComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/sign-in/sign-in.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/sign-in/sign-in.component.ts ***!
    \*********************************************************/

  /*! exports provided: SignInComponent */

  /***/
  function srcAppComponentsSignInSignInComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInComponent", function () {
      return SignInComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SignInComponent =
    /*#__PURE__*/
    function () {
      function SignInComponent() {
        _classCallCheck(this, SignInComponent);
      }

      _createClass(SignInComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignInComponent;
    }();

    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-in',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign-in.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-in/sign-in.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sign-in.component.css */
      "./src/app/components/sign-in/sign-in.component.css")).default]
    })], SignInComponent);
    /***/
  },

  /***/
  "./src/app/components/topnav/topnav.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/topnav/topnav.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTopnavTopnavComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9wbmF2L3RvcG5hdi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/topnav/topnav.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/topnav/topnav.component.ts ***!
    \*******************************************************/

  /*! exports provided: TopnavComponent */

  /***/
  function srcAppComponentsTopnavTopnavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopnavComponent", function () {
      return TopnavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TopnavComponent =
    /*#__PURE__*/
    function () {
      function TopnavComponent() {
        _classCallCheck(this, TopnavComponent);

        this.title = 'Elis Protfolio';
      }

      _createClass(TopnavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TopnavComponent;
    }();

    TopnavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-topnav',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./topnav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/topnav/topnav.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./topnav.component.css */
      "./src/app/components/topnav/topnav.component.css")).default]
    })], TopnavComponent);
    /***/
  },

  /***/
  "./src/app/services/info/info.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/info/info.service.ts ***!
    \***********************************************/

  /*! exports provided: InfoService */

  /***/
  function srcAppServicesInfoInfoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoService", function () {
      return InfoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var InfoService =
    /*#__PURE__*/
    function () {
      function InfoService(info) {
        _classCallCheck(this, InfoService);

        this.info = info;
      }

      _createClass(InfoService, [{
        key: "getInfo",
        value: function getInfo() {
          return this.info.get('https://jsonplaceholder.typicode.com/comments');
        }
      }]);

      return InfoService;
    }();

    InfoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    InfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], InfoService);
    /***/
  },

  /***/
  "./src/app/services/projects/projects.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/projects/projects.service.ts ***!
    \*******************************************************/

  /*! exports provided: ProjectsService */

  /***/
  function srcAppServicesProjectsProjectsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsService", function () {
      return ProjectsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ProjectsService =
    /*#__PURE__*/
    function () {
      function ProjectsService(Http // private db: AngularFirestore
      ) {
        _classCallCheck(this, ProjectsService);

        this.Http = Http;
      }

      _createClass(ProjectsService, [{
        key: "getProjects",
        value: function getProjects(id) {
          console.log(id); // return this.db.collection('projects').valueChanges();

          return this.Http.get('http://localhost/forAn/info.php' + this.id);
        }
      }]);

      return ProjectsService;
    }();

    ProjectsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ProjectsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProjectsService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: true,
      firebaseConfig: {
        apiKey: "AIzaSyCucTeiwzfvlf_kIQFS9Uvg6nULSZ7UiRI",
        authDomain: "projects-5106d.firebaseapp.com",
        databaseURL: "https://projects-5106d.firebaseio.com",
        projectId: "projects-5106d",
        storageBucket: "projects-5106d.appspot.com",
        messagingSenderId: "466064480386",
        appId: "1:466064480386:web:68ff5dd6ef67354fc13c9b"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\angular\crm\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
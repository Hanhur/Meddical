// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/components/homeMenu/homeMenu.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../../images/home-bg.png":[["home-bg.0eb22ec1.png","src/images/home-bg.png"],"src/images/home-bg.png"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/images/book/calendar.svg":[function(require,module,exports) {
module.exports = "/calendar.c269ccf6.svg";
},{}],"src/images/book/team.svg":[function(require,module,exports) {
module.exports = "/team.f8e257b7.svg";
},{}],"src/images/book/cash.svg":[function(require,module,exports) {
module.exports = "/cash.9cc79dfe.svg";
},{}],"src/components/homeMenu/homeMenu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHomeMenu = getHomeMenu;
require("./homeMenu.css");
var _calendar = _interopRequireDefault(require("../../images/book/calendar.svg"));
var _team = _interopRequireDefault(require("../../images/book/team.svg"));
var _cash = _interopRequireDefault(require("../../images/book/cash.svg"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function getHomeMenu() {
  var section = document.createElement("section");
  section.className = "section-home";
  var container = document.createElement("div");
  container.className = "container";
  var homeBlock = document.createElement("div");
  homeBlock.className = "home-block";
  homeBlock.innerHTML = "\n        <p class=\"home-block-text\">Caring for Life</p>\n        <h1 class=\"home-block-title\">Leading the Way<br>in Medical Excellence</h1>\n        <button class=\"home-block-btn\">Our Services</button>\n    ";
  var bookBlock = document.createElement("div");
  bookBlock.className = "book-block";
  bookBlock.innerHTML = "\n            <div class=\"book-box book-1\">\n                <p class=\"book-text\">Book an Appointment</p>\n                <img class=\"book-img\" src=\"".concat(_calendar.default, "\">\n            </div>\n            <div class=\"book-box book-2\">\n                <p class=\"book-text\">Book an Appointment</p>\n                <img class=\"book-img\" src=\"").concat(_team.default, "\">\n            </div>\n            <div class=\"book-box book-3\">\n                <p class=\"book-text\">Book an Appointment</p>\n                <img class=\"book-img\" src=\"").concat(_cash.default, "\">\n            </div>\n        ");
  section.append(container);
  container.append(homeBlock, bookBlock);
  return section;
}
},{"./homeMenu.css":"src/components/homeMenu/homeMenu.css","../../images/book/calendar.svg":"src/images/book/calendar.svg","../../images/book/team.svg":"src/images/book/team.svg","../../images/book/cash.svg":"src/images/book/cash.svg"}],"src/images/arrow-right.svg":[function(require,module,exports) {
module.exports = "/arrow-right.b63a9d8d.svg";
},{}],"src/images/welcome-bg.png":[function(require,module,exports) {
module.exports = "/welcome-bg.30b488d3.png";
},{}],"src/components/welcomeHome/welcomeHome.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/welcomeHome/welcomeHome.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWelcomeHome = getWelcomeHome;
var _arrowRight = _interopRequireDefault(require("../../images/arrow-right.svg"));
var _welcomeBg = _interopRequireDefault(require("../../images/welcome-bg.png"));
require("./welcomeHome.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function getWelcomeHome() {
  var section = document.createElement("section");
  section.className = "section-welcome";
  var container = document.createElement("div");
  container.className = "container";
  var welcomeBlock = document.createElement("div");
  welcomeBlock.className = "welcome-block";
  welcomeBlock.innerHTML = "\n        <div class=\"welcome-box\">\n            <p class=\"welome-text\">Welcome to Meddical</p>\n            <h2 class=\"welcome-title\">A Great Place to Receive Care</h2>\n            <p class=\"welcome_text\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. \n                Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.\n            </p>\n            <div class=\"welcome_box\">\n                <p class=\"welcome__text\">Learn More</p>\n                <img class=\"welcome-img\" src=\"".concat(_arrowRight.default, "\">\n            </div>\n        </div>\n        <img class=\"welcome-bg\" src=\"").concat(_welcomeBg.default, "\">\n    ");
  section.append(container);
  container.append(welcomeBlock);
  return section;
}
},{"../../images/arrow-right.svg":"src/images/arrow-right.svg","../../images/welcome-bg.png":"src/images/welcome-bg.png","./welcomeHome.css":"src/components/welcomeHome/welcomeHome.css"}],"src/images/services/checkup.svg":[function(require,module,exports) {
module.exports = "/checkup.95367307.svg";
},{}],"src/images/services/cardiograma.svg":[function(require,module,exports) {
module.exports = "/cardiograma.9ca7f37a.svg";
},{}],"src/images/services/testing.svg":[function(require,module,exports) {
module.exports = "/testing.67518bcc.svg";
},{}],"src/images/services/blood-bank.svg":[function(require,module,exports) {
module.exports = "/blood-bank.85258c9b.svg";
},{}],"src/images/services/rectangle.svg":[function(require,module,exports) {
module.exports = "/rectangle.363d29d8.svg";
},{}],"src/images/services/images-1.png":[function(require,module,exports) {
module.exports = "/images-1.407a2661.png";
},{}],"src/images/services/images-2.png":[function(require,module,exports) {
module.exports = "/images-2.0caf7df2.png";
},{}],"src/components/services/services.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/services/services.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getServices = getServices;
var _checkup = _interopRequireDefault(require("../../images/services/checkup.svg"));
var _cardiograma = _interopRequireDefault(require("../../images/services/cardiograma.svg"));
var _testing = _interopRequireDefault(require("../../images/services/testing.svg"));
var _bloodBank = _interopRequireDefault(require("../../images/services/blood-bank.svg"));
var _rectangle = _interopRequireDefault(require("../../images/services/rectangle.svg"));
var _images = _interopRequireDefault(require("../../images/services/images-1.png"));
var _images2 = _interopRequireDefault(require("../../images/services/images-2.png"));
require("./services.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function getServices() {
  var section = document.createElement("section");
  section.className = "section-services";
  var container = document.createElement("div");
  container.className = "container";
  var servicesBlock = document.createElement("div");
  servicesBlock.className = "services-block";
  servicesBlock.innerHTML = "\n        <p class=\"services-text\">Care you can believe in</p>\n        <h2 class=\"services-title\">Our Services</h2>\n        <div class=\"services-box\">\n            <div class=\"services-all\">\n                <div class=\"services-chechup\">\n                    <img class=\"services-img\" src=\"".concat(_checkup.default, "\">\n                    <p class=\"services_text\">Free Checkup</p>\n                </div>\n                 <div class=\"services-chechup\">\n                    <img class=\"services-img\" src=\"").concat(_cardiograma.default, "\">\n                    <p class=\"services_text\">Cardiograma</p>\n                </div>\n                <div class=\"services-chechup\">\n                    <img class=\"services-img\" src=\"").concat(_testing.default, "\">\n                    <p class=\"services_text\">Dna Testing</p>\n                </div>\n                <div class=\"services-chechup\">\n                    <img class=\"services-img\" src=\"").concat(_bloodBank.default, "\">\n                    <p class=\"services_text\">Blood Bank</p>\n                </div>\n                <div class=\"services_chechup\"> \n                    <button class=\"services-btn\">View All</button>\n                </div>\n            </div>\n            <div class=\"services-patients\">\n                <p class=\"services-passion\">A passion for putting patients first.</p>\n                <ul class=\"services-list\">\n                    <li class=\"services-item\">\n                        <img class=\"services-rectangle-img\" src=\"").concat(_rectangle.default, "\">\n                        <p class=\"services-item-text\">A Passion for Healing</p>\n                    </li>\n                    <li class=\"services-item\">\n                        <img class=\"services-rectangle-img\" src=\"").concat(_rectangle.default, "\">\n                        <p class=\"services-item-text\">All our best</p>\n                    </li>\n                    <li class=\"services-item\">\n                        <img class=\"services-rectangle-img\" src=\"").concat(_rectangle.default, "\">\n                        <p class=\"services-item-text\">A Legacy of Excellence</p>\n                    </li>\n                    <li class=\"services-item\">\n                        <img class=\"services-rectangle-img\" src=\"").concat(_rectangle.default, "\">\n                        <p class=\"services-item-text\">5-Star Care</p>\n                    </li>\n                    <li class=\"services-item\">\n                        <img class=\"services-rectangle-img\" src=\"").concat(_rectangle.default, "\">\n                        <p class=\"services-item-text\">Believe in Us</p>\n                    </li>\n                    <li class=\"services-item\">\n                        <img class=\"services-rectangle-img\" src=\"").concat(_rectangle.default, "\">\n                        <p class=\"services-item-text\">Always Caring</p>\n                    </li>\n                </ul>\n                <p class=\"services_passion\">\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. \n                    Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. \n                    Velit nascetur proin massa in. Consequat faucibus porttitor enim et.\n                </p>\n                <p class=\"services_passion\">\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. \n                    Convallis felis vitae tortor augue. Velit nascetur proin massa in.\n                </p>\n            </div>\n            <div class=\"services-images\">\n                <img src=\"").concat(_images.default, "\">\n                <img src=\"").concat(_images2.default, "\">\n            </div>\n        </div>\n    ");
  section.append(container);
  container.append(servicesBlock);
  return section;
}
},{"../../images/services/checkup.svg":"src/images/services/checkup.svg","../../images/services/cardiograma.svg":"src/images/services/cardiograma.svg","../../images/services/testing.svg":"src/images/services/testing.svg","../../images/services/blood-bank.svg":"src/images/services/blood-bank.svg","../../images/services/rectangle.svg":"src/images/services/rectangle.svg","../../images/services/images-1.png":"src/images/services/images-1.png","../../images/services/images-2.png":"src/images/services/images-2.png","./services.css":"src/components/services/services.css"}],"src/images/specialties.svg":[function(require,module,exports) {
module.exports = "/specialties.a02c99b7.svg";
},{}],"src/components/specialties/specialties.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/specialties/specialties.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSpecialties = getSpecialties;
var _specialties = _interopRequireDefault(require("../../images/specialties.svg"));
require("./specialties.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function getSpecialties() {
  var section = document.createElement("section");
  section.className = "section-specialties";
  var container = document.createElement("div");
  container.className = "container";
  var specialtiesBlock = document.createElement("div");
  specialtiesBlock.className = "specialties-block";
  specialtiesBlock.innerHTML = "\n        <p class=\"specialties_text\">Always Caring</p>\n        <h2 class=\"specialties-title\">Our Specialties</h2>\n        <div class=\"specialties_box\">\n            <div class=\"specialties-box\">\n                <img class=\"specialties-img\" src=\"".concat(_specialties.default, "\">\n                <p class=\"specialties-text\">Neurology</p>\n            </div>\n            <div class=\"specialties-box\">\n                <img class=\"specialties-img\" src=\"").concat(_specialties.default, "\">\n                <p class=\"specialties-text\">Bones</p>\n            </div>\n            <div class=\"specialties-box\">\n                <img class=\"specialties-img\" src=\"").concat(_specialties.default, "\">\n                <p class=\"specialties-text\">Oncology</p>\n            </div>\n            <div class=\"specialties-box\">\n                <img class=\"specialties-img\" src=\"").concat(_specialties.default, "\">\n                <p class=\"specialties-text\">Otorhinolaryngology</p>\n            </div>\n            <div class=\"specialties-box\">\n                <img class=\"specialties-img\" src=\"").concat(_specialties.default, "\">\n                <p class=\"specialties-text\">Ophthalmology</p>\n            </div>\n            <div class=\"specialties-box\">\n                <img class=\"specialties-img\" src=\"").concat(_specialties.default, "\">\n                <p class=\"specialties-text\">Cardiovascular</p>\n            </div>\n            <div class=\"specialties-box\">\n                <img class=\"specialties-img\" src=\"").concat(_specialties.default, "\">\n                <p class=\"specialties-text\">Pulmonology</p>\n            </div>\n            <div class=\"specialties-box\">\n                <img class=\"specialties-img\" src=\"").concat(_specialties.default, "\">\n                <p class=\"specialties-text\">Renal Medicine</p>\n            </div>\n            <div class=\"specialties-box\">\n                <img class=\"specialties-img\" src=\"").concat(_specialties.default, "\">\n                <p class=\"specialties-text\">Gastroenterology</p>\n            </div>\n            <div class=\"specialties-box\">\n                <img class=\"specialties-img\" src=\"").concat(_specialties.default, "\">\n                <p class=\"specialties-text\">Urology</p>\n            </div>\n            <div class=\"specialties-box\">\n                <img class=\"specialties-img\" src=\"").concat(_specialties.default, "\">\n                <p class=\"specialties-text\">Dermatology</p>\n            </div>\n            <div class=\"specialties-box\">\n                <img class=\"specialties-img\" src=\"").concat(_specialties.default, "\">\n                <p class=\"specialties-text\">Gynaecology</p>\n            </div>\n        </div>\n    ");
  section.append(container);
  container.append(specialtiesBlock);
  return section;
}
},{"../../images/specialties.svg":"src/images/specialties.svg","./specialties.css":"src/components/specialties/specialties.css"}],"src/images/book-vector.svg":[function(require,module,exports) {
module.exports = "/book-vector.7ce14b28.svg";
},{}],"src/components/bookAppointment/bookAppointment.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../../images/book.bg.png":[["book.bg.957d345b.png","src/images/book.bg.png"],"src/images/book.bg.png"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/bookAppointment/bookAppointment.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBookAppointment = getBookAppointment;
var _bookVector = _interopRequireDefault(require("../../images/book-vector.svg"));
require("./bookAppointment.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function getBookAppointment() {
  var section = document.createElement("section");
  section.className = "section-book";
  var container = document.createElement("div");
  container.className = "container";
  var bookAppointmentBlock = document.createElement("div");
  bookAppointmentBlock.className = "book-appointment";
  bookAppointmentBlock.innerHTML = "\n        <div class=\"book-appointment-block\">\n            <h2 class=\"book-appointment-title\">Book an Appointment</h2>\n            <p class=\"book-appointment-text\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. \n                Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.\n            </p>\n        </div>\n        <div class=\"book-appointment-box\">\n            <form class=\"book-appointment-form\">\n                <div class=\"book-appointment_box\">\n                    <input class=\"book-appointment-input\" type=\"text\" placeholder=\"Name\">\n                </div>\n                <div class=\"book-appointment_box\">\n                    <button class=\"book-appointment_btn\" type=\"button\">Gender\n                        <img class=\"book-appointment-img\" src=\"".concat(_bookVector.default, "\" alt=\"Vector\">\n                    </button>\n                </div>\n                <div class=\"book-appointment_box\">\n                    <input class=\"book-appointment-input\" type=\"text\" placeholder=\"Email\">\n                </div>\n                <div class=\"book-appointment_box\">\n                    <input class=\"book-appointment-input\" type=\"text\" placeholder=\"Phone\">\n                </div>\n                <div class=\"book-appointment_box\">\n                    <button class=\"book-appointment_btn\" type=\"button\">Data\n                        <img class=\"book-appointment-img\" src=\"").concat(_bookVector.default, "\" alt=\"Vector\">\n                    </button>\n                </div>\n                <div class=\"book-appointment_box\">\n                    <button class=\"book-appointment_btn\" type=\"button\">Time\n                        <img class=\"book-appointment-img\" src=\"").concat(_bookVector.default, "\" alt=\"Vector\">\n                    </button>\n                </div>\n                <div class=\"book-appointment_box\">\n                    <button class=\"book-appointment_btn\" type=\"button\">Doctor\n                        <img class=\"book-appointment-img\" src=\"").concat(_bookVector.default, "\" alt=\"Vector\">\n                    </button>\n                </div>\n                <div class=\"book-appointment_box\">\n                    <button class=\"book-appointment_btn\" type=\"button\">Department\n                        <img class=\"book-appointment-img\" src=\"").concat(_bookVector.default, "\" alt=\"Vector\">\n                    </button>\n                </div>\n            </form>\n            <div class=\"book-textarea\">\n                <textarea class=\"book-appointment-textarea\" placeholder=\"Message\"></textarea>\n                <button class=\"book-appointment-btn\" type=\"submit\">SUBMIT</button>\n            </div>\n        </div>\n    ");
  section.append(container);
  container.append(bookAppointmentBlock);
  return section;
}
},{"../../images/book-vector.svg":"src/images/book-vector.svg","./bookAppointment.css":"src/components/bookAppointment/bookAppointment.css"}],"src/pages/pageHome/pageHome.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/pages/pageHome/pageHome.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPageHome = getPageHome;
var _homeMenu = require("../../components/homeMenu/homeMenu");
var _welcomeHome = require("../../components/welcomeHome/welcomeHome");
var _services = require("../../components/services/services");
var _specialties = require("../../components/specialties/specialties");
var _bookAppointment = require("../../components/bookAppointment/bookAppointment");
require("./pageHome.css");
var homeMenu = (0, _homeMenu.getHomeMenu)();
var welcomeHome = (0, _welcomeHome.getWelcomeHome)();
var services = (0, _services.getServices)();
var specialties = (0, _specialties.getSpecialties)();
var book = (0, _bookAppointment.getBookAppointment)();
function getPageHome() {
  var wrapper = document.createElement("div");
  wrapper.className = "wrapper";
  wrapper.append(homeMenu, welcomeHome, services, specialties, book);
  return wrapper;
}
},{"../../components/homeMenu/homeMenu":"src/components/homeMenu/homeMenu.js","../../components/welcomeHome/welcomeHome":"src/components/welcomeHome/welcomeHome.js","../../components/services/services":"src/components/services/services.js","../../components/specialties/specialties":"src/components/specialties/specialties.js","../../components/bookAppointment/bookAppointment":"src/components/bookAppointment/bookAppointment.js","./pageHome.css":"src/pages/pageHome/pageHome.css"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "43151" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;
function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }
  var id = bundles[bundles.length - 1];
  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }
    throw err;
  }
}
function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}
var bundleLoaders = {};
function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}
module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};
function loadBundle(bundle) {
  var id;
  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }
  if (bundles[bundle]) {
    return bundles[bundle];
  }
  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];
  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }
      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}
function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}
LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};
LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],0:[function(require,module,exports) {
var b=require("node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.load([]).then(function(){require("src/pages/pageHome/pageHome.js");});
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/pageHome.46aef0d8.js.map
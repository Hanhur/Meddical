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
})({"src/components/about/aboutHome/aboutHome.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../../../images/about-bg.png":[["about-bg.d31a0bfd.png","src/images/about-bg.png"],"src/images/about-bg.png"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/about/aboutHome/aboutHome.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAboutHome = getAboutHome;
require("./aboutHome.css");
function getAboutHome() {
  var section = document.createElement("section");
  section.className = "section-about";
  var aboutBlock = document.createElement("div");
  aboutBlock.className = "about-block";
  aboutBlock.innerHTML = "\n        <ul class=\"about-list\">\n            <li class=\"about-item\">\n                <a class=\"about-link\" href=\"/\">Home</a> /\n            </li>\n            <li class=\"about-item\">\n                <a class=\"about-link\" href=\"/about\">About</a>\n            </li>\n        </ul>\n        <p class=\"about-text\">About us</p>\n    ";
  section.append(aboutBlock);
  return section;
}
},{"./aboutHome.css":"src/components/about/aboutHome/aboutHome.css"}],"src/images/hospital.png":[function(require,module,exports) {
module.exports = "/hospital.70cca1c5.png";
},{}],"src/images/services/rectangle.svg":[function(require,module,exports) {
module.exports = "/rectangle.363d29d8.svg";
},{}],"src/components/about/aboutHospital/aboutHospital.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/about/aboutHospital/aboutHospital.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAboutHospital = getAboutHospital;
var _hospital = _interopRequireDefault(require("../../../images/hospital.png"));
var _rectangle = _interopRequireDefault(require("../../../images/services/rectangle.svg"));
require("./aboutHospital.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function getAboutHospital() {
  var section = document.createElement("section");
  section.className = "section-hospital";
  var aboutHospital = document.createElement("div");
  aboutHospital.className = "about-hospital";
  aboutHospital.innerHTML = "\n        <img class=\"hospital-img\" src=\"".concat(_hospital.default, "\">\n        <div class=\"hospital-box\">\n            <p class=\"hospital-text\">Welcome to Hospital name</p>\n            <h1 class=\"hospital-title\">Best Care for Your Good Health</h1>\n             <ul class=\"hospital-list\">\n                <li class=\"hospital-item\">\n                    <img class=\"hospital-rectangle-img\" src=\"").concat(_rectangle.default, "\">\n                    <p class=\"hospital-item-text\">A Passion for Healing</p>\n                </li>\n                <li class=\"hospital-item\">\n                    <img class=\"hospital-rectangle-img\" src=\"").concat(_rectangle.default, "\">\n                    <p class=\"hospital-item-text\">All our best</p>\n                </li>\n                <li class=\"hospital-item\">\n                    <img class=\"hospital-rectangle-img\" src=\"").concat(_rectangle.default, "\">\n                    <p class=\"hospital-item-text\">A Legacy of Excellence</p>\n                </li>\n                <li class=\"hospital-item\">\n                    <img class=\"hospital-rectangle-img\" src=\"").concat(_rectangle.default, "\">\n                    <p class=\"hospital-item-text\">5-Star Care</p>\n                </li>\n                <li class=\"hospital-item\">\n                    <img class=\"hospital-rectangle-img\" src=\"").concat(_rectangle.default, "\">\n                    <p class=\"hospital-item-text\">Believe in Us</p>\n                </li>\n                <li class=\"hospital-item\">\n                    <img class=\"hospital-rectangle-img\" src=\"").concat(_rectangle.default, "\">\n                    <p class=\"hospital-item-text\">Always Caring</p>\n                </li>\n            </ul>\n            <p class=\"hospital_passion\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. \n                Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. \n                Velit nascetur proin massa in. Consequat faucibus porttitor enim et.\n            </p>\n            <p class=\"hospital_passion\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. \n                Convallis felis vitae tortor augue. Velit nascetur proin massa in.\n            </p>\n        </div>\n    ");
  section.append(aboutHospital);
  return section;
}
},{"../../../images/hospital.png":"src/images/hospital.png","../../../images/services/rectangle.svg":"src/images/services/rectangle.svg","./aboutHospital.css":"src/components/about/aboutHospital/aboutHospital.css"}],"src/images/vector.svg":[function(require,module,exports) {
module.exports = "/vector.e216cf42.svg";
},{}],"src/components/about/aboutComment/aboutComment.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../../../images/testimonials.png":[["testimonials.813d1114.png","src/images/testimonials.png"],"src/images/testimonials.png"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/about/aboutComment/aboutComment.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAboutComment = getAboutComment;
var _vector = _interopRequireDefault(require("../../../images/vector.svg"));
require("./aboutComment.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function getAboutComment() {
  var section = document.createElement("section");
  section.className = "section-comment";
  var aboutComment = document.createElement("div");
  aboutComment.className = "about-comment";
  aboutComment.innerHTML = "\n        <img class=\"comment-img\" src=\"".concat(_vector.default, "\">\n        <p class=\"comment-text\">\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n            Quisque placerat scelerisque tortor ornare ornare. \n            Quisque placerat scelerisque felis vitae tortor augue. \n            Velit nascetur Consequat faucibus porttitor enim et.\n        </p>\n        <span class=\"comment-athor\">John Doe</span>\n    ");
  section.append(aboutComment);
  return section;
}
},{"../../../images/vector.svg":"src/images/vector.svg","./aboutComment.css":"src/components/about/aboutComment/aboutComment.css"}],"src/images/doctors/images1.png":[function(require,module,exports) {
module.exports = "/images1.2ca1384f.png";
},{}],"src/images/doctors/images2.png":[function(require,module,exports) {
module.exports = "/images2.3de9e8a4.png";
},{}],"src/images/doctors/images3.png":[function(require,module,exports) {
module.exports = "/images3.379a1b45.png";
},{}],"src/images/doctors/linkedln.svg":[function(require,module,exports) {
module.exports = "/linkedln.a215d400.svg";
},{}],"src/images/doctors/facebook.svg":[function(require,module,exports) {
module.exports = "/facebook.6a5b9146.svg";
},{}],"src/images/doctors/instagram.svg":[function(require,module,exports) {
module.exports = "/instagram.65b10378.svg";
},{}],"src/components/about/aboutDoctors/aboutDoctors.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/about/aboutDoctors/aboutDoctors.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAboutDoctors = getAboutDoctors;
var _images = _interopRequireDefault(require("../../../images/doctors/images1.png"));
var _images2 = _interopRequireDefault(require("../../../images/doctors/images2.png"));
var _images3 = _interopRequireDefault(require("../../../images/doctors/images3.png"));
var _linkedln = _interopRequireDefault(require("../../../images/doctors/linkedln.svg"));
var _facebook = _interopRequireDefault(require("../../../images/doctors/facebook.svg"));
var _instagram = _interopRequireDefault(require("../../../images/doctors/instagram.svg"));
require("./aboutDoctors.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function getAboutDoctors() {
  var section = document.createElement("section");
  section.className = "section-doctors";
  var doctorsBlock = document.createElement("div");
  doctorsBlock.className = "doctors-block";
  doctorsBlock.innerHTML = "\n        <p class=\"doctors-text\">Trusted Care</p>\n        <h2 class=\"doctors-title\">Our Doctors</h2>\n        <div class=\"doctors-inner\">\n            <div class=\"doctors-box\">\n                <img class=\"doctors-img\" src=\"".concat(_images.default, "\" alt=\"\">\n                <p class=\"docrors-box-text\">Doctor\u2019s Name</p>\n                <h3 class=\"docrors-box-title\">Neurology</h3>\n                <div class=\"doctors-social\">\n                    <ul class=\"doctors-list\">\n                        <li class=\"doctors-item\">\n                            <a class=\"doctors-link\" href=\"#\">\n                                <img class=\"doctors-img\" src=\"").concat(_linkedln.default, "\" alt=\"Linkedln\">\n                            </a>\n                        </li>\n                        <li class=\"doctors-item\">\n                            <a class=\"doctors-link\" href=\"#\">\n                                <img class=\"doctors-img\" src=\"").concat(_facebook.default, "\" alt=\"Facebook\">\n                            </a>\n                        </li>\n                        <li class=\"doctors-item\">\n                            <a class=\"doctors-link\" href=\"#\">\n                                <img class=\"doctors-img\" src=\"").concat(_instagram.default, "\" alt=\"Instagram\">\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n                <button class=\"doctors-btn\">View Profile</button>\n            </div>\n            <div class=\"doctors-box\">\n                <img class=\"doctors-img\" src=\"").concat(_images2.default, "\" alt=\"\">\n                <p class=\"docrors-box-text\">Doctor\u2019s Name</p>\n                <h3 class=\"docrors-box-title\">Neurology</h3>\n                <div class=\"doctors-social\">\n                    <ul class=\"doctors-list\">\n                        <li class=\"doctors-item\">\n                            <a class=\"doctors-link\" href=\"#\">\n                                <img class=\"doctors-img\" src=\"").concat(_linkedln.default, "\" alt=\"Linkedln\">\n                            </a>\n                        </li>\n                        <li class=\"doctors-item\">\n                            <a class=\"doctors-link\" href=\"#\">\n                                <img class=\"doctors-img\" src=\"").concat(_facebook.default, "\" alt=\"Facebook\">\n                            </a>\n                        </li>\n                        <li class=\"doctors-item\">\n                            <a class=\"doctors-link\" href=\"#\">\n                                <img class=\"doctors-img\" src=\"").concat(_instagram.default, "\" alt=\"Instagram\">\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n                <button class=\"doctors-btn\">View Profile</button>\n            </div>\n            <div class=\"doctors-box\">\n                <img class=\"doctors-img\" src=\"").concat(_images3.default, "\" alt=\"\">\n                <p class=\"docrors-box-text\">Doctor\u2019s Name</p>\n                <h3 class=\"docrors-box-title\">Neurology</h3>\n                <div class=\"doctors-social\">\n                    <ul class=\"doctors-list\">\n                        <li class=\"doctors-item\">\n                            <a class=\"doctors-link\" href=\"#\">\n                                <img class=\"doctors-img\" src=\"").concat(_linkedln.default, "\" alt=\"Linkedln\">\n                            </a>\n                        </li>\n                        <li class=\"doctors-item\">\n                            <a class=\"doctors-link\" href=\"#\">\n                                <img class=\"doctors-img\" src=\"").concat(_facebook.default, "\" alt=\"Facebook\">\n                            </a>\n                        </li>\n                        <li class=\"doctors-item\">\n                            <a class=\"doctors-link\" href=\"#\">\n                                <img class=\"doctors-img\" src=\"").concat(_instagram.default, "\" alt=\"Instagram\">\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n                <button class=\"doctors-btn\">View Profile</button>\n            </div>\n        </div>\n    ");
  section.append(doctorsBlock);
  return section;
}
},{"../../../images/doctors/images1.png":"src/images/doctors/images1.png","../../../images/doctors/images2.png":"src/images/doctors/images2.png","../../../images/doctors/images3.png":"src/images/doctors/images3.png","../../../images/doctors/linkedln.svg":"src/images/doctors/linkedln.svg","../../../images/doctors/facebook.svg":"src/images/doctors/facebook.svg","../../../images/doctors/instagram.svg":"src/images/doctors/instagram.svg","./aboutDoctors.css":"src/components/about/aboutDoctors/aboutDoctors.css"}],"src/images/newsInformation/images.png":[function(require,module,exports) {
module.exports = "/images.8d9e5ba7.png";
},{}],"src/images/newsInformation/eye.svg":[function(require,module,exports) {
module.exports = "/eye.2c2e8edd.svg";
},{}],"src/images/newsInformation/heart.svg":[function(require,module,exports) {
module.exports = "/heart.1829f8ec.svg";
},{}],"src/components/about/aboutNews/aboutNews.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/about/aboutNews/aboutNews.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAboutNews = getAboutNews;
var _images = _interopRequireDefault(require("../../../images/newsInformation/images.png"));
var _eye = _interopRequireDefault(require("../../../images/newsInformation/eye.svg"));
var _heart = _interopRequireDefault(require("../../../images/newsInformation/heart.svg"));
require("./aboutNews.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function getAboutNews() {
  var section = document.createElement("section");
  section.className = "section-news";
  var newsBlock = document.createElement("div");
  newsBlock.className = "news-block";
  newsBlock.innerHTML = "\n        <p class=\"news-block-text\">Better information, Better health</p>\n        <h2 class=\"news-block-title\">News</h2>\n        <div class=\"news-inner\">\n            <div class=\"news-box\">\n                <img class=\"news-img\" src=\"".concat(_images.default, "\">\n                <div class=\"news-comment\">\n                    <p class=\"news-comment-text\">Monday 05, September 2021 | By Author</p>\n                    <p class=\"news-comment_text\">This Article\u2019s Title goes Here, but not too long.</p>\n                    <div class=\"news-rating\">\n                        <img class=\"news-img\" src=\"").concat(_eye.default, "\">\n                        <span class=\"news-span\">68</span>\n                        <img class=\"news-img\" src=\"").concat(_heart.default, "\">\n                        <span class=\"news-span\">86</span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"news-box\">\n                <img class=\"news-img\" src=\"").concat(_images.default, "\">\n                <div class=\"news-comment\">\n                    <p class=\"news-comment-text\">Monday 05, September 2021 | By Author</p>\n                    <p class=\"news-comment_text\">This Article\u2019s Title goes Here, but not too long.</p>\n                    <div class=\"news-rating\">\n                        <img class=\"news-img\" src=\"").concat(_eye.default, "\">\n                        <span class=\"news-span\">68</span>\n                        <img class=\"news-img\" src=\"").concat(_heart.default, "\">\n                        <span class=\"news-span\">86</span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"news-box\">\n                <img class=\"news-img\" src=\"").concat(_images.default, "\">\n                <div class=\"news-comment\">\n                    <p class=\"news-comment-text\">Monday 05, September 2021 | By Author</p>\n                    <p class=\"news-comment_text\">This Article\u2019s Title goes Here, but not too long.</p>\n                    <div class=\"news-rating\">\n                        <img class=\"news-img\" src=\"").concat(_eye.default, "\">\n                        <span class=\"news-span\">68</span>\n                        <img class=\"news-img\" src=\"").concat(_heart.default, "\">\n                        <span class=\"news-span\">86</span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"news-box\">\n                <img class=\"news-img\" src=\"").concat(_images.default, "\">\n                <div class=\"news-comment\">\n                    <p class=\"news-comment-text\">Monday 05, September 2021 | By Author</p>\n                    <p class=\"news-comment_text\">This Article\u2019s Title goes Here, but not too long.</p>\n                    <div class=\"news-rating\">\n                        <img class=\"news-img\" src=\"").concat(_eye.default, "\">\n                        <span class=\"news-span\">68</span>\n                        <img class=\"news-img\" src=\"").concat(_heart.default, "\">\n                        <span class=\"news-span\">86</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ");
  section.append(newsBlock);
  return section;
}
},{"../../../images/newsInformation/images.png":"src/images/newsInformation/images.png","../../../images/newsInformation/eye.svg":"src/images/newsInformation/eye.svg","../../../images/newsInformation/heart.svg":"src/images/newsInformation/heart.svg","./aboutNews.css":"src/components/about/aboutNews/aboutNews.css"}],"src/images/contact/phone.svg":[function(require,module,exports) {
module.exports = "/phone.b07cb107.svg";
},{}],"src/images/contact/location.svg":[function(require,module,exports) {
module.exports = "/location.7c36a89f.svg";
},{}],"src/images/contact/email.svg":[function(require,module,exports) {
module.exports = "/email.50ec0939.svg";
},{}],"src/images/contact/hours.svg":[function(require,module,exports) {
module.exports = "/hours.c922882b.svg";
},{}],"src/components/about/aboutContact/aboutContact.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/about/aboutContact/aboutContact.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAboutContact = getAboutContact;
var _phone = _interopRequireDefault(require("../../../images/contact/phone.svg"));
var _location = _interopRequireDefault(require("../../../images/contact/location.svg"));
var _email = _interopRequireDefault(require("../../../images/contact/email.svg"));
var _hours = _interopRequireDefault(require("../../../images/contact/hours.svg"));
require("./aboutContact.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function getAboutContact() {
  var section = document.createElement("section");
  section.className = "section-contact";
  var contactBlock = document.createElement("div");
  contactBlock.className = "contact-block";
  contactBlock.innerHTML = "\n        <p class=\"contact-block-text\">Get in touch</p>\n        <h2 class=\"contact-block-title\">Contact</h2>\n        <div class=\"contact-inner\">\n            <div class=\"contact-box\">\n                <img class=\"contact-img\" src=\"".concat(_phone.default, "\">\n                <p class=\"contact-box-text\">Emergency</p>\n                <address class=\"contact-address\">\n                    <ul class=\"contact-list\">\n                        <li class=\"contact-item\">\n                            <a class=\"contact-link\" href=\"tel:237681812255\">(237) 681-812-255</a>\n                        </li>\n                        <li class=\"contact-item\">\n                            <a class=\"contact-link\" href=\"tel:237666331894\">(237) 666-331-894</a>\n                        </li>\n                    </ul>\n                </address>\n            </div>\n            <div class=\"contact-box\">\n                <img class=\"contact-img\" src=\"").concat(_location.default, "\">\n                <p class=\"contact-box-text\">Location</p>\n                <p class=\"contact-box_text\">0123 Some place</p>\n                <p class=\"contact-box_text\">9876 Some country</p>\n            </div>\n            <div class=\"contact-box\">\n                <img class=\"contact-img\" src=\"").concat(_email.default, "\">\n                <p class=\"contact-box-text\">Email</p>\n                <address class=\"contact-address\">\n                    <ul class=\"contact-list\">\n                        <li class=\"contact-item\">\n                            <a class=\"contact-link\" href=\"mailto:fildineeesoe@gmil.com\">fildineeesoe@gmil.com</a>\n                        </li>\n                        <li class=\"contact-item\">\n                            <a class=\"contact-link\" href=\"mailto:myebstudios@gmail.com\">myebstudios@gmail.com</a>\n                        </li>\n                    </ul>\n                </address>\n            </div>\n            <div class=\"contact-box\">\n                <img class=\"contact-img\" src=\"").concat(_hours.default, "\">\n                <p class=\"contact-box-text\">Working Hours</p>\n                <p class=\"contact-box_text\">Mon-Sat 09:00-20:00</p>\n                <p class=\"contact-box_text\">Sunday Emergency only</p>\n            </div>\n        </div>\n    ");
  section.append(contactBlock);
  return section;
}
},{"../../../images/contact/phone.svg":"src/images/contact/phone.svg","../../../images/contact/location.svg":"src/images/contact/location.svg","../../../images/contact/email.svg":"src/images/contact/email.svg","../../../images/contact/hours.svg":"src/images/contact/hours.svg","./aboutContact.css":"src/components/about/aboutContact/aboutContact.css"}],"src/pages/pageAbout/pageAbout.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/pages/pageAbout/pageAbout.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPageAbout = getPageAbout;
var _aboutHome = require("../../components/about/aboutHome/aboutHome");
var _aboutHospital = require("../../components/about/aboutHospital/aboutHospital");
var _aboutComment = require("../../components/about/aboutComment/aboutComment");
var _aboutDoctors = require("../../components/about/aboutDoctors/aboutDoctors");
var _aboutNews = require("../../components/about/aboutNews/aboutNews");
var _aboutContact = require("../../components/about/aboutContact/aboutContact");
require("./pageAbout.css");
var aboutHome = (0, _aboutHome.getAboutHome)();
var aboutHospital = (0, _aboutHospital.getAboutHospital)();
var aboutComment = (0, _aboutComment.getAboutComment)();
var aboutDoctors = (0, _aboutDoctors.getAboutDoctors)();
var aboutNews = (0, _aboutNews.getAboutNews)();
var aboutContact = (0, _aboutContact.getAboutContact)();
function getPageAbout() {
  var about = document.createElement("div");
  about.className = "about";
  about.append(aboutHome, aboutHospital, aboutComment, aboutDoctors, aboutNews, aboutContact);
  return about;
}
},{"../../components/about/aboutHome/aboutHome":"src/components/about/aboutHome/aboutHome.js","../../components/about/aboutHospital/aboutHospital":"src/components/about/aboutHospital/aboutHospital.js","../../components/about/aboutComment/aboutComment":"src/components/about/aboutComment/aboutComment.js","../../components/about/aboutDoctors/aboutDoctors":"src/components/about/aboutDoctors/aboutDoctors.js","../../components/about/aboutNews/aboutNews":"src/components/about/aboutNews/aboutNews.js","../../components/about/aboutContact/aboutContact":"src/components/about/aboutContact/aboutContact.js","./pageAbout.css":"src/pages/pageAbout/pageAbout.css"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "40133" + '/');
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
var b=require("node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.load([]).then(function(){require("src/pages/pageAbout/pageAbout.js");});
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/pageAbout.f29ece92.js.map
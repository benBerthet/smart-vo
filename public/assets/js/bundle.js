/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Home = __webpack_require__(1);
	
	var _Home2 = _interopRequireDefault(_Home);
	
	var _Vehicule = __webpack_require__(9);
	
	var _Vehicule2 = _interopRequireDefault(_Vehicule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import App from './app/App'
	__webpack_require__(14).polyfill();
	
	window.addEventListener('load', function () {
	  var getDevice = function getDevice() {
	    document.body.classList.remove('mobil');
	    if (document.body.clientWidth <= 960) {
	      document.body.classList.add('mobil');
	    }
	  };
	  var getCookie = function getCookie() {
	    return new Promise(function (resolve, reject) {
	      if (!sessionStorage.getItem('smartVoPageNumber')) {
	        createCookie();
	      }
	      resolve();
	    });
	  };
	  var createCookie = function createCookie() {
	    var sp1 = document.createElement('div');
	    // lui donne un attribut id appelé 'nouveauSpan'
	    sp1.setAttribute('id', 'layer');
	    // crée un peu de contenu pour cet élément.
	    var htmlCell = '\n        <div class="popin">\n          <span id="js-close-popin" class="close">X</span>\n          <div>\n            <strong>Utilisation de cookies.</strong>\n            <p>Daimler utilise des cookies afin d\'optimiser la conception de son site Internet et de l\'am\xE9liorer en continu. En continuant de consulter ce site Internet, vous acceptez l\'utilisation de cookies.</p>\n            <a href="#">Vous trouverez de plus amples informations dans les mentions sur les cookies.</a>\n          </div>\n        </div>\n      ';
	
	    var header = document.getElementsByTagName('header')[0];
	
	    // ajoute ce contenu au nouvel élément
	    sp1.innerHTML = htmlCell;
	    document.body.insertBefore(sp1, header);
	  };
	  var closeCookie = function closeCookie() {
	    // closeCookie()
	    getCookie().then(function () {
	      var closer = document.getElementById('js-close-popin');
	      closer.addEventListener('click', function () {
	        document.body.removeChild(document.getElementById('layer'));
	      });
	    }).catch(function () {});
	  };
	
	  getDevice();
	  closeCookie();
	
	  var supportsOrientationChange = 'onorientationchange' in window;
	  var orientationEvent = supportsOrientationChange ? 'orientationchange' : 'resize';
	  window.addEventListener(orientationEvent, function () {
	    setTimeout(function () {
	      getDevice();
	    }, 300);
	  }, false);
	  if (document.querySelector('body').id === 'home') {
	    var a = new _Home2.default();
	  }
	  if (document.querySelector('body').id === 'vehicule') {
	    var b = new _Vehicule2.default();
	  }
	});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _SearchBar = __webpack_require__(2);
	
	var _SearchBar2 = _interopRequireDefault(_SearchBar);
	
	var _SelectCustom = __webpack_require__(3);
	
	var _SelectCustom2 = _interopRequireDefault(_SelectCustom);
	
	var _Range = __webpack_require__(5);
	
	var _Range2 = _interopRequireDefault(_Range);
	
	var _Build = __webpack_require__(6);
	
	var _Build2 = _interopRequireDefault(_Build);
	
	var _Form = __webpack_require__(7);
	
	var _Form2 = _interopRequireDefault(_Form);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Home = function () {
	  function Home() {
	    _classCallCheck(this, Home);
	
	    this.initpage();
	    var newSelectCustom = new _SelectCustom2.default();
	    var newSearchBar = new _SearchBar2.default();
	    var newRange = new _Range2.default();
	    var newBuild = new _Build2.default();
	    var newForm = new _Form2.default();
	  }
	
	  _createClass(Home, [{
	    key: 'initpage',
	    value: function initpage() {
	      if (!sessionStorage.getItem('smartVoReturnToHome')) {
	        sessionStorage.setItem('smartVoPageNumber', 1);
	      }
	    }
	  }]);
	
	  return Home;
	}();
	
	exports.default = Home;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SearchBar = function () {
	  function SearchBar() {
	    _classCallCheck(this, SearchBar);
	
	    this.$searchBar = document.getElementById('search-bar');
	    this.searchBarPos = this.$searchBar.offsetTop;
	    this.$search = document.getElementById('search');
	    this.searchBarHeight = this.$search.offsetHeight + 'px';
	    this.$openSearchBar = document.getElementById('open-search');
	    this.$openSearchBarMobil = document.querySelector('.open-search-mobil');
	    this.$overlay = document.querySelector('.overlay');
	    this.$closeMobil = document.querySelector('.close-mobil');
	    this.$mainSearch = document.querySelector('.container-search');
	    this.$searchMobil = document.querySelector('.content-mobil');
	    this.calcHeightSearchMobil = this.$search.offsetHeight + this.$mainSearch.offsetHeight;
	    this.searchBarHeightMobil = this.calcHeightSearchMobil + 'px';
	    this.$search.style.height = '0';
	    this.$search.classList.add('hide');
	
	    this.checkStateSearchBar = this.checkStateSearchBar.bind(this);
	    this.checkStateSearchBarOpen = this.checkStateSearchBarOpen.bind(this);
	    this.checkStateSearchBarpos = this.checkStateSearchBarpos.bind(this);
	
	    this.openSearchBarMobil = this.openSearchBarMobil.bind(this);
	    this.closeSearchBarMobil = this.closeSearchBarMobil.bind(this);
	
	    this.init();
	  }
	
	  _createClass(SearchBar, [{
	    key: 'init',
	    value: function init() {
	      this.initSearchBar();
	      this.onWindowResize();
	    }
	  }, {
	    key: 'resetSearchBar',
	    value: function resetSearchBar() {
	      this.$search.classList.remove('hide');
	      this.$search.style.height = '';
	      this.$search.style.display = 'block';
	      this.$searchBar.classList.remove('fixe');
	      this.$searchBar.style.height = '';
	      this.$searchBar.style.display = 'block';
	      this.searchBarPos = this.$searchBar.offsetTop;
	      this.searchBarHeight = this.$search.offsetHeight + 'px';
	      this.calcHeightSearchMobil = this.$search.offsetHeight + this.$mainSearch.offsetHeight;
	      this.searchBarHeightMobil = this.calcHeightSearchMobil + 'px';
	    }
	  }, {
	    key: 'initSearchBar',
	    value: function initSearchBar() {
	      if (document.body.classList.contains('mobil')) {
	        this.$searchBar.style.height = 0;
	        this.closeSearchBarMobil();
	        this.addEventListenerMobil();
	      } else {
	        this.$searchBar.style.display = 'block';
	        this.closeSearchBar();
	        this.addEventListenerDeskTop();
	      }
	    }
	  }, {
	    key: 'onWindowResize',
	    value: function onWindowResize() {
	      var _this = this;
	
	      var supportsOrientationChange = 'onorientationchange' in window;
	      var orientationEvent = supportsOrientationChange ? 'orientationchange' : 'resize';
	      window.addEventListener(orientationEvent, function () {
	        setTimeout(function () {
	          _this.resetSearchBar();
	          if (document.body.classList.contains('mobil')) {
	            _this.removeEventListenerMobil();
	            _this.$searchBar.style.visibility = 'hidden';
	            _this.$searchBar.style.overflow = 'hidden';
	          } else {
	            _this.removeEventListenerDeskTop();
	            _this.$searchBar.style.visibility = 'visible';
	            _this.$searchBar.style.overflow = 'visible';
	          }
	          _this.initSearchBar();
	        }, 300);
	      });
	    }
	  }, {
	    key: 'addEventListenerMobil',
	    value: function addEventListenerMobil() {
	      this.$openSearchBarMobil.addEventListener('click', this.openSearchBarMobil);
	      this.$overlay.addEventListener('click', this.closeSearchBarMobil);
	      this.$closeMobil.addEventListener('click', this.closeSearchBarMobil);
	    }
	  }, {
	    key: 'removeEventListenerMobil',
	    value: function removeEventListenerMobil() {
	      this.$openSearchBarMobil.removeEventListener('click', this.openSearchBarMobil);
	      this.$overlay.removeEventListener('click', this.closeSearchBarMobil);
	      this.$closeMobil.removeEventListener('click', this.closeSearchBarMobil);
	      // this.$searchBar.removeEventListener('mouseleave', this.checkStateSearchBarOpen)
	      window.removeEventListener('scroll', this.checkStateSearchBarpos);
	    }
	  }, {
	    key: 'addEventListenerDeskTop',
	    value: function addEventListenerDeskTop() {
	      this.$openSearchBar.addEventListener('click', this.checkStateSearchBar);
	      // this.$searchBar.addEventListener('mouseleave', this.checkStateSearchBarOpen)
	      window.addEventListener('scroll', this.checkStateSearchBarpos);
	    }
	  }, {
	    key: 'removeEventListenerDeskTop',
	    value: function removeEventListenerDeskTop() {
	      this.$openSearchBar.removeEventListener('click', this.checkStateSearchBar);
	      // this.$searchBar.removeEventListener('mouseleave', this.checkStateSearchBarOpen)
	      window.removeEventListener('scroll', this.checkStateSearchBarpos);
	    }
	  }, {
	    key: 'checkStateSearchBar',
	    value: function checkStateSearchBar() {
	      if (this.$search.classList.contains('hide')) {
	        this.openSearchBar();
	      } else {
	        this.closeSearchBar();
	      }
	    }
	  }, {
	    key: 'checkStateSearchBarOpen',
	    value: function checkStateSearchBarOpen() {
	      if (!this.$search.classList.contains('hide')) {
	        this.closeSearchBar();
	      }
	    }
	  }, {
	    key: 'checkStateSearchBarpos',
	    value: function checkStateSearchBarpos() {
	      var posT = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
	      if (posT >= this.searchBarPos) {
	        this.$searchBar.classList.add('fixe');
	      } else {
	        this.$searchBar.classList.remove('fixe');
	      }
	    }
	  }, {
	    key: 'openSearchBar',
	    value: function openSearchBar() {
	      var _this2 = this;
	
	      this.$search.style.height = this.searchBarHeight;
	      this.$openSearchBar.children[0].textContent = '-';
	      setTimeout(function () {
	        _this2.$search.classList.remove('hide');
	      }, 300);
	    }
	  }, {
	    key: 'closeSearchBar',
	    value: function closeSearchBar() {
	      this.$search.classList.add('hide');
	      this.$search.style.height = '0';
	      this.$openSearchBar.children[0].textContent = '+';
	    }
	  }, {
	    key: 'openSearchBarMobil',
	    value: function openSearchBarMobil(e) {
	      e.preventDefault();
	      this.$search.style.height = '';
	      this.$searchBar.style.visibility = 'visible';
	      this.$searchBar.style.overflow = 'visible';
	      if (this.calcHeightSearchMobil > window.innerHeight) {
	        this.$searchMobil.style.height = window.innerHeight + 'px';
	        this.$searchBar.style.height = window.innerHeight + 'px';
	      } else {
	        this.$searchBar.style.height = this.searchBarHeightMobil;
	      }
	      this.$openSearchBar.children[0].textContent = '-';
	      this.$search.classList.remove('hide');
	    }
	  }, {
	    key: 'closeSearchBarMobil',
	    value: function closeSearchBarMobil() {
	      this.$searchBar.style.visibility = 'hidden';
	      this.$searchBar.style.overflow = 'hidden';
	      this.$searchBar.style.height = 0;
	      this.closeSearchBar();
	    }
	  }]);
	
	  return SearchBar;
	}();
	
	exports.default = SearchBar;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(4);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SelectCustom = function () {
	  function SelectCustom() {
	    _classCallCheck(this, SelectCustom);
	
	    var url = null;
	    this.data = null;
	    this.service = function () {
	      if ((0, _utils.isLocal)()) {
	        url = '../assets/service/filter.json';
	      } else {
	        url = '../assets/json/Filter.json';
	      }
	      return url;
	    };
	    this.arrKey = [];
	    this.arrEl = [];
	    this.$gearbox = document.querySelector('.list-gearbox');
	    this.$pointOfSale = document.querySelector('.list-pointOfSale ul');
	    this.$engine = document.querySelector('.list-engine');
	    this.$model = document.querySelector('.list-model');
	    // -
	    // BE CAREFUL ! this array order must be the same as the WS
	    // -
	    this.arrEl.push(this.$engine, this.$gearbox, this.$model, this.$pointOfSale);
	
	    this.selectCustom(this.service());
	  }
	
	  _createClass(SelectCustom, [{
	    key: 'buildSelect',
	    value: function buildSelect(url) {
	      var _this = this;
	
	      return new Promise(function (resolve, reject) {
	        (0, _utils.getList)(url).then(function (data) {
	          if (sessionStorage.getItem('smartVoReturnToHome')) {
	            (0, _utils.buildFromStorage)(data);
	          }
	          for (var key in data) {
	            _this.arrKey.push(key);
	          }
	          for (var i = 0; _this.arrKey.length > i; i++) {
	            _this.selectconstructor(data, _this.arrKey[i], _this.arrEl[i]);
	          }
	          resolve();
	        });
	      });
	    }
	  }, {
	    key: 'selectconstructor',
	    value: function selectconstructor(data, key, list) {
	      // console.log(data, key, list)
	      var firstLi = document.createElement('li');
	      firstLi.setAttribute('data-value', null);
	      switch (key) {
	        case 'Engine':
	          firstLi.innerHTML = 'Tous les carburants';
	          firstLi.setAttribute('data-name', 'Tous les carburants');
	          break;
	        case 'Model':
	          firstLi.innerHTML = 'Tous les modèles';
	          firstLi.setAttribute('data-name', 'Tous les modèles');
	          break;
	        case 'Gearbox':
	          firstLi.innerHTML = 'Toutes les boîtes';
	          firstLi.setAttribute('data-name', 'Toutes les boîtes');
	          break;
	        default:
	          firstLi.innerHTML = 'Tous les distributeurs';
	          firstLi.setAttribute('data-name', 'Tous les distributeurs');
	      }
	      list.appendChild(firstLi);
	      for (var i = 0; data[key].length > i; i++) {
	        var info = data[key][i];
	        var name = Object.keys(info)[0];
	        var value = Object.keys(info)[1];
	        var li = document.createElement('li');
	        li.setAttribute('data-value', info[value]);
	        li.setAttribute('data-name', info[name]);
	        if (key === 'Model') {
	          li.innerHTML = '- ' + info[name];
	        } else {
	          li.innerHTML = info[name];
	        }
	
	        list.appendChild(li);
	      }
	    }
	  }, {
	    key: 'selectCustom',
	    value: function selectCustom(url) {
	      this.buildSelect(url).then(function (data) {
	        var select = document.getElementsByClassName('block-select');
	
	        var _loop = function _loop() {
	          var thisSelect = select[i];
	          var findUl = thisSelect.querySelector('ul');
	          var findLi = thisSelect.querySelectorAll('li');
	          var findInput = thisSelect.querySelectorAll('input');
	          var findSpan = thisSelect.querySelectorAll('span');
	          var selectHeight = findUl.offsetHeight;
	          var thisValue = null;
	          var thisName = null;
	          // set data-height
	          findUl.setAttribute('data-height', selectHeight);
	          // set height to 0
	          findUl.style.height = '0';
	          // click event to open list
	          findSpan[0].addEventListener('click', function () {
	            // let h = findSpan[0].nextElementSibling.getAttribute('data-height')
	            var h = findUl.getAttribute('data-height');
	            // console.log(h)
	            findUl.style.height = h + 'px';
	            thisSelect.classList.add('open');
	          });
	          thisSelect.addEventListener('mouseleave', function () {
	            // console.log('out')
	            findUl.style.height = '0';
	            // attend fin de l'anim css
	            window.setTimeout(function () {
	              thisSelect.classList.remove('open');
	            }, 300);
	          });
	
	          var _loop2 = function _loop2() {
	            var pos = y;
	            findLi[y].addEventListener('click', function () {
	              thisValue = findLi[pos].getAttribute('data-value');
	              thisName = findLi[pos].getAttribute('data-name');
	              findInput[0].setAttribute('value', thisValue);
	              findSpan[0].textContent = thisName;
	              findUl.style.height = '0';
	              window.setTimeout(function () {
	                thisSelect.classList.remove('open');
	                if (findUl.classList.contains('list-model') && document.getElementById('search').classList.contains('hide') && document.getElementById('modele').getAttribute('value').length > 0) {
	                  (0, _utils.clearCell)();
	                  (0, _utils.checkForm)(_utils.wsGetVehicles, 1, false);
	                }
	              }, 300);
	            });
	          };
	
	          for (y = 0; y < findLi.length; y++) {
	            _loop2();
	          }
	        };
	
	        for (var i = 0; i < select.length; i++) {
	          var y;
	
	          _loop();
	        }
	      });
	    }
	  }]);
	
	  return SelectCustom;
	}();
	
	exports.default = SelectCustom;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var isLoading = false;
	var wsGetVehicles = '../vehicle/getvehicles/';
	
	function docHeight() {
	  var pageHeight = document.body.offsetHeight;
	  return pageHeight;
	}
	function getPage() {
	  var pageNum = sessionStorage.getItem('smartVoPageNumber');
	  return parseInt(pageNum);
	}
	function isLocal() {
	  var hostName = window.location.hostname;
	  if (hostName === 'localhost' || hostName === 'demo.proximity.fr') {
	    return true;
	  } else {
	    return false;
	  }
	}
	function getList(url) {
	  var request = new XMLHttpRequest();
	  return new Promise(function (resolve, reject) {
	    request.open('GET', url, true);
	
	    request.onload = function () {
	      if (request.status >= 200 && request.status < 400) {
	        // Success!
	        var data = JSON.parse(request.responseText);
	        resolve(data);
	      } else {
	        var data2 = JSON.parse(JSON.stringify(request.responseText));
	        if (isLocal()) {
	          resolve(data2);
	        } else {
	          reject('GET ERREUR 2');
	        }
	      }
	    };
	
	    request.onerror = function () {
	      // There was a connection error of some sort
	      reject('GET ERREUR');
	    };
	
	    request.send();
	  });
	}
	function postList(valArray, url) {
	  var request = new XMLHttpRequest();
	  return new Promise(function (resolve, reject) {
	    request.open('POST', url, true);
	    request.setRequestHeader('Content-type', 'application/json');
	
	    request.onreadystatechange = function () {
	      // Call a function when the state changes.
	      // console.log(request.response.length)
	      if (request.responseText.length > 0) {
	        var data = JSON.parse(request.responseText);
	        resolve(data);
	      } /* else {
	        reject('Post ERREUR 2')
	        } */
	      /* if (request.status === 200) {
	        if (request.readyState === 4) {
	          let data = JSON.parse(request.responseText)
	          resolve(data)
	        } else {
	          // console.log(request, request.status, request.readyState)
	          reject('Post ERREUR 2')
	        }
	      } */
	    };
	
	    request.send(JSON.stringify(valArray));
	  });
	}
	/* CONSTRUCTION DU LA LISTE VEHICULE */
	function checkForm(url, pageNumber, returnToHome) {
	  var valArray = {};
	  var $inputModel = document.getElementById('modele');
	  var $inputLowerPrice = document.getElementById('lower-price-value');
	  var $inputUpperPrice = document.getElementById('upper-price-value');
	  var $inputCarburant = document.getElementById('carburant');
	  var $inputLowerKm = document.getElementById('lower-km-value');
	  var $inputUpperKm = document.getElementById('upper-km-value');
	  var $inputDistributeur = document.getElementById('distributeur');
	  var $inputBoite = document.getElementById('boite');
	  var $inputReference = document.getElementById('reference');
	  var modelVal = $inputModel.getAttribute('value');
	  var lowerPriceVal = $inputLowerPrice.getAttribute('value').replace('€', '').replace(/ /g, '');
	  var upperPriceVal = $inputUpperPrice.getAttribute('value').replace('€', '').replace(/ /g, '');
	  var carburantVal = $inputCarburant.getAttribute('value');
	  var lowerKmVal = $inputLowerKm.getAttribute('value').replace('km', '').replace(/ /g, '');
	  var upperKmVal = $inputUpperKm.getAttribute('value').replace('km', '').replace(/ /g, '');
	  var distributeurVal = $inputDistributeur.getAttribute('value');
	  var boiteVal = $inputBoite.getAttribute('value');
	  var referenceVal = $inputReference.value;
	  // console.log(modelVal)
	  if (referenceVal.length === 0) {
	    // console.log('A')
	    valArray = {
	      'ModelId': modelVal,
	      'PriceMin': parseInt(lowerPriceVal),
	      'PriceMax': parseInt(upperPriceVal),
	      'EngineId': carburantVal,
	      'GearboxId': boiteVal,
	      'PointOfSaleId': distributeurVal,
	      'VehicleReference': '',
	      'MileageMin': parseInt(lowerKmVal),
	      'MileageMax': parseInt(upperKmVal),
	      'PageNumber': parseInt(pageNumber),
	      'ReturnToHome': returnToHome
	    };
	    sendValue(valArray, url);
	  } else {
	    // console.log('B')
	    valArray = {
	      'ModelId': '',
	      'PriceMin': '',
	      'PriceMax': '',
	      'EngineId': '',
	      'GearboxId': '',
	      'PointOfSaleId': '',
	      'VehicleReference': referenceVal,
	      'MileageMin': '',
	      'MileageMax': '',
	      'PageNumber': parseInt(pageNumber),
	      'ReturnToHome': returnToHome
	    };
	    checkRef(referenceVal, valArray, url);
	  }
	  if (!sessionStorage.getItem('smartVoReturnToHome')) {
	    sessionStorage.setItem('smartVoSearch', JSON.stringify(valArray));
	  }
	}
	function buildFromStorage(list) {
	  getValueStorage().then(function (data) {
	    for (var key in list) {
	      var inputId = void 0,
	          _list = void 0,
	          dataValue = void 0;
	      switch (key) {
	        case 'Engine':
	          inputId = document.getElementById('carburant');
	          _list = document.querySelector('.list-engine');
	          dataValue = data.EngineId;
	          customSelect(inputId, _list, dataValue);
	          break;
	        case 'Gearbox':
	          inputId = document.getElementById('boite');
	          _list = document.querySelector('.list-gearbox');
	          dataValue = data.GearboxId;
	          customSelect(inputId, _list, dataValue);
	          break;
	        case 'Model':
	          inputId = document.getElementById('modele');
	          _list = document.querySelector('.list-model');
	          dataValue = data.ModelId;
	          customSelect(inputId, _list, dataValue);
	          break;
	        case 'PointOfSale':
	          inputId = document.getElementById('distributeur');
	          _list = document.querySelector('.list-pointOfSale');
	          dataValue = data.PointOfSaleId;
	          customSelect(inputId, _list, dataValue);
	          break;
	      }
	    }
	  });
	}
	function customSelect(input, list, dataValue) {
	  var parent = input.parentNode;
	  var block = parent.querySelectorAll('li');
	  var span = parent.querySelector('span');
	  for (var i = 0; block.length > i; i++) {
	    var val = block[i].getAttribute('data-value');
	    var name = block[i].getAttribute('data-name');
	    if (val === dataValue) {
	      span.innerHTML = name;
	    }
	  }
	}
	function getValueStorage() {
	  return new Promise(function (resolve, reject) {
	    var search = JSON.parse(sessionStorage.smartVoSearch);
	    var storageModel = search.ModelId;
	    var storageEngine = search.EngineId;
	    var storageGear = search.GearboxId;
	    var storageSaler = search.PointOfSaleId;
	    var storageRef = search.VehicleReference;
	    var $inputModel = document.getElementById('modele');
	    var $inputCarburant = document.getElementById('carburant');
	    var $inputDistributeur = document.getElementById('distributeur');
	    var $inputBoite = document.getElementById('boite');
	    var $inputReference = document.getElementById('reference');
	
	    $inputModel.setAttribute('value', storageModel);
	    $inputCarburant.setAttribute('value', storageEngine);
	    $inputDistributeur.setAttribute('value', storageSaler);
	    $inputBoite.setAttribute('value', storageGear);
	    $inputReference.setAttribute('value', storageRef);
	    sessionStorage.removeItem('smartVoReturnToHome');
	    resolve(search);
	  });
	}
	function sendValue(valArray, url) {
	  if (isLoading) {
	    return;
	  }
	  exports.isLoading = isLoading = true;
	  postList(valArray, url).then(function (data) {
	    sessionStorage.setItem('smartVoPageNumber', data.PageNumber);
	    sessionStorage.setItem('smartVoPageCount', data.PageCount);
	    // console.log(data.Result)
	    if (data.Result === 'OK') {
	      document.getElementById('reference').classList.remove('error');
	      document.getElementById('reference').setAttribute('placeholder', 'Ex : 722033');
	      // clearCell()
	      buildCell(data.ResultData);
	      // console.log(data)
	    } else if (data.Result === 'INVALID_REFERENCE ') {
	      errorRef();
	    } else {
	      noResult();
	    }
	  }).catch(function (data) {
	    // console.log(data)
	  });
	}
	function errorRef() {
	  document.getElementById('reference').value = '';
	  document.getElementById('reference').classList.add('error');
	  document.getElementById('reference').setAttribute('placeholder', 'Référence inexistante');
	  noResult();
	}
	function checkRef(ref, valArray, url) {
	  /* const regex = /([0-9])+/g
	  if (ref.length < 6 || !regex.test(ref)) { */
	  if (ref.length < 6) {
	    // console.log('ref<6')
	    exports.isLoading = isLoading = true;
	    errorRef();
	  } else {
	    // console.log('ref>6')
	    exports.isLoading = isLoading = false;
	    sendValue(valArray, url);
	  }
	}
	
	function noResult() {
	  sessionStorage.removeItem('smartVoPageNumber');
	  sessionStorage.removeItem('smartVoPageCount');
	  var $container = document.querySelector('.list-vehicule');
	  clearCell();
	  $container.innerHTML = 'Aucun résultats pour cette recherche';
	  exports.isLoading = isLoading = false;
	}
	function clearCell() {
	  var $container = document.querySelector('.list-vehicule');
	  $container.innerHTML = '';
	}
	function buildCell(data) {
	  var $container = document.querySelector('.list-vehicule');
	
	  var _loop = function _loop(i) {
	    var vehicle = {
	      vehicleId: data[i].VehicleId,
	      imgSrc: data[i].ImageUrl,
	      marque: data[i].Brand,
	      modele: data[i].Model,
	      price: data[i].Price,
	      year: data[i].VehicleYear,
	      km: data[i].Mileage,
	      energie: data[i].Engine,
	      transmission: data[i].Gearbox,
	      societe: data[i].PointOfSaleName,
	      city: data[i].PointOfSaleCity,
	      url: data[i].VehicleUrl,
	      ref: data[i].VehicleReference
	    };
	    var urlAnnonce = function urlAnnonce() {
	      var urlIs = null;
	      var transformUrl = vehicle.url.replace('#', '-');
	
	      if (isLocal()) {
	        urlIs = 'vehicule.html?=' + vehicle.url;
	      } else {
	        urlIs = '' + vehicle.url;
	      }
	      return urlIs;
	    };
	    var htmlCell = '\n      <img src="' + vehicle.imgSrc + '" alt="">\n      <div class="info-vehicule cell">\n          <strong class="title-vehicule">' + vehicle.marque + ' ' + vehicle.modele + '</strong>\n          <strong class="price-vehicule">' + vehicle.price + ' \u20AC</strong>\n          <div class="spec-vehicule cell">\n              <ul>\n                  <li>' + vehicle.year + ' - ' + vehicle.km + ' km</li>\n                  <li>' + vehicle.energie + '</li>\n                  <li>Bo\xEEte ' + vehicle.transmission + '</li>\n              </ul>\n              <div class="localisation-vehicule">\n                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 21"><path d="M7 0C3.1 0 0 3.1 0 7s4.2 14 7 14c2.7 0 7-10.1 7-14 0-3.9-3.1-7-7-7zm0 10c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/></svg>\n                  <span>' + vehicle.societe + '</span>\n              </div>\n          </div>\n          <div class="last-line">\n              <div class="ref-vehicule">\n                  <strong>ref : ' + vehicle.ref + '</strong>                                \n              </div>\n              <a href="' + urlAnnonce() + '" class="btn"><span>En savoir plus</span></a>\n          </div>\n      </div>\n    ';
	    var d = document.createElement('div');
	    d.classList.add('cell');
	    d.classList.add('block');
	    d.innerHTML = htmlCell;
	    $container.appendChild(d);
	    window.setTimeout(function () {
	      d.style.opacity = 1;
	    }, 0);
	  };
	
	  for (var i = 0; data.length > i; i++) {
	    _loop(i);
	  }
	  exports.isLoading = isLoading = false;
	  docHeight();
	}
	exports.isLocal = isLocal;
	exports.docHeight = docHeight;
	exports.isLoading = isLoading;
	exports.checkForm = checkForm;
	exports.getList = getList;
	exports.postList = postList;
	exports.clearCell = clearCell;
	exports.buildCell = buildCell;
	exports.getPage = getPage;
	exports.wsGetVehicles = wsGetVehicles;
	exports.buildFromStorage = buildFromStorage;
	exports.getValueStorage = getValueStorage;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(4);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Range = function () {
	  function Range() {
	    _classCallCheck(this, Range);
	
	    this.rangeSliderInit();
	  }
	
	  _createClass(Range, [{
	    key: 'rangeSliderInit',
	    value: function rangeSliderInit() {
	      /* --------SET RANGE PRICE--------- */
	      var rangePriceSlider = document.getElementById('rangePrice');
	      var priceMin = null;
	      var priceMax = null;
	      var kmMin = null;
	      var kmMax = null;
	      if (sessionStorage.getItem('smartVoReturnToHome')) {
	        var searchJson = JSON.parse(sessionStorage.smartVoSearch);
	        priceMin = searchJson.PriceMin;
	        priceMax = searchJson.PriceMax;
	        kmMin = searchJson.MileageMin;
	        kmMax = searchJson.MileageMax;
	      } else {
	        priceMin = 1000;
	        priceMax = 40000;
	        kmMin = 0;
	        kmMax = 400000;
	      }
	
	      noUiSlider.create(rangePriceSlider, {
	        connect: true,
	        start: [priceMin, priceMax],
	        range: {
	          // Starting at 500, step the value by 500,
	          // until 4000 is reached. From there, step by 1000.
	          'min': [1000, 2000],
	          'max': [40000]
	        },
	        format: wNumb({
	          decimals: 0,
	          thousand: ' ',
	          postfix: ' €'
	        })
	      });
	
	      var inputNumberLowerPrice = document.getElementById('lower-price-value');
	      var inputNumberUpperPrice = document.getElementById('upper-price-value');
	
	      rangePriceSlider.noUiSlider.on('end', function () {
	        if (document.getElementById('search').classList.contains('hide')) {
	          (0, _utils.clearCell)();
	          (0, _utils.checkForm)(_utils.wsGetVehicles, 1, false);
	        }
	      });
	      rangePriceSlider.noUiSlider.on('update', function (values, handle) {
	        var value = values[handle];
	        // console.log(handle)
	
	        if (handle) {
	          inputNumberUpperPrice.setAttribute('value', value);
	          // console.log(value)
	        } else {
	          inputNumberLowerPrice.setAttribute('value', value);
	          // console.log(value)
	        }
	      });
	
	      inputNumberUpperPrice.addEventListener('change', function () {
	        rangePriceSlider.noUiSlider.set([null, this.value]);
	      });
	
	      inputNumberLowerPrice.addEventListener('change', function () {
	        rangePriceSlider.noUiSlider.set([null, this.value]);
	      });
	
	      /* --------SET RANGE KM--------- */
	      var rangeSliderKm = document.getElementById('rangeKm');
	
	      noUiSlider.create(rangeSliderKm, {
	        connect: true,
	        start: [kmMin, kmMax],
	        range: {
	          // Starting at 500, step the value by 500,
	          // until 4000 is reached. From there, step by 1000.
	          'min': [0, 10000],
	          'max': [400000]
	        },
	        format: wNumb({
	          decimals: 0,
	          thousand: ' ',
	          postfix: ' km'
	        })
	      });
	
	      var inputNumberLowerKm = document.getElementById('lower-km-value');
	      var inputNumberUpperKm = document.getElementById('upper-km-value');
	
	      rangeSliderKm.noUiSlider.on('update', function (values, handle) {
	        var value = values[handle];
	
	        if (handle) {
	          inputNumberUpperKm.setAttribute('value', value);
	        } else {
	          inputNumberLowerKm.setAttribute('value', value);
	        }
	      });
	
	      inputNumberUpperKm.addEventListener('change', function () {
	        rangeSliderKm.noUiSlider.set([null, this.value]);
	      });
	
	      inputNumberLowerKm.addEventListener('change', function () {
	        rangeSliderKm.noUiSlider.set([null, this.value]);
	      });
	    }
	  }]);
	
	  return Range;
	}();
	
	exports.default = Range;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(4);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Build = function () {
	  function Build() {
	    _classCallCheck(this, Build);
	
	    this.wHeight = screen.height;
	
	    var url = null;
	    this.pageNumber = sessionStorage.getItem('smartVoPageNumber');
	    this.returnHome = sessionStorage.getItem('smartVoReturnToHome');
	    this.numLoad = null;
	
	    this.service = function () {
	      if ((0, _utils.isLocal)()) {
	        //url = 'http://beta.json-generator.com/api/json/get/VkyhbVLWQ'
	        url = './assets/service/test-list-vehicule.json';
	      } else {
	        url = _utils.wsGetVehicles;
	      }
	      return url;
	    };
	
	    this.initpage();
	  }
	
	  _createClass(Build, [{
	    key: 'initpage',
	    value: function initpage() {
	      this.startPage(this.service());
	    }
	  }, {
	    key: 'startPage',
	    value: function startPage(url) {
	      var _this = this;
	
	      this.buildPage(url).then(function (obj) {
	        (0, _utils.docHeight)();
	        _this.addEventListener(url);
	      });
	    }
	  }, {
	    key: 'addEventListener',
	    value: function addEventListener(url) {
	      var _this2 = this;
	
	      window.addEventListener('scroll', function () {
	        var bodyScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
	        _this2.numLoad = sessionStorage.getItem('smartVoPageCount');
	        var newHeight = (0, _utils.docHeight)();
	
	        if (bodyScrollTop >= newHeight - _this2.wHeight && !_utils.isLoading) {
	          if (_this2.numLoad >= (0, _utils.getPage)() + 1) {
	            (0, _utils.checkForm)(url, (0, _utils.getPage)() + 1, _this2.returnHome);
	          }
	        }
	      });
	    }
	  }, {
	    key: 'buildPage',
	    value: function buildPage(url) {
	      var _this3 = this;
	
	      return new Promise(function (resolve, reject) {
	        if ((0, _utils.isLocal)()) {
	          (0, _utils.getList)(url).then(function (data) {
	            sessionStorage.setItem('smartVoPageCount', data.PageCount);
	            sessionStorage.setItem('smartVoPageNumber', data.PageNumber);
	            (0, _utils.buildCell)(data.ResultData);
	            resolve({ numStart: data.PageNumber });
	          });
	        } else {
	          (0, _utils.checkForm)(url, _this3.pageNumber, _this3.returnHome);
	          resolve();
	        }
	      });
	    }
	  }]);
	
	  return Build;
	}();
	
	exports.default = Build;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _fakeJson = __webpack_require__(8);
	
	var _fakeJson2 = _interopRequireDefault(_fakeJson);
	
	var _utils = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Form = function () {
	  function Form() {
	    _classCallCheck(this, Form);
	
	    var url = null;
	    this.service = function () {
	      if ((0, _utils.isLocal)()) {
	        url = './dist/service/filter.json';
	      } else {
	        url = _utils.wsGetVehicles;
	      }
	      return url;
	    };
	    this.$jsSearch = document.querySelectorAll('.js-search');
	    this.$inputReference = document.getElementById('reference');
	    this.$desktopClose = document.getElementById('open-search');
	    this.$mobilClose = document.querySelector('.close-mobil');
	
	    this.pageNumber = sessionStorage.getItem('smartVoPageNumber');
	
	    if (!sessionStorage.getItem('smartVoReturnToHome')) {
	      this.returnToHome = false;
	    } else {
	      this.returnToHome = sessionStorage.getItem('smartVoReturnToHome');
	    }
	
	    this.fakejson = new _fakeJson2.default();
	    this.initialize(this.service());
	  }
	
	  _createClass(Form, [{
	    key: 'initialize',
	    value: function initialize(url) {
	      this.addEventListener(url);
	    }
	  }, {
	    key: 'addEventListener',
	    value: function addEventListener(url) {
	      var _this = this;
	
	      this.$jsSearch[1].addEventListener('click', function (e) {
	        e.preventDefault();
	        _this.sendForm(url);
	        _this.closeForm();
	      });
	      /* SEARCH MOBIL */
	      this.$jsSearch[0].addEventListener('click', function (e) {
	        e.preventDefault();
	        _this.sendForm(url);
	        _this.closeForm();
	      });
	    }
	  }, {
	    key: 'closeForm',
	    value: function closeForm() {
	      var event = document.createEvent('HTMLEvents');
	      event.initEvent('click', true, false);
	      if (document.body.classList.contains('mobil')) {
	        this.$mobilClose.dispatchEvent(event);
	      } else {
	        this.$desktopClose.dispatchEvent(event);
	      }
	    }
	  }, {
	    key: 'sendForm',
	    value: function sendForm(url) {
	      (0, _utils.clearCell)();
	
	      sessionStorage.setItem('smartVoPageNumber', 1);
	      this.pageNumber = sessionStorage.getItem('smartVoPageNumber');
	      (0, _utils.checkForm)(url, this.pageNumber, this.returnToHome);
	    }
	  }]);
	
	  return Form;
	}();
	
	exports.default = Form;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var FakeJson = function () {
	  function FakeJson() {
	    _classCallCheck(this, FakeJson);
	  }
	
	  _createClass(FakeJson, [{
	    key: 'getNewVehiculeList',
	    value: function getNewVehiculeList() {
	      return {
	        'Result': 'OK',
	        'ResultDescription': '',
	        'Exception': '',
	        'VehicleCount': 24,
	        'PageNumber': 1,
	        'PageCount': 4,
	        'ResultData': [{
	          'Brand': 'smart',
	          'Model': 'fortwo cabriolet',
	          'VehicleYear': 2016,
	          'Mileage': 16884,
	          'Engine': 'Essence',
	          'Gearbox': 'Automatique',
	          'PointOfSaleName': 'SAA AVIGNON',
	          'PointOfSaleAddress': ' Centre Commercial Cap Sud 162A Av Pierre Semard - 84000 Avignon ',
	          'VehicleReference': 722112,
	          'Price': 9900,
	          'ImageUrl': '/000155/smart-fortwo-cabriolet-saa-avignon-722112-01.jpg',
	          'VehicleUrl': '/smart-fortwo-cabriolet-saa-avignon#722112'
	        }, {
	          'Brand': 'smart',
	          'Model': 'fortwo cabriolet',
	          'VehicleYear': 2016,
	          'Mileage': 16884,
	          'Engine': 'Essence',
	          'Gearbox': 'Automatique',
	          'PointOfSaleName': 'SAA AVIGNON',
	          'PointOfSaleAddress ': ' Centre Commercial Cap Sud 162A Av Pierre Semard - 84000 Avignon ',
	          'VehicleReference': 722113,
	          'Price': 8800,
	          'ImageUrl': '/000155/smart-fortwo-cabriolet- saa-avignon -722113-01.jpg',
	          'VehicleUrl': '/smart-fortwo-cabriolet-saa-avignon#722113'
	        }]
	
	      };
	    }
	  }]);
	
	  return FakeJson;
	}();
	
	exports.default = FakeJson;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Builder = __webpack_require__(10);
	
	var _Builder2 = _interopRequireDefault(_Builder);
	
	var _Form = __webpack_require__(13);
	
	var _Form2 = _interopRequireDefault(_Form);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Vehicule = function () {
	  function Vehicule() {
	    _classCallCheck(this, Vehicule);
	
	    /* GOTO CONTACT */
	    this.$btnBack = document.querySelector('.back');
	
	    var newBuilder = new _Builder2.default();
	    var newForm = new _Form2.default();
	    this.initpage();
	  }
	
	  _createClass(Vehicule, [{
	    key: 'initpage',
	    value: function initpage() {
	      this.$btnBack.addEventListener('click', function (e) {
	        sessionStorage.setItem('smartVoReturnToHome', true);
	      });
	    }
	  }]);
	
	  return Vehicule;
	}();
	
	exports.default = Vehicule;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _slider = __webpack_require__(11);
	
	var _slider2 = _interopRequireDefault(_slider);
	
	var _WindowScroll = __webpack_require__(12);
	
	var _WindowScroll2 = _interopRequireDefault(_WindowScroll);
	
	var _utils = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Builder = function () {
	  function Builder() {
	    _classCallCheck(this, Builder);
	
	    this.data = null;
	    var url = null;
	    this.service = function () {
	      if ((0, _utils.isLocal)()) {
	        url = './assets/service/test-vehicule.json';
	      } else {
	        url = '../vehicle/getvehicledetails/';
	      }
	      return url;
	    };
	    this.$Title = document.getElementById('modele');
	    this.$price = document.querySelector('.price-vehicule');
	    this.$finance = document.querySelector('.finance-vehicule');
	    this.$spec = document.querySelector('.spec-vehicule');
	    this.$specList = this.$spec.querySelector('ul');
	    this.$specVersion = this.$spec.querySelector('strong');
	    this.$energy = document.getElementById('energy');
	    this.$vitesse = document.getElementById('vitesse');
	    this.$mec = document.getElementById('mec');
	    this.$place = document.getElementById('place');
	    this.$door = document.getElementById('door');
	    this.$version = document.getElementById('version');
	    this.$din = document.getElementById('din');
	    this.$cylindre = document.getElementById('cylindre');
	    this.$ref = document.getElementById('ref');
	    this.$option = document.getElementById('option');
	    this.$financeText = document.getElementById('finance');
	    this.$societe = document.getElementById('societe');
	    this.$map = document.getElementById('map');
	    this.$slider = document.getElementById('image-slider');
	    this.$commercialInfo = document.getElementById('commercial-info');
	    this.$atelierInfo = document.getElementById('atelier-info');
	    this.$commercialContact = document.getElementById('commercial-contact');
	    this.$controller = document.querySelector('.stage-controller');
	    this.$subject = document.getElementById('VehicleReference');
	
	    this.initPage();
	  }
	
	  _createClass(Builder, [{
	    key: 'initPage',
	    value: function initPage() {
	      this.buildSlider();
	    }
	  }, {
	    key: 'buildSlider',
	    value: function buildSlider() {
	      this.buildPage(this.service()).then(function () {
	        var newSlider = new _slider2.default();
	        window.onresize = function () {
	          newSlider = new _slider2.default();
	        };
	        var newWindowScroll = new _WindowScroll2.default();
	      }).catch(function () {});
	    }
	  }, {
	    key: 'buildPage',
	    value: function buildPage(url) {
	      var _this = this;
	
	      return new Promise(function (resolve, reject) {
	        var href = window.location.href.split('-');
	        var hrefL = href.length;
	        var ref = href[hrefL - 1];
	        var obj = { 'VehicleReference': ref };
	        // console.log(href, hrefL, ref, obj)
	        _this.postRef(obj, url).then(function (data) {
	          // console.info(data)
	          var info = data.ResultData;
	          _this.$Title.textContent = info.Brand + ' ' + info.Model;
	          _this.$price.textContent = info.Price + ' € TTC';
	
	          if (info.FinancementPrice) {
	            _this.$finance.textContent = info.FinancementPrice + ' €./ mois sans apport';
	          } else {
	            _this.$finance.style.display = 'none';
	          }
	
	          var liAnnee = document.createElement('li');
	          _this.$specList.appendChild(liAnnee).textContent = info.VehicleYear + ' - ' + info.Mileage + ' km';
	          var liEnergie = document.createElement('li');
	          _this.$specList.appendChild(liEnergie).textContent = info.Engine;
	          var liTransmission = document.createElement('li');
	          _this.$specList.appendChild(liTransmission).textContent = 'Boîte ' + info.GearBoxType;
	          var liCouleur = document.createElement('li');
	          _this.$specList.appendChild(liCouleur).textContent = info.Colour;
	          var span = document.createElement('span');
	          _this.$specVersion.appendChild(span).textContent = info.Version;
	
	          _this.$energy.textContent = info.Engine;
	          if (info.GearBoxType === info.GearboxDesc) {
	            _this.$vitesse.textContent = info.GearboxDesc + ' ' + info.GearBoxSpeed + ' rapports';
	          } else {
	            _this.$vitesse.textContent = info.GearBoxType + ' ' + info.GearboxDesc + ' ' + info.GearBoxSpeed + ' rapports';
	          }
	          _this.$mec.textContent = info.RegistrationDate;
	          _this.$place.textContent = info.SeatCount;
	          _this.$door.textContent = info.DoorCount;
	          _this.$version.textContent = info.Version;
	          _this.$din.textContent = info.EngineFiscalPower + ' cv';
	          _this.$cylindre.innerHTML = info.EngineHorsePower + ' cm<sup>3</sup>';
	          _this.$ref.textContent = info.VehicleReference;
	          _this.$option.textContent = info.Option;
	
	          _this.$subject.setAttribute('value', 'n ' + info.VehicleReference + ' - ' + info.Brand + ' ' + info.Model);
	
	          if (info.FinancementBlock) {
	            _this.$financeText.innerHTML = info.FinancementBlock;
	          } else {
	            document.querySelector('.content-financial').style.display = 'none';
	          }
	
	          _this.$societe.innerHTML = info.PointOfSaleName + '<span>' + info.PointOfSaleAddress + '</span>';
	
	          _this.$commercialInfo.innerHTML = info.CommercialHours + '</br> Tel : ' + info.CommercialTel + ' - Fax : ' + info.CommercialFax;
	          _this.$atelierInfo.innerHTML = info.AtelierHours + '</br> Tel : ' + info.AtelierTel + ' - Fax : ' + info.AtelierFax;
	
	          var mapLat = info.PointOfSaleLattitude;
	          var mapLng = info.PointOfSaleLongitude;
	
	          mapLat = Number(mapLat);
	          mapLng = Number(mapLng);
	          var latLng = { lat: mapLat, lng: mapLng };
	
	          var map = new google.maps.Map(document.getElementById('map'), {
	            zoom: 16,
	            center: latLng
	          });
	          var marker = new google.maps.Marker({
	            position: latLng,
	            icon: 'assets/img/icon_maps.png',
	            map: map
	          });
	
	          for (var a = 0; info.PointOfSaleContacts.length > a; a++) {
	            var cc = null;
	            if (info.PointOfSaleContacts[a].Name === null) {
	              cc = {
	                name: 'Tel',
	                tel: info.PointOfSaleContacts[a].Telephone1
	              };
	            } else {
	              cc = {
	                name: info.PointOfSaleContacts[a].Name,
	                tel: info.PointOfSaleContacts[a].Telephone1
	              };
	            }
	            var liContact = document.createElement('li');
	            _this.$commercialContact.appendChild(liContact).innerHTML = '\n            <strong>' + cc.name + ' :</strong>\n            <a href="tel:' + cc.tel + '">' + cc.tel + '</a>\n          ';
	            _this.$commercialContact.querySelectorAll('li')[a].classList.add('cell');
	          }
	
	          for (var i = 0; info.ImageUrl.length > i; i++) {
	            var liSlider = document.createElement('li');
	            var aController = document.createElement('a');
	            var img = info.ImageUrl[i];
	            _this.$slider.appendChild(liSlider).innerHTML = '<img src="' + img + '"/>';
	            _this.$controller.appendChild(aController).innerHTML = '<img src="' + img + '" class="minus"/>';
	          }
	
	          _this.$slider.querySelectorAll('li')[0].classList.add('actif');
	          _this.$controller.querySelectorAll('a')[0].classList.add('actif');
	
	          var arrImgHeight = [];
	
	          var _loop = function _loop() {
	            var img = _this.$slider.querySelectorAll('img')[y];
	            _this.$slider.querySelectorAll('img')[y].onerror = function () {
	              reject();
	            };
	            _this.$slider.querySelectorAll('img')[y].onload = function () {
	              arrImgHeight.push(img.height);
	              if (arrImgHeight.length === _this.$slider.querySelectorAll('img').length) {
	                resolve();
	              }
	            };
	          };
	
	          for (var y = 0; _this.$slider.querySelectorAll('img').length > y; y++) {
	            _loop();
	          }
	        });
	      });
	    }
	  }, {
	    key: 'postRef',
	    value: function postRef(ref, url) {
	      var request = new XMLHttpRequest();
	      return new Promise(function (resolve, reject) {
	        request.open('POST', url, true);
	        request.setRequestHeader('Content-type', 'application/json');
	
	        request.onreadystatechange = function () {
	          // Call a function when the state changes.
	          if (request.responseText.length > 0) {
	            var data = JSON.parse(request.responseText);
	            resolve(data);
	          }
	          /* if (request.status === 200) {
	            if (request.readyState === 4) {
	              let data = JSON.parse(request.responseText)
	              resolve(data)
	            }
	          } else {
	            reject('Post ERREUR 2')
	          } */
	        };
	
	        request.send(JSON.stringify(ref));
	      });
	    }
	  }]);
	
	  return Builder;
	}();
	
	exports.default = Builder;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var slider = function () {
	  function slider() {
	    _classCallCheck(this, slider);
	
	    this.$slider = document.getElementById('image-slider');
	    this.$sliderEl = this.$slider.querySelectorAll('li');
	    this.$stage = document.getElementsByClassName('stage')[0];
	    this.stageWidth = this.$stage.offsetWidth;
	    this.stageHeight = null;
	    this.$btnList = document.getElementsByClassName('stage-controller');
	    this.$btn = this.$btnList[0].querySelectorAll('a');
	    this.pos = 0;
	    this.hammertime = new Hammer(this.$slider);
	    this.initViewer();
	    this.onChange();
	  }
	  /* SLIDER */
	
	
	  _createClass(slider, [{
	    key: 'onChange',
	    value: function onChange() {
	      var _this = this;
	
	      this.hammertime.on('swipeleft', function (ev) {
	        _this.goRight(ev);
	      });
	      this.hammertime.on('swiperight', function (ev) {
	        _this.goLeft(ev);
	      });
	    }
	  }, {
	    key: 'initViewer',
	    value: function initViewer() {
	      this.$slider.style.width = this.stageWidth * this.$sliderEl.length + 'px';
	      for (var i = 0; i < this.$sliderEl.length; i++) {
	        this.$sliderEl[i].style.width = this.stageWidth + 'px';
	        var $sliderImg = this.$sliderEl[i].querySelector('img');
	        this.stageHeight = $sliderImg.offsetHeight;
	        if (this.$sliderEl[i].classList.contains('actif')) {
	          this.pos = i;
	          this.$slider.style.left = '-' + this.stageWidth * i + 'px';
	        }
	      }
	      this.$slider.style.height = this.stageHeight + 'px';
	      this.$stage.style.height = this.stageHeight + 'px';
	      this.eventListener();
	    }
	  }, {
	    key: 'eventListener',
	    value: function eventListener() {
	      var _this2 = this;
	
	      Array.prototype.forEach.call(this.$btn, function (el, i) {
	        _this2.$btn[i].addEventListener('click', function (e) {
	          e.preventDefault();
	          _this2.pos = i;
	          for (var y = 0; y < _this2.$btn.length; y++) {
	            _this2.removeClassActif(y);
	          }
	          _this2.$btn[i].classList.add('actif');
	          _this2.$sliderEl[i].classList.add('actif');
	          _this2.$slider.style.left = '-' + _this2.stageWidth * i + 'px';
	          return false;
	        });
	      });
	    }
	  }, {
	    key: 'goRight',
	    value: function goRight(ev) {
	      this.mooveStage('right');
	    }
	  }, {
	    key: 'goLeft',
	    value: function goLeft(ev) {
	      this.mooveStage('left');
	    }
	  }, {
	    key: 'mooveStage',
	    value: function mooveStage(event) {
	      if (event === 'right') {
	        for (var i = 0; i < this.$sliderEl.length; i++) {
	          if (this.$sliderEl[i].classList.contains('actif') && this.pos !== this.$sliderEl.length - 1) {
	            this.pos = this.pos + 1;
	            this.removeClassActif(i);
	          }
	        }
	      } else {
	        for (var y = 0; y < this.$sliderEl.length; y++) {
	          if (this.$sliderEl[y].classList.contains('actif') && this.pos > 0) {
	            this.pos = this.pos - 1;
	            this.removeClassActif(y);
	          }
	        }
	      }
	      if (this.pos >= 0 && this.pos < this.$sliderEl.length) {
	        this.$btn[this.pos].classList.add('actif');
	        this.$sliderEl[this.pos].classList.add('actif');
	        this.$slider.style.left = '-' + this.stageWidth * this.pos + 'px';
	      } else {
	        return false;
	      }
	    }
	  }, {
	    key: 'removeClassActif',
	    value: function removeClassActif(i) {
	      this.$btn[i].classList.remove('actif');
	      this.$sliderEl[i].classList.remove('actif');
	    }
	  }]);
	
	  return slider;
	}();
	
	exports.default = slider;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var WindowScroll = function () {
	  function WindowScroll() {
	    _classCallCheck(this, WindowScroll);
	
	    this.$btnContact = document.getElementsByClassName('btn-contact');
	    this.$contact = document.getElementById('contact');
	    this.$contactX = this.$contact.offsetTop;
	    this.scrollW(this.$btnContact, this.$contactX);
	  }
	
	  _createClass(WindowScroll, [{
	    key: 'scrollW',
	    value: function scrollW(el, posY) {
	      console.log('posY', posY);
	      window.requestAnimFrame = function () {
	        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
	          window.setTimeout(callback, 1000 / 60);
	        };
	      }();
	
	      // main function
	      function scrollToY(scrollTargetY, speed, easing) {
	        console.log('scrollTargetY', scrollTargetY);
	        var scrollY = window.scrollY || document.documentElement.scrollTop;
	        scrollTargetY = scrollTargetY || 0;
	        speed = speed || 2000;
	        easing = easing || 'easeOutSine';
	        var currentTime = 0;
	
	        // min time .1, max time .8 seconds
	        var time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8));
	
	        // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
	        var easingEquations = {
	          easeOutSine: function easeOutSine(pos) {
	            return Math.sin(pos * (Math.PI / 2));
	          },
	          easeInOutSine: function easeInOutSine(pos) {
	            return -0.5 * (Math.cos(Math.PI * pos) - 1);
	          },
	          easeInOutQuint: function easeInOutQuint(pos) {
	            if ((pos /= 0.5) < 1) {
	              return 0.5 * Math.pow(pos, 5);
	            }
	            return 0.5 * (Math.pow(pos - 2, 5) + 2);
	          }
	        };
	
	        // add animation loop
	        function tick() {
	          currentTime += 1 / 60;
	
	          var p = currentTime / time;
	          var t = easingEquations[easing](p);
	
	          if (p < 1) {
	            requestAnimFrame(tick);
	
	            window.scrollTo(0, scrollY + (scrollTargetY - scrollY) * t);
	          } else {
	            // console.log('scroll done')
	            window.scrollTo(0, scrollTargetY);
	          }
	        }
	
	        // call it once to get started
	        tick();
	      }
	      el[0].addEventListener('click', function (e) {
	        e.preventDefault();
	        scrollToY(posY + 80, 800, 'easeInOutQuint');
	      });
	    }
	  }]);
	
	  return WindowScroll;
	}();
	
	exports.default = WindowScroll;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(4);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Form = function () {
	  function Form() {
	    _classCallCheck(this, Form);
	
	    this.nbError = 0;
	    this.$formContact = document.querySelector('#formContact');
	    this.$input = document.querySelectorAll('input');
	    this.$formEl = document.querySelectorAll('.js-form-el');
	    this.$btn = document.querySelector('.btn-submit');
	    this.$msgError = document.querySelector('.msgError');
	    this.$msgSend = document.querySelector('.msgSend');
	    this.service = function () {
	      if ((0, _utils.isLocal)()) {
	        url = './assets/service/test-vehicule.json';
	      } else {
	        url = '../service/saveuser/';
	      }
	      return url;
	    };
	    this.obj = {};
	    this.initForm();
	  }
	
	  _createClass(Form, [{
	    key: 'initForm',
	    value: function initForm() {
	      this.addEventListener();
	    }
	  }, {
	    key: 'addEventListener',
	    value: function addEventListener() {
	      var _this = this;
	
	      this.$btn.addEventListener('click', function (e, i) {
	        _this.checkForm();
	        return false;
	      });
	    }
	  }, {
	    key: 'checkForm',
	    value: function checkForm() {
	      var _this2 = this;
	
	      this.$msgError.classList.remove('showMsg');
	      this.nbError = 0;
	      Array.prototype.forEach.call(this.$input, function (el, i) {
	        if (el.getAttribute('required')) {
	          el.classList.remove('error');
	          var type = el.getAttribute('type');
	          var value = el.value;
	          if (type === 'email') {
	            _this2.checkEmail(el, value);
	          } else if (type === 'number') {
	            _this2.checkPhone(el, value);
	          } else {
	            _this2.checkText(el, value);
	          }
	        }
	      });
	      if (this.nbError > 0) {
	        this.$msgError.classList.add('showMsg');
	      } else {
	        this.getInfo().then(function () {
	          var ref = document.getElementById('ref');
	          var name = document.getElementById('UserFirstName');
	          var lastName = document.getElementById('UserLastName');
	          var phone = document.getElementById('UserPhoneNumber');
	          var email = document.getElementById('UserEmail');
	          var sujet = document.getElementById('Subject');
	          var message = document.getElementById('Message');
	          var optin = document.getElementById('optin');
	          var optinVal = false;
	
	          if (optin.checked) {
	            optinVal = true;
	          }
	
	          var messageArray = {
	            'VehicleReference': ref.textContent,
	            'UserFirstName': name.value,
	            'UserLastName': lastName.value,
	            'UserPhoneNumber': phone.value,
	            'UserEmail': email.value,
	            'Subject': sujet.value,
	            'Message': message.value,
	            'optin': optinVal
	          };
	          _this2.messageSend(messageArray);
	        });
	      }
	    }
	  }, {
	    key: 'getInfo',
	    value: function getInfo() {
	      var _this3 = this;
	
	      return new Promise(function (resolve, reject) {
	        _this3.$formEl.forEach(function (item, i) {
	          var itemId = item.id;
	          var itemValue = item.value;
	          if (item.type === 'checkbox') {
	            var ischecked = item.checked;
	            _this3.obj[itemId] = ischecked;
	          } else {
	            _this3.obj[itemId] = itemValue;
	          }
	          resolve();
	        });
	      });
	    }
	  }, {
	    key: 'checkText',
	    value: function checkText(el, value) {
	      var regex = /\d/g;
	      if (value.length === 0 || regex.test(value)) {
	        el.classList.add('error');
	        this.nbError++;
	      }
	    }
	  }, {
	    key: 'checkPhone',
	    value: function checkPhone(el, value) {
	      value = value.trim();
	      var regex = /\b\d{2}[ ]?\d{2}[ ]?\d{2}[ ]?\d{2}[ ]?\d{2}\b/g;
	      if (!value.length === 10 || !regex.test(value)) {
	        el.classList.add('error');
	        this.nbError++;
	      }
	    }
	  }, {
	    key: 'checkEmail',
	    value: function checkEmail(el, value) {
	      var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
	      if (value.length === 0 || !regex.test(value)) {
	        el.classList.add('error');
	        this.nbError++;
	      }
	    }
	  }, {
	    key: 'sendForm',
	    value: function sendForm(messageArray) {
	      var request = new XMLHttpRequest();
	      var url = window.location.origin + '/service/saveuser/';
	      return new Promise(function (resolve, reject) {
	        request.open('POST', url, true);
	        request.setRequestHeader('Content-type', 'application/json');
	
	        request.onreadystatechange = function () {
	          // Call a function when the state changes.
	          if (request.responseText.length > 0) {
	            var data = JSON.parse(request.responseText);
	            resolve(data);
	          }
	          /* if (request.status === 200) {
	            if (request.readyState === 4) {
	              let data = JSON.parse(request.responseText)
	              resolve(data)
	            }
	          } else {
	            reject('Post Message ERREUR 2')
	          } */
	        };
	
	        request.send(JSON.stringify(messageArray));
	      });
	    }
	  }, {
	    key: 'messageSend',
	    value: function messageSend(messageArray) {
	      var _this4 = this;
	
	      this.sendForm(messageArray).then(function (data) {
	        _this4.$msgSend.style.display = 'block';
	        _this4.$formContact.style.display = 'none';
	      });
	    }
	  }]);
	
	  return Form;
	}();
	
	exports.default = Form;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	var require;/* WEBPACK VAR INJECTION */(function(process, global) {/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   4.1.0
	 */
	
	(function (global, factory) {
	     true ? module.exports = factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    (global.ES6Promise = factory());
	}(this, (function () { 'use strict';
	
	function objectOrFunction(x) {
	  return typeof x === 'function' || typeof x === 'object' && x !== null;
	}
	
	function isFunction(x) {
	  return typeof x === 'function';
	}
	
	var _isArray = undefined;
	if (!Array.isArray) {
	  _isArray = function (x) {
	    return Object.prototype.toString.call(x) === '[object Array]';
	  };
	} else {
	  _isArray = Array.isArray;
	}
	
	var isArray = _isArray;
	
	var len = 0;
	var vertxNext = undefined;
	var customSchedulerFn = undefined;
	
	var asap = function asap(callback, arg) {
	  queue[len] = callback;
	  queue[len + 1] = arg;
	  len += 2;
	  if (len === 2) {
	    // If len is 2, that means that we need to schedule an async flush.
	    // If additional callbacks are queued before the queue is flushed, they
	    // will be processed by this flush that we are scheduling.
	    if (customSchedulerFn) {
	      customSchedulerFn(flush);
	    } else {
	      scheduleFlush();
	    }
	  }
	};
	
	function setScheduler(scheduleFn) {
	  customSchedulerFn = scheduleFn;
	}
	
	function setAsap(asapFn) {
	  asap = asapFn;
	}
	
	var browserWindow = typeof window !== 'undefined' ? window : undefined;
	var browserGlobal = browserWindow || {};
	var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
	var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';
	
	// test for web worker but not in IE10
	var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';
	
	// node
	function useNextTick() {
	  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	  // see https://github.com/cujojs/when/issues/410 for details
	  return function () {
	    return process.nextTick(flush);
	  };
	}
	
	// vertx
	function useVertxTimer() {
	  if (typeof vertxNext !== 'undefined') {
	    return function () {
	      vertxNext(flush);
	    };
	  }
	
	  return useSetTimeout();
	}
	
	function useMutationObserver() {
	  var iterations = 0;
	  var observer = new BrowserMutationObserver(flush);
	  var node = document.createTextNode('');
	  observer.observe(node, { characterData: true });
	
	  return function () {
	    node.data = iterations = ++iterations % 2;
	  };
	}
	
	// web worker
	function useMessageChannel() {
	  var channel = new MessageChannel();
	  channel.port1.onmessage = flush;
	  return function () {
	    return channel.port2.postMessage(0);
	  };
	}
	
	function useSetTimeout() {
	  // Store setTimeout reference so es6-promise will be unaffected by
	  // other code modifying setTimeout (like sinon.useFakeTimers())
	  var globalSetTimeout = setTimeout;
	  return function () {
	    return globalSetTimeout(flush, 1);
	  };
	}
	
	var queue = new Array(1000);
	function flush() {
	  for (var i = 0; i < len; i += 2) {
	    var callback = queue[i];
	    var arg = queue[i + 1];
	
	    callback(arg);
	
	    queue[i] = undefined;
	    queue[i + 1] = undefined;
	  }
	
	  len = 0;
	}
	
	function attemptVertx() {
	  try {
	    var r = require;
	    var vertx = __webpack_require__(16);
	    vertxNext = vertx.runOnLoop || vertx.runOnContext;
	    return useVertxTimer();
	  } catch (e) {
	    return useSetTimeout();
	  }
	}
	
	var scheduleFlush = undefined;
	// Decide what async method to use to triggering processing of queued callbacks:
	if (isNode) {
	  scheduleFlush = useNextTick();
	} else if (BrowserMutationObserver) {
	  scheduleFlush = useMutationObserver();
	} else if (isWorker) {
	  scheduleFlush = useMessageChannel();
	} else if (browserWindow === undefined && "function" === 'function') {
	  scheduleFlush = attemptVertx();
	} else {
	  scheduleFlush = useSetTimeout();
	}
	
	function then(onFulfillment, onRejection) {
	  var _arguments = arguments;
	
	  var parent = this;
	
	  var child = new this.constructor(noop);
	
	  if (child[PROMISE_ID] === undefined) {
	    makePromise(child);
	  }
	
	  var _state = parent._state;
	
	  if (_state) {
	    (function () {
	      var callback = _arguments[_state - 1];
	      asap(function () {
	        return invokeCallback(_state, child, callback, parent._result);
	      });
	    })();
	  } else {
	    subscribe(parent, child, onFulfillment, onRejection);
	  }
	
	  return child;
	}
	
	/**
	  `Promise.resolve` returns a promise that will become resolved with the
	  passed `value`. It is shorthand for the following:
	
	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    resolve(1);
	  });
	
	  promise.then(function(value){
	    // value === 1
	  });
	  ```
	
	  Instead of writing the above, your code now simply becomes the following:
	
	  ```javascript
	  let promise = Promise.resolve(1);
	
	  promise.then(function(value){
	    // value === 1
	  });
	  ```
	
	  @method resolve
	  @static
	  @param {Any} value value that the returned promise will be resolved with
	  Useful for tooling.
	  @return {Promise} a promise that will become fulfilled with the given
	  `value`
	*/
	function resolve(object) {
	  /*jshint validthis:true */
	  var Constructor = this;
	
	  if (object && typeof object === 'object' && object.constructor === Constructor) {
	    return object;
	  }
	
	  var promise = new Constructor(noop);
	  _resolve(promise, object);
	  return promise;
	}
	
	var PROMISE_ID = Math.random().toString(36).substring(16);
	
	function noop() {}
	
	var PENDING = void 0;
	var FULFILLED = 1;
	var REJECTED = 2;
	
	var GET_THEN_ERROR = new ErrorObject();
	
	function selfFulfillment() {
	  return new TypeError("You cannot resolve a promise with itself");
	}
	
	function cannotReturnOwn() {
	  return new TypeError('A promises callback cannot return that same promise.');
	}
	
	function getThen(promise) {
	  try {
	    return promise.then;
	  } catch (error) {
	    GET_THEN_ERROR.error = error;
	    return GET_THEN_ERROR;
	  }
	}
	
	function tryThen(then, value, fulfillmentHandler, rejectionHandler) {
	  try {
	    then.call(value, fulfillmentHandler, rejectionHandler);
	  } catch (e) {
	    return e;
	  }
	}
	
	function handleForeignThenable(promise, thenable, then) {
	  asap(function (promise) {
	    var sealed = false;
	    var error = tryThen(then, thenable, function (value) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;
	      if (thenable !== value) {
	        _resolve(promise, value);
	      } else {
	        fulfill(promise, value);
	      }
	    }, function (reason) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;
	
	      _reject(promise, reason);
	    }, 'Settle: ' + (promise._label || ' unknown promise'));
	
	    if (!sealed && error) {
	      sealed = true;
	      _reject(promise, error);
	    }
	  }, promise);
	}
	
	function handleOwnThenable(promise, thenable) {
	  if (thenable._state === FULFILLED) {
	    fulfill(promise, thenable._result);
	  } else if (thenable._state === REJECTED) {
	    _reject(promise, thenable._result);
	  } else {
	    subscribe(thenable, undefined, function (value) {
	      return _resolve(promise, value);
	    }, function (reason) {
	      return _reject(promise, reason);
	    });
	  }
	}
	
	function handleMaybeThenable(promise, maybeThenable, then$$) {
	  if (maybeThenable.constructor === promise.constructor && then$$ === then && maybeThenable.constructor.resolve === resolve) {
	    handleOwnThenable(promise, maybeThenable);
	  } else {
	    if (then$$ === GET_THEN_ERROR) {
	      _reject(promise, GET_THEN_ERROR.error);
	      GET_THEN_ERROR.error = null;
	    } else if (then$$ === undefined) {
	      fulfill(promise, maybeThenable);
	    } else if (isFunction(then$$)) {
	      handleForeignThenable(promise, maybeThenable, then$$);
	    } else {
	      fulfill(promise, maybeThenable);
	    }
	  }
	}
	
	function _resolve(promise, value) {
	  if (promise === value) {
	    _reject(promise, selfFulfillment());
	  } else if (objectOrFunction(value)) {
	    handleMaybeThenable(promise, value, getThen(value));
	  } else {
	    fulfill(promise, value);
	  }
	}
	
	function publishRejection(promise) {
	  if (promise._onerror) {
	    promise._onerror(promise._result);
	  }
	
	  publish(promise);
	}
	
	function fulfill(promise, value) {
	  if (promise._state !== PENDING) {
	    return;
	  }
	
	  promise._result = value;
	  promise._state = FULFILLED;
	
	  if (promise._subscribers.length !== 0) {
	    asap(publish, promise);
	  }
	}
	
	function _reject(promise, reason) {
	  if (promise._state !== PENDING) {
	    return;
	  }
	  promise._state = REJECTED;
	  promise._result = reason;
	
	  asap(publishRejection, promise);
	}
	
	function subscribe(parent, child, onFulfillment, onRejection) {
	  var _subscribers = parent._subscribers;
	  var length = _subscribers.length;
	
	  parent._onerror = null;
	
	  _subscribers[length] = child;
	  _subscribers[length + FULFILLED] = onFulfillment;
	  _subscribers[length + REJECTED] = onRejection;
	
	  if (length === 0 && parent._state) {
	    asap(publish, parent);
	  }
	}
	
	function publish(promise) {
	  var subscribers = promise._subscribers;
	  var settled = promise._state;
	
	  if (subscribers.length === 0) {
	    return;
	  }
	
	  var child = undefined,
	      callback = undefined,
	      detail = promise._result;
	
	  for (var i = 0; i < subscribers.length; i += 3) {
	    child = subscribers[i];
	    callback = subscribers[i + settled];
	
	    if (child) {
	      invokeCallback(settled, child, callback, detail);
	    } else {
	      callback(detail);
	    }
	  }
	
	  promise._subscribers.length = 0;
	}
	
	function ErrorObject() {
	  this.error = null;
	}
	
	var TRY_CATCH_ERROR = new ErrorObject();
	
	function tryCatch(callback, detail) {
	  try {
	    return callback(detail);
	  } catch (e) {
	    TRY_CATCH_ERROR.error = e;
	    return TRY_CATCH_ERROR;
	  }
	}
	
	function invokeCallback(settled, promise, callback, detail) {
	  var hasCallback = isFunction(callback),
	      value = undefined,
	      error = undefined,
	      succeeded = undefined,
	      failed = undefined;
	
	  if (hasCallback) {
	    value = tryCatch(callback, detail);
	
	    if (value === TRY_CATCH_ERROR) {
	      failed = true;
	      error = value.error;
	      value.error = null;
	    } else {
	      succeeded = true;
	    }
	
	    if (promise === value) {
	      _reject(promise, cannotReturnOwn());
	      return;
	    }
	  } else {
	    value = detail;
	    succeeded = true;
	  }
	
	  if (promise._state !== PENDING) {
	    // noop
	  } else if (hasCallback && succeeded) {
	      _resolve(promise, value);
	    } else if (failed) {
	      _reject(promise, error);
	    } else if (settled === FULFILLED) {
	      fulfill(promise, value);
	    } else if (settled === REJECTED) {
	      _reject(promise, value);
	    }
	}
	
	function initializePromise(promise, resolver) {
	  try {
	    resolver(function resolvePromise(value) {
	      _resolve(promise, value);
	    }, function rejectPromise(reason) {
	      _reject(promise, reason);
	    });
	  } catch (e) {
	    _reject(promise, e);
	  }
	}
	
	var id = 0;
	function nextId() {
	  return id++;
	}
	
	function makePromise(promise) {
	  promise[PROMISE_ID] = id++;
	  promise._state = undefined;
	  promise._result = undefined;
	  promise._subscribers = [];
	}
	
	function Enumerator(Constructor, input) {
	  this._instanceConstructor = Constructor;
	  this.promise = new Constructor(noop);
	
	  if (!this.promise[PROMISE_ID]) {
	    makePromise(this.promise);
	  }
	
	  if (isArray(input)) {
	    this._input = input;
	    this.length = input.length;
	    this._remaining = input.length;
	
	    this._result = new Array(this.length);
	
	    if (this.length === 0) {
	      fulfill(this.promise, this._result);
	    } else {
	      this.length = this.length || 0;
	      this._enumerate();
	      if (this._remaining === 0) {
	        fulfill(this.promise, this._result);
	      }
	    }
	  } else {
	    _reject(this.promise, validationError());
	  }
	}
	
	function validationError() {
	  return new Error('Array Methods must be provided an Array');
	};
	
	Enumerator.prototype._enumerate = function () {
	  var length = this.length;
	  var _input = this._input;
	
	  for (var i = 0; this._state === PENDING && i < length; i++) {
	    this._eachEntry(_input[i], i);
	  }
	};
	
	Enumerator.prototype._eachEntry = function (entry, i) {
	  var c = this._instanceConstructor;
	  var resolve$$ = c.resolve;
	
	  if (resolve$$ === resolve) {
	    var _then = getThen(entry);
	
	    if (_then === then && entry._state !== PENDING) {
	      this._settledAt(entry._state, i, entry._result);
	    } else if (typeof _then !== 'function') {
	      this._remaining--;
	      this._result[i] = entry;
	    } else if (c === Promise) {
	      var promise = new c(noop);
	      handleMaybeThenable(promise, entry, _then);
	      this._willSettleAt(promise, i);
	    } else {
	      this._willSettleAt(new c(function (resolve$$) {
	        return resolve$$(entry);
	      }), i);
	    }
	  } else {
	    this._willSettleAt(resolve$$(entry), i);
	  }
	};
	
	Enumerator.prototype._settledAt = function (state, i, value) {
	  var promise = this.promise;
	
	  if (promise._state === PENDING) {
	    this._remaining--;
	
	    if (state === REJECTED) {
	      _reject(promise, value);
	    } else {
	      this._result[i] = value;
	    }
	  }
	
	  if (this._remaining === 0) {
	    fulfill(promise, this._result);
	  }
	};
	
	Enumerator.prototype._willSettleAt = function (promise, i) {
	  var enumerator = this;
	
	  subscribe(promise, undefined, function (value) {
	    return enumerator._settledAt(FULFILLED, i, value);
	  }, function (reason) {
	    return enumerator._settledAt(REJECTED, i, reason);
	  });
	};
	
	/**
	  `Promise.all` accepts an array of promises, and returns a new promise which
	  is fulfilled with an array of fulfillment values for the passed promises, or
	  rejected with the reason of the first passed promise to be rejected. It casts all
	  elements of the passed iterable to promises as it runs this algorithm.
	
	  Example:
	
	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = resolve(2);
	  let promise3 = resolve(3);
	  let promises = [ promise1, promise2, promise3 ];
	
	  Promise.all(promises).then(function(array){
	    // The array here would be [ 1, 2, 3 ];
	  });
	  ```
	
	  If any of the `promises` given to `all` are rejected, the first promise
	  that is rejected will be given as an argument to the returned promises's
	  rejection handler. For example:
	
	  Example:
	
	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = reject(new Error("2"));
	  let promise3 = reject(new Error("3"));
	  let promises = [ promise1, promise2, promise3 ];
	
	  Promise.all(promises).then(function(array){
	    // Code here never runs because there are rejected promises!
	  }, function(error) {
	    // error.message === "2"
	  });
	  ```
	
	  @method all
	  @static
	  @param {Array} entries array of promises
	  @param {String} label optional string for labeling the promise.
	  Useful for tooling.
	  @return {Promise} promise that is fulfilled when all `promises` have been
	  fulfilled, or rejected if any of them become rejected.
	  @static
	*/
	function all(entries) {
	  return new Enumerator(this, entries).promise;
	}
	
	/**
	  `Promise.race` returns a new promise which is settled in the same way as the
	  first passed promise to settle.
	
	  Example:
	
	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });
	
	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 2');
	    }, 100);
	  });
	
	  Promise.race([promise1, promise2]).then(function(result){
	    // result === 'promise 2' because it was resolved before promise1
	    // was resolved.
	  });
	  ```
	
	  `Promise.race` is deterministic in that only the state of the first
	  settled promise matters. For example, even if other promises given to the
	  `promises` array argument are resolved, but the first settled promise has
	  become rejected before the other promises became fulfilled, the returned
	  promise will become rejected:
	
	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });
	
	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      reject(new Error('promise 2'));
	    }, 100);
	  });
	
	  Promise.race([promise1, promise2]).then(function(result){
	    // Code here never runs
	  }, function(reason){
	    // reason.message === 'promise 2' because promise 2 became rejected before
	    // promise 1 became fulfilled
	  });
	  ```
	
	  An example real-world use case is implementing timeouts:
	
	  ```javascript
	  Promise.race([ajax('foo.json'), timeout(5000)])
	  ```
	
	  @method race
	  @static
	  @param {Array} promises array of promises to observe
	  Useful for tooling.
	  @return {Promise} a promise which settles in the same way as the first passed
	  promise to settle.
	*/
	function race(entries) {
	  /*jshint validthis:true */
	  var Constructor = this;
	
	  if (!isArray(entries)) {
	    return new Constructor(function (_, reject) {
	      return reject(new TypeError('You must pass an array to race.'));
	    });
	  } else {
	    return new Constructor(function (resolve, reject) {
	      var length = entries.length;
	      for (var i = 0; i < length; i++) {
	        Constructor.resolve(entries[i]).then(resolve, reject);
	      }
	    });
	  }
	}
	
	/**
	  `Promise.reject` returns a promise rejected with the passed `reason`.
	  It is shorthand for the following:
	
	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    reject(new Error('WHOOPS'));
	  });
	
	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```
	
	  Instead of writing the above, your code now simply becomes the following:
	
	  ```javascript
	  let promise = Promise.reject(new Error('WHOOPS'));
	
	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```
	
	  @method reject
	  @static
	  @param {Any} reason value that the returned promise will be rejected with.
	  Useful for tooling.
	  @return {Promise} a promise rejected with the given `reason`.
	*/
	function reject(reason) {
	  /*jshint validthis:true */
	  var Constructor = this;
	  var promise = new Constructor(noop);
	  _reject(promise, reason);
	  return promise;
	}
	
	function needsResolver() {
	  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	}
	
	function needsNew() {
	  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	}
	
	/**
	  Promise objects represent the eventual result of an asynchronous operation. The
	  primary way of interacting with a promise is through its `then` method, which
	  registers callbacks to receive either a promise's eventual value or the reason
	  why the promise cannot be fulfilled.
	
	  Terminology
	  -----------
	
	  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	  - `thenable` is an object or function that defines a `then` method.
	  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	  - `exception` is a value that is thrown using the throw statement.
	  - `reason` is a value that indicates why a promise was rejected.
	  - `settled` the final resting state of a promise, fulfilled or rejected.
	
	  A promise can be in one of three states: pending, fulfilled, or rejected.
	
	  Promises that are fulfilled have a fulfillment value and are in the fulfilled
	  state.  Promises that are rejected have a rejection reason and are in the
	  rejected state.  A fulfillment value is never a thenable.
	
	  Promises can also be said to *resolve* a value.  If this value is also a
	  promise, then the original promise's settled state will match the value's
	  settled state.  So a promise that *resolves* a promise that rejects will
	  itself reject, and a promise that *resolves* a promise that fulfills will
	  itself fulfill.
	
	
	  Basic Usage:
	  ------------
	
	  ```js
	  let promise = new Promise(function(resolve, reject) {
	    // on success
	    resolve(value);
	
	    // on failure
	    reject(reason);
	  });
	
	  promise.then(function(value) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```
	
	  Advanced Usage:
	  ---------------
	
	  Promises shine when abstracting away asynchronous interactions such as
	  `XMLHttpRequest`s.
	
	  ```js
	  function getJSON(url) {
	    return new Promise(function(resolve, reject){
	      let xhr = new XMLHttpRequest();
	
	      xhr.open('GET', url);
	      xhr.onreadystatechange = handler;
	      xhr.responseType = 'json';
	      xhr.setRequestHeader('Accept', 'application/json');
	      xhr.send();
	
	      function handler() {
	        if (this.readyState === this.DONE) {
	          if (this.status === 200) {
	            resolve(this.response);
	          } else {
	            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	          }
	        }
	      };
	    });
	  }
	
	  getJSON('/posts.json').then(function(json) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```
	
	  Unlike callbacks, promises are great composable primitives.
	
	  ```js
	  Promise.all([
	    getJSON('/posts'),
	    getJSON('/comments')
	  ]).then(function(values){
	    values[0] // => postsJSON
	    values[1] // => commentsJSON
	
	    return values;
	  });
	  ```
	
	  @class Promise
	  @param {function} resolver
	  Useful for tooling.
	  @constructor
	*/
	function Promise(resolver) {
	  this[PROMISE_ID] = nextId();
	  this._result = this._state = undefined;
	  this._subscribers = [];
	
	  if (noop !== resolver) {
	    typeof resolver !== 'function' && needsResolver();
	    this instanceof Promise ? initializePromise(this, resolver) : needsNew();
	  }
	}
	
	Promise.all = all;
	Promise.race = race;
	Promise.resolve = resolve;
	Promise.reject = reject;
	Promise._setScheduler = setScheduler;
	Promise._setAsap = setAsap;
	Promise._asap = asap;
	
	Promise.prototype = {
	  constructor: Promise,
	
	  /**
	    The primary way of interacting with a promise is through its `then` method,
	    which registers callbacks to receive either a promise's eventual value or the
	    reason why the promise cannot be fulfilled.
	  
	    ```js
	    findUser().then(function(user){
	      // user is available
	    }, function(reason){
	      // user is unavailable, and you are given the reason why
	    });
	    ```
	  
	    Chaining
	    --------
	  
	    The return value of `then` is itself a promise.  This second, 'downstream'
	    promise is resolved with the return value of the first promise's fulfillment
	    or rejection handler, or rejected if the handler throws an exception.
	  
	    ```js
	    findUser().then(function (user) {
	      return user.name;
	    }, function (reason) {
	      return 'default name';
	    }).then(function (userName) {
	      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	      // will be `'default name'`
	    });
	  
	    findUser().then(function (user) {
	      throw new Error('Found user, but still unhappy');
	    }, function (reason) {
	      throw new Error('`findUser` rejected and we're unhappy');
	    }).then(function (value) {
	      // never reached
	    }, function (reason) {
	      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	    });
	    ```
	    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	  
	    ```js
	    findUser().then(function (user) {
	      throw new PedagogicalException('Upstream error');
	    }).then(function (value) {
	      // never reached
	    }).then(function (value) {
	      // never reached
	    }, function (reason) {
	      // The `PedgagocialException` is propagated all the way down to here
	    });
	    ```
	  
	    Assimilation
	    ------------
	  
	    Sometimes the value you want to propagate to a downstream promise can only be
	    retrieved asynchronously. This can be achieved by returning a promise in the
	    fulfillment or rejection handler. The downstream promise will then be pending
	    until the returned promise is settled. This is called *assimilation*.
	  
	    ```js
	    findUser().then(function (user) {
	      return findCommentsByAuthor(user);
	    }).then(function (comments) {
	      // The user's comments are now available
	    });
	    ```
	  
	    If the assimliated promise rejects, then the downstream promise will also reject.
	  
	    ```js
	    findUser().then(function (user) {
	      return findCommentsByAuthor(user);
	    }).then(function (comments) {
	      // If `findCommentsByAuthor` fulfills, we'll have the value here
	    }, function (reason) {
	      // If `findCommentsByAuthor` rejects, we'll have the reason here
	    });
	    ```
	  
	    Simple Example
	    --------------
	  
	    Synchronous Example
	  
	    ```javascript
	    let result;
	  
	    try {
	      result = findResult();
	      // success
	    } catch(reason) {
	      // failure
	    }
	    ```
	  
	    Errback Example
	  
	    ```js
	    findResult(function(result, err){
	      if (err) {
	        // failure
	      } else {
	        // success
	      }
	    });
	    ```
	  
	    Promise Example;
	  
	    ```javascript
	    findResult().then(function(result){
	      // success
	    }, function(reason){
	      // failure
	    });
	    ```
	  
	    Advanced Example
	    --------------
	  
	    Synchronous Example
	  
	    ```javascript
	    let author, books;
	  
	    try {
	      author = findAuthor();
	      books  = findBooksByAuthor(author);
	      // success
	    } catch(reason) {
	      // failure
	    }
	    ```
	  
	    Errback Example
	  
	    ```js
	  
	    function foundBooks(books) {
	  
	    }
	  
	    function failure(reason) {
	  
	    }
	  
	    findAuthor(function(author, err){
	      if (err) {
	        failure(err);
	        // failure
	      } else {
	        try {
	          findBoooksByAuthor(author, function(books, err) {
	            if (err) {
	              failure(err);
	            } else {
	              try {
	                foundBooks(books);
	              } catch(reason) {
	                failure(reason);
	              }
	            }
	          });
	        } catch(error) {
	          failure(err);
	        }
	        // success
	      }
	    });
	    ```
	  
	    Promise Example;
	  
	    ```javascript
	    findAuthor().
	      then(findBooksByAuthor).
	      then(function(books){
	        // found books
	    }).catch(function(reason){
	      // something went wrong
	    });
	    ```
	  
	    @method then
	    @param {Function} onFulfilled
	    @param {Function} onRejected
	    Useful for tooling.
	    @return {Promise}
	  */
	  then: then,
	
	  /**
	    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	    as the catch block of a try/catch statement.
	  
	    ```js
	    function findAuthor(){
	      throw new Error('couldn't find that author');
	    }
	  
	    // synchronous
	    try {
	      findAuthor();
	    } catch(reason) {
	      // something went wrong
	    }
	  
	    // async with promises
	    findAuthor().catch(function(reason){
	      // something went wrong
	    });
	    ```
	  
	    @method catch
	    @param {Function} onRejection
	    Useful for tooling.
	    @return {Promise}
	  */
	  'catch': function _catch(onRejection) {
	    return this.then(null, onRejection);
	  }
	};
	
	function polyfill() {
	    var local = undefined;
	
	    if (typeof global !== 'undefined') {
	        local = global;
	    } else if (typeof self !== 'undefined') {
	        local = self;
	    } else {
	        try {
	            local = Function('return this')();
	        } catch (e) {
	            throw new Error('polyfill failed because global object is unavailable in this environment');
	        }
	    }
	
	    var P = local.Promise;
	
	    if (P) {
	        var promiseToString = null;
	        try {
	            promiseToString = Object.prototype.toString.call(P.resolve());
	        } catch (e) {
	            // silently ignored
	        }
	
	        if (promiseToString === '[object Promise]' && !P.cast) {
	            return;
	        }
	    }
	
	    local.Promise = Promise;
	}
	
	// Strange compat..
	Promise.polyfill = polyfill;
	Promise.Promise = Promise;
	
	return Promise;
	
	})));
	//# sourceMappingURL=es6-promise.map
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15), (function() { return this; }())))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	/* (ignored) */

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
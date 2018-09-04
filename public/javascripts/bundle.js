/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _damageCalc = __webpack_require__(1);

var _damageCalc2 = _interopRequireDefault(_damageCalc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.writeln('<p>攻撃力 100, 防御 50, 防御貫通 30 のダメージは、' + _damageCalc2.default.effectiveDamage(100, 50, 30) + '</p>');

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 攻撃力が防御力や防御力貫通によってどのようなダメージになるのかを計算する関数
 * 
 * 負の入力値があった場合には0として扱い、2000以上の入力値は2000として扱う。
 * 実効防御力は、防御力 - 防御力貫通 で定義され、
 * この実行防御力は、0未満にはならない。
 * ダメージ減少率は、実効防御力 / (100 + 実効防御力) で定義され、
 * ダメージは、攻撃力 * (1 - ダメージ減少率) を小数点以下で四捨五入した値となる。
 * 
 * @param {Number} power 攻撃力
 * @param {Number} armor 防御力
 * @param {Number} armorPenetration 防御力貫通
 * @return {Number} ダメージ
 */
function effectiveDamage(power, armor, armorPenetration) {
  let effectiveArmor = normalize(armor) - normalize(armorPenetration);
  effectiveArmor = effectiveArmor <= 0 ? 0 : effectiveArmor;
  let damageDecrease = effectiveArmor / (100 + effectiveArmor);
  return Math.round(normalize(power) * (1 - damageDecrease));
}

/**
 * 異常な可能性のある入力値を正常値にする
 * @param {Number} n 異常な可能性のある入力値
 * @return {Number} 正常値
 */
function normalize(n) {
  if (n < 0) {
    return 0;
  } else if (n >= 2000) {
    return 2000;
  } else {
    return n;
  }
}

module.exports = {
  effectiveDamage: effectiveDamage
};

/***/ })
/******/ ]);
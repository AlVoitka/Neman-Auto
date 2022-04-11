/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/downslider.js":
/*!**************************************!*\
  !*** ./src/js/modules/downslider.js ***!
  \**************************************/
/***/ ((module) => {

function downslider() {
    
    $(document).ready(function(){
        $('.myslider__downslider').slick({
            dots: false,
            arrows: true,
            infinite: true,
            autoplay: true, 
            autoplaySpeed: 2000,
            speed: 1000,
            fade: true,
            cssEase: 'linear',
            slidesToShow: 3,
            slidesToScroll: 3,
            prevArrow: '<button type="button" class="slick-prev"><img src="./img/left-arrow.svg"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="./img/right-arrow.svg"></button>',
          });
    });
    
}

module.exports = downslider;

/***/ }),

/***/ "./src/js/modules/upslider.js":
/*!************************************!*\
  !*** ./src/js/modules/upslider.js ***!
  \************************************/
/***/ ((module) => {

function upslider() {
    
    $(document).ready(function(){
        $('.myslider__upslider').slick({
            dots: false,
            arrows: false,
            infinite: true,
            autoplay: true, 
            autoplaySpeed: 2000,
            speed: 1000,
            fade: true,
            cssEase: 'linear',
          });
    });
    
}

module.exports = upslider;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/

window.addEventListener('DOMContentLoaded', function() {
    const upslider = __webpack_require__(/*! ./modules/upslider */ "./src/js/modules/upslider.js"),
          downslider =__webpack_require__(/*! ./modules/downslider */ "./src/js/modules/downslider.js");
          

    upslider();
    downslider();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
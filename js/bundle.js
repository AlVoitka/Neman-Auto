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
            dots: true,
            arrows: true,
            infinite: true,
            autoplay: true, 
            slidesToShow: 4,
            slidesToScroll: 2,
            prevArrow: '<button type="button" class="slick-prev"><img src="./img/left-arrow.svg"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="./img/right-arrow.svg"></button>',
           
          });
    });
    
}

module.exports = downslider;

/***/ }),

/***/ "./src/js/modules/scrollUP.js":
/*!************************************!*\
  !*** ./src/js/modules/scrollUP.js ***!
  \************************************/
/***/ ((module) => {

function scrollUP() {


    $(window).scroll(function() {
        if ($(this).scrollTop() > 1900) {
          $('.scroll-up').fadeIn();
        } else {
          $('.scroll-up').fadeOut();
        }
      });
      

    $("a[href^='#']").click(function(){
    const _href = $(this).attr("href");
    $("html,body").animate({scrollTop:$(_href).offset().top+"px"});
    return false;
    });

}

module.exports = scrollUP;

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ ((module) => {

function tabs() {



    const tabs = document.querySelectorAll('.benefits__img'),
      tabsContent = document.querySelectorAll('.benefits__tabcontent'),
      tabsParents = document.querySelector('.benefits__menu');


    function hideTabContent() {
        tabsContent.forEach(item=>{
            item.style.display = 'none';
        })
        tabs.forEach(item =>{
            item.classList.remove('benefits__img-active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('benefits__img-active');
    }

    hideTabContent();
    showTabContent();

    tabsParents.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('benefits__img')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }

            });
        }
    });





}

module.exports = tabs;



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
          downslider =__webpack_require__(/*! ./modules/downslider */ "./src/js/modules/downslider.js"),
          tabs =__webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js"),
          scrollUP =__webpack_require__(/*! ./modules/scrollUP */ "./src/js/modules/scrollUP.js")
          

    upslider();
    downslider();
    tabs();
    scrollUP();
    

    new WOW().init();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
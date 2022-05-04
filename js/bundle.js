/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/clientCard.js":
/*!**************************************!*\
  !*** ./src/js/modules/clientCard.js ***!
  \**************************************/
/***/ ((module) => {

function clientCard() {




    class ClientCard {
        constructor(src, alt, title, descr, price, parentSelector) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 1.1;
            this.changeToEUR();
        }


        changeToEUR() {
            this.price = this.price * this.transfer;
        }


        render() {
            const element = document.createElement('div');
            element.innerHTML =`
            <div class="menu__item">
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Price:</div>
                    <div class="menu__item-total"><span>${this.price}</span> usd/year</div>
                </div>
            </div>
            `;
            this.parent.append(element);
        }
    }

    new ClientCard(
        "./scss/blocks/main/clientCard/silver.png",
        "silver",
        'Card "Silver"',
        'Product of active and healthy people. This is a brand new product with the best price and high quality!',
        20,
        '.container_1'
    ).render();  

    new ClientCard(
        "./scss/blocks/main/clientCard/gold.png",
        "gold",
        'Card “Gold”',
        'Product of active and healthy people. This is a brand new product with the best price and high quality!',
        40,
        '.container_1'
    ).render();  

    new ClientCard(
        "./scss/blocks/main/clientCard/platinum.jpg",
        "platinum",
        'Card "Platinum"',
        'Product of active and healthy people. This is a brand new product with the best price and high quality!',
        500,
        '.container_1'
    ).render();  
    






}

module.exports = clientCard;

/***/ }),

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
            responsive: [

                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        arrows: false
                    }
                },

                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false
                    }
                },

                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                },

            ]
           
          });
    });



    
}

module.exports = downslider;

/***/ }),

/***/ "./src/js/modules/interactive.js":
/*!***************************************!*\
  !*** ./src/js/modules/interactive.js ***!
  \***************************************/
/***/ ((module) => {

function interactive() {



    const typeDB = {
        type: [
            // "Trucking transportation",
            // "Air transportation",
            // "Rail transportation",
            // "Ferry transportation"
        ]
    };





    const   vehicleList = document.querySelector('.interactive__interactive-list'),
            addForm = document.querySelector('.add'),
            addInput = addForm.querySelector('.interactive__box-input'),
            checkbox = addForm.querySelector('[type="checkbox"]');



    

    function createNewUserList (list, DB) {

        list.innerHTML = "";

        DB.forEach((vehicle,i) => {
            list.innerHTML += `
            <li class="interactive__interactive-item">${i + 1} ${vehicle}
                <div class="delete"></div>
            </li>
            `
        });

        document.querySelectorAll('.delete').forEach((btn, i) =>{
            btn.addEventListener('click', () =>{
                btn.parentElement.remove();
                typeDB.type.splice(i, 1);

                createNewUserList(vehicleList, typeDB.type);
            })
        })
        
    }
    createNewUserList(vehicleList, typeDB.type);




    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const userValue = addInput.value;
              userCheck = checkbox.checked;

        if(userValue || userCheck) {

            if (userCheck)  {
                vehicleList.innerHTML = "";
                vehicleList.innerHTML = `
                <li class="interactive__interactive-item">I only use trucks
                    <div class="delete"></div>
                </li>
                `;
            } else {
                typeDB.type.push(userValue);
                typeDB.type.sort();
                createNewUserList(vehicleList, typeDB.type);
                addForm.reset();
            } 
        }   
    });









}

module.exports = interactive; 

/***/ }),

/***/ "./src/js/modules/mailer.js":
/*!**********************************!*\
  !*** ./src/js/modules/mailer.js ***!
  \**********************************/
/***/ ((module) => {

function mailer() {



    // $('form').submit(function() {
    //     e.preventDefault();
  
    //     if(!$(this).valid()) {
    //       return;
    //     }
  
    //     $.ajax({
    //       type: "POST",
    //       url: "mailer/smart.php",
    //       data: $(this).serialize()
    //     }).done(function() {
    //       $(this).finde("input").val("");
    //       $('form').trigger('reset');
    //     });
    //     return false;
    // });







}

module.exports = mailer; 

/***/ }),

/***/ "./src/js/modules/modal_JS.js":
/*!************************************!*\
  !*** ./src/js/modules/modal_JS.js ***!
  \************************************/
/***/ ((module) => {


function modal_JS() {

   const modalTrigger1 = document.querySelector('[data-modal]');
   const modalTrigger2 = document.querySelector('[data-modalSuccss]');
   const overlay = document.querySelector('.overlay-JS');
   const modalFeedback = document.querySelector('#feedback-JS');
   const modalSucces = document.querySelector('#success-JS');
   const modalClose = document.querySelectorAll('[data-close]');


    function openModal_1() {
        overlay.style.display="block";
        modalFeedback.style.display="block";
        document.body.style.overflow="hidden";
        clearTimeout(modalTimerId);
    }

    modalTrigger1.addEventListener('click', openModal_1);

    modalTrigger2.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.style.display="block";
        modalSucces.style.display="block";
        modalFeedback.style.display="none";
    })

    function closeModal() {
        overlay.style.display="none";
        modalFeedback.style.display="none";
        modalSucces.style.display="none";
        document.body.style.overflow="";
    }

    modalClose.forEach(item => {
        item.addEventListener('click', closeModal)
    })

    overlay.addEventListener('click', (e)=> {
        if(e.target === overlay) {
           closeModal();
        }
    })

    // const modalTimerId = setTimeout(openModal_1, 6000); 


    function showModalByScroll() {
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal_1();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);






}



module.exports = modal_JS; 

/***/ }),

/***/ "./src/js/modules/modal_jQ.js":
/*!************************************!*\
  !*** ./src/js/modules/modal_jQ.js ***!
  \************************************/
/***/ ((module) => {

function modal_jQ() {




    $('.btn_header').on('click', function() {
        $('.overlay, #consult').fadeIn('0.5s');
    }); 

    $('.modal__close').on('click', function(){
        $('.overlay, #consult, #success').fadeOut('1s');
      });

    $('.btn_modal').on('click', function() {
        $('#consult').fadeOut('1s');
        $('#success').fadeIn('1s');
    });  

    $('.btn').on('click', function() {
        $('.overlay, #success').fadeIn('1s');
    });  
     



}

module.exports = modal_jQ; 

/***/ }),

/***/ "./src/js/modules/prompts.js":
/*!***********************************!*\
  !*** ./src/js/modules/prompts.js ***!
  \***********************************/
/***/ ((module) => {

function prompts() {

   


    // const userDB = {
    //     answers: {}
    // };


    // for (let i = 0; i < 1; i++) {

    //     const ask_1 = prompt('Are you a cargo owner or logistician?','')
    //     const ask_2 = prompt('Do you want a consultation?','')

    //     if(ask_1 != null && ask_2 != null && ask_1 !='' && ask_2 !='' && ask_1.length < 11 && ask_2.length < 11 ) {
    //         console.log('Done!');
    //         userDB.answers[ask_1] = ask_2;
    //     } else {
    //         console.log('Error!');
    //         i--;
    //     }
    // }



  

    




    


}

module.exports = prompts; 

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

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/***/ ((module) => {

function timer() {




    const deadline = '2022-12-31';

    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds;
        const t = Date.parse(endtime) - Date.parse(new Date());


        if (t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;

        } else {
            days = Math.floor( (t/(1000*60*60*24)) ),
            seconds = Math.floor( (t/1000) % 60 ),
            minutes = Math.floor( (t/1000/60) % 60 ),
            hours = Math.floor( (t/(1000*60*60) % 24) );
        }
         
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }




    function getZero(num){
        if (num >= 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        }
    }





    function setClock(selector, endtime) {

        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);












}

module.exports = timer;

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
          prompts = __webpack_require__(/*! ./modules/prompts */ "./src/js/modules/prompts.js"),
          modal_jQ = __webpack_require__(/*! ./modules/modal_jQ */ "./src/js/modules/modal_jQ.js"),
          modal_JS = __webpack_require__(/*! ./modules/modal_JS */ "./src/js/modules/modal_JS.js"),
          mailer = __webpack_require__(/*! ./modules/mailer */ "./src/js/modules/mailer.js"),
          interactive = __webpack_require__(/*! ./modules/interactive */ "./src/js/modules/interactive.js"),
          timer = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js");
          clientCard = __webpack_require__(/*! ./modules/clientCard */ "./src/js/modules/clientCard.js");
          

    upslider();
    downslider();
    tabs();
    scrollUP();
    modal_jQ();
    modal_JS();
    mailer();
    prompts();
    interactive();
    timer();
    clientCard();
    

    new WOW().init();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
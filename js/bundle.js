/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/calculating.js":
/*!***************************************!*\
  !*** ./src/js/modules/calculating.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function calculating() {





    const result = document.querySelector('.calculating__result');

    let truck_age, trucks_count, drivers_count, ratio;



    function calcTotal() {

        if (!truck_age || !trucks_count || !drivers_count || !activity) {
            result.textContent = 'Fill in all the fields!';
            return;
        }

        if (truck_age === 'less_5') {
            result.textContent = 1.1 * activity * trucks_count;
        } else {
            result.textContent = 0.8 * activity * trucks_count;
        }
        
    }
    calcTotal();


    function getStaticInfo(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {

                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');
                } else {
                    truck_age = e.target.getAttribute('id');
                }
    
                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                });
    
                e.target.classList.add(activeClass);
            });

        });
    }
    getStaticInfo('#gender div', 'calculating__choose-item_active');
    getStaticInfo('.calculating__choose_big div', 'calculating__choose-item_active');



    function getFleetInformation(selector) {
        const input = document.querySelector(selector);
        
        input.addEventListener('input', ()=> {
            switch(input.getAttribute('id')) {
                case 'count-tracks':
                    trucks_count = +input.value;
                    break;
                case 'count-drivers':
                    drivers_count = +input.value;
                    break;
            }
            
        });
        
    }
    getFleetInformation('#count-tracks');
    getFleetInformation('#count-drivers');

    console.log(trucks_count);

























    // if (localStorage.getItem('truck_age')) {
    //     truck_age = localStorage.getItem('truck_age');
    // } else {
    //     truck_age = 'female';
    //     localStorage.setItem('sex', 'female');
    // }

    // if (localStorage.getItem('ratio')) {
    //     ratio = localStorage.getItem('ratio');
    // } else {
    //     ratio = 1.375;
    //     localStorage.setItem('ratio', 1.375);
    // }



    // function initLocalSettings(selector, activeClass) {
    //     const elements = document.querySelectorAll(selector);

    //     elements.forEach(elem => {
    //         elem.classList.remove(activeClass);
    //         if (elem.getAttribute('id') === localStorage.getItem('truck_age')) {
    //             elem.classList.add(activeClass);
    //         }
    //         if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
    //             elem.classList.add(activeClass);
    //         }
    //     });
    // }

    // initLocalSettings('#gender div', 'calculating__choose-item_active');
    // initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');




    





    // function getAgeInformation() {
    //     const elements = document.querySelectorAll('.age');

        

    //     elements.forEach(elem => {
    //         elem.addEventListener('click', (e) => {
    //             truck_age = +e.target.getAttribute('id');

    //             elements.forEach(elem => {
    //                 elem.classList.remove('calculating__choose-item_active');
    //                 e.target.classList.add('calculating__choose-item_active');
    //             })
    //         });
    //     });
    // }
    // getAgeInformation();
    


    




    // function getActivityInformation() {
    //     const elements = document.querySelectorAll('.activity');

    //     elements.forEach(elem => {
    //         elem.addEventListener('click', (e) => {

    //             activity = +e.target.getAttribute('data-ratio');

    //             elements.forEach(elem => {
    //                 elem.classList.remove('calculating__choose-item_active');
    //                 e.target.classList.add('calculating__choose-item_active');
    //             })

    //         });
    //     });
    // }
    // getActivityInformation();


    // function getFleetInformation(selector) {
    //     const input = document.querySelector(selector);

    //     input.addEventListener('input', ()=> {
    //         switch(input.getAttribute('id')) {
    //             case 'count-tracks':
    //                 trucks_count = +input.value;
    //                 break;
    //             case 'count-drivers':
    //                 drivers_count = +input.value;
    //                 break;
    //         }
            
    //     });
    // }
    // getFleetInformation('#count-tracks');
    // getFleetInformation('#count-drivers');


    

    // console.log(truck_age);
    // console.log(trucks_count);
    // console.log(drivers_count);
    // console.log(activity);




    





}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculating);

/***/ }),

/***/ "./src/js/modules/clientCard.js":
/*!**************************************!*\
  !*** ./src/js/modules/clientCard.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientCard);

/***/ }),

/***/ "./src/js/modules/downslider.js":
/*!**************************************!*\
  !*** ./src/js/modules/downslider.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (downslider);

/***/ }),

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function form() {

    const forms = document.querySelectorAll('form');

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const request = new XMLHttpRequest();
            request.open('POST', 'server.php')

        })


    }








}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form); 

/***/ }),

/***/ "./src/js/modules/header.js":
/*!**********************************!*\
  !*** ./src/js/modules/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function header() {

    // const elemNavi = document.querySelectorAll('.header__link');


    // function hideClass() {
    //     elemNavi.forEach(item => {
    //         item.classList.remove('header__link');
    //     })
    // }
    
    // function addActiveClass(npp) {
    //     elemNavi.forEach(item => {
    //         item[npp].classList.add('header__link-active');
    //     })
    // }
    // addActiveClass(1);


    // elemNavi.forEach(i => {
    //     i.addEventListener('click', (event)=> {

    //         const target = event.target;

    //         if (target) {
    //             elemNavi.forEach((item, npp) => {
    //                 if(target == item) {
    //                     hideClass();
    //                     addActiveClass(npp);
    //                 }
    //             })
    //         }
            

    //     })
    // })

    


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);

/***/ }),

/***/ "./src/js/modules/interactive.js":
/*!***************************************!*\
  !*** ./src/js/modules/interactive.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
        const userCheck = checkbox.checked;

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (interactive); 

/***/ }),

/***/ "./src/js/modules/mailer.js":
/*!**********************************!*\
  !*** ./src/js/modules/mailer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mailer); 

/***/ }),

/***/ "./src/js/modules/modal_JS.js":
/*!************************************!*\
  !*** ./src/js/modules/modal_JS.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

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

    const modalTimerId = setTimeout(openModal_1, 60000); 


    function showModalByScroll() {
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal_1();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);






}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal_JS); 

/***/ }),

/***/ "./src/js/modules/modal_jQ.js":
/*!************************************!*\
  !*** ./src/js/modules/modal_jQ.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal_jQ); 

/***/ }),

/***/ "./src/js/modules/prompts.js":
/*!***********************************!*\
  !*** ./src/js/modules/prompts.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prompts); 

/***/ }),

/***/ "./src/js/modules/scrollUP.js":
/*!************************************!*\
  !*** ./src/js/modules/scrollUP.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollUP);

/***/ }),

/***/ "./src/js/modules/sliderNativeJS.js":
/*!******************************************!*\
  !*** ./src/js/modules/sliderNativeJS.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function sliderJS() {


    let slideIndex = 1;
    
    const indicators = document.querySelector('.aboutAs__indicators');
    const slides = document.querySelectorAll('.aboutAs__sliderJS-item');
    const prev = document.querySelector('.aboutAs__sliderJS-prev');
    const next = document.querySelector('.aboutAs__sliderJS-next');
    const total = document.querySelector('#total');
    const current = document.querySelector('#current');
    const dots = [];

    
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            width: 70px;
            height: 15px;
            margin-right: 10px;
            margin-left: 10px;
            cursor: pointer;
            background-color: aqua;
            border-radius: 50%;
            background-clip: padding-box;
            border-color: white;
            border: 2px;
            opacity: .3;
            transition: opacity .6s ease;
        `;

        if (i == 0) {
            dot.style.backgroundColor = 'aqua';
            dot.style.opacity = 1;
        }
        
        indicators.append(dot);
        dots.push(dot);
    }
       

    showSlides(slideIndex);


    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
    } else {
        total.textContent = slides.length;
    }


    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'block'; 
        
        if (slides.length < 10) {
            current.textContent =  `0${slideIndex}`;
        } else {
            current.textContent =  slideIndex;
        }
    }


    function plusSlides (n) {
        showSlides(slideIndex += n);
        dots.forEach(dot => dot.style.opacity = ".5");
        dots[slideIndex-1].style.opacity = 1;
    }


    prev.addEventListener('click', function(){
        plusSlides(-1);
    });

    next.addEventListener('click', function(){
        plusSlides(1);
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            showSlides();

            slideIndex = slideTo;

            showSlides();

            if (slides.length < 10) {
                current.textContent =  `0${slideIndex}`;
            } else {
                current.textContent =  slideIndex;
            }

            

            dots.forEach(dot => dot.style.opacity = ".5");
            dots[slideIndex-1].style.opacity = 1;
        })
    })







}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderJS); 

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);



/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./src/js/modules/upslider.js":
/*!************************************!*\
  !*** ./src/js/modules/upslider.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (upslider);

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_upslider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/upslider */ "./src/js/modules/upslider.js");
/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/header */ "./src/js/modules/header.js");
/* harmony import */ var _modules_downslider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/downslider */ "./src/js/modules/downslider.js");
/* harmony import */ var _modules_sliderNativeJS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/sliderNativeJS */ "./src/js/modules/sliderNativeJS.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_scrollUP__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/scrollUP */ "./src/js/modules/scrollUP.js");
/* harmony import */ var _modules_prompts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/prompts */ "./src/js/modules/prompts.js");
/* harmony import */ var _modules_modal_jQ__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/modal_jQ */ "./src/js/modules/modal_jQ.js");
/* harmony import */ var _modules_modal_JS__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/modal_JS */ "./src/js/modules/modal_JS.js");
/* harmony import */ var _modules_mailer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/mailer */ "./src/js/modules/mailer.js");
/* harmony import */ var _modules_interactive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/interactive */ "./src/js/modules/interactive.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js");
/* harmony import */ var _modules_clientCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/clientCard */ "./src/js/modules/clientCard.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/form */ "./src/js/modules/form.js");
/* harmony import */ var _modules_calculating__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/calculating */ "./src/js/modules/calculating.js");



















window.addEventListener('DOMContentLoaded', function() {

    (0,_modules_header__WEBPACK_IMPORTED_MODULE_1__["default"])();      
    (0,_modules_upslider__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_modules_downslider__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_modules_sliderNativeJS__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__["default"])();
    (0,_modules_scrollUP__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_modules_modal_jQ__WEBPACK_IMPORTED_MODULE_7__["default"])();
    (0,_modules_modal_JS__WEBPACK_IMPORTED_MODULE_8__["default"])();
    (0,_modules_mailer__WEBPACK_IMPORTED_MODULE_9__["default"])();
    (0,_modules_prompts__WEBPACK_IMPORTED_MODULE_6__["default"])();
    (0,_modules_interactive__WEBPACK_IMPORTED_MODULE_10__["default"])();
    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_11__["default"])();
    (0,_modules_clientCard__WEBPACK_IMPORTED_MODULE_12__["default"])();
    (0,_modules_form__WEBPACK_IMPORTED_MODULE_13__["default"])();
    (0,_modules_calculating__WEBPACK_IMPORTED_MODULE_14__["default"])();
    
    

    new WOW().init();
    
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
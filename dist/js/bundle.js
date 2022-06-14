(()=>{"use strict";window.addEventListener("DOMContentLoaded",(function(){var e,t,n,o;e=document.querySelector(".promo__hamburger"),t=document.querySelector(".sidebar__close"),n=document.querySelector(".sidebar"),o=document.querySelector(".sidebar__overlay"),e.addEventListener("click",(function(){n.classList.add("active")})),t.addEventListener("click",(function(){n.classList.remove("active")})),o.addEventListener("click",(function(e){e.target===o&&n.classList.remove("active")})),document.querySelectorAll('a[href^="#"').forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),n.classList.remove("active");var t=this.getAttribute("href").substring(1),o=document.getElementById(t).getBoundingClientRect().top-0;window.scrollBy({top:o,behavior:"smooth"})}))})),$(document).ready((function(){$(".myslider__upslider").slick({dots:!1,arrows:!1,infinite:!0,autoplay:!0,autoplaySpeed:2e3,speed:1e3,fade:!0,cssEase:"linear"})})),$(document).ready((function(){$(".myslider__downslider").slick({dots:!0,arrows:!0,infinite:!0,autoplay:!0,slidesToShow:4,slidesToScroll:2,prevArrow:'<button type="button" class="slick-prev"><img src="./dist/img/left-arrow.svg"></button>',nextArrow:'<button type="button" class="slick-next"><img src="./dist/img/right-arrow.svg"></button>',responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:2,arrows:!1}},{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1,arrows:!1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1}}]})})),function(){var e=document.querySelectorAll(".benefits__img"),t=document.querySelectorAll(".benefits__tabcontent"),n=document.querySelector(".benefits__menu");function o(){t.forEach((function(e){e.style.display="none"})),e.forEach((function(e){e.classList.remove("benefits__img-active")}))}function c(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;t[n].style.display="block",e[n].classList.add("benefits__img-active")}o(),c(),n.addEventListener("click",(function(t){var n=t.target;n&&n.classList.contains("benefits__img")&&e.forEach((function(e,t){n==e&&(o(),c(t))}))}))}(),$(window).scroll((function(){$(this).scrollTop()>1900?$(".scroll-up").fadeIn():$(".scroll-up").fadeOut()})),$("a[href^='#']").click((function(){var e=$(this).attr("href");return $("html,body").animate({scrollTop:$(e).offset().top+"px"}),!1})),$(".btn_header").on("click",(function(){$(".overlay, #consult").fadeIn("0.5s")})),$(".modal__close").on("click",(function(){$(".overlay, #consult, #success").fadeOut("1s")})),$(".btn_modal").on("submit",(function(e){$("#consult").fadeOut("1s"),$("#success").fadeIn("1s")})),$(".btn").on("submit",(function(e){$(".overlay, #success").fadeIn("1s")})),function(){var e=document.querySelector("[data-modal]"),t=document.querySelector("[data-modalSuccss]"),n=document.querySelector(".overlay-JS"),o=document.querySelector("#feedback-JS"),c=document.querySelector("#success-JS"),i=document.querySelectorAll("[data-close]");function r(){n.style.display="block",o.style.display="block",document.body.style.overflow="hidden",clearTimeout(l)}function s(){n.style.display="none",o.style.display="none",c.style.display="none",document.body.style.overflow=""}e.addEventListener("click",r),t.addEventListener("submit",(function(e){n.style.display="block",c.style.display="block",o.style.display="none"})),i.forEach((function(e){e.addEventListener("click",s)})),n.addEventListener("click",(function(e){e.target===n&&s()}));var l=setTimeout(r,6e4);window.addEventListener("scroll",(function e(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(r(),window.removeEventListener("scroll",e))}))}(),function(){var e={type:[]},t=document.querySelector(".interactive__interactive-list"),n=document.querySelector(".add"),o=n.querySelector(".interactive__box-input"),c=n.querySelector('[type="checkbox"]');function i(n,o){n.innerHTML="",o.forEach((function(e,t){n.innerHTML+='\n            <li class="interactive__interactive-item">'.concat(t+1," ").concat(e,'\n                <div class="delete"></div>\n            </li>\n            ')})),document.querySelectorAll(".delete").forEach((function(n,o){n.addEventListener("click",(function(){n.parentElement.remove(),e.type.splice(o,1),i(t,e.type)}))}))}i(t,e.type),n.addEventListener("submit",(function(r){r.preventDefault();var s=o.value,l=c.checked;(s||l)&&(l?(t.innerHTML="",t.innerHTML='\n                <li class="interactive__interactive-item">I only use trucks\n                    <div class="delete"></div>\n                </li>\n                '):(e.type.push(s),e.type.sort(),i(t,e.type),n.reset()))}))}(),function(){function e(e){return e>=0&&e<10?"0"+e:e}!function(t,n){var o=document.querySelector(".timer"),c=o.querySelector("#days"),i=o.querySelector("#hours"),r=o.querySelector("#minutes"),s=o.querySelector("#seconds"),l=setInterval(a,1e3);function a(){var t=function(e){var t,n,o,c,i=Date.parse("2022-12-31")-Date.parse(new Date);return i<=0?(t=0,n=0,o=0,c=0):(t=Math.floor(i/864e5),c=Math.floor(i/1e3%60),o=Math.floor(i/1e3/60%60),n=Math.floor(i/36e5%24)),{total:i,days:t,hours:n,minutes:o,seconds:c}}();c.innerHTML=e(t.days),i.innerHTML=e(t.hours),r.innerHTML=e(t.minutes),s.innerHTML=e(t.seconds),t.total<=0&&clearInterval(l)}a()}()}(),document.querySelectorAll("form"),(new WOW).init()}))})();
//# sourceMappingURL=bundle.js.map

import upslider from './modules/upslider';
import header from './modules/header';
import sidebar from './modules/sidebar';
import downslider from './modules/downslider';
// import sliderJS from './modules/sliderNativeJS';
import tabs from './modules/tabs';
import scrollUP from './modules/scrollUP';
import prompts from './modules/prompts';
import modal_jQ from './modules/modal_jQ';
import modal_JS from './modules/modal_JS';
import mailer from './modules/mailer';
import interactive from './modules/interactive';
import timer from './modules/timer';
import clientCard from './modules/clientCard';
import form from './modules/form';
import calculating from './modules/calculating';
import animation_JS from './modules/animation_JS';



window.addEventListener('DOMContentLoaded', function() {

    header();  
    sidebar();    
    upslider();
    downslider();
    // sliderJS();
    tabs();
    scrollUP();
    modal_jQ();
    modal_JS();
    mailer();
    prompts();
    interactive();
    timer();
    clientCard();
    form();
    calculating();
    animation_JS();
    
    

    new WOW().init();
    
});
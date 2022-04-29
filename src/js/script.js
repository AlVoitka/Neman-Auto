
window.addEventListener('DOMContentLoaded', function() {
    
    const upslider = require('./modules/upslider'),
          downslider =require('./modules/downslider'),
          tabs =require('./modules/tabs'),
          scrollUP =require('./modules/scrollUP')
          prompts = require('./modules/prompts'),
          modal_jQ = require('./modules/modal_jQ'),
          mailer = require('./modules/mailer'),
          interactive = require('./modules/interactive'),
          timer = require('./modules/timer');
          

    upslider();
    downslider();
    tabs();
    scrollUP();
    modal_jQ();
    mailer();
    prompts();
    interactive();
    timer();
    

    new WOW().init();
});

window.addEventListener('DOMContentLoaded', function() {
    const upslider = require('./modules/upslider'),
          downslider =require('./modules/downslider'),
          tabs =require('./modules/tabs'),
          scrollUP =require('./modules/scrollUP')
          prompts = require('./modules/prompts');
          modal = require('./modules/modal');
          mailer = require('./modules/mailer');
          

    upslider();
    downslider();
    tabs();
    scrollUP();
    modal();
    mailer();
    prompts();
    

    new WOW().init();
});
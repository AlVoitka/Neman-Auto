
window.addEventListener('DOMContentLoaded', function() {
    const upslider = require('./modules/upslider'),
          downslider =require('./modules/downslider'),
          tabs =require('./modules/tabs'),
          scrollUP =require('./modules/scrollUP')
          

    upslider();
    downslider();
    tabs();
    scrollUP();
    

    new WOW().init();
});
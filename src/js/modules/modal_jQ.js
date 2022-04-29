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
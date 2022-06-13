function modal_jQ() {




    $('.btn_header').on('click', function() {
        $('.overlay, #consult').fadeIn('0.5s');
    }); 

    $('.modal__close').on('click', function(){
        $('.overlay, #consult, #success').fadeOut('1s');
      });

    $('.btn_modal').on('click', function(e) {
        
        $('#consult').fadeOut('1s');
        $('#success').fadeIn('1s');
        
    });  

    $('.btn').on('click', function(e) {
        
        $('.overlay, #success').fadeIn('1s');
    });  
     



}

export default modal_jQ; 
function downslider() {



    
    $(document).ready(function(){
        $('.myslider__downslider').slick({
            dots: true,
            arrows: true,
            infinite: true,
            autoplay: true, 
            slidesToShow: 4,
            slidesToScroll: 2,
            prevArrow: '<button type="button" class="slick-prev"><img src="./dist/img/left-arrow.svg"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="./dist/img/right-arrow.svg"></button>',
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

export default downslider;
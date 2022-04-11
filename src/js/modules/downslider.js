function downslider() {
    
    $(document).ready(function(){
        $('.myslider__downslider').slick({
            dots: false,
            arrows: true,
            infinite: true,
            autoplay: true, 
            autoplaySpeed: 2000,
            speed: 1000,
            fade: true,
            cssEase: 'linear',
            slidesToShow: 3,
            slidesToScroll: 3,
            prevArrow: '<button type="button" class="slick-prev"><img src="./img/left-arrow.svg"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="./img/right-arrow.svg"></button>',
          });
    });
    
}

module.exports = downslider;
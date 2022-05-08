function sliderJS() {


    let slideIndex = 1;
    
    const slides = document.querySelectorAll('.aboutAs__sliderJS-item');
    const prev = document.querySelector('.aboutAs__sliderJS-prev');
    const next = document.querySelector('.aboutAs__sliderJS-next');
    const total = document.querySelector('#total');
    const current = document.querySelector('#current');




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
    }


    prev.addEventListener('click', function(){
        plusSlides(-1);
    });

    next.addEventListener('click', function(){
        plusSlides(1);
    });







}

module.exports = sliderJS; 
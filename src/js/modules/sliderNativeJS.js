function sliderJS() {


    let slideIndex = 1;
    
    const indicators = document.querySelector('.aboutAs__indicators');
    const slides = document.querySelectorAll('.aboutAs__sliderJS-item');
    const prev = document.querySelector('.aboutAs__sliderJS-prev');
    const next = document.querySelector('.aboutAs__sliderJS-next');
    const total = document.querySelector('#total');
    const current = document.querySelector('#current');
    const dots = [];

    
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            width: 70px;
            height: 15px;
            margin-right: 10px;
            margin-left: 10px;
            cursor: pointer;
            background-color: aqua;
            border-radius: 50%;
            background-clip: padding-box;
            border-color: white;
            border: 2px;
            opacity: .3;
            transition: opacity .6s ease;
        `;

        if (i == 0) {
            dot.style.backgroundColor = 'aqua';
            dot.style.opacity = 1;
        }
        
        indicators.append(dot);
        dots.push(dot);
    }
       

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
        dots.forEach(dot => dot.style.opacity = ".5");
        dots[slideIndex-1].style.opacity = 1;
    }


    prev.addEventListener('click', function(){
        plusSlides(-1);
    });

    next.addEventListener('click', function(){
        plusSlides(1);
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            showSlides();

            slideIndex = slideTo;

            showSlides();

            if (slides.length < 10) {
                current.textContent =  `0${slideIndex}`;
            } else {
                current.textContent =  slideIndex;
            }

            

            dots.forEach(dot => dot.style.opacity = ".5");
            dots[slideIndex-1].style.opacity = 1;
        })
    })







}

module.exports = sliderJS; 
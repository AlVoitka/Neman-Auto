
function calculating() {





    const result = document.querySelector('.calculating__result');

    let truck_age, trucks_count, drivers_count, ratio;



    function calcTotal() {

        if (!truck_age || !trucks_count || !drivers_count || !activity) {
            result.textContent = 'Fill in all the fields!';
            return;
        }

        if (truck_age === 'less_5') {
            result.textContent = 1.1 * activity * trucks_count;
        } else {
            result.textContent = 0.8 * activity * trucks_count;
        }
        
    }
    calcTotal();


    function getStaticInfo(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {

                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');
                } else {
                    truck_age = e.target.getAttribute('id');
                }
    
                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                });
    
                e.target.classList.add(activeClass);
            });

        });
    }
    getStaticInfo('#gender div', 'calculating__choose-item_active');
    getStaticInfo('.calculating__choose_big div', 'calculating__choose-item_active');



    function getFleetInformation(selector) {
        const input = document.querySelector(selector);
        
        input.addEventListener('input', ()=> {
            switch(input.getAttribute('id')) {
                case 'count-tracks':
                    trucks_count = +input.value;
                    break;
                case 'count-drivers':
                    drivers_count = +input.value;
                    break;
            }
            
        });
        
    }
    getFleetInformation('#count-tracks');
    getFleetInformation('#count-drivers');

    console.log(trucks_count);

























    // if (localStorage.getItem('truck_age')) {
    //     truck_age = localStorage.getItem('truck_age');
    // } else {
    //     truck_age = 'female';
    //     localStorage.setItem('sex', 'female');
    // }

    // if (localStorage.getItem('ratio')) {
    //     ratio = localStorage.getItem('ratio');
    // } else {
    //     ratio = 1.375;
    //     localStorage.setItem('ratio', 1.375);
    // }



    // function initLocalSettings(selector, activeClass) {
    //     const elements = document.querySelectorAll(selector);

    //     elements.forEach(elem => {
    //         elem.classList.remove(activeClass);
    //         if (elem.getAttribute('id') === localStorage.getItem('truck_age')) {
    //             elem.classList.add(activeClass);
    //         }
    //         if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
    //             elem.classList.add(activeClass);
    //         }
    //     });
    // }

    // initLocalSettings('#gender div', 'calculating__choose-item_active');
    // initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');




    





    // function getAgeInformation() {
    //     const elements = document.querySelectorAll('.age');

        

    //     elements.forEach(elem => {
    //         elem.addEventListener('click', (e) => {
    //             truck_age = +e.target.getAttribute('id');

    //             elements.forEach(elem => {
    //                 elem.classList.remove('calculating__choose-item_active');
    //                 e.target.classList.add('calculating__choose-item_active');
    //             })
    //         });
    //     });
    // }
    // getAgeInformation();
    


    




    // function getActivityInformation() {
    //     const elements = document.querySelectorAll('.activity');

    //     elements.forEach(elem => {
    //         elem.addEventListener('click', (e) => {

    //             activity = +e.target.getAttribute('data-ratio');

    //             elements.forEach(elem => {
    //                 elem.classList.remove('calculating__choose-item_active');
    //                 e.target.classList.add('calculating__choose-item_active');
    //             })

    //         });
    //     });
    // }
    // getActivityInformation();


    // function getFleetInformation(selector) {
    //     const input = document.querySelector(selector);

    //     input.addEventListener('input', ()=> {
    //         switch(input.getAttribute('id')) {
    //             case 'count-tracks':
    //                 trucks_count = +input.value;
    //                 break;
    //             case 'count-drivers':
    //                 drivers_count = +input.value;
    //                 break;
    //         }
            
    //     });
    // }
    // getFleetInformation('#count-tracks');
    // getFleetInformation('#count-drivers');


    

    // console.log(truck_age);
    // console.log(trucks_count);
    // console.log(drivers_count);
    // console.log(activity);




    





}


export default calculating;
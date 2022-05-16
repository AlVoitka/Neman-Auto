function animation_JS() {


    const trackLess = document.querySelector('#track_less img'),
          trackOver = document.querySelector('#trackTwo_over img'),
          btmLess = document.querySelector('#less_5'),
          btmOver = document.querySelector('#over_5');

    let animationLessTrack;
    let animationOverTrack;
    
    btmLess.addEventListener('click', ()=> {
        if(!animationLessTrack) {
            animationLessTrack = trackLess.animate([
                {transform: 'translateY(5px)'},
                {transform: 'skewY(30deg)'},
                {transform: 'translateX(-200px)'},
                {filter: 'opacity(0)'}
            ], {
                duration: 1000,
                iterations: 1
            }); 
        }
    })

    btmOver.addEventListener('click', ()=> {
        if(!animationOverTrack) {
            animationOverTrack = trackOver.animate([
                {transform: 'translateY(5px)'},
                {transform: 'skewY(-30deg)'},
                {transform: 'translateX(200px)'},
                {filter: 'opacity(0)'}
            ], {
                duration: 1000,
                iterations: 1
            }); 
        }
    })

    


}


export default animation_JS;
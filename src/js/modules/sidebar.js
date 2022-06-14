function sidebar() {


    const sbTrigger = document.querySelector('.promo__hamburger');
    const closeMenu = document.querySelector('.sidebar__close');
    const sideBar = document.querySelector('.sidebar');
    const sbOverlay = document.querySelector('.sidebar__overlay');

    sbTrigger.addEventListener('click', ()=> {
        sideBar.classList.add('active');
        });

    closeMenu.addEventListener('click', ()=> {
        sideBar.classList.remove('active');
        });

    sbOverlay.addEventListener('click', (e)=> {
            if(e.target === sbOverlay) {
                sideBar.classList.remove('active');
            }
        })    


    ////scroll
    
    document.querySelectorAll('a[href^="#"').forEach(link => {

        link.addEventListener('click', function(e) {
            e.preventDefault();
            sideBar.classList.remove('active');
      
            let href = this.getAttribute('href').substring(1);
      
            const scrollTarget = document.getElementById(href);
      
            const topOffset = 0; 
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;
      
      
            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
      });



      
}

export default sidebar;
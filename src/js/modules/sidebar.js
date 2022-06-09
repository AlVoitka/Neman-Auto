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
}

export default sidebar;
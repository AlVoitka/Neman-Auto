
function modal_JS() {

   const modalTrigger1 = document.querySelector('[data-modal]');
   const modalTrigger2 = document.querySelector('[data-modalSuccss]');
   const overlay = document.querySelector('.overlay-JS');
   const modalFeedback = document.querySelector('#feedback-JS');
   const modalSucces = document.querySelector('#success-JS');
   const modalClose = document.querySelectorAll('[data-close]');


    function openModal_1() {
        overlay.style.display="block";
        modalFeedback.style.display="block";
        document.body.style.overflow="hidden";
        clearTimeout(modalTimerId);
    }

    modalTrigger1.addEventListener('click', openModal_1);

    modalTrigger2.addEventListener('click', (e) => {
        overlay.style.display="block";
        modalSucces.style.display="block";
        modalFeedback.style.display="none";
    })

    function closeModal() {
        overlay.style.display="none";
        modalFeedback.style.display="none";
        modalSucces.style.display="none";
        document.body.style.overflow=""; 
    }

    modalClose.forEach(item => {
        item.addEventListener('click', closeModal)
    })

    overlay.addEventListener('click', (e)=> {
        if(e.target === overlay) {
           closeModal();
        }
    })

    const modalTimerId = setTimeout(openModal_1, 60000); 


    function showModalByScroll() {
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal_1();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);






}



export default modal_JS; 
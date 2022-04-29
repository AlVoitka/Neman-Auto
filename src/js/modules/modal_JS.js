
function modal_JS() {

   const modalTrigger1 = document.querySelector('[data-modal]');
   const modalTrigger2 = document.querySelector('[data-modalSuccss]');
   const overlay = document.querySelector('.overlay-JS');
   const modalFeedback = document.querySelector('#feedback-JS');
   const modalSucces = document.querySelector('#success-JS');
   const modalCloseFB = document.querySelector('[data-closeFB]');
   const modalCloseSC = document.querySelector('[data-closeSC]');


   modalTrigger1.addEventListener('click', () => {
       overlay.style.display="block";
       modalFeedback.style.display="block";
   })

   modalTrigger2.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.style.display="block";
        modalSucces.style.display="block";
        modalFeedback.style.display="none";
    })


   modalCloseFB.addEventListener('click', ()=> {
        overlay.style.display="none";
        modalFeedback.style.display="none";
   })

   modalCloseSC.addEventListener('click', ()=> {
        overlay.style.display="none";
        modalSucces.style.display="none";
   })
        



}



module.exports = modal_JS; 
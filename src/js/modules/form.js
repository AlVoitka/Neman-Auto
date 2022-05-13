function form() {

    const forms = document.querySelectorAll('form');

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const request = new XMLHttpRequest();
            request.open('POST', 'server.php')

        })


    }








}

export default form; 
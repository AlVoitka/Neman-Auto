function interactive() {



    const typeDB = {
        type: [
            // "Trucking transportation",
            // "Air transportation",
            // "Rail transportation",
            // "Ferry transportation"
        ]
    };





    const   vehicleList = document.querySelector('.interactive__interactive-list'),
            addForm = document.querySelector('.add'),
            addInput = addForm.querySelector('.interactive__box-input'),
            checkbox = addForm.querySelector('[type="checkbox"]');



    

    function createNewUserList (list, DB) {

        list.innerHTML = "";

        DB.forEach((vehicle,i) => {
            list.innerHTML += `
            <li class="interactive__interactive-item">${i + 1} ${vehicle}
                <div class="delete"></div>
            </li>
            `
        });

        document.querySelectorAll('.delete').forEach((btn, i) =>{
            btn.addEventListener('click', () =>{
                btn.parentElement.remove();
                typeDB.type.splice(i, 1);

                createNewUserList(vehicleList, typeDB.type);
            })
        })
        
    }
    createNewUserList(vehicleList, typeDB.type);




    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const userValue = addInput.value;
              userCheck = checkbox.checked;

        if(userValue || userCheck) {

            if (userCheck)  {
                vehicleList.innerHTML = "";
                vehicleList.innerHTML = `
                <li class="interactive__interactive-item">I only use trucks
                    <div class="delete"></div>
                </li>
                `;
            } else {
                typeDB.type.push(userValue);
                typeDB.type.sort();
                createNewUserList(vehicleList, typeDB.type);
                addForm.reset();
            } 
        }   
    });









}

module.exports = interactive; 
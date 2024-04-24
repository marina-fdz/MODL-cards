const btnCreate = document.querySelector ('.js_btnCreate');
const sectionCreated = document.querySelector('.js-section-created');

function handleCreate (event){
    event.preventDefault();
    
    fetch('https://dev.adalab.es/api/card/',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body: JSON.stringify(cardData)
    })
    .then(response => response.json())
    .then(dataResponse => {
        console.log(dataResponse);

        if(dataResponse.success){
            btnCreate.classList.remove('btn-create');
            btnCreate.classList.add('btn-create_grey');
            sectionCreated.classList.remove('collapsed');
        }else{
            console.log(`Ha sucedido un error`);
        }
        
    })
    // .catch((error)=> console.log(`Ha sucedido un error:${error}`));
}

btnCreate.addEventListener('click', handleCreate);



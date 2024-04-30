const postData = () =>{
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
            cardLink.innerHTML = dataResponse.cardURL;
            cardLink.href = dataResponse.cardURL;
            createError.innerHTML = '';
            shareX(dataResponse);
            
        }else if(dataResponse.error.toLowerCase().includes('mandatory field')){
            createError.innerHTML = 'Es necesario rellenar todos los campos.';          
        }else if(dataResponse.error.includes('ER_DATA_TOO_LONG')){
            createError.innerHTML = 'El peso de la imagen no puede ser superior a 19KB.'
        }
        
    })
}


function handleCreate (event){
    event.preventDefault();
    postData();
}

btnCreate.addEventListener('click', handleCreate);
function chagePreviewPalette(value){
  cardPreview.classList.remove('color-2', 'color-3');
    if(value === '2') {
      cardPreview.classList.add('color-2');
    } else if(value === '3'){
      cardPreview.classList.add('color-3');
    }
}

function changePalette(event){
  const name = event.target.name;
  const valuePalette = event.target.value;

  if(name === 'palette'){
    cardData.palette = valuePalette;
    chagePreviewPalette(valuePalette)
  };
}

function changeComplete(event){
  const input = event.target.id;
  const valueInput = event.target.value;
  if(input !== ""){
    cardData[input] = valueInput;
    if(input === 'name'){
        namePreview.innerHTML = valueInput;
        
    } else if(input === 'job'){
        jobPreview.innerHTML = valueInput;

    } else if(input === 'email'){
      if (expresionEmail.test(valueInput)=== true){
        emailPreview.href = 'mailto:' + valueInput;
        regexEmail.innerHTML = '';
      }else{
        regexEmail.innerHTML = 'La dirección de correo introducida no es válida.';
      }         

    } else if(input === 'phone'){
        if (expressionPhone.test(valueInput)=== true){
          phonePreview.href = valueInput;
          regexPhone.innerHTML = '';
        }else{
          regexPhone.innerHTML = 'El número de teléfono introducido no es válido.';
        }   
        
    } else if(input === 'linkedin'){
      if(expresionUrl.test(valueInput)=== true){
          linkedinPreview.href = 'http://linkedin.com/in/' + valueInput;
          regexLinkedin.innerHTML = '';
      }else {
        regexLinkedin.innerHTML = 'El nombre de usuario no es válido.';
      } 

    } else if(input === 'github'){
      if(expresionUrl.test(valueInput)=== true){
          githubPreview.href = 'http://github.com/'+ valueInput;
          regexGit.innerHTML = '';
      }else {
        regexGit.innerHTML = 'El nombre de usuario no es válido.';
      } 
    } 
  }
}



const handleData = (event) =>{
  changePalette(event);
  changeComplete(event);
  localStorage.setItem('newCard', JSON.stringify(cardData));
  shareCardReset();
  console.log(cardData);
}

form.addEventListener('input', handleData);
  



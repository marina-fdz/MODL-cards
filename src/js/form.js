

function changePalette(event){
  const name = event.target.name;
  const valuePalette = event.target.value;

  if(name === 'palette'){
    cardPreview.classList.remove('color-2', 'color-3');
    cardData.palette = valuePalette;
    if(valuePalette === '1') {
      console.log('he selecionado paleta 1');
      console.log(cardPreview);

    } else if(valuePalette === '2') {
      console.log('he selecionado paleta 2');
      cardPreview.classList.add('color-2');
    } else {
      console.log('he selecionado paleta 3');
      cardPreview.classList.add('color-3');
    }
  };
}

function changeComplete(event){
  const input = event.target.id;
  const valueInput = event.target.value;
  

  // if(!event.target.name === 'palette'){
    
  // }

  
    if(input === 'name'){
        namePreview.innerHTML = valueInput;
        cardData[input] = valueInput;
    } else if(input === 'job'){
        jobPreview.innerHTML = valueInput;
        cardData[input] = valueInput;
    } else if(input === 'email'){
      cardData[input] = valueInput;
      if (expresionEmail.test(valueInput)=== true){
        emailPreview.href = 'mailto:' + valueInput;
        regexEmail.innerHTML = '';
      }else{
        regexEmail.innerHTML = 'La dirección de correo introducida no es válida';
      }         

    } else if(input === 'phone'){
      cardData[input] = valueInput;
        if (expressionPhone.test(valueInput)=== true){
          phonePreview.href = valueInput;
          regexPhone.innerHTML = '';
        }else{
          regexPhone.innerHTML = 'El número de teléfono introducido no es válido.';
        }   
        
    } else if(input === 'linkedin'){
      cardData[input] = valueInput;
      if(expresionUrl.test(valueInput)=== true){
        if((valueInput.includes('http://')) || (valueInput.includes('https://'))){
          linkedinPreview.href = valueInput;
          regexLinkedin.innerHTML = '';
        }else{
          linkedinPreview.href = 'http://'+ valueInput;
          regexLinkedin.innerHTML = '';
        }

      }else {
        regexLinkedin.innerHTML = 'La url introducida no es válida.';
      } 

    } else if(input === 'github'){
      cardData[input] = valueInput;
      if(expresionUrl.test(valueInput)=== true){
        if((valueInput.includes('http://')) || (valueInput.includes('https://'))){
          githubPreview.href = valueInput;
          regexGit.innerHTML = '';
        }else{
          githubPreview.href = 'http://'+ valueInput;
          regexGit.innerHTML = '';
        }

      }else {
        regexGit.innerHTML = 'La url introducida no es válida.';
      } 
    } 
  
}



const handleData = (event) =>{
  changePalette(event);
  changeComplete(event);
  console.log(cardData);
}

form.addEventListener('input', handleData);
  



function checkedReset (){
  colChecked.checked = true;
  cardPreview.classList.remove('color-2');
  cardPreview.classList.remove('color-3');
  
}


function cardDataReset (cardData){
  cardData.palette = "";
  cardData.name = "";
  cardData.job = "";
  cardData.phone = "";
  cardData.email = "";
  cardData.linkedin = "";
  cardData.github = "";
  cardData.photo = "";
  console.log(cardData);
}



 

function valueInputReset (){
  inputName.value = "";
  inputJob.value = "";
  inputPhone.value = "";
  inputEmail.value = "";
  inputLinkedin.value = "";
  inputGithub.value = "";
  profileImage.style.backgroundImage = "";

}

  
function valuePreviewReset (){
  namePreview.innerHTML = "Nombre Apellido";
  jobPreview.innerHTML = "Front-end developer";
  phonePreview.href = "";
  emailPreview.href = "";
  linkedinPreview.href = "";
  githubPreview.href = "";
  profilePreview.style.backgroundImage = `url(https://ih0.redbubble.net/image.1615061405.6202/raf,360x360,075,t,fafafa:ca443f4786.jpg)`;
}

function handleReset (event){
  cardDataReset(cardData);
  valueInputReset();
  valuePreviewReset();
  checkedReset();

}


buttonReset.addEventListener('click', handleReset);



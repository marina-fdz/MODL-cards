

function changePalette(event){
  const name = event.target.name;
  const valuePalette = event.target.value;

  if(name === 'palette'){
    cardPreview.classList.remove('color-2', 'color-3');
    cardData.palette = valuePalette;
    if(valuePalette === '2') {
      cardPreview.classList.add('color-2');
    } else if(valuePalette === '3'){
      cardPreview.classList.add('color-3');
    }
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

function shareCardReset(){
  sectionCreated.classList.add('collapsed');
  btnCreate.classList.remove('btn-create_grey');
  btnCreate.classList.add('btn-create');
  btnCreate.classList.remove('btn-create_grey');
  createError.innerHTML = '';
}

function handleReset (event){
  cardDataReset(cardData);
  valueInputReset();
  valuePreviewReset();
  checkedReset();
  shareCardReset();
}


buttonReset.addEventListener('click', handleReset);



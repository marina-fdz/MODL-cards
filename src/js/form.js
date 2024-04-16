'use strict';

const form = document.querySelector('.js__form');
const namePreview = document.querySelector('.js__preview_name');
const jobPreview = document.querySelector('.js__preview_job');
const phonePreview = document.querySelector('.js__preview_phone');
const emailPreview = document.querySelector('.js__preview_email');
const linkedinPreview = document.querySelector('.js__preview_linkedn');
const githubPreview = document.querySelector('.js__preview_github');
const cardPreview = document.querySelector('.js__preview');

const cardData = {
  palette: "",
  name: "",
  job: "",
  phone: "",
  email: "",
  linkedin: "",
  github: "",
  photo: "",
};

form.addEventListener('input', (event)=>{
  const input = event.target.id;
  const valueInput = event.target.value;
  const name = event.target.name;
  const valuePalette = event.target.value;
  cardData[input] = valueInput;
    console.log(cardData);

    
    if(name === 'palette'){
      cardPreview.classList.remove('color-2', 'color-3');

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
    
    if(input === 'name'){
        namePreview.innerHTML = valueInput;
    } else if(input === 'job'){
        jobPreview.innerHTML = valueInput;
    } else if(input === 'email'){
        emailPreview.href = valueInput;
        console.log(input);
    } else if(input === 'phone'){
        phonePreview.href = valueInput;
        console.log(input);
    } else if(input === 'linkedin'){
        linkedinPreview.href = valueInput;
        console.log(input);
    } else if(input === 'github'){
        githubPreview.href = valueInput;
    } 
  
});


const buttonField = document.querySelector ('.js-legendBtn');
const fieldDesign = document.querySelector ('.js-fieldset-design');



function showFieldDesign() {
    fieldDesign.classList.remove('collapsed');
  }
  function hideFieldDesign() {
    fieldDesign.classList.add('collapsed');
  }
  function handleClickFieldDesign(event) {
    event.preventDefault();
    if (fieldDesign.classList.contains('collapsed')) {
      showFieldDesign();
      buttonField.className ="legend-btn";
      
    
    } else {
      hideFieldDesign();
      buttonField.className ="legend-btn-closed";
  
    }
  }
  buttonField.addEventListener('click', handleClickFieldDesign);

  const buttonReset = document.querySelector('.js-btn-reset');

  const colChecked = document.querySelector('.js-onecol');

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

 const inputName = document.querySelector('.js-input-name');
 const inputJob = document.querySelector('.js-input-job');
 const inputPhone = document.querySelector('.js-input-phone');
 const inputEmail = document.querySelector('.js-input-email');
 const inputLinkedin = document.querySelector('.js-input-linkedin');
 const inputGithub = document.querySelector('.js-input-github');

 

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
    profilePreview.style.backgroundImage = `url(https://ih0.redbubble.net/image.1615061405.6202/raf,360x360,075,t,fafafa:ca443f4786.jpg)`
  }

  function handleReset (event){
    cardDataReset(cardData);
    valueInputReset();
    valuePreviewReset();
    checkedReset();

  }


  buttonReset.addEventListener('click', handleReset);
  console.log(cardData);


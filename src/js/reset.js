function checkedReset (){
    palettesOptions[0].checked = true;
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
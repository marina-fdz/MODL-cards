function changeCheckedPalettes(){
    palettesOptions[0].checked = false;
    palettesOptions[(parseInt(cardData.palette)-1)].checked = true;
}


function localDataInputs(){
    changeCheckedPalettes();
    inputName.value = cardData.name;
    inputJob.value = cardData.job;
    inputPhone.value = cardData.phone;
    inputEmail.value = cardData.email;
    inputLinkedin.value = cardData.linkedin;
    inputGithub.value = cardData.github;
    profileImage.style.backgroundImage = `url(${cardData.photo})`;
  }
  
  function localDataPreview(){
    namePreview.innerHTML = cardData.name;
    jobPreview.innerHTML = cardData.job;
    phonePreview.href = cardData.phone;
    emailPreview.href = cardData.email;
    linkedinPreview.href = cardData.linkedin;
    githubPreview.href = cardData.github;
    profilePreview.style.backgroundImage = `url(${cardData.photo})`;
    chagePreviewPalette(cardData.palette);
  }
  
  
  const init = () =>{
    const localData = localStorage.getItem('newCard');
    if(localData !== null){
      cardData = JSON.parse(localData);
      localDataInputs();
      localDataPreview();
    }
  }
  
  init();
  
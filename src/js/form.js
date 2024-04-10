'use strict';

const form = document.querySelector('.js__form');
const namePreview = document.querySelector('.js__preview_name');
const jobPreview = document.querySelector('.js__preview_job');
const phonePreview = document.querySelector('.js__preview_phone');
const emailPreview = document.querySelector('.js__preview_email');
const linkedinPreview = document.querySelector('.js__preview_linkedn');
const githubPreview = document.querySelector('.js__preview_github');

form.addEventListener('input', (event)=>{
    const input = event.target.id;
    const valueInput = event.target.value;
    console.log(input);

    if(input === 'firstName'){
        namePreview.innerHTML = valueInput;
    } else if(input === 'job'){
        jobPreview.innerHTML = valueInput;
    } else if(input === 'emailAddress'){
        emailPreview.href = valueInput;
        console.log(input);
    } else if(input === 'telNumber'){
        phonePreview.href = valueInput;
        console.log(input);
    } else if(input === 'socialMedia'){
        linkedinPreview.href = valueInput;
        console.log(input);
    } else if(input === 'git'){
        githubPreview.href = valueInput;
    }

});


// Form
const form = document.querySelector('.js__form');
const palettesOptions = document.querySelectorAll('.js-option');
const inputName = document.querySelector('.js-input-name');
const inputJob = document.querySelector('.js-input-job');
const inputPhone = document.querySelector('.js-input-phone');
const inputEmail = document.querySelector('.js-input-email');
const inputLinkedin = document.querySelector('.js-input-linkedin');
const inputGithub = document.querySelector('.js-input-github');
const buttonReset = document.querySelector('.js-btn-reset');

// Regex
const regexPhone = document.querySelector('.js-msg-phone');
const regexEmail = document.querySelector('.js-msg-email');
const regexLinkedin = document.querySelector('.js-msg-linkedin');
const regexGit = document.querySelector('.js-msg-git');
const expresionEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const expresionUrl = /^[A-Za-z]+[A-Za-z0-9]*(?:[-][A-Za-z0-9]+)*$/;
const expressionPhone = /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/g;

// Create
const btnCreate = document.querySelector ('.js_btnCreate');
const sectionCreated = document.querySelector('.js-section-created');
const cardLink = document.querySelector('.js-cardLink');
const createError = document.querySelector('.js-create-error'); 
const xShare = document.querySelector('.js-x-btn');


// Card Preview
const namePreview = document.querySelector('.js__preview_name');
const jobPreview = document.querySelector('.js__preview_job');
const phonePreview = document.querySelector('.js__preview_phone');
const emailPreview = document.querySelector('.js__preview_email');
const linkedinPreview = document.querySelector('.js__preview_linkedn');
const githubPreview = document.querySelector('.js__preview_github');
const cardPreview = document.querySelector('.js__preview');


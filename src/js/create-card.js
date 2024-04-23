const btnCreate = document.querySelector ('.js_btnCreate');
const sectionCreated = document.querySelector('.js-section-created');

function handleCreate (event){
    event.preventDefault();
    btnCreate.classList.remove('btn-create');
    btnCreate.classList.add('btn-create_grey');
    sectionCreated.classList.remove('collapsed');
}

btnCreate.addEventListener('click', handleCreate);
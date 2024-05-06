const collapsableHeader = document.querySelectorAll('.js_collapsable-header');
const parentCollaps = document.querySelectorAll('.js_fieldset');

const handleCollapsable = (event) => {
    event.preventDefault();
    const clickedHeader = event.currentTarget;
    const clickedParent = clickedHeader.parentNode;
    for(const parent of parentCollaps){
        if(parent === clickedParent){
            parent.classList.remove('collapsable--close');
        }else{
            parent.classList.add('collapsable--close');
        }
    }
}

for(const header of collapsableHeader){
    header.addEventListener('click', handleCollapsable);
}
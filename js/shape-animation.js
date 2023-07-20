

let body = document.querySelector('body');
let modal = document.getElementById('form');   /* 1 окно*/
let formBody = document.querySelector('.form-body');
let myBtn = document.getElementById("myBtn");  /* кнопка открытия */
let span = document.getElementsByClassName("closs-form")[0]; /* кнопка закрытия */

myBtn.onclick = function (){
    modal.style.display = "block";
    body.style.overflow = "hidden";
}
span.onclick = function(){
    modal.style.display = "none";
    body.style.overflow = "scroll";
}

const closeForm = event => {
    const target = event.target;
    if(target === formBody){
        modal.style.display = "none";
        body.style.overflow = "scroll";
    }
}
formBody.addEventListener('click', closeForm);

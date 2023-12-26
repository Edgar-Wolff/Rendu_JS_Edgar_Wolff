const burgerIcon = document.getElementById('burger-icon');
const menu = document.getElementById('menu');
burgerIcon.addEventListener('click',function() {
    menu.classList.toggle('active');
});



let button=document.querySelector("button");
let body = document.querySelector('body');

function bresom(){
    body.classList.toggle("bresom")

}
button.addEventListener('click',bresom);


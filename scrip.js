document.getElementById("envoyer").addEventListener('click', function (e){
    e.preventDefault();
    let pseudo=document.getElementById('pseudo').value;
    let pseu=document.getElementById('pseu').value;
    let mdp=document.getElementById('mdp').value;
    let email=document.getElementById('email').value;
    let condi=document.getElementById('condi');
    // let color=document.getElementById('color').value;
    // let pays=document.getElementById('pays').value;
    // console.log("Pays : "+ pays);
    // console.log("Couleur : "+ color);
    console.log("Prénom : "+ pseudo);
    console.log("Nom : "+ pseu);
    console.log("Mot de passe : " + mdp);
    console.log("Email : " + email);
    console.log("Accepté :"+ condi);
    alert("Vous avez envoyé votre formulaire");

});


let button=document.querySelector("button");
let body = document.querySelector('body');


function bresom(){
    body.classList.toggle("bresom")

}
button.addEventListener('click',bresom);

const burgerIcon = document.getElementById('burger-icon');
const menu = document.getElementById('menu');
burgerIcon.addEventListener('click',function() {
    menu.classList.toggle('active');
});
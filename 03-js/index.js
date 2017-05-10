var commencer = document.querySelector('.play');
var jeu = document.querySelector('.jeu');
var vaisseau = document.querySelector('.vaisseau');
var gagne = document.querySelector('.win');
var perdu = document.querySelector('.lose');
var replay = document.querySelector('.rejouer');


var largeur=screen.availWidth;
var hauteur=screen.availHeight;
console.log("largeur:"+largeur, "hauteur:"+hauteur);


commencer.addEventListener('click', demarre);

function demarre() {
    jeu.classList.add('remove');
}

document.addEventListener('keydown', deplace);

function deplace(){
    if (event.keyCode=="39")  {
        console.log("yeah");
        moveright();
    }

    else if(event.keyCode=="37"){
        console.log("no");
        moveleft();
    }

    else if(event.keyCode=="32")
        console.log("shot");
}

function moveleft() {
    var style = window.getComputedStyle(vaisseau,false);
    var positionLeft = parseInt(style.left);
    vaisseau.style.left = positionLeft - 15 +"px";
    console.log(vaisseau.getBoundingClientRect());
}

function moveright() {
    var style = window.getComputedStyle(vaisseau,false);
    var positionLeft = parseInt(style.left);
    vaisseau.style.left = positionLeft + 15 +"px";
    console.log(vaisseau.getBoundingClientRect());
}





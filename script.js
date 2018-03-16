/*//définition de la constante "carré"
const carre = document.getElementById('carre');
// définition de la constante "haut du carré"
const carreTop = carre.offsetTop;
//définition de l'événement auquel la modification va se déclencher
//constante à l'extérieure de la fonction = constante au chargement de la page 
document.addEventListener('keydown', function mouvement(evenement){
    //console.log("coucou"); //pour tester si l'événement est bien pris en compte
    var stepMove = 10;
    if (evenement.keyCode == 38){
       // console.log(carre.offsetTop);
        if (carre.offsetTop>=100){
            carre.style.top = carre.offsetTop - stepMove +'px';
        }        
    }
    if (evenement.keyCode ==40){
        if (carre.offsetTop < carreTop){
          //  console.log(carreTop);
            carre.style.top = carre.offsetTop + stepMove + 'px';
        }
    }
   
}

)*/

const squareHeight = document.getElementById('carre').offsetHeight;
var carre = document.getElementById('carre');

const bouton = document.getElementById('button1');
bouton.addEventListener('click', function addHeight(){
    if (carre.offsetHeight <= 300){
        carre.style.height = carre.offsetHeight + 10 + 'px';
    }
    else {
        carre.style.height = squareHeight + 'px';
    }
  
}
)

const element = document.getElementById('carre');
console.log(element);

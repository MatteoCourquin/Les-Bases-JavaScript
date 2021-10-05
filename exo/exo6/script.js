// EXERCICE 6 : Les évènements.


// 1. Changez la couleur du cercle en "crimson" quand votre souris le survole.
let cercle = document.querySelector('.cercle');

cercle.addEventListener('mouseover', function() {
    cercle.style.background = "crimson";
})

// 2. Changez la couleur du carré en "violet" quand vous cliquez dessus.
let carre = document.querySelector('.carre');

carre.addEventListener('click', function() {
    carre.style.background = "violet";
})

// 3. Rajoutez l'évenement "click" au document, puis loggez la position(x,y) des clics que vous effectuez sur le document.
document.addEventListener('click', function(e) {
    console.log(`Ma souris se situe en ${e.clientX} sur X et ${e.clientY} sur Y`);
})
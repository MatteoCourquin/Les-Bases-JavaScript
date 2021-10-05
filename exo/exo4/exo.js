// EXERCICE 4 : Conditions, comparaisons, boucles ...

// 1. Loggez dans la console le résultat de l'expression d'une opération ternaire.
let prix = 200;
console.log(prix >= 0 && prix < 100 ? 'basique' : 'premium');


// Si metreCarre est supérieur à 70, loggez "Grand logement", si c'est inférieur, loggez "Logement petit/moyen".
let metreCarre = 100;

if (metreCarre > 70) {
    console.log('Grand logement');
}else if (metreCarre <= 70) {
    console.log('Logement petit/moyen');
}


// 2. Créez une boucle for qui affiche dans la console une suite de nombres de 100 à 0 en pas de 1.
// 100,99,98,97,96 ...
for (let i = 100; i >= 0; i--) {
    console.log(`var i est égale à ${i}`);    
}
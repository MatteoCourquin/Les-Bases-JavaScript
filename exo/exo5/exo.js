// EXERCICE 5 : Boucles, mots clés, déclarations

// 1. Affichez à l'aide d'une boucle "for..in" toutes les valeurs des propriétés de cet objet dans la console.

const capitales = {
    autriche: "Vienne",
    argentine: "Buenos Aires",
    estonie: "Tallinn",
    australie: "Cambera"
}

for (const capitale in capitales) {
    console.log(`${capitales[capitale]}`);

}

console.log("----------------------");

// 2. Idem mais avec une boucle "for..of" et ce tableau.

const fruits = ['Fraise', 'Cerise', 'Orange', 'Citron', 'Ananas'];

for (const element of fruits) {
    console.log(`${element}`);

}

console.log("----------------------");

// 3. Créez une fonction qui sert à repérer si un texte qu'on lui passe en argument contient la lettre "z".

function findZ(monTexte) {

    if (monTexte.includes("Z")) {
        console.log("mon texte contient un Z");
    } else {
        console.log("il n'y a pas de Z dans ce texte");
    }
}

findZ("zzZ");


console.log("----------------------");


function checkTxt(txt) {
    for (const lettre of txt) {
        if (lettre === "z") {
            console.log("Alerte: le texte contient la lettre Z");
            break;
        }
    }
}

checkTxt("Mon texte contient un z.");

  // si c'est le cas, la fonction écrit dans la console "Alerte: le texte contient la lettre Z".




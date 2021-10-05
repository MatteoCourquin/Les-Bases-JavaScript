// EXERCICE 8 : Les fonctions 🔥




// 1. Écrire une fonction pure qui sert à multiplier deux nombres ensemble.

const multiplication = (x, y) => x * y;

console.log(multiplication(3,4));


// 2. Écrire une fonction d'ordre supérieur, qui prend une fonction callback en paramètre et un tableau rempli de nombres.
//   Cette fonction retournera un nouveau tableau, qui contient toutes les valeurs auxquelles on a ajouté 1


function tabPlus(tab, func) {

    const newTab = [];

    for (let i = 0; i < tab.length; i++) {
        newTab.push(func(tab[i]));
    }

    return newTab;
    
}
const plusUn = nb => nb + 1;

const tableauPlusUn = tabPlus([1,2,3], plusUn)
console.log(tableauPlusUn);
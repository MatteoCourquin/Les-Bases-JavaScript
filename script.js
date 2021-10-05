
// ------------------- COURS JAVASCRIPT -------------------

// LES VARIABLES 
console.log("________________LES VARIABLES________________");

// variables classiques
let prenom = 'Matteo'; //string

// variables constantes (ne peuvent pas etre changées)
const name = 'Juliette';

// déclarer plusieurs variables en meme temps
let prenom1 = 'Enzo', age1 = 22; taille = 185;

// !!! (privilégier le camel case lorsqu'on assigne une variable) !!!
// !!! (utiliser des noms de variables clairs) !!!



// LES TYPES
console.log("________________LES TYPES________________");

// String
let name1 = 'Matteo';

// number
let age2 = 20; 

// boolean (true / false)
let awnser = true; 

// undefined
let couleur;
// On peut alors leurs assigner une valeur plus tard
couleur = 'red';

// Null
// Aucune variable (non existante)

// Objet
const voiture = {
    couleur: "noire",
    prix: 15000,
    portes: 5
}


// LES OPERATEURS
console.log("________________LES OPERATEURS________________");

let nb1 = 0;

// addition
nb1 = 20 + 5;

// soustraction
nb1 = 20 - 5;

// division
nb1 = 20 / 5;

// multiplication
nb1 = 20 * 5;

// modulo 
nb1 = 20 % 5;

// puissance
nb1 = 3 ** 2;

// nb1 = nb1 + 2
nb1 += 2;


// LES CHAINES DE CARACTERES
console.log("________________LES CHAINES DE CARACTERES________________");

// Ancienne facon de faire (mon number s'est transformé en string car il est concaténé avec des string)
let str1 = "ma premiere ligne \n" + 'ma deuxieme ligne \n' + 999;

// Nouvelle maniere avec les backtick (prend en compte les number et les saut de lignes)
let str2 = `il fait ${20 + 8} degrés
il fait chaud.`;

// Affiche le 4eme caractere de ma chaine de caracteres
console.log(str1.charAt(4));
// Recherche un élément dans ma chaine de caracteres
console.log(str1.includes('ligne'));
// Indique a quel position se situ mon élément passé en parametre.
console.log(str1.indexOf('p'));
// Renvoie le code unicode de mon parametre (ici l'unicode de 0 = m = 109)
console.log(str1.charCodeAt(0));
// Coupe, ici, les 5 premiers caracteres (le parametres peut etre écris en négatif.)
console.log(str1.slice(5));
// Converti String en Array. 
// Différents parametres : 
// ('') = chaque lettre est un composant du tableau
// (' ') = chaque mot est un composant du tableau
// () = la chaine de caractere constitue un composant
const strToArray = str1.split(' ');
console.log(strToArray);
// Join les éléments du tableau pour former une chaine de caractere
console.log(strToArray.join());
// Concatène les chaines de caracteres
console.log(str1.concat('', str2));



// LES REGEX

const str4 = 'Lorem ipsum dolor sit amet.';


const regex = /[A-Z]/g; // Va renvoyer les lettres majuscules de A > Z

const regex1 = /[az]/gi; // Va renvoyer tout a, A, z, Z  (gi = global insensitive)

const regex2 = /[^a-z]/g; // Va renvoyer tout sauf les lettres minuscules de a > z


// Les lettres / chiffres
const regex3 = /\d/g; // Va renvoyer tout les chiffres
const regex4 = /\D/g;  // Va renvoyer tout ce qui n'est pas des chiffres
const regex5 = /\w/g; // Va renvoyer tout de (a > z | A > Z | 0 > 9)
const regex6 = /\W/g; // Va renvoyer tout l'inverse de (a > z | A > Z | 0 > 9)


// Les espaces
const regex7 = /\s/g; // Va renvoyer tout les espaces
const regex8 = /\S/g; // Va renvoyer tout ce qui n'est pas des espaces


// Faire appel a une regex
console.log(str4.match(regex));

// Va remplacer tout les "o" par "(replace)"
console.log(str4.replace(/o/g, '(replace)'));




// LES FONCTIONS
console.log("________________LES FONCTIONS________________");

// creation
function presentation(nb1, nb2, prenom) {

    console.log(`je m'apelle ${prenom}`);
    return nb1 + nb2;
};

// appel de ma fonction
presentation(10, 5, "Matteo");

// LES FONCTIONS FLÉCHÉS

// La fonction est écris sur une ligne
const foo2 = () => console.log('Hello World');
console.log(foo2());

// LES FONCTIONS PURES

// n'a pas d'impact en dehors de la fonction (contrairement a si on avait passé a et b dans des variables exterieures)
const add1 = (a,b) => a + b;
console.log(add1(5,5));

// LES FONCTIONS CALLBACK
// Définition: Une fonction de rappel (aussi appelée callback en anglais) est une fonction passée dans une autre fonction en tant qu'argument, qui est ensuite invoquée à l'intérieur de la fonction externe pour accomplir une sorte de routine ou d'action.

const tab = [1,2,3];

// On peut passer des fonctions en parametres
// pour chaque élément de mon objet (tab) je log
tab.forEach(item => {
    console.log(item);
})

function customForEach(arr, callback) {
    
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
        
    }
}

customForEach(tab, (item) => {
    console.log(item);
})

// LES FONCTIONS D'ORDRE SUPÉRIEUR

const notSortedArr = [2,25,43,6,3,95,54,1,78]

const newArray = []

for (let i = 0; i < notSortedArr.length; i++) {

    if (notSortedArr[i] > 10) {
        newArray.push(notSortedArr[i])
    }
}

console.log(newArray);

// LES FONCTIONS AUTO INVOQUÉES (Moins utilisée)
// La focntion est exécutée directement.

(function() {
    console.log('Ma fonction invoquée');
})()

// LA RÉCURSION
// La fonction se rappelle elle meme jsuqu'a un résultat donné.

function recursion(num) {
    
    num ++

    if (num > 10) {
        console.log(`c'est bon ! ${num}`);
    }else{
        // Elle se rappelle ici
        recursion(num)
    }
}
recursion(5)

// LES FOCNTIONS + en detail

// y = 25 est un parametre par default
function fizz(x, y = 25) {
    return x + y;
}

// Si il n'y a pas de 2eme parametre données, alors y = 25
console.log(fizz(10));

// Quand on ne sait pas encore combien d'argument on aura
function buzz(...args) {
    console.log(args);
}

buzz(1,2,3,4,5,6)



// LES TABLEAUX
console.log("________________LES TABLEAUX________________");

// création
let tableau = ["matteo", 1, 2, 3, 4, 5];
let tableau1 = ['z', 8, 's', 'r', 'f']
const multitab = [1,2,3,[1,2,3,[4,5,6]]]
const fruits = ['fraise', 'pomme', 'raisins', 'kiwi']

// ajouter un élément a la fin du tableau
tableau.push(7);
// Retire le dernier élément du tableau
tableau.pop();
// Retire le premier élément du tableau
tableau.shift();
// Ajoute des éléments au début du tableau
tableau.unshift('a','b');
// Affiche la position d'un élément demandé dans le tableau
tableau.indexOf('b');
// Retire depuis la position 0,  2 éléments, puis ajoute "ajout" a la place
tableau.splice(2,2,'ajout')
// Retourne un nouveau tableau de la position 2 a 4;
console.log(tableau.slice(2,4));
// Assemblez 2 tableau
const tableau3 = tableau.concat(tableau1);
// Rechercher dans un tableau un élément (ici renvoie 'true')
tableau3.includes('z');
// Applati un tableau multi dimension.
console.log(multitab.flat(3))
// Faire passer un tableau en chaine de caracteres (' - ') = ce qu'il y a entre les éléments du tableaux
console.log(fruits.join(' - '));
// Inverse les éléments d'un tableau
console.log(fruits.reverse());

console.log(tableau3);
console.log(tableau);

// DOC array : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array 


const numTab = [1,2,3,4,5];

// foreach
// Affiche tout les éléments du tableau
numTab.forEach(function(element){
    console.log(element);
})

// map
// Re créé un nouveau tableau a partir des résultats
const resultMap = numTab.map(function(x){
    return x * 2;
})

console.log(resultMap);

// filter
// retourne seulement les fruit supérieur a 4 lettres (sous forme de fonction flechée)
const resultFilter = fruits.filter(fruit => fruit.length > 4)

console.log(resultFilter);

// reduce
const numTab2 = [1,2,3,4]

// addittione 1 + 2 + 3 + 4 ...
const reduced = numTab2.reduce(function(a,b){
    return a + b;
})

console.log(reduced);

// Boucle for avec les tableaux
const numTab3 = [1,2,3,4,5,6,7]

// Va afficher tout les éléments du tableau 1 par 1 
for (let i = 0; i < numTab3.length; i++) {

    console.log(numTab3[i]);
    
}




// LES OBJETS
console.log("________________LES OBJETS________________");

let pays = {
    nom: "france",
    population: 3000000,
    classement: 2,
    PIB: 377915,
    maArray: [1, 2, 3, 4],
    departement: {
        nom: 'ile de france',
        numero: 92
    }
}

// afficher un composant du tableau
console.log(pays.departement.nom);
console.log(pays.maArray[1]);


// LES RACCOURCIS - OBJETS

let prenom2 = 'matteo'
let age3 = 20

// const personne = {
//     prenom2 : prenom2,
//     age3 : age3
// }

// raccourcis :

const personne = {
    prenom2,
    age3
}

console.log(personne);



// DOM
console.log("________________LE DOM________________");

// faire appel a une balise
const titre = document.querySelector('h1');

// changer le style
titre.style.background = "blue";



// LES ÉVENEMENTS
console.log("________________LES ÉVENEMENTS________________");

titre.addEventListener('click', fonctionAnim);
titre.removeEventListener('click', fonctionAnim);

function fonctionAnim(){
    console.log('Hello');
};



// LES CONDITIONS
console.log("________________LES CONDITIONS________________");

const nb = 100;

// Si :
if (nb === 20) {
    console.log("nombre 1 = 20");
}
// Sinon Si :
else if (nb > 50 && nb <= 75){
    console.log("nombre 1 est entre 50 et 99");
}
// Sinon Si :
else if (nb > 75 || nb === 100){
    console.log("nombre 1 est superieur a 75 ou est égale a 100");
}
// Sinon :
else {
    console.log("aucun nombre ne correspond");
}

// opérateurs

// == compare la valeur 
// === compare le type et la valeur
// =! different de (compare la valeur)
// ==! different de (compare le type et la valeur)
// < plus petit que
// > plus grand que
// >= plus grand ou égal que
// <= plus petit ou égal que


// truthy | falsy

const bool = 0;

console.log(Boolean(bool));
// Retourne "false"

// Les valeurs falsy :
// null (n'existe pas)
// undefined (n'est pas définie)
// false (faux)
// 0
// NaN (not a number)

// Retourne "true" pour toutes les autres valeurs



// LE SWITCH (condition)
console.log("________________LES SWITCH (CONDITION)________________");

let color = 'red';

switch (color) {
    // if
    case 'jaune':
        console.log('tee-shirt jaune');
        break;
        
    // else if
    case 'orange':
        console.log('tee-shirt orange');
        break;
        
    // else
    default:
        console.log(`Désolé nous n'avons pas de tee-shirt ${color} en stock`);
        break;
}




// LES OPÉRATEURS TERNAIRES
console.log("________________LES OPERATEURS TERNAIRES________________");

let prix = 500;
// Le prix est il superieur a 200 ? Oui (premium) : Non (basique)
let choix = prix > 200 ? "Premium" : "Basique";

// Peut s'écrire comme ça 
console.log(`Le coix est ${prix > 200 ? "Premium" : "Basique"}`);


let age = 25;
// privilégier un if pour les conditions plus longues
let typeAge = age >= 0 && age < 25 ? "premier age" : age >= 25 && age < 50 ? "second age" : age >= 50 && age < 80 ? "troisieme age" : age <=80 && age >= 120 ? "quatrieme age" : "age non conforme";

console.log(typeAge);




// LA BOUCLE FOR
console.log("________________LA BOUCLE FOR________________");

for (let i = 1; i <= 5; i++) {
    console.log(`Var i est égale à ${i}`);
}



// LA BOUCLE FOR OF (accpete les constantes contrairement a la boucle for)
// utile pour diminuer les possibilités d'erreurs

const tab1 = [1,2,3,4,5];

for(const element of tab1){
    console.log(element);
}


// LA BOOUCLE FOR IN
console.log("________________LA BOUCLE FOR IN________________");

const tesla = {
    couleur: "grise",
    portes: 5,
    prix: 100000
}

for(const prop in tesla){
    console.log(`${prop} : ${tesla[prop]}`);
}



// LA BOUCLE WHILE
console.log("________________LA BOUCLE WHILE________________");

let i = 10;

while(i >= 0){
    console.log(i);
    i--;
}


// DO WHILE (jamais utilisé)
console.log("________________DO WHILE________________");

do {
   console.log(i);
   i--;
}
while (i >= 0);


// BREAK
console.log("________________BREAK________________");

for (let i = 0; i <= 10; i++) {

    if (i === 3) {
        continue;
        // va servie a sauté une itération (ici quand la boucle arrive a 3 elle le passe)
    }

    if (i === 7) {
        // est utile pour arreter la boucle (ici quand i est égale a 7 la boucle s'arrete)
        break; 
    }

    console.log(i);    
}


// TRYCATCH
console.log("________________TRYCATCH________________");
// permet de tester son code

try {
    console.log("debut du test");

    fonctionInexistante();
    // j'essaye d'activer une fonction innexistante

    console.log("Quelque chose qui ne sera jamais loggé");
}
catch(err){
    console.log(`ERREUR : ${err}`);
    // du coup il me retourne une erreur
}
finally{
    console.log("On log quelque chose apres le catch et le try meme si il y'a une erreur");
    // fonctionne comme le "else" il est la valeur par défaut
}


// LES ÉVENEMENTS LES PLUS UTILISÉS
console.log("________________LES ÉVENEMENTS LES PLUS UTILISÉS________________");

const btn = document.querySelector('button');

btn.addEventListener('click', foo);

// cette fonction va logger une seule fois puisque la fonction est "remove" au clique
function foo() {
    console.log('hello world');
    btn.removeEventListener('click', foo);
}

// autre facon d'écrire une fonction dans un évenement
btn.addEventListener('click', function () {
    console.log('hello');
})

// ___________________________________________________________________________

// Les fonctions :

btn.addEventListener('click', function (e) {
    console.log("S'active lorsqu'on clique sur l'élement visé");
    // affiche les coordonnés de ma souris au moment de m'évenement
    console.log(e);
})

btn.addEventListener('mouseenter', function (e) {
    console.log("S'active quand la souris entre dans l'élement visé");
    // affiche les coordonnés de ma souris au moment de m'évenement
    console.log(e);
})

btn.addEventListener('mouseout', function (e) {
    console.log("S'active quand la souris sort de l'élement visé");
    // affiche les coordonnés de ma souris au moment de m'évenement
    console.log(e);
})

document.addEventListener('keydown', function (e) {
    console.log("S'active lorsqu'on appuie sur les touches");
    // renseigne entre autre la touche sur laquelle on vient de cliquer
    console.log(e.key);
})

window.addEventListener('load', function () {
    console.log("S'active lorsque tout le site a chargé");
    // Peut etre utile pour masquer un loader lorsque le site a fini de charger
})

const inp = document.querySelector('input');
// Fonction utile pour la validation d'un mot de passe par exemple
inp.addEventListener('input', function(e){
    // renvoie la valeur de input
    console.log(inp.value);
    // renvoie la valeur de la touche qui viens d'etre taper
    console.log(e.data);
})

// Tout les évenements :
// https://developer.mozilla.org/fr/docs/Web/Events



// LA PROPAGATION
console.log("________________STOP PROPAGATION________________");

btn.addEventListener('click', function (e) {
    // Stop la propagation des évenements
    e.stopPropagation();
    console.log('Event BUTTON');
})

document.body.addEventListener('click', function () {
    console.log('Event BODY');
}, true)

// Si l'on ajout le "true" en troisieme parametre de l'évenement a tous mes évenements, alors la propagation s'inverse et le script est lu de haut en bas

// L'élement d'éclancher en premier est toujours l'enfant (ici button puisqu'il est dans le body).
// Le script lis les évenement de bas en haut.


// PREVENT DEFAULT
console.log("________________PREVENT DEFAULT________________");
// Méthode utile pour ne pas faire recharger lors de l'envoie d'un formualire.
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Logg la valeur de l'input
    console.log(inp.value );
}) 



// LES REGLES EN JAVASCRIPT
console.log("________________LES REGLES EN JAVASCRIPT________________");

// BLOCK SCOPED - FUNCTION SCOPED

// // les block-scoped
// let 
// const
// On y a acces seulemeny dans le meme block
if (true) {
    if (true) {
        let v1 = 1;
        console.log(v1);
    }
}

// les function-scoped
// var
// On y accede partout du moment qu'elle est dans le block parent le plus haut
if (true) {
    if (true) {
        var v2 = 2;
    }
    console.log(v2);
}


// HOISTING
console.log("________________LE HOISTING________________");

// Les let et const doivent obligatoirement etre déclarer avant leurs utilisations

// renvoie une erreur :

// console.log(l1);
// let l1 = 1;

// fonctionne :

// let l1 = 1;
// console.log(l1);



// Les function peuvent etre déclarer n'importe où

// fonctionne :

// function foo() {
//     console.log('hello');
// }

// console.log(foo());



// fonctionne :

// console.log(foo());

// function foo() {
//     console.log('hello');
// }


        
// Empecher le hoisting : mettre les fonctions dans des const
        
// renvoie une erreur :

// console.log(foo());

// const foo = function() {
//     console.log('hello');
// }



// STRICT
console.log("________________LE STRICT MODE________________");

// le code devient plus strict et renvoie alors des erreurs plus souvent
"use strict";


// THIS
console.log("________________THIS________________");
// this = le contexte appelant 

// ici "this" = myObj
const myObj = {
    prenom: "matteo",
    presentation(){
        console.log(this);
    }
}
myObj.presentation();



// TEMPLATES LITTERALS
console.log("________________LES TEMPLATES LITTERALS________________");

let str = `Hello world ${3} et ${myObj.prenom}`;

console.log(str);



// LES CLASSES
console.log("________________LES CLASSES________________");

// Création d'objet en classes (mettre une majuscule lors du nommage)
class Pays {
    constructor(pop, nom, pib){
        this.pop = pop;
        this.nom = nom;
        this.pib = pib;
    }
    showPop(){
        console.log(this.pop);
    }
}

// Lui assigner des valeurs
const France = new Pays(70, 'France', 2000);
const Australie = new Pays(35, 'Australie', 1200);

console.log(France);
console.log(France.showPop());



// SPREAD OPÉRATORS
console.log("________________SPREAD OPERATORS________________");

const nb2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const str3 = 'abcde';

console.log(...nb2);
console.log(...str3);

// Est utile pour afficher le contenu d'un objet itérables (les tableaux par exemple)



// DESTRUCTURING
console.log("________________DESTRUCTURING________________");

const pays4 = {
    nom: 'norvege',
    popula: '9'
}

let {nom, popula} = pays4
console.log(nom, popula);

// Est utile pour décortiquer les informations des objets



// LES PROMESSES
console.log("________________PROMISE________________");
// est utilsé pour attendre les données (elle execute une focntion lorsqu'elle recoit les données)

const promise1 = new Promise((resolve, reject) => {
    resolve('Les données sont là');
    reject('erreur')
}).then((valeur) => {
    console.log((valeur));
}).catch(() => {
    console.log('Erreur');
})








// stopCode()
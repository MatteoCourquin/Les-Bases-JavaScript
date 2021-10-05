// EXERCICE 7 : JavaScript moderne


// 1. Créez une fonction flêchée qui retourne "Hello World", elle doit être écrite dans sa syntaxe la plus courte possible.(élégante)

const foo = () => console.log('Hello World');

console.log(foo());



// 2. Créez une classe Humain qui sert à créer des objets avec deux propriétés : poids et taille.

class Humain {
    constructor(prenom, age, poids, taille){
        this.prenom = prenom,
        this.age = age,
        this.poids = poids,
        this.taille = taille
    }
}

const Matteo = new Humain('Matteo', 20, 170, 178);
console.log(Matteo);
let prenom = "Jérôme";
console.log(prenom);

let ville = "Montréal";
console.log(ville);
ville = "Victoriaville";
console.log(ville);

let age = 17;
let nom = "Allaire";
let estConnecte = true;

console.table([age, nom, estConnecte]);
console.table({ age: age, nom: nom, estConnecte: estConnecte });

const PI = 3.1416;
let circonference;
circonference = 2 * PI * 4;
console.log("La circonférence d'un cercle ayant un rayon de 4cm est : ", circonference);

let nomEleve = "Allaire"; let prenomEleve = "Jérôme"; let ageEleve = 17;
console.log("Je m'appelle " + prenomEleve + " " + nomEleve + " et j'ai " + ageEleve + " ans");
console.log(`Je m'appelle ${prenomEleve} ${nomEleve} et j'ai ${ageEleve} ans`);
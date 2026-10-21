let age = 17;

if (Number.isInteger(age) && age > 0) {
    if (age >= 18) {
        console.log("Tu es majeur");
    } else {
        console.log("Tu es mineur");
    }
} else {
    console.log("Age invalide");
}

let nombre = 25;

let message = (nombre % 2 === 0) ? `Le nombre ${nombre} est pair` : `Le nombre ${nombre} est impair`;
console.log(message);

let note = 98;

if (note >= 90) {
    console.log("Excellent");
} else if (note >= 75) {
    console.log("Très bien");
} else if (note >= 60) {
    console.log("Bien");
} else {
    console.log("Échec");
}

let temperature = 1000;

if (temperature < 0) {
    console.log("Il gèle");
} else if (temperature >= 0 && temperature <= 15) {
    console.log("Il fait frais");
} else if (temperature >= 16 && temperature <= 25) {
    console.log("Température agréable");
} else {
    console.log("Il fait chaud!");
}

let connecte = true;
let role = "admine";

if (connecte === true && role === "admin") {
    console.log("Bienvnue administrateur");
} else if (connecte === true && role === "user") {
    console.log("Bienvenue utilisateur");
} else if (connecte === true && role !== "admin" && role !== "user") {
    console.log("Bienvenue rôle inconnu");
} else if (connecte === false) {
    console.log("Accès refusé!!!!!");
}

let choix = 2;

switch (choix) {
    case 1:
        console.log("Nouvelle partie");
        break;
    case 2:
        console.log("Charger une partie");
        break;
    case 3:
        console.log("Quitter");
        break;
    default:
        console.log("Option invalide");
}

let mois = "avRil";

switch (mois.toLowerCase()) {
    case "janvier":
    case "février":
    case "mars":
        console.log("Hiver");
        break;
    case "avril":
    case "mai":
    case "juin":
        console.log("Printemps");
        break;
    case "jullet":
    case "août":
    case "septembre":
        console.log("Été");
        break;
    case "octobre":
    case "novembre":
    case "décembre":
        console.log("Automne");
}
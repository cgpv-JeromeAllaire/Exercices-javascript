log("MettreTexteIci");

console.log(saison("octobre"))

/**
 * Afficher un message à la console
 * @param {string} texte le texte à afficher
 */
function log(texte) {
    console.log(texte);
}
/**
 * Prendre un mois et retourner la saison correspondante
 * @param {string} mois 
 * @returns string la saison correspondante
 */
function saison(mois) {
    switch (mois.toLowerCase()) {
        case "janvier":
        case "février":
        case "mars":
            return "Hiver";
        case "avril":
        case "mai":
        case "juin":
            return "Printemps";
        case "jullet":
        case "août":
        case "septembre":
            return "Été";
        case "octobre":
        case "novembre":
        case "décembre":
            return "Automne";
    }
}
/**
 * Déterminer si age est plus grand ou égal à 18
 * @param {number} age l'âge de la personne
 * @returns bool vrai si majeur, faux si mineur
 */
const estMajeur = (age) => { return Number.isInteger(age) && age >= 18; }

if (estMajeur(21)) {
    console.log("Vous pouvez entrer");
}
/**
 * Prompt l'usager surmle click d'un bouton
 */
function salutation() {
    let prenom = prompt("Votre prénom");
    let nom = prompt("Votre nom");

    alert(`Bonjour ${prenom} ${nom}`)
}
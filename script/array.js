let noms = ["Jerome", "Justin", "Robin", "Evan", "Antoine"];

noms.push("William");
noms.unshift("Tom");

for (let i = 0; i < noms.length; i++) {
    console.log(noms[i]);
}

for (let nom of noms) {
    console.log(nom);
}

noms.forEach((nom) => {
    console.log(nom);
});

let notes = [85, 42, 67, 90, 58, 73];

const notesReussies = notes.filter((note) => {
    return note >= 60;
});

console.log(notesReussies);
console.log(notesReussies[notesReussies.length - 1]);

let prix = [10, 25, 30, 5, 15];

const prixTaxes = prix.map((price) => {
    return price * 1.15;
});

console.log(prix);
console.log(prixTaxes);

let nombres = [2, 5, 8, 11, 14, 17];

const nombresPairs = nombres.filter((nombre) => {
    return nombre % 2 == 0;
});

const nombresPairsTriple = nombresPairs.map((nombre) => {
    return nombre * 3;
});

console.log(nombresPairsTriple);

let produits = [
    { nom: "Chocolat", prix: 3 },
    { nom: "Chips", prix: 2 },
    { nom: "Café", prix: 8 },
    { nom: "Pain", prix: 4 }
];

let produitsAbordables = produits.filter((element) => {
    return element.prix < 5;
});

let produitNoms = produitsAbordables.map((nomProduit) => {
    return nomProduit.nom;
});

console.table(produitsAbordables);
console.log(produitNoms);
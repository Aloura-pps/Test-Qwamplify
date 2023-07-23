// 1-Inverse

// split("") = la chaine est convertie en tableau composé de chacun des caracteres
// reverse() = permet d'inverser l'ordre des caracteres convertit dans un tableau par split("")
// join("") = permet de concaténer en chaine de caracteres tous les éléments d'un tableau

function inverse(str) {
    return str.split("").reverse().join("");
}

// 2-Bonus

// split(" ") = la chaine est convertie en tableau composé de chacun des caracteres séparé par du vide
// reverse() = permet d'inverser l'ordre des caracteres séparé par du vide convertit dans un tableau par split(" ")
// join(" ") = permet de concaténer en chaine de caracteres tous les éléments d'un tableau en les séparant par du vide

function inverseMot(str) {
    return str.split(" ").reverse().join(" ");
}

// 2-Bonus

// split("") = la chaine est convertie en tableau composé de chacun des caracteres
// reverse() = permet d'inverser l'ordre des caracteres convertit dans un tableau par split("")
// join("") = permet de concaténer en chaine de caracteres tous les éléments d'un tableau



function inverseMot2(str) {
    return str.split("").reverse().join("");
}




// Test de la fonction
console.log(inverse("bonjour")); // Résultat attendu : ruojnob

// Test de la fonction bonus
console.log(inverseMot("je suis une phrase")); // Résultat attendu : phrase une suis je

// Test de la fonction bonus 2
console.log(inverseMot2("je suis une phrase")); // Résultat attendu : esarhp enu sius ej


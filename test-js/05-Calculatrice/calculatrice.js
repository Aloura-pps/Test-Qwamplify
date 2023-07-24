
function calculatrice(nbr1, nbr2, callback) {

    return callback(nbr1, nbr2);

}

const addition = (a, b) => a + b;
const soustraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;




// Test de la fonction
console.log(calculatrice(5, 3, addition)); // Résultat attendu : 8
console.log(calculatrice(5, 3, soustraction)); // Résultat attendu : 2
console.log(calculatrice(5, 3, multiplication)); // Résultat attendu : 15
console.log(calculatrice(6, 2, division)); // Résultat attendu : 3
console.log(calculatrice(6, 0, division));

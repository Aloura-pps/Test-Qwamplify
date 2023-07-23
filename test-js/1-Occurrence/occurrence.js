// 1-J'ai commencer avec des valeurs:

// let word = "occurrence";

// let wordArray = Array.from(word);

// // console.log(typeof(wordArray[1]));

// let letter = "u";
// let nbrCarac = 0;

// for (let i = 0; i < wordArray.length; i++) {
    
//     if (wordArray[i] == letter) {
//         nbrCarac += 1;
//     }
    
// }

// console.log(nbrCarac)

// 2- Puis j'ai variabiliser:

function occurrence(word, letter) {
    var wordArray = Array.from(word);
    var nbrCarac = 0;
    for (let i = 0; i < wordArray.length; i++) {
    
        if (wordArray[i] == letter) {
            nbrCarac += 1;
        }
        
    }
    return nbrCarac
}

// Test de la fonction
console.log(occurrence("javascript", "a")); // Résultat attendu : 2
console.log(occurrence("programmation", "p")); // Résultat attendu : 1

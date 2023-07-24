
function fusionnerTableaux(arr1, arr2){
    const arr3 = (arr1.concat(arr2)).sort();
    return arr3;
}

function fusionnerTableaux1(arr1, arr2, sort){
    const arr3 = (arr1.concat(arr2)).sort(
        sort == 'asc'? (a, b) => a - b : (a, b) => b - a
    );
    return arr3;
}

function fusionnerTableaux2(...arr){
    const concatedSorted = [].concat(...arr).sort((a, b) => a - b );
          
    return concatedSorted;
}




// Test de la fonction
const tableau1 = [1, 3, 5, 7];
const tableau2 = [2, 4, 6, 8];
const tableau3 = [20, 30, 50];

console.log(fusionnerTableaux(tableau1, tableau2));
// Résultat attendu : [1, 2, 3, 4, 5, 6, 7, 8]

// Test de la fonction bonus 
console.log(fusionnerTableaux1(tableau1, tableau2, 'asc'));
// Résultat attendu : [1, 2, 3, 4, 5, 6, 7, 8]
console.log(fusionnerTableaux1(tableau1, tableau2, 'desc'));
// Résultat attendu : [8, 7, 6, 5, 4, 3, 2, 1]

// Test de la fonction bonus 2
console.log(fusionnerTableaux2(tableau1, tableau2, tableau3));
// Résultat attendu : [1, 2, 3, 4, 5, 6, 7, 8, ...]

// Test de la fonction
let personnes = [
    { nom: "Alice", age: 25 },
    { nom: "Charlie", age: 20 },
    { nom: "Bob", age: 30 }
    
  ];

function tri(ar, prop) {
  
  console.log(typeof ar[0][prop]);

  if (typeof ar[0][prop] === "string") {
 
    ar.sort(function(a, b) {
      return a[prop].localeCompare(b[prop]);
    });

  } else if(typeof ar[0][prop] === "number") {
    ar.sort(function(a, b) {
      return a[prop] - b[prop];
    });
  } 
  return ar;
  
   
}


  
  console.log(tri(personnes, "nom"));
  // Résultat attendu : [{ nom: "Alice", age: 25 }, { nom: "Bob", age: 30 }, { nom: "Charlie", age: 20 }]
  
  // console.log(tri(personnes, "age"));

  // Résultat attendu : [{ nom: "Charlie", age: 20 }, { nom: "Alice", age: 25 }, { nom: "Bob", age: 30 }]

 

<?php
function motLePlusLong($sentence) {
    $words = explode(' ', $sentence);
    // var_dump($words);
    $longestWord = '';
    foreach ($words as $word) {
        if (strlen($word) > strlen($longestWord)) {
            $longestWord = $word;
        }
    }

    return $longestWord;

}

// Test de la fonction
echo motLePlusLong("Ceci est un exercice en php"); // Résultat attendu : exercice
?>
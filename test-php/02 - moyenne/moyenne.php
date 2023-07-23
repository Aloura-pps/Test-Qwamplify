<?php

function moyenne($ar) {
    $somme = array_sum($ar);
    $moyenne = $somme / count($ar);
    return $moyenne;

}

// Test de la fonction
$notes = [12, 15, 18, 10, 13];
$moyenne = moyenne($notes);
echo 'La moyenne est de ' . $moyenne; // Résultat attendu : La moyenne est de 13.6


?>
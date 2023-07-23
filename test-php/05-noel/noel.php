<?php

function joursRestant() {
    $noel = '359'; // numéro du jour de noel en 2023 
    $today = date('z');
    var_dump($today, $noel);
    $daysLeft = (($noel-1) - $today);
    echo "Il reste $daysLeft jours jusqu'à Noël.";
}

// Test de la fonction
echo joursRestant(); // Résultat attendu : Il reste XX jours jusqu'à Noël.
?>
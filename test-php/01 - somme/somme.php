<?php
function somme($a, $b) {

    $resultat = 0;
    for ($i = $a; $i <= $b; $i++) {
        $resultat += $i;
    }

    return $resultat;
}

// Test de la fonction
$somme = somme(1,10);
echo 'La somme est de ' . $somme; // Résultat attendu : La somme est de 55

?>

<?php

function estPalindrome($str) {
    $reverseStr = implode(array_reverse(str_split($str)));
    var_dump($reverseStr);

    // if ($str = $reverseStr) {
    //     return true;
    // }elseif ($str != $reverseStr) {
    //     return false;
    // }
    
    // ($str = $reverseStr)?(true):(false);

    return $str == $reverseStr;
}

// Test de la fonction
$premier = estPalindrome('radar');
var_export($premier); // Résultat attendu : true

$second = estPalindrome('maison');
var_export($second); // Résultat attendu : false (j'ai remplacer $premier par $second)

?>
<?php
$a = 2;
$power = 3;
if ($x === 0) {
    $result = 1;
} else {
    $result = 1;

    for ($i = 0; $i < $power; $i++) {
        $result *= $a;
    }
}
echo "$a ^ $power = ", $result;
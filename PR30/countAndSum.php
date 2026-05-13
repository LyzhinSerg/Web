<?php
$n = 124;
if ($n === 0) {
    $count = 1;
    $sum = 0;
}

$count = 0;
$sum = 0;
$temp = $n;

while ($temp > 0) {
    $digit = $temp % 10;
    $sum += $digit;
    $count++;
    $temp = (int) ($temp / 10);
}
echo "Количество: $count Сумма: $sum <br>";
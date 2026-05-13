<?php
include("MathLibrary.php");
$a = add(10, 10);
echo "$a <br>";

$a = subtract(12, 10);
echo "$a <br>";

$a = multiply(10, 10);
echo "$a <br>";

$a = divide(10, 2);
echo "$a <br>";

$a = power(2, 10);
echo "$a <br>";

$a = factorial(5);
echo "$a <br>";

echo help("subtract");
echo "<br>";
echo help("factorial");
echo "<br>";
info();

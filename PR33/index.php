<?php
$string = "  Hello World  World  World";
//Task 1
echo strlen($string);
echo "<br>";
//Task 2
echo substr($string, 2, 5);
echo "<br>";
//Task 3
echo strtolower(trim($string));
echo "<br>";
//Task 4
if (strpos($string, "World")) {
    echo "Подстрока существует<br>";
} else
    echo "Подстрока не существует<br>";
;
//Task 5
$count = 0;
$offset = 0;
while (($pos = strpos($string, "World", $offset))) {
    $count++;
    $offset = $pos + strlen("World");
}

echo "Кол-во вхождений: $count";
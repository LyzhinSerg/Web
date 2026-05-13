<?php
$arr = ["Hello", "World", "How", "Are", "You"];

$users = [
    "admin" => "qwerty",
    "timoha" => "zxcvb",
    "vov4ik" => "vovan2007",
    "siega" => "sergoQWERTy",
    "danyok" => "12345"
];

//Task 1
for ($i = 0; $i < count($arr); $i++) {
    echo $i . " : " . $arr[$i] . "<br>";
}

//Task 2
echo "<pre>";
print_r($arr);
echo "</pre>";
echo "<br>";

//Task 3
echo "<pre>";
print_r($users);
echo "</pre>";

//Task4 
$login = "admin";
$password = "qwerty";
if (isset($users[$login])) {
    if ($users[$login] === $password) {
        echo "Пользователь $login успешно авторизован<br>\n";
    } else {
        echo "Неверный пароль для пользователя $login<br>\n";
    }
} else {
    echo "Пользователь с логином $login не найден<br>\n";
}

//Task 5
$elementCount = rand(1, 10);
$numbers = [];
for ($i = 0; $i < $elementCount; $i++) {
    $numbers[] = rand(1, 100);
}
$totalSum = array_sum($numbers);

sort($numbers);

echo "Количество элементов в массиве: $elementCount<br>";
echo "Сумма всех элементов массива: $totalSum<br>";
echo "<pre>";
print_r($numbers);
echo "</pre>";
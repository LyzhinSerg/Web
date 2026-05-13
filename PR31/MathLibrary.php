<?php
function add(float $a, float $b): float
{
    return $a + $b;
}

function subtract(float $a, float $b): float
{
    return $a - $b;
}

function multiply(float $a, float $b): float
{
    return $a * $b;
}

function divide(float $a, float $b): float
{
    if ($b == 0.0) {
        echo "Деление на ноль";
        return 0;
    }
    return $a / $b;
}

function power(float $a, int $pow): float
{
    if ($pow === 0) {
        return 1.0;
    }
    $result = 1.0;
    for ($i = 0; $i < $pow; $i++) {
        $result *= $a;
    }
    return $pow < 0 ? 1.0 / $result : $result;
}

function factorial(int $n): int
{
    if ($n < 0) {
        echo "Невозможно определить факториал для отрицательного числа";
        return 0;
    }
    $result = 1;
    for ($i = 2; $i <= $n; $i++) {
        $result *= $i;
    }
    return $result;
}

function help(string $functionName): string
{
    switch ($functionName) {
        case 'add':
            return "Функция add(float \$a, float \$b): Возвращает сумму двух чисел.";
        case 'subtract':
            return "Функция subtract(float \$a, float \$b): Возвращает разность двух чисел.";
        case 'multiply':
            return "Функция multiply(float \$a, float \$b): Возвращает произведение двух чисел.";
        case 'divide':
            return "Функция divide(float \$a, float \$b): Возвращает результат деления \$a на \$b.";
        case 'power':
            return "Функция power(float \$a, int \$x): Возвращает результат возведения числа \$a в целую степень \$x.";
        case 'factorial':
            return "Функция factorial(int \$n): Возвращает факториал целого неотрицательного числа \$n.";
        case 'help':
            return "Функция help(string \$functionName): Возвращает текстовое описание указанной функции.";
        case 'info':
            return "Функция info(): Выводит на экран информацию о библиотеке и её разработчике.";
        default:
            return "Функция не найдена.";
    }
}

function info(): void {
    echo "Библиотека: MathLibrary<br>";
    echo "Описание: Набор базовых математических и комбинированных функций.<br>";
    echo "Разработчик: Лыжин С.М.<br>";
}
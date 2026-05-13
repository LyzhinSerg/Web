<?php
echo '<pre>';
echo "  ";
for ($col = 1; $col <= 10; $col++) {
    printf("%4d", $col);
}
echo "\n";
for ($row = 1; $row <= 10; $row++) {
    printf("%2d", $row);
    for ($col = 1; $col <= 10; $col++) {
        printf("%4d", $row * $col);
    }
    echo "\n";
}
echo '</pre>';
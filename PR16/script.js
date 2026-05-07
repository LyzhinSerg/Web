function getChar(string) {
    for (let i = 0; i < string.length; i++)
        console.log(` ${string[i]} - ${string.charCodeAt(i)}`);
        
}

function getSubstringCount(string, substring) {
    let count = 0;
    let pos = string.indexOf(substring);
    while (pos !== -1) {
        count++;
        pos = string.indexOf(substring, pos + substring.length);
    }
    console.log(`Количество вхождений: ${count}`);
}

function getSubstrCountRegisterIgnored(string, substring) {
    const lowerStr = string.toLowerCase();
    const lowerSubstr = substring.toLowerCase();
    let count = 0;
    let pos = lowerStr.indexOf(lowerSubstr);
    while (pos !== -1) {
        count++;
        pos = lowerStr.indexOf(lowerSubstr, pos + lowerSubstr.length);
    }
    console.log(`Количество вхождений: ${count}`);
}

function calculator(a, b, op) {
     switch (op.toLowerCase()) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
        case "x":
            result = a * b;
            break;
        case "/":
        case ":":
            if (b === 0) return "Ошибка: деление на ноль";
            result = a / b;
            break;
        default:
            return `Операция ${op} неизвестна`;
    }

    return `${a} ${op} ${b} = ${result}`;
}



//Task 1
const string = prompt("Введите строку");
getChar(string);
//Task 2
const substring = prompt("Введите подстроку");
getSubstringCount(string, substring);
//Task 3
getSubstrCountRegisterIgnored(string, substring)
//Task 4
const a = +prompt("Введите первое число")
const b = +prompt("Введите второе число")
const op = prompt("Введите символ операции")
console.log(calculator(a, b, op))
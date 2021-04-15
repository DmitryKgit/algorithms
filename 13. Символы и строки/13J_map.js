/*
13J.js 17.11.2020
Дана строка, возможно, содержащая пробелы. Извлеките из этой строки все символы, 
являющиеся цифрами и составьте из них новую строку. Решение оформите в виде функции ExtractDigits (S)
Входные данные
Программа получает на вход исходную строку S
Выходные данные
Требуется вывести новую строку, содержащую только цифры данной строки.
Примеры
входные данные
2+2=4
выходные данные
224
*/

// Принимает входные данные задачи, возвращает ответ. 
function ExtractDigits(str) {
    return str.split('').map(returnDigit).join('');
}

// Если char цифра - возвращает цифру char, иначе пустую строчку.
function returnDigit(char) {
    return IsDigit(char) ? char : '';
}

function IsDigit(char) {
    return '0' <= char && char <= '9';  // Сравниваем символы.
}

// Ввод-вывод консольный, тестовый
function interfaceTest() {
    let str = '2+2=4';
    console.log(ExtractDigits(str));    
}

interfaceTest();


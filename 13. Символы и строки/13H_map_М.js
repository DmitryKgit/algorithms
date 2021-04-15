/*
13H.js 17.11.2020
Дана строка, возможно, содержащая пробелы. 
Считайте эту строку и переведите все символы этой строки в нижний регистр. 
Решение оформите в виде функции ToLower (S), получающей в качестве параметра строку и возвращающую новую строку.
Для перевода одного символа в нижний регистр напишите отдельную функцию.
Примеры
входные данные
Hello, world!
выходные данные
hello, world!
*/

function toLowerCase(char) {
    return char.toLowerCase();
}

// Принимает входные данные задачи, возвращает ответ. 
function ToLower(str) {
    let arr = str.split('').map(toLowerCase);
    return arr.join('');
}

function isUpper(char) {
    return 'A' <= char && char <= 'Z';  // Сравниваем символы
}

// Ввод-вывод консольный, тестовый
function interfaceTest() {
    let str = 'Hello, world!';
    console.log(ToLower(str));    
}

interfaceTest();
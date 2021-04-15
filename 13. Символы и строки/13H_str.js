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

// Принимает входные данные задачи, возвращает ответ. 
function ToLower(str) {
    let res = '';
    for (let item of str) {
        res += item.toLowerCase();
    }
    return res;
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
/*
13H.js 11.11.2020. 
Дана строка, возможно, содержащая пробелы. Считайте эту строку и переведите все символы этой строки в нижний регистр. 
Решение оформите в виде функции ToLower (S), получающей в качестве параметра строку и возвращающую новую строку.

Для перевода одного символа в нижний регистр напишите отдельную функцию.

входные данные
Hello, world!

выходные данные
hello, world!
*/

function change(S) {
    if (S.length > 0) {
        return ToLower(S);
    } else {
        return ToLowerOne(S);
    }
}
function ToLower(S) {
    return S.toLowerCase();
}

function ToLowerOne(S) {
    return S.toLowerCase();
}

let S = 'Hello, world!';
console.log(change(S));
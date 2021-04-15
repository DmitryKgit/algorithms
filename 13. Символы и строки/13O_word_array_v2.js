/*
13O.js 26.11.2020
Дана строка. Найдите в этой строке самое длинное слово и выведите его. 
Если в строке несколько слов одинаковой максимальной длины, выведите первое из них. 
Решение оформите в виде функции LongestWord (S), возвращающей значение типа str.
Примеры
входные данные
In a hole in the ground there lived a hobbit.
выходные данные
ground

Работает с последовательностями разделяемыми не словами, не проверяет, что слово состоит из букв.
Пользуется регулярными выражениями, числа считает словами. Пробелы и знаки препинания отбрасывает.
*/

// Принимает входные данные задачи, возвращает ответ. 
function LongestWord(str) {
    let pos = 0;
    let newAr = str.split(/\W/); // Разделение по НЕ слову.
    for (let i = 1; i < newAr.length; i++) {
        if (newAr[pos].length < newAr[i].length) {
            pos = i;
        }
    }
    return newAr[pos];
}

// Принимает строку, возвращает массив
// function makeArray(str) {
//     let array = str.split(' ').map(String);
//     return array;
// }

// Ввод-вывод консольный, тестовый
function interfaceTest() {
    let str = ' In    a hole in the 1111111111111, ground\nthere lived a hobbit';
    console.log(LongestWord(str));    
}

interfaceTest();

// let a = ' ';
// console.log(a.codePointAt(0));
/*
9B.js 13.02.2020
Выведите все четные элементы списка.
Входные данные
Вводится список чисел. Все числа списка находятся на одной строке.
Выходные данные
Выведите ответ на задачу.
Примеры
входные данные
1 2 2 3 3 3 4
выходные данные
2 2 4 
*/
// var arr = [1, 2, 2, 3, 3, 4, 196];
// var str = prompt();
var str = '1 2 2 3 3 3 4';
var arrStr = str.split(' ');
for (var i = 0; i < arrStr.length; i++) {
    arrStr[i] = Number(arrStr[i]);
}
for (var i = 0; i < arrStr.length; i++) {
    if (arrStr[i] % 2 == 0)
        console.log(arrStr[i]);
}
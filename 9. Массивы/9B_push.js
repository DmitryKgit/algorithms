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

// var str = prompt();
var str = '1 2 2 3 3 3 4'; // prompt(); // 1) ВВести строку
var arrStr = str.split(' '); // 2) Разделить строку на массив строк
var arrNumber = []
for (var i = 0; i < arrStr.length; i++) {  // 3) Из массива строк создать массив чисел
    arrNumber.push(Number(arrStr[i]));
}
for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] % 2 == 0)
        console.log(arrNumber[i]);
}
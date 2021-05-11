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
var arrNum = arrStr.map(Number);       // ... и заполнить его элементами типа Number.
for (let element of arrNum) {  // for each - для массива!
    if (element % 2 == 0)
        console.log(element);
}
// То же самое:
arrNum.forEach( item => {
    if(item % 2 == 0)
        console.log(item);
});
/*
10L.js 17.04.2020
Выведите элементы данного списка в обратном порядке, не изменяя сам список.
Входные данные
Вводится список чисел. Все числа списка находятся на одной строке.
Выходные данные
Выведите ответ на задачу.
Примеры
входные данные
1 2 3 4 5
выходные данные
5 4 3 2 1 
*/

// 1 способ: циклом
var arrNum = '1 2 3 4 5'.split(' ').map(Number);
var buf = [];
for (var i = arrNum.length-1; i >= 0; i--) {
    buf.push(arrNum[i]);
}
console.log(buf.map(String).join(' '));

// 2 способ: функцией reverse - но это против условия НЕ менять исходный массив
let arr2 = '1 2 3 4 5'.split(' ').map(Number);
console.log(arr2.reverse().map(String).join(' '));   

// 3 способ: циклом без доп. массива
let arr3 = '1 2 3 4 5'.split(' ').map(Number);
let temp = 0;
let counter = 1;
for (let i = 0; i < arr3.length/2; i++) {
    temp = arr3[i];
    arr3[i] = arr3[arr3.length-counter];
    arr3[arr3.length-counter] = temp;
    // console.log(arr3);
    counter++;
}
console.log(arr3.map(String).join(' '));
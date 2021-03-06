/*
10G.js 16.04.2020
Дан список чисел. Выведите значение наибольшего элемента в списке, а затем индекс этого элемента в списке. 
Если наибольших элементов несколько, выведите индекс первого из них.
Входные данные
Вводится список чисел. Все числа списка находятся на одной строке.
Выходные данные
Выведите ответ на задачу.
Примеры
входные данные
1 2 3 2 1
выходные данные
3 2
*/

// 1 спосбо: циклом
var arr = '1 2 3 2 1'.split(' ').map(Number);
var imax = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[imax])
        imax = i;
}
console.log(arr[imax], imax);

// 2 cпособ: функцией Math.max.apply
let arr2 = '1 2 3 2 1'.split(' ').map(Number);
console.log(Math.max.apply(null, arr2), arr2.indexOf(Math.max.apply(null, arr2)));
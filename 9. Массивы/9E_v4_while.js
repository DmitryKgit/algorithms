/*
9E.js 13.02.2020
Дан список чисел. Если в нем есть два соседних элемента одного знака, выведите эти числа. 
Если соседних элементов одного знака нет - не выводите ничего. Если таких пар соседей несколько - выведите первую пару.
Входные данные
Вводится список чисел. Все числа списка находятся на одной строке.
Выходные данные
Выведите ответ на задачу.
Примеры
входные данные
-1 2 3 -1 -2
выходные данные
2 3
*/
var str = '-1 2 3 -1 -2'; 
var arrStr = str.split(' '); 
var arrNumber = new Array(arrStr.length); 
for (var i = 0; i < arrStr.length; i++) {  
    arrNumber[i]=Number(arrStr[i]);
}
var i=1;
while((i < arrNumber.length) && (arrNumber[i-1]*arrNumber[i] <= 0)) i++;
if(i<arrNumber.length) console.log(arrNumber[i-1], arrNumber[i]);

/*
9Q.js 29.02.2020
Дан список из чисел и индекс элемента в списке k. 
Удалите из списка элемент с индексом k, сдвинув влево все элементы, стоящие правее элемента с индексом k.
Программа получает на вход список, затем число k. 
Программа сдвигает все элементы, а после этого удаляет последний элемент списка при помощи метода pop().
Программа должна осуществлять сдвиг непосредственно в списке, 
а не делать это при выводе элементов. Также нельзя использовать дополнительный список.
Входные данные
Вводится список чисел. Все числа списка находятся на одной строке. В следующей строке вводится одно целое число.
Выходные данные
Выведите ответ на задачу.
Примеры
входные данные
7 6 5 4 3 2 1
2
выходные данные
7 6 4 3 2 1 
*/
var arrNum = '7 6 5 4 3 2 1'.split(' ').map(Number);
var k = 2;
for (var i = k; i < arrNum.length-1; i++) {
    arrNum[i] = arrNum[i+1];    
}
arrNum.pop();
console.log(arrNum.map(String).join(' '));
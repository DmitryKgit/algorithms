/*
9T.js 29.02.2020
Дан список. Выведите те его элементы, которые встречаются в списке только один раз. 
Элементы нужно выводить в том порядке, в котором они встречаются в списке.
Входные данные
Вводится список чисел. Все числа списка находятся на одной строке.
Выходные данные
Выведите ответ на задачу.
Примеры
входные данные
1 2 2 3 3 3
выходные данные
1 
*/
var arrNum = '1 2 2 3 3 3 4'.split(' ').map(Number);
top:
for (var i = 0; i < arrNum.length; i++) {
    for (var j = 1; j < arrNum.length; j++) {
        if (arrNum[i] == arrNum[j] && i != j)
            continue top; // Пропустить печать элементов.
    }
    console.log(arrNum[i]);
}
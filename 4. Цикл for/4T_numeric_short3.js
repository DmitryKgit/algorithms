/*
4T.js 29.06.2019
По данному натуральному n≤9 выведите лесенку из n ступенек, i-я ступенька состоит из чисел от 1 до i без пробелов.

Входные данные
Вводится натуральное число.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
3
выходные данные
1
12
123
*/
var n = 8;
var sum = 1;
for (var i = 1; i <= n; sum=sum*10 + ++i) 
    console.log(sum); // Сокращенное сложение возвращает полученное (последнее полученное) значение.

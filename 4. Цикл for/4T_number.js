/*
4T.js 19.09.2020. 
По данному натуральному n≤9 выведите лесенку из n ступенек, i-я ступенька состоит из чисел от 1 до i без пробелов.
Входные данные
Вводится натуральное число.
3
Выходные данные
Выведите ответ на задачу.
1
12
123
*/

let n = 3;
let sum = 0;
for (let i = 1; i <= n; i++) {
    console.log(sum = sum * 10 + i);
}


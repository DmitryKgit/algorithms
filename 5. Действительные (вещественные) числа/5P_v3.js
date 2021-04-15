/*
5P.js 31.08.2019
По данному числу n вычислите сумму 4*(1-1/3 + 1/5 - 1/7 + ... + (-1)**n/(2*n+1)) 

Операцией возведения в степень пользоваться нельзя. Алгоритм должен иметь сложность O(n).

Входные данные
Вводится натуральное число.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
2
выходные данные
3.46667
i       до цикла    1   2 
sum         0.0     1  0.7
sign        1       3   5
znam        1      -1   1
*/
var n = 2;
var sum = 0.0;
for (let i = 1, sign = 1, znam = 1; i <= n; i++, znam+=2, sign*=-1) {
    sum += sign/znam;
}
console.log(4*(sum + 1/(2*n+1)));
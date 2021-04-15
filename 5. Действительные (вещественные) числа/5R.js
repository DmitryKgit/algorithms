/*
5R.js 19.10.2020
По данному целому числу n и действительному числу x вычислите сумму 1−x^2/2!+x^4/4!−x^6/6!+...+(−1)*n^*x^2n/(2n)!

Операцией возведения в степень пользоваться нельзя. Алгоритм должен иметь сложность O(n).

Примечание
Этот ряд сходится к cosx при росте n (углы измеряются в радианах).

Входные данные
Вводятся натуральное число n и действительное число x.
2                   10                  50
0.1                 0                   3.14159
Выходные данные
Выведите ответ на задачу.
0.995004               1                -1
*/

let n = 50;
let x = 3.14159;
let sum = 0.0;
for (let i = 1, sign = 1, chis = 1, znam = 1; i <= n; i++, sign *= -1, chis *= x * x) {
    sum += sign * chis / znam;
    znam *= 2 * i * (2* i - 1);
}
console.log(sum);










/*
5R.js 07.09.2019
По данному целому числу n и действительному числу x вычислите сумму 1 - x**2/2! + x**4/4! - x**6/6! + ... + (-1)**n**x**2n/(2n)!
Операцией возведения в степень пользоваться нельзя. Алгоритм должен иметь сложность O(n).
Входные данные
Вводится натуральное число n и действительное число x.
Выходные данные
Выведите ответ на задачу.
Примечание
Этот ряд сходится к cosx  при росте n (углы измеряются в радианах).
Примеры
входные данные
2
0.1
выходные данные
0.995004
входные данные
10
0
выходные данные
1
входные данные
50
3.14159
выходные данные
-1 // тест -0.9999999999964797
1 - x**2/2! + x**4/4! - x**6/6! + ... + (-1)**n**x**2n/(2n)!
i   до цикла    2           4   6   8
chis    1       x**2        x**4
znam    1       1*2         (1*2)*3*4
sign    1       -1          1
sum     1       1-x**2/2!
*/
var n = 10;
var x = 0;
var sum = 1; // Первый член ряда равен единице, вычисляется до цикла, далее в цикле chis умножаем на x, znam на i. 
for (var i = 2, chis = 1, znam = 1, sign=1; i <= 2*n; i+=2) {
    chis *= x*x;
    znam *= i*(i-1);
    sign = -sign;
    sum += chis/znam*sign;
}
console.log(sum);
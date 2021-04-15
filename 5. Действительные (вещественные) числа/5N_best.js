/*
5N.js 17.08.2019
По данному числу n вычислите сумму 1-1/2+1/3-1/4++...+(-1)**(n+1)/n.

Операцией возведения в степень пользоваться нельзя. Алгоритм должен иметь сложность O(n). 
Попробуйте также обойтись без использования инструкции if.

Входные данные
Вводится натуральное число.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
3
выходные данные
0.833333
*/
var n = 3;
var sum = .0;
for (var i = 1, sign = 1; i <= n; i++) {
    sum += sign/i;
    sign = -sign; // sign *= -1;
}
console.log(sum);

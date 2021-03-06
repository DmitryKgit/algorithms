/*
5N.js 16.10.2020
По данному числу n вычислите сумму 1−1/2+1/3−1/4++...+(−1)^(n+1n).

Операцией возведения в степень пользоваться нельзя. 
Алгоритм должен иметь сложность O(n). Попробуйте также обойтись без использования инструкции if.

Входные данные
Вводится натуральное число.
3
Выходные данные
Выведите ответ на задачу.
0.833333
*/

let n = 3;
let sum = 0.0;

for (let i = 1; n % 2 == 0 && i <= n / 2 || n % 2 != 0 && i <= (n - 1) / 2; i++) {
    sum += 1 / i - 1 / (i + 1);
}

console.log(sum + Number(n % 2 != 0) / n);








// let cnt = 0;
// let n = 3;
// for (let i = 0; n > 0; i++, n--) {
//     cnt += Math.pow(-1, Number(i % 2 != 0)) / (i + 1); // O(2)
// }
// console.log(cnt);



/*
4J.js 13.08.2020. 
По данному натуральному n≥2 вычислите сумму 1×2+2×3+...+(n-1)×n. Ответ выведите в виде вычисленного выражение и его значения в точности, 
как показано в примере.

Входные данные
Вводится натуральное число.
4                   2     
Выходные данные
Выведите ответ на задачу.
1*2+2*3+3*4=20     1*2=2
*/

let n = 4;
let sum = "";
let num = 0;
for (let i = 1; i < n; i++) {
    num += i * (i + 1);
    sum += i + "*" + (i + 1);
    if (i == n - 1) break;
    sum += "+";
}
console.log(sum + "=" + String(num));

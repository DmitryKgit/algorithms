/*
1B.js 30.06.2020. 
Вычислите 20!. Выведите на экран вычисленное значение.
*/

let num = 20; // Number(prompt('Введите число: '));    // Число, факториал которого мы находим
let result = 1;
for (let i = 1; i <= num; i++) {
   result *= i;
}
console.log(result);
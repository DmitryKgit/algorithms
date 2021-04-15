/*
1I.js 03.07.2020. 
Число 179 записали 50 раз подряд. Полученное 150-значное число возвели в квадрат. Сколько получилось?
*/

let number = 179;
let total = BigInt(Number(Math.pow((number).repeat(50), 2)));  // BigInt(Number(Math.pow(prompt('Введите число: ').repeat(Number(prompt('Введите количество повторений: '))), Number(prompt('Введите степень: ')))));
console.log(total);
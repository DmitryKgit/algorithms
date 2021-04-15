/*
1H.js 02.07.2020. 
Число 179^10 записали четыре раза подряд. Из получившегося числа извлекли корень степени 10. Сколько получилось?
*/

let total = Math.pow(String((Math.pow(179, 10))).repeat(4), 1/10); // Math.pow(String(BigInt(Math.pow(Number(prompt('Введите число: ')), (Number(prompt('Введите степень: ')))))).repeat(4), 1/10);
console.log(total);


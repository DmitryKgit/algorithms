/*
4_geomic_average.js 28.08.2020. 


среднее геометрическое всех чётных числе
По времени: O(N); По памяти: O(1).
*/

let num = Number(prompt("Введите количество чисел"));
let root = 1, cnt = 0;
for (let i = 1; i <= num; i++) {
    let number = Number(prompt("Введите число"));
    if (number % 2 == 0) {  // какие числа считаем
        cnt++;
        root *= number;
    }
}
console.log(Math.pow(root, 1 / cnt));



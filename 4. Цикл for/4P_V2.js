/*
4P.js 14.09.2020.
Даны числа a, b, c, d, e. Подсчитайте количество таких целых чисел от 0 до 1000, которые являются корнями уравнения
(ax3+bx2+cx+d)/(x-e)=0, и выведите их количество.
Входные данные
Вводятся целые числа a, b, c, d, e.
 1    1
-2    1
 1    1
 0    1
 1    1
Выходные данные
1     0
Выведите ответ на задачу. Если в указанном промежутке нет корней уравнения, то ничего выводить не нужно.
*/

function roots(equations) {
    let nums = [1, -2, 1, 0, 1];
    for (let x = 0; x <= 1000; x++) { // проход по x, выводит только целые
        let y = equations(x, nums);
        return y;
    }
}
function equation(root, arr) {
    let answer = [];
    let sum = 0;

    for (let i = 0; i < arr.length - 1; i++) { // проход по массиву
        sum += arr[i] * Math.pow(root, arr.length - i - 2);
    }
    if (sum == 0 && root != arr[arr.length - 1]) // проверка x != e
        answer.push(root); // добавить ответ в массив
    sum = 0;
    console.log(answer.length);
}
roots(equation);

/*
9X.js 25.03.2020
N кеглей выставили в один ряд, занумеровав их слева направо числами от 1 до N. 
Затем по этому ряду бросили K шаров, при этом i-й шар 
сбил все кегли с номерами от li до ri включительно. Определите, какие кегли остались стоять на месте.
Входные данные
Программа получает на вход количество кеглей N и количество бросков K. Далее идет K пар чисел li, ri, при этом 1<=li<=ri<=n<=100.
Выходные данные
Программа должна вывести последовательность из 
N символов, где j-й символ есть “I”, если j-я кегля осталась стоять, или “.”, если j-я кегля была сбита.
Примеры
входные данные
10 3
8 10
2 5
3 6
выходные данные
I.....I...

Деструктуризация массива: https://learn.javascript.ru/destructuring-assignment

    var inputArray = prompt().split(' ').map(Number); // массив Number
    var first = inputArray[0];
    var last = inputArray[1];
 
 Эквивалентен

     var inputArray = prompt().split(' ').map(Number); // массив Number
    let [first, last] = inputArray;

 Эквивалентен
 
    let [first, last] =  prompt().split(' ').map(Number); // Массив Number деструктуризирован в first, last. 

*/

let [N, k] = prompt().split(' ').map(Number); // Безымянный массив деструктуризирован в N - кол.кеглей, k - кол.бросков.
let kegli = new Array(N+1); // Индекс соответсвует номеру кегли, [0] не используется.
for (var i = 0; i <= N; i++)
    kegli[i]='I';
for (var i = 0; i < k; i++) {
    let [first, last] = prompt().split(' ').map(Number); // Безымянный массив Number деструктуризирован в first, last.
    for (var j = first; j <= last; j++) 
            kegli[j] = '.';
}
console.log(kegli.slice(1).join(' ')); // Срез всего массива, кроме [0] (от 1 элемента до конца).
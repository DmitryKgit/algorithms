/*
2E.js 03.07.2020. 
n школьников делят k яблок поровну, неделяющийся остаток остается в корзинке. Сколько яблок останется в корзинке?

Входные данные
Программа получает на вход числа n и k - целые, положительные, не превышают 10000.

Выходные данные
Выведите ответ на задачу.
*/

// n школьников делят k яблок поровну, функция возвращает количество яблок, которое останется в корзинке.
function apples(n, k) {
    let result = k % n;
    return result;
}

let num = apples(3, 14); // apples(Number(prompt('Количество школьников: ')), Number(prompt('Количество яблок: ')));
console.log(num);



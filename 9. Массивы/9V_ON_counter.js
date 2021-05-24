/*
9V.js 13.03.2020
Дан список. Не изменяя его и не используя дополнительные списки, определите, какое число в этом списке встречается чаще всего.
Если таких чисел несколько, выведите любое из них.
Входные данные
Вводится список чисел. Все числа списка находятся на одной строке.
Выходные данные
Выведите ответ на задачу.
Примеры
входные данные
1 2 3 2 3 3
выходные данные
3

Алгоритм: O(N)
алгоритм подсчета: создаем массив counters, где индекс - число, значение - сколько раз оно встречается.
*/

// возвращает число (какое число в этом списке встречается чаще всего.) - ответ на задачу
function MostFrequent(arr) {
    let cntSize = Math.max(...arr)+1; // количество счетчиков: положим оно равно значению максимального элемента + 1 (предпологаем что они от 0 до макс)
    let counters = new Array(cntSize);
    counters.fill(0);
    for(let elem of arr) { // алгоритм подсчета - O(N)
        counters[elem]++;  // считаем elem
    }
    return counters.indexOf(Math.max(...counters)); // какое число в этом списке встречается чаще всего.
}

// принимает число, печатает число на консоль
function arrayPrint(num) {
    console.log(String(num));
}

// принимает массив, вводимый пользователем, возвращает массив чисел
function arrayInput() {
    return prompt('Введите числа через пробел').split(' ').map(item => Number(item));
}

function interfaceTest() {
    arrayPrint( MostFrequent(arrayInput()));    
}

function test() {
    arrayPrint( MostFrequent([1, 2, 3, 2, 3, 3])); 
    arrayPrint( MostFrequent([1, 1, 1, 1, 1])); 
    arrayPrint( MostFrequent([1, 2, 3, 2, 5, 6]));
    arrayPrint( MostFrequent([2, 1, 3, 1, 5, 1, 6]));
}

//interfaceTest();
test();


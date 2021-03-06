/*
10L.js 24.05.2021. 
Выведите элементы данного списка в обратном порядке, не изменяя сам список.

Входные данные
Вводится список чисел. Все числа списка находятся на одной строке.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
1 2 3 4 5
выходные данные
5 4 3 2 1 
*/

function evenIndex(arr) {
  return arr.reverse();
}

// принимает массив, печатает массив на консоль
function arrayPrint(arr) {
  console.log(arr.map(element => String(element)).join(' '));
}

// принимает массив, вводимый пользователем, возвращает массив чисел
function arrayInput() {
  return prompt('Введите числа через пробел').split(' ').map(item => Number(item));
}

function interfaceTest() {
  arrayPrint(evenIndex(arrayInput()));    
}

function test() {
  arrayPrint(evenIndex([1, 2, 3, 4, 5]));
}

//interfaceTest();
test();
/*
10G.js 24.05.2021. 
Дан список чисел. Выведите значение наибольшего элемента в списке, а затем индекс этого элемента в списке. Если наибольших элементов несколько, выведите индекс первого из них.

Входные данные
Вводится список чисел. Все числа списка находятся на одной строке.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
1 2 3 2 1
выходные данные
3 2
*/

function evenIndex(arr) {
  return [Math.max(...arr), arr.indexOf(Math.max(...arr))];
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
  arrayPrint(evenIndex([1, 2, 3, 2, 1]));
}

//interfaceTest();
test();
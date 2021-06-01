/*
10N.js 24.05.2021. 
Переставьте соседние элементы списка (A[0] c A[1], A[2] c A[3] и т.д.). Если элементов нечетное число, то последний элемент остается на своем месте.

Входные данные
Вводится список чисел. Все числа списка находятся на одной строке.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
1 2 3 4 5
выходные данные
2 1 4 3 5 
*/

function evenIndex(arr) {
  for (let i = 1; i < arr.length; i += 2) 
      [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
  return arr;
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
  arrayPrint(evenIndex([1, 2, 3, 4, 5, 6]));
}

//interfaceTest();
test();
/*
9I.js 28.04.2021
Выведите значение наименьшего нечетного элемента списка, а если в списке нет нечетных элементов - выведите число 0.

Входные данные
Вводится список чисел. Все числа списка находятся на одной строке.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
0 1 2 3 4
выходные данные
1
входные данные
2 4 6 8 10
выходные данные
0
*/

// определяет наименьшее положительное - возвращвет число - ответ на задачу
function minOdd(arr) {
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      if (arr[i] < min) {
        min = arr[i];
      }
    } 
  }
  return min === Infinity ? 0 : min;
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
    arrayPrint(minOdd(arrayInput()));    
}

function test() {
    arrayPrint(minOdd([5, -4, 3, -2, 1]));
    arrayPrint(minOdd([0, 1, 2, -3, 4]));
    arrayPrint(minOdd([2, 4, 6, 8, 10]));
}

//interfaceTest();
test();

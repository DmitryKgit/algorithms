/*
6H.js 25.10.2019
Дана строка, в которой буква h встречается как минимум два раза. 
Разверните последовательность символов, заключенную между первым и последнием появлением буквы h, в противоположном порядке.
Входные данные
Вводится строка.
Выходные данные
Выведите ответ на задачу.
Примеры
входные данные
In the hole in the ground there lived a hobbit
выходные данные
In th a devil ereht dnuorg eht ni eloh ehobbit
*/
// function reverse (str) { return str.split('').reverse().join(''); }
let str = 'In the hole in the ground there lived a hobbit';
let index1 = str.indexOf('h');
let index2 = str.lastIndexOf('h');
let result = str.slice(0,index1+1); // срез от начала строки до первого h включая h
// console.log(result);
for (let i = index2-1; i > index1; i--)  // На каждом шаге цикла от последнего символа разворачиваемой части, до первого
    result += str[i];                    // добавляем символ к строке
// console.log(result);
result += str.slice(index2); // 1) Первая часть, 2) развернутая часть, 3) добавим срез после последней h до конца строки.
console.log(result); 
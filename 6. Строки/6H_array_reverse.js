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
var str = 'In the hole in the ground there lived a hobbit';
var step1 = str.indexOf('h');
var step2 = str.lastIndexOf('h');
console.log(str.slice(0,step1+1) + str.slice(step1+1,step2).split('').reverse().join('') + str.slice(step2));
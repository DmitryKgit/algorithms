/*
6H.js 07.11.2020. 
Дана строка, в которой буква h встречается как минимум два раза. 
Разверните последовательность символов, заключенную между первым и последнием появлением буквы h, в противоположном порядке.

Входные данные
Вводится строка.
In the hole in the ground there lived a hobbit
Выходные данные
Выведите ответ на задачу.
In th a devil ereht dnuorg eht ni eloh ehobbit
*/

function processing(str) {
    let newArray = str.split('');
    let start = newArray.slice(0, newArray.indexOf('h') + 1);
    for (let i = newArray.lastIndexOf('h') - 1; i > newArray.indexOf('h'); i--) {
        start.push(newArray[i]);
    }
    let result = start.join('') + str.slice(str.lastIndexOf('h'));
    console.log(result);
}

let str = 'In the hole in the ground there lived a hobbit';
processing(str);
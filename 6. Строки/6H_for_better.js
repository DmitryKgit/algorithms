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
    var begin = str.indexOf('h') + 1;   // Первый элемент разворачиваемой последовательности
    var end = str.lastIndexOf('h') - 1; // Последний ее элемент  
    for (let i = 0; i <= (end-begin-1)/2; i++) {  // Обращение фрагмента от begin до end включительно. 
        // i - отступ от начала обращаемого фрагмента
        let buf = newArray[end-i];
        newArray[end-i]=newArray[begin+i];
        newArray[begin+i]=buf;     // Поменять местами
    }
    return newArray.join('');
}

let str = 'In the hole in the ground there lived a hobbit';
console.log(processing(str));
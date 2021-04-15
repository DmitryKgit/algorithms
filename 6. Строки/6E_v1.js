/*
6E.js 06.11.2020. 
Дана строка. 
Если в этой строке буква f встречается только один раз, выведите её индекс. 
Если она встречается два и более раз, выведите индекс её первого и последнего появления. 
Если буква f в данной строке не встречается, ничего не выводите.

При решении этой задачи нельзя использовать метод count и циклы.

Входные данные
Вводится строка.
comfort     office
Выходные данные
Выведите ответ на задачу.
3           1 2
*/

function processing(str) {
    let first = str.indexOf('f');
    let last = str.lastIndexOf('f');
    if (first == last && first >= 0) {
        console.log(first);
    } else if (first != last) {
        console.log(first, last);
    }
}

let str = 'strf';
processing(str);
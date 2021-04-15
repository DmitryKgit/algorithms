/*
6J.js 01.11.2019
Дана строка. Замените в этой строке все цифры 1 на слово one.
Входные данные
Вводится строка.
Выходные данные
Выведите ответ на задачу.
Примеры
входные данные
1+1=2
выходные данные
one+one=2
*/
var str = '1+1=2';
var masv = str.split('');
// console.log(masv);
for (var i = 0; i < masv.length; i++) {
    if (masv[i] == '1')
        masv[i] = 'one';
}
console.log(masv.join(''));
console.log(typeof(str));
console.log({}.toString.call("строка"));
var str2 = new String(1);
console.log(str2 instanceof String);
var res = str.replace(/1/g, "one");
console.log(res);
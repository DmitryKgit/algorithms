/*
6K.js 01.11.2019
Дана строка. Удалите из этой строки все символы @.
Входные данные
Вводится строка.
Выходные данные
Выведите ответ на задачу.
Примеры
входные данные
Bilbo.Baggins@bagend.hobbiton.shire.me
выходные данные
Bilbo.Bagginsbagend.hobbiton.shire.me
*/
var str = 'Bilbo.Baggins@bagend.hobbiton.shire.me';
var masv = str.split('');
for (var i = 0; i < masv.length; i++) {
    if (masv[i] == '@')
        masv[i] = '';
}
console.log(masv.join(''));
// решение функцией
console.log(str.replace(/@/g, ''));
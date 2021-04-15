/*
6K.js 08.11.2020. 
Дана строка. Удалите из этой строки все символы @.

Входные данные
Вводится строка.
Bilbo.Baggins@bagend.hobbiton.shire.me

Выходные данные
Выведите ответ на задачу.
Bilbo.Bagginsbagend.hobbiton.shire.me
*/

function processing(str, char) {
   return str.split(char).join('');
}

let str = 'Bilbo.Baggins@bagend.hobbiton.shire.me';
console.log(processing(str, '@'));
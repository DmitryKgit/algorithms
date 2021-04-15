/*
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

Линейный порядок роста О(N)
*/

let st = "Bilbo.Baggins@bagend.@hobbiton.shire.me";//parseInt(prompt('Введите число'));
console.log(st.replace(/@/g, ""));
/*
Дана строка, в которой буква h встречается минимум два раза. Удалите из этой строки первое и последнее вхождение буквы h, а также все символы, находящиеся между ними.

Входные данные
Вводится строка.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
In the hole in the ground there lived a hobbit
выходные данные
In tobbit
*/

let st = "In the hole in the ground there lived a hobbit";//parseInt(prompt('Введите число'));
st = st.replace(st.slice(st.indexOf("h"), st.lastIndexOf("h")+1), "");
console.log(st);
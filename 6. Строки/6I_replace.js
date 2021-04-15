/*
Дана строка, в которой буква h встречается как минимум два раза.
Повторите последовательность символов, заключенную между первым и
последнием появлением буквы h два раза, сами буквы h повторять не надо.

Входные данные
Вводится строка.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
In the hole in the ground there lived a hobbit
выходные данные
In the hole in the ground there lived a e hole in the ground there lived a hobbit
*/

let st = "In the hole in the ground there lived a hobbit";//parseInt(prompt('Введите число'));
st = st.replace(st.slice(st.lastIndexOf("h")), "") + st.slice(st.indexOf("h")+1);
console.log(st);
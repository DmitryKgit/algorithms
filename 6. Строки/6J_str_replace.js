/*
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

let st = "1+1=2";//parseInt(prompt('Введите число'));
for(let i = 0; i<st.length; i++) {
    st = st.replace(1, "one");
}
console.log(st);
/*
Дана строка, состоящая из слов, разделенных пробелами. Определите, сколько в ней слов. Используйте для решения задачи метод count.

Входные данные
Вводится строка.

Выходные данные
Выведите ответ на задачу.

Примеры
входные данные
Hello world
выходные данные
2

  Hello    world
*/

let st = "Hello world";//parseInt(prompt('Введите число'));
let new_st = st.split(" ");
console.log(new_st.length);
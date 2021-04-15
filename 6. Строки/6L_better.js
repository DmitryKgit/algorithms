/*
Дана строка. Замение в этой строке все появления буквы h на букву H, кроме первого и последнего вхождения.
Входные данные 
Вводится строка.
Выходные данные 
Выведите ответ на задачу.
Примеры
Входные данные
In the hole in the ground there lived a hobbit
Выходные данные
In the Hole in tHe ground tHere lived a hobbit
*/

let st = "In the hole in the ground there lived a hobbit";//parseInt(prompt('Введите число'));
let first = st.indexOf("h");
let last = st.lastIndexOf("h");
let new_st = st.slice(first+1, last);
console.log(st.slice(st[0], first+1) + new_st.replace(/h/g, "H") + st.slice(last));
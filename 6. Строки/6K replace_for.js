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

Квадратичный порядок роста по времени О(N**2)
*/

let st = "Bilbo.Baggins@bagend.hobbiton.shire.me";//parseInt(prompt('Введите число'));
for(let i = 0; i<=st.length; i++) {
    st = st.replace("@", "");
}
console.log(st);
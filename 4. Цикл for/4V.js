/*
4V.js 19.09.2020. 
Даны два четырёхзначных числа A и B. Выведите в порядке возрастания все четырёхзначные числа в интервале от A до B,
запись которых содержит ровно три одинаковые цифры.
Входные данные
Вводятся два целых числа A и B
1900
2100
Выходные данные
Выведите ответ на задачу.
1911
1999
2000
2022
*/

// возвращает true, если в числе number 3 одинаковые цифры, иначе false
function getNums(number) {
    let arr = String(number).split('');
    for (let i = 0; i < 10; i++) {
        let count = 0;
        for (let num of arr) {
            if (Number(num) == i) {
                count++;
            }
        }
        if (count == 3)
            return true;
    }
    return false;
}

let A = 1900;
let B = 2100;
for (let k = A; k <= B; k++) {
    if (getNums(k)) // если в числе 3 одинаковые цифры
        console.log(k);
}

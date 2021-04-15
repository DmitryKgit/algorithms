/*
13W.js 14.12.2020. 
Хорошо известна задача-шутка, в которой требуется продолжить числовой ряд:
1 11 21 1211 111221 312211 13112221 1113213211 ...

Входные данные
Вводится одно число k≤25
4
Выходные данные
Выведите одно число - k-е число в этом ряду
1211
*/

function processing(k) {
    let n = 1;
    let next = '';
    let str = '1';
    while (n < k) {
        for (let i = 0, cnt = 1; i < str.length; i++) {  // 
            if (str[i] == str[i + 1]) {
                cnt++;
            } else {
                next += cnt + str[i];
            }
        }
        str = next;
        next = '';
        n++;
    }
    return str;
}

let k = 4;
console.log(processing(k));




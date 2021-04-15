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

Первый член последовательности - 1, чтобы получить следующий член последовательности, надо прочитать предыдущий. 
1 
11 (одна единица) 
21 (две единицы) 
1211 (одна двойка, одна единица) 
111221 (одна единица, одна двойка, две единицы) 
312211 ( три единицы, две двойки, одна единица) 
13112221 ( одна тройка, одна единица, две двойки, две единицы) 
1113213211 – следующее число
31131211131221 - 9е
*/

// По числу k<=25 вернуть результат k-е число в этом ряду в виде строки.
function result(k) {
    let prev = '1';
    for (let i = 1; i < k; i++) {
        prev = play(prev);
    }
    return prev;
}

// Получает очередное число в виде строки по предыдущему в виде строки.
function play(prev) {
    let next = '';
    let cnt = 1;
    for (let i = 0; i < prev.length; i++) { // Тут будет сравнение последнего prev с undefined, что приведет к срабатаванию else на последнем шаге цикла.
        if (prev[i] == prev[i + 1]) {   // Цифра повторяется еще раз
            cnt++;
        } else {                        // Цифра закончилась - добавляем в результат
            next += cnt + prev[i];
            cnt = 1;  // Счетчик повторения сбрасываем в 1, новая цифра встретилась 1 раз.
        }
    }
    return next;
}

for(let i=1; i<10; i++)
    console.log(result(i));





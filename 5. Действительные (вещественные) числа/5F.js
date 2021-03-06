/*
5F.js 08.10.2020
С начала суток часовая стрелка повернулась на угол в α градусов. 
Определите на какой угол повернулась минутная стрелка с начала последнего часа. 
Входные и выходные данные — действительные числа.

При решении этой задачи нельзя пользоваться условными инструкциями и циклами.
Входные данные
Вводится неотрицательное действительное число.
190
Выходные данные
Выведите ответ на задачу.
120
*/

function processing(alpha) {
    let secondsInDay = 12 * 3600; // секунд в 12 часах
    let hourDegree = 360 / secondsInDay; // угол, на который поворачивает часовая стрелка за 1 сек
    let minuteDegree = 360 / 60 / 60; // угол, на который поворачивает минутная стрелка за 1 сек
    let time = alpha / hourDegree; // количество секунд, прошедших с начала полудня / полуночи
    let killHours = time % 3600; // количество секунд, прошедших с начала последнего часа
    let result = minuteDegree * killHours; // угол, на который повернёт минутная стрелка с начала последнего часа
    return result;
}

let alpha = 190; // угол, на который повернулась часовая стрелка
console.log(processing(alpha));
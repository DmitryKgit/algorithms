/*
3S.js 03.08.2020. 
Даны три стороны треугольника a, b, c. Определите тип треугольника с заданными сторонами. 
Выведите одно из четырех слов: rectangular для прямоугольного треугольника, acute для остроугольного треугольника, 
obtuse для тупоугольного треугольника или impossible, если треугольника с такими сторонами не существует.

Входные данные
Вводятся три натуральных числа.
3
4
5 
Выходные данные
Выведите ответ на задачу.
rectangular
*/

let a = 3;
let b = 4;
let c = 5;
let C = a + b - c;
let B = a + c - b;
let A = b + c - a;
let C2 = a * a + b * b - c * c;
let B2 = a * a + c * c - b * b;
let A2 = b * b + c * c - a * a;

/* if (C <= 0 || B <= 0 || A <= 0) console.log("impossible");
else if (C2 == 0 || B2 == 0 || A2 == 0) console.log("rectangular");
else if (C2 > 0 || B2 > 0 || A2 > 0) console.log("acute");
else console.log("obtuse"); */
console.log(C <= 0 || B <= 0 || A <= 0 ? "impossible" :
            C2 == 0 || B2 == 0 || A2 == 0 ? "rectangular" :
            C2 > 0 || B2 > 0 || A2 > 0 ? "acute" : "obtuse");
 

/*if (a + b <= c || a + c <= b || b + c <= a) console.log("impossible");
else if (a * a + b * b == c * c || a * a + c * c == b * b || c * c + b * b == a * a) console.log("rectangular");
else if (a * a + b * b > c * c || a * a + c * c > b * b || c * c + b * b > a * a) console.log("acute");
else console.log("obtuse");*/
 
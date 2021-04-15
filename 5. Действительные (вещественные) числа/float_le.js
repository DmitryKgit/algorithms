let eps = 1E-15;
let a = 1;
let b = 1 + eps;
if ((b - a >= eps) || (Math.abs(a - b) < eps)) { // a <= b
    console.log("a <= b");
} else console.log("a > b");
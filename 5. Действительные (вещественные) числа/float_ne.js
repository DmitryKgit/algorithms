let eps = 1E-15;
let a = 1 + eps;
let b = 1;
if (Math.abs(a - b) >= eps) { // a!=b
    console.log("a != b");
} else console.log("a == b");
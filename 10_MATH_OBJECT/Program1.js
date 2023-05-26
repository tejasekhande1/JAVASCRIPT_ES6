var num = 10;
console.log(Math.sign(num));    // 1
num = -10;
console.log(Math.sign(num));    // -1
num = 0;
console.log(Math.sign(num));    // 0
num = -0;
console.log(Math.sign(num));    // -0
num = "Tejas";
console.log(Math.sign(num));    // Nan
num = NaN;
console.log(Math.sign(num));    // Nan
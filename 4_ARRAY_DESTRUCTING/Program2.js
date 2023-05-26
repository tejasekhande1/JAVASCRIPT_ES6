
// swapping two variables without using third

var a = 10;
var b = 20;

console.log(`A = ${a}`);
console.log(`B = ${b}`);

[a,b] = [b,a];

console.log(`A = ${a}`);
console.log(`B = ${b}`);
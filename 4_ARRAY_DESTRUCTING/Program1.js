const myprog = ['js','php','html','css','python'];

// es5
console.log(myprog[0]);
console.log(myprog[1]);
console.log(myprog[2]);
console.log(myprog[3]);

// es6
let [top1,top2,top3] = myprog;
console.log(top1); 

let[t1,,,,tLast] = myprog;
console.log(tLast);

console.log(`My First ${t1} and Last ${tLast}`);
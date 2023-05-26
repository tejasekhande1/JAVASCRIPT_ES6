function sum(a,b,c){
    console.log(a+b+c);
}

var arrVal = [1,2,3];
sum.apply(null,arrVal);
sum(...arrVal);

var arr1 = [1,2,3];
var arr2 = [4,5,6];

arr1 = [...arr1,...arr2];
console.log(arr1);
function sum(a,b){
    console.log(`Addition : ${a+b}`);
}

sum(1,2,3,4,5);

// es6

function sum1(...ipts){
    console.log(ipts);
    console.log(...ipts);
    var total = 0;
    for(let i of ipts){
        total += i;
    }

    console.log(total);
}

sum1(1,2,3,4,5,6,7,8,9,10);
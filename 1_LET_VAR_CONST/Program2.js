function modernJS(Love){
    
    if(Love){
        let n = 10;             // block scope
        var m = 20;             // function scope
        console.log('True');
        console.log(n);
    }

    // console.log(n);
    console.log(m);
}

modernJS(true);

var whoWillWin = "Mumbai";

if(true){
    var whoWillWin = "Chennai";
}

console.log(whoWillWin);

let whoWillWin1 = "Mumbai";

if(true){
    let whoWillWin1 = "Chennai";            // block scope
}

console.log(whoWillWin1);
const bioData = {
    name : "Tejas",
    age : 20,
    deg : 'MNC'
};

console.log(`My Name is ${bioData.name}`);

let {name,age,deg} = bioData;
console.log(`My Name is ${name} and Age ${age}`);

const stud = {
    sName : "Tejas",
    info : "Developer",
    hobb : {
        first : "Cricket",
        sec : "Trekking"
    }
}

console.log(stud.hobb.first);

let {sName,info,hobb} = stud;
console.log(hobb.sec);
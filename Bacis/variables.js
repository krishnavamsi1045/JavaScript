let a = 5;
var  b= 8;

const c = 88;

let aa = "name";
var bb = 'naam';
const cc = "peru";
// haven't declared the type but also prints not preferable
novarible = "yes";

//if you don't the type of the varible you can declare and leave it will be stored as undefined 
let dontKnowDataType;

//to display multiple values at same time
console.table([a,b,c,aa,bb,cc,novarible,dontKnowDataType]);

//prefer to not use var use let and const
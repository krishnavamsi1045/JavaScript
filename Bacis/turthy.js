// ************************* most important  ****************************

const userEmail = "jkv@gmail.com"; //if there is anything in the string it is taken as true;
if(userEmail){
    console.log("something string is working");
}

const userEmail2 = ""; // if string is empty then it is taken as false;
if(userEmail2){
    console.log("empty string is working");
}

const userEmail3 = []; //even it is empty it works
if(userEmail3){
    console.log("empty array working ");
}

//there is set of rule for this

//falsy values
// false
// 0
// -0(interview purpose)
// NaN;
// null;
// undefined;
// BigInt 0n


//truthy values

//it may suprize you
//'0','false',function(){},' ',[],{}

//you should not use array turthy value 

//for array use this always
const arr = [];
if(arr.length ===0){
    console.log("array is empty !");
}

//for objects
const obj = {};
if(Object.keys(obj).length === 0){
    console.log("this object is empty!");
}

const obj2 = {
    name:'sambavi',
    age:23
}
console.log(Object.keys(obj2));


//Nullish Coalescing Opearator (??):null undefined
//it used to in place of a complex function which return data from db if it is empty then we take 88 (ingenereall null)
//this is a new operator

let value = 88??56;
console.log(value);

let value2 = null?? 8;
console.log(value2);

//what if three values

//the function which give the value first will be stored
let value3 = 10??88??56;
console.log(value3);

//we even have terniary opearator which is different from nullish coalescing opearator
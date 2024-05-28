//All Primitive DataTypes are Call By Value (copy of data)
// primiteve ->
//  1.Int
//  2.string
//  3.BigInt(For Big Numbers and Scientific Purpose)
//  4.undefined
//  5.null
//  6.Boolean
//  7.symbol

//to make value to be uniqely identified
let symbolExample1 = Symbol("hai");
let symbolExample2 = Symbol("hai");
console.log(symbolExample1 === symbolExample2);
// Reference DataTypes(Non-Primitive)
//arryas,objects functions

let arr     =["ironman","wonderwoman","captainamercia"];

console.log(typeof(arr));
let object = {
    "name":"krishna",
    age:24
}
console.log(typeof(object));

const myFunction = function(){
    console.log("this is my function man");
    
}
console.log(typeof(myFunction));

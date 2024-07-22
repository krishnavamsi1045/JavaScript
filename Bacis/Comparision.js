//TypeScript doesn't allow you to compare different DataType whereas js do and js something gives unexpected behaviours

// console.log(2>5);
// console.log(88>false);
// console.log("jai">56);

console.log(null>0);
console.log(null == 0);

//this return true because js converts the null to some interger so returns 
console.log(null >=0);

//for undefined all posible solutions are false

//Triper Equals (===) is used to check stritly not only value but also datatype

console.log("2" == 2);
console.log("2" ===2);
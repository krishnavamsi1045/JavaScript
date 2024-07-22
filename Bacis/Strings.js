// //bacticks are prefered because we can use interpolation in js and also use js string fucntion on then
// // var name = "kv";
// // console.log("my name is ${name}");
// // console.log(`my name is ${name}`);

// let Name = "Krishnavamsi";
// Name[0] = "s";
// let length = Name.length;
// console.log(Name.substring(0,length-4));
// console.log(Name);
// var MakesObjectName = new String("krishnavamsi");
// let lengthOfMakeObjectName = MakesObjectName.length;
// // console.log(MakesObjectName.__proto__); // actuall when you tried this on the browser then proto conatians all the methods no need to use proto just for learnng purpose
// console.log(MakesObjectName.slice(0,lengthOfMakeObjectName-4))
// console.log(typeof(MakesObjectName))
// console.log(MakesObjectName.toUpperCase());
// MakesObjectName[0] = "s";
// console.log(MakesObjectName);
// // console.log(MakesObjectName);
// // console.log(MakesObjectName.toLowerCase())

// let normalInteger = 99;
// let copy = normalInteger;
// console.log(copy);

// let food = "this is very delicout"
// console.log(food);
// console.log(food.replace("this is very delicout","krishna vamsi is a good boy-aliens"));
// console.log(food);


// //to convert the string into array based on character
// let spiltName = "krishna vamsi sambavi";
// console.log(spiltName.split(' ',1));

// ************************ Practice **********************

//string as primitive datatype
// let practiceName = "krishnavamsi";

// let pracitceCopy = practiceName;

// pracitceCopy+=88;
// console.log(pracitceCopy);
// console.log(practiceName);
// practiceName+=56;
// console.log(practiceName);


//makig string as obj
let objString = new String("MallediSambavi");
console.log(typeof(objString));
let copyObjString = objString;
copyObjString = `going to be wife of jamalpuri krishnavamsi`;
console.log(copyObjString);
console.dirxml(objString);




for(let i=0;i<10;i++){
    if(i==5) break;
    if(i==3 ) continue;
    console.log(i);
}

//******************* for of */


//works for strings
const greetings = "hello world!";
for (const greet of greetings) {
    console.log(greet);
}

//works for Arrays
const myArr = [{id:1,name:'krishna'},{id:2,name:'vamsi'}];
for(const items of myArr){
    console.log(items);
}


//doesn't works for numbers

// const myNum = 8856;
// for(const num of myNum){
//     console.log(num);
// }


//for of works for maps 
const map = new Map();
map.set('IN','India');
map.set('AUS',"australia");
map.set('USA','united states of america');

//for of

for(const items of map){
    console.log(items);
}

//for in not works

for(const items in map){
    console.log(map);
}

//to print specific key or values or key and values

for(const [key,value] of map){
    console.log(key,':-',value);
}

//for doesn't works for objects 
 const myObj = {
     id:88,
     name:'heartStealer',
     cost:'everthing'
 }

// for(const items of myObj){
//     console.log(items);
// }

//for objects we have to use (for in)

for (const key in myObj) {
    console.log(key +':-'+myObj[key]);
}


// **************** for arrays

let arr1 = ['vamsi','krishna','saindh'];
for(const items of arr1){  //for of works
    console.log(items);
}


for(const items in arr1){
    console.log(items); //it only prints keys which are indexes
    console.log(arr1[items]);
}



// ******************************************* FORECH *********************

//call function doesn't have name 
console.log(`for here foreach function starts`);

const nameArr = ['krishna','vamsi','krishnavamsi'];
nameArr.forEach((item)=>{
    console.log(item);
})


/// ********************* INTERESTING 

const print = (item)=>{
    console.log(item);
}

nameArr.forEach(print) //just pass the reference

// nameArr.forEach(print()) //don't execute it throws error


//******************** the foreach take 3 paremeter (items ,index, actualArray) */

nameArr.forEach((items,indexs,nameArr)=>{
    console.log(items,indexs,nameArr)
})



const finalArr = [{id:1,name:'krishna'},{id:2,name:'vamsi'},{id:3,name:'jkv'}];
finalArr.forEach((items)=>{
    console.log(items);
    console.log(items.name);
    console.log(items.key);
    for(const item in items){
        console.log(items[item]+`'s key is :`+item);
    }
})
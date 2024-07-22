//functions


function name(){

    console.log(`k`);
    console.log(`r`);
    console.log(`i`);
}

console.log(name);//the name of function without parenthesis is reference (it will be used in react remember)
//     ()   =>// executte
name(); 



function isLoggedIn(username){
        return (`${username} you have logged in`);
}
console.log(isLoggedIn("krishna"));


// if we don't pass arguments then it we get undefind  **** INTERVIEW Q
console.log(isLoggedIn());


function printName(name){
    //to check whethere it is not undefined
    //we in genearlly use
    // if(name === undefined){
    //     console.log(`please enter man`);
    // }
    //we can use this too
    if(!name){   // ******** it says that it is undefined
        console.log(`please enter your name`);
        return ;
    }
    console.log(`how are you Mr.${name}`);
}

printName();
printName(`krishna`)

//even if we don't get any value you can use default value like this 

function good(name = `kv1045`){
    //this line won't execute at all becauce if user passes no value then default value would be kv1045 or if he passes then default would overridden!
    if(!name){
        console.log(`please enter your name`);
        return;
    }
    console.log(`${name} is a very good boy!`);
}

//when we are making ecomerce app then user add the items into the cart then we have to caluculate for that see this example 

function addItems(num){
    return num;
}
console.log(addItems(56));
//but in ecomerce app we get values like this
console.log(addItems(56,88,12)); //but this only print first agrument to overcome it (even thorugh we use loops )
//use rest operator (...) which is similar to spread opreator based on the suitation! Now it is Rest oprerator
//to pass bunch of values in the paremeter see the below example to get better understanding
function addItems2(...num){
    return num;
}
console.log(`rest opearator :`+addItems2(56,88,12));
//we can even write like this

function addItems3(num1,num2,...num){
    return num;

}

 // ******************* INTERVIEW Q
console.log(`rest opearator :`+addItems3(56,88,12,10,8));// it only print 12,10,8 because they come under num 

// we can pass objects too

const obj1 = {
    name:'krishna',
    cost:88
}
function printObj(object){
    console.log(`${object.cost} is the cost of ${object.name}`);
}
printObj(obj1);
//if you pass any typo or nth then you will get undefined

function printObj(object){
    console.log(`${object.prics} is the cost of ${object.name}`);
}
printObj({
    name:'vamsi',
    
})
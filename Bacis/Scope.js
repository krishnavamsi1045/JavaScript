// scopes are differnt in node and windows ******* we need to know more about it

// when you sees it guess if you guesed it correctly then your are better than me 😁



 // ******************* closures *******************


// the inside function accessing outside variable is known as closures
//it's happening here the two function is accsessing varible username outside
function one(){
    const username = `krishna`;        

    function two(){
        const price  = 88;
        console.log(username+`2`);
    }
    console.log(username);
    two();
//    console.log(price);
   
}
one();


// *********************** hoisting *********************

console.log(sum(88));

function sum(num){
    return num+1;
}

//console.log(ans(88))  //it gives error

const ans = function(num){
    return num+56;
}

console.log(ans(88)); // it doesn't gives 

// *** important

// in sum fucntion it just a fucntion so we can call it before or after the function code but
//if you store it in varible directly then you should call it after your function code

//this is hoising concept for more details read more 
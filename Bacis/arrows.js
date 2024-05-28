//arrow functions doesn't have this keyword

const user = {
    name:'krsihna',
    price :88,
    message: function(){
       console.log( `${this.price} is cost of ${this.name}`);
       console.log(this); //it print the current context which is this object
    }

}
console.log(user.price);
console.log(user.message())
console.log(user["message()"]);
user.name= 'vamsi';
console.log(user.message());


/// if we use it outside you will get empty object in NODE JS
console.log(this); //because we don't have global object


//********* imporatant ******/
//console.log(this) in webbroser gives you the document
// because in browser the global object is windowwindow😁

//this doesn't works in function but in objects

function chai(){
    const name = 'krishna';
    console.log(this.name);
    ///but this in function give the sth
    console.log(this);
}
// chai();

const ans = function(){
    console.log(`this is hoisitng type`);
    const name = 'vamsi';
    console.log(this);
    console.log(this.name);
}
console.log(ans());

    //arraow functions this is not useable

const arr = ()=>{
    console.log(this);
}


// **************** I NEED YOU TO LISTEN CAREFULLY **********************
//in arrow function if we use {} thses then return is must if we use () then no need to use return
//(explicit)
const a = (a,b)=>{
    return a+b;
}
console.log(a(56,88));

//Look carefully now (implicit function)

const b = (a,b) =>  (
    a+b
    
)

console.log(b(56,88));

const c = (a,b) => {
    return {name:'sambavi'};
}
console.log(c(56,88));

//used in react carefull
const d = (a,b) => ({name:'vamsisambavi'})

console.log(d(56,88));
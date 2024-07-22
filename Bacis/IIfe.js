//Immediately Invoked Function Expression  (IIFE)
//used to execute the function imediately
//sometime because of global scope's  polution  to remove such population we use IIFE semicolon is important to stop the context (you will search and will know about it in future)


//**************************** important       */
//named IIFE are normal functions
//unnamed IIFE are arrow functions 




(
    function(){
        console.log('hey i IIFE man')
    }
    )();
    
    
    
    
    //carefully for arrow functions ////////////////////////////=> important refer again 
    (()=>{
       const  ans = () =>{
            console.log(`this is arrow functions`)
        }
    }
    )();
    
    
    //another method
    
    (()=>{
        console.log("hey i am original arrow method for immediately ivoked function expression");
    });
    
    
    //for example if we need to pass values then 
    
    ((name)=>{
        console.log(`${name} is a good boy;`);
    })
    ('vamsi');
    
    
    
//method 1-> promise storing in variable

const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       // console.log(`promise 1 is made`);
        resolve();
    },5000);
   
});

promise1.then(()=>{
    //console.log(`promise is completed`);
})

console.log(`namastey bhaya `);

//method 2 -> promise is not storing 



new Promise((resolve,reject)=>{
    setTimeout(()=>{
      //  console.log("hai vamsi this is Promise2");
        resolve();

    },10000);
}).then(()=>{
    //console.log("promise 2 is successfulyy completed");
})


//Getting the Data 

//****************** The then is funtion which returns results so to pass data from promise to then use you can pass data from resolve and
//and use it in then function */

let promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({name:'vamsi',cost:88});
       // console.log("this is promise3 started")
    },2000);
});

promise3.then((user)=>{
//console.log(user.name+user.cost);
})


let promise4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = '';
        if(error){
            resolve({anime:'demonslayer',hero:'tanjiroa'});
        }
        else{
            reject("Error: something went wrong!")
           
        }
       
    },2000);});

    //* this is chaining
    promise4.then((data)=>{
       // console.log(data.hero);
        return data.anime;
    }).then((data)=>{
       // console.log(data);
    }).catch((error)=>{
       // console.log(error);
    }).finally(()=>{
       // console.log(`it is neither completed nor failded`);
    })

    //Next Level using Async


    let promise5 = new Promise((resolve,reject)=>{
       setTimeout(()=>{
        let data = "hai";
        console.log(`under the promise5`);
        if(!data){
            resolve({username:'javascript',password:123});
        }
        else{
            reject("something error occured")
        }
       },1000);
    })

    //now using async instead of then and catch and final
    async function nervera(){
        let response = await promise5;
        console.log(`under normal function`);
        console.log(response);

    }

  //  nervera();  //it is not handling try and catch 

    //async await can't hanndle errors
    //for that 


    //it is good
    async function nervera2 (){
        try{
            let respone = await promise5;
            console.log(respone);
        }
        catch(error){
                console.log(error);
        }
    }

    nervera2();



    //*********** important you can use then or async    */


    // async function fromApi(){

    //     try{
    //         const response = await fetch('https://api.github.com/users/hiteshchoudhary');
    //         const followers = await response.json();
    //     console.log(followers);
        
    //     }
    //     catch(e){
    //         console.log("error bro ");
    //     }
        
    // }

    // fromApi();

    // let usingThen = new Promise((resolve,reject)=>{
    //     try{
    //         console.log(`hey using then()`);
    //         let respone = fetch("https://api.github.com/users/hiteshchoudhary");
    //         resolve(respone);
    //     }
    //     catch(e){
    //         reject("error");
    //     }
    // })


    // usingThen.then((respone)=>{
    //     console.log(respone);
    // }).catch(()=>{
    //     console.log("error bro");
    // })
   

    //** if you observer here fetch response is happening than any other fucntion because in javascript fetch has highest priority
  //important->  //queue name(micro task queue ) */

    fetch(`https://api.github.com/users/hiteshchoudhary`).then((respone)=>{
        return respone.json();
    }).then((data)=>{
        console.log(data.followers);
    }).catch((e)=>{
        console.log(`error occured`);
    })

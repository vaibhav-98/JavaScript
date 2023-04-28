//================================ ex - 1==========================================================//

function createPromise () {

   return new Promise ( function exec (resolve, reject) {
        setTimeout ( function fn () {
            console.log("timer done");
            resolve("done")
        },3000)
    })
}


async function consume () {
    console.log("inside function");
    const response = await  createPromise () 
    const response1 = await  createPromise () 
    console.log("response is" , response);
}

console.log("start");

consume ()

console.log("end");




// ======================================== ex- 2 ==============================================================//



function createPromise () {

    return new Promise ( function exec (resolve, reject) {
         setTimeout ( function fn () {
             console.log("timer done");
             reject(10)
         },3000)
     })
 }


   async function consume () {
 try {
    
        console.log("inside function");
        const response = await  createPromise () 
        const response1 = await  createPromise () 
        console.log("response is" , response);
    
 } catch (error) {
    console.log("handled", error)
    
 }

}
 

 
 console.log("start");
 
 consume ()
 
 console.log("end");
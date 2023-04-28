//======================================= ex - 1=======================================================//
 
// function createPromise () {
//     return new Promise ( function exec (resolve, reject) {
//         setTimeout( function f() {
//             console.log("timer done")
//             resolve (10)
//         },3000)
//     } )
// }


// console.log("start");
// let x = createPromise () 
// console.log("got a new promise");

// x.then ( function f(value) {
//     console.log("promise done", value);
// }).catch ( function g(value) {
//    console.log("handel" , value);
// }). finally ( function fn () {
//     console.log("finally done");
// })

// console.log("end"); 

// for ( let i =0 ; i < 1; i++) {
//     console.log("forLoop done");
// }



//================================================== ex -2 ==============================================================//




function createPromise () {
    return new Promise ( function exec (resolve, reject) {
        setTimeout( function f() {
            console.log("timer done")
            reject (10)
        },3000)
    } )
}


console.log("start");
let x = createPromise () 
console.log("got a new promise");

x.then ( function f(value) {
    console.log("promise done", value);
}).catch ( function g(value) {
   console.log("handel" , value);
}). finally ( function fn () {
    console.log("finally done");
})

console.log("end"); 

for ( let i =0 ; i < 1; i++) {
    console.log("forLoop done");
}















//========================= Sync callback ======================================================//


function h (x, fn ) {
    // h -> is a hof
    // fn -> is a callback 
    console.log(x*x);
    fn (x*x)
}
 
h (10,exec)
 
function exec (h) {
    console.log("squared value is ", h);
}




//========================= Async callback =====================================================//



console.log("start");

setTimeout ( function fn () {
    console.log("timer done 1");
},1000);

setTimeout ( function fn () {
    console.log("timer done 2");
},0);

console.log("end");

for (let i = 0 ; i < 5 ; i++) {
    console.log("abc");
}


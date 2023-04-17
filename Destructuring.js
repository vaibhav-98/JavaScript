//===================================================SPREAD============================================//

const oneArray = [1,2,3,4]
const twoArray = [5,6,7,8]

//const threeArray = oneArray.concat(twoArray)
// console.log(threeArray);


const threeArray = [...oneArray, ...twoArray]
//console.log(threeArray);



//===========================================================REST========================================//

function manyArgument () {

    console.log(typeof arguments);
    let args = Array.from (arguments) // Array.from() method creat new array

    let finalArray = args.map(e => e)
    console.log(finalArray);
}


function manyArgument2 (...arg) {

    console.log(typeof arg);
    let finalArray = arg.map( el => el)
    console.log(finalArray);
}


//manyArgument(1,2,3)
//manyArgument2(3,4,5)

//========================================Example spread=======================================
//1
const names = ["tea" ,"coffee"]
const newNames= ["wine",...names, "halk"]
console.log(newNames)

//2
const siteName = "pwskill"
console.log([ ...siteName]);


//===========================================Exmple Rest======================================

function pwskill (...value) {

    return value
}
console.log(pwskill("superman", "batman", "spiderman"));
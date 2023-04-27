//===================================================ex-1============================================================//


let score = 4 
function one() {
    let score = 0
    console.log(score);
}

function two () {
    let score = 1;
    console.log(score);
}

function three () {
    let score= 2;
    console.log(score);
}

one () 
two ()
three () 
console.log(score);


//=========================================================ex-2 : Lexical scope =========================================================//


const myGlobalValue = 0
function func () {

    const val1 = 1
    console.log(myGlobalValue);

    function innerOfFunc () {

        const val2 = 2
        console.log(val2,val1,myGlobalValue);

        function innerOfInnerFunc () {

            const val3 = 3;
            console.log(val3,val2,val1,myGlobalValue);
    
        }
        innerOfInnerFunc()
    }
    innerOfFunc ()
}

func ()



//============================================ex - 3 : Closure========================================//

function superFunc () {

    let otherValue = 'I am outer'

    function minorFunc () {

        console.log(otherValue);
    }
    minorFunc ()
}

superFunc()



//=================================================== ex - 4 ===============================//

const errorMessage = "File not found "  ;

setTimeout ( function callback () {
    console.log(errorMessage);
},1000)
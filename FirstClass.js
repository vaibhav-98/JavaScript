const powerTwo = n => {
    return n **2

}

function powerCube (powerTwo , n ) {
    return powerTwo(n) * n
}

console.log(powerCube (powerTwo,3));

function sayHello () {
    return () => {
     console.log ( "hello vaibhav")
    }
}

let guessValue = sayHello()

// console.log(guessValue)
guessValue()

const higherOrder = n =>{
    const oneFun = m => {
        const twoFun = p => {
              return m +  n + p
        }
        return twoFun
    }
    return oneFun

}

// console.log(  higherOrder (3) (4)(2))

const myNum = [20,30,50]

const sumArray = arr => {
    let total = 0 ;
    arr.forEach(element => {
        total += element
        
    });
    return total
}

// console.log ( sumArray(myNum))


function hell0 () {

    console.log (" hello vaibhav")
}
    // setInterval(hell0 ,1000)

    setTimeout(hell0 , 2000)
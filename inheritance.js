const user = {
    name : "top name ",
    email : "top@gmail.com"
}

const teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false ,
}

const TAAssistance = {

    makeAssignment : " js Assignment",

    fulltime : true ,

    __proto__ :TeachingSupport
}

console.log (TAAssistance. isAvailable)


const a=Object.setPrototypeOf(TeachingSupport,teacher)
console.log(a)


//2==========================================================================//


String.prototype.truelength = function () {
    console.log (`true length is ${this.trim().length}`)
}

"vaibhav.      ".truelength()
"Anshu.          ".truelength()
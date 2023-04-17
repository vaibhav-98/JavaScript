let pattern = 'pw'
let regExOne = new RegExp (pattern) 

let flag = 'gi' 
 let regExTwo = new RegExp( pattern,flag) 

 let regExThree = /pw/gi

 const StrToCheck = "pw is growing sonting pw and pw is the best"
const result = regExThree.test(StrToCheck)

console.log(result)

const anotherResult = StrToCheck.match(regExThree)
console.log(anotherResult)


const moreResult = StrToCheck.replace(regExThree, 'p-w')
console.log(moreResult)


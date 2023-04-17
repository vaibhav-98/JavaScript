//======================================================SET ============================================//

let myArray = [1,2,3,4,2,3,4]
let newSet= new Set ([...myArray])
console.log(newSet);

newSet.add(9)
console.log(newSet);

console.log(newSet.has(4));

newSet.clear()
console.log(newSet);

newSet.delete(1)
console.log(newSet);



//======================================================MAP==========================================//

let map = new Map ()
console.log(map.size);

let arr = [

            [1,"shiavm"],
            [2,"vaibhav"],
            [3,"mithun"],
            [4,"raj"]
         ]


   let finalArry  = arr.map((arrIetam)=> map.set(arrIetam[0],arrIetam[1]))

   console.log(finalArry)
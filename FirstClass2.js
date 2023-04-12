let arr = [2,3,4] 
arr.forEach(  (ele, index , arr ) => {
  console.log(index + " : " +ele , arr );
})

const heros = ["nagaraj" , "daga" , "maniraj"]

heros.forEach( (ele) => {
  console.log(ele.toUpperCase())
})

//2 filter

const heroWithiRaj = heros.filter( (h) => {
    return h.endsWith('raj')
})

//console.log(heroWithiRaj)

const arrr = [5,6,8,3,4]
 console.log (arrr.filter( (x)=> x<5) )


 //3 reduce 


 const cartBill = [20,30,50] 
 const sumOfCartBill = cartBill.reduce ((prev,curnt) => prev+curnt ,0)

console.log(sumOfCartBill)


// 4 find 


const array1 = [5, 12, 11, 130, 44]

const ans = array1.find((x) => x >10)
console.log(ans)

// 5 findIndex

const ans2 = array1.findIndex( (ele) => ele > 10)
console.log(ans2)


// 6 sort 

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array2 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array2);
// Expected output: Array [1, 100000, 21, 30, 4]

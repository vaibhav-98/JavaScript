class Product {
    // properties -> variable -> data member
    //name
    //price
    //rating 


    constructor (n,p,r) {

        console.log("caling the constructor");
        this.name = n
        this.price = p;
        this.rating = r;
    }

  
    //behaviours -> fuction -> member function 
    display () {
        console.log ("displaying current product" , this.name , this.price, this.rating )
    }

}

const p = new Product ("iphone" , 100000,5)
const q = new Product ("guru" , 5000,4)
const r = new Product ("kawasaki ninja " , 250000, 4.3)

console.log (p)
p.display()

console.log(q)
q.display()

console.log(r);
r.display()


//=============================================================== Function constroctor========================================================//



function Product (n,p,r) {

    this.name = n
    this.price = p;
    this.rating = r;

}

const a = new Product("mackbook" , 150000,4.8)
console.log(a)

let x = {
    a:Product
}

x.a("airpods" , 15000,3)
console.log(x)






//==================================================== getter and setter ===================================================//


class ComplexNumber {

    #real ;
    #img

    constructor(r,i) {
        this.#img=i
        this.#real=r
    }

    display () {
        console.log (this.#real , " +i" , this.#img)
    }

    get real () {
        return this.#real
    }

    get img () {
        return this.#img
    }

    addComolexNumber (c) {
        this.#real += c.real;
        this.#img += c.img
    }
} 

const c1 =  new ComplexNumber (2,4)
c1.display()

const c2 = new ComplexNumber(4,5)
c1.addComolexNumber(c2)
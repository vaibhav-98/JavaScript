let myHeros = ["thor" , "Spiderman"]
let dcHeros = ["batman", "flash", "superman"]

let heropwer = {
    thor :"hammer",
    spiderman : "sling",

    
    getSpidermanPower : function () {
        console.log ( ` spidy power is ${this.spiderman}` )
        }
}

Object.prototype.hitesh = function () {
    console.log(`hitesh is present in all obj`);
}

console.log(myHeros.hitesh());
console.log(heropwer.hitesh());

Array.prototype.heyHitesh  = function() {
    console.log(`Hitesh say hello`);
}

console.log(myHeros.heyHitesh());
console.log(heropwer.heyHitesh());

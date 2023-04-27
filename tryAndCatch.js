try  {
    let x = undefined
console.log(x[0])
}
catch (err) {
    console.log("error handling catch ", err);
}

finally {
    console.log ("finally always get executed")
}
console.log("end")


// 2

try {
    console.log("hello");
    console.log(a);
    console.log("ending try");

}
catch (err) {
    console.log("handling err");
}
finally {
    console.log("finally")
}

console.log("ending")
var x=12;
console.log(x)
x=12+2
console.log("re-assign",x)
var cars=["buggati","ferrari","Porsche","BMW","mercedes"]
for(var c=0;c<cars.length;c++){
    console.log(cars[c])
}
console.log("after deleting at last and first")
cars.pop();
cars.shift();
console.log(cars)
cars.push("RR")
cars.unshift("jaguar")
console.log("after adding")
for(var c=0;c<cars.length;c++){
    console.log(cars[c])
}

console.log("program 3")
console.log("==================================================")
var price=800;
if(price>1000){
    console.log("Discount of10% is applied");
    console.log("Amount=",price-(price*10/100));
}
else if(price<=500||price<=1000){
    console.log("Amount=",price-(price*5/100));
    console.log("Discount of10% is applied");
}
else{
    console.log("Amount=",price)
}

console.log("program 4")
console.log("==================================================")

var BMI=26
if(BMI<18.5){
    console.log("Underweight");
}
else if(BMI>=18.5 && BMI<24.9){
    console.log("Normal weight");
}
else if(BMI>=25 && BMI<29.9){
    console.log("Overweight");
}
else{
    console.log("Obese");
    
}

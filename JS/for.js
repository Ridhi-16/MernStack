console.log("=========================================================")
console.log("program 1");

var pattern="";
for(var i=0;i<=5;i++){
    for(var j=0;j<=i;j++){
        pattern +=" *";
    }
    pattern +="\n";
}
console.log(pattern)

console.log("=========================================================")
console.log("program 2");

function guess(){
    var no=Math.random()*100;
    var num=Math.round(no);
    console.log("your guessed no is:",num)
}
guess();
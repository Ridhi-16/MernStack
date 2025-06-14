console.log("program 7");
var x=[1,1,2,3,4,5,6,7,8,9]
for(var i=0;i<x.length;i++){
    if(i%2==0){
        console.log(x[i]);
    }
}
console.log();

console.log("program 8");

var string=["ridhi",6,9,8,"cse",67]
for(var j=0;j<string.length;j++){
    if(typeof(string[j])=="string"){
       console.log( "String are",string[j])
    }
}

console.log();

console.log("program 9");

var arr=[1,10,100,3,6,8]
arr.push(10);
arr.unshift(0);
console.log("array length is:",arr.length);
console.log("array elements are");

for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
    
}

console.log();

console.log("program 10");
var fruits=[];
fruits.push("Apple","Banana");
fruits.unshift("orange");
fruits.pop();
fruits.push("grapes");
fruits.pop();
for(var i=1;i<fruits.length;i++){
    console.log(fruits[i],"is at index",i)

}
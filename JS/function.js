console.log("program on functions");
console.log("program 5");
function triangle(a,b,c){
    if(a==b && b==c && a==c){
        console.log("Its an Equilateral Triangle");
    }
    else if(a==b||a==c||b==c){
        console.log("Its an Isocseles Triangle");
        
    }
    else{
        console.log("Its an Scalene Triangle");
        
    }
}
triangle(2,2,2);
triangle(1,2,2);
triangle(2,4,2);
triangle(1,2,3);

console.log("====================================================================");
console.log("program 6");
function countvowels(a) {
    var count=0;
    var vowels="aeiou"
    for(var i=0;i<a.length;i++){
        if(vowels.includes(a[i])){
            count++;
        }
    }
    console.log("no of vowels are=",count)
}
countvowels("ridhi");
countvowels("reemika")


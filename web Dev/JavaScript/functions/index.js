function nice(name) {
    console.log("Hey"+name)
    console.log("Hey"+name+" You ar good")
    console.log("Hey"+name+"You are Who")
    console.log("Hey"+name)
    console.log("Hey"+name)
}
function product(a,b) {
console.log(a*b)
return a*b    
}
nice("Rohan")
product(4,5)
let d=product(5,6);
console.log(d);
function fib(n)
{if(n==0)
{ return 1;}
else if(n==1)
{return 1;}
else
{
    return  n*fib(n-1);
}}
console.log(fib(3))
//Another way to write function as a variable
const func2=(y)=>{
    console.log(y);
}
func2(3);
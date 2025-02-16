console.log("Your Calculator")
console.log("Enter the values to be evaluated and their sign");
let a=prompt("enter the first no");
let b=prompt("enter the Second no");
let c=prompt("Enter the sign")
let count=0;
for (let index = 0; index < 99; index++) {
    let s=Math.random()<=0.1?'a':'b'
    console.log(s);
    if(s=='a')
    {count++;}
    
}

console.log(count);
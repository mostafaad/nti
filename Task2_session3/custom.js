const calcClouser =(x,y) =>{
return {
    Sum()
    { return x+y; },
    Sub()
    { return x-y; },
    Mul()
    { return x*y; },
    dev()
    { return x/y; }
}
}
const result=calcClouser(5,4)
console.log(result.Sum())


console.log(1)
setTimeout(()=>{console.log(2)},1000)
setTimeout(()=>{console.log(3)},500)
console.log(4)

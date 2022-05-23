// const mod=require("./MyMod")
// mod.x2()
// mod.x1()
// const fs=require('fs')
// fs.mkdir("myFolder",() =>{console.log("done")})
// fs.writeFileSync("myFolder/data.txt","hello")

var validator = require('validator');
const phonenumber="01022346784"
if(validator.isMobilePhone(phonenumber,'ar-EG'))
console.log("true")
else
console.log("false")
let x=process.argv[2]
console.log(x)
let y=process.argv[4]
console.log(y)

let op=process.argv[3]
console.log(op)
if(op=="+")
{
  const calc=  +x + +y
  console.log(calc)

}
else if(op=="-")
{
    const calc=  +x - +y
    console.log(calc)

}
else if(op=="*")
{
    const calc=  +x * +y
    console.log(calc)

}

const yargs=require("yargs")
yargs.command({
command:"Add",
builder:{
    x:{
        type:"number",
        demandOption:true,
        describe:"Number is required"
    },
    y:{
        type:"number",
        demandOption:true,
        describe:"Number is required"

    }

},
handler: function(argv){
    console.log(Number(argv.x)+Number(argv.y));
}


})
yargs.argv

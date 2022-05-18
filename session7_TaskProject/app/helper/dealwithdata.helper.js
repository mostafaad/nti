const { json } = require("express/lib/response")
const fs=require("fs")
const readFromJson=(fileName)=>{
    let data = []
    try{
        data = JSON.parse(fs.readFileSync(fileName))
        if(!Array.isArray(data)) throw new Error()
    }
    catch(e){
        data=[]
    }
    return data
}
const writeToJson=(data,fileName)=>{
    try {
        fs.writeFileSync(fileName,JSON.stringify(data))
    } catch (e) {
        console.log(e.message);

    }
}
module.exports={writeToJson,readFromJson}
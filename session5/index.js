const https=require("https")
const apiURL="https://jsonplaceholder.typicode.com/posts?_limit=10"
const req=https.request(apiURL,(res) =>{
let result=""
res.on("data",(x) => result+=x.toString())
res.on('end',()=>console.log(JSON.parse(result)))

})
req.on("error",(err)=>console.log(err))
req.end()
const  ReqFun=(url)=>{
    try{
        const https=require("https")
        const apiURL=url
        const req=https.request(apiURL,(res) =>{
        let result=""
        res.on("data",(x) => result+=x.toString())
        res.on('end',()=>console.log(JSON.parse(result)))
        req.end()
    })
    }
    catch(e){
        req.on("error",(err)=>console.log(err))

    }
    
   
    
    
}
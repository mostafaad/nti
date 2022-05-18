const express=require("express")
const app=express()
app.get("/",(req,res)=>{
    res.send("hello from express")
})
app.get("/about",(req,res)=>{
    res.send("hello from about")
})
app.get("/account",(req,res)=>{
    res.send("hello from account")
})
app.listen(3000,()=>{console.log("server up")})
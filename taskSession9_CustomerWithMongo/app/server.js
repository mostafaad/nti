const express=require("express")
const app=express()
require("dotenv").config()
const hbs=require("hbs")
const path=require("path")
app.set("view engine","hbs")
app.use(express.static(path.join(__dirname, "../resources/public")))
app.set("views", path.join(__dirname, "../resources/views"))
hbs.registerPartials(path.join(__dirname, "../resources/layouts"))
app.use(express.urlencoded({extended:true}))
const customerRoutes=require("../routes/customer.routes")
app.use(express.urlencoded({extended:true}))

app.use(customerRoutes)
module.exports=app


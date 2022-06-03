const express = require("express")
const path = require("path")
const app = express()
const cors=require("cors")
app.use(cors())
require('dotenv').config()
require("./database/connect")


app.use( express.static( path.join(__dirname, "../public") ))
app.use( express.urlencoded( { extended:true } ) )
app.use( express.json() )
const authorRoutes = require("../routes/adminroutes/author.adminroutes")
const categoryRoutes = require("../routes/adminroutes/category.adminroutes")
const userRoutes = require("../routes/adminroutes/user.adminroutes")
const publisherRoutes = require("../routes/adminroutes/publisher.adminroutes")
const bookRoutes = require("../routes/adminroutes/book.adminroutes")
const bookreviewRoutes = require("../routes/adminroutes/bookreviews.adminroutes")
const booklikeRoutes = require("../routes/adminroutes/booklike.adminroutes")

/////////////////////////////////////////////////////////////////////
const userbook=require("../routes/userroutes/book.userroutes")
const userAuthorroutes=require("../routes/userroutes/author.userroutes")
const userCategoryroutes=require("../routes/userroutes/category.userroutes")
const userPublisherroutes=require("../routes/userroutes/publisher.userroutes")
const userHomeroutes=require("../routes/userroutes/home.userroutes")
const userUserroutes=require("../routes/userroutes/user.userroutes")



app.use(userCategoryroutes)
app.use(userPublisherroutes)
app.use(userHomeroutes)
app.use(userAuthorroutes)
app.use(userbook)
app.use(userUserroutes)
////////////////////////
app.use(authorRoutes)
app.use(categoryRoutes)
app.use(userRoutes)
app.use(publisherRoutes)
app.use(bookRoutes)
app.use(bookreviewRoutes)
app.use(booklikeRoutes)
app.all("*", (req,res)=>{
    res.status(404).send({ error: "invalid url segment", apiStautus: false })
})
module.exports = app


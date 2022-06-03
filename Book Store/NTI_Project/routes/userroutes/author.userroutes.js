const router = require("express").Router()
const author = require("../../app/controller/usercontroller/author.usercontroller")
router.get("/user/author/all", author.all)
module.exports=router

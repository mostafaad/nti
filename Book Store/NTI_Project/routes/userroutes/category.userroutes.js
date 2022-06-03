const router = require("express").Router()
const category = require("../../app/controller/usercontroller/categories.usercontroller")
router.get("/user/category/all", category.all)
module.exports=router

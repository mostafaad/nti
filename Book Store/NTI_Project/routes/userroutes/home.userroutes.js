const router = require("express").Router()
const home = require("../../app/controller/usercontroller/home.usercontroller")
router.get("/user/home/getten", home.getTENbooks)
router.get("/user/home/search", home.Search)

module.exports=router

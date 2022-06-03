const router = require("express").Router()
const publisher = require("../../app/controller/usercontroller/publisher.usercontroller")
router.get("/user/publisher/all", publisher.all)
module.exports=router

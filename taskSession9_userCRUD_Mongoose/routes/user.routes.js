const router = require("express").Router()
const userController = require("../app/controller/user.controller")

router.get("/", userController.home)
router.get("/add", userController.add)
router.post("/add", userController.addLogic)
router.get("/edit/:id", userController.edit)
router.post("/edit/:id", userController.editLogic)
router.get("/single/:id", userController.single)
router.get("/delete/:id", userController.delete)


module.exports=router
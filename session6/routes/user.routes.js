const router = require("express").Router()
const userController = require("../app/controller/user.controller")

// routes
router.get("/", userController.home)

// router.get('/users/ahmed', (req,res)=>res.send("ahmed"))
router.get('/users/:id', userController.single)
//req=> params , query, ....  :id    req.params.id
router.get("/add", userController.add)
router.get("/AddGet", userController.AddGet)
router.get("/edit/:id", userController.edit)
router.post("/editpost/:id", userController.editpost)
router.get("/addpost",userController.addpost)
router.post("/addpost",userController.AddPostLogic)
router.get("/users/deluser/:id", userController.Deluser)


module.exports = router
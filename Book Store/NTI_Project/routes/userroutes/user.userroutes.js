const router = require("express").Router()
const authUser = require("../../app/middleware/auth.user.middleware")
const upload = require("../../app/middleware/uploadFile.middleware")
const auth = require("../../app/middleware/auth.user.middleware")

const user = require("../../app/controller/usercontroller/user.usercontroller")
router.post("/user/register", user.register) 
router.post('/user/login', user.login)
router.post('/user/logout', authUser, user.logOut)
router.patch('/user/editPassword', authUser, user.editPassword)

router.patch('/user/user/editprofile/:id', authUser, user.editProfile)
router.get("/user/user/myprofile/:id",authUser, user.myProfile)
module.exports=router

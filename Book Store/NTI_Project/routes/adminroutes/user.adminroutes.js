const router = require("express").Router()
const authAdmin = require("../../app/middleware/auth.admin.middleware")
const upload = require("../../app/middleware/uploadFile.middleware")

const user = require("../../app/controller/admincontroller/user.admincontroller")
router.post("/admin/register", user.register) 
router.post('/admin/login', user.login)
router.post('/admin/logout', authAdmin, user.logOut)
router.patch('/admin/editPassword', authAdmin, user.editPassword)

router.patch('/admin/user/editUser/:id', authAdmin, user.editUser)
router.get("/admin/user/all", authAdmin, user.allUsers)
router.get("/admin/user/all/:id",authAdmin, user.singleUser)
module.exports=router

const router = require("express").Router()
const authAdmin = require("../../app/middleware/auth.admin.middleware")
const upload = require("../../app/middleware/uploadFile.middleware")
const booklike = require("../../app/controller/admincontroller/bookLike.admincontroller")
router.get("/admin/all", authAdmin, booklike.all)
router.get("/admin/all/:id",authAdmin, booklike.single)
module.exports=router
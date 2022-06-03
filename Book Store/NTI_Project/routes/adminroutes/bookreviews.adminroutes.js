const router = require("express").Router()
const authAdmin = require("../../app/middleware/auth.admin.middleware")
const upload = require("../../app/middleware/uploadFile.middleware")
const bookreview = require("../../app/controller/admincontroller/bookReview.admincontroller")
router.get("/admin/bookreview/all", authAdmin, bookreview.all)
router.get("/admin/bookreview/all/:id",authAdmin, bookreview.single)
module.exports=router
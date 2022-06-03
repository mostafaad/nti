const router = require("express").Router()
const auth = require("../../app/middleware/auth.user.middleware")

const bookre = require("../../app/controller/usercontroller/book.usercontroller")
router.get("/user/book/getbyauthor", bookre.getBooksByAuthorId)
router.get("/user/book/getbycategory", bookre.getBooksByCategoryId)
router.get("/user/book/getbypublisher", bookre.getBooksByPublisherId)
router.post("/user/book/rentbook",auth,bookre.rentbook)

module.exports=router

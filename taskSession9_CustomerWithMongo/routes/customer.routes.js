const router=require("express").Router()
const customerController=require('../app/controller/customer.controller')
router.get("/",customerController.home)
router.get("/add",customerController.add)
router.post("/add",customerController.addLogic)
router.get("/single/:id",customerController.single)
router.get("/addTransaction/:id",customerController.addTransaction)
router.post("/addTransaction/:id",customerController.addTransactionLogic)
module.exports = router


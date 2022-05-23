const async = require("hbs/lib/async")
const user = require("../../database/models/user.model")
const userModel=require("../../database/models/user.model")
class User{
    static home=async(req,res)=>{
   try {
    const users= await userModel.find()
    res.render("home",{
        pageTitle:"All Users",
        hasUsers:users.length,
        users
    })
   }  catch(e){
    res.render("err404", {pageTitle:"error in db", errMsg:e.message})
}
    }
    static add=(req,res)=>{
       const genderList=["male","female"]
        res.render("add",{
            pageTitle:"Add New User",
            genderList
        })
    }
    static addLogic=async(req,res)=>{
        try {
            const user=new userModel(req.body)
            await user.save()
            res.redirect("/")
        } catch(e){
            res.render("err404", {pageTitle:"error in db", errMsg:e.message})
        }
      
    }
    static single=async(req,res)=>{
        try {
            const user=await userModel.findById(req.params.id)
            res.render("single", {
                pageTitle:user?`user ${user.name} data`:"user not found", 
                user
            }) 
        } catch(e){
            res.render("err404", {pageTitle:"error in db", errMsg:e.message})
        }
        
    }
    static edit=async(req,res)=>{
        const genderList=["male","female"]

        const user=await userModel.findById(req.params.id)
        res.render("edit",{
            pageTitle:"Edit User data",user,genderList
        })
    }
    static editLogic=async(req,res)=>{
        try {
            const user=userModel.findByIdAndUpdate(req.body)
            res.redirect(`/single/${user._id}`)
 
        } catch(e){
            res.render("err404", {pageTitle:"error in db", errMsg:e.message})
        }
       }
    static delete=(req,res)=>{
        try {
            userModel.findByIdAndDelete(req.params.id)
        res.redirect("/")
        }  catch(e){
            res.render("err404", {pageTitle:"error in db", errMsg:e.message})
        }
        
    }
}
module.exports=User
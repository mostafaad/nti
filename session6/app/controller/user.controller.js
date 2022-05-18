const { use } = require("../../routes/user.routes")
const dealWithData = require("../helper/dealWithData.helper")
const home = (req,res)=>{
    const data = dealWithData.readFromJSON("database/user.json")
    res.render("home", {
        pageTitle:"Home Page- User App",
        hasData: data.length,  //0   
        data
    })
}

const add = (req, res)=>{
    const ddlTypes=["user","admin"]
    res.render("add", {
        pageTitle:"Add User - User App",
        ddlTypes
    })
}
const AddGet=(req,res)=>{
    const user={id:Date.now(), ...req.query}
    const data = dealWithData.readFromJSON("database/user.json")
data.push(user)
dealWithData.writeToJSON(data,"database/user.json")
res.redirect("/")
}
const edit = (req, res)=>{
    const id = req.params.id
    const user = dealWithData.readFromJSON("database/user.json").find(d=> d.id==id)

    const ddlTypes=["user","admin"]
    res.render("edit", {
        pageTitle:"Edit User - User App",
        ddlTypes,user
    })
}
const editpost=(req,res)=>{
    const user=req.body
    const olduser = dealWithData.readFromJSON("database/user.json").find(req.params.id)
    const index=dealWithData.readFromJSON("database/user.json").findIndex(req.params.id)
    olduser.id=req.params.id
    olduser.name=user.name
    olduser.userType=user.userType
    olduser.age=user.age
    olduser.email=user.email
    
data.push(user)
dealWithData.writeToJSON(data,"database/user.json")
res.redirect("/")
}
const addpost=(req,res)=>{
    const ddlTypes=["user","admin"]
    res.render("addpost", {
        pageTitle:"Add User - User App",
        ddlTypes
    })
}
const AddPostLogic=(req,res)=>{
    const user={id:Date.now(), ...req.body}
    const data = dealWithData.readFromJSON("database/user.json")
data.push(user)
dealWithData.writeToJSON(data,"database/user.json")
res.redirect("/")
}
const single = (req,res)=>{
    const id = req.params.id
    //apiReq(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const user = dealWithData.readFromJSON("database/user.json").find(d=> d.id==req.params.id)
    res.render("single",
    {
        pageTitle:"user Data",
        user
    }
    )
}
const Deluser=(req,res)=>{
    const user = dealWithData.readFromJSON("database/user.json").filter(d=> d.id !=req.params.id)

    dealWithData.writeToJSON(user,"database/user.json")
    res.redirect("/")
}
module.exports = {
    home, add, single,AddGet,Deluser,addpost,AddPostLogic,edit,editpost
}
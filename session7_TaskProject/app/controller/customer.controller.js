const dealWithJson=require("../helper/dealwithdata.helper")
 
const home=(req,res)=>{
    const data=dealWithJson.readFromJson("database/customer.json")
    res.render("home",{
        pageTitle:"Home Page- Bank App",
        hasData: data.length,  
        data
    })
}
const add=(req,res)=>{
    res.render("add",{
        pageTitle:"Add Customer - Bank App",

    })
}
const addLogic=(req,res)=>{
    const customer={id:Date.now(),transactions:[],...req.body}
    const data=dealWithJson.readFromJson("database/customer.json")
    data.push(customer)
    dealWithJson.writeToJson(data,"database/customer.json")
    res.redirect("/")
}
const single=(req,res)=>{
    const CustomerId=req.params.id
    const customer=dealWithJson.readFromJson("database/customer.json").find(c=> c.id==CustomerId)
    res.render("single",{
        pageTitle:"Customer Data -Bank App",
        customer
    })
}
const addTransaction=(req,res)=>{
    transKey=["Add","withdraw"]
res.render("addTransaction",{
    pageTitle:"Add User Transaction -Bank App",
    transKey
})
}
const addTransactionLogic=(req,res)=>{
    const data=dealWithJson.readFromJson("database/customer.json")
    const customerIndex=dealWithJson.readFromJson("database/customer.json").findIndex(c=> c.id==req.params.id)
    data[customerIndex].transactions={key:req.body.name,value:req.body.value}
    dealWithJson.writeToJson(data,"database/customer.json")
    res.redirect(`/single/${data[customerIndex].id}`)

}
module.exports={home,add,addLogic,single,addTransaction,addTransactionLogic}
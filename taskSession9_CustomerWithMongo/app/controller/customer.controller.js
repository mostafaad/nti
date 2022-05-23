const dbCon = require('../../database/connetDB')
const ObjectId = require("mongodb").ObjectId
class User{ 
    static home=(req,res)=>{
        dbCon((err, db)=>{
            if(err) res.send(err.message)
            db.collection("customer").find().toArray((error, customers)=>{
                if(error) res.send(error.message)
                res.render("home", {
                    pagetTitle:"add new user", 
                    customers,
                    hasUsers: customers.length
                })
            })

        })
}
static add=(req,res)=>{
    res.render("add",{
        pageTitle:"Add Customer - Bank App",

    })
}
static addLogic=(req,res)=>{
    const customer=req.body
    dbCon((err, db)=>{
        if(err) res.send(err)
        db.collection("customer").insertOne(customer)
        .then(()=> res.redirect("/"))
        .catch((e)=> res.send(e))
    })
}
static single=(req,res)=>{
    dbCon((err, db)=>{
        try{
        if(err) res.send(err)
        db.collection("customer").findOne({_id: new ObjectId(req.params.id)}, 
            (error, customer)=>{
            if(error) res.send(error)
            res.render("single", {
                pageTitle:customer?`user ${customer.name} data`:"user not found", 
                customer
            })
        }
        )}
        catch(e){
            res.render('err404',
            {pagetTitle:"invalid id",errMsg:"invalid id format"}
            )
        }  
    })
}
static addTransaction=(req,res)=>{
   const transKey=["Add","withdraw"]
res.render("addTransaction",{
    pageTitle:"Add User Transaction -Bank App",
    transKey
})
}
static addTransactionLogic=(req,res)=>{
   
    dbCon((err, db)=>{
        db.collection("customer").updateOne(
            {_id:new ObjectId(req.params.id)},
            // {$set: req.body}
            // {$set:("transactions",[{key:req.body.name,value:req.body.value}])} //$inc:{age:10}
            {$push: { transactions:{"key":req.body.name,"value":req.body.value} } }
            //{$mod: {"transactions": [{key:req.body.name,value:req.body.value}]}} 
        )
        .then(()=>res.redirect(`/single/${req.params.id}`))
        .catch((e)=>{console.log(e)})
        
    })  

}
}
module.exports=User
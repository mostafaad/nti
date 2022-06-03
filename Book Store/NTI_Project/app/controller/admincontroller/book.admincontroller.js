const bookModel=require("../../database/models/book")

class Book{
    
    static add = async(req,res)=>{
        try{
           //req.body.image=req.file.path
            const bookdata = new bookModel(req.body)
               
            await bookdata.save()
            res.status(200).send({
                apiStatus:true,
                data:bookdata,
                message:"book added"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                data:e.message,
                message:"book adding error"
            })
        }
    }
    static all = async(req,res)=>{
        try{
            const books = await bookModel.find().populate({path:'categoryId',select:['name']})
            .populate({path:'publisherId',select:['name']})
            .populate({path:'authorId',select:['name']})
            
            res.status(200).send({
                apiStatus:true,
                data:books,
                message:"data loaded"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                data:e.message,
                message:"error loading data"
            })
        }
    }
    static single=async(req,res)=>{
        try{
            const onebook=await bookModel.findById(req.params.id).populate({path:'categoryId',select:['name']})
            .populate({path:'publisherId',select:['name']})
            .populate({path:'authorId',select:['name']})
           console.log(onebook.categoryId.name) 
            res.status(200).send({
                apiStatus:true,
                data:onebook,
                message:"data loaded"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                data:e.message,
                message:"error loading data"
            })
        }
    }
    static edit=async(req,res)=>{
        try {
            const oldbook = await bookModel.findById(req.params.id)
            const invalidEdits = [ "__v", "updatedAt"]
            for (const property in req.body) {
                if(!invalidEdits.includes(property)) 
                oldbook[property] = req.body[property]
            }
            oldbook.image=req.file.path
            oldbook.save()
            res.status(200).send({
                apiStatus:true,
                data:oldbook,
                message:"data updated"
            })
        }  
            catch(e){
            res.status(500).send({
                apiStatus:false,
                data:e.message,
                message:"error loading data"
            })
        }
    }
    static delete=async(req,res)=>{
        try {
            const flag=await bookModel.findByIdAndDelete(req.params.id)

            res.status(200).send({
                apiStatus:true,
                data:flag,
                message:"data updated"
            })
        }  
            catch(e){
            res.status(500).send({
                apiStatus:false,
                data:e.message,
                message:"error loading data"
            })
        }
    }
}
module.exports=Book
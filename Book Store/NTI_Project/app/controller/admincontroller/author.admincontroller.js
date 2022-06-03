const authorModel=require("../../database/models/author")

class Author{
    
    static add = async(req,res)=>{
        try{
            const authordata = new authorModel(req.body)
               
            await authordata.save()
            res.status(200).send({
                apiStatus:true,
                data:authordata,
                message:"category added"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                data:e.message,
                message:"category adding error"
            })
        }
    }
    static all = async(req,res)=>{
        try{
            const authors = await authorModel.find()
            res.status(200).send({
                apiStatus:true,
                data:authors,
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
            const oneauthor=await authorModel.findById(req.params.id)
            res.status(200).send({
                apiStatus:true,
                data:oneauthor,
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
            const oldauthor = await authorModel.findById(req.params.id)
            const invalidEdits = [ "__v", "updatedAt"]
            for (const property in req.body) {
                if(!invalidEdits.includes(property)) 
                oldauthor[property] = req.body[property]
            }
            oldauthor.save()
            res.status(200).send({
                apiStatus:true,
                data:oldauthor,
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
            const flag=await authorModel.findByIdAndDelete(req.params.id)

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
module.exports=Author
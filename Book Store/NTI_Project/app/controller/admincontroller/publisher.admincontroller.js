const publisherModel=require("../../database/models/publisher")

class Publisher{
    
    static add = async(req,res)=>{
        try{
            const publisherdata = new publisherModel(req.body)
               
            await publisherdata.save()
            res.status(200).send({
                apiStatus:true,
                data:publisherdata,
                message:"publisher added"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                data:e.message,
                message:"publisher adding error"
            })
        }
    }
    static all = async(req,res)=>{
        try{
            const publishers = await publisherModel.find()
            res.status(200).send({
                apiStatus:true,
                data:publishers,
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
            const onepublisher=await publisherModel.findById(req.params.id)
            res.status(200).send({
                apiStatus:true,
                data:onepublisher,
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
            const oldpublisher = await publisherModel.findById(req.params.id)
            const invalidEdits = [ "__v", "updatedAt"]
            for (const property in req.body) {
                if(!invalidEdits.includes(property)) 
                oldpublisher[property] = req.body[property]
            }
            oldpublisher.save()
            res.status(200).send({
                apiStatus:true,
                data:oldpublisher,
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
            const flag=await publisherModel.findByIdAndDelete(req.params.id)

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
module.exports=Publisher
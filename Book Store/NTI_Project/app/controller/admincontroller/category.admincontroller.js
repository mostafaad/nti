const categoryModel=require("../../database/models/category")

class Category{
    
    static add = async(req,res)=>{
        try{
            const categorydata = new categoryModel(req.body)
               
            await categorydata.save()
            res.status(200).send({
                apiStatus:true,
                data:categorydata,
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
            const cats = await categoryModel.find()
            res.status(200).send({
                apiStatus:true,
                data:cats,
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
            const onecat=await categoryModel.findById(req.params.id)
            res.status(200).send({
                apiStatus:true,
                data:onecat,
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
            const oldcat = await categoryModel.findById(req.params.id)
            const invalidEdits = [ "__v", "updatedAt"]
            for (const property in req.body) {
                if(!invalidEdits.includes(property)) 
                oldcat[property] = req.body[property]
            }
            oldcat.save()
            res.status(200).send({
                apiStatus:true,
                data:oldcat,
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
            const flag=await categoryModel.findByIdAndDelete(req.params.id)

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
module.exports=Category
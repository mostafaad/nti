const publisherModel=require("../../database/models/publisher")

class Publisher{
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
}
module.exports=Publisher
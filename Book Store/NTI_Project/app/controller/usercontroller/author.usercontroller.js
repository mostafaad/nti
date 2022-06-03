const authorModel=require("../../database/models/author")

class Author{
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
}
module.exports=Author
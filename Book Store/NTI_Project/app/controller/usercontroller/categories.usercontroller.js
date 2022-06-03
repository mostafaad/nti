const categoryModel=require("../../database/models/category")

class Category{
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
}
module.exports=Category
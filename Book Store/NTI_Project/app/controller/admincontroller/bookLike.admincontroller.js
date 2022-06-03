const booklikeModel=require("../../database/models/booklikes")

class BookLike{
    static all = async(req,res)=>{
        try{
            const booklikess = await booklikeModel.find().populate('userId').populate('bookId')
            res.status(200).send({
                apiStatus:true,
                data:booklikess,
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
    static allspecifiedBookLikes = async(req,res)=>{
        try{
            const booklikess = await booklikeModel.find({bookId:req.params.id}).populate('userId').populate('bookId')
            res.status(200).send({
                apiStatus:true,
                data:booklikess,
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
            const onebooklike=await booklikeModel.findById(req.params.id).populate('userId').populate('bookId')
            res.status(200).send({
                apiStatus:true,
                data:onebooklike,
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
module.exports=BookLike
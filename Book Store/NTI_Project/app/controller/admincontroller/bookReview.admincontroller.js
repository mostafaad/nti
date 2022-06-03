const bookReviewModel=require("../../database/models/bookreviews")

class BookReview{
    static all = async(req,res)=>{
        try{
            const bookreviews = await bookReviewModel.find().populate('userId').populate('bookId')
            
            res.status(200).send({
                apiStatus:true,
                data:bookreviews,
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
    static allspecifiedBookReviews = async(req,res)=>{
        try{
            const bookReviews = await bookReviewModel.find({bookId:req.params.id}).populate('userId').populate('bookId')
            res.status(200).send({
                apiStatus:true,
                data:bookReviews,
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
            const onebookreview=await bookReviewModel.findById(req.params.id).populate('userId').populate('bookId')
            res.status(200).send({
                apiStatus:true,
                data:onebookreview,
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
module.exports=BookReview
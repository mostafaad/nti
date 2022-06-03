const bookModel=require("../../database/models/book")
class home{
    static getTENbooks=async(req,res)=>{
        try {
        const tenbooks=await bookModel.find().limit(10)
        res.status(200).send({
            apiStatus:true,
            data:tenbooks,
            message:"data sent"
        })
        } catch (e) {
            res.status(500).send({
                apiStatus:false,
                data:e.message,
                message:"error loading data"
            })
        }
    }
    static Search=async(req,res)=>{
        try {
            const key=req.query.searchkey
            const books = await bookModel.find().populate('categoryId')
            .populate('publisherId')
            .populate('authorId').filter(book=>{
                return (book.categoryId.name).includes(key) || (book.publisherId.name).includes(key) || 
                (book.authorId.name).includes(key)
            })
            res.status(200).send({
                apiStatus:true,
                data:books,
                message:"data loaded"
            })
        }  
         catch (e) {
            res.status(500).send({
                apiStatus:false,
                data:e.message,
                message:"error loading data"
            })
        }
    }

}
module.exports=home
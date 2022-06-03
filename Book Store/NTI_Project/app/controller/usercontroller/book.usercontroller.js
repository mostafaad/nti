const bookModel=require("../../database/models/book")
const DateDiff =require("date-diff")
const booklikeModel=require("../../database/models/booklikes")
const bookreviewModel=require("../../database/models/bookreviews")
const bookreservations=require("../../database/models/bookReservations")



class userBook{
    static getBooksByCategoryId=async(req,res)=>{
        try {
        const books= await bookModel.find({categoryId:req.params.id})
        res.status(200).send({
            apiStatus:true,
            data:books,
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
    static getBooksByPublisherId=async(req,res)=>{
        try {
        const books= await bookModel.find({publisherId:req.params.id})
        res.status(200).send({
            apiStatus:true,
            data:books,
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
    static getBooksByAuthorId=async(req,res)=>{
        try {
        const books= await bookModel.find({authorId:req.body.id})
        res.status(200).send({
            apiStatus:true,
            data:books,
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
    static bookDetails=async(req,res)=>{
        try {
        const mybook=await bookModel.findById(req.params.id).populate('myReviews').populate('categoryId').populate('publisherId').populate('authorId')
        const booklikes=await booklikeModel.find({bookId:req.params.id}).countDocuments()
        res.status(200).send({
            apiStatus:true,
            data:{mybook,booklikes},
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
    static rentbook=async(req,res)=>{
       try {
        const book=await bookModel.findById(req.body.bookId)
     
        console.log(req.body.from)
        console.log(req.body.to)
        console.log(Math.abs(new Date(req.body.to)-new Date(req.body.from)))
        const daysNumber=Math.abs(new Date(req.body.to)-new Date(req.body.from))/(1000 * 60 * 60 * 24)
        console.log(daysNumber)
        const rentCost=Number(daysNumber*Number(book.rentPriceperDay))
        const mybookReservations=await new bookreservations({
            ...req.body,
            userId:req.user._id,
            bookId:req.body.bookId,
            totalprice:rentCost
        })
     
        await mybookReservations.save()
         
      
        res.status(200).send({
            apiStatus:true,
            data:mybookReservations,
            message:"Book Reserved"
        })
     
       } catch (e) {
        res.status(500).send({
            apiStatus:false,
            data:e.message,
            message:"error loading data"
        }) 
       }   
           
    }
    static putLike=async(req,res)=>{
        try {
        if(!req.user) throw new Error("unAuthorized")

            const book=await booklikeModel({userId:req.user._id,bookId:req.body.bookId})
                       await book.save()
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
    static writeReview=async(req,res)=>{
        try {
        if(!req.user) throw new Error("unAuthorized")

            const book=await bookreviewModel(req.user._id,...req.body)
                       await book.save()
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
}
module.exports=userBook
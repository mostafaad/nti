const mongoose = require("mongoose")
const validator = require("validator")
const BookReviewsSchema=mongoose.Schema({
    bookId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Book"
    },
    userId:{
       
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"User"
       
    },
    review:{
        type:String
        
    },
    rate:{
        type:Number,
        min:1,
        max:5
    }
},{timestamps:true})
const BookReviews=mongoose.model("BookReview",BookReviewsSchema)
module.exports=BookReviews
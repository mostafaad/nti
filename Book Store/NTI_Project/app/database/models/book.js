const mongoose = require("mongoose")
const validator = require("validator")
const BookSchema=mongoose.Schema({
    name:{
        type:String,
        trim:true,
        maxlength:20,
        minlength:3,
        required:[true,'name is required']
    },
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Category"
    },
    authorId:{
       
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"Author"
       
    },
    publisherId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Publisher"
    },
    language:{
        type:String,
        trim:true
    },
    pagesNumber:{
        type:Number
    },
    rentPriceperDay:{
        type:Number
    },
    description:{
      type:String,
      required:[true,"description is required"]
    },
    image:{
        type:String
    }
},{timestamps:true})
BookSchema.virtual('myReviews', {
    ref:'BookReview',
    localField: "_id",
    foreignField: "bookId"
})
BookSchema.virtual('myLikes', {
    ref:'BookLikes',
    localField: "_id",
    foreignField: "bookId"
})
BookSchema.virtual('myReservations', {
    ref:'BookReservation',
    localField: "_id",
    foreignField: "bookId"
})
const Book=mongoose.model("Book",BookSchema)
module.exports=Book
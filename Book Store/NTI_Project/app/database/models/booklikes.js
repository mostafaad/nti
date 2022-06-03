const mongoose = require("mongoose")
const validator = require("validator")
const BookLikesSchema=mongoose.Schema({
    bookId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Book"
    },
    userId:{
       
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"User"
       
    }
},{timestamps:true})
const BookLikes=mongoose.model("BookLikes",BookLikesSchema)
module.exports=BookLikes
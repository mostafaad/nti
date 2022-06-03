const mongoose = require("mongoose")
const validator = require("validator")
const AuthorSchema=mongoose.Schema({
    name:{
        type:String,
        trim:true,
        maxlength:20,
        minlength:3,
        required:[true,'name is required']
    }
},{timestamps:true})
AuthorSchema.virtual('authorbooks', {
    ref:'Book',
    localField: "_id",
    foreignField: "authorId"
})
const Author=mongoose.model("Author",AuthorSchema)
module.exports=Author
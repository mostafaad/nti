const mongoose = require("mongoose")
const validator = require("validator")
const CategorySchema=mongoose.Schema({
    name:{
        type:String,
        trim:true,
        maxlength:20,
        minlength:3,
        required:[true,'name is required']
    }
},{timestamps:true})
CategorySchema.virtual('categorybooks', {
    ref:'Book',
    localField: "_id",
    foreignField: "categoryId"
})
const Category=mongoose.model("Category",CategorySchema)

module.exports=Category
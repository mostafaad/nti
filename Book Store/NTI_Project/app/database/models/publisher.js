const mongoose = require("mongoose")
const validator = require("validator")
const PublisherSchema=mongoose.Schema({
    name:{
        type:String,
        trim:true,
        maxlength:20,
        minlength:3,
        required:[true,'name is required']
    }
},{timestamps:true})
PublisherSchema.virtual('publisherbooks', {
    ref:'Book',
    localField: "_id",
    foreignField: "publisherId"
})
const Publisher=mongoose.model("Publisher",PublisherSchema)
module.exports=Publisher
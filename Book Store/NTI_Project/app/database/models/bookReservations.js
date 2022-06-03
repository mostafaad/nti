const mongoose = require("mongoose")
const BookReservationsSchema=mongoose.Schema({
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
    from:{
        type:Date,
        required:true,
        default:Date.now()
    },
    to:{
        type:Date,
        required:true,
        default:Date.now()
    },
    totalprice:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        enum:["done","cancel"]
    }
},{timeStamps:true})
const BookReservations=mongoose.model("BookReservation",BookReservationsSchema)
module.exports=BookReservations
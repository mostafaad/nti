const mongoose=require("mongoose")
const validator=require("validator")
const user=mongoose.model('User',{
    name:{
        type:String,
        required:true,
        trim:true,
        maxlength:30,
        minlength:5
    },
    email:{
        type:String,
        trim:true,
        required:true,
        validate(value){if(!validator.isEmail(value)) throw new Error("Invalid Email")}
    },
    age:{
        type:Number,
        min:21,
        max:60
    },
    gender:{
        type:String,
        required:true,
        enum:['male','female'],
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true,
        validate(value){if(value.includes('password')) throw new Error("Weak password")}
    },
    status:{
          type:Boolean,
          default:false
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})
module.exports=user
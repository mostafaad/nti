const jwt = require("jsonwebtoken")
const userModel = require("../database/models/user")
const auth = async( req, res, next ) =>{
    try{
        console.log("33333333333")
        
        const token = req.header("Authorization").replace("bearer ", "") 
        console.log(token)
        const decodedtoken = jwt.verify(token, process.env.JWTKEY)
        const user = await userModel.findOne({
            _id: decodedtoken._id, 
            'tokens.token': token
        })
        console.log("user");
        console.log(user.usertype);
        if(!user) throw new Error("user not found")
       if(!user.usertype=="admin") throw new Error("Authorization Issue!")
        req.user= user
        req.token=token
        next()
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            data:e.message,
            message:"unauthorized"
        })
    }
}
module.exports = auth
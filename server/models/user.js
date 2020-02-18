const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    createdOn : {
        type: Date,
        default : Date.now()
    },
    role : {
        type: String,
        default : 'user'
    },
    name : {
        type : String,
        required : [true, "Name is Required"]
    },
    
    email : {
        type : String,
        required : [true, "Email is required"],
        unique : [true, "Email already exists"]
    },
    password: {
        type : String
    },
    image : {type :String},
    token :{
        type :String
    },
    isVerified : {
        type : Boolean,
        default : false
    },
    reset_password_token : {
        type : String
    },
    reset_password_expires : {
        type : Date
    }
})
// After Global Promise 
const USER = mongoose.model('USER',  userSchema)
module.exports = USER 
//mongo will do is polarization by default - users

// module.exports = mongoose.model(
//     "user",
//     userSchema,
//     "user"
// )
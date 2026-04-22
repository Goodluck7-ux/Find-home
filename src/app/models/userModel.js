import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true
    },

    email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true
    },

    password:{
        type:String,
        required:true,
        
    
    },

    isEmailVerified:{
        type:Boolean,
        default:false
    },

    userRole:{
        type:String,
        enum:["buyer", "seller", "admin"],
        default:"buyer"
    }
}, {timestamps:true})

const User=mongoose.models.user 
|| mongoose.model("user", userSchema)

 export default User;
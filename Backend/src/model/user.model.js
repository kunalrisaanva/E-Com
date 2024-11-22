import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userShcema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"username is required"]
    },

    email:{
        type:String,
        required:[true,"email is required"]
    },

    password:{
        type:String,
        required:[true,"username is required"]
    },

    isAdmin:{
        type:Boolean,
        required:[true,"username is required"],
        default:false
    },

    token:{
        type:String,
        required:[true,"username is required"]
    },

    mob:{
        type:String,
        required:[true , " mobile number is required"]
    }
});


const User = mongoose.model("User",userShcema);



// password will store in hash form 

userShcema.pre("save",async function () {

    if(this.isModified('password')){
        this.password =  bcrypt.hash(this.password, bcrypt.genSalt(10));
    }
})

// compare password method 

userShcema.methods.comparePassword = async function(password) {

        return bcrypt.compare(password,this.password)
}


export {User}
import mongoose from "mongoose"
import { User } from "./DTO/User"

const userSchema=new mongoose.Schema<User>(
    {
        userid:{type:String,required:true,unique:true},
        name:{type:String,required:true},
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        gender:{type:String,required:true},
        token:{type:String}

    }
)


const UserSchema=mongoose.model('user',userSchema)

export {UserSchema}
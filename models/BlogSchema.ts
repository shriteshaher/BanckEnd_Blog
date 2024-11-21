import mongoose, { Schema } from "mongoose"
import { User } from "./DTO/User"
import { Blogs } from "./DTO/Blogs"
import { v4 as uuidv4 } from 'uuid';
const blogsSchema=new mongoose.Schema<Blogs>(
    {
        userid:{type:String,required:true},
        blog_id: { type: String, default: uuidv4 },
        blog_name:{type:String,required:true},
        blog_descriptions:{type:String,required:true},
        images:{type:[String]}

    }
)


const BlogsSchema=mongoose.model('blogsSchema',blogsSchema)

export {BlogsSchema}
import { Blogs } from "../models/DTO/Blogs";
import { BlogsSchema } from "../models/BlogSchema";

export class BlogsRepository{
    async saveBlogs(blog:Blogs){
       return BlogsSchema.create(blog)
        
    }
}
import express, { Request, Response, NextFunction } from "express";
import { BlogsRepository } from "../repository/BlogsRepository";


export const uploadBlogService=async (req:Request,res:Response,next:NextFunction)=>{
    try{
    const blog=new BlogsRepository()
    const result:any= await blog.saveBlogs(req.body)
     return res.json({
        status:"Success",
        data:result
     })
    }catch(err){
        next(err)
    }
}
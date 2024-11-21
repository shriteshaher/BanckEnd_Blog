import express, { Request, Response, NextFunction } from "express";
import { uploadBlogService } from "../servisess/blogUploadService";

export const uploadBlogController=(req:Request,res:Response,next:NextFunction)=>{
    uploadBlogService(req,res,next)
}
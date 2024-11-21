import express from "express";
import { userLogin,userSignUp } from "./controllers/userAuthentication";

import { Request,Response,NextFunction } from "express-serve-static-core";
import { uploadBlogController } from "./controllers/uploadBlogsController";
import { verifyToken } from "./middleware/jwtVerifyer";
export const router=express.Router()

router.post('/userLogin',(req:Request,res:Response,next:NextFunction)=>{
    userLogin(req,res,next)
})

router.post('/userSignUp', (req:Request, res:Response,next:NextFunction) => {
    userSignUp(req,res,next)
});

router.post('/uploadBlogs',(req:Request, res:Response,next:NextFunction)=>{
    uploadBlogController(req,res,next)
})




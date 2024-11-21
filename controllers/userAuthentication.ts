import express, { Request, Response, NextFunction } from "express";
import { userSignUpService,userLoginService } from "../servisess/userAuthentication"
export const userSignUp=(req:Request,res:Response,next:NextFunction)=>{
    userSignUpService(req,res,next)
}
export const userLogin=(req:Request,res:Response,next:NextFunction)=>{
    userLoginService(req,res,next)
}


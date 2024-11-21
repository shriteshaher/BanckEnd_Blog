import {UserRepository} from "../repository/UserRepository"
import { UserAuthenticationRepository } from "../repository/UserAuthenticationRepository";
import express, { Request, Response, NextFunction } from "express";
import { RedisConnection } from "../connection/RedisConnection";
export const userSignUpService=async (req:Request,res:Response,next:NextFunction)=>{
 try{
    const user=new UserRepository()
    const total_count=await user.userIdGenerator()
    console.log(total_count)
   const count=total_count.length==0 ? 1 : total_count[0]['total_count']+1
   req.body.userid="USER-"+ count
   const result:any=await user.saveOne(req.body)
   return res.json({
    success:"Result Save Successfully"
   })
 }catch(err){
   console.log("this",err)
    next(err)
    
 }
}

export const userLoginService =async (req:Request,res:Response,next:NextFunction
)=>{
    try{
        const {email,password}=req.body
        const user=new UserRepository()
        let redisQuery= new RedisConnection()
        let user_cache=await redisQuery.get(email)
        if(user_cache){
            console.log("user_cache")
            return res.json({status:"Success",data:JSON.parse(user_cache)})
        }else{
         const userData=await user.findUserOne(req.body)
        if(userData){
           const userAuthenticate= new UserAuthenticationRepository()
           const token=await userAuthenticate.generateToken(userData)
           userData.token=token
           await userData.save()
           const response={
            email:userData.email,
            name:userData.name,
            token:userData.token,
            user_id:userData.userid
           }
           redisQuery.set(userData.email,JSON.stringify(response))
            return res.json({status:"Success",data:response})
        }else{
            throw  new  Error("Invalid Creditional")
       }
        
        }
    }catch(err){
        
        next(err)
    }
}


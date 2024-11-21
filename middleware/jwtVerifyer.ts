import jwt from 'jsonwebtoken';
import config from '../config';
import express, { Request, Response, NextFunction } from "express";
// JWT Verifier Middleware
export const verifyToken = (req:Request, res:Response, next:NextFunction) => {
    // Get token from the Authorization header
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: 'Token is required' });
    }

    // Extract the token (e.g., Bearer <token>)
    const bearerToken = token.split(' ')[1];

    // Verify token
    jwt.verify(bearerToken, config.SECRET_KEY, (err:any, decoded:any) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        // Attach the decoded token to the request object
        //req.user = decoded;
        next(); // Proceed to the next middleware or route handler
    });
};

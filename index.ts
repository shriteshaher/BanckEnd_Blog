import express, { Request, Response, NextFunction } from "express";
import cors from 'cors';
import { router } from "./routingController";
import {mongoConnection} from './monogpConnection'
import { ERRORS_MAP } from "./errors.map";
import rateLimit from "express-rate-limit";
import { DatabaseFactory } from "./connection/DatabaseFactory";

const app = express();
const limiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    limit: 10, // each IP can make up to 10 requests per `windowsMs` (5 minutes)
    standardHeaders: true, // add the `RateLimit-*` headers to the response
    legacyHeaders: false, // remove the `X-RateLimit-*` headers from the response
  });
app.use(limiter);
const corsOptions = {
    origin: 'http://localhost:3000',
    // optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api', router);


// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction)=> {
   //console.log(ERRORS_MAP[err.message.split(' ')[0]],err.message.split('')[0])
    res.status(500).json({ error: ERRORS_MAP[err.message.split(' ')[0]]?  ERRORS_MAP[err.message.split(' ')[0]]:err.message });
});

 function mongodbConnection(){
    DatabaseFactory.createDatabase("mongodb")?.initiateConnection().then(
        (res)=>{
            console.log("Connection Established Successfully Of MongoDB")
        }
     )
}

  function RedisConnection(){
    DatabaseFactory.createDatabase("redis")?.initiateConnection().then(
        (res)=>{
            console.log("Connection Established Successfully Of redis")
        }
     )
}

// Start the server
const PORT = process.env.PORT || 3000; // Use PORT from env or default to 3000
app.listen(PORT, async () => {
    console.log(`Server is listening on port ${PORT}`);
     mongodbConnection()
     RedisConnection()
     
});





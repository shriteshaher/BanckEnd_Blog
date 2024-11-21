import mongoose from "mongoose";
import config from "../config";
export class MongoDbConnection {
    constructor(){
        
       this.initiateConnection()
    }

    async initiateConnection(){
        await mongoose.connect(config.MONGO_URI);
    }
}
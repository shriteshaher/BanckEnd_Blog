import { mongoConnection } from "../monogpConnection";
import { MongoDbConnection } from "./MongoDbConnections";
import { RedisConnection } from "./RedisConnection";


export class DatabaseFactory {
constructor(){
    
}
static createDatabase(type:string) {
    if (type === 'mongodb') {
    return new MongoDbConnection()
    }else if(type==='redis'){
    return new RedisConnection()
    }
    throw new Error("Invalid Database Type")
}

}

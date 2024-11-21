import { createClient, RedisClientType } from 'redis'
import { DatabaseFactory } from './DatabaseFactory';

export class RedisConnection  {
    private client!: RedisClientType;
    constructor(){
     this.initiateConnection()
    }

   instance():DatabaseFactory{
           return DatabaseFactory.createDatabase("redis")
    }
    async initiateConnection(): Promise<void> {

        this.client = createClient({
            password: 'fXIR6T6vuV0qhHyqs5qdUfgzo9IHQ6v1',
            socket: {
                host: 'redis-15503.c321.us-east-1-2.ec2.redns.redis-cloud.com',
                port: 15503
            }
        });
       await  this.client.connect();
    }

    public async get(key: string): Promise<any> {
        return this.client.get(key);
    }
    public async set(key: string, value: string): Promise<void> {
            await this.client.set(key, value, { EX: 3600 }); 
    }
   


    public async push(key: string, value: string): Promise<void>{
        await this.client.lPush(key,value)
    }

    public async getCollection(key:string): Promise<any>{
        return this.client.lRange(key,0,-1)
    }
}
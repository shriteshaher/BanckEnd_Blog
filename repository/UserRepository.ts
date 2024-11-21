import { User } from '../models/DTO/User'
import  {UserSchema} from '../models/userSchema'
export class UserRepository {
    async userIdGenerator(){
        return  UserSchema.aggregate([{$count:'total_count'}])
    }
    async saveOne(user:User){
       return  UserSchema.create(user)
    }

    async findUserOne(user:User){
       return UserSchema.findOne(user)
    }
}



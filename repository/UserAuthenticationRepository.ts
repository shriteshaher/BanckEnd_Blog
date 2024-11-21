import jwt from 'jsonwebtoken'
import config from '../config';
import { User } from '../models/DTO/User';

export class UserAuthenticationRepository {

    async generateToken(user:User){
        const jwtToken = await jwt.sign({ userId: user.userid}, config.SECRET_KEY, {
            expiresIn:config.EXPIRATION_TIME,
          });
        return jwtToken
    }
}


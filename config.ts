import dotenv from 'dotenv';
dotenv.config()

const config:any={
    PORT_NO:process.env.PORT,
    MONGO_URI:process.env.MONGO_URI,
    SECRET_KEY:process.env.SECRET_KEY,
    EXPIRATION_TIME:process.env.EXPIRATION_TIME

}

export default config;
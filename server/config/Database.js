import mongoose from 'mongoose'
import 'dotenv/config'


const connectDB = async() =>{
    try{
       const con = await mongoose.connect(process.env.MONGO_URL)
        console.log(`mongodb is connected: ${con.connection.host}`);
        
    }
    catch(error){
        console.log(error);
        process.exit(1)
    }
}

export default connectDB
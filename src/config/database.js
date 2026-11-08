import mongoose from "mongoose";
import config from "./config.js";
import dns from "node:dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

async function connectDB(){
    try{
        await mongoose.connect(config.MONGO_URI)
        console.log("Connected to DB")
    }
    catch(e){
        console.log(e);
    }
}

export default connectDB;
import app from "./src/app.js";
import connectDB from "./src/config/database.js";
import dotenv from "dotenv";

dotenv.config();


connectDB();
app.listen(3000, (req, res)=>{
    console.log("server is running on 3000");
})
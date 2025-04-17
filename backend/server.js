import express from 'express';
import dotenv from 'dotenv';
dotenv.config(); // 


import authRoutes from './routes/auth.routes.js';
import connectMongoDB from './db/connectMongoDB.js';

const app = express();

console.log(process.env.MONGO_URI); 

app.use("/api/auth", authRoutes);

app.listen(8000, () => {
    console.log("server is running on port 8000");
    connectMongoDB();
});

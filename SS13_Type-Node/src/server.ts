import express, { Request, Response } from "express";
import userRouter from "./routes/user.routes";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const PORT: number = 8080;


// app.get("",(req:Request,res:Response)=> {
//     res.send("hello")

// })
//lay tat ca user
app.use("/api/v1/user",userRouter)
// lay 1 user


app.listen(PORT, () => {
    console.log("server dang chay tai cong " + PORT);
})

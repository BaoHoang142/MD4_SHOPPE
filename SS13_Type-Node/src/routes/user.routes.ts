import express, { Request, Response }  from "express";
import { addUser, deleteUser, getAll, getOne, updateUser } from "../controllers/user.controller";

const userRouter = express.Router();
// lay tat ca user
userRouter.get("/",getAll);
//lay 1 user
userRouter.get("/:id",getOne);
//xoa user
userRouter.delete("/:id",deleteUser);
// them user
userRouter.post("/",addUser);
//update
userRouter.put("/:id",updateUser);





export default userRouter;



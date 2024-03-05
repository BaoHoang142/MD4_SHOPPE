import express, { Request, Response }  from "express";
import { addUserMysql, deleteUserMysql, getAllMysql, getOneMysql, updateUserMysql } from "../services/user.service";
export const getAll= async (req:Request,res:Response)=> {
    try {
        const result = await getAllMysql();
        res.status(200).json({
            message:"thanh cong lay tat ca",
            data: result[0]
        })
    } catch (error) {
        console.log("error",error)
    }
};
// lay ra 1 user theo id
export const getOne= async (req:Request,res:Response)=> {
    const user = await getOneMysql(Number(req.params.id));
    res.status(200).json({
        message:"thanh cong lay mot",
        data: user
    })
};
// xoa user theo id
export const deleteUser= async (req:Request,res:Response)=> {
    const userId = deleteUserMysql(Number(req.params.id));
    res.status(200).json({
        message:"xoa thanh cong"
    })
};
// them user
export const addUser= async (req:Request,res:Response)=> {
    const newUser = addUserMysql();
    res.status(200).json({
        message:"them thanh cong"
    })
}
//update user theo id
export const updateUser= async (req:Request,res:Response)=> {
    const userId = updateUserMysql(Number(req.params.id));
    res.status(200).json({
        message:"update thanh cong"
    })
};

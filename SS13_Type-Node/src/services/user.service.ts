import pool from "../utils/database";
import mysql from "mysql2/promise";

export const getAllMysql= async ()=> {
        const result = mysql.createPool(pool);
        return result.execute("SELECT * FROM user");
};
// lay ra 1 user theo id
export const getOneMysql= async (id:number)=> {
        const user = mysql.createPool(pool);
        const [result] = await user.execute("SELECT * FROM user WHERE userId=?",[id]);
        return  result 
};
// xoa user theo id
export const deleteUserMysql= async (id:number)=> {
        const user = mysql.createPool(pool);
        const [result] = await user.execute("DELETE FROM user WHERE userId=?;",[id]);
        return result 
};
// them user 
export const addUserMysql= async ()=> {
        const dataInsert = {
            userName:"Long",
        }
        const user = mysql.createPool(pool);
        const [result] = await user.execute("INSERT INTO user (userName) VALUES (?)",[dataInsert.userName]);
}
//update user theo id
export const updateUserMysql= async (id:number)=> {
        const dataUpdate = {
            userName:"khanh",
        }
        const user = mysql.createPool(pool);
        const [result] = await user.execute("UPDATE user SET userName = ? WHERE userId=?;",[dataUpdate.userName,id]);
};

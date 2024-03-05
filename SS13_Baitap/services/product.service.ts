import pool from "../utils/database";
import mysql from "mysql2/promise";

// lay tat ca
export const getAllProductMysql = async () => {
    const result = mysql.createPool(pool);
    return result.execute("SELECT * FROM products");
}
// lay mot san pham
export const getOneProductMysql = async (id: number) => {
    const product = mysql.createPool(pool);
    const [result] = await product.execute("SELECT * FROM products WHERE product_id = ?", [id]);
    return result
}
// them san pham
export const addNewProductMysql = async (product_Name:string,image:string,origin:string,category_Id:number) => {
    const product = mysql.createPool(pool);
    const [result] = await product.execute("INSERT INTO products (product_Name,image,origin,category_Id) VALUES (?,?,?,?)", [product_Name,image,origin,category_Id]);
    return result
}
//update san pham
export const updateProductMysql = async (product_Name:string,image:string,origin:string,category_Id:number,product_id:number) => {
    const product = mysql.createPool(pool);
    const [result] = await product.execute("UPDATE products SET product_Name = ?, image = ?, origin = ?, category_Id = ? WHERE product_id = ?", [product_Name,image,origin,category_Id,product_id]);
    return result
}
// xoa san pham theo id
export const deleteProductMysql = async (product_id:number) => {
    const product = mysql.createPool(pool);
    const [result] = await product.execute("DELETE FROM products WHERE product_id = ?", [product_id]);
    return result
}
// tim kiem san pham 
export const getProductBySearchMysql = async (product_Name:string) => {
    const product = mysql.createPool(pool);
    const [result] = await product.execute(`select * from products where product_Name like '%${product_Name}%'`);
    return result
}

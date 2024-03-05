import { Request, Response } from "express";
import {
    addNewProductMysql,
  deleteProductMysql,
  getAllProductMysql,
  getOneProductMysql,
  getProductBySearchMysql,
  updateProductMysql,
} from "../services/product.service";

// lay tat ca san pham
export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await getAllProductMysql();
    res.status(200).json({
      message: "thanh cong lay tat ca",
      data: result[0],
    });
  } catch (error) {
    console.log("error", error);
  }
};
// lay san pham theo id
export const getOneProduct = async (req: Request, res: Response) => {
  const product = await getOneProductMysql(Number(req.params.id));
  res.status(200).json({
    message: "thanh cong lay mot san pham ",
    data: product,
  });
};
// them mot san pham
export const addNewProduct = async (req: Request, res: Response) => {
    const {product_Name,image,origin,category_Id} = req.body
    const product = await addNewProductMysql(product_Name,image,origin,category_Id);
    res.status(201).json({
        message: "them thanh cong san pham",
        data: product
    })
}
//update san pham
export const updateProduct = async (req: Request, res: Response) => {
    const {product_Name,image,origin,category_Id} = req.body
    const id:number = +req.params.id
    const product = await updateProductMysql(product_Name,image,origin,category_Id,id);
    res.status(201).json({
        message: "update thanh cong san pham",
        data: product
    })
}
// xoa san pham
export const deleteProduct = async (req: Request, res: Response) => {
    const id:number = +req.params.id
    const product = await deleteProductMysql(id);
    res.status(201).json({
        message: "xoa thanh cong san pham",
        data: product
    })
}
//search san pham
export const getProductBySearch = async (req: Request, res: Response) => {
    const {key} = req.body
    const product = await getProductBySearchMysql(key);
    res.status(200).json({
        message: "thanh cong tim kiem",
        data: product
    })
}

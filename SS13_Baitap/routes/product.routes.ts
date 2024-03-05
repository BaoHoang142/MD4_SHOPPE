import express from "express";
import { addNewProduct, deleteProduct, getAllProduct, getOneProduct, getProductBySearch, updateProduct } from "../controllers/product.controller";


const productRouter = express.Router();
// lay tat ca san pham
productRouter.get("/",getAllProduct);
// lay tat ca san pham theo id
productRouter.get("/:id",getOneProduct);
// them moi san pham
productRouter.post("/",addNewProduct);
// update san pham theo id
productRouter.put("/:id",updateProduct);
// xoa san pham theo id
productRouter.delete("/:id",deleteProduct);
//search san pham
productRouter.get("/search",getProductBySearch);




export default productRouter;
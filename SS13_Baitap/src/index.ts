import express from "express";
import productRouter from "../routes/product.routes";
import bodyParser from "body-parser";

const app = express();

const PORT: number = 3000;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1/products", productRouter);

app.listen(PORT, () => {
    console.log("Da chay vao server" + PORT)
})
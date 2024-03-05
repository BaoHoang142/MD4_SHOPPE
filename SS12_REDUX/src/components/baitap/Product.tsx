import React, { useState } from "react";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../store/reducer/BuyProduct";
import { RootState } from "../store/store";
export interface Products {
  id: number;
  title: string;
  price: number;
  image: string;
}
const Product = () => {
  const handleCart = () => {
    window.scrollTo(0, 5000);
  };
  const [products, setProducts] = useState<Products[]>([
    {
      id: 1,
      title: "Cola",
      price: 10,
      image:
        "https://ayb.akinoncdn.com/products/2019/01/18/3544/5aa1ee14-1c83-4213-a62b-773c4785e187_size780x780_quality60_cropCenter.jpg",
    },
    {
      id: 3,
      title: "Sprite",
      price: 15,
      image: "https://images.ofix.com/product-image/s99509_2.jpg",
    },
    {
      id: 4,
      title: "Ayran",
      price: 31,
      image:
        "https://konyamevlana.com/florya/wp-content/uploads/2020/12/sutas-ayran-285ml.jpg",
    },
    {
      id: 5,
      title: "Salgam",
      price: 40,
      image: "http://esenlik.com.tr//images/prod/5704.jpg",
    },
  ]);
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cartSlide.cart);
  return (
    <>
      <div id="container">
        <header id="header">
          <h1
            onClick={handleCart}
            style={{
              cursor: "pointer",
              backgroundColor: "red",
              color: "white",
              padding: "5px",
              borderRadius: "5px",
              width: "400px",
              textAlign: "center",
            }}
          >
            Vào giỏ hàng
          </h1>
          <div className="header__cart">
            Giỏ hàng{" "}
            <div className="cart">
              <span> {cart.length} </span>
            </div>
          </div>
        </header>
        <div id="renderProduct">
          {products.map((product) => (
            <div className="product1">
              <div className="img">
                <img src={product.image} alt="" />
              </div>
              <h1>{product.title}</h1>
              <p style={{ color: "red", fontSize: "20px", fontWeight: "bold" }}>
                {product.price} $
              </p>
              <button onClick={() => dispatch(addCart(product))}>Mua</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;

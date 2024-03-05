import React from 'react'
import './ProductDetail.css'
import garan from '../assets/imgs/my_ga_nc.png';
type obj={
    id:number;
    name:string;
    img :string;
    description:string;
    price:number;
}
type ProductDetailProps =  {
    product?:obj;
}

const ProductDetail:React.FC<ProductDetailProps> = (props: ProductDetailProps) => {
  return (
    <>
        <div id='productDetail'>
            <div className='imgDetail'>
                <img src={props.product?.img} alt="" />
            </div>
            <div className='inforDetail'>
                <h1 className='title'>{props.product?.name}</h1>
                <p className='name'>{props.product?.description}</p>
                <p className='price'>{props.product?.price}</p>
                <button className='btn'>Thêm vào giỏ hàng</button>
            </div>
        </div>
    </>
  )
}

export default ProductDetail
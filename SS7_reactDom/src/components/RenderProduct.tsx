import React from 'react'
import './RenderProduct.css'


type obj={
    id:number;
    name:string;
    img:string;
    description:string;
    price:number;
}
type RenderProductProps = {
    arrProduct : obj;
    onClickDetail?:() => void;
}

const RenderProduct:React.FC<RenderProductProps> = (props: RenderProductProps) => {
  return (
    <>
     
        <div className='product1'>
            <div className='img'>
             <img src={props.arrProduct.img} alt="" />
            </div>
            <h1>{props.arrProduct.name}</h1>
            <p>{props.arrProduct.description}</p>
            <p>{props.arrProduct.price}</p>
            <button onClick={props.onClickDetail}>Xem chi tiết</button>
        </div>
 

    
    
    
    
    
    </>
  )
}

export default RenderProduct
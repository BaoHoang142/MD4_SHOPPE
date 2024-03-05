import React, { useState } from 'react'
import './App.css'
import RenderProduct from './components/RenderProduct'
import garan from './assets/imgs/499k.jpg';
import garan2 from './assets/imgs/2_g_2_m_.jpg';
import garan3 from './assets/imgs/699k.jpg';
import garan4 from './assets/imgs/599kk.jpg';
import garan5 from './assets/imgs/my_ga_nc.png';
import garan6 from './assets/imgs/my_lon_ga_nc.png';
import ProductDetail from './components/ProductDetail';
function App() {
 const [status,setStatus] = React.useState<boolean>(false);
  // const [data,setData] = React.useState<Array<string>>(["a","b"]);
  const onClick = () =>{
    setStatus(!status)
  }
  type obj={
    id:number;
    name:string;
    img :string;
    description:string;
    price:number;
}
  const [arrProduct, setArrProduct] = React.useState<Array<obj>>([
    {
      id:1,
      name:"Gà rán 1",
      img:garan,
      description:"Gà ngon",
      price:100000
    },
    {
      id:2,
      name:"Gà rán 2 ",
      img:garan2,
      description:"Gà ngon 2",
      price:100000
    },
    {
      id:3,
      name:"Gà rán 3 ",
      img:garan3,
      description:"Gà ngon 3",
      price:100000
    },
    {
      id:4,
      name:"Gà rán 4 ",
      img:garan4,
      description:"Gà ngon 4",
      price:100000
    },
    {
      id:5,
      name:"Gà rán 5",
      img:garan5,
      description:"Gà ngon 5",
      price:100000
    },
    {
      id:6,
      name:"Gà rán 6",
      img:garan6,
      description:"Gà ngon 6",
      price:100000
    },

  ])
  const [productDetail,setProductDetail]= useState<obj>(

    
  )
  const onClickDetail = (item:obj) =>{
    console.log(item)
    setProductDetail(item)
    
  }
  return (
    <>
    <div id='renderProduct'>
        {arrProduct.map((item)=>{
          return <RenderProduct arrProduct={item} onClickDetail={()=> onClickDetail(item)}/>
        })}
    </div>
    <ProductDetail product={productDetail}></ProductDetail>
      
    </>
  )
}

export default App;

/* 

render list product
tạo một componet render product
fake data, sau đó thì hiển thị ra
*/
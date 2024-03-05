import React, { Children, useState } from 'react'
import Parent from './components/Parent'
import Childrent from './components/Childrent';
import Form from './components/Form';
import Baitap1 from './components/Baitap1';
export default function App() {
  const [name2,setName2]=useState("Lan");
  const name="hao";
  const number1=5;
  const student1={
    id:1,
    age:25,
    name:"hồng"
  }
  const persons=[
    {
      id: 1,
      age: 25,
      name: "hồng"
    },
    {
      id: 2,
      age: 20,
      name: "hoa"
    },
    {
      id: 3,
      age: 21,
      name: "ánh"
    }
  ]
  const handleChangeName=(name1:string)=>{
      console.log("2222222",name1);
      setName2(name1);
  }
  return (
    <>
      {/* <Parent name={name}
       number={number1} 
       person={persons}
       student={student1} 
       changeName={handleChangeName}>
      </Parent>
      <Childrent name2={name2}>

      </Childrent>
      <Form></Form> */}
      <Baitap1></Baitap1>
    </>
  )
}

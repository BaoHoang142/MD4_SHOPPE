import React, { useState } from 'react'
type Obj = {
    id: number,
    age: number,
    name: string
}
type Props = {
    name: string,
    number: number,
    student: Obj,
    person: Obj[],
    changeName:(name:string)=>void;
}

export default function Parent(props: Props) {
    const [name1,setName1]=  useState<string>("Hoa");
    console.log("111111", props);
    const { name, person ,changeName} = props;
    const handleChange = () => {
        setName1("Huệ");
    }
    return (
        <>
            <div>Parent</div>
            <p>tên : {name}</p>
            <p> tên ban đầu : {name1} </p>
            <table border={1}>
                <tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr> 
                    {person.map((item, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                        </tr>
                    ))}           
            </table>
            <button onClick={handleChange}> change name </button>
            <button onClick={() => changeName("Minh")}>
             change name parent
            </button>
        </>
        
        
    )
}

// Xây dựng một ứng dụng quản lý người dùng sử dụng ReactJS và Typescript thực hiện các yêu cầu sau:
// ●	Thêm mới user và lưu dữ liệu trên localstorage
// ●	Hiển thị danh sách user
// ●	Thực hiện cập nhập thông tin user
// ●	Thực hiện tính năng xóa thông tin user theo id
import React, { FormEvent, useEffect, useState } from 'react'

export default function Baitap1() {
    const [users,setUsers]:any= useState([]);
    const [newUser,setNewUser] = useState({
        id: Math.floor(Math.random() * 1000),
        name: '',
        email: '',
        address: ''
    });
    const [flag, setFlag]:any = useState(false);
    const [check,setCheck] = useState(0);
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
    }
    console.log(users);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value
        let name = event.target.name
        // let {name,value} = event.target
        // console.log(value);
        setNewUser({ ...newUser, [name] :value})
    }
    const handleAdd = () => {
        if (check === 0) {
            setUsers([...users, newUser]);
            let allUser = JSON.stringify([...users, newUser]);
            localStorage.setItem('users', allUser);
            setNewUser({
                id: Math.floor(Math.random() * 0),
                name: '',
                email: '',
                address: ''
            })
        } else {
            let index = users.findIndex((user: any) => user.id === newUser.id);
            console.log(index)
            users[index] = newUser;
            let allUser = JSON.stringify([...users]);
            localStorage.setItem('users', allUser);
            setNewUser({
                id: Math.floor(Math.random() * 0),
                name: '',
                email: '',
                address: ''
            })
            setCheck(0);
        }
    }
    const renderUsers = () => {
        // cach 1
        setUsers(JSON.parse(localStorage.getItem('users') || '[]'))
        setFlag(!flag)
    }
    useEffect(() => {
        renderUsers();
    },flag)
    // cach 2
    // let usserLocal = localStorage.getItem("users");
    // let userss = usserLocal? JSON.parse(usserLocal):[];
    const handleEdit = (id: number) => {
        console.log(id)
        let index = users.findIndex((user: any) => user.id === id);
        setNewUser(users[index]);
        setCheck(1);
    }

    const handleDelete = (id: number) => {
        let index = users.findIndex((user: any) => user.id === id);
        users.splice(index, 1);
        let allUser = JSON.stringify([...users]);
        localStorage.setItem('users', allUser);
        renderUsers();
    }
  return (
    <>
    <div>
        <h1>Baitap1</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">UserName</label>
            <input 
            id="name"
            type="text"
            name='name'
            value={newUser.name}
            onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            <input 
            id='email'
            type="text"
            name='email'
            value={newUser.email}
            onChange={handleChange} 
             />
            <label htmlFor="address">Address</label>
            <input 
            id='address'
            type="text"
            name='address'
            value={newUser.address}
            onChange={handleChange}
             />
            <button onClick={handleAdd }>
               {check===0? 'Add' : 'Edit'}
            </button>
        </form> 
        <table>
            <thead>
                <tr>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user:any, index:number) => (
                    <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.address}</td>
                        <td>
                            <button
                            style={{marginRight: 10,backgroundColor: 'blue', color: 'white', borderRadius: 5, padding: 10, border: 'none', cursor: 'pointer'}}
                            onClick={()=> handleEdit(user.id)}
                            >
                                Edit
                            </button>
                            <button
                            style={{marginRight: 10,backgroundColor: 'red', color: 'white', borderRadius: 5, padding: 10, border: 'none', cursor: 'pointer'}}
                            onClick={()=> handleDelete(user.id)}
                            
                            >
                                Delete
                            </button>
                        </td>
                        
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </>
  )
}
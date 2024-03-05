import React, { FormEvent } from 'react'

export default function Form() {
    const [names, setNames] = React.useState({
        name:"",
        email:"",
        phone:"",
        password:""
    })
    const handleSubmit = (event: FormEvent) => {
            event.preventDefault()
        console.log( "1234567", names);
        
        
    }
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value
        let name = event.target.name
        // let {name,value} = event.target
        // console.log(value);
        setNames({ ...names, [name] :value})
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Username</label> <br />

            <input 
              type="text" 
              name='name' 
              value={names.name} 
              onChange={handleChange}
            />
            <label htmlFor="">Email</label>
              <input type="text" name='email' value={names.email}  onChange={handleChange} />
            <label htmlFor="">Phone</label>
              <input type="text" name='phone' value={names.phone} onChange={handleChange} />
            <label htmlFor="">Passwork</label>
              <input type="text" name='password' value={names.password} onChange={handleChange} />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

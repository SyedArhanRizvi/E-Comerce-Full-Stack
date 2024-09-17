import React, { useState } from 'react'
import "./CreateAc.css"
import axios from "axios"
function CreateAc() {
    //userFullName, username, email, password

    const [userFullName, setUserFullName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createAccountHandler = async (e)=>{
        e.preventDefault();
        try {
           await axios.post("http://localhost:3000/addUser", {userFullName, username, email, password}); 
           console.log("Your Account has been created successfully");
        } catch (error) {
            console.log("You can't create your account due to this error " ,error);
        }
    }
  return (
    <section className='acCreate'>
      <div className='signin'>
        <form onSubmit={createAccountHandler}>
        <input type="text" placeholder='Create Your name here..' name='name' onChange={(e)=>setUserFullName(e.target.value)}/>
        <input type="text" placeholder='Create Your username here..' name='username' onChange={(e)=>setUsername(e.target.value)}/>
        <input type="text" placeholder='Create Your email here..' name='email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder='Create Your password here..' name='password' onChange={(e)=>setPassword(e.target.value)}/>
        <input className='btn' type="submit" value={"Create AC"}/>
        </form>
      </div>
    </section>
  )
}

export default CreateAc

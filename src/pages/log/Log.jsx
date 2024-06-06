import axios from 'axios'
import React, {useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Log = () => {
    const navi = useNavigate()
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

 
    const logFun = async (e) => {   
        e.preventDefault();
        try {
          const response = await axios.post("http://localhost:4006/api/log", {
            email: email,
            password: password,
          });
          console.log(response);
          if (response.status === 200) {
            localStorage.setItem("user", JSON.stringify(response.data._id));
            navi("/update");
          }
        } catch (error) {
          console.log(error); 
        }
      };
  return (
    <div>
        <input type="text" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={logFun}>for update </button>

    </div>
  )
}

export default Log
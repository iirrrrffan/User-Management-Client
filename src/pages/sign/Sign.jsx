import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const Sign = () => {
    const navi = useNavigate()
const [name,setName]= useState("")
const [passsword,setPassword]= useState("")
const [email,setEmail]= useState("")

const handleSbmite = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4006/api/create", {
        name:name,
        email:email,
        password:passsword,
      });
      console.log(response);
      if (response.status === 201) {
        navi("/log");
      }
    } catch (error) {
      console.log(error); 
    }
  };

  return (
    <div>
      <div >
        <form >
          <input
          placeholder='name'
            type='text'
            onChange={(e)=>setName(e.target.value)}
          />
          <input
          placeholder='email'
            type="email"
            onChange={(e)=>setEmail(e.target.value)}
          />
          <input
           placeholder='password'
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
          />
          <button className="loginButton" type="submit" onClick={handleSbmite} >
            Sign Up
          </button><Link to={"/log"}>
          <button>log in</button>
          </Link>
        </form>
      </div>
    </div>

  )
}

export default Sign
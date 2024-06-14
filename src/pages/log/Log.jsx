import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./log.css"
import { useDispatch, useSelector } from 'react-redux';
import reducer, { addUser, fetchUserData } from '../redux/reducer';

const Log = () => {
    const navi = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  

    const logFun = async (e) => { 
        e.preventDefault();
        try {
          const response = await axios.post("http://localhost:4006/api/log", {
            email: email,
            password: password,
          });
          console.log(response);
          if (response.status === 200) {
            navi("/showuser");
          }
        } catch (error) {
          console.log(error); 
        }
    };

    


    return (
        <div className='main-container'>
            <div className='main'>
            <h2 className='login'>Login</h2>
            <div className='inputGroup'>
            <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
            <div  className='btnGroup'>
            <button className='btn' onClick={logFun}>Show Users</button>
            </div>
           
           
 </div>
         </div>
           
        </div>
    );
};

export default Log;

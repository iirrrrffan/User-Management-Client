import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
const navi = useNavigate()
const [userData, setUserData] = useState(null);
const [state,setState]= useState()
const {_id} = useParams()
const userId = _id;

useEffect(() => {
    const userData = window.localStorage.getItem("user");
    if (userData) {
      setUserData(JSON.parse(userData));
    }
  }, []);


  const fetchData =async ()=>{
   try {
    const res = await axios.get(`http://localhost:4006/api/${userId}`)
    console.log(res,"kk");
    setState(res.data.user)
   } catch (error) {
    console.log(error);
   }
  }

useEffect(()=>{
  fetchData()
},[userId, userData])

  return (
    <div>
      Update 
<div>

  <>
   <h1>name:</h1> 
   <h1>email:</h1> 

   <input type="text" placeholder='name' />
   <input type="text" placeholder='email' />
   </>

</div>
    </div>
  )
}

export default Update
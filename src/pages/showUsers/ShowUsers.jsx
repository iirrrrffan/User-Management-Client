import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import List from '../usersList/List';


const ShowUsers = () => {
    // const users = useSelector((state) => state.user.data);
    // console.log(users,'hiii')

    
  return (
    <div>
      {/* <>
    {users.map((nm)=>(
                <span>name:{nm?.email}</span>
             ))}
                </> */}
                <List/>
    </div>
  )
}

export default ShowUsers
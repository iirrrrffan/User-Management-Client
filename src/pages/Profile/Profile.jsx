import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Profile = () => {
    const [user, setUser] = useState(null);
    const { id } = useParams();
    console.log(id, 'hiiiiiiii iddd');
    const navi = useNavigate()

    const fetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:4006/api/${id}/user`);
            if (res.status === 200) {
                setUser(res.data.data);
                }
                console.log(res);
                } catch (error) {
                    console.log(error);
                    }
                    };
                    useEffect(() => {
        fetchData();
    }, []);

    const delet = async ()=>{
        try {
            const res = await axios.delete(`http://localhost:4006/api/${id}/dlt`)
            if(res.status === 200){
                navi("/showuser")
            }
        } catch (error) {
            console.log(error);
        }
        
     }

     const blk = async ()=>{
        try {
            const res = await axios.put(`http://localhost:4006/api/${id}/block`)
            console.log(res,'user block')
            if(res.status===200){
                fetchData()
            }
        } catch (error) {
            console.log(error);
        }
     }
     const unblk = async ()=>{
        try {
            const res = await axios.put(`http://localhost:4006/api/${id}/unblock`)
            console.log(res,'user unblokk')
            if(res.status===200){
            fetchData()
            }
        } catch (error) {
            console.log(error);
        }
     }

    return (
        <div>
            {user ? (
                <div>
                    <ul>
                        <li>{user?.name}</li>
                        <li>{user?.email}</li>
                    </ul>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            <div>
                <button onClick={delet}>Delete</button>
                {
                    user?.isBlocked?<button onClick={unblk}>Unblock</button>:<button onClick={blk}>block</button>
                }
                <button onClick={()=>navi("/showuser")}>home</button>
            </div>
        </div>
    );
}

export default Profile;

import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../redux/reducer'; 

const Log = () => {
    const navi = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showData, setShowData] = useState(false);

    const users = useSelector((state) => state.user.data);
    console.log(users,'hiii')

    const logFun = async (e) => {   
        e.preventDefault();
        try {
          const response = await axios.post("http://localhost:4006/api/log", {
            email: email,
            password: password,
          });
          console.log(response);
          if (response.status === 200) {
            dispatch(addUser({ email: email, password: password }));
            // navi("/update");
          }
        } catch (error) {
          console.log(error); 
        }
    };

    const handleShowClick = () => {
        setShowData(true);
    };

    return (
        <div>
            <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
            <button onClick={logFun}>for update</button>
            <button onClick={handleShowClick}>show</button>
            {showData && (
                <div>
                    <h1>User Data:</h1>
                    <ul>
                        {users.map((user, index) => (
                            <li key={index}>
                                Email: {user.email}, Password: {user.password}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Log;

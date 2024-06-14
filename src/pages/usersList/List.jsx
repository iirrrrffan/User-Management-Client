import React, { useEffect, useMemo, useState } from 'react';
import './list.css';
import axios from 'axios';

const List = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');
    const [userId, setUserId] = useState(null);

    const usersPerPage = 5;

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        setUserId(user._id);
    }, []);

  
     useEffect(()=>{
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:4006/api/allUsers');
                if(res && res.data && res.data.data)
                    setUsers(res.data.data);
                    console.log(res);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData()
     },[])
        

    const filteredUsers = users.filter((user) => user._id !== userId);
    
    const searchResults = filteredUsers.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );

    const totalPages = Math.ceil(searchResults.length / usersPerPage);
    const startIdx = (currentPage - 1) * usersPerPage;
    const currentUsers = searchResults.slice(startIdx, startIdx + usersPerPage);

    return (
        <>
        <div className="main">
            <div className="searchContainer">
                <input  type="text"   placeholder="Search"onChange={(e) => setSearch(e.target.value)}  />
            </div>
            <div>
            {currentUsers.map((user, index) => (
                    <div className="friendList" key={user._id || index} style={{ display: 'flex' }}>
                 <span className="friendListName">{user?.name}</span>
                    </div>
    
                ))}
            </div>

            <div className="paginationContainer">
                <button onClick={() => setCurrentPage(currentPage - 1)}disabled={currentPage === 1}>Previous </button>
                <span>  Page {currentPage} of {totalPages} </span>
                <button onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}> Next</button>
            </div>
        </div>
        </>
    );
};

export default List;
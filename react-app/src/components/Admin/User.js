
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserStyle = {
  width: '80%',
  margin: '20px auto',
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '10px',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '20px',
};

const thTdStyle = {
  border: '1px solid #dddddd',
  textAlign: 'left',
  padding: '8px',
};

const User = () => {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:7300/api/admin/all-users');
  //       setUsers(response.data);
  //     } catch (error) {
  //       console.error('Error fetching users:', error);
  //     }
  //   };

  //   fetchUsers();
  // }, []);
  useEffect(() => {
    // Fetch dress designs from the server
    axios.get('http://localhost:7300/api/admin/all-users') // Update the URL with your actual API endpoint
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      });
  }, []);


  return (
    <div style={UserStyle} className="admin-table">
      <h2>Admin Users Table</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thTdStyle}>Email</th>
            <th style={thTdStyle}>Name</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td style={thTdStyle}>{user.email}</td>
              <td style={thTdStyle}>{user.name}</td>
              {/* Add more cells based on your user schema */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;

// TailorsTable.js
// import axios from 'axios'; 

import React, { useState, useEffect } from 'react';

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

const TailorsDetails = () => {
  const [tailors, setTailors] = useState([]);

  useEffect(() => {
    const fetchTailors = async () => {
      try {
        const response = await fetch('http://localhost:7100/api/users/tailorsProfile');
        const data = await response.json();
        setTailors(data.data);
      } catch (error) {
        console.error('Error fetching tailors:', error);
      }
    };

    fetchTailors();
  }, []);

  return (
    <div>
      <h1>Tailors Details</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thTdStyle}>Name</th>
            <th style={thTdStyle}>Email</th>
            <th style={thTdStyle}>Experience</th>
            <th style={thTdStyle}>Contact</th>
            <th style={thTdStyle}>Occupation</th>
            <th style={thTdStyle}>ID Number</th>
            <th style={thTdStyle}>DOB</th>
            <th style={thTdStyle}>Gender</th>
          </tr>
        </thead>
        <tbody>
          {tailors.map((tailor) => (
            <tr key={tailor._id}>
              <td style={thTdStyle}>{tailor.name}</td>
              <td style={thTdStyle}>{tailor.email}</td>
              <td style={thTdStyle}>{tailor.experience}</td>
              <td style={thTdStyle}>{tailor.contact}</td>
              <td style={thTdStyle}>{tailor.occupation}</td>
              <td style={thTdStyle}>{tailor.idnumber}</td>
              <td style={thTdStyle}>{new Date(tailor.dob).toLocaleDateString()}</td>
              <td style={thTdStyle}>{tailor.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TailorsDetails;

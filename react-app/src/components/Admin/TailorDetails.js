import axios from 'axios';
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
  const [tailors, setTailors] = useState(null); // Use null instead of an empty array

  useEffect(() => {
    // Fetch tailors data from the server
    axios.get('http://localhost:7300/api/admin/tailorsProfile')
      .then(response => {
        console.log('Response data:', response.data);
        setTailors(response.data.data); // Adjust this line based on the actual structure of the API response
      })
      .catch(error => {
        console.error('Error fetching tailor details:', error);
      });
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
          {tailors && tailors.map((tailor) => (
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


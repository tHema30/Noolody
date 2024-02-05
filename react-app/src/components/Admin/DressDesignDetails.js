// AdminDressDesignList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';

const DressDesignDetails = () => {
  const [dressDesigns, setDressDesigns] = useState([]);

  useEffect(() => {
    // Fetch dress designs from the server
    axios.get('http://localhost:7300/api/designs/dress-designs') // Update the URL with your actual API endpoint
      .then(response => {
        setDressDesigns(response.data);
      })
      .catch(error => {
        console.error('Error fetching dress designs:', error);
      });
  }, []);

  return (
    <div className='my-5'>
      <h2>Admin Dress Design List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Description</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dressDesigns.map(dressDesign => (
            <tr key={dressDesign._id}>
              <td>{dressDesign._id}</td>
              <td>{dressDesign.category}</td>
              <td>{dressDesign.description}</td>
              <td>
                <img
                  src={dressDesign.designImage.url}
                  alt={dressDesign.category}
                  style={{ maxWidth: '100px', maxHeight: '100px' }}
                />
              </td>
              <td>
                <Button variant="primary">Edit</Button>{' '}
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DressDesignDetails ;

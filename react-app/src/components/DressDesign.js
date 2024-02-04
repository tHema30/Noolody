import React, { useState } from 'react';

const DressDesign = () => {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [designImage, setDesignImage] = useState(null);
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleImageChange = (e) => {
    setDesignImage(e.target.files[0]);
  };
  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('category', category);
    formData.append('description', description);
    formData.append('designImage', designImage);
    try {
      const response = await fetch('http://localhost:7300/api/designs/upload', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        console.log('Upload successful!');
      } else {
        console.error('Upload failed.');
      }
    } catch (error) {

      console.error('Error uploading:', error);
    }
  };
  return (
    <div class="design-form">
      <h1>Dress Design Upload</h1>
      <label htmlFor="category">Category:</label>
      <input type="text" id="category" value={category} onChange={handleCategoryChange} required />
      <label htmlFor="description">Description:</label>
      <textarea id="description" value={description} onChange={handleDescriptionChange} required />
      <label htmlFor="designImage">Design Image:</label>
      <input type="file" id="designImage" onChange={handleImageChange} accept="image/*" required />
      <button type="button" onClick={handleUpload}>Upload</button>
    </div>
  );
};
export default DressDesign;
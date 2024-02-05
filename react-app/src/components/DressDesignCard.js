import React from 'react';
import { Card, Button } from 'react-bootstrap';

const DressDesignCard = ({ dressDesign }) => {
  return (
    <Card>
      <Card.Img variant="top" src={dressDesign.designImage.url} alt={dressDesign.category} />
      <Card.Body>
        {/* <Card.Title>{dressDesign.category}</Card.Title> */}
        {/* <Card.Text>{dressDesign.description}</Card.Text> */}
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );
};

export default DressDesignCard;

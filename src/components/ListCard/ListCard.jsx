import React from 'react';
import image from '../../assets/WhatsApp Image 2024-03-04 at 19.33.08_f16c8063.jpg';
import './ListCard.css'
const ListCard = () => {
  return (
    <div className="list-card">
      <div className="image">
        <img src={image} alt="Cover"/>
      </div>
      <div className="details">
        <h3>Title</h3>
        <h4>Author</h4>
        <h5>Category</h5>
      </div>
    </div>
  );
};

export default ListCard;

import React from "react";
import "./card.css"

const Card = ({name, description, imageUrl}) => {
  return (
    <div className="card mr-3 mb-2 border-secondary card-component">
      <h3 className="card-header">{name}</h3>
      <div className="image-wrap">
        <img
          className="image"
          src={imageUrl}
          alt={name}
        />
      </div>
        <div className="card-body">
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer text-muted d-flex justify-content-between align-items-baseline">
          price
          <button className="btn btn-secondary">Add +</button>
        </div>
    </div>
  );
};

export default Card;
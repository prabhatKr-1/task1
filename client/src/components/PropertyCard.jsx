import React from 'react';
import '../css/PropertyCard.css';
const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} />
      <h3>{property.title}</h3>
      <p>{property.description}</p>
      <span>Price: ${property.price}</span>
    </div>
  );
};

export default PropertyCard;
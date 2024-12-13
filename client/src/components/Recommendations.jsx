import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropertyCard from './PropertyCard';
import '../css/Recommendation.css';

const Recommendations = () => {
  const [recommendedProperties, setRecommendedProperties] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get('https://bdeploy.onrender.com/api/recommendations');
        setRecommendedProperties(response.data);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    };
    fetchRecommendations();
  }, []);

  return (
    <div className="recommendations">
      <h2>Recommended Properties</h2>
      <div className="property-list">
        {recommendedProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
import { generateRecommendations } from '../recommendationAI.js';
import { dummyProperties } from '../utils/dummyData.js'; 

export const getRecommendations = async (req, res) => {
  const { maxPrice, preferredLocation, propertyType } = req.body; // User preferences sent in the request body

  try {
    const userPreferences = {
      price: maxPrice, 
      location: preferredLocation, 
      type: propertyType, 
    };

    const recommendedProperties = generateRecommendations(userPreferences, dummyProperties);

    res.json({ recommendedProperties });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

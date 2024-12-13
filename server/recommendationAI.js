// Utility function to calculate Euclidean Distance between two points (for KNN)
const euclideanDistance = (point1, point2) => {
  const distance = Math.sqrt(
    Math.pow(point1.price - point2.price, 2) +
    Math.pow(point1.location.distance - point2.location.distance, 2) + // Assuming location is numerical (e.g., latitude/longitude)
    (point1.type === point2.type ? 0 : 1) // Add a penalty if types are different
  );
  return distance;
};

// Main recommendation function using KNN
export const generateRecommendations = (userPreferences, allProperties, k = 5) => {
  const distances = [];

  // Loop through all properties and calculate distance from the user’s preferences
  allProperties.forEach(property => {
    const propertyData = {
      price: property.price,
      location: {
        distance: calculateDistance(userPreferences.location, property.location) // Assuming location is a string (e.g., "city")
      },
      type: property.type,
    };

    const distance = euclideanDistance(userPreferences, propertyData);
    distances.push({ property, distance });
  });

  // Sort properties by distance (ascending)
  distances.sort((a, b) => a.distance - b.distance);

  // Get top K closest properties
  const recommendedProperties = distances.slice(0, k).map(item => item.property);

  return recommendedProperties;
};

// Dummy function to calculate distance (assuming locations are strings like city names)
const calculateDistance = (userLocation, propertyLocation) => {
  return userLocation === propertyLocation ? 0 : 1; // 1 means they are different, 0 means same location
};

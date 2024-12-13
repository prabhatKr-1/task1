import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  type: { type: String, required: true }, // e.g., 'sale', 'rent'
  images: [String], // Array of image URLs
});

const Property = mongoose.model('Property', propertySchema);

export default Property;

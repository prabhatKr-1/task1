import Property from '../models/propertyModel.js';

export const getProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) return res.status(404).json({ message: 'Property not found' });
    res.json(property);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const createProperty = async (req, res) => {
  const { title, description, price, location, type, images } = req.body;

  try {
    const newProperty = new Property({ title, description, price, location, type, images });
    await newProperty.save();
    res.status(201).json(newProperty);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

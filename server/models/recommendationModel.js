import mongoose from 'mongoose';

const recommendationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  recommendedProperties: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Property' }],
});

const Recommendation = mongoose.model('Recommendation', recommendationSchema);

export default Recommendation;

const mongoose = require('mongoose');

// MongoDB URI (make sure this is correct)
const mongoURI = 'mongodb://localhost:27017/taskhive'; // or use your MongoDB Atlas URI

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

export default app;
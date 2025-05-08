require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const jobRoutes = require('./routes/jobs'); // Add this

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/jobs', jobRoutes); // ✅ THIS

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes); //  Add this

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => console.error(err));

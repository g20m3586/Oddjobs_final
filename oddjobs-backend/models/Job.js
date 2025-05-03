const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  category: String,
  price: Number,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Job', JobSchema);

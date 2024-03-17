const mongoose = require("mongoose")

// Review schema (assuming reviews are for service providers)
const reviewSchema = new mongoose.Schema({
    rating: {
      type: Number,
      required: true
    },
    comment: {
      type: String,
      required: true
    },
    author: { 
      // Reference to another user, optional
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  });


  module.exports = mongoose.model('Review', reviewSchema)
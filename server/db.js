const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const mongoURI = process.env.DATABASE; // Access the DATABASE variable from .env

const connectToMongo = () => {
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });
};

module.exports = connectToMongo;

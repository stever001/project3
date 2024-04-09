// const mongoose = require("mongoose");

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project3", {
//    useNewUrlParser: true,
//    useUnifiedTopology: true,
//    useCreateIndex: true,
//    // useFindAndModify: false
// });

// module.exports = mongoose.connection;

const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Other options if needed
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit with failure
  }
}

module.exports = connectDB;

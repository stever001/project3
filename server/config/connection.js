const mongoose = require("mongoose");

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project3", {
//    useNewUrlParser: true,
//    useUnifiedTopology: true,
//    useCreateIndex: true,
// });

async function connectDB() {
   try {
     await mongoose.connect(process.env.DB_URI || "mongodb://localhost/project3", {
       useNewUrlParser: true,
       useUnifiedTopology: true,
       useCreateIndex: true,
       // Other options if needed
     });
     console.log('Connected to MongoDB');
   } catch (error) {
     console.error('Error connecting to MongoDB:', error);
     process.exit(1); // Exit with failure
   }
 }
 
 module.exports = connectDB;
 
// module.exports = mongoose.connection;

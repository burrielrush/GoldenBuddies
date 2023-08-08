const mongoose = require('mongoose');

// Connecting to the MongoDB database using the Mongoose connect method
// The 'process.env.MONGODB_URI' allows connecting to a remote database specified in an environment variable (e.g., on a deployment platform)
// If 'process.env.MONGODB_URI' is not set, it will use a local MongoDB instance at 'mongodb://localhost/googlebooks'
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/goldenbuddies', {
  useNewUrlParser: true,        // Parse connection strings using the MongoDB driver's new URL parser
  useUnifiedTopology: true,    // Use the new MongoDB driver's unified topology engine
});

// Exporting the Mongoose connection object to be used elsewhere in the application
module.exports = mongoose.connection;

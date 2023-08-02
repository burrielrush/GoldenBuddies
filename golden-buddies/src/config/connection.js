const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/goldenbuddies');

module.exports = mongoose.connection;
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/apparelshop'
);

module.exports = mongoose.connection;

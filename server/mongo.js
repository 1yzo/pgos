const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const username = 'osman';
const password = 'osman123';
const mongoUri = `mongodb://${username}:${password}@ds018498.mlab.com:18498/pgos`;

const connect = () => {
    return mongoose.connect(mongoUri);
};

module.exports = {
    connect,
    mongoose
};
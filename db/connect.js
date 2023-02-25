const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connectDB = async (uri) => {
    mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connection is complete with Database.");
};


module.exports = connectDB;
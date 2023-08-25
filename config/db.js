const mongoose = require('mongoose')

const connectDB = async() => {
    try {
    await mongoose.connect('mongodb+srv://srujanreddy143aa:midhun124@cluster2.k5zgg3i.mongodb.net/');
    console.log(`Mongodb connected ${mongoose.connection.host}`.bgGreen.white);
    }   
    catch (error) {
    console.log(`MongoDB server Issue ${error}` .bgRed.white);
    }

};

module.exports = connectDB;
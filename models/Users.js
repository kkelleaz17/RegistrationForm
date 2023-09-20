const mongoose = require('mongoose');


const users = new mongoose.Schema({
    Name:String,
    Email:String,
    Phone:String,
    Age:Number,
    Password:String,
    Address:String,
});

module.exports = mongoose.model('users',users)
const mongoose = require("mongoose");

const usersModel = new mongoose.Schema({
        id:Number,
        username: String,
        password: String,
        email: String,
        date: {type: Date, default: Date.now}
});

module.exports = usersModel;
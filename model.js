var mongoose = require('mongoose');

mongoose.model('User', new mongoose.Schema({
    email: String,
    passwordHash: String
}))
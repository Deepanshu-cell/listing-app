const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    mobile: String,
    email: String
})

module.exports = mongoose.model('users', UserSchema);
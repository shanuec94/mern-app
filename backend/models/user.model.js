const mongoose = require('mongoose');

const Schema =  mongoose.Schema;

const userSchema = new Schema({
    username: {                     // single username field and some validations of the username 
        type: String,
        require: true,
        unique: true,
        minlength: 3
    },
}, {
    timestamps: true,              //automatically created field and modified
});

const User = mongoose.model('User', userSchema);      // user that is name anything

module.exports = User;


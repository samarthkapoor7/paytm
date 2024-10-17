const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://kapoorsamarth7:wBMJixjgzyOIIhZY@cluster0.ck9mw.mongodb.net/users")

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    }
})

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }, 
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
    User,
    Account
};
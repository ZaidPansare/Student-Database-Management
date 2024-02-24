const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    image: String,
    name: String,
    age: Number,
    phone: Number,
    address:
        {
            state: String,
            district: String,
            area: String,
            pincode: Number
        }
})

const UserModel = mongoose.model('student',schema)

module.exports = UserModel

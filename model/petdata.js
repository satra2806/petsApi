const mongoose = require('mongoose');
const {Schema} = mongoose;

const petSchema = new Schema({
    _id: Number,
    name: String,
    age: Number,
    place: String,
    ownerName : String
})

mongoose.model('petData', petSchema);
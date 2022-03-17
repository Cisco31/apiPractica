const mongoose = require('mongoose');
const { Schema } = mongoose;

const CarsSchema = new Schema({
    brand: {type:String, required:true},
    model: {type:String, required:true},
    year: {type:String, required:true},
    price: {type:String, required:true}
}); 

module.exports = mongoose.model('car', CarsSchema);
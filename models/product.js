const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: [true,"Price must be provided"]
    },
    fetured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.9
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ["Apple", "DELL","HP","Lenovo","samsung"],
            // message: `${values} is not supported`
        }
    }
});


module.exports = mongoose.model('Product',productSchema);
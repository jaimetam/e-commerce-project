const mongoose = require('mongoose');

const pantsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    attributes: [
        {
            name: String,
            value: String,
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const Pants = mongoose.model('Pants', pantsSchema);
module.exports = Pants;

const mongoose = require('mongoose');

const microConsultancySchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    duration: Number, // in hours
    freelancer: { type: mongoose.Schema.Types.ObjectId, ref: 'Freelancer' },
    isCompleted: { type: Boolean, default: false }
});

module.exports = mongoose.model('MicroConsultancy', microConsultancySchema);

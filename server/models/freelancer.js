
const mongoose = require('mongoose');

const freelancerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true
    },
    skillLevels: { // New field to indicate proficiency in each skill
        type: [String], // You could use an array of objects for more detail
        default: []
    },
    workHistory: { // New field to store work experience or project details
        type: [String],
        default: []
    },
    portfolio: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
    microServices: {
        type: [String],
        default: []
    },
    keywords: { // New field to store keywords for better search
        type: [String],
        default: []
    },
    clusterId: { // New field to store the ID of the cluster the freelancer belongs to
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cluster'
    }
});

const Freelancer = mongoose.model('Freelancer', freelancerSchema);

module.exports = Freelancer;

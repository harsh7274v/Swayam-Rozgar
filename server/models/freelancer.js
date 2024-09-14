// const mongoose = require('mongoose');

// const freelancerSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         trim: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     bio: {
//         type: String,
//         trim: true
//     },
//     skills: {
//         type: [String],
//         required: true
//     },
//     skillLevels: { // Field to indicate proficiency in each skill
//         type: [String], // Array of proficiency levels for skills
//         default: []
//     },
//     workHistory: { // Field to store work experience or project details
//         type: [String],
//         default: []
//     },
//     portfolio: {
//         type: String,
//         required: true
//     },
//     rating: {
//         type: Number,
//         default: 0
//     },
//     microServices: {
//         type: [String],
//         default: []
//     },
//     keywords: { // Field to store keywords for better search
//         type: [String],
//         default: []
//     },
//     clusterId: { // Field to store the ID of the cluster the freelancer belongs to
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Cluster'
//     }
// });

// const Freelancer = mongoose.model('Freelancer', freelancerSchema);

// module.exports = Freelancer;


const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const freelancerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        trim: true
    },
    skills: {
        type: [String],
        required: true
    },
    skillLevels: {
        type: [String],
        default: []
    },
    workHistory: {
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
    keywords: {
        type: [String],
        default: []
    },
    clusterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cluster'
    }
});

// Hash the password before saving
freelancerSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8);
    }
    next();
});

const Freelancer = mongoose.model('Freelancer', freelancerSchema);

module.exports = Freelancer;

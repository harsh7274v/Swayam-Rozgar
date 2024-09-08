
const MicroConsultancy = require('../models/microConsultancy');

exports.createMicroConsultancy = async (req, res) => {
    const { title, description, price, duration, freelancer } = req.body;
    try {
        const newMicroConsultancy = new MicroConsultancy({ title, description, price, duration, freelancer });
        const savedMicroConsultancy = await newMicroConsultancy.save();
        res.status(201).json(savedMicroConsultancy);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllMicroConsultancies = async (req, res) => {
    try {
        const microConsultancies = await MicroConsultancy.find().populate('freelancer');
        res.status(200).json(microConsultancies);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getMicroConsultancyById = async (req, res) => {
    try {
        const microConsultancy = await MicroConsultancy.findById(req.params.id).populate('freelancer');
        if (!microConsultancy) {
            return res.status(404).json({ error: 'MicroConsultancy not found' });
        }
        res.status(200).json(microConsultancy);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateMicroConsultancy = async (req, res) => {
    try {
        const updatedMicroConsultancy = await MicroConsultancy.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedMicroConsultancy) {
            return res.status(404).json({ error: 'MicroConsultancy not found' });
        }
        res.status(200).json(updatedMicroConsultancy);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteMicroConsultancy = async (req, res) => {
    try {
        const deletedMicroConsultancy = await MicroConsultancy.findByIdAndDelete(req.params.id);
        if (!deletedMicroConsultancy) {
            return res.status(404).json({ error: 'MicroConsultancy not found' });
        }
        res.status(200).json({ message: 'MicroConsultancy deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

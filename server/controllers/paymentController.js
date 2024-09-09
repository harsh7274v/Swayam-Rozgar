// const Payment = require('../models/payment');

// exports.createPayment = async (req, res) => {
//     try {
//         const payment = new Payment(req.body);
//         await payment.save();
//         res.status(201).json(payment);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };


const Payment = require('../models/payment');

exports.createPayment = async (req, res) => {
    const { amount } = req.body;
    try {
        const newPayment = new Payment({ amount });
        const savedPayment = await newPayment.save();
        res.status(201).json(savedPayment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllPayments = async (req, res) => {
    try {
        const payments = await Payment.find();
        res.status(200).json(payments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getPaymentById = async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.id);
        if (!payment) {
            return res.status(404).json({ error: 'Payment not found' });
        }
        res.status(200).json(payment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updatePayment = async (req, res) => {
    try {
        const updatedPayment = await Payment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPayment) {
            return res.status(404).json({ error: 'Payment not found' });
        }
        res.status(200).json(updatedPayment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deletePayment = async (req, res) => {
    try {
        const deletedPayment = await Payment.findByIdAndDelete(req.params.id);
        if (!deletedPayment) {
            return res.status(404).json({ error: 'Payment not found' });
        }
        res.status(200).json({ message: 'Payment deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

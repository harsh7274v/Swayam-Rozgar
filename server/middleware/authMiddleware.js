const jwt = require('jsonwebtoken');
const Freelancer = require('../models/Freelancer'); // Adjust path if necessary

const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');

    if (!token) {
        return res.status(401).send({ error: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const freelancer = await Freelancer.findOne({ _id: decoded._id, 'tokens.token': token });

        if (!freelancer) {
            throw new Error();
        }

        req.token = token;
        req.freelancer = freelancer;
        next();
    } catch (error) {
        res.status(401).send({ error: 'Please authenticate' });
    }
};

module.exports = authMiddleware;
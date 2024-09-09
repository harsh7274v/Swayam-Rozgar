module.exports = (req, res, next) => {
    // Implement your authentication logic here
    // Example: check if the user is logged in
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).json({ error: 'Unauthorized' });
};

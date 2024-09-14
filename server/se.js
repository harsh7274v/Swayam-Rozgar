const password = 'securePassword123'; // Example password
console.log("Entered Password:", password);

// Example hashed password for comparison (replace with actual hashed value)
const hashedPassword = '$2a$08$Fq8KNRDRYC5QPK6U1mcRvuVWfj2lgL8JiQf3ghs5fxlPp0u0u5s3';
const bcrypt = require('bcryptjs');

bcrypt.compare(password, hashedPassword).then(isMatch => {
    console.log("Password match:", isMatch);
}).catch(error => {
    console.error("Error comparing passwords:", error);
});

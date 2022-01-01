const rateLimit = require("express-rate-limit");

//100 requêtes toutes les 15min par IP
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    skipSuccessfulRequests: true,
});

module.exports = {
    apiLimiter,
};
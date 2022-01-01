const jwt = require("jsonwebtoken");

/**
 *
 * @param {String} id "User id"
 * @param {String} role "User Role"
 * @returns "Token user with 30min expiration"
 */
exports.jwt_generator = function(id, role) {
    return jwt.sign({ userId: id, role: role }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1800s",
    });
};
const db = require("./index");

exports.findAll = function(callback) {
    const sql = `SELECT * FROM users`;

    db.all(sql, (error, rows) => {
        if (error) {
            callback(error);
        }
        callback(rows);
    });
};

exports.add = function(data, callback) {
    const sql = "INSERT INTO users (email, password, role) VALUES (?, ?, ?)";

    const { email, password, role } = data;
    db.run(sql, [email, password, role], (error, rows) => {
        try {
            if (error) {
                throw error.message;
            }
            callback({...data, message: "a new user has been added" });
        } catch (error) {
            callback(error);
        }
    });
};
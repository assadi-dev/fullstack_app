const { db } = require("./index");

exports.findall = function() {
    const sql = `SELECT * FROM users`;
    db.serialize(function() {
        db.run(
            "CREATE TABLE IF NOT EXISTS users(email TEXT, password TEXT, role TEXT)"
        );
        db.all(sql, [], (error, rows) => {
            if (error) {
                console.log(error);
            }
            callback(rows);
        });
    });
};
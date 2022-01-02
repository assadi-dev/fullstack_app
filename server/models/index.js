const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const db_path = path.join(__dirname, "../database", "datas.db");
const db = new sqlite3.Database(db_path, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log("Successful connected to the database");
});

module.exports = {
    db,
};
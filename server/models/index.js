const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const db_path = path.join(__dirname, "../database", "datas.db");
const db = new sqlite3.Database(db_path, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log("Successful connected to the database");
});

db.serialize(function() {
    db.run(
        "CREATE TABLE IF NOT EXISTS users(id integer primary key autoincrement,email TEXT NOT NULL UNIQUE, password TEXT, role TEXT)"
    );
});

module.exports = db;
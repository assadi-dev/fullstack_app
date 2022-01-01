const { jwt_generator } = require("../services/auth.services");

const user = {
    id: 25,
    email: "johndoe@gmail.com",
    password: "password",
    role: "ADMIN",
};

exports.login = function(req, res) {
    try {
        if (req.body.email !== user.email) {
            res.status(401).json({ message: "user no found" });
        }
        if (req.body.password !== user.password) {
            res.status(401).json({ message: "wrong password" });
        }
        const accessToken = jwt_generator(user.id, user.role);
        res.status(200).json({ accessToken });
    } catch (e) {
        console.log(e);
    }
};

exports.me = function(req, res) {
    try {
        res.status(200).json(user);
    } catch (error) {
        console.log(e);
    }
};
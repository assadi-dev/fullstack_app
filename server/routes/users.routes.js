const router = express().Router();
const userController = require("../controllers/user.controller");

router.get("/users", userController.get_users);
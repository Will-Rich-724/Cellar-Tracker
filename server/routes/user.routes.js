const userController = require("../controller/user.controller");
const { authenticate } = require("../config/jwt.config");

module.exports = app => {
    app.post("/api/register", userController.register);
    app.post("/api/login", userController.login);
    app.post("/api/logout", userController.logout);
    app.get("/api/users", userController.getAll);
    app.get("/api/user/:id", userController.getOne);
    app.delete("/api/user/:id", userController.deleteUser);

    app.post("/api/user/:id/bottle", userController.createBottle);
    app.get("/api/user/:user_id/:bottle_id", userController.getOneBottle);
    app.put("/api/user/:user_id/:bottle_id", userController.updateOneBottle);
    app.delete("/api/user/:user_id/:bottle_id", userController.deleteOneBottle);
}

//When working getAll and any account related routes should have authenticate added
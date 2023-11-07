import { Router } from "express";

import * as usersController from "../controllers/users";

export default (router: Router) => {
    //* Public routes
    router.get("/users", usersController.all);
    router.get("/users/:id", usersController.findById);
    router.put("/users/:id", usersController.update);
    router.delete("/users/:id", usersController.deleteId);
    router.post("/users", usersController.create);

    //* Protected routes
};
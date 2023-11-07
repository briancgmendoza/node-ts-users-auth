import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import { connect } from "./config/db";
import * as usersController from "./controllers/users";

dotenv.config();

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT ?? 5050;
const MONGODB_URI = process.env.MONGODB_URI ?? '';

app.get("/users", usersController.all);
app.get("/users/:id", usersController.findById);
app.put("/users/:id", usersController.update);
app.delete("/users/:id", usersController.deleteId);
app.post("/users", usersController.create);

const startServer = async () => {
    await connect(MONGODB_URI, "api");

    app.listen(PORT, () => {
        console.log(`Server is running @ PORT ${PORT}`);
    });
};

startServer();
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import { connect } from "./config/db";
import router from "./routes";

dotenv.config();

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT ?? 5050;
const MONGODB_URI = process.env.MONGODB_URI ?? '';

app.use("/", router());

const startServer = async () => {
    await connect(MONGODB_URI, "api");

    app.listen(PORT, () => {
        console.log(`Server is running @ PORT ${PORT}`);
    });
};

startServer();
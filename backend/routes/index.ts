import { Router } from "express";

import userRoutes from "./user-routes";

const router = Router();

export default (): Router => {
    userRoutes(router);

    return router;
};

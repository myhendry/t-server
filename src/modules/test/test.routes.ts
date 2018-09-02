import { Router } from "express";

import { shoutOut } from "./test.controller";

const routes = Router();

routes.post("/", shoutOut);

export default routes;

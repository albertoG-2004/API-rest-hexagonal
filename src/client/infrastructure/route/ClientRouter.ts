import express from "express";

import { createClientController } from "../dependency/DependenciesClient";
import { getAllClientsController } from "../dependency/DependenciesClient";

export const clientRouter = express.Router();

clientRouter.get("/", getAllClientsController.run.bind(getAllClientsController));
clientRouter.post("/", createClientController.run.bind(createClientController));
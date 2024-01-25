import express from "express";

import { createEmployeeController, getAllEmployeeController } from "../dependency/DependenciesEmployee";

export const employeeRouter = express.Router();

employeeRouter.get("/", getAllEmployeeController.run.bind(getAllEmployeeController));
employeeRouter.post("/", createEmployeeController.run.bind(createEmployeeController));
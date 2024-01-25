import { CreateClientController } from "../controllers/createClientController";
import { CreateClientUseCase } from "../../application/methods/CreateClientUseCase";
import { GetAllClientsController } from "../controllers/GetAllClientController";
import { GetAllClientsUseCase } from "../../application/methods/GetAllClientUseCase";
import { MySqlClientRepository } from "../repository/MySqlClientRepository";

export const mySqlClientRepository = new MySqlClientRepository();

export const createClientUseCase = new CreateClientUseCase(mySqlClientRepository);
export const getAllUseCase = new GetAllClientsUseCase(mySqlClientRepository);

export const createClientController = new CreateClientController(createClientUseCase);
export const getAllClientsController = new GetAllClientsController(getAllUseCase);
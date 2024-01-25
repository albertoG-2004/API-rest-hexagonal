import { Request, Response } from "express";
import { CreateClientUseCase } from "../../application/methods/CreateClientUseCase";

export class CreateClientController {
    constructor(readonly createClientUseCase: CreateClientUseCase) {}

    async run(req: Request, res: Response){
        const data = req.body;
        console.log(data);
        try {
            const client = await this.createClientUseCase.run(
                data.nombre,
                data.apPaterno,
                data.apMaterno,
                data.edad,
                data.celular
            );

            if(client){
                res.status(201).send({
                    status: "success",
                    data: {
                        id_cliente: client?.id_cliente,
                        nombre: client?.nombre,
                        apPaterno: client?.apPaterno,
                        apMaterno: client?.apMaterno,
                        edad: client?.edad,
                        celular: client?.celular
                    },
                });
            }
            else{
                res.status(204).send({
                    status: "error",
                    data: "Cliente no agregado"
                });
            }
        } catch(error){
            res.status(204).send({
                status: "error",
                data: "Ha ocurrido un error",
                messages: error
            });
        }
    }
}
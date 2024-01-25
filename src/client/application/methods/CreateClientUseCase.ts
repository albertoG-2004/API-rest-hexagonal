import { Client } from "../../domain/entity/Client";
import { ClientRepository } from "../../domain/interface/ClientRepository";

export class CreateClientUseCase {
    constructor (readonly clientReposiroty: ClientRepository) {}

    async run(
        nombre: string,
        apPaterno: string,
        apMaterno: string,
        edad: number,
        celular: string 
    ): Promise<Client | null> {
        try {
            const client = await this.clientReposiroty.createClient(
                nombre,
                apPaterno,
                apMaterno,
                edad,
                celular
            );
            return client;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}
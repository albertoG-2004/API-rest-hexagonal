import { Client } from "../entity/Client";

export interface ClientRepository {
    getAll(): Promise<Client[] | null>;
    createClient(
        nombre: string,
        apPaterno: string,
        apMaterno: string,
        edad: number,
        celular: string 
    ): Promise<Client | null>;
}
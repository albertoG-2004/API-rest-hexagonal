import { Client } from "../../domain/entity/Client";
import { NotificationNewClient } from "../../infrastructure/servicesRabbitMQ/NotificationNewClient";

export class NotificationNewClientUseCase{
    constructor(readonly serviceNotifications: NotificationNewClient) {}

    async run(client: Client){
        await this.serviceNotifications.sendNotification(client);
    }
}
import { Client } from "../../domain/entity/Client";
import INotificationNewClient from "../../domain/sevices/INotificationNewClient";
import amqplib from 'amqplib';

export class NotificationNewClient implements INotificationNewClient{
    private options: any;
    private url: any;
    private exch: any;
    
    constructor() {
        this.options = {
            username: process.env.AMQP_USERNAME,
            password: process.env.AMQP_PASS,
            port: process.env.AMQP_PORT
        };
        this.url = process.env.AMQP_URL_EC2;
        this.exch = process.env.EXCHANGE_EC2;
    }
    async sendNotification(client: Client): Promise<boolean> {
        const conn = await amqplib.connect(this.url, this.options);
        const channel = await conn.createChannel();
        const status = await channel.publish(this.exch,'',Buffer.from('Notification'))
        console.log(status);
        return status
    }
}
import express from 'express';
import morgan from 'morgan';
import signale from 'signale';
import * as dotenv from "dotenv";
dotenv.config();
import { clientRouter } from './client/infrastructure/route/ClientRouter';
import { employeeRouter } from './employee/infrastructure/route/EmployeeRouter';

const app = express();

app.use(express.json())
app.use(morgan("dev"))

const port: string | undefined = process.env.PORT;

app.use("/clients", clientRouter);
app.use("/employees", employeeRouter);

app.listen(port, ()=>{
    signale.success("server running in port: "+port)
})
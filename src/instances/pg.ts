import { Sequelize } from 'sequelize'; 
import dotenv from 'dotenv';

dotenv.config();

export const sequelizePG = new Sequelize(
    process.env.PG_DB as string,
    process.env.PG_USER as string,
    process.env.PG_PASSWORD as string,
    {
        dialect: 'postgres',
        host: process.env.PG_HOST,
        port: parseInt(process.env.PG_PORT as string),
        dialectOptions: {
            ssl: {
              require: true,
              rejectUnauthorized: false
            }
        }
    }
);
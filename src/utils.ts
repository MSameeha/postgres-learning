import { Client } from 'pg';
import dotenv from "dotenv";

dotenv.config();
export async function getClient() {
    const client = new Client(process.env.POSTGRES_URL);
    await client.connect();
    return client;
}
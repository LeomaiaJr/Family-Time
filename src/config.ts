import neo4j from 'neo4j-driver';
import dotenv from 'dotenv';
dotenv.config();

const URI = process.env.NEO4J_DB_URL;
const USER = process.env.NEO4J_DB_USER;
const PASSWORD = process.env.NEO4J_DB_PASSWORD;

export const driver = neo4j.driver(URI!, neo4j.auth.basic(USER!, PASSWORD!));

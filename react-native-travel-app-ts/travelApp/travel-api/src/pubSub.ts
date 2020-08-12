import { PostgresPubSub } from "graphql-postgres-subscriptions";
import { Client } from "pg";

const DATABASE_URL = process.env.DATABASE_URL || "postgres";
console.log(DATABASE_URL)
const client = new Client({
  connectionString: DATABASE_URL,
  ssl: process.env.DATABASE_URL ? true : false,
});
console.log(client)
client.connect();

const pubSub = new PostgresPubSub({ client });

export default pubSub;

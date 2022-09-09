import dotenv from "dotenv";
import {MongoClient} from "mongodb";

dotenv.config();
const mongoClient = new MongoClient(process.env.MONGO_URI);

await mongoClient.connect();
export const DB = mongoClient.db(process.env.DATABASE);

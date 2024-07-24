import knex from "knex";
import knexFile from "../knexfile";

type Environments = "development" | "production";

const enviroment = (process.env.NODE_ENV as Environments) || "development";

const configKnex = knex(knexFile[enviroment]);

export default configKnex;
import knex from "knex";
import knexFile from "../knexfile";

type Environments = "development" | "production";

const enviroment = (process.env.NODE_ENV as Environments) || "development";

// informa se nossa conexão será desenvolvimento ou produção
const configKnex = knex(knexFile[enviroment]);

export default configKnex;

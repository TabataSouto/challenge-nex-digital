// Update with your config settings.
import "dotenv/config.js";
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

//  configuração para conexão com banco de dados
export default {
  development: {
    client: "mysql2",
    connection: {
      host: "127.0.0.1",
      port: 3306,
      user: "root",
      password: "root",
      database: "digital_nex_challenge",
    },
    migrations: {
      directory: "./database/migrations",
    },
  },
  production: {
    client: "mysql2",
    connection: {
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_NAME,
    },
    migrations: {
      directory: "./database/migrations",
    },
  },
};

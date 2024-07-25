import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("transactions", (table) => {
    table.increments("id").primary();
    table.string("cpf").notNullable();
    table.string("description").notNullable();
    table.date("transaction_date").notNullable();
    table.decimal("points_value", 10, 3).notNullable();
    table.decimal("amount_value", 10, 2).notNullable();
    table.string("status").notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {}
